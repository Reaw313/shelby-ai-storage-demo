import fs from "fs";

const data = fs.readFileSync("./data/embedded_dataset.json");

console.log("Uploading dataset to Shelby storage...");

setTimeout(() => {
  console.log("Upload complete (mock)");
}, 1000);