\# Shelby AI Dataset Retrieval Demo



Prototype AI infrastructure project exploring how decentralized storage systems like \*\*Shelby\*\* could support AI workloads that require frequent dataset retrieval.



This project simulates how AI agents access shared datasets stored in a global object storage layer and use them inside a Retrieval-Augmented Generation (RAG) pipeline.



---



\## Features



\* Dataset ingestion pipeline

\* Embedding generation

\* Vector similarity search

\* Retrieval-Augmented Generation (RAG) pipeline

\* AI agent dataset retrieval simulation

\* Read-heavy workload benchmark



---



\## Architecture



Dataset → Embedding → Vector Index → Retrieval → RAG → AI Agent



In this prototype, datasets are processed into embeddings and indexed for similarity search.

AI agents query the system, retrieve relevant data, and feed it into a RAG pipeline to generate responses.



---



\## Demo Workflow



\### 1. Upload / Prepare Dataset



```

node upload.js

```



\### 2. Start API Server



```

node api\_server.js

```



\### 3. Query Dataset



```

http://localhost:3000/search?q=ai

```



\### 4. Run AI Read Workload Simulation



```

node benchmarks/read\_test.js

```



This simulates AI agents repeatedly retrieving datasets from a shared storage layer.



---



\## Goal



The goal of this project is to explore how a decentralized storage architecture like \*\*Shelby\*\* could support AI systems that rely on:



\* large shared datasets

\* frequent read-heavy workloads

\* distributed AI agents

\* global data access



This prototype evaluates whether a global object storage model could simplify infrastructure for AI pipelines.



---



\## Roadmap



\* Shelby storage integration

\* AI retrieval API improvements

\* RAG pipeline benchmarking

\* Multi-dataset support

\* Distributed AI agent simulation



---



\## Status



Experimental prototype built to explore AI + decentralized storage infrastructure concepts inspired by the Shelby protocol architecture.



