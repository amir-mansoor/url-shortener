import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  originalLink: { type: String, require: true },
  shortLink: { type: String },
  clicks: { type: Number, default: 0 },
  locations: [],
});

const linkModel = mongoose.model("Link", linkSchema);
export default linkModel;
