import fs from "fs"

const datasetsConfig = JSON.parse(
  fs.readFileSync("data/datasets.json")
)

console.log("Datasets configured:")

datasetsConfig.datasets.forEach((dataset) => {
  console.log("Loading:", dataset)

  const data = JSON.parse(fs.readFileSync(dataset))

  console.log("Records:", data.length)
})

console.log("Dataset ingestion complete")