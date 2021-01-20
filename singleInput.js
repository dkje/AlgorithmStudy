const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let [a, b] = line.split(" ");
  console.log(a, b);
}).on("close", () => process.exit());
