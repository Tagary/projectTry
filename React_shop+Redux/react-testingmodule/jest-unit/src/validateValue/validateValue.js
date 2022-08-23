const validateValue = (value) => {
  if (value < 0 || value > 100) {
    return false;
  }
  return true;
};

console.log(validateValue(50));

module.exports = validateValue;
