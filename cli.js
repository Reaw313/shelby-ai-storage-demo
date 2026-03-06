import { execSync } from "child_process"

const command = process.argv[2]

if (!command) {
  console.log("Usage:")
  console.log("node cli.js ingest")
  console.log("node cli.js embed")
  console.log("node cli.js benchmark")
  process.exit()
}

if (command === "ingest") {
  execSync("node scripts/ingest_dataset.js", { stdio: "inherit" })
}

if (command === "embed") {
  execSync("node scripts/embed_dataset.js", { stdio: "inherit" })
}

if (command === "benchmark") {
  execSync("node scripts/benchmark_rag.js", { stdio: "inherit" })
}