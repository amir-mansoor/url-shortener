import asyncHandler from "../middleware/asyncHandler.js";
import Link from "../models/urlModel.js";

const generateUID = () => {
  // I generate the UID from two parts here
  // to ensure the random number provide enough bits.
  var firstPart = (Math.random() * 46656) | 0;
  var secondPart = (Math.random() * 46656) | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
};

const createLink = asyncHandler(async (req, res) => {
  const { link } = req.body;

  const id = generateUID();
  const returnLink = "http://localhost:5173/" + id;

  await Link.create({
    originalLink: link,
    shortLink: returnLink,
  });
  res.status(200).json(returnLink);
});

export { createLink };
