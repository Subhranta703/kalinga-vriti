import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import User from '../models/User.js';

/* ---------------- GOOGLE LOGIN ---------------- */
const googleLogin = async (req, res) => {
  const { code } = req.body;
  if (!code) return res.status(400).json({ message: 'Authorization code missing' });

  try {
    const redirectURI =
      process.env.NODE_ENV === "production"
        ? process.env.GOOGLE_REDIRECT_URI_PROD
        : process.env.GOOGLE_REDIRECT_URI_DEV;

    console.log("Using redirect URI:", redirectURI);

    // Step 1: Exchange code for access token
    const tokenRes = await axios.post("https://oauth2.googleapis.com/token", {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: redirectURI,
      grant_type: "authorization_code",
    });

    const accessToken = tokenRes.data.access_token;

    // Step 2: Fetch user's Google info
    const userRes = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const { email, name, picture } = userRes.data;
    if (!email) return res.status(400).json({ message: "Invalid Google account" });

    // Step 3: Find or create user in DB
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        google: true,
        avatar: picture,     // ⭐ Save Google avatar
        role: "user"
      });
    } else {
      // update avatar on future logins
      user.google = true;
      user.avatar = picture;
      await user.save();
    }

    // Step 4: Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Step 5: Response
    return res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,   // ⭐ Return avatar
        role: user.role
      },
      token
    });

  } catch (err) {
    console.error("Google login error:", err.response?.data || err.message);
    return res.status(500).json({ message: "Google login failed" });
  }
};


/* ---------------- EMAIL/PASSWORD REGISTER ---------------- */
const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: 'Email and password required' });

  const existing = await User.findOne({ email });
  if (existing)
    return res.status(409).json({ message: 'Email already registered' });

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hash,
    avatar: "",          // still needed for UI
    role: "user"
  });

  const token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.status(201).json({
    user: { id: user._id, email: user.email, name: user.name, avatar: user.avatar, role: user.role },
    token
  });
};


/* ---------------- EMAIL/PASSWORD LOGIN ---------------- */
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user)
    return res.status(401).json({ message: 'Invalid credentials' });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid)
    return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.json({
    user: {
      id: user._id,
      email: user.email,
      name: user.name,
      avatar: user.avatar,
      role: user.role
    },
    token
  });
};


/* ---------------- EXPORTS ---------------- */
export { register, login, googleLogin };
