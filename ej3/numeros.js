const Logger = require("logplease");
const logger = Logger.create("utils");

const esPar = (num) => {
  if (num % 2 == 0) {
    return logger.info("El número es par");
  } else {
    return logger.error("El número no es par");
  }
};
module.exports = esPar;