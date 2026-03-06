import fs from "fs";

const dataset = JSON.parse(
  fs.readFileSync("./data/embedded_dataset.json", "utf-8")
);

function similarity(a, b) {
  let score = 0;
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    score += 1 - Math.abs(a[i] - b[i]) / 10;
  }
  return score;
}

function embed(text) {
  return text.split("").map(c => c.charCodeAt(0) % 10);
}

export function search(query) {
  const q = embed(query);

  const results = dataset
    .map(item => ({
      ...item,
      score: similarity(q, item.embedding)
    }))
    .sort((a, b) => b.score - a.score);

  return results.slice(0, 3);
}