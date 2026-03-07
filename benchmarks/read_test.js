const fs = require("fs");

const DATASET_PATH = "./data";

function simulateReadWorkload(iterations = 1000) {
    const files = fs.readdirSync(DATASET_PATH);

    console.log("Starting simulated AI read workload...");
    console.log("Files available:", files.length);

    const start = Date.now();

    for (let i = 0; i < iterations; i++) {
        const randomFile = files[Math.floor(Math.random() * files.length)];
        fs.readFileSync(`${DATASET_PATH}/${randomFile}`);
    }

    const end = Date.now();

    console.log("Completed workload");
    console.log("Reads:", iterations);
    console.log("Time:", (end - start) + "ms");
}

simulateReadWorkload(2000);