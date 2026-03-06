import fs from "fs";

const dataset = fs.readFileSync("./data/embedded_dataset.json");

console.log("Uploading dataset to Shelby storage...");

console.log("Dataset size:", dataset.length, "bytes");

console.log("Upload simulated (Shelby SDK placeholder)");