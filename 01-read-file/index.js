const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "text.txt");

let readableStream = fs.createReadStream(filePath, "utf-8", (err) => {
  if (err) {
    throw err;
  }
});

readableStream.on("data", function (chunk) {
  console.log(chunk);
});
