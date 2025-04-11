const crypto = require("crypto");

module.exports.generateRandomString = (length) => {
  return crypto.randomBytes(Math.ceil(length / 2)).toString("hex").slice(0, length);
};

module.exports.generateRandomNumber = (length) => {
  const characters = "0123456789";

  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};
