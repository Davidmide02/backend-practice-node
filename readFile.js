const { log } = require("node:console");
const fs = require("node:fs");

const readMe= fs.readFileSync("./text.txt")
const toStringText= JSON.stringify(readMe)
console.log(toStringText);