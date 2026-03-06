import fs from "fs";

const dataset = JSON.parse(
  fs.readFileSync("./data/sample_dataset.json", "utf-8")
);

function fakeEmbedding(text) {
  // simple fake embedding for demo
  return text.split("").map(c => c.charCodeAt(0) % 10);
}

const embedded = dataset.map(item => ({
  ...item,
  embedding: fakeEmbedding(item.text)
}));

fs.writeFileSync(
  "./data/embedded_dataset.json",
  JSON.stringify(embedded, null, 2)
);

console.log("Embeddings generated:", embedded.length);