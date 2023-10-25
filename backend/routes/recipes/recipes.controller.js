const categoryListHandler = async (req, res, next) => {
  try {
    return res.status(200).json({
      message: "TEST",
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  categoryListHandler,
};
