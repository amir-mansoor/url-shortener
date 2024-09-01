const notFound = (req, res, next) => {
  const error = new Error(`${req.originalUrl} - not found`);
  res.status(404).json({ msg: error });
};

export default notFound;
