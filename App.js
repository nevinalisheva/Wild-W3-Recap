require("dotenv").config();

const message = `I am ${process.env.NAME}, wilder in ${process.env.CITY}, and I love ${process.env.LANGUAGE}`;
console.log(message);
