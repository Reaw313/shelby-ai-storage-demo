import fs from "fs"

const ragResult = JSON.parse(
  fs.readFileSync("data/rag_result.json")
)

const queries = [
  "AI storage",
  "decentralized storage",
  "AI datasets"
]

console.log("Running RAG benchmark...\n")

queries.forEach((q) => {

  const score = ragResult.answer
    .toLowerCase()
    .includes(q.split(" ")[0])
    ? "PASS"
    : "CHECK"

  console.log("Query:", q)
  console.log("Result:", score)
  console.log("-----")

})

console.log("\nBenchmark complete")