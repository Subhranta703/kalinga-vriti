import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import User from '../models/User.js';

import nodemailer from "nodemailer";

 
// POST /api/contact
export const submitContactForm = async (req, res) => {
  console.log("inside");
  const { name, email, phone, message } = req.body;
  
  console.log(name, email, phone, message);

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.gmail.com",
    //   port: 587,
    //   secure: false,
    //   auth: {
    //     user: process.env.CONTACT_EMAIL,
    //     pass: process.env.CONTACT_EMAIL_PASS,
    //   },
    // });

    // verify SMTP connection
    
 const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_EMAIL,
    pass: process.env.BREVO_SMTP_KEY,
  },
});


    transporter.verify((err) => {
      if (err) console.log("SMTP ERROR:", err);
      else console.log("SMTP CONNECTED SUCCESSFULLY");
    });

 const mailOptions = {
  from: `"KalingaVriti Contact" <${process.env.BREVO_EMAIL}>`,
  to: process.env.BREVO_EMAIL,
  subject: "New Contact Form Submission",
  html: `
    <h2>New Inquiry From Website</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
};



    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Message sent successfully!" });

  } catch (err) {
     console.error("Contact form error:", err);
    res.status(500).json({ message: "Failed to send message" });
  }
};



 
const googleLogin = async (req, res) => {
  const { code } = req.body;
  if (!code) return res.status(400).json({ message: 'Authorization code missing' });

  try {
    // Exchange code for access token
    const tokenRes = await axios.post('https://oauth2.googleapis.com/token', {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: 'http://localhost:5173', // must match frontend
      grant_type: 'authorization_code',
    });

    const accessToken = tokenRes.data.access_token;

    // Fetch user info from Google
    const userRes = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const { email, name } = userRes.data;
    if (!email || !name) return res.status(400).json({ message: 'Invalid Google user data' });

    // Find or create user
    let user = await User.findOne({ email });

    if (!user) {
      // ✅ Create user with google: true
      user = await User.create({ name, email, google: true });
    } else if (!user.google) {
  user.google = true;
  await user.save();
}

    // Generate JWT
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.json({
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });
  } catch (err) {
    console.error('Google login error:', err.response?.data || err.message);
    res.status(500).json({ message: 'Google login failed' });
  }
};
 



const register = async (req, res) => {
  const { name, email, password } = req.body;
  if(!email || !password) return res.status(400).json({ message: 'Email and password required' });

  const existing = await User.findOne({ email });
  if(existing) return res.status(409).json({ message: 'Email already registered' });

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await User.create({ name, email, password: hash });
  const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });

  res.status(201).json({ user: { id: user._id, email: user.email, name: user.name }, token });
  // console.log(user)
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if(!user) return res.status(401).json({ message: 'Invalid credentials' });

  const isValid = await bcrypt.compare(password, user.password);
  if(!isValid) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.json({ user: { id: user._id, email: user.email, name: user.name }, token });
};


export { register, login, googleLogin };

