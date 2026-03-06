\# Shelby AI Data Pipeline Prototype



\## Overview

This repository contains a prototype AI data pipeline that ingests datasets,

generates embeddings, and performs vector search for retrieval-augmented queries.



The goal is to evaluate decentralized storage solutions such as Shelby for

AI workloads that involve read-heavy dataset access patterns.



\## Architecture



Dataset ingestion → Embedding → Vector search → RAG pipeline



\## Scripts



ingest\_dataset.js – load datasets  

embed\_dataset.js – generate embeddings  

vector\_search.js – retrieve relevant data  

benchmark\_rag.js – test retrieval performance



\## Future Work



\- Integrate Shelby storage layer

\- Test distributed dataset access

\- Benchmark read-heavy workloads

## Architecture



External Dataset

&nbsp;     ↓

ingest\_dataset.js

&nbsp;     ↓

embed\_dataset.js

&nbsp;     ↓

vector\_search.js

&nbsp;     ↓

rag\_pipeline.js

&nbsp;     ↓

api\_server.js / CLI

&nbsp;     ↓

Shelby Storage

