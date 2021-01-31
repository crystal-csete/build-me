module.exports = {
    isValid,
  };
  
  function isValid(diner) {
    return Boolean(diner.username && diner.password && typeof diner.password === "string");
  }
  