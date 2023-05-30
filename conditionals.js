// Array containing names
let colleagues = ["Bernard Gyamfi", "Ernest Appiah", "Owuraku Sintim"];

for (let i = 0; i < colleagues.length; i++) {
  console.log(colleagues[i] + "br");
}

let score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80 && score < 90) {
  console.log("B");
} else if (score >= 70 && score < 80) {
  console.log("C");
} else {
  console.log("D");
}
