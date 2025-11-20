import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },

  password: { type: String },
  google: { type: Boolean, default: false },

  avatar: { type: String, default: "" },         // ⭐ Google avatar
  role: { type: String, default: "user" },       // ⭐ "user" | "admin"

}, { timestamps: true });

export default mongoose.model("User", UserSchema);
