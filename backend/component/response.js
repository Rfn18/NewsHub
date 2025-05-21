const response = (statusCode, data, message, res) => {
  res.status(statusCode).json({
    payload: {
      statusCode,
      data,
      message,
    },
    pagination: {
      prev: "",
      next: "",
      max: "",
    },
  });
};

module.exports = response;
