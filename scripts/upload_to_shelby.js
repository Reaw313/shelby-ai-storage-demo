import fs from "fs"

const dataset = JSON.parse(
  fs.readFileSync("data/embedded_dataset.json","utf8")
)

console.log("Preparing dataset upload to Shelby")

console.log("Objects:", dataset.length)

dataset.forEach(d=>{
  console.log("Uploading object:", d.id)
})

console.log("\nUpload simulation complete.")
console.log("Shelby global namespace ready for AI workloads.")