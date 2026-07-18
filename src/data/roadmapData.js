export const roadmapData = [
  {
    "id": 1,
    "title": "System Design & Architecture",
    "days": 120,
    "color": "cyan",
    "phases": [
      {
        "id": "1-1",
        "title": "FOUNDATIONS OF DISTRIBUTED SYSTEMS",
        "days": "Days 1–20",
        "items": [
          {
            "topic": "Prereqs: networking, one backend language, basic SQL",
            "priority": "MUST KNOW",
            "tasks": "Write a note explaining IP/ports, and a script hitting a local server on a given port",
            "achievement": "Write a note explaining IP/ports, and a script hitting a local server on a given port",
            "day": 1
          },
          {
            "topic": "Monolith vs Microservices, SPOF, coupling",
            "priority": "MUST KNOW",
            "tasks": "1-page comparison doc with 3 real examples of each",
            "achievement": "1-page comparison doc with 3 real examples of each",
            "day": 2
          },
          {
            "topic": "Vertical vs Horizontal scaling",
            "priority": "MUST KNOW",
            "tasks": "Diagram showing scale-up vs scale-out with cost/limits",
            "achievement": "Diagram showing scale-up vs scale-out with cost/limits",
            "day": 3
          },
          {
            "topic": "Networking: TCP/UDP, OSI model",
            "priority": "MUST KNOW",
            "tasks": "Table comparing TCP vs UDP use cases (video call, banking, DNS)",
            "achievement": "Table comparing TCP vs UDP use cases (video call, banking, DNS)",
            "day": 4
          },
          {
            "topic": "DNS resolution",
            "priority": "MUST KNOW",
            "tasks": "Step-by-step written walkthrough of typing google.com → page load",
            "achievement": "Step-by-step written walkthrough of typing google.com → page load",
            "day": 5
          },
          {
            "topic": "Load Balancers: L4 vs L7, algorithms",
            "priority": "MUST KNOW",
            "tasks": "Diagram placing a load balancer + pick correct algorithm for 3 scenarios",
            "achievement": "Diagram placing a load balancer + pick correct algorithm for 3 scenarios",
            "day": 6
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "Active recall of days 1–6, clear backlog",
            "achievement": "Active recall of days 1–6, clear backlog",
            "day": 7
          },
          {
            "topic": "Consistent Hashing (theory + build)",
            "priority": "MUST KNOW",
            "tasks": "Implement a working hash ring in Python/Java; test add/remove node",
            "achievement": "Implement a working hash ring in Python/Java; test add/remove node",
            "day": 8
          },
          {
            "topic": "Reverse vs Forward Proxy",
            "priority": "MUST KNOW",
            "tasks": "Explain Nginx use case in your own words",
            "achievement": "Explain Nginx use case in your own words",
            "day": 9
          },
          {
            "topic": "Caching strategies (Cache-Aside, Read/Write-Through/Back)",
            "priority": "MUST KNOW",
            "tasks": "Pick correct strategy for 3 given workloads, justify",
            "achievement": "Pick correct strategy for 3 given workloads, justify",
            "day": 10
          },
          {
            "topic": "Cache eviction (LRU, LFU, FIFO)",
            "priority": "MUST KNOW",
            "tasks": "Code a working LRU cache from scratch",
            "achievement": "Code a working LRU cache from scratch",
            "day": 11
          },
          {
            "topic": "CDNs (Push vs Pull)",
            "priority": "MUST KNOW",
            "tasks": "Design a static asset pipeline using CloudFront/Cloudflare",
            "achievement": "Design a static asset pipeline using CloudFront/Cloudflare",
            "day": 12
          },
          {
            "topic": "CAP Theorem",
            "priority": "MUST KNOW",
            "tasks": "Categorize 5 real databases as CP or AP with reasoning",
            "achievement": "Categorize 5 real databases as CP or AP with reasoning",
            "day": 13
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 14
          },
          {
            "topic": "PACELC Theorem",
            "priority": "MUST KNOW",
            "tasks": "Use PACELC to explain DynamoDB vs MongoDB config differences",
            "achievement": "Use PACELC to explain DynamoDB vs MongoDB config differences",
            "day": 15
          },
          {
            "topic": "Consensus: Paxos & Raft",
            "priority": "MUST KNOW",
            "tasks": "Explain leader election + log replication in your own words/diagram",
            "achievement": "Explain leader election + log replication in your own words/diagram",
            "day": 16
          },
          {
            "topic": "Data Partitioning & Sharding",
            "priority": "MUST KNOW",
            "tasks": "Design a shard key strategy avoiding hot spots for a given dataset",
            "achievement": "Design a shard key strategy avoiding hot spots for a given dataset",
            "day": 17
          },
          {
            "topic": "Database Replication (Master-Slave, Multi-Leader, Leaderless)",
            "priority": "MUST KNOW",
            "tasks": "Compare sync vs async replication trade-offs, pick one for a use case",
            "achievement": "Compare sync vs async replication trade-offs, pick one for a use case",
            "day": 18
          },
          {
            "topic": "Message Queues: Pub/Sub vs P2P (Kafka vs RabbitMQ)",
            "priority": "MUST KNOW",
            "tasks": "Diagram decoupling 2 services with a broker",
            "achievement": "Diagram decoupling 2 services with a broker",
            "day": 19
          },
          {
            "topic": "API Design: REST vs RPC/gRPC, WebSockets/SSE/Long Polling",
            "priority": "MUST KNOW",
            "tasks": "Design REST endpoints + pick real-time protocol for chat app",
            "achievement": "Design REST endpoints + pick real-time protocol for chat app",
            "day": 20
          }
        ]
      },
      {
        "id": "1-2",
        "title": "DATABASES & DATA MANAGEMENT",
        "days": "Days 21–45",
        "items": [
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 21
          },
          {
            "topic": "RDBMS vs NoSQL, ACID vs BASE",
            "priority": "MUST KNOW",
            "tasks": "Choose Postgres vs MongoDB for 3 given business cases",
            "achievement": "Choose Postgres vs MongoDB for 3 given business cases",
            "day": 22
          },
          {
            "topic": "Database Indexes (B-Trees, Composite, Covering)",
            "priority": "MUST KNOW",
            "tasks": "Optimize a given slow SQL query with an index",
            "achievement": "Optimize a given slow SQL query with an index",
            "day": 23
          },
          {
            "topic": "Key-Value Stores (Redis/Memcached)",
            "priority": "MUST KNOW",
            "tasks": "Design a leaderboard + pub/sub feature using Redis",
            "achievement": "Design a leaderboard + pub/sub feature using Redis",
            "day": 24
          },
          {
            "topic": "Document Stores (MongoDB)",
            "priority": "MUST KNOW",
            "tasks": "Model a blog with nested comments as a document schema",
            "achievement": "Model a blog with nested comments as a document schema",
            "day": 25
          },
          {
            "topic": "Wide-Column Stores (Cassandra)",
            "priority": "MUST KNOW",
            "tasks": "Design a query-driven data model with partition/clustering keys",
            "achievement": "Design a query-driven data model with partition/clustering keys",
            "day": 26
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 27
          },
          {
            "topic": "Graph Databases (Neo4j)",
            "priority": "MUST KNOW",
            "tasks": "Identify one problem needing a graph DB instead of SQL JOINs",
            "achievement": "Identify one problem needing a graph DB instead of SQL JOINs",
            "day": 28
          },
          {
            "topic": "Search Engines (Elasticsearch, Inverted Index)",
            "priority": "MUST KNOW",
            "tasks": "Design a search feature for a product catalog",
            "achievement": "Design a search feature for a product catalog",
            "day": 29
          },
          {
            "topic": "Time-Series DBs, Vector DBs (Pinecone/Milvus)",
            "priority": "MUST KNOW",
            "tasks": "Explain why relational DB fails for IoT metrics; explain vector search",
            "achievement": "Explain why relational DB fails for IoT metrics; explain vector search",
            "day": 30
          },
          {
            "topic": "Blob/Object Storage (S3)",
            "priority": "MUST KNOW",
            "tasks": "Design secure direct-to-S3 upload flow with pre-signed URLs",
            "achievement": "Design secure direct-to-S3 upload flow with pre-signed URLs",
            "day": 31
          },
          {
            "topic": "Transaction Isolation Levels",
            "priority": "MUST KNOW",
            "tasks": "Explain dirty reads/phantom reads and how each level prevents them",
            "achievement": "Explain dirty reads/phantom reads and how each level prevents them",
            "day": 32
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 33
          },
          {
            "topic": "Concurrency Control (Optimistic vs Pessimistic)",
            "priority": "MUST KNOW",
            "tasks": "Implement optimistic locking to prevent lost updates",
            "achievement": "Implement optimistic locking to prevent lost updates",
            "day": 34
          },
          {
            "topic": "Distributed Transactions: 2PC vs Saga Pattern",
            "priority": "MUST KNOW",
            "tasks": "Design an Order-Payment-Inventory saga (choreography)",
            "achievement": "Design an Order-Payment-Inventory saga (choreography)",
            "day": 35
          },
          {
            "topic": "CDC (Debezium), Event Sourcing, CQRS",
            "priority": "MUST KNOW",
            "tasks": "Design an audit-heavy ledger using event sourcing + CQRS",
            "achievement": "Design an audit-heavy ledger using event sourcing + CQRS",
            "day": 36
          },
          {
            "topic": "Database Migration Strategies (Expand-Contract)",
            "priority": "MUST KNOW",
            "tasks": "Plan a zero-downtime column rename on a live table",
            "achievement": "Plan a zero-downtime column rename on a live table",
            "day": 37
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 38
          },
          {
            "topic": "Consistent Hashing for sharding, Quorum (W+R>N)",
            "priority": "MUST KNOW",
            "tasks": "Calculate quorum config for strong vs eventual consistency",
            "achievement": "Calculate quorum config for strong vs eventual consistency",
            "day": 39
          },
          {
            "topic": "Polyglot Persistence",
            "priority": "MUST KNOW",
            "tasks": "Design a system using 3+ DB types (SQL+Redis+ES) for an e-commerce catalog",
            "achievement": "Design a system using 3+ DB types (SQL+Redis+ES) for an e-commerce catalog",
            "day": 40
          },
          {
            "topic": "**Buffer**",
            "priority": "MUST KNOW",
            "tasks": "Catch up / mock quiz on Phase 2",
            "achievement": "Catch up / mock quiz on Phase 2",
            "day": 41
          },
          {
            "topic": "**Phase 2 Review**",
            "priority": "MUST KNOW",
            "tasks": "Design full DB architecture for a complex domain (justify every choice)",
            "achievement": "Design full DB architecture for a complex domain (justify every choice)",
            "day": 45
          }
        ]
      },
      {
        "id": "1-3",
        "title": "MICROSERVICES & RESILIENCY PATTERNS",
        "days": "Days 46–75",
        "items": [
          {
            "topic": "Service Discovery (Consul, Eureka, ZooKeeper)",
            "priority": "MUST KNOW",
            "tasks": "Explain client-side vs server-side discovery with a diagram",
            "achievement": "Explain client-side vs server-side discovery with a diagram",
            "day": 46
          },
          {
            "topic": "API Gateway Pattern",
            "priority": "MUST KNOW",
            "tasks": "Design a unified entry point (routing, auth, rate limit, aggregation)",
            "achievement": "Design a unified entry point (routing, auth, rate limit, aggregation)",
            "day": 47
          },
          {
            "topic": "BFF (Backend for Frontend)",
            "priority": "MUST KNOW",
            "tasks": "Decide when to split one gateway into mobile/web BFFs",
            "achievement": "Decide when to split one gateway into mobile/web BFFs",
            "day": 48
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 49
          },
          {
            "topic": "Circuit Breaker Pattern",
            "priority": "MUST KNOW",
            "tasks": "Implement a basic circuit breaker (Closed/Open/Half-Open)",
            "achievement": "Implement a basic circuit breaker (Closed/Open/Half-Open)",
            "day": 50
          },
          {
            "topic": "Bulkhead Pattern",
            "priority": "MUST KNOW",
            "tasks": "Combine circuit breaker + bulkhead in one resilient service design",
            "achievement": "Combine circuit breaker + bulkhead in one resilient service design",
            "day": 51
          },
          {
            "topic": "Retry & Timeout Strategies (backoff + jitter)",
            "priority": "MUST KNOW",
            "tasks": "Implement safe retry logic avoiding thundering herd",
            "achievement": "Implement safe retry logic avoiding thundering herd",
            "day": 52
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 53
          },
          {
            "topic": "Kafka Deep Dive (Topics, Partitions, Consumer Groups)",
            "priority": "MUST KNOW",
            "tasks": "Design a high-throughput pipeline using partitions for parallelism",
            "achievement": "Design a high-throughput pipeline using partitions for parallelism",
            "day": 54
          },
          {
            "topic": "Dead Letter Queues",
            "priority": "MUST KNOW",
            "tasks": "Design error-handling flow for failed Kafka/SQS messages",
            "achievement": "Design error-handling flow for failed Kafka/SQS messages",
            "day": 55
          },
          {
            "topic": "Idempotency in APIs",
            "priority": "MUST KNOW",
            "tasks": "Implement an Idempotency-Key system for payment retries",
            "achievement": "Implement an Idempotency-Key system for payment retries",
            "day": 56
          },
          {
            "topic": "Distributed Locks (Redlock, ZooKeeper)",
            "priority": "MUST KNOW",
            "tasks": "Coordinate a safe distributed job execution across services",
            "achievement": "Coordinate a safe distributed job execution across services",
            "day": 57
          },
          {
            "topic": "Transactional Outbox Pattern",
            "priority": "MUST KNOW",
            "tasks": "Design outbox to guarantee at-least-once delivery",
            "achievement": "Design outbox to guarantee at-least-once delivery",
            "day": 58
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 59
          },
          {
            "topic": "AuthN/AuthZ (Basic, Session, Token)",
            "priority": "MUST KNOW",
            "tasks": "Pick correct auth mechanism for monolith vs distributed API",
            "achievement": "Pick correct auth mechanism for monolith vs distributed API",
            "day": 60
          },
          {
            "topic": "JWT structure & risks",
            "priority": "MUST KNOW",
            "tasks": "Explain JWT revocation difficulty; implement JWT verify",
            "achievement": "Explain JWT revocation difficulty; implement JWT verify",
            "day": 61
          },
          {
            "topic": "OAuth2 & OIDC",
            "priority": "MUST KNOW",
            "tasks": "Diagram OAuth2 login-via-Google flow end to end",
            "achievement": "Diagram OAuth2 login-via-Google flow end to end",
            "day": 62
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 63
          },
          {
            "topic": "Distributed Tracing (OpenTelemetry, Jaeger)",
            "priority": "MUST KNOW",
            "tasks": "Trace a request across 3 mock services with span propagation",
            "achievement": "Trace a request across 3 mock services with span propagation",
            "day": 64
          },
          {
            "topic": "Metrics & Observability (RED/USE methods)",
            "priority": "MUST KNOW",
            "tasks": "Design a monitoring dashboard strategy for a new microservice",
            "achievement": "Design a monitoring dashboard strategy for a new microservice",
            "day": 65
          },
          {
            "topic": "Hands-on: Prometheus + Grafana",
            "priority": "MUST KNOW",
            "tasks": "Scrape dummy app metrics, build one working dashboard",
            "achievement": "Scrape dummy app metrics, build one working dashboard",
            "day": 66
          },
          {
            "topic": "Log Aggregation (ELK Stack)",
            "priority": "MUST KNOW",
            "tasks": "Explain why never log to local files in Docker; design centralized logging",
            "achievement": "Explain why never log to local files in Docker; design centralized logging",
            "day": 67
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 68
          },
          {
            "topic": "GraphQL vs REST",
            "priority": "MUST KNOW",
            "tasks": "Decide GraphQL vs multiple REST endpoints for a complex dashboard",
            "achievement": "Decide GraphQL vs multiple REST endpoints for a complex dashboard",
            "day": 69
          },
          {
            "topic": "gRPC & Protobuf",
            "priority": "MUST KNOW",
            "tasks": "Design internal service-to-service comms layer with gRPC",
            "achievement": "Design internal service-to-service comms layer with gRPC",
            "day": 70
          },
          {
            "topic": "Service Mesh (Istio: data/control plane, mTLS)",
            "priority": "MUST KNOW",
            "tasks": "Explain how mesh secures services without app code changes",
            "achievement": "Explain how mesh secures services without app code changes",
            "day": 71
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 72
          },
          {
            "topic": "Batch vs Stream Processing (Spark, Flink/Kafka Streams)",
            "priority": "MUST KNOW",
            "tasks": "Design a real-time fraud detection pipeline",
            "achievement": "Design a real-time fraud detection pipeline",
            "day": 73
          },
          {
            "topic": "Data Lakes vs Data Warehouses",
            "priority": "MUST KNOW",
            "tasks": "Decide Snowflake/Redshift vs S3 Data Lake for a given case",
            "achievement": "Decide Snowflake/Redshift vs S3 Data Lake for a given case",
            "day": 74
          },
          {
            "topic": "Security: HTTPS/TLS + OWASP Top 10",
            "priority": "MUST KNOW",
            "tasks": "Explain TLS handshake; identify 3 vulnerabilities in a sample API design",
            "achievement": "Explain TLS handshake; identify 3 vulnerabilities in a sample API design",
            "day": 75
          }
        ]
      },
      {
        "id": "1-4",
        "title": "THE INTERVIEW FRAMEWORK",
        "days": "Days 76–90",
        "items": [
          {
            "topic": "PEDALS framework + requirements gathering",
            "priority": "MUST KNOW",
            "tasks": "Scope \"Design Twitter\" into functional/non-functional reqs",
            "achievement": "Scope \"Design Twitter\" into functional/non-functional reqs",
            "day": 76
          },
          {
            "topic": "Back-of-envelope math (QPS, storage)",
            "priority": "MUST KNOW",
            "tasks": "Build a QPS/storage calculator script from DAU input",
            "achievement": "Build a QPS/storage calculator script from DAU input",
            "day": 77
          },
          {
            "topic": "API & Data Model Design",
            "priority": "MUST KNOW",
            "tasks": "Draw ER diagram + REST contract for \"Design Twitter\"",
            "achievement": "Draw ER diagram + REST contract for \"Design Twitter\"",
            "day": 78
          },
          {
            "topic": "High-Level Design & Bottleneck ID",
            "priority": "MUST KNOW",
            "tasks": "Draw Client→LB→App→DB and mark what breaks at 100M users",
            "achievement": "Draw Client→LB→App→DB and mark what breaks at 100M users",
            "day": 79
          },
          {
            "topic": "Scaling Strategies (cache, shard, queue, CDN)",
            "priority": "MUST KNOW",
            "tasks": "Apply fixes to the bottlenecks from Day 79",
            "achievement": "Apply fixes to the bottlenecks from Day 79",
            "day": 80
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 81
          },
          {
            "topic": "Pagination at Scale (cursor vs offset)",
            "priority": "MUST KNOW",
            "tasks": "Implement cursor pagination over 1M-row dataset",
            "achievement": "Implement cursor pagination over 1M-row dataset",
            "day": 82
          },
          {
            "topic": "Unique ID Generation (UUID, Snowflake)",
            "priority": "MUST KNOW",
            "tasks": "Design a distributed sortable ID service",
            "achievement": "Design a distributed sortable ID service",
            "day": 83
          },
          {
            "topic": "Designing a Key-Value Store (Dynamo/Cassandra internals)",
            "priority": "MUST KNOW",
            "tasks": "Architect a distributed KV store using consistent hashing + quorum",
            "achievement": "Architect a distributed KV store using consistent hashing + quorum",
            "day": 84
          },
          {
            "topic": "Designing a Rate Limiter (sliding window + Redis)",
            "priority": "MUST KNOW",
            "tasks": "Implement sliding-window rate limiter in Redis",
            "achievement": "Implement sliding-window rate limiter in Redis",
            "day": 85
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 86
          },
          {
            "topic": "Designing a Web Crawler",
            "priority": "MUST KNOW",
            "tasks": "Build a BFS crawler respecting robots.txt, limited concurrency",
            "achievement": "Build a BFS crawler respecting robots.txt, limited concurrency",
            "day": 87
          },
          {
            "topic": "**Full Mock Interview: \"Design a URL Shortener\"**",
            "priority": "MUST KNOW",
            "tasks": "Timed 45-min run through full PEDALS framework",
            "achievement": "Timed 45-min run through full PEDALS framework",
            "day": 88
          },
          {
            "topic": "**Buffer / weak-spot review**",
            "priority": "MUST KNOW",
            "tasks": "Fix gaps identified in mock",
            "achievement": "Fix gaps identified in mock",
            "day": 89
          }
        ]
      },
      {
        "id": "1-5",
        "title": "APPLIED SYSTEM DESIGNS",
        "days": "Days 91–115",
        "items": [
          {
            "topic": "Pastebin",
            "priority": "MUST KNOW",
            "tasks": "Blob storage, metadata DB, expiration/cleanup",
            "achievement": "Blob storage, metadata DB, expiration/cleanup",
            "day": 91
          },
          {
            "topic": "Twitter/X",
            "priority": "MUST KNOW",
            "tasks": "Fan-out on write vs read, celebrity problem",
            "achievement": "Fan-out on write vs read, celebrity problem",
            "day": 92
          },
          {
            "topic": "Instagram",
            "priority": "MUST KNOW",
            "tasks": "Image storage (S3+CDN), feed generation",
            "achievement": "Image storage (S3+CDN), feed generation",
            "day": 93
          },
          {
            "topic": "Dropbox/Google Drive",
            "priority": "MUST KNOW",
            "tasks": "Block-level sync, delta sync, concurrent edits",
            "achievement": "Block-level sync, delta sync, concurrent edits",
            "day": 94
          },
          {
            "topic": "WhatsApp/Messenger",
            "priority": "MUST KNOW",
            "tasks": "WebSockets, message ordering, presence, push notifs",
            "achievement": "WebSockets, message ordering, presence, push notifs",
            "day": 95
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 96
          },
          {
            "topic": "YouTube/Netflix",
            "priority": "MUST KNOW",
            "tasks": "Transcoding pipeline, chunking, adaptive bitrate CDN",
            "achievement": "Transcoding pipeline, chunking, adaptive bitrate CDN",
            "day": 97
          },
          {
            "topic": "Uber/Lyft",
            "priority": "MUST KNOW",
            "tasks": "Geospatial indexing (QuadTree/Geohash), real-time matching",
            "achievement": "Geospatial indexing (QuadTree/Geohash), real-time matching",
            "day": 98
          },
          {
            "topic": "Yelp/Proximity Search",
            "priority": "MUST KNOW",
            "tasks": "Read-optimized location discovery",
            "achievement": "Read-optimized location discovery",
            "day": 99
          },
          {
            "topic": "Ticketmaster/BookMyShow",
            "priority": "MUST KNOW",
            "tasks": "High concurrency, row locks, anti double-booking",
            "achievement": "High concurrency, row locks, anti double-booking",
            "day": 100
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 101
          },
          {
            "topic": "Typeahead/Autocomplete",
            "priority": "MUST KNOW",
            "tasks": "Trie + hot-prefix caching",
            "achievement": "Trie + hot-prefix caching",
            "day": 102
          },
          {
            "topic": "Amazon/E-Commerce",
            "priority": "MUST KNOW",
            "tasks": "Cart (DynamoDB), inventory, checkout Saga",
            "achievement": "Cart (DynamoDB), inventory, checkout Saga",
            "day": 103
          },
          {
            "topic": "Payment Gateway",
            "priority": "MUST KNOW",
            "tasks": "Idempotency, 2PC vs Saga, ACID compliance",
            "achievement": "Idempotency, 2PC vs Saga, ACID compliance",
            "day": 104
          },
          {
            "topic": "Google Docs (collaborative editing)",
            "priority": "MUST KNOW",
            "tasks": "OT vs CRDTs",
            "achievement": "OT vs CRDTs",
            "day": 105
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 106
          },
          {
            "topic": "Notification System",
            "priority": "MUST KNOW",
            "tasks": "Fan-out queues, rate limiting, APNS/FCM/SendGrid",
            "achievement": "Fan-out queues, rate limiting, APNS/FCM/SendGrid",
            "day": 107
          },
          {
            "topic": "Metrics/Monitoring System (Datadog-like)",
            "priority": "MUST KNOW",
            "tasks": "Time-series ingestion at scale",
            "achievement": "Time-series ingestion at scale",
            "day": 108
          },
          {
            "topic": "Distributed Message Queue (Kafka internals)",
            "priority": "MUST KNOW",
            "tasks": "Disk I/O, zero-copy, partition replication",
            "achievement": "Disk I/O, zero-copy, partition replication",
            "day": 109
          },
          {
            "topic": "Tinder",
            "priority": "MUST KNOW",
            "tasks": "Geospatial matching, swipe queues, recommendations",
            "achievement": "Geospatial matching, swipe queues, recommendations",
            "day": 110
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 111
          },
          {
            "topic": "Slack",
            "priority": "MUST KNOW",
            "tasks": "Channel architecture, live typing, message search",
            "achievement": "Channel architecture, live typing, message search",
            "day": 112
          },
          {
            "topic": "Stock Exchange",
            "priority": "MUST KNOW",
            "tasks": "Ultra-low latency, order matching engine",
            "achievement": "Ultra-low latency, order matching engine",
            "day": 113
          },
          {
            "topic": "ChatGPT/LLM Inference System",
            "priority": "MUST KNOW",
            "tasks": "Token streaming, KV-cache, batching",
            "achievement": "Token streaming, KV-cache, batching",
            "day": 114
          },
          {
            "topic": "AI RAG System",
            "priority": "MUST KNOW",
            "tasks": "Ingestion pipeline, vector DB, LLM orchestration",
            "achievement": "Ingestion pipeline, vector DB, LLM orchestration",
            "day": 115
          }
        ]
      },
      {
        "id": "1-6",
        "title": "FINAL PREP & MOCK INTERVIEWS",
        "days": "Days 116–120",
        "items": [
          {
            "topic": "System Design Anti-Patterns",
            "priority": "MUST KNOW",
            "tasks": "Critique 3 over-engineered designs; propose simpler alternatives",
            "achievement": "Critique 3 over-engineered designs; propose simpler alternatives",
            "day": 116
          },
          {
            "topic": "Mock Interview 1 (Design Uber) + Mock Interview 2 (Design Ticketmaster)",
            "priority": "MUST KNOW",
            "tasks": "2× 45-min timed runs, self-graded",
            "achievement": "2× 45-min timed runs, self-graded",
            "day": 117
          },
          {
            "topic": "Mock Interview 3 (Surprise topic) + Mock Interview 4 (Hard mode: Stock Exchange)",
            "priority": "MUST KNOW",
            "tasks": "2× 45-min timed runs",
            "achievement": "2× 45-min timed runs",
            "day": 118
          },
          {
            "topic": "Weakness Refinement",
            "priority": "MUST KNOW",
            "tasks": "Revisit 2–3 weakest concepts flagged from mocks",
            "achievement": "Revisit 2–3 weakest concepts flagged from mocks",
            "day": 119
          },
          {
            "topic": "Final Review & Whiteboard Practice",
            "priority": "MUST KNOW",
            "tasks": "Review cheat sheets/back-of-envelope math; whiteboard 2 designs by hand",
            "achievement": "Review cheat sheets/back-of-envelope math; whiteboard 2 designs by hand",
            "day": 120
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "title": "Spring Boot & Microservices",
    "days": 200,
    "color": "emerald",
    "phases": [
      {
        "id": "2-1",
        "title": "JVM & CORE JAVA INTERNALS",
        "days": "Days 1–35",
        "items": [
          {
            "topic": "JVM Architecture (Classloader, Method Area, Heap, Stack, PC Register)",
            "priority": "MUST KNOW",
            "tasks": "Draw the JVM memory model from memory; explain where objects vs primitives live",
            "achievement": "Draw the JVM memory model from memory; explain where objects vs primitives live",
            "day": 1
          },
          {
            "topic": "Garbage Collection (Mark & Sweep, G1GC, ZGC)",
            "priority": "MUST KNOW",
            "tasks": "Explain Young/Old Gen/Metaspace; pick correct GC for a latency-sensitive service",
            "achievement": "Explain Young/Old Gen/Metaspace; pick correct GC for a latency-sensitive service",
            "day": 2
          },
          {
            "topic": "JVM Tuning & Low Latency (-Xms, -Xmx, GC flags)",
            "priority": "MUST KNOW",
            "tasks": "Tune a sample app for low pause times; document before/after",
            "achievement": "Tune a sample app for low pause times; document before/after",
            "day": 3
          },
          {
            "topic": "Memory Leaks & Profiling (VisualVM/JDK Mission Control)",
            "priority": "MUST KNOW",
            "tasks": "Intentionally leak memory, then find and fix it with a profiler",
            "achievement": "Intentionally leak memory, then find and fix it with a profiler",
            "day": 4
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 5
          },
          {
            "topic": "Build Systems: Maven (lifecycle, dependency conflicts)",
            "priority": "MUST KNOW",
            "tasks": "Build a pom.xml from scratch, resolve a real dependency conflict",
            "achievement": "Build a pom.xml from scratch, resolve a real dependency conflict",
            "day": 6
          },
          {
            "topic": "Build Systems: Gradle",
            "priority": "MUST KNOW",
            "tasks": "Recreate the Maven project in Gradle; explain daemon/incremental builds",
            "achievement": "Recreate the Maven project in Gradle; explain daemon/incremental builds",
            "day": 7
          },
          {
            "topic": "Modern Java: Streams API",
            "priority": "MUST KNOW",
            "tasks": "Replace 50 lines of nested loops with a Stream pipeline",
            "achievement": "Replace 50 lines of nested loops with a Stream pipeline",
            "day": 8
          },
          {
            "topic": "Modern Java: Optional, Records, Pattern Matching",
            "priority": "MUST KNOW",
            "tasks": "Refactor a class using records + eliminate NPEs with Optional",
            "achievement": "Refactor a class using records + eliminate NPEs with Optional",
            "day": 9
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 10
          },
          {
            "topic": "Collections Deep Dive (ArrayList/LinkedList, HashMap/TreeMap, Red-Black Trees)",
            "priority": "MUST KNOW",
            "tasks": "Pick optimal collection for 3 given scenarios with justification",
            "achievement": "Pick optimal collection for 3 given scenarios with justification",
            "day": 11
          },
          {
            "topic": "Concurrency: Threads, Race Conditions",
            "priority": "MUST KNOW",
            "tasks": "Break a shared counter intentionally, observe the race",
            "achievement": "Break a shared counter intentionally, observe the race",
            "day": 12
          },
          {
            "topic": "Concurrency: Synchronization, volatile, CPU cache coherence",
            "priority": "MUST KNOW",
            "tasks": "Fix yesterday's broken counter with `synchronized`",
            "achievement": "Fix yesterday's broken counter with `synchronized`",
            "day": 13
          },
          {
            "topic": "Java Memory Model (JMM): happens-before, memory barriers",
            "priority": "MUST KNOW",
            "tasks": "Write a program demonstrating a visibility bug and fix it",
            "achievement": "Write a program demonstrating a visibility bug and fix it",
            "day": 14
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 15
          },
          {
            "topic": "Concurrency: Thread Pools (ExecutorService)",
            "priority": "MUST KNOW",
            "tasks": "Replace manual thread creation with a managed pool",
            "achievement": "Replace manual thread creation with a managed pool",
            "day": 16
          },
          {
            "topic": "Concurrency: CompletableFuture",
            "priority": "MUST KNOW",
            "tasks": "Chain 3 REST calls with `thenApply`/`thenCombine`",
            "achievement": "Chain 3 REST calls with `thenApply`/`thenCombine`",
            "day": 17
          },
          {
            "topic": "Concurrency: Concurrent Collections (ConcurrentHashMap, CountDownLatch)",
            "priority": "MUST KNOW",
            "tasks": "Build a thread-safe counter service without manual locks",
            "achievement": "Build a thread-safe counter service without manual locks",
            "day": 18
          },
          {
            "topic": "Concurrency: Virtual Threads (Project Loom)",
            "priority": "MUST KNOW",
            "tasks": "Spawn 1M virtual threads; compare RAM usage vs platform threads",
            "achievement": "Spawn 1M virtual threads; compare RAM usage vs platform threads",
            "day": 19
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 20
          },
          {
            "topic": "JUnit 5 Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Write parameterized tests + exception assertions for a sample service",
            "achievement": "Write parameterized tests + exception assertions for a sample service",
            "day": 21
          },
          {
            "topic": "Mockito Framework",
            "priority": "MUST KNOW",
            "tasks": "Isolate a service from its DB dependency using `@Mock`/`@InjectMocks`",
            "achievement": "Isolate a service from its DB dependency using `@Mock`/`@InjectMocks`",
            "day": 22
          },
          {
            "topic": "Test-Driven Development (TDD)",
            "priority": "MUST KNOW",
            "tasks": "Build a \"String Calculator\" using Red-Green-Refactor",
            "achievement": "Build a \"String Calculator\" using Red-Green-Refactor",
            "day": 23
          },
          {
            "topic": "Logging (SLF4J/Logback)",
            "priority": "MUST KNOW",
            "tasks": "Configure log rolling + level separation for a sample app",
            "achievement": "Configure log rolling + level separation for a sample app",
            "day": 24
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 25
          },
          {
            "topic": "SOLID Principles",
            "priority": "MUST KNOW",
            "tasks": "Refactor a bad-smell class to follow all 5 principles",
            "achievement": "Refactor a bad-smell class to follow all 5 principles",
            "day": 26
          },
          {
            "topic": "Design Patterns: Creational (Singleton, Builder, Factory)",
            "priority": "MUST KNOW",
            "tasks": "Implement all 3 from scratch, no framework",
            "achievement": "Implement all 3 from scratch, no framework",
            "day": 27
          },
          {
            "topic": "Design Patterns: Behavioral (Strategy, Observer)",
            "priority": "MUST KNOW",
            "tasks": "Build a payment-method switcher + event notifier",
            "achievement": "Build a payment-method switcher + event notifier",
            "day": 28
          },
          {
            "topic": "Spring's Internal Use of Patterns",
            "priority": "MUST KNOW",
            "tasks": "Identify Template Method/Decorator/Proxy/Observer inside Spring source",
            "achievement": "Identify Template Method/Decorator/Proxy/Observer inside Spring source",
            "day": 29
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 30
          },
          {
            "topic": "**Phase 1 Capstone: Multithreaded Web Scraper**",
            "priority": "MUST KNOW",
            "tasks": "Build using `CompletableFuture` + `ConcurrentHashMap`, unit tested with Mockito",
            "achievement": "Build using `CompletableFuture` + `ConcurrentHashMap`, unit tested with Mockito",
            "day": 31
          },
          {
            "topic": "Interview Prep: Core Java",
            "priority": "MUST KNOW",
            "tasks": "Review JMM, equals/hashCode, volatile vs synchronized vs atomic",
            "achievement": "Review JMM, equals/hashCode, volatile vs synchronized vs atomic",
            "day": 33
          },
          {
            "topic": "**Buffer / catch-up**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 34
          }
        ]
      },
      {
        "id": "2-2",
        "title": "SPRING FRAMEWORK & REST APIs",
        "days": "Days 36–85",
        "items": [
          {
            "topic": "IoC & Dependency Injection",
            "priority": "MUST KNOW",
            "tasks": "Write a pure-Java orchestrator, then convert it to `@Component`/`@Autowired`",
            "achievement": "Write a pure-Java orchestrator, then convert it to `@Component`/`@Autowired`",
            "day": 36
          },
          {
            "topic": "Spring Bean Lifecycle & Scopes",
            "priority": "MUST KNOW",
            "tasks": "Implement `@PostConstruct`/`@PreDestroy` for a resource-managing bean",
            "achievement": "Implement `@PostConstruct`/`@PreDestroy` for a resource-managing bean",
            "day": 37
          },
          {
            "topic": "Aspect-Oriented Programming (AOP)",
            "priority": "MUST KNOW",
            "tasks": "Write a custom `@LogExecutionTime` annotation with an `@Around` aspect",
            "achievement": "Write a custom `@LogExecutionTime` annotation with an `@Around` aspect",
            "day": 38
          },
          {
            "topic": "Introduction to Spring Boot & Auto-Configuration",
            "priority": "MUST KNOW",
            "tasks": "Initialize via Spring Initializr; explain `@SpringBootApplication`",
            "achievement": "Initialize via Spring Initializr; explain `@SpringBootApplication`",
            "day": 39
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 40
          },
          {
            "topic": "Native Compilation (GraalVM/AOT)",
            "priority": "MUST KNOW",
            "tasks": "Build a native executable; compare startup time vs JVM JAR",
            "achievement": "Build a native executable; compare startup time vs JVM JAR",
            "day": 41
          },
          {
            "topic": "Configuration Management (`application.yml`, `@ConfigurationProperties`, `@Profile`)",
            "priority": "MUST KNOW",
            "tasks": "Bind config to a POJO; switch dev/prod profiles",
            "achievement": "Bind config to a POJO; switch dev/prod profiles",
            "day": 42
          },
          {
            "topic": "Spring Boot Actuator + Prometheus/Grafana",
            "priority": "MUST KNOW",
            "tasks": "Enable actuator, scrape metrics, build one Grafana dashboard",
            "achievement": "Enable actuator, scrape metrics, build one Grafana dashboard",
            "day": 43
          },
          {
            "topic": "Virtual Threads + Spring Boot",
            "priority": "MUST KNOW",
            "tasks": "Load-test a blocking endpoint with virtual threads vs platform threads",
            "achievement": "Load-test a blocking endpoint with virtual threads vs platform threads",
            "day": 44
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 45
          },
          {
            "topic": "Spring Web MVC Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Build a `@RestController`; explain `DispatcherServlet`",
            "achievement": "Build a `@RestController`; explain `DispatcherServlet`",
            "day": 46
          },
          {
            "topic": "RESTful API Design (path/query params, HTTP verbs)",
            "priority": "MUST KNOW",
            "tasks": "Design REST endpoints for a \"Design Twitter\"-style resource",
            "achievement": "Design REST endpoints for a \"Design Twitter\"-style resource",
            "day": 47
          },
          {
            "topic": "Idempotency Keys for Unsafe Operations",
            "priority": "MUST KNOW",
            "tasks": "Implement Idempotency-Key header pattern for a payment endpoint",
            "achievement": "Implement Idempotency-Key header pattern for a payment endpoint",
            "day": 48
          },
          {
            "topic": "API Versioning (URI & Header)",
            "priority": "MUST KNOW",
            "tasks": "Implement both strategies; explain compatibility trade-offs",
            "achievement": "Implement both strategies; explain compatibility trade-offs",
            "day": 49
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 50
          },
          {
            "topic": "Swagger/OpenAPI Integration",
            "priority": "MUST KNOW",
            "tasks": "Auto-generate docs for your REST API via springdoc-openapi",
            "achievement": "Auto-generate docs for your REST API via springdoc-openapi",
            "day": 51
          },
          {
            "topic": "API Rate Limiting (Bucket4j)",
            "priority": "MUST KNOW",
            "tasks": "Protect an endpoint from abuse; return rate-limit headers",
            "achievement": "Protect an endpoint from abuse; return rate-limit headers",
            "day": 52
          },
          {
            "topic": "ResponseEntity, Global Exception Handling, RFC 7807",
            "priority": "MUST KNOW",
            "tasks": "Build a `@RestControllerAdvice` returning `ProblemDetail`",
            "achievement": "Build a `@RestControllerAdvice` returning `ProblemDetail`",
            "day": 53
          },
          {
            "topic": "DTO Pattern + Bean Validation + MapStruct",
            "priority": "MUST KNOW",
            "tasks": "Build Request/Response DTOs with `@Valid` + auto-mapping",
            "achievement": "Build Request/Response DTOs with `@Valid` + auto-mapping",
            "day": 54
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 55
          },
          {
            "topic": "File Uploads/Downloads",
            "priority": "MUST KNOW",
            "tasks": "Implement `MultipartFile` upload + download endpoint",
            "achievement": "Implement `MultipartFile` upload + download endpoint",
            "day": 56
          },
          {
            "topic": "Pagination & Sorting (API layer)",
            "priority": "MUST KNOW",
            "tasks": "Return a structured `Page` response with metadata",
            "achievement": "Return a structured `Page` response with metadata",
            "day": 57
          },
          {
            "topic": "Content Negotiation, ETags & Conditional Requests",
            "priority": "MUST KNOW",
            "tasks": "Implement XML fallback + 304-based caching",
            "achievement": "Implement XML fallback + 304-based caching",
            "day": 58
          },
          {
            "topic": "CORS Configuration",
            "priority": "MUST KNOW",
            "tasks": "Configure `WebMvcConfigurer` for a React SPA client",
            "achievement": "Configure `WebMvcConfigurer` for a React SPA client",
            "day": 59
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 60
          },
          {
            "topic": "Testing Controllers (`@WebMvcTest`)",
            "priority": "MUST KNOW",
            "tasks": "Write MockMvc slice tests without booting the full context",
            "achievement": "Write MockMvc slice tests without booting the full context",
            "day": 61
          },
          {
            "topic": "RestTemplate/WebClient + HTTP Declarative Clients",
            "priority": "MUST KNOW",
            "tasks": "Call an external API using WebClient, then refactor with `@HttpExchange`",
            "achievement": "Call an external API using WebClient, then refactor with `@HttpExchange`",
            "day": 62
          },
          {
            "topic": "Integration Testing (`@SpringBootTest`) + Testcontainers",
            "priority": "MUST KNOW",
            "tasks": "Boot full context; spin up real Postgres via Testcontainers",
            "achievement": "Boot full context; spin up real Postgres via Testcontainers",
            "day": 63
          },
          {
            "topic": "WireMock for External API Stubbing",
            "priority": "MUST KNOW",
            "tasks": "Test code that calls a third-party API without real network calls",
            "achievement": "Test code that calls a third-party API without real network calls",
            "day": 64
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 65
          },
          {
            "topic": "Dockerizing Spring Boot",
            "priority": "MUST KNOW",
            "tasks": "Write a multi-stage Dockerfile; optimize layer caching",
            "achievement": "Write a multi-stage Dockerfile; optimize layer caching",
            "day": 66
          },
          {
            "topic": "Docker Compose for Local Dev",
            "priority": "MUST KNOW",
            "tasks": "One-command boot of app + Postgres + Redis",
            "achievement": "One-command boot of app + Postgres + Redis",
            "day": 67
          },
          {
            "topic": "Caching with Spring Cache (`@Cacheable`)",
            "priority": "MUST KNOW",
            "tasks": "Cache expensive DB queries with Redis backend",
            "achievement": "Cache expensive DB queries with Redis backend",
            "day": 68
          },
          {
            "topic": "Scheduling Tasks (`@Scheduled`)",
            "priority": "MUST KNOW",
            "tasks": "Automate a nightly cleanup cron job",
            "achievement": "Automate a nightly cleanup cron job",
            "day": 69
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 70
          },
          {
            "topic": "GraphQL Integration",
            "priority": "MUST KNOW",
            "tasks": "Build a schema + resolver for an over-fetching-prone dashboard",
            "achievement": "Build a schema + resolver for an over-fetching-prone dashboard",
            "day": 71
          },
          {
            "topic": "**Phase 2 Capstone: Task Management REST API**",
            "priority": "MUST KNOW",
            "tasks": "Fully documented, dockerized, tested API with DTOs, validation, ETags, idempotency",
            "achievement": "Fully documented, dockerized, tested API with DTOs, validation, ETags, idempotency",
            "day": 72
          },
          {
            "topic": "**Buffer weeks / catch-up**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 74
          }
        ]
      },
      {
        "id": "2-3",
        "title": "DATA PERSISTENCE & SECURITY",
        "days": "Days 86–130",
        "items": [
          {
            "topic": "Raw JDBC, Connection Pools, HikariCP Sizing",
            "priority": "MUST KNOW",
            "tasks": "Connect via pure JDBC; tune pool size under simulated load",
            "achievement": "Connect via pure JDBC; tune pool size under simulated load",
            "day": 86
          },
          {
            "topic": "ORM Concepts + JPA Entities",
            "priority": "MUST KNOW",
            "tasks": "Explain impedance mismatch; map `@Entity` classes with `@Id`/`@GeneratedValue`",
            "achievement": "Explain impedance mismatch; map `@Entity` classes with `@Id`/`@GeneratedValue`",
            "day": 87
          },
          {
            "topic": "Spring Data JPA Basics",
            "priority": "MUST KNOW",
            "tasks": "CRUD via `JpaRepository` + derived query methods",
            "achievement": "CRUD via `JpaRepository` + derived query methods",
            "day": 88
          },
          {
            "topic": "JPA Relationships (One-to-Many, Many-to-Many, Cascade)",
            "priority": "MUST KNOW",
            "tasks": "Model Author-Books and Students-Courses bidirectionally",
            "achievement": "Model Author-Books and Students-Courses bidirectionally",
            "day": 89
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 90
          },
          {
            "topic": "Transactions (`@Transactional`) + Fetch Strategies (Lazy/Eager)",
            "priority": "MUST KNOW",
            "tasks": "Demonstrate rollback on exception; explain why Eager is an anti-pattern",
            "achievement": "Demonstrate rollback on exception; explain why Eager is an anti-pattern",
            "day": 91
          },
          {
            "topic": "The N+1 Query Problem",
            "priority": "MUST KNOW",
            "tasks": "Reproduce it in logs, fix with `@EntityGraph`/`JOIN FETCH`",
            "achievement": "Reproduce it in logs, fix with `@EntityGraph`/`JOIN FETCH`",
            "day": 92
          },
          {
            "topic": "Hibernate 2nd-Level Cache + JPQL/Native Queries",
            "priority": "MUST KNOW",
            "tasks": "Enable L2 cache; write a custom JPQL join query",
            "achievement": "Enable L2 cache; write a custom JPQL join query",
            "day": 93
          },
          {
            "topic": "Pagination in Spring Data + Projections",
            "priority": "MUST KNOW",
            "tasks": "Fetch paged results + a column-only projection",
            "achievement": "Fetch paged results + a column-only projection",
            "day": 94
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 95
          },
          {
            "topic": "Database Migrations (Flyway)",
            "priority": "MUST KNOW",
            "tasks": "Write versioned migration scripts; explain why `ddl-auto=update` is unsafe in prod",
            "achievement": "Write versioned migration scripts; explain why `ddl-auto=update` is unsafe in prod",
            "day": 96
          },
          {
            "topic": "Optimistic Locking + Data Auditing + Soft Deletes",
            "priority": "MUST KNOW",
            "tasks": "Implement `@Version`, `@CreatedDate`, and `@SQLDelete`",
            "achievement": "Implement `@Version`, `@CreatedDate`, and `@SQLDelete`",
            "day": 97
          },
          {
            "topic": "Multi-Tenancy Patterns",
            "priority": "MUST KNOW",
            "tasks": "Implement discriminator-column tenancy with Hibernate `@Filter`",
            "achievement": "Implement discriminator-column tenancy with Hibernate `@Filter`",
            "day": 98
          },
          {
            "topic": "Testing the Data Layer (`@DataJpaTest`)",
            "priority": "MUST KNOW",
            "tasks": "Validate custom JPQL logic without booting web servers",
            "achievement": "Validate custom JPQL logic without booting web servers",
            "day": 99
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 100
          },
          {
            "topic": "Spring Security Architecture (SecurityFilterChain)",
            "priority": "MUST KNOW",
            "tasks": "Diagram the request flow through filters",
            "achievement": "Diagram the request flow through filters",
            "day": 101
          },
          {
            "topic": "Basic Auth + RBAC",
            "priority": "MUST KNOW",
            "tasks": "Implement `UserDetailsService` + `@PreAuthorize` role checks",
            "achievement": "Implement `UserDetailsService` + `@PreAuthorize` role checks",
            "day": 102
          },
          {
            "topic": "Stateless Security: JWT + Filter + Refresh Tokens",
            "priority": "MUST KNOW",
            "tasks": "Build custom `OncePerRequestFilter`; implement access + refresh token flow",
            "achievement": "Build custom `OncePerRequestFilter`; implement access + refresh token flow",
            "day": 103
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 105
          },
          {
            "topic": "CORS & CSRF Defenses + OWASP Top 10 for Spring",
            "priority": "MUST KNOW",
            "tasks": "Harden an API against Injection, XSS, CSRF",
            "achievement": "Harden an API against Injection, XSS, CSRF",
            "day": 106
          },
          {
            "topic": "OAuth2 Fundamentals + Spring Security OAuth2 Client",
            "priority": "MUST KNOW",
            "tasks": "Implement \"Login with Google/GitHub\"",
            "achievement": "Implement \"Login with Google/GitHub\"",
            "day": 107
          },
          {
            "topic": "OAuth2 Resource Server + Keycloak Integration",
            "priority": "MUST KNOW",
            "tasks": "Configure API as Resource Server validating externally-issued JWTs",
            "achievement": "Configure API as Resource Server validating externally-issued JWTs",
            "day": 109
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 110
          },
          {
            "topic": "**Phase 3 Capstone: Blogging Platform**",
            "priority": "MUST KNOW",
            "tasks": "Flyway-migrated schema + JWT-secured REST API with method-level security",
            "achievement": "Flyway-migrated schema + JWT-secured REST API with method-level security",
            "day": 111
          },
          {
            "topic": "**Buffer weeks / interview prep**",
            "priority": "MUST KNOW",
            "tasks": "Review N+1, transaction propagation, isolation levels, JWT vulnerabilities",
            "achievement": "Review N+1, transaction propagation, isolation levels, JWT vulnerabilities",
            "day": 113
          }
        ]
      },
      {
        "id": "2-4",
        "title": "MICROSERVICES, KAFKA, RESILIENCE & SPRING AI",
        "days": "Days 131–200",
        "items": [
          {
            "topic": "Microservices vs Monoliths + DDD Bounded Contexts",
            "priority": "MUST KNOW",
            "tasks": "Justify when a project should (and shouldn't) go microservices",
            "achievement": "Justify when a project should (and shouldn't) go microservices",
            "day": 131
          },
          {
            "topic": "gRPC Services in Spring Boot",
            "priority": "MUST KNOW",
            "tasks": "Define a `.proto` schema, implement server + client stub",
            "achievement": "Define a `.proto` schema, implement server + client stub",
            "day": 132
          },
          {
            "topic": "Reactive Programming (Spring WebFlux, Mono/Flux)",
            "priority": "MUST KNOW",
            "tasks": "Build a non-blocking endpoint with R2DBC",
            "achievement": "Build a non-blocking endpoint with R2DBC",
            "day": 133
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 134
          },
          {
            "topic": "Service Discovery (Eureka)",
            "priority": "MUST KNOW",
            "tasks": "Register two services that find each other without hardcoded IPs",
            "achievement": "Register two services that find each other without hardcoded IPs",
            "day": 135
          },
          {
            "topic": "API Gateway (Spring Cloud Gateway)",
            "priority": "MUST KNOW",
            "tasks": "Route requests to 2 services by path; add a global pre-filter",
            "achievement": "Route requests to 2 services by path; add a global pre-filter",
            "day": 136
          },
          {
            "topic": "Centralized Security at Gateway",
            "priority": "MUST KNOW",
            "tasks": "Move JWT validation to Gateway; downstream trusts via internal headers",
            "achievement": "Move JWT validation to Gateway; downstream trusts via internal headers",
            "day": 137
          },
          {
            "topic": "Synchronous Communication (OpenFeign)",
            "priority": "MUST KNOW",
            "tasks": "Declarative service-to-service call via Eureka",
            "achievement": "Declarative service-to-service call via Eureka",
            "day": 138
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 139
          },
          {
            "topic": "Resilience4j: Circuit Breaker",
            "priority": "MUST KNOW",
            "tasks": "Wrap Feign client with fallback for downstream failure",
            "achievement": "Wrap Feign client with fallback for downstream failure",
            "day": 140
          },
          {
            "topic": "Resilience4j: Retries & Rate Limiting",
            "priority": "MUST KNOW",
            "tasks": "Add exponential backoff + gateway-level rate limiting",
            "achievement": "Add exponential backoff + gateway-level rate limiting",
            "day": 141
          },
          {
            "topic": "Distributed Tracing (Micrometer + Zipkin/Jaeger)",
            "priority": "MUST KNOW",
            "tasks": "Trace one request across Gateway → Order → Inventory",
            "achievement": "Trace one request across Gateway → Order → Inventory",
            "day": 142
          },
          {
            "topic": "Service Mesh Fundamentals (Istio/Linkerd)",
            "priority": "MUST KNOW",
            "tasks": "Inject sidecars on local K8s; observe mTLS and retries outside app code",
            "achievement": "Inject sidecars on local K8s; observe mTLS and retries outside app code",
            "day": 143
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 144
          },
          {
            "topic": "Centralized Configuration (Spring Cloud Config)",
            "priority": "MUST KNOW",
            "tasks": "Update a property dynamically without restart",
            "achievement": "Update a property dynamically without restart",
            "day": 145
          },
          {
            "topic": "Centralized Secrets (Spring Cloud Vault)",
            "priority": "MUST KNOW",
            "tasks": "Rotate DB credentials at runtime via HashiCorp Vault",
            "achievement": "Rotate DB credentials at runtime via HashiCorp Vault",
            "day": 146
          },
          {
            "topic": "Introduction to Kafka (Topics, Partitions, Consumer Groups)",
            "priority": "MUST KNOW",
            "tasks": "Spin up Kafka in Docker; explain append-only log architecture",
            "achievement": "Spin up Kafka in Docker; explain append-only log architecture",
            "day": 147
          },
          {
            "topic": "Kafka Schema Registry (Avro/Protobuf)",
            "priority": "MUST KNOW",
            "tasks": "Define a schema; enforce BACKWARD compatibility",
            "achievement": "Define a schema; enforce BACKWARD compatibility",
            "day": 148
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 149
          },
          {
            "topic": "Spring Kafka: Producers & Consumers",
            "priority": "MUST KNOW",
            "tasks": "Publish `OrderCreatedEvent`; consume it to update inventory",
            "achievement": "Publish `OrderCreatedEvent`; consume it to update inventory",
            "day": 150
          },
          {
            "topic": "Kafka: Idempotent Consumers & Exactly-Once Semantics",
            "priority": "MUST KNOW",
            "tasks": "Implement dedup table + transactional producer",
            "achievement": "Implement dedup table + transactional producer",
            "day": 151
          },
          {
            "topic": "Kafka: Consumer Groups & Scaling",
            "priority": "MUST KNOW",
            "tasks": "Scale to 3 instances; observe partition rebalancing",
            "achievement": "Scale to 3 instances; observe partition rebalancing",
            "day": 152
          },
          {
            "topic": "Kafka: Error Handling & DLQs",
            "priority": "MUST KNOW",
            "tasks": "Simulate a processing failure; route to Dead Letter Queue",
            "achievement": "Simulate a processing failure; route to Dead Letter Queue",
            "day": 153
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 154
          },
          {
            "topic": "Kafka Streams Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Build a windowed aggregation topology (orders-per-minute)",
            "achievement": "Build a windowed aggregation topology (orders-per-minute)",
            "day": 155
          },
          {
            "topic": "Transactional Outbox Pattern",
            "priority": "MUST KNOW",
            "tasks": "Solve the dual-write problem with an outbox table + publisher",
            "achievement": "Solve the dual-write problem with an outbox table + publisher",
            "day": 156
          },
          {
            "topic": "Distributed Sagas (Choreography + Orchestration + Compensation)",
            "priority": "MUST KNOW",
            "tasks": "Implement Order-Inventory saga with failure rollback path",
            "achievement": "Implement Order-Inventory saga with failure rollback path",
            "day": 158
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 160
          },
          {
            "topic": "Event Sourcing + CQRS",
            "priority": "MUST KNOW",
            "tasks": "Separate write model (relational) from read model (Elasticsearch via Kafka)",
            "achievement": "Separate write model (relational) from read model (Elasticsearch via Kafka)",
            "day": 161
          },
          {
            "topic": "WebSocket Communication (STOMP)",
            "priority": "MUST KNOW",
            "tasks": "Build a real-time push-notification endpoint",
            "achievement": "Build a real-time push-notification endpoint",
            "day": 163
          },
          {
            "topic": "Redis Distributed Locking (Redisson)",
            "priority": "MUST KNOW",
            "tasks": "Ensure a scheduled job runs on only one instance in a cluster",
            "achievement": "Ensure a scheduled job runs on only one instance in a cluster",
            "day": 164
          },
          {
            "topic": "API Versioning Strategies (recap) + Blue-Green/Canary Deployments",
            "priority": "MUST KNOW",
            "tasks": "Configure two parallel environments with gradual traffic shift",
            "achievement": "Configure two parallel environments with gradual traffic shift",
            "day": 165
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 166
          },
          {
            "topic": "Spring AI: Fundamentals & ChatClient",
            "priority": "MUST KNOW",
            "tasks": "Build a streaming LLM endpoint via `ChatClient`/WebFlux",
            "achievement": "Build a streaming LLM endpoint via `ChatClient`/WebFlux",
            "day": 167
          },
          {
            "topic": "Spring AI: Prompt Templates & Structured Output",
            "priority": "MUST KNOW",
            "tasks": "Force LLM output into a Java record via `BeanOutputConverter`",
            "achievement": "Force LLM output into a Java record via `BeanOutputConverter`",
            "day": 168
          },
          {
            "topic": "Spring AI: Function/Tool Calling",
            "priority": "MUST KNOW",
            "tasks": "Register a `@Tool` method the LLM can invoke (e.g. `getWeather`)",
            "achievement": "Register a `@Tool` method the LLM can invoke (e.g. `getWeather`)",
            "day": 169
          },
          {
            "topic": "Spring AI: VectorStore & RAG Basics",
            "priority": "MUST KNOW",
            "tasks": "Chunk a PDF, embed it, retrieve relevant chunks before calling the LLM",
            "achievement": "Chunk a PDF, embed it, retrieve relevant chunks before calling the LLM",
            "day": 170
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 171
          },
          {
            "topic": "Spring AI: MCP Client/Server Integration",
            "priority": "MUST KNOW",
            "tasks": "Expose a Spring Boot service as an MCP server; consume it as a client",
            "achievement": "Expose a Spring Boot service as an MCP server; consume it as a client",
            "day": 172
          },
          {
            "topic": "**Phase 4 Capstone: E-Commerce Microservice System**",
            "priority": "MUST KNOW",
            "tasks": "Gateway + Auth + Order + Inventory + Payment + AI Support service, wired with Kafka Sagas, secured, traced, and containerized",
            "achievement": "Gateway + Auth + Order + Inventory + Payment + AI Support service, wired with Kafka Sagas, secured, traced, and containerized",
            "day": 173
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 178
          },
          {
            "topic": "Interview Prep: Spring Core & Spring AI",
            "priority": "MUST KNOW",
            "tasks": "Review IoC, AOP, transaction propagation, ChatClient abstractions",
            "achievement": "Review IoC, AOP, transaction propagation, ChatClient abstractions",
            "day": 179
          },
          {
            "topic": "Interview Prep: Microservices & Kafka",
            "priority": "MUST KNOW",
            "tasks": "Review circuit breakers, gateways, outbox, exactly-once semantics",
            "achievement": "Review circuit breakers, gateways, outbox, exactly-once semantics",
            "day": 180
          },
          {
            "topic": "**Mock Interviews (3x)**",
            "priority": "MUST KNOW",
            "tasks": "Timed 45-min sessions on system design + Spring-specific questions",
            "achievement": "Timed 45-min sessions on system design + Spring-specific questions",
            "day": 181
          },
          {
            "topic": "**Buffer / weak-spot refinement**",
            "priority": "MUST KNOW",
            "tasks": "Revisit flagged weak topics from mocks",
            "achievement": "Revisit flagged weak topics from mocks",
            "day": 186
          },
          {
            "topic": "**Resume & GitHub Polish**",
            "priority": "MUST KNOW",
            "tasks": "Push capstone with a README covering architecture, Saga flow, AI integration, Docker Compose setup",
            "achievement": "Push capstone with a README covering architecture, Saga flow, AI integration, Docker Compose setup",
            "day": 200
          }
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
        "days": "Days 1–35",
        "items": [
          {
            "topic": "Python for Java Devs (dicts, comprehensions, decorators, typing)",
            "priority": "MUST KNOW",
            "tasks": "Port a small Java algorithm to idiomatic Python",
            "achievement": "Port a small Java algorithm to idiomatic Python",
            "day": 1
          },
          {
            "topic": "NumPy (arrays, broadcasting, vectorization)",
            "priority": "MUST KNOW",
            "tasks": "Vectorize a loop-based calculation; benchmark speed gain",
            "achievement": "Vectorize a loop-based calculation; benchmark speed gain",
            "day": 2
          },
          {
            "topic": "Pandas 1 (DataFrames, loc/iloc, missing data)",
            "priority": "MUST KNOW",
            "tasks": "Clean a messy Kaggle CSV: handle NaNs, wrong dtypes",
            "achievement": "Clean a messy Kaggle CSV: handle NaNs, wrong dtypes",
            "day": 3
          },
          {
            "topic": "Pandas 2 (groupby, merge, pivot, resampling)",
            "priority": "MUST KNOW",
            "tasks": "Perform a SQL-style aggregation entirely in Pandas",
            "achievement": "Perform a SQL-style aggregation entirely in Pandas",
            "day": 4
          },
          {
            "topic": "Data Visualization (Matplotlib/Seaborn)",
            "priority": "MUST KNOW",
            "tasks": "Build a correlation heatmap + outlier scatter plot for the cleaned dataset",
            "achievement": "Build a correlation heatmap + outlier scatter plot for the cleaned dataset",
            "day": 5
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 6
          },
          {
            "topic": "Linear Algebra: Vectors, Matrices, Dot Products",
            "priority": "MUST KNOW",
            "tasks": "Manually compute a matrix multiplication; verify with NumPy",
            "achievement": "Manually compute a matrix multiplication; verify with NumPy",
            "day": 7
          },
          {
            "topic": "Linear Algebra: Eigenvalues, SVD",
            "priority": "MUST KNOW",
            "tasks": "Explain PCA's math in your own words with a worked example",
            "achievement": "Explain PCA's math in your own words with a worked example",
            "day": 8
          },
          {
            "topic": "Cosine Similarity",
            "priority": "MUST KNOW",
            "tasks": "Implement cosine similarity in pure NumPy; compare 3 vector pairs",
            "achievement": "Implement cosine similarity in pure NumPy; compare 3 vector pairs",
            "day": 9
          },
          {
            "topic": "Calculus for Deep Learning (derivatives, chain rule)",
            "priority": "MUST KNOW",
            "tasks": "Manually differentiate a 2-layer function by hand",
            "achievement": "Manually differentiate a 2-layer function by hand",
            "day": 10
          },
          {
            "topic": "Probability & Statistics (distributions, Bayes)",
            "priority": "MUST KNOW",
            "tasks": "Determine if a sample dataset is statistically significant",
            "achievement": "Determine if a sample dataset is statistically significant",
            "day": 11
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 12
          },
          {
            "topic": "Scikit-Learn API (fit/predict/transform)",
            "priority": "MUST KNOW",
            "tasks": "Fit a model using sklearn's standard interface",
            "achievement": "Fit a model using sklearn's standard interface",
            "day": 13
          },
          {
            "topic": "Linear & Logistic Regression",
            "priority": "MUST KNOW",
            "tasks": "Train both on house-price and spam-detection datasets",
            "achievement": "Train both on house-price and spam-detection datasets",
            "day": 14
          },
          {
            "topic": "Decision Trees (Gini, Information Gain)",
            "priority": "MUST KNOW",
            "tasks": "Train + visualize a tree; explain one decision path",
            "achievement": "Train + visualize a tree; explain one decision path",
            "day": 15
          },
          {
            "topic": "Random Forests & Gradient Boosting (XGBoost)",
            "priority": "MUST KNOW",
            "tasks": "Train both; compare accuracy and explain bagging vs boosting",
            "achievement": "Train both; compare accuracy and explain bagging vs boosting",
            "day": 16
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 17
          },
          {
            "topic": "Unsupervised Learning: K-Means + PCA",
            "priority": "MUST KNOW",
            "tasks": "Cluster a dataset, find optimal k via elbow method, then compress with PCA",
            "achievement": "Cluster a dataset, find optimal k via elbow method, then compress with PCA",
            "day": 18
          },
          {
            "topic": "Model Evaluation: Classification (Precision/Recall/F1/ROC-AUC)",
            "priority": "MUST KNOW",
            "tasks": "Explain why 99% accuracy fails for imbalanced cancer-detection data",
            "achievement": "Explain why 99% accuracy fails for imbalanced cancer-detection data",
            "day": 19
          },
          {
            "topic": "Model Evaluation: Regression (MAE/MSE/R²)",
            "priority": "MUST KNOW",
            "tasks": "Quantify prediction error for your regression model",
            "achievement": "Quantify prediction error for your regression model",
            "day": 20
          },
          {
            "topic": "Hyperparameter Tuning + Cross-Validation",
            "priority": "MUST KNOW",
            "tasks": "Run GridSearchCV with K-Fold CV on your XGBoost model",
            "achievement": "Run GridSearchCV with K-Fold CV on your XGBoost model",
            "day": 21
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 22
          },
          {
            "topic": "Neural Network Basics (perceptrons, activations)",
            "priority": "MUST KNOW",
            "tasks": "Manually trace a forward pass through one artificial neuron",
            "achievement": "Manually trace a forward pass through one artificial neuron",
            "day": 23
          },
          {
            "topic": "Loss Functions, Optimizers, Backpropagation",
            "priority": "MUST KNOW",
            "tasks": "Explain gradient descent + chain rule as the \"engine\" of learning",
            "achievement": "Explain gradient descent + chain rule as the \"engine\" of learning",
            "day": 24
          },
          {
            "topic": "**Phase 1 Capstone: End-to-End Classical ML Project**",
            "priority": "MUST KNOW",
            "tasks": "Raw Kaggle dataset → cleaned → XGBoost trained → tuned → rigorously evaluated",
            "achievement": "Raw Kaggle dataset → cleaned → XGBoost trained → tuned → rigorously evaluated",
            "day": 25
          },
          {
            "topic": "**Buffer / catch-up weeks**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 27
          }
        ]
      },
      {
        "id": "3-2",
        "title": "DEEP LEARNING, NLP & TRANSFORMERS",
        "days": "Days 36–95",
        "items": [
          {
            "topic": "PyTorch Fundamentals + Autograd",
            "priority": "MUST KNOW",
            "tasks": "Build tensors, compute gradients automatically, verify by hand",
            "achievement": "Build tensors, compute gradients automatically, verify by hand",
            "day": 36
          },
          {
            "topic": "PyTorch DataLoaders",
            "priority": "MUST KNOW",
            "tasks": "Load and batch a custom dataset",
            "achievement": "Load and batch a custom dataset",
            "day": 38
          },
          {
            "topic": "The PyTorch Training Loop",
            "priority": "MUST KNOW",
            "tasks": "Train a small NN end-to-end (forward, loss, backward, step)",
            "achievement": "Train a small NN end-to-end (forward, loss, backward, step)",
            "day": 39
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 41
          },
          {
            "topic": "NLP: Tokenization, Bag of Words, TF-IDF",
            "priority": "MUST KNOW",
            "tasks": "Vectorize a text corpus with TF-IDF; compare to raw BoW",
            "achievement": "Vectorize a text corpus with TF-IDF; compare to raw BoW",
            "day": 42
          },
          {
            "topic": "NLP: Word Embeddings (Word2Vec)",
            "priority": "MUST KNOW",
            "tasks": "Train/load embeddings; find nearest neighbors for a word",
            "achievement": "Train/load embeddings; find nearest neighbors for a word",
            "day": 43
          },
          {
            "topic": "RNNs, LSTMs & GRUs",
            "priority": "MUST KNOW",
            "tasks": "Explain vanishing gradients; diagram an LSTM gate flow",
            "achievement": "Explain vanishing gradients; diagram an LSTM gate flow",
            "day": 44
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 45
          },
          {
            "topic": "The Attention Mechanism + Transformer Architecture Deep Dive",
            "priority": "MUST KNOW",
            "tasks": "Diagram self-attention + multi-head attention from memory",
            "achievement": "Diagram self-attention + multi-head attention from memory",
            "day": 46
          },
          {
            "topic": "KV-Cache & Decoding Optimization",
            "priority": "MUST KNOW",
            "tasks": "Explain why KV-cache speeds up autoregressive generation",
            "achievement": "Explain why KV-cache speeds up autoregressive generation",
            "day": 48
          },
          {
            "topic": "Encoder vs Decoder Models (BERT vs GPT)",
            "priority": "MUST KNOW",
            "tasks": "Pick the right architecture for 3 given NLP tasks",
            "achievement": "Pick the right architecture for 3 given NLP tasks",
            "day": 49
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 50
          },
          {
            "topic": "Hugging Face Ecosystem + Tokenizers",
            "priority": "MUST KNOW",
            "tasks": "Load a pretrained model + tokenizer; run inference",
            "achievement": "Load a pretrained model + tokenizer; run inference",
            "day": 51
          },
          {
            "topic": "Fine-Tuning with HF Trainer API",
            "priority": "MUST KNOW",
            "tasks": "Fine-tune a small model on a classification task",
            "achievement": "Fine-tune a small model on a classification task",
            "day": 53
          },
          {
            "topic": "Intro to LLMs (scale, emergent behavior)",
            "priority": "MUST KNOW",
            "tasks": "Explain what changes qualitatively at LLM scale",
            "achievement": "Explain what changes qualitatively at LLM scale",
            "day": 54
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 55
          },
          {
            "topic": "Prompt Engineering Techniques",
            "priority": "MUST KNOW",
            "tasks": "Write and test 3 prompting strategies on the same task",
            "achievement": "Write and test 3 prompting strategies on the same task",
            "day": 56
          },
          {
            "topic": "OpenAI API & System Prompts",
            "priority": "MUST KNOW",
            "tasks": "Build a simple API-driven chat script with a system prompt",
            "achievement": "Build a simple API-driven chat script with a system prompt",
            "day": 57
          },
          {
            "topic": "Structured Outputs (Instructor/Pydantic)",
            "priority": "MUST KNOW",
            "tasks": "Force LLM output into a validated Pydantic schema",
            "achievement": "Force LLM output into a validated Pydantic schema",
            "day": 58
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 59
          },
          {
            "topic": "Instruction Tuning vs RLHF",
            "priority": "MUST KNOW",
            "tasks": "Explain the difference and why RLHF aligns behavior",
            "achievement": "Explain the difference and why RLHF aligns behavior",
            "day": 60
          },
          {
            "topic": "PEFT & LoRA (Low-Rank Adaptation)",
            "priority": "MUST KNOW",
            "tasks": "Explain LoRA math; identify which weight matrices get adapted",
            "achievement": "Explain LoRA math; identify which weight matrices get adapted",
            "day": 61
          },
          {
            "topic": "LLM Distillation & Quantization Theory",
            "priority": "MUST KNOW",
            "tasks": "Explain int8/int4 quantization trade-offs",
            "achievement": "Explain int8/int4 quantization trade-offs",
            "day": 63
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 64
          },
          {
            "topic": "QLoRA Implementation (hands-on)",
            "priority": "MUST KNOW",
            "tasks": "Fine-tune a quantized model on a custom dataset with QLoRA",
            "achievement": "Fine-tune a quantized model on a custom dataset with QLoRA",
            "day": 65
          },
          {
            "topic": "Post-Fine-Tune Evaluation",
            "priority": "MUST KNOW",
            "tasks": "Evaluate the fine-tuned model against a held-out test set",
            "achievement": "Evaluate the fine-tuned model against a held-out test set",
            "day": 67
          },
          {
            "topic": "Context Windows & RoPE",
            "priority": "MUST KNOW",
            "tasks": "Explain rotary positional embeddings and context extension",
            "achievement": "Explain rotary positional embeddings and context extension",
            "day": 68
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 69
          },
          {
            "topic": "Vision Transformers (ViT) + CLIP/Multimodal Embeddings",
            "priority": "MUST KNOW",
            "tasks": "Explain how ViT patches images; run a CLIP similarity search",
            "achievement": "Explain how ViT patches images; run a CLIP similarity search",
            "day": 70
          },
          {
            "topic": "LLM Evaluation Basics + Modern Benchmarks",
            "priority": "MUST KNOW",
            "tasks": "Compare 2 models on a standard benchmark; explain limitations",
            "achievement": "Compare 2 models on a standard benchmark; explain limitations",
            "day": 71
          },
          {
            "topic": "**Phase 2 Capstone: Fine-Tune & Evaluate a Custom LLM**",
            "priority": "MUST KNOW",
            "tasks": "Full fine-tuning pipeline: data prep → QLoRA → eval → writeup",
            "achievement": "Full fine-tuning pipeline: data prep → QLoRA → eval → writeup",
            "day": 72
          },
          {
            "topic": "**Buffer / catch-up weeks**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 74
          }
        ]
      },
      {
        "id": "3-3",
        "title": "ENTERPRISE RAG & AI SECURITY",
        "days": "Days 96–155",
        "items": [
          {
            "topic": "RAG Architecture Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Diagram a full RAG pipeline end to end",
            "achievement": "Diagram a full RAG pipeline end to end",
            "day": 96
          },
          {
            "topic": "Document Ingestion & Parsing",
            "priority": "MUST KNOW",
            "tasks": "Parse a PDF + HTML doc into clean text",
            "achievement": "Parse a PDF + HTML doc into clean text",
            "day": 97
          },
          {
            "topic": "Chunking Strategies",
            "priority": "MUST KNOW",
            "tasks": "Compare fixed-size vs semantic chunking on the same doc",
            "achievement": "Compare fixed-size vs semantic chunking on the same doc",
            "day": 98
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 99
          },
          {
            "topic": "Embedding Models in Practice",
            "priority": "MUST KNOW",
            "tasks": "Embed a document set; inspect vector similarity",
            "achievement": "Embed a document set; inspect vector similarity",
            "day": 100
          },
          {
            "topic": "Vector Databases (Pinecone/Milvus/pgvector) + HNSW",
            "priority": "MUST KNOW",
            "tasks": "Stand up a vector store; explain HNSW's approximate search",
            "achievement": "Stand up a vector store; explain HNSW's approximate search",
            "day": 101
          },
          {
            "topic": "Building a Basic RAG Pipeline",
            "priority": "MUST KNOW",
            "tasks": "Full retrieve-then-generate pipeline answering questions from your docs",
            "achievement": "Full retrieve-then-generate pipeline answering questions from your docs",
            "day": 103
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 105
          },
          {
            "topic": "Advanced RAG: Query Expansion + HyDE",
            "priority": "MUST KNOW",
            "tasks": "Implement both; compare retrieval quality vs baseline",
            "achievement": "Implement both; compare retrieval quality vs baseline",
            "day": 106
          },
          {
            "topic": "Advanced RAG: Parent-Child Chunking + Hybrid Search",
            "priority": "MUST KNOW",
            "tasks": "Combine keyword + vector search; measure recall improvement",
            "achievement": "Combine keyword + vector search; measure recall improvement",
            "day": 107
          },
          {
            "topic": "Advanced RAG: Reranking Models",
            "priority": "MUST KNOW",
            "tasks": "Add a reranker; measure precision@k improvement",
            "achievement": "Add a reranker; measure precision@k improvement",
            "day": 108
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 109
          },
          {
            "topic": "RAG Evaluation (RAGAS)",
            "priority": "MUST KNOW",
            "tasks": "Score your RAG pipeline on faithfulness, relevance, recall",
            "achievement": "Score your RAG pipeline on faithfulness, relevance, recall",
            "day": 110
          },
          {
            "topic": "Self-Reflective RAG",
            "priority": "MUST KNOW",
            "tasks": "Implement a self-critique/re-retrieval loop",
            "achievement": "Implement a self-critique/re-retrieval loop",
            "day": 112
          },
          {
            "topic": "DSPy Basics",
            "priority": "MUST KNOW",
            "tasks": "Optimize a prompt pipeline declaratively with DSPy",
            "achievement": "Optimize a prompt pipeline declaratively with DSPy",
            "day": 113
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 114
          },
          {
            "topic": "Data Engineering: Airflow + RAG Ingestion DAG",
            "priority": "MUST KNOW",
            "tasks": "Build an automated ingestion pipeline as an Airflow DAG",
            "achievement": "Build an automated ingestion pipeline as an Airflow DAG",
            "day": 115
          },
          {
            "topic": "GraphRAG (theory, setup, Cypher queries)",
            "priority": "MUST KNOW",
            "tasks": "Build a knowledge-graph-backed RAG query over sample data",
            "achievement": "Build a knowledge-graph-backed RAG query over sample data",
            "day": 117
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 119
          },
          {
            "topic": "AI Security: OWASP LLM Top 10",
            "priority": "MUST KNOW",
            "tasks": "Map 3 real vulnerabilities to OWASP categories",
            "achievement": "Map 3 real vulnerabilities to OWASP categories",
            "day": 120
          },
          {
            "topic": "AI Security: Prompt Injection Defense",
            "priority": "MUST KNOW",
            "tasks": "Demonstrate an injection attack, then defend against it",
            "achievement": "Demonstrate an injection attack, then defend against it",
            "day": 121
          },
          {
            "topic": "AI Security: PII Detection (Presidio)",
            "priority": "MUST KNOW",
            "tasks": "Scrub PII from a sample document set",
            "achievement": "Scrub PII from a sample document set",
            "day": 122
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 123
          },
          {
            "topic": "AI Security: Guardrails (NeMo Guardrails, LlamaGuard)",
            "priority": "MUST KNOW",
            "tasks": "Configure a guardrail blocking a harmful category of output",
            "achievement": "Configure a guardrail blocking a harmful category of output",
            "day": 124
          },
          {
            "topic": "AI Security: Red Teaming",
            "priority": "MUST KNOW",
            "tasks": "Attempt 3 jailbreak techniques against your own pipeline",
            "achievement": "Attempt 3 jailbreak techniques against your own pipeline",
            "day": 125
          },
          {
            "topic": "Semantic Caching",
            "priority": "MUST KNOW",
            "tasks": "Implement cache-hit logic based on embedding similarity",
            "achievement": "Implement cache-hit logic based on embedding similarity",
            "day": 126
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 127
          },
          {
            "topic": "Async Python (asyncio)",
            "priority": "MUST KNOW",
            "tasks": "Convert a blocking pipeline to async",
            "achievement": "Convert a blocking pipeline to async",
            "day": 128
          },
          {
            "topic": "Serving Models with FastAPI",
            "priority": "MUST KNOW",
            "tasks": "Wrap your RAG pipeline in a FastAPI service",
            "achievement": "Wrap your RAG pipeline in a FastAPI service",
            "day": 129
          },
          {
            "topic": "High-Performance Serving (vLLM, Triton)",
            "priority": "MUST KNOW",
            "tasks": "Explain continuous batching; benchmark vLLM vs naive serving",
            "achievement": "Explain continuous batching; benchmark vLLM vs naive serving",
            "day": 130
          },
          {
            "topic": "Streaming LLM Responses",
            "priority": "MUST KNOW",
            "tasks": "Implement token-by-token streaming over SSE/WebSocket",
            "achievement": "Implement token-by-token streaming over SSE/WebSocket",
            "day": 131
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 132
          },
          {
            "topic": "**Phase 3 Capstone: Enterprise RAG System**",
            "priority": "MUST KNOW",
            "tasks": "Multi-tenant, secured, evaluated RAG pipeline with guardrails, deployed via FastAPI",
            "achievement": "Multi-tenant, secured, evaluated RAG pipeline with guardrails, deployed via FastAPI",
            "day": 133
          },
          {
            "topic": "**Buffer / catch-up weeks**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 136
          }
        ]
      },
      {
        "id": "3-4",
        "title": "AUTONOMOUS AGENTS & LANGGRAPH",
        "days": "Days 156–210",
        "items": [
          {
            "topic": "Introduction to Autonomous Agents",
            "priority": "MUST KNOW",
            "tasks": "Explain the agent loop (perceive-plan-act)",
            "achievement": "Explain the agent loop (perceive-plan-act)",
            "day": 156
          },
          {
            "topic": "Function Calling (Tool Use)",
            "priority": "MUST KNOW",
            "tasks": "Register 2 tools an LLM can call",
            "achievement": "Register 2 tools an LLM can call",
            "day": 157
          },
          {
            "topic": "Building Custom Tools",
            "priority": "MUST KNOW",
            "tasks": "Build a custom tool wrapping an internal API",
            "achievement": "Build a custom tool wrapping an internal API",
            "day": 158
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 159
          },
          {
            "topic": "Model Context Protocol (MCP)",
            "priority": "MUST KNOW",
            "tasks": "Expose a tool via MCP; connect a client to it",
            "achievement": "Expose a tool via MCP; connect a client to it",
            "day": 160
          },
          {
            "topic": "OpenAI Assistants API v2",
            "priority": "MUST KNOW",
            "tasks": "Build a stateful assistant with file search + tools",
            "achievement": "Build a stateful assistant with file search + tools",
            "day": 161
          },
          {
            "topic": "ReAct Prompting Paradigm",
            "priority": "MUST KNOW",
            "tasks": "Implement a ReAct loop (Thought → Action → Observation)",
            "achievement": "Implement a ReAct loop (Thought → Action → Observation)",
            "day": 162
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 163
          },
          {
            "topic": "LangChain Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Chain a prompt → LLM → parser pipeline",
            "achievement": "Chain a prompt → LLM → parser pipeline",
            "day": 164
          },
          {
            "topic": "LangGraph Concepts + State/StateGraph",
            "priority": "MUST KNOW",
            "tasks": "Build a basic stateful graph with 2 nodes",
            "achievement": "Build a basic stateful graph with 2 nodes",
            "day": 165
          },
          {
            "topic": "LangGraph: Nodes, Edges, Conditional Edges",
            "priority": "MUST KNOW",
            "tasks": "Add branching logic based on state",
            "achievement": "Add branching logic based on state",
            "day": 167
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 168
          },
          {
            "topic": "LangGraph: Advanced State (Reducers)",
            "priority": "MUST KNOW",
            "tasks": "Implement a custom reducer for accumulating state",
            "achievement": "Implement a custom reducer for accumulating state",
            "day": 169
          },
          {
            "topic": "LangGraph: Persistence (Checkpointers)",
            "priority": "MUST KNOW",
            "tasks": "Add checkpointing; resume an interrupted graph run",
            "achievement": "Add checkpointing; resume an interrupted graph run",
            "day": 170
          },
          {
            "topic": "LangGraph: Human-in-the-Loop",
            "priority": "MUST KNOW",
            "tasks": "Add an approval step requiring human input mid-graph",
            "achievement": "Add an approval step requiring human input mid-graph",
            "day": 171
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 172
          },
          {
            "topic": "LangGraph: Time Travel",
            "priority": "MUST KNOW",
            "tasks": "Roll back graph state to a prior checkpoint",
            "achievement": "Roll back graph state to a prior checkpoint",
            "day": 173
          },
          {
            "topic": "LangGraph: Multi-Agent Supervisor + Collaboration",
            "priority": "MUST KNOW",
            "tasks": "Build a supervisor routing tasks to 2 specialist agents",
            "achievement": "Build a supervisor routing tasks to 2 specialist agents",
            "day": 174
          },
          {
            "topic": "LangGraph: Streaming Outputs",
            "priority": "MUST KNOW",
            "tasks": "Stream intermediate agent steps to a client",
            "achievement": "Stream intermediate agent steps to a client",
            "day": 176
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 177
          },
          {
            "topic": "Semantic Routing",
            "priority": "MUST KNOW",
            "tasks": "Route a query to the correct agent/tool by embedding similarity",
            "achievement": "Route a query to the correct agent/tool by embedding similarity",
            "day": 178
          },
          {
            "topic": "SQL Agents",
            "priority": "MUST KNOW",
            "tasks": "Build an agent that safely queries a database",
            "achievement": "Build an agent that safely queries a database",
            "day": 179
          },
          {
            "topic": "Code Interpreter Agents",
            "priority": "MUST KNOW",
            "tasks": "Build an agent that writes + executes code sandboxed",
            "achievement": "Build an agent that writes + executes code sandboxed",
            "day": 180
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 181
          },
          {
            "topic": "Web Research Agents (Tavily)",
            "priority": "MUST KNOW",
            "tasks": "Build an agent that searches the web and synthesizes an answer",
            "achievement": "Build an agent that searches the web and synthesizes an answer",
            "day": 182
          },
          {
            "topic": "Agent Observability (LangSmith)",
            "priority": "MUST KNOW",
            "tasks": "Trace a multi-step agent run; diagnose one failure",
            "achievement": "Trace a multi-step agent run; diagnose one failure",
            "day": 183
          },
          {
            "topic": "Agent Evaluation + Latency Optimization",
            "priority": "MUST KNOW",
            "tasks": "Score agent output quality; reduce end-to-end latency",
            "achievement": "Score agent output quality; reduce end-to-end latency",
            "day": 184
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 185
          },
          {
            "topic": "**Phase 4 Capstone: Autonomous Coding/Support Agent**",
            "priority": "MUST KNOW",
            "tasks": "Full LangGraph multi-agent system, deployed via FastAPI, observable via LangSmith",
            "achievement": "Full LangGraph multi-agent system, deployed via FastAPI, observable via LangSmith",
            "day": 186
          },
          {
            "topic": "**Buffer / catch-up weeks**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 191
          }
        ]
      },
      {
        "id": "3-5",
        "title": "ADVANCED TOPICS, INTERVIEW PREP & GRADUATION",
        "days": "Days 211–230",
        "items": [
          {
            "topic": "Emerging Frameworks: LlamaIndex vs LangChain, AutoGen, CrewAI",
            "priority": "MUST KNOW",
            "tasks": "Build the same small agent in 2 frameworks; compare trade-offs",
            "achievement": "Build the same small agent in 2 frameworks; compare trade-offs",
            "day": 211
          },
          {
            "topic": "Advanced: Multimodal Agents + Voice Integration",
            "priority": "MUST KNOW",
            "tasks": "Add image or voice input to an existing agent",
            "achievement": "Add image or voice input to an existing agent",
            "day": 212
          },
          {
            "topic": "Advanced: On-Device LLMs + Distributed Workloads (Ray)",
            "priority": "MUST KNOW",
            "tasks": "Explain trade-offs of on-device vs API-served models",
            "achievement": "Explain trade-offs of on-device vs API-served models",
            "day": 213
          },
          {
            "topic": "Cost Optimization & Token Management",
            "priority": "MUST KNOW",
            "tasks": "Calculate and reduce token cost for a sample pipeline",
            "achievement": "Calculate and reduce token cost for a sample pipeline",
            "day": 214
          },
          {
            "topic": "Advanced Security: Jailbreaks & Defenses (deeper pass)",
            "priority": "MUST KNOW",
            "tasks": "Attempt an advanced jailbreak; patch the defense",
            "achievement": "Attempt an advanced jailbreak; patch the defense",
            "day": 215
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 216
          },
          {
            "topic": "Portfolio Polish",
            "priority": "MUST KNOW",
            "tasks": "Clean up 2 capstone repos with full READMEs + architecture diagrams",
            "achievement": "Clean up 2 capstone repos with full READMEs + architecture diagrams",
            "day": 217
          },
          {
            "topic": "Mock Interview: ML Fundamentals & Math",
            "priority": "MUST KNOW",
            "tasks": "Timed interview on calculus, backprop, classical ML",
            "achievement": "Timed interview on calculus, backprop, classical ML",
            "day": 219
          },
          {
            "topic": "Mock Interview: Transformer Architecture",
            "priority": "MUST KNOW",
            "tasks": "Timed interview on attention, LoRA math, KV-caching",
            "achievement": "Timed interview on attention, LoRA math, KV-caching",
            "day": 220
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 221
          },
          {
            "topic": "Mock Interview: RAG System Design",
            "priority": "MUST KNOW",
            "tasks": "Design a multi-tenant RAG system for a legal firm live",
            "achievement": "Design a multi-tenant RAG system for a legal firm live",
            "day": 222
          },
          {
            "topic": "Mock Interview: Agent System Design",
            "priority": "MUST KNOW",
            "tasks": "Design an autonomous coding assistant at scale live",
            "achievement": "Design an autonomous coding assistant at scale live",
            "day": 223
          },
          {
            "topic": "Weak-Spot Review",
            "priority": "MUST KNOW",
            "tasks": "Revisit flagged gaps from all 4 mock interviews",
            "achievement": "Revisit flagged gaps from all 4 mock interviews",
            "day": 224
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 226
          },
          {
            "topic": "**Graduation: Final Portfolio Review & Reflection**",
            "priority": "MUST KNOW",
            "tasks": "Review full journey: Python → Deep Learning → RAG → Agents; finalize resume/GitHub",
            "achievement": "Review full journey: Python → Deep Learning → RAG → Agents; finalize resume/GitHub",
            "day": 227
          }
        ]
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
            "priority": "MUST KNOW",
            "tasks": "Explain the kernel's role in hardware resource management",
            "achievement": "Explain the kernel's role in hardware resource management",
            "day": 1
          },
          {
            "topic": "Linux Filesystem Hierarchy (`/etc`, `/var`, `/dev`, etc.)",
            "priority": "MUST KNOW",
            "tasks": "Navigate to logs, configs, and binaries without searching blindly",
            "achievement": "Navigate to logs, configs, and binaries without searching blindly",
            "day": 2
          },
          {
            "topic": "Essential CLI Navigation (`cd`, `ls -la`, `find` paths)",
            "priority": "MUST KNOW",
            "tasks": "Manipulate files/dirs via CLI only, no GUI, at speed",
            "achievement": "Manipulate files/dirs via CLI only, no GUI, at speed",
            "day": 3
          },
          {
            "topic": "File Reading & Searching (`cat`, `less`, `tail -f`, `grep -iE`)",
            "priority": "MUST KNOW",
            "tasks": "Monitor a live log and extract specific errors via grep",
            "achievement": "Monitor a live log and extract specific errors via grep",
            "day": 4
          },
          {
            "topic": "Finding Files (`find -name`, `-size`, `-mtime`)",
            "priority": "MUST KNOW",
            "tasks": "Locate files by complex metadata rules (size + date + name)",
            "achievement": "Locate files by complex metadata rules (size + date + name)",
            "day": 5
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 6
          },
          {
            "topic": "Pipes & Redirection (stdin/stdout/stderr, `\\",
            "priority": "`, `>`)",
            "tasks": "Chain 3+ utilities into one data transformation pipeline",
            "achievement": "Chain 3+ utilities into one data transformation pipeline",
            "day": 7
          },
          {
            "topic": "User & Group Management + Permissions (chmod/chown)",
            "priority": "MUST KNOW",
            "tasks": "Provision a new dev user; secure an SSH key with chmod 400",
            "achievement": "Provision a new dev user; secure an SSH key with chmod 400",
            "day": 8
          },
          {
            "topic": "Sudo & Privilege Escalation (`visudo`)",
            "priority": "MUST KNOW",
            "tasks": "Grant a user service-restart rights without full root",
            "achievement": "Grant a user service-restart rights without full root",
            "day": 9
          },
          {
            "topic": "Process Management (`ps aux`, `top`/`htop`, `kill`)",
            "priority": "MUST KNOW",
            "tasks": "Identify and safely terminate a runaway process",
            "achievement": "Identify and safely terminate a runaway process",
            "day": 10
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 11
          },
          {
            "topic": "OS Internals: Concurrency (mutexes, semaphores, race conditions)",
            "priority": "MUST KNOW",
            "tasks": "Implement a thread-safe producer-consumer queue",
            "achievement": "Implement a thread-safe producer-consumer queue",
            "day": 12
          },
          {
            "topic": "OS Internals: CPU Scheduling & Deadlocks",
            "priority": "MUST KNOW",
            "tasks": "Explain 2 scheduling algorithms; diagram a deadlock scenario",
            "achievement": "Explain 2 scheduling algorithms; diagram a deadlock scenario",
            "day": 14
          },
          {
            "topic": "OS Internals: Paging & Virtual Memory",
            "priority": "MUST KNOW",
            "tasks": "Explain how virtual addresses map to physical memory",
            "achievement": "Explain how virtual addresses map to physical memory",
            "day": 15
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 16
          },
          {
            "topic": "Diagnostic Tools (`strace`, `lsof`, `perf`)",
            "priority": "MUST KNOW",
            "tasks": "Trace syscalls of a running process; find its open file handles",
            "achievement": "Trace syscalls of a running process; find its open file handles",
            "day": 17
          },
          {
            "topic": "Background Jobs & Screen/Tmux",
            "priority": "MUST KNOW",
            "tasks": "Run a long job detached, reattach to it later",
            "achievement": "Run a long job detached, reattach to it later",
            "day": 18
          },
          {
            "topic": "Daemons & systemd",
            "priority": "MUST KNOW",
            "tasks": "Write a custom systemd service unit",
            "achievement": "Write a custom systemd service unit",
            "day": 19
          },
          {
            "topic": "Package Management (APT/YUM)",
            "priority": "MUST KNOW",
            "tasks": "Install, update, and remove a package cleanly",
            "achievement": "Install, update, and remove a package cleanly",
            "day": 20
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 21
          },
          {
            "topic": "Archive & Compression (`tar`, `gzip`)",
            "priority": "MUST KNOW",
            "tasks": "Compress and extract a directory tree",
            "achievement": "Compress and extract a directory tree",
            "day": 22
          },
          {
            "topic": "Disk Usage & Partitions (`df`, `du`, `fdisk`)",
            "priority": "MUST KNOW",
            "tasks": "Diagnose which directory is consuming disk space",
            "achievement": "Diagnose which directory is consuming disk space",
            "day": 23
          },
          {
            "topic": "Symlinks & Hard Links + Environment Variables",
            "priority": "MUST KNOW",
            "tasks": "Create both link types; explain `$PATH` resolution",
            "achievement": "Create both link types; explain `$PATH` resolution",
            "day": 24
          },
          {
            "topic": "Networking Basics in CLI + Port Checking/Firewalls (UFW)",
            "priority": "MUST KNOW",
            "tasks": "Check open ports; configure a firewall rule",
            "achievement": "Check open ports; configure a firewall rule",
            "day": 25
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 26
          },
          {
            "topic": "SSH Configuration & Keys",
            "priority": "MUST KNOW",
            "tasks": "Set up passwordless SSH key auth to a remote host",
            "achievement": "Set up passwordless SSH key auth to a remote host",
            "day": 27
          },
          {
            "topic": "Memory & Swap Management + Cron Jobs & Log Rotation",
            "priority": "MUST KNOW",
            "tasks": "Configure a cron job; set up logrotate for a growing log file",
            "achievement": "Configure a cron job; set up logrotate for a growing log file",
            "day": 28
          },
          {
            "topic": "Vim/Nano Essentials",
            "priority": "MUST KNOW",
            "tasks": "Edit a config file entirely via keyboard, no mouse",
            "achievement": "Edit a config file entirely via keyboard, no mouse",
            "day": 29
          },
          {
            "topic": "**Phase 1 Capstone: Linux Survival Test**",
            "priority": "MUST KNOW",
            "tasks": "Provision a fresh server: users, permissions, firewall, SSH, a systemd service, and log rotation — all from scratch",
            "achievement": "Provision a fresh server: users, permissions, firewall, SSH, a systemd service, and log rotation — all from scratch",
            "day": 30
          }
        ]
      },
      {
        "id": "4-2",
        "title": "BASH, NGINX & GIT ENGINEERING",
        "days": "Days 31–60",
        "items": [
          {
            "topic": "Bash Scripting Basics",
            "priority": "MUST KNOW",
            "tasks": "Write a script with variables and arguments",
            "achievement": "Write a script with variables and arguments",
            "day": 31
          },
          {
            "topic": "Bash Conditionals + Loops (If/Else, For/While)",
            "priority": "MUST KNOW",
            "tasks": "Write a script that loops over files and branches on conditions",
            "achievement": "Write a script that loops over files and branches on conditions",
            "day": 32
          },
          {
            "topic": "Advanced Text Processing: AWK",
            "priority": "MUST KNOW",
            "tasks": "Extract and transform columns from a log file with AWK",
            "achievement": "Extract and transform columns from a log file with AWK",
            "day": 33
          },
          {
            "topic": "Advanced Text Processing: SED",
            "priority": "MUST KNOW",
            "tasks": "Perform a find-replace across multiple files with SED",
            "achievement": "Perform a find-replace across multiple files with SED",
            "day": 34
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 35
          },
          {
            "topic": "DNS & Domains (real-world resolution)",
            "priority": "MUST KNOW",
            "tasks": "Trace a domain's DNS resolution chain with `dig`",
            "achievement": "Trace a domain's DNS resolution chain with `dig`",
            "day": 36
          },
          {
            "topic": "Nginx Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Serve a static site with Nginx",
            "achievement": "Serve a static site with Nginx",
            "day": 37
          },
          {
            "topic": "Nginx Reverse Proxy",
            "priority": "MUST KNOW",
            "tasks": "Proxy requests to a backend app",
            "achievement": "Proxy requests to a backend app",
            "day": 38
          },
          {
            "topic": "Nginx Load Balancing",
            "priority": "MUST KNOW",
            "tasks": "Load balance across 2+ backend instances",
            "achievement": "Load balance across 2+ backend instances",
            "day": 39
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 40
          },
          {
            "topic": "SSL/TLS with Nginx (Certbot)",
            "priority": "MUST KNOW",
            "tasks": "Enable HTTPS with a free Let's Encrypt cert",
            "achievement": "Enable HTTPS with a free Let's Encrypt cert",
            "day": 41
          },
          {
            "topic": "Nginx Caching, Gzip & Rate Limiting",
            "priority": "MUST KNOW",
            "tasks": "Enable response caching + compression; rate-limit an endpoint",
            "achievement": "Enable response caching + compression; rate-limit an endpoint",
            "day": 42
          },
          {
            "topic": "Git Internals: Trees & Blobs",
            "priority": "MUST KNOW",
            "tasks": "Explain what a commit object actually contains",
            "achievement": "Explain what a commit object actually contains",
            "day": 43
          },
          {
            "topic": "Advanced Git Branching Strategy",
            "priority": "MUST KNOW",
            "tasks": "Set up a Git Flow or trunk-based branching model",
            "achievement": "Set up a Git Flow or trunk-based branching model",
            "day": 44
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 45
          },
          {
            "topic": "Git Merging vs Rebasing + Resolving Conflicts",
            "priority": "MUST KNOW",
            "tasks": "Resolve a real merge conflict; explain merge vs rebase trade-offs",
            "achievement": "Resolve a real merge conflict; explain merge vs rebase trade-offs",
            "day": 46
          },
          {
            "topic": "Git Reset & Revert + Interactive Rebase",
            "priority": "MUST KNOW",
            "tasks": "Squash 3 commits interactively; safely undo a bad commit",
            "achievement": "Squash 3 commits interactively; safely undo a bad commit",
            "day": 47
          },
          {
            "topic": "Git Stash & Cherry-Pick + Git Hooks",
            "priority": "MUST KNOW",
            "tasks": "Cherry-pick a commit across branches; write a pre-commit hook",
            "achievement": "Cherry-pick a commit across branches; write a pre-commit hook",
            "day": 48
          },
          {
            "topic": "SSH Git Authentication",
            "priority": "MUST KNOW",
            "tasks": "Set up SSH-based Git auth for a remote repo",
            "achievement": "Set up SSH-based Git auth for a remote repo",
            "day": 49
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 50
          },
          {
            "topic": "Monorepos vs Polyrepos + Semantic Versioning",
            "priority": "MUST KNOW",
            "tasks": "Justify a repo strategy choice; version a release with SemVer",
            "achievement": "Justify a repo strategy choice; version a release with SemVer",
            "day": 51
          },
          {
            "topic": "**Phase 2 Capstone: Deploy a Load-Balanced App**",
            "priority": "MUST KNOW",
            "tasks": "Nginx reverse-proxying 2 app instances behind HTTPS, with a Git-based deployment flow",
            "achievement": "Nginx reverse-proxying 2 app instances behind HTTPS, with a Git-based deployment flow",
            "day": 52
          },
          {
            "topic": "**Buffer / catch-up weeks**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 54
          }
        ]
      },
      {
        "id": "4-3",
        "title": "RELATIONAL DBs & SQL MASTERY",
        "days": "Days 61–100",
        "items": [
          {
            "topic": "PostgreSQL Architecture + Advanced Data Types",
            "priority": "MUST KNOW",
            "tasks": "Explain Postgres process architecture; use JSONB, arrays, enums",
            "achievement": "Explain Postgres process architecture; use JSONB, arrays, enums",
            "day": 61
          },
          {
            "topic": "JSONB in PostgreSQL",
            "priority": "MUST KNOW",
            "tasks": "Query and index a JSONB column",
            "achievement": "Query and index a JSONB column",
            "day": 62
          },
          {
            "topic": "Complex JOIN Operations",
            "priority": "MUST KNOW",
            "tasks": "Write a 4-table join with correct join types",
            "achievement": "Write a 4-table join with correct join types",
            "day": 63
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 64
          },
          {
            "topic": "Subqueries and CTEs (WITH clause)",
            "priority": "MUST KNOW",
            "tasks": "Refactor a nested subquery into a readable CTE",
            "achievement": "Refactor a nested subquery into a readable CTE",
            "day": 65
          },
          {
            "topic": "Window Functions: OVER & PARTITION BY",
            "priority": "MUST KNOW",
            "tasks": "Compute a running total per group",
            "achievement": "Compute a running total per group",
            "day": 66
          },
          {
            "topic": "Window Functions: LEAD & LAG",
            "priority": "MUST KNOW",
            "tasks": "Compute period-over-period change using LEAD/LAG",
            "achievement": "Compute period-over-period change using LEAD/LAG",
            "day": 67
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 68
          },
          {
            "topic": "Database Normalization + Denormalization Strategies",
            "priority": "MUST KNOW",
            "tasks": "Normalize a messy schema to 3NF, then justify a denormalization tradeoff",
            "achievement": "Normalize a messy schema to 3NF, then justify a denormalization tradeoff",
            "day": 69
          },
          {
            "topic": "Indexing: B-Trees Under the Hood + EXPLAIN ANALYZE",
            "priority": "MUST KNOW",
            "tasks": "Explain a query plan; add an index that fixes a slow query",
            "achievement": "Explain a query plan; add an index that fixes a slow query",
            "day": 70
          },
          {
            "topic": "Advanced Indexing Strategies (composite, partial, covering)",
            "priority": "MUST KNOW",
            "tasks": "Build a covering index for a specific slow query",
            "achievement": "Build a covering index for a specific slow query",
            "day": 72
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 73
          },
          {
            "topic": "Transactions and ACID in Postgres",
            "priority": "MUST KNOW",
            "tasks": "Demonstrate a rollback on constraint violation",
            "achievement": "Demonstrate a rollback on constraint violation",
            "day": 74
          },
          {
            "topic": "Isolation Levels & MVCC",
            "priority": "MUST KNOW",
            "tasks": "Reproduce a dirty read vs repeatable read scenario",
            "achievement": "Reproduce a dirty read vs repeatable read scenario",
            "day": 75
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 77
          },
          {
            "topic": "PostgreSQL Internals: WAL, MVCC & Vacuum",
            "priority": "MUST KNOW",
            "tasks": "Explain how WAL enables crash recovery; run manual VACUUM",
            "achievement": "Explain how WAL enables crash recovery; run manual VACUUM",
            "day": 78
          },
          {
            "topic": "Locks in PostgreSQL",
            "priority": "MUST KNOW",
            "tasks": "Reproduce and resolve a lock contention scenario",
            "achievement": "Reproduce and resolve a lock contention scenario",
            "day": 80
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 81
          },
          {
            "topic": "Views and Materialized Views",
            "priority": "MUST KNOW",
            "tasks": "Create a materialized view; explain refresh trade-offs",
            "achievement": "Create a materialized view; explain refresh trade-offs",
            "day": 82
          },
          {
            "topic": "Stored Procedures & Functions + Triggers",
            "priority": "MUST KNOW",
            "tasks": "Write a trigger that auto-updates an audit column",
            "achievement": "Write a trigger that auto-updates an audit column",
            "day": 83
          },
          {
            "topic": "VACUUM and Maintenance + Connection Pooling (PgBouncer)",
            "priority": "MUST KNOW",
            "tasks": "Configure PgBouncer in front of Postgres",
            "achievement": "Configure PgBouncer in front of Postgres",
            "day": 84
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 85
          },
          {
            "topic": "Database Replication (Primary/Replica)",
            "priority": "MUST KNOW",
            "tasks": "Set up a working primary-replica Postgres cluster",
            "achievement": "Set up a working primary-replica Postgres cluster",
            "day": 86
          },
          {
            "topic": "Sharding / Partitioning",
            "priority": "MUST KNOW",
            "tasks": "Partition a large table by range or hash",
            "achievement": "Partition a large table by range or hash",
            "day": 87
          },
          {
            "topic": "Backup and Restore (`pg_dump`) + Security and Roles",
            "priority": "MUST KNOW",
            "tasks": "Take a backup, restore it, and configure role-based access",
            "achievement": "Take a backup, restore it, and configure role-based access",
            "day": 88
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 89
          },
          {
            "topic": "Advanced Topic: pgvector",
            "priority": "MUST KNOW",
            "tasks": "Store and query embeddings directly in Postgres",
            "achievement": "Store and query embeddings directly in Postgres",
            "day": 90
          },
          {
            "topic": "**Phase 3 Capstone: Production-Grade Postgres Setup**",
            "priority": "MUST KNOW",
            "tasks": "Replicated, pooled, backed-up, indexed schema with roles and a pgvector extension",
            "achievement": "Replicated, pooled, backed-up, indexed schema with roles and a pgvector extension",
            "day": 91
          },
          {
            "topic": "**Buffer / catch-up weeks**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 94
          }
        ]
      },
      {
        "id": "4-4",
        "title": "NoSQL, ELASTICSEARCH & CACHING",
        "days": "Days 101–130",
        "items": [
          {
            "topic": "Redis Data Structures (strings, hashes, lists, sets, sorted sets)",
            "priority": "MUST KNOW",
            "tasks": "Model a leaderboard using Redis sorted sets",
            "achievement": "Model a leaderboard using Redis sorted sets",
            "day": 101
          },
          {
            "topic": "Redis Internals: Persistence & Eviction (RDB/AOF)",
            "priority": "MUST KNOW",
            "tasks": "Configure persistence; explain an eviction policy choice",
            "achievement": "Configure persistence; explain an eviction policy choice",
            "day": 102
          },
          {
            "topic": "Redis Caching Strategies + Advanced Use Cases",
            "priority": "MUST KNOW",
            "tasks": "Implement cache-aside caching for a slow query",
            "achievement": "Implement cache-aside caching for a slow query",
            "day": 103
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 104
          },
          {
            "topic": "Redis Cluster (hands-on)",
            "priority": "MUST KNOW",
            "tasks": "Stand up a 3-node Redis cluster",
            "achievement": "Stand up a 3-node Redis cluster",
            "day": 105
          },
          {
            "topic": "Dedicated Vector Databases (Pinecone & Weaviate)",
            "priority": "MUST KNOW",
            "tasks": "Compare pgvector vs a dedicated vector DB for a given use case",
            "achievement": "Compare pgvector vs a dedicated vector DB for a given use case",
            "day": 106
          },
          {
            "topic": "MongoDB: Document Modeling",
            "priority": "MUST KNOW",
            "tasks": "Model a blog with embedded vs referenced comments",
            "achievement": "Model a blog with embedded vs referenced comments",
            "day": 107
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 108
          },
          {
            "topic": "MongoDB: CRUD & Aggregation",
            "priority": "MUST KNOW",
            "tasks": "Write an aggregation pipeline computing a summary metric",
            "achievement": "Write an aggregation pipeline computing a summary metric",
            "day": 109
          },
          {
            "topic": "MongoDB: Indexes & Sharding",
            "priority": "MUST KNOW",
            "tasks": "Add an index; explain a shard key choice",
            "achievement": "Add an index; explain a shard key choice",
            "day": 110
          },
          {
            "topic": "Elasticsearch: The Inverted Index",
            "priority": "MUST KNOW",
            "tasks": "Explain how an inverted index enables full-text search",
            "achievement": "Explain how an inverted index enables full-text search",
            "day": 111
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 112
          },
          {
            "topic": "Elasticsearch: Query DSL + Analyzers",
            "priority": "MUST KNOW",
            "tasks": "Write a bool query with filters; configure a custom analyzer",
            "achievement": "Write a bool query with filters; configure a custom analyzer",
            "day": 113
          },
          {
            "topic": "Cassandra Architecture + Keys & Partitioning",
            "priority": "MUST KNOW",
            "tasks": "Explain masterless replication; design a partition key",
            "achievement": "Explain masterless replication; design a partition key",
            "day": 114
          },
          {
            "topic": "Cassandra Query-Driven Modeling + vs Postgres/Mongo",
            "priority": "MUST KNOW",
            "tasks": "Design a Cassandra table for a specific access pattern",
            "achievement": "Design a Cassandra table for a specific access pattern",
            "day": 116
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 117
          },
          {
            "topic": "Message Brokers: RabbitMQ",
            "priority": "MUST KNOW",
            "tasks": "Publish/consume a message via RabbitMQ",
            "achievement": "Publish/consume a message via RabbitMQ",
            "day": 118
          },
          {
            "topic": "Event Streaming: Kafka vs RabbitMQ",
            "priority": "MUST KNOW",
            "tasks": "Justify choosing one over the other for a given scenario",
            "achievement": "Justify choosing one over the other for a given scenario",
            "day": 119
          },
          {
            "topic": "Neo4j & Graph DBs Concepts + Hands-On",
            "priority": "MUST KNOW",
            "tasks": "Model and query a social graph with Cypher",
            "achievement": "Model and query a social graph with Cypher",
            "day": 120
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 121
          },
          {
            "topic": "**Phase 4 Capstone: Polyglot Persistence System**",
            "priority": "MUST KNOW",
            "tasks": "One system using Redis (cache), MongoDB (docs), Elasticsearch (search), justified by access pattern",
            "achievement": "One system using Redis (cache), MongoDB (docs), Elasticsearch (search), justified by access pattern",
            "day": 122
          },
          {
            "topic": "**Buffer / catch-up weeks**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 125
          }
        ]
      },
      {
        "id": "4-5",
        "title": "DB ADMINISTRATION & REAL-WORLD ARCHITECTURE",
        "days": "Days 131–150",
        "items": [
          {
            "topic": "Database High Availability",
            "priority": "MUST KNOW",
            "tasks": "Design a failover strategy for a critical DB",
            "achievement": "Design a failover strategy for a critical DB",
            "day": 131
          },
          {
            "topic": "Data Migration Strategies",
            "priority": "MUST KNOW",
            "tasks": "Plan a zero-downtime schema migration",
            "achievement": "Plan a zero-downtime schema migration",
            "day": 132
          },
          {
            "topic": "Change Data Capture (Debezium)",
            "priority": "MUST KNOW",
            "tasks": "Stream Postgres updates to Kafka automatically",
            "achievement": "Stream Postgres updates to Kafka automatically",
            "day": 133
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 134
          },
          {
            "topic": "Database Security & Encryption (at rest + in transit)",
            "priority": "MUST KNOW",
            "tasks": "Configure SSL for DB connections; verify encryption at rest",
            "achievement": "Configure SSL for DB connections; verify encryption at rest",
            "day": 135
          },
          {
            "topic": "Cloud Databases (RDS/Aurora)",
            "priority": "MUST KNOW",
            "tasks": "Compare RDS vs Aurora's distributed storage; justify a choice",
            "achievement": "Compare RDS vs Aurora's distributed storage; justify a choice",
            "day": 136
          },
          {
            "topic": "NoSQL in the Cloud (DynamoDB)",
            "priority": "MUST KNOW",
            "tasks": "Design a partition/sort key + GSI for a serverless use case",
            "achievement": "Design a partition/sort key + GSI for a serverless use case",
            "day": 137
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 138
          },
          {
            "topic": "Database Troubleshooting (live incident simulation)",
            "priority": "MUST KNOW",
            "tasks": "Diagnose and kill a long-running query via `pg_stat_activity`",
            "achievement": "Diagnose and kill a long-running query via `pg_stat_activity`",
            "day": 139
          },
          {
            "topic": "Performance Benchmarking (`pgbench`)",
            "priority": "MUST KNOW",
            "tasks": "Tune `shared_buffers`/`work_mem`; measure TPS improvement",
            "achievement": "Tune `shared_buffers`/`work_mem`; measure TPS improvement",
            "day": 140
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 141
          },
          {
            "topic": "**Final Capstone: \"Netflix Clone\" Data Architecture**",
            "priority": "MUST KNOW",
            "tasks": "Full schema: relational (users/billing) + NoSQL (watch history) + Elasticsearch (search)",
            "achievement": "Full schema: relational (users/billing) + NoSQL (watch history) + Elasticsearch (search)",
            "day": 142
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 145
          },
          {
            "topic": "Final Review & Mock Interviews",
            "priority": "MUST KNOW",
            "tasks": "B-Trees, isolation levels, N+1, CAP theorem, DB selection tradeoffs",
            "achievement": "B-Trees, isolation levels, N+1, CAP theorem, DB selection tradeoffs",
            "day": 146
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 149
          },
          {
            "topic": "**Graduation: Reflection & Portfolio Review**",
            "priority": "MUST KNOW",
            "tasks": "Review the full journey from Linux fundamentals to production DB architecture",
            "achievement": "Review the full journey from Linux fundamentals to production DB architecture",
            "day": 150
          }
        ]
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
            "priority": "MUST KNOW",
            "tasks": "Explain why Docker solves \"works on my machine\"; diagram container vs VM",
            "achievement": "Explain why Docker solves \"works on my machine\"; diagram container vs VM",
            "day": 1
          },
          {
            "topic": "Core Docker Commands (`run`, `ps`, `exec`, `logs`, `stop`, `rm`)",
            "priority": "MUST KNOW",
            "tasks": "Manage the full lifecycle of 3 pre-built images",
            "achievement": "Manage the full lifecycle of 3 pre-built images",
            "day": 2
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 3
          },
          {
            "topic": "Writing Dockerfiles (Spring Boot + Flask apps)",
            "priority": "MUST KNOW",
            "tasks": "Dockerize both apps from scratch, using `FROM`/`WORKDIR`/`COPY`/`RUN`/`CMD`",
            "achievement": "Dockerize both apps from scratch, using `FROM`/`WORKDIR`/`COPY`/`RUN`/`CMD`",
            "day": 4
          },
          {
            "topic": "Multi-Stage Builds",
            "priority": "MUST KNOW",
            "tasks": "Cut your Java image size by >70% (JDK build stage → JRE-alpine run stage)",
            "achievement": "Cut your Java image size by >70% (JDK build stage → JRE-alpine run stage)",
            "day": 6
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 7
          },
          {
            "topic": "Docker Volumes (state persistence)",
            "priority": "MUST KNOW",
            "tasks": "Run Postgres in a container; data survives a restart via mounted volume",
            "achievement": "Run Postgres in a container; data survives a restart via mounted volume",
            "day": 8
          },
          {
            "topic": "Docker Networks",
            "priority": "MUST KNOW",
            "tasks": "Two containers communicate by container name, no hardcoded IPs",
            "achievement": "Two containers communicate by container name, no hardcoded IPs",
            "day": 9
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 10
          },
          {
            "topic": "Docker Compose",
            "priority": "MUST KNOW",
            "tasks": "3-tier app (frontend+backend+db) orchestrated via one `docker-compose.yml`",
            "achievement": "3-tier app (frontend+backend+db) orchestrated via one `docker-compose.yml`",
            "day": 11
          },
          {
            "topic": "Image Registries, Tagging, `.dockerignore`, Layer Caching",
            "priority": "MUST KNOW",
            "tasks": "Push a versioned image to Docker Hub or ECR",
            "achievement": "Push a versioned image to Docker Hub or ECR",
            "day": 13
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 14
          },
          {
            "topic": "Cloud Fundamentals: IAM, VPC, Subnets, Security Groups",
            "priority": "MUST KNOW",
            "tasks": "Diagram a VPC with public/private subnets; explain least-privilege IAM",
            "achievement": "Diagram a VPC with public/private subnets; explain least-privilege IAM",
            "day": 15
          },
          {
            "topic": "EC2 Deploy: launch, SSH in, deploy Dockerized app manually",
            "priority": "MUST KNOW",
            "tasks": "App reachable via public IP — then **terminate the instance**",
            "achievement": "App reachable via public IP — then **terminate the instance**",
            "day": 17
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 19
          },
          {
            "topic": "Container Security Basics (Trivy scanning, non-root users, minimal base images)",
            "priority": "MUST KNOW",
            "tasks": "Scan one of your images, fix the top findings",
            "achievement": "Scan one of your images, fix the top findings",
            "day": 20
          },
          {
            "topic": "**Phase 1 Capstone: 3-Tier Compose App**",
            "priority": "MUST KNOW",
            "tasks": "Scanned images, pushed to a registry, documented in a README",
            "achievement": "Scanned images, pushed to a registry, documented in a README",
            "day": 21
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 23
          }
        ]
      },
      {
        "id": "5-2",
        "title": "INFRASTRUCTURE AS CODE & CI/CD",
        "days": "Days 24–46",
        "items": [
          {
            "topic": "Terraform Basics (`provider`, state, `plan`/`apply`/`destroy`)",
            "priority": "MUST KNOW",
            "tasks": "Provision an S3 bucket + IAM role via Terraform",
            "achievement": "Provision an S3 bucket + IAM role via Terraform",
            "day": 24
          },
          {
            "topic": "Terraform: VPC + EC2 Module",
            "priority": "MUST KNOW",
            "tasks": "Reusable module, **destroyed** after verification",
            "achievement": "Reusable module, **destroyed** after verification",
            "day": 26
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 29
          },
          {
            "topic": "Terraform State Management (remote backend + locking)",
            "priority": "MUST KNOW",
            "tasks": "Migrate local state to S3 backend with DynamoDB locking",
            "achievement": "Migrate local state to S3 backend with DynamoDB locking",
            "day": 30
          },
          {
            "topic": "Git Workflows for Infra Teams (branching, PR review, GitOps intro)",
            "priority": "MUST KNOW",
            "tasks": "Open a PR with an infra change + a review checklist",
            "achievement": "Open a PR with an infra change + a review checklist",
            "day": 31
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 32
          },
          {
            "topic": "CI Fundamentals: GitHub Actions",
            "priority": "MUST KNOW",
            "tasks": "Pipeline that builds + tests a Java app on every push",
            "achievement": "Pipeline that builds + tests a Java app on every push",
            "day": 33
          },
          {
            "topic": "CD: Build → Push Image → Deploy Pipeline",
            "priority": "MUST KNOW",
            "tasks": "Full pipeline: code push → Docker build → push to registry → deploy",
            "achievement": "Full pipeline: code push → Docker build → push to registry → deploy",
            "day": 35
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 37
          },
          {
            "topic": "Secrets Management (GitHub Secrets, then Vault intro)",
            "priority": "MUST KNOW",
            "tasks": "Zero hardcoded credentials anywhere in the pipeline",
            "achievement": "Zero hardcoded credentials anywhere in the pipeline",
            "day": 38
          },
          {
            "topic": "Pipeline Resiliency (rollback strategy, canary/blue-green concept)",
            "priority": "MUST KNOW",
            "tasks": "Document and demo a rollback plan for a failed deploy",
            "achievement": "Document and demo a rollback plan for a failed deploy",
            "day": 40
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 42
          },
          {
            "topic": "**Phase 2 Capstone: Full CI/CD Pipeline**",
            "priority": "MUST KNOW",
            "tasks": "Green pipeline badge in README; one intentional failure + rollback demo",
            "achievement": "Green pipeline badge in README; one intentional failure + rollback demo",
            "day": 43
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 46
          }
        ]
      },
      {
        "id": "5-3",
        "title": "KUBERNETES & OBSERVABILITY",
        "days": "Days 47–98",
        "items": [
          {
            "topic": "K8s Architecture (control plane, etcd, kubelet, scheduler)",
            "priority": "MUST KNOW",
            "tasks": "Diagram + explain the architecture from memory, no notes",
            "achievement": "Diagram + explain the architecture from memory, no notes",
            "day": 47
          },
          {
            "topic": "Minikube/kind Setup + Core `kubectl` Commands",
            "priority": "MUST KNOW",
            "tasks": "Comfortable debugging with `describe`/`logs`/`exec`",
            "achievement": "Comfortable debugging with `describe`/`logs`/`exec`",
            "day": 49
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 51
          },
          {
            "topic": "Pods & Sidecars",
            "priority": "MUST KNOW",
            "tasks": "Deploy a pod with a logging sidecar",
            "achievement": "Deploy a pod with a logging sidecar",
            "day": 52
          },
          {
            "topic": "Deployments & ReplicaSets (self-healing, rolling updates)",
            "priority": "MUST KNOW",
            "tasks": "Kill a pod and watch it recover; perform a rolling update",
            "achievement": "Kill a pod and watch it recover; perform a rolling update",
            "day": 53
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 55
          },
          {
            "topic": "Services (ClusterIP, NodePort, LoadBalancer)",
            "priority": "MUST KNOW",
            "tasks": "Backend reaches DB via stable service DNS",
            "achievement": "Backend reaches DB via stable service DNS",
            "day": 56
          },
          {
            "topic": "ConfigMaps & Secrets",
            "priority": "MUST KNOW",
            "tasks": "Externalize app config from your image",
            "achievement": "Externalize app config from your image",
            "day": 58
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 59
          },
          {
            "topic": "Ingress + Ingress Controller",
            "priority": "MUST KNOW",
            "tasks": "Route two services through one ingress by path",
            "achievement": "Route two services through one ingress by path",
            "day": 60
          },
          {
            "topic": "Persistent Volumes / PVCs / StorageClasses",
            "priority": "MUST KNOW",
            "tasks": "Stateful DB pod survives rescheduling",
            "achievement": "Stateful DB pod survives rescheduling",
            "day": 62
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 64
          },
          {
            "topic": "Helm Basics (charts, values, templating)",
            "priority": "MUST KNOW",
            "tasks": "Package your Phase 1 app as a Helm chart",
            "achievement": "Package your Phase 1 app as a Helm chart",
            "day": 65
          },
          {
            "topic": "Horizontal Pod Autoscaler + resource requests/limits",
            "priority": "MUST KNOW",
            "tasks": "Load-test the app and watch it scale",
            "achievement": "Load-test the app and watch it scale",
            "day": 68
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 70
          },
          {
            "topic": "RBAC & Namespaces",
            "priority": "MUST KNOW",
            "tasks": "Restrict a service account to one namespace",
            "achievement": "Restrict a service account to one namespace",
            "day": 71
          },
          {
            "topic": "Prometheus Fundamentals (metrics, PromQL)",
            "priority": "MUST KNOW",
            "tasks": "Write 3 genuinely useful PromQL queries against your cluster",
            "achievement": "Write 3 genuinely useful PromQL queries against your cluster",
            "day": 72
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 74
          },
          {
            "topic": "Grafana Dashboards + Alerting",
            "priority": "MUST KNOW",
            "tasks": "Dashboard with 4 real panels + one working alert rule",
            "achievement": "Dashboard with 4 real panels + one working alert rule",
            "day": 75
          },
          {
            "topic": "Centralized Logging (Loki preferred; EFK if a JD specifically wants it)",
            "priority": "MUST KNOW",
            "tasks": "Search logs across pods from one UI",
            "achievement": "Search logs across pods from one UI",
            "day": 77
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 80
          },
          {
            "topic": "OpenTelemetry + Distributed Tracing (Jaeger)",
            "priority": "MUST KNOW",
            "tasks": "Trace a single request across 2 services",
            "achievement": "Trace a single request across 2 services",
            "day": 81
          },
          {
            "topic": "Service Mesh (Istio) — concept + minimal lab",
            "priority": "MUST KNOW",
            "tasks": "Explain mTLS + sidecar injection; basic traffic-split demo",
            "achievement": "Explain mTLS + sidecar injection; basic traffic-split demo",
            "day": 84
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 86
          },
          {
            "topic": "K8s Security (network policies, Pod Security Standards)",
            "priority": "MUST KNOW",
            "tasks": "Deny-all-by-default policy, then open specific required paths",
            "achievement": "Deny-all-by-default policy, then open specific required paths",
            "day": 87
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 89
          },
          {
            "topic": "**Phase 3 Capstone: EKS via Terraform → ArgoCD → Helm-deployed 3-tier app → Prometheus/Grafana + logging, GitOps-managed**",
            "priority": "MUST KNOW",
            "tasks": "Full stack running and documented — **cluster torn down after demo/recording**",
            "achievement": "Full stack running and documented — **cluster torn down after demo/recording**",
            "day": 90
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 98
          }
        ]
      },
      {
        "id": "5-4",
        "title": "MLOPS & AI INFRASTRUCTURE",
        "days": "Days 99–123",
        "items": [
          {
            "topic": "ML Lifecycle Overview (data → train → serve → monitor)",
            "priority": "MUST KNOW",
            "tasks": "Diagram the full lifecycle with failure points marked",
            "achievement": "Diagram the full lifecycle with failure points marked",
            "day": 99
          },
          {
            "topic": "Experiment Tracking (MLflow)",
            "priority": "MUST KNOW",
            "tasks": "Log 3 experiment runs with metrics/params",
            "achievement": "Log 3 experiment runs with metrics/params",
            "day": 100
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 102
          },
          {
            "topic": "Model Packaging & Serving (FastAPI or BentoML/TorchServe)",
            "priority": "MUST KNOW",
            "tasks": "Serve a model behind a REST endpoint",
            "achievement": "Serve a model behind a REST endpoint",
            "day": 103
          },
          {
            "topic": "Containerize + Deploy Serving API to K8s",
            "priority": "MUST KNOW",
            "tasks": "Model endpoint reachable through your K8s cluster",
            "achievement": "Model endpoint reachable through your K8s cluster",
            "day": 105
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 107
          },
          {
            "topic": "Feature Stores — concept only (Feast overview)",
            "priority": "MUST KNOW",
            "tasks": "Explain why online/offline feature parity matters",
            "achievement": "Explain why online/offline feature parity matters",
            "day": 108
          },
          {
            "topic": "Data/Model Drift Monitoring Concepts",
            "priority": "MUST KNOW",
            "tasks": "Pick 2 concrete drift metrics and justify them",
            "achievement": "Pick 2 concrete drift metrics and justify them",
            "day": 109
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 111
          },
          {
            "topic": "CI/CD for ML (automated retrain trigger on drift/schedule)",
            "priority": "MUST KNOW",
            "tasks": "Pipeline that retrains and redeploys on a trigger",
            "achievement": "Pipeline that retrains and redeploys on a trigger",
            "day": 112
          },
          {
            "topic": "GPU/Accelerator Infra Basics (cost tradeoffs)",
            "priority": "MUST KNOW",
            "tasks": "Cost comparison table: CPU vs GPU vs managed inference API",
            "achievement": "Cost comparison table: CPU vs GPU vs managed inference API",
            "day": 115
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 116
          },
          {
            "topic": "**Phase 4 Capstone: End-to-End MLOps Pipeline** (ingest → train → track/MLflow → serve/K8s → monitor drift → auto-retrain, GitOps-deployed)",
            "priority": "MUST KNOW",
            "tasks": "Fully documented with an architecture diagram and written rationale for each tool choice",
            "achievement": "Fully documented with an architecture diagram and written rationale for each tool choice",
            "day": 117
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 123
          }
        ]
      },
      {
        "id": "5-5",
        "title": "SYSTEM DESIGN, INTERVIEW PREP & THE FINAL MILE",
        "days": "Days 124–141",
        "items": [
          {
            "topic": "System Design Mock: Scale (1M req/s — load balancers, caching, sharding)",
            "priority": "MUST KNOW",
            "tasks": "Whiteboard-style write-up, no code",
            "achievement": "Whiteboard-style write-up, no code",
            "day": 124
          },
          {
            "topic": "System Design Mock: E-Commerce Microservices (bounded contexts, Kafka, Saga pattern)",
            "priority": "MUST KNOW",
            "tasks": "Same format",
            "achievement": "Same format",
            "day": 126
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 128
          },
          {
            "topic": "System Design Mock: MLOps at Scale (5TB/day retraining pipeline)",
            "priority": "MUST KNOW",
            "tasks": "Same format",
            "achievement": "Same format",
            "day": 129
          },
          {
            "topic": "SRE Culture (SLOs, error budgets, blameless postmortems)",
            "priority": "MUST KNOW",
            "tasks": "Write a mock postmortem for a fictional outage",
            "achievement": "Write a mock postmortem for a fictional outage",
            "day": 131
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 132
          },
          {
            "topic": "Behavioral Prep (STAR Method — 5 stories)",
            "priority": "MUST KNOW",
            "tasks": "5 stories written out and rehearsed out loud",
            "achievement": "5 stories written out and rehearsed out loud",
            "day": 133
          },
          {
            "topic": "Resume Pass — every bullet gets a metric",
            "priority": "MUST KNOW",
            "tasks": "Rewritten resume, no tutorial-project bullets",
            "achievement": "Rewritten resume, no tutorial-project bullets",
            "day": 135
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 136
          },
          {
            "topic": "Full Mock Interview Loop (system design + behavioral + live debug)",
            "priority": "MUST KNOW",
            "tasks": "Recorded mock interview, self-reviewed",
            "achievement": "Recorded mock interview, self-reviewed",
            "day": 137
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "MUST KNOW",
            "tasks": "—",
            "achievement": "—",
            "day": 140
          },
          {
            "topic": "**Graduation: Retrospective & Portfolio Polish**",
            "priority": "MUST KNOW",
            "tasks": "All 4 capstones linked from a single portfolio index/README",
            "achievement": "All 4 capstones linked from a single portfolio index/README",
            "day": 141
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "title": "Java Core & Advanced",
    "days": 0,
    "color": "rose",
    "phases": []
  },
  {
    "id": 7,
    "title": "Master DSA Roadmap",
    "days": 150,
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
            "achievement": "Can classify any short code snippet's time complexity and explain worst-case vs average-case.",
            "day": 1
          },
          {
            "topic": "Nested Loops & Recursive Complexity (Light)",
            "priority": "🔴 P0",
            "tasks": "Can derive Big O for nested loops and simple recursive calls without running the code.",
            "achievement": "Can derive Big O for nested loops and simple recursive calls without running the code.",
            "day": 2
          },
          {
            "topic": "Java Toolkit for DSA: Arrays & Collections (Light)",
            "priority": "🔴 P0",
            "tasks": "Can explain why `int[]` outperforms `ArrayList<Integer>` for tight loops, citing memory layout.",
            "achievement": "Can explain why `int[]` outperforms `ArrayList<Integer>` for tight loops, citing memory layout.",
            "day": 3
          },
          {
            "topic": "Java Toolkit: Comparator Tricks (Light)",
            "priority": "🔴 P0",
            "tasks": "Can write a chained multi-field comparator in one line using lambda syntax.",
            "achievement": "Can write a chained multi-field comparator in one line using lambda syntax.",
            "day": 4
          },
          {
            "topic": "Java Performance Traps: Autoboxing & Overflow (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Can identify and fix an overflow bug in a binary search midpoint calculation.",
            "achievement": "Can identify and fix an overflow bug in a binary search midpoint calculation.",
            "day": 5
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 6
          },
          {
            "topic": "Java Performance Traps: Practice Day (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can review a code snippet and flag 3 distinct Java-specific performance traps.",
            "achievement": "Can review a code snippet and flag 3 distinct Java-specific performance traps.",
            "day": 7
          },
          {
            "topic": "Hashing Basics: HashMap & HashSet (Light)",
            "priority": "🔴 P0",
            "tasks": "Can solve any \"count occurrences of X\" problem using HashMap in O(N).",
            "achievement": "Can solve any \"count occurrences of X\" problem using HashMap in O(N).",
            "day": 8
          },
          {
            "topic": "Hashing Practice Day (Light)",
            "priority": "🔴 P0",
            "tasks": "Can decide within seconds whether a problem needs HashMap, HashSet, or a fixed-size frequency array.",
            "achievement": "Can decide within seconds whether a problem needs HashMap, HashSet, or a fixed-size frequency array.",
            "day": 9
          },
          {
            "topic": "HANDS-ON LAB: Complexity & JVM Profiling + Phase Cheat Sheet",
            "priority": "🔴 P0",
            "tasks": "Can recite the Foundations cheat sheet cold and complete the lab within its suggested time.",
            "achievement": "Can recite the Foundations cheat sheet cold and complete the lab within its suggested time.",
            "day": 10
          }
        ]
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
            "achievement": "Can explain why array access is O(1) and implement a 2D matrix rotation in-place.",
            "day": 11
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 12
          },
          {
            "topic": "Dynamic Array From Scratch (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Has a working `resize()` method that doubles capacity when full.",
            "achievement": "Has a working `resize()` method that doubles capacity when full.",
            "day": 13
          },
          {
            "topic": "Dynamic Array Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Has a fully working hand-rolled dynamic array and can solve in-place array manipulation problems.",
            "achievement": "Has a fully working hand-rolled dynamic array and can solve in-place array manipulation problems.",
            "day": 14
          },
          {
            "topic": "Linked Lists: Singly Linked List (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement singly linked list insert/delete and reverse it iteratively.",
            "achievement": "Can implement singly linked list insert/delete and reverse it iteratively.",
            "day": 15
          },
          {
            "topic": "Doubly & Circular Linked Lists (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Sentinel-node DLL skeleton compiles and supports basic insert.",
            "achievement": "Sentinel-node DLL skeleton compiles and supports basic insert.",
            "day": 16
          },
          {
            "topic": "Doubly Linked List Practice + Cycle Detection (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can implement Floyd's Cycle Detection and explain why the two pointers must meet inside the cycle.",
            "achievement": "Can implement Floyd's Cycle Detection and explain why the two pointers must meet inside the cycle.",
            "day": 17
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 18
          },
          {
            "topic": "Stacks: LIFO Fundamentals (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement a stack from scratch and solve Valid Parentheses in O(N).",
            "achievement": "Can implement a stack from scratch and solve Valid Parentheses in O(N).",
            "day": 19
          },
          {
            "topic": "Stack Applications: Expression Evaluation (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Has a working operator-precedence parsing skeleton.",
            "achievement": "Has a working operator-precedence parsing skeleton.",
            "day": 20
          },
          {
            "topic": "Min Stack + Stack Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can implement Min Stack with O(1) push/pop/getMin.",
            "achievement": "Can implement Min Stack with O(1) push/pop/getMin.",
            "day": 21
          },
          {
            "topic": "Queues: FIFO Fundamentals (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement a circular queue without wasting array slots.",
            "achievement": "Can implement a circular queue without wasting array slots.",
            "day": 22
          },
          {
            "topic": "Deque (Double-Ended Queue) (Light)",
            "priority": "🔴 P0",
            "tasks": "Can explain why `ArrayDeque` is preferred over `java.util.Stack` in production Java code.",
            "achievement": "Can explain why `ArrayDeque` is preferred over `java.util.Stack` in production Java code.",
            "day": 23
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 24
          },
          {
            "topic": "Hash Tables: Internals — Hash Functions & Collisions (Light)",
            "priority": "🔴 P0",
            "tasks": "Can design a hash function and explain what makes one \"good\" (uniform distribution, low collision rate).",
            "achievement": "Can design a hash function and explain what makes one \"good\" (uniform distribution, low collision rate).",
            "day": 25
          },
          {
            "topic": "Collision Resolution: Chaining vs Open Addressing (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Hash table skeleton with chaining-based bucket array compiles and supports insert.",
            "achievement": "Hash table skeleton with chaining-based bucket array compiles and supports insert.",
            "day": 26
          },
          {
            "topic": "Hash Table From Scratch + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Has a working hand-rolled HashMap with chaining and automatic resizing.",
            "achievement": "Has a working hand-rolled HashMap with chaining and automatic resizing.",
            "day": 27
          }
        ]
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
            "achievement": "Can write binary search from memory without bugs, in both forms.",
            "day": 28
          },
          {
            "topic": "Binary Search: Lower Bound & Upper Bound (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement lower/upper bound binary search and use them together to count occurrences in O(log N).",
            "achievement": "Can implement lower/upper bound binary search and use them together to count occurrences in O(log N).",
            "day": 29
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 30
          },
          {
            "topic": "Binary Search on Answer Space (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Can articulate the monotonic predicate for Koko Eating Bananas before finishing the code.",
            "achievement": "Can articulate the monotonic predicate for Koko Eating Bananas before finishing the code.",
            "day": 31
          },
          {
            "topic": "Binary Search on Answer: Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can recognize a \"search on answer\" problem within the first read and set up the feasibility check correctly.",
            "achievement": "Can recognize a \"search on answer\" problem within the first read and set up the feasibility check correctly.",
            "day": 32
          },
          {
            "topic": "Sorting Fundamentals: Bubble, Selection, Insertion (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement all three O(N²) sorts and state which are stable.",
            "achievement": "Can implement all three O(N²) sorts and state which are stable.",
            "day": 33
          },
          {
            "topic": "Merge Sort (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Merge function correctly merges two sorted halves in O(N).",
            "achievement": "Merge function correctly merges two sorted halves in O(N).",
            "day": 34
          },
          {
            "topic": "Merge Sort: Finish + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Has a fully working merge sort and can use it to count array inversions in O(N log N).",
            "achievement": "Has a fully working merge sort and can use it to count array inversions in O(N log N).",
            "day": 35
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 36
          },
          {
            "topic": "Quick Sort (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Partition function correctly places the pivot and partitions the array around it.",
            "achievement": "Partition function correctly places the pivot and partitions the array around it.",
            "day": 37
          },
          {
            "topic": "Quick Sort: Finish + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can implement Quickselect (partial quicksort) to find the Kth largest element in average O(N).",
            "achievement": "Can implement Quickselect (partial quicksort) to find the Kth largest element in average O(N).",
            "day": 38
          },
          {
            "topic": "Heap Sort (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement heap sort and explain why building the heap is O(N), not O(N log N).",
            "achievement": "Can implement heap sort and explain why building the heap is O(N), not O(N log N).",
            "day": 39
          },
          {
            "topic": "Counting Sort (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement Counting Sort in O(N+k) and explain when k (the range) makes it impractical.",
            "achievement": "Can implement Counting Sort in O(N+k) and explain when k (the range) makes it impractical.",
            "day": 40
          },
          {
            "topic": "Radix Sort & Bucket Sort (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Radix Sort correctly sorts multi-digit numbers using repeated counting-sort passes.",
            "achievement": "Radix Sort correctly sorts multi-digit numbers using repeated counting-sort passes.",
            "day": 41
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 42
          },
          {
            "topic": "Radix & Bucket Sort: Finish + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can correctly choose between Counting/Radix/Bucket/comparison sort given any input distribution description.",
            "achievement": "Can correctly choose between Counting/Radix/Bucket/comparison sort given any input distribution description.",
            "day": 43
          },
          {
            "topic": "HANDS-ON LAB: Median of Two Sorted Arrays (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Understands why the partition must satisfy `maxLeft ≤ minRight` on both arrays simultaneously.",
            "achievement": "Understands why the partition must satisfy `maxLeft ≤ minRight` on both arrays simultaneously.",
            "day": 44
          },
          {
            "topic": "Median of Two Sorted Arrays: Finish + Phase Cheat Sheet",
            "priority": "🔴 P0",
            "tasks": "Can solve Median of Two Sorted Arrays cold and recite every sort's complexity/stability from memory.",
            "achievement": "Can solve Median of Two Sorted Arrays cold and recite every sort's complexity/stability from memory.",
            "day": 45
          }
        ]
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
            "achievement": "Can solve Two Sum on a sorted array in O(N) using two converging pointers.",
            "day": 46
          },
          {
            "topic": "Two Pointers: Same Direction / Fast-Slow (Light)",
            "priority": "🔴 P0",
            "tasks": "Can solve in-place array modification problems using same-direction two pointers.",
            "achievement": "Can solve in-place array modification problems using same-direction two pointers.",
            "day": 47
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 48
          },
          {
            "topic": "3Sum: Opposite Pointers with Duplicate Skipping (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Understands exactly where and why duplicate-skipping logic goes in the loop.",
            "achievement": "Understands exactly where and why duplicate-skipping logic goes in the loop.",
            "day": 49
          },
          {
            "topic": "3Sum: Finish + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can implement 3Sum in O(N²) with correct duplicate handling, no Set needed.",
            "achievement": "Can implement 3Sum in O(N²) with correct duplicate handling, no Set needed.",
            "day": 50
          },
          {
            "topic": "Sliding Window: Fixed-Size Window (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement a fixed-size sliding window in O(N) without recomputing the window sum from scratch each time.",
            "achievement": "Can implement a fixed-size sliding window in O(N) without recomputing the window sum from scratch each time.",
            "day": 51
          },
          {
            "topic": "Sliding Window: Variable-Size Window (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Can articulate the exact shrink condition before finishing the implementation.",
            "achievement": "Can articulate the exact shrink condition before finishing the implementation.",
            "day": 52
          },
          {
            "topic": "Variable Sliding Window: Finish + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Has a working O(N) solution and can adapt the shrink condition to new constraints.",
            "achievement": "Has a working O(N) solution and can adapt the shrink condition to new constraints.",
            "day": 53
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 54
          },
          {
            "topic": "Minimum Window Substring (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Understands why a single counter (matched characters) avoids comparing two full frequency maps every iteration.",
            "achievement": "Understands why a single counter (matched characters) avoids comparing two full frequency maps every iteration.",
            "day": 55
          },
          {
            "topic": "Minimum Window Substring: Finish + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can implement Minimum Window Substring in O(N) cold, without referencing notes.",
            "achievement": "Can implement Minimum Window Substring in O(N) cold, without referencing notes.",
            "day": 56
          },
          {
            "topic": "Prefix Sum: Range Sum Queries (Light)",
            "priority": "🔴 P0",
            "tasks": "Can answer any range-sum query in O(1) after building the prefix sum array.",
            "achievement": "Can answer any range-sum query in O(1) after building the prefix sum array.",
            "day": 57
          },
          {
            "topic": "Subarray Sum Equals K: Prefix Map Pattern (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Understands why `prefixSum - k` lookup in a HashMap solves this in O(N).",
            "achievement": "Understands why `prefixSum - k` lookup in a HashMap solves this in O(N).",
            "day": 58
          },
          {
            "topic": "Subarray Sum Equals K: Finish + Phase Cheat Sheet",
            "priority": "🔴 P0",
            "tasks": "Can solve Subarray Sum Equals K cold and recite the full phase cheat sheet.",
            "achievement": "Can solve Subarray Sum Equals K cold and recite the full phase cheat sheet.",
            "day": 59
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 60
          }
        ]
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
            "achievement": "Can explain why string concatenation in a loop is O(N²) total and how StringBuilder fixes it.",
            "day": 61
          },
          {
            "topic": "Frequency Counting for Strings (Light)",
            "priority": "🔴 P0",
            "tasks": "Can solve any anagram/permutation-detection problem using frequency counting without a HashMap when the alphabet is small.",
            "achievement": "Can solve any anagram/permutation-detection problem using frequency counting without a HashMap when the alphabet is small.",
            "day": 62
          },
          {
            "topic": "Palindrome Problems: Two-Pointer Check (Light)",
            "priority": "🔴 P0",
            "tasks": "Can verify a palindrome in O(N) with O(1) space using two pointers.",
            "achievement": "Can verify a palindrome in O(N) with O(1) space using two pointers.",
            "day": 63
          },
          {
            "topic": "Longest Palindromic Substring: Expand From Center (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Understands why two separate expansion calls (odd-center, even-center) are needed per index.",
            "achievement": "Understands why two separate expansion calls (odd-center, even-center) are needed per index.",
            "day": 64
          },
          {
            "topic": "Longest Palindromic Substring: Finish + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can implement Longest Palindromic Substring in O(N²) cold.",
            "achievement": "Can implement Longest Palindromic Substring in O(N²) cold.",
            "day": 65
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 66
          },
          {
            "topic": "String Hashing: Rolling Hash (Light)",
            "priority": "🔴 P0",
            "tasks": "Can explain how rolling hash updates in O(1) per window shift instead of O(L) recomputation.",
            "achievement": "Can explain how rolling hash updates in O(1) per window shift instead of O(L) recomputation.",
            "day": 67
          },
          {
            "topic": "Rabin-Karp Algorithm (Medium, Day 1/2)",
            "priority": "🟢 P2",
            "tasks": "Understands why a hash match still requires a character-by-character verification step.",
            "achievement": "Understands why a hash match still requires a character-by-character verification step.",
            "day": 68
          },
          {
            "topic": "Rabin-Karp: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟢 P2",
            "tasks": "Can implement Rabin-Karp and explain its worst-case degradation scenario.",
            "achievement": "Can implement Rabin-Karp and explain its worst-case degradation scenario.",
            "day": 69
          },
          {
            "topic": "KMP: Building the LPS Array (Heavy, Day 1/4)",
            "priority": "🟢 P2",
            "tasks": "Can construct the LPS array for any pattern by hand within 2 minutes.",
            "achievement": "Can construct the LPS array for any pattern by hand within 2 minutes.",
            "day": 70
          },
          {
            "topic": "KMP: Using the LPS Array for Search (Heavy, Day 2/4)",
            "priority": "🟢 P2",
            "tasks": "Has a complete, working KMP implementation achieving O(N+M).",
            "achievement": "Has a complete, working KMP implementation achieving O(N+M).",
            "day": 71
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 72
          },
          {
            "topic": "KMP: Practice Day 1 (Heavy, Day 3/4)",
            "priority": "🟢 P2",
            "tasks": "Can trace KMP's pointer movement on paper for any given text/pattern pair.",
            "achievement": "Can trace KMP's pointer movement on paper for any given text/pattern pair.",
            "day": 73
          },
          {
            "topic": "KMP: Practice Day 2 (Heavy, Day 4/4)",
            "priority": "🟢 P2",
            "tasks": "Can justify, in an interview, the choice between naive/Rabin-Karp/KMP for a given constraint set.",
            "achievement": "Can justify, in an interview, the choice between naive/Rabin-Karp/KMP for a given constraint set.",
            "day": 74
          },
          {
            "topic": "HANDS-ON LAB: Substring Search Benchmarking + Phase Cheat Sheet",
            "priority": "🔴 P0",
            "tasks": "Can produce real benchmark numbers showing KMP/Rabin-Karp's advantage on adversarial inputs and recite the phase cheat sheet.",
            "achievement": "Can produce real benchmark numbers showing KMP/Rabin-Karp's advantage on adversarial inputs and recite the phase cheat sheet.",
            "day": 75
          }
        ]
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
            "achievement": "Can implement Next Greater Element in O(N) using a monotonic decreasing stack.",
            "day": 76
          },
          {
            "topic": "Monotonic Stack: Daily Temperatures & Variants (Light)",
            "priority": "🔴 P0",
            "tasks": "Can decide when to store values vs indices on the monotonic stack based on what the problem asks for.",
            "achievement": "Can decide when to store values vs indices on the monotonic stack based on what the problem asks for.",
            "day": 77
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 78
          },
          {
            "topic": "Monotonic Queue: Sliding Window Maximum (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Understands why elements are evicted from the back of the deque when a larger element arrives.",
            "achievement": "Understands why elements are evicted from the back of the deque when a larger element arrives.",
            "day": 79
          },
          {
            "topic": "Sliding Window Maximum: Finish + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can implement Sliding Window Maximum in true O(N) cold.",
            "achievement": "Can implement Sliding Window Maximum in true O(N) cold.",
            "day": 80
          },
          {
            "topic": "HANDS-ON LAB: Maximal Rectangle Solver + Phase Cheat Sheet",
            "priority": "🔴 P0",
            "tasks": "Can solve Maximal Rectangle by combining histogram-area logic with a monotonic stack, and recite the phase cheat sheet.",
            "achievement": "Can solve Maximal Rectangle by combining histogram-area logic with a monotonic stack, and recite the phase cheat sheet.",
            "day": 81
          }
        ]
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
            "achievement": "Can trace any moderately complex recursive function's call stack by hand.",
            "day": 82
          },
          {
            "topic": "Recursion: Recursion Tree & Recurrence Relations (Light)",
            "priority": "🔴 P0",
            "tasks": "Can explain why naive recursive Fibonacci is O(2^N) by drawing its recursion tree.",
            "achievement": "Can explain why naive recursive Fibonacci is O(2^N) by drawing its recursion tree.",
            "day": 83
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 84
          },
          {
            "topic": "Backtracking: The Blueprint (Light)",
            "priority": "🔴 P0",
            "tasks": "Can write the generic backtracking template from memory in under 2 minutes.",
            "achievement": "Can write the generic backtracking template from memory in under 2 minutes.",
            "day": 85
          },
          {
            "topic": "Backtracking: Subsets & Combinations (Light)",
            "priority": "🔴 P0",
            "tasks": "Can adapt the backtracking template to subsets/combinations without re-deriving it from scratch.",
            "achievement": "Can adapt the backtracking template to subsets/combinations without re-deriving it from scratch.",
            "day": 86
          },
          {
            "topic": "Backtracking: Permutations (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Understands the difference between the swap-based and used-array approaches to permutation generation.",
            "achievement": "Understands the difference between the swap-based and used-array approaches to permutation generation.",
            "day": 87
          },
          {
            "topic": "Permutations: Finish + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can generate all permutations, with correct duplicate handling, in both forms.",
            "achievement": "Can generate all permutations, with correct duplicate handling, in both forms.",
            "day": 88
          },
          {
            "topic": "Pruning Techniques (Light)",
            "priority": "🔴 P0",
            "tasks": "Can identify and add a pruning condition that meaningfully cuts the search space.",
            "achievement": "Can identify and add a pruning condition that meaningfully cuts the search space.",
            "day": 89
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 90
          },
          {
            "topic": "N-Queens: Setup & Naive Approach (Heavy, Day 1/3)",
            "priority": "🔴 P0",
            "tasks": "Has a working but unoptimized N-Queens solution.",
            "achievement": "Has a working but unoptimized N-Queens solution.",
            "day": 91
          },
          {
            "topic": "N-Queens: Optimized Conflict Checking (Heavy, Day 2/3)",
            "priority": "🔴 P0",
            "tasks": "N-Queens now runs with O(1) conflict checking per placement instead of O(N) board scans.",
            "achievement": "N-Queens now runs with O(1) conflict checking per placement instead of O(N) board scans.",
            "day": 92
          },
          {
            "topic": "N-Queens: Practice + Variants (Heavy, Day 3/3)",
            "priority": "🔴 P0",
            "tasks": "Can implement N-Queens with optimal conflict checking cold, in either \"return all\" or \"count only\" form.",
            "achievement": "Can implement N-Queens with optimal conflict checking cold, in either \"return all\" or \"count only\" form.",
            "day": 93
          },
          {
            "topic": "Sudoku Solver (Heavy, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Has working row/column/box validity-check functions integrated into the backtracking skeleton.",
            "achievement": "Has working row/column/box validity-check functions integrated into the backtracking skeleton.",
            "day": 94
          },
          {
            "topic": "Sudoku Solver: Finish + Phase Cheat Sheet",
            "priority": "🔴 P0",
            "tasks": "Has a fully working Sudoku solver and can recite the phase cheat sheet.",
            "achievement": "Has a fully working Sudoku solver and can recite the phase cheat sheet.",
            "day": 95
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 96
          }
        ]
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
            "achievement": "Can compute tree height/depth recursively in O(N).",
            "day": 97
          },
          {
            "topic": "Binary Tree Traversals: Recursive (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement all 3 recursive traversals from memory.",
            "achievement": "Can implement all 3 recursive traversals from memory.",
            "day": 98
          },
          {
            "topic": "Binary Tree Traversals: Iterative + Level Order (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Has a working iterative inorder traversal using an explicit stack.",
            "achievement": "Has a working iterative inorder traversal using an explicit stack.",
            "day": 99
          },
          {
            "topic": "Iterative Traversals: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Can implement all 4 traversal types both recursively and iteratively.",
            "achievement": "Can implement all 4 traversal types both recursively and iteratively.",
            "day": 100
          },
          {
            "topic": "Binary Tree: Diameter & Path Sum (Light)",
            "priority": "🟡 P1",
            "tasks": "Can solve Diameter of Binary Tree in a single O(N) pass (not O(N²)).",
            "achievement": "Can solve Diameter of Binary Tree in a single O(N) pass (not O(N²)).",
            "day": 101
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 102
          },
          {
            "topic": "Binary Search Tree: Search, Insert, Delete (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Has working BST insert and search operations.",
            "achievement": "Has working BST insert and search operations.",
            "day": 103
          },
          {
            "topic": "BST Delete + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can implement BST delete correctly for all 3 cases.",
            "achievement": "Can implement BST delete correctly for all 3 cases.",
            "day": 104
          },
          {
            "topic": "BST: Validate BST & Kth Smallest (Light)",
            "priority": "🔴 P0",
            "tasks": "Can validate a BST correctly and find Kth smallest in O(H+K).",
            "achievement": "Can validate a BST correctly and find Kth smallest in O(H+K).",
            "day": 105
          },
          {
            "topic": "Balanced BSTs: AVL & Red-Black Trees Conceptual (Light)",
            "priority": "🟢 P2",
            "tasks": "Can explain why an unbalanced BST degrades to O(N) and name where Red-Black trees are used inside the JDK.",
            "achievement": "Can explain why an unbalanced BST degrades to O(N) and name where Red-Black trees are used inside the JDK.",
            "day": 106
          },
          {
            "topic": "AVL Rotations: LL & RR Cases (Heavy, Day 1/3)",
            "priority": "🟢 P2",
            "tasks": "Can identify an LL or RR imbalance and apply the correct single rotation.",
            "achievement": "Can identify an LL or RR imbalance and apply the correct single rotation.",
            "day": 107
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 108
          },
          {
            "topic": "AVL Rotations: LR & RL Cases (Heavy, Day 2/3)",
            "priority": "🟢 P2",
            "tasks": "Can identify an LR or RL imbalance and apply the correct two-step rotation sequence.",
            "achievement": "Can identify an LR or RL imbalance and apply the correct two-step rotation sequence.",
            "day": 109
          },
          {
            "topic": "AVL Tree: Full Insert with Self-Balancing (Heavy, Day 3/3)",
            "priority": "🟢 P2",
            "tasks": "Has a fully working, self-balancing AVL insert handling all 4 rotation cases.",
            "achievement": "Has a fully working, self-balancing AVL insert handling all 4 rotation cases.",
            "day": 110
          },
          {
            "topic": "Heaps: Binary Heap Representation (Light)",
            "priority": "🟡 P1",
            "tasks": "Can implement siftUp/siftDown from memory and explain the parent/child index math.",
            "achievement": "Can implement siftUp/siftDown from memory and explain the parent/child index math.",
            "day": 111
          },
          {
            "topic": "Heaps: Heapify & PriorityQueue Usage (Light)",
            "priority": "🔴 P0",
            "tasks": "Can explain why heapify is O(N), not O(N log N), and use `PriorityQueue` fluently with custom orderings.",
            "achievement": "Can explain why heapify is O(N), not O(N log N), and use `PriorityQueue` fluently with custom orderings.",
            "day": 112
          },
          {
            "topic": "Tries: Node Structure & Insert/Search (Light)",
            "priority": "🟡 P1",
            "tasks": "Can implement Trie insert and search in O(L) per operation.",
            "achievement": "Can implement Trie insert and search in O(L) per operation.",
            "day": 113
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 114
          },
          {
            "topic": "Tries: Prefix Search & Autocomplete Design (Medium, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Trie supports `startsWith` and can list all words under a given prefix.",
            "achievement": "Trie supports `startsWith` and can list all words under a given prefix.",
            "day": 115
          },
          {
            "topic": "Autocomplete System: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Has a working Trie-based autocomplete system returning ranked top-K suggestions.",
            "achievement": "Has a working Trie-based autocomplete system returning ranked top-K suggestions.",
            "day": 116
          },
          {
            "topic": "Segment Trees: Construction & Range Query (Heavy, Day 1/3)",
            "priority": "🟢 P2",
            "tasks": "Has a working segment tree that answers range-sum queries in O(log N).",
            "achievement": "Has a working segment tree that answers range-sum queries in O(log N).",
            "day": 117
          },
          {
            "topic": "Segment Trees: Point Update (Heavy, Day 2/3)",
            "priority": "🟢 P2",
            "tasks": "Segment tree supports both range queries and point updates correctly.",
            "achievement": "Segment tree supports both range queries and point updates correctly.",
            "day": 118
          },
          {
            "topic": "Segment Trees: Lazy Propagation for Range Updates (Heavy, Day 3/3)",
            "priority": "🟢 P2",
            "tasks": "Complete segment tree supporting range updates AND range queries using lazy propagation.",
            "achievement": "Complete segment tree supporting range updates AND range queries using lazy propagation.",
            "day": 119
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 120
          },
          {
            "topic": "Fenwick Tree (Binary Indexed Tree) (Medium, Day 1/2)",
            "priority": "🟢 P2",
            "tasks": "Understands the `i & (-i)` bit trick that drives Fenwick Tree traversal.",
            "achievement": "Understands the `i & (-i)` bit trick that drives Fenwick Tree traversal.",
            "day": 121
          },
          {
            "topic": "Fenwick Tree: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟢 P2",
            "tasks": "Can implement Fenwick Tree from scratch and justify choosing it over a Segment Tree.",
            "achievement": "Can implement Fenwick Tree from scratch and justify choosing it over a Segment Tree.",
            "day": 122
          },
          {
            "topic": "Disjoint Set Union: Path Compression & Union by Rank (Medium, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Has a working `find()` function with path compression.",
            "achievement": "Has a working `find()` function with path compression.",
            "day": 123
          },
          {
            "topic": "DSU: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟢 P2",
            "tasks": "Has a fully optimized DSU achieving near-O(1) amortized find/union.",
            "achievement": "Has a fully optimized DSU achieving near-O(1) amortized find/union.",
            "day": 124
          },
          {
            "topic": "HANDS-ON LAB: Trie-Based Autocomplete Extension + Phase Cheat Sheet",
            "priority": "🟡 P1",
            "tasks": "Can recite the full phase cheat sheet and confidently pick the right tree-based structure for any new problem.",
            "achievement": "Can recite the full phase cheat sheet and confidently pick the right tree-based structure for any new problem.",
            "day": 125
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 126
          }
        ]
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
            "achievement": "Can choose the correct representation for a given problem based on density and required operations.",
            "day": 127
          },
          {
            "topic": "Breadth-First Search (BFS) (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement BFS and use it for shortest path in an unweighted graph.",
            "achievement": "Can implement BFS and use it for shortest path in an unweighted graph.",
            "day": 128
          },
          {
            "topic": "Depth-First Search (DFS) (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement DFS both ways and explain when iterative DFS is necessary.",
            "achievement": "Can implement DFS both ways and explain when iterative DFS is necessary.",
            "day": 129
          },
          {
            "topic": "Topological Sort: Kahn's Algorithm (Medium, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Understands why nodes with in-degree 0 are the correct starting points.",
            "achievement": "Understands why nodes with in-degree 0 are the correct starting points.",
            "day": 130
          },
          {
            "topic": "Topological Sort: DFS-Based + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can implement topological sort both ways and detect a cycle in the process.",
            "achievement": "Can implement topological sort both ways and detect a cycle in the process.",
            "day": 131
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 132
          },
          {
            "topic": "Bipartite Graph Check (Light)",
            "priority": "🟡 P1",
            "tasks": "Can implement a bipartite check and explain why an odd cycle makes a graph non-bipartite.",
            "achievement": "Can implement a bipartite check and explain why an odd cycle makes a graph non-bipartite.",
            "day": 133
          },
          {
            "topic": "Dijkstra's Algorithm: Setup & PriorityQueue Approach (Heavy, Day 1/3)",
            "priority": "🔴 P0",
            "tasks": "Understands edge relaxation and why Dijkstra fails with negative weights.",
            "achievement": "Understands edge relaxation and why Dijkstra fails with negative weights.",
            "day": 134
          },
          {
            "topic": "Dijkstra's Algorithm: Finish Implementation (Heavy, Day 2/3)",
            "priority": "🟡 P1",
            "tasks": "Has a fully working Dijkstra's implementation using `PriorityQueue<int[]>`.",
            "achievement": "Has a fully working Dijkstra's implementation using `PriorityQueue<int[]>`.",
            "day": 135
          },
          {
            "topic": "Dijkstra's Algorithm: Practice (Heavy, Day 3/3)",
            "priority": "🟡 P1",
            "tasks": "Can adapt Dijkstra's to non-standard variants (probability maximization, K-stop constraints).",
            "achievement": "Can adapt Dijkstra's to non-standard variants (probability maximization, K-stop constraints).",
            "day": 136
          },
          {
            "topic": "Bellman-Ford Algorithm (Medium, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Understands why exactly V-1 rounds of relaxation guarantee correctness.",
            "achievement": "Understands why exactly V-1 rounds of relaxation guarantee correctness.",
            "day": 137
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 138
          },
          {
            "topic": "Bellman-Ford: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Can implement Bellman-Ford and correctly detect negative cycles.",
            "achievement": "Can implement Bellman-Ford and correctly detect negative cycles.",
            "day": 139
          },
          {
            "topic": "Floyd-Warshall Algorithm (Medium, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Understands why the loop order (k outermost) is essential for correctness.",
            "achievement": "Understands why the loop order (k outermost) is essential for correctness.",
            "day": 140
          },
          {
            "topic": "Floyd-Warshall: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Can implement Floyd-Warshall in O(V³) and justify when it beats V calls to Dijkstra.",
            "achievement": "Can implement Floyd-Warshall in O(V³) and justify when it beats V calls to Dijkstra.",
            "day": 141
          },
          {
            "topic": "Minimum Spanning Tree: Kruskal's Algorithm (Medium, Day 1/2)",
            "priority": "🟢 P2",
            "tasks": "Understands why sorting edges by weight first makes the greedy choice correct.",
            "achievement": "Understands why sorting edges by weight first makes the greedy choice correct.",
            "day": 142
          },
          {
            "topic": "Kruskal's: Finish + Prim's Algorithm Intro (Medium, Day 2/2)",
            "priority": "🟢 P2",
            "tasks": "Has a working Kruskal's implementation and understands Prim's core mechanic.",
            "achievement": "Has a working Kruskal's implementation and understands Prim's core mechanic.",
            "day": 143
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 144
          },
          {
            "topic": "Prim's Algorithm: Finish + Practice",
            "priority": "🟢 P2",
            "tasks": "Can implement both Kruskal's and Prim's, and explain sparse vs dense graph tradeoffs.",
            "achievement": "Can implement both Kruskal's and Prim's, and explain sparse vs dense graph tradeoffs.",
            "day": 145
          },
          {
            "topic": "Cycle Detection: Directed & Undirected Graphs (Light)",
            "priority": "🟡 P1",
            "tasks": "Can implement cycle detection for both graph types.",
            "achievement": "Can implement cycle detection for both graph types.",
            "day": 146
          },
          {
            "topic": "Strongly Connected Components: Tarjan's/Kosaraju's (Heavy, Day 1/2)",
            "priority": "🟢 P2",
            "tasks": "Understands what a low-link value represents and how it identifies an SCC root.",
            "achievement": "Understands what a low-link value represents and how it identifies an SCC root.",
            "day": 147
          },
          {
            "topic": "SCC: Finish Implementation (Heavy, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Has a working SCC detection algorithm and can trace it by hand.",
            "achievement": "Has a working SCC detection algorithm and can trace it by hand.",
            "day": 148
          },
          {
            "topic": "Graph Bridges: Tarjan's Bridge Discovery (Medium, Day 1/2)",
            "priority": "🟢 P2",
            "tasks": "Understands the bridge condition and why it identifies a critical edge.",
            "achievement": "Understands the bridge condition and why it identifies a critical edge.",
            "day": 149
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 150
          },
          {
            "topic": "Bridges: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Can implement Tarjan's Bridge Discovery and solve Critical Connections in a Network.",
            "achievement": "Can implement Tarjan's Bridge Discovery and solve Critical Connections in a Network.",
            "day": 151
          },
          {
            "topic": "HANDS-ON LAB: Network Router Optimizer + Phase Cheat Sheet",
            "priority": "🟡 P1",
            "tasks": "Can recite the full Graphs cheat sheet and select the right algorithm family for any new graph problem.",
            "achievement": "Can recite the full Graphs cheat sheet and select the right algorithm family for any new graph problem.",
            "day": 152
          }
        ]
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
            "achievement": "Can sketch an exchange-argument proof for why a greedy strategy is or isn't correct.",
            "day": 153
          },
          {
            "topic": "Activity Selection / Interval Scheduling (Light)",
            "priority": "🟡 P1",
            "tasks": "Can solve Activity Selection optimally and explain why sorting by start time is wrong.",
            "achievement": "Can solve Activity Selection optimally and explain why sorting by start time is wrong.",
            "day": 154
          },
          {
            "topic": "Merge Intervals (Light)",
            "priority": "🟡 P1",
            "tasks": "Can implement Merge Intervals in O(N log N).",
            "achievement": "Can implement Merge Intervals in O(N log N).",
            "day": 155
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 156
          },
          {
            "topic": "Jump Game Variants (Medium, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Understands the \"farthest reachable\" greedy invariant before finishing the code.",
            "achievement": "Understands the \"farthest reachable\" greedy invariant before finishing the code.",
            "day": 157
          },
          {
            "topic": "Jump Game: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Can solve Jump Game II in O(N) using greedy range tracking.",
            "achievement": "Can solve Jump Game II in O(N) using greedy range tracking.",
            "day": 158
          },
          {
            "topic": "Huffman Coding (Medium, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Can construct a Huffman tree by hand for a small frequency table.",
            "achievement": "Can construct a Huffman tree by hand for a small frequency table.",
            "day": 159
          },
          {
            "topic": "Huffman Coding: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Has a complete Huffman encoder producing a valid prefix-free code table.",
            "achievement": "Has a complete Huffman encoder producing a valid prefix-free code table.",
            "day": 160
          },
          {
            "topic": "Task Scheduling: Job Sequencing & Task Scheduler (Medium, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Understands the formula-based approach to Task Scheduler.",
            "achievement": "Understands the formula-based approach to Task Scheduler.",
            "day": 161
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 162
          },
          {
            "topic": "Task Scheduling: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Can implement both task-scheduling variants.",
            "achievement": "Can implement both task-scheduling variants.",
            "day": 163
          },
          {
            "topic": "Fractional Knapsack + Gas Station (Light)",
            "priority": "🟡 P1",
            "tasks": "Can explain why Fractional Knapsack is greedy-solvable but 0/1 Knapsack is not, and solve Gas Station in O(N).",
            "achievement": "Can explain why Fractional Knapsack is greedy-solvable but 0/1 Knapsack is not, and solve Gas Station in O(N).",
            "day": 164
          },
          {
            "topic": "Partitioning & Assignment Problems (Light)",
            "priority": "🟡 P1",
            "tasks": "Can identify the correct sorting criterion for a new greedy partitioning problem.",
            "achievement": "Can identify the correct sorting criterion for a new greedy partitioning problem.",
            "day": 165
          },
          {
            "topic": "Advanced Greedy Problems + Phase Cheat Sheet",
            "priority": "🟡 P1",
            "tasks": "Can distinguish whether a new problem is provably greedy or secretly requires DP.",
            "achievement": "Can distinguish whether a new problem is provably greedy or secretly requires DP.",
            "day": 166
          }
        ]
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
            "achievement": "Can convert any brute-force recursion to memoized, then tabulated, as a repeatable process.",
            "day": 167
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 168
          },
          {
            "topic": "1D DP: Climbing Stairs & House Robber (Light)",
            "priority": "🔴 P0",
            "tasks": "Can write the House Robber transition and generalize it to \"skip-adjacent\" problems.",
            "achievement": "Can write the House Robber transition and generalize it to \"skip-adjacent\" problems.",
            "day": 169
          },
          {
            "topic": "1D DP: House Robber II & Min Cost Climbing Stairs (Light)",
            "priority": "🔴 P0",
            "tasks": "Can adapt a linear 1D DP to a circular-array variant by running it twice.",
            "achievement": "Can adapt a linear 1D DP to a circular-array variant by running it twice.",
            "day": 170
          },
          {
            "topic": "0/1 Knapsack: 2D DP Table (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Has a working 2D Knapsack DP table and can read off the optimal value.",
            "achievement": "Has a working 2D Knapsack DP table and can read off the optimal value.",
            "day": 171
          },
          {
            "topic": "0/1 Knapsack: Space Optimization + Practice (Medium, Day 2/2)",
            "priority": "🔴 P0",
            "tasks": "Can implement 0/1 Knapsack with O(capacity) space instead of O(N × capacity).",
            "achievement": "Can implement 0/1 Knapsack with O(capacity) space instead of O(N × capacity).",
            "day": 172
          },
          {
            "topic": "Unbounded Knapsack & Coin Change (Medium, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Understands why forward iteration allows item reuse while reverse iteration prevents it.",
            "achievement": "Understands why forward iteration allows item reuse while reverse iteration prevents it.",
            "day": 173
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 174
          },
          {
            "topic": "Coin Change: Finish + Subset Sum Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Can distinguish \"minimum coins\" DP from \"count combinations\" DP.",
            "achievement": "Can distinguish \"minimum coins\" DP from \"count combinations\" DP.",
            "day": 175
          },
          {
            "topic": "DP on Strings: Longest Common Subsequence (Light)",
            "priority": "🔴 P0",
            "tasks": "Can implement LCS in O(N×M) and distinguish \"subsequence\" vs \"substring\" DP.",
            "achievement": "Can implement LCS in O(N×M) and distinguish \"subsequence\" vs \"substring\" DP.",
            "day": 176
          },
          {
            "topic": "DP on Strings: Longest Palindromic Subsequence (Light)",
            "priority": "🔴 P0",
            "tasks": "Can solve LPS by recognizing it as a disguised LCS problem.",
            "achievement": "Can solve LPS by recognizing it as a disguised LCS problem.",
            "day": 177
          },
          {
            "topic": "Edit Distance (Medium, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Can write all 3 transition cases (insert/delete/replace) by hand.",
            "achievement": "Can write all 3 transition cases (insert/delete/replace) by hand.",
            "day": 178
          },
          {
            "topic": "Edit Distance: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Can implement Edit Distance in O(N×M) cold.",
            "achievement": "Can implement Edit Distance in O(N×M) cold.",
            "day": 179
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 180
          },
          {
            "topic": "Wildcard & Regex Matching (Heavy, Day 1/2)",
            "priority": "🟢 P2",
            "tasks": "Understands the special handling required for `*` before finishing code.",
            "achievement": "Understands the special handling required for `*` before finishing code.",
            "day": 181
          },
          {
            "topic": "Wildcard/Regex Matching: Finish + Practice (Heavy, Day 2/2)",
            "priority": "🟢 P2",
            "tasks": "Can implement both Wildcard and Regex matching DP.",
            "achievement": "Can implement both Wildcard and Regex matching DP.",
            "day": 182
          },
          {
            "topic": "DP on Trees: House Robber III (Heavy, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Understands why a single return value per node is insufficient.",
            "achievement": "Understands why a single return value per node is insufficient.",
            "day": 183
          },
          {
            "topic": "DP on Trees: Diameter & Max Path Sum (Heavy, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Can solve House Robber III and Max Path Sum via single-pass post-order DP.",
            "achievement": "Can solve House Robber III and Max Path Sum via single-pass post-order DP.",
            "day": 184
          },
          {
            "topic": "Interval DP: Matrix Chain Multiplication (Heavy, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Can write the MCM transition from memory.",
            "achievement": "Can write the MCM transition from memory.",
            "day": 185
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 186
          },
          {
            "topic": "Interval DP: Burst Balloons & Palindrome Partitioning (Heavy, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Can recognize the interval-DP signature in a new problem.",
            "achievement": "Can recognize the interval-DP signature in a new problem.",
            "day": 187
          },
          {
            "topic": "Bitmask DP: Traveling Salesman Problem (Heavy, Day 1/2)",
            "priority": "🟢 P2",
            "tasks": "Understands why bitmask DP is only feasible for small N (typically ≤ 20).",
            "achievement": "Understands why bitmask DP is only feasible for small N (typically ≤ 20).",
            "day": 188
          },
          {
            "topic": "Bitmask DP: Finish + Practice (Heavy, Day 2/2)",
            "priority": "🟢 P2",
            "tasks": "Can implement TSP via Bitmask DP in O(N² × 2^N).",
            "achievement": "Can implement TSP via Bitmask DP in O(N² × 2^N).",
            "day": 189
          },
          {
            "topic": "Advanced DP Practice Day 1 (Light)",
            "priority": "🟢 P2",
            "tasks": "Can classify any new DP problem within the first minute of reading it.",
            "achievement": "Can classify any new DP problem within the first minute of reading it.",
            "day": 190
          },
          {
            "topic": "HANDS-ON LAB: Coin Change Optimization (Light)",
            "priority": "🟡 P1",
            "tasks": "Can complete the Coin Change Optimization lab within its suggested time.",
            "achievement": "Can complete the Coin Change Optimization lab within its suggested time.",
            "day": 191
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 192
          },
          {
            "topic": "Phase Cheat Sheet + Mixed DP Review",
            "priority": "🟡 P1",
            "tasks": "Can recite the full DP phase cheat sheet under time pressure.",
            "achievement": "Can recite the full DP phase cheat sheet under time pressure.",
            "day": 193
          }
        ]
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
            "achievement": "Understands why HashMap alone and DLL alone each fail individually.",
            "day": 194
          },
          {
            "topic": "LRU Cache: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Has a fully working hand-rolled LRU Cache, plus a `LinkedHashMap`-based version.",
            "achievement": "Has a fully working hand-rolled LRU Cache, plus a `LinkedHashMap`-based version.",
            "day": 195
          },
          {
            "topic": "LFU Cache: Design & Frequency Buckets (Heavy, Day 1/2)",
            "priority": "🟡 P1",
            "tasks": "Understands the frequency-bucket design before finishing code.",
            "achievement": "Understands the frequency-bucket design before finishing code.",
            "day": 196
          },
          {
            "topic": "LFU Cache: Finish + Practice (Heavy, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Has a fully working LFU Cache achieving true O(1) get/put.",
            "achievement": "Has a fully working LFU Cache achieving true O(1) get/put.",
            "day": 197
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 198
          },
          {
            "topic": "Min/Max Stack Revisited + Design Twitter (Medium, Day 1/2)",
            "priority": "🔴 P0",
            "tasks": "Understands why a max-heap merge is the efficient approach to `getNewsFeed`.",
            "achievement": "Understands why a max-heap merge is the efficient approach to `getNewsFeed`.",
            "day": 199
          },
          {
            "topic": "Design Twitter: Finish + Practice (Medium, Day 2/2)",
            "priority": "🟡 P1",
            "tasks": "Has a complete working Design Twitter with efficient `getNewsFeed`.",
            "achievement": "Has a complete working Design Twitter with efficient `getNewsFeed`.",
            "day": 200
          },
          {
            "topic": "Browser History + Hit Counter/Rate Limiter (Light)",
            "priority": "🟡 P1",
            "tasks": "Can implement a sliding-window rate limiter and explain fixed-window burst abuse.",
            "achievement": "Can implement a sliding-window rate limiter and explain fixed-window burst abuse.",
            "day": 201
          },
          {
            "topic": "HANDS-ON LAB: LFU Cache Extension + Phase Cheat Sheet",
            "priority": "🟡 P1",
            "tasks": "Can design and defend any \"design X\" problem end-to-end in a mock interview.",
            "achievement": "Can design and defend any \"design X\" problem end-to-end in a mock interview.",
            "day": 202
          }
        ]
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
            "achievement": "Can implement Euclidean GCD in both forms and derive LCM.",
            "day": 203
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 204
          },
          {
            "topic": "Sieve of Eratosthenes (Light)",
            "priority": "🟢 P2",
            "tasks": "Can implement the Sieve and explain its speed advantage.",
            "achievement": "Can implement the Sieve and explain its speed advantage.",
            "day": 205
          },
          {
            "topic": "Fast (Binary) Exponentiation (Light)",
            "priority": "🟢 P2",
            "tasks": "Can implement fast exponentiation in O(log N).",
            "achievement": "Can implement fast exponentiation in O(log N).",
            "day": 206
          },
          {
            "topic": "Modular Arithmetic: Add/Subtract/Multiply (Light)",
            "priority": "🟢 P2",
            "tasks": "Can implement overflow-safe modular arithmetic helpers.",
            "achievement": "Can implement overflow-safe modular arithmetic helpers.",
            "day": 207
          },
          {
            "topic": "Modular Multiplicative Inverse via Fermat's Little Theorem (Medium, Day 1/2)",
            "priority": "🟢 P2",
            "tasks": "Understands why Fermat's Little Theorem requires a PRIME modulus.",
            "achievement": "Understands why Fermat's Little Theorem requires a PRIME modulus.",
            "day": 208
          },
          {
            "topic": "Modular Inverse: Computing nCr mod p + Practice (Medium, Day 2/2)",
            "priority": "🟢 P2",
            "tasks": "Can compute nCr mod a large prime in O(1) per query after O(N) precomputation.",
            "achievement": "Can compute nCr mod a large prime in O(1) per query after O(N) precomputation.",
            "day": 209
          },
          {
            "topic": "**Buffer/Revision Day**",
            "priority": "-",
            "tasks": "-",
            "achievement": "-",
            "day": 210
          },
          {
            "topic": "Bit Manipulation: Core Tricks + HANDS-ON LAB: Bitwise Division Engine",
            "priority": "🟢 P2",
            "tasks": "Can implement bitwise integer division and recite the full phase cheat sheet.",
            "achievement": "Can implement bitwise integer division and recite the full phase cheat sheet.",
            "day": 211
          }
        ]
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
            "achievement": "Can map any previously-solved problem to one of the 15 patterns instantly and apply the full interview framework live.",
            "day": 212
          },
          {
            "topic": "DSA-to-Backend Pattern Bridge + Final Review",
            "priority": "🟡 P1",
            "tasks": "Can answer \"where would you use [DSA structure] in production?\" with a concrete named example for at least 6 structures.",
            "achievement": "Can answer \"where would you use [DSA structure] in production?\" with a concrete named example for at least 6 structures.",
            "day": 213
          }
        ]
      }
    ]
  }
];
