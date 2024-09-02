import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  userId: { type: String },
  originalLink: { type: String, require: true },
  shortLink: { type: String },
  clicks: { type: Number, default: 0 },
  locations: [],
});

const Link = mongoose.model("Link", linkSchema);
export default Link;
