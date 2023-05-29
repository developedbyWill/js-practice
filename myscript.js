// Today's rates
let usdRate = 10.97; // USD to GHS exchange rate
let gbpRate = 13.53; // GBP to GHS exchange rate
let eurRate = 11.75; // EUR to GHS exchange rate

let usdAmount = 500; // Amount in USD
let gbpAmount = 700; // Amount in GBP
let eurAmount = 900; // Amount in EUR

// USD to GHS conversion
let ghsAmountUSD = usdAmount * usdRate;

// GBP to GHS conversion
let ghsAmountGBP = gbpAmount * gbpRate;

// EUR to GHS conversion
let ghsAmountEUR = eurAmount * eurRate;

// Arithmetic operations
let totalGHS = ghsAmountUSD + ghsAmountGBP + ghsAmountEUR;
let averageGHS = totalGHS / 3;

console.log("GHS amount in USD:", ghsAmountUSD);
console.log("GHS amount in GBP:", ghsAmountGBP);
console.log("GHS amount in EUR:", ghsAmountEUR);
console.log("Total GHS:", totalGHS);
console.log("Average GHS:", averageGHS);
