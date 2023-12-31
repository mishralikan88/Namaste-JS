// object destructuring
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

let { bandName, famousSong, ...restProps } = band;
console.log(bandName); // bandName => led zepplin
console.log(restProps); // restProps => {year: 1968, anotherFamousSong: 'kashmir'}
