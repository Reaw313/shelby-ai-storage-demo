import { search } from "../ai/vector_search.js";

const query = process.argv[2] || "AI storage";

const results = search(query);

console.log("Query:", query);
console.log(results);