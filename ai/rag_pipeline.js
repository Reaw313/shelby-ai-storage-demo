import { search } from "./vector_search.js";

function generateAnswer(query, docs) {

  const context = docs.map(d => d.text).join(" ");

  const answer =
`Question: ${query}

Context: ${context}

AI Answer:
Based on the dataset, Shelby provides decentralized object storage
optimized for AI data retrieval workloads.`;

  return answer;
}

export function askAI(query) {

  const docs = search(query);

  const answer = generateAnswer(query, docs);

  return {
    query,
    docs,
    answer
  };
}