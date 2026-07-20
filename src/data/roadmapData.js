export const roadmapMeta = {
  "lastRevised": "2026-07-20",
  "totalItems": 1157,
  "dayCountSourceOfTruth": "computed from items, not hardcoded",
  "version": "2.0-audit-fix"
};

export const roadmapData = [
  {
    "id": 1,
    "title": "System Design & Architecture",
    "days": 119,
    "color": "cyan",
    "phases": [
      {
        "id": "1-1",
        "title": "FOUNDATIONS OF DISTRIBUTED SYSTEMS",
        "days": "Days 1–20",
        "items": [
          {
            "topic": "Prereqs: networking, one backend language, basic SQL",
            "priority": "🔴 P0",
            "tasks": "Write a note explaining IP/ports, and a script hitting a local server on a given port",
            "achievement": "Working Prereqs: networking, one backend language, basic SQL demo'd live; handles at least 2 edge cases without reference",
            "day": 1,
            "estimatedHours": 1.5,
            "resource": "PostgreSQL Official Docs"
          },
          {
            "topic": "Monolith vs Microservices, SPOF, coupling",
            "priority": "🟡 P1",
            "tasks": "1-page comparison doc with 3 real examples of each",
            "achievement": "Can explain Monolith vs Microservices, SPOF, coupling clearly to a peer and answer follow-up questions without reference",
            "day": 2,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Vertical vs Horizontal scaling",
            "priority": "🟡 P1",
            "tasks": "Diagram showing scale-up vs scale-out with cost/limits",
            "achievement": "Correct comparison of Vertical vs Horizontal scaling with 5+ dimensions; justify a choice for a given scenario",
            "day": 3,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Networking: TCP/UDP, OSI model",
            "priority": "🔴 P0",
            "tasks": "Table comparing TCP vs UDP use cases (video call, banking, DNS)",
            "achievement": "Correct comparison of Networking: TCP/UDP, OSI model with 5+ dimensions; justify a choice for a given scenario",
            "day": 4,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "DNS resolution",
            "priority": "🟡 P1",
            "tasks": "Step-by-step written walkthrough of typing google.com → page load",
            "achievement": "Can explain DNS resolution clearly to a peer and answer follow-up questions without reference",
            "day": 5,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Load Balancers: L4 vs L7, algorithms",
            "priority": "🔴 P0",
            "tasks": "Diagram placing a load balancer + pick correct algorithm for 3 scenarios",
            "achievement": "Can explain Load Balancers: L4 vs L7, algorithms clearly to a peer and answer follow-up questions without reference",
            "day": 6,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "Active recall of days 1–6, clear backlog",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 7,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Consistent Hashing (theory + build)",
            "priority": "🟡 P1",
            "tasks": "Implement a working hash ring in Python/Java; test add/remove node",
            "achievement": "Working Consistent Hashing (theory + build) demo'd live; handles at least 2 edge cases without reference",
            "day": 8,
            "estimatedHours": 2.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Reverse vs Forward Proxy",
            "priority": "🟡 P1",
            "tasks": "Explain Nginx use case in your own words",
            "achievement": "Whiteboard Reverse vs Forward Proxy from memory; answer 3 follow-up questions correctly",
            "day": 9,
            "estimatedHours": 1.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Caching strategies (Cache-Aside, Read/Write-Through/Back)",
            "priority": "🔴 P0",
            "tasks": "Pick correct strategy for 3 given workloads, justify",
            "achievement": "Can explain Caching strategies (Cache-Aside, Read/Write-Through/Back) clearly to a peer and answer follow-up questions without reference",
            "day": 10,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Cache eviction (LRU, LFU, FIFO)",
            "priority": "🔴 P0",
            "tasks": "Code a working LRU cache from scratch",
            "achievement": "Can explain Cache eviction (LRU, LFU, FIFO) clearly to a peer and answer follow-up questions without reference",
            "day": 11,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "CDNs (Push vs Pull)",
            "priority": "🟡 P1",
            "tasks": "Design a static asset pipeline using CloudFront/Cloudflare",
            "achievement": "Complete design for CDNs (Push vs Pull) with trade-offs documented; survives 5-minute peer critique",
            "day": 12,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "CAP Theorem",
            "priority": "🔴 P0",
            "tasks": "Categorize 5 real databases as CP or AP with reasoning",
            "achievement": "Can explain CAP Theorem clearly to a peer and answer follow-up questions without reference",
            "day": 13,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 14,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "PACELC Theorem",
            "priority": "🟡 P1",
            "tasks": "Use PACELC to explain DynamoDB vs MongoDB config differences",
            "achievement": "Whiteboard PACELC Theorem from memory; answer 3 follow-up questions correctly",
            "day": 15,
            "estimatedHours": 1.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Consensus: Paxos & Raft",
            "priority": "🟡 P1",
            "tasks": "Explain leader election + log replication in your own words/diagram",
            "achievement": "Whiteboard Consensus: Paxos & Raft from memory; answer 3 follow-up questions correctly",
            "day": 16,
            "estimatedHours": 1.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Data Partitioning & Sharding",
            "priority": "🔴 P0",
            "tasks": "Design a shard key strategy avoiding hot spots for a given dataset",
            "achievement": "Complete design for Data Partitioning & Sharding with trade-offs documented; survives 5-minute peer critique",
            "day": 17,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Database Replication (Master-Slave, Multi-Leader, Leaderless)",
            "priority": "🔴 P0",
            "tasks": "Compare sync vs async replication trade-offs, pick one for a use case",
            "achievement": "Correct comparison of Database Replication (Master-Slave, Multi-Leader, Leaderless) with 5+ dimensions; justify a choice for a given scenario",
            "day": 18,
            "estimatedHours": 3.5,
            "resource": "PostgreSQL Official Docs"
          },
          {
            "topic": "Message Queues: Pub/Sub vs P2P (Kafka vs RabbitMQ)",
            "priority": "🟡 P1",
            "tasks": "Diagram decoupling 2 services with a broker",
            "achievement": "Can explain Message Queues: Pub/Sub vs P2P (Kafka vs RabbitMQ) clearly to a peer and answer follow-up questions without reference",
            "day": 19,
            "estimatedHours": 3.5,
            "resource": "Kafka: The Definitive Guide (Shapira)"
          },
          {
            "topic": "API Design: REST vs RPC/gRPC, WebSockets/SSE/Long Polling",
            "priority": "🔴 P0",
            "tasks": "Design REST endpoints + pick real-time protocol for chat app",
            "achievement": "Complete design for API Design: REST vs RPC/gRPC, WebSockets/SSE/Long Polling with trade-offs documented; survives 5-minute peer critique",
            "day": 20,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          }
        ],
        "dependencies": [
          "4-3"
        ]
      },
      {
        "id": "1-2",
        "title": "DATABASES & DATA MANAGEMENT",
        "days": "Days 21–45",
        "items": [
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 21,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "RDBMS vs NoSQL, ACID vs BASE",
            "priority": "🟡 P1",
            "tasks": "Choose Postgres vs MongoDB for 3 given business cases",
            "achievement": "Correct comparison of RDBMS vs NoSQL, ACID vs BASE with 5+ dimensions; justify a choice for a given scenario",
            "day": 22,
            "estimatedHours": 3.5,
            "resource": "PostgreSQL Official Docs"
          },
          {
            "topic": "Database Indexes (B-Trees, Composite, Covering)",
            "priority": "🟡 P1",
            "tasks": "Optimize a given slow SQL query with an index",
            "achievement": "Can explain Database Indexes (B-Trees, Composite, Covering) clearly to a peer and answer follow-up questions without reference",
            "day": 23,
            "estimatedHours": 3.5,
            "resource": "PostgreSQL Official Docs"
          },
          {
            "topic": "Key-Value Stores (Redis/Memcached)",
            "priority": "🔴 P0",
            "tasks": "Design a leaderboard + pub/sub feature using Redis",
            "achievement": "Complete design for Key-Value Stores (Redis/Memcached) with trade-offs documented; survives 5-minute peer critique",
            "day": 24,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Document Stores (MongoDB)",
            "priority": "🟡 P1",
            "tasks": "Model a blog with nested comments as a document schema",
            "achievement": "Can explain Document Stores (MongoDB) clearly to a peer and answer follow-up questions without reference",
            "day": 25,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Wide-Column Stores (Cassandra)",
            "priority": "🔴 P0",
            "tasks": "Design a query-driven data model with partition/clustering keys",
            "achievement": "Complete design for Wide-Column Stores (Cassandra) with trade-offs documented; survives 5-minute peer critique",
            "day": 26,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 27,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Graph Databases (Neo4j)",
            "priority": "🟡 P1",
            "tasks": "Identify one problem needing a graph DB instead of SQL JOINs",
            "achievement": "Can explain Graph Databases (Neo4j) clearly to a peer and answer follow-up questions without reference",
            "day": 28,
            "estimatedHours": 3.5,
            "resource": "PostgreSQL Official Docs"
          },
          {
            "topic": "Search Engines (Elasticsearch, Inverted Index)",
            "priority": "🔴 P0",
            "tasks": "Design a search feature for a product catalog",
            "achievement": "Complete design for Search Engines (Elasticsearch, Inverted Index) with trade-offs documented; survives 5-minute peer critique",
            "day": 29,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Time-Series DBs, Vector DBs (Pinecone/Milvus)",
            "priority": "🔴 P0",
            "tasks": "Explain why relational DB fails for IoT metrics; explain vector search",
            "achievement": "Whiteboard Time-Series DBs, Vector DBs (Pinecone/Milvus) from memory; answer 3 follow-up questions correctly",
            "day": 30,
            "estimatedHours": 1.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Blob/Object Storage (S3)",
            "priority": "🟡 P1",
            "tasks": "Design secure direct-to-S3 upload flow with pre-signed URLs",
            "achievement": "Complete design for Blob/Object Storage (S3) with trade-offs documented; survives 5-minute peer critique",
            "day": 31,
            "estimatedHours": 3.5,
            "resource": "LangChain docs + python.langchain.com"
          },
          {
            "topic": "Transaction Isolation Levels",
            "priority": "🟢 P2",
            "tasks": "Explain dirty reads/phantom reads and how each level prevents them",
            "achievement": "Whiteboard Transaction Isolation Levels from memory; answer 3 follow-up questions correctly",
            "day": 32,
            "estimatedHours": 1.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 33,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Concurrency Control (Optimistic vs Pessimistic)",
            "priority": "🔴 P0",
            "tasks": "Implement optimistic locking to prevent lost updates",
            "achievement": "Working Concurrency Control (Optimistic vs Pessimistic) demo'd live; handles at least 2 edge cases without reference",
            "day": 34,
            "estimatedHours": 2.5,
            "resource": "Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Distributed Transactions: 2PC vs Saga Pattern",
            "priority": "🟢 P2",
            "tasks": "Design an Order-Payment-Inventory saga (choreography)",
            "achievement": "Complete design for Distributed Transactions: 2PC vs Saga Pattern with trade-offs documented; survives 5-minute peer critique",
            "day": 35,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "CDC (Debezium), Event Sourcing, CQRS",
            "priority": "🟡 P1",
            "tasks": "Design an audit-heavy ledger using event sourcing + CQRS",
            "achievement": "Complete design for CDC (Debezium), Event Sourcing, CQRS with trade-offs documented; survives 5-minute peer critique",
            "day": 36,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Database Migration Strategies (Expand-Contract)",
            "priority": "🔴 P0",
            "tasks": "Plan a zero-downtime column rename on a live table",
            "achievement": "Can explain Database Migration Strategies (Expand-Contract) clearly to a peer and answer follow-up questions without reference",
            "day": 37,
            "estimatedHours": 3.5,
            "resource": "PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 38,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Consistent Hashing for sharding, Quorum (W+R>N)",
            "priority": "🔴 P0",
            "tasks": "Calculate quorum config for strong vs eventual consistency",
            "achievement": "Correct comparison of Consistent Hashing for sharding, Quorum (W+R>N) with 5+ dimensions; justify a choice for a given scenario",
            "day": 39,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Polyglot Persistence",
            "priority": "🟡 P1",
            "tasks": "Design a system using 3+ DB types (SQL+Redis+ES) for an e-commerce catalog",
            "achievement": "Complete design for Polyglot Persistence with trade-offs documented; survives 5-minute peer critique",
            "day": 40,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "**Buffer**",
            "priority": "-",
            "tasks": "Catch up / mock quiz on Phase 2",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 41,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "📝 Cross-Track Interleaved Recall",
            "priority": "-",
            "tasks": "Pick 1 random topic each from 2 other roadmaps you've covered. Explain each from memory, then verify.",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 42,
            "estimatedHours": 1,
            "resource": "Your own notes from other roadmap tracks"
          },
          {
            "topic": "**Phase 2 Review**",
            "priority": "-",
            "tasks": "Design full DB architecture for a complex domain (justify every choice)",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 45,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": [
          "4-3"
        ]
      },
      {
        "id": "1-3",
        "title": "MICROSERVICES & RESILIENCY PATTERNS",
        "days": "Days 46–75",
        "items": [
          {
            "topic": "Service Discovery (Consul, Eureka, ZooKeeper)",
            "priority": "🔴 P0",
            "tasks": "Explain client-side vs server-side discovery with a diagram",
            "achievement": "Whiteboard Service Discovery (Consul, Eureka, ZooKeeper) from memory; answer 3 follow-up questions correctly",
            "day": 46,
            "estimatedHours": 1.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "API Gateway Pattern",
            "priority": "🔴 P0",
            "tasks": "Design a unified entry point (routing, auth, rate limit, aggregation)",
            "achievement": "Complete design for API Gateway Pattern with trade-offs documented; survives 5-minute peer critique",
            "day": 47,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "BFF (Backend for Frontend)",
            "priority": "🟢 P2",
            "tasks": "Decide when to split one gateway into mobile/web BFFs",
            "achievement": "Can explain BFF (Backend for Frontend) clearly to a peer and answer follow-up questions without reference",
            "day": 48,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 49,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Circuit Breaker Pattern",
            "priority": "🔴 P0",
            "tasks": "Implement a basic circuit breaker (Closed/Open/Half-Open)",
            "achievement": "Working Circuit Breaker Pattern demo'd live; handles at least 2 edge cases without reference",
            "day": 50,
            "estimatedHours": 2.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Bulkhead Pattern",
            "priority": "🔴 P0",
            "tasks": "Combine circuit breaker + bulkhead in one resilient service design",
            "achievement": "Complete design for Bulkhead Pattern with trade-offs documented; survives 5-minute peer critique",
            "day": 51,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Retry & Timeout Strategies (backoff + jitter)",
            "priority": "🔴 P0",
            "tasks": "Implement safe retry logic avoiding thundering herd",
            "achievement": "Working Retry & Timeout Strategies (backoff + jitter) demo'd live; handles at least 2 edge cases without reference",
            "day": 52,
            "estimatedHours": 2.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 53,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Kafka Deep Dive (Topics, Partitions, Consumer Groups)",
            "priority": "🟡 P1",
            "tasks": "Design a high-throughput pipeline using partitions for parallelism",
            "achievement": "Complete design for Kafka Deep Dive (Topics, Partitions, Consumer Groups) with trade-offs documented; survives 5-minute peer critique",
            "day": 54,
            "estimatedHours": 3.5,
            "resource": "Kafka: The Definitive Guide (Shapira)"
          },
          {
            "topic": "Dead Letter Queues",
            "priority": "🔴 P0",
            "tasks": "Design error-handling flow for failed Kafka/SQS messages",
            "achievement": "Complete design for Dead Letter Queues with trade-offs documented; survives 5-minute peer critique",
            "day": 55,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Idempotency in APIs",
            "priority": "🔴 P0",
            "tasks": "Implement an Idempotency-Key system for payment retries",
            "achievement": "Working Idempotency in APIs demo'd live; handles at least 2 edge cases without reference",
            "day": 56,
            "estimatedHours": 2.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Distributed Locks (Redlock, ZooKeeper)",
            "priority": "🟡 P1",
            "tasks": "Coordinate a safe distributed job execution across services",
            "achievement": "Can explain Distributed Locks (Redlock, ZooKeeper) clearly to a peer and answer follow-up questions without reference",
            "day": 57,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Transactional Outbox Pattern",
            "priority": "🔴 P0",
            "tasks": "Design outbox to guarantee at-least-once delivery",
            "achievement": "Complete design for Transactional Outbox Pattern with trade-offs documented; survives 5-minute peer critique",
            "day": 58,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 59,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "AuthN/AuthZ (Basic, Session, Token)",
            "priority": "🔴 P0",
            "tasks": "Pick correct auth mechanism for monolith vs distributed API",
            "achievement": "Correct comparison of AuthN/AuthZ (Basic, Session, Token) with 5+ dimensions; justify a choice for a given scenario",
            "day": 60,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "JWT structure & risks",
            "priority": "🔴 P0",
            "tasks": "Explain JWT revocation difficulty; implement JWT verify",
            "achievement": "Working JWT structure & risks demo'd live; handles at least 2 edge cases without reference",
            "day": 61,
            "estimatedHours": 2.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "OAuth2 & OIDC",
            "priority": "🟢 P2",
            "tasks": "Diagram OAuth2 login-via-Google flow end to end",
            "achievement": "Can explain OAuth2 & OIDC clearly to a peer and answer follow-up questions without reference",
            "day": 62,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 63,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Distributed Tracing (OpenTelemetry, Jaeger)",
            "priority": "🟢 P2",
            "tasks": "Trace a request across 3 mock services with span propagation",
            "achievement": "Pass a timed mock interview round on Distributed Tracing (OpenTelemetry, Jaeger) with no hints",
            "day": 64,
            "estimatedHours": 2,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Metrics & Observability (RED/USE methods)",
            "priority": "🟢 P2",
            "tasks": "Design a monitoring dashboard strategy for a new microservice",
            "achievement": "Complete design for Metrics & Observability (RED/USE methods) with trade-offs documented; survives 5-minute peer critique",
            "day": 65,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Hands-on: Prometheus + Grafana",
            "priority": "🟡 P1",
            "tasks": "Scrape dummy app metrics, build one working dashboard",
            "achievement": "Working Hands-on: Prometheus + Grafana demo'd live; handles at least 2 edge cases without reference",
            "day": 66,
            "estimatedHours": 2.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Log Aggregation (ELK Stack)",
            "priority": "🔴 P0",
            "tasks": "Explain why never log to local files in Docker; design centralized logging",
            "achievement": "Whiteboard Log Aggregation (ELK Stack) from memory; answer 3 follow-up questions correctly",
            "day": 67,
            "estimatedHours": 1.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 68,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "GraphQL vs REST",
            "priority": "🔴 P0",
            "tasks": "Decide GraphQL vs multiple REST endpoints for a complex dashboard",
            "achievement": "Correct comparison of GraphQL vs REST with 5+ dimensions; justify a choice for a given scenario",
            "day": 69,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "gRPC & Protobuf",
            "priority": "🟡 P1",
            "tasks": "Design internal service-to-service comms layer with gRPC",
            "achievement": "Complete design for gRPC & Protobuf with trade-offs documented; survives 5-minute peer critique",
            "day": 70,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Service Mesh (Istio: data/control plane, mTLS)",
            "priority": "🟢 P2",
            "tasks": "Explain how mesh secures services without app code changes",
            "achievement": "Whiteboard Service Mesh (Istio: data/control plane, mTLS) from memory; answer 3 follow-up questions correctly",
            "day": 71,
            "estimatedHours": 1.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 72,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Batch vs Stream Processing (Spark, Flink/Kafka Streams)",
            "priority": "🔴 P0",
            "tasks": "Design a real-time fraud detection pipeline",
            "achievement": "Complete design for Batch vs Stream Processing (Spark, Flink/Kafka Streams) with trade-offs documented; survives 5-minute peer critique",
            "day": 73,
            "estimatedHours": 3.5,
            "resource": "Kafka: The Definitive Guide (Shapira)"
          },
          {
            "topic": "Data Lakes vs Data Warehouses",
            "priority": "🟢 P2",
            "tasks": "Decide Snowflake/Redshift vs S3 Data Lake for a given case",
            "achievement": "Correct comparison of Data Lakes vs Data Warehouses with 5+ dimensions; justify a choice for a given scenario",
            "day": 74,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Security: HTTPS/TLS + OWASP Top 10",
            "priority": "🟡 P1",
            "tasks": "Explain TLS handshake; identify 3 vulnerabilities in a sample API design",
            "achievement": "Whiteboard Security: HTTPS/TLS + OWASP Top 10 from memory; answer 3 follow-up questions correctly",
            "day": 75,
            "estimatedHours": 1.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          }
        ],
        "dependencies": [
          "4-3"
        ]
      },
      {
        "id": "1-4",
        "title": "THE INTERVIEW FRAMEWORK",
        "days": "Days 76–89",
        "items": [
          {
            "topic": "PEDALS framework + requirements gathering",
            "priority": "🟡 P1",
            "tasks": "Scope \"Design Twitter\" into functional/non-functional reqs",
            "achievement": "Complete design for PEDALS framework + requirements gathering with trade-offs documented; survives 5-minute peer critique",
            "day": 76,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Back-of-envelope math (QPS, storage)",
            "priority": "🟢 P2",
            "tasks": "Build a QPS/storage calculator script from DAU input",
            "achievement": "Working Back-of-envelope math (QPS, storage) demo'd live; handles at least 2 edge cases without reference",
            "day": 77,
            "estimatedHours": 2.5,
            "resource": "LangChain docs + python.langchain.com"
          },
          {
            "topic": "API & Data Model Design",
            "priority": "🟢 P2",
            "tasks": "Draw ER diagram + REST contract for \"Design Twitter\"",
            "achievement": "Complete design for API & Data Model Design with trade-offs documented; survives 5-minute peer critique",
            "day": 78,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "High-Level Design & Bottleneck ID",
            "priority": "🟡 P1",
            "tasks": "Draw Client→LB→App→DB and mark what breaks at 100M users",
            "achievement": "Can explain High-Level Design & Bottleneck ID clearly to a peer and answer follow-up questions without reference",
            "day": 79,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Scaling Strategies (cache, shard, queue, CDN)",
            "priority": "🟡 P1",
            "tasks": "Apply fixes to the bottlenecks from Day 79",
            "achievement": "Given a broken Scaling Strategies (cache, shard, queue, CDN) scenario, identify root cause and fix within 15 minutes",
            "day": 80,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 81,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Pagination at Scale (cursor vs offset)",
            "priority": "🔴 P0",
            "tasks": "Implement cursor pagination over 1M-row dataset",
            "achievement": "Working Pagination at Scale (cursor vs offset) demo'd live; handles at least 2 edge cases without reference",
            "day": 82,
            "estimatedHours": 2.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Unique ID Generation (UUID, Snowflake)",
            "priority": "🔴 P0",
            "tasks": "Design a distributed sortable ID service",
            "achievement": "Complete design for Unique ID Generation (UUID, Snowflake) with trade-offs documented; survives 5-minute peer critique",
            "day": 83,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Designing a Key-Value Store (Dynamo/Cassandra internals)",
            "priority": "🔴 P0",
            "tasks": "Architect a distributed KV store using consistent hashing + quorum",
            "achievement": "Can explain Designing a Key-Value Store (Dynamo/Cassandra internals) clearly to a peer and answer follow-up questions without reference",
            "day": 84,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Designing a Rate Limiter (sliding window + Redis)",
            "priority": "🔴 P0",
            "tasks": "Implement sliding-window rate limiter in Redis",
            "achievement": "Working Designing a Rate Limiter (sliding window + Redis) demo'd live; handles at least 2 edge cases without reference",
            "day": 85,
            "estimatedHours": 2.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 86,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Designing a Web Crawler",
            "priority": "🔴 P0",
            "tasks": "Build a BFS crawler respecting robots.txt, limited concurrency",
            "achievement": "Working Designing a Web Crawler demo'd live; handles at least 2 edge cases without reference",
            "day": 87,
            "estimatedHours": 2.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "**Full Mock Interview: \"Design a URL Shortener\"**",
            "priority": "🟡 P1",
            "tasks": "Timed 45-min run through full PEDALS framework",
            "achievement": "Pass a timed mock interview round on **Full Mock Interview: \"Design a URL Shortener\"** with no hints",
            "day": 88,
            "estimatedHours": 2,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "**Buffer / weak-spot review**",
            "priority": "-",
            "tasks": "Fix gaps identified in mock",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 89,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": [
          "4-3"
        ]
      },
      {
        "id": "1-5",
        "title": "APPLIED SYSTEM DESIGNS",
        "days": "Days 91–114",
        "items": [
          {
            "topic": "Pastebin",
            "priority": "🟡 P1",
            "tasks": "Blob storage, metadata DB, expiration/cleanup",
            "achievement": "Can explain Pastebin clearly to a peer and answer follow-up questions without reference",
            "day": 91,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Twitter/X",
            "priority": "🟡 P1",
            "tasks": "Fan-out on write vs read, celebrity problem",
            "achievement": "Working Twitter/X demo'd live; handles at least 2 edge cases without reference",
            "day": 92,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Instagram",
            "priority": "🟡 P1",
            "tasks": "Image storage (S3+CDN), feed generation",
            "achievement": "Can explain Instagram clearly to a peer and answer follow-up questions without reference",
            "day": 93,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Dropbox/Google Drive",
            "priority": "🟡 P1",
            "tasks": "Block-level sync, delta sync, concurrent edits",
            "achievement": "Can explain Dropbox/Google Drive clearly to a peer and answer follow-up questions without reference",
            "day": 94,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "WhatsApp/Messenger",
            "priority": "🟡 P1",
            "tasks": "WebSockets, message ordering, presence, push notifs",
            "achievement": "Can explain WhatsApp/Messenger clearly to a peer and answer follow-up questions without reference",
            "day": 95,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 96,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "YouTube/Netflix",
            "priority": "🔴 P0",
            "tasks": "Transcoding pipeline, chunking, adaptive bitrate CDN",
            "achievement": "Can explain YouTube/Netflix clearly to a peer and answer follow-up questions without reference",
            "day": 97,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Uber/Lyft",
            "priority": "🟡 P1",
            "tasks": "Geospatial indexing (QuadTree/Geohash), real-time matching",
            "achievement": "Can explain Uber/Lyft clearly to a peer and answer follow-up questions without reference",
            "day": 98,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Yelp/Proximity Search",
            "priority": "🟢 P2",
            "tasks": "Read-optimized location discovery",
            "achievement": "Can explain Yelp/Proximity Search clearly to a peer and answer follow-up questions without reference",
            "day": 99,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Ticketmaster/BookMyShow",
            "priority": "🟢 P2",
            "tasks": "High concurrency, row locks, anti double-booking",
            "achievement": "Can explain Ticketmaster/BookMyShow clearly to a peer and answer follow-up questions without reference",
            "day": 100,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 101,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Typeahead/Autocomplete",
            "priority": "🟡 P1",
            "tasks": "Trie + hot-prefix caching",
            "achievement": "Given a broken Typeahead/Autocomplete scenario, identify root cause and fix within 15 minutes",
            "day": 102,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Amazon/E-Commerce",
            "priority": "🔴 P0",
            "tasks": "Cart (DynamoDB), inventory, checkout Saga",
            "achievement": "Can explain Amazon/E-Commerce clearly to a peer and answer follow-up questions without reference",
            "day": 103,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Payment Gateway",
            "priority": "🔴 P0",
            "tasks": "Idempotency, 2PC vs Saga, ACID compliance",
            "achievement": "Correct comparison of Payment Gateway with 5+ dimensions; justify a choice for a given scenario",
            "day": 104,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Google Docs (collaborative editing)",
            "priority": "🟡 P1",
            "tasks": "OT vs CRDTs",
            "achievement": "Correct comparison of Google Docs (collaborative editing) with 5+ dimensions; justify a choice for a given scenario",
            "day": 105,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 106,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Notification System",
            "priority": "🟡 P1",
            "tasks": "Fan-out queues, rate limiting, APNS/FCM/SendGrid",
            "achievement": "Can explain Notification System clearly to a peer and answer follow-up questions without reference",
            "day": 107,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Metrics/Monitoring System (Datadog-like)",
            "priority": "🟡 P1",
            "tasks": "Time-series ingestion at scale",
            "achievement": "Can explain Metrics/Monitoring System (Datadog-like) clearly to a peer and answer follow-up questions without reference",
            "day": 108,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Distributed Message Queue (Kafka internals)",
            "priority": "🟡 P1",
            "tasks": "Disk I/O, zero-copy, partition replication",
            "achievement": "Can explain Distributed Message Queue (Kafka internals) clearly to a peer and answer follow-up questions without reference",
            "day": 109,
            "estimatedHours": 3.5,
            "resource": "Kafka: The Definitive Guide (Shapira)"
          },
          {
            "topic": "Tinder",
            "priority": "🔴 P0",
            "tasks": "Geospatial matching, swipe queues, recommendations",
            "achievement": "Can explain Tinder clearly to a peer and answer follow-up questions without reference",
            "day": 110,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 111,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Slack",
            "priority": "🔴 P0",
            "tasks": "Channel architecture, live typing, message search",
            "achievement": "Can explain Slack clearly to a peer and answer follow-up questions without reference",
            "day": 112,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Stock Exchange",
            "priority": "🟢 P2",
            "tasks": "Ultra-low latency, order matching engine",
            "achievement": "Can explain Stock Exchange clearly to a peer and answer follow-up questions without reference",
            "day": 113,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "ChatGPT/LLM Inference System",
            "priority": "🟢 P2",
            "tasks": "Token streaming, KV-cache, batching",
            "achievement": "Can explain ChatGPT/LLM Inference System clearly to a peer and answer follow-up questions without reference",
            "day": 114,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          }
        ],
        "dependencies": [
          "4-3"
        ]
      },
      {
        "id": "1-6",
        "title": "FINAL PREP & MOCK INTERVIEWS",
        "days": "Days 115–119",
        "items": [
          {
            "topic": "System Design Anti-Patterns",
            "priority": "🟡 P1",
            "tasks": "Critique 3 over-engineered designs; propose simpler alternatives",
            "achievement": "Complete design for System Design Anti-Patterns with trade-offs documented; survives 5-minute peer critique",
            "day": 115,
            "estimatedHours": 3.5,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Mock Interview 1 (Design Uber) + Mock Interview 2 (Design Ticketmaster)",
            "priority": "🔴 P0",
            "tasks": "2× 45-min timed runs, self-graded",
            "achievement": "Pass a timed mock interview round on Mock Interview 1 (Design Uber) + Mock Interview 2 (Design Ticketmaster) with no hints",
            "day": 116,
            "estimatedHours": 2,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Mock Interview 3 (Surprise topic) + Mock Interview 4 (Hard mode: Stock Exchange)",
            "priority": "🔴 P0",
            "tasks": "2× 45-min timed runs",
            "achievement": "Pass a timed mock interview round on Mock Interview 3 (Surprise topic) + Mock Interview 4 (Hard mode: Stock Exchange) with no hints",
            "day": 117,
            "estimatedHours": 2,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Weakness Refinement",
            "priority": "🟢 P2",
            "tasks": "Revisit 2–3 weakest concepts flagged from mocks",
            "achievement": "Pass a timed mock interview round on Weakness Refinement with no hints",
            "day": 118,
            "estimatedHours": 2,
            "resource": "DDIA (Kleppmann) + System Design Primer (GitHub)"
          },
          {
            "topic": "Final Review & Whiteboard Practice",
            "priority": "-",
            "tasks": "Review cheat sheets/back-of-envelope math; whiteboard 2 designs by hand",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 119,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": [
          "4-3"
        ]
      }
    ]
  },
  {
    "id": 2,
    "title": "Spring Boot & Microservices",
    "days": 165,
    "color": "emerald",
    "phases": [
      {
        "id": "2-1",
        "title": "SPRING FRAMEWORK & REST APIs",
        "days": "Days 1–39",
        "items": [
          {
            "topic": "IoC & Dependency Injection",
            "priority": "🟡 P1",
            "tasks": "Write a pure-Java orchestrator, then convert it to `@Component`/`@Autowired`",
            "achievement": "Working IoC & Dependency Injection demo'd live; handles at least 2 edge cases without reference",
            "day": 1,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Spring Bean Lifecycle & Scopes",
            "priority": "🔴 P0",
            "tasks": "Implement `@PostConstruct`/`@PreDestroy` for a resource-managing bean",
            "achievement": "Working Spring Bean Lifecycle & Scopes demo'd live; handles at least 2 edge cases without reference",
            "day": 2,
            "estimatedHours": 2.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Aspect-Oriented Programming (AOP)",
            "priority": "🟡 P1",
            "tasks": "Write a custom `@LogExecutionTime` annotation with an `@Around` aspect",
            "achievement": "Working Aspect-Oriented Programming (AOP) demo'd live; handles at least 2 edge cases without reference",
            "day": 3,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Introduction to Spring Boot & Auto-Configuration",
            "priority": "🟡 P1",
            "tasks": "Initialize via Spring Initializr; explain `@SpringBootApplication`",
            "achievement": "Whiteboard Introduction to Spring Boot & Auto-Configuration from memory; answer 3 follow-up questions correctly",
            "day": 4,
            "estimatedHours": 1.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 5,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Native Compilation (GraalVM/AOT)",
            "priority": "🟡 P1",
            "tasks": "Build a native executable; compare startup time vs JVM JAR",
            "achievement": "Working Native Compilation (GraalVM/AOT) demo'd live; handles at least 2 edge cases without reference",
            "day": 6,
            "estimatedHours": 2.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Configuration Management (`application.yml`, `@ConfigurationProperties`, `@Profile`)",
            "priority": "🟡 P1",
            "tasks": "Bind config to a POJO; switch dev/prod profiles",
            "achievement": "Can explain Configuration Management (`application.yml`, `@ConfigurationProperties`, `@Profile`) clearly to a peer and answer follow-up questions without reference",
            "day": 7,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Spring Boot Actuator + Prometheus/Grafana",
            "priority": "🔴 P0",
            "tasks": "Enable actuator, scrape metrics, build one Grafana dashboard",
            "achievement": "Working Spring Boot Actuator + Prometheus/Grafana demo'd live; handles at least 2 edge cases without reference",
            "day": 8,
            "estimatedHours": 2.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Virtual Threads + Spring Boot",
            "priority": "🔴 P0",
            "tasks": "Load-test a blocking endpoint with virtual threads vs platform threads",
            "achievement": "Correct comparison of Virtual Threads + Spring Boot with 5+ dimensions; justify a choice for a given scenario",
            "day": 9,
            "estimatedHours": 3.5,
            "resource": "Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 10,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Spring Web MVC Fundamentals",
            "priority": "🟡 P1",
            "tasks": "Build a `@RestController`; explain `DispatcherServlet`",
            "achievement": "Working Spring Web MVC Fundamentals demo'd live; handles at least 2 edge cases without reference",
            "day": 11,
            "estimatedHours": 2.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "RESTful API Design (path/query params, HTTP verbs)",
            "priority": "🔴 P0",
            "tasks": "Design REST endpoints for a \"Design Twitter\"-style resource",
            "achievement": "Complete design for RESTful API Design (path/query params, HTTP verbs) with trade-offs documented; survives 5-minute peer critique",
            "day": 12,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Idempotency Keys for Unsafe Operations",
            "priority": "🟡 P1",
            "tasks": "Implement Idempotency-Key header pattern for a payment endpoint",
            "achievement": "Working Idempotency Keys for Unsafe Operations demo'd live; handles at least 2 edge cases without reference",
            "day": 13,
            "estimatedHours": 2.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "API Versioning (URI & Header)",
            "priority": "🟡 P1",
            "tasks": "Implement both strategies; explain compatibility trade-offs",
            "achievement": "Working API Versioning (URI & Header) demo'd live; handles at least 2 edge cases without reference",
            "day": 14,
            "estimatedHours": 2.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 15,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Swagger/OpenAPI Integration",
            "priority": "🟢 P2",
            "tasks": "Auto-generate docs for your REST API via springdoc-openapi",
            "achievement": "Can explain Swagger/OpenAPI Integration clearly to a peer and answer follow-up questions without reference",
            "day": 16,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "API Rate Limiting (Bucket4j)",
            "priority": "🔴 P0",
            "tasks": "Protect an endpoint from abuse; return rate-limit headers",
            "achievement": "Can explain API Rate Limiting (Bucket4j) clearly to a peer and answer follow-up questions without reference",
            "day": 17,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "ResponseEntity, Global Exception Handling, RFC 7807",
            "priority": "🟡 P1",
            "tasks": "Build a `@RestControllerAdvice` returning `ProblemDetail`",
            "achievement": "Working ResponseEntity, Global Exception Handling, RFC 7807 demo'd live; handles at least 2 edge cases without reference",
            "day": 18,
            "estimatedHours": 2.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "DTO Pattern + Bean Validation + MapStruct",
            "priority": "🟡 P1",
            "tasks": "Build Request/Response DTOs with `@Valid` + auto-mapping",
            "achievement": "Working DTO Pattern + Bean Validation + MapStruct demo'd live; handles at least 2 edge cases without reference",
            "day": 19,
            "estimatedHours": 2.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 20,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "File Uploads/Downloads",
            "priority": "🟡 P1",
            "tasks": "Implement `MultipartFile` upload + download endpoint",
            "achievement": "Working File Uploads/Downloads demo'd live; handles at least 2 edge cases without reference",
            "day": 21,
            "estimatedHours": 2.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Pagination & Sorting (API layer)",
            "priority": "🟡 P1",
            "tasks": "Return a structured `Page` response with metadata",
            "achievement": "Can explain Pagination & Sorting (API layer) clearly to a peer and answer follow-up questions without reference",
            "day": 22,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Content Negotiation, ETags & Conditional Requests",
            "priority": "🟡 P1",
            "tasks": "Implement XML fallback + 304-based caching",
            "achievement": "Working Content Negotiation, ETags & Conditional Requests demo'd live; handles at least 2 edge cases without reference",
            "day": 23,
            "estimatedHours": 2.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "CORS Configuration",
            "priority": "🔴 P0",
            "tasks": "Configure `WebMvcConfigurer` for a React SPA client",
            "achievement": "CORS Configuration running in a fresh environment; can reproduce setup from scratch",
            "day": 24,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 25,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Testing Controllers (`@WebMvcTest`)",
            "priority": "🟡 P1",
            "tasks": "Write MockMvc slice tests without booting the full context",
            "achievement": "Working Testing Controllers (`@WebMvcTest`) demo'd live; handles at least 2 edge cases without reference",
            "day": 26,
            "estimatedHours": 2,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "RestTemplate/WebClient + HTTP Declarative Clients",
            "priority": "🟢 P2",
            "tasks": "Call an external API using WebClient, then refactor with `@HttpExchange`",
            "achievement": "Can explain RestTemplate/WebClient + HTTP Declarative Clients clearly to a peer and answer follow-up questions without reference",
            "day": 27,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Integration Testing (`@SpringBootTest`) + Testcontainers",
            "priority": "🟡 P1",
            "tasks": "Boot full context; spin up real Postgres via Testcontainers",
            "achievement": "Can explain Integration Testing (`@SpringBootTest`) + Testcontainers clearly to a peer and answer follow-up questions without reference",
            "day": 28,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "WireMock for External API Stubbing",
            "priority": "🔴 P0",
            "tasks": "Test code that calls a third-party API without real network calls",
            "achievement": "Pass a timed mock interview round on WireMock for External API Stubbing with no hints",
            "day": 29,
            "estimatedHours": 2,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 30,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Dockerizing Spring Boot",
            "priority": "🟡 P1",
            "tasks": "Write a multi-stage Dockerfile; optimize layer caching",
            "achievement": "Working Dockerizing Spring Boot demo'd live; handles at least 2 edge cases without reference",
            "day": 31,
            "estimatedHours": 3.5,
            "resource": "docs.docker.com"
          },
          {
            "topic": "Docker Compose for Local Dev",
            "priority": "🔴 P0",
            "tasks": "One-command boot of app + Postgres + Redis",
            "achievement": "Can explain Docker Compose for Local Dev clearly to a peer and answer follow-up questions without reference",
            "day": 32,
            "estimatedHours": 3.5,
            "resource": "docs.docker.com"
          },
          {
            "topic": "Caching with Spring Cache (`@Cacheable`)",
            "priority": "🔴 P0",
            "tasks": "Cache expensive DB queries with Redis backend",
            "achievement": "Can explain Caching with Spring Cache (`@Cacheable`) clearly to a peer and answer follow-up questions without reference",
            "day": 33,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Scheduling Tasks (`@Scheduled`)",
            "priority": "🔴 P0",
            "tasks": "Automate a nightly cleanup cron job",
            "achievement": "Can explain Scheduling Tasks (`@Scheduled`) clearly to a peer and answer follow-up questions without reference",
            "day": 34,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 35,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "GraphQL Integration",
            "priority": "🔴 P0",
            "tasks": "Build a schema + resolver for an over-fetching-prone dashboard",
            "achievement": "Working GraphQL Integration demo'd live; handles at least 2 edge cases without reference",
            "day": 36,
            "estimatedHours": 2.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "**Phase 2 Capstone: Task Management REST API**",
            "priority": "🔴 P0",
            "tasks": "Fully documented, dockerized, tested API with DTOs, validation, ETags, idempotency",
            "achievement": "Complete **Phase 2 Capstone: Task Management REST API** project passes code review; can explain every design decision",
            "day": 37,
            "estimatedHours": 4.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 38,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer weeks / catch-up**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 39,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": [
          "6-6"
        ]
      },
      {
        "id": "2-2",
        "title": "DATA PERSISTENCE & SECURITY",
        "days": "Days 40–78",
        "items": [
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 40,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 41,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Cross-Track Interleaved Recall",
            "priority": "-",
            "tasks": "Pick 1 random topic each from 2 other roadmaps you've covered. Explain each from memory, then verify.",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 42,
            "estimatedHours": 1,
            "resource": "Your own notes from other roadmap tracks"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 43,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 44,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 45,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 46,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 47,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 48,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 49,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 50,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Raw JDBC, Connection Pools, HikariCP Sizing",
            "priority": "🔴 P0",
            "tasks": "Connect via pure JDBC; tune pool size under simulated load",
            "achievement": "Can explain Raw JDBC, Connection Pools, HikariCP Sizing clearly to a peer and answer follow-up questions without reference",
            "day": 51,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "ORM Concepts + JPA Entities",
            "priority": "🔴 P0",
            "tasks": "Explain impedance mismatch; map `@Entity` classes with `@Id`/`@GeneratedValue`",
            "achievement": "Whiteboard ORM Concepts + JPA Entities from memory; answer 3 follow-up questions correctly",
            "day": 52,
            "estimatedHours": 1.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Spring Data JPA Basics",
            "priority": "🔴 P0",
            "tasks": "CRUD via `JpaRepository` + derived query methods",
            "achievement": "Can explain Spring Data JPA Basics clearly to a peer and answer follow-up questions without reference",
            "day": 53,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "JPA Relationships (One-to-Many, Many-to-Many, Cascade)",
            "priority": "🔴 P0",
            "tasks": "Model Author-Books and Students-Courses bidirectionally",
            "achievement": "Can explain JPA Relationships (One-to-Many, Many-to-Many, Cascade) clearly to a peer and answer follow-up questions without reference",
            "day": 54,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 55,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Transactions (`@Transactional`) + Fetch Strategies (Lazy/Eager)",
            "priority": "🔴 P0",
            "tasks": "Demonstrate rollback on exception; explain why Eager is an anti-pattern",
            "achievement": "Whiteboard Transactions (`@Transactional`) + Fetch Strategies (Lazy/Eager) from memory; answer 3 follow-up questions correctly",
            "day": 56,
            "estimatedHours": 1.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "The N+1 Query Problem",
            "priority": "🔴 P0",
            "tasks": "Reproduce it in logs, fix with `@EntityGraph`/`JOIN FETCH`",
            "achievement": "Given a broken The N+1 Query Problem scenario, identify root cause and fix within 15 minutes",
            "day": 57,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Hibernate 2nd-Level Cache + JPQL/Native Queries",
            "priority": "🔴 P0",
            "tasks": "Enable L2 cache; write a custom JPQL join query",
            "achievement": "Working Hibernate 2nd-Level Cache + JPQL/Native Queries demo'd live; handles at least 2 edge cases without reference",
            "day": 58,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Pagination in Spring Data + Projections",
            "priority": "🔴 P0",
            "tasks": "Fetch paged results + a column-only projection",
            "achievement": "Complete Pagination in Spring Data + Projections project passes code review; can explain every design decision",
            "day": 59,
            "estimatedHours": 4.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 60,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Database Migrations (Flyway)",
            "priority": "🔴 P0",
            "tasks": "Write versioned migration scripts; explain why `ddl-auto=update` is unsafe in prod",
            "achievement": "Working Database Migrations (Flyway) demo'd live; handles at least 2 edge cases without reference",
            "day": 61,
            "estimatedHours": 1.5,
            "resource": "PostgreSQL Official Docs"
          },
          {
            "topic": "Optimistic Locking + Data Auditing + Soft Deletes",
            "priority": "🟡 P1",
            "tasks": "Implement `@Version`, `@CreatedDate`, and `@SQLDelete`",
            "achievement": "Working Optimistic Locking + Data Auditing + Soft Deletes demo'd live; handles at least 2 edge cases without reference",
            "day": 62,
            "estimatedHours": 2.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Multi-Tenancy Patterns",
            "priority": "🟡 P1",
            "tasks": "Implement discriminator-column tenancy with Hibernate `@Filter`",
            "achievement": "Working Multi-Tenancy Patterns demo'd live; handles at least 2 edge cases without reference",
            "day": 63,
            "estimatedHours": 2.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Testing the Data Layer (`@DataJpaTest`)",
            "priority": "🔴 P0",
            "tasks": "Validate custom JPQL logic without booting web servers",
            "achievement": "Can explain Testing the Data Layer (`@DataJpaTest`) clearly to a peer and answer follow-up questions without reference",
            "day": 64,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 65,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Spring Security Architecture (SecurityFilterChain)",
            "priority": "🟡 P1",
            "tasks": "Diagram the request flow through filters",
            "achievement": "Can explain Spring Security Architecture (SecurityFilterChain) clearly to a peer and answer follow-up questions without reference",
            "day": 66,
            "estimatedHours": 3.5,
            "resource": "Spring Security in Action (Spilca)"
          },
          {
            "topic": "Basic Auth + RBAC",
            "priority": "🔴 P0",
            "tasks": "Implement `UserDetailsService` + `@PreAuthorize` role checks",
            "achievement": "Working Basic Auth + RBAC demo'd live; handles at least 2 edge cases without reference",
            "day": 67,
            "estimatedHours": 2.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Stateless Security: JWT + Filter + Refresh Tokens",
            "priority": "🟢 P2",
            "tasks": "Build custom `OncePerRequestFilter`; implement access + refresh token flow",
            "achievement": "Working Stateless Security: JWT + Filter + Refresh Tokens demo'd live; handles at least 2 edge cases without reference",
            "day": 68,
            "estimatedHours": 2.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 69,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 70,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "CORS & CSRF Defenses + OWASP Top 10 for Spring",
            "priority": "🟡 P1",
            "tasks": "Harden an API against Injection, XSS, CSRF",
            "achievement": "Can explain CORS & CSRF Defenses + OWASP Top 10 for Spring clearly to a peer and answer follow-up questions without reference",
            "day": 71,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "OAuth2 Fundamentals + Spring Security OAuth2 Client",
            "priority": "🟡 P1",
            "tasks": "Implement \"Login with Google/GitHub\"",
            "achievement": "Working OAuth2 Fundamentals + Spring Security OAuth2 Client demo'd live; handles at least 2 edge cases without reference",
            "day": 72,
            "estimatedHours": 2.5,
            "resource": "Spring Security in Action (Spilca)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 73,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "OAuth2 Resource Server + Keycloak Integration",
            "priority": "🟢 P2",
            "tasks": "Configure API as Resource Server validating externally-issued JWTs",
            "achievement": "OAuth2 Resource Server + Keycloak Integration running in a fresh environment; can reproduce setup from scratch",
            "day": 74,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 75,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "**Phase 3 Capstone: Blogging Platform**",
            "priority": "🔴 P0",
            "tasks": "Flyway-migrated schema + JWT-secured REST API with method-level security",
            "achievement": "Complete **Phase 3 Capstone: Blogging Platform** project passes code review; can explain every design decision",
            "day": 76,
            "estimatedHours": 4.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 77,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer weeks / interview prep**",
            "priority": "-",
            "tasks": "Review N+1, transaction propagation, isolation levels, JWT vulnerabilities",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 78,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": [
          "6-6"
        ]
      },
      {
        "id": "2-3",
        "title": "MICROSERVICES, KAFKA, RESILIENCE & SPRING AI",
        "days": "Days 79–165",
        "items": [
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 79,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 80,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 81,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 82,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 83,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Cross-Track Interleaved Recall",
            "priority": "-",
            "tasks": "Pick 1 random topic each from 2 other roadmaps you've covered. Explain each from memory, then verify.",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 84,
            "estimatedHours": 1,
            "resource": "Your own notes from other roadmap tracks"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 85,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 86,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 87,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 88,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 89,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 90,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 91,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 92,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 93,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 94,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 95,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Microservices vs Monoliths + DDD Bounded Contexts",
            "priority": "🟡 P1",
            "tasks": "Justify when a project should (and shouldn't) go microservices",
            "achievement": "Complete Microservices vs Monoliths + DDD Bounded Contexts project passes code review; can explain every design decision",
            "day": 96,
            "estimatedHours": 4.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "gRPC Services in Spring Boot",
            "priority": "🟢 P2",
            "tasks": "Define a `.proto` schema, implement server + client stub",
            "achievement": "Working gRPC Services in Spring Boot demo'd live; handles at least 2 edge cases without reference",
            "day": 97,
            "estimatedHours": 2.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Reactive Programming (Spring WebFlux, Mono/Flux)",
            "priority": "🟡 P1",
            "tasks": "Build a non-blocking endpoint with R2DBC",
            "achievement": "Working Reactive Programming (Spring WebFlux, Mono/Flux) demo'd live; handles at least 2 edge cases without reference",
            "day": 98,
            "estimatedHours": 2.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 99,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Service Discovery (Eureka)",
            "priority": "🟡 P1",
            "tasks": "Register two services that find each other without hardcoded IPs",
            "achievement": "Can explain Service Discovery (Eureka) clearly to a peer and answer follow-up questions without reference",
            "day": 100,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "API Gateway (Spring Cloud Gateway)",
            "priority": "🟢 P2",
            "tasks": "Route requests to 2 services by path; add a global pre-filter",
            "achievement": "Can explain API Gateway (Spring Cloud Gateway) clearly to a peer and answer follow-up questions without reference",
            "day": 101,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Centralized Security at Gateway",
            "priority": "🟡 P1",
            "tasks": "Move JWT validation to Gateway; downstream trusts via internal headers",
            "achievement": "Can explain Centralized Security at Gateway clearly to a peer and answer follow-up questions without reference",
            "day": 102,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Synchronous Communication (OpenFeign)",
            "priority": "🟡 P1",
            "tasks": "Declarative service-to-service call via Eureka",
            "achievement": "Can explain Synchronous Communication (OpenFeign) clearly to a peer and answer follow-up questions without reference",
            "day": 103,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 104,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Resilience4j: Circuit Breaker",
            "priority": "🟡 P1",
            "tasks": "Wrap Feign client with fallback for downstream failure",
            "achievement": "Can explain Resilience4j: Circuit Breaker clearly to a peer and answer follow-up questions without reference",
            "day": 105,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Resilience4j: Retries & Rate Limiting",
            "priority": "🟡 P1",
            "tasks": "Add exponential backoff + gateway-level rate limiting",
            "achievement": "Can explain Resilience4j: Retries & Rate Limiting clearly to a peer and answer follow-up questions without reference",
            "day": 106,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Distributed Tracing (Micrometer + Zipkin/Jaeger)",
            "priority": "🔴 P0",
            "tasks": "Trace one request across Gateway → Order → Inventory",
            "achievement": "Can explain Distributed Tracing (Micrometer + Zipkin/Jaeger) clearly to a peer and answer follow-up questions without reference",
            "day": 107,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Service Mesh Fundamentals (Istio/Linkerd)",
            "priority": "🔴 P0",
            "tasks": "Inject sidecars on local K8s; observe mTLS and retries outside app code",
            "achievement": "Can explain Service Mesh Fundamentals (Istio/Linkerd) clearly to a peer and answer follow-up questions without reference",
            "day": 108,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 109,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Centralized Configuration (Spring Cloud Config)",
            "priority": "🟢 P2",
            "tasks": "Update a property dynamically without restart",
            "achievement": "Can explain Centralized Configuration (Spring Cloud Config) clearly to a peer and answer follow-up questions without reference",
            "day": 110,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Centralized Secrets (Spring Cloud Vault)",
            "priority": "🔴 P0",
            "tasks": "Rotate DB credentials at runtime via HashiCorp Vault",
            "achievement": "Can explain Centralized Secrets (Spring Cloud Vault) clearly to a peer and answer follow-up questions without reference",
            "day": 111,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Introduction to Kafka (Topics, Partitions, Consumer Groups)",
            "priority": "🟡 P1",
            "tasks": "Spin up Kafka in Docker; explain append-only log architecture",
            "achievement": "Whiteboard Introduction to Kafka (Topics, Partitions, Consumer Groups) from memory; answer 3 follow-up questions correctly",
            "day": 112,
            "estimatedHours": 1.5,
            "resource": "Kafka: The Definitive Guide (Shapira)"
          },
          {
            "topic": "Kafka Schema Registry (Avro/Protobuf)",
            "priority": "🟡 P1",
            "tasks": "Define a schema; enforce BACKWARD compatibility",
            "achievement": "Whiteboard Kafka Schema Registry (Avro/Protobuf) from memory; answer 3 follow-up questions correctly",
            "day": 113,
            "estimatedHours": 3.5,
            "resource": "Kafka: The Definitive Guide (Shapira)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 114,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Spring Kafka: Producers & Consumers",
            "priority": "🟡 P1",
            "tasks": "Publish `OrderCreatedEvent`; consume it to update inventory",
            "achievement": "Working Spring Kafka: Producers & Consumers demo'd live; handles at least 2 edge cases without reference",
            "day": 115,
            "estimatedHours": 3.5,
            "resource": "Kafka: The Definitive Guide (Shapira)"
          },
          {
            "topic": "Kafka: Idempotent Consumers & Exactly-Once Semantics",
            "priority": "🟡 P1",
            "tasks": "Implement dedup table + transactional producer",
            "achievement": "Working Kafka: Idempotent Consumers & Exactly-Once Semantics demo'd live; handles at least 2 edge cases without reference",
            "day": 116,
            "estimatedHours": 2.5,
            "resource": "Kafka: The Definitive Guide (Shapira)"
          },
          {
            "topic": "Kafka: Consumer Groups & Scaling",
            "priority": "🟡 P1",
            "tasks": "Scale to 3 instances; observe partition rebalancing",
            "achievement": "Can explain Kafka: Consumer Groups & Scaling clearly to a peer and answer follow-up questions without reference",
            "day": 117,
            "estimatedHours": 3.5,
            "resource": "Kafka: The Definitive Guide (Shapira)"
          },
          {
            "topic": "Kafka: Error Handling & DLQs",
            "priority": "🟡 P1",
            "tasks": "Simulate a processing failure; route to Dead Letter Queue",
            "achievement": "Can explain Kafka: Error Handling & DLQs clearly to a peer and answer follow-up questions without reference",
            "day": 118,
            "estimatedHours": 3.5,
            "resource": "Kafka: The Definitive Guide (Shapira)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 119,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Kafka Streams Fundamentals",
            "priority": "🟡 P1",
            "tasks": "Build a windowed aggregation topology (orders-per-minute)",
            "achievement": "Working Kafka Streams Fundamentals demo'd live; handles at least 2 edge cases without reference",
            "day": 120,
            "estimatedHours": 2.5,
            "resource": "Kafka: The Definitive Guide (Shapira)"
          },
          {
            "topic": "Transactional Outbox Pattern",
            "priority": "🔴 P0",
            "tasks": "Solve the dual-write problem with an outbox table + publisher",
            "achievement": "Working Transactional Outbox Pattern demo'd live; handles at least 2 edge cases without reference",
            "day": 121,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 122,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Distributed Sagas (Choreography + Orchestration + Compensation)",
            "priority": "🔴 P0",
            "tasks": "Implement Order-Inventory saga with failure rollback path",
            "achievement": "Working Distributed Sagas (Choreography + Orchestration + Compensation) demo'd live; handles at least 2 edge cases without reference",
            "day": 123,
            "estimatedHours": 2.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 124,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 125,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Event Sourcing + CQRS",
            "priority": "🔴 P0",
            "tasks": "Separate write model (relational) from read model (Elasticsearch via Kafka)",
            "achievement": "Working Event Sourcing + CQRS demo'd live; handles at least 2 edge cases without reference",
            "day": 126,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 127,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "WebSocket Communication (STOMP)",
            "priority": "🔴 P0",
            "tasks": "Build a real-time push-notification endpoint",
            "achievement": "Working WebSocket Communication (STOMP) demo'd live; handles at least 2 edge cases without reference",
            "day": 128,
            "estimatedHours": 2.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Redis Distributed Locking (Redisson)",
            "priority": "🔴 P0",
            "tasks": "Ensure a scheduled job runs on only one instance in a cluster",
            "achievement": "Can explain Redis Distributed Locking (Redisson) clearly to a peer and answer follow-up questions without reference",
            "day": 129,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "API Versioning Strategies (recap) + Blue-Green/Canary Deployments",
            "priority": "🟢 P2",
            "tasks": "Configure two parallel environments with gradual traffic shift",
            "achievement": "API Versioning Strategies (recap) + Blue-Green/Canary Deployments running in a fresh environment; can reproduce setup from scratch",
            "day": 130,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 131,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Spring AI: Fundamentals & ChatClient",
            "priority": "🟢 P2",
            "tasks": "Build a streaming LLM endpoint via `ChatClient`/WebFlux",
            "achievement": "Working Spring AI: Fundamentals & ChatClient demo'd live; handles at least 2 edge cases without reference",
            "day": 132,
            "estimatedHours": 2.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Spring AI: Prompt Templates & Structured Output",
            "priority": "🟢 P2",
            "tasks": "Force LLM output into a Java record via `BeanOutputConverter`",
            "achievement": "Can explain Spring AI: Prompt Templates & Structured Output clearly to a peer and answer follow-up questions without reference",
            "day": 133,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Spring AI: Function/Tool Calling",
            "priority": "🟢 P2",
            "tasks": "Register a `@Tool` method the LLM can invoke (e.g. `getWeather`)",
            "achievement": "Can explain Spring AI: Function/Tool Calling clearly to a peer and answer follow-up questions without reference",
            "day": 134,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Spring AI: VectorStore & RAG Basics",
            "priority": "🟢 P2",
            "tasks": "Chunk a PDF, embed it, retrieve relevant chunks before calling the LLM",
            "achievement": "Can explain Spring AI: VectorStore & RAG Basics clearly to a peer and answer follow-up questions without reference",
            "day": 135,
            "estimatedHours": 3.5,
            "resource": "LangChain docs + python.langchain.com"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 136,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Spring AI: MCP Client/Server Integration",
            "priority": "🟢 P2",
            "tasks": "Expose a Spring Boot service as an MCP server; consume it as a client",
            "achievement": "Can explain Spring AI: MCP Client/Server Integration clearly to a peer and answer follow-up questions without reference",
            "day": 137,
            "estimatedHours": 3.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "**Phase 4 Capstone: E-Commerce Microservice System**",
            "priority": "🔴 P0",
            "tasks": "Gateway + Auth + Order + Inventory + Payment + AI Support service, wired with Kafka Sagas, secured, traced, and containerized",
            "achievement": "Complete **Phase 4 Capstone: E-Commerce Microservice System** project passes code review; can explain every design decision",
            "day": 138,
            "estimatedHours": 4.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 139,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Cross-Track Interleaved Recall",
            "priority": "-",
            "tasks": "Pick 1 random topic each from 2 other roadmaps you've covered. Explain each from memory, then verify.",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 140,
            "estimatedHours": 1,
            "resource": "Your own notes from other roadmap tracks"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 141,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 142,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 143,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Interview Prep: Spring Core & Spring AI",
            "priority": "🟢 P2",
            "tasks": "Review IoC, AOP, transaction propagation, ChatClient abstractions",
            "achievement": "Pass a timed mock interview round on Interview Prep: Spring Core & Spring AI with no hints",
            "day": 144,
            "estimatedHours": 2,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "Interview Prep: Microservices & Kafka",
            "priority": "🟡 P1",
            "tasks": "Review circuit breakers, gateways, outbox, exactly-once semantics",
            "achievement": "Pass a timed mock interview round on Interview Prep: Microservices & Kafka with no hints",
            "day": 145,
            "estimatedHours": 2,
            "resource": "Kafka: The Definitive Guide (Shapira)"
          },
          {
            "topic": "**Mock Interviews (3x)**",
            "priority": "🟡 P1",
            "tasks": "Timed 45-min sessions on system design + Spring-specific questions",
            "achievement": "Complete design for **Mock Interviews (3x)** with trade-offs documented; survives 5-minute peer critique",
            "day": 146,
            "estimatedHours": 2,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 147,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 148,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 149,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 150,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer / weak-spot refinement**",
            "priority": "-",
            "tasks": "Revisit flagged weak topics from mocks",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 151,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 152,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 153,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Cross-Track Interleaved Recall",
            "priority": "-",
            "tasks": "Pick 1 random topic each from 2 other roadmaps you've covered. Explain each from memory, then verify.",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 154,
            "estimatedHours": 1,
            "resource": "Your own notes from other roadmap tracks"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 155,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 156,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 157,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 158,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 159,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 160,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 161,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 162,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 163,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 164,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Resume & GitHub Polish**",
            "priority": "🟡 P1",
            "tasks": "Push capstone with a README covering architecture, Saga flow, AI integration, Docker Compose setup",
            "achievement": "**Resume & GitHub Polish** running in a fresh environment; can reproduce setup from scratch",
            "day": 165,
            "estimatedHours": 4.5,
            "resource": "Spring in Action (Walls) + spring.io/guides + Baeldung"
          }
        ],
        "dependencies": [
          "6-6"
        ]
      }
    ]
  },
  {
    "id": 3,
    "title": "Gen AI & LLM Engineering",
    "days": 230,
    "color": "purple",
    "phases": [
      {
        "id": "3-1",
        "title": "PYTHON, MATH & CLASSICAL ML",
        "days": "Days 1–27",
        "items": [
          {
            "topic": "Python for Java Devs (dicts, comprehensions, decorators, typing)",
            "priority": "🔴 P0",
            "tasks": "Port a small Java algorithm to idiomatic Python",
            "achievement": "Can explain Python for Java Devs (dicts, comprehensions, decorators, typing) clearly to a peer and answer follow-up questions without reference",
            "day": 1,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "NumPy (arrays, broadcasting, vectorization)",
            "priority": "🟡 P1",
            "tasks": "Vectorize a loop-based calculation; benchmark speed gain",
            "achievement": "Can explain NumPy (arrays, broadcasting, vectorization) clearly to a peer and answer follow-up questions without reference",
            "day": 2,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Pandas 1 (DataFrames, loc/iloc, missing data)",
            "priority": "🟡 P1",
            "tasks": "Clean a messy Kaggle CSV: handle NaNs, wrong dtypes",
            "achievement": "Can explain Pandas 1 (DataFrames, loc/iloc, missing data) clearly to a peer and answer follow-up questions without reference",
            "day": 3,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Pandas 2 (groupby, merge, pivot, resampling)",
            "priority": "🟡 P1",
            "tasks": "Perform a SQL-style aggregation entirely in Pandas",
            "achievement": "Can explain Pandas 2 (groupby, merge, pivot, resampling) clearly to a peer and answer follow-up questions without reference",
            "day": 4,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Data Visualization (Matplotlib/Seaborn)",
            "priority": "🟢 P2",
            "tasks": "Build a correlation heatmap + outlier scatter plot for the cleaned dataset",
            "achievement": "Working Data Visualization (Matplotlib/Seaborn) demo'd live; handles at least 2 edge cases without reference",
            "day": 5,
            "estimatedHours": 2.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 6,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Linear Algebra: Vectors, Matrices, Dot Products",
            "priority": "🔴 P0",
            "tasks": "Manually compute a matrix multiplication; verify with NumPy",
            "achievement": "Can explain Linear Algebra: Vectors, Matrices, Dot Products clearly to a peer and answer follow-up questions without reference",
            "day": 7,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Linear Algebra: Eigenvalues, SVD",
            "priority": "🔴 P0",
            "tasks": "Explain PCA's math in your own words with a worked example",
            "achievement": "Whiteboard Linear Algebra: Eigenvalues, SVD from memory; answer 3 follow-up questions correctly",
            "day": 8,
            "estimatedHours": 1.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Cosine Similarity",
            "priority": "🟡 P1",
            "tasks": "Implement cosine similarity in pure NumPy; compare 3 vector pairs",
            "achievement": "Working Cosine Similarity demo'd live; handles at least 2 edge cases without reference",
            "day": 9,
            "estimatedHours": 2.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Calculus for Deep Learning (derivatives, chain rule)",
            "priority": "🟢 P2",
            "tasks": "Manually differentiate a 2-layer function by hand",
            "achievement": "Can explain Calculus for Deep Learning (derivatives, chain rule) clearly to a peer and answer follow-up questions without reference",
            "day": 10,
            "estimatedHours": 3.5,
            "resource": "Deep Learning (Goodfellow)"
          },
          {
            "topic": "Probability & Statistics (distributions, Bayes)",
            "priority": "🟢 P2",
            "tasks": "Determine if a sample dataset is statistically significant",
            "achievement": "Can explain Probability & Statistics (distributions, Bayes) clearly to a peer and answer follow-up questions without reference",
            "day": 11,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 12,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Scikit-Learn API (fit/predict/transform)",
            "priority": "🔴 P0",
            "tasks": "Fit a model using sklearn's standard interface",
            "achievement": "Can explain Scikit-Learn API (fit/predict/transform) clearly to a peer and answer follow-up questions without reference",
            "day": 13,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Linear & Logistic Regression",
            "priority": "🔴 P0",
            "tasks": "Train both on house-price and spam-detection datasets",
            "achievement": "Can explain Linear & Logistic Regression clearly to a peer and answer follow-up questions without reference",
            "day": 14,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Decision Trees (Gini, Information Gain)",
            "priority": "🟢 P2",
            "tasks": "Train + visualize a tree; explain one decision path",
            "achievement": "Whiteboard Decision Trees (Gini, Information Gain) from memory; answer 3 follow-up questions correctly",
            "day": 15,
            "estimatedHours": 1.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Random Forests & Gradient Boosting (XGBoost)",
            "priority": "🟡 P1",
            "tasks": "Train both; compare accuracy and explain bagging vs boosting",
            "achievement": "Whiteboard Random Forests & Gradient Boosting (XGBoost) from memory; answer 3 follow-up questions correctly",
            "day": 16,
            "estimatedHours": 1.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 17,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Unsupervised Learning: K-Means + PCA",
            "priority": "🔴 P0",
            "tasks": "Cluster a dataset, find optimal k via elbow method, then compress with PCA",
            "achievement": "Can explain Unsupervised Learning: K-Means + PCA clearly to a peer and answer follow-up questions without reference",
            "day": 18,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Model Evaluation: Classification (Precision/Recall/F1/ROC-AUC)",
            "priority": "-",
            "tasks": "Explain why 99% accuracy fails for imbalanced cancer-detection data",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 19,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Model Evaluation: Regression (MAE/MSE/R²)",
            "priority": "🔴 P0",
            "tasks": "Quantify prediction error for your regression model",
            "achievement": "Can explain Model Evaluation: Regression (MAE/MSE/R²) clearly to a peer and answer follow-up questions without reference",
            "day": 20,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Hyperparameter Tuning + Cross-Validation",
            "priority": "🟡 P1",
            "tasks": "Run GridSearchCV with K-Fold CV on your XGBoost model",
            "achievement": "Can explain Hyperparameter Tuning + Cross-Validation clearly to a peer and answer follow-up questions without reference",
            "day": 21,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 22,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Neural Network Basics (perceptrons, activations)",
            "priority": "🔴 P0",
            "tasks": "Manually trace a forward pass through one artificial neuron",
            "achievement": "Can explain Neural Network Basics (perceptrons, activations) clearly to a peer and answer follow-up questions without reference",
            "day": 23,
            "estimatedHours": 3.5,
            "resource": "Deep Learning (Goodfellow)"
          },
          {
            "topic": "Loss Functions, Optimizers, Backpropagation",
            "priority": "🔴 P0",
            "tasks": "Explain gradient descent + chain rule as the \"engine\" of learning",
            "achievement": "Whiteboard Loss Functions, Optimizers, Backpropagation from memory; answer 3 follow-up questions correctly",
            "day": 24,
            "estimatedHours": 1.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Phase 1 Capstone: End-to-End Classical ML Project**",
            "priority": "🔴 P0",
            "tasks": "Raw Kaggle dataset → cleaned → XGBoost trained → tuned → rigorously evaluated",
            "achievement": "Complete **Phase 1 Capstone: End-to-End Classical ML Project** project passes code review; can explain every design decision",
            "day": 25,
            "estimatedHours": 4.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 26,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer / catch-up weeks**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 27,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": []
      },
      {
        "id": "3-2",
        "title": "DEEP LEARNING, NLP & TRANSFORMERS",
        "days": "Days 28–74",
        "items": [
          {
            "topic": "📝 Cross-Track Interleaved Recall",
            "priority": "-",
            "tasks": "Pick 1 random topic each from 2 other roadmaps you've covered. Explain each from memory, then verify.",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 28,
            "estimatedHours": 1,
            "resource": "Your own notes from other roadmap tracks"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 29,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 30,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 31,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 32,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 33,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 34,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 35,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "PyTorch Fundamentals + Autograd",
            "priority": "🟡 P1",
            "tasks": "Build tensors, compute gradients automatically, verify by hand",
            "achievement": "Working PyTorch Fundamentals + Autograd demo'd live; handles at least 2 edge cases without reference",
            "day": 36,
            "estimatedHours": 2.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 37,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "PyTorch DataLoaders",
            "priority": "🔴 P0",
            "tasks": "Load and batch a custom dataset",
            "achievement": "Can explain PyTorch DataLoaders clearly to a peer and answer follow-up questions without reference",
            "day": 38,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "The PyTorch Training Loop",
            "priority": "🔴 P0",
            "tasks": "Train a small NN end-to-end (forward, loss, backward, step)",
            "achievement": "Can explain The PyTorch Training Loop clearly to a peer and answer follow-up questions without reference",
            "day": 39,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 40,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 41,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "NLP: Tokenization, Bag of Words, TF-IDF",
            "priority": "🔴 P0",
            "tasks": "Vectorize a text corpus with TF-IDF; compare to raw BoW",
            "achievement": "Correct comparison of NLP: Tokenization, Bag of Words, TF-IDF with 5+ dimensions; justify a choice for a given scenario",
            "day": 42,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "NLP: Word Embeddings (Word2Vec)",
            "priority": "🔴 P0",
            "tasks": "Train/load embeddings; find nearest neighbors for a word",
            "achievement": "Can explain NLP: Word Embeddings (Word2Vec) clearly to a peer and answer follow-up questions without reference",
            "day": 43,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "RNNs, LSTMs & GRUs",
            "priority": "🟡 P1",
            "tasks": "Explain vanishing gradients; diagram an LSTM gate flow",
            "achievement": "Whiteboard RNNs, LSTMs & GRUs from memory; answer 3 follow-up questions correctly",
            "day": 44,
            "estimatedHours": 1.5,
            "resource": "Deep Learning (Goodfellow)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 45,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "The Attention Mechanism + Transformer Architecture Deep Dive",
            "priority": "🔴 P0",
            "tasks": "Diagram self-attention + multi-head attention from memory",
            "achievement": "Can explain The Attention Mechanism + Transformer Architecture Deep Dive clearly to a peer and answer follow-up questions without reference",
            "day": 46,
            "estimatedHours": 3.5,
            "resource": "Attention Is All You Need (Vaswani)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 47,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "KV-Cache & Decoding Optimization",
            "priority": "🔴 P0",
            "tasks": "Explain why KV-cache speeds up autoregressive generation",
            "achievement": "Whiteboard KV-Cache & Decoding Optimization from memory; answer 3 follow-up questions correctly",
            "day": 48,
            "estimatedHours": 1.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Encoder vs Decoder Models (BERT vs GPT)",
            "priority": "🔴 P0",
            "tasks": "Pick the right architecture for 3 given NLP tasks",
            "achievement": "Can explain Encoder vs Decoder Models (BERT vs GPT) clearly to a peer and answer follow-up questions without reference",
            "day": 49,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 50,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Hugging Face Ecosystem + Tokenizers",
            "priority": "🔴 P0",
            "tasks": "Load a pretrained model + tokenizer; run inference",
            "achievement": "Can explain Hugging Face Ecosystem + Tokenizers clearly to a peer and answer follow-up questions without reference",
            "day": 51,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 52,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Fine-Tuning with HF Trainer API",
            "priority": "🟡 P1",
            "tasks": "Fine-tune a small model on a classification task",
            "achievement": "Can explain Fine-Tuning with HF Trainer API clearly to a peer and answer follow-up questions without reference",
            "day": 53,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Intro to LLMs (scale, emergent behavior)",
            "priority": "🟢 P2",
            "tasks": "Explain what changes qualitatively at LLM scale",
            "achievement": "Whiteboard Intro to LLMs (scale, emergent behavior) from memory; answer 3 follow-up questions correctly",
            "day": 54,
            "estimatedHours": 1.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 55,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Prompt Engineering Techniques",
            "priority": "🟢 P2",
            "tasks": "Write and test 3 prompting strategies on the same task",
            "achievement": "Working Prompt Engineering Techniques demo'd live; handles at least 2 edge cases without reference",
            "day": 56,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "OpenAI API & System Prompts",
            "priority": "🟡 P1",
            "tasks": "Build a simple API-driven chat script with a system prompt",
            "achievement": "Working OpenAI API & System Prompts demo'd live; handles at least 2 edge cases without reference",
            "day": 57,
            "estimatedHours": 2.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Structured Outputs (Instructor/Pydantic)",
            "priority": "🔴 P0",
            "tasks": "Force LLM output into a validated Pydantic schema",
            "achievement": "Can explain Structured Outputs (Instructor/Pydantic) clearly to a peer and answer follow-up questions without reference",
            "day": 58,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 59,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Instruction Tuning vs RLHF",
            "priority": "🟡 P1",
            "tasks": "Explain the difference and why RLHF aligns behavior",
            "achievement": "Whiteboard Instruction Tuning vs RLHF from memory; answer 3 follow-up questions correctly",
            "day": 60,
            "estimatedHours": 1.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "PEFT & LoRA (Low-Rank Adaptation)",
            "priority": "🔴 P0",
            "tasks": "Explain LoRA math; identify which weight matrices get adapted",
            "achievement": "Whiteboard PEFT & LoRA (Low-Rank Adaptation) from memory; answer 3 follow-up questions correctly",
            "day": 61,
            "estimatedHours": 1.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 62,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "LLM Distillation & Quantization Theory",
            "priority": "🟡 P1",
            "tasks": "Explain int8/int4 quantization trade-offs",
            "achievement": "Whiteboard LLM Distillation & Quantization Theory from memory; answer 3 follow-up questions correctly",
            "day": 63,
            "estimatedHours": 1.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 64,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "QLoRA Implementation (hands-on)",
            "priority": "🟡 P1",
            "tasks": "Fine-tune a quantized model on a custom dataset with QLoRA",
            "achievement": "Can explain QLoRA Implementation (hands-on) clearly to a peer and answer follow-up questions without reference",
            "day": 65,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 66,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Post-Fine-Tune Evaluation",
            "priority": "🔴 P0",
            "tasks": "Evaluate the fine-tuned model against a held-out test set",
            "achievement": "Can explain Post-Fine-Tune Evaluation clearly to a peer and answer follow-up questions without reference",
            "day": 67,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Context Windows & RoPE",
            "priority": "🔴 P0",
            "tasks": "Explain rotary positional embeddings and context extension",
            "achievement": "Whiteboard Context Windows & RoPE from memory; answer 3 follow-up questions correctly",
            "day": 68,
            "estimatedHours": 1.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 69,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Vision Transformers (ViT) + CLIP/Multimodal Embeddings",
            "priority": "🔴 P0",
            "tasks": "Explain how ViT patches images; run a CLIP similarity search",
            "achievement": "Whiteboard Vision Transformers (ViT) + CLIP/Multimodal Embeddings from memory; answer 3 follow-up questions correctly",
            "day": 70,
            "estimatedHours": 1.5,
            "resource": "Attention Is All You Need (Vaswani)"
          },
          {
            "topic": "LLM Evaluation Basics + Modern Benchmarks",
            "priority": "🔴 P0",
            "tasks": "Compare 2 models on a standard benchmark; explain limitations",
            "achievement": "Whiteboard LLM Evaluation Basics + Modern Benchmarks from memory; answer 3 follow-up questions correctly",
            "day": 71,
            "estimatedHours": 1.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Phase 2 Capstone: Fine-Tune & Evaluate a Custom LLM**",
            "priority": "🔴 P0",
            "tasks": "Full fine-tuning pipeline: data prep → QLoRA → eval → writeup",
            "achievement": "Working **Phase 2 Capstone: Fine-Tune & Evaluate a Custom LLM** demo'd live; handles at least 2 edge cases without reference",
            "day": 72,
            "estimatedHours": 4.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 73,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer / catch-up weeks**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 74,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": []
      },
      {
        "id": "3-3",
        "title": "ENTERPRISE RAG & AI SECURITY",
        "days": "Days 75–136",
        "items": [
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 75,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 76,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 77,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 78,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 79,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 80,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 81,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 82,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 83,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Cross-Track Interleaved Recall",
            "priority": "-",
            "tasks": "Pick 1 random topic each from 2 other roadmaps you've covered. Explain each from memory, then verify.",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 84,
            "estimatedHours": 1,
            "resource": "Your own notes from other roadmap tracks"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 85,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 86,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 87,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 88,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 89,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 90,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 91,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 92,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 93,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 94,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 95,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "RAG Architecture Fundamentals",
            "priority": "🔴 P0",
            "tasks": "Diagram a full RAG pipeline end to end",
            "achievement": "Can explain RAG Architecture Fundamentals clearly to a peer and answer follow-up questions without reference",
            "day": 96,
            "estimatedHours": 3.5,
            "resource": "LangChain docs + python.langchain.com"
          },
          {
            "topic": "Document Ingestion & Parsing",
            "priority": "🟡 P1",
            "tasks": "Parse a PDF + HTML doc into clean text",
            "achievement": "Can explain Document Ingestion & Parsing clearly to a peer and answer follow-up questions without reference",
            "day": 97,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Chunking Strategies",
            "priority": "🟢 P2",
            "tasks": "Compare fixed-size vs semantic chunking on the same doc",
            "achievement": "Correct comparison of Chunking Strategies with 5+ dimensions; justify a choice for a given scenario",
            "day": 98,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 99,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Embedding Models in Practice",
            "priority": "🟡 P1",
            "tasks": "Embed a document set; inspect vector similarity",
            "achievement": "Can explain Embedding Models in Practice clearly to a peer and answer follow-up questions without reference",
            "day": 100,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Vector Databases (Pinecone/Milvus/pgvector) + HNSW",
            "priority": "🔴 P0",
            "tasks": "Stand up a vector store; explain HNSW's approximate search",
            "achievement": "Whiteboard Vector Databases (Pinecone/Milvus/pgvector) + HNSW from memory; answer 3 follow-up questions correctly",
            "day": 101,
            "estimatedHours": 1.5,
            "resource": "PostgreSQL Official Docs"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 102,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Building a Basic RAG Pipeline",
            "priority": "🟡 P1",
            "tasks": "Full retrieve-then-generate pipeline answering questions from your docs",
            "achievement": "Can explain Building a Basic RAG Pipeline clearly to a peer and answer follow-up questions without reference",
            "day": 103,
            "estimatedHours": 3.5,
            "resource": "LangChain docs + python.langchain.com"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 104,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 105,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Advanced RAG: Query Expansion + HyDE",
            "priority": "🔴 P0",
            "tasks": "Implement both; compare retrieval quality vs baseline",
            "achievement": "Working Advanced RAG: Query Expansion + HyDE demo'd live; handles at least 2 edge cases without reference",
            "day": 106,
            "estimatedHours": 2.5,
            "resource": "LangChain docs + python.langchain.com"
          },
          {
            "topic": "Advanced RAG: Parent-Child Chunking + Hybrid Search",
            "priority": "🔴 P0",
            "tasks": "Combine keyword + vector search; measure recall improvement",
            "achievement": "Score 80%+ on a self-quiz covering recent topics without notes",
            "day": 107,
            "estimatedHours": 3.5,
            "resource": "LangChain docs + python.langchain.com"
          },
          {
            "topic": "Advanced RAG: Reranking Models",
            "priority": "🟢 P2",
            "tasks": "Add a reranker; measure precision@k improvement",
            "achievement": "Can explain Advanced RAG: Reranking Models clearly to a peer and answer follow-up questions without reference",
            "day": 108,
            "estimatedHours": 3.5,
            "resource": "LangChain docs + python.langchain.com"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 109,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "RAG Evaluation (RAGAS)",
            "priority": "🟡 P1",
            "tasks": "Score your RAG pipeline on faithfulness, relevance, recall",
            "achievement": "Score 80%+ on a self-quiz covering recent topics without notes",
            "day": 110,
            "estimatedHours": 3.5,
            "resource": "LangChain docs + python.langchain.com"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 111,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Self-Reflective RAG",
            "priority": "🟡 P1",
            "tasks": "Implement a self-critique/re-retrieval loop",
            "achievement": "Working Self-Reflective RAG demo'd live; handles at least 2 edge cases without reference",
            "day": 112,
            "estimatedHours": 2.5,
            "resource": "LangChain docs + python.langchain.com"
          },
          {
            "topic": "DSPy Basics",
            "priority": "🔴 P0",
            "tasks": "Optimize a prompt pipeline declaratively with DSPy",
            "achievement": "Can explain DSPy Basics clearly to a peer and answer follow-up questions without reference",
            "day": 113,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 114,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Data Engineering: Airflow + RAG Ingestion DAG",
            "priority": "🔴 P0",
            "tasks": "Build an automated ingestion pipeline as an Airflow DAG",
            "achievement": "Working Data Engineering: Airflow + RAG Ingestion DAG demo'd live; handles at least 2 edge cases without reference",
            "day": 115,
            "estimatedHours": 2.5,
            "resource": "LangChain docs + python.langchain.com"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 116,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "GraphRAG (theory, setup, Cypher queries)",
            "priority": "🟢 P2",
            "tasks": "Build a knowledge-graph-backed RAG query over sample data",
            "achievement": "Working GraphRAG (theory, setup, Cypher queries) demo'd live; handles at least 2 edge cases without reference",
            "day": 117,
            "estimatedHours": 2.5,
            "resource": "LangChain docs + python.langchain.com"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 118,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 119,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "AI Security: OWASP LLM Top 10",
            "priority": "🟢 P2",
            "tasks": "Map 3 real vulnerabilities to OWASP categories",
            "achievement": "Can explain AI Security: OWASP LLM Top 10 clearly to a peer and answer follow-up questions without reference",
            "day": 120,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "AI Security: Prompt Injection Defense",
            "priority": "🟢 P2",
            "tasks": "Demonstrate an injection attack, then defend against it",
            "achievement": "Can explain AI Security: Prompt Injection Defense clearly to a peer and answer follow-up questions without reference",
            "day": 121,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "AI Security: PII Detection (Presidio)",
            "priority": "🟢 P2",
            "tasks": "Scrub PII from a sample document set",
            "achievement": "Can explain AI Security: PII Detection (Presidio) clearly to a peer and answer follow-up questions without reference",
            "day": 122,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 123,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "AI Security: Guardrails (NeMo Guardrails, LlamaGuard)",
            "priority": "🟢 P2",
            "tasks": "Configure a guardrail blocking a harmful category of output",
            "achievement": "AI Security: Guardrails (NeMo Guardrails, LlamaGuard) running in a fresh environment; can reproduce setup from scratch",
            "day": 124,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "AI Security: Red Teaming",
            "priority": "🟢 P2",
            "tasks": "Attempt 3 jailbreak techniques against your own pipeline",
            "achievement": "Can explain AI Security: Red Teaming clearly to a peer and answer follow-up questions without reference",
            "day": 125,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Semantic Caching",
            "priority": "🔴 P0",
            "tasks": "Implement cache-hit logic based on embedding similarity",
            "achievement": "Working Semantic Caching demo'd live; handles at least 2 edge cases without reference",
            "day": 126,
            "estimatedHours": 2.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 127,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Async Python (asyncio)",
            "priority": "🔴 P0",
            "tasks": "Convert a blocking pipeline to async",
            "achievement": "Can explain Async Python (asyncio) clearly to a peer and answer follow-up questions without reference",
            "day": 128,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Serving Models with FastAPI",
            "priority": "🟡 P1",
            "tasks": "Wrap your RAG pipeline in a FastAPI service",
            "achievement": "Can explain Serving Models with FastAPI clearly to a peer and answer follow-up questions without reference",
            "day": 129,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "High-Performance Serving (vLLM, Triton)",
            "priority": "🟢 P2",
            "tasks": "Explain continuous batching; benchmark vLLM vs naive serving",
            "achievement": "Whiteboard High-Performance Serving (vLLM, Triton) from memory; answer 3 follow-up questions correctly",
            "day": 130,
            "estimatedHours": 1.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Streaming LLM Responses",
            "priority": "🟢 P2",
            "tasks": "Implement token-by-token streaming over SSE/WebSocket",
            "achievement": "Working Streaming LLM Responses demo'd live; handles at least 2 edge cases without reference",
            "day": 131,
            "estimatedHours": 2.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 132,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "**Phase 3 Capstone: Enterprise RAG System**",
            "priority": "🔴 P0",
            "tasks": "Multi-tenant, secured, evaluated RAG pipeline with guardrails, deployed via FastAPI",
            "achievement": "**Phase 3 Capstone: Enterprise RAG System** running in a fresh environment; can reproduce setup from scratch",
            "day": 133,
            "estimatedHours": 4.5,
            "resource": "LangChain docs + python.langchain.com"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 134,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 135,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer / catch-up weeks**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 136,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": []
      },
      {
        "id": "3-4",
        "title": "AUTONOMOUS AGENTS & LANGGRAPH",
        "days": "Days 137–191",
        "items": [
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 137,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 138,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 139,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Cross-Track Interleaved Recall",
            "priority": "-",
            "tasks": "Pick 1 random topic each from 2 other roadmaps you've covered. Explain each from memory, then verify.",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 140,
            "estimatedHours": 1,
            "resource": "Your own notes from other roadmap tracks"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 141,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 142,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 143,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 144,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 145,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 146,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 147,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 148,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 149,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 150,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 151,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 152,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 153,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Cross-Track Interleaved Recall",
            "priority": "-",
            "tasks": "Pick 1 random topic each from 2 other roadmaps you've covered. Explain each from memory, then verify.",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 154,
            "estimatedHours": 1,
            "resource": "Your own notes from other roadmap tracks"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 155,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Introduction to Autonomous Agents",
            "priority": "🔴 P0",
            "tasks": "Explain the agent loop (perceive-plan-act)",
            "achievement": "Whiteboard Introduction to Autonomous Agents from memory; answer 3 follow-up questions correctly",
            "day": 156,
            "estimatedHours": 1.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Function Calling (Tool Use)",
            "priority": "🔴 P0",
            "tasks": "Register 2 tools an LLM can call",
            "achievement": "Can explain Function Calling (Tool Use) clearly to a peer and answer follow-up questions without reference",
            "day": 157,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Building Custom Tools",
            "priority": "🔴 P0",
            "tasks": "Build a custom tool wrapping an internal API",
            "achievement": "Working Building Custom Tools demo'd live; handles at least 2 edge cases without reference",
            "day": 158,
            "estimatedHours": 2.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 159,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Model Context Protocol (MCP)",
            "priority": "🟡 P1",
            "tasks": "Expose a tool via MCP; connect a client to it",
            "achievement": "Can explain Model Context Protocol (MCP) clearly to a peer and answer follow-up questions without reference",
            "day": 160,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "OpenAI Assistants API v2",
            "priority": "🔴 P0",
            "tasks": "Build a stateful assistant with file search + tools",
            "achievement": "Working OpenAI Assistants API v2 demo'd live; handles at least 2 edge cases without reference",
            "day": 161,
            "estimatedHours": 2.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "ReAct Prompting Paradigm",
            "priority": "🔴 P0",
            "tasks": "Implement a ReAct loop (Thought → Action → Observation)",
            "achievement": "Working ReAct Prompting Paradigm demo'd live; handles at least 2 edge cases without reference",
            "day": 162,
            "estimatedHours": 2.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 163,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "LangChain Fundamentals",
            "priority": "🟢 P2",
            "tasks": "Chain a prompt → LLM → parser pipeline",
            "achievement": "Can explain LangChain Fundamentals clearly to a peer and answer follow-up questions without reference",
            "day": 164,
            "estimatedHours": 3.5,
            "resource": "Java Performance (Hunt & John) + LangChain docs + python.langchain.com"
          },
          {
            "topic": "LangGraph Concepts + State/StateGraph",
            "priority": "🟡 P1",
            "tasks": "Build a basic stateful graph with 2 nodes",
            "achievement": "Working LangGraph Concepts + State/StateGraph demo'd live; handles at least 2 edge cases without reference",
            "day": 165,
            "estimatedHours": 2.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 166,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "LangGraph: Nodes, Edges, Conditional Edges",
            "priority": "🟡 P1",
            "tasks": "Add branching logic based on state",
            "achievement": "Can explain LangGraph: Nodes, Edges, Conditional Edges clearly to a peer and answer follow-up questions without reference",
            "day": 167,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 168,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "LangGraph: Advanced State (Reducers)",
            "priority": "🟢 P2",
            "tasks": "Implement a custom reducer for accumulating state",
            "achievement": "Working LangGraph: Advanced State (Reducers) demo'd live; handles at least 2 edge cases without reference",
            "day": 169,
            "estimatedHours": 2.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "LangGraph: Persistence (Checkpointers)",
            "priority": "🟢 P2",
            "tasks": "Add checkpointing; resume an interrupted graph run",
            "achievement": "Can explain LangGraph: Persistence (Checkpointers) clearly to a peer and answer follow-up questions without reference",
            "day": 170,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "LangGraph: Human-in-the-Loop",
            "priority": "🟡 P1",
            "tasks": "Add an approval step requiring human input mid-graph",
            "achievement": "Can explain LangGraph: Human-in-the-Loop clearly to a peer and answer follow-up questions without reference",
            "day": 171,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 172,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "LangGraph: Time Travel",
            "priority": "🔴 P0",
            "tasks": "Roll back graph state to a prior checkpoint",
            "achievement": "Can explain LangGraph: Time Travel clearly to a peer and answer follow-up questions without reference",
            "day": 173,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "LangGraph: Multi-Agent Supervisor + Collaboration",
            "priority": "🔴 P0",
            "tasks": "Build a supervisor routing tasks to 2 specialist agents",
            "achievement": "Working LangGraph: Multi-Agent Supervisor + Collaboration demo'd live; handles at least 2 edge cases without reference",
            "day": 174,
            "estimatedHours": 2.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 175,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "LangGraph: Streaming Outputs",
            "priority": "🔴 P0",
            "tasks": "Stream intermediate agent steps to a client",
            "achievement": "Can explain LangGraph: Streaming Outputs clearly to a peer and answer follow-up questions without reference",
            "day": 176,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 177,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Semantic Routing",
            "priority": "🔴 P0",
            "tasks": "Route a query to the correct agent/tool by embedding similarity",
            "achievement": "Can explain Semantic Routing clearly to a peer and answer follow-up questions without reference",
            "day": 178,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "SQL Agents",
            "priority": "🟢 P2",
            "tasks": "Build an agent that safely queries a database",
            "achievement": "Working SQL Agents demo'd live; handles at least 2 edge cases without reference",
            "day": 179,
            "estimatedHours": 2.5,
            "resource": "PostgreSQL Official Docs"
          },
          {
            "topic": "Code Interpreter Agents",
            "priority": "🟡 P1",
            "tasks": "Build an agent that writes + executes code sandboxed",
            "achievement": "Working Code Interpreter Agents demo'd live; handles at least 2 edge cases without reference",
            "day": 180,
            "estimatedHours": 2.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 181,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Web Research Agents (Tavily)",
            "priority": "🟡 P1",
            "tasks": "Build an agent that searches the web and synthesizes an answer",
            "achievement": "Working Web Research Agents (Tavily) demo'd live; handles at least 2 edge cases without reference",
            "day": 182,
            "estimatedHours": 2.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Agent Observability (LangSmith)",
            "priority": "🟢 P2",
            "tasks": "Trace a multi-step agent run; diagnose one failure",
            "achievement": "Given a broken Agent Observability (LangSmith) scenario, identify root cause and fix within 15 minutes",
            "day": 183,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Agent Evaluation + Latency Optimization",
            "priority": "🟡 P1",
            "tasks": "Score agent output quality; reduce end-to-end latency",
            "achievement": "Can explain Agent Evaluation + Latency Optimization clearly to a peer and answer follow-up questions without reference",
            "day": 184,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 185,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "**Phase 4 Capstone: Autonomous Coding/Support Agent**",
            "priority": "🔴 P0",
            "tasks": "Full LangGraph multi-agent system, deployed via FastAPI, observable via LangSmith",
            "achievement": "**Phase 4 Capstone: Autonomous Coding/Support Agent** running in a fresh environment; can reproduce setup from scratch",
            "day": 186,
            "estimatedHours": 4.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 187,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 188,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 189,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 190,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer / catch-up weeks**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 191,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": []
      },
      {
        "id": "3-5",
        "title": "ADVANCED TOPICS, INTERVIEW PREP & GRADUATION",
        "days": "Days 192–230",
        "items": [
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 192,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 193,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 194,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 195,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Cross-Track Interleaved Recall",
            "priority": "-",
            "tasks": "Pick 1 random topic each from 2 other roadmaps you've covered. Explain each from memory, then verify.",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 196,
            "estimatedHours": 1,
            "resource": "Your own notes from other roadmap tracks"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 197,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 198,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 199,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 200,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 201,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 202,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 203,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 204,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 205,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 206,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 207,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 208,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 209,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Cross-Track Interleaved Recall",
            "priority": "-",
            "tasks": "Pick 1 random topic each from 2 other roadmaps you've covered. Explain each from memory, then verify.",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 210,
            "estimatedHours": 1,
            "resource": "Your own notes from other roadmap tracks"
          },
          {
            "topic": "Emerging Frameworks: LlamaIndex vs LangChain, AutoGen, CrewAI",
            "priority": "🟡 P1",
            "tasks": "Build the same small agent in 2 frameworks; compare trade-offs",
            "achievement": "Working Emerging Frameworks: LlamaIndex vs LangChain, AutoGen, CrewAI demo'd live; handles at least 2 edge cases without reference",
            "day": 211,
            "estimatedHours": 2.5,
            "resource": "Java Performance (Hunt & John) + LangChain docs + python.langchain.com"
          },
          {
            "topic": "Advanced: Multimodal Agents + Voice Integration",
            "priority": "🟡 P1",
            "tasks": "Add image or voice input to an existing agent",
            "achievement": "Can explain Advanced: Multimodal Agents + Voice Integration clearly to a peer and answer follow-up questions without reference",
            "day": 212,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Advanced: On-Device LLMs + Distributed Workloads (Ray)",
            "priority": "🟢 P2",
            "tasks": "Explain trade-offs of on-device vs API-served models",
            "achievement": "Whiteboard Advanced: On-Device LLMs + Distributed Workloads (Ray) from memory; answer 3 follow-up questions correctly",
            "day": 213,
            "estimatedHours": 1.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Cost Optimization & Token Management",
            "priority": "🟡 P1",
            "tasks": "Calculate and reduce token cost for a sample pipeline",
            "achievement": "Can explain Cost Optimization & Token Management clearly to a peer and answer follow-up questions without reference",
            "day": 214,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Advanced Security: Jailbreaks & Defenses (deeper pass)",
            "priority": "🟡 P1",
            "tasks": "Attempt an advanced jailbreak; patch the defense",
            "achievement": "Can explain Advanced Security: Jailbreaks & Defenses (deeper pass) clearly to a peer and answer follow-up questions without reference",
            "day": 215,
            "estimatedHours": 3.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 216,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Portfolio Polish",
            "priority": "🔴 P0",
            "tasks": "Clean up 2 capstone repos with full READMEs + architecture diagrams",
            "achievement": "Complete Portfolio Polish project passes code review; can explain every design decision",
            "day": 217,
            "estimatedHours": 4.5,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 218,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Mock Interview: ML Fundamentals & Math",
            "priority": "🔴 P0",
            "tasks": "Timed interview on calculus, backprop, classical ML",
            "achievement": "Pass a timed mock interview round on Mock Interview: ML Fundamentals & Math with no hints",
            "day": 219,
            "estimatedHours": 2,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Mock Interview: Transformer Architecture",
            "priority": "🔴 P0",
            "tasks": "Timed interview on attention, LoRA math, KV-caching",
            "achievement": "Pass a timed mock interview round on Mock Interview: Transformer Architecture with no hints",
            "day": 220,
            "estimatedHours": 2,
            "resource": "Attention Is All You Need (Vaswani)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 221,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Mock Interview: RAG System Design",
            "priority": "🔴 P0",
            "tasks": "Design a multi-tenant RAG system for a legal firm live",
            "achievement": "Complete design for Mock Interview: RAG System Design with trade-offs documented; survives 5-minute peer critique",
            "day": 222,
            "estimatedHours": 2,
            "resource": "LangChain docs + python.langchain.com"
          },
          {
            "topic": "Mock Interview: Agent System Design",
            "priority": "🔴 P0",
            "tasks": "Design an autonomous coding assistant at scale live",
            "achievement": "Complete design for Mock Interview: Agent System Design with trade-offs documented; survives 5-minute peer critique",
            "day": 223,
            "estimatedHours": 2,
            "resource": "Hands-On LLMs (Alammar) + huggingface.co/learn"
          },
          {
            "topic": "Weak-Spot Review",
            "priority": "-",
            "tasks": "Revisit flagged gaps from all 4 mock interviews",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 224,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 225,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 226,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "**Graduation: Final Portfolio Review & Reflection**",
            "priority": "-",
            "tasks": "Review full journey: Python → Deep Learning → RAG → Agents; finalize resume/GitHub",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 227,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 228,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 229,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 230,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          }
        ],
        "dependencies": []
      }
    ]
  },
  {
    "id": 4,
    "title": "Linux, OS & Databases",
    "days": 150,
    "color": "amber",
    "phases": [
      {
        "id": "4-1",
        "title": "LINUX & OS INTERNALS",
        "days": "Days 1–30",
        "items": [
          {
            "topic": "OS Fundamentals & Kernel (kernel/user space, syscalls)",
            "priority": "🟢 P2",
            "tasks": "Explain the kernel's role in hardware resource management",
            "achievement": "Whiteboard OS Fundamentals & Kernel (kernel/user space, syscalls) from memory; answer 3 follow-up questions correctly",
            "day": 1,
            "estimatedHours": 1.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Linux Filesystem Hierarchy (`/etc`, `/var`, `/dev`, etc.)",
            "priority": "🟢 P2",
            "tasks": "Navigate to logs, configs, and binaries without searching blindly",
            "achievement": "Can explain Linux Filesystem Hierarchy (`/etc`, `/var`, `/dev`, etc.) clearly to a peer and answer follow-up questions without reference",
            "day": 2,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Essential CLI Navigation (`cd`, `ls -la`, `find` paths)",
            "priority": "🔴 P0",
            "tasks": "Manipulate files/dirs via CLI only, no GUI, at speed",
            "achievement": "Can explain Essential CLI Navigation (`cd`, `ls -la`, `find` paths) clearly to a peer and answer follow-up questions without reference",
            "day": 3,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "File Reading & Searching (`cat`, `less`, `tail -f`, `grep -iE`)",
            "priority": "🟡 P1",
            "tasks": "Monitor a live log and extract specific errors via grep",
            "achievement": "Can explain File Reading & Searching (`cat`, `less`, `tail -f`, `grep -iE`) clearly to a peer and answer follow-up questions without reference",
            "day": 4,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Finding Files (`find -name`, `-size`, `-mtime`)",
            "priority": "🟡 P1",
            "tasks": "Locate files by complex metadata rules (size + date + name)",
            "achievement": "Can explain Finding Files (`find -name`, `-size`, `-mtime`) clearly to a peer and answer follow-up questions without reference",
            "day": 5,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 6,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Pipes & Redirection (stdin/stdout/stderr, `\\",
            "priority": "🟢 P2",
            "tasks": "Chain 3+ utilities into one data transformation pipeline",
            "achievement": "Can explain Pipes & Redirection (stdin/stdout/stderr, `\\ clearly to a peer and answer follow-up questions without reference",
            "day": 7,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "User & Group Management + Permissions (chmod/chown)",
            "priority": "🔴 P0",
            "tasks": "Provision a new dev user; secure an SSH key with chmod 400",
            "achievement": "Can explain User & Group Management + Permissions (chmod/chown) clearly to a peer and answer follow-up questions without reference",
            "day": 8,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Sudo & Privilege Escalation (`visudo`)",
            "priority": "🟡 P1",
            "tasks": "Grant a user service-restart rights without full root",
            "achievement": "Can explain Sudo & Privilege Escalation (`visudo`) clearly to a peer and answer follow-up questions without reference",
            "day": 9,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Process Management (`ps aux`, `top`/`htop`, `kill`)",
            "priority": "🔴 P0",
            "tasks": "Identify and safely terminate a runaway process",
            "achievement": "Can explain Process Management (`ps aux`, `top`/`htop`, `kill`) clearly to a peer and answer follow-up questions without reference",
            "day": 10,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 11,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "OS Internals: Concurrency (mutexes, semaphores, race conditions)",
            "priority": "🟢 P2",
            "tasks": "Implement a thread-safe producer-consumer queue",
            "achievement": "Working OS Internals: Concurrency (mutexes, semaphores, race conditions) demo'd live; handles at least 2 edge cases without reference",
            "day": 12,
            "estimatedHours": 2.5,
            "resource": "Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 13,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "OS Internals: CPU Scheduling & Deadlocks",
            "priority": "🟢 P2",
            "tasks": "Explain 2 scheduling algorithms; diagram a deadlock scenario",
            "achievement": "Whiteboard OS Internals: CPU Scheduling & Deadlocks from memory; answer 3 follow-up questions correctly",
            "day": 14,
            "estimatedHours": 1.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "OS Internals: Paging & Virtual Memory",
            "priority": "🔴 P0",
            "tasks": "Explain how virtual addresses map to physical memory",
            "achievement": "Whiteboard OS Internals: Paging & Virtual Memory from memory; answer 3 follow-up questions correctly",
            "day": 15,
            "estimatedHours": 1.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 16,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Diagnostic Tools (`strace`, `lsof`, `perf`)",
            "priority": "🟢 P2",
            "tasks": "Trace syscalls of a running process; find its open file handles",
            "achievement": "Can explain Diagnostic Tools (`strace`, `lsof`, `perf`) clearly to a peer and answer follow-up questions without reference",
            "day": 17,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Background Jobs & Screen/Tmux",
            "priority": "🟢 P2",
            "tasks": "Run a long job detached, reattach to it later",
            "achievement": "Can explain Background Jobs & Screen/Tmux clearly to a peer and answer follow-up questions without reference",
            "day": 18,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Daemons & systemd",
            "priority": "🟡 P1",
            "tasks": "Write a custom systemd service unit",
            "achievement": "Working Daemons & systemd demo'd live; handles at least 2 edge cases without reference",
            "day": 19,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Package Management (APT/YUM)",
            "priority": "🟡 P1",
            "tasks": "Install, update, and remove a package cleanly",
            "achievement": "Can explain Package Management (APT/YUM) clearly to a peer and answer follow-up questions without reference",
            "day": 20,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 21,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Archive & Compression (`tar`, `gzip`)",
            "priority": "🔴 P0",
            "tasks": "Compress and extract a directory tree",
            "achievement": "Can explain Archive & Compression (`tar`, `gzip`) clearly to a peer and answer follow-up questions without reference",
            "day": 22,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Disk Usage & Partitions (`df`, `du`, `fdisk`)",
            "priority": "🔴 P0",
            "tasks": "Diagnose which directory is consuming disk space",
            "achievement": "Given a broken Disk Usage & Partitions (`df`, `du`, `fdisk`) scenario, identify root cause and fix within 15 minutes",
            "day": 23,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Symlinks & Hard Links + Environment Variables",
            "priority": "🟡 P1",
            "tasks": "Create both link types; explain `$PATH` resolution",
            "achievement": "Working Symlinks & Hard Links + Environment Variables demo'd live; handles at least 2 edge cases without reference",
            "day": 24,
            "estimatedHours": 1.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Networking Basics in CLI + Port Checking/Firewalls (UFW)",
            "priority": "🔴 P0",
            "tasks": "Check open ports; configure a firewall rule",
            "achievement": "Networking Basics in CLI + Port Checking/Firewalls (UFW) running in a fresh environment; can reproduce setup from scratch",
            "day": 25,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 26,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "SSH Configuration & Keys",
            "priority": "🔴 P0",
            "tasks": "Set up passwordless SSH key auth to a remote host",
            "achievement": "Can explain SSH Configuration & Keys clearly to a peer and answer follow-up questions without reference",
            "day": 27,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Memory & Swap Management + Cron Jobs & Log Rotation",
            "priority": "🟢 P2",
            "tasks": "Configure a cron job; set up logrotate for a growing log file",
            "achievement": "Memory & Swap Management + Cron Jobs & Log Rotation running in a fresh environment; can reproduce setup from scratch",
            "day": 28,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Vim/Nano Essentials",
            "priority": "🟢 P2",
            "tasks": "Edit a config file entirely via keyboard, no mouse",
            "achievement": "Can explain Vim/Nano Essentials clearly to a peer and answer follow-up questions without reference",
            "day": 29,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Phase 1 Capstone: Linux Survival Test**",
            "priority": "🔴 P0",
            "tasks": "Provision a fresh server: users, permissions, firewall, SSH, a systemd service, and log rotation — all from scratch",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 30,
            "estimatedHours": 4.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          }
        ],
        "dependencies": []
      },
      {
        "id": "4-2",
        "title": "BASH, NGINX & GIT ENGINEERING",
        "days": "Days 31–54",
        "items": [
          {
            "topic": "Bash Scripting Basics",
            "priority": "🟢 P2",
            "tasks": "Write a script with variables and arguments",
            "achievement": "Working Bash Scripting Basics demo'd live; handles at least 2 edge cases without reference",
            "day": 31,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Bash Conditionals + Loops (If/Else, For/While)",
            "priority": "🟡 P1",
            "tasks": "Write a script that loops over files and branches on conditions",
            "achievement": "Working Bash Conditionals + Loops (If/Else, For/While) demo'd live; handles at least 2 edge cases without reference",
            "day": 32,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Advanced Text Processing: AWK",
            "priority": "🔴 P0",
            "tasks": "Extract and transform columns from a log file with AWK",
            "achievement": "Can explain Advanced Text Processing: AWK clearly to a peer and answer follow-up questions without reference",
            "day": 33,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Advanced Text Processing: SED",
            "priority": "🔴 P0",
            "tasks": "Perform a find-replace across multiple files with SED",
            "achievement": "Can explain Advanced Text Processing: SED clearly to a peer and answer follow-up questions without reference",
            "day": 34,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 35,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "DNS & Domains (real-world resolution)",
            "priority": "🟡 P1",
            "tasks": "Trace a domain's DNS resolution chain with `dig`",
            "achievement": "Can explain DNS & Domains (real-world resolution) clearly to a peer and answer follow-up questions without reference",
            "day": 36,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Nginx Fundamentals",
            "priority": "🟢 P2",
            "tasks": "Serve a static site with Nginx",
            "achievement": "Can explain Nginx Fundamentals clearly to a peer and answer follow-up questions without reference",
            "day": 37,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Nginx Reverse Proxy",
            "priority": "🔴 P0",
            "tasks": "Proxy requests to a backend app",
            "achievement": "Can explain Nginx Reverse Proxy clearly to a peer and answer follow-up questions without reference",
            "day": 38,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Nginx Load Balancing",
            "priority": "🔴 P0",
            "tasks": "Load balance across 2+ backend instances",
            "achievement": "Can explain Nginx Load Balancing clearly to a peer and answer follow-up questions without reference",
            "day": 39,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 40,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "SSL/TLS with Nginx (Certbot)",
            "priority": "🔴 P0",
            "tasks": "Enable HTTPS with a free Let's Encrypt cert",
            "achievement": "Can explain SSL/TLS with Nginx (Certbot) clearly to a peer and answer follow-up questions without reference",
            "day": 41,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Nginx Caching, Gzip & Rate Limiting",
            "priority": "🔴 P0",
            "tasks": "Enable response caching + compression; rate-limit an endpoint",
            "achievement": "Can explain Nginx Caching, Gzip & Rate Limiting clearly to a peer and answer follow-up questions without reference",
            "day": 42,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Git Internals: Trees & Blobs",
            "priority": "🟢 P2",
            "tasks": "Explain what a commit object actually contains",
            "achievement": "Whiteboard Git Internals: Trees & Blobs from memory; answer 3 follow-up questions correctly",
            "day": 43,
            "estimatedHours": 1.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Advanced Git Branching Strategy",
            "priority": "🔴 P0",
            "tasks": "Set up a Git Flow or trunk-based branching model",
            "achievement": "Can explain Advanced Git Branching Strategy clearly to a peer and answer follow-up questions without reference",
            "day": 44,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 45,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Git Merging vs Rebasing + Resolving Conflicts",
            "priority": "🟢 P2",
            "tasks": "Resolve a real merge conflict; explain merge vs rebase trade-offs",
            "achievement": "Whiteboard Git Merging vs Rebasing + Resolving Conflicts from memory; answer 3 follow-up questions correctly",
            "day": 46,
            "estimatedHours": 1.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Git Reset & Revert + Interactive Rebase",
            "priority": "🟡 P1",
            "tasks": "Squash 3 commits interactively; safely undo a bad commit",
            "achievement": "Can explain Git Reset & Revert + Interactive Rebase clearly to a peer and answer follow-up questions without reference",
            "day": 47,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Git Stash & Cherry-Pick + Git Hooks",
            "priority": "🟡 P1",
            "tasks": "Cherry-pick a commit across branches; write a pre-commit hook",
            "achievement": "Working Git Stash & Cherry-Pick + Git Hooks demo'd live; handles at least 2 edge cases without reference",
            "day": 48,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "SSH Git Authentication",
            "priority": "🟡 P1",
            "tasks": "Set up SSH-based Git auth for a remote repo",
            "achievement": "Can explain SSH Git Authentication clearly to a peer and answer follow-up questions without reference",
            "day": 49,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 50,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Monorepos vs Polyrepos + Semantic Versioning",
            "priority": "🔴 P0",
            "tasks": "Justify a repo strategy choice; version a release with SemVer",
            "achievement": "Can explain Monorepos vs Polyrepos + Semantic Versioning clearly to a peer and answer follow-up questions without reference",
            "day": 51,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Phase 2 Capstone: Deploy a Load-Balanced App**",
            "priority": "🔴 P0",
            "tasks": "Nginx reverse-proxying 2 app instances behind HTTPS, with a Git-based deployment flow",
            "achievement": "**Phase 2 Capstone: Deploy a Load-Balanced App** running in a fresh environment; can reproduce setup from scratch",
            "day": 52,
            "estimatedHours": 4.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 53,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer / catch-up weeks**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 54,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": []
      },
      {
        "id": "4-3",
        "title": "RELATIONAL DBs & SQL MASTERY",
        "days": "Days 55–94",
        "items": [
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 55,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Cross-Track Interleaved Recall",
            "priority": "-",
            "tasks": "Pick 1 random topic each from 2 other roadmaps you've covered. Explain each from memory, then verify.",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 56,
            "estimatedHours": 1,
            "resource": "Your own notes from other roadmap tracks"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 57,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 58,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 59,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 60,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "PostgreSQL Architecture + Advanced Data Types",
            "priority": "🟡 P1",
            "tasks": "Explain Postgres process architecture; use JSONB, arrays, enums",
            "achievement": "Whiteboard PostgreSQL Architecture + Advanced Data Types from memory; answer 3 follow-up questions correctly",
            "day": 61,
            "estimatedHours": 1.5,
            "resource": "PostgreSQL Official Docs"
          },
          {
            "topic": "JSONB in PostgreSQL",
            "priority": "🟢 P2",
            "tasks": "Query and index a JSONB column",
            "achievement": "Can explain JSONB in PostgreSQL clearly to a peer and answer follow-up questions without reference",
            "day": 62,
            "estimatedHours": 3.5,
            "resource": "PostgreSQL Official Docs"
          },
          {
            "topic": "Complex JOIN Operations",
            "priority": "🔴 P0",
            "tasks": "Write a 4-table join with correct join types",
            "achievement": "Working Complex JOIN Operations demo'd live; handles at least 2 edge cases without reference",
            "day": 63,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 64,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Subqueries and CTEs (WITH clause)",
            "priority": "🟡 P1",
            "tasks": "Refactor a nested subquery into a readable CTE",
            "achievement": "Can explain Subqueries and CTEs (WITH clause) clearly to a peer and answer follow-up questions without reference",
            "day": 65,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Window Functions: OVER & PARTITION BY",
            "priority": "🟢 P2",
            "tasks": "Compute a running total per group",
            "achievement": "Can explain Window Functions: OVER & PARTITION BY clearly to a peer and answer follow-up questions without reference",
            "day": 66,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Window Functions: LEAD & LAG",
            "priority": "🔴 P0",
            "tasks": "Compute period-over-period change using LEAD/LAG",
            "achievement": "Can explain Window Functions: LEAD & LAG clearly to a peer and answer follow-up questions without reference",
            "day": 67,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 68,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Database Normalization + Denormalization Strategies",
            "priority": "🟢 P2",
            "tasks": "Normalize a messy schema to 3NF, then justify a denormalization tradeoff",
            "achievement": "Can explain Database Normalization + Denormalization Strategies clearly to a peer and answer follow-up questions without reference",
            "day": 69,
            "estimatedHours": 3.5,
            "resource": "PostgreSQL Official Docs"
          },
          {
            "topic": "Indexing: B-Trees Under the Hood + EXPLAIN ANALYZE",
            "priority": "🔴 P0",
            "tasks": "Explain a query plan; add an index that fixes a slow query",
            "achievement": "Whiteboard Indexing: B-Trees Under the Hood + EXPLAIN ANALYZE from memory; answer 3 follow-up questions correctly",
            "day": 70,
            "estimatedHours": 1.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 71,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Advanced Indexing Strategies (composite, partial, covering)",
            "priority": "🔴 P0",
            "tasks": "Build a covering index for a specific slow query",
            "achievement": "Working Advanced Indexing Strategies (composite, partial, covering) demo'd live; handles at least 2 edge cases without reference",
            "day": 72,
            "estimatedHours": 2.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 73,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Transactions and ACID in Postgres",
            "priority": "🔴 P0",
            "tasks": "Demonstrate a rollback on constraint violation",
            "achievement": "Can explain Transactions and ACID in Postgres clearly to a peer and answer follow-up questions without reference",
            "day": 74,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Isolation Levels & MVCC",
            "priority": "🟡 P1",
            "tasks": "Reproduce a dirty read vs repeatable read scenario",
            "achievement": "Correct comparison of Isolation Levels & MVCC with 5+ dimensions; justify a choice for a given scenario",
            "day": 75,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 76,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 77,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "PostgreSQL Internals: WAL, MVCC & Vacuum",
            "priority": "🔴 P0",
            "tasks": "Explain how WAL enables crash recovery; run manual VACUUM",
            "achievement": "Whiteboard PostgreSQL Internals: WAL, MVCC & Vacuum from memory; answer 3 follow-up questions correctly",
            "day": 78,
            "estimatedHours": 1.5,
            "resource": "PostgreSQL Official Docs"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 79,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Locks in PostgreSQL",
            "priority": "🟢 P2",
            "tasks": "Reproduce and resolve a lock contention scenario",
            "achievement": "Can explain Locks in PostgreSQL clearly to a peer and answer follow-up questions without reference",
            "day": 80,
            "estimatedHours": 3.5,
            "resource": "PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 81,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Views and Materialized Views",
            "priority": "🔴 P0",
            "tasks": "Create a materialized view; explain refresh trade-offs",
            "achievement": "Working Views and Materialized Views demo'd live; handles at least 2 edge cases without reference",
            "day": 82,
            "estimatedHours": 1.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Stored Procedures & Functions + Triggers",
            "priority": "🔴 P0",
            "tasks": "Write a trigger that auto-updates an audit column",
            "achievement": "Working Stored Procedures & Functions + Triggers demo'd live; handles at least 2 edge cases without reference",
            "day": 83,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "VACUUM and Maintenance + Connection Pooling (PgBouncer)",
            "priority": "🟡 P1",
            "tasks": "Configure PgBouncer in front of Postgres",
            "achievement": "VACUUM and Maintenance + Connection Pooling (PgBouncer) running in a fresh environment; can reproduce setup from scratch",
            "day": 84,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 85,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Database Replication (Primary/Replica)",
            "priority": "🟡 P1",
            "tasks": "Set up a working primary-replica Postgres cluster",
            "achievement": "Can explain Database Replication (Primary/Replica) clearly to a peer and answer follow-up questions without reference",
            "day": 86,
            "estimatedHours": 3.5,
            "resource": "PostgreSQL Official Docs"
          },
          {
            "topic": "Sharding / Partitioning",
            "priority": "🔴 P0",
            "tasks": "Partition a large table by range or hash",
            "achievement": "Can explain Sharding / Partitioning clearly to a peer and answer follow-up questions without reference",
            "day": 87,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Backup and Restore (`pg_dump`) + Security and Roles",
            "priority": "🟢 P2",
            "tasks": "Take a backup, restore it, and configure role-based access",
            "achievement": "Backup and Restore (`pg_dump`) + Security and Roles running in a fresh environment; can reproduce setup from scratch",
            "day": 88,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 89,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Advanced Topic: pgvector",
            "priority": "🟡 P1",
            "tasks": "Store and query embeddings directly in Postgres",
            "achievement": "Can explain Advanced Topic: pgvector clearly to a peer and answer follow-up questions without reference",
            "day": 90,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Phase 3 Capstone: Production-Grade Postgres Setup**",
            "priority": "🔴 P0",
            "tasks": "Replicated, pooled, backed-up, indexed schema with roles and a pgvector extension",
            "achievement": "Complete **Phase 3 Capstone: Production-Grade Postgres Setup** project passes code review; can explain every design decision",
            "day": 91,
            "estimatedHours": 4.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 92,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 93,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer / catch-up weeks**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 94,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": []
      },
      {
        "id": "4-4",
        "title": "NoSQL, ELASTICSEARCH & CACHING",
        "days": "Days 95–125",
        "items": [
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 95,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 96,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 97,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Cross-Track Interleaved Recall",
            "priority": "-",
            "tasks": "Pick 1 random topic each from 2 other roadmaps you've covered. Explain each from memory, then verify.",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 98,
            "estimatedHours": 1,
            "resource": "Your own notes from other roadmap tracks"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 99,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 100,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Redis Data Structures (strings, hashes, lists, sets, sorted sets)",
            "priority": "🟡 P1",
            "tasks": "Model a leaderboard using Redis sorted sets",
            "achievement": "Can explain Redis Data Structures (strings, hashes, lists, sets, sorted sets) clearly to a peer and answer follow-up questions without reference",
            "day": 101,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Redis Internals: Persistence & Eviction (RDB/AOF)",
            "priority": "🟡 P1",
            "tasks": "Configure persistence; explain an eviction policy choice",
            "achievement": "Whiteboard Redis Internals: Persistence & Eviction (RDB/AOF) from memory; answer 3 follow-up questions correctly",
            "day": 102,
            "estimatedHours": 1.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Redis Caching Strategies + Advanced Use Cases",
            "priority": "🟡 P1",
            "tasks": "Implement cache-aside caching for a slow query",
            "achievement": "Working Redis Caching Strategies + Advanced Use Cases demo'd live; handles at least 2 edge cases without reference",
            "day": 103,
            "estimatedHours": 2.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 104,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Redis Cluster (hands-on)",
            "priority": "🟡 P1",
            "tasks": "Stand up a 3-node Redis cluster",
            "achievement": "Can explain Redis Cluster (hands-on) clearly to a peer and answer follow-up questions without reference",
            "day": 105,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Dedicated Vector Databases (Pinecone & Weaviate)",
            "priority": "🟡 P1",
            "tasks": "Compare pgvector vs a dedicated vector DB for a given use case",
            "achievement": "Correct comparison of Dedicated Vector Databases (Pinecone & Weaviate) with 5+ dimensions; justify a choice for a given scenario",
            "day": 106,
            "estimatedHours": 3.5,
            "resource": "PostgreSQL Official Docs"
          },
          {
            "topic": "MongoDB: Document Modeling",
            "priority": "🟡 P1",
            "tasks": "Model a blog with embedded vs referenced comments",
            "achievement": "Correct comparison of MongoDB: Document Modeling with 5+ dimensions; justify a choice for a given scenario",
            "day": 107,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 108,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "MongoDB: CRUD & Aggregation",
            "priority": "🟢 P2",
            "tasks": "Write an aggregation pipeline computing a summary metric",
            "achievement": "Working MongoDB: CRUD & Aggregation demo'd live; handles at least 2 edge cases without reference",
            "day": 109,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "MongoDB: Indexes & Sharding",
            "priority": "🔴 P0",
            "tasks": "Add an index; explain a shard key choice",
            "achievement": "Whiteboard MongoDB: Indexes & Sharding from memory; answer 3 follow-up questions correctly",
            "day": 110,
            "estimatedHours": 1.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Elasticsearch: The Inverted Index",
            "priority": "🔴 P0",
            "tasks": "Explain how an inverted index enables full-text search",
            "achievement": "Whiteboard Elasticsearch: The Inverted Index from memory; answer 3 follow-up questions correctly",
            "day": 111,
            "estimatedHours": 1.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 112,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Elasticsearch: Query DSL + Analyzers",
            "priority": "🟢 P2",
            "tasks": "Write a bool query with filters; configure a custom analyzer",
            "achievement": "Working Elasticsearch: Query DSL + Analyzers demo'd live; handles at least 2 edge cases without reference",
            "day": 113,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Cassandra Architecture + Keys & Partitioning",
            "priority": "🔴 P0",
            "tasks": "Explain masterless replication; design a partition key",
            "achievement": "Whiteboard Cassandra Architecture + Keys & Partitioning from memory; answer 3 follow-up questions correctly",
            "day": 114,
            "estimatedHours": 1.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 115,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Cassandra Query-Driven Modeling + vs Postgres/Mongo",
            "priority": "🟡 P1",
            "tasks": "Design a Cassandra table for a specific access pattern",
            "achievement": "Complete design for Cassandra Query-Driven Modeling + vs Postgres/Mongo with trade-offs documented; survives 5-minute peer critique",
            "day": 116,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 117,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Message Brokers: RabbitMQ",
            "priority": "🟡 P1",
            "tasks": "Publish/consume a message via RabbitMQ",
            "achievement": "Can explain Message Brokers: RabbitMQ clearly to a peer and answer follow-up questions without reference",
            "day": 118,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Event Streaming: Kafka vs RabbitMQ",
            "priority": "🟡 P1",
            "tasks": "Justify choosing one over the other for a given scenario",
            "achievement": "Can explain Event Streaming: Kafka vs RabbitMQ clearly to a peer and answer follow-up questions without reference",
            "day": 119,
            "estimatedHours": 3.5,
            "resource": "Kafka: The Definitive Guide (Shapira)"
          },
          {
            "topic": "Neo4j & Graph DBs Concepts + Hands-On",
            "priority": "🟢 P2",
            "tasks": "Model and query a social graph with Cypher",
            "achievement": "Can explain Neo4j & Graph DBs Concepts + Hands-On clearly to a peer and answer follow-up questions without reference",
            "day": 120,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 121,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "**Phase 4 Capstone: Polyglot Persistence System**",
            "priority": "🔴 P0",
            "tasks": "One system using Redis (cache), MongoDB (docs), Elasticsearch (search), justified by access pattern",
            "achievement": "Complete **Phase 4 Capstone: Polyglot Persistence System** project passes code review; can explain every design decision",
            "day": 122,
            "estimatedHours": 4.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 123,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 124,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer / catch-up weeks**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 125,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": []
      },
      {
        "id": "4-5",
        "title": "DB ADMINISTRATION & REAL-WORLD ARCHITECTURE",
        "days": "Days 126–150",
        "items": [
          {
            "topic": "📝 Cross-Track Interleaved Recall",
            "priority": "-",
            "tasks": "Pick 1 random topic each from 2 other roadmaps you've covered. Explain each from memory, then verify.",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 126,
            "estimatedHours": 1,
            "resource": "Your own notes from other roadmap tracks"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 127,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 128,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 129,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 130,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Database High Availability",
            "priority": "🔴 P0",
            "tasks": "Design a failover strategy for a critical DB",
            "achievement": "Complete design for Database High Availability with trade-offs documented; survives 5-minute peer critique",
            "day": 131,
            "estimatedHours": 3.5,
            "resource": "PostgreSQL Official Docs"
          },
          {
            "topic": "Data Migration Strategies",
            "priority": "🟢 P2",
            "tasks": "Plan a zero-downtime schema migration",
            "achievement": "Can explain Data Migration Strategies clearly to a peer and answer follow-up questions without reference",
            "day": 132,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "Change Data Capture (Debezium)",
            "priority": "🟡 P1",
            "tasks": "Stream Postgres updates to Kafka automatically",
            "achievement": "Can explain Change Data Capture (Debezium) clearly to a peer and answer follow-up questions without reference",
            "day": 133,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 134,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Database Security & Encryption (at rest + in transit)",
            "priority": "🔴 P0",
            "tasks": "Configure SSL for DB connections; verify encryption at rest",
            "achievement": "Database Security & Encryption (at rest + in transit) running in a fresh environment; can reproduce setup from scratch",
            "day": 135,
            "estimatedHours": 3.5,
            "resource": "PostgreSQL Official Docs"
          },
          {
            "topic": "Cloud Databases (RDS/Aurora)",
            "priority": "🟡 P1",
            "tasks": "Compare RDS vs Aurora's distributed storage; justify a choice",
            "achievement": "Correct comparison of Cloud Databases (RDS/Aurora) with 5+ dimensions; justify a choice for a given scenario",
            "day": 136,
            "estimatedHours": 3.5,
            "resource": "PostgreSQL Official Docs"
          },
          {
            "topic": "NoSQL in the Cloud (DynamoDB)",
            "priority": "🟡 P1",
            "tasks": "Design a partition/sort key + GSI for a serverless use case",
            "achievement": "Complete design for NoSQL in the Cloud (DynamoDB) with trade-offs documented; survives 5-minute peer critique",
            "day": 137,
            "estimatedHours": 3.5,
            "resource": "PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 138,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Database Troubleshooting (live incident simulation)",
            "priority": "🟢 P2",
            "tasks": "Diagnose and kill a long-running query via `pg_stat_activity`",
            "achievement": "Given a broken Database Troubleshooting (live incident simulation) scenario, identify root cause and fix within 15 minutes",
            "day": 139,
            "estimatedHours": 3.5,
            "resource": "PostgreSQL Official Docs"
          },
          {
            "topic": "Performance Benchmarking (`pgbench`)",
            "priority": "🟡 P1",
            "tasks": "Tune `shared_buffers`/`work_mem`; measure TPS improvement",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 140,
            "estimatedHours": 3.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 141,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "**Final Capstone: \"Netflix Clone\" Data Architecture**",
            "priority": "🔴 P0",
            "tasks": "Full schema: relational (users/billing) + NoSQL (watch history) + Elasticsearch (search)",
            "achievement": "Complete **Final Capstone: \"Netflix Clone\" Data Architecture** project passes code review; can explain every design decision",
            "day": 142,
            "estimatedHours": 4.5,
            "resource": "The Linux Command Line (Shotts) + PostgreSQL Official Docs"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 143,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 144,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 145,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Final Review & Mock Interviews",
            "priority": "-",
            "tasks": "B-Trees, isolation levels, N+1, CAP theorem, DB selection tradeoffs",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 146,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 147,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 148,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 149,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "**Graduation: Reflection & Portfolio Review**",
            "priority": "-",
            "tasks": "Review the full journey from Linux fundamentals to production DB architecture",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 150,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": []
      }
    ]
  },
  {
    "id": 5,
    "title": "DevOps, Cloud & MLOps",
    "days": 141,
    "color": "sky",
    "phases": [
      {
        "id": "5-1",
        "title": "CONTAINERIZATION & CLOUD FUNDAMENTALS",
        "days": "Days 1–23",
        "items": [
          {
            "topic": "DevOps Philosophy & Docker Architecture (containers vs VMs)",
            "priority": "🔴 P0",
            "tasks": "Explain why Docker solves \"works on my machine\"; diagram container vs VM",
            "achievement": "Whiteboard DevOps Philosophy & Docker Architecture (containers vs VMs) from memory; answer 3 follow-up questions correctly",
            "day": 1,
            "estimatedHours": 1.5,
            "resource": "docs.docker.com"
          },
          {
            "topic": "Core Docker Commands (`run`, `ps`, `exec`, `logs`, `stop`, `rm`)",
            "priority": "🔴 P0",
            "tasks": "Manage the full lifecycle of 3 pre-built images",
            "achievement": "Can explain Core Docker Commands (`run`, `ps`, `exec`, `logs`, `stop`, `rm`) clearly to a peer and answer follow-up questions without reference",
            "day": 2,
            "estimatedHours": 3.5,
            "resource": "docs.docker.com"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 3,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Writing Dockerfiles (Spring Boot + Flask apps)",
            "priority": "🔴 P0",
            "tasks": "Dockerize both apps from scratch, using `FROM`/`WORKDIR`/`COPY`/`RUN`/`CMD`",
            "achievement": "Can explain Writing Dockerfiles (Spring Boot + Flask apps) clearly to a peer and answer follow-up questions without reference",
            "day": 4,
            "estimatedHours": 3.5,
            "resource": "docs.docker.com"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 5,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Multi-Stage Builds",
            "priority": "🟢 P2",
            "tasks": "Cut your Java image size by >70% (JDK build stage → JRE-alpine run stage)",
            "achievement": "Working Multi-Stage Builds demo'd live; handles at least 2 edge cases without reference",
            "day": 6,
            "estimatedHours": 2.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 7,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Docker Volumes (state persistence)",
            "priority": "🔴 P0",
            "tasks": "Run Postgres in a container; data survives a restart via mounted volume",
            "achievement": "Can explain Docker Volumes (state persistence) clearly to a peer and answer follow-up questions without reference",
            "day": 8,
            "estimatedHours": 3.5,
            "resource": "docs.docker.com"
          },
          {
            "topic": "Docker Networks",
            "priority": "🔴 P0",
            "tasks": "Two containers communicate by container name, no hardcoded IPs",
            "achievement": "Can explain Docker Networks clearly to a peer and answer follow-up questions without reference",
            "day": 9,
            "estimatedHours": 3.5,
            "resource": "docs.docker.com"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 10,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Docker Compose",
            "priority": "🔴 P0",
            "tasks": "3-tier app (frontend+backend+db) orchestrated via one `docker-compose.yml`",
            "achievement": "Can explain Docker Compose clearly to a peer and answer follow-up questions without reference",
            "day": 11,
            "estimatedHours": 3.5,
            "resource": "docs.docker.com"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 12,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Image Registries, Tagging, `.dockerignore`, Layer Caching",
            "priority": "🔴 P0",
            "tasks": "Push a versioned image to Docker Hub or ECR",
            "achievement": "Can explain Image Registries, Tagging, `.dockerignore`, Layer Caching clearly to a peer and answer follow-up questions without reference",
            "day": 13,
            "estimatedHours": 3.5,
            "resource": "docs.docker.com"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 14,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Cloud Fundamentals: IAM, VPC, Subnets, Security Groups",
            "priority": "🔴 P0",
            "tasks": "Diagram a VPC with public/private subnets; explain least-privilege IAM",
            "achievement": "Whiteboard Cloud Fundamentals: IAM, VPC, Subnets, Security Groups from memory; answer 3 follow-up questions correctly",
            "day": 15,
            "estimatedHours": 1.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 16,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "EC2 Deploy: launch, SSH in, deploy Dockerized app manually",
            "priority": "🔴 P0",
            "tasks": "App reachable via public IP — then **terminate the instance**",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 17,
            "estimatedHours": 3.5,
            "resource": "docs.docker.com"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 18,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 19,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Container Security Basics (Trivy scanning, non-root users, minimal base images)",
            "priority": "🔴 P0",
            "tasks": "Scan one of your images, fix the top findings",
            "achievement": "Given a broken Container Security Basics (Trivy scanning, non-root users, minimal base images) scenario, identify root cause and fix within 15 minutes",
            "day": 20,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "**Phase 1 Capstone: 3-Tier Compose App**",
            "priority": "🔴 P0",
            "tasks": "Scanned images, pushed to a registry, documented in a README",
            "achievement": "Complete **Phase 1 Capstone: 3-Tier Compose App** project passes code review; can explain every design decision",
            "day": 21,
            "estimatedHours": 4.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 22,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 23,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": [
          "2-2"
        ]
      },
      {
        "id": "5-2",
        "title": "INFRASTRUCTURE AS CODE & CI/CD",
        "days": "Days 24–46",
        "items": [
          {
            "topic": "Terraform Basics (`provider`, state, `plan`/`apply`/`destroy`)",
            "priority": "🔴 P0",
            "tasks": "Provision an S3 bucket + IAM role via Terraform",
            "achievement": "Can explain Terraform Basics (`provider`, state, `plan`/`apply`/`destroy`) clearly to a peer and answer follow-up questions without reference",
            "day": 24,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 25,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Terraform: VPC + EC2 Module",
            "priority": "🔴 P0",
            "tasks": "Reusable module, **destroyed** after verification",
            "achievement": "Can explain Terraform: VPC + EC2 Module clearly to a peer and answer follow-up questions without reference",
            "day": 26,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 27,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Cross-Track Interleaved Recall",
            "priority": "-",
            "tasks": "Pick 1 random topic each from 2 other roadmaps you've covered. Explain each from memory, then verify.",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 28,
            "estimatedHours": 1,
            "resource": "Your own notes from other roadmap tracks"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 29,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Terraform State Management (remote backend + locking)",
            "priority": "🔴 P0",
            "tasks": "Migrate local state to S3 backend with DynamoDB locking",
            "achievement": "Can explain Terraform State Management (remote backend + locking) clearly to a peer and answer follow-up questions without reference",
            "day": 30,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "Git Workflows for Infra Teams (branching, PR review, GitOps intro)",
            "priority": "-",
            "tasks": "Open a PR with an infra change + a review checklist",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 31,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 32,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "CI Fundamentals: GitHub Actions",
            "priority": "🟡 P1",
            "tasks": "Pipeline that builds + tests a Java app on every push",
            "achievement": "Working CI Fundamentals: GitHub Actions demo'd live; handles at least 2 edge cases without reference",
            "day": 33,
            "estimatedHours": 2.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 34,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "CD: Build → Push Image → Deploy Pipeline",
            "priority": "🟡 P1",
            "tasks": "Full pipeline: code push → Docker build → push to registry → deploy",
            "achievement": "Working CD: Build → Push Image → Deploy Pipeline demo'd live; handles at least 2 edge cases without reference",
            "day": 35,
            "estimatedHours": 2.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 36,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 37,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Secrets Management (GitHub Secrets, then Vault intro)",
            "priority": "🟡 P1",
            "tasks": "Zero hardcoded credentials anywhere in the pipeline",
            "achievement": "Can explain Secrets Management (GitHub Secrets, then Vault intro) clearly to a peer and answer follow-up questions without reference",
            "day": 38,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 39,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Pipeline Resiliency (rollback strategy, canary/blue-green concept)",
            "priority": "🔴 P0",
            "tasks": "Document and demo a rollback plan for a failed deploy",
            "achievement": "Pipeline Resiliency (rollback strategy, canary/blue-green concept) running in a fresh environment; can reproduce setup from scratch",
            "day": 40,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 41,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 42,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "**Phase 2 Capstone: Full CI/CD Pipeline**",
            "priority": "🔴 P0",
            "tasks": "Green pipeline badge in README; one intentional failure + rollback demo",
            "achievement": "Complete **Phase 2 Capstone: Full CI/CD Pipeline** project passes code review; can explain every design decision",
            "day": 43,
            "estimatedHours": 4.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 44,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 45,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 46,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": [
          "2-2"
        ]
      },
      {
        "id": "5-3",
        "title": "KUBERNETES & OBSERVABILITY",
        "days": "Days 47–98",
        "items": [
          {
            "topic": "K8s Architecture (control plane, etcd, kubelet, scheduler)",
            "priority": "🔴 P0",
            "tasks": "Diagram + explain the architecture from memory, no notes",
            "achievement": "Whiteboard K8s Architecture (control plane, etcd, kubelet, scheduler) from memory; answer 3 follow-up questions correctly",
            "day": 47,
            "estimatedHours": 1.5,
            "resource": "kubernetes.io/docs"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 48,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Minikube/kind Setup + Core `kubectl` Commands",
            "priority": "🔴 P0",
            "tasks": "Comfortable debugging with `describe`/`logs`/`exec`",
            "achievement": "Given a broken Minikube/kind Setup + Core `kubectl` Commands scenario, identify root cause and fix within 15 minutes",
            "day": 49,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 50,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 51,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Pods & Sidecars",
            "priority": "🔴 P0",
            "tasks": "Deploy a pod with a logging sidecar",
            "achievement": "Pods & Sidecars running in a fresh environment; can reproduce setup from scratch",
            "day": 52,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "Deployments & ReplicaSets (self-healing, rolling updates)",
            "priority": "🟡 P1",
            "tasks": "Kill a pod and watch it recover; perform a rolling update",
            "achievement": "Can explain Deployments & ReplicaSets (self-healing, rolling updates) clearly to a peer and answer follow-up questions without reference",
            "day": 53,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 54,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 55,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Services (ClusterIP, NodePort, LoadBalancer)",
            "priority": "🔴 P0",
            "tasks": "Backend reaches DB via stable service DNS",
            "achievement": "Can explain Services (ClusterIP, NodePort, LoadBalancer) clearly to a peer and answer follow-up questions without reference",
            "day": 56,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 57,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "ConfigMaps & Secrets",
            "priority": "🔴 P0",
            "tasks": "Externalize app config from your image",
            "achievement": "Can explain ConfigMaps & Secrets clearly to a peer and answer follow-up questions without reference",
            "day": 58,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 59,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Ingress + Ingress Controller",
            "priority": "🟡 P1",
            "tasks": "Route two services through one ingress by path",
            "achievement": "Can explain Ingress + Ingress Controller clearly to a peer and answer follow-up questions without reference",
            "day": 60,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 61,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Persistent Volumes / PVCs / StorageClasses",
            "priority": "🟡 P1",
            "tasks": "Stateful DB pod survives rescheduling",
            "achievement": "Can explain Persistent Volumes / PVCs / StorageClasses clearly to a peer and answer follow-up questions without reference",
            "day": 62,
            "estimatedHours": 3.5,
            "resource": "LangChain docs + python.langchain.com"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 63,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 64,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Helm Basics (charts, values, templating)",
            "priority": "🟡 P1",
            "tasks": "Package your Phase 1 app as a Helm chart",
            "achievement": "Can explain Helm Basics (charts, values, templating) clearly to a peer and answer follow-up questions without reference",
            "day": 65,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 66,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 67,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Horizontal Pod Autoscaler + resource requests/limits",
            "priority": "🟡 P1",
            "tasks": "Load-test the app and watch it scale",
            "achievement": "Can explain Horizontal Pod Autoscaler + resource requests/limits clearly to a peer and answer follow-up questions without reference",
            "day": 68,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 69,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 70,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "RBAC & Namespaces",
            "priority": "🟢 P2",
            "tasks": "Restrict a service account to one namespace",
            "achievement": "Can explain RBAC & Namespaces clearly to a peer and answer follow-up questions without reference",
            "day": 71,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "Prometheus Fundamentals (metrics, PromQL)",
            "priority": "🟢 P2",
            "tasks": "Write 3 genuinely useful PromQL queries against your cluster",
            "achievement": "Working Prometheus Fundamentals (metrics, PromQL) demo'd live; handles at least 2 edge cases without reference",
            "day": 72,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 73,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 74,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Grafana Dashboards + Alerting",
            "priority": "🟢 P2",
            "tasks": "Dashboard with 4 real panels + one working alert rule",
            "achievement": "Can explain Grafana Dashboards + Alerting clearly to a peer and answer follow-up questions without reference",
            "day": 75,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 76,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Centralized Logging (Loki preferred; EFK if a JD specifically wants it)",
            "priority": "🟡 P1",
            "tasks": "Search logs across pods from one UI",
            "achievement": "Can explain Centralized Logging (Loki preferred; EFK if a JD specifically wants it) clearly to a peer and answer follow-up questions without reference",
            "day": 77,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 78,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 79,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 80,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "OpenTelemetry + Distributed Tracing (Jaeger)",
            "priority": "🔴 P0",
            "tasks": "Trace a single request across 2 services",
            "achievement": "Can explain OpenTelemetry + Distributed Tracing (Jaeger) clearly to a peer and answer follow-up questions without reference",
            "day": 81,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 82,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 83,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Service Mesh (Istio) — concept + minimal lab",
            "priority": "-",
            "tasks": "Explain mTLS + sidecar injection; basic traffic-split demo",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 84,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 85,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 86,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "K8s Security (network policies, Pod Security Standards)",
            "priority": "🟢 P2",
            "tasks": "Deny-all-by-default policy, then open specific required paths",
            "achievement": "Can explain K8s Security (network policies, Pod Security Standards) clearly to a peer and answer follow-up questions without reference",
            "day": 87,
            "estimatedHours": 3.5,
            "resource": "kubernetes.io/docs"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 88,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 89,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "**Phase 3 Capstone: EKS via Terraform → ArgoCD → Helm-deployed 3-tier app → Prometheus/Grafana + logging, GitOps-managed**",
            "priority": "🔴 P0",
            "tasks": "Full stack running and documented — **cluster torn down after demo/recording**",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 90,
            "estimatedHours": 4.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 91,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 92,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 93,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 94,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 95,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 96,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 97,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 98,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": [
          "2-2"
        ]
      },
      {
        "id": "5-4",
        "title": "MLOPS & AI INFRASTRUCTURE",
        "days": "Days 99–123",
        "items": [
          {
            "topic": "ML Lifecycle Overview (data → train → serve → monitor)",
            "priority": "🟡 P1",
            "tasks": "Diagram the full lifecycle with failure points marked",
            "achievement": "Can explain ML Lifecycle Overview (data → train → serve → monitor) clearly to a peer and answer follow-up questions without reference",
            "day": 99,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "Experiment Tracking (MLflow)",
            "priority": "🔴 P0",
            "tasks": "Log 3 experiment runs with metrics/params",
            "achievement": "Can explain Experiment Tracking (MLflow) clearly to a peer and answer follow-up questions without reference",
            "day": 100,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 101,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 102,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Model Packaging & Serving (FastAPI or BentoML/TorchServe)",
            "priority": "🟡 P1",
            "tasks": "Serve a model behind a REST endpoint",
            "achievement": "Can explain Model Packaging & Serving (FastAPI or BentoML/TorchServe) clearly to a peer and answer follow-up questions without reference",
            "day": 103,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 104,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Containerize + Deploy Serving API to K8s",
            "priority": "🟢 P2",
            "tasks": "Model endpoint reachable through your K8s cluster",
            "achievement": "Can explain Containerize + Deploy Serving API to K8s clearly to a peer and answer follow-up questions without reference",
            "day": 105,
            "estimatedHours": 3.5,
            "resource": "kubernetes.io/docs"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 106,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 107,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Feature Stores — concept only (Feast overview)",
            "priority": "-",
            "tasks": "Explain why online/offline feature parity matters",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 108,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Data/Model Drift Monitoring Concepts",
            "priority": "🟡 P1",
            "tasks": "Pick 2 concrete drift metrics and justify them",
            "achievement": "Can explain Data/Model Drift Monitoring Concepts clearly to a peer and answer follow-up questions without reference",
            "day": 109,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 110,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 111,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "CI/CD for ML (automated retrain trigger on drift/schedule)",
            "priority": "🔴 P0",
            "tasks": "Pipeline that retrains and redeploys on a trigger",
            "achievement": "CI/CD for ML (automated retrain trigger on drift/schedule) running in a fresh environment; can reproduce setup from scratch",
            "day": 112,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 113,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 114,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "GPU/Accelerator Infra Basics (cost tradeoffs)",
            "priority": "🔴 P0",
            "tasks": "Cost comparison table: CPU vs GPU vs managed inference API",
            "achievement": "Correct comparison of GPU/Accelerator Infra Basics (cost tradeoffs) with 5+ dimensions; justify a choice for a given scenario",
            "day": 115,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 116,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "**Phase 4 Capstone: End-to-End MLOps Pipeline** (ingest → train → track/MLflow → serve/K8s → monitor drift → auto-retrain, GitOps-deployed)",
            "priority": "🔴 P0",
            "tasks": "Fully documented with an architecture diagram and written rationale for each tool choice",
            "achievement": "Complete **Phase 4 Capstone: End-to-End MLOps Pipeline** (ingest → train → track/MLflow → serve/K8s → monitor drift → auto-retrain, GitOps-deployed) project passes code review; can explain every design decision",
            "day": 117,
            "estimatedHours": 4.5,
            "resource": "kubernetes.io/docs"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 118,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 119,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 120,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 121,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 122,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 123,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": [
          "2-2"
        ]
      },
      {
        "id": "5-5",
        "title": "SYSTEM DESIGN, INTERVIEW PREP & THE FINAL MILE",
        "days": "Days 124–141",
        "items": [
          {
            "topic": "System Design Mock: Scale (1M req/s — load balancers, caching, sharding)",
            "priority": "-",
            "tasks": "Whiteboard-style write-up, no code",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 124,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "📝 Interview Drill",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 125,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "E-Commerce Infra: Auto-scaling & Blue-Green Deployment",
            "priority": "🟡 P1",
            "tasks": "Same format",
            "achievement": "Can explain E-Commerce Infra: Auto-scaling & Blue-Green Deployment clearly to a peer and answer follow-up questions without reference",
            "day": 126,
            "estimatedHours": 3.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🛠️ Mini-Project Integration",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 127,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 128,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "System Design Mock: MLOps at Scale (5TB/day retraining pipeline)",
            "priority": "🟢 P2",
            "tasks": "Same format",
            "achievement": "Pass a timed mock interview round on System Design Mock: MLOps at Scale (5TB/day retraining pipeline) with no hints",
            "day": 129,
            "estimatedHours": 2,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 130,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "SRE Culture (SLOs, error budgets, blameless postmortems)",
            "priority": "🟢 P2",
            "tasks": "Write a mock postmortem for a fictional outage",
            "achievement": "Working SRE Culture (SLOs, error budgets, blameless postmortems) demo'd live; handles at least 2 edge cases without reference",
            "day": 131,
            "estimatedHours": 2,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 132,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Behavioral Prep (STAR Method — 5 stories)",
            "priority": "-",
            "tasks": "5 stories written out and rehearsed out loud",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 133,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 134,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "Resume Pass — every bullet gets a metric",
            "priority": "-",
            "tasks": "Rewritten resume, no tutorial-project bullets",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 135,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 136,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Full Mock Interview Loop (system design + behavioral + live debug)",
            "priority": "🟢 P2",
            "tasks": "Recorded mock interview, self-reviewed",
            "achievement": "Pass a timed mock interview round on Full Mock Interview Loop (system design + behavioral + live debug) with no hints",
            "day": 137,
            "estimatedHours": 2,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 138,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "🔄 Review & Recall",
            "priority": "-",
            "tasks": "Review notes",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 139,
            "estimatedHours": 1,
            "resource": "Review your notes from the last 3-5 days"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 140,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "**Graduation: Retrospective & Portfolio Polish**",
            "priority": "🔴 P0",
            "tasks": "All 4 capstones linked from a single portfolio index/README",
            "achievement": "Complete **Graduation: Retrospective & Portfolio Polish** project passes code review; can explain every design decision",
            "day": 141,
            "estimatedHours": 4.5,
            "resource": "The DevOps Handbook + Official Docs (Docker/K8s/Terraform)"
          }
        ],
        "dependencies": [
          "2-2"
        ]
      }
    ]
  },
  {
    "id": 6,
    "title": "Java Core & Advanced",
    "days": 150,
    "color": "rose",
    "phases": [
      {
        "id": "6-1",
        "title": "JAVA BASICS & SYNTAX",
        "days": "Days 1–19",
        "items": [
          {
            "topic": "Java & JVM Architecture (JDK/JRE/JVM, bytecode + JIT)",
            "priority": "🟢 P2",
            "tasks": "Explain the journey of a `.java` file from source to execution",
            "achievement": "Whiteboard Java & JVM Architecture (JDK/JRE/JVM, bytecode + JIT) from memory; answer 3 follow-up questions correctly",
            "day": 1,
            "estimatedHours": 1.5,
            "resource": "Java Performance (Hunt & John)"
          },
          {
            "topic": "Variables, Data Types & Literals",
            "priority": "🔴 P0",
            "tasks": "Choose the most memory-efficient primitive for a value range",
            "achievement": "Can explain Variables, Data Types & Literals clearly to a peer and answer follow-up questions without reference",
            "day": 2,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Type Casting & Conversion",
            "priority": "🟡 P1",
            "tasks": "Predict output of tricky casting/overflow expressions",
            "achievement": "Can explain Type Casting & Conversion clearly to a peer and answer follow-up questions without reference",
            "day": 3,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 4,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Operators & Precedence",
            "priority": "🔴 P0",
            "tasks": "Evaluate a complex multi-operator expression by hand",
            "achievement": "Can explain Operators & Precedence clearly to a peer and answer follow-up questions without reference",
            "day": 5,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Control Flow: if-else & switch (incl. modern switch expressions)",
            "priority": "🟡 P1",
            "tasks": "Rewrite a nested if-else chain as a switch expression",
            "achievement": "Working Control Flow: if-else & switch (incl. modern switch expressions) demo'd live; handles at least 2 edge cases without reference",
            "day": 6,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Loops: for/while/do-while, for-each, labeled break/continue",
            "priority": "🔴 P0",
            "tasks": "Use labeled breaks to exit nested loops cleanly",
            "achievement": "Can explain Loops: for/while/do-while, for-each, labeled break/continue clearly to a peer and answer follow-up questions without reference",
            "day": 7,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 8,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Arrays (1D/multi-dim, memory layout) + Array Utility Methods",
            "priority": "🔴 P0",
            "tasks": "Implement matrix ops with 2D arrays; use `Arrays.sort/binarySearch/fill/copyOf`",
            "achievement": "Working Arrays (1D/multi-dim, memory layout) + Array Utility Methods demo'd live; handles at least 2 edge cases without reference",
            "day": 9,
            "estimatedHours": 2.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Methods: Declaration & Overloading (pass-by-value semantics)",
            "priority": "🟢 P2",
            "tasks": "Explain why Java is \"pass-by-value\" even for objects",
            "achievement": "Whiteboard Methods: Declaration & Overloading (pass-by-value semantics) from memory; answer 3 follow-up questions correctly",
            "day": 11,
            "estimatedHours": 1.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 12,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Varargs & Recursion",
            "priority": "🔴 P0",
            "tasks": "Trace a recursive call stack, spot a missing base case",
            "achievement": "Can explain Varargs & Recursion clearly to a peer and answer follow-up questions without reference",
            "day": 13,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Strings: Basics & Immutability (String Pool)",
            "priority": "🟢 P2",
            "tasks": "Explain why `s1 == s2` may be true/false depending on creation method",
            "achievement": "Whiteboard Strings: Basics & Immutability (String Pool) from memory; answer 3 follow-up questions correctly",
            "day": 14,
            "estimatedHours": 1.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "StringBuilder & StringBuffer",
            "priority": "-",
            "tasks": "Refactor a string-concat-in-loop into StringBuilder",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 15,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 16,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Wrapper Classes & Autoboxing (Integer cache)",
            "priority": "🔴 P0",
            "tasks": "Explain the `Integer i1 = 127` vs `200` comparison gotcha",
            "achievement": "Whiteboard Wrapper Classes & Autoboxing (Integer cache) from memory; answer 3 follow-up questions correctly",
            "day": 17,
            "estimatedHours": 1.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Scanner, User Input & Basic I/O",
            "priority": "🔴 P0",
            "tasks": "Read mixed input types robustly from console",
            "achievement": "Can explain Scanner, User Input & Basic I/O clearly to a peer and answer follow-up questions without reference",
            "day": 18,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Phase 1 Capstone:** console mini-project (calculator/grade calculator)",
            "priority": "🔴 P0",
            "tasks": "Write a complete working program with no IDE autocomplete",
            "achievement": "Working **Phase 1 Capstone:** console mini-project (calculator/grade calculator) demo'd live; handles at least 2 edge cases without reference",
            "day": 19,
            "estimatedHours": 4.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          }
        ],
        "dependencies": []
      },
      {
        "id": "6-2",
        "title": "OBJECT-ORIENTED PROGRAMMING",
        "days": "Days 20–45",
        "items": [
          {
            "topic": "Classes & Objects Fundamentals (`this`, heap refs)",
            "priority": "🔴 P0",
            "tasks": "Draw a memory diagram: stack refs → heap objects",
            "achievement": "Can explain Classes & Objects Fundamentals (`this`, heap refs) clearly to a peer and answer follow-up questions without reference",
            "day": 20,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Constructors & Overloading (chaining with `this()`)",
            "priority": "🟡 P1",
            "tasks": "Design a multi-constructor class avoiding duplication",
            "achievement": "Complete design for Constructors & Overloading (chaining with `this()`) with trade-offs documented; survives 5-minute peer critique",
            "day": 21,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Four Pillars of OOP (overview)",
            "priority": "🔴 P0",
            "tasks": "Give a one-sentence, interview-ready definition of each",
            "achievement": "Pass a timed mock interview round on Four Pillars of OOP (overview) with no hints",
            "day": 22,
            "estimatedHours": 2,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Encapsulation & Access Modifiers",
            "priority": "🔴 P0",
            "tasks": "Design a class that fully protects internal state",
            "achievement": "Complete design for Encapsulation & Access Modifiers with trade-offs documented; survives 5-minute peer critique",
            "day": 23,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 24,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Static Keyword Deep Dive (vars/methods/blocks/nested classes, init order)",
            "priority": "🟡 P1",
            "tasks": "Trace the exact execution order of static/instance blocks/constructors",
            "achievement": "Can explain Static Keyword Deep Dive (vars/methods/blocks/nested classes, init order) clearly to a peer and answer follow-up questions without reference",
            "day": 25,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Inheritance Fundamentals (`extends`, `super`, diamond problem)",
            "priority": "🟢 P2",
            "tasks": "Design a 3-level hierarchy, explain the diamond problem Java avoids",
            "achievement": "Whiteboard Inheritance Fundamentals (`extends`, `super`, diamond problem) from memory; answer 3 follow-up questions correctly",
            "day": 26,
            "estimatedHours": 1.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Method Overriding & `@Override`",
            "priority": "🟢 P2",
            "tasks": "List the 5 rules for valid overriding",
            "achievement": "Can explain Method Overriding & `@Override` clearly to a peer and answer follow-up questions without reference",
            "day": 27,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 28,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Polymorphism: Compile-Time vs Runtime",
            "priority": "🟢 P2",
            "tasks": "Predict output of polymorphic calls through a class hierarchy",
            "achievement": "Can explain Polymorphism: Compile-Time vs Runtime clearly to a peer and answer follow-up questions without reference",
            "day": 29,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Abstract Classes",
            "priority": "🟡 P1",
            "tasks": "Design an abstract base class enforcing a contract",
            "achievement": "Complete design for Abstract Classes with trade-offs documented; survives 5-minute peer critique",
            "day": 30,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Interfaces Deep Dive (default/static methods)",
            "priority": "🔴 P0",
            "tasks": "Explain how default methods solve interface evolution",
            "achievement": "Whiteboard Interfaces Deep Dive (default/static methods) from memory; answer 3 follow-up questions correctly",
            "day": 31,
            "estimatedHours": 1.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 32,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Abstract Class vs Interface",
            "priority": "🔴 P0",
            "tasks": "Justify the choice in an interview setting",
            "achievement": "Pass a timed mock interview round on Abstract Class vs Interface with no hints",
            "day": 33,
            "estimatedHours": 2,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Composition vs Inheritance (delegation, Spring examples)",
            "priority": "🔴 P0",
            "tasks": "Refactor a fragile inheritance hierarchy into composition",
            "achievement": "Can explain Composition vs Inheritance (delegation, Spring examples) clearly to a peer and answer follow-up questions without reference",
            "day": 34,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Immutability & Defensive Copying (vs records)",
            "priority": "🟡 P1",
            "tasks": "Design an immutable class with a mutable field, without leaking a reference",
            "achievement": "Complete design for Immutability & Defensive Copying (vs records) with trade-offs documented; survives 5-minute peer critique",
            "day": 35,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 36,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "SOLID Principles in Java",
            "priority": "🔴 P0",
            "tasks": "Refactor a class violating 2-3 SOLID principles",
            "achievement": "Can explain SOLID Principles in Java clearly to a peer and answer follow-up questions without reference",
            "day": 37,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Object Class Methods (`equals`/`hashCode`/`toString`/`clone`)",
            "priority": "🟢 P2",
            "tasks": "Correctly override `equals()` and `hashCode()` together",
            "achievement": "Can explain Object Class Methods (`equals`/`hashCode`/`toString`/`clone`) clearly to a peer and answer follow-up questions without reference",
            "day": 38,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Object Cloning (shallow vs deep)",
            "priority": "🔴 P0",
            "tasks": "Implement a deep clone for nested mutable objects",
            "achievement": "Working Object Cloning (shallow vs deep) demo'd live; handles at least 2 edge cases without reference",
            "day": 39,
            "estimatedHours": 2.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 40,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Inner & Nested Classes (member/static/local/anonymous)",
            "priority": "🟢 P2",
            "tasks": "Choose the correct nested class type for a scenario",
            "achievement": "Can explain Inner & Nested Classes (member/static/local/anonymous) clearly to a peer and answer follow-up questions without reference",
            "day": 41,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Enums Deep Dive (fields/methods/abstract methods)",
            "priority": "🔴 P0",
            "tasks": "Design an enum that encapsulates behavior",
            "achievement": "Complete design for Enums Deep Dive (fields/methods/abstract methods) with trade-offs documented; survives 5-minute peer critique",
            "day": 42,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Packages & Access Control",
            "priority": "🟡 P1",
            "tasks": "Organize a multi-class project into a clean package structure",
            "achievement": "Complete Packages & Access Control project passes code review; can explain every design decision",
            "day": 43,
            "estimatedHours": 4.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 44,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "**Phase 2 Capstone:** OOP mini-project (Library Mgmt / Shape Calculator)",
            "priority": "🔴 P0",
            "tasks": "Model a domain using all 4 pillars + composition + SOLID",
            "achievement": "Complete **Phase 2 Capstone:** OOP mini-project (Library Mgmt / Shape Calculator) project passes code review; can explain every design decision",
            "day": 45,
            "estimatedHours": 4.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          }
        ],
        "dependencies": []
      },
      {
        "id": "6-3",
        "title": "COLLECTIONS, GENERICS & STRINGS",
        "days": "Days 46–70",
        "items": [
          {
            "topic": "Collections Framework Overview",
            "priority": "🔴 P0",
            "tasks": "Draw the full Collections hierarchy from memory",
            "achievement": "Can explain Collections Framework Overview clearly to a peer and answer follow-up questions without reference",
            "day": 46,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "ArrayList Deep Dive",
            "priority": "🟡 P1",
            "tasks": "Explain why `add()` is amortized O(1) but `remove(0)` is O(n)",
            "achievement": "Whiteboard ArrayList Deep Dive from memory; answer 3 follow-up questions correctly",
            "day": 47,
            "estimatedHours": 1.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "LinkedList Deep Dive",
            "priority": "🔴 P0",
            "tasks": "Recommend ArrayList vs LinkedList by access pattern",
            "achievement": "Correct comparison of LinkedList Deep Dive with 5+ dimensions; justify a choice for a given scenario",
            "day": 48,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 49,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Iterator & ListIterator (fail-fast)",
            "priority": "🔴 P0",
            "tasks": "Safely remove elements while iterating",
            "achievement": "Can explain Iterator & ListIterator (fail-fast) clearly to a peer and answer follow-up questions without reference",
            "day": 50,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "HashSet & LinkedHashSet",
            "priority": "🔴 P0",
            "tasks": "Explain why a custom object needs a correct `hashCode()` for HashSet",
            "achievement": "Whiteboard HashSet & LinkedHashSet from memory; answer 3 follow-up questions correctly",
            "day": 51,
            "estimatedHours": 1.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "TreeSet & Sorted Collections (Comparable/Comparator)",
            "priority": "🔴 P0",
            "tasks": "Implement both for two different sort orders",
            "achievement": "Working TreeSet & Sorted Collections (Comparable/Comparator) demo'd live; handles at least 2 edge cases without reference",
            "day": 52,
            "estimatedHours": 2.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 53,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "HashMap Internals Deep Dive (buckets, collisions, treeification)",
            "priority": "🟡 P1",
            "tasks": "Explain step-by-step what happens on `put()` with a hash collision",
            "achievement": "Whiteboard HashMap Internals Deep Dive (buckets, collisions, treeification) from memory; answer 3 follow-up questions correctly",
            "day": 54,
            "estimatedHours": 1.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Hashing Internals Deep Dive (hashCode contract, collision strategies)",
            "priority": "🔴 P0",
            "tasks": "Design a custom `hashCode()` that minimizes collisions",
            "achievement": "Complete design for Hashing Internals Deep Dive (hashCode contract, collision strategies) with trade-offs documented; survives 5-minute peer critique",
            "day": 55,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "LinkedHashMap & TreeMap (access-order, navigation methods)",
            "priority": "🟡 P1",
            "tasks": "Implement an LRU cache using LinkedHashMap",
            "achievement": "Working LinkedHashMap & TreeMap (access-order, navigation methods) demo'd live; handles at least 2 edge cases without reference",
            "day": 56,
            "estimatedHours": 2.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 57,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Map Iteration & Modern Patterns (`computeIfAbsent`, `merge`, `getOrDefault`)",
            "priority": "🟡 P1",
            "tasks": "Refactor null-check-heavy Map code into one-liners",
            "achievement": "Can explain Map Iteration & Modern Patterns (`computeIfAbsent`, `merge`, `getOrDefault`) clearly to a peer and answer follow-up questions without reference",
            "day": 58,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Queue, Deque & PriorityQueue",
            "priority": "🔴 P0",
            "tasks": "Solve \"find K largest elements\" with a PriorityQueue",
            "achievement": "Can explain Queue, Deque & PriorityQueue clearly to a peer and answer follow-up questions without reference",
            "day": 59,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Stack & Algorithm Use Cases",
            "priority": "🟡 P1",
            "tasks": "Solve a balanced-bracket problem using a stack",
            "achievement": "Can explain Stack & Algorithm Use Cases clearly to a peer and answer follow-up questions without reference",
            "day": 60,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 61,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Generics Fundamentals (type erasure)",
            "priority": "🟡 P1",
            "tasks": "Explain why you can't do `new T[]` directly",
            "achievement": "Whiteboard Generics Fundamentals (type erasure) from memory; answer 3 follow-up questions correctly",
            "day": 62,
            "estimatedHours": 1.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Generic Type Erasure — Full Deep Dive (bridge methods, heap pollution)",
            "priority": "-",
            "tasks": "Explain heap pollution with varargs+generics and `@SafeVarargs`",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 63,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Bounded Types & Wildcards (PECS)",
            "priority": "🔴 P0",
            "tasks": "Apply PECS in a generic copy-between-collections method",
            "achievement": "Can explain Bounded Types & Wildcards (PECS) clearly to a peer and answer follow-up questions without reference",
            "day": 64,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 65,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Comparable vs Comparator (`thenComparing`)",
            "priority": "🟢 P2",
            "tasks": "Write a chained multi-field comparator in one line",
            "achievement": "Working Comparable vs Comparator (`thenComparing`) demo'd live; handles at least 2 edge cases without reference",
            "day": 66,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Collections Utility Class (`sort`/`unmodifiable`/`synchronized`)",
            "priority": "🔴 P0",
            "tasks": "Make a collection read-only or thread-safe via built-ins",
            "achievement": "Can explain Collections Utility Class (`sort`/`unmodifiable`/`synchronized`) clearly to a peer and answer follow-up questions without reference",
            "day": 67,
            "estimatedHours": 3.5,
            "resource": "Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "String Internals: Pool & Memory (`intern()`)",
            "priority": "🟡 P1",
            "tasks": "Explain why caching immutable Strings is thread-safe",
            "achievement": "Whiteboard String Internals: Pool & Memory (`intern()`) from memory; answer 3 follow-up questions correctly",
            "day": 68,
            "estimatedHours": 1.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Regular Expressions in Java (Pattern/Matcher)",
            "priority": "🟡 P1",
            "tasks": "Write a regex to validate an email and extract groups",
            "achievement": "Working Regular Expressions in Java (Pattern/Matcher) demo'd live; handles at least 2 edge cases without reference",
            "day": 69,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Phase 3 Capstone:** data-structures mini-project (inventory/contact system)",
            "priority": "🔴 P0",
            "tasks": "Justify every collection choice by its access pattern",
            "achievement": "Complete **Phase 3 Capstone:** data-structures mini-project (inventory/contact system) project passes code review; can explain every design decision",
            "day": 70,
            "estimatedHours": 4.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          }
        ],
        "dependencies": []
      },
      {
        "id": "6-4",
        "title": "EXCEPTIONS, I/O, REFLECTION & ANNOTATIONS",
        "days": "Days 71–87",
        "items": [
          {
            "topic": "Exception Hierarchy & Basics (checked vs unchecked)",
            "priority": "🔴 P0",
            "tasks": "Correctly classify any exception and explain why it matters",
            "achievement": "Whiteboard Exception Hierarchy & Basics (checked vs unchecked) from memory; answer 3 follow-up questions correctly",
            "day": 71,
            "estimatedHours": 1.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Multi-Catch & Try-With-Resources (`AutoCloseable`)",
            "priority": "🟡 P1",
            "tasks": "Convert a `finally`-block cleanup into try-with-resources",
            "achievement": "Can explain Multi-Catch & Try-With-Resources (`AutoCloseable`) clearly to a peer and answer follow-up questions without reference",
            "day": 72,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 73,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Custom Exceptions & Exception Chaining",
            "priority": "🔴 P0",
            "tasks": "Design a custom exception hierarchy for a domain",
            "achievement": "Complete design for Custom Exceptions & Exception Chaining with trade-offs documented; survives 5-minute peer critique",
            "day": 74,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Exception Best Practices (anti-patterns, fail-fast)",
            "priority": "🔴 P0",
            "tasks": "Review and fix poorly-handled exception code",
            "achievement": "Given a broken Exception Best Practices (anti-patterns, fail-fast) scenario, identify root cause and fix within 15 minutes",
            "day": 75,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "File I/O: `java.io` Basics (buffered streams)",
            "priority": "-",
            "tasks": "Read/write a text file line-by-line efficiently",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 76,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 77,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "NIO.2 (`java.nio.file`: Path/Files/Paths)",
            "priority": "🟡 P1",
            "tasks": "Copy/move/delete/walk a directory tree via NIO.2",
            "achievement": "Can explain NIO.2 (`java.nio.file`: Path/Files/Paths) clearly to a peer and answer follow-up questions without reference",
            "day": 78,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Serialization & Deserialization (`Serializable`, `transient`, security risk)",
            "priority": "🔴 P0",
            "tasks": "Explain why deserializing untrusted data is a security risk",
            "achievement": "Whiteboard Serialization & Deserialization (`Serializable`, `transient`, security risk) from memory; answer 3 follow-up questions correctly",
            "day": 79,
            "estimatedHours": 1.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Serialization Alternatives (JSON/Jackson internals vs Protobuf)",
            "priority": "🔴 P0",
            "tasks": "Build a comparison table and justify Jackson vs Protobuf for a Spring API",
            "achievement": "Working Serialization Alternatives (JSON/Jackson internals vs Protobuf) demo'd live; handles at least 2 edge cases without reference",
            "day": 80,
            "estimatedHours": 2.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 81,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Reflection API (Class/Method/Field/Constructor, `invoke`)",
            "priority": "🟡 P1",
            "tasks": "Print all fields/values of any object using only reflection",
            "achievement": "Can explain Reflection API (Class/Method/Field/Constructor, `invoke`) clearly to a peer and answer follow-up questions without reference",
            "day": 82,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Reflection & Spring (`setAccessible`, DI mechanics)",
            "priority": "🟡 P1",
            "tasks": "Explain Spring's reflection path from `@Component` to a wired bean",
            "achievement": "Whiteboard Reflection & Spring (`setAccessible`, DI mechanics) from memory; answer 3 follow-up questions correctly",
            "day": 83,
            "estimatedHours": 1.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Annotations Deep Dive (built-ins + meta-annotations)",
            "priority": "🟢 P2",
            "tasks": "Explain why `@Service` needs `RUNTIME` retention but `@Override` doesn't",
            "achievement": "Whiteboard Annotations Deep Dive (built-ins + meta-annotations) from memory; answer 3 follow-up questions correctly",
            "day": 84,
            "estimatedHours": 1.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 85,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Custom Annotations + Classpath Scanning (`@LogExecutionTime`, `@Component` scanning)",
            "priority": "🟡 P1",
            "tasks": "Design and reflectively read a custom annotation end-to-end",
            "achievement": "Complete design for Custom Annotations + Classpath Scanning (`@LogExecutionTime`, `@Component` scanning) with trade-offs documented; survives 5-minute peer critique",
            "day": 86,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Phase 4 Capstone:** Robust File Processor",
            "priority": "🔴 P0",
            "tasks": "Program that never crashes ungracefully on malformed input",
            "achievement": "Complete **Phase 4 Capstone:** Robust File Processor project passes code review; can explain every design decision",
            "day": 87,
            "estimatedHours": 4.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          }
        ],
        "dependencies": []
      },
      {
        "id": "6-5",
        "title": "MULTITHREADING & CONCURRENCY",
        "days": "Days 88–120",
        "items": [
          {
            "topic": "Process vs Thread & Thread Basics (lifecycle states)",
            "priority": "🔴 P0",
            "tasks": "Draw and explain the full thread lifecycle diagram",
            "achievement": "Whiteboard Process vs Thread & Thread Basics (lifecycle states) from memory; answer 3 follow-up questions correctly",
            "day": 88,
            "estimatedHours": 1.5,
            "resource": "Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Creating Threads: Thread vs Runnable",
            "priority": "🟡 P1",
            "tasks": "Explain why implementing Runnable is generally preferred",
            "achievement": "Working Creating Threads: Thread vs Runnable demo'd live; handles at least 2 edge cases without reference",
            "day": 89,
            "estimatedHours": 2.5,
            "resource": "Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Thread Synchronization Basics (race conditions, `synchronized`)",
            "priority": "🔴 P0",
            "tasks": "Reproduce a race condition, then fix it with `synchronized`",
            "achievement": "Given a broken Thread Synchronization Basics (race conditions, `synchronized`) scenario, identify root cause and fix within 15 minutes",
            "day": 90,
            "estimatedHours": 3.5,
            "resource": "Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 91,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Intrinsic Locks & Monitor Concept (reentrant locking)",
            "priority": "🔴 P0",
            "tasks": "Explain why a thread can re-enter its own lock without deadlocking itself",
            "achievement": "Whiteboard Intrinsic Locks & Monitor Concept (reentrant locking) from memory; answer 3 follow-up questions correctly",
            "day": 92,
            "estimatedHours": 1.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Deadlock, Livelock & Starvation (4 conditions, lock ordering)",
            "priority": "🔴 P0",
            "tasks": "Reproduce a two-lock deadlock, fix it via consistent lock ordering",
            "achievement": "Given a broken Deadlock, Livelock & Starvation (4 conditions, lock ordering) scenario, identify root cause and fix within 15 minutes",
            "day": 93,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 95,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "`volatile` Keyword & Memory Visibility",
            "priority": "🟡 P1",
            "tasks": "Explain why `volatile` alone isn't enough for a counter increment",
            "achievement": "Whiteboard `volatile` Keyword & Memory Visibility from memory; answer 3 follow-up questions correctly",
            "day": 96,
            "estimatedHours": 1.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Java Memory Model Deep Dive (happens-before, reordering, memory barriers)",
            "priority": "🔴 P0",
            "tasks": "Explain, using happens-before, why a non-volatile flag write may never be seen",
            "achievement": "Working Java Memory Model Deep Dive (happens-before, reordering, memory barriers) demo'd live; handles at least 2 edge cases without reference",
            "day": 97,
            "estimatedHours": 1.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "📝 Cross-Track Interleaved Recall",
            "priority": "-",
            "tasks": "Pick 1 random topic each from 2 other roadmaps you've covered. Explain each from memory, then verify.",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 98,
            "estimatedHours": 1,
            "resource": "Your own notes from other roadmap tracks"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 99,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "`wait()`/`notify()`/`notifyAll()`",
            "priority": "🟡 P1",
            "tasks": "Implement a working Producer-Consumer pattern from scratch",
            "achievement": "Working `wait()`/`notify()`/`notifyAll()` demo'd live; handles at least 2 edge cases without reference",
            "day": 100,
            "estimatedHours": 2.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Atomic Classes & CAS (`AtomicInteger`/`Long`/`Reference`)",
            "priority": "🟡 P1",
            "tasks": "Replace a synchronized counter with AtomicInteger, explain the CAS benefit",
            "achievement": "Whiteboard Atomic Classes & CAS (`AtomicInteger`/`Long`/`Reference`) from memory; answer 3 follow-up questions correctly",
            "day": 102,
            "estimatedHours": 1.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 103,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Lock Interface & ReentrantLock (`tryLock`, fairness)",
            "priority": "🔴 P0",
            "tasks": "Justify ReentrantLock over `synchronized` for a given case",
            "achievement": "Can explain Lock Interface & ReentrantLock (`tryLock`, fairness) clearly to a peer and answer follow-up questions without reference",
            "day": 104,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "ReadWriteLock & StampedLock",
            "priority": "🔴 P0",
            "tasks": "Design a thread-safe cache with many readers, exclusive writer",
            "achievement": "Working ReadWriteLock & StampedLock demo'd live; handles at least 2 edge cases without reference",
            "day": 105,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 106,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Executor Framework Basics (thread pool types)",
            "priority": "🔴 P0",
            "tasks": "Choose the correct pool type for CPU-bound vs I/O-bound work",
            "achievement": "Correct comparison of Executor Framework Basics (thread pool types) with 5+ dimensions; justify a choice for a given scenario",
            "day": 107,
            "estimatedHours": 3.5,
            "resource": "Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Callable, Future & CompletableFuture (`thenApply`/`thenCombine`)",
            "priority": "🔴 P0",
            "tasks": "Chain multiple async operations without blocking threads",
            "achievement": "Can explain Callable, Future & CompletableFuture (`thenApply`/`thenCombine`) clearly to a peer and answer follow-up questions without reference",
            "day": 108,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 110,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "ForkJoinPool (work-stealing, RecursiveTask/Action)",
            "priority": "🟢 P2",
            "tasks": "Explain why blocking I/O inside a parallel stream starves the common pool",
            "achievement": "Whiteboard ForkJoinPool (work-stealing, RecursiveTask/Action) from memory; answer 3 follow-up questions correctly",
            "day": 111,
            "estimatedHours": 1.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "ThreadPoolExecutor Internals (core/max size, queue, rejection policy)",
            "priority": "🟡 P1",
            "tasks": "Configure a custom executor for a bursty workload",
            "achievement": "ThreadPoolExecutor Internals (core/max size, queue, rejection policy) running in a fresh environment; can reproduce setup from scratch",
            "day": 112,
            "estimatedHours": 3.5,
            "resource": "Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 113,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Concurrent Collections (`ConcurrentHashMap`, `CopyOnWriteArrayList`, `BlockingQueue`)",
            "priority": "🔴 P0",
            "tasks": "Explain why ConcurrentHashMap outperforms a synchronized HashMap under contention",
            "achievement": "Whiteboard Concurrent Collections (`ConcurrentHashMap`, `CopyOnWriteArrayList`, `BlockingQueue`) from memory; answer 3 follow-up questions correctly",
            "day": 114,
            "estimatedHours": 1.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Concurrency Utilities: Latches, Barriers, Semaphores",
            "priority": "🟡 P1",
            "tasks": "Use CountDownLatch to make a main thread wait on worker init",
            "achievement": "Can explain Concurrency Utilities: Latches, Barriers, Semaphores clearly to a peer and answer follow-up questions without reference",
            "day": 115,
            "estimatedHours": 3.5,
            "resource": "Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 116,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Structured Concurrency & Scoped Values (Java 21+, `StructuredTaskScope`)",
            "priority": "🟢 P2",
            "tasks": "Rewrite a CompletableFuture workflow using StructuredTaskScope",
            "achievement": "Working Structured Concurrency & Scoped Values (Java 21+, `StructuredTaskScope`) demo'd live; handles at least 2 edge cases without reference",
            "day": 117,
            "estimatedHours": 3.5,
            "resource": "Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Phase 5 Capstone:** concurrent application (parallel file processor / thread-safe task queue)",
            "priority": "🔴 P0",
            "tasks": "Design and defend a complete concurrent system, justifying every sync choice",
            "achievement": "Complete design for **Phase 5 Capstone:** concurrent application (parallel file processor / thread-safe task queue) with trade-offs documented; survives 5-minute peer critique",
            "day": 118,
            "estimatedHours": 4.5,
            "resource": "Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 120,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": []
      },
      {
        "id": "6-6",
        "title": "JVM INTERNALS & MODERN JAVA",
        "days": "Days 121–149",
        "items": [
          {
            "topic": "JVM Architecture Deep Dive (class loader, runtime data areas, execution engine)",
            "priority": "🟢 P2",
            "tasks": "Draw the complete JVM architecture, explain each memory area",
            "achievement": "Whiteboard JVM Architecture Deep Dive (class loader, runtime data areas, execution engine) from memory; answer 3 follow-up questions correctly",
            "day": 121,
            "estimatedHours": 1.5,
            "resource": "Java Performance (Hunt & John)"
          },
          {
            "topic": "Class Loading Mechanism (bootstrap/platform/app loaders, parent delegation)",
            "priority": "🔴 P0",
            "tasks": "Explain why parent delegation prevents malicious core-class overrides",
            "achievement": "Whiteboard Class Loading Mechanism (bootstrap/platform/app loaders, parent delegation) from memory; answer 3 follow-up questions correctly",
            "day": 122,
            "estimatedHours": 1.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 123,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Heap Memory Structure (Eden/Survivor/Old Gen, object aging)",
            "priority": "🟡 P1",
            "tasks": "Trace an object's journey from Eden to Old Gen promotion",
            "achievement": "Can explain Heap Memory Structure (Eden/Survivor/Old Gen, object aging) clearly to a peer and answer follow-up questions without reference",
            "day": 124,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Garbage Collection Algorithms (Mark-Sweep, Serial/Parallel/G1/ZGC)",
            "priority": "🔴 P0",
            "tasks": "Recommend a GC algorithm for a given latency vs throughput need",
            "achievement": "Correct comparison of Garbage Collection Algorithms (Mark-Sweep, Serial/Parallel/G1/ZGC) with 5+ dimensions; justify a choice for a given scenario",
            "day": 125,
            "estimatedHours": 3.5,
            "resource": "Java Performance (Hunt & John)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 126,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Memory Leaks & Common Pitfalls (static refs, unclosed resources, Weak/SoftReference)",
            "priority": "🟢 P2",
            "tasks": "Identify a leak pattern, fix it with weak references or lifecycle mgmt",
            "achievement": "Given a broken Memory Leaks & Common Pitfalls (static refs, unclosed resources, Weak/SoftReference) scenario, identify root cause and fix within 15 minutes",
            "day": 127,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "JVM Profiling & Diagnostic Tools (`jstack`, `jmap`, JVisualVM, JMC)",
            "priority": "🟢 P2",
            "tasks": "Take a thread dump, locate a deadlock, identify exactly which locks are contended",
            "achievement": "Can explain JVM Profiling & Diagnostic Tools (`jstack`, `jmap`, JVisualVM, JMC) clearly to a peer and answer follow-up questions without reference",
            "day": 128,
            "estimatedHours": 3.5,
            "resource": "Java Performance (Hunt & John)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 130,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "GC Tuning & JVM Performance Tuning (`-Xms/-Xmx/-Xmn`, reading GC logs)",
            "priority": "🟢 P2",
            "tasks": "Read a GC log, diagnose minor vs major GC issues, recommend a tuning change",
            "achievement": "Correct comparison of GC Tuning & JVM Performance Tuning (`-Xms/-Xmx/-Xmn`, reading GC logs) with 5+ dimensions; justify a choice for a given scenario",
            "day": 131,
            "estimatedHours": 3.5,
            "resource": "Java Performance (Hunt & John)"
          },
          {
            "topic": "Lambda Expressions (syntax, functional interfaces, variable capture)",
            "priority": "🟢 P2",
            "tasks": "Convert an anonymous inner class into a lambda",
            "achievement": "Can explain Lambda Expressions (syntax, functional interfaces, variable capture) clearly to a peer and answer follow-up questions without reference",
            "day": 132,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 133,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Functional Interfaces (`Function`/`Predicate`/`Consumer`/`Supplier`/`BiFunction`)",
            "priority": "🟡 P1",
            "tasks": "Select the correct built-in interface for a given method signature",
            "achievement": "Can explain Functional Interfaces (`Function`/`Predicate`/`Consumer`/`Supplier`/`BiFunction`) clearly to a peer and answer follow-up questions without reference",
            "day": 134,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Streams API Fundamentals (map/filter/sorted/collect/reduce, laziness)",
            "priority": "🟡 P1",
            "tasks": "Rewrite an imperative loop as a clean stream pipeline",
            "achievement": "Working Streams API Fundamentals (map/filter/sorted/collect/reduce, laziness) demo'd live; handles at least 2 edge cases without reference",
            "day": 135,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 136,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Streams: Collectors & Advanced Ops (`groupingBy`/`partitioningBy`/`toMap`, parallel streams)",
            "priority": "🔴 P0",
            "tasks": "Group objects by property into a summary Map with one Collector",
            "achievement": "Can explain Streams: Collectors & Advanced Ops (`groupingBy`/`partitioningBy`/`toMap`, parallel streams) clearly to a peer and answer follow-up questions without reference",
            "day": 137,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Optional Class (`map`/`filter`/`orElseGet`, anti-patterns)",
            "priority": "🟡 P1",
            "tasks": "Refactor null-check-riddled code into an Optional chain",
            "achievement": "Can explain Optional Class (`map`/`filter`/`orElseGet`, anti-patterns) clearly to a peer and answer follow-up questions without reference",
            "day": 138,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 139,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Date & Time API (`LocalDate`/`LocalDateTime`/`ZonedDateTime`/`Duration`/`Period`)",
            "priority": "🟢 P2",
            "tasks": "Calculate date differences and handle timezone conversions",
            "achievement": "Can explain Date & Time API (`LocalDate`/`LocalDateTime`/`ZonedDateTime`/`Duration`/`Period`) clearly to a peer and answer follow-up questions without reference",
            "day": 140,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Java 9–17 Features (modules, `var`, text blocks, sealed classes)",
            "priority": "🟡 P1",
            "tasks": "Apply the right modern syntax feature to simplify legacy-style code",
            "achievement": "Can explain Java 9–17 Features (modules, `var`, text blocks, sealed classes) clearly to a peer and answer follow-up questions without reference",
            "day": 141,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 142,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Records & Pattern Matching (Java 14–21, `instanceof`/`switch` patterns)",
            "priority": "🟡 P1",
            "tasks": "Convert a boilerplate POJO into a one-line record",
            "achievement": "Can explain Records & Pattern Matching (Java 14–21, `instanceof`/`switch` patterns) clearly to a peer and answer follow-up questions without reference",
            "day": 143,
            "estimatedHours": 3.5,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "Virtual Threads (Java 21, Project Loom)",
            "priority": "🔴 P0",
            "tasks": "Explain why virtual threads make thread-per-request viable at massive scale",
            "achievement": "Whiteboard Virtual Threads (Java 21, Project Loom) from memory; answer 3 follow-up questions correctly",
            "day": 144,
            "estimatedHours": 4.5,
            "resource": "Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 145,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Java Interview Patterns & Tricky Outputs (static init order, overload ambiguity, autoboxing edge cases)",
            "priority": "🔴 P0",
            "tasks": "Correctly predict the output of 10+ classic tricky Java snippets without running them",
            "achievement": "Pass a timed mock interview round on Java Interview Patterns & Tricky Outputs (static init order, overload ambiguity, autoboxing edge cases) with no hints",
            "day": 146,
            "estimatedHours": 2,
            "resource": "Effective Java (Bloch) + Java Concurrency in Practice (Goetz)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "—",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 148,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "**Final Capstone: Full Mock Interview** (OOP design + collections coding problem + concurrency conceptual Q)",
            "priority": "🔴 P0",
            "tasks": "Ready to confidently handle a Core + Advanced Java technical interview round",
            "achievement": "Complete **Final Capstone: Full Mock Interview** (OOP design + collections coding problem + concurrency conceptual Q) project passes code review; can explain every design decision",
            "day": 149,
            "estimatedHours": 4.5,
            "resource": "Java Concurrency in Practice (Goetz)"
          }
        ],
        "dependencies": []
      }
    ]
  },
  {
    "id": 7,
    "title": "Master DSA Roadmap",
    "days": 213,
    "color": "teal",
    "phases": [
      {
        "id": "7-3",
        "title": "FOUNDATIONS",
        "days": "Days 1–10",
        "items": [
          {
            "topic": "Big O, Big Theta, Big Omega (Light)",
            "priority": "🔴 P0",
            "tasks": "Can classify any short code snippet's time complexity and explain worst-case vs average-case.",
            "achievement": "Whiteboard Big O, Big Theta, Big Omega (Light) from memory; answer 3 follow-up questions correctly",
            "day": 1,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Nested Loops & Recursive Complexity (Light)",
            "priority": "🔴 P0",
            "tasks": "Can derive Big O for nested loops and simple recursive calls without running the code.",
            "achievement": "Can explain Nested Loops & Recursive Complexity (Light) clearly to a peer and answer follow-up questions without reference",
            "day": 2,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Java Toolkit for DSA: Arrays & Collections (Light)",
            "priority": "🔴 P0",
            "tasks": "Can explain why `int[]` outperforms `ArrayList<Integer>` for tight loops, citing memory layout.",
            "achievement": "Whiteboard Java Toolkit for DSA: Arrays & Collections (Light) from memory; answer 3 follow-up questions correctly",
            "day": 3,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Java Toolkit: Comparator Tricks (Light)",
            "priority": "🔴 P0",
            "tasks": "Can write a chained multi-field comparator in one line using lambda syntax.",
            "achievement": "Working Java Toolkit: Comparator Tricks (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 4,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Java Performance Traps: Autoboxing & Overflow (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Can identify and fix an overflow bug in a binary search midpoint calculation.",
            "achievement": "Given a broken Java Performance Traps: Autoboxing & Overflow (Medium, Day 1/2) scenario, identify root cause and fix within 15 minutes",
            "day": 5,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 6,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Java Performance Traps: Practice Day (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can review a code snippet and flag 3 distinct Java-specific performance traps.",
            "achievement": "Score 80%+ on a self-quiz covering recent topics without notes",
            "day": 7,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Hashing Basics: HashMap & HashSet (Light)",
            "priority": "🔴 P0",
            "tasks": "Can solve any \"count occurrences of X\" problem using HashMap in O(N).",
            "achievement": "Can explain Hashing Basics: HashMap & HashSet (Light) clearly to a peer and answer follow-up questions without reference",
            "day": 8,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Hashing Practice Day (Light)",
            "priority": "🔴 P0",
            "tasks": "Can decide within seconds whether a problem needs HashMap, HashSet, or a fixed-size frequency array.",
            "achievement": "Given a broken Hashing Practice Day (Light) scenario, identify root cause and fix within 15 minutes",
            "day": 9,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "HANDS-ON LAB: Complexity & JVM Profiling + Phase Cheat Sheet",
            "priority": "🔴 P0",
            "tasks": "Can recite the Foundations cheat sheet cold and complete the lab within its suggested time.",
            "achievement": "Can explain HANDS-ON LAB: Complexity & JVM Profiling + Phase Cheat Sheet clearly to a peer and answer follow-up questions without reference",
            "day": 10,
            "estimatedHours": 3.5,
            "resource": "Java Performance (Hunt & John)"
          }
        ],
        "dependencies": []
      },
      {
        "id": "7-4",
        "title": "LINEAR DATA STRUCTURES",
        "days": "Days 11–27",
        "items": [
          {
            "topic": "Arrays: Internals & Memory Layout (Light)",
            "priority": "🔴 P0",
            "tasks": "Can explain why array access is O(1) and implement a 2D matrix rotation in-place.",
            "achievement": "Working Arrays: Internals & Memory Layout (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 11,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 12,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Dynamic Array From Scratch (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Has a working `resize()` method that doubles capacity when full.",
            "achievement": "Can explain Dynamic Array From Scratch (Medium, Day 1/2) clearly to a peer and answer follow-up questions without reference",
            "day": 13,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Dynamic Array Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Has a fully working hand-rolled dynamic array and can solve in-place array manipulation problems.",
            "achievement": "Can explain Dynamic Array Practice (Medium, Day 2/2) clearly to a peer and answer follow-up questions without reference",
            "day": 14,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Linked Lists: Singly Linked List (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement singly linked list insert/delete and reverse it iteratively.",
            "achievement": "Working Linked Lists: Singly Linked List (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 15,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Doubly & Circular Linked Lists (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Sentinel-node DLL skeleton compiles and supports basic insert.",
            "achievement": "Can explain Doubly & Circular Linked Lists (Medium, Day 1/2) clearly to a peer and answer follow-up questions without reference",
            "day": 16,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Doubly Linked List Practice + Cycle Detection (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can implement Floyd's Cycle Detection and explain why the two pointers must meet inside the cycle.",
            "achievement": "Working Doubly Linked List Practice + Cycle Detection (Medium, Day 2/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 17,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 18,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Stacks: LIFO Fundamentals (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement a stack from scratch and solve Valid Parentheses in O(N).",
            "achievement": "Working Stacks: LIFO Fundamentals (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 19,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Stack Applications: Expression Evaluation (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Has a working operator-precedence parsing skeleton.",
            "achievement": "Can explain Stack Applications: Expression Evaluation (Medium, Day 1/2) clearly to a peer and answer follow-up questions without reference",
            "day": 20,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Min Stack + Stack Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can implement Min Stack with O(1) push/pop/getMin.",
            "achievement": "Working Min Stack + Stack Practice (Medium, Day 2/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 21,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Queues: FIFO Fundamentals (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement a circular queue without wasting array slots.",
            "achievement": "Working Queues: FIFO Fundamentals (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 22,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Deque (Double-Ended Queue) (Light)",
            "priority": "🔴 P0",
            "tasks": "Can explain why `ArrayDeque` is preferred over `java.util.Stack` in production Java code.",
            "achievement": "Whiteboard Deque (Double-Ended Queue) (Light) from memory; answer 3 follow-up questions correctly",
            "day": 23,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 24,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Hash Tables: Internals — Hash Functions & Collisions (Light)",
            "priority": "🔴 P0",
            "tasks": "Can design a hash function and explain what makes one \"good\" (uniform distribution, low collision rate).",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 25,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Collision Resolution: Chaining vs Open Addressing (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Hash table skeleton with chaining-based bucket array compiles and supports insert.",
            "achievement": "Can explain Collision Resolution: Chaining vs Open Addressing (Medium, Day 1/2) clearly to a peer and answer follow-up questions without reference",
            "day": 26,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Hash Table From Scratch + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Has a working hand-rolled HashMap with chaining and automatic resizing.",
            "achievement": "Can explain Hash Table From Scratch + Practice (Medium, Day 2/2) clearly to a peer and answer follow-up questions without reference",
            "day": 27,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          }
        ],
        "dependencies": []
      },
      {
        "id": "7-5",
        "title": "SEARCHING & SORTING",
        "days": "Days 28–45",
        "items": [
          {
            "topic": "Binary Search: The Basic Template (Light)",
            "priority": "🔴 P0",
            "tasks": "Can write binary search from memory without bugs, in both forms.",
            "achievement": "Working Binary Search: The Basic Template (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 28,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Binary Search: Lower Bound & Upper Bound (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement lower/upper bound binary search and use them together to count occurrences in O(log N).",
            "achievement": "Working Binary Search: Lower Bound & Upper Bound (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 29,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 30,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Binary Search on Answer Space (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Can articulate the monotonic predicate for Koko Eating Bananas before finishing the code.",
            "achievement": "Can explain Binary Search on Answer Space (Medium, Day 1/2) clearly to a peer and answer follow-up questions without reference",
            "day": 31,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Binary Search on Answer: Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can recognize a \"search on answer\" problem within the first read and set up the feasibility check correctly.",
            "achievement": "Can explain Binary Search on Answer: Practice (Medium, Day 2/2) clearly to a peer and answer follow-up questions without reference",
            "day": 32,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Sorting Fundamentals: Bubble, Selection, Insertion (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement all three O(N²) sorts and state which are stable.",
            "achievement": "Working Sorting Fundamentals: Bubble, Selection, Insertion (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 33,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Merge Sort (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Merge function correctly merges two sorted halves in O(N).",
            "achievement": "Can explain Merge Sort (Medium, Day 1/2) clearly to a peer and answer follow-up questions without reference",
            "day": 34,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Merge Sort: Finish + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Has a fully working merge sort and can use it to count array inversions in O(N log N).",
            "achievement": "Can explain Merge Sort: Finish + Practice (Medium, Day 2/2) clearly to a peer and answer follow-up questions without reference",
            "day": 35,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 36,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Quick Sort (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Partition function correctly places the pivot and partitions the array around it.",
            "achievement": "Can explain Quick Sort (Medium, Day 1/2) clearly to a peer and answer follow-up questions without reference",
            "day": 37,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Quick Sort: Finish + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can implement Quickselect (partial quicksort) to find the Kth largest element in average O(N).",
            "achievement": "Working Quick Sort: Finish + Practice (Medium, Day 2/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 38,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Heap Sort (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement heap sort and explain why building the heap is O(N), not O(N log N).",
            "achievement": "Working Heap Sort (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 39,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Counting Sort (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement Counting Sort in O(N+k) and explain when k (the range) makes it impractical.",
            "achievement": "Working Counting Sort (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 40,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Radix Sort & Bucket Sort (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Radix Sort correctly sorts multi-digit numbers using repeated counting-sort passes.",
            "achievement": "Can explain Radix Sort & Bucket Sort (Medium, Day 1/2) clearly to a peer and answer follow-up questions without reference",
            "day": 41,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 42,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Radix & Bucket Sort: Finish + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can correctly choose between Counting/Radix/Bucket/comparison sort given any input distribution description.",
            "achievement": "Can explain Radix & Bucket Sort: Finish + Practice (Medium, Day 2/2) clearly to a peer and answer follow-up questions without reference",
            "day": 43,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "HANDS-ON LAB: Median of Two Sorted Arrays (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Understands why the partition must satisfy `maxLeft ≤ minRight` on both arrays simultaneously.",
            "achievement": "Whiteboard HANDS-ON LAB: Median of Two Sorted Arrays (Medium, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 44,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Median of Two Sorted Arrays: Finish + Phase Cheat Sheet",
            "priority": "🔴 P0",
            "tasks": "Can solve Median of Two Sorted Arrays cold and recite every sort's complexity/stability from memory.",
            "achievement": "Can explain Median of Two Sorted Arrays: Finish + Phase Cheat Sheet clearly to a peer and answer follow-up questions without reference",
            "day": 45,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          }
        ],
        "dependencies": []
      },
      {
        "id": "7-6",
        "title": "TWO POINTERS & SLIDING WINDOW",
        "days": "Days 46–60",
        "items": [
          {
            "topic": "Two Pointers: Opposite Direction (Light)",
            "priority": "🔴 P0",
            "tasks": "Can solve Two Sum on a sorted array in O(N) using two converging pointers.",
            "achievement": "Can explain Two Pointers: Opposite Direction (Light) clearly to a peer and answer follow-up questions without reference",
            "day": 46,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Two Pointers: Same Direction / Fast-Slow (Light)",
            "priority": "🔴 P0",
            "tasks": "Can solve in-place array modification problems using same-direction two pointers.",
            "achievement": "Can explain Two Pointers: Same Direction / Fast-Slow (Light) clearly to a peer and answer follow-up questions without reference",
            "day": 47,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 48,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "3Sum: Opposite Pointers with Duplicate Skipping (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Understands exactly where and why duplicate-skipping logic goes in the loop.",
            "achievement": "Whiteboard 3Sum: Opposite Pointers with Duplicate Skipping (Medium, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 49,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "3Sum: Finish + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can implement 3Sum in O(N²) with correct duplicate handling, no Set needed.",
            "achievement": "Working 3Sum: Finish + Practice (Medium, Day 2/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 50,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Sliding Window: Fixed-Size Window (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement a fixed-size sliding window in O(N) without recomputing the window sum from scratch each time.",
            "achievement": "Working Sliding Window: Fixed-Size Window (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 51,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Sliding Window: Variable-Size Window (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Can articulate the exact shrink condition before finishing the implementation.",
            "achievement": "Working Sliding Window: Variable-Size Window (Medium, Day 1/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 52,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Variable Sliding Window: Finish + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Has a working O(N) solution and can adapt the shrink condition to new constraints.",
            "achievement": "Can explain Variable Sliding Window: Finish + Practice (Medium, Day 2/2) clearly to a peer and answer follow-up questions without reference",
            "day": 53,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 54,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Minimum Window Substring (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Understands why a single counter (matched characters) avoids comparing two full frequency maps every iteration.",
            "achievement": "Whiteboard Minimum Window Substring (Medium, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 55,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Minimum Window Substring: Finish + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can implement Minimum Window Substring in O(N) cold, without referencing notes.",
            "achievement": "Working Minimum Window Substring: Finish + Practice (Medium, Day 2/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 56,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Prefix Sum: Range Sum Queries (Light)",
            "priority": "🔴 P0",
            "tasks": "Can answer any range-sum query in O(1) after building the prefix sum array.",
            "achievement": "Working Prefix Sum: Range Sum Queries (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 57,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Subarray Sum Equals K: Prefix Map Pattern (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Understands why `prefixSum - k` lookup in a HashMap solves this in O(N).",
            "achievement": "Whiteboard Subarray Sum Equals K: Prefix Map Pattern (Medium, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 58,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Subarray Sum Equals K: Finish + Phase Cheat Sheet",
            "priority": "🔴 P0",
            "tasks": "Can solve Subarray Sum Equals K cold and recite the full phase cheat sheet.",
            "achievement": "Can explain Subarray Sum Equals K: Finish + Phase Cheat Sheet clearly to a peer and answer follow-up questions without reference",
            "day": 59,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 60,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": []
      },
      {
        "id": "7-7",
        "title": "STRING PATTERNS & SUBSTRING SEARCH",
        "days": "Days 61–75",
        "items": [
          {
            "topic": "Java String Fundamentals for DSA (Light)",
            "priority": "🔴 P0",
            "tasks": "Can explain why string concatenation in a loop is O(N²) total and how StringBuilder fixes it.",
            "achievement": "Working Java String Fundamentals for DSA (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 61,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Frequency Counting for Strings (Light)",
            "priority": "🔴 P0",
            "tasks": "Can solve any anagram/permutation-detection problem using frequency counting without a HashMap when the alphabet is small.",
            "achievement": "Can explain Frequency Counting for Strings (Light) clearly to a peer and answer follow-up questions without reference",
            "day": 62,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Palindrome Problems: Two-Pointer Check (Light)",
            "priority": "🔴 P0",
            "tasks": "Can verify a palindrome in O(N) with O(1) space using two pointers.",
            "achievement": "Can explain Palindrome Problems: Two-Pointer Check (Light) clearly to a peer and answer follow-up questions without reference",
            "day": 63,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Longest Palindromic Substring: Expand From Center (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Understands why two separate expansion calls (odd-center, even-center) are needed per index.",
            "achievement": "Whiteboard Longest Palindromic Substring: Expand From Center (Medium, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 64,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Longest Palindromic Substring: Finish + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can implement Longest Palindromic Substring in O(N²) cold.",
            "achievement": "Working Longest Palindromic Substring: Finish + Practice (Medium, Day 2/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 65,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 66,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "String Hashing: Rolling Hash (Light)",
            "priority": "🔴 P0",
            "tasks": "Can explain how rolling hash updates in O(1) per window shift instead of O(L) recomputation.",
            "achievement": "Whiteboard String Hashing: Rolling Hash (Light) from memory; answer 3 follow-up questions correctly",
            "day": 67,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Rabin-Karp Algorithm (Medium, Day 1/2)",
            "priority": "🟢 P2",
            "tasks": "Understands why a hash match still requires a character-by-character verification step.",
            "achievement": "Whiteboard Rabin-Karp Algorithm (Medium, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 68,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Rabin-Karp: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟢 P2",
            "tasks": "Can implement Rabin-Karp and explain its worst-case degradation scenario.",
            "achievement": "Working Rabin-Karp: Finish + Practice (Medium, Day 2/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 69,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "KMP: Building the LPS Array (Heavy, Day 1/4)",
            "priority": "🟢 P2",
            "tasks": "Can construct the LPS array for any pattern by hand within 2 minutes.",
            "achievement": "Can explain KMP: Building the LPS Array (Heavy, Day 1/4) clearly to a peer and answer follow-up questions without reference",
            "day": 70,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "KMP: Using the LPS Array for Search (Heavy, Day 2/4)",
            "priority": "🟢 P2",
            "tasks": "Has a complete, working KMP implementation achieving O(N+M).",
            "achievement": "Working KMP: Using the LPS Array for Search (Heavy, Day 2/4) demo'd live; handles at least 2 edge cases without reference",
            "day": 71,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 72,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "KMP: Practice Day 1 (Heavy, Day 3/4)",
            "priority": "🟢 P2",
            "tasks": "Can trace KMP's pointer movement on paper for any given text/pattern pair.",
            "achievement": "Can explain KMP: Practice Day 1 (Heavy, Day 3/4) clearly to a peer and answer follow-up questions without reference",
            "day": 73,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "KMP: Practice Day 2 (Heavy, Day 4/4)",
            "priority": "🟢 P2",
            "tasks": "Can justify, in an interview, the choice between naive/Rabin-Karp/KMP for a given constraint set.",
            "achievement": "Pass a timed mock interview round on KMP: Practice Day 2 (Heavy, Day 4/4) with no hints",
            "day": 74,
            "estimatedHours": 2,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "HANDS-ON LAB: Substring Search Benchmarking + Phase Cheat Sheet",
            "priority": "🔴 P0",
            "tasks": "Can produce real benchmark numbers showing KMP/Rabin-Karp's advantage on adversarial inputs and recite the phase cheat sheet.",
            "achievement": "Can explain HANDS-ON LAB: Substring Search Benchmarking + Phase Cheat Sheet clearly to a peer and answer follow-up questions without reference",
            "day": 75,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          }
        ],
        "dependencies": []
      },
      {
        "id": "7-8",
        "title": "MONOTONIC STACK & MONOTONIC QUEUE",
        "days": "Days 76–81",
        "items": [
          {
            "topic": "Monotonic Stack: Concept & Next Greater Element (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement Next Greater Element in O(N) using a monotonic decreasing stack.",
            "achievement": "Working Monotonic Stack: Concept & Next Greater Element (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 76,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Monotonic Stack: Daily Temperatures & Variants (Light)",
            "priority": "🔴 P0",
            "tasks": "Can decide when to store values vs indices on the monotonic stack based on what the problem asks for.",
            "achievement": "Correct comparison of Monotonic Stack: Daily Temperatures & Variants (Light) with 5+ dimensions; justify a choice for a given scenario",
            "day": 77,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 78,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Monotonic Queue: Sliding Window Maximum (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Understands why elements are evicted from the back of the deque when a larger element arrives.",
            "achievement": "Whiteboard Monotonic Queue: Sliding Window Maximum (Medium, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 79,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Sliding Window Maximum: Finish + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can implement Sliding Window Maximum in true O(N) cold.",
            "achievement": "Working Sliding Window Maximum: Finish + Practice (Medium, Day 2/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 80,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "HANDS-ON LAB: Maximal Rectangle Solver + Phase Cheat Sheet",
            "priority": "🔴 P0",
            "tasks": "Can solve Maximal Rectangle by combining histogram-area logic with a monotonic stack, and recite the phase cheat sheet.",
            "achievement": "Can explain HANDS-ON LAB: Maximal Rectangle Solver + Phase Cheat Sheet clearly to a peer and answer follow-up questions without reference",
            "day": 81,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          }
        ],
        "dependencies": []
      },
      {
        "id": "7-9",
        "title": "RECURSION & BACKTRACKING",
        "days": "Days 82–96",
        "items": [
          {
            "topic": "Recursion: The Mental Model (Light)",
            "priority": "🔴 P0",
            "tasks": "Can trace any moderately complex recursive function's call stack by hand.",
            "achievement": "Can explain Recursion: The Mental Model (Light) clearly to a peer and answer follow-up questions without reference",
            "day": 82,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Recursion: Recursion Tree & Recurrence Relations (Light)",
            "priority": "🔴 P0",
            "tasks": "Can explain why naive recursive Fibonacci is O(2^N) by drawing its recursion tree.",
            "achievement": "Whiteboard Recursion: Recursion Tree & Recurrence Relations (Light) from memory; answer 3 follow-up questions correctly",
            "day": 83,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 84,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Backtracking: The Blueprint (Light)",
            "priority": "🔴 P0",
            "tasks": "Can write the generic backtracking template from memory in under 2 minutes.",
            "achievement": "Working Backtracking: The Blueprint (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 85,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Backtracking: Subsets & Combinations (Light)",
            "priority": "🔴 P0",
            "tasks": "Can adapt the backtracking template to subsets/combinations without re-deriving it from scratch.",
            "achievement": "Can explain Backtracking: Subsets & Combinations (Light) clearly to a peer and answer follow-up questions without reference",
            "day": 86,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Backtracking: Permutations (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Understands the difference between the swap-based and used-array approaches to permutation generation.",
            "achievement": "Whiteboard Backtracking: Permutations (Medium, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 87,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Permutations: Finish + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can generate all permutations, with correct duplicate handling, in both forms.",
            "achievement": "Can explain Permutations: Finish + Practice (Medium, Day 2/2) clearly to a peer and answer follow-up questions without reference",
            "day": 88,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Pruning Techniques (Light)",
            "priority": "🔴 P0",
            "tasks": "Can identify and add a pruning condition that meaningfully cuts the search space.",
            "achievement": "Can explain Pruning Techniques (Light) clearly to a peer and answer follow-up questions without reference",
            "day": 89,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 90,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "N-Queens: Setup & Naive Approach (Heavy, Day 1/3)",
            "priority": "🔴 P0",
            "tasks": "Has a working but unoptimized N-Queens solution.",
            "achievement": "Can explain N-Queens: Setup & Naive Approach (Heavy, Day 1/3) clearly to a peer and answer follow-up questions without reference",
            "day": 91,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "N-Queens: Optimized Conflict Checking (Heavy, Day 2/3)",
            "priority": "🔴 P0",
            "tasks": "N-Queens now runs with O(1) conflict checking per placement instead of O(N) board scans.",
            "achievement": "Can explain N-Queens: Optimized Conflict Checking (Heavy, Day 2/3) clearly to a peer and answer follow-up questions without reference",
            "day": 92,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "N-Queens: Practice + Variants (Heavy, Day 3/3)",
            "priority": "🔴 P0",
            "tasks": "Can implement N-Queens with optimal conflict checking cold, in either \"return all\" or \"count only\" form.",
            "achievement": "Working N-Queens: Practice + Variants (Heavy, Day 3/3) demo'd live; handles at least 2 edge cases without reference",
            "day": 93,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Sudoku Solver (Heavy, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Has working row/column/box validity-check functions integrated into the backtracking skeleton.",
            "achievement": "Can explain Sudoku Solver (Heavy, Day 1/2) clearly to a peer and answer follow-up questions without reference",
            "day": 94,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Sudoku Solver: Finish + Phase Cheat Sheet",
            "priority": "🔴 P0",
            "tasks": "Has a fully working Sudoku solver and can recite the phase cheat sheet.",
            "achievement": "Can explain Sudoku Solver: Finish + Phase Cheat Sheet clearly to a peer and answer follow-up questions without reference",
            "day": 95,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 96,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": []
      },
      {
        "id": "7-10",
        "title": "HIERARCHICAL DATA STRUCTURES",
        "days": "Days 97–126",
        "items": [
          {
            "topic": "Binary Trees: Node Structure & Properties (Light)",
            "priority": "🟡 P1",
            "tasks": "Can compute tree height/depth recursively in O(N).",
            "achievement": "Can explain Binary Trees: Node Structure & Properties (Light) clearly to a peer and answer follow-up questions without reference",
            "day": 97,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Binary Tree Traversals: Recursive (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement all 3 recursive traversals from memory.",
            "achievement": "Working Binary Tree Traversals: Recursive (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 98,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Binary Tree Traversals: Iterative + Level Order (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Has a working iterative inorder traversal using an explicit stack.",
            "achievement": "Can explain Binary Tree Traversals: Iterative + Level Order (Medium, Day 1/2) clearly to a peer and answer follow-up questions without reference",
            "day": 99,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Iterative Traversals: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Can implement all 4 traversal types both recursively and iteratively.",
            "achievement": "Working Iterative Traversals: Finish + Practice (Medium, Day 2/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 100,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Binary Tree: Diameter & Path Sum (Light)",
            "priority": "🟡 P1",
            "tasks": "Can solve Diameter of Binary Tree in a single O(N) pass (not O(N²)).",
            "achievement": "Can explain Binary Tree: Diameter & Path Sum (Light) clearly to a peer and answer follow-up questions without reference",
            "day": 101,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 102,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Binary Search Tree: Search, Insert, Delete (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Has working BST insert and search operations.",
            "achievement": "Can explain Binary Search Tree: Search, Insert, Delete (Medium, Day 1/2) clearly to a peer and answer follow-up questions without reference",
            "day": 103,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "BST Delete + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can implement BST delete correctly for all 3 cases.",
            "achievement": "Working BST Delete + Practice (Medium, Day 2/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 104,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "BST: Validate BST & Kth Smallest (Light)",
            "priority": "🔴 P0",
            "tasks": "Can validate a BST correctly and find Kth smallest in O(H+K).",
            "achievement": "Can explain BST: Validate BST & Kth Smallest (Light) clearly to a peer and answer follow-up questions without reference",
            "day": 105,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Balanced BSTs: AVL & Red-Black Trees Conceptual (Light)",
            "priority": "🟢 P2",
            "tasks": "Can explain why an unbalanced BST degrades to O(N) and name where Red-Black trees are used inside the JDK.",
            "achievement": "Whiteboard Balanced BSTs: AVL & Red-Black Trees Conceptual (Light) from memory; answer 3 follow-up questions correctly",
            "day": 106,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "AVL Rotations: LL & RR Cases (Heavy, Day 1/3)",
            "priority": "🟢 P2",
            "tasks": "Can identify an LL or RR imbalance and apply the correct single rotation.",
            "achievement": "Can explain AVL Rotations: LL & RR Cases (Heavy, Day 1/3) clearly to a peer and answer follow-up questions without reference",
            "day": 107,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 108,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "AVL Rotations: LR & RL Cases (Heavy, Day 2/3)",
            "priority": "🟢 P2",
            "tasks": "Can identify an LR or RL imbalance and apply the correct two-step rotation sequence.",
            "achievement": "Can explain AVL Rotations: LR & RL Cases (Heavy, Day 2/3) clearly to a peer and answer follow-up questions without reference",
            "day": 109,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "AVL Tree: Full Insert with Self-Balancing (Heavy, Day 3/3)",
            "priority": "🟢 P2",
            "tasks": "Has a fully working, self-balancing AVL insert handling all 4 rotation cases.",
            "achievement": "Can explain AVL Tree: Full Insert with Self-Balancing (Heavy, Day 3/3) clearly to a peer and answer follow-up questions without reference",
            "day": 110,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Heaps: Binary Heap Representation (Light)",
            "priority": "🟡 P1",
            "tasks": "Can implement siftUp/siftDown from memory and explain the parent/child index math.",
            "achievement": "Working Heaps: Binary Heap Representation (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 111,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Heaps: Heapify & PriorityQueue Usage (Light)",
            "priority": "🔴 P0",
            "tasks": "Can explain why heapify is O(N), not O(N log N), and use `PriorityQueue` fluently with custom orderings.",
            "achievement": "Whiteboard Heaps: Heapify & PriorityQueue Usage (Light) from memory; answer 3 follow-up questions correctly",
            "day": 112,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Tries: Node Structure & Insert/Search (Light)",
            "priority": "🟡 P1",
            "tasks": "Can implement Trie insert and search in O(L) per operation.",
            "achievement": "Working Tries: Node Structure & Insert/Search (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 113,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 114,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Tries: Prefix Search & Autocomplete Design (Medium, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Trie supports `startsWith` and can list all words under a given prefix.",
            "achievement": "Given a broken Tries: Prefix Search & Autocomplete Design (Medium, Day 1/2) scenario, identify root cause and fix within 15 minutes",
            "day": 115,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Autocomplete System: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Has a working Trie-based autocomplete system returning ranked top-K suggestions.",
            "achievement": "Can explain Autocomplete System: Finish + Practice (Medium, Day 2/2) clearly to a peer and answer follow-up questions without reference",
            "day": 116,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Segment Trees: Construction & Range Query (Heavy, Day 1/3)",
            "priority": "🟢 P2",
            "tasks": "Has a working segment tree that answers range-sum queries in O(log N).",
            "achievement": "Can explain Segment Trees: Construction & Range Query (Heavy, Day 1/3) clearly to a peer and answer follow-up questions without reference",
            "day": 117,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Segment Trees: Point Update (Heavy, Day 2/3)",
            "priority": "🟢 P2",
            "tasks": "Segment tree supports both range queries and point updates correctly.",
            "achievement": "Can explain Segment Trees: Point Update (Heavy, Day 2/3) clearly to a peer and answer follow-up questions without reference",
            "day": 118,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Segment Trees: Lazy Propagation for Range Updates (Heavy, Day 3/3)",
            "priority": "🟢 P2",
            "tasks": "Complete segment tree supporting range updates AND range queries using lazy propagation.",
            "achievement": "Can explain Segment Trees: Lazy Propagation for Range Updates (Heavy, Day 3/3) clearly to a peer and answer follow-up questions without reference",
            "day": 119,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 120,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Fenwick Tree (Binary Indexed Tree) (Medium, Day 1/2)",
            "priority": "🟢 P2",
            "tasks": "Understands the `i & (-i)` bit trick that drives Fenwick Tree traversal.",
            "achievement": "Whiteboard Fenwick Tree (Binary Indexed Tree) (Medium, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 121,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Fenwick Tree: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟢 P2",
            "tasks": "Can implement Fenwick Tree from scratch and justify choosing it over a Segment Tree.",
            "achievement": "Working Fenwick Tree: Finish + Practice (Medium, Day 2/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 122,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Disjoint Set Union: Path Compression & Union by Rank (Medium, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Has a working `find()` function with path compression.",
            "achievement": "Can explain Disjoint Set Union: Path Compression & Union by Rank (Medium, Day 1/2) clearly to a peer and answer follow-up questions without reference",
            "day": 123,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "DSU: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟢 P2",
            "tasks": "Has a fully optimized DSU achieving near-O(1) amortized find/union.",
            "achievement": "Can explain DSU: Finish + Practice (Medium, Day 2/2) clearly to a peer and answer follow-up questions without reference",
            "day": 124,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "HANDS-ON LAB: Trie-Based Autocomplete Extension + Phase Cheat Sheet",
            "priority": "🟡 P1",
            "tasks": "Can recite the full phase cheat sheet and confidently pick the right tree-based structure for any new problem.",
            "achievement": "Can explain HANDS-ON LAB: Trie-Based Autocomplete Extension + Phase Cheat Sheet clearly to a peer and answer follow-up questions without reference",
            "day": 125,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 126,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": []
      },
      {
        "id": "7-11",
        "title": "GRAPHS & GRAPH ALGORITHMS",
        "days": "Days 127–152",
        "items": [
          {
            "topic": "Graph Fundamentals & Representations (Light)",
            "priority": "🔴 P0",
            "tasks": "Can choose the correct representation for a given problem based on density and required operations.",
            "achievement": "Can explain Graph Fundamentals & Representations (Light) clearly to a peer and answer follow-up questions without reference",
            "day": 127,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Breadth-First Search (BFS) (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement BFS and use it for shortest path in an unweighted graph.",
            "achievement": "Working Breadth-First Search (BFS) (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 128,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Depth-First Search (DFS) (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement DFS both ways and explain when iterative DFS is necessary.",
            "achievement": "Working Depth-First Search (DFS) (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 129,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Topological Sort: Kahn's Algorithm (Medium, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Understands why nodes with in-degree 0 are the correct starting points.",
            "achievement": "Whiteboard Topological Sort: Kahn's Algorithm (Medium, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 130,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Topological Sort: DFS-Based + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can implement topological sort both ways and detect a cycle in the process.",
            "achievement": "Working Topological Sort: DFS-Based + Practice (Medium, Day 2/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 131,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 132,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Bipartite Graph Check (Light)",
            "priority": "🟡 P1",
            "tasks": "Can implement a bipartite check and explain why an odd cycle makes a graph non-bipartite.",
            "achievement": "Working Bipartite Graph Check (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 133,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Dijkstra's Algorithm: Setup & PriorityQueue Approach (Heavy, Day 1/3)",
            "priority": "🔴 P0",
            "tasks": "Understands edge relaxation and why Dijkstra fails with negative weights.",
            "achievement": "Whiteboard Dijkstra's Algorithm: Setup & PriorityQueue Approach (Heavy, Day 1/3) from memory; answer 3 follow-up questions correctly",
            "day": 134,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Dijkstra's Algorithm: Finish Implementation (Heavy, Day 2/3)",
            "priority": "🟡 P1",
            "tasks": "Has a fully working Dijkstra's implementation using `PriorityQueue<int[]>`.",
            "achievement": "Working Dijkstra's Algorithm: Finish Implementation (Heavy, Day 2/3) demo'd live; handles at least 2 edge cases without reference",
            "day": 135,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Dijkstra's Algorithm: Practice (Heavy, Day 3/3)",
            "priority": "🟡 P1",
            "tasks": "Can adapt Dijkstra's to non-standard variants (probability maximization, K-stop constraints).",
            "achievement": "Can explain Dijkstra's Algorithm: Practice (Heavy, Day 3/3) clearly to a peer and answer follow-up questions without reference",
            "day": 136,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Bellman-Ford Algorithm (Medium, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Understands why exactly V-1 rounds of relaxation guarantee correctness.",
            "achievement": "Whiteboard Bellman-Ford Algorithm (Medium, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 137,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 138,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Bellman-Ford: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Can implement Bellman-Ford and correctly detect negative cycles.",
            "achievement": "Working Bellman-Ford: Finish + Practice (Medium, Day 2/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 139,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Floyd-Warshall Algorithm (Medium, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Understands why the loop order (k outermost) is essential for correctness.",
            "achievement": "Whiteboard Floyd-Warshall Algorithm (Medium, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 140,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Floyd-Warshall: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Can implement Floyd-Warshall in O(V³) and justify when it beats V calls to Dijkstra.",
            "achievement": "Working Floyd-Warshall: Finish + Practice (Medium, Day 2/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 141,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Minimum Spanning Tree: Kruskal's Algorithm (Medium, Day 1/2)",
            "priority": "🟢 P2",
            "tasks": "Understands why sorting edges by weight first makes the greedy choice correct.",
            "achievement": "Whiteboard Minimum Spanning Tree: Kruskal's Algorithm (Medium, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 142,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Kruskal's: Finish + Prim's Algorithm Intro (Medium, Day 2/2)",
            "priority": "🟢 P2",
            "tasks": "Has a working Kruskal's implementation and understands Prim's core mechanic.",
            "achievement": "Working Kruskal's: Finish + Prim's Algorithm Intro (Medium, Day 2/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 143,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 144,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Prim's Algorithm: Finish + Practice",
            "priority": "🟢 P2",
            "tasks": "Can implement both Kruskal's and Prim's, and explain sparse vs dense graph tradeoffs.",
            "achievement": "Working Prim's Algorithm: Finish + Practice demo'd live; handles at least 2 edge cases without reference",
            "day": 145,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Cycle Detection: Directed & Undirected Graphs (Light)",
            "priority": "🟡 P1",
            "tasks": "Can implement cycle detection for both graph types.",
            "achievement": "Working Cycle Detection: Directed & Undirected Graphs (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 146,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Strongly Connected Components: Tarjan's/Kosaraju's (Heavy, Day 1/2)",
            "priority": "🟢 P2",
            "tasks": "Understands what a low-link value represents and how it identifies an SCC root.",
            "achievement": "Whiteboard Strongly Connected Components: Tarjan's/Kosaraju's (Heavy, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 147,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "SCC: Finish Implementation (Heavy, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Has a working SCC detection algorithm and can trace it by hand.",
            "achievement": "Can explain SCC: Finish Implementation (Heavy, Day 2/2) clearly to a peer and answer follow-up questions without reference",
            "day": 148,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Graph Bridges: Tarjan's Bridge Discovery (Medium, Day 1/2)",
            "priority": "🟢 P2",
            "tasks": "Understands the bridge condition and why it identifies a critical edge.",
            "achievement": "Whiteboard Graph Bridges: Tarjan's Bridge Discovery (Medium, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 149,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 150,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Bridges: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Can implement Tarjan's Bridge Discovery and solve Critical Connections in a Network.",
            "achievement": "Working Bridges: Finish + Practice (Medium, Day 2/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 151,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "HANDS-ON LAB: Network Router Optimizer + Phase Cheat Sheet",
            "priority": "🟡 P1",
            "tasks": "Can recite the full Graphs cheat sheet and select the right algorithm family for any new graph problem.",
            "achievement": "Can explain HANDS-ON LAB: Network Router Optimizer + Phase Cheat Sheet clearly to a peer and answer follow-up questions without reference",
            "day": 152,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          }
        ],
        "dependencies": []
      },
      {
        "id": "7-12",
        "title": "GREEDY ALGORITHMS",
        "days": "Days 153–166",
        "items": [
          {
            "topic": "Greedy Fundamentals: Proving Correctness (Light)",
            "priority": "🟡 P1",
            "tasks": "Can sketch an exchange-argument proof for why a greedy strategy is or isn't correct.",
            "achievement": "Can explain Greedy Fundamentals: Proving Correctness (Light) clearly to a peer and answer follow-up questions without reference",
            "day": 153,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Activity Selection / Interval Scheduling (Light)",
            "priority": "🟡 P1",
            "tasks": "Can solve Activity Selection optimally and explain why sorting by start time is wrong.",
            "achievement": "Whiteboard Activity Selection / Interval Scheduling (Light) from memory; answer 3 follow-up questions correctly",
            "day": 154,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Merge Intervals (Light)",
            "priority": "🟡 P1",
            "tasks": "Can implement Merge Intervals in O(N log N).",
            "achievement": "Working Merge Intervals (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 155,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 156,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Jump Game Variants (Medium, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Understands the \"farthest reachable\" greedy invariant before finishing the code.",
            "achievement": "Whiteboard Jump Game Variants (Medium, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 157,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Jump Game: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Can solve Jump Game II in O(N) using greedy range tracking.",
            "achievement": "Can explain Jump Game: Finish + Practice (Medium, Day 2/2) clearly to a peer and answer follow-up questions without reference",
            "day": 158,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Huffman Coding (Medium, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Can construct a Huffman tree by hand for a small frequency table.",
            "achievement": "Can explain Huffman Coding (Medium, Day 1/2) clearly to a peer and answer follow-up questions without reference",
            "day": 159,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Huffman Coding: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Has a complete Huffman encoder producing a valid prefix-free code table.",
            "achievement": "Given a broken Huffman Coding: Finish + Practice (Medium, Day 2/2) scenario, identify root cause and fix within 15 minutes",
            "day": 160,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Task Scheduling: Job Sequencing & Task Scheduler (Medium, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Understands the formula-based approach to Task Scheduler.",
            "achievement": "Whiteboard Task Scheduling: Job Sequencing & Task Scheduler (Medium, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 161,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 162,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Task Scheduling: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Can implement both task-scheduling variants.",
            "achievement": "Working Task Scheduling: Finish + Practice (Medium, Day 2/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 163,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Fractional Knapsack + Gas Station (Light)",
            "priority": "🟡 P1",
            "tasks": "Can explain why Fractional Knapsack is greedy-solvable but 0/1 Knapsack is not, and solve Gas Station in O(N).",
            "achievement": "Whiteboard Fractional Knapsack + Gas Station (Light) from memory; answer 3 follow-up questions correctly",
            "day": 164,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Partitioning & Assignment Problems (Light)",
            "priority": "🟡 P1",
            "tasks": "Can identify the correct sorting criterion for a new greedy partitioning problem.",
            "achievement": "Can explain Partitioning & Assignment Problems (Light) clearly to a peer and answer follow-up questions without reference",
            "day": 165,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Advanced Greedy Problems + Phase Cheat Sheet",
            "priority": "🟡 P1",
            "tasks": "Can distinguish whether a new problem is provably greedy or secretly requires DP.",
            "achievement": "Can explain Advanced Greedy Problems + Phase Cheat Sheet clearly to a peer and answer follow-up questions without reference",
            "day": 166,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          }
        ],
        "dependencies": []
      },
      {
        "id": "7-13",
        "title": "DYNAMIC PROGRAMMING",
        "days": "Days 167–193",
        "items": [
          {
            "topic": "DP Fundamentals: Memoization vs Tabulation (Light)",
            "priority": "🔴 P0",
            "tasks": "Can convert any brute-force recursion to memoized, then tabulated, as a repeatable process.",
            "achievement": "Can explain DP Fundamentals: Memoization vs Tabulation (Light) clearly to a peer and answer follow-up questions without reference",
            "day": 167,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 168,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "1D DP: Climbing Stairs & House Robber (Light)",
            "priority": "🔴 P0",
            "tasks": "Can write the House Robber transition and generalize it to \"skip-adjacent\" problems.",
            "achievement": "Working 1D DP: Climbing Stairs & House Robber (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 169,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "1D DP: House Robber II & Min Cost Climbing Stairs (Light)",
            "priority": "🔴 P0",
            "tasks": "Can adapt a linear 1D DP to a circular-array variant by running it twice.",
            "achievement": "Can explain 1D DP: House Robber II & Min Cost Climbing Stairs (Light) clearly to a peer and answer follow-up questions without reference",
            "day": 170,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "0/1 Knapsack: 2D DP Table (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Has a working 2D Knapsack DP table and can read off the optimal value.",
            "achievement": "Can explain 0/1 Knapsack: 2D DP Table (Medium, Day 1/2) clearly to a peer and answer follow-up questions without reference",
            "day": 171,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "0/1 Knapsack: Space Optimization + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can implement 0/1 Knapsack with O(capacity) space instead of O(N × capacity).",
            "achievement": "Working 0/1 Knapsack: Space Optimization + Practice (Medium, Day 2/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 172,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Unbounded Knapsack & Coin Change (Medium, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Understands why forward iteration allows item reuse while reverse iteration prevents it.",
            "achievement": "Whiteboard Unbounded Knapsack & Coin Change (Medium, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 173,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 174,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Coin Change: Finish + Subset Sum Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Can distinguish \"minimum coins\" DP from \"count combinations\" DP.",
            "achievement": "Can explain Coin Change: Finish + Subset Sum Practice (Medium, Day 2/2) clearly to a peer and answer follow-up questions without reference",
            "day": 175,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "DP on Strings: Longest Common Subsequence (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement LCS in O(N×M) and distinguish \"subsequence\" vs \"substring\" DP.",
            "achievement": "Working DP on Strings: Longest Common Subsequence (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 176,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "DP on Strings: Longest Palindromic Subsequence (Light)",
            "priority": "🔴 P0",
            "tasks": "Can solve LPS by recognizing it as a disguised LCS problem.",
            "achievement": "Can explain DP on Strings: Longest Palindromic Subsequence (Light) clearly to a peer and answer follow-up questions without reference",
            "day": 177,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Edit Distance (Medium, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Can write all 3 transition cases (insert/delete/replace) by hand.",
            "achievement": "Working Edit Distance (Medium, Day 1/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 178,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Edit Distance: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Can implement Edit Distance in O(N×M) cold.",
            "achievement": "Working Edit Distance: Finish + Practice (Medium, Day 2/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 179,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 180,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Wildcard & Regex Matching (Heavy, Day 1/2)",
            "priority": "🟢 P2",
            "tasks": "Understands the special handling required for `*` before finishing code.",
            "achievement": "Whiteboard Wildcard & Regex Matching (Heavy, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 181,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Wildcard/Regex Matching: Finish + Practice (Heavy, Day 2/2)",
            "priority": "🟢 P2",
            "tasks": "Can implement both Wildcard and Regex matching DP.",
            "achievement": "Working Wildcard/Regex Matching: Finish + Practice (Heavy, Day 2/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 182,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "DP on Trees: House Robber III (Heavy, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Understands why a single return value per node is insufficient.",
            "achievement": "Whiteboard DP on Trees: House Robber III (Heavy, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 183,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "DP on Trees: Diameter & Max Path Sum (Heavy, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Can solve House Robber III and Max Path Sum via single-pass post-order DP.",
            "achievement": "Can explain DP on Trees: Diameter & Max Path Sum (Heavy, Day 2/2) clearly to a peer and answer follow-up questions without reference",
            "day": 184,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Interval DP: Matrix Chain Multiplication (Heavy, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Can write the MCM transition from memory.",
            "achievement": "Working Interval DP: Matrix Chain Multiplication (Heavy, Day 1/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 185,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 186,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Interval DP: Burst Balloons & Palindrome Partitioning (Heavy, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Can recognize the interval-DP signature in a new problem.",
            "achievement": "Can explain Interval DP: Burst Balloons & Palindrome Partitioning (Heavy, Day 2/2) clearly to a peer and answer follow-up questions without reference",
            "day": 187,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Bitmask DP: Traveling Salesman Problem (Heavy, Day 1/2)",
            "priority": "🟢 P2",
            "tasks": "Understands why bitmask DP is only feasible for small N (typically ≤ 20).",
            "achievement": "Whiteboard Bitmask DP: Traveling Salesman Problem (Heavy, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 188,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Bitmask DP: Finish + Practice (Heavy, Day 2/2)",
            "priority": "🟢 P2",
            "tasks": "Can implement TSP via Bitmask DP in O(N² × 2^N).",
            "achievement": "Working Bitmask DP: Finish + Practice (Heavy, Day 2/2) demo'd live; handles at least 2 edge cases without reference",
            "day": 189,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Advanced DP Practice Day 1 (Light)",
            "priority": "🟢 P2",
            "tasks": "Can classify any new DP problem within the first minute of reading it.",
            "achievement": "Can explain Advanced DP Practice Day 1 (Light) clearly to a peer and answer follow-up questions without reference",
            "day": 190,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "HANDS-ON LAB: Coin Change Optimization (Light)",
            "priority": "🟡 P1",
            "tasks": "Can complete the Coin Change Optimization lab within its suggested time.",
            "achievement": "Can explain HANDS-ON LAB: Coin Change Optimization (Light) clearly to a peer and answer follow-up questions without reference",
            "day": 191,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 192,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Phase Cheat Sheet + Mixed DP Review",
            "priority": "🟡 P1",
            "tasks": "Can recite the full DP phase cheat sheet under time pressure.",
            "achievement": "Score 80%+ on a self-quiz covering recent topics without notes",
            "day": 193,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": []
      },
      {
        "id": "7-14",
        "title": "CUSTOM DESIGN PROBLEMS",
        "days": "Days 194–202",
        "items": [
          {
            "topic": "LRU Cache: Design + Interview Strategy (Medium, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Understands why HashMap alone and DLL alone each fail individually.",
            "achievement": "Whiteboard LRU Cache: Design + Interview Strategy (Medium, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 194,
            "estimatedHours": 2,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "LRU Cache: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Has a fully working hand-rolled LRU Cache, plus a `LinkedHashMap`-based version.",
            "achievement": "Can explain LRU Cache: Finish + Practice (Medium, Day 2/2) clearly to a peer and answer follow-up questions without reference",
            "day": 195,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "LFU Cache: Design & Frequency Buckets (Heavy, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Understands the frequency-bucket design before finishing code.",
            "achievement": "Whiteboard LFU Cache: Design & Frequency Buckets (Heavy, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 196,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "LFU Cache: Finish + Practice (Heavy, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Has a fully working LFU Cache achieving true O(1) get/put.",
            "achievement": "Can explain LFU Cache: Finish + Practice (Heavy, Day 2/2) clearly to a peer and answer follow-up questions without reference",
            "day": 197,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 198,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Min/Max Stack Revisited + Design Twitter (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Understands why a max-heap merge is the efficient approach to `getNewsFeed`.",
            "achievement": "Whiteboard Min/Max Stack Revisited + Design Twitter (Medium, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 199,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Design Twitter: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Has a complete working Design Twitter with efficient `getNewsFeed`.",
            "achievement": "Complete design for Design Twitter: Finish + Practice (Medium, Day 2/2) with trade-offs documented; survives 5-minute peer critique",
            "day": 200,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Browser History + Hit Counter/Rate Limiter (Light)",
            "priority": "🟡 P1",
            "tasks": "Can implement a sliding-window rate limiter and explain fixed-window burst abuse.",
            "achievement": "Working Browser History + Hit Counter/Rate Limiter (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 201,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "HANDS-ON LAB: LFU Cache Extension + Phase Cheat Sheet",
            "priority": "🟡 P1",
            "tasks": "Can design and defend any \"design X\" problem end-to-end in a mock interview.",
            "achievement": "Complete design for HANDS-ON LAB: LFU Cache Extension + Phase Cheat Sheet with trade-offs documented; survives 5-minute peer critique",
            "day": 202,
            "estimatedHours": 2,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          }
        ],
        "dependencies": []
      },
      {
        "id": "7-15",
        "title": "MATH & BIT MANIPULATION",
        "days": "Days 203–211",
        "items": [
          {
            "topic": "Number Theory: GCD & LCM (Light)",
            "priority": "🟢 P2",
            "tasks": "Can implement Euclidean GCD in both forms and derive LCM.",
            "achievement": "Working Number Theory: GCD & LCM (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 203,
            "estimatedHours": 2.5,
            "resource": "Java Performance (Hunt & John)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 204,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Sieve of Eratosthenes (Light)",
            "priority": "🟢 P2",
            "tasks": "Can implement the Sieve and explain its speed advantage.",
            "achievement": "Working Sieve of Eratosthenes (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 205,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Fast (Binary) Exponentiation (Light)",
            "priority": "🟢 P2",
            "tasks": "Can implement fast exponentiation in O(log N).",
            "achievement": "Working Fast (Binary) Exponentiation (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 206,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Modular Arithmetic: Add/Subtract/Multiply (Light)",
            "priority": "🟢 P2",
            "tasks": "Can implement overflow-safe modular arithmetic helpers.",
            "achievement": "Working Modular Arithmetic: Add/Subtract/Multiply (Light) demo'd live; handles at least 2 edge cases without reference",
            "day": 207,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Modular Multiplicative Inverse via Fermat's Little Theorem (Medium, Day 1/2)",
            "priority": "🟢 P2",
            "tasks": "Understands why Fermat's Little Theorem requires a PRIME modulus.",
            "achievement": "Whiteboard Modular Multiplicative Inverse via Fermat's Little Theorem (Medium, Day 1/2) from memory; answer 3 follow-up questions correctly",
            "day": 208,
            "estimatedHours": 1.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "Modular Inverse: Computing nCr mod p + Practice (Medium, Day 2/2)",
            "priority": "🟢 P2",
            "tasks": "Can compute nCr mod a large prime in O(1) per query after O(N) precomputation.",
            "achievement": "Can explain Modular Inverse: Computing nCr mod p + Practice (Medium, Day 2/2) clearly to a peer and answer follow-up questions without reference",
            "day": 209,
            "estimatedHours": 3.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "Score 80%+ on a self-quiz covering the last 3-5 days without notes",
            "day": 210,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          },
          {
            "topic": "Bit Manipulation: Core Tricks + HANDS-ON LAB: Bitwise Division Engine",
            "priority": "🟢 P2",
            "tasks": "Can implement bitwise integer division and recite the full phase cheat sheet.",
            "achievement": "Working Bit Manipulation: Core Tricks + HANDS-ON LAB: Bitwise Division Engine demo'd live; handles at least 2 edge cases without reference",
            "day": 211,
            "estimatedHours": 2.5,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          }
        ],
        "dependencies": []
      },
      {
        "id": "7-16",
        "title": "INTERVIEW STRATEGY & BACKEND BRIDGE",
        "days": "Days 212–213",
        "items": [
          {
            "topic": "The 15 Problem-Solving Patterns + Interview Framework",
            "priority": "🟡 P1",
            "tasks": "Can map any previously-solved problem to one of the 15 patterns instantly and apply the full interview framework live.",
            "achievement": "Pass a timed mock interview round on The 15 Problem-Solving Patterns + Interview Framework with no hints",
            "day": 212,
            "estimatedHours": 2,
            "resource": "NeetCode.io + Introduction to Algorithms (CLRS)"
          },
          {
            "topic": "DSA-to-Backend Pattern Bridge + Final Review",
            "priority": "🟡 P1",
            "tasks": "Can answer \"where would you use [DSA structure] in production?\" with a concrete named example for at least 6 structures.",
            "achievement": "Score 80%+ on a self-quiz covering recent topics without notes",
            "day": 213,
            "estimatedHours": 1,
            "resource": "Review your notes and previous resources"
          }
        ],
        "dependencies": []
      }
    ]
  }
];
