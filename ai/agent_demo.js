import fs from "fs"

const query = process.argv[2] || "AI storage"

const data = JSON.parse(
  fs.readFileSync("data/embedded_dataset.json", "utf8")
)

function simpleSearch(q, docs) {
  return docs.map(d => {
    let score = 0
    const words = q.toLowerCase().split(" ")

    for (const w of words) {
      if (d.text.toLowerCase().includes(w)) score++
    }

    return { ...d, score }
  }).sort((a,b) => b.score - a.score)
}

const results = simpleSearch(query, data)

console.log("\nAI Agent Response")
console.log("-----------------")
console.log("Query:", query)
console.log("")

console.log("Top Results:")

results.slice(0,2).forEach(r=>{
  console.log("-", r.text)
})

console.log("\nConclusion:")
console.log("Shelby can store and serve datasets used by AI workloads globally.")