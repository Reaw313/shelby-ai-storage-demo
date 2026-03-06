import express from "express";
import { askAI } from "./ai/rag_pipeline.js";

const app = express();

app.get("/ask", (req, res) => {

  const query = req.query.q || "AI storage";

  const result = askAI(query);

  res.json(result);

});

app.listen(3000, () => {

  console.log("AI API running on http://localhost:3000");

});