import http from "http"
import fs from "fs"
import url from "url"

const data = JSON.parse(
  fs.readFileSync("data/embedded_dataset.json", "utf8")
)

function search(q) {
  return data.map(d => {
    let score = 0
    const words = q.toLowerCase().split(" ")

    for (const w of words) {
      if (d.text.toLowerCase().includes(w)) score++
    }

    return { ...d, score }
  }).sort((a,b)=>b.score-a.score)
}

const server = http.createServer((req,res)=>{

  const parsed = url.parse(req.url,true)

  if(parsed.pathname === "/search"){

    const q = parsed.query.q || ""

    const results = search(q).slice(0,2)

    res.writeHead(200,{"Content-Type":"application/json"})
    res.end(JSON.stringify({
      query:q,
      results:results
    }))

  } else {

    res.writeHead(200)
    res.end("Shelby AI storage demo API")
  }

})

server.listen(3000,()=>{
  console.log("API running on http://localhost:3000")
})