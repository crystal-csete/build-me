module.exports = {
    isValid,
  };
  
  function isValid(operator) {
    return Boolean(operator.username && operator.password && typeof operator.password === "string");
  }