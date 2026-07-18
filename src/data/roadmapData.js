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
    "days": 388,
    "color": "teal",
    "phases": [
      {
        "id": "7-1",
        "title": "FOUNDATIONS",
        "days": "Days 1–15",
        "items": [
          {
            "day": 1,
            "topic": "Big O, Big Theta, Big Omega (Light)",
            "tasks": "Learn: Asymptotic notation — upper bound (O), lower bound (Ω), tight bound (Θ). Growth curve visual diagrams. | Code: None — conceptual day. | Practice: 5 complexity-classification questions (given code, state its Big O).",
            "achievement": "Can classify any short code snippet's time complexity and explain worst-case vs average-case.",
            "priority": "MUST KNOW"
          },
          {
            "day": 2,
            "topic": "Nested Loops & Recursive Complexity (Light)",
            "tasks": "Learn: Complexity of nested loops, recursive complexity via recurrence relations (basic intro, full recursion tree later). | Code: Trace 3 nested-loop snippets by hand. | Practice: 5 problems — derive complexity from code.",
            "achievement": "Can derive Big O for nested loops and simple recursive calls without running the code.",
            "priority": "MUST KNOW"
          },
          {
            "day": 3,
            "topic": "Java Toolkit for DSA: Arrays & Collections (Light)",
            "tasks": "Learn: Java array/Collection landscape relevant to DSA — when to use `int[]` vs `ArrayList<Integer>`, memory layout comparison. | Code: Write equivalent loops using both primitive arrays and ArrayLists; time them. | Practice: 4 small syntax exercises.",
            "achievement": "Can explain why `int[]` outperforms `ArrayList<Integer>` for tight loops, citing memory layout.",
            "priority": "MUST KNOW"
          },
          {
            "day": 4,
            "topic": "Java Toolkit: Comparator Tricks (Light)",
            "tasks": "Learn: Comparator chaining (`thenComparing`), lambda comparators, custom sort orders. | Code: Write 3 different comparators for the same object (single-field, multi-field, reversed). | Practice: 3 sorting-with-comparator problems.",
            "achievement": "Can write a chained multi-field comparator in one line using lambda syntax.",
            "priority": "MUST KNOW"
          },
          {
            "topic": "Java Performance Traps: Autoboxing & Overflow (Medium, Day 1/2) (Part 1: Concept & Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study the theoretical foundations and internal mechanics of: Learn: Autoboxing/unboxing costs, Integer cache (-128 to 127), integer overflow scenarios in DSA problems. | Code: Reproduce the Integer cache gotcha (`==` vs `.equals()` for boxed Integers). | Practice: 3 problems involving overflow-prone calculations (e.g., mid-point calculation in binary search).. Focus on system architecture and key diagrams.",
            "achievement": "Understands the core theory and conceptual model of Java Performance Traps: Autoboxing & Overflow (Medium, Day 1/2).",
            "day": 5
          },
          {
            "topic": "Java Performance Traps: Autoboxing & Overflow (Medium, Day 1/2) (Part 2: Hands-on Lab)",
            "priority": "MUST KNOW",
            "tasks": "Implement code, run configuration scripts, or build labs for: Learn: Autoboxing/unboxing costs, Integer cache (-128 to 127), integer overflow scenarios in DSA problems. | Code: Reproduce the Integer cache gotcha (`==` vs `.equals()` for boxed Integers). | Practice: 3 problems involving overflow-prone calculations (e.g., mid-point calculation in binary search).. Commit your code/notes to your GitHub repository in your backend-ai-mastery repo.",
            "achievement": "Can identify and fix an overflow bug in a binary search midpoint calculation.",
            "day": 6
          },
          {
            "day": 7,
            "topic": "Weekly Buffer & Revision Day (Week 1)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "day": 8,
            "topic": "Java Performance Traps: Practice Day (Medium, Day 2/2)",
            "tasks": "Learn: Review JDK built-in performance traps table — autoboxing in loops, unnecessary object creation. | Code: Refactor a deliberately inefficient snippet to use primitives. | Practice: 5 mixed problems combining comparator + overflow-safety concepts.",
            "achievement": "Can review a code snippet and flag 3 distinct Java-specific performance traps.",
            "priority": "MUST KNOW"
          },
          {
            "day": 9,
            "topic": "Hashing Basics: HashMap & HashSet (Light)",
            "tasks": "Learn: HashMap/HashSet internals at a usage level (not full collision internals yet — that's Day 14 in Linear DS). Frequency counting fundamentals. | Code: Implement a frequency-count function using HashMap. | Practice: 4 frequency-counting problems (e.g., first unique character).",
            "achievement": "Can solve any \"count occurrences of X\" problem using HashMap in O(N).",
            "priority": "MUST KNOW"
          },
          {
            "day": 10,
            "topic": "Hashing Practice Day (Light)",
            "tasks": "Learn: Review — when to reach for HashMap vs HashSet vs frequency array. | Code: None — pure practice day. | Practice: 5 hashing problems (mix of HashMap/HashSet use cases).",
            "achievement": "Can decide within seconds whether a problem needs HashMap, HashSet, or a fixed-size frequency array.",
            "priority": "MUST KNOW"
          },
          {
            "topic": "HANDS-ON LAB: Complexity & JVM Profiling + Phase Cheat Sheet (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: Review the full Foundations cheat sheet. | Code: Complete the timed JVM profiling exercises. | Practice: Timed mixed-review quiz (5 questions across Days 1–8)..",
            "achievement": "Mastered the high-level architecture and design of HANDS-ON LAB: Complexity & JVM Profiling + Phase Cheat Sheet.",
            "day": 11
          },
          {
            "topic": "HANDS-ON LAB: Complexity & JVM Profiling + Phase Cheat Sheet (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: Review the full Foundations cheat sheet. | Code: Complete the timed JVM profiling exercises. | Practice: Timed mixed-review quiz (5 questions across Days 1–8).. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for HANDS-ON LAB: Complexity & JVM Profiling + Phase Cheat Sheet.",
            "day": 12
          },
          {
            "topic": "HANDS-ON LAB: Complexity & JVM Profiling + Phase Cheat Sheet (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: Review the full Foundations cheat sheet. | Code: Complete the timed JVM profiling exercises. | Practice: Timed mixed-review quiz (5 questions across Days 1–8)..",
            "achievement": "Hardened the implementation of HANDS-ON LAB: Complexity & JVM Profiling + Phase Cheat Sheet against production-level failures.",
            "day": 13
          },
          {
            "day": 14,
            "topic": "Weekly Buffer & Revision Day (Week 2)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "HANDS-ON LAB: Complexity & JVM Profiling + Phase Cheat Sheet (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: Review the full Foundations cheat sheet. | Code: Complete the timed JVM profiling exercises. | Practice: Timed mixed-review quiz (5 questions across Days 1–8)..",
            "achievement": "Can recite the Foundations cheat sheet cold and complete the lab within its suggested time.",
            "day": 15
          }
        ]
      },
      {
        "id": "7-2",
        "title": "LINEAR DATA STRUCTURES",
        "days": "Days 16–31",
        "items": [
          {
            "day": 16,
            "topic": "Arrays: Internals & Memory Layout (Light)",
            "tasks": "Learn: Contiguous memory layout, why array access is O(1), 2D/jagged arrays. | Code: Implement matrix operations (transpose, rotate) using 2D arrays. | Practice: 3 array-traversal problems.",
            "achievement": "Can explain why array access is O(1) and implement a 2D matrix rotation in-place.",
            "priority": "MUST KNOW"
          },
          {
            "day": 17,
            "topic": "Dynamic Array From Scratch (Medium, Day 1/2)",
            "tasks": "Learn: How ArrayList resizes internally — growth factor, amortized O(1) insertion. | Code: Begin implementing a dynamic array class from scratch (resize logic). | Practice: None yet — finish implementation first.",
            "achievement": "Has a working `resize()` method that doubles capacity when full.",
            "priority": "MUST KNOW"
          },
          {
            "day": 18,
            "topic": "Dynamic Array Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review gotchas — shrinking strategy, amortized analysis proof sketch. | Code: Finish and test the dynamic array class (add, get, remove, resize). | Practice: 5 array problems (e.g., rotate array, move zeroes, remove duplicates in-place).",
            "achievement": "Has a fully working hand-rolled dynamic array and can solve in-place array manipulation problems.",
            "priority": "MUST KNOW"
          },
          {
            "day": 19,
            "topic": "Linked Lists: Singly Linked List (Light)",
            "tasks": "Learn: Node structure, pointer manipulation, insertion/deletion at head/tail/middle. | Code: Implement a singly linked list (insert, delete, traverse). | Practice: 3 problems (reverse a linked list, find middle node).",
            "achievement": "Can implement singly linked list insert/delete and reverse it iteratively.",
            "priority": "MUST KNOW"
          },
          {
            "day": 20,
            "topic": "Doubly & Circular Linked Lists (Medium, Day 1/2)",
            "tasks": "Learn: Bidirectional traversal, sentinel nodes, circular queue using linked lists. | Code: Begin implementing a doubly linked list with sentinel head/tail nodes. | Practice: None yet.",
            "achievement": "Sentinel-node DLL skeleton compiles and supports basic insert.",
            "priority": "MUST KNOW"
          },
          {
            "day": 21,
            "topic": "Weekly Buffer & Revision Day (Week 3)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "day": 22,
            "topic": "Doubly Linked List Practice + Cycle Detection (Medium, Day 2/2)",
            "tasks": "Learn: Floyd's Cycle Detection (Tortoise & Hare) — finding cycle, finding cycle start, finding middle node. | Code: Finish the DLL implementation; implement Floyd's algorithm. | Practice: 4 problems (detect cycle, find cycle start, intersection of two linked lists).",
            "achievement": "Can implement Floyd's Cycle Detection and explain why the two pointers must meet inside the cycle.",
            "priority": "MUST KNOW"
          },
          {
            "day": 23,
            "topic": "Stacks: LIFO Fundamentals (Light)",
            "tasks": "Learn: Array-based vs linked-list-based stack implementation, push/pop/peek, overflow/underflow. | Code: Implement a stack from scratch using an array. | Practice: 2 problems (valid parentheses).",
            "achievement": "Can implement a stack from scratch and solve Valid Parentheses in O(N).",
            "priority": "MUST KNOW"
          },
          {
            "day": 24,
            "topic": "Stack Applications: Expression Evaluation (Medium, Day 1/2)",
            "tasks": "Learn: Infix/prefix/postfix notation, expression evaluation using two stacks (operator + operand). | Code: Begin implementing an infix expression evaluator. | Practice: None yet.",
            "achievement": "Has a working operator-precedence parsing skeleton.",
            "priority": "MUST KNOW"
          },
          {
            "day": 25,
            "topic": "Min Stack + Stack Practice (Medium, Day 2/2)",
            "tasks": "Learn: Min Stack design (O(1) min extraction using an auxiliary stack). | Code: Finish expression evaluator; implement Min Stack. | Practice: 3 problems (Min Stack, Max Stack, evaluate RPN).",
            "achievement": "Can implement Min Stack with O(1) push/pop/getMin.",
            "priority": "MUST KNOW"
          },
          {
            "day": 26,
            "topic": "Queues: FIFO Fundamentals (Light)",
            "tasks": "Learn: Simple queue, circular queue, array/list-based implementations. | Code: Implement a circular queue from scratch (handling wrap-around). | Practice: 2 problems (implement queue using stacks, or vice versa).",
            "achievement": "Can implement a circular queue without wasting array slots.",
            "priority": "MUST KNOW"
          },
          {
            "day": 27,
            "topic": "Deque (Double-Ended Queue) (Light)",
            "tasks": "Learn: Deque as both stack and queue, implementation via doubly linked list, `ArrayDeque` preference over `Stack`/`LinkedList` in Java. | Code: Implement a basic deque supporting push/pop from both ends. | Practice: 2 problems using `ArrayDeque`.",
            "achievement": "Can explain why `ArrayDeque` is preferred over `java.util.Stack` in production Java code.",
            "priority": "MUST KNOW"
          },
          {
            "day": 28,
            "topic": "Weekly Buffer & Revision Day (Week 4)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "day": 29,
            "topic": "Hash Tables: Internals — Hash Functions & Collisions (Light)",
            "tasks": "Learn: Hash function design, index calculation, load factor concept. | Code: Implement a basic hash function for strings. | Practice: 2 conceptual problems on hash distribution quality.",
            "achievement": "Can design a hash function and explain what makes one \"good\" (uniform distribution, low collision rate).",
            "priority": "MUST KNOW"
          },
          {
            "day": 30,
            "topic": "Collision Resolution: Chaining vs Open Addressing (Medium, Day 1/2)",
            "tasks": "Learn: Chaining (linked list/tree buckets), Open Addressing (linear probing, quadratic probing, double hashing). | Code: Begin implementing a HashMap from scratch using chaining. | Practice: None yet.",
            "achievement": "Hash table skeleton with chaining-based bucket array compiles and supports insert.",
            "priority": "MUST KNOW"
          },
          {
            "day": 31,
            "topic": "Hash Table From Scratch + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review resizing/rehashing triggers tied to load factor. | Code: Finish hand-rolled HashMap (get, put, resize on load factor breach). | Practice: 4 hashing problems (group anagrams, subarray with given sum using hashmap).",
            "achievement": "Has a working hand-rolled HashMap with chaining and automatic resizing.",
            "priority": "MUST KNOW"
          }
        ]
      },
      {
        "id": "7-3",
        "title": "SEARCHING & SORTING",
        "days": "Days 32–52",
        "items": [
          {
            "day": 32,
            "topic": "Binary Search: The Basic Template (Light)",
            "tasks": "Learn: Classic binary search, avoiding off-by-one errors, loop invariants. | Code: Implement binary search from memory, twice (iterative + recursive). | Practice: 2 problems (basic search, search insert position).",
            "achievement": "Can write binary search from memory without bugs, in both forms.",
            "priority": "MUST KNOW"
          },
          {
            "day": 33,
            "topic": "Binary Search: Lower Bound & Upper Bound (Light)",
            "tasks": "Learn: Lower bound (first occurrence) and upper bound (last occurrence / insertion point) variants. | Code: Implement both lower-bound and upper-bound binary search. | Practice: 3 problems (first/last occurrence, count occurrences in sorted array).",
            "achievement": "Can implement lower/upper bound binary search and use them together to count occurrences in O(log N).",
            "priority": "MUST KNOW"
          },
          {
            "day": 34,
            "topic": "Binary Search on Answer Space (Medium, Day 1/2)",
            "tasks": "Learn: The \"binary search on answer\" pattern — monotonic predicate functions, search space ≠ input array. | Code: Begin implementing Koko Eating Bananas using this pattern. | Practice: None yet.",
            "achievement": "Can articulate the monotonic predicate for Koko Eating Bananas before finishing the code.",
            "priority": "MUST KNOW"
          },
          {
            "day": 35,
            "topic": "Weekly Buffer & Revision Day (Week 5)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "day": 36,
            "topic": "Binary Search on Answer: Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review — Capacity to Ship Packages, Allocate Books as more \"search on answer\" examples. | Code: Finish Koko Eating Bananas. | Practice: 3 problems (Capacity to Ship Packages, Allocate Books, Split Array Largest Sum).",
            "achievement": "Can recognize a \"search on answer\" problem within the first read and set up the feasibility check correctly.",
            "priority": "MUST KNOW"
          },
          {
            "day": 37,
            "topic": "Sorting Fundamentals: Bubble, Selection, Insertion (Light)",
            "tasks": "Learn: O(N²) sorts — mechanics, stability, in-place behavior. | Code: Implement all three from scratch. | Practice: 2 problems (sort colors / Dutch national flag as an insertion-sort-adjacent problem).",
            "achievement": "Can implement all three O(N²) sorts and state which are stable.",
            "priority": "MUST KNOW"
          },
          {
            "day": 38,
            "topic": "Merge Sort (Medium, Day 1/2)",
            "tasks": "Learn: Divide & conquer, O(N log N), stability, O(N) auxiliary space requirement. | Code: Begin implementing merge sort (merge function first, then recursive split). | Practice: None yet.",
            "achievement": "Merge function correctly merges two sorted halves in O(N).",
            "priority": "MUST KNOW"
          },
          {
            "day": 39,
            "topic": "Merge Sort: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review — applications of merge sort (counting inversions). | Code: Finish full merge sort implementation. | Practice: 3 problems (sort an array, count inversions using merge sort).",
            "achievement": "Has a fully working merge sort and can use it to count array inversions in O(N log N).",
            "priority": "MUST KNOW"
          },
          {
            "topic": "Quick Sort (Medium, Day 1/2) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: Pivot selection strategies, average O(N log N) vs worst O(N²), why it's unstable but in-place. | Code: Begin implementing quicksort (partition function first). | Practice: None yet..",
            "achievement": "Mastered the high-level architecture and design of Quick Sort (Medium, Day 1/2).",
            "day": 40
          },
          {
            "topic": "Quick Sort (Medium, Day 1/2) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: Pivot selection strategies, average O(N log N) vs worst O(N²), why it's unstable but in-place. | Code: Begin implementing quicksort (partition function first). | Practice: None yet.. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for Quick Sort (Medium, Day 1/2).",
            "day": 41
          },
          {
            "day": 42,
            "topic": "Weekly Buffer & Revision Day (Week 6)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Quick Sort (Medium, Day 1/2) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: Pivot selection strategies, average O(N log N) vs worst O(N²), why it's unstable but in-place. | Code: Begin implementing quicksort (partition function first). | Practice: None yet..",
            "achievement": "Hardened the implementation of Quick Sort (Medium, Day 1/2) against production-level failures.",
            "day": 43
          },
          {
            "topic": "Quick Sort (Medium, Day 1/2) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: Pivot selection strategies, average O(N log N) vs worst O(N²), why it's unstable but in-place. | Code: Begin implementing quicksort (partition function first). | Practice: None yet..",
            "achievement": "Partition function correctly places the pivot and partitions the array around it.",
            "day": 44
          },
          {
            "day": 45,
            "topic": "Quick Sort: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Randomized pivot selection to avoid worst-case on adversarial/sorted input. | Code: Finish quicksort with randomized pivot. | Practice: 3 problems (Kth largest element using quickselect, sort an array).",
            "achievement": "Can implement Quickselect (partial quicksort) to find the Kth largest element in average O(N).",
            "priority": "MUST KNOW"
          },
          {
            "day": 46,
            "topic": "Heap Sort (Light)",
            "tasks": "Learn: In-place sorting using a Max-Heap, O(N log N), how heapify builds the heap in O(N). | Code: Implement heap sort from scratch. | Practice: 2 problems using heap sort or heap-based thinking.",
            "achievement": "Can implement heap sort and explain why building the heap is O(N), not O(N log N).",
            "priority": "MUST KNOW"
          },
          {
            "day": 47,
            "topic": "🆕 Counting Sort (Light)",
            "tasks": "Learn: Linear-time sort for small integer ranges — counting array, prefix-sum positioning. | Code: Implement Counting Sort from scratch. | Practice: 2 problems suited to Counting Sort (e.g., sort an array of 0s/1s/2s — Dutch flag revisited via counting).",
            "achievement": "Can implement Counting Sort in O(N+k) and explain when k (the range) makes it impractical.",
            "priority": "MUST KNOW"
          },
          {
            "day": 48,
            "topic": "🆕 Radix Sort & Bucket Sort (Medium, Day 1/2)",
            "tasks": "Learn: Radix Sort (digit-by-digit, stable counting sort as a subroutine), Bucket Sort (uniform distribution assumption). | Code: Begin implementing Radix Sort (LSD — least significant digit first). | Practice: None yet.",
            "achievement": "Radix Sort correctly sorts multi-digit numbers using repeated counting-sort passes.",
            "priority": "MUST KNOW"
          },
          {
            "day": 49,
            "topic": "Weekly Buffer & Revision Day (Week 7)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "day": 50,
            "topic": "🆕 Radix & Bucket Sort: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review — when Radix beats comparison sorts (fixed-digit-length integers, large datasets). | Code: Finish Radix Sort; implement Bucket Sort for floats in [0,1). | Practice: 2 problems comparing sort choice for different input distributions.",
            "achievement": "Can correctly choose between Counting/Radix/Bucket/comparison sort given any input distribution description.",
            "priority": "MUST KNOW"
          },
          {
            "day": 51,
            "topic": "HANDS-ON LAB: Median of Two Sorted Arrays (Medium, Day 1/2)",
            "tasks": "Learn: Binary-search-on-partition technique for finding median across two sorted arrays without merging. | Code: Begin implementing the O(log(min(N,M))) solution. | Practice: None yet — this problem IS the practice.",
            "achievement": "Understands why the partition must satisfy `maxLeft ≤ minRight` on both arrays simultaneously.",
            "priority": "MUST KNOW"
          },
          {
            "day": 52,
            "topic": "Median of Two Sorted Arrays: Finish + Phase Cheat Sheet",
            "tasks": "Learn: Review the full Searching & Sorting cheat sheet. | Code: Finish and test the median solution. | Practice: Timed mixed-review (3 problems spanning binary search + sorting).",
            "achievement": "Can solve Median of Two Sorted Arrays cold and recite every sort's complexity/stability from memory.",
            "priority": "MUST KNOW"
          }
        ]
      },
      {
        "id": "7-4",
        "title": "TWO POINTERS & SLIDING WINDOW",
        "days": "Days 53–67",
        "items": [
          {
            "day": 53,
            "topic": "Two Pointers: Opposite Direction (Light)",
            "tasks": "Learn: Opposite-direction two-pointer pattern — converging pointers on sorted input. | Code: Implement Two Sum II (sorted array input). | Practice: 2 problems (Two Sum sorted, Container With Most Water).",
            "achievement": "Can solve Two Sum on a sorted array in O(N) using two converging pointers.",
            "priority": "MUST KNOW"
          },
          {
            "day": 54,
            "topic": "Two Pointers: Same Direction / Fast-Slow (Light)",
            "tasks": "Learn: Same-direction pointer pattern — removing duplicates in-place, fast-slow for middle-finding (revisit from Day 15's cycle context). | Code: Implement Remove Duplicates from Sorted Array in-place. | Practice: 2 problems (remove duplicates, move zeroes).",
            "achievement": "Can solve in-place array modification problems using same-direction two pointers.",
            "priority": "MUST KNOW"
          },
          {
            "topic": "3Sum: Opposite Pointers with Duplicate Skipping (Medium, Day 1/2) (Part 1: Concept & Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study the theoretical foundations and internal mechanics of: Learn: Extending two-pointer to 3Sum — fix one element, two-pointer the rest, skip duplicates correctly. | Code: Begin implementing 3Sum. | Practice: None yet.. Focus on system architecture and key diagrams.",
            "achievement": "Understands the core theory and conceptual model of 3Sum: Opposite Pointers with Duplicate Skipping (Medium, Day 1/2).",
            "day": 55
          },
          {
            "day": 56,
            "topic": "Weekly Buffer & Revision Day (Week 8)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "3Sum: Opposite Pointers with Duplicate Skipping (Medium, Day 1/2) (Part 2: Hands-on Lab)",
            "priority": "MUST KNOW",
            "tasks": "Implement code, run configuration scripts, or build labs for: Learn: Extending two-pointer to 3Sum — fix one element, two-pointer the rest, skip duplicates correctly. | Code: Begin implementing 3Sum. | Practice: None yet.. Commit your code/notes to your GitHub repository in your backend-ai-mastery repo.",
            "achievement": "Understands exactly where and why duplicate-skipping logic goes in the loop.",
            "day": 57
          },
          {
            "day": 58,
            "topic": "3Sum: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review — 3Sum Closest, 4Sum as generalizations. | Code: Finish and test 3Sum. | Practice: 3 problems (3Sum, 3Sum Closest, Trapping Rain Water via two pointers).",
            "achievement": "Can implement 3Sum in O(N²) with correct duplicate handling, no Set needed.",
            "priority": "MUST KNOW"
          },
          {
            "day": 59,
            "topic": "Sliding Window: Fixed-Size Window (Light)",
            "tasks": "Learn: Fixed-size window mechanics — window slides by exactly one element per step. | Code: Implement Max Sum Subarray of Size K. | Practice: 2 problems (fixed window problems).",
            "achievement": "Can implement a fixed-size sliding window in O(N) without recomputing the window sum from scratch each time.",
            "priority": "MUST KNOW"
          },
          {
            "day": 60,
            "topic": "Sliding Window: Variable-Size Window (Medium, Day 1/2)",
            "tasks": "Learn: Variable window mechanics — grow/shrink conditions, the \"shrink while invalid\" pattern. | Code: Begin implementing Longest Substring Without Repeating Characters. | Practice: None yet.",
            "achievement": "Can articulate the exact shrink condition before finishing the implementation.",
            "priority": "MUST KNOW"
          },
          {
            "day": 61,
            "topic": "Variable Sliding Window: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review — Longest Substring with K Distinct Characters as a generalization. | Code: Finish Longest Substring Without Repeating Characters. | Practice: 2 problems (Max Consecutive Ones III, Longest Substring with K Distinct).",
            "achievement": "Has a working O(N) solution and can adapt the shrink condition to new constraints.",
            "priority": "MUST KNOW"
          },
          {
            "day": 62,
            "topic": "Minimum Window Substring (Medium, Day 1/2)",
            "tasks": "Learn: The hardest variable-window pattern — two frequency maps, \"valid window\" tracking via a counter. | Code: Begin implementing Minimum Window Substring (LeetCode 76). | Practice: None yet.",
            "achievement": "Understands why a single counter (matched characters) avoids comparing two full frequency maps every iteration.",
            "priority": "MUST KNOW"
          },
          {
            "day": 63,
            "topic": "Weekly Buffer & Revision Day (Week 9)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "day": 64,
            "topic": "Minimum Window Substring: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review the full solution trace on a worked example. | Code: Finish and test Minimum Window Substring. | Practice: 2 problems (Minimum Window Substring variants, Permutation in String).",
            "achievement": "Can implement Minimum Window Substring in O(N) cold, without referencing notes.",
            "priority": "MUST KNOW"
          },
          {
            "day": 65,
            "topic": "Prefix Sum: Range Sum Queries (Light)",
            "tasks": "Learn: Prefix sum array construction, O(1) range sum after O(N) preprocessing. | Code: Implement a Range Sum Query class using prefix sums. | Practice: 2 problems (range sum query, 2D range sum).",
            "achievement": "Can answer any range-sum query in O(1) after building the prefix sum array.",
            "priority": "MUST KNOW"
          },
          {
            "day": 66,
            "topic": "Subarray Sum Equals K: Prefix Map Pattern (Medium, Day 1/2)",
            "tasks": "Learn: Combining prefix sum with a HashMap to count subarrays with a target sum — the \"prefix sum seen before\" trick. | Code: Begin implementing Subarray Sum Equals K (LeetCode 560). | Practice: None yet.",
            "achievement": "Understands why `prefixSum - k` lookup in a HashMap solves this in O(N).",
            "priority": "MUST KNOW"
          },
          {
            "day": 67,
            "topic": "Subarray Sum Equals K: Finish + Phase Cheat Sheet",
            "tasks": "Learn: Review the full Two Pointers & Sliding Window cheat sheet. | Code: Finish and test Subarray Sum Equals K. | Practice: Timed mixed review (3 problems spanning two pointers, sliding window, prefix sum).",
            "achievement": "Can solve Subarray Sum Equals K cold and recite the full phase cheat sheet.",
            "priority": "MUST KNOW"
          }
        ]
      },
      {
        "id": "7-5",
        "title": "STRING PATTERNS & SUBSTRING SEARCH",
        "days": "Days 68–85",
        "items": [
          {
            "day": 68,
            "topic": "Java String Fundamentals for DSA (Light)",
            "tasks": "Learn: String immutability impact on algorithms, char arrays vs String, when to use StringBuilder in tight loops. | Code: Convert a naive concatenation-in-loop snippet to use StringBuilder. | Practice: 2 problems (reverse a string in-place using char array).",
            "achievement": "Can explain why string concatenation in a loop is O(N²) total and how StringBuilder fixes it.",
            "priority": "MUST KNOW"
          },
          {
            "day": 69,
            "topic": "Frequency Counting for Strings (Light)",
            "tasks": "Learn: Frequency arrays (fixed alphabet) vs HashMap for string problems. | Code: Implement anagram detection using a frequency array. | Practice: 2 problems (valid anagram, group anagrams).",
            "achievement": "Can solve any anagram/permutation-detection problem using frequency counting without a HashMap when the alphabet is small.",
            "priority": "MUST KNOW"
          },
          {
            "day": 70,
            "topic": "Weekly Buffer & Revision Day (Week 10)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "day": 71,
            "topic": "Palindrome Problems: Two-Pointer Check (Light)",
            "tasks": "Learn: Two-pointer palindrome verification, handling case/non-alphanumeric characters. | Code: Implement Valid Palindrome (with character filtering). | Practice: 2 problems (valid palindrome, valid palindrome II — one deletion allowed).",
            "achievement": "Can verify a palindrome in O(N) with O(1) space using two pointers.",
            "priority": "MUST KNOW"
          },
          {
            "day": 72,
            "topic": "Longest Palindromic Substring: Expand From Center (Medium, Day 1/2)",
            "tasks": "Learn: Expand-from-center technique, handling both odd and even-length palindromes. | Code: Begin implementing Longest Palindromic Substring. | Practice: None yet.",
            "achievement": "Understands why two separate expansion calls (odd-center, even-center) are needed per index.",
            "priority": "MUST KNOW"
          },
          {
            "day": 73,
            "topic": "Longest Palindromic Substring: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review — Palindromic Substrings (count all) as a close variant. | Code: Finish and test the expand-from-center solution. | Practice: 2 problems (Longest Palindromic Substring, Palindromic Substrings count).",
            "achievement": "Can implement Longest Palindromic Substring in O(N²) cold.",
            "priority": "MUST KNOW"
          },
          {
            "day": 74,
            "topic": "String Hashing: Rolling Hash (Light)",
            "tasks": "Learn: Rolling hash concept — computing a hash incrementally as a window slides, avoiding full recomputation. | Code: Implement a basic rolling hash function. | Practice: 1 conceptual problem (verify rolling hash matches direct hash on a few windows).",
            "achievement": "Can explain how rolling hash updates in O(1) per window shift instead of O(L) recomputation.",
            "priority": "MUST KNOW"
          },
          {
            "day": 75,
            "topic": "Rabin-Karp Algorithm (Medium, Day 1/2)",
            "tasks": "Learn: Using rolling hash for substring search — comparing hash values, handling hash collisions with a verification step. | Code: Begin implementing Rabin-Karp. | Practice: None yet.",
            "achievement": "Understands why a hash match still requires a character-by-character verification step.",
            "priority": "NICE TO HAVE"
          },
          {
            "topic": "Rabin-Karp: Finish + Practice (Medium, Day 2/2) (Part 1: Concept Deep Dive)",
            "priority": "NICE TO HAVE",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Review average-case O(N+M) vs worst-case behavior under hash collisions. | Code: Finish and test Rabin-Karp against a naive substring search, comparing performance. | Practice: 2 problems (repeated substring pattern, find all anagram start indices)..",
            "achievement": "Understands the deep theoretical parameters of Rabin-Karp: Finish + Practice (Medium, Day 2/2).",
            "day": 76
          },
          {
            "day": 77,
            "topic": "Weekly Buffer & Revision Day (Week 11)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Rabin-Karp: Finish + Practice (Medium, Day 2/2) (Part 2: Implementation)",
            "priority": "NICE TO HAVE",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Review average-case O(N+M) vs worst-case behavior under hash collisions. | Code: Finish and test Rabin-Karp against a naive substring search, comparing performance. | Practice: 2 problems (repeated substring pattern, find all anagram start indices).. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Rabin-Karp: Finish + Practice (Medium, Day 2/2).",
            "day": 78
          },
          {
            "topic": "Rabin-Karp: Finish + Practice (Medium, Day 2/2) (Part 3: Edge Cases & Lab)",
            "priority": "NICE TO HAVE",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Review average-case O(N+M) vs worst-case behavior under hash collisions. | Code: Finish and test Rabin-Karp against a naive substring search, comparing performance. | Practice: 2 problems (repeated substring pattern, find all anagram start indices)..",
            "achievement": "Can implement Rabin-Karp and explain its worst-case degradation scenario.",
            "day": 79
          },
          {
            "day": 80,
            "topic": "KMP: Building the LPS Array (Heavy, Day 1/4)",
            "tasks": "Learn: The failure function / LPS (Longest Prefix Suffix) array concept — what it represents and why it enables skipping. | Code: Implement the LPS array construction by hand-tracing 2 example patterns first, then in code. | Practice: None yet — pure LPS construction focus.",
            "achievement": "Can construct the LPS array for any pattern by hand within 2 minutes.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 81,
            "topic": "KMP: Using the LPS Array for Search (Heavy, Day 2/4)",
            "tasks": "Learn: How the LPS array drives the search pointer's fallback behavior on a mismatch. | Code: Implement the full KMP search function using the LPS array from Day 59. | Practice: None yet.",
            "achievement": "Has a complete, working KMP implementation achieving O(N+M).",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 82,
            "topic": "KMP: Practice Day 1 (Heavy, Day 3/4)",
            "tasks": "Learn: Review the full algorithm trace on an adversarial input (e.g., \"aaaaab\" pattern). | Code: None — pure practice. | Practice: 2 problems (implement strStr, repeated substring pattern via KMP).",
            "achievement": "Can trace KMP's pointer movement on paper for any given text/pattern pair.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 83,
            "topic": "KMP: Practice Day 2 (Heavy, Day 4/4)",
            "tasks": "Learn: Comparison — when KMP, Rabin-Karp, or naive search is the right interview answer. | Code: None — pure practice. | Practice: 2 more problems combining KMP-style thinking with other string patterns.",
            "achievement": "Can justify, in an interview, the choice between naive/Rabin-Karp/KMP for a given constraint set.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 84,
            "topic": "Weekly Buffer & Revision Day (Week 12)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "day": 85,
            "topic": "HANDS-ON LAB: Substring Search Benchmarking + Phase Cheat Sheet",
            "tasks": "Learn: Review the full String Patterns cheat sheet. | Code: Benchmark naive vs Rabin-Karp vs KMP on the same large input. | Practice: Timed mixed review (3 problems spanning frequency counting, palindromes, substring search).",
            "achievement": "Can produce real benchmark numbers showing KMP/Rabin-Karp's advantage on adversarial inputs and recite the phase cheat sheet.",
            "priority": "MUST KNOW"
          }
        ]
      },
      {
        "id": "7-6",
        "title": "MONOTONIC STACK & MONOTONIC QUEUE",
        "days": "Days 86–91",
        "items": [
          {
            "day": 86,
            "topic": "Monotonic Stack: Concept & Next Greater Element (Light)",
            "tasks": "Learn: What makes a stack \"monotonic,\" why it solves Next Greater Element in O(N) vs naive O(N²). | Code: Implement Next Greater Element from scratch. | Practice: 2 problems (Next Greater Element I & II — circular variant).",
            "achievement": "Can implement Next Greater Element in O(N) using a monotonic decreasing stack.",
            "priority": "MUST KNOW"
          },
          {
            "day": 87,
            "topic": "Monotonic Stack: Daily Temperatures & Variants (Light)",
            "tasks": "Learn: Generalizing the pattern — storing indices instead of values when distance matters. | Code: Implement Daily Temperatures. | Practice: 2 problems (Daily Temperatures, Next Smaller Element).",
            "achievement": "Can decide when to store values vs indices on the monotonic stack based on what the problem asks for.",
            "priority": "MUST KNOW"
          },
          {
            "day": 88,
            "topic": "Monotonic Queue: Sliding Window Maximum (Medium, Day 1/2)",
            "tasks": "Learn: Monotonic deque mechanics — maintaining a decreasing deque of candidates for the window max. | Code: Begin implementing Sliding Window Maximum. | Practice: None yet.",
            "achievement": "Understands why elements are evicted from the back of the deque when a larger element arrives.",
            "priority": "MUST KNOW"
          },
          {
            "day": 89,
            "topic": "Sliding Window Maximum: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review the full O(N) proof (amortized analysis of deque operations). | Code: Finish and test Sliding Window Maximum. | Practice: 2 problems (Sliding Window Maximum, shortest subarray with sum at least K).",
            "achievement": "Can implement Sliding Window Maximum in true O(N) cold.",
            "priority": "MUST KNOW"
          },
          {
            "day": 90,
            "topic": "HANDS-ON LAB: Maximal Rectangle Solver + Phase Cheat Sheet",
            "tasks": "Learn: Reducing Maximal Rectangle to repeated Largest Rectangle in Histogram calls. | Code: Implement Largest Rectangle in Histogram using a monotonic stack, then extend to Maximal Rectangle. | Practice: Timed review (2 problems).",
            "achievement": "Can solve Maximal Rectangle by combining histogram-area logic with a monotonic stack, and recite the phase cheat sheet.",
            "priority": "MUST KNOW"
          },
          {
            "day": 91,
            "topic": "Weekly Buffer & Revision Day (Week 13)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          }
        ]
      },
      {
        "id": "7-7",
        "title": "RECURSION & BACKTRACKING",
        "days": "Days 92–147",
        "items": [
          {
            "topic": "Recursion: The Mental Model (Light) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: Base case, recursive case, trusting the recursive call, call stack visualization. | Code: Trace 3 recursive functions by hand before running them. | Practice: 2 problems (factorial, power function via recursion)..",
            "achievement": "Mastered the high-level architecture and design of Recursion: The Mental Model (Light).",
            "day": 92
          },
          {
            "topic": "Recursion: The Mental Model (Light) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: Base case, recursive case, trusting the recursive call, call stack visualization. | Code: Trace 3 recursive functions by hand before running them. | Practice: 2 problems (factorial, power function via recursion).. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for Recursion: The Mental Model (Light).",
            "day": 93
          },
          {
            "topic": "Recursion: The Mental Model (Light) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: Base case, recursive case, trusting the recursive call, call stack visualization. | Code: Trace 3 recursive functions by hand before running them. | Practice: 2 problems (factorial, power function via recursion)..",
            "achievement": "Hardened the implementation of Recursion: The Mental Model (Light) against production-level failures.",
            "day": 94
          },
          {
            "topic": "Recursion: The Mental Model (Light) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: Base case, recursive case, trusting the recursive call, call stack visualization. | Code: Trace 3 recursive functions by hand before running them. | Practice: 2 problems (factorial, power function via recursion)..",
            "achievement": "Can trace any moderately complex recursive function's call stack by hand.",
            "day": 95
          },
          {
            "topic": "Recursion: Recursion Tree & Recurrence Relations (Light) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: Visualizing recursion as a tree, deriving time complexity from recurrence relations (basic Master Theorem intuition). | Code: Draw and code 2 recursion trees (Fibonacci naive vs memoized). | Practice: 2 problems (climbing stairs via plain recursion, generate parentheses intro)..",
            "achievement": "Mastered the high-level architecture and design of Recursion: Recursion Tree & Recurrence Relations (Light).",
            "day": 96
          },
          {
            "topic": "Recursion: Recursion Tree & Recurrence Relations (Light) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: Visualizing recursion as a tree, deriving time complexity from recurrence relations (basic Master Theorem intuition). | Code: Draw and code 2 recursion trees (Fibonacci naive vs memoized). | Practice: 2 problems (climbing stairs via plain recursion, generate parentheses intro).. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for Recursion: Recursion Tree & Recurrence Relations (Light).",
            "day": 97
          },
          {
            "day": 98,
            "topic": "Weekly Buffer & Revision Day (Week 14)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Recursion: Recursion Tree & Recurrence Relations (Light) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: Visualizing recursion as a tree, deriving time complexity from recurrence relations (basic Master Theorem intuition). | Code: Draw and code 2 recursion trees (Fibonacci naive vs memoized). | Practice: 2 problems (climbing stairs via plain recursion, generate parentheses intro)..",
            "achievement": "Hardened the implementation of Recursion: Recursion Tree & Recurrence Relations (Light) against production-level failures.",
            "day": 99
          },
          {
            "topic": "Recursion: Recursion Tree & Recurrence Relations (Light) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: Visualizing recursion as a tree, deriving time complexity from recurrence relations (basic Master Theorem intuition). | Code: Draw and code 2 recursion trees (Fibonacci naive vs memoized). | Practice: 2 problems (climbing stairs via plain recursion, generate parentheses intro)..",
            "achievement": "Can explain why naive recursive Fibonacci is O(2^N) by drawing its recursion tree.",
            "day": 100
          },
          {
            "topic": "Backtracking: The Blueprint (Light) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: Choice — constraint — goal framework, the generic backtracking template (choose, explore, un-choose). | Code: Implement the generic backtracking template as a reusable skeleton. | Practice: 2 problems (subsets, then adapt template)..",
            "achievement": "Mastered the high-level architecture and design of Backtracking: The Blueprint (Light).",
            "day": 101
          },
          {
            "topic": "Backtracking: The Blueprint (Light) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: Choice — constraint — goal framework, the generic backtracking template (choose, explore, un-choose). | Code: Implement the generic backtracking template as a reusable skeleton. | Practice: 2 problems (subsets, then adapt template).. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for Backtracking: The Blueprint (Light).",
            "day": 102
          },
          {
            "topic": "Backtracking: The Blueprint (Light) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: Choice — constraint — goal framework, the generic backtracking template (choose, explore, un-choose). | Code: Implement the generic backtracking template as a reusable skeleton. | Practice: 2 problems (subsets, then adapt template)..",
            "achievement": "Hardened the implementation of Backtracking: The Blueprint (Light) against production-level failures.",
            "day": 103
          },
          {
            "topic": "Backtracking: The Blueprint (Light) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: Choice — constraint — goal framework, the generic backtracking template (choose, explore, un-choose). | Code: Implement the generic backtracking template as a reusable skeleton. | Practice: 2 problems (subsets, then adapt template)..",
            "achievement": "Can write the generic backtracking template from memory in under 2 minutes.",
            "day": 104
          },
          {
            "day": 105,
            "topic": "Weekly Buffer & Revision Day (Week 15)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Backtracking: Subsets & Combinations (Light) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: Adapting the template for subsets (power set) and combinations (choose K of N). | Code: Implement Subsets and Combination Sum. | Practice: 2 problems (subsets, combination sum)..",
            "achievement": "Mastered the high-level architecture and design of Backtracking: Subsets & Combinations (Light).",
            "day": 106
          },
          {
            "topic": "Backtracking: Subsets & Combinations (Light) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: Adapting the template for subsets (power set) and combinations (choose K of N). | Code: Implement Subsets and Combination Sum. | Practice: 2 problems (subsets, combination sum).. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for Backtracking: Subsets & Combinations (Light).",
            "day": 107
          },
          {
            "topic": "Backtracking: Subsets & Combinations (Light) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: Adapting the template for subsets (power set) and combinations (choose K of N). | Code: Implement Subsets and Combination Sum. | Practice: 2 problems (subsets, combination sum)..",
            "achievement": "Hardened the implementation of Backtracking: Subsets & Combinations (Light) against production-level failures.",
            "day": 108
          },
          {
            "topic": "Backtracking: Subsets & Combinations (Light) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: Adapting the template for subsets (power set) and combinations (choose K of N). | Code: Implement Subsets and Combination Sum. | Practice: 2 problems (subsets, combination sum)..",
            "achievement": "Can adapt the backtracking template to subsets/combinations without re-deriving it from scratch.",
            "day": 109
          },
          {
            "topic": "Backtracking: Permutations (Medium, Day 1/2) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: Permutations via swap-based backtracking vs used[] array tracking; handling duplicates. | Code: Begin implementing Permutations (and Permutations II with duplicates). | Practice: None yet..",
            "achievement": "Mastered the high-level architecture and design of Backtracking: Permutations (Medium, Day 1/2).",
            "day": 110
          },
          {
            "topic": "Backtracking: Permutations (Medium, Day 1/2) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: Permutations via swap-based backtracking vs used[] array tracking; handling duplicates. | Code: Begin implementing Permutations (and Permutations II with duplicates). | Practice: None yet.. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for Backtracking: Permutations (Medium, Day 1/2).",
            "day": 111
          },
          {
            "day": 112,
            "topic": "Weekly Buffer & Revision Day (Week 16)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Backtracking: Permutations (Medium, Day 1/2) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: Permutations via swap-based backtracking vs used[] array tracking; handling duplicates. | Code: Begin implementing Permutations (and Permutations II with duplicates). | Practice: None yet..",
            "achievement": "Hardened the implementation of Backtracking: Permutations (Medium, Day 1/2) against production-level failures.",
            "day": 113
          },
          {
            "topic": "Backtracking: Permutations (Medium, Day 1/2) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: Permutations via swap-based backtracking vs used[] array tracking; handling duplicates. | Code: Begin implementing Permutations (and Permutations II with duplicates). | Practice: None yet..",
            "achievement": "Understands the difference between the swap-based and used-array approaches to permutation generation.",
            "day": 114
          },
          {
            "topic": "Permutations: Finish + Practice (Medium, Day 2/2) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: Review duplicate-skipping logic for Permutations II. | Code: Finish both Permutations and Permutations II. | Practice: 2 problems (permutations, permutations with duplicates)..",
            "achievement": "Mastered the high-level architecture and design of Permutations: Finish + Practice (Medium, Day 2/2).",
            "day": 115
          },
          {
            "topic": "Permutations: Finish + Practice (Medium, Day 2/2) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: Review duplicate-skipping logic for Permutations II. | Code: Finish both Permutations and Permutations II. | Practice: 2 problems (permutations, permutations with duplicates).. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for Permutations: Finish + Practice (Medium, Day 2/2).",
            "day": 116
          },
          {
            "topic": "Permutations: Finish + Practice (Medium, Day 2/2) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: Review duplicate-skipping logic for Permutations II. | Code: Finish both Permutations and Permutations II. | Practice: 2 problems (permutations, permutations with duplicates)..",
            "achievement": "Hardened the implementation of Permutations: Finish + Practice (Medium, Day 2/2) against production-level failures.",
            "day": 117
          },
          {
            "topic": "Permutations: Finish + Practice (Medium, Day 2/2) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: Review duplicate-skipping logic for Permutations II. | Code: Finish both Permutations and Permutations II. | Practice: 2 problems (permutations, permutations with duplicates)..",
            "achievement": "Can generate all permutations, with correct duplicate handling, in both forms.",
            "day": 118
          },
          {
            "day": 119,
            "topic": "Weekly Buffer & Revision Day (Week 17)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Pruning Techniques (Light) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: Dead-end detection to optimize backtracking — early termination conditions, constraint propagation basics. | Code: Add a pruning condition to an existing unpruned backtracking solution and measure the speedup. | Practice: 2 problems where pruning matters (combination sum with target, word search)..",
            "achievement": "Mastered the high-level architecture and design of Pruning Techniques (Light).",
            "day": 120
          },
          {
            "topic": "Pruning Techniques (Light) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: Dead-end detection to optimize backtracking — early termination conditions, constraint propagation basics. | Code: Add a pruning condition to an existing unpruned backtracking solution and measure the speedup. | Practice: 2 problems where pruning matters (combination sum with target, word search).. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for Pruning Techniques (Light).",
            "day": 121
          },
          {
            "topic": "Pruning Techniques (Light) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: Dead-end detection to optimize backtracking — early termination conditions, constraint propagation basics. | Code: Add a pruning condition to an existing unpruned backtracking solution and measure the speedup. | Practice: 2 problems where pruning matters (combination sum with target, word search)..",
            "achievement": "Hardened the implementation of Pruning Techniques (Light) against production-level failures.",
            "day": 122
          },
          {
            "topic": "Pruning Techniques (Light) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: Dead-end detection to optimize backtracking — early termination conditions, constraint propagation basics. | Code: Add a pruning condition to an existing unpruned backtracking solution and measure the speedup. | Practice: 2 problems where pruning matters (combination sum with target, word search)..",
            "achievement": "Can identify and add a pruning condition that meaningfully cuts the search space.",
            "day": 123
          },
          {
            "topic": "N-Queens: Setup & Naive Approach (Heavy, Day 1/3) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: The N-Queens problem statement, naive board-scanning conflict check (before optimization). | Code: Begin implementing N-Queens with naive O(N) conflict checking per placement. | Practice: None yet..",
            "achievement": "Mastered the high-level architecture and design of N-Queens: Setup & Naive Approach (Heavy, Day 1/3).",
            "day": 124
          },
          {
            "topic": "N-Queens: Setup & Naive Approach (Heavy, Day 1/3) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: The N-Queens problem statement, naive board-scanning conflict check (before optimization). | Code: Begin implementing N-Queens with naive O(N) conflict checking per placement. | Practice: None yet.. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for N-Queens: Setup & Naive Approach (Heavy, Day 1/3).",
            "day": 125
          },
          {
            "day": 126,
            "topic": "Weekly Buffer & Revision Day (Week 18)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "N-Queens: Setup & Naive Approach (Heavy, Day 1/3) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: The N-Queens problem statement, naive board-scanning conflict check (before optimization). | Code: Begin implementing N-Queens with naive O(N) conflict checking per placement. | Practice: None yet..",
            "achievement": "Hardened the implementation of N-Queens: Setup & Naive Approach (Heavy, Day 1/3) against production-level failures.",
            "day": 127
          },
          {
            "topic": "N-Queens: Setup & Naive Approach (Heavy, Day 1/3) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: The N-Queens problem statement, naive board-scanning conflict check (before optimization). | Code: Begin implementing N-Queens with naive O(N) conflict checking per placement. | Practice: None yet..",
            "achievement": "Has a working but unoptimized N-Queens solution.",
            "day": 128
          },
          {
            "topic": "N-Queens: Optimized Conflict Checking (Heavy, Day 2/3) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: O(1) conflict checking using sets/booleans for columns, diagonals, anti-diagonals. | Code: Refactor N-Queens to use O(1) conflict checks. | Practice: None yet..",
            "achievement": "Mastered the high-level architecture and design of N-Queens: Optimized Conflict Checking (Heavy, Day 2/3).",
            "day": 129
          },
          {
            "topic": "N-Queens: Optimized Conflict Checking (Heavy, Day 2/3) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: O(1) conflict checking using sets/booleans for columns, diagonals, anti-diagonals. | Code: Refactor N-Queens to use O(1) conflict checks. | Practice: None yet.. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for N-Queens: Optimized Conflict Checking (Heavy, Day 2/3).",
            "day": 130
          },
          {
            "topic": "N-Queens: Optimized Conflict Checking (Heavy, Day 2/3) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: O(1) conflict checking using sets/booleans for columns, diagonals, anti-diagonals. | Code: Refactor N-Queens to use O(1) conflict checks. | Practice: None yet..",
            "achievement": "Hardened the implementation of N-Queens: Optimized Conflict Checking (Heavy, Day 2/3) against production-level failures.",
            "day": 131
          },
          {
            "topic": "N-Queens: Optimized Conflict Checking (Heavy, Day 2/3) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: O(1) conflict checking using sets/booleans for columns, diagonals, anti-diagonals. | Code: Refactor N-Queens to use O(1) conflict checks. | Practice: None yet..",
            "achievement": "N-Queens now runs with O(1) conflict checking per placement instead of O(N) board scans.",
            "day": 132
          },
          {
            "day": 133,
            "topic": "Weekly Buffer & Revision Day (Week 19)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "N-Queens: Practice + Variants (Heavy, Day 3/3) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: Review — counting solutions vs returning all solutions as a variant. | Code: None — pure practice. | Practice: 2 problems (N-Queens, N-Queens II — count only)..",
            "achievement": "Mastered the high-level architecture and design of N-Queens: Practice + Variants (Heavy, Day 3/3).",
            "day": 134
          },
          {
            "topic": "N-Queens: Practice + Variants (Heavy, Day 3/3) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: Review — counting solutions vs returning all solutions as a variant. | Code: None — pure practice. | Practice: 2 problems (N-Queens, N-Queens II — count only).. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for N-Queens: Practice + Variants (Heavy, Day 3/3).",
            "day": 135
          },
          {
            "topic": "N-Queens: Practice + Variants (Heavy, Day 3/3) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: Review — counting solutions vs returning all solutions as a variant. | Code: None — pure practice. | Practice: 2 problems (N-Queens, N-Queens II — count only)..",
            "achievement": "Hardened the implementation of N-Queens: Practice + Variants (Heavy, Day 3/3) against production-level failures.",
            "day": 136
          },
          {
            "topic": "N-Queens: Practice + Variants (Heavy, Day 3/3) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: Review — counting solutions vs returning all solutions as a variant. | Code: None — pure practice. | Practice: 2 problems (N-Queens, N-Queens II — count only)..",
            "achievement": "Can implement N-Queens with optimal conflict checking cold, in either \"return all\" or \"count only\" form.",
            "day": 137
          },
          {
            "topic": "Sudoku Solver (Heavy, Day 1/2) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: Constraint propagation for Sudoku — row/column/box validity checks, backtracking with early pruning. | Code: Begin implementing the Sudoku solver. | Practice: None yet..",
            "achievement": "Mastered the high-level architecture and design of Sudoku Solver (Heavy, Day 1/2).",
            "day": 138
          },
          {
            "topic": "Sudoku Solver (Heavy, Day 1/2) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: Constraint propagation for Sudoku — row/column/box validity checks, backtracking with early pruning. | Code: Begin implementing the Sudoku solver. | Practice: None yet.. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for Sudoku Solver (Heavy, Day 1/2).",
            "day": 139
          },
          {
            "day": 140,
            "topic": "Weekly Buffer & Revision Day (Week 20)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Sudoku Solver (Heavy, Day 1/2) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: Constraint propagation for Sudoku — row/column/box validity checks, backtracking with early pruning. | Code: Begin implementing the Sudoku solver. | Practice: None yet..",
            "achievement": "Hardened the implementation of Sudoku Solver (Heavy, Day 1/2) against production-level failures.",
            "day": 141
          },
          {
            "topic": "Sudoku Solver (Heavy, Day 1/2) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: Constraint propagation for Sudoku — row/column/box validity checks, backtracking with early pruning. | Code: Begin implementing the Sudoku solver. | Practice: None yet..",
            "achievement": "Has working row/column/box validity-check functions integrated into the backtracking skeleton.",
            "day": 142
          },
          {
            "topic": "Sudoku Solver: Finish + Phase Cheat Sheet (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: Review the full Recursion & Backtracking cheat sheet. | Code: Finish and test the Sudoku solver. | Practice: Timed mixed review (2 problems spanning recursion + backtracking)..",
            "achievement": "Mastered the high-level architecture and design of Sudoku Solver: Finish + Phase Cheat Sheet.",
            "day": 143
          },
          {
            "topic": "Sudoku Solver: Finish + Phase Cheat Sheet (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: Review the full Recursion & Backtracking cheat sheet. | Code: Finish and test the Sudoku solver. | Practice: Timed mixed review (2 problems spanning recursion + backtracking).. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for Sudoku Solver: Finish + Phase Cheat Sheet.",
            "day": 144
          },
          {
            "topic": "Sudoku Solver: Finish + Phase Cheat Sheet (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: Review the full Recursion & Backtracking cheat sheet. | Code: Finish and test the Sudoku solver. | Practice: Timed mixed review (2 problems spanning recursion + backtracking)..",
            "achievement": "Hardened the implementation of Sudoku Solver: Finish + Phase Cheat Sheet against production-level failures.",
            "day": 145
          },
          {
            "topic": "Sudoku Solver: Finish + Phase Cheat Sheet (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: Review the full Recursion & Backtracking cheat sheet. | Code: Finish and test the Sudoku solver. | Practice: Timed mixed review (2 problems spanning recursion + backtracking)..",
            "achievement": "Has a fully working Sudoku solver and can recite the phase cheat sheet.",
            "day": 146
          },
          {
            "day": 147,
            "topic": "Weekly Buffer & Revision Day (Week 21)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          }
        ]
      },
      {
        "id": "7-8",
        "title": "HIERARCHICAL DATA STRUCTURES",
        "days": "Days 148–176",
        "items": [
          {
            "day": 148,
            "topic": "Binary Trees: Node Structure & Properties (Light)",
            "tasks": "Learn: Tree node structure, height, depth, leaf node counting. | Code: Implement basic tree construction and a height-calculation function. | Practice: 2 problems (max depth, count leaf nodes).",
            "achievement": "Can compute tree height/depth recursively in O(N).",
            "priority": "IMPORTANT"
          },
          {
            "day": 149,
            "topic": "Binary Tree Traversals: Recursive (Light)",
            "tasks": "Learn: Preorder, Inorder, Postorder — recursive implementations. | Code: Implement all 3 recursive traversals. | Practice: 2 problems (return traversal as a list, verify two trees have same inorder).",
            "achievement": "Can implement all 3 recursive traversals from memory.",
            "priority": "MUST KNOW"
          },
          {
            "day": 150,
            "topic": "Binary Tree Traversals: Iterative + Level Order (Medium, Day 1/2)",
            "tasks": "Learn: Iterative traversal using an explicit stack, Level-order traversal (BFS) using a queue. | Code: Begin implementing iterative inorder traversal and level-order traversal. | Practice: None yet.",
            "achievement": "Has a working iterative inorder traversal using an explicit stack.",
            "priority": "MUST KNOW"
          },
          {
            "day": 151,
            "topic": "Iterative Traversals: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review — iterative preorder/postorder (the trickier ones) using stack tricks. | Code: Finish iterative preorder and postorder; finish level-order traversal. | Practice: 2 problems (binary tree level order traversal, zigzag level order).",
            "achievement": "Can implement all 4 traversal types both recursively and iteratively.",
            "priority": "IMPORTANT"
          },
          {
            "day": 152,
            "topic": "Binary Tree: Diameter & Path Sum (Light)",
            "tasks": "Learn: Diameter of a binary tree (combining left+right height at each node), root-to-leaf path sum problems. | Code: Implement Diameter of Binary Tree. | Practice: 2 problems (diameter, path sum).",
            "achievement": "Can solve Diameter of Binary Tree in a single O(N) pass (not O(N²)).",
            "priority": "IMPORTANT"
          },
          {
            "day": 153,
            "topic": "Binary Search Tree: Search, Insert, Delete (Medium, Day 1/2)",
            "tasks": "Learn: BST property, search/insert operations, the 3 deletion cases (leaf, one child, two children). | Code: Begin implementing BST insert and search. | Practice: None yet.",
            "achievement": "Has working BST insert and search operations.",
            "priority": "MUST KNOW"
          },
          {
            "day": 154,
            "topic": "Weekly Buffer & Revision Day (Week 22)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "day": 155,
            "topic": "BST Delete + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review the two-children deletion case (find successor/predecessor). | Code: Finish BST delete, handling all 3 cases. | Practice: 2 problems (delete node in BST, insert into BST).",
            "achievement": "Can implement BST delete correctly for all 3 cases.",
            "priority": "MUST KNOW"
          },
          {
            "day": 156,
            "topic": "BST: Validate BST & Kth Smallest (Light)",
            "tasks": "Learn: Validating BST property (range-checking, not just parent-child comparison), Kth smallest via inorder traversal. | Code: Implement Validate BST and Kth Smallest in BST. | Practice: 2 problems (validate BST, kth smallest, kth largest).",
            "achievement": "Can validate a BST correctly (catching the classic \"only checks immediate children\" bug) and find Kth smallest in O(H+K).",
            "priority": "MUST KNOW"
          },
          {
            "day": 157,
            "topic": "Balanced BSTs: AVL & Red-Black Trees Conceptual (Light)",
            "tasks": "Learn: Balance factor concept, why unbalanced BSTs degrade to O(N), Red-Black tree's role as Java's TreeMap/HashMap bucket backing. | Code: None — conceptual day. | Practice: 2 conceptual questions (when does a BST become a linked list? why does Java use Red-Black trees internally?).",
            "achievement": "Can explain why an unbalanced BST degrades to O(N) and name where Red-Black trees are used inside the JDK.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 158,
            "topic": "🆕 AVL Rotations: LL & RR Cases (Heavy, Day 1/3)",
            "tasks": "Learn: Balance factor calculation after insertion, the Left-Left and Right-Right single-rotation cases. | Code: Implement AVL node structure, balance factor calculation, and single rotation (LL case) function. | Practice: None yet.",
            "achievement": "Can identify an LL or RR imbalance from a balance factor calculation and apply the correct single rotation.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 159,
            "topic": "🆕 AVL Rotations: LR & RL Cases (Heavy, Day 2/3)",
            "tasks": "Learn: The Left-Right and Right-Left double-rotation cases (rotate child first, then the node). | Code: Implement the LR and RL double-rotation functions. | Practice: None yet.",
            "achievement": "Can identify an LR or RL imbalance and apply the correct two-step rotation sequence.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 160,
            "topic": "🆕 AVL Tree: Full Insert with Self-Balancing (Heavy, Day 3/3)",
            "tasks": "Learn: Wiring all 4 rotation cases into a complete AVL insert function that rebalances on the way back up the recursion. | Code: Finish a complete, working AVL tree insert method. | Practice: 2 problems (insert a sequence into an AVL tree by hand and verify against your code's output).",
            "achievement": "Has a fully working, self-balancing AVL insert implementation handling all 4 rotation cases correctly.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 161,
            "topic": "Weekly Buffer & Revision Day (Week 23)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "day": 162,
            "topic": "Heaps: Binary Heap Representation (Light)",
            "tasks": "Learn: Array-based heap representation, parent/child index formulas, Min-Heap vs Max-Heap. | Code: Implement siftUp and siftDown functions. | Practice: 2 problems (kth largest element using a heap, top K frequent elements).",
            "achievement": "Can implement siftUp/siftDown from memory and explain the parent/child index math.",
            "priority": "IMPORTANT"
          },
          {
            "day": 163,
            "topic": "Heaps: Heapify & PriorityQueue Usage (Light)",
            "tasks": "Learn: Building a heap from an unsorted array in O(N) (heapify), Java's `PriorityQueue` with custom comparators. | Code: Implement heapify and use Java's `PriorityQueue` with a custom comparator for a problem. | Practice: 2 problems (merge K sorted lists using a heap, find median from data stream).",
            "achievement": "Can explain why heapify is O(N) (not O(N log N)) and use `PriorityQueue` fluently with custom orderings.",
            "priority": "MUST KNOW"
          },
          {
            "day": 164,
            "topic": "Tries: Node Structure & Insert/Search (Light)",
            "tasks": "Learn: Trie node structure (array or map of children), insert and search operations. | Code: Implement Trie insert and search. | Practice: 2 problems (implement Trie, word search II setup).",
            "achievement": "Can implement Trie insert and search in O(L) per operation.",
            "priority": "IMPORTANT"
          },
          {
            "day": 165,
            "topic": "Tries: Prefix Search & Autocomplete Design (Medium, Day 1/2)",
            "tasks": "Learn: `startsWith` prefix matching, extending Trie nodes to support autocomplete suggestions. | Code: Begin implementing the autocomplete system (storing top suggestions per node, or DFS-collecting from a prefix). | Practice: None yet.",
            "achievement": "Trie now supports `startsWith` and can list all words under a given prefix.",
            "priority": "IMPORTANT"
          },
          {
            "day": 166,
            "topic": "Autocomplete System: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review — ranking suggestions (frequency-based) for a production-quality autocomplete. | Code: Finish the autocomplete system, returning top-K ranked suggestions. | Practice: 2 problems (design search autocomplete system, replace words using Trie).",
            "achievement": "Has a working Trie-based autocomplete system returning ranked top-K suggestions for any prefix.",
            "priority": "IMPORTANT"
          },
          {
            "day": 167,
            "topic": "Segment Trees: Construction & Range Query (Heavy, Day 1/3)",
            "tasks": "Learn: Segment tree structure for range queries, recursive construction, range-sum query logic. | Code: Begin implementing segment tree construction and the range sum query function. | Practice: None yet.",
            "achievement": "Has a working segment tree that answers range-sum queries in O(log N).",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 168,
            "topic": "Weekly Buffer & Revision Day (Week 24)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "day": 169,
            "topic": "Segment Trees: Point Update (Heavy, Day 2/3)",
            "tasks": "Learn: Point update logic — updating a single index and propagating the change up to ancestor nodes. | Code: Implement the point-update function. | Practice: None yet.",
            "achievement": "Segment tree now supports both range queries and point updates correctly.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 170,
            "topic": "Segment Trees: Lazy Propagation for Range Updates (Heavy, Day 3/3)",
            "tasks": "Learn: Lazy propagation — deferring updates to child nodes until they're actually queried, avoiding O(N) range updates. | Code: Implement lazy propagation for range updates. | Practice: 2 problems (range sum query mutable, range update + range query).",
            "achievement": "Has a complete segment tree supporting range updates AND range queries in O(log N) using lazy propagation.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 171,
            "topic": "Fenwick Tree (Binary Indexed Tree) (Medium, Day 1/2)",
            "tasks": "Learn: Fenwick Tree structure (implicit binary representation), prefix sum query and point update via bit manipulation on indices. | Code: Begin implementing Fenwick Tree update and query functions. | Practice: None yet.",
            "achievement": "Understands the `i & (-i)` bit trick that drives Fenwick Tree traversal.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 172,
            "topic": "Fenwick Tree: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review — when to prefer Fenwick over Segment Tree (simpler code, less memory, but point-update/range-query only by default). | Code: Finish and test the Fenwick Tree. | Practice: 2 problems (range sum query mutable using Fenwick, count of smaller numbers after self).",
            "achievement": "Can implement Fenwick Tree from scratch and justify choosing it over a Segment Tree for a given problem.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 173,
            "topic": "Disjoint Set Union: Path Compression & Union by Rank (Medium, Day 1/2)",
            "tasks": "Learn: Union-Find structure, path compression optimization, union by rank optimization. | Code: Begin implementing DSU with both optimizations. | Practice: None yet.",
            "achievement": "Has a working `find()` function with path compression.",
            "priority": "IMPORTANT"
          },
          {
            "day": 174,
            "topic": "DSU: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review the near-O(1) amortized complexity argument for combined path compression + union by rank. | Code: Finish DSU with union by rank. | Practice: 2 problems (number of provinces, redundant connection).",
            "achievement": "Has a fully optimized DSU achieving near-O(1) amortized find/union.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 175,
            "topic": "Weekly Buffer & Revision Day (Week 25)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "day": 176,
            "topic": "HANDS-ON LAB: Trie-Based Autocomplete Extension + Phase Cheat Sheet",
            "tasks": "Learn: Review the entire Hierarchical Data Structures cheat sheet (Trees, BST, AVL, Heaps, Tries, Segment/Fenwick, DSU). | Code: Extend the Day 97 autocomplete system with a new feature (e.g., fuzzy matching or recency weighting). | Practice: Timed mixed review (4 problems spanning the entire phase).",
            "achievement": "Can recite the full phase cheat sheet and confidently pick the right tree-based structure for any new problem.",
            "priority": "IMPORTANT"
          }
        ]
      },
      {
        "id": "7-9",
        "title": "GRAPHS & GRAPH ALGORITHMS",
        "days": "Days 177–259",
        "items": [
          {
            "topic": "Graph Fundamentals & Representations (Light) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: Adjacency matrix vs adjacency list vs edge list, directed/undirected, weighted/unweighted, cyclic/acyclic (DAG). | Code: Implement both adjacency matrix and adjacency list representations for the same graph. | Practice: 2 problems (build graph from edge list, count connected components via simple traversal)..",
            "achievement": "Mastered the high-level architecture and design of Graph Fundamentals & Representations (Light).",
            "day": 177
          },
          {
            "topic": "Graph Fundamentals & Representations (Light) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: Adjacency matrix vs adjacency list vs edge list, directed/undirected, weighted/unweighted, cyclic/acyclic (DAG). | Code: Implement both adjacency matrix and adjacency list representations for the same graph. | Practice: 2 problems (build graph from edge list, count connected components via simple traversal).. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for Graph Fundamentals & Representations (Light).",
            "day": 178
          },
          {
            "topic": "Graph Fundamentals & Representations (Light) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: Adjacency matrix vs adjacency list vs edge list, directed/undirected, weighted/unweighted, cyclic/acyclic (DAG). | Code: Implement both adjacency matrix and adjacency list representations for the same graph. | Practice: 2 problems (build graph from edge list, count connected components via simple traversal)..",
            "achievement": "Hardened the implementation of Graph Fundamentals & Representations (Light) against production-level failures.",
            "day": 179
          },
          {
            "topic": "Graph Fundamentals & Representations (Light) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: Adjacency matrix vs adjacency list vs edge list, directed/undirected, weighted/unweighted, cyclic/acyclic (DAG). | Code: Implement both adjacency matrix and adjacency list representations for the same graph. | Practice: 2 problems (build graph from edge list, count connected components via simple traversal)..",
            "achievement": "Can choose the correct representation for a given problem based on density and required operations.",
            "day": 180
          },
          {
            "topic": "Breadth-First Search (BFS) (Light) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: BFS using a queue, shortest path in unweighted graphs, level-by-level exploration. | Code: Implement BFS from scratch. | Practice: 2 problems (shortest path in unweighted graph, rotting oranges — multi-source BFS)..",
            "achievement": "Mastered the high-level architecture and design of Breadth-First Search (BFS) (Light).",
            "day": 181
          },
          {
            "day": 182,
            "topic": "Weekly Buffer & Revision Day (Week 26)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Breadth-First Search (BFS) (Light) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: BFS using a queue, shortest path in unweighted graphs, level-by-level exploration. | Code: Implement BFS from scratch. | Practice: 2 problems (shortest path in unweighted graph, rotting oranges — multi-source BFS).. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for Breadth-First Search (BFS) (Light).",
            "day": 183
          },
          {
            "topic": "Breadth-First Search (BFS) (Light) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: BFS using a queue, shortest path in unweighted graphs, level-by-level exploration. | Code: Implement BFS from scratch. | Practice: 2 problems (shortest path in unweighted graph, rotting oranges — multi-source BFS)..",
            "achievement": "Hardened the implementation of Breadth-First Search (BFS) (Light) against production-level failures.",
            "day": 184
          },
          {
            "topic": "Breadth-First Search (BFS) (Light) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: BFS using a queue, shortest path in unweighted graphs, level-by-level exploration. | Code: Implement BFS from scratch. | Practice: 2 problems (shortest path in unweighted graph, rotting oranges — multi-source BFS)..",
            "achievement": "Can implement BFS and use it for shortest path in an unweighted graph.",
            "day": 185
          },
          {
            "topic": "Depth-First Search (DFS) (Light) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: DFS using recursion and explicit stack, connected components via DFS. | Code: Implement DFS both recursively and iteratively. | Practice: 2 problems (number of islands, flood fill)..",
            "achievement": "Mastered the high-level architecture and design of Depth-First Search (DFS) (Light).",
            "day": 186
          },
          {
            "topic": "Depth-First Search (DFS) (Light) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: DFS using recursion and explicit stack, connected components via DFS. | Code: Implement DFS both recursively and iteratively. | Practice: 2 problems (number of islands, flood fill).. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for Depth-First Search (DFS) (Light).",
            "day": 187
          },
          {
            "topic": "Depth-First Search (DFS) (Light) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: DFS using recursion and explicit stack, connected components via DFS. | Code: Implement DFS both recursively and iteratively. | Practice: 2 problems (number of islands, flood fill)..",
            "achievement": "Hardened the implementation of Depth-First Search (DFS) (Light) against production-level failures.",
            "day": 188
          },
          {
            "day": 189,
            "topic": "Weekly Buffer & Revision Day (Week 27)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Depth-First Search (DFS) (Light) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: DFS using recursion and explicit stack, connected components via DFS. | Code: Implement DFS both recursively and iteratively. | Practice: 2 problems (number of islands, flood fill)..",
            "achievement": "Can implement DFS both ways and explain when iterative DFS is necessary (avoiding stack overflow on deep graphs).",
            "day": 190
          },
          {
            "topic": "Topological Sort: Kahn's Algorithm (Medium, Day 1/2) (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: BFS-based topological sort using in-degree tracking. | Code: Begin implementing Kahn's Algorithm. | Practice: None yet..",
            "achievement": "Understands the deep theoretical parameters of Topological Sort: Kahn's Algorithm (Medium, Day 1/2).",
            "day": 191
          },
          {
            "topic": "Topological Sort: Kahn's Algorithm (Medium, Day 1/2) (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: BFS-based topological sort using in-degree tracking. | Code: Begin implementing Kahn's Algorithm. | Practice: None yet.. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Topological Sort: Kahn's Algorithm (Medium, Day 1/2).",
            "day": 192
          },
          {
            "topic": "Topological Sort: Kahn's Algorithm (Medium, Day 1/2) (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: BFS-based topological sort using in-degree tracking. | Code: Begin implementing Kahn's Algorithm. | Practice: None yet..",
            "achievement": "Understands why nodes with in-degree 0 are the correct starting points.",
            "day": 193
          },
          {
            "topic": "Topological Sort: DFS-Based + Practice (Medium, Day 2/2) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: DFS-based topological sort (postorder reversal) as an alternative to Kahn's. | Code: Finish Kahn's Algorithm; implement DFS-based topological sort. | Practice: 2 problems (course schedule, course schedule II)..",
            "achievement": "Mastered the high-level architecture and design of Topological Sort: DFS-Based + Practice (Medium, Day 2/2).",
            "day": 194
          },
          {
            "topic": "Topological Sort: DFS-Based + Practice (Medium, Day 2/2) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: DFS-based topological sort (postorder reversal) as an alternative to Kahn's. | Code: Finish Kahn's Algorithm; implement DFS-based topological sort. | Practice: 2 problems (course schedule, course schedule II).. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for Topological Sort: DFS-Based + Practice (Medium, Day 2/2).",
            "day": 195
          },
          {
            "day": 196,
            "topic": "Weekly Buffer & Revision Day (Week 28)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Topological Sort: DFS-Based + Practice (Medium, Day 2/2) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: DFS-based topological sort (postorder reversal) as an alternative to Kahn's. | Code: Finish Kahn's Algorithm; implement DFS-based topological sort. | Practice: 2 problems (course schedule, course schedule II)..",
            "achievement": "Hardened the implementation of Topological Sort: DFS-Based + Practice (Medium, Day 2/2) against production-level failures.",
            "day": 197
          },
          {
            "topic": "Topological Sort: DFS-Based + Practice (Medium, Day 2/2) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: DFS-based topological sort (postorder reversal) as an alternative to Kahn's. | Code: Finish Kahn's Algorithm; implement DFS-based topological sort. | Practice: 2 problems (course schedule, course schedule II)..",
            "achievement": "Can implement topological sort both ways and detect a cycle (no valid ordering exists) in the process.",
            "day": 198
          },
          {
            "topic": "🆕 Bipartite Graph Check (Light) (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: 2-coloring via BFS/DFS — a graph is bipartite iff it has no odd-length cycle. | Code: Implement bipartite check using BFS-based 2-coloring. | Practice: 2 problems (is graph bipartite, possible bipartition)..",
            "achievement": "Understands the deep theoretical parameters of 🆕 Bipartite Graph Check (Light).",
            "day": 199
          },
          {
            "topic": "🆕 Bipartite Graph Check (Light) (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: 2-coloring via BFS/DFS — a graph is bipartite iff it has no odd-length cycle. | Code: Implement bipartite check using BFS-based 2-coloring. | Practice: 2 problems (is graph bipartite, possible bipartition).. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of 🆕 Bipartite Graph Check (Light).",
            "day": 200
          },
          {
            "topic": "🆕 Bipartite Graph Check (Light) (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: 2-coloring via BFS/DFS — a graph is bipartite iff it has no odd-length cycle. | Code: Implement bipartite check using BFS-based 2-coloring. | Practice: 2 problems (is graph bipartite, possible bipartition)..",
            "achievement": "Can implement a bipartite check and explain why an odd cycle makes a graph non-bipartite.",
            "day": 201
          },
          {
            "topic": "Dijkstra's Algorithm: Setup & PriorityQueue Approach (Heavy, Day 1/3) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: Single-source shortest path for non-negative weights, edge relaxation, why a PriorityQueue (not a plain queue) is essential. | Code: Begin implementing Dijkstra's Algorithm. | Practice: None yet..",
            "achievement": "Mastered the high-level architecture and design of Dijkstra's Algorithm: Setup & PriorityQueue Approach (Heavy, Day 1/3).",
            "day": 202
          },
          {
            "day": 203,
            "topic": "Weekly Buffer & Revision Day (Week 29)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Dijkstra's Algorithm: Setup & PriorityQueue Approach (Heavy, Day 1/3) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: Single-source shortest path for non-negative weights, edge relaxation, why a PriorityQueue (not a plain queue) is essential. | Code: Begin implementing Dijkstra's Algorithm. | Practice: None yet.. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for Dijkstra's Algorithm: Setup & PriorityQueue Approach (Heavy, Day 1/3).",
            "day": 204
          },
          {
            "topic": "Dijkstra's Algorithm: Setup & PriorityQueue Approach (Heavy, Day 1/3) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: Single-source shortest path for non-negative weights, edge relaxation, why a PriorityQueue (not a plain queue) is essential. | Code: Begin implementing Dijkstra's Algorithm. | Practice: None yet..",
            "achievement": "Hardened the implementation of Dijkstra's Algorithm: Setup & PriorityQueue Approach (Heavy, Day 1/3) against production-level failures.",
            "day": 205
          },
          {
            "topic": "Dijkstra's Algorithm: Setup & PriorityQueue Approach (Heavy, Day 1/3) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: Single-source shortest path for non-negative weights, edge relaxation, why a PriorityQueue (not a plain queue) is essential. | Code: Begin implementing Dijkstra's Algorithm. | Practice: None yet..",
            "achievement": "Understands edge relaxation and why Dijkstra fails with negative weights (conceptually, before finishing code).",
            "day": 206
          },
          {
            "topic": "Dijkstra's Algorithm: Finish Implementation (Heavy, Day 2/3) (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Review handling of \"already finalized\" nodes and lazy deletion in the PriorityQueue. | Code: Finish and test Dijkstra's Algorithm. | Practice: None yet..",
            "achievement": "Understands the deep theoretical parameters of Dijkstra's Algorithm: Finish Implementation (Heavy, Day 2/3).",
            "day": 207
          },
          {
            "topic": "Dijkstra's Algorithm: Finish Implementation (Heavy, Day 2/3) (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Review handling of \"already finalized\" nodes and lazy deletion in the PriorityQueue. | Code: Finish and test Dijkstra's Algorithm. | Practice: None yet.. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Dijkstra's Algorithm: Finish Implementation (Heavy, Day 2/3).",
            "day": 208
          },
          {
            "topic": "Dijkstra's Algorithm: Finish Implementation (Heavy, Day 2/3) (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Review handling of \"already finalized\" nodes and lazy deletion in the PriorityQueue. | Code: Finish and test Dijkstra's Algorithm. | Practice: None yet..",
            "achievement": "Has a fully working Dijkstra's implementation using `PriorityQueue<int[]>`.",
            "day": 209
          },
          {
            "day": 210,
            "topic": "Weekly Buffer & Revision Day (Week 30)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Dijkstra's Algorithm: Practice (Heavy, Day 3/3) (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Review variants — network delay time, cheapest flights with K stops (Dijkstra variant). | Code: None — pure practice. | Practice: 2 problems (network delay time, path with maximum probability)..",
            "achievement": "Understands the deep theoretical parameters of Dijkstra's Algorithm: Practice (Heavy, Day 3/3).",
            "day": 211
          },
          {
            "topic": "Dijkstra's Algorithm: Practice (Heavy, Day 3/3) (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Review variants — network delay time, cheapest flights with K stops (Dijkstra variant). | Code: None — pure practice. | Practice: 2 problems (network delay time, path with maximum probability).. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Dijkstra's Algorithm: Practice (Heavy, Day 3/3).",
            "day": 212
          },
          {
            "topic": "Dijkstra's Algorithm: Practice (Heavy, Day 3/3) (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Review variants — network delay time, cheapest flights with K stops (Dijkstra variant). | Code: None — pure practice. | Practice: 2 problems (network delay time, path with maximum probability)..",
            "achievement": "Can adapt Dijkstra's Algorithm to non-standard variants (probability maximization, K-stop constraints).",
            "day": 213
          },
          {
            "topic": "Bellman-Ford Algorithm (Medium, Day 1/2) (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Handling negative weights, V-1 relaxation rounds, negative cycle detection via a Vth round. | Code: Begin implementing Bellman-Ford. | Practice: None yet..",
            "achievement": "Understands the deep theoretical parameters of Bellman-Ford Algorithm (Medium, Day 1/2).",
            "day": 214
          },
          {
            "topic": "Bellman-Ford Algorithm (Medium, Day 1/2) (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Handling negative weights, V-1 relaxation rounds, negative cycle detection via a Vth round. | Code: Begin implementing Bellman-Ford. | Practice: None yet.. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Bellman-Ford Algorithm (Medium, Day 1/2).",
            "day": 215
          },
          {
            "topic": "Bellman-Ford Algorithm (Medium, Day 1/2) (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Handling negative weights, V-1 relaxation rounds, negative cycle detection via a Vth round. | Code: Begin implementing Bellman-Ford. | Practice: None yet..",
            "achievement": "Understands why exactly V-1 rounds of relaxation guarantee correctness.",
            "day": 216
          },
          {
            "day": 217,
            "topic": "Weekly Buffer & Revision Day (Week 31)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Bellman-Ford: Finish + Practice (Medium, Day 2/2) (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Review negative cycle detection (extra round still relaxes an edge → cycle exists). | Code: Finish Bellman-Ford with negative cycle detection. | Practice: 2 problems (cheapest flights with K stops via Bellman-Ford-style relaxation, detect negative cycle)..",
            "achievement": "Understands the deep theoretical parameters of Bellman-Ford: Finish + Practice (Medium, Day 2/2).",
            "day": 218
          },
          {
            "topic": "Bellman-Ford: Finish + Practice (Medium, Day 2/2) (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Review negative cycle detection (extra round still relaxes an edge → cycle exists). | Code: Finish Bellman-Ford with negative cycle detection. | Practice: 2 problems (cheapest flights with K stops via Bellman-Ford-style relaxation, detect negative cycle).. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Bellman-Ford: Finish + Practice (Medium, Day 2/2).",
            "day": 219
          },
          {
            "topic": "Bellman-Ford: Finish + Practice (Medium, Day 2/2) (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Review negative cycle detection (extra round still relaxes an edge → cycle exists). | Code: Finish Bellman-Ford with negative cycle detection. | Practice: 2 problems (cheapest flights with K stops via Bellman-Ford-style relaxation, detect negative cycle)..",
            "achievement": "Can implement Bellman-Ford and correctly detect negative cycles.",
            "day": 220
          },
          {
            "topic": "Floyd-Warshall Algorithm (Medium, Day 1/2) (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: All-pairs shortest path via DP, the `dp[i][j] = min(dp[i][j], dp[i][k]+dp[k][j])` transition. | Code: Begin implementing Floyd-Warshall. | Practice: None yet..",
            "achievement": "Understands the deep theoretical parameters of Floyd-Warshall Algorithm (Medium, Day 1/2).",
            "day": 221
          },
          {
            "topic": "Floyd-Warshall Algorithm (Medium, Day 1/2) (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: All-pairs shortest path via DP, the `dp[i][j] = min(dp[i][j], dp[i][k]+dp[k][j])` transition. | Code: Begin implementing Floyd-Warshall. | Practice: None yet.. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Floyd-Warshall Algorithm (Medium, Day 1/2).",
            "day": 222
          },
          {
            "topic": "Floyd-Warshall Algorithm (Medium, Day 1/2) (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: All-pairs shortest path via DP, the `dp[i][j] = min(dp[i][j], dp[i][k]+dp[k][j])` transition. | Code: Begin implementing Floyd-Warshall. | Practice: None yet..",
            "achievement": "Understands why the loop order (k outermost) is essential for correctness.",
            "day": 223
          },
          {
            "day": 224,
            "topic": "Weekly Buffer & Revision Day (Week 32)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Floyd-Warshall: Finish + Practice (Medium, Day 2/2) (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Review when Floyd-Warshall beats running Dijkstra V times (dense small graphs). | Code: Finish and test Floyd-Warshall. | Practice: 2 problems (find the city with smallest number of neighbors, all-pairs shortest path applications)..",
            "achievement": "Understands the deep theoretical parameters of Floyd-Warshall: Finish + Practice (Medium, Day 2/2).",
            "day": 225
          },
          {
            "topic": "Floyd-Warshall: Finish + Practice (Medium, Day 2/2) (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Review when Floyd-Warshall beats running Dijkstra V times (dense small graphs). | Code: Finish and test Floyd-Warshall. | Practice: 2 problems (find the city with smallest number of neighbors, all-pairs shortest path applications).. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Floyd-Warshall: Finish + Practice (Medium, Day 2/2).",
            "day": 226
          },
          {
            "topic": "Floyd-Warshall: Finish + Practice (Medium, Day 2/2) (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Review when Floyd-Warshall beats running Dijkstra V times (dense small graphs). | Code: Finish and test Floyd-Warshall. | Practice: 2 problems (find the city with smallest number of neighbors, all-pairs shortest path applications)..",
            "achievement": "Can implement Floyd-Warshall in O(V³) and justify when it's preferable to V calls to Dijkstra.",
            "day": 227
          },
          {
            "topic": "Minimum Spanning Tree: Kruskal's Algorithm (Medium, Day 1/2) (Part 1: Concept Deep Dive)",
            "priority": "NICE TO HAVE",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Edge-selection greedy approach using Union-Find to avoid cycles. | Code: Begin implementing Kruskal's Algorithm (reusing your Phase 8 DSU). | Practice: None yet..",
            "achievement": "Understands the deep theoretical parameters of Minimum Spanning Tree: Kruskal's Algorithm (Medium, Day 1/2).",
            "day": 228
          },
          {
            "topic": "Minimum Spanning Tree: Kruskal's Algorithm (Medium, Day 1/2) (Part 2: Implementation)",
            "priority": "NICE TO HAVE",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Edge-selection greedy approach using Union-Find to avoid cycles. | Code: Begin implementing Kruskal's Algorithm (reusing your Phase 8 DSU). | Practice: None yet.. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Minimum Spanning Tree: Kruskal's Algorithm (Medium, Day 1/2).",
            "day": 229
          },
          {
            "topic": "Minimum Spanning Tree: Kruskal's Algorithm (Medium, Day 1/2) (Part 3: Edge Cases & Lab)",
            "priority": "NICE TO HAVE",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Edge-selection greedy approach using Union-Find to avoid cycles. | Code: Begin implementing Kruskal's Algorithm (reusing your Phase 8 DSU). | Practice: None yet..",
            "achievement": "Understands why sorting edges by weight first makes the greedy choice correct.",
            "day": 230
          },
          {
            "day": 231,
            "topic": "Weekly Buffer & Revision Day (Week 33)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Kruskal's: Finish + Prim's Algorithm Intro (Medium, Day 2/2) (Part 1: Concept Deep Dive)",
            "priority": "NICE TO HAVE",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Finish Kruskal's; learn Prim's Algorithm (vertex-addition greedy using a PriorityQueue). | Code: Finish Kruskal's Algorithm; begin Prim's Algorithm. | Practice: 1 problem (minimum cost to connect all points using Kruskal's)..",
            "achievement": "Understands the deep theoretical parameters of Kruskal's: Finish + Prim's Algorithm Intro (Medium, Day 2/2).",
            "day": 232
          },
          {
            "topic": "Kruskal's: Finish + Prim's Algorithm Intro (Medium, Day 2/2) (Part 2: Implementation)",
            "priority": "NICE TO HAVE",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Finish Kruskal's; learn Prim's Algorithm (vertex-addition greedy using a PriorityQueue). | Code: Finish Kruskal's Algorithm; begin Prim's Algorithm. | Practice: 1 problem (minimum cost to connect all points using Kruskal's).. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Kruskal's: Finish + Prim's Algorithm Intro (Medium, Day 2/2).",
            "day": 233
          },
          {
            "topic": "Kruskal's: Finish + Prim's Algorithm Intro (Medium, Day 2/2) (Part 3: Edge Cases & Lab)",
            "priority": "NICE TO HAVE",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Finish Kruskal's; learn Prim's Algorithm (vertex-addition greedy using a PriorityQueue). | Code: Finish Kruskal's Algorithm; begin Prim's Algorithm. | Practice: 1 problem (minimum cost to connect all points using Kruskal's)..",
            "achievement": "Has a working Kruskal's implementation and understands Prim's core mechanic.",
            "day": 234
          },
          {
            "topic": "Prim's Algorithm: Finish + Practice (Medium, Day 1/2 — continuing) (Part 1: Concept Deep Dive)",
            "priority": "NICE TO HAVE",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Review Prim's PriorityQueue-based vertex selection in detail. | Code: Finish Prim's Algorithm. | Practice: 2 problems (minimum cost to connect all points using Prim's, comparing both MST approaches on the same input)..",
            "achievement": "Understands the deep theoretical parameters of Prim's Algorithm: Finish + Practice (Medium, Day 1/2 — continuing).",
            "day": 235
          },
          {
            "topic": "Prim's Algorithm: Finish + Practice (Medium, Day 1/2 — continuing) (Part 2: Implementation)",
            "priority": "NICE TO HAVE",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Review Prim's PriorityQueue-based vertex selection in detail. | Code: Finish Prim's Algorithm. | Practice: 2 problems (minimum cost to connect all points using Prim's, comparing both MST approaches on the same input).. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Prim's Algorithm: Finish + Practice (Medium, Day 1/2 — continuing).",
            "day": 236
          },
          {
            "topic": "Prim's Algorithm: Finish + Practice (Medium, Day 1/2 — continuing) (Part 3: Edge Cases & Lab)",
            "priority": "NICE TO HAVE",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Review Prim's PriorityQueue-based vertex selection in detail. | Code: Finish Prim's Algorithm. | Practice: 2 problems (minimum cost to connect all points using Prim's, comparing both MST approaches on the same input)..",
            "achievement": "Can implement both Kruskal's and Prim's, and explain which is more efficient for sparse vs dense graphs.",
            "day": 237
          },
          {
            "day": 238,
            "topic": "Weekly Buffer & Revision Day (Week 34)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Cycle Detection: Directed & Undirected Graphs (Light) (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Directed graph cycle detection (DFS with 3-color marking: white/gray/black), undirected graph cycle detection (DFS or Union-Find). | Code: Implement cycle detection for both directed and undirected graphs. | Practice: 2 problems (course schedule revisited through the cycle-detection lens, redundant connection)..",
            "achievement": "Understands the deep theoretical parameters of Cycle Detection: Directed & Undirected Graphs (Light).",
            "day": 239
          },
          {
            "topic": "Cycle Detection: Directed & Undirected Graphs (Light) (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Directed graph cycle detection (DFS with 3-color marking: white/gray/black), undirected graph cycle detection (DFS or Union-Find). | Code: Implement cycle detection for both directed and undirected graphs. | Practice: 2 problems (course schedule revisited through the cycle-detection lens, redundant connection).. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Cycle Detection: Directed & Undirected Graphs (Light).",
            "day": 240
          },
          {
            "topic": "Cycle Detection: Directed & Undirected Graphs (Light) (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Directed graph cycle detection (DFS with 3-color marking: white/gray/black), undirected graph cycle detection (DFS or Union-Find). | Code: Implement cycle detection for both directed and undirected graphs. | Practice: 2 problems (course schedule revisited through the cycle-detection lens, redundant connection)..",
            "achievement": "Can implement cycle detection for both graph types and explain why undirected cycle detection can't reuse the directed 3-color approach directly.",
            "day": 241
          },
          {
            "topic": "Strongly Connected Components: Tarjan's/Kosaraju's (Heavy, Day 1/2) (Part 1: Concept Deep Dive)",
            "priority": "NICE TO HAVE",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: SCC concept, the high-level idea behind Tarjan's algorithm (low-link values) or Kosaraju's (two-pass DFS). | Code: Begin implementing Tarjan's SCC algorithm. | Practice: None yet..",
            "achievement": "Understands the deep theoretical parameters of Strongly Connected Components: Tarjan's/Kosaraju's (Heavy, Day 1/2).",
            "day": 242
          },
          {
            "topic": "Strongly Connected Components: Tarjan's/Kosaraju's (Heavy, Day 1/2) (Part 2: Implementation)",
            "priority": "NICE TO HAVE",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: SCC concept, the high-level idea behind Tarjan's algorithm (low-link values) or Kosaraju's (two-pass DFS). | Code: Begin implementing Tarjan's SCC algorithm. | Practice: None yet.. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Strongly Connected Components: Tarjan's/Kosaraju's (Heavy, Day 1/2).",
            "day": 243
          },
          {
            "topic": "Strongly Connected Components: Tarjan's/Kosaraju's (Heavy, Day 1/2) (Part 3: Edge Cases & Lab)",
            "priority": "NICE TO HAVE",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: SCC concept, the high-level idea behind Tarjan's algorithm (low-link values) or Kosaraju's (two-pass DFS). | Code: Begin implementing Tarjan's SCC algorithm. | Practice: None yet..",
            "achievement": "Understands what a low-link value represents and how it identifies an SCC root.",
            "day": 244
          },
          {
            "day": 245,
            "topic": "Weekly Buffer & Revision Day (Week 35)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "SCC: Finish Implementation (Heavy, Day 2/2) (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Review the full algorithm trace on a small example graph. | Code: Finish and test the SCC implementation. | Practice: 1 problem (number of strongly connected components)..",
            "achievement": "Understands the deep theoretical parameters of SCC: Finish Implementation (Heavy, Day 2/2).",
            "day": 246
          },
          {
            "topic": "SCC: Finish Implementation (Heavy, Day 2/2) (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Review the full algorithm trace on a small example graph. | Code: Finish and test the SCC implementation. | Practice: 1 problem (number of strongly connected components).. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of SCC: Finish Implementation (Heavy, Day 2/2).",
            "day": 247
          },
          {
            "topic": "SCC: Finish Implementation (Heavy, Day 2/2) (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Review the full algorithm trace on a small example graph. | Code: Finish and test the SCC implementation. | Practice: 1 problem (number of strongly connected components)..",
            "achievement": "Has a working SCC detection algorithm and can trace it by hand on a small graph.",
            "day": 248
          },
          {
            "topic": "Graph Bridges: Tarjan's Bridge Discovery (Medium, Day 1/2) (Part 1: Concept Deep Dive)",
            "priority": "NICE TO HAVE",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Bridge-finding via DFS discovery times and low-link values (closely related to SCC's low-link concept from Day 123). | Code: Begin implementing Tarjan's Bridges algorithm. | Practice: None yet..",
            "achievement": "Understands the deep theoretical parameters of Graph Bridges: Tarjan's Bridge Discovery (Medium, Day 1/2).",
            "day": 249
          },
          {
            "topic": "Graph Bridges: Tarjan's Bridge Discovery (Medium, Day 1/2) (Part 2: Implementation)",
            "priority": "NICE TO HAVE",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Bridge-finding via DFS discovery times and low-link values (closely related to SCC's low-link concept from Day 123). | Code: Begin implementing Tarjan's Bridges algorithm. | Practice: None yet.. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Graph Bridges: Tarjan's Bridge Discovery (Medium, Day 1/2).",
            "day": 250
          },
          {
            "topic": "Graph Bridges: Tarjan's Bridge Discovery (Medium, Day 1/2) (Part 3: Edge Cases & Lab)",
            "priority": "NICE TO HAVE",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Bridge-finding via DFS discovery times and low-link values (closely related to SCC's low-link concept from Day 123). | Code: Begin implementing Tarjan's Bridges algorithm. | Practice: None yet..",
            "achievement": "Understands the bridge condition (`low[child] > disc[node]`) and why it identifies a critical edge.",
            "day": 251
          },
          {
            "day": 252,
            "topic": "Weekly Buffer & Revision Day (Week 36)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Bridges: Finish + Practice (Medium, Day 2/2) (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Review articulation points as a closely related concept (briefly, for awareness). | Code: Finish and test the bridge-finding algorithm (LeetCode 1192 — Critical Connections). | Practice: 2 problems (critical connections in a network, articulation points awareness problem)..",
            "achievement": "Understands the deep theoretical parameters of Bridges: Finish + Practice (Medium, Day 2/2).",
            "day": 253
          },
          {
            "topic": "Bridges: Finish + Practice (Medium, Day 2/2) (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Review articulation points as a closely related concept (briefly, for awareness). | Code: Finish and test the bridge-finding algorithm (LeetCode 1192 — Critical Connections). | Practice: 2 problems (critical connections in a network, articulation points awareness problem).. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Bridges: Finish + Practice (Medium, Day 2/2).",
            "day": 254
          },
          {
            "topic": "Bridges: Finish + Practice (Medium, Day 2/2) (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Review articulation points as a closely related concept (briefly, for awareness). | Code: Finish and test the bridge-finding algorithm (LeetCode 1192 — Critical Connections). | Practice: 2 problems (critical connections in a network, articulation points awareness problem)..",
            "achievement": "Can implement Tarjan's Bridge Discovery and solve Critical Connections in a Network.",
            "day": 255
          },
          {
            "topic": "HANDS-ON LAB: Network Router Optimizer + Phase Cheat Sheet (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Review the full Graphs cheat sheet (representations, BFS/DFS, topo sort, bipartite, shortest path, MST, SCC, bridges). | Code: Complete the Network Router Optimizer lab, combining traversal + shortest-path techniques. | Practice: Timed mixed review (4 problems spanning the entire Graphs phase)..",
            "achievement": "Understands the deep theoretical parameters of HANDS-ON LAB: Network Router Optimizer + Phase Cheat Sheet.",
            "day": 256
          },
          {
            "topic": "HANDS-ON LAB: Network Router Optimizer + Phase Cheat Sheet (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Review the full Graphs cheat sheet (representations, BFS/DFS, topo sort, bipartite, shortest path, MST, SCC, bridges). | Code: Complete the Network Router Optimizer lab, combining traversal + shortest-path techniques. | Practice: Timed mixed review (4 problems spanning the entire Graphs phase).. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of HANDS-ON LAB: Network Router Optimizer + Phase Cheat Sheet.",
            "day": 257
          },
          {
            "topic": "HANDS-ON LAB: Network Router Optimizer + Phase Cheat Sheet (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Review the full Graphs cheat sheet (representations, BFS/DFS, topo sort, bipartite, shortest path, MST, SCC, bridges). | Code: Complete the Network Router Optimizer lab, combining traversal + shortest-path techniques. | Practice: Timed mixed review (4 problems spanning the entire Graphs phase)..",
            "achievement": "Can recite the full Graphs cheat sheet and confidently select the right algorithm family for any new graph problem.",
            "day": 258
          },
          {
            "day": 259,
            "topic": "Weekly Buffer & Revision Day (Week 37)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          }
        ]
      },
      {
        "id": "7-10",
        "title": "GREEDY ALGORITHMS",
        "days": "Days 260–273",
        "items": [
          {
            "day": 260,
            "topic": "Greedy Fundamentals: Proving Correctness (Light)",
            "tasks": "Learn: Greedy choice property, optimal substructure, how to argue (exchange argument) that a greedy approach is correct. | Code: None — conceptual day with worked proof sketches. | Practice: 2 conceptual problems (is this greedy approach correct? prove or disprove).",
            "achievement": "Can sketch an exchange-argument proof for why a proposed greedy strategy is or isn't correct.",
            "priority": "IMPORTANT"
          },
          {
            "day": 261,
            "topic": "Activity Selection / Interval Scheduling (Light)",
            "tasks": "Learn: Sort-by-end-time greedy strategy, why sorting by start time fails. | Code: Implement Activity Selection. | Practice: 2 problems (activity selection, non-overlapping intervals).",
            "achievement": "Can solve Activity Selection optimally and explain precisely why sorting by start time produces a wrong answer.",
            "priority": "IMPORTANT"
          },
          {
            "day": 262,
            "topic": "Merge Intervals (Light)",
            "tasks": "Learn: Interval merging — sort by start time, then linear merge pass. | Code: Implement Merge Intervals. | Practice: 2 problems (merge intervals, insert interval).",
            "achievement": "Can implement Merge Intervals in O(N log N) and explain why this sort uses start time (unlike Day 129).",
            "priority": "IMPORTANT"
          },
          {
            "day": 263,
            "topic": "Jump Game Variants (Medium, Day 1/2)",
            "tasks": "Learn: Reachability (Jump Game I) and minimum jumps (Jump Game II) via greedy range-extension. | Code: Begin implementing Jump Game II. | Practice: None yet.",
            "achievement": "Understands the \"farthest reachable from current window\" greedy invariant before finishing the code.",
            "priority": "IMPORTANT"
          },
          {
            "day": 264,
            "topic": "Jump Game: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review Jump Game I (simpler reachability-only variant) by contrast. | Code: Finish Jump Game II; implement Jump Game I. | Practice: 2 problems (Jump Game I & II, Jump Game III as an extension).",
            "achievement": "Can solve Jump Game II in O(N) using greedy range tracking, distinct from a BFS-based approach.",
            "priority": "IMPORTANT"
          },
          {
            "day": 265,
            "topic": "Huffman Coding (Medium, Day 1/2)",
            "tasks": "Learn: Optimal prefix-free encoding, building the encoding tree using a min-heap of frequencies. | Code: Begin implementing Huffman Coding tree construction. | Practice: None yet.",
            "achievement": "Can construct a Huffman tree by hand for a small frequency table before finishing the code.",
            "priority": "IMPORTANT"
          },
          {
            "day": 266,
            "topic": "Weekly Buffer & Revision Day (Week 38)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "day": 267,
            "topic": "Huffman Coding: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review how the tree generates variable-length prefix codes per character. | Code: Finish Huffman Coding, generating the actual code table. | Practice: 1 problem (implement Huffman encode/decode end-to-end).",
            "achievement": "Has a complete working Huffman encoder that produces a valid prefix-free code table.",
            "priority": "IMPORTANT"
          },
          {
            "day": 268,
            "topic": "Task Scheduling: Job Sequencing & Task Scheduler (Medium, Day 1/2)",
            "tasks": "Learn: Job Sequencing with Deadlines (greedy by profit, then by feasibility), Task Scheduler (LeetCode 621 — frequency-based cooldown logic). | Code: Begin implementing Task Scheduler. | Practice: None yet.",
            "achievement": "Understands the formula-based approach to Task Scheduler (max frequency × (n+1) + ties) before finishing code.",
            "priority": "IMPORTANT"
          },
          {
            "day": 269,
            "topic": "Task Scheduling: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review Job Sequencing with Deadlines as a separate but related greedy pattern. | Code: Finish Task Scheduler; implement Job Sequencing with Deadlines. | Practice: 2 problems (task scheduler, job sequencing with deadlines).",
            "achievement": "Can implement both task-scheduling variants and explain the formula-based shortcut for Task Scheduler.",
            "priority": "IMPORTANT"
          },
          {
            "day": 270,
            "topic": "Fractional Knapsack + Gas Station (Light)",
            "tasks": "Learn: Fractional Knapsack (value/weight ratio greedy — contrast with 0/1 Knapsack, which is NOT greedy), Gas Station's circular feasibility check. | Code: Implement Fractional Knapsack and Gas Station. | Practice: 2 problems (fractional knapsack, gas station).",
            "achievement": "Can explain precisely why Fractional Knapsack is greedy-solvable but 0/1 Knapsack is not, and solve Gas Station in O(N).",
            "priority": "IMPORTANT"
          },
          {
            "day": 271,
            "topic": "Partitioning & Assignment Problems (Light)",
            "tasks": "Learn: Greedy partitioning patterns (assign cookies, two-city scheduling) — the sorting criterion that enables the greedy choice. | Code: Implement Assign Cookies and Two City Scheduling. | Practice: 2 problems (assign cookies, two city scheduling).",
            "achievement": "Can identify the correct sorting criterion for a new greedy partitioning problem within the first read.",
            "priority": "IMPORTANT"
          },
          {
            "day": 272,
            "topic": "Advanced Greedy Problems + Phase Cheat Sheet",
            "tasks": "Learn: Review the handbook's advanced greedy problems section. Review the full Greedy Algorithms phase cheat sheet. | Code: None — review day. | Practice: Timed mixed review (3 problems spanning the entire Greedy phase).",
            "achievement": "Can distinguish, for any new unseen problem, whether greedy is provably correct or whether it secretly requires DP.",
            "priority": "IMPORTANT"
          },
          {
            "day": 273,
            "topic": "Weekly Buffer & Revision Day (Week 39)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          }
        ]
      },
      {
        "id": "7-11",
        "title": "DYNAMIC PROGRAMMING",
        "days": "Days 274–358",
        "items": [
          {
            "topic": "DP Fundamentals: Memoization vs Tabulation (Light) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: State definition, transition relation, base cases; converting brute-force recursion → memoization → tabulation. | Code: Take naive recursive Fibonacci and convert it step-by-step to memoized, then tabulated. | Practice: 2 problems (Fibonacci variants, climbing stairs via all 3 forms)..",
            "achievement": "Mastered the high-level architecture and design of DP Fundamentals: Memoization vs Tabulation (Light).",
            "day": 274
          },
          {
            "topic": "DP Fundamentals: Memoization vs Tabulation (Light) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: State definition, transition relation, base cases; converting brute-force recursion → memoization → tabulation. | Code: Take naive recursive Fibonacci and convert it step-by-step to memoized, then tabulated. | Practice: 2 problems (Fibonacci variants, climbing stairs via all 3 forms).. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for DP Fundamentals: Memoization vs Tabulation (Light).",
            "day": 275
          },
          {
            "topic": "DP Fundamentals: Memoization vs Tabulation (Light) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: State definition, transition relation, base cases; converting brute-force recursion → memoization → tabulation. | Code: Take naive recursive Fibonacci and convert it step-by-step to memoized, then tabulated. | Practice: 2 problems (Fibonacci variants, climbing stairs via all 3 forms)..",
            "achievement": "Hardened the implementation of DP Fundamentals: Memoization vs Tabulation (Light) against production-level failures.",
            "day": 276
          },
          {
            "topic": "DP Fundamentals: Memoization vs Tabulation (Light) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: State definition, transition relation, base cases; converting brute-force recursion → memoization → tabulation. | Code: Take naive recursive Fibonacci and convert it step-by-step to memoized, then tabulated. | Practice: 2 problems (Fibonacci variants, climbing stairs via all 3 forms)..",
            "achievement": "Can convert any brute-force recursive solution to memoized, then to tabulated, as a repeatable 3-step process.",
            "day": 277
          },
          {
            "topic": "1D DP: Climbing Stairs & House Robber (Light) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: Climbing Stairs DP transition, House Robber's \"skip-adjacent\" transition. | Code: Implement Climbing Stairs and House Robber. | Practice: 2 problems (climbing stairs, house robber)..",
            "achievement": "Mastered the high-level architecture and design of 1D DP: Climbing Stairs & House Robber (Light).",
            "day": 278
          },
          {
            "topic": "1D DP: Climbing Stairs & House Robber (Light) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: Climbing Stairs DP transition, House Robber's \"skip-adjacent\" transition. | Code: Implement Climbing Stairs and House Robber. | Practice: 2 problems (climbing stairs, house robber).. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for 1D DP: Climbing Stairs & House Robber (Light).",
            "day": 279
          },
          {
            "day": 280,
            "topic": "Weekly Buffer & Revision Day (Week 40)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "1D DP: Climbing Stairs & House Robber (Light) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: Climbing Stairs DP transition, House Robber's \"skip-adjacent\" transition. | Code: Implement Climbing Stairs and House Robber. | Practice: 2 problems (climbing stairs, house robber)..",
            "achievement": "Hardened the implementation of 1D DP: Climbing Stairs & House Robber (Light) against production-level failures.",
            "day": 281
          },
          {
            "topic": "1D DP: Climbing Stairs & House Robber (Light) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: Climbing Stairs DP transition, House Robber's \"skip-adjacent\" transition. | Code: Implement Climbing Stairs and House Robber. | Practice: 2 problems (climbing stairs, house robber)..",
            "achievement": "Can write the House Robber transition and explain why it generalizes to a wide class of \"skip-adjacent\" problems.",
            "day": 282
          },
          {
            "topic": "1D DP: House Robber II & Min Cost Climbing Stairs (Light) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: House Robber II's circular-array adaptation (run the linear version twice, excluding first/last). | Code: Implement House Robber II and Min Cost Climbing Stairs. | Practice: 2 problems (house robber II, min cost climbing stairs)..",
            "achievement": "Mastered the high-level architecture and design of 1D DP: House Robber II & Min Cost Climbing Stairs (Light).",
            "day": 283
          },
          {
            "topic": "1D DP: House Robber II & Min Cost Climbing Stairs (Light) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: House Robber II's circular-array adaptation (run the linear version twice, excluding first/last). | Code: Implement House Robber II and Min Cost Climbing Stairs. | Practice: 2 problems (house robber II, min cost climbing stairs).. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for 1D DP: House Robber II & Min Cost Climbing Stairs (Light).",
            "day": 284
          },
          {
            "topic": "1D DP: House Robber II & Min Cost Climbing Stairs (Light) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: House Robber II's circular-array adaptation (run the linear version twice, excluding first/last). | Code: Implement House Robber II and Min Cost Climbing Stairs. | Practice: 2 problems (house robber II, min cost climbing stairs)..",
            "achievement": "Hardened the implementation of 1D DP: House Robber II & Min Cost Climbing Stairs (Light) against production-level failures.",
            "day": 285
          },
          {
            "topic": "1D DP: House Robber II & Min Cost Climbing Stairs (Light) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: House Robber II's circular-array adaptation (run the linear version twice, excluding first/last). | Code: Implement House Robber II and Min Cost Climbing Stairs. | Practice: 2 problems (house robber II, min cost climbing stairs)..",
            "achievement": "Can adapt a linear 1D DP solution to a circular-array variant by running it twice with different exclusions.",
            "day": 286
          },
          {
            "day": 287,
            "topic": "Weekly Buffer & Revision Day (Week 41)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "0/1 Knapsack: 2D DP Table (Medium, Day 1/2) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: Weight/value representation, the classic 2D DP table construction for 0/1 Knapsack. | Code: Begin implementing 0/1 Knapsack with a full 2D DP table. | Practice: None yet..",
            "achievement": "Mastered the high-level architecture and design of 0/1 Knapsack: 2D DP Table (Medium, Day 1/2).",
            "day": 288
          },
          {
            "topic": "0/1 Knapsack: 2D DP Table (Medium, Day 1/2) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: Weight/value representation, the classic 2D DP table construction for 0/1 Knapsack. | Code: Begin implementing 0/1 Knapsack with a full 2D DP table. | Practice: None yet.. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for 0/1 Knapsack: 2D DP Table (Medium, Day 1/2).",
            "day": 289
          },
          {
            "topic": "0/1 Knapsack: 2D DP Table (Medium, Day 1/2) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: Weight/value representation, the classic 2D DP table construction for 0/1 Knapsack. | Code: Begin implementing 0/1 Knapsack with a full 2D DP table. | Practice: None yet..",
            "achievement": "Hardened the implementation of 0/1 Knapsack: 2D DP Table (Medium, Day 1/2) against production-level failures.",
            "day": 290
          },
          {
            "topic": "0/1 Knapsack: 2D DP Table (Medium, Day 1/2) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: Weight/value representation, the classic 2D DP table construction for 0/1 Knapsack. | Code: Begin implementing 0/1 Knapsack with a full 2D DP table. | Practice: None yet..",
            "achievement": "Has a working 2D Knapsack DP table and can read off the optimal value.",
            "day": 291
          },
          {
            "topic": "0/1 Knapsack: Space Optimization + Practice (Medium, Day 2/2) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: Reducing 2D DP to 1D by iterating weights in reverse order — why iteration order matters. | Code: Refactor to a space-optimized 1D DP array. | Practice: 2 problems (partition equal subset sum, target sum — both Knapsack-shaped)..",
            "achievement": "Mastered the high-level architecture and design of 0/1 Knapsack: Space Optimization + Practice (Medium, Day 2/2).",
            "day": 292
          },
          {
            "topic": "0/1 Knapsack: Space Optimization + Practice (Medium, Day 2/2) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: Reducing 2D DP to 1D by iterating weights in reverse order — why iteration order matters. | Code: Refactor to a space-optimized 1D DP array. | Practice: 2 problems (partition equal subset sum, target sum — both Knapsack-shaped).. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for 0/1 Knapsack: Space Optimization + Practice (Medium, Day 2/2).",
            "day": 293
          },
          {
            "day": 294,
            "topic": "Weekly Buffer & Revision Day (Week 42)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "0/1 Knapsack: Space Optimization + Practice (Medium, Day 2/2) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: Reducing 2D DP to 1D by iterating weights in reverse order — why iteration order matters. | Code: Refactor to a space-optimized 1D DP array. | Practice: 2 problems (partition equal subset sum, target sum — both Knapsack-shaped)..",
            "achievement": "Hardened the implementation of 0/1 Knapsack: Space Optimization + Practice (Medium, Day 2/2) against production-level failures.",
            "day": 295
          },
          {
            "topic": "0/1 Knapsack: Space Optimization + Practice (Medium, Day 2/2) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: Reducing 2D DP to 1D by iterating weights in reverse order — why iteration order matters. | Code: Refactor to a space-optimized 1D DP array. | Practice: 2 problems (partition equal subset sum, target sum — both Knapsack-shaped)..",
            "achievement": "Can implement 0/1 Knapsack with O(capacity) space instead of O(N × capacity).",
            "day": 296
          },
          {
            "topic": "Unbounded Knapsack & Coin Change (Medium, Day 1/2) (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Unbounded Knapsack's forward iteration (vs 0/1's reverse iteration) — items can be reused. | Code: Begin implementing Coin Change (minimum coins). | Practice: None yet..",
            "achievement": "Understands the deep theoretical parameters of Unbounded Knapsack & Coin Change (Medium, Day 1/2).",
            "day": 297
          },
          {
            "topic": "Unbounded Knapsack & Coin Change (Medium, Day 1/2) (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Unbounded Knapsack's forward iteration (vs 0/1's reverse iteration) — items can be reused. | Code: Begin implementing Coin Change (minimum coins). | Practice: None yet.. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Unbounded Knapsack & Coin Change (Medium, Day 1/2).",
            "day": 298
          },
          {
            "topic": "Unbounded Knapsack & Coin Change (Medium, Day 1/2) (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Unbounded Knapsack's forward iteration (vs 0/1's reverse iteration) — items can be reused. | Code: Begin implementing Coin Change (minimum coins). | Practice: None yet..",
            "achievement": "Understands precisely why forward iteration allows item reuse while reverse iteration (Day 144) prevents it.",
            "day": 299
          },
          {
            "topic": "Coin Change: Finish + Subset Sum Practice (Medium, Day 2/2) (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Review Coin Change II (count combinations, not minimum) as a closely related variant. | Code: Finish Coin Change; implement Coin Change II. | Practice: 2 problems (coin change, coin change II)..",
            "achievement": "Understands the deep theoretical parameters of Coin Change: Finish + Subset Sum Practice (Medium, Day 2/2).",
            "day": 300
          },
          {
            "day": 301,
            "topic": "Weekly Buffer & Revision Day (Week 43)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Coin Change: Finish + Subset Sum Practice (Medium, Day 2/2) (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Review Coin Change II (count combinations, not minimum) as a closely related variant. | Code: Finish Coin Change; implement Coin Change II. | Practice: 2 problems (coin change, coin change II).. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Coin Change: Finish + Subset Sum Practice (Medium, Day 2/2).",
            "day": 302
          },
          {
            "topic": "Coin Change: Finish + Subset Sum Practice (Medium, Day 2/2) (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Review Coin Change II (count combinations, not minimum) as a closely related variant. | Code: Finish Coin Change; implement Coin Change II. | Practice: 2 problems (coin change, coin change II)..",
            "achievement": "Can distinguish \"minimum coins\" DP from \"count combinations\" DP and implement both correctly.",
            "day": 303
          },
          {
            "topic": "DP on Strings: Longest Common Subsequence (Light) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: LCS 2D DP table construction, the diagonal/up/left transition logic. | Code: Implement LCS. | Practice: 2 problems (LCS, longest common substring as a contrast)..",
            "achievement": "Mastered the high-level architecture and design of DP on Strings: Longest Common Subsequence (Light).",
            "day": 304
          },
          {
            "topic": "DP on Strings: Longest Common Subsequence (Light) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: LCS 2D DP table construction, the diagonal/up/left transition logic. | Code: Implement LCS. | Practice: 2 problems (LCS, longest common substring as a contrast).. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for DP on Strings: Longest Common Subsequence (Light).",
            "day": 305
          },
          {
            "topic": "DP on Strings: Longest Common Subsequence (Light) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: LCS 2D DP table construction, the diagonal/up/left transition logic. | Code: Implement LCS. | Practice: 2 problems (LCS, longest common substring as a contrast)..",
            "achievement": "Hardened the implementation of DP on Strings: Longest Common Subsequence (Light) against production-level failures.",
            "day": 306
          },
          {
            "topic": "DP on Strings: Longest Common Subsequence (Light) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: LCS 2D DP table construction, the diagonal/up/left transition logic. | Code: Implement LCS. | Practice: 2 problems (LCS, longest common substring as a contrast)..",
            "achievement": "Can implement LCS in O(N×M) and explain the difference between \"subsequence\" and \"substring\" DP transitions.",
            "day": 307
          },
          {
            "day": 308,
            "topic": "Weekly Buffer & Revision Day (Week 44)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "DP on Strings: Longest Palindromic Subsequence (Light) (Part 1: Theoretical Architecture)",
            "priority": "MUST KNOW",
            "tasks": "Study low-level diagrams, core specs, and trade-offs of: Learn: Reframing palindrome-subsequence as LCS(string, reverse(string)) — connecting back to Day 147. | Code: Implement Longest Palindromic Subsequence. | Practice: 2 problems (longest palindromic subsequence, minimum insertions to make palindrome)..",
            "achievement": "Mastered the high-level architecture and design of DP on Strings: Longest Palindromic Subsequence (Light).",
            "day": 309
          },
          {
            "topic": "DP on Strings: Longest Palindromic Subsequence (Light) (Part 2: Implementation & Tests)",
            "priority": "MUST KNOW",
            "tasks": "Build the core codebase, configure components, and write initial unit tests for: Learn: Reframing palindrome-subsequence as LCS(string, reverse(string)) — connecting back to Day 147. | Code: Implement Longest Palindromic Subsequence. | Practice: 2 problems (longest palindromic subsequence, minimum insertions to make palindrome).. Push your work to your GitHub repository.",
            "achievement": "Completed initial coding and verification tests for DP on Strings: Longest Palindromic Subsequence (Light).",
            "day": 310
          },
          {
            "topic": "DP on Strings: Longest Palindromic Subsequence (Light) (Part 3: Resiliency & Logging)",
            "priority": "MUST KNOW",
            "tasks": "Add error handling, circuit breakers, exception mapping, or fallback logic for: Learn: Reframing palindrome-subsequence as LCS(string, reverse(string)) — connecting back to Day 147. | Code: Implement Longest Palindromic Subsequence. | Practice: 2 problems (longest palindromic subsequence, minimum insertions to make palindrome)..",
            "achievement": "Hardened the implementation of DP on Strings: Longest Palindromic Subsequence (Light) against production-level failures.",
            "day": 311
          },
          {
            "topic": "DP on Strings: Longest Palindromic Subsequence (Light) (Part 4: Mock Interview & Quiz)",
            "priority": "MUST KNOW",
            "tasks": "Review standard interview questions, explain design decisions, and optimize code for: Learn: Reframing palindrome-subsequence as LCS(string, reverse(string)) — connecting back to Day 147. | Code: Implement Longest Palindromic Subsequence. | Practice: 2 problems (longest palindromic subsequence, minimum insertions to make palindrome)..",
            "achievement": "Can solve Longest Palindromic Subsequence by recognizing it as a disguised LCS problem.",
            "day": 312
          },
          {
            "topic": "Edit Distance (Medium, Day 1/2) (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: The three-operation (insert/delete/replace) DP transition, base case setup for empty-string comparisons. | Code: Begin implementing Edit Distance. | Practice: None yet..",
            "achievement": "Understands the deep theoretical parameters of Edit Distance (Medium, Day 1/2).",
            "day": 313
          },
          {
            "topic": "Edit Distance (Medium, Day 1/2) (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: The three-operation (insert/delete/replace) DP transition, base case setup for empty-string comparisons. | Code: Begin implementing Edit Distance. | Practice: None yet.. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Edit Distance (Medium, Day 1/2).",
            "day": 314
          },
          {
            "day": 315,
            "topic": "Weekly Buffer & Revision Day (Week 45)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Edit Distance (Medium, Day 1/2) (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: The three-operation (insert/delete/replace) DP transition, base case setup for empty-string comparisons. | Code: Begin implementing Edit Distance. | Practice: None yet..",
            "achievement": "Can write all 3 transition cases (insert/delete/replace) for the Edit Distance DP table by hand.",
            "day": 316
          },
          {
            "topic": "Edit Distance: Finish + Practice (Medium, Day 2/2) (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Review applications — spell-checkers, diff tools. | Code: Finish and test Edit Distance. | Practice: 2 problems (edit distance, one edit distance — simplified variant)..",
            "achievement": "Understands the deep theoretical parameters of Edit Distance: Finish + Practice (Medium, Day 2/2).",
            "day": 317
          },
          {
            "topic": "Edit Distance: Finish + Practice (Medium, Day 2/2) (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Review applications — spell-checkers, diff tools. | Code: Finish and test Edit Distance. | Practice: 2 problems (edit distance, one edit distance — simplified variant).. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Edit Distance: Finish + Practice (Medium, Day 2/2).",
            "day": 318
          },
          {
            "topic": "Edit Distance: Finish + Practice (Medium, Day 2/2) (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Review applications — spell-checkers, diff tools. | Code: Finish and test Edit Distance. | Practice: 2 problems (edit distance, one edit distance — simplified variant)..",
            "achievement": "Can implement Edit Distance in O(N×M) cold and explain each of the three operations' contribution to the transition.",
            "day": 319
          },
          {
            "topic": "Wildcard & Regex Matching (Heavy, Day 1/2) (Part 1: Concept Deep Dive)",
            "priority": "NICE TO HAVE",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: DP-based pattern matching with `*` and `?` (wildcard) or `*` and `.` (regex) — the trickiest string DP transition. | Code: Begin implementing Wildcard Matching. | Practice: None yet..",
            "achievement": "Understands the deep theoretical parameters of Wildcard & Regex Matching (Heavy, Day 1/2).",
            "day": 320
          },
          {
            "topic": "Wildcard & Regex Matching (Heavy, Day 1/2) (Part 2: Implementation)",
            "priority": "NICE TO HAVE",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: DP-based pattern matching with `*` and `?` (wildcard) or `*` and `.` (regex) — the trickiest string DP transition. | Code: Begin implementing Wildcard Matching. | Practice: None yet.. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Wildcard & Regex Matching (Heavy, Day 1/2).",
            "day": 321
          },
          {
            "day": 322,
            "topic": "Weekly Buffer & Revision Day (Week 46)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Wildcard & Regex Matching (Heavy, Day 1/2) (Part 3: Edge Cases & Lab)",
            "priority": "NICE TO HAVE",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: DP-based pattern matching with `*` and `?` (wildcard) or `*` and `.` (regex) — the trickiest string DP transition. | Code: Begin implementing Wildcard Matching. | Practice: None yet..",
            "achievement": "Understands the special handling required for `*` (matches empty OR extends match) before finishing code.",
            "day": 323
          },
          {
            "topic": "Wildcard/Regex Matching: Finish + Practice (Heavy, Day 2/2) (Part 1: Concept Deep Dive)",
            "priority": "NICE TO HAVE",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Review Regex Matching's `*` semantics (tied to the preceding character, unlike Wildcard's standalone `*`). | Code: Finish Wildcard Matching; implement Regex Matching. | Practice: 2 problems (wildcard matching, regular expression matching)..",
            "achievement": "Understands the deep theoretical parameters of Wildcard/Regex Matching: Finish + Practice (Heavy, Day 2/2).",
            "day": 324
          },
          {
            "topic": "Wildcard/Regex Matching: Finish + Practice (Heavy, Day 2/2) (Part 2: Implementation)",
            "priority": "NICE TO HAVE",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Review Regex Matching's `*` semantics (tied to the preceding character, unlike Wildcard's standalone `*`). | Code: Finish Wildcard Matching; implement Regex Matching. | Practice: 2 problems (wildcard matching, regular expression matching).. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Wildcard/Regex Matching: Finish + Practice (Heavy, Day 2/2).",
            "day": 325
          },
          {
            "topic": "Wildcard/Regex Matching: Finish + Practice (Heavy, Day 2/2) (Part 3: Edge Cases & Lab)",
            "priority": "NICE TO HAVE",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Review Regex Matching's `*` semantics (tied to the preceding character, unlike Wildcard's standalone `*`). | Code: Finish Wildcard Matching; implement Regex Matching. | Practice: 2 problems (wildcard matching, regular expression matching)..",
            "achievement": "Can implement both Wildcard and Regex matching DP, clearly articulating how their `*` semantics differ.",
            "day": 326
          },
          {
            "topic": "🆕 DP on Trees: House Robber III (Heavy, Day 1/2) (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: DP on trees as a distinct mental model — recursive functions returning a 2-state result per subtree (rob this node / don't rob this node), combined post-order. | Code: Begin implementing House Robber III. | Practice: None yet..",
            "achievement": "Understands the deep theoretical parameters of 🆕 DP on Trees: House Robber III (Heavy, Day 1/2).",
            "day": 327
          },
          {
            "topic": "🆕 DP on Trees: House Robber III (Heavy, Day 1/2) (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: DP on trees as a distinct mental model — recursive functions returning a 2-state result per subtree (rob this node / don't rob this node), combined post-order. | Code: Begin implementing House Robber III. | Practice: None yet.. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of 🆕 DP on Trees: House Robber III (Heavy, Day 1/2).",
            "day": 328
          },
          {
            "day": 329,
            "topic": "Weekly Buffer & Revision Day (Week 47)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "🆕 DP on Trees: House Robber III (Heavy, Day 1/2) (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: DP on trees as a distinct mental model — recursive functions returning a 2-state result per subtree (rob this node / don't rob this node), combined post-order. | Code: Begin implementing House Robber III. | Practice: None yet..",
            "achievement": "Understands why a single return value per node is insufficient and a 2-state return is required.",
            "day": 330
          },
          {
            "topic": "🆕 DP on Trees: Diameter & Max Path Sum (Heavy, Day 2/2) (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Generalizing tree DP to Diameter of Binary Tree (revisited through the DP lens) and Binary Tree Maximum Path Sum. | Code: Finish House Robber III; implement Binary Tree Maximum Path Sum. | Practice: 2 problems (House Robber III, binary tree maximum path sum)..",
            "achievement": "Understands the deep theoretical parameters of 🆕 DP on Trees: Diameter & Max Path Sum (Heavy, Day 2/2).",
            "day": 331
          },
          {
            "topic": "🆕 DP on Trees: Diameter & Max Path Sum (Heavy, Day 2/2) (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Generalizing tree DP to Diameter of Binary Tree (revisited through the DP lens) and Binary Tree Maximum Path Sum. | Code: Finish House Robber III; implement Binary Tree Maximum Path Sum. | Practice: 2 problems (House Robber III, binary tree maximum path sum).. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of 🆕 DP on Trees: Diameter & Max Path Sum (Heavy, Day 2/2).",
            "day": 332
          },
          {
            "topic": "🆕 DP on Trees: Diameter & Max Path Sum (Heavy, Day 2/2) (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Generalizing tree DP to Diameter of Binary Tree (revisited through the DP lens) and Binary Tree Maximum Path Sum. | Code: Finish House Robber III; implement Binary Tree Maximum Path Sum. | Practice: 2 problems (House Robber III, binary tree maximum path sum)..",
            "achievement": "Can solve House Robber III and Max Path Sum, both using single-pass post-order DP on trees.",
            "day": 333
          },
          {
            "topic": "🆕 Interval DP: Matrix Chain Multiplication (Heavy, Day 1/2) (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: The canonical interval DP pattern — `dp[i][j]` as the optimal cost spanning indices i to j, iterating over all split points k between i and j. | Code: Begin implementing Matrix Chain Multiplication. | Practice: None yet..",
            "achievement": "Understands the deep theoretical parameters of 🆕 Interval DP: Matrix Chain Multiplication (Heavy, Day 1/2).",
            "day": 334
          },
          {
            "topic": "🆕 Interval DP: Matrix Chain Multiplication (Heavy, Day 1/2) (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: The canonical interval DP pattern — `dp[i][j]` as the optimal cost spanning indices i to j, iterating over all split points k between i and j. | Code: Begin implementing Matrix Chain Multiplication. | Practice: None yet.. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of 🆕 Interval DP: Matrix Chain Multiplication (Heavy, Day 1/2).",
            "day": 335
          },
          {
            "day": 336,
            "topic": "Weekly Buffer & Revision Day (Week 48)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "🆕 Interval DP: Matrix Chain Multiplication (Heavy, Day 1/2) (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: The canonical interval DP pattern — `dp[i][j]` as the optimal cost spanning indices i to j, iterating over all split points k between i and j. | Code: Begin implementing Matrix Chain Multiplication. | Practice: None yet..",
            "achievement": "Can write the MCM transition `dp[i][j] = min over k of dp[i][k] + dp[k+1][j] + cost(k)` from memory.",
            "day": 337
          },
          {
            "topic": "🆕 Interval DP: Burst Balloons & Palindrome Partitioning (Heavy, Day 2/2) (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Recognizing the same \"split point k between i and j\" signature in Burst Balloons (LeetCode 312, the true DP version) and Palindrome Partitioning II. | Code: Finish Matrix Chain Multiplication; implement Burst Balloons (DP version). | Practice: 2 problems (Burst Balloons, Palindrome Partitioning II)..",
            "achievement": "Understands the deep theoretical parameters of 🆕 Interval DP: Burst Balloons & Palindrome Partitioning (Heavy, Day 2/2).",
            "day": 338
          },
          {
            "topic": "🆕 Interval DP: Burst Balloons & Palindrome Partitioning (Heavy, Day 2/2) (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Recognizing the same \"split point k between i and j\" signature in Burst Balloons (LeetCode 312, the true DP version) and Palindrome Partitioning II. | Code: Finish Matrix Chain Multiplication; implement Burst Balloons (DP version). | Practice: 2 problems (Burst Balloons, Palindrome Partitioning II).. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of 🆕 Interval DP: Burst Balloons & Palindrome Partitioning (Heavy, Day 2/2).",
            "day": 339
          },
          {
            "topic": "🆕 Interval DP: Burst Balloons & Palindrome Partitioning (Heavy, Day 2/2) (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Recognizing the same \"split point k between i and j\" signature in Burst Balloons (LeetCode 312, the true DP version) and Palindrome Partitioning II. | Code: Finish Matrix Chain Multiplication; implement Burst Balloons (DP version). | Practice: 2 problems (Burst Balloons, Palindrome Partitioning II)..",
            "achievement": "Can recognize the interval-DP signature in a new, unseen problem and set up the split-point iteration correctly.",
            "day": 340
          },
          {
            "topic": "Bitmask DP: Traveling Salesman Problem (Heavy, Day 1/2) (Part 1: Concept Deep Dive)",
            "priority": "NICE TO HAVE",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Representing visited-vertex sets as integer bitmasks, the `dp[mask][u]` state definition. | Code: Begin implementing TSP via Bitmask DP. | Practice: None yet..",
            "achievement": "Understands the deep theoretical parameters of Bitmask DP: Traveling Salesman Problem (Heavy, Day 1/2).",
            "day": 341
          },
          {
            "topic": "Bitmask DP: Traveling Salesman Problem (Heavy, Day 1/2) (Part 2: Implementation)",
            "priority": "NICE TO HAVE",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Representing visited-vertex sets as integer bitmasks, the `dp[mask][u]` state definition. | Code: Begin implementing TSP via Bitmask DP. | Practice: None yet.. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Bitmask DP: Traveling Salesman Problem (Heavy, Day 1/2).",
            "day": 342
          },
          {
            "day": 343,
            "topic": "Weekly Buffer & Revision Day (Week 49)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Bitmask DP: Traveling Salesman Problem (Heavy, Day 1/2) (Part 3: Edge Cases & Lab)",
            "priority": "NICE TO HAVE",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Representing visited-vertex sets as integer bitmasks, the `dp[mask][u]` state definition. | Code: Begin implementing TSP via Bitmask DP. | Practice: None yet..",
            "achievement": "Understands why bitmask DP is only feasible for small N (typically N ≤ 20) due to the 2^N state space.",
            "day": 344
          },
          {
            "topic": "Bitmask DP: Finish + Practice (Heavy, Day 2/2) (Part 1: Concept Deep Dive)",
            "priority": "NICE TO HAVE",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Review — other bitmask DP applications (e.g., Partition to K Equal Sum Subsets). | Code: Finish TSP Bitmask DP. | Practice: 2 problems (TSP via bitmask, partition to K equal sum subsets)..",
            "achievement": "Understands the deep theoretical parameters of Bitmask DP: Finish + Practice (Heavy, Day 2/2).",
            "day": 345
          },
          {
            "topic": "Bitmask DP: Finish + Practice (Heavy, Day 2/2) (Part 2: Implementation)",
            "priority": "NICE TO HAVE",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Review — other bitmask DP applications (e.g., Partition to K Equal Sum Subsets). | Code: Finish TSP Bitmask DP. | Practice: 2 problems (TSP via bitmask, partition to K equal sum subsets).. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Bitmask DP: Finish + Practice (Heavy, Day 2/2).",
            "day": 346
          },
          {
            "topic": "Bitmask DP: Finish + Practice (Heavy, Day 2/2) (Part 3: Edge Cases & Lab)",
            "priority": "NICE TO HAVE",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Review — other bitmask DP applications (e.g., Partition to K Equal Sum Subsets). | Code: Finish TSP Bitmask DP. | Practice: 2 problems (TSP via bitmask, partition to K equal sum subsets)..",
            "achievement": "Can implement TSP using Bitmask DP in O(N² × 2^N) and adapt the bitmask pattern to a new subset-tracking problem.",
            "day": 347
          },
          {
            "topic": "Advanced DP Practice Day 1 (Light) (Part 1: Concept Deep Dive)",
            "priority": "NICE TO HAVE",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Review — mixed advanced DP problems combining patterns learned so far (e.g., DP + greedy hybrid problems). | Code: None — pure practice. | Practice: 3 mixed-pattern problems..",
            "achievement": "Understands the deep theoretical parameters of Advanced DP Practice Day 1 (Light).",
            "day": 348
          },
          {
            "topic": "Advanced DP Practice Day 1 (Light) (Part 2: Implementation)",
            "priority": "NICE TO HAVE",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Review — mixed advanced DP problems combining patterns learned so far (e.g., DP + greedy hybrid problems). | Code: None — pure practice. | Practice: 3 mixed-pattern problems.. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Advanced DP Practice Day 1 (Light).",
            "day": 349
          },
          {
            "day": 350,
            "topic": "Weekly Buffer & Revision Day (Week 50)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Advanced DP Practice Day 1 (Light) (Part 3: Edge Cases & Lab)",
            "priority": "NICE TO HAVE",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Review — mixed advanced DP problems combining patterns learned so far (e.g., DP + greedy hybrid problems). | Code: None — pure practice. | Practice: 3 mixed-pattern problems..",
            "achievement": "Can classify any new DP problem (1D/2D/Knapsack/String/Tree/Interval/Bitmask) within the first minute of reading it.",
            "day": 351
          },
          {
            "topic": "HANDS-ON LAB: Coin Change Optimization (Light) (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Review the Coin Change Optimization hands-on lab problem set. | Code: Complete the lab exercises. | Practice: 2 problems from the lab..",
            "achievement": "Understands the deep theoretical parameters of HANDS-ON LAB: Coin Change Optimization (Light).",
            "day": 352
          },
          {
            "topic": "HANDS-ON LAB: Coin Change Optimization (Light) (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Review the Coin Change Optimization hands-on lab problem set. | Code: Complete the lab exercises. | Practice: 2 problems from the lab.. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of HANDS-ON LAB: Coin Change Optimization (Light).",
            "day": 353
          },
          {
            "topic": "HANDS-ON LAB: Coin Change Optimization (Light) (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Review the Coin Change Optimization hands-on lab problem set. | Code: Complete the lab exercises. | Practice: 2 problems from the lab..",
            "achievement": "Can complete the Coin Change Optimization lab within its suggested time.",
            "day": 354
          },
          {
            "topic": "Phase Cheat Sheet + Mixed DP Review (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Review the complete Dynamic Programming cheat sheet, including all new additions (Tree DP, Interval DP). | Code: None — review day. | Practice: Timed mixed review (4 problems spanning the entire DP phase)..",
            "achievement": "Understands the deep theoretical parameters of Phase Cheat Sheet + Mixed DP Review.",
            "day": 355
          },
          {
            "topic": "Phase Cheat Sheet + Mixed DP Review (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Review the complete Dynamic Programming cheat sheet, including all new additions (Tree DP, Interval DP). | Code: None — review day. | Practice: Timed mixed review (4 problems spanning the entire DP phase).. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of Phase Cheat Sheet + Mixed DP Review.",
            "day": 356
          },
          {
            "day": 357,
            "topic": "Weekly Buffer & Revision Day (Week 51)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "Phase Cheat Sheet + Mixed DP Review (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Review the complete Dynamic Programming cheat sheet, including all new additions (Tree DP, Interval DP). | Code: None — review day. | Practice: Timed mixed review (4 problems spanning the entire DP phase)..",
            "achievement": "Can recite the full DP phase cheat sheet and correctly classify/solve any of the last 22 days' problem types under time pressure.",
            "day": 358
          }
        ]
      },
      {
        "id": "7-12",
        "title": "CUSTOM DESIGN PROBLEMS",
        "days": "Days 359–373",
        "items": [
          {
            "topic": "The Design Interview Strategy + LRU Cache: Design (Medium, Day 1/2) (Part 1: Concept & Architecture)",
            "priority": "IMPORTANT",
            "tasks": "Study the theoretical foundations and internal mechanics of: Learn: General strategy for \"design X\" problems (clarify requirements → pick data structures → implement). LRU Cache's HashMap + Doubly Linked List combination. | Code: Begin implementing LRU Cache. | Practice: None yet.. Focus on system architecture and key diagrams.",
            "achievement": "Understands the core theory and conceptual model of The Design Interview Strategy + LRU Cache: Design (Medium, Day 1/2).",
            "day": 359
          },
          {
            "topic": "The Design Interview Strategy + LRU Cache: Design (Medium, Day 1/2) (Part 2: Hands-on Lab)",
            "priority": "IMPORTANT",
            "tasks": "Implement code, run configuration scripts, or build labs for: Learn: General strategy for \"design X\" problems (clarify requirements → pick data structures → implement). LRU Cache's HashMap + Doubly Linked List combination. | Code: Begin implementing LRU Cache. | Practice: None yet.. Commit your code/notes to your GitHub repository in your backend-ai-mastery repo.",
            "achievement": "Understands exactly why HashMap alone (no recency tracking) and DLL alone (no O(1) lookup) each fail individually.",
            "day": 360
          },
          {
            "topic": "LRU Cache: Finish + Practice (Medium, Day 2/2) (Part 1: Concept & Architecture)",
            "priority": "IMPORTANT",
            "tasks": "Study the theoretical foundations and internal mechanics of: Learn: Review eviction logic — moving an accessed node to the front, evicting from the back on overflow. | Code: Finish and test LRU Cache with O(1) get/put. | Practice: 1 problem (LRU Cache, then re-implement using Java's `LinkedHashMap` access-order mode for comparison).. Focus on system architecture and key diagrams.",
            "achievement": "Understands the core theory and conceptual model of LRU Cache: Finish + Practice (Medium, Day 2/2).",
            "day": 361
          },
          {
            "topic": "LRU Cache: Finish + Practice (Medium, Day 2/2) (Part 2: Hands-on Lab)",
            "priority": "IMPORTANT",
            "tasks": "Implement code, run configuration scripts, or build labs for: Learn: Review eviction logic — moving an accessed node to the front, evicting from the back on overflow. | Code: Finish and test LRU Cache with O(1) get/put. | Practice: 1 problem (LRU Cache, then re-implement using Java's `LinkedHashMap` access-order mode for comparison).. Commit your code/notes to your GitHub repository in your backend-ai-mastery repo.",
            "achievement": "Has a fully working hand-rolled LRU Cache and can also implement it via `LinkedHashMap` for comparison.",
            "day": 362
          },
          {
            "topic": "LFU Cache: Design & Frequency Buckets (Heavy, Day 1/2) (Part 1: Concept & Architecture)",
            "priority": "IMPORTANT",
            "tasks": "Study the theoretical foundations and internal mechanics of: Learn: LFU's added complexity over LRU — tracking both recency AND frequency, frequency-bucketed DLLs. | Code: Begin implementing LFU Cache. | Practice: None yet.. Focus on system architecture and key diagrams.",
            "achievement": "Understands the core theory and conceptual model of LFU Cache: Design & Frequency Buckets (Heavy, Day 1/2).",
            "day": 363
          },
          {
            "day": 364,
            "topic": "Weekly Buffer & Revision Day (Week 52)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "LFU Cache: Design & Frequency Buckets (Heavy, Day 1/2) (Part 2: Hands-on Lab)",
            "priority": "IMPORTANT",
            "tasks": "Implement code, run configuration scripts, or build labs for: Learn: LFU's added complexity over LRU — tracking both recency AND frequency, frequency-bucketed DLLs. | Code: Begin implementing LFU Cache. | Practice: None yet.. Commit your code/notes to your GitHub repository in your backend-ai-mastery repo.",
            "achievement": "Understands the frequency-bucket design (each frequency maps to its own DLL of recency-ordered keys) before finishing code.",
            "day": 365
          },
          {
            "topic": "LFU Cache: Finish + Practice (Heavy, Day 2/2) (Part 1: Concept & Architecture)",
            "priority": "IMPORTANT",
            "tasks": "Study the theoretical foundations and internal mechanics of: Learn: Review the min-frequency tracking that enables O(1) eviction. | Code: Finish and test LFU Cache with O(1) get/put. | Practice: 1 problem (LFU Cache full implementation).. Focus on system architecture and key diagrams.",
            "achievement": "Understands the core theory and conceptual model of LFU Cache: Finish + Practice (Heavy, Day 2/2).",
            "day": 366
          },
          {
            "topic": "LFU Cache: Finish + Practice (Heavy, Day 2/2) (Part 2: Hands-on Lab)",
            "priority": "IMPORTANT",
            "tasks": "Implement code, run configuration scripts, or build labs for: Learn: Review the min-frequency tracking that enables O(1) eviction. | Code: Finish and test LFU Cache with O(1) get/put. | Practice: 1 problem (LFU Cache full implementation).. Commit your code/notes to your GitHub repository in your backend-ai-mastery repo.",
            "achievement": "Has a fully working LFU Cache achieving true O(1) get/put.",
            "day": 367
          },
          {
            "day": 368,
            "topic": "Min Stack/Max Stack Revisited + Design Twitter (Medium, Day 1/2)",
            "tasks": "Learn: Design Twitter's feed-generation problem — merging each followee's recent tweets using a max-heap (similar to Merge K Sorted Lists). | Code: Begin implementing Design Twitter. | Practice: None yet.",
            "achievement": "Understands why a max-heap merge (not sorting everything) is the efficient approach to `getNewsFeed`.",
            "priority": "MUST KNOW"
          },
          {
            "day": 369,
            "topic": "Design Twitter: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review follow/unfollow bookkeeping and timestamp-based tweet ordering. | Code: Finish and test Design Twitter. | Practice: 1 problem (Design Twitter full implementation).",
            "achievement": "Has a complete working Design Twitter implementation with efficient `getNewsFeed`.",
            "priority": "IMPORTANT"
          },
          {
            "day": 370,
            "topic": "Browser History + Hit Counter/Rate Limiter (Light)",
            "tasks": "Learn: Browser History (array/stack-based forward-back navigation), Rate Limiter via sliding window counter vs token bucket. | Code: Implement Browser History and a sliding-window Rate Limiter. | Practice: 2 problems (browser history, design hit counter).",
            "achievement": "Can implement a sliding-window rate limiter and explain why fixed-window counters allow burst abuse at window boundaries.",
            "priority": "IMPORTANT"
          },
          {
            "day": 371,
            "topic": "Weekly Buffer & Revision Day (Week 53)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "HANDS-ON LAB: Designing an LFU Cache Extension + Phase Cheat Sheet (Part 1: Concept & Architecture)",
            "priority": "IMPORTANT",
            "tasks": "Study the theoretical foundations and internal mechanics of: Learn: Review gotchas/edge cases for the entire Custom Design Problems chapter. | Code: Extend your LFU Cache (Day 164-165) with a TTL (time-to-live) feature. | Practice: Timed mixed review (2 design problems, explained out loud as if in an interview).. Focus on system architecture and key diagrams.",
            "achievement": "Understands the core theory and conceptual model of HANDS-ON LAB: Designing an LFU Cache Extension + Phase Cheat Sheet.",
            "day": 372
          },
          {
            "topic": "HANDS-ON LAB: Designing an LFU Cache Extension + Phase Cheat Sheet (Part 2: Hands-on Lab)",
            "priority": "IMPORTANT",
            "tasks": "Implement code, run configuration scripts, or build labs for: Learn: Review gotchas/edge cases for the entire Custom Design Problems chapter. | Code: Extend your LFU Cache (Day 164-165) with a TTL (time-to-live) feature. | Practice: Timed mixed review (2 design problems, explained out loud as if in an interview).. Commit your code/notes to your GitHub repository in your backend-ai-mastery repo.",
            "achievement": "Can design and defend, end-to-end, the data structure choices behind any \"design X\" problem in a mock interview setting.",
            "day": 373
          }
        ]
      },
      {
        "id": "7-13",
        "title": "MATH & BIT MANIPULATION",
        "days": "Days 374–382",
        "items": [
          {
            "day": 374,
            "topic": "Number Theory: GCD & LCM (Light)",
            "tasks": "Learn: Euclidean algorithm for GCD, deriving LCM from GCD. | Code: Implement Euclidean GCD (iterative and recursive) and LCM. | Practice: 2 problems (GCD/LCM applications, e.g., simplify fraction).",
            "achievement": "Can implement Euclidean GCD in both forms and derive LCM from it in O(log(min(A,B))).",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 375,
            "topic": "Sieve of Eratosthenes (Light)",
            "tasks": "Learn: Prime generation up to N in O(N log log N), the marking mechanism. | Code: Implement the Sieve of Eratosthenes. | Practice: 2 problems (count primes, prime factorization using a precomputed sieve).",
            "achievement": "Can implement the Sieve and explain why it's vastly faster than checking primality one number at a time.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 376,
            "topic": "Fast (Binary) Exponentiation (Light)",
            "tasks": "Learn: O(log N) exponentiation via repeated squaring. | Code: Implement fast exponentiation (iterative and recursive). | Practice: 2 problems (pow(x,n), super pow with large exponents).",
            "achievement": "Can implement fast exponentiation in O(log N) and explain the repeated-squaring insight.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 377,
            "topic": "🆕 Modular Arithmetic: Addition, Subtraction, Multiplication (Light)",
            "tasks": "Learn: Modular addition/subtraction/multiplication, handling overflow with modulus applied at each step (not just at the end). | Code: Implement safe modular add/subtract/multiply helper functions. | Practice: 2 problems involving large-number modular arithmetic (e.g., count ways mod 10^9+7).",
            "achievement": "Can implement overflow-safe modular arithmetic helpers and explain why applying the modulus only at the end is unsafe.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 378,
            "topic": "Weekly Buffer & Revision Day (Week 54)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "day": 379,
            "topic": "🆕 Modular Multiplicative Inverse via Fermat's Little Theorem (Medium, Day 1/2)",
            "tasks": "Learn: Fermat's Little Theorem, deriving the modular inverse as `a^(p-2) mod p` for prime modulus p, using fast exponentiation (Day 172) to compute it. | Code: Begin implementing modular inverse using fast exponentiation. | Practice: None yet.",
            "achievement": "Understands why Fermat's Little Theorem requires a PRIME modulus and what breaks if it isn't.",
            "priority": "NICE TO HAVE"
          },
          {
            "topic": "🆕 Modular Inverse: Computing nCr mod p + Practice (Medium, Day 2/2) (Part 1: Concept & Architecture)",
            "priority": "NICE TO HAVE",
            "tasks": "Study the theoretical foundations and internal mechanics of: Learn: Combining factorials, modular inverse, and modular multiplication to compute nCr mod a large prime — a common combinatorics-DP building block. | Code: Finish modular inverse; implement nCr mod p using precomputed factorials and their modular inverses. | Practice: 2 problems (combinatorics problems requiring nCr mod 10^9+7).. Focus on system architecture and key diagrams.",
            "achievement": "Understands the core theory and conceptual model of 🆕 Modular Inverse: Computing nCr mod p + Practice (Medium, Day 2/2).",
            "day": 380
          },
          {
            "topic": "🆕 Modular Inverse: Computing nCr mod p + Practice (Medium, Day 2/2) (Part 2: Hands-on Lab)",
            "priority": "NICE TO HAVE",
            "tasks": "Implement code, run configuration scripts, or build labs for: Learn: Combining factorials, modular inverse, and modular multiplication to compute nCr mod a large prime — a common combinatorics-DP building block. | Code: Finish modular inverse; implement nCr mod p using precomputed factorials and their modular inverses. | Practice: 2 problems (combinatorics problems requiring nCr mod 10^9+7).. Commit your code/notes to your GitHub repository in your backend-ai-mastery repo.",
            "achievement": "Can compute nCr mod a large prime in O(1) per query after O(N) precomputation of factorials and inverse factorials.",
            "day": 381
          },
          {
            "day": 382,
            "topic": "Bit Manipulation: Core Tricks + HANDS-ON LAB: Bitwise Division Engine + Phase Cheat Sheet",
            "tasks": "Learn: Hamming Weight (Brian Kernighan's algorithm), XOR tricks (single number, swap without temp). Review the full Math & Bit Manipulation cheat sheet including modular arithmetic additions. | Code: Implement Brian Kernighan's algorithm; complete the Bitwise Division Engine lab (integer division using only shifts/subtraction). | Practice: 2 problems (single number, counting bits).",
            "achievement": "Can implement bitwise integer division and recite the full phase cheat sheet, including the new modular arithmetic section.",
            "priority": "NICE TO HAVE"
          }
        ]
      },
      {
        "id": "7-14",
        "title": "INTERVIEW STRATEGY & BACKEND BRIDGE",
        "days": "Days 383–388",
        "items": [
          {
            "day": 383,
            "topic": "The 15 Problem-Solving Patterns + Interview Framework",
            "tasks": "Learn: The full list of 15 problem-solving patterns as a unified mental map. The step-by-step interview framework (clarify → identify pattern → outline approach → code → test edge cases → analyze complexity). | Code: None — pure strategy day. | Practice: Pick 3 random problems from across the entire 176-day journey and apply the framework out loud, mapping each to its pattern within seconds.",
            "achievement": "Can map any previously-solved problem to one of the 15 patterns instantly, and apply the full interview framework live to a brand-new problem.",
            "priority": "IMPORTANT"
          },
          {
            "topic": "🆕 DSA-to-Backend Pattern Bridge + Final Review (Part 1: Concept Deep Dive)",
            "priority": "IMPORTANT",
            "tasks": "Learn the low-level specifications, happens-before guarantees, or structural rules of: Learn: Map each major DSA pattern to a real production backend use case: Monotonic Stack → log/event trimming and stock-span-style analytics; Trie → autocomplete/search-suggestion microservices; DSU → network partition/connected-component detection in distributed systems; LRU/LFU Cache → the exact mechanism behind Redis/Caffeine eviction policies; Sliding Window → rate limiters and real-time metrics aggregation; Graph BFS/Dijkstra → service-dependency analysis and shortest-path routing in infrastructure; Segment Tree/Fenwick Tree → real-time analytics dashboards needing fast range aggregation. | Code: None — synthesis day. | Practice: Use the Java Collections Decision Tree and Complexity Cheat Sheet appendices to rapid-fire answer 5 \"which data structure would you use for X production scenario\" questions..",
            "achievement": "Understands the deep theoretical parameters of 🆕 DSA-to-Backend Pattern Bridge + Final Review.",
            "day": 384
          },
          {
            "day": 385,
            "topic": "Weekly Buffer & Revision Day (Week 55)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          },
          {
            "topic": "🆕 DSA-to-Backend Pattern Bridge + Final Review (Part 2: Implementation)",
            "priority": "IMPORTANT",
            "tasks": "Write complete code implementations or deploy configuration setups for: Learn: Map each major DSA pattern to a real production backend use case: Monotonic Stack → log/event trimming and stock-span-style analytics; Trie → autocomplete/search-suggestion microservices; DSU → network partition/connected-component detection in distributed systems; LRU/LFU Cache → the exact mechanism behind Redis/Caffeine eviction policies; Sliding Window → rate limiters and real-time metrics aggregation; Graph BFS/Dijkstra → service-dependency analysis and shortest-path routing in infrastructure; Segment Tree/Fenwick Tree → real-time analytics dashboards needing fast range aggregation. | Code: None — synthesis day. | Practice: Use the Java Collections Decision Tree and Complexity Cheat Sheet appendices to rapid-fire answer 5 \"which data structure would you use for X production scenario\" questions.. Push your scripts/labs to your GitHub repository.",
            "achievement": "Successfully implemented the core functionality of 🆕 DSA-to-Backend Pattern Bridge + Final Review.",
            "day": 386
          },
          {
            "topic": "🆕 DSA-to-Backend Pattern Bridge + Final Review (Part 3: Edge Cases & Lab)",
            "priority": "IMPORTANT",
            "tasks": "Troubleshoot edge cases, performance bottle-necks, and verify logs/metrics for: Learn: Map each major DSA pattern to a real production backend use case: Monotonic Stack → log/event trimming and stock-span-style analytics; Trie → autocomplete/search-suggestion microservices; DSU → network partition/connected-component detection in distributed systems; LRU/LFU Cache → the exact mechanism behind Redis/Caffeine eviction policies; Sliding Window → rate limiters and real-time metrics aggregation; Graph BFS/Dijkstra → service-dependency analysis and shortest-path routing in infrastructure; Segment Tree/Fenwick Tree → real-time analytics dashboards needing fast range aggregation. | Code: None — synthesis day. | Practice: Use the Java Collections Decision Tree and Complexity Cheat Sheet appendices to rapid-fire answer 5 \"which data structure would you use for X production scenario\" questions..",
            "achievement": "Can answer \"where would you actually use [DSA structure] in a production backend system?\" with a concrete, named example for at least 6 different structures — directly bridging this DSA roadmap into the System Design and Spring Boot phases of your master roadmap.",
            "day": 387
          },
          {
            "day": 388,
            "topic": "Weekly Buffer & Revision Day (Week 56)",
            "priority": "MUST KNOW",
            "tasks": "1. Active Recall: Review notes and concepts from 7 days ago. | 2. Spaced Repetition: Review notes from 30 days ago. | 3. Backlog Catchup: Complete any unfinished tasks from this week. | 4. Rest & Reset.",
            "achievement": "Cleared all backlogs, completed revision loops, and refreshed mind for the next week."
          }
        ]
      }
    ]
  }
];
