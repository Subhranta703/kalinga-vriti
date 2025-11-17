import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import User from '../models/User.js';

const googleLogin = async (req, res) => {
  const { code } = req.body;
  if (!code) return res.status(400).json({ message: 'Authorization code missing' });

  try {
    // 🔥 Detect frontend based on environment
    const redirectURI =
      process.env.NODE_ENV === "production"
        ? process.env.GOOGLE_REDIRECT_URI_PROD  // Render deployment
        : process.env.GOOGLE_REDIRECT_URI_DEV;  // Localhost

    console.log("Using redirect URI:", redirectURI);

    // 1️⃣ Exchange code for access token
    const tokenRes = await axios.post("https://oauth2.googleapis.com/token", {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: redirectURI,
      grant_type: "authorization_code",
    });

    const accessToken = tokenRes.data.access_token;

    // 2️⃣ Fetch Google user info
    const userRes = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const { email, name } = userRes.data;
    if (!email) return res.status(400).json({ message: "Invalid Google account" });

    // 3️⃣ Find or create user
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email, google: true });
    } else if (!user.google) {
      user.google = true;
      await user.save();
    }

    // 4️⃣ Generate JWT
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });

  } catch (err) {
    console.error("Google login error:", err.response?.data || err.message);
    res.status(500).json({ message: "Google login failed" });
  }
};

export { googleLogin };
