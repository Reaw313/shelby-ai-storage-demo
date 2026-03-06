async function test() {
  const res = await fetch("http://localhost:3000/query?q=AI storage");
  const data = await res.json();

  console.log("RAG API response:");
  console.log(data);
}

test();