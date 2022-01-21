const ftoc = function(fah) {
  return Math.round((fah - 32) * (5/9) * 10) / 10;
};

const ctof = function(cel) {
  return Math.round(((cel * 9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
