import fs from "fs";

const raw = JSON.parse(fs.readFileSync("./data/sample_dataset.json"));

const cleaned = raw.map(d => ({
  id: d.id,
  text: d.text.trim()
}));

fs.writeFileSync("./data/clean_dataset.json", JSON.stringify(cleaned, null, 2));

console.log("Dataset ingested:", cleaned.length);