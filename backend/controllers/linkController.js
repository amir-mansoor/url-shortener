import asyncHandler from "../middleware/asyncHandler.js";
import Link from "../models/urlModel.js";
import ShortUniqueId from "short-unique-id";

const uid = new ShortUniqueId();
const generateUID = (length = 0) => {
  // I generate the UID from two parts here
  // to ensure the random number provide enough bits.
  // var firstPart = (Math.random() * 46656) | 0;
  // var secondPart = (Math.random() * 46656) | 0;
  // firstPart = ("000" + firstPart.toString(36)).slice(-3);
  // secondPart = ("000" + secondPart.toString(36)).slice(-3);
  // return firstPart + secondPart;

  return Buffer.from(
    Math.random()
      .toString(36)
      .substring(2, 2 + length)
  )
    .toString("base64")
    .substring(0, length);
};

const createLink = asyncHandler(async (req, res) => {
  const { link, userid } = req.body;

  // const id = generateUID();
  const id = uid.randomUUID(5);

  const returnLink = process.env.MAIN_URL + id;

  await Link.create({
    originalLink: link,
    shortLink: returnLink,
    userId: userid,
  });
  res.status(200).json(returnLink);
});

const redirectUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const link = await Link.findOne({ shortLink: process.env.MAIN_URL + id });

  if (link) {
    link.clicks++;
    link.locations.push(zone);
    await link.save();

    // res.redirect(301, link.originalLink);
    res.json(link.originalLink);
  } else {
    res.status(400);
    res.json({ msg: "There was an error while redirecting you" });
  }
});

export { createLink, redirectUser };
