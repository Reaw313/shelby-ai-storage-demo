import { askAI } from "../ai/rag_pipeline.js";

const query = process.argv[2] || "AI storage";

const result = askAI(query);

console.log(JSON.stringify(result, null, 2));