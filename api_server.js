import express from "express";
import { runRAG } from "./ai/rag_pipeline.js";

const app = express();
app.use(express.json());

app.post("/query", async (req,res)=>{

  const query = req.body.query;

  const result = await runRAG(query);

  res.json(result);
});

app.listen(3000, ()=>{
  console.log("Shelby AI API running on 3000");
});