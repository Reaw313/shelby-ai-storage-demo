import fs from "fs"

const metadata = JSON.parse(
  fs.readFileSync("./data/datasets_metadata.json")
)

export function routeDataset(query) {

  const q = query.toLowerCase()

  const matches = metadata.datasets.filter(ds =>
    ds.tags.some(tag => q.includes(tag))
  )

  if (matches.length === 0) {
    return metadata.datasets[0]
  }

  return matches[0]
}

const query = process.argv[2] || "AI storage"

const dataset = routeDataset(query)

console.log("Query:", query)
console.log("Selected dataset:", dataset.name)
console.log("Description:", dataset.description)