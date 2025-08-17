const path = require("path");
const fs = require("fs");
// console.log(process.argv);
const inputArgument = process.argv.slice(2);

const text = inputArgument.join(" ");
const time = new Date().toLocaleString();
const msg = `${text} | ${time}\n`;


if (!msg) {
  console.log("❌ No input provided");
  console.log("Example: node index.js Hello World");
  process.exit(1);
} else {
  //   console.log(inputArgument);
  console.log("✅ Input received:");
  const filePath = path.join(__dirname, "log.txt");
  fs.appendFile(filePath, msg, () => {
    console.log("✅ Message added to log.txt");
  });
  console.log(filePath);
}
