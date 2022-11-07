const fs = require("fs");
const path = require("path");
const readline = require("readline");

const filePath = path.join(__dirname, "text.txt");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const textFile = fs.createWriteStream(filePath, "utf-8", (err) => {
  if (err) {
    throw err;
  }
});

function writeTextFile() {
  rl.question("Write some text, please: \n", (text) => {
    if (text === "exit") {
      rl.close();
      return;
    }

    textFile.write(text + "\n", (err) => {
      if (err) {
        console.log(err.message);
      } else writeTextFile();
    });
  });
}

rl.on("close", () => {
  console.log("Thank you. Have a nice day!");
});

writeTextFile();
