import fs from "fs";

const datasetPath = "./data/sample_dataset.json";

function loadDataset() {
    const raw = fs.readFileSync(datasetPath);
    const data = JSON.parse(raw);
    return data;
}

function main() {
    const dataset = loadDataset();

    console.log("Loaded dataset:");
    console.log(dataset);

    console.log("Total records:", dataset.length);
}

main();