export const roadmapData = [
  {
    "id": 1,
    "title": "System Design & Architecture",
    "days": 128,
    "color": "cyan",
    "phases": [
      {
        "id": "1-1",
        "title": "THE FOUNDATIONS OF DISTRIBUTED SYSTEMS",
        "days": "Days 0–22",
        "items": [
          {
            "day": 0,
            "topic": "Prerequisites Check",
            "priority": "MUST KNOW",
            "tasks": "Ensure you understand basic networking (IP, ports), at least one backend language (Java/Python), and basic SQL. This roadmap assumes you can code, but are new to architecture.",
            "achievement": "Can confidently begin the System Design roadmap without getting stuck on programming syntax."
          },
          {
            "day": 1,
            "topic": "Introduction to Distributed Systems",
            "priority": "MUST KNOW",
            "tasks": "Study the difference between Monoliths and Microservices. Read about single point of failure (SPOF) and system coupling.",
            "achievement": "Can clearly explain when to choose microservices over monoliths and identify a SPOF."
          },
          {
            "day": 2,
            "topic": "Vertical vs Horizontal Scaling",
            "priority": "MUST KNOW",
            "tasks": "Research the difference between scaling up (upgrading hardware) vs scaling out (adding more machines). Understand the limitations of vertical scaling.",
            "achievement": "Can articulate the trade-offs of both scaling methods in an interview setting."
          },
          {
            "day": 3,
            "topic": "Networking Basics (TCP/UDP, IP)",
            "priority": "MUST KNOW",
            "tasks": "Review the OSI model. Deep dive into the differences between TCP (reliable, ordered) and UDP (fast, stateless).",
            "achievement": "Can decide whether to use TCP or UDP for specific applications like video streaming vs banking."
          },
          {
            "day": 4,
            "topic": "DNS (Domain Name System)",
            "priority": "MUST KNOW",
            "tasks": "Learn how URLs resolve to IP addresses. Understand recursive vs iterative DNS queries, A Records, and CNAME.",
            "achievement": "Can explain the exact step-by-step process of what happens when you type google.com into a browser."
          },
          {
            "day": 5,
            "topic": "Load Balancing Concepts",
            "priority": "MUST KNOW",
            "tasks": "Study what a load balancer does. Learn the difference between Layer 4 (Transport) and Layer 7 (Application) load balancing.",
            "achievement": "Can place a load balancer in an architecture diagram and explain OSI Layer 4 vs Layer 7 routing."
          },
          {
            "day": 6,
            "topic": "Load Balancing Algorithms",
            "priority": "MUST KNOW",
            "tasks": "Read about Round Robin, Least Connections, IP Hash, and Weighted Round Robin.",
            "achievement": "Can select the correct load balancing algorithm based on server capacities and session persistence needs."
          },
          {
            "day": 7,
            "topic": "Consistent Hashing Theory",
            "priority": "MUST KNOW",
            "tasks": "Study the math and theory behind consistent hashing. Understand how it minimizes key redistribution when nodes are added or removed.",
            "achievement": "Can draw the \"hash ring\" and explain how it solves the rehashing problem in distributed caches."
          },
          {
            "day": 8,
            "topic": "Reverse vs Forward Proxies",
            "priority": "MUST KNOW",
            "tasks": "Understand the difference. Forward proxy hides the client; reverse proxy hides the server. Look at Nginx use cases.",
            "achievement": "Can explain how reverse proxies provide security, caching, and load balancing for backend servers."
          },
          {
            "day": 9,
            "topic": "Caching Strategies",
            "priority": "MUST KNOW",
            "tasks": "Study Cache-Aside, Read-Through, Write-Through, and Write-Back caching strategies.",
            "achievement": "Can select the correct caching pattern for read-heavy vs write-heavy workloads."
          },
          {
            "day": 10,
            "topic": "Cache Eviction Policies",
            "priority": "MUST KNOW",
            "tasks": "Learn LRU (Least Recently Used), LFU (Least Frequently Used), and FIFO. Implement LRU in code (Python/Java).",
            "achievement": "Can write an LRU cache implementation and explain when to use LFU instead."
          },
          {
            "day": 11,
            "topic": "Content Delivery Networks (CDNs)",
            "priority": "MUST KNOW",
            "tasks": "Study Push vs Pull CDNs. Understand how edge locations cache static assets to reduce latency globally.",
            "achievement": "Can design a static asset delivery pipeline using AWS CloudFront or Cloudflare."
          },
          {
            "day": 12,
            "topic": "CAP Theorem",
            "priority": "MUST KNOW",
            "tasks": "Deep dive into Consistency, Availability, and Partition Tolerance. Understand why you can only pick two in a distributed failure.",
            "achievement": "Can categorize databases (CP vs AP) and explain why network partitions force a choice."
          },
          {
            "day": 13,
            "topic": "Consistent Hashing (Implementation)",
            "priority": "MUST KNOW",
            "tasks": "Take yesterday's theory and actually implement a basic Consistent Hashing ring in Python or Java. Test adding and removing nodes programmatically.",
            "achievement": "Can prove you understand the math by writing a working distributed hashing algorithm."
          },
          {
            "day": 14,
            "topic": "PACELC Theorem",
            "priority": "IMPORTANT",
            "tasks": "Study the extension of CAP. If there is a Partition (P), how does it trade off between Availability and Consistency? Else (E), how does it trade off between Latency and Consistency?",
            "achievement": "Can use PACELC to explain DynamoDB vs MongoDB default configurations."
          },
          {
            "day": 15,
            "topic": "Consensus Algorithms: Paxos & Raft",
            "priority": "MUST KNOW",
            "tasks": "Study distributed consensus theory, Paxos history, and the Raft consensus protocol. Learn about Leader Election, Log Replication, and Safety invariants.",
            "achievement": "Can explain how distributed nodes agree on state changes and survive network partitions."
          },
          {
            "day": 16,
            "topic": "Data Partitioning & Sharding",
            "priority": "MUST KNOW",
            "tasks": "Learn the difference between vertical partitioning (splitting columns) and horizontal sharding (splitting rows).",
            "achievement": "Can design a sharding strategy based on a shard key to prevent hot spots."
          },
          {
            "day": 17,
            "topic": "Database Replication",
            "priority": "MUST KNOW",
            "tasks": "Study Master-Slave (Single Leader), Multi-Leader, and Leaderless replication strategies.",
            "achievement": "Can explain the pros and cons of synchronous vs asynchronous replication for data durability."
          },
          {
            "day": 18,
            "topic": "Message Queues (Pub/Sub vs P2P)",
            "priority": "MUST KNOW",
            "tasks": "Understand Point-to-Point (RabbitMQ) vs Publish-Subscribe (Kafka). Why use async communication?",
            "achievement": "Can decouple two tightly integrated microservices using a message broker."
          },
          {
            "day": 19,
            "topic": "API Design Basics (REST vs RPC)",
            "priority": "MUST KNOW",
            "tasks": "Compare RESTful design principles with gRPC/RPC. Understand statelessness and idempotency.",
            "achievement": "Can design clean, standard REST API endpoints and explain when to use gRPC instead."
          },
          {
            "day": 20,
            "topic": "WebSockets & Long Polling",
            "priority": "MUST KNOW",
            "tasks": "Study methods for real-time communication. Compare WebSockets, Server-Sent Events (SSE), and Long Polling.",
            "achievement": "Can choose the right protocol for a real-time chat app vs a live stock ticker."
          },
          {
            "day": 21,
            "topic": "Phase 1 Review: Mock Architecture",
            "priority": "MUST KNOW",
            "tasks": "Design a highly available web server architecture combining DNS, Load Balancers, Caching, and a replicated Database.",
            "achievement": "Can confidently draw a basic, scalable 3-tier web architecture on a whiteboard."
          }
        ]
      },
      {
        "id": "1-2",
        "title": "DATABASES & DATA MANAGEMENT",
        "days": "Days 22–46",
        "items": [
          {
            "day": 22,
            "topic": "RDBMS vs NoSQL",
            "priority": "MUST KNOW",
            "tasks": "Compare strictly typed, normalized relational databases with flexible, denormalized NoSQL stores.",
            "achievement": "Can evaluate business requirements and correctly choose between Postgres and MongoDB."
          },
          {
            "day": 23,
            "topic": "ACID Properties",
            "priority": "MUST KNOW",
            "tasks": "Deep dive into Atomicity, Consistency, Isolation, Durability. Understand how relational DBs guarantee these.",
            "achievement": "Can explain how a bank transfer transaction is protected by ACID principles."
          },
          {
            "day": 24,
            "topic": "BASE Properties (NoSQL)",
            "priority": "MUST KNOW",
            "tasks": "Study Basically Available, Soft state, Eventual consistency. Compare this to strict ACID.",
            "achievement": "Can explain why Amazon shopping carts use BASE and accept eventual consistency."
          },
          {
            "day": 25,
            "topic": "Database Indexes Deep Dive",
            "priority": "MUST KNOW",
            "tasks": "Learn how B-Trees and B+ Trees work under the hood. Understand what makes an index fast for reads but slow for writes.",
            "achievement": "Can draw a B+ Tree and explain why it minimizes disk I/O operations."
          },
          {
            "day": 26,
            "topic": "Advanced Indexing",
            "priority": "MUST KNOW",
            "tasks": "Study Composite Indexes, Covering Indexes, and the Left-most prefix rule.",
            "achievement": "Can optimize a slow SQL query by creating a highly efficient covering index."
          },
          {
            "day": 27,
            "topic": "Key-Value Stores (Redis/Memcached)",
            "priority": "MUST KNOW",
            "tasks": "Understand in-memory KV stores. Use cases for Redis beyond simple caching (Leaderboards, Pub/Sub).",
            "achievement": "Can architect a system that uses Redis for high-speed, volatile data operations."
          },
          {
            "day": 28,
            "topic": "Document Stores (MongoDB)",
            "priority": "MUST KNOW",
            "tasks": "Learn how JSON/BSON document databases work. Understand denormalization strategies.",
            "achievement": "Can design a data model for a blog with nested comments in a single document."
          },
          {
            "day": 29,
            "topic": "Wide-Column Stores (Cassandra)",
            "priority": "IMPORTANT",
            "tasks": "Study distributed, masterless databases. Learn about Partition Keys and Clustering Columns.",
            "achievement": "Can explain Cassandra's architecture and design a query-driven data model."
          },
          {
            "day": 30,
            "topic": "Graph Databases (Neo4j)",
            "priority": "IMPORTANT",
            "tasks": "Understand Nodes and Edges. When to use Graph DBs (Social networks, recommendation engines).",
            "achievement": "Can identify a problem that requires a graph database to avoid complex SQL JOINs."
          },
          {
            "day": 31,
            "topic": "Search Engines (Elasticsearch)",
            "priority": "MUST KNOW",
            "tasks": "Learn how an Inverted Index works. Understand text analysis and full-text search.",
            "achievement": "Can design a scalable search feature utilizing Elasticsearch inverted indices."
          },
          {
            "day": 32,
            "topic": "Time-Series Databases (InfluxDB, TimescaleDB)",
            "priority": "IMPORTANT",
            "tasks": "Study InfluxDB and TimescaleDB. Understand how they optimize and compress timestamped telemetry, metrics, and logs.",
            "achievement": "Can explain why a relational DB is poor for storing millions of IoT sensor metrics per second."
          },
          {
            "day": 33,
            "topic": "Blob / Object Storage",
            "priority": "MUST KNOW",
            "tasks": "Understand Amazon S3 architecture. Flat namespaces vs hierarchical file systems.",
            "achievement": "Can securely architecture video/image upload features using direct-to-S3 pre-signed URLs."
          },
          {
            "day": 34,
            "topic": "Transaction Isolation Levels",
            "priority": "MUST KNOW",
            "tasks": "Study Read Uncommitted, Read Committed, Repeatable Read, and Serializable levels.",
            "achievement": "Can explain Dirty Reads, Non-repeatable Reads, and Phantom Reads, and how to prevent them."
          },
          {
            "day": 35,
            "topic": "Concurrency Control (Optimistic/Pessimistic)",
            "priority": "MUST KNOW",
            "tasks": "Compare locking rows (Pessimistic) vs using version numbers (Optimistic).",
            "achievement": "Can implement optimistic locking to prevent lost updates in a ticketing system."
          },
          {
            "day": 36,
            "topic": "Distributed Transactions (2PC)",
            "priority": "MUST KNOW",
            "tasks": "Learn the Two-Phase Commit protocol. Understand the coordinator and cohort roles and why it blocks.",
            "achievement": "Can explain the vulnerability of the coordinator failing in a 2PC setup."
          },
          {
            "day": 37,
            "topic": "Saga Pattern",
            "priority": "MUST KNOW",
            "tasks": "Study long-running distributed transactions using compensating actions instead of strict locking.",
            "achievement": "Can design an Order-Payment-Inventory flow using the Saga choreography pattern."
          },
          {
            "day": 38,
            "topic": "Change Data Capture (CDC) & Debezium",
            "priority": "MUST KNOW",
            "tasks": "Learn about CDC and Debezium. Understand how monitoring database transaction logs streams changes to search/analytics engines safely.",
            "achievement": "Can explain how to safely replicate data from Postgres to Elasticsearch without dual-writes."
          },
          {
            "day": 39,
            "topic": "Event Sourcing",
            "priority": "IMPORTANT",
            "tasks": "Understand storing every state change as an append-only event log rather than overwriting current state. Ideal for audit-heavy systems.",
            "achievement": "Can design an accounting ledger system using pure event sourcing."
          },
          {
            "day": 40,
            "topic": "CQRS Pattern",
            "priority": "IMPORTANT",
            "tasks": "Study Command Query Responsibility Segregation. Separating write models from read models.",
            "achievement": "Can combine Event Sourcing with CQRS to build a highly scalable, eventually consistent read API."
          },
          {
            "day": 41,
            "topic": "Database Migration Strategies",
            "priority": "MUST KNOW",
            "tasks": "Learn how to alter schemas in production with zero downtime using the Expand-and-Contract pattern.",
            "achievement": "Can safely rename a database column in a live, high-traffic environment."
          },
          {
            "day": 42,
            "topic": "Consistent Hashing (Data Layer)",
            "priority": "MUST KNOW",
            "tasks": "Review consistent hashing specifically for distributing database shards.",
            "achievement": "Can calculate the impact of adding a new database shard on a consistent hash ring."
          },
          {
            "day": 43,
            "topic": "Quorum & Replication Factor",
            "priority": "MUST KNOW",
            "tasks": "Study the math of Read and Write quorums (W + R > N) for strong consistency in leaderless databases.",
            "achievement": "Can configure a Cassandra cluster for strict consistency vs high availability."
          },
          {
            "day": 44,
            "topic": "Vector Databases",
            "priority": "MUST KNOW",
            "tasks": "Understand how Pinecone/Milvus store embeddings and perform nearest-neighbor searches.",
            "achievement": "Can explain how vector DBs differ from traditional DBs for AI semantic search."
          },
          {
            "day": 45,
            "topic": "Polyglot Persistence Architecture",
            "priority": "MUST KNOW",
            "tasks": "Study architectures that combine multiple database types (SQL + Redis + ES).",
            "achievement": "Can design a complex system leveraging the strengths of 3+ different database technologies."
          },
          {
            "day": 46,
            "topic": "Phase 2 Review: DB Design",
            "priority": "MUST KNOW",
            "tasks": "Take a complex domain (e.g., E-commerce catalog) and design its full database architecture.",
            "achievement": "Can justify the choices between Postgres, MongoDB, Redis, and ES for various microservices."
          }
        ]
      },
      {
        "id": "1-3",
        "title": "MICROSERVICES & REAL-WORLD PATTERNS",
        "days": "Days 47–75",
        "items": [
          {
            "day": 47,
            "topic": "Service Discovery",
            "priority": "MUST KNOW",
            "tasks": "Study client-side vs server-side discovery. Understand tools like Consul, Eureka, and ZooKeeper.",
            "achievement": "Can explain how a microservice dynamically finds the IP of another service in a scaling environment."
          },
          {
            "day": 48,
            "topic": "API Gateway Pattern",
            "priority": "MUST KNOW",
            "tasks": "Learn the responsibilities of an API Gateway (Routing, Auth, Rate Limiting, Aggregation).",
            "achievement": "Can design a unified entry point that masks internal microservice architectures from clients."
          },
          {
            "day": 49,
            "topic": "BFF (Backend for Frontend)",
            "priority": "IMPORTANT",
            "tasks": "Understand creating specific API Gateways tailored for Mobile apps vs Web apps.",
            "achievement": "Can explain when to split a single API Gateway into multiple BFFs to reduce over-fetching."
          },
          {
            "day": 50,
            "topic": "Circuit Breaker Pattern",
            "priority": "MUST KNOW",
            "tasks": "Study how to prevent cascading failures using Closed, Open, and Half-Open states.",
            "achievement": "Can describe how a circuit breaker protects a healthy service from a struggling dependency."
          },
          {
            "day": 51,
            "topic": "Bulkhead Pattern",
            "priority": "MUST KNOW",
            "tasks": "Learn how isolating thread pools prevents one failing service from consuming all system resources.",
            "achievement": "Can combine Circuit Breakers with Bulkheads to create highly resilient microservices."
          },
          {
            "day": 52,
            "topic": "Retry & Timeout Strategies",
            "priority": "MUST KNOW",
            "tasks": "Study exponential backoff and jitter to prevent hammering recovering services.",
            "achievement": "Can implement safe retry logic that avoids causing thundering herd problems."
          },
          {
            "day": 53,
            "topic": "Asynchronous Messaging (Kafka)",
            "priority": "MUST KNOW",
            "tasks": "Deep dive into Kafka architecture: Topics, Partitions, Brokers, and Consumer Groups.",
            "achievement": "Can design a high-throughput event processing pipeline using Kafka partitions for parallelism."
          },
          {
            "day": 54,
            "topic": "Dead Letter Queues (DLQ)",
            "priority": "MUST KNOW",
            "tasks": "Understand how to handle poisonous messages or processing failures in async systems.",
            "achievement": "Can design a robust error-handling flow for failed Kafka or SQS messages."
          },
          {
            "day": 55,
            "topic": "Idempotency in APIs",
            "priority": "MUST KNOW",
            "tasks": "Study how to design APIs where duplicate requests (e.g. payment retries, client double-clicks) have the exact same effect as one request.",
            "achievement": "Can implement an Idempotency-Key system for processing financial payments safely."
          },
          {
            "day": 56,
            "topic": "Distributed Locks (Redis/Redlock, ZooKeeper)",
            "priority": "MUST KNOW",
            "tasks": "Study distributed locking patterns using Redis (Redlock) and ZooKeeper. Learn when leases are necessary to prevent split-brain write issues.",
            "achievement": "Can coordinate safe distributed executions (like scheduled jobs, inventory holds) across microservices."
          },
          {
            "day": 57,
            "topic": "Transactional Outbox Pattern",
            "priority": "MUST KNOW",
            "tasks": "Learn how to reliably update a database AND publish an event to a message broker without 2PC.",
            "achievement": "Can design a Transactional Outbox to guarantee at-least-once message delivery."
          },
          {
            "day": 58,
            "topic": "Authentication & Authorization",
            "priority": "MUST KNOW",
            "tasks": "Compare Basic Auth, Session Auth, and Token Auth. Understand stateful vs stateless.",
            "achievement": "Can choose the correct authentication mechanism for a monolith vs a distributed API."
          },
          {
            "day": 59,
            "topic": "JWT (JSON Web Tokens)",
            "priority": "MUST KNOW",
            "tasks": "Study JWT structure (Header, Payload, Signature). Understand security risks and token expiration.",
            "achievement": "Can explain how to secure APIs with JWTs and the difficulty of revoking them."
          },
          {
            "day": 60,
            "topic": "OAuth2 & OIDC",
            "priority": "IMPORTANT",
            "tasks": "Understand Authorization Code flow vs Client Credentials flow. Single Sign-On basics.",
            "achievement": "Can diagram the OAuth2 flow for a user logging in via Google to a third-party app."
          },
          {
            "day": 61,
            "topic": "Distributed Tracing (OpenTelemetry & Jaeger)",
            "priority": "MUST KNOW",
            "tasks": "Study distributed request tracing. Learn how trace IDs and span IDs propagate context across multiple microservice boundaries using OpenTelemetry and Jaeger.",
            "achievement": "Can debug distributed performance bottlenecks and network latency leaks."
          },
          {
            "day": 62,
            "topic": "Metrics & Observability Theory",
            "priority": "MUST KNOW",
            "tasks": "Study the RED method (Rate, Errors, Duration) and USE method (Utilization, Saturation, Errors).",
            "achievement": "Can design a monitoring dashboard strategy for a new microservice."
          },
          {
            "day": 63,
            "topic": "Metrics Implementation",
            "priority": "MUST KNOW",
            "tasks": "Export raw metrics from a dummy application and scrape them with a local Prometheus instance. Graph them in Grafana.",
            "achievement": "Can build the foundational observability stack from scratch."
          },
          {
            "day": 64,
            "topic": "Log Aggregation",
            "priority": "MUST KNOW",
            "tasks": "Understand the ELK Stack (Elasticsearch, Logstash, Kibana) for centralized logging.",
            "achievement": "Can explain why you must never log directly to local files in a Dockerized environment."
          },
          {
            "day": 65,
            "topic": "GraphQL vs REST",
            "priority": "IMPORTANT",
            "tasks": "Study GraphQL schemas, queries, and resolvers. Understand under-fetching and over-fetching.",
            "achievement": "Can evaluate if a complex UI dashboard should use GraphQL or multiple REST endpoints."
          },
          {
            "day": 66,
            "topic": "gRPC & Protobuf Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Study Protocol Buffers (protobuf) schema designs and unary vs. streaming RPCs. Compare HTTP/2 multiplexing benefits over HTTP/1.1 REST.",
            "achievement": "Can design the high-performance internal service-to-service communication layer using gRPC."
          },
          {
            "day": 67,
            "topic": "Service Mesh (Istio)",
            "priority": "IMPORTANT",
            "tasks": "Study Service Mesh patterns. Differentiate the Data Plane (envoy sidecars) from the Control Plane (istiod). Explore mutual TLS (mTLS), traffic split releases, and fault injection.",
            "achievement": "Can deploy and secure microservices transparently without changing application code."
          },
          {
            "day": 68,
            "topic": "Batch Processing",
            "priority": "IMPORTANT",
            "tasks": "Understand MapReduce and distributed batch jobs for heavy data processing (Hadoop/Spark basics).",
            "achievement": "Can design a system to process 10TB of log data nightly."
          },
          {
            "day": 69,
            "topic": "Stream Processing",
            "priority": "IMPORTANT",
            "tasks": "Compare batch vs stream processing. Understand Apache Flink or Kafka Streams.",
            "achievement": "Can architect a real-time fraud detection pipeline on incoming credit card swipes."
          },
          {
            "day": 70,
            "topic": "Data Lakes vs Data Warehouses",
            "priority": "IMPORTANT",
            "tasks": "Study the difference between structured OLAP data warehouses and raw object-storage Data Lakes.",
            "achievement": "Can explain when to use Snowflake/Redshift versus an AWS S3 Data Lake."
          },
          {
            "day": 71,
            "topic": "Security: HTTPS & TLS",
            "priority": "MUST KNOW",
            "tasks": "Learn how asymmetric and symmetric encryption work together in the TLS handshake.",
            "achievement": "Can explain the TLS handshake step-by-step in a security-focused interview."
          },
          {
            "day": 72,
            "topic": "Security: Common Vulnerabilities",
            "priority": "MUST KNOW",
            "tasks": "Review OWASP Top 10: SQL Injection, XSS, CSRF, and SSRF.",
            "achievement": "Can secure an architecture against the most common web exploits."
          },
          {
            "day": 73,
            "topic": "Serverless Architecture",
            "priority": "IMPORTANT",
            "tasks": "Study AWS Lambda. Understand Cold Starts, stateless execution, and event-driven triggers.",
            "achievement": "Can design a highly scalable, event-driven image processing pipeline using Serverless."
          },
          {
            "day": 74,
            "topic": "Phase 3 Review: Resiliency",
            "priority": "MUST KNOW",
            "tasks": "Take a basic architecture and inject failures. Add Circuit Breakers, Retries, and DLQs.",
            "achievement": "Can systematically identify and mitigate failure points in a complex architecture."
          }
        ]
      },
      {
        "id": "1-4",
        "title": "THE SYSTEM DESIGN INTERVIEW FRAMEWORK",
        "days": "Days 75–88",
        "items": [
          {
            "day": 75,
            "topic": "PEDALS Framework & Requirements",
            "priority": "MUST KNOW",
            "tasks": "Learn the PEDALS framework. Practice asking functional vs non-functional requirements to perfectly scope out a vague prompt (\"Design Twitter\").",
            "achievement": "Can structure any system design interview answer predictably and logically."
          },
          {
            "day": 76,
            "topic": "Back-of-the-Envelope Math",
            "priority": "MUST KNOW",
            "tasks": "Memorize powers of 2, time conversions, and standard metrics (1 million requests/day = 12 requests/sec). Practice calculating QPS.",
            "achievement": "Can quickly estimate required storage capacity and read/write throughput in your head."
          },
          {
            "day": 77,
            "topic": "QPS Calculator (Implementation)",
            "priority": "MUST KNOW",
            "tasks": "Write a quick Python script or web app that accepts DAU (Daily Active Users) and outputs QPS, Peak QPS, and storage estimates over 5 years.",
            "achievement": "Can mathematically prove your interview estimations using code."
          },
          {
            "day": 78,
            "topic": "API & Data Model Design",
            "priority": "MUST KNOW",
            "tasks": "Practice drawing Entity-Relationship diagrams, choosing SQL vs NoSQL, and writing REST API contracts (HTTP method, path, payload).",
            "achievement": "Can design clean APIs and schemas that support massive scale."
          },
          {
            "day": 79,
            "topic": "REST Contracts (Implementation)",
            "priority": "MUST KNOW",
            "tasks": "Use Swagger/OpenAPI to actually write out the JSON contract for a \"Design Twitter\" problem. Validate the payloads.",
            "achievement": "Can translate an abstract API design into a rigid, testable technical spec."
          },
          {
            "day": 80,
            "topic": "High-Level Design & Bottlenecks",
            "priority": "MUST KNOW",
            "tasks": "Practice drawing the initial architecture (Client -> LB -> App -> DB) and immediately pointing out what breaks at 100M users.",
            "achievement": "Can quickly identify network, CPU, and disk I/O bottlenecks in an architecture."
          },
          {
            "day": 81,
            "topic": "Scaling Strategies",
            "priority": "MUST KNOW",
            "tasks": "Apply caching, sharding, message queues, and CDNs to fix the bottlenecks identified in your high-level designs.",
            "achievement": "Can systematically scale up a basic web app to handle enterprise-level traffic."
          },
          {
            "day": 82,
            "topic": "Handling Pagination at Scale",
            "priority": "MUST KNOW",
            "tasks": "Study cursor-based pagination vs offset-based pagination. Understand why SQL OFFSET gets extremely slow at scale.",
            "achievement": "Can design a highly performant scrolling feed without database degradation."
          },
          {
            "day": 83,
            "topic": "Cursor Pagination (Implementation)",
            "priority": "MUST KNOW",
            "tasks": "Write a small backend script that implements true cursor-based pagination over a dummy dataset of 1 million rows.",
            "achievement": "Can write code that fetches page 10,000 just as fast as page 1."
          },
          {
            "day": 84,
            "topic": "Designing Unique ID Generators",
            "priority": "MUST KNOW",
            "tasks": "Study UUIDs, Ticket Servers, and Twitter Snowflake. How to generate 10,000 sortable unique IDs per second.",
            "achievement": "Can design a distributed, chronologically sortable ID generation service."
          },
          {
            "day": 85,
            "topic": "Designing a Key-Value Store",
            "priority": "IMPORTANT",
            "tasks": "Study the internals of Dynamo or Cassandra. Understand Consistent Hashing and Quorum.",
            "achievement": "Can architect a highly available, distributed key-value database from scratch."
          },
          {
            "day": 86,
            "topic": "Designing a Rate Limiter",
            "priority": "MUST KNOW",
            "tasks": "Practice designing a distributed rate limiter using Redis and sliding window logs.",
            "achievement": "Can design a middleware service to protect APIs from DDoS and brute force attacks."
          },
          {
            "day": 87,
            "topic": "Rate Limiter (Implementation)",
            "priority": "MUST KNOW",
            "tasks": "Write a Python/Java script that uses Redis to implement a Sliding Window rate limiting algorithm.",
            "achievement": "Can implement production-grade API throttling in code."
          },
          {
            "day": 88,
            "topic": "Designing a Web Crawler",
            "priority": "IMPORTANT",
            "tasks": "Study seed URLs, BFS crawling, DNS caching, and handling politeness rules (robots.txt).",
            "achievement": "Can architect a distributed crawler that safely treats billions of web pages."
          }
        ]
      },
      {
        "id": "1-5",
        "title": "PRACTICAL SYSTEM DESIGN (REAL WORLD)",
        "days": "Days 89–128",
        "items": [
          {
            "day": 89,
            "topic": "Web Crawler (Implementation)",
            "priority": "MUST KNOW",
            "tasks": "Write a basic Breadth-First-Search (BFS) crawler in Python/Java that respects robots.txt and limits concurrency.",
            "achievement": "Can build a functional internet scraper that doesn't crash or get IP-banned."
          },
          {
            "day": 90,
            "topic": "Phase 4 Review: Mock Interview",
            "priority": "MUST KNOW",
            "tasks": "Run a timed 45-minute mock interview for \"Design a URL Shortener\" using the full PEDALS framework.",
            "achievement": "Can successfully navigate a full system design interview from requirements to scaling."
          },
          {
            "day": 91,
            "topic": "Design Pastebin",
            "priority": "MUST KNOW",
            "tasks": "Focus on blob storage for text, database for metadata, and data expiration/cleanup.",
            "achievement": "Can design a service for storing and expiring millions of text snippets."
          },
          {
            "day": 92,
            "topic": "Design Twitter / X",
            "priority": "MUST KNOW",
            "tasks": "Focus on the home timeline generation. Fan-out on write vs Fan-out on read strategies.",
            "achievement": "Can architect a scalable social media feed supporting celebrity accounts with millions of followers."
          },
          {
            "day": 93,
            "topic": "Design Instagram",
            "priority": "MUST KNOW",
            "tasks": "Focus on image storage (S3 + CDN) and generating the news feed using a graph database or denormalized tables.",
            "achievement": "Can design a photo-sharing app optimized for high-bandwidth read operations."
          },
          {
            "day": 94,
            "topic": "Design Dropbox / Google Drive",
            "priority": "MUST KNOW",
            "tasks": "Focus on block-level file syncing, delta syncing, and handling concurrent edits.",
            "achievement": "Can architect a file synchronization service that minimizes network bandwidth usage."
          },
          {
            "day": 95,
            "topic": "Design WhatsApp / Messenger",
            "priority": "MUST KNOW",
            "tasks": "Focus on WebSockets, message sequencing, presence servers (online status), and push notifications.",
            "achievement": "Can design a real-time chat application handling billions of messages daily."
          },
          {
            "day": 96,
            "topic": "Design YouTube / Netflix",
            "priority": "MUST KNOW",
            "tasks": "Focus on video transcoding pipelines, chunking, and massive CDN delivery architectures.",
            "achievement": "Can design a video streaming platform that supports multiple resolutions and adaptive bitrate streaming."
          },
          {
            "day": 97,
            "topic": "Design Uber / Lyft",
            "priority": "MUST KNOW",
            "tasks": "Focus on geospatial indexing (QuadTrees, Geohashes) and matching riders with drivers in real-time.",
            "achievement": "Can design a location-based dispatch system handling rapid real-time updates."
          },
          {
            "day": 98,
            "topic": "Design Yelp / Proximity Service",
            "priority": "MUST KNOW",
            "tasks": "Focus specifically on optimizing geospatial databases to query \"businesses near me\" rapidly.",
            "achievement": "Can architect a highly read-optimized location discovery service."
          },
          {
            "day": 100,
            "topic": "Design Ticketmaster / BookMyShow",
            "priority": "MUST KNOW",
            "tasks": "Focus on high concurrency, preventing double-booking using row locks, and handling massive traffic spikes.",
            "achievement": "Can design a transactional ticketing system that survives the \"Taylor Swift\" traffic spike."
          },
          {
            "day": 101,
            "topic": "Design a Typeahead / Autocomplete",
            "priority": "MUST KNOW",
            "tasks": "Focus on Trie data structures, caching hot prefixes, and updating the trie offline.",
            "achievement": "Can architect a sub-10ms autocomplete suggestion engine for a search bar."
          },
          {
            "day": 102,
            "topic": "Design Amazon / E-Commerce",
            "priority": "MUST KNOW",
            "tasks": "Focus on the shopping cart (DynamoDB), inventory management, and the checkout Saga pattern.",
            "achievement": "Can design a highly available e-commerce platform that never loses a shopping cart."
          },
          {
            "day": 103,
            "topic": "Design a Payment Gateway",
            "priority": "MUST KNOW",
            "tasks": "Focus on Idempotency, 2PC vs Sagas, communicating with external banks, and strict ACID compliance.",
            "achievement": "Can design a bulletproof, secure payment processing API."
          },
          {
            "day": 104,
            "topic": "Design Google Docs (Collaborative Editor)",
            "priority": "IMPORTANT",
            "tasks": "Focus on Operational Transformation (OT) or Conflict-free Replicated Data Types (CRDTs).",
            "achievement": "Can explain the algorithms required to allow multiple users to type in the same document simultaneously."
          },
          {
            "day": 105,
            "topic": "Design a Notification System",
            "priority": "MUST KNOW",
            "tasks": "Focus on fan-out queues, rate limiting, and third-party integrations (APNS, FCM, SendGrid).",
            "achievement": "Can design a centralized service that delivers millions of emails and push notifications reliably."
          },
          {
            "day": 106,
            "topic": "Design a Metrics / Monitoring System",
            "priority": "IMPORTANT",
            "tasks": "Focus on time-series databases, data aggregation, and handling extreme write-heavy workloads.",
            "achievement": "Can architect a Datadog-like system that ingests billions of server metrics."
          },
          {
            "day": 107,
            "topic": "Design a Distributed Message Queue",
            "priority": "IMPORTANT",
            "tasks": "Focus on the internals of Kafka. Disk I/O optimization, zero-copy, and partition replication.",
            "achievement": "Can architect a high-throughput message broker from scratch."
          },
          {
            "day": 108,
            "topic": "Design Tinder",
            "priority": "IMPORTANT",
            "tasks": "Focus on geospatial matching algorithms, swiping logic (queues), and recommendation engines.",
            "achievement": "Can design a fast, location-based matching service with complex recommendation logic."
          },
          {
            "day": 109,
            "topic": "Design Slack",
            "priority": "IMPORTANT",
            "tasks": "Focus on channel architecture, WebSockets for live typing, and searching historical messages.",
            "achievement": "Can design a team-based chat application optimized for large channels."
          },
          {
            "day": 110,
            "topic": "Design a Stock Exchange",
            "priority": "IMPORTANT",
            "tasks": "Focus on ultra-low latency, order matching engines, and strict in-memory state machines.",
            "achievement": "Can explain the extreme architectural differences required for high-frequency trading platforms."
          },
          {
            "day": 111,
            "topic": "Design ChatGPT (LLM Inference System)",
            "priority": "MUST KNOW",
            "tasks": "Design a scalable large language model inference service. Focus on token streaming over SSE/WebSockets, KV-cache budgeting, speculative decoding, and dynamic query batching.",
            "achievement": "Can architect high-throughput AI services optimized for GPU utilization constraints."
          },
          {
            "day": 112,
            "topic": "Design an AI RAG System",
            "priority": "MUST KNOW",
            "tasks": "Apply system design to AI. Focus on document ingestion pipelines, vector databases (pgvector/Pinecone), and LLM API orchestration.",
            "achievement": "Can architect an enterprise-grade Retrieval-Augmented Generation pipeline."
          },
          {
            "day": 113,
            "topic": "Design Recommendation Engine",
            "priority": "MUST KNOW",
            "tasks": "Design a real-time recommendation feed (e.g. TikTok, Netflix). Architect the candidate retrieval stage, deep-learning ranking services, and heavy re-ranking filters.",
            "achievement": "Can design end-to-end recommendation architectures scaling to billions of items and users."
          },
          {
            "day": 114,
            "topic": "Design a Distributed Web Cache",
            "priority": "IMPORTANT",
            "tasks": "Focus on consistent hashing, LRU implementation, and memcached architecture.",
            "achievement": "Can architect a Redis/Memcached clone distributed across multiple servers."
          },
          {
            "day": 115,
            "topic": "System Design Anti-Patterns",
            "priority": "MUST KNOW",
            "tasks": "Study common failures: premature microservices, over-sharding, synchronous inter-service calls, and shared databases. Understand why architectures fail in the real world.",
            "achievement": "Can critically evaluate bad architecture proposals and defend simpler, more robust alternatives."
          },
          {
            "day": 116,
            "topic": "Review: Handling Traffic Spikes",
            "priority": "MUST KNOW",
            "tasks": "Review all architectures and study how each handles sudden 100x traffic spikes (e.g., Black Friday).",
            "achievement": "Can apply aggressive caching, queueing, and auto-scaling to survive massive spikes."
          },
          {
            "day": 117,
            "topic": "Review: Handling Data Loss",
            "priority": "MUST KNOW",
            "tasks": "Review disaster recovery, multi-region replication, and backup strategies.",
            "achievement": "Can architect systems that survive the destruction of an entire AWS data center."
          },
          {
            "day": 118,
            "topic": "Mock Interview 1",
            "priority": "MUST KNOW",
            "tasks": "Run a full 45-minute mock interview with a peer or AI for \"Design Twitter\".",
            "achievement": "Can confidently deliver a senior-level system design presentation under time pressure."
          },
          {
            "day": 119,
            "topic": "Mock Interview 2",
            "priority": "MUST KNOW",
            "tasks": "Run a full 45-minute mock interview with a peer or AI for \"Design Uber\".",
            "achievement": "Can successfully navigate geospatial requirements and real-time state management."
          },
          {
            "day": 120,
            "topic": "Mock Interview 3",
            "priority": "MUST KNOW",
            "tasks": "Run a full 45-minute mock interview with a peer or AI for \"Design Ticketmaster\".",
            "achievement": "Can confidently discuss concurrency, locks, and transactional integrity."
          },
          {
            "day": 121,
            "topic": "Mock Interview 4",
            "priority": "MUST KNOW",
            "tasks": "Run a full 45-minute mock interview with a peer or AI for a surprise topic.",
            "achievement": "Can adapt the PEDALS framework to completely unknown system requirements."
          },
          {
            "day": 122,
            "topic": "Refinement & Weaknesses",
            "priority": "MUST KNOW",
            "tasks": "Identify your weakest areas from the mock interviews and review the relevant concepts (e.g., Sagas, WebSockets).",
            "achievement": "Can shore up knowledge gaps in specific distributed systems topics."
          },
          {
            "day": 123,
            "topic": "Final Deep Dive - Networking",
            "priority": "MUST KNOW",
            "tasks": "Re-review TCP/IP, Load Balancing, and DNS routing for ultra-low latency.",
            "achievement": "Can ace deep network-layer probe questions in FAANG interviews."
          },
          {
            "day": 124,
            "topic": "Final Deep Dive - Storage",
            "priority": "MUST KNOW",
            "tasks": "Re-review B-Trees, LSM Trees, and consistent hashing internals.",
            "achievement": "Can explain exactly how databases write data to disk block by block."
          },
          {
            "day": 125,
            "topic": "Mock Interview 5 (Hard Mode)",
            "priority": "MUST KNOW",
            "tasks": "Attempt a highly complex architecture like \"Design a Stock Exchange\" under strict time limits.",
            "achievement": "Can perform under extreme cognitive load."
          },
          {
            "day": 126,
            "topic": "Review of Anti-Patterns",
            "priority": "MUST KNOW",
            "tasks": "Review the Anti-Patterns day. Ensure you do not over-engineer your final interview answers.",
            "achievement": "Can demonstrate maturity by favoring simple solutions over complex ones."
          },
          {
            "day": 127,
            "topic": "Whiteboarding Practice",
            "priority": "MUST KNOW",
            "tasks": "Spend the day drawing architectures physically on a whiteboard or tablet without using drawing software.",
            "achievement": "Can smoothly draw and talk simultaneously in an in-person interview."
          },
          {
            "day": 128,
            "topic": "Final Review & Preparation",
            "priority": "MUST KNOW",
            "tasks": "Review your notes, cheat sheets, and back-of-the-envelope math. Mentally prepare for the real interview.",
            "achievement": "Ready to ace a FAANG-level System Design interview."
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "title": "Spring Boot & Microservices",
    "days": 140,
    "color": "emerald",
    "phases": [
      {
        "id": "2-1",
        "title": "JVM & CORE JAVA INTERNALS",
        "days": "Days 1–27",
        "items": [
          {
            "day": 1,
            "topic": "JVM Architecture",
            "priority": "MUST KNOW",
            "tasks": "Study the Classloader subsystem, Method Area, Heap, Stack, and PC Register. Draw the JVM architecture from memory.",
            "achievement": "Can explain exactly where objects vs primitives are stored in memory."
          },
          {
            "day": 2,
            "topic": "Garbage Collection Algorithms",
            "priority": "MUST KNOW",
            "tasks": "Learn Mark & Sweep, G1GC, and ZGC. Understand the difference between the Young Gen, Old Gen, and Metaspace.",
            "achievement": "Can choose the correct garbage collector based on application latency requirements."
          },
          {
            "day": 3,
            "topic": "JVM Tuning & Low Latency Java",
            "priority": "MUST KNOW",
            "tasks": "Learn JVM command-line flags (e.g. -Xms, -Xmx, -XX:MaxGCPauseMillis). Study how to tune garbage collectors (G1GC, ZGC) for low latency and high throughput. Differentiate between memory footprint, latency, and throughput.",
            "achievement": "Can tune the JVM for optimal execution and low latency in enterprise environments."
          },
          {
            "day": 4,
            "topic": "Memory Leaks & Profiling",
            "priority": "MUST KNOW",
            "tasks": "Write a program that intentionally causes an OutOfMemoryError. Use VisualVM or JDK Mission Control to find the leak.",
            "achievement": "Can diagnose and fix memory leaks in production JVM applications."
          },
          {
            "day": 5,
            "topic": "Build Systems: Maven",
            "priority": "MUST KNOW",
            "tasks": "Create a `pom.xml` from scratch. Understand the Maven lifecycle (compile, test, package, install). Resolve a dependency conflict using `<dependencyManagement>`.",
            "achievement": "Can manage enterprise dependencies without relying on IDE auto-magic."
          },
          {
            "day": 6,
            "topic": "Build Systems: Gradle",
            "priority": "IMPORTANT",
            "tasks": "Recreate the Maven project using Gradle `build.gradle`. Understand why Gradle is faster (Daemon, incremental builds).",
            "achievement": "Can read and write Groovy/Kotlin DSL build scripts."
          },
          {
            "day": 7,
            "topic": "Modern Java: Streams API",
            "priority": "MUST KNOW",
            "tasks": "Write complex data transformations using `filter()`, `map()`, `flatMap()`, and `collect()`. Understand lazy evaluation.",
            "achievement": "Can replace 50 lines of nested loops with a clean 5-line Stream pipeline."
          },
          {
            "day": 8,
            "topic": "Modern Java: Optional & Records",
            "priority": "MUST KNOW",
            "tasks": "Eliminate NullPointerExceptions using `Optional`. Replace boilerplate DTO classes with Java 14 `record` types.",
            "achievement": "Can write highly defensive, immutable data carriers instantly."
          },
          {
            "day": 9,
            "topic": "Modern Java: Pattern Matching",
            "priority": "IMPORTANT",
            "tasks": "Use Java 17+ pattern matching for `instanceof` and switch expressions. Simplify a complex parser using these features.",
            "achievement": "Can write concise control flow logic using the latest Java LTS features."
          },
          {
            "day": 10,
            "topic": "Collections Framework Deep Dive",
            "priority": "MUST KNOW",
            "tasks": "Study the time complexity of ArrayList vs LinkedList, and HashMap vs TreeMap. Understand how HashMap resolves collisions using Red-Black Trees.",
            "achievement": "Can select the most performant data structure for any algorithmic requirement."
          },
          {
            "day": 11,
            "topic": "Concurrency: Threads & Runnables",
            "priority": "MUST KNOW",
            "tasks": "Create and start multiple threads. Understand race conditions by intentionally breaking a shared counter.",
            "achievement": "Can explain exactly why thread synchronization is dangerous and necessary."
          },
          {
            "day": 12,
            "topic": "Concurrency: Synchronization & Volatile",
            "priority": "MUST KNOW",
            "tasks": "Fix yesterday's broken counter using `synchronized` blocks. Study CPU cache coherence and the `volatile` keyword.",
            "achievement": "Can prevent data corruption in multi-threaded applications."
          },
          {
            "day": 13,
            "topic": "Java Memory Model (JMM)",
            "priority": "MUST KNOW",
            "tasks": "Study the JMM specifications deeply. Learn the happens-before relationship, instruction reordering, thread visibility, memory barriers, and atomic operations.",
            "achievement": "Can write safe multi-threaded Java applications by leveraging happens-before and volatile guarantees."
          },
          {
            "day": 14,
            "topic": "Concurrency: Thread Pools",
            "priority": "MUST KNOW",
            "tasks": "Stop manually creating threads. Use `ExecutorService` (FixedThreadPool, CachedThreadPool) to manage a pool of workers.",
            "achievement": "Can prevent an application from crashing due to thread exhaustion under heavy load."
          },
          {
            "day": 15,
            "topic": "Concurrency: CompletableFuture",
            "priority": "MUST KNOW",
            "tasks": "Write asynchronous, non-blocking code. Chain three REST API calls together using `thenApply` and `thenCombine`.",
            "achievement": "Can execute multiple independent tasks in parallel and merge their results instantly."
          },
          {
            "day": 16,
            "topic": "Concurrency: Concurrent Collections",
            "priority": "MUST KNOW",
            "tasks": "Replace `HashMap` with `ConcurrentHashMap`. Use `CopyOnWriteArrayList` for safe iteration. Study `CountDownLatch`.",
            "achievement": "Can build highly concurrent systems without writing complex synchronization locks."
          },
          {
            "day": 17,
            "topic": "Concurrency: Virtual Threads (Project Loom)",
            "priority": "MUST KNOW",
            "tasks": "Study Java 21 Virtual Threads. Write a program that spawns 1,000,000 virtual threads and observe the RAM usage.",
            "achievement": "Can explain how Loom achieves Go-like concurrency without callback hell."
          },
          {
            "day": 18,
            "topic": "JUnit 5 Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Write unit tests using `@Test`, `@BeforeEach`, and `@ParameterizedTest`. Assert exceptions using `assertThrows`.",
            "achievement": "Can guarantee business logic correctness using automated tests."
          },
          {
            "day": 19,
            "topic": "Mockito Framework",
            "priority": "MUST KNOW",
            "tasks": "Use `@Mock` and `@InjectMocks` to isolate a service class from its database dependency. Write tests verifying specific method calls.",
            "achievement": "Can test tightly coupled code by simulating the behavior of external systems."
          },
          {
            "day": 20,
            "topic": "Test-Driven Development (TDD)",
            "priority": "IMPORTANT",
            "tasks": "Write a test for a \"String Calculator\" BEFORE writing the implementation code. Follow the Red-Green-Refactor cycle.",
            "achievement": "Can architect software designs implicitly driven by testability requirements."
          },
          {
            "day": 21,
            "topic": "Logging Frameworks (SLF4J / Logback)",
            "priority": "MUST KNOW",
            "tasks": "Configure `logback.xml` to roll logs daily and limit file size. Differentiate between TRACE, DEBUG, INFO, WARN, and ERROR levels.",
            "achievement": "Can build auditable applications that leave a breadcrumb trail for debugging."
          },
          {
            "day": 22,
            "topic": "SOLID Principles",
            "priority": "MUST KNOW",
            "tasks": "Study Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.",
            "achievement": "Can identify architectural smells and refactor code to be highly maintainable."
          },
          {
            "day": 23,
            "topic": "Design Patterns: Creational",
            "priority": "MUST KNOW",
            "tasks": "Implement Singleton (Thread-safe), Builder, and Factory patterns from scratch without Spring.",
            "achievement": "Can manage complex object instantiation safely."
          },
          {
            "day": 24,
            "topic": "Design Patterns: Behavioral",
            "priority": "MUST KNOW",
            "tasks": "Implement the Strategy pattern to switch between payment methods, and the Observer pattern for event notification.",
            "achievement": "Can decouple algorithms and event listeners from core business logic."
          },
          {
            "day": 25,
            "topic": "Spring Context Design Patterns",
            "priority": "MUST KNOW",
            "tasks": "Study how Spring uses patterns internally: Template Method (JdbcTemplate), Decorator (Security filters), Proxy (AOP), and Observer (ApplicationEvents).",
            "achievement": "Can recognize enterprise design patterns hiding inside Spring Framework abstractions."
          },
          {
            "day": 26,
            "topic": "Phase 1 Review: Core Java Challenge",
            "priority": "MUST KNOW",
            "tasks": "Build a multi-threaded web scraper using `CompletableFuture` and `ConcurrentHashMap`, unit tested with Mockito.",
            "achievement": "Can write production-ready, highly concurrent Java code without any frameworks."
          },
          {
            "day": 27,
            "topic": "Interview Prep: Core Java",
            "priority": "MUST KNOW",
            "tasks": "Review JVM memory models, equals() vs hashCode() contract, and differences between volatile, synchronized, and atomic variables.",
            "achievement": "Ready to pass the language-specific portion of any Java backend interview."
          }
        ]
      },
      {
        "id": "2-2",
        "title": "SPRING FRAMEWORK & REST APIs",
        "days": "Days 28–65",
        "items": [
          {
            "day": 28,
            "topic": "Inversion of Control (IoC)",
            "priority": "MUST KNOW",
            "tasks": "Understand the concept of IoC. Write a pure Java application where an orchestrator creates objects and passes them to dependents.",
            "achievement": "Can explain the foundational philosophy that makes Spring necessary."
          },
          {
            "day": 29,
            "topic": "Dependency Injection (DI)",
            "priority": "MUST KNOW",
            "tasks": "Add the Spring Context dependency. Use `@Component` and `@Autowired` (Constructor injection) to let Spring wire your objects together.",
            "achievement": "Can decouple classes completely by letting the framework manage their dependencies."
          },
          {
            "day": 30,
            "topic": "Spring Bean Lifecycle",
            "priority": "MUST KNOW",
            "tasks": "Study Bean Scopes (Singleton vs Prototype). Implement `@PostConstruct` and `@PreDestroy`.",
            "achievement": "Can manage resources (like opening/closing network connections) tied to bean lifecycles."
          },
          {
            "day": 31,
            "topic": "Aspect-Oriented Programming (AOP)",
            "priority": "MUST KNOW",
            "tasks": "Write a custom `@LogExecutionTime` annotation and use an `@Around` aspect to measure method performance without modifying the method code.",
            "achievement": "Can implement cross-cutting concerns (logging, security) cleanly across the entire codebase."
          },
          {
            "day": 32,
            "topic": "Introduction to Spring Boot",
            "priority": "MUST KNOW",
            "tasks": "Initialize a project via Spring Initializr. Understand Auto-Configuration (`@SpringBootApplication`).",
            "achievement": "Can explain how Spring Boot eliminates thousands of lines of XML configuration."
          },
          {
            "day": 33,
            "topic": "Native Compilation (GraalVM)",
            "priority": "MUST KNOW",
            "tasks": "Use Spring Boot 3 AOT (Ahead-of-Time) compilation. Build a native executable using GraalVM. Compare startup time to a standard JVM JAR.",
            "achievement": "Can deploy Java applications that start in 50 milliseconds with minimal RAM footprints."
          },
          {
            "day": 34,
            "topic": "Configuration Management",
            "priority": "MUST KNOW",
            "tasks": "Use `application.yml`. Bind properties to a POJO using `@ConfigurationProperties`. Use `@Profile` for dev vs prod environments.",
            "achievement": "Can manage application settings dynamically without recompiling code."
          },
          {
            "day": 35,
            "topic": "Spring Boot Actuator",
            "priority": "MUST KNOW",
            "tasks": "Enable Actuator. Explore `/actuator/health` and `/actuator/metrics`. Add custom health checks for a third-party API.",
            "achievement": "Can expose application internals to monitoring tools for production readiness."
          },
          {
            "day": 36,
            "topic": "Prometheus & Grafana Integration",
            "priority": "MUST KNOW",
            "tasks": "Expose the `/actuator/prometheus` endpoint. Run a local Prometheus instance via Docker to scrape it, and build a Grafana dashboard for memory usage.",
            "achievement": "Can complete the full observability loop from code to visual dashboard."
          },
          {
            "day": 37,
            "topic": "Virtual Threads + Spring Boot",
            "priority": "MUST KNOW",
            "tasks": "Enable Java 21 Virtual Threads in `application.yml`. Load test a blocking REST endpoint and compare the throughput against platform threads.",
            "achievement": "Can drastically increase the throughput of heavily blocking I/O applications using a single property."
          },
          {
            "day": 38,
            "topic": "Spring Web MVC Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Create a `@RestController`. Return a simple String. Understand the DispatcherServlet under the hood.",
            "achievement": "Can bootstrap an HTTP server and expose endpoints to the internet."
          },
          {
            "day": 39,
            "topic": "RESTful API Design: Path & Query Params",
            "priority": "MUST KNOW",
            "tasks": "Use `@PathVariable` for identifying resources (`/users/1`) and `@RequestParam` for filtering/sorting (`/users?role=admin`).",
            "achievement": "Can design REST APIs that follow industry-standard URL structures."
          },
          {
            "day": 40,
            "topic": "RESTful API Design: HTTP Methods",
            "priority": "MUST KNOW",
            "tasks": "Implement POST (Create), GET (Read), PUT (Update full), PATCH (Update partial), and DELETE. Understand idempotency in methods.",
            "achievement": "Can map CRUD operations perfectly to the correct HTTP verbs."
          },
          {
            "day": 41,
            "topic": "API Versioning (URI & Header)",
            "priority": "MUST KNOW",
            "tasks": "Implement API versioning using URI path (e.g. /v1/users) and HTTP Headers (e.g. Accept-Version: v1). Understand compatibility trade-offs.",
            "achievement": "Can design and implement backward-compatible APIs supporting multiple client versions."
          },
          {
            "day": 42,
            "topic": "Swagger/OpenAPI Integration",
            "priority": "MUST KNOW",
            "tasks": "Configure springdoc-openapi in Spring Boot. Annotate controllers with @Operation and @ApiResponses. Generate OpenAPI JSON and test endpoints via Swagger UI.",
            "achievement": "Can automatically document and test REST endpoints using industry-standard OpenAPI schemas."
          },
          {
            "day": 43,
            "topic": "API Rate Limiting & Throttling",
            "priority": "MUST KNOW",
            "tasks": "Implement API rate limiting using the Bucket4j library or a custom Servlet Filter. Learn to read and write rate-limit headers (X-RateLimit-Limit, X-RateLimit-Remaining).",
            "achievement": "Can protect Spring Boot APIs from resource abuse and denial-of-service attempts."
          },
          {
            "day": 44,
            "topic": "ResponseEntity & Status Codes",
            "priority": "MUST KNOW",
            "tasks": "Stop returning raw objects. Wrap responses in `ResponseEntity` to explicitly control HTTP status codes (200, 201, 404, 400).",
            "achievement": "Can return predictable, standard HTTP responses that frontend clients expect."
          },
          {
            "day": 45,
            "topic": "Global Exception Handling",
            "priority": "MUST KNOW",
            "tasks": "Create a `@RestControllerAdvice` class. Catch specific exceptions (e.g., `UserNotFoundException`) and return a formatted 404 JSON response.",
            "achievement": "Can prevent ugly stack traces from leaking to clients and unify API error formats."
          },
          {
            "day": 46,
            "topic": "RFC 7807 Problem Details",
            "priority": "IMPORTANT",
            "tasks": "Upgrade your exception handler to return `ProblemDetail` objects (Spring Boot 3 feature) for standardized error reporting.",
            "achievement": "Can adhere to strict, modern API design specifications (RFC 7807)."
          },
          {
            "day": 47,
            "topic": "DTO Pattern (Data Transfer Objects)",
            "priority": "MUST KNOW",
            "tasks": "Stop returning JPA entities from controllers! Create separate RequestDTOs and ResponseDTOs to decouple the database from the API contract.",
            "achievement": "Can prevent data leakage (like exposing hashed passwords) and prevent infinite recursion."
          },
          {
            "day": 48,
            "topic": "Bean Validation",
            "priority": "MUST KNOW",
            "tasks": "Add `spring-boot-starter-validation`. Use `@NotNull`, `@Size`, and `@Email` on DTOs. Validate them in the controller using `@Valid`.",
            "achievement": "Can reject bad data instantly before it ever touches business logic."
          },
          {
            "day": 49,
            "topic": "MapStruct for Object Mapping",
            "priority": "MUST KNOW",
            "tasks": "Stop writing manual getter/setter mapping code. Configure MapStruct to auto-generate mapping code between Entities and DTOs.",
            "achievement": "Can write highly performant, type-safe data conversion layers with zero boilerplate."
          },
          {
            "day": 50,
            "topic": "Swagger / OpenAPI Documentation",
            "priority": "MUST KNOW",
            "tasks": "Integrate `springdoc-openapi`. Annotate controllers to generate a beautiful, interactive Swagger UI documentation page.",
            "achievement": "Can automatically generate API documentation that stays perfectly in sync with the code."
          },
          {
            "day": 51,
            "topic": "File Uploads & Downloads",
            "priority": "IMPORTANT",
            "tasks": "Implement an endpoint that accepts `MultipartFile`. Save it to the local disk and write an endpoint to download it via `Resource`.",
            "achievement": "Can handle binary data streams and manage user file uploads securely."
          },
          {
            "day": 52,
            "topic": "Pagination & Sorting (API Layer)",
            "priority": "MUST KNOW",
            "tasks": "Accept `page`, `size`, and `sort` parameters in your API. Return a structured `Page` response containing metadata (total elements, total pages).",
            "achievement": "Can build APIs capable of serving millions of records safely to a UI data table."
          },
          {
            "day": 53,
            "topic": "Content Negotiation",
            "priority": "IMPORTANT",
            "tasks": "Configure your API to return XML instead of JSON if the client sends an `Accept: application/xml` header.",
            "achievement": "Can build highly flexible APIs that support legacy B2B clients."
          },
          {
            "day": 54,
            "topic": "CORS Configuration",
            "priority": "MUST KNOW",
            "tasks": "Implement a `WebMvcConfigurer` to configure Cross-Origin Resource Sharing. Understand why browsers block cross-domain AJAX requests.",
            "achievement": "Can securely allow specific single-page applications (React/Angular) to consume your API."
          },
          {
            "day": 55,
            "topic": "Testing Controllers (WebMvcTest)",
            "priority": "MUST KNOW",
            "tasks": "Write `@WebMvcTest` slices to mock the service layer and test HTTP endpoints using `MockMvc` without starting the full server.",
            "achievement": "Can mathematically prove your API routing, validation, and serialization works perfectly."
          },
          {
            "day": 56,
            "topic": "RestTemplate / WebClient",
            "priority": "MUST KNOW",
            "tasks": "Write a service that calls an external API (like GitHub API) using `RestTemplate` or the reactive `WebClient`.",
            "achievement": "Can integrate your microservice with external third-party systems."
          },
          {
            "day": 57,
            "topic": "HTTP Declarative Clients",
            "priority": "IMPORTANT",
            "tasks": "Refactor yesterday's code using Spring Boot 3 `@HttpExchange` interfaces to call the external API without writing implementation code.",
            "achievement": "Can write modern, boilerplate-free HTTP clients similar to Feign or Retrofit."
          },
          {
            "day": 58,
            "topic": "Integration Testing (SpringBootTest)",
            "priority": "MUST KNOW",
            "tasks": "Write an `@SpringBootTest` that boots the entire context. Call the controller, hit a real (in-memory) database, and verify the response.",
            "achievement": "Can perform end-to-end testing of the entire application stack."
          },
          {
            "day": 59,
            "topic": "Testcontainers",
            "priority": "MUST KNOW",
            "tasks": "Throw away H2 in-memory databases! Use Testcontainers to spin up a real PostgreSQL Docker container during the test phase.",
            "achievement": "Can guarantee that tests perfectly simulate the production database environment."
          },
          {
            "day": 60,
            "topic": "WireMock",
            "priority": "MUST KNOW",
            "tasks": "Use WireMock in your integration tests to stub the responses of external third-party APIs.",
            "achievement": "Can test code that relies on external services without making actual network calls."
          },
          {
            "day": 61,
            "topic": "Dockerizing Spring Boot",
            "priority": "MUST KNOW",
            "tasks": "Write a multi-stage Dockerfile. Package your Spring Boot JAR and run it in an Alpine JRE container. Optimize layers for caching.",
            "achievement": "Can package the entire application into a portable, production-ready artifact."
          },
          {
            "day": 62,
            "topic": "Docker Compose for Local Dev",
            "priority": "MUST KNOW",
            "tasks": "Write a `docker-compose.yml` that boots your Spring Boot app alongside a PostgreSQL database and a Redis cache.",
            "achievement": "Can onboard new developers instantly with a single terminal command."
          },
          {
            "day": 63,
            "topic": "Caching with Spring Cache",
            "priority": "MUST KNOW",
            "tasks": "Enable `@EnableCaching`. Annotate expensive methods with `@Cacheable`. Configure a Redis cache provider.",
            "achievement": "Can drastically reduce database load by caching heavy computational or query results."
          },
          {
            "day": 64,
            "topic": "Scheduling Tasks",
            "priority": "IMPORTANT",
            "tasks": "Use `@Scheduled` to write a cron job that cleans up expired database records every night at midnight.",
            "achievement": "Can automate recurring background maintenance tasks directly within Spring."
          },
          {
            "day": 65,
            "topic": "Phase 2 Capstone",
            "priority": "MUST KNOW",
            "tasks": "Build a fully documented, tested, and dockerized REST API for a \"Task Management System\" using DTOs, global exceptions, and validation.",
            "achievement": "Can build a production-grade backend service completely from scratch."
          }
        ]
      },
      {
        "id": "2-3",
        "title": "DATA PERSISTENCE & SECURITY",
        "days": "Days 66–102",
        "items": [
          {
            "day": 66,
            "topic": "Raw JDBC & Connection Pools",
            "priority": "MUST KNOW",
            "tasks": "Connect to Postgres using pure JDBC. Understand `PreparedStatement`. Learn why HikariCP connection pooling is essential.",
            "achievement": "Can explain how Java communicates with databases at the lowest driver level."
          },
          {
            "day": 67,
            "topic": "Object-Relational Mapping (ORM)",
            "priority": "MUST KNOW",
            "tasks": "Study the impedance mismatch between objects and relational tables. Understand what Hibernate actually does under the hood.",
            "achievement": "Can explain why ORMs are used and when they should be avoided (e.g., massive batch inserts)."
          },
          {
            "day": 68,
            "topic": "JPA Entities & Primary Keys",
            "priority": "MUST KNOW",
            "tasks": "Create `@Entity` classes. Map columns. Use `@Id` and `@GeneratedValue(strategy = GenerationType.IDENTITY)` or `UUID`.",
            "achievement": "Can map Java classes directly to database tables securely."
          },
          {
            "day": 69,
            "topic": "Spring Data JPA Basics",
            "priority": "MUST KNOW",
            "tasks": "Create an interface extending `JpaRepository`. Use derived query methods (e.g., `findByLastNameAndAgeGreaterThan`).",
            "achievement": "Can perform basic CRUD operations without writing a single line of SQL."
          },
          {
            "day": 70,
            "topic": "JPA Relationships: One-to-Many",
            "priority": "MUST KNOW",
            "tasks": "Map an Author to many Books. Understand `@OneToMany`, `@ManyToOne`, and the importance of the `mappedBy` attribute.",
            "achievement": "Can implement bidirectional relationships without causing infinite loops."
          },
          {
            "day": 71,
            "topic": "JPA Relationships: Many-to-Many",
            "priority": "MUST KNOW",
            "tasks": "Map Students to Courses. Understand how Hibernate automatically creates the hidden join table using `@JoinTable`.",
            "achievement": "Can design complex, interconnected domain models in Java."
          },
          {
            "day": 72,
            "topic": "Cascade Types & Orphan Removal",
            "priority": "MUST KNOW",
            "tasks": "Study `CascadeType.ALL` vs `PERSIST`. Understand when deleting an Author should automatically delete their Books.",
            "achievement": "Can safely manage the lifecycle of child entities without leaving orphaned database rows."
          },
          {
            "day": 73,
            "topic": "Transactions (@Transactional)",
            "priority": "MUST KNOW",
            "tasks": "Annotate a service method with `@Transactional`. Intentionally throw a RuntimeException and observe the database rollback.",
            "achievement": "Can guarantee ACID properties across complex, multi-step business logic operations."
          },
          {
            "day": 74,
            "topic": "Fetch Strategies (Lazy vs Eager)",
            "priority": "MUST KNOW",
            "tasks": "Study `FetchType.LAZY`. Understand why Eager fetching is considered an anti-pattern and leads to performance nightmares.",
            "achievement": "Can design entities that do not accidentally load the entire database into memory."
          },
          {
            "day": 75,
            "topic": "The N+1 Query Problem",
            "priority": "MUST KNOW",
            "tasks": "Observe the N+1 problem in the logs when fetching a list of Authors and their Books. Fix it using `@EntityGraph` or `JOIN FETCH`.",
            "achievement": "Can diagnose and fix the most common performance killer in Spring Boot applications."
          },
          {
            "day": 76,
            "topic": "JPQL & Native Queries",
            "priority": "MUST KNOW",
            "tasks": "Write custom `@Query` annotations using JPQL for complex joins. Fall back to `nativeQuery = true` for database-specific features.",
            "achievement": "Can bypass ORM limitations to execute highly optimized custom SQL queries."
          },
          {
            "day": 77,
            "topic": "Pagination in Spring Data",
            "priority": "MUST KNOW",
            "tasks": "Pass a `PageRequest.of(0, 10)` to a repository method. Understand how Hibernate generates the specific SQL `LIMIT`/`OFFSET` clauses.",
            "achievement": "Can fetch data in small, memory-safe chunks directly from the database."
          },
          {
            "day": 78,
            "topic": "Projections",
            "priority": "IMPORTANT",
            "tasks": "Create an interface projection to fetch ONLY the `firstName` and `email` columns instead of the entire User entity.",
            "achievement": "Can optimize read performance by preventing `SELECT *` on massive tables."
          },
          {
            "day": 79,
            "topic": "Database Migrations (Flyway)",
            "priority": "MUST KNOW",
            "tasks": "Integrate Flyway. Write `V1__init.sql` and `V2__add_column.sql`. Understand why `spring.jpa.hibernate.ddl-auto=update` is illegal in production.",
            "achievement": "Can safely version-control and deploy database schema changes across environments."
          },
          {
            "day": 80,
            "topic": "Optimistic Locking",
            "priority": "MUST KNOW",
            "tasks": "Add an `@Version` column. Simulate two users updating the same record simultaneously and handle the `OptimisticLockException`.",
            "achievement": "Can prevent lost updates in highly concurrent business applications (like inventory management)."
          },
          {
            "day": 81,
            "topic": "Data Auditing",
            "priority": "IMPORTANT",
            "tasks": "Enable `@EnableJpaAuditing`. Use `@CreatedDate` and `@LastModifiedDate` to automatically track when rows are inserted or updated.",
            "achievement": "Can implement automatic auditing required for enterprise compliance."
          },
          {
            "day": 82,
            "topic": "Soft Deletes",
            "priority": "IMPORTANT",
            "tasks": "Implement Soft Deletes using `@SQLDelete` and `@Where`. When a user deletes an item, update a `deleted` flag instead of removing the row.",
            "achievement": "Can prevent catastrophic data loss while maintaining a clean application view."
          },
          {
            "day": 83,
            "topic": "Testing the Data Layer (@DataJpaTest)",
            "priority": "MUST KNOW",
            "tasks": "Write tests focused purely on repository queries using `@DataJpaTest`. Validate custom JPQL logic without booting web servers.",
            "achievement": "Can mathematically prove that custom database queries return the exact expected data."
          },
          {
            "day": 84,
            "topic": "Spring Security Architecture",
            "priority": "MUST KNOW",
            "tasks": "Study the `SecurityFilterChain`, `AuthenticationManager`, and `Filter` order. Do not write code yet, just understand the request flow.",
            "achievement": "Can explain how Spring intercepts HTTP requests to enforce security rules."
          },
          {
            "day": 85,
            "topic": "Basic Authentication & Users",
            "priority": "MUST KNOW",
            "tasks": "Implement `UserDetailsService`. Load users from the database. Encode passwords using `BCryptPasswordEncoder`.",
            "achievement": "Can securely store passwords and authenticate users against a relational database."
          },
          {
            "day": 86,
            "topic": "Role-Based Access Control (RBAC)",
            "priority": "MUST KNOW",
            "tasks": "Configure URL-based security (`.requestMatchers(\"/admin/**\").hasRole(\"ADMIN\")`). Add method-level security using `@PreAuthorize`.",
            "achievement": "Can build complex authorization hierarchies to restrict feature access."
          },
          {
            "day": 87,
            "topic": "Attribute-Based Access Control (ABAC)",
            "priority": "MUST KNOW",
            "tasks": "Implement ABAC using Spring Security and custom evaluation context. Define access control rules based on user attributes, resource type, and environmental variables.",
            "achievement": "Can secure microservices using fine-grained, attribute-based access control rules."
          },
          {
            "day": 88,
            "topic": "Stateless Security & JWT",
            "priority": "MUST KNOW",
            "tasks": "Disable session management (Cookies/JSESSIONID). Generate a JWT containing user roles upon successful login.",
            "achievement": "Can architect stateless security required for horizontally scaling microservices."
          },
          {
            "day": 89,
            "topic": "JWT Filter Implementation",
            "priority": "MUST KNOW",
            "tasks": "Write a custom `OncePerRequestFilter` that intercepts all incoming requests, extracts the JWT from the Authorization header, and validates the signature.",
            "achievement": "Can secure an entire API ecosystem using cryptographically signed tokens."
          },
          {
            "day": 90,
            "topic": "Refresh Tokens",
            "priority": "MUST KNOW",
            "tasks": "Implement a short-lived Access Token (15 mins) and a long-lived Refresh Token stored securely in an HTTP-only cookie.",
            "achievement": "Can balance high security with excellent user experience (avoiding constant logins)."
          },
          {
            "day": 91,
            "topic": "CORS & CSRF Defenses",
            "priority": "MUST KNOW",
            "tasks": "Understand Cross-Site Request Forgery. Why is CSRF mostly disabled in stateless API architectures? Properly configure CORS in the security chain.",
            "achievement": "Can secure APIs against browser-based exploitation techniques."
          },
          {
            "day": 92,
            "topic": "OWASP Top 10 for Java/Spring",
            "priority": "MUST KNOW",
            "tasks": "Study the OWASP Top 10 vulnerabilities in the context of Java and Spring Boot. Learn to secure endpoints against Injection, Broken Authentication, Sensitive Data Exposure, and XML External Entities (XXE).",
            "achievement": "Can audit and harden Spring Boot microservices against the most common security exploits."
          },
          {
            "day": 93,
            "topic": "OAuth2 Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Study the OAuth2 standard. Understand Authorization Servers, Resource Servers, and the Authorization Code flow.",
            "achievement": "Can explain how a user can grant an application access to their data without sharing passwords."
          },
          {
            "day": 94,
            "topic": "Spring Security OAuth2 Client",
            "priority": "MUST KNOW",
            "tasks": "Implement \"Login with Google/GitHub\" using `spring-boot-starter-oauth2-client`. Extract user details from the provider.",
            "achievement": "Can seamlessly integrate third-party social logins into your application."
          },
          {
            "day": 95,
            "topic": "OAuth2 Resource Server",
            "priority": "MUST KNOW",
            "tasks": "Configure your API to act as a Resource Server that accepts and validates opaque tokens or JWTs issued by an external provider (like Keycloak).",
            "achievement": "Can decouple authentication infrastructure from core business APIs."
          },
          {
            "day": 96,
            "topic": "Keycloak Integration",
            "priority": "IMPORTANT",
            "tasks": "Spin up Keycloak in Docker. Configure a Realm and a Client. Protect your Spring Boot application by delegating authentication to Keycloak.",
            "achievement": "Can leverage enterprise Identity and Access Management (IAM) systems."
          },
          {
            "day": 97,
            "topic": "Method Security Extravaganza",
            "priority": "IMPORTANT",
            "tasks": "Use `@PostFilter` to filter a returned list so the user only sees data belonging to their tenant id.",
            "achievement": "Can implement highly granular, row-level data security constraints."
          },
          {
            "day": 98,
            "topic": "Phase 3 Capstone - Part 1",
            "priority": "MUST KNOW",
            "tasks": "Design the database schema for a \"Blogging Platform\". Write Flyway scripts, Entities, and complex JPQL queries for search.",
            "achievement": "Can build a robust, optimized persistence layer from scratch."
          },
          {
            "day": 99,
            "topic": "Phase 3 Capstone - Part 2",
            "priority": "MUST KNOW",
            "tasks": "Wrap the persistence layer in a REST API and secure it with custom JWT authentication and Role-based method security.",
            "achievement": "Can integrate database design, web routing, and strict security into a unified backend."
          },
          {
            "day": 100,
            "topic": "Interview Prep: Persistence",
            "priority": "MUST KNOW",
            "tasks": "Review N+1 problems, transaction propagation (`REQUIRES_NEW`), and Isolation Levels.",
            "achievement": "Ready to answer advanced database-related Java interview questions."
          },
          {
            "day": 101,
            "topic": "Interview Prep: Security",
            "priority": "MUST KNOW",
            "tasks": "Review JWT vulnerabilities, the OAuth2 flow, and the internal workings of the SecurityFilterChain.",
            "achievement": "Ready to confidently discuss modern API security architectures."
          },
          {
            "day": 102,
            "topic": "Architecture Review",
            "priority": "MUST KNOW",
            "tasks": "Draw a diagram of your Capstone project indicating where Validation, Security Filters, Transactions, and Caching occur.",
            "achievement": "Can visualize and explain the layered architecture of an enterprise Spring Boot application."
          }
        ]
      },
      {
        "id": "2-4",
        "title": "MICROSERVICES, KAFKA & RESILIENCY",
        "days": "Days 103–140",
        "items": [
          {
            "day": 103,
            "topic": "gRPC Services in Spring Boot",
            "priority": "MUST KNOW",
            "tasks": "Configure grpc-spring-boot-starter. Define service schemas in .proto files, compile them to Java code, and implement a gRPC server and client stub.",
            "achievement": "Can build high-performance, strongly typed RPC communication protocols between internal microservices."
          },
          {
            "day": 104,
            "topic": "Distributed Tracing with OpenTelemetry",
            "priority": "MUST KNOW",
            "tasks": "Configure OpenTelemetry Java Agent or Micrometer Tracing. Propagate Span and Trace IDs from client request to gRPC call, exporting trace telemetry to Jaeger.",
            "achievement": "Can debug performance leaks and visualize request journeys across a microservice fleet."
          },
          {
            "day": 105,
            "topic": "Reactive Programming with Spring WebFlux",
            "priority": "IMPORTANT",
            "tasks": "Build reactive endpoints using Spring WebFlux, Mono, and Flux. Connect to a database using R2DBC. Differentiate non-blocking I/O (Netty) from thread-per-request (Tomcat).",
            "achievement": "Can architect ultra-high-concurrency, non-blocking APIs that handle massive event streams."
          },
          {
            "day": 106,
            "topic": "Centralized Secret Management (Spring Cloud Vault)",
            "priority": "MUST KNOW",
            "tasks": "Integrate Spring Cloud Vault with a local HashiCorp Vault instance. Store database credentials dynamically and configure automatic runtime credential rotation.",
            "achievement": "Can protect backend applications from hardcoded credentials by injecting configuration secrets dynamically at startup."
          },
          {
            "day": 107,
            "topic": "Microservices vs Monoliths",
            "priority": "MUST KNOW",
            "tasks": "Study the Fallacies of Distributed Computing. Define bounded contexts using Domain-Driven Design (DDD).",
            "achievement": "Can justify exactly when a project should (and should not) use microservices."
          },
          {
            "day": 108,
            "topic": "Service Discovery (Eureka)",
            "priority": "MUST KNOW",
            "tasks": "Create a Eureka Server. Register an Order Service and an Inventory Service so they can find each other without hardcoding IPs.",
            "achievement": "Can build dynamically scaling microservice clusters."
          },
          {
            "day": 109,
            "topic": "API Gateway (Spring Cloud Gateway)",
            "priority": "MUST KNOW",
            "tasks": "Create a Gateway service. Route requests to Order (`/api/orders/**`) and Inventory based on URL paths. Implement a Global Pre-Filter.",
            "achievement": "Can build a unified entry point that routes traffic across a massive microservice ecosystem."
          },
          {
            "day": 110,
            "topic": "Centralized Security at Gateway",
            "priority": "MUST KNOW",
            "tasks": "Move JWT validation to the API Gateway. Let the downstream microservices trust the Gateway via internal headers.",
            "achievement": "Can drastically simplify security across dozens of microservices."
          },
          {
            "day": 111,
            "topic": "Synchronous Communication (Feign)",
            "priority": "MUST KNOW",
            "tasks": "Use Spring Cloud OpenFeign. Create an interface in the Order Service that declaratively calls the Inventory Service via Eureka.",
            "achievement": "Can implement service-to-service HTTP communication cleanly and elegantly."
          },
          {
            "day": 112,
            "topic": "Distributed Tracing (Micrometer)",
            "priority": "MUST KNOW",
            "tasks": "Add Micrometer Tracing. Send traces to a Zipkin or Jaeger Docker container. View a request flowing through the Gateway -> Order -> Inventory.",
            "achievement": "Can debug latency issues hidden deep within a distributed microservice call chain."
          },
          {
            "day": 113,
            "topic": "Resilience4j: Circuit Breaker",
            "priority": "MUST KNOW",
            "tasks": "Wrap the Feign client with a Circuit Breaker. Provide a fallback method if the Inventory Service is down (e.g., return \"Try again later\").",
            "achievement": "Can prevent a single failing microservice from taking down the entire application."
          },
          {
            "day": 114,
            "topic": "Resilience4j: Retries & Rate Limiting",
            "priority": "MUST KNOW",
            "tasks": "Add exponential backoff retries for transient network failures. Add a Rate Limiter at the API Gateway to prevent DDoS attacks.",
            "achievement": "Can build highly robust APIs that gracefully survive traffic spikes and network blips."
          },
          {
            "day": 115,
            "topic": "Centralized Configuration",
            "priority": "IMPORTANT",
            "tasks": "Set up Spring Cloud Config Server backed by a Git repository. Update an application property dynamically without restarting the service.",
            "achievement": "Can manage configuration for 50+ microservices from a single secure location."
          },
          {
            "day": 116,
            "topic": "Introduction to Apache Kafka",
            "priority": "MUST KNOW",
            "tasks": "Spin up Kafka and Zookeeper/Kraft in Docker. Understand Topics, Partitions, Producers, and Consumer Groups.",
            "achievement": "Can explain the architecture of an append-only distributed event log."
          },
          {
            "day": 117,
            "topic": "Spring Kafka: Producers",
            "priority": "MUST KNOW",
            "tasks": "Configure a `KafkaTemplate`. Publish a JSON `OrderCreatedEvent` to a Kafka topic when an order is placed.",
            "achievement": "Can emit asynchronous events to decouple business processes."
          },
          {
            "day": 118,
            "topic": "Spring Kafka: Consumers",
            "priority": "MUST KNOW",
            "tasks": "Use `@KafkaListener` in the Inventory Service to listen for `OrderCreatedEvent`. Update inventory asynchronously.",
            "achievement": "Can process distributed events in real-time, completely decoupling microservices."
          },
          {
            "day": 119,
            "topic": "Kafka: Consumer Groups & Scaling",
            "priority": "MUST KNOW",
            "tasks": "Spin up 3 instances of the Inventory Service. Observe how Kafka distributes the partitions across the Consumer Group for parallel processing.",
            "achievement": "Can horizontally scale background event processing infinitely."
          },
          {
            "day": 120,
            "topic": "Kafka: Error Handling & DLQs",
            "priority": "MUST KNOW",
            "tasks": "Simulate a database failure during event processing. Configure a Dead Letter Queue (DLQ) to catch and store the failed message for manual review.",
            "achievement": "Can build resilient event pipelines that never lose data during crashes."
          },
          {
            "day": 121,
            "topic": "The Transactional Outbox Pattern",
            "priority": "MUST KNOW",
            "tasks": "Understand the dual-write problem (DB save + Kafka publish). Implement the Outbox pattern using a separate table and a background publisher.",
            "achievement": "Can guarantee 100% data consistency between microservice databases and Kafka topics."
          },
          {
            "day": 122,
            "topic": "Distributed Transactions: Saga (Choreography)",
            "priority": "MUST KNOW",
            "tasks": "Implement a Saga. Order Service emits event -> Inventory Service consumes, updates DB, emits \"InventoryReserved\" event -> Order Service finalizes.",
            "achievement": "Can maintain data consistency across microservices without using distributed database locks."
          },
          {
            "day": 123,
            "topic": "Distributed Transactions: Saga (Orchestration)",
            "priority": "IMPORTANT",
            "tasks": "Understand the Orchestration approach using a centralized state machine to coordinate the Saga steps and compensations.",
            "achievement": "Can evaluate and select the correct Saga architecture based on workflow complexity."
          },
          {
            "day": 124,
            "topic": "Compensating Transactions",
            "priority": "MUST KNOW",
            "tasks": "Implement the failure path of a Saga. If Payment fails, emit an event that triggers the Inventory service to add the items back.",
            "achievement": "Can cleanly rollback distributed transactions across multiple disparate databases."
          },
          {
            "day": 125,
            "topic": "Event Sourcing Fundamentals",
            "priority": "IMPORTANT",
            "tasks": "Study the theory of storing every state change as an event rather than overwriting rows. Look at frameworks like Axon.",
            "achievement": "Can architect audit-proof financial systems using pure event sourcing."
          },
          {
            "day": 126,
            "topic": "CQRS Implementation",
            "priority": "IMPORTANT",
            "tasks": "Separate the Write API (hitting a relational DB) from the Read API (hitting an Elasticsearch cluster populated via Kafka events).",
            "achievement": "Can scale read-heavy applications infinitely without impacting write performance."
          },
          {
            "day": 127,
            "topic": "GraphQL Integration",
            "priority": "IMPORTANT",
            "tasks": "Add `spring-boot-starter-graphql`. Create a schema file and implement `@QueryMapping` and `@SchemaMapping` to resolve complex object graphs.",
            "achievement": "Can build modern, flexible APIs for frontend clients suffering from over-fetching."
          },
          {
            "day": 128,
            "topic": "WebSocket Communication",
            "priority": "IMPORTANT",
            "tasks": "Implement STOMP over WebSockets in Spring. Build a real-time notification endpoint that pushes alerts to connected clients.",
            "achievement": "Can push data from the server to the browser instantly without polling."
          },
          {
            "day": 129,
            "topic": "Redis for Distributed Locking",
            "priority": "MUST KNOW",
            "tasks": "Use Redisson to acquire a distributed lock before executing a scheduled task, ensuring it only runs on one microservice instance.",
            "achievement": "Can prevent data corruption caused by background jobs running concurrently across a cluster."
          },
          {
            "day": 130,
            "topic": "API Versioning Strategies",
            "priority": "MUST KNOW",
            "tasks": "Implement URL versioning (`/v1/api`), Header versioning, and Content Negotiation versioning.",
            "achievement": "Can evolve APIs safely without breaking existing mobile app clients in production."
          },
          {
            "day": 131,
            "topic": "Phase 4 Capstone - Architecture (Part 1)",
            "priority": "MUST KNOW",
            "tasks": "Design an E-Commerce microservice architecture: Gateway, Auth Service, Order Service, Inventory Service, and Payment Service. Spin up Kafka and DBs in Docker.",
            "achievement": "Can bootstrap a massive, enterprise-grade distributed system infrastructure."
          },
          {
            "day": 132,
            "topic": "Phase 4 Capstone - Security & Routing (Part 2)",
            "priority": "MUST KNOW",
            "tasks": "Implement the Gateway, configure routes, and centralize JWT validation. Ensure downstream services are secure.",
            "achievement": "Can secure an entire ecosystem of microservices perfectly."
          },
          {
            "day": 133,
            "topic": "Phase 4 Capstone - Business Logic (Part 3)",
            "priority": "MUST KNOW",
            "tasks": "Implement the core CRUD and persistence logic for Orders and Inventory using Spring Data JPA and MapStruct.",
            "achievement": "Can rapidly develop robust domain-driven microservices."
          },
          {
            "day": 134,
            "topic": "Phase 4 Capstone - Kafka Sagas (Part 4)",
            "priority": "MUST KNOW",
            "tasks": "Wire the services together using Kafka. Implement a fully functioning Saga with compensating transactions for failed payments.",
            "achievement": "Can build bulletproof, eventually-consistent distributed workflows."
          },
          {
            "day": 135,
            "topic": "Phase 4 Capstone - Resiliency (Part 5)",
            "priority": "MUST KNOW",
            "tasks": "Add Circuit Breakers to external calls, export Micrometer traces to Zipkin, and add global exception handling.",
            "achievement": "Can harden a system against network failures and provide deep observability."
          },
          {
            "day": 136,
            "topic": "Interview Prep: Spring Framework",
            "priority": "MUST KNOW",
            "tasks": "Review IoC, Bean Lifecycles, AOP, and `@Transactional` propagation behaviors.",
            "achievement": "Ready to dominate the foundational Spring boot technical interview."
          },
          {
            "day": 137,
            "topic": "Interview Prep: Microservices",
            "priority": "MUST KNOW",
            "tasks": "Review Circuit Breakers, API Gateways, Service Discovery, and the Outbox Pattern.",
            "achievement": "Ready to ace system design interviews focusing on microservice architecture."
          },
          {
            "day": 138,
            "topic": "Interview Prep: Kafka & Async",
            "priority": "MUST KNOW",
            "tasks": "Review Kafka partitions, consumer groups, offset management, and at-least-once delivery semantics.",
            "achievement": "Ready to discuss high-throughput data pipelines with senior engineers."
          },
          {
            "day": 139,
            "topic": "Resume & GitHub Polish",
            "priority": "MUST KNOW",
            "tasks": "Push your capstone to GitHub. Write an exceptional README detailing the architecture, Saga flow, and how to run it via Docker Compose.",
            "achievement": "Can present a FAANG-tier portfolio project to hiring managers."
          },
          {
            "day": 140,
            "topic": "Graduation Day",
            "priority": "MUST KNOW",
            "tasks": "Reflect on your journey from basic Java syntax to architecting distributed, event-driven microservices.",
            "achievement": "You are now a highly capable, job-ready Senior Backend Engineer."
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "title": "Gen AI & LLM Engineering",
    "days": 141,
    "color": "purple",
    "phases": [
      {
        "id": "3-1",
        "title": "PYTHON, MATH & CLASSICAL ML",
        "days": "Days 1–25",
        "items": [
          {
            "day": 1,
            "topic": "Python for Java Devs",
            "priority": "MUST KNOW",
            "tasks": "Fast-track Python. Focus on dictionaries, list comprehensions, decorators, and basic typing (TypeHints).",
            "achievement": "Can translate basic Java algorithms into Pythonic syntax rapidly."
          },
          {
            "day": 2,
            "topic": "Data Manipulation: NumPy",
            "priority": "MUST KNOW",
            "tasks": "Master NumPy arrays, broadcasting, vectorization, and multi-dimensional indexing.",
            "achievement": "Can manipulate massive matrices in memory without slow `for` loops."
          },
          {
            "day": 3,
            "topic": "Data Manipulation: Pandas 1",
            "priority": "MUST KNOW",
            "tasks": "Learn DataFrames, Series, `iloc`, `loc`, reading CSVs, and handling missing data (`dropna`, `fillna`).",
            "achievement": "Can clean and sanitize raw, messy datasets for machine learning input."
          },
          {
            "day": 4,
            "topic": "Data Manipulation: Pandas 2",
            "priority": "MUST KNOW",
            "tasks": "Master `groupby`, merging, pivoting, and time-series resampling.",
            "achievement": "Can perform complex SQL-like aggregations directly in Python memory."
          },
          {
            "day": 5,
            "topic": "Data Visualization",
            "priority": "IMPORTANT",
            "tasks": "Use Matplotlib and Seaborn. Create scatter plots, histograms, and correlation heatmaps.",
            "achievement": "Can visually identify outliers and feature correlations in a dataset."
          },
          {
            "day": 6,
            "topic": "Linear Algebra: Vectors & Matrices",
            "priority": "MUST KNOW",
            "tasks": "Study vector spaces, dot products, matrix multiplication, and identity matrices.",
            "achievement": "Can mathematically explain how data points are represented and transformed in AI models."
          },
          {
            "day": 7,
            "topic": "Linear Algebra: Eigenvalues & SVD",
            "priority": "MUST KNOW",
            "tasks": "Deep dive into Eigenvectors, Eigenvalues, and Singular Value Decomposition (SVD).",
            "achievement": "Can conceptually grasp how dimensionality reduction techniques (like PCA) work under the hood."
          },
          {
            "day": 8,
            "topic": "Linear Algebra: Cosine Similarity",
            "priority": "MUST KNOW",
            "tasks": "Implement Cosine Similarity in pure NumPy. Understand the geometric difference between Euclidean distance and Cosine distance.",
            "achievement": "Can mathematically compute the semantic similarity between two vectors (the foundation of vector search)."
          },
          {
            "day": 9,
            "topic": "Calculus for Deep Learning",
            "priority": "MUST KNOW",
            "tasks": "Study derivatives, partial derivatives, and the Chain Rule.",
            "achievement": "Can explain the exact mathematical mechanism (Backpropagation) that allows neural networks to \"learn\"."
          },
          {
            "day": 10,
            "topic": "Probability & Statistics",
            "priority": "MUST KNOW",
            "tasks": "Study Normal Distributions, Variance, Standard Deviation, and Bayes' Theorem.",
            "achievement": "Can evaluate if a dataset is statistically significant enough to train a model."
          },
          {
            "day": 11,
            "topic": "Intro to Scikit-Learn",
            "priority": "MUST KNOW",
            "tasks": "Understand the `fit`, `predict`, and `transform` API design of sklearn.",
            "achievement": "Can utilize the industry-standard classical machine learning library."
          },
          {
            "day": 12,
            "topic": "Linear & Logistic Regression",
            "priority": "MUST KNOW",
            "tasks": "Train a Linear model for continuous prediction (house prices) and a Logistic model for binary classification (spam detection).",
            "achievement": "Can solve standard predictive problems using lightweight mathematical models."
          },
          {
            "day": 13,
            "topic": "Decision Trees",
            "priority": "MUST KNOW",
            "tasks": "Study Gini impurity and Information Gain. Visualize a trained decision tree.",
            "achievement": "Can train a highly interpretable model where every decision is easily explained to business stakeholders."
          },
          {
            "day": 14,
            "topic": "Random Forests",
            "priority": "MUST KNOW",
            "tasks": "Understand Ensemble learning and Bagging. Train a Random Forest to prevent the overfitting issues of single Decision Trees.",
            "achievement": "Can build highly robust predictive models that generalize well to unseen data."
          },
          {
            "day": 15,
            "topic": "Gradient Boosting (XGBoost)",
            "priority": "MUST KNOW",
            "tasks": "Study Boosting vs Bagging. Install XGBoost/LightGBM and train a model. Understand why it dominates Kaggle competitions.",
            "achievement": "Can deploy the most powerful classical ML algorithm for tabular data."
          },
          {
            "day": 16,
            "topic": "Unsupervised Learning (K-Means)",
            "priority": "IMPORTANT",
            "tasks": "Train a K-Means clustering model. Use the Elbow Method to find the optimal number of clusters.",
            "achievement": "Can automatically discover hidden groupings (like customer segments) in unlabelled data."
          },
          {
            "day": 17,
            "topic": "Dimensionality Reduction (PCA)",
            "priority": "IMPORTANT",
            "tasks": "Use Principal Component Analysis to compress a 50-feature dataset into 3 features while retaining 95% of the variance.",
            "achievement": "Can drastically speed up model training by mathematically removing redundant data."
          },
          {
            "day": 18,
            "topic": "Model Evaluation: Classification",
            "priority": "MUST KNOW",
            "tasks": "Calculate Accuracy, Precision, Recall, and the F1 Score. Plot an ROC-AUC curve.",
            "achievement": "Can prove mathematically why \"99% accuracy\" is a terrible metric for cancer detection models."
          },
          {
            "day": 19,
            "topic": "Model Evaluation: Regression",
            "priority": "MUST KNOW",
            "tasks": "Calculate Mean Absolute Error (MAE), Mean Squared Error (MSE), and R-Squared.",
            "achievement": "Can quantify exactly how far off a model's continuous predictions are on average."
          },
          {
            "day": 20,
            "topic": "Hyperparameter Tuning",
            "priority": "MUST KNOW",
            "tasks": "Use GridSearchCV and RandomizedSearchCV to automatically find the best `max_depth` and `learning_rate` for your XGBoost model.",
            "achievement": "Can automate the trial-and-error process of maximizing model performance."
          },
          {
            "day": 21,
            "topic": "Cross-Validation",
            "priority": "MUST KNOW",
            "tasks": "Implement K-Fold Cross-Validation. Understand why a simple train/test split is dangerous for small datasets.",
            "achievement": "Can guarantee that a model's evaluation metrics are not the result of a \"lucky\" random split."
          },
          {
            "day": 22,
            "topic": "Neural Networks Basics",
            "priority": "MUST KNOW",
            "tasks": "Study Perceptrons, Weights, Biases, and Activation Functions (Sigmoid, ReLU).",
            "achievement": "Can manually trace the mathematical forward pass of a simple artificial neuron."
          },
          {
            "day": 23,
            "topic": "Loss Functions & Optimizers",
            "priority": "MUST KNOW",
            "tasks": "Study Gradient Descent. Understand how the Learning Rate controls the step size towards the global minimum loss.",
            "achievement": "Can diagnose why a model is failing to converge or is overshooting the optimal weights."
          },
          {
            "day": 24,
            "topic": "Backpropagation Theory",
            "priority": "MUST KNOW",
            "tasks": "Synthesize the Chain Rule and Gradient Descent. Understand how the error at the output layer updates the weights in the first layer.",
            "achievement": "Can explain the \"magic\" of deep learning as a series of calculus chain-rule operations."
          },
          {
            "day": 25,
            "topic": "Phase 1 Capstone",
            "priority": "MUST KNOW",
            "tasks": "Take a raw dataset from Kaggle, clean it with Pandas, train an XGBoost model, tune its hyperparameters, and evaluate it rigorously.",
            "achievement": "Can execute an end-to-end Classical Machine Learning project from scratch."
          }
        ]
      },
      {
        "id": "3-2",
        "title": "DEEP LEARNING, NLP & TRANSFORMERS",
        "days": "Days 26–57",
        "items": [
          {
            "day": 26,
            "topic": "PyTorch Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Install PyTorch. Create and manipulate Tensors. Move Tensors from CPU to GPU (`.cuda()` or `.to(\"cuda\")`).",
            "achievement": "Can utilize hardware-accelerated multidimensional arrays."
          },
          {
            "day": 27,
            "topic": "PyTorch Autograd",
            "priority": "MUST KNOW",
            "tasks": "Enable `requires_grad=True`. Perform mathematical operations and call `.backward()`. Inspect the generated gradients.",
            "achievement": "Can utilize automatic differentiation to calculate complex derivatives instantly."
          },
          {
            "day": 28,
            "topic": "PyTorch DataLoaders",
            "priority": "MUST KNOW",
            "tasks": "Create a custom `Dataset` class overriding `__len__` and `__getitem__`. Wrap it in a `DataLoader` for batching and shuffling.",
            "achievement": "Can feed massive datasets into a deep learning model without running out of RAM."
          },
          {
            "day": 29,
            "topic": "The PyTorch Training Loop",
            "priority": "MUST KNOW",
            "tasks": "Build a Multi-Layer Perceptron (MLP) using `nn.Module`. Write the standard 5-step training loop (forward, loss, zero_grad, backward, step).",
            "achievement": "Can train a custom Deep Learning model from scratch in pure PyTorch."
          },
          {
            "day": 30,
            "topic": "NLP Fundamentals: Tokenization",
            "priority": "MUST KNOW",
            "tasks": "Study Word, Subword (BPE), and Character tokenization. Use the `tiktoken` library to see how GPT-4 tokenizes text.",
            "achievement": "Can explain why LLMs struggle with math and spelling due to subword tokenization artifacts."
          },
          {
            "day": 31,
            "topic": "NLP: Bag of Words & TF-IDF",
            "priority": "IMPORTANT",
            "tasks": "Implement TF-IDF to convert text into sparse vectors. Understand its limitations (ignores word order and semantics).",
            "achievement": "Can build a basic keyword-matching search engine."
          },
          {
            "day": 32,
            "topic": "NLP: Word Embeddings (Word2Vec)",
            "priority": "MUST KNOW",
            "tasks": "Study dense vector embeddings. Understand how `King - Man + Woman = Queen` works geometrically in the embedding space.",
            "achievement": "Can map human language into mathematical space where semantic relationships are preserved."
          },
          {
            "day": 33,
            "topic": "Recurrent Neural Networks (RNNs)",
            "priority": "IMPORTANT",
            "tasks": "Study the theory of RNNs and how they handle sequential data. Understand the Vanishing Gradient problem.",
            "achievement": "Can explain why early AI models forgot the beginning of a sentence by the time they reached the end."
          },
          {
            "day": 34,
            "topic": "LSTMs & GRUs",
            "priority": "IMPORTANT",
            "tasks": "Study Long Short-Term Memory networks. Understand the Forget, Input, and Output gates.",
            "achievement": "Can explain the architecture that dominated NLP right before Transformers were invented."
          },
          {
            "day": 35,
            "topic": "The Attention Mechanism",
            "priority": "MUST KNOW",
            "tasks": "Read the \"Attention Is All You Need\" paper. Understand Queries (Q), Keys (K), and Values (V), and scaled dot-product attention.",
            "achievement": "Can mathematically explain how a model learns to focus on specific words in a sentence."
          },
          {
            "day": 36,
            "topic": "Transformer Architecture Deep Dive",
            "priority": "MUST KNOW",
            "tasks": "Study Multi-Head Attention, Feed Forward Networks, Layer Normalization, and Positional Encoding.",
            "achievement": "Can draw the complete Transformer block architecture from memory."
          },
          {
            "day": 37,
            "topic": "KV Cache & Decoding Optimization",
            "priority": "MUST KNOW",
            "tasks": "Study KV-cache internals. Differentiate prefill vs. decode stages in LLM inference. Implement speculative decoding and rotary positional embeddings (RoPE) optimizations.",
            "achievement": "Can optimize LLM decoding speed and manage GPU memory footprints during sequence generation."
          },
          {
            "day": 38,
            "topic": "Encoder vs Decoder Models",
            "priority": "MUST KNOW",
            "tasks": "Understand the difference between BERT (Encoder-only, masked language modeling) and GPT (Decoder-only, autoregressive generation).",
            "achievement": "Can choose the correct transformer family for classification vs text generation tasks."
          },
          {
            "day": 39,
            "topic": "Hugging Face Ecosystem",
            "priority": "MUST KNOW",
            "tasks": "Explore the `transformers` library. Use the high-level `pipeline` API for sentiment analysis and text generation.",
            "achievement": "Can leverage pre-trained, state-of-the-art models with exactly 3 lines of code."
          },
          {
            "day": 40,
            "topic": "Hugging Face Tokenizers",
            "priority": "MUST KNOW",
            "tasks": "Load a specific model's tokenizer (e.g., `AutoTokenizer.from_pretrained`). Handle padding, truncation, and attention masks.",
            "achievement": "Can prepare raw text batches perfectly formatted for transformer input."
          },
          {
            "day": 41,
            "topic": "Fine-Tuning with HF Trainer API",
            "priority": "MUST KNOW",
            "tasks": "Take a pre-trained BERT model. Use the `Trainer` API to fine-tune it on a custom IMDB dataset for sentiment classification.",
            "achievement": "Can adapt open-source foundational models to highly specific business tasks."
          },
          {
            "day": 42,
            "topic": "Intro to Large Language Models (LLMs)",
            "priority": "MUST KNOW",
            "tasks": "Study the evolution from GPT-2 to Llama 3. Understand parameter counts (7B vs 70B) and the concept of Emergent Abilities.",
            "achievement": "Can navigate the open-source LLM landscape and select appropriate models for different hardware."
          },
          {
            "day": 43,
            "topic": "Prompt Engineering Techniques",
            "priority": "MUST KNOW",
            "tasks": "Master Few-Shot Prompting, Chain-of-Thought (CoT), and ReAct prompting.",
            "achievement": "Can dramatically increase the reasoning capability of an LLM through clever text inputs."
          },
          {
            "day": 44,
            "topic": "OpenAI API & System Prompts",
            "priority": "MUST KNOW",
            "tasks": "Write a Python script to call the OpenAI API. Understand the difference between System, User, and Assistant message roles.",
            "achievement": "Can integrate commercial frontier models into a Python application."
          },
          {
            "day": 45,
            "topic": "Structured Outputs (Instructor/Pydantic)",
            "priority": "MUST KNOW",
            "tasks": "Use the `instructor` library with Pydantic to force an LLM (like GPT-4) to return strictly typed, validated JSON instead of raw text.",
            "achievement": "Can reliably extract structured data (like objects and lists) from unstructured text using AI."
          },
          {
            "day": 46,
            "topic": "Instruction Tuning vs RLHF",
            "priority": "MUST KNOW",
            "tasks": "Study how base foundation models are transformed into chat models. Understand Reinforcement Learning from Human Feedback (RLHF) and DPO.",
            "achievement": "Can explain why a base Llama model continues your text while a chat Llama answers your questions."
          },
          {
            "day": 47,
            "topic": "Parameter-Efficient Fine-Tuning (PEFT)",
            "priority": "MUST KNOW",
            "tasks": "Study why full fine-tuning of a 7B model is impossible on consumer GPUs. Learn the theory of PEFT.",
            "achievement": "Can explain how to fine-tune massive models without updating all 7 billion parameters."
          },
          {
            "day": 48,
            "topic": "LoRA (Low-Rank Adaptation)",
            "priority": "MUST KNOW",
            "tasks": "Deep dive into LoRA. Understand how freezing the original weights and injecting tiny, trainable rank-decomposition matrices saves RAM.",
            "achievement": "Can explain the math behind the most popular LLM fine-tuning technique in the world."
          },
          {
            "day": 49,
            "topic": "LLM Distillation & Compression",
            "priority": "IMPORTANT",
            "tasks": "Study knowledge distillation (Student-Teacher network training). Compare it with structural pruning and weights quantization for model size reduction.",
            "achievement": "Can train compact, highly efficient student models that preserve parent LLM intelligence."
          },
          {
            "day": 50,
            "topic": "Quantization Theory",
            "priority": "MUST KNOW",
            "tasks": "Study FP32, FP16, INT8, and INT4 (NF4). Understand how reducing the precision of weights shrinks model size drastically with minimal accuracy loss.",
            "achievement": "Can fit a 14GB model into 4GB of VRAM using mathematical approximation."
          },
          {
            "day": 51,
            "topic": "QLoRA Implementation (Hands-on)",
            "priority": "MUST KNOW",
            "tasks": "Use `bitsandbytes` and `peft` to fine-tune a 4-bit quantized Llama 3 model on a custom dataset using a single Colab T4 GPU.",
            "achievement": "Can train a state-of-the-art open-source LLM on cheap consumer hardware."
          },
          {
            "day": 52,
            "topic": "Post-Fine-Tune Evaluation",
            "priority": "MUST KNOW",
            "tasks": "Write a script that uses GPT-4 as an \"LLM-as-a-judge\" to compare the answers of your base Llama model vs your newly fine-tuned QLoRA model.",
            "achievement": "Can mathematically prove that your fine-tuning process actually improved the model."
          },
          {
            "day": 53,
            "topic": "Context Windows & RoPE",
            "priority": "MUST KNOW",
            "tasks": "Study how LLMs handle long context. Understand Rotary Positional Embeddings (RoPE) and KV-Cache memory consumption.",
            "achievement": "Can explain why passing a 100-page PDF to an LLM causes massive RAM spikes."
          },
          {
            "day": 54,
            "topic": "Vision Transformers (ViT)",
            "priority": "IMPORTANT",
            "tasks": "Study how images are split into patches and fed into a standard Transformer architecture (treating patches like word tokens).",
            "achievement": "Can explain how modern AI understands and classifies images without using Convolutional layers."
          },
          {
            "day": 55,
            "topic": "CLIP & Multimodal Embeddings",
            "priority": "MUST KNOW",
            "tasks": "Study OpenAI's CLIP model. Understand how it maps images and text into the exact same embedding space.",
            "achievement": "Can build a \"search images with text\" search engine."
          },
          {
            "day": 56,
            "topic": "LLM Evaluation Basics",
            "priority": "IMPORTANT",
            "tasks": "Study traditional metrics: Perplexity, BLEU, and ROUGE. Understand why they fail for generative tasks.",
            "achievement": "Can evaluate standard translation and summarization models."
          },
          {
            "day": 57,
            "topic": "Modern LLM Benchmarks",
            "priority": "MUST KNOW",
            "tasks": "Study MMLU, HumanEval, and GSM8K. Understand the concept of contamination in training datasets.",
            "achievement": "Can critically evaluate the \"leaderboards\" when choosing an open-source model."
          }
        ]
      },
      {
        "id": "3-3",
        "title": "ENTERPRISE RAG & AI SECURITY",
        "days": "Days 58–92",
        "items": [
          {
            "day": 58,
            "topic": "RAG Architecture Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Study Retrieval-Augmented Generation. Understand why giving an LLM access to external data prevents hallucinations and provides private context.",
            "achievement": "Can architect the standard enterprise solution for internal corporate AI chat."
          },
          {
            "day": 59,
            "topic": "Document Ingestion & Parsing",
            "priority": "MUST KNOW",
            "tasks": "Write a script to load PDFs, Word docs, and HTML files. Handle difficult formats like tables and images inside PDFs.",
            "achievement": "Can extract clean, usable text from messy corporate document stores."
          },
          {
            "day": 60,
            "topic": "Chunking Strategies",
            "priority": "MUST KNOW",
            "tasks": "Implement Fixed-size, Recursive Character, and Semantic chunking. Understand the overlap parameter.",
            "achievement": "Can split massive documents into the perfect size for vector search and LLM context windows."
          },
          {
            "day": 61,
            "topic": "Embedding Models in Practice",
            "priority": "MUST KNOW",
            "tasks": "Compare OpenAI `text-embedding-3` with open-source `BGE-Large` via Hugging Face. Generate embeddings for 1000 chunks.",
            "achievement": "Can convert human text into high-dimensional semantic vectors."
          },
          {
            "day": 62,
            "topic": "Vector Databases (Pinecone/Milvus)",
            "priority": "MUST KNOW",
            "tasks": "Provision a cloud Vector DB. Insert your chunk embeddings alongside metadata (author, date, page_number).",
            "achievement": "Can manage a massive, scalable database optimized purely for semantic search."
          },
          {
            "day": 63,
            "topic": "Vector Search Algorithms (HNSW)",
            "priority": "MUST KNOW",
            "tasks": "Study Hierarchical Navigable Small World (HNSW) and Inverted File Index (IVFFlat). Understand approximate nearest neighbors (ANN).",
            "achievement": "Can explain how a Vector DB searches 10 million vectors in 10 milliseconds."
          },
          {
            "day": 64,
            "topic": "RAG with pgvector",
            "priority": "MUST KNOW",
            "tasks": "Install the `pgvector` extension in PostgreSQL. Create a vector column, index it with HNSW, and write a cosine distance SQL query.",
            "achievement": "Can add semantic search capabilities to a standard relational database without adding new infrastructure."
          },
          {
            "day": 65,
            "topic": "Building a Basic RAG Pipeline",
            "priority": "MUST KNOW",
            "tasks": "Combine the pieces: User query -> Embed query -> Vector Search -> Retrieve Top K -> Inject into Prompt -> LLM Generation.",
            "achievement": "Can build a fully functional \"Chat with your PDF\" application from scratch."
          },
          {
            "day": 66,
            "topic": "Advanced RAG: Query Expansion",
            "priority": "MUST KNOW",
            "tasks": "Implement Multi-Query (having the LLM rephrase the user's question 3 times and searching all of them) to improve retrieval recall.",
            "achievement": "Can prevent poor search results caused by vague user queries."
          },
          {
            "day": 67,
            "topic": "Advanced RAG: HyDE",
            "priority": "MUST KNOW",
            "tasks": "Implement Hypothetical Document Embeddings. Ask the LLM to generate a fake answer, embed the fake answer, and search for that vector.",
            "achievement": "Can drastically improve retrieval when the user query and the document text are structured very differently."
          },
          {
            "day": 68,
            "topic": "Advanced Retrieval: DSPy Basics",
            "priority": "MUST KNOW",
            "tasks": "Learn DSPy, a framework that compiles and optimizes prompts automatically. Write a basic Signature and compile it using a Teleprompter.",
            "achievement": "Can programmatically optimize prompts rather than manually tweaking text."
          },
          {
            "day": 69,
            "topic": "Advanced RAG: Parent-Child Chunking",
            "priority": "MUST KNOW",
            "tasks": "Embed small \"child\" chunks for accurate search, but retrieve the larger \"parent\" document to give the LLM more context.",
            "achievement": "Can balance strict search precision with broad LLM context generation."
          },
          {
            "day": 70,
            "topic": "Advanced RAG: Hybrid Search",
            "priority": "MUST KNOW",
            "tasks": "Combine Vector Search (semantic meaning) with BM25 Keyword Search (exact matching). Use Reciprocal Rank Fusion (RRF) to merge the scores.",
            "achievement": "Can build a search engine that understands synonyms but doesn't miss exact product IDs."
          },
          {
            "day": 71,
            "topic": "Advanced RAG: Reranking Models",
            "priority": "MUST KNOW",
            "tasks": "Retrieve Top 50 documents using fast Vector Search, then pass them through a Cross-Encoder (like Cohere Rerank) to perfectly re-order the Top 5.",
            "achievement": "Can implement the single most effective technique for boosting RAG accuracy."
          },
          {
            "day": 72,
            "topic": "RAG Evaluation Theory (RAGAS)",
            "priority": "MUST KNOW",
            "tasks": "Study the RAGAS metrics: Faithfulness (no hallucinations), Answer Relevance, Context Precision, and Context Recall.",
            "achievement": "Can mathematically evaluate if a RAG pipeline is ready for production."
          },
          {
            "day": 73,
            "topic": "RAGAS Implementation",
            "priority": "MUST KNOW",
            "tasks": "Use the `ragas` Python library to automatically score your RAG pipeline against a test dataset of 50 questions.",
            "achievement": "Can build a CI/CD test suite for an AI application."
          },
          {
            "day": 74,
            "topic": "Self-Reflective RAG",
            "priority": "MUST KNOW",
            "tasks": "Implement a loop: LLM generates answer -> Another LLM checks if the answer actually addresses the prompt -> If no, re-retrieve and try again.",
            "achievement": "Can build highly robust, error-correcting AI generation pipelines."
          },
          {
            "day": 75,
            "topic": "Data Engineering: Airflow Basics",
            "priority": "IMPORTANT",
            "tasks": "Study Apache Airflow for DAG (Directed Acyclic Graph) orchestration. Understand Tasks, Operators, and Scheduling.",
            "achievement": "Can automate complex, multi-step data pipelines reliably."
          },
          {
            "day": 76,
            "topic": "Data Engineering: RAG Ingestion DAG",
            "priority": "MUST KNOW",
            "tasks": "Write an Airflow DAG that runs nightly: Downloads new PDFs -> Chunks them -> Embeds them -> Upserts to Pinecone.",
            "achievement": "Can automate the continuous updating of an enterprise RAG knowledge base."
          },
          {
            "day": 77,
            "topic": "GraphRAG Theory & Setup",
            "priority": "MUST KNOW",
            "tasks": "Install Neo4j. Use an LLM to extract Entities (Nodes) and Relationships (Edges) from raw text. Understand why Knowledge Graphs excel where Vector DBs fail.",
            "achievement": "Can map unstructured text into highly structured, queryable relationship graphs."
          },
          {
            "day": 78,
            "topic": "GraphRAG Queries (Cypher)",
            "priority": "MUST KNOW",
            "tasks": "Combine Vector Search with Cypher Graph Queries. Retrieve a document, then use the graph to retrieve all connected entities up to 3 hops away.",
            "achievement": "Can solve complex \"connect the dots\" questions across thousands of documents."
          },
          {
            "day": 79,
            "topic": "AI Security: OWASP LLM Top 10",
            "priority": "MUST KNOW",
            "tasks": "Study Prompt Injection, Insecure Output Handling, Training Data Poisoning, and Supply Chain Vulnerabilities.",
            "achievement": "Can identify critical security risks unique to Large Language Models."
          },
          {
            "day": 80,
            "topic": "AI Security: Prompt Injection Defense",
            "priority": "MUST KNOW",
            "tasks": "Implement robust system prompts, use delimiters (`\"\"\"`), and test your app against common jailbreaks (like \"DAN\").",
            "achievement": "Can prevent malicious users from hijacking your AI application."
          },
          {
            "day": 81,
            "topic": "AI Security: PII Detection (Presidio)",
            "priority": "MUST KNOW",
            "tasks": "Use Microsoft Presidio to automatically detect and redact Personally Identifiable Information (SSN, emails) before sending text to the OpenAI API.",
            "achievement": "Can guarantee data privacy compliance (GDPR/HIPAA) in AI architectures."
          },
          {
            "day": 82,
            "topic": "AI Security: NeMo Guardrails",
            "priority": "MUST KNOW",
            "tasks": "Implement Nvidia NeMo Guardrails to strictly restrict the topics your chatbot is allowed to discuss using Colang configurations.",
            "achievement": "Can prevent a corporate chatbot from answering questions about competitors or politics."
          },
          {
            "day": 83,
            "topic": "AI Security: LlamaGuard",
            "priority": "MUST KNOW",
            "tasks": "Deploy Meta's LlamaGuard model as an input/output filter to automatically detect and block toxic, violent, or unsafe content.",
            "achievement": "Can implement an enterprise-grade AI safety layer."
          },
          {
            "day": 84,
            "topic": "AI Security: Red Teaming",
            "priority": "MUST KNOW",
            "tasks": "Act as an attacker. Systematically attempt to break, bypass, and exploit the RAG pipeline you built over the last 20 days.",
            "achievement": "Can rigorously audit an AI application for catastrophic edge cases."
          },
          {
            "day": 85,
            "topic": "Semantic Caching",
            "priority": "MUST KNOW",
            "tasks": "Implement `GPTCache`. Store LLM responses in Redis based on the embedding of the user's question. If a similar question is asked, return the cache.",
            "achievement": "Can drastically reduce OpenAI API costs and response latency by caching semantic meaning."
          },
          {
            "day": 86,
            "topic": "Async Python Basics (asyncio)",
            "priority": "MUST KNOW",
            "tasks": "Deep dive into `asyncio` and `await`. Compare synchronous `requests` to asynchronous `httpx` for making multiple API calls concurrently.",
            "achievement": "Can write highly concurrent, non-blocking Python code essential for production AI."
          },
          {
            "day": 87,
            "topic": "Serving Models with FastAPI",
            "priority": "MUST KNOW",
            "tasks": "Wrap your RAG pipeline in a FastAPI backend. Understand Uvicorn and ASGI. Implement an endpoint that receives JSON and returns the LLM answer.",
            "achievement": "Can expose AI functionality as a high-performance REST API."
          },
          {
            "day": 88,
            "topic": "High-Performance Serving with vLLM",
            "priority": "MUST KNOW",
            "tasks": "Set up a local vLLM server. Understand PagedAttention memory optimization. Benchpress token generation throughput vs. standard PyTorch pipelines.",
            "achievement": "Can serve open-source LLMs at scale with maximized GPU utilization and minimal latency."
          },
          {
            "day": 89,
            "topic": "NVIDIA Triton Inference Server",
            "priority": "MUST KNOW",
            "tasks": "Configure Triton Inference Server. Write a model configuration file (config.pbtxt), set up dynamic batching, and route model queries via gRPC and HTTP interfaces.",
            "achievement": "Can deploy production model servers capable of orchestration, batching, and concurrent multi-model executions."
          },
          {
            "day": 90,
            "topic": "Streaming LLM Responses",
            "priority": "MUST KNOW",
            "tasks": "Modify your FastAPI endpoint to use Server-Sent Events (SSE). Stream the LLM tokens to the client as they are generated.",
            "achievement": "Can provide the \"ChatGPT-like\" instant typing experience to users, bypassing long generation delays."
          },
          {
            "day": 91,
            "topic": "Phase 3 Capstone - Part 1",
            "priority": "MUST KNOW",
            "tasks": "Build the Ingestion layer of a \"Corporate Knowledge Bot\". Parse 100 PDFs, chunk them, embed with open-source models, and store in pgvector.",
            "achievement": "Can build a highly optimized data foundation for an AI product."
          },
          {
            "day": 92,
            "topic": "Phase 3 Capstone - Part 2",
            "priority": "MUST KNOW",
            "tasks": "Build the FastAPI layer. Implement Hybrid Search + Reranking, wrap the LLM call with NeMo guardrails, and stream the response asynchronously.",
            "achievement": "Can architect and deploy a secure, production-grade Enterprise RAG system."
          }
        ]
      },
      {
        "id": "3-4",
        "title": "AUTONOMOUS AGENTS & LANGGRAPH",
        "days": "Days 93–141",
        "items": [
          {
            "day": 93,
            "topic": "Introduction to Autonomous Agents",
            "priority": "MUST KNOW",
            "tasks": "Study the difference between RAG (retrieve and generate) and Agents (plan, use tools, loop, and act).",
            "achievement": "Can explain the paradigm shift from passive text generators to active digital workers."
          },
          {
            "day": 94,
            "topic": "Function Calling (Tool Use)",
            "priority": "MUST KNOW",
            "tasks": "Use the OpenAI API `tools` parameter. Define a JSON schema for a `get_weather(location)` function. See how the LLM decides to call it.",
            "achievement": "Can give a frozen language model the ability to fetch real-time, external data."
          },
          {
            "day": 95,
            "topic": "Building Custom Tools",
            "priority": "MUST KNOW",
            "tasks": "Write Python functions to search Google, query a SQL database, and fetch a stock price. Wrap them as LLM-accessible tools.",
            "achievement": "Can bridge the gap between AI reasoning and real-world system execution."
          },
          {
            "day": 96,
            "topic": "Model Context Protocol (MCP)",
            "priority": "MUST KNOW",
            "tasks": "Study the Model Context Protocol (MCP) specification. Implement an MCP Server in Python to expose local filesystem and database access, and configure Claude Desktop or an MCP client to interact with your server.",
            "achievement": "Can build standard-compliant, secure, and interoperable connections between LLMs and external data/tool services."
          },
          {
            "day": 97,
            "topic": "OpenAI Assistants API v2",
            "priority": "IMPORTANT",
            "tasks": "Experiment with the managed Assistants API. Utilize built-in Code Interpreter and File Search without building the infrastructure yourself.",
            "achievement": "Can quickly deploy capable agents using OpenAI's managed platform."
          },
          {
            "day": 98,
            "topic": "ReAct Prompting Paradigm",
            "priority": "MUST KNOW",
            "tasks": "Study the Reason + Act paper. Understand the \"Thought -> Action -> Observation\" loop that powers agentic decision-making.",
            "achievement": "Can explain the core cognitive loop utilized by almost all autonomous agents."
          },
          {
            "day": 99,
            "topic": "LangChain Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Learn the core LangChain abstractions: Prompts, Output Parsers, and Runnables (LCEL - LangChain Expression Language).",
            "achievement": "Can chain multiple LLM calls and parsers together using modular syntax."
          },
          {
            "day": 100,
            "topic": "LangGraph Concepts",
            "priority": "MUST KNOW",
            "tasks": "Understand why LangChain Chains (linear) fail for agents. Study LangGraph: Nodes, Edges, and representing agent logic as a cyclic graph.",
            "achievement": "Can articulate why state machines are the correct architecture for complex AI agents."
          },
          {
            "day": 101,
            "topic": "LangGraph: State & StateGraph",
            "priority": "MUST KNOW",
            "tasks": "Define a TypedDict representing the agent's memory (State). Initialize a `StateGraph` and understand how State is passed between nodes.",
            "achievement": "Can architect the memory structure for an autonomous workflow."
          },
          {
            "day": 102,
            "topic": "LangGraph: Nodes & Edges",
            "priority": "MUST KNOW",
            "tasks": "Write standard Python functions (Nodes) that modify the State. Connect them using linear edges. Compile and run the graph.",
            "achievement": "Can execute a multi-step LLM workflow defined as a strict graph."
          },
          {
            "day": 103,
            "topic": "LangGraph: Conditional Edges",
            "priority": "MUST KNOW",
            "tasks": "Implement a routing function. If the LLM output contains a tool call, route to the ToolNode. Otherwise, route to the END node.",
            "achievement": "Can build the core loop of an autonomous, decision-making agent."
          },
          {
            "day": 104,
            "topic": "LangGraph: Advanced State (Reducers)",
            "priority": "MUST KNOW",
            "tasks": "Modify your State to use the `add_messages` reducer. Understand how this automatically appends new messages to the chat history array.",
            "achievement": "Can manage growing conversational memory without manually merging lists."
          },
          {
            "day": 105,
            "topic": "LangGraph: Persistence (Checkpointers)",
            "priority": "MUST KNOW",
            "tasks": "Use `MemorySaver` or `PostgresSaver`. Pass a `thread_id` to the graph. Stop the graph, and resume it later from the exact same state.",
            "achievement": "Can build long-running agents that remember user conversations across sessions."
          },
          {
            "day": 106,
            "topic": "LangGraph: Human-in-the-Loop (HITL)",
            "priority": "MUST KNOW",
            "tasks": "Configure the graph to interrupt `before` the ToolNode executes. Prompt the user for approval via terminal, then resume the graph.",
            "achievement": "Can design safe agent architectures that require human sign-off for dangerous actions (like DB drops)."
          },
          {
            "day": 107,
            "topic": "LangGraph: Time Travel",
            "priority": "MUST KNOW",
            "tasks": "Fetch the state history using the checkpointer. Rewind the agent to a previous state, modify a message, and branch the execution.",
            "achievement": "Can debug complex agent failures by replaying past executions."
          },
          {
            "day": 108,
            "topic": "LangGraph: Multi-Agent Supervisor",
            "priority": "MUST KNOW",
            "tasks": "Design a graph with a \"Supervisor\" LLM node that decides whether to route the task to a \"Coder\" LLM node or a \"Researcher\" LLM node.",
            "achievement": "Can orchestrate a team of specialized AI agents working under a manager."
          },
          {
            "day": 109,
            "topic": "LangGraph: Multi-Agent Collaboration",
            "priority": "MUST KNOW",
            "tasks": "Design a graph where a \"Generator\" LLM writes an article and passes it to a \"Reviewer\" LLM, looping until the Reviewer approves it.",
            "achievement": "Can build self-improving, peer-reviewing AI architectures."
          },
          {
            "day": 110,
            "topic": "LangGraph: Streaming Outputs",
            "priority": "MUST KNOW",
            "tasks": "Stream the execution of the graph using `.astream_events()`. Yield tokens to the frontend as the LLM generates them inside the nodes.",
            "achievement": "Can provide real-time UI feedback while a complex LangGraph is executing."
          },
          {
            "day": 111,
            "topic": "Semantic Routing",
            "priority": "MUST KNOW",
            "tasks": "Implement `semantic-router`. Instead of asking an LLM to decide which tool to use, use fast vector embeddings to route the user's query instantly.",
            "achievement": "Can bypass slow, expensive LLM calls for predictable routing logic."
          },
          {
            "day": 112,
            "topic": "SQL Agents",
            "priority": "MUST KNOW",
            "tasks": "Build an agent connected to a PostgreSQL database. Give it the schema, and let it autonomously write, execute, and fix SQL queries to answer questions.",
            "achievement": "Can build a \"text-to-SQL\" analytics bot for business intelligence."
          },
          {
            "day": 113,
            "topic": "Code Interpreter Agents",
            "priority": "MUST KNOW",
            "tasks": "Spin up a secure Docker sandbox. Build an agent that writes Python code to perform data analysis, executes it in the sandbox, and reads the output.",
            "achievement": "Can build highly capable data-science agents that solve math using code, not text generation."
          },
          {
            "day": 114,
            "topic": "Web Research Agents (Tavily)",
            "priority": "MUST KNOW",
            "tasks": "Integrate the Tavily Search API. Build an agent that searches the web, scrapes 5 articles, synthesizes the information, and cites its sources.",
            "achievement": "Can build an automated research assistant that grounds answers in real-time internet data."
          },
          {
            "day": 115,
            "topic": "Agent Observability (LangSmith)",
            "priority": "MUST KNOW",
            "tasks": "Configure LangSmith. Run your LangGraph agent and view the trace. Inspect exactly which prompts were sent and which tools were called.",
            "achievement": "Can debug non-deterministic AI agent loops using enterprise observability platforms."
          },
          {
            "day": 116,
            "topic": "Agent Evaluation",
            "priority": "MUST KNOW",
            "tasks": "Use LLM-as-a-judge to evaluate an agent's trajectory. Did it select the most efficient tools? Did it loop too many times?",
            "achievement": "Can quantitatively score the intelligence and efficiency of an autonomous agent."
          },
          {
            "day": 117,
            "topic": "Optimizing Agent Latency",
            "priority": "MUST KNOW",
            "tasks": "Implement parallel tool execution. If an agent needs weather for NY, SF, and LA, ensure it calls the tool 3 times concurrently, not sequentially.",
            "achievement": "Can architect high-performance agents that don't leave users waiting for minutes."
          },
          {
            "day": 118,
            "topic": "Phase 4 Capstone - Scope & Tools (Part 1)",
            "priority": "MUST KNOW",
            "tasks": "Design a \"Software Engineer Agent\". Write tools for reading local files, running bash commands in a Docker sandbox, and searching GitHub.",
            "achievement": "Can establish the foundational capabilities of an advanced autonomous system."
          },
          {
            "day": 119,
            "topic": "Phase 4 Capstone - LangGraph Setup (Part 2)",
            "priority": "MUST KNOW",
            "tasks": "Build the StateGraph. Implement a Supervisor, a Coder, and a Reviewer. Wire up the conditional edges and the PostgresSaver checkpointer.",
            "achievement": "Can architect complex, multi-agent state machines."
          },
          {
            "day": 120,
            "topic": "Phase 4 Capstone - FastAPI Deployment (Part 3)",
            "priority": "MUST KNOW",
            "tasks": "Wrap the LangGraph execution in a FastAPI backend using SSE streaming. Implement a Human-in-the-loop endpoint to approve code execution.",
            "achievement": "Can deploy enterprise-grade AI agents as scalable HTTP services."
          },
          {
            "day": 121,
            "topic": "Review: Core AI Math & Transformers",
            "priority": "MUST KNOW",
            "tasks": "Review gradients, multi-head attention, and how tokenization impacts model capabilities.",
            "achievement": "Ready to answer deep technical questions on how LLMs actually work."
          },
          {
            "day": 122,
            "topic": "Review: RAG Architecture",
            "priority": "MUST KNOW",
            "tasks": "Review chunking strategies, vector search algorithms (HNSW), and reranking patterns.",
            "achievement": "Ready to ace system design interviews focusing on Enterprise RAG pipelines."
          },
          {
            "day": 123,
            "topic": "Review: Agentic Workflows",
            "priority": "MUST KNOW",
            "tasks": "Review ReAct, LangGraph state management, and strategies for preventing infinite agent loops.",
            "achievement": "Ready to discuss the cutting edge of autonomous AI architectures."
          },
          {
            "day": 124,
            "topic": "Graduation Day",
            "priority": "MUST KNOW",
            "tasks": "Reflect on the massive journey from basic Python arrays to architecting autonomous multi-agent systems.",
            "achievement": "You are now a highly capable, job-ready Senior AI & LLM Engineer."
          },
          {
            "day": 125,
            "topic": "Advanced Topic: Multimodal Agents",
            "priority": "IMPORTANT",
            "tasks": "Extend the agent to accept images as input, using GPT-4V to analyze screenshots and write code based on UI mockups.",
            "achievement": "Can build agents that interact with both text and visual data."
          },
          {
            "day": 126,
            "topic": "Advanced Topic: Voice Integration",
            "priority": "IMPORTANT",
            "tasks": "Integrate Whisper for STT and TTS models. Build a real-time voice-to-voice agent over WebSockets.",
            "achievement": "Can build seamless conversational AI systems."
          },
          {
            "day": 127,
            "topic": "Advanced Topic: On-Device LLMs",
            "priority": "MUST KNOW",
            "tasks": "Experiment with Llama.cpp and Ollama. Run a quantized 8B model locally and connect it to your LangGraph agent.",
            "achievement": "Can deploy completely private, offline AI agents."
          },
          {
            "day": 128,
            "topic": "System Design: Agentic Systems",
            "priority": "MUST KNOW",
            "tasks": "Design an architecture capable of running 10,000 asynchronous long-lived agents using Temporal or Kafka.",
            "achievement": "Can scale agentic workflows to enterprise workloads."
          },
          {
            "day": 129,
            "topic": "Advanced Security: Jailbreaks & Defenses",
            "priority": "MUST KNOW",
            "tasks": "Study advanced prompt injections like Crescendo and ASCII art bypasses. Implement strict semantic filters.",
            "achievement": "Can secure frontier models against state-of-the-art red teaming attacks."
          },
          {
            "day": 130,
            "topic": "Distributed AI Workloads with Ray",
            "priority": "IMPORTANT",
            "tasks": "Install Ray. Write distributed tasks and actors. Configure Ray Train or Ray Serve to orchestrate model fine-tuning and inference across multiple node cores.",
            "achievement": "Can scale compute execution dynamically across clusters to run heavy AI training and serving operations."
          },
          {
            "day": 131,
            "topic": "Cost Optimization & Token Management",
            "priority": "MUST KNOW",
            "tasks": "Implement strict token counting, dynamic context window truncation, and caching to reduce API costs by 80%.",
            "achievement": "Can manage the massive financial overhead of running LLMs in production."
          },
          {
            "day": 132,
            "topic": "Fine-Tuning Review: Custom Embeddings",
            "priority": "IMPORTANT",
            "tasks": "Learn how to fine-tune an embedding model (like BGE) using SentenceTransformers on domain-specific vocabulary.",
            "achievement": "Can boost RAG accuracy on highly specialized corporate jargon."
          },
          {
            "day": 133,
            "topic": "Emerging Frameworks: LlamaIndex vs LangChain",
            "priority": "IMPORTANT",
            "tasks": "Build a complex RAG pipeline in LlamaIndex. Compare the abstractions to LangChain.",
            "achievement": "Can select the optimal framework based on task requirements (RAG vs Agents)."
          },
          {
            "day": 134,
            "topic": "Emerging Frameworks: Autogen",
            "priority": "IMPORTANT",
            "tasks": "Study Microsoft Autogen. Build a conversational multi-agent system and compare its approach to LangGraph.",
            "achievement": "Can evaluate alternative multi-agent orchestration frameworks."
          },
          {
            "day": 135,
            "topic": "Emerging Frameworks: CrewAI Deep Dive",
            "priority": "IMPORTANT",
            "tasks": "Build a task-delegation hierarchy using CrewAI. Understand Tasks, Agents, and Tools in this framework.",
            "achievement": "Can rapidly prototype role-playing agent teams."
          },
          {
            "day": 136,
            "topic": "Portfolio Project Polish",
            "priority": "MUST KNOW",
            "tasks": "Clean up the \"Corporate Knowledge Bot\" and \"Software Engineer Agent\" repositories. Add comprehensive READMEs with architecture diagrams.",
            "achievement": "Can present undeniable proof of senior-level AI engineering skills."
          },
          {
            "day": 137,
            "topic": "Mock Interview: ML Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Do a mock interview focusing strictly on calculus, backpropagation, and classical ML algorithms.",
            "achievement": "Can pass the mathematical screen of an AI interview."
          },
          {
            "day": 138,
            "topic": "Mock Interview: Transformer Architecture",
            "priority": "MUST KNOW",
            "tasks": "Do a mock interview focusing on attention mechanisms, LoRA math, and KV-caching.",
            "achievement": "Can pass the deep-learning architecture screen."
          },
          {
            "day": 139,
            "topic": "Mock Interview: RAG System Design",
            "priority": "MUST KNOW",
            "tasks": "Do a mock interview designing a multi-tenant RAG system for a legal firm with strict data access controls.",
            "achievement": "Can pass an enterprise AI system design interview."
          },
          {
            "day": 140,
            "topic": "Mock Interview: Agent System Design",
            "priority": "MUST KNOW",
            "tasks": "Do a mock interview designing an autonomous coding assistant that scales to thousands of concurrent users.",
            "achievement": "Can architect state-of-the-art AI applications under pressure."
          },
          {
            "day": 141,
            "topic": "Ultimate Graduation",
            "priority": "MUST KNOW",
            "tasks": "Review your entire journey. You have mastered Python, Deep Learning, RAG, and Autonomous Agents.",
            "achievement": "You are now an Elite GenAI & LLM Engineer."
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "title": "Linux, OS & Databases",
    "days": 112,
    "color": "amber",
    "phases": [
      {
        "id": "4-1",
        "title": "LINUX & OS INTERNALS",
        "days": "Days 1–29",
        "items": [
          {
            "day": 1,
            "topic": "OS Fundamentals & Kernel",
            "priority": "MUST KNOW",
            "tasks": "Study the difference between the Kernel Space and User Space. Understand what System Calls (syscalls) are and how the OS manages hardware resources.",
            "achievement": "Can explain the exact role of an Operating System Kernel in a server environment."
          },
          {
            "day": 2,
            "topic": "Linux File System Hierarchy",
            "priority": "MUST KNOW",
            "tasks": "Explore `/etc`, `/var`, `/home`, `/usr`, and `/bin`. Understand the Linux philosophy: \"Everything is a file\" (including hardware devices in `/dev`).",
            "achievement": "Can navigate to the correct directory to find system logs, configuration files, and installed binaries without searching blindly."
          },
          {
            "day": 3,
            "topic": "Essential CLI Navigation",
            "priority": "MUST KNOW",
            "tasks": "Master absolute vs relative paths. Practice using `cd`, `ls -la`, `pwd`, `mkdir -p`, `rm -rf`, `cp -r`, and `mv` commands rapidly in a terminal without a GUI.",
            "achievement": "Can manipulate files and directories strictly via the command line with high speed."
          },
          {
            "day": 4,
            "topic": "File Reading & Searching",
            "priority": "MUST KNOW",
            "tasks": "Use `cat`, `less`, `head`, and `tail -f` to read files. Learn how to search for text inside files using `grep` (with regex flags like `-i` and `-E`).",
            "achievement": "Can monitor real-time server logs and extract specific error messages instantly using grep."
          },
          {
            "day": 5,
            "topic": "Finding Files in Linux",
            "priority": "MUST KNOW",
            "tasks": "Master the `find` command. Write commands to find files by name (`-name`), by extension (`*.log`), by size (`+100M`), and by modification date (`-mtime`).",
            "achievement": "Can locate any file hidden deep within a server based on complex metadata rules."
          },
          {
            "day": 6,
            "topic": "Pipes and Redirection",
            "priority": "MUST KNOW",
            "tasks": "Study standard input (stdin), standard output (stdout), and standard error (stderr). Practice piping `|` the output of one command into another, and redirecting `>` to files.",
            "achievement": "Can chain multiple simple Linux utilities together to perform complex data transformations."
          },
          {
            "day": 7,
            "topic": "User & Group Management",
            "priority": "MUST KNOW",
            "tasks": "Learn how to create users (`useradd`), assign them to groups (`usermod`), and switch users (`su`). Understand the `/etc/passwd` and `/etc/group` files.",
            "achievement": "Can provision access to a Linux server for multiple developers securely."
          },
          {
            "day": 8,
            "topic": "Linux Permissions (chmod/chown)",
            "priority": "MUST KNOW",
            "tasks": "Study the read (4), write (2), execute (1) octal permission system. Use `chmod` to change permissions and `chown` to change file ownership. Understand the `root` user.",
            "achievement": "Can secure sensitive files (like SSH keys) so only the owner can read them (chmod 400)."
          },
          {
            "day": 9,
            "topic": "Sudo & Privilege Escalation",
            "priority": "MUST KNOW",
            "tasks": "Understand how the `sudo` command works and how to configure the `/etc/sudoers` file safely using `visudo`.",
            "achievement": "Can grant a specific user permission to restart a service without giving them full root access."
          },
          {
            "day": 10,
            "topic": "Process Management",
            "priority": "MUST KNOW",
            "tasks": "Use `ps aux` and `top` / `htop` to list running processes. Learn what a PID is. Practice sending signals to processes using `kill -9` (SIGKILL) and `kill -15` (SIGTERM).",
            "achievement": "Can identify a runaway, CPU-hogging application and terminate it safely."
          },
          {
            "day": 11,
            "topic": "OS Internals: Concurrency, Mutexes & Semaphores",
            "priority": "MUST KNOW",
            "tasks": "Study race conditions, critical sections, and mutual exclusion. Compare Mutexes, Semaphores (binary and counting), and spinlocks. Implement a thread-safe producer-consumer queue.",
            "achievement": "Can prevent race conditions and write thread-safe concurrent programs at the operating system level."
          },
          {
            "day": 12,
            "topic": "OS Internals: CPU Scheduling & Deadlocks",
            "priority": "MUST KNOW",
            "tasks": "Study CPU scheduling algorithms (Round Robin, FIFO, Shortest Job First). Understand what a Deadlock is, the 4 Coffman conditions for deadlocks, and deadlock prevention/detection strategies.",
            "achievement": "Can explain process scheduling and resolve deadlocks in multi-process systems."
          },
          {
            "day": 13,
            "topic": "OS Internals: Paging & Virtual Memory",
            "priority": "MUST KNOW",
            "tasks": "Study physical vs virtual memory. Learn how the CPU MMU maps pages to frames. Understand page tables, page faults, thrashing, and page replacement algorithms (LRU, FIFO).",
            "achievement": "Can optimize memory usage and troubleshoot page faults on Linux servers."
          },
          {
            "day": 14,
            "topic": "Diagnostic Tools (strace, lsof, perf)",
            "priority": "MUST KNOW",
            "tasks": "Use `strace` to intercept system calls of a process. Use `lsof` to find which process is holding a file open. Understand what `perf` does for CPU profiling.",
            "achievement": "Can debug complex production crashes where a process hangs waiting for I/O."
          },
          {
            "day": 15,
            "topic": "Background Jobs & Screen/Tmux",
            "priority": "MUST KNOW",
            "tasks": "Learn how to send processes to the background using `&`, `bg`, and `fg`. Install and practice using `tmux` or `screen` to keep sessions alive after disconnecting from SSH.",
            "achievement": "Can start a long-running script, disconnect your laptop, and check back on it tomorrow."
          },
          {
            "day": 16,
            "topic": "Daemons and Systemd",
            "priority": "MUST KNOW",
            "tasks": "Understand what a daemon is. Master `systemctl` commands (start, stop, restart, status, enable). Write a custom `.service` file to run a Python script automatically on boot.",
            "achievement": "Can configure a backend application to start automatically when the server reboots."
          },
          {
            "day": 17,
            "topic": "Package Management (APT/YUM)",
            "priority": "MUST KNOW",
            "tasks": "Learn how software is installed in Linux. Practice using `apt update`, `apt upgrade`, and installing packages. Understand dependency resolution.",
            "achievement": "Can install and update server software safely on Debian/Ubuntu systems."
          },
          {
            "day": 18,
            "topic": "Archive and Compression",
            "priority": "MUST KNOW",
            "tasks": "Master the `tar` command (`tar -czvf` to compress, `tar -xzvf` to extract). Understand the difference between `.tar`, `.gz`, and `.zip`.",
            "achievement": "Can back up an entire application directory into a single compressed file for transport."
          },
          {
            "day": 19,
            "topic": "Disk Usage & Partitions",
            "priority": "MUST KNOW",
            "tasks": "Use `df -h` to check available disk space and `du -sh` to find massive directories. Understand basic disk mounting.",
            "achievement": "Can diagnose a \"No space left on device\" error and identify which folder is causing it."
          },
          {
            "day": 20,
            "topic": "Symlinks & Hard Links",
            "priority": "IMPORTANT",
            "tasks": "Use `ln -s` to create soft links (shortcuts) and `ln` for hard links. Understand the concept of Inodes in the Linux file system.",
            "achievement": "Can manage different versions of software by symlinking `/usr/bin/node` to the correct version folder."
          },
          {
            "day": 21,
            "topic": "Environment Variables",
            "priority": "MUST KNOW",
            "tasks": "Understand `export`. Edit the `~/.bashrc` or `~/.profile` file to make environment variables permanent. Learn how the `$PATH` variable dictates command execution.",
            "achievement": "Can fix \"command not found\" errors by correctly configuring the PATH variable."
          },
          {
            "day": 22,
            "topic": "Networking Basics in CLI",
            "priority": "MUST KNOW",
            "tasks": "Use `ping` to test connectivity, `curl` / `wget` to make HTTP requests or download files, and `traceroute` to track network paths.",
            "achievement": "Can diagnose basic network connectivity issues directly from the server terminal."
          },
          {
            "day": 23,
            "topic": "Port Checking & Firewalls (UFW)",
            "priority": "MUST KNOW",
            "tasks": "Use `netstat -tulpn` or `ss` to see which processes are listening on which ports. Configure `ufw` (Uncomplicated Firewall) to allow port 80/443 and block others.",
            "achievement": "Can secure a server by closing all ports except the ones explicitly needed by the application."
          },
          {
            "day": 24,
            "topic": "SSH Configuration & Keys",
            "priority": "MUST KNOW",
            "tasks": "Generate SSH keys (`ssh-keygen`). Understand public vs private keys. Copy keys to a server using `ssh-copy-id`. Disable password authentication in `/etc/ssh/sshd_config`.",
            "achievement": "Can lock down a server so it is completely immune to SSH password brute-force attacks."
          },
          {
            "day": 25,
            "topic": "Memory & Swap Management",
            "priority": "IMPORTANT",
            "tasks": "Use `free -m` to check RAM. Understand what Swap space is and how it acts as emergency memory. Learn the dangers of excessive swapping (thrashing).",
            "achievement": "Can diagnose if an OutOfMemory error was caused by a lack of physical RAM or insufficient Swap."
          },
          {
            "day": 26,
            "topic": "Text Editors (Vim/Nano)",
            "priority": "MUST KNOW",
            "tasks": "Learn the absolute basics of Nano for quick edits. Learn Vim basics: Insert mode (`i`), Visual mode, saving/quitting (`:wq`, `:q!`), and basic navigation.",
            "achievement": "Can edit configuration files on a headless remote server without panicking."
          },
          {
            "day": 27,
            "topic": "Cron Jobs & Scheduling",
            "priority": "MUST KNOW",
            "tasks": "Edit the crontab (`crontab -e`). Learn cron syntax (`* * * * *`). Schedule a script to run every day at midnight.",
            "achievement": "Can automate recurring maintenance tasks like database backups or log rotations."
          },
          {
            "day": 28,
            "topic": "Log Rotation (logrotate)",
            "priority": "IMPORTANT",
            "tasks": "Understand why log files must be rotated to prevent disk exhaustion. Inspect `/etc/logrotate.conf` to see how system logs are compressed and deleted automatically.",
            "achievement": "Can configure an application to keep only the last 7 days of logs automatically."
          },
          {
            "day": 29,
            "topic": "Phase 1 Review: Linux Survival",
            "priority": "MUST KNOW",
            "tasks": "Provision a raw Ubuntu server on a cloud provider. Create a new user, lock down SSH, configure a firewall, install a database, and configure it as a systemd service.",
            "achievement": "Can take a blank server and configure it securely for production application hosting."
          }
        ]
      },
      {
        "id": "4-2",
        "title": "BASH, NGINX & GIT ENGINEERING",
        "days": "Days 30–54",
        "items": [
          {
            "day": 30,
            "topic": "Bash Scripting Basics",
            "priority": "MUST KNOW",
            "tasks": "Write your first `#!/bin/bash` script. Learn how to declare variables, accept command-line arguments (`$1`, `$2`), and return exit codes.",
            "achievement": "Can write reusable executable scripts to automate manual terminal tasks."
          },
          {
            "day": 31,
            "topic": "Bash Conditionals (If/Else)",
            "priority": "MUST KNOW",
            "tasks": "Use `if`, `elif`, and `else`. Learn file testing operators (`-f`, `-d`) and string comparisons. Write a script that checks if a required configuration file exists before proceeding.",
            "achievement": "Can write defensive scripts that validate their environment before executing dangerous operations."
          },
          {
            "day": 32,
            "topic": "Bash Loops (For/While)",
            "priority": "MUST KNOW",
            "tasks": "Write `for` loops to iterate over files in a directory. Write a `while` loop that reads a text file line-by-line.",
            "achievement": "Can automate repetitive operations across hundreds of files instantly."
          },
          {
            "day": 33,
            "topic": "Advanced Text Processing (AWK)",
            "priority": "IMPORTANT",
            "tasks": "Learn `awk` basics. Use it to extract specific columns from structured text files (like parsing access logs).",
            "achievement": "Can slice and transform tabular command-line data without needing Python."
          },
          {
            "day": 34,
            "topic": "Advanced Text Processing (SED)",
            "priority": "IMPORTANT",
            "tasks": "Learn the Stream Editor (`sed`). Practice performing massive find-and-replace operations across configuration files via the terminal.",
            "achievement": "Can programmatically update connection strings in configuration files dynamically during deployment."
          },
          {
            "day": 35,
            "topic": "DNS & Domains (Real World)",
            "priority": "MUST KNOW",
            "tasks": "Purchase a cheap domain name. Configure an A Record to point to your cloud server's IP address. Understand TTL (Time to Live) propagation delays.",
            "achievement": "Can connect human-readable domain names to raw infrastructure."
          },
          {
            "day": 36,
            "topic": "Nginx Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Install Nginx. Understand the difference between Nginx (event-driven) and Apache (thread-per-request). Explore the `nginx.conf` and `sites-available` directory structures.",
            "achievement": "Can explain why Nginx is the industry standard for high-concurrency web serving."
          },
          {
            "day": 37,
            "topic": "Nginx Reverse Proxy",
            "priority": "MUST KNOW",
            "tasks": "Configure a `server` block to listen on port 80 and use `proxy_pass` to forward traffic to a backend Node.js or Spring Boot app running on port 8080.",
            "achievement": "Can securely expose a backend application to the internet via an enterprise-grade proxy."
          },
          {
            "day": 38,
            "topic": "Nginx Load Balancing",
            "priority": "MUST KNOW",
            "tasks": "Set up an `upstream` block containing three backend server IPs. Configure Nginx to load balance traffic between them using round-robin.",
            "achievement": "Can scale a backend application horizontally by placing Nginx in front of multiple instances."
          },
          {
            "day": 39,
            "topic": "SSL/TLS with Nginx (Certbot)",
            "priority": "MUST KNOW",
            "tasks": "Use Let's Encrypt and Certbot to automatically fetch an SSL certificate and configure Nginx to serve HTTPS traffic on port 443. Set up a port 80 -> 443 redirect.",
            "achievement": "Can secure all internet traffic to your application with free, auto-renewing cryptography."
          },
          {
            "day": 40,
            "topic": "Git Internals: Trees & Blobs",
            "priority": "IMPORTANT",
            "tasks": "Study how Git actually stores data. Initialize a repo, create a file, and use `git cat-file` to explore how Git stores it as a blob, and how commits are just pointers.",
            "achievement": "Can explain why Git is incredibly fast and why branching is essentially instantaneous."
          },
          {
            "day": 41,
            "topic": "Advanced Git Branching Strategy",
            "priority": "MUST KNOW",
            "tasks": "Study GitFlow vs Trunk-based development. Understand the role of feature branches, release branches, and hotfix branches.",
            "achievement": "Can enforce a clean, organized branching strategy for a team of 10+ developers."
          },
          {
            "day": 42,
            "topic": "Git Merging vs Rebasing",
            "priority": "MUST KNOW",
            "tasks": "Perform a `git merge`. Then, undo it and perform a `git rebase`. Understand how rebasing rewrites commit history to create a perfectly linear project timeline.",
            "achievement": "Can decide exactly when it is safe to use rebase (local) and when it is disastrous (public branches)."
          },
          {
            "day": 43,
            "topic": "Resolving Git Conflicts",
            "priority": "MUST KNOW",
            "tasks": "Intentionally create a merge conflict by editing the same line in two branches. Use VSCode or a terminal to manually resolve the conflict markers (`<<<<<<<`).",
            "achievement": "Can confidently untangle messy code conflicts without accidentally deleting a coworker's work."
          },
          {
            "day": 44,
            "topic": "Git Reset & Revert",
            "priority": "MUST KNOW",
            "tasks": "Understand the difference between `git reset --soft`, `--mixed`, and `--hard`. Learn how `git revert` safely undoes a commit by creating a new, opposite commit.",
            "achievement": "Can panic-fix a broken production branch by safely reverting the offending commit."
          },
          {
            "day": 45,
            "topic": "Git Interactive Rebase",
            "priority": "MUST KNOW",
            "tasks": "Use `git rebase -i` to squash three messy \"WIP\" commits into a single, clean feature commit before pushing to GitHub.",
            "achievement": "Can maintain a pristine, highly readable commit history for the team."
          },
          {
            "day": 46,
            "topic": "Git Stash & Cherry-Pick",
            "priority": "MUST KNOW",
            "tasks": "Use `git stash` to temporarily hide unfinished work. Use `git cherry-pick` to grab a specific commit from another branch and apply it to your current branch.",
            "achievement": "Can quickly switch context between tasks and move individual fixes between branches."
          },
          {
            "day": 47,
            "topic": "Git Hooks",
            "priority": "IMPORTANT",
            "tasks": "Explore the `.git/hooks` directory. Write a `pre-commit` Bash script that runs your unit tests and rejects the commit if the tests fail.",
            "achievement": "Can enforce code quality and prevent broken code from ever being committed to the repository."
          },
          {
            "day": 48,
            "topic": "SSH Git Authentication",
            "priority": "MUST KNOW",
            "tasks": "Switch your GitHub remotes from HTTPS to SSH. Understand why SSH is more secure and convenient for CI/CD pipelines than using personal access tokens.",
            "achievement": "Can securely interact with GitHub without ever typing a password again."
          },
          {
            "day": 49,
            "topic": "Nginx Caching & Gzip",
            "priority": "MUST KNOW",
            "tasks": "Configure Nginx to compress outgoing text responses using Gzip to save bandwidth. Set up proxy caching for static assets like images and CSS.",
            "achievement": "Can drastically reduce server load and improve website load times via proxy-level caching."
          },
          {
            "day": 50,
            "topic": "Nginx Rate Limiting",
            "priority": "MUST KNOW",
            "tasks": "Use the `limit_req_zone` directive in Nginx to restrict a single IP address to 5 requests per second, dropping excess traffic with a 503 error.",
            "achievement": "Can protect backend servers from basic Denial of Service (DoS) attacks at the proxy layer."
          },
          {
            "day": 51,
            "topic": "Monorepos vs Polyrepos",
            "priority": "IMPORTANT",
            "tasks": "Study the trade-offs of storing all microservices in a single Git repository (Monorepo) versus separate repositories. Look at tools like Lerna or Nx.",
            "achievement": "Can recommend the correct repository structure for a growing engineering team."
          },
          {
            "day": 52,
            "topic": "Semantic Versioning (SemVer)",
            "priority": "MUST KNOW",
            "tasks": "Study the MAJOR.MINOR.PATCH specification. Understand when to increment each number based on breaking changes vs backward-compatible additions.",
            "achievement": "Can version software releases predictably so downstream consumers don't break."
          },
          {
            "day": 53,
            "topic": "Phase 2 Capstone - Prep",
            "priority": "MUST KNOW",
            "tasks": "Write a bash script that automatically pulls the latest code from GitHub, builds it, restarts the systemd service, and tails the logs.",
            "achievement": "Can build a \"poor man's CI/CD\" pipeline purely using Bash and Git."
          },
          {
            "day": 54,
            "topic": "Phase 2 Capstone - Execution",
            "priority": "MUST KNOW",
            "tasks": "Deploy a web application on a Linux server. Point a custom domain to it. Secure it with Nginx + HTTPS Certbot, and use your Bash script to deploy updates.",
            "achievement": "Can manually launch a secure, internet-facing application from scratch."
          }
        ]
      },
      {
        "id": "4-3",
        "title": "RELATIONAL DBs & SQL MASTERY",
        "days": "Days 55–81",
        "items": [
          {
            "day": 55,
            "topic": "PostgreSQL Architecture",
            "priority": "MUST KNOW",
            "tasks": "Study the Postgres process model (postmaster), shared buffers, and the Write-Ahead Log (WAL). Understand why Postgres is highly reliable for enterprise data.",
            "achievement": "Can explain the internal memory and logging mechanisms that protect PostgreSQL data."
          },
          {
            "day": 56,
            "topic": "Advanced Data Types",
            "priority": "MUST KNOW",
            "tasks": "Go beyond VARCHAR and INT. Experiment with Postgres-specific types: UUID, ARRAY, and ENUM. Understand the storage benefits of exact data typing.",
            "achievement": "Can design strict database schemas that reject invalid data formats instantly."
          },
          {
            "day": 57,
            "topic": "JSONB in PostgreSQL",
            "priority": "MUST KNOW",
            "tasks": "Learn how to store NoSQL-like JSON documents directly inside Postgres. Query specific keys inside the JSONB column and index them.",
            "achievement": "Can implement flexible, schema-less features (like user settings) without needing MongoDB."
          },
          {
            "day": 58,
            "topic": "Complex JOIN Operations",
            "priority": "MUST KNOW",
            "tasks": "Master INNER, LEFT, RIGHT, and FULL OUTER joins. Understand CROSS JOINs and Self Joins. Write a query that joins 4 different tables to generate a report.",
            "achievement": "Can extract highly correlated data spread across complex normalized schemas."
          },
          {
            "day": 59,
            "topic": "Subqueries and CTEs (WITH clause)",
            "priority": "MUST KNOW",
            "tasks": "Refactor messy nested subqueries into readable Common Table Expressions (CTEs). Write a recursive CTE to traverse a hierarchical tree (like an employee org chart).",
            "achievement": "Can write elegant, readable SQL for extremely complex, multi-step data extraction logic."
          },
          {
            "day": 60,
            "topic": "Window Functions - OVER & PARTITION BY",
            "priority": "MUST KNOW",
            "tasks": "Use `ROW_NUMBER()`, `RANK()`, and `DENSE_RANK()`. Calculate a running total or a moving average without grouping the data.",
            "achievement": "Can perform advanced analytical and reporting queries directly in the database."
          },
          {
            "day": 61,
            "topic": "Window Functions - LEAD & LAG",
            "priority": "IMPORTANT",
            "tasks": "Use `LEAD()` and `LAG()` to compare a row's value to the previous row (e.g., calculating the day-over-day percentage change in sales).",
            "achievement": "Can extract time-series insights using pure SQL without writing Python logic."
          },
          {
            "day": 62,
            "topic": "Database Normalization",
            "priority": "MUST KNOW",
            "tasks": "Study 1st, 2nd, and 3rd Normal Forms (1NF, 2NF, 3NF). Normalize a flat spreadsheet into a properly structured relational schema to eliminate data redundancy.",
            "achievement": "Can architect data models that prevent update anomalies and maintain strict consistency."
          },
          {
            "day": 63,
            "topic": "Denormalization Strategies",
            "priority": "MUST KNOW",
            "tasks": "Understand when to break 3NF for performance. Study read-heavy architectures where redundant data is acceptable to avoid massive, slow JOIN operations.",
            "achievement": "Can balance strict data integrity with the practical performance needs of an application."
          },
          {
            "day": 64,
            "topic": "Indexing - B-Trees under the hood",
            "priority": "MUST KNOW",
            "tasks": "Deep dive into B-Tree structures. Understand why an index dramatically speeds up `WHERE` and `ORDER BY` clauses, but slows down `INSERT` and `UPDATE` operations.",
            "achievement": "Can accurately predict exactly how a database will locate a row on the hard drive."
          },
          {
            "day": 65,
            "topic": "EXPLAIN ANALYZE",
            "priority": "MUST KNOW",
            "tasks": "Use `EXPLAIN ANALYZE` on a slow query. Read the query plan. Understand Sequential Scans vs Index Scans, and Hash Joins vs Nested Loops.",
            "achievement": "Can profile and diagnose exactly why a specific SQL query is taking 5 seconds to run."
          },
          {
            "day": 66,
            "topic": "Advanced Indexing Strategies",
            "priority": "MUST KNOW",
            "tasks": "Create Composite Indexes for queries filtering on multiple columns. Understand the Leftmost Prefix Rule. Create Partial Indexes (indexing only active users) to save space.",
            "achievement": "Can optimize complex queries by designing highly targeted, memory-efficient indexes."
          },
          {
            "day": 67,
            "topic": "Transactions and ACID in Postgres",
            "priority": "MUST KNOW",
            "tasks": "Use `BEGIN`, `COMMIT`, and `ROLLBACK`. Intentionally cause a deadlock between two terminal sessions and observe how Postgres resolves it.",
            "achievement": "Can write bulletproof database scripts that never leave data in a partially updated state."
          },
          {
            "day": 68,
            "topic": "Isolation Levels & MVCC",
            "priority": "MUST KNOW",
            "tasks": "Study Multi-Version Concurrency Control (MVCC). Understand how Postgres allows readers to read while writers write by keeping multiple versions of a row.",
            "achievement": "Can explain how PostgreSQL achieves high concurrency without locking entire tables."
          },
          {
            "day": 69,
            "topic": "PostgreSQL Internals: WAL, MVCC & Vacuum",
            "priority": "MUST KNOW",
            "tasks": "Deep dive into PostgreSQL internals. Study Write-Ahead Logging (WAL) for durability, MVCC (Multi-Version Concurrency Control) page layout, and why VACUUM is necessary to clean up dead tuples.",
            "achievement": "Can optimize PostgreSQL write performance and maintain database health through autovacuum tuning."
          },
          {
            "day": 70,
            "topic": "Locks in PostgreSQL",
            "priority": "MUST KNOW",
            "tasks": "Study Row-level locks vs Table-level locks. Use `SELECT ... FOR UPDATE` to implement pessimistic locking for a ticketing system or bank transfer.",
            "achievement": "Can prevent race conditions and double-spending issues at the database layer."
          },
          {
            "day": 71,
            "topic": "Views and Materialized Views",
            "priority": "MUST KNOW",
            "tasks": "Create a View to hide a complex join. Create a Materialized View to physically cache the result of an expensive calculation, and learn how to refresh it.",
            "achievement": "Can speed up heavy analytical dashboards instantly using pre-computed materialized views."
          },
          {
            "day": 72,
            "topic": "Stored Procedures & Functions",
            "priority": "IMPORTANT",
            "tasks": "Write a basic PL/pgSQL function. Understand when logic should live in the database (for performance) vs in the application code (for maintainability).",
            "achievement": "Can execute complex data manipulation directly on the database server to reduce network latency."
          },
          {
            "day": 73,
            "topic": "Triggers",
            "priority": "IMPORTANT",
            "tasks": "Write a Trigger that automatically updates an `updated_at` timestamp column or logs changes to an audit table whenever a row is modified.",
            "achievement": "Can implement automatic, database-level side effects that cannot be bypassed by buggy application code."
          },
          {
            "day": 74,
            "topic": "VACUUM and Maintenance",
            "priority": "MUST KNOW",
            "tasks": "Understand Dead Tuples in MVCC. Learn why the `VACUUM` process is critical to reclaim disk space and why `VACUUM FULL` locks the table.",
            "achievement": "Can manage database health and prevent PostgreSQL from bloating over time."
          },
          {
            "day": 75,
            "topic": "Connection Pooling (PgBouncer)",
            "priority": "MUST KNOW",
            "tasks": "Understand the high memory cost of a PostgreSQL connection. Set up PgBouncer to multiplex thousands of client connections onto a few dozen actual database connections.",
            "achievement": "Can prevent connection exhaustion when scaling up a massive microservice fleet."
          },
          {
            "day": 76,
            "topic": "Database Replication (Primary/Replica)",
            "priority": "MUST KNOW",
            "tasks": "Set up a Read Replica using PostgreSQL streaming replication via the WAL. Understand synchronous vs asynchronous replication lag.",
            "achievement": "Can scale out database read capacity and ensure high availability in case the primary crashes."
          },
          {
            "day": 77,
            "topic": "Sharding / Partitioning",
            "priority": "IMPORTANT",
            "tasks": "Implement Table Partitioning (e.g., partitioning a massive `logs` table by month). Discuss the complexities of distributed sharding (e.g., Citus).",
            "achievement": "Can design tables that efficiently store billions of rows without degrading query performance."
          },
          {
            "day": 78,
            "topic": "Backup and Restore (pg_dump)",
            "priority": "MUST KNOW",
            "tasks": "Use `pg_dump` to create a logical backup. Practice restoring the database from scratch. Learn about Point-in-Time Recovery (PITR) using WAL archiving.",
            "achievement": "Can securely back up business data and restore it during a catastrophic failure."
          },
          {
            "day": 79,
            "topic": "Security and Roles",
            "priority": "MUST KNOW",
            "tasks": "Create specific database roles (e.g., `read_only_user`, `app_user`). Implement Row-Level Security (RLS) to restrict users to querying only their own tenant data.",
            "achievement": "Can secure database access utilizing the principle of least privilege."
          },
          {
            "day": 80,
            "topic": "Advanced Topic: pgvector",
            "priority": "MUST KNOW",
            "tasks": "Install pgvector. Create a vector column, store AI embeddings, and create an HNSW index to perform high-speed cosine similarity searches natively in Postgres.",
            "achievement": "Can bridge traditional relational databases with modern AI vector search capabilities."
          },
          {
            "day": 81,
            "topic": "Phase 3 Capstone",
            "priority": "MUST KNOW",
            "tasks": "Given a complex schema of 10 tables, write a series of highly optimized CTEs and Window Functions to generate an Executive Dashboard report, ensuring EXPLAIN ANALYZE shows index hits.",
            "achievement": "Can dominate the SQL portion of any FAANG Data/Backend Engineering interview."
          }
        ]
      },
      {
        "id": "4-4",
        "title": "NOSQL, ELASTICSEARCH & CACHING",
        "days": "Days 82–101",
        "items": [
          {
            "day": 82,
            "topic": "Redis Data Structures",
            "priority": "MUST KNOW",
            "tasks": "Install Redis. Experiment with Strings, Hashes, Lists, Sets, and Sorted Sets via the `redis-cli`. Understand why Redis is single-threaded but insanely fast.",
            "achievement": "Can utilize specific in-memory data structures to solve complex performance problems."
          },
          {
            "day": 83,
            "topic": "Redis Internals: Persistence & Eviction",
            "priority": "MUST KNOW",
            "tasks": "Study how Redis persists data to disk. Compare RDB (snapshotting) vs AOF (Append Only File) persistence, and learn about AOF rewriting. Understand Redis eviction policies (e.g., volatile-lru, allkeys-lru) and how Redis manages memory under pressure.",
            "achievement": "Can configure Redis persistence and eviction policies to balance performance, memory usage, and data durability in production."
          },
          {
            "day": 84,
            "topic": "Dedicated Vector Databases (Pinecone & Weaviate)",
            "priority": "MUST KNOW",
            "tasks": "Study dedicated vector database architectures. Connect to Pinecone and Weaviate. Compare sparse/dense hybrid search indexing (HNSW vs Flat) and CRUD metadata filtering.",
            "achievement": "Can select and deploy optimized vector databases to back enterprise AI retrieval applications."
          },
          {
            "day": 85,
            "topic": "Redis: Caching Strategies",
            "priority": "MUST KNOW",
            "tasks": "Implement Cache-Aside and Write-Through patterns. Set TTLs. Understand eviction policies (allkeys-lru vs volatile-ttl).",
            "achievement": "Can design a bulletproof caching layer that significantly reduces primary database load."
          },
          {
            "day": 86,
            "topic": "Redis: Advanced Use Cases",
            "priority": "MUST KNOW",
            "tasks": "Use a Sorted Set to build a real-time gaming leaderboard. Use a Set to track unique daily IP visitors. Use Redis Pub/Sub for a chat application.",
            "achievement": "Can leverage Redis for advanced system architectures beyond basic object caching."
          },
          {
            "day": 87,
            "topic": "Redis Cluster (Hands-On)",
            "priority": "MUST KNOW",
            "tasks": "Set up a local Redis Cluster with 3 masters and 3 replicas. Study Hash Slots and understand how Redis distributes keys. Use Redisson for a distributed lock in Java/Python.",
            "achievement": "Can horizontally scale in-memory datastores and prevent race conditions across a microservice fleet."
          },
          {
            "day": 88,
            "topic": "MongoDB: Document Modeling",
            "priority": "MUST KNOW",
            "tasks": "Understand BSON documents. Design a schema for an E-Commerce site utilizing denormalization (embedding arrays of reviews inside a product document).",
            "achievement": "Can design NoSQL data models that optimize for fast reads rather than normalization."
          },
          {
            "day": 89,
            "topic": "MongoDB: CRUD & Aggregation",
            "priority": "MUST KNOW",
            "tasks": "Perform deep queries into nested JSON arrays. Write an Aggregation Pipeline (`$match`, `$group`, `$project`) to calculate total sales per category.",
            "achievement": "Can perform complex analytics natively inside a NoSQL document database."
          },
          {
            "day": 90,
            "topic": "MongoDB: Indexes & Sharding",
            "priority": "IMPORTANT",
            "tasks": "Create a compound index in Mongo. Study the concept of a Shard Key and how MongoDB distributes documents across a cluster based on that key.",
            "achievement": "Can architect a MongoDB cluster capable of scaling horizontally across multiple servers."
          },
          {
            "day": 91,
            "topic": "Elasticsearch: The Inverted Index",
            "priority": "MUST KNOW",
            "tasks": "Study the core theory. Understand how documents are tokenized, stemmed, and stored in an Inverted Index. Contrast this with B-Tree indexes.",
            "achievement": "Can explain exactly why standard databases are terrible at \"search bar\" autocomplete functionality."
          },
          {
            "day": 92,
            "topic": "Elasticsearch: Query DSL",
            "priority": "MUST KNOW",
            "tasks": "Write complex JSON queries. Differentiate between `match` (full-text search) and `term` (exact filtering). Implement pagination and aggregations.",
            "achievement": "Can build complex, Google-like search queries using the Elasticsearch REST API."
          },
          {
            "day": 93,
            "topic": "Elasticsearch: Analyzers",
            "priority": "IMPORTANT",
            "tasks": "Create a custom analyzer that strips HTML, lowers cases, and applies English stemming before indexing the text.",
            "achievement": "Can configure search engines to perfectly understand the nuances of human text input."
          },
          {
            "day": 94,
            "topic": "Cassandra Architecture",
            "priority": "MUST KNOW",
            "tasks": "Study masterless architectures and the gossip protocol. Understand consistency levels and how read/write quorums guarantee tunable consistency.",
            "achievement": "Can explain how Cassandra achieves extreme write-speeds and survives multiple node failures."
          },
          {
            "day": 95,
            "topic": "Cassandra Keys & Partitioning",
            "priority": "MUST KNOW",
            "tasks": "Deep dive into Partition Keys (which node stores the data) and Clustering Columns (how data is sorted on disk within that node).",
            "achievement": "Can precisely control how massive datasets are physically distributed across a cluster."
          },
          {
            "day": 96,
            "topic": "Cassandra Query-Driven Modeling",
            "priority": "MUST KNOW",
            "tasks": "Complete a data modeling workshop. Design 3 different tables heavily duplicating data to satisfy 3 specific query requirements, since JOINs do not exist.",
            "achievement": "Can abandon relational normalization habits to design for extreme read/write scale."
          },
          {
            "day": 97,
            "topic": "Cassandra vs Postgres vs Mongo",
            "priority": "MUST KNOW",
            "tasks": "Compare all three. When do you use each? Outline the absolute breaking point where you are forced to migrate from Postgres to Cassandra.",
            "achievement": "Can critically evaluate and select the correct database technology for any business requirement."
          },
          {
            "day": 98,
            "topic": "Message Brokers: RabbitMQ",
            "priority": "MUST KNOW",
            "tasks": "Study AMQP. Understand Exchanges (Direct, Fanout, Topic), Queues, and Bindings. Write a script to publish and consume messages.",
            "achievement": "Can decouple microservices utilizing complex message routing rules."
          },
          {
            "day": 99,
            "topic": "Event Streaming: Kafka vs RabbitMQ",
            "priority": "MUST KNOW",
            "tasks": "Compare the pull-based, append-only log of Kafka to the push-based, smart-broker architecture of RabbitMQ.",
            "achievement": "Can select the correct messaging technology based on throughput vs routing requirements."
          },
          {
            "day": 100,
            "topic": "Neo4j & Graph DBs Concepts",
            "priority": "IMPORTANT",
            "tasks": "Study Nodes, Relationships, and Properties. Understand why Graph databases solve \"friend of a friend\" queries exponentially faster than SQL JOINs.",
            "achievement": "Can identify problems that require highly connected relationship querying."
          },
          {
            "day": 101,
            "topic": "Neo4j Hands-On",
            "priority": "MUST KNOW",
            "tasks": "Install Neo4j. Model a social network graph. Write a Cypher query to generate friend recommendations and connect a simple Java/Python app via the official driver.",
            "achievement": "Can implement and query a graph database in a real application."
          }
        ]
      },
      {
        "id": "4-5",
        "title": "DB ADMINISTRATION & REAL-WORLD ARCHITECTURE",
        "days": "Days 102–112",
        "items": [
          {
            "day": 102,
            "topic": "Database High Availability",
            "priority": "MUST KNOW",
            "tasks": "Study active-passive failover mechanisms. Understand split-brain scenarios and how quorum mechanisms (like Patroni or etcd) prevent multiple primary databases.",
            "achievement": "Can design database architectures that survive complete hardware failure automatically."
          },
          {
            "day": 103,
            "topic": "Data Migration Strategies",
            "priority": "MUST KNOW",
            "tasks": "Study the Strangler Fig pattern for databases. Learn how to migrate data from a legacy monolith database to a new microservice database using dual-writes and CDC.",
            "achievement": "Can migrate millions of rows in production without causing system downtime."
          },
          {
            "day": 104,
            "topic": "Change Data Capture (Debezium)",
            "priority": "MUST KNOW",
            "tasks": "Study how CDC reads the database transaction log. Set up a pipeline where every Postgres UPDATE triggers a Kafka message automatically.",
            "achievement": "Can stream live database changes directly to a search engine (Elasticsearch) for instant indexing."
          },
          {
            "day": 105,
            "topic": "Database Security & Encryption",
            "priority": "MUST KNOW",
            "tasks": "Implement Encryption at Rest (Disk encryption) and Encryption in Transit (SSL/TLS for DB connections). Audit database user privileges.",
            "achievement": "Can guarantee that stolen hard drives or compromised networks do not leak business data."
          },
          {
            "day": 106,
            "topic": "Cloud Databases (RDS/Aurora)",
            "priority": "MUST KNOW",
            "tasks": "Study managed cloud databases. Compare standard AWS RDS to AWS Aurora's distributed storage engine. Understand read-replica auto-scaling.",
            "achievement": "Can explain the benefits and costs of using managed databases versus hosting them yourself on EC2."
          },
          {
            "day": 107,
            "topic": "NoSQL in the Cloud (DynamoDB)",
            "priority": "IMPORTANT",
            "tasks": "Study DynamoDB. Understand Partition keys, Sort keys, GSIs (Global Secondary Indexes), and Provisioned vs On-Demand capacity.",
            "achievement": "Can design a highly scalable, serverless NoSQL database architecture on AWS."
          },
          {
            "day": 108,
            "topic": "Database Troubleshooting",
            "priority": "MUST KNOW",
            "tasks": "Simulate a sudden spike in DB CPU usage. Practice checking `pg_stat_activity`, finding long-running transactions, and killing them.",
            "achievement": "Can act as an emergency DBA during a production crisis to restore application stability."
          },
          {
            "day": 109,
            "topic": "Performance Benchmarking",
            "priority": "IMPORTANT",
            "tasks": "Use `pgbench` to load-test your PostgreSQL database. Tweak `postgresql.conf` parameters (`shared_buffers`, `work_mem`) and measure the TPS (Transactions Per Second) difference.",
            "achievement": "Can mathematically prove that a database configuration change improved throughput."
          },
          {
            "day": 110,
            "topic": "Final Project Architecture",
            "priority": "MUST KNOW",
            "tasks": "Design the complete schema and indexing strategy for a \"Netflix Clone\". Include relational tables for users/billing, NoSQL for watch history, and Elasticsearch for movie search.",
            "achievement": "Can synthesize all learned data modeling techniques into a unified, massive architecture."
          },
          {
            "day": 111,
            "topic": "Final Review & Interview Prep",
            "priority": "MUST KNOW",
            "tasks": "Run mock interviews focusing on B-Trees, transaction isolation levels, N+1 problems, CAP Theorem, and choosing the right database for a specific problem.",
            "achievement": "Ready to dominate any Database, Linux, or Backend Engineering technical interview."
          },
          {
            "day": 112,
            "topic": "Graduation",
            "priority": "MUST KNOW",
            "tasks": "Reflect on 106 days of operating systems, scripting, and extreme data mastery.",
            "achievement": "You are now an Elite Database and Systems Engineer."
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "title": "DevOps, Cloud & MLOps",
    "days": 114,
    "color": "sky",
    "phases": [
      {
        "id": "5-1",
        "title": "CONTAINERIZATION & CLOUD FUNDAMENTALS",
        "days": "Days 1–27",
        "items": [
          {
            "day": 1,
            "topic": "The DevOps Philosophy",
            "priority": "MUST KNOW",
            "tasks": "Study the history of software delivery (Waterfall -> Agile -> DevOps). Understand the \"Wall of Confusion\" between developers and system admins.",
            "achievement": "Can articulate why DevOps exists and how it accelerates software delivery."
          },
          {
            "day": 2,
            "topic": "Introduction to Docker",
            "priority": "MUST KNOW",
            "tasks": "Understand what a container is. Contrast containers (sharing the host OS kernel) with Virtual Machines (running a full guest OS).",
            "achievement": "Can explain exactly why \"it works on my machine\" is solved by Docker."
          },
          {
            "day": 3,
            "topic": "Basic Docker Commands",
            "priority": "MUST KNOW",
            "tasks": "Use `docker run`, `docker ps`, `docker stop`, `docker rm`. Pull an Nginx image and run it on port 8080.",
            "achievement": "Can manage the lifecycle of pre-built containerized applications."
          },
          {
            "day": 4,
            "topic": "Writing Dockerfiles",
            "priority": "MUST KNOW",
            "tasks": "Write a Dockerfile for a Spring Boot and a Python Flask app. Use `FROM`, `WORKDIR`, `COPY`, `RUN`, and `CMD`.",
            "achievement": "Can package custom source code into a portable, reproducible image."
          },
          {
            "day": 5,
            "topic": "Docker Volumes (State)",
            "priority": "MUST KNOW",
            "tasks": "Run a PostgreSQL container. Notice how data is lost when it stops. Use `docker run -v` to mount a host directory to persist the database data.",
            "achievement": "Can safely run stateful databases inside ephemeral containers."
          },
          {
            "day": 6,
            "topic": "Docker Networks",
            "priority": "MUST KNOW",
            "tasks": "Create a custom Docker network. Run a backend app container and a DB container on the same network. Prove they can communicate using container names instead of IP addresses.",
            "achievement": "Can isolate application traffic from the host machine using software-defined networks."
          },
          {
            "day": 7,
            "topic": "Multi-Stage Builds",
            "priority": "MUST KNOW",
            "tasks": "Write a Dockerfile that uses a heavy JDK image to compile a Java app, but uses a tiny JRE Alpine image to run it. Observe the massive reduction in image size.",
            "achievement": "Can build highly optimized, secure containers ready for production."
          },
          {
            "day": 8,
            "topic": "Docker Compose Basics",
            "priority": "MUST KNOW",
            "tasks": "Stop writing massive `docker run` commands. Write a `docker-compose.yml` to orchestrate a Frontend, Backend, and Database simultaneously.",
            "achievement": "Can spin up a complex 3-tier architecture with a single `docker-compose up`."
          },
          {
            "day": 9,
            "topic": "Docker Registries (DockerHub / ECR)",
            "priority": "MUST KNOW",
            "tasks": "Tag your custom image (`docker tag`) and push it to DockerHub or AWS ECR (`docker push`). Delete it locally, and pull it back down.",
            "achievement": "Can distribute compiled application images to servers anywhere in the world."
          },
          {
            "day": 10,
            "topic": "Cloud Computing 101",
            "priority": "MUST KNOW",
            "tasks": "Study IaaS, PaaS, and SaaS. Create an AWS Free Tier account. Understand the AWS Global Infrastructure (Regions and Availability Zones).",
            "achievement": "Can navigate the AWS Console and understand how physical data centers map to cloud concepts."
          },
          {
            "day": 11,
            "topic": "AWS Identity & Access Management (IAM)",
            "priority": "MUST KNOW",
            "tasks": "Never use the Root user! Create an IAM Admin User. Understand Roles, Policies, and Groups. Generate programmatic Access Keys.",
            "achievement": "Can secure an AWS account using the Principle of Least Privilege."
          },
          {
            "day": 12,
            "topic": "AWS Virtual Private Cloud (VPC)",
            "priority": "MUST KNOW",
            "tasks": "Study VPCs, Subnets, Internet Gateways, and Route Tables. Draw a diagram of a public subnet routing to the internet.",
            "achievement": "Can architect the foundational network security boundary for cloud resources."
          },
          {
            "day": 13,
            "topic": "VPC Security Groups & NACLs",
            "priority": "MUST KNOW",
            "tasks": "Understand the difference between stateful Security Groups (attached to instances) and stateless Network ACLs (attached to subnets).",
            "achievement": "Can lock down a database so it can only be accessed by specific backend application IPs."
          },
          {
            "day": 14,
            "topic": "AWS EC2 (Elastic Compute Cloud)",
            "priority": "MUST KNOW",
            "tasks": "Launch an Ubuntu EC2 instance. SSH into it using a `.pem` keypair. Install Docker on it and run your web app.",
            "achievement": "Can provision raw computing power in the cloud and manually deploy software to it."
          },
          {
            "day": 15,
            "topic": "AWS S3 (Simple Storage Service)",
            "priority": "MUST KNOW",
            "tasks": "Create an S3 Bucket. Upload a file via the AWS Console and via the AWS CLI (`aws s3 cp`). Understand Bucket Policies for public access.",
            "achievement": "Can store infinite amounts of unstructured data (images, backups) securely."
          },
          {
            "day": 16,
            "topic": "Multi-Cloud Basics & Providers",
            "priority": "IMPORTANT",
            "tasks": "Differentiate between AWS, GCP, and Azure core services. Differentiate pricing models and region availability. Understand multi-cloud deployment strategies.",
            "achievement": "Can draft architectural plans that operate across multiple cloud providers to avoid vendor lock-in."
          },
          {
            "day": 17,
            "topic": "AWS Route53 & ACM",
            "priority": "MUST KNOW",
            "tasks": "Register a domain (or use an existing one). Use Route53 to route traffic to your EC2 instance. Use AWS Certificate Manager (ACM) to provision an SSL cert.",
            "achievement": "Can configure enterprise DNS routing and free HTTPS certificates."
          },
          {
            "day": 18,
            "topic": "Load Balancing (AWS ALB)",
            "priority": "MUST KNOW",
            "tasks": "Provision an Application Load Balancer. Point it to two different EC2 instances running the same app. Observe traffic splitting.",
            "achievement": "Can scale an application horizontally across multiple servers to handle heavy traffic."
          },
          {
            "day": 19,
            "topic": "Auto Scaling Groups (ASG)",
            "priority": "MUST KNOW",
            "tasks": "Create an AMI (Amazon Machine Image) from your EC2. Configure an ASG to automatically spin up a new instance if CPU usage exceeds 70%.",
            "achievement": "Can build self-healing infrastructure that dynamically adapts to traffic spikes."
          },
          {
            "day": 20,
            "topic": "AWS Relational Database Service (RDS)",
            "priority": "MUST KNOW",
            "tasks": "Provision a Managed PostgreSQL RDS instance inside a private subnet. Connect your EC2 backend to it.",
            "achievement": "Can deploy highly available, automatically backed-up databases without acting as a DBA."
          },
          {
            "day": 21,
            "topic": "AWS ECS (Elastic Container Service)",
            "priority": "MUST KNOW",
            "tasks": "Study ECS clusters and Task Definitions. Understand the difference between EC2 launch type and serverless Fargate launch type.",
            "achievement": "Can explain AWS's native container orchestration engine."
          },
          {
            "day": 22,
            "topic": "AWS Fargate Hands-On",
            "priority": "MUST KNOW",
            "tasks": "Deploy a Docker container to ECS using Fargate. Access it via a Load Balancer. Never provision an underlying EC2 server.",
            "achievement": "Can run Docker containers in production with exactly zero server maintenance."
          },
          {
            "day": 23,
            "topic": "Cloud Design Patterns",
            "priority": "MUST KNOW",
            "tasks": "Study cloud architectural patterns: Sidecar pattern, Circuit Breaker, CQRS, Saga, and Gateway Routing. Focus on building resilient microservices.",
            "achievement": "Can apply industry-standard resiliency and architectural patterns to cloud deployments."
          },
          {
            "day": 24,
            "topic": "Serverless Compute (AWS Lambda)",
            "priority": "IMPORTANT",
            "tasks": "Write a simple Python function. Deploy it as an AWS Lambda. Trigger it manually and via an API Gateway.",
            "achievement": "Can run code purely in response to events without provisioning any infrastructure."
          },
          {
            "day": 25,
            "topic": "Event-Driven AWS (S3 to Lambda)",
            "priority": "IMPORTANT",
            "tasks": "Configure an S3 bucket to trigger a Lambda function every time an image is uploaded. Have the Lambda generate a thumbnail.",
            "achievement": "Can build highly scalable asynchronous background processing pipelines."
          },
          {
            "day": 26,
            "topic": "Secrets Management (AWS Secrets Manager)",
            "priority": "MUST KNOW",
            "tasks": "Store database credentials in AWS Secrets Manager. Modify your application to fetch them via API on startup instead of hardcoding them.",
            "achievement": "Can prevent massive security breaches caused by leaked environment variables."
          },
          {
            "day": 27,
            "topic": "Phase 1 Capstone",
            "priority": "MUST KNOW",
            "tasks": "Manually deploy a highly available 3-tier app: Custom VPC, public subnets for Load Balancer, private subnets for ECS Fargate backend, and an RDS database.",
            "achievement": "Can architect a FAANG-tier AWS production environment by hand."
          }
        ]
      },
      {
        "id": "5-2",
        "title": "INFRASTRUCTURE AS CODE & CI/CD",
        "days": "Days 28–52",
        "items": [
          {
            "day": 28,
            "topic": "Intro to Infrastructure as Code (IaC)",
            "priority": "MUST KNOW",
            "tasks": "Understand the danger of \"ClickOps\" (clicking around the AWS console). Learn why infrastructure must be version-controlled like source code.",
            "achievement": "Can articulate why Terraform is required for reproducible cloud environments."
          },
          {
            "day": 29,
            "topic": "Terraform Basics",
            "priority": "MUST KNOW",
            "tasks": "Install Terraform. Write `main.tf` to define an AWS provider and provision a single EC2 instance. Run `terraform init`, `plan`, and `apply`.",
            "achievement": "Can deploy physical cloud resources instantly using code."
          },
          {
            "day": 30,
            "topic": "Terraform State Management",
            "priority": "MUST KNOW",
            "tasks": "Study the `terraform.tfstate` file. Understand how Terraform tracks what it built. Destroy the infrastructure using `terraform destroy`.",
            "achievement": "Can safely manage the lifecycle of infrastructure without orphaned resources."
          },
          {
            "day": 31,
            "topic": "Remote State & Locking",
            "priority": "MUST KNOW",
            "tasks": "Configure Terraform to store the state file in an S3 bucket and use a DynamoDB table for state locking.",
            "achievement": "Can safely collaborate on infrastructure code with a team without corrupting state."
          },
          {
            "day": 32,
            "topic": "Terraform Variables & Outputs",
            "priority": "MUST KNOW",
            "tasks": "Use `variables.tf` to make the EC2 instance type configurable. Use `outputs.tf` to print the new instance's IP address after creation.",
            "achievement": "Can write dynamic, reusable infrastructure templates."
          },
          {
            "day": 33,
            "topic": "Terraform Modules",
            "priority": "MUST KNOW",
            "tasks": "Refactor a massive `main.tf` into reusable modules (e.g., a custom `network-module` that provisions a VPC, subnets, and IGW).",
            "achievement": "Can architect complex IaC repositories that follow DRY (Don't Repeat Yourself) principles."
          },
          {
            "day": 34,
            "topic": "Provisioning AWS ECS via Terraform",
            "priority": "MUST KNOW",
            "tasks": "Write Terraform code to spin up an ECS Cluster, a Task Definition, a Fargate Service, and an Application Load Balancer.",
            "achievement": "Can automate the deployment of the entire Phase 1 Capstone architecture."
          },
          {
            "day": 35,
            "topic": "Introduction to CI/CD",
            "priority": "MUST KNOW",
            "tasks": "Study Continuous Integration (building/testing) and Continuous Deployment (shipping to production). Understand the pipeline lifecycle.",
            "achievement": "Can explain how code gets from a developer's laptop to production in 5 minutes."
          },
          {
            "day": 36,
            "topic": "GitHub Actions Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Create a `.github/workflows/main.yml` file. Define jobs, steps, and triggers (`on: push`). Run a basic \"Hello World\" bash command.",
            "achievement": "Can trigger automated scripts directly from GitHub repository events."
          },
          {
            "day": 37,
            "topic": "CI: Automated Testing",
            "priority": "MUST KNOW",
            "tasks": "Configure GitHub Actions to automatically run `mvn test` (Java) or `pytest` (Python) every time a Pull Request is opened.",
            "achievement": "Can prevent broken code from being merged into the `main` branch."
          },
          {
            "day": 38,
            "topic": "CI: Static Code Analysis (SonarQube/Linting)",
            "priority": "MUST KNOW",
            "tasks": "Add a step to the pipeline that runs a linter (like Checkstyle or Flake8) and SonarCloud to fail the build if code smells or bugs are detected.",
            "achievement": "Can enforce strict code quality standards completely automatically."
          },
          {
            "day": 39,
            "topic": "CI: Security Scanning (SAST/SCA)",
            "priority": "MUST KNOW",
            "tasks": "Integrate Trivy or Dependabot into the pipeline to scan the codebase for known vulnerable dependencies (CVEs) before building.",
            "achievement": "Can catch critical security flaws before they ever reach the compiled artifact."
          },
          {
            "day": 40,
            "topic": "Building & Pushing Docker Images in CI",
            "priority": "MUST KNOW",
            "tasks": "Configure GitHub Actions to securely log into DockerHub/ECR, run `docker build`, and `docker push` the new image labeled with the Git commit hash.",
            "achievement": "Can automatically generate a deployable container every time code is merged."
          },
          {
            "day": 41,
            "topic": "Managing Secrets in CI/CD",
            "priority": "MUST KNOW",
            "tasks": "Add AWS credentials as GitHub Secrets. Use them in the pipeline without exposing them in the YAML file.",
            "achievement": "Can securely authenticate pipelines to production cloud environments."
          },
          {
            "day": 42,
            "topic": "CD: Deploying to AWS via GitHub Actions",
            "priority": "MUST KNOW",
            "tasks": "Add a final step to your pipeline: use the AWS CLI to update the ECS Fargate service to pull and run the newly pushed Docker image.",
            "achievement": "Can achieve 100% automated deployment from `git push` to a live website."
          },
          {
            "day": 43,
            "topic": "Pipeline Optimization & Caching",
            "priority": "MUST KNOW",
            "tasks": "Use the `actions/cache` step to cache Maven/Pip dependencies between workflow runs. Cut the build time from 5 minutes to 30 seconds.",
            "achievement": "Can drastically speed up developer feedback loops by optimizing CI execution."
          },
          {
            "day": 44,
            "topic": "HashiCorp Vault Basics",
            "priority": "IMPORTANT",
            "tasks": "Study enterprise secrets management. Spin up Vault in a container. Write/read secrets to it instead of using environment variables directly.",
            "achievement": "Can utilize industry-standard tools for extreme credential security."
          },
          {
            "day": 45,
            "topic": "Configuration Management (Ansible)",
            "priority": "IMPORTANT",
            "tasks": "Understand when Terraform (provisioning) stops and Ansible (configuration) begins. Write a simple Ansible Playbook to install Nginx on an existing EC2 server.",
            "achievement": "Can automate the internal configuration of 100s of Linux servers simultaneously."
          },
          {
            "day": 46,
            "topic": "Ansible Roles & Inventory",
            "priority": "IMPORTANT",
            "tasks": "Organize your Playbook into Roles. Use a dynamic inventory file to automatically find AWS EC2 instances based on their tags.",
            "achievement": "Can structure complex configuration management repositories."
          },
          {
            "day": 47,
            "topic": "Immutable Infrastructure Paradigm",
            "priority": "MUST KNOW",
            "tasks": "Study the difference between Mutable (updating an existing server with Ansible) and Immutable (destroying the server and deploying a fresh AMI).",
            "achievement": "Can explain why modern DevOps heavily favors Docker/Immutable AMIs over Ansible updates."
          },
          {
            "day": 48,
            "topic": "GitOps Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Study GitOps. Understand the paradigm shift from \"pushing\" code from a CI pipeline to having an agent \"pull\" state from Git.",
            "achievement": "Can explain the modern standard for Kubernetes deployments."
          },
          {
            "day": 49,
            "topic": "Blue/Green Deployments",
            "priority": "MUST KNOW",
            "tasks": "Study deployment strategies. Understand how to spin up a \"Green\" production environment alongside \"Blue\", and flip the router instantly.",
            "achievement": "Can deploy major application updates with literally zero downtime or risk."
          },
          {
            "day": 50,
            "topic": "Canary Deployments",
            "priority": "MUST KNOW",
            "tasks": "Understand Canary releases. Route 5% of real user traffic to the new version, monitor error rates, and automatically rollback if it fails.",
            "achievement": "Can test code in production safely using live user traffic."
          },
          {
            "day": 51,
            "topic": "Phase 2 Capstone - Prep",
            "priority": "MUST KNOW",
            "tasks": "Write a massive Terraform repository that provisions a VPC, RDS, and ECS cluster completely from scratch.",
            "achievement": "Can codify entire network architectures into reproducible scripts."
          },
          {
            "day": 52,
            "topic": "Phase 2 Capstone - Execution",
            "priority": "MUST KNOW",
            "tasks": "Write a GitHub Actions pipeline that lints, tests, builds a Docker image, pushes it to ECR, and automatically updates the Terraform ECS state.",
            "achievement": "Can build a FAANG-tier, fully automated Infrastructure-as-Code delivery pipeline."
          }
        ]
      },
      {
        "id": "5-3",
        "title": "KUBERNETES & OBSERVABILITY",
        "days": "Days 53–77",
        "items": [
          {
            "day": 53,
            "topic": "Introduction to Kubernetes (K8s)",
            "priority": "MUST KNOW",
            "tasks": "Understand why Docker Compose fails at enterprise scale. Study the K8s Master Node (API Server, etcd, Scheduler) and Worker Nodes (Kubelet, Container Runtime).",
            "achievement": "Can explain the architecture of the most powerful container orchestration platform on earth."
          },
          {
            "day": 54,
            "topic": "Minikube & kubectl",
            "priority": "MUST KNOW",
            "tasks": "Install Minikube to run a local cluster. Master basic `kubectl` commands: `get nodes`, `get all`, `describe`, and `logs`.",
            "achievement": "Can interact with and debug a live Kubernetes cluster."
          },
          {
            "day": 55,
            "topic": "K8s Pods",
            "priority": "MUST KNOW",
            "tasks": "Understand that K8s schedules Pods, not containers. Write a `pod.yaml` and deploy an Nginx pod. Learn about sidecar containers.",
            "achievement": "Can define and deploy the atomic unit of Kubernetes computing."
          },
          {
            "day": 56,
            "topic": "K8s Deployments & ReplicaSets",
            "priority": "MUST KNOW",
            "tasks": "Never deploy naked Pods! Write a `deployment.yaml`. Specify 3 replicas. Manually delete a pod and watch K8s instantly recreate it to maintain desired state.",
            "achievement": "Can deploy self-healing applications that survive node crashes automatically."
          },
          {
            "day": 57,
            "topic": "K8s Services (Networking)",
            "priority": "MUST KNOW",
            "tasks": "Pods get new IPs when they die. Write a `service.yaml` (ClusterIP type) to provide a stable internal DNS name for your backend to reach your database.",
            "achievement": "Can network microservices together reliably despite constant container death."
          },
          {
            "day": 58,
            "topic": "K8s External Access (NodePort & LoadBalancer)",
            "priority": "MUST KNOW",
            "tasks": "Expose your Deployment to the outside world. Change the Service type to `NodePort`, and then to `LoadBalancer` (which provisions a cloud ELB).",
            "achievement": "Can expose Kubernetes applications to internet traffic."
          },
          {
            "day": 59,
            "topic": "K8s Ingress Controllers",
            "priority": "MUST KNOW",
            "tasks": "LoadBalancers are expensive (1 per service). Deploy an Nginx Ingress Controller. Write an `ingress.yaml` to route `/api` to the backend and `/` to the frontend using one IP.",
            "achievement": "Can drastically reduce cloud costs by consolidating web routing inside the cluster."
          },
          {
            "day": 60,
            "topic": "K8s ConfigMaps & Secrets",
            "priority": "MUST KNOW",
            "tasks": "Extract configuration from your image. Write a `configmap.yaml` for environment variables and a `secret.yaml` (base64 encoded) for passwords. Inject them into the Pod.",
            "achievement": "Can manage application configurations natively without modifying Docker images."
          },
          {
            "day": 61,
            "topic": "K8s Volumes & PersistentVolumeClaims (PVC)",
            "priority": "MUST KNOW",
            "tasks": "Run a Postgres database in K8s. Write a PVC to request a 10GB persistent disk from AWS EBS so the data survives Pod restarts.",
            "achievement": "Can run stateful applications reliably on stateless cluster nodes."
          },
          {
            "day": 62,
            "topic": "K8s StatefulSets",
            "priority": "IMPORTANT",
            "tasks": "Understand why deploying databases using Deployments is dangerous. Study StatefulSets, sticky identity, and ordered deployment.",
            "achievement": "Can architect clustered databases (like Cassandra/Kafka) properly inside Kubernetes."
          },
          {
            "day": 63,
            "topic": "K8s Namespaces & Resource Quotas",
            "priority": "MUST KNOW",
            "tasks": "Create `dev` and `prod` namespaces. Set CPU/Memory limits (`requests` and `limits`) on your Pods so one buggy app doesn't crash the entire Node.",
            "achievement": "Can safely host multiple distinct applications on a single shared cluster."
          },
          {
            "day": 64,
            "topic": "Managed Kubernetes (AWS EKS)",
            "priority": "MUST KNOW",
            "tasks": "Stop using Minikube. Use Terraform or `eksctl` to provision a real Amazon Elastic Kubernetes Service (EKS) cluster. Connect your local `kubectl` to it.",
            "achievement": "Can deploy a production-grade K8s cluster on cloud infrastructure."
          },
          {
            "day": 65,
            "topic": "Helm Package Manager",
            "priority": "MUST KNOW",
            "tasks": "Stop writing raw YAML. Install Helm. Browse ArtifactHub. Use `helm install` to deploy a massive system (like Jenkins or Redis Cluster) with one command.",
            "achievement": "Can utilize the open-source ecosystem to instantly deploy complex infrastructure."
          },
          {
            "day": 66,
            "topic": "Creating Custom Helm Charts",
            "priority": "MUST KNOW",
            "tasks": "Run `helm create`. Parameterize your Deployment and Service YAMLs using Go templating. Deploy your app using `helm upgrade --install`.",
            "achievement": "Can package internal company applications for standardized, repeatable K8s deployments."
          },
          {
            "day": 67,
            "topic": "ArgoCD & GitOps Implementation",
            "priority": "MUST KNOW",
            "tasks": "Install ArgoCD in your cluster. Point it at your Git repository containing Helm charts. Make a commit, and watch ArgoCD automatically sync the cluster state.",
            "achievement": "Can implement state-of-the-art, purely automated GitOps deployments."
          },
          {
            "day": 68,
            "topic": "Observability Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Study the three pillars of observability: Metrics (is there a problem?), Logs (what is the problem?), and Traces (where is the problem?).",
            "achievement": "Can differentiate between basic monitoring and deep system observability."
          },
          {
            "day": 69,
            "topic": "Prometheus Architecture",
            "priority": "MUST KNOW",
            "tasks": "Study how Prometheus works. Understand the pull-based model, time-series data, exporters, and PromQL (Prometheus Query Language).",
            "achievement": "Can explain the industry standard for cloud-native metrics collection."
          },
          {
            "day": 70,
            "topic": "Deploying Prometheus & Grafana",
            "priority": "MUST KNOW",
            "tasks": "Use Helm to deploy the `kube-prometheus-stack` into EKS. Open Grafana and view the pre-built dashboards showing CPU and Memory usage across the cluster.",
            "achievement": "Can gain instant, beautiful visibility into massive infrastructure health."
          },
          {
            "day": 71,
            "topic": "Custom Application Metrics",
            "priority": "MUST KNOW",
            "tasks": "Expose a `/metrics` endpoint in your Spring/Python app. Configure a Prometheus `ServiceMonitor` to scrape it. Build a Grafana dashboard for \"Total API Requests\".",
            "achievement": "Can monitor business-specific logic (like sales per minute) alongside hardware metrics."
          },
          {
            "day": 72,
            "topic": "Alertmanager",
            "priority": "MUST KNOW",
            "tasks": "Configure Prometheus Alertmanager. Write a rule: \"If CPU > 80% for 5 minutes, send a Slack message or trigger a PagerDuty incident.\"",
            "achievement": "Can automate incident response and wake up engineers only when critical failures occur."
          },
          {
            "day": 73,
            "topic": "Centralized Logging (ELK / EFK Stack)",
            "priority": "MUST KNOW",
            "tasks": "Deploy Elasticsearch, Fluentd (or Filebeat), and Kibana. Configure Fluentd as a DaemonSet to automatically scrape all Pod logs and send them to Elasticsearch.",
            "achievement": "Can instantly search through logs across 100s of containers from a single UI."
          },
          {
            "day": 74,
            "topic": "OpenTelemetry (OTel)",
            "priority": "MUST KNOW",
            "tasks": "Study the OpenTelemetry standard. Instrument a microservice to generate distributed traces. Deploy an OTel Collector to receive and forward them to Jaeger.",
            "achievement": "Can implement vendor-agnostic observability instrumentation."
          },
          {
            "day": 75,
            "topic": "Service Mesh (Istio Fundamentals)",
            "priority": "IMPORTANT",
            "tasks": "Study what a Service Mesh is. Understand how injecting Envoy sidecar proxies enables mTLS (mutual TLS) and advanced routing without changing application code.",
            "achievement": "Can explain how massive enterprises secure and route microservice traffic internally."
          },
          {
            "day": 76,
            "topic": "Phase 3 Capstone - Cluster Setup",
            "priority": "MUST KNOW",
            "tasks": "Provision an EKS Cluster via Terraform. Install ArgoCD, Ingress Controller, and the Prometheus stack via Helm.",
            "achievement": "Can build a pristine, automated Kubernetes foundation."
          },
          {
            "day": 77,
            "topic": "Phase 3 Capstone - App Deployment",
            "priority": "MUST KNOW",
            "tasks": "Write a Helm chart for a 3-tier application. Push it to Git. Let ArgoCD deploy it. Prove the app is running, logging to EFK, and monitored by Grafana.",
            "achievement": "Can operate a complete, modern Cloud-Native ecosystem."
          }
        ]
      },
      {
        "id": "5-4",
        "title": "MLOPS & AI INFRASTRUCTURE",
        "days": "Days 78–104",
        "items": [
          {
            "day": 78,
            "topic": "Introduction to MLOps",
            "priority": "MUST KNOW",
            "tasks": "Study the difference between DevOps and MLOps. Understand why tracking code versions is not enough—you must track Data versions and Model versions.",
            "achievement": "Can explain the massive operational complexity of deploying AI to production."
          },
          {
            "day": 79,
            "topic": "Data Version Control (DVC)",
            "priority": "MUST KNOW",
            "tasks": "Stop pushing CSVs to Git! Use `dvc` to version a 5GB dataset, store the data in S3, and push only the lightweight `.dvc` pointer file to Git.",
            "achievement": "Can safely manage and collaborate on massive datasets without crashing GitHub."
          },
          {
            "day": 80,
            "topic": "Experiment Tracking (Weights & Biases)",
            "priority": "MUST KNOW",
            "tasks": "Integrate W&B (or MLflow) into a PyTorch training script. Automatically log hyperparameters, loss curves, and validation accuracy to a cloud dashboard.",
            "achievement": "Can mathematically prove which model training run performed the best over time."
          },
          {
            "day": 81,
            "topic": "Model Registry (MLflow)",
            "priority": "MUST KNOW",
            "tasks": "Set up an MLflow tracking server. Register a newly trained XGBoost model. Transition its state from \"Staging\" to \"Production\" via the UI or API.",
            "achievement": "Can maintain a single source of truth for all production-ready AI models."
          },
          {
            "day": 82,
            "topic": "Automated Model Retraining",
            "priority": "MUST KNOW",
            "tasks": "Write a GitHub Actions pipeline that triggers when data changes in DVC: Downloads data, trains the model, evaluates it, and registers it to MLflow if accuracy > 90%.",
            "achievement": "Can automate the continuous learning cycle of an AI system."
          },
          {
            "day": 83,
            "topic": "Model Serialization & Optimization",
            "priority": "MUST KNOW",
            "tasks": "Study Pickle vs Joblib vs Safetensors. Convert a PyTorch model to ONNX (Open Neural Network Exchange) format to decouple it from Python.",
            "achievement": "Can prepare a trained model for high-speed, cross-platform inference."
          },
          {
            "day": 84,
            "topic": "High-Performance Model Serving",
            "priority": "MUST KNOW",
            "tasks": "Stop using basic Flask! Wrap your ONNX model using FastAPI, Ray Serve, or Nvidia Triton Inference Server to handle concurrent inference requests.",
            "achievement": "Can serve AI models with drastically reduced latency and higher throughput."
          },
          {
            "day": 85,
            "topic": "Serving Models on Kubernetes",
            "priority": "MUST KNOW",
            "tasks": "Dockerize your model server. Deploy it to your EKS cluster. Configure a Horizontal Pod Autoscaler (HPA) to scale up pods when CPU usage spikes during inference.",
            "achievement": "Can architect AI APIs that handle massive viral traffic automatically."
          },
          {
            "day": 86,
            "topic": "GPU Orchestration in K8s",
            "priority": "MUST KNOW",
            "tasks": "Study how to provision GPU-enabled EC2 nodes in EKS. Configure the Nvidia Device Plugin to allow K8s Pods to request `nvidia.com/gpu: 1`.",
            "achievement": "Can manage and allocate highly expensive AI hardware effectively in a cluster."
          },
          {
            "day": 87,
            "topic": "vLLM for LLM Serving",
            "priority": "MUST KNOW",
            "tasks": "Deep dive into serving Large Language Models. Deploy an open-source model using vLLM. Understand PagedAttention and continuous batching.",
            "achievement": "Can serve 7B parameter models 10x faster than standard Hugging Face pipelines."
          },
          {
            "day": 88,
            "topic": "Feature Stores (Feast)",
            "priority": "IMPORTANT",
            "tasks": "Study the concept of a Feature Store. Understand how it prevents training-serving skew by providing a unified repository for machine learning features.",
            "achievement": "Can architect data architectures that ensure models receive the exact same data formats in prod as they did in training."
          },
          {
            "day": 89,
            "topic": "Data Drift & Concept Drift",
            "priority": "MUST KNOW",
            "tasks": "Study why models degrade over time. Understand Data Drift (inputs change) vs Concept Drift (the real-world relationship changes, e.g., inflation affecting housing prices).",
            "achievement": "Can identify exactly when and why an AI model needs to be retrained."
          },
          {
            "day": 90,
            "topic": "Model Monitoring (Evidently AI)",
            "priority": "MUST KNOW",
            "tasks": "Deploy Evidently AI to monitor production inference data. Generate reports comparing the statistical distribution of yesterday's live data to the original training data.",
            "achievement": "Can automatically detect \"silent failures\" where a model is technically running, but predicting garbage."
          },
          {
            "day": 91,
            "topic": "Shadow Deployments",
            "priority": "MUST KNOW",
            "tasks": "Deploy a new V2 model alongside V1. Route a copy of real user traffic to V2, but do not return V2's answers. Compare the outputs asynchronously.",
            "achievement": "Can safely test experimental AI models using real-world data with zero user risk."
          },
          {
            "day": 92,
            "topic": "A/B Testing AI Models",
            "priority": "MUST KNOW",
            "tasks": "Route 10% of traffic to Model B. Track business metrics (e.g., click-through rate). Perform statistical significance testing to determine if Model B is actually better.",
            "achievement": "Can prove the ROI of a new AI model to business stakeholders."
          },
          {
            "day": 93,
            "topic": "Apache Kafka for Streaming MLOps",
            "priority": "MUST KNOW",
            "tasks": "Set up a Kafka cluster. Stream user click data into a topic, process it in real-time, and feed it into a recommendation model for instant personalized updates.",
            "achievement": "Can build real-time, event-driven AI applications."
          },
          {
            "day": 94,
            "topic": "Prompt Versioning & Management",
            "priority": "MUST KNOW",
            "tasks": "Set up a git-based or registry-based prompt management system (e.g. LangChain Hub or custom prompt registry). Implement semantic versioning for prompts and log variations.",
            "achievement": "Can track prompt templates independently of application code, ensuring zero-downtime prompt hot-fixes."
          },
          {
            "day": 95,
            "topic": "AI Evaluation Pipelines & CI/CD",
            "priority": "MUST KNOW",
            "tasks": "Build a CI/CD pipeline that automatically evaluates prompts and model responses using LLM-as-a-judge frameworks. Reject deployment if semantic accuracy drops.",
            "achievement": "Can automate AI quality assurance during CI/CD to prevent regressions in user-facing model interfaces."
          },
          {
            "day": 96,
            "topic": "Data Orchestration (Airflow/Prefect)",
            "priority": "MUST KNOW",
            "tasks": "Write a complex Directed Acyclic Graph (DAG) that coordinates data extraction, cleaning, DVC updating, and model training across multiple distributed systems.",
            "achievement": "Can reliably manage the tangled web of data engineering tasks required for AI."
          },
          {
            "day": 97,
            "topic": "AI Security: Model Poisoning",
            "priority": "MUST KNOW",
            "tasks": "Study how attackers can inject malicious data into automated training pipelines to fundamentally compromise the resulting model.",
            "achievement": "Can secure MLOps pipelines against advanced adversarial attacks."
          },
          {
            "day": 98,
            "topic": "Cost Optimization (Spot Instances)",
            "priority": "MUST KNOW",
            "tasks": "Configure your EKS node groups to use AWS Spot Instances for model training jobs, saving up to 90% on compute costs while handling interruptions gracefully.",
            "achievement": "Can dramatically reduce the massive cloud bills associated with AI engineering."
          },
          {
            "day": 99,
            "topic": "Kubeflow Fundamentals",
            "priority": "IMPORTANT",
            "tasks": "Study Kubeflow, the machine learning toolkit for Kubernetes. Understand Pipelines, Katib (hyperparameter tuning), and KServe.",
            "achievement": "Can navigate the enterprise standard framework for Kubernetes-native MLOps."
          },
          {
            "day": 100,
            "topic": "Phase 4 Capstone - MLOps Pipeline",
            "priority": "MUST KNOW",
            "tasks": "Combine DVC, MLflow, and GitHub Actions to create a fully automated pipeline that trains a model, versions it, and creates a Dockerized serving API.",
            "achievement": "Can build a production-grade CI/CD pipeline specifically designed for Machine Learning."
          },
          {
            "day": 101,
            "topic": "Phase 4 Capstone - Deployment & Monitoring",
            "priority": "MUST KNOW",
            "tasks": "Deploy the serving API to EKS using ArgoCD. Set up Evidently AI to monitor the incoming inference requests and trigger a Slack alert if data drift occurs.",
            "achievement": "Can architect a self-monitoring, highly scalable AI deployment ecosystem."
          },
          {
            "day": 102,
            "topic": "Interview Prep: CI/CD & Terraform",
            "priority": "MUST KNOW",
            "tasks": "Review state locking, GitOps vs CIOps, and the exact steps to securely manage cloud credentials in pipelines.",
            "achievement": "Ready to dominate the DevOps portion of an engineering interview."
          },
          {
            "day": 103,
            "topic": "Interview Prep: Kubernetes",
            "priority": "MUST KNOW",
            "tasks": "Review Pod lifecycles, Ingress routing, PVCs, and how to troubleshoot a `CrashLoopBackOff`.",
            "achievement": "Ready to pass a rigorous infrastructure and systems interview."
          },
          {
            "day": 104,
            "topic": "Interview Prep: MLOps",
            "priority": "MUST KNOW",
            "tasks": "Review data drift, model registry workflows, and the architectural differences between batch inference and real-time streaming inference.",
            "achievement": "Ready to ace an elite Machine Learning Engineering interview."
          }
        ]
      },
      {
        "id": "5-5",
        "title": "THE FINAL MILE",
        "days": "Days 105–114",
        "items": [
          {
            "day": 105,
            "topic": "Portfolio Polish: Infrastructure",
            "priority": "MUST KNOW",
            "tasks": "Clean up your Terraform repository. Add a pristine README.md with architecture diagrams made in Excalidraw or draw.io.",
            "achievement": "Can present your infrastructure skills professionally to recruiters."
          },
          {
            "day": 106,
            "topic": "Portfolio Polish: MLOps",
            "priority": "MUST KNOW",
            "tasks": "Document your MLOps pipeline project. Explain the exact drift metrics you chose and why. Highlight the GitOps deployment flow.",
            "achievement": "Can prove you understand the complete AI lifecycle, not just Jupyter Notebooks."
          },
          {
            "day": 107,
            "topic": "System Design Mock: Scale",
            "priority": "MUST KNOW",
            "tasks": "Design a system that handles 1 million requests per second. Focus on Load Balancers, Redis caching, and Database Sharding.",
            "achievement": "Can confidently architect extreme-scale web applications."
          },
          {
            "day": 108,
            "topic": "System Design Mock: Microservices",
            "priority": "MUST KNOW",
            "tasks": "Design an E-Commerce platform. Define the bounded contexts, Kafka event streams, and Saga patterns for distributed transactions.",
            "achievement": "Can navigate the complexities of distributed system architecture."
          },
          {
            "day": 109,
            "topic": "System Design Mock: MLOps",
            "priority": "MUST KNOW",
            "tasks": "Design an automated retraining pipeline for a fraud detection model that ingests 5TB of streaming data daily.",
            "achievement": "Can architect massive, real-time AI data pipelines under pressure."
          },
          {
            "day": 110,
            "topic": "Behavioral Prep (STAR Method)",
            "priority": "MUST KNOW",
            "tasks": "Prepare 5 stories using Situation, Task, Action, Result. Focus on \"a time you failed,\" \"resolving a conflict,\" and \"learning a new tech rapidly.\"",
            "achievement": "Can pass the crucial cultural and behavioral fit interviews."
          },
          {
            "day": 111,
            "topic": "Resume Review",
            "priority": "MUST KNOW",
            "tasks": "Ensure every bullet point includes metrics (e.g., \"Reduced deployment time by 80% using GitHub Actions\"). Remove basic tutorials.",
            "achievement": "Can craft a resume that bypasses ATS filters and impresses hiring managers."
          },
          {
            "day": 112,
            "topic": "The Soft Skills of DevOps",
            "priority": "MUST KNOW",
            "tasks": "Study Site Reliability Engineering (SRE) culture. Understand Error Budgets, Service Level Objectives (SLOs), and Blameless Post-Mortems.",
            "achievement": "Can integrate seamlessly into elite engineering cultures."
          },
          {
            "day": 113,
            "topic": "The Future of AI Infrastructure",
            "priority": "IMPORTANT",
            "tasks": "Read about the future of GPUs, specialized AI chips (TPUs/Groq), and the shifting landscape of foundational models.",
            "achievement": "Can hold high-level strategic conversations with senior technical leaders."
          },
          {
            "day": 114,
            "topic": "Ultimate Graduation",
            "priority": "MUST KNOW",
            "tasks": "Reflect on mastering AWS, Kubernetes, Terraform, and MLOps. You have bridged the gap between code and reality.",
            "achievement": "You are now an Elite DevOps & MLOps Engineer."
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "title": "Java Core & Advanced",
    "days": 104,
    "color": "rose",
    "phases": [
      {
        "id": "6-1",
        "title": "JAVA BASICS & SYNTAX",
        "days": "Days 1–15",
        "items": [
          {
            "day": 1,
            "topic": "Introduction to Java & JVM Architecture",
            "priority": "MUST KNOW",
            "tasks": "Learn what makes Java \"write once, run anywhere.\" Understand the relationship between JDK, JRE, and JVM. Learn the compile-to-bytecode-then-interpret/JIT model.",
            "achievement": "Can explain the journey of a .java file from source code to execution, naming each component involved."
          },
          {
            "day": 2,
            "topic": "Variables, Data Types & Literals",
            "priority": "MUST KNOW",
            "tasks": "Study primitive types (byte, short, int, long, float, double, char, boolean) and their memory sizes. Learn literal notations (hex, octal, binary, underscore in numbers).",
            "achievement": "Can correctly choose the most memory-efficient primitive type for a given value range."
          },
          {
            "day": 3,
            "topic": "Type Casting & Conversion",
            "priority": "MUST KNOW",
            "tasks": "Understand widening (implicit) vs narrowing (explicit) casting. Study overflow behavior when narrowing.",
            "achievement": "Can predict the output of tricky casting expressions involving overflow and precision loss."
          },
          {
            "day": 4,
            "topic": "Operators in Java",
            "priority": "MUST KNOW",
            "tasks": "Cover arithmetic, relational, logical, bitwise, assignment, ternary, and the instanceof operator. Study operator precedence.",
            "achievement": "Can evaluate complex multi-operator expressions by hand, respecting precedence rules."
          },
          {
            "day": 5,
            "topic": "Control Flow: if-else & switch",
            "priority": "MUST KNOW",
            "tasks": "Master if-else-if ladders. Learn classic switch-case with fall-through and the modern switch expression (Java 14+) with arrow syntax and yield.",
            "achievement": "Can rewrite a nested if-else chain as a clean switch expression."
          },
          {
            "day": 6,
            "topic": "Loops: for, while, do-while",
            "priority": "MUST KNOW",
            "tasks": "Study all three loop types, the enhanced for-each loop, labeled breaks/continues, and infinite loop patterns.",
            "achievement": "Can choose the correct loop type for a given iteration scenario and use labeled breaks to exit nested loops cleanly."
          },
          {
            "day": 7,
            "topic": "Arrays (1D & Multi-Dimensional)",
            "priority": "MUST KNOW",
            "tasks": "Learn array declaration, initialization, default values, and memory layout (contiguous block on heap). Study 2D/jagged arrays.",
            "achievement": "Can implement matrix operations using 2D arrays and explain why array access is O(1)."
          },
          {
            "day": 8,
            "topic": "Array Utility Methods (Arrays class)",
            "priority": "MUST KNOW",
            "tasks": "Study Arrays.sort(), Arrays.binarySearch(), Arrays.fill(), Arrays.copyOf(), and Arrays.equals().",
            "achievement": "Can use built-in utilities instead of hand-rolling common array operations."
          },
          {
            "day": 9,
            "topic": "Methods: Declaration, Overloading",
            "priority": "MUST KNOW",
            "tasks": "Learn method signatures, return types, parameter passing (pass-by-value for primitives, pass-by-reference-value for objects). Study method overloading rules.",
            "achievement": "Can explain why Java is technically \"pass-by-value\" even for objects, using a clear example."
          },
          {
            "day": 10,
            "topic": "Varargs & Recursion",
            "priority": "MUST KNOW",
            "tasks": "Study variable-length arguments (...). Deep dive into recursion: base case, recursive case, call stack visualization.",
            "achievement": "Can write a recursive function and manually trace its call stack to detect a missing base case."
          },
          {
            "day": 11,
            "topic": "Strings: Basics & Immutability",
            "priority": "MUST KNOW",
            "tasks": "Learn why Strings are immutable in Java. Study the String Pool (intern pool) and new String() vs literal creation.",
            "achievement": "Can explain with a diagram why s1 == s2 may be true or false depending on creation method."
          },
          {
            "day": 12,
            "topic": "StringBuilder & StringBuffer",
            "priority": "MUST KNOW",
            "tasks": "Understand why mutable string builders exist. Compare StringBuilder (non-thread-safe, fast) vs StringBuffer (thread-safe, synchronized).",
            "achievement": "Can refactor a string-concatenation-in-a-loop anti-pattern into an efficient StringBuilder-based solution."
          },
          {
            "day": 13,
            "topic": "Wrapper Classes & Autoboxing",
            "priority": "MUST KNOW",
            "tasks": "Study Integer, Double, Boolean, etc. Understand autoboxing/unboxing and the Integer cache (-128 to 127).",
            "achievement": "Can explain the classic Integer i1 = 127; Integer i2 = 127; vs 200 comparison gotcha."
          },
          {
            "day": 14,
            "topic": "Scanner, User Input & Basic I/O",
            "priority": "MUST KNOW",
            "tasks": "Learn to read console input using Scanner and BufferedReader. Compare their performance and use cases.",
            "achievement": "Can write a program that robustly reads mixed input types (int, String, double) from the console."
          },
          {
            "day": 15,
            "topic": "Phase 1 Review: Mini Project",
            "priority": "MUST KNOW",
            "tasks": "Build a small console app (e.g., a basic calculator or grade calculator) using only Phase 1 concepts.",
            "achievement": "Can confidently write a complete, working Java program without an IDE's auto-complete."
          }
        ]
      },
      {
        "id": "6-2",
        "title": "OBJECT-ORIENTED PROGRAMMING",
        "days": "Days 16–35",
        "items": [
          {
            "day": 16,
            "topic": "Classes & Objects Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Learn class structure, fields, methods, and object instantiation. Understand the this keyword and object references on the heap.",
            "achievement": "Can draw a memory diagram showing stack references pointing to heap objects."
          },
          {
            "day": 17,
            "topic": "Constructors & Constructor Overloading",
            "priority": "MUST KNOW",
            "tasks": "Study default, parameterized, and copy constructors. Learn constructor chaining with this().",
            "achievement": "Can design a class with multiple constructors that avoid code duplication via chaining."
          },
          {
            "day": 18,
            "topic": "The Four Pillars of OOP (Overview)",
            "priority": "MUST KNOW",
            "tasks": "Get a conceptual overview of Encapsulation, Abstraction, Inheritance, and Polymorphism before going deep on each.",
            "achievement": "Can give a one-sentence, interview-ready definition of each pillar with a real-world analogy."
          },
          {
            "day": 19,
            "topic": "Encapsulation & Access Modifiers",
            "priority": "MUST KNOW",
            "tasks": "Study public, private, protected, and default (package-private) access. Learn getter/setter conventions and why encapsulation matters.",
            "achievement": "Can design a class that fully protects its internal state while exposing a clean public API."
          },
          {
            "day": 20,
            "topic": "Static Keyword Deep Dive",
            "priority": "MUST KNOW",
            "tasks": "Understand static variables, static methods, static blocks, and static nested classes. Learn class-loading-time initialization order.",
            "achievement": "Can trace the exact execution order of static blocks, instance blocks, and constructors when an object is created."
          },
          {
            "day": 21,
            "topic": "Inheritance Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Learn extends, the super keyword, and constructor chaining in inheritance hierarchies. Understand why Java doesn't support multiple class inheritance.",
            "achievement": "Can design a 3-level class hierarchy and explain the diamond problem Java avoids."
          },
          {
            "day": 22,
            "topic": "Method Overriding & the @Override Annotation",
            "priority": "MUST KNOW",
            "tasks": "Study overriding rules (signature, access modifier widening, covariant return types). Compare overriding vs overloading directly.",
            "achievement": "Can list 5 rules that must be satisfied for valid method overriding."
          },
          {
            "day": 23,
            "topic": "Polymorphism: Compile-Time vs Runtime",
            "priority": "MUST KNOW",
            "tasks": "Deep dive into static binding (overloading) vs dynamic binding (overriding). Study upcasting and downcasting with instanceof checks.",
            "achievement": "Can explain dynamic method dispatch and predict output of polymorphic method calls through a class hierarchy."
          },
          {
            "day": 24,
            "topic": "Abstract Classes",
            "priority": "MUST KNOW",
            "tasks": "Learn abstract classes and abstract methods. Understand when a class must be declared abstract and constructor rules for abstract classes.",
            "achievement": "Can design an abstract base class that enforces a contract while sharing common implementation."
          },
          {
            "day": 25,
            "topic": "Interfaces Deep Dive",
            "priority": "MUST KNOW",
            "tasks": "Study interface declaration, multiple interface implementation, and constant fields. Learn default and static methods in interfaces (Java 8+).",
            "achievement": "Can explain how default methods solve the \"interface evolution\" problem without breaking existing implementers."
          },
          {
            "day": 26,
            "topic": "Abstract Class vs Interface",
            "priority": "MUST KNOW",
            "tasks": "Compare use cases directly: \"is-a\" vs \"can-do\" relationships, state vs pure contract, single vs multiple inheritance.",
            "achievement": "Can justify, in an interview setting, when to choose an abstract class over an interface and vice versa."
          },
          {
            "day": 27,
            "topic": "Composition vs Inheritance",
            "priority": "MUST KNOW",
            "tasks": "Study \"has-a\" vs \"is-a\" relationships in depth. Learn the delegation pattern, and why Effective Java's \"favor composition over inheritance\" guideline exists. Study real Spring examples (a service class composing repository/utility dependencies rather than extending them).",
            "achievement": "Can refactor a fragile inheritance hierarchy into a composition-based design and explain, with a concrete example, why it's more maintainable."
          },
          {
            "day": 28,
            "topic": "Immutability & Defensive Copying",
            "priority": "MUST KNOW",
            "tasks": "Learn how to design a fully immutable class (final fields, no setters, no mutator methods). Study defensive copying for mutable fields (arrays, Date, collections) in both constructors and getters. Understand why immutability matters for thread safety and for backend DTOs. Compare hand-rolled immutable classes vs Java records.",
            "achievement": "Can design an immutable class containing a mutable field (e.g., a List or Date) without leaking a reference to internal state."
          },
          {
            "day": 29,
            "topic": "SOLID Principles in Java",
            "priority": "MUST KNOW",
            "tasks": "Study all five SOLID principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) with concrete Java code examples for each. Identify common SOLID violations in poorly designed code and how to fix them. Connect Dependency Inversion directly to how Spring's DI container works.",
            "achievement": "Can review a Java class that violates 2–3 SOLID principles and refactor it while explaining which principle each fix satisfies."
          },
          {
            "day": 30,
            "topic": "Object Class Methods",
            "priority": "MUST KNOW",
            "tasks": "Study equals(), hashCode(), toString(), clone(), and getClass() from java.lang.Object. Learn the equals-hashCode contract.",
            "achievement": "Can correctly override equals() and hashCode() together for a custom class used in a HashMap."
          },
          {
            "day": 31,
            "topic": "Object Cloning (Shallow vs Deep)",
            "priority": "MUST KNOW",
            "tasks": "Study the Cloneable interface, shallow copy vs deep copy, and copy constructors as an alternative to clone().",
            "achievement": "Can implement a deep clone for a class containing nested mutable objects."
          },
          {
            "day": 32,
            "topic": "Inner Classes & Nested Classes",
            "priority": "MUST KNOW",
            "tasks": "Learn member inner classes, static nested classes, local classes, and anonymous inner classes. Understand the implicit outer-class reference.",
            "achievement": "Can choose the correct type of nested class for a given encapsulation scenario."
          },
          {
            "day": 33,
            "topic": "Enums Deep Dive",
            "priority": "MUST KNOW",
            "tasks": "Study enums as type-safe constants, enums with fields/methods/constructors, and abstract methods inside enums.",
            "achievement": "Can design an enum that encapsulates behavior (e.g., a calculator operation enum with an abstract apply() method)."
          },
          {
            "day": 34,
            "topic": "Packages & Access Control",
            "priority": "MUST KNOW",
            "tasks": "Learn package declaration, imports (including static imports), and how packages relate to default access modifiers.",
            "achievement": "Can organize a multi-class project into a clean, logically separated package structure."
          },
          {
            "day": 35,
            "topic": "Phase 2 Review: OOP Mini Project",
            "priority": "MUST KNOW",
            "tasks": "Design a small system (e.g., a Library Management or Shape Calculator) using inheritance, interfaces, composition, immutability, and SOLID principles together.",
            "achievement": "Can confidently model a real-world domain using all four OOP pillars plus composition and SOLID in a cohesive class design."
          }
        ]
      },
      {
        "id": "6-3",
        "title": "COLLECTIONS, GENERICS & STRINGS",
        "days": "Days 36–55",
        "items": [
          {
            "day": 36,
            "topic": "Collections Framework Overview",
            "priority": "MUST KNOW",
            "tasks": "Study the Collection hierarchy: List, Set, Queue, Map interfaces and their relationship to Iterable and Collection.",
            "achievement": "Can draw the full Collections Framework hierarchy diagram from memory."
          },
          {
            "day": 37,
            "topic": "ArrayList Deep Dive",
            "priority": "MUST KNOW",
            "tasks": "Study internal array-backed implementation, dynamic resizing (growth factor), and time complexity of get/add/remove.",
            "achievement": "Can explain why ArrayList.add() is amortized O(1) but remove(0) is O(n)."
          },
          {
            "day": 38,
            "topic": "LinkedList Deep Dive",
            "priority": "MUST KNOW",
            "tasks": "Study doubly-linked-list internal structure. Compare ArrayList vs LinkedList trade-offs for different access patterns.",
            "achievement": "Can recommend ArrayList or LinkedList based on whether a use case is read-heavy or insert/delete-heavy."
          },
          {
            "day": 39,
            "topic": "Iterator & ListIterator",
            "priority": "MUST KNOW",
            "tasks": "Learn safe iteration and removal using Iterator. Understand ConcurrentModificationException and fail-fast behavior.",
            "achievement": "Can safely remove elements from a list while iterating, without triggering ConcurrentModificationException."
          },
          {
            "day": 40,
            "topic": "HashSet & LinkedHashSet",
            "priority": "MUST KNOW",
            "tasks": "Study how HashSet uses hashCode()/equals() internally (backed by HashMap). Learn LinkedHashSet's insertion-order guarantee.",
            "achievement": "Can explain why a custom object needs a correct hashCode() override to work properly in a HashSet."
          },
          {
            "day": 41,
            "topic": "TreeSet & Sorted Collections",
            "priority": "MUST KNOW",
            "tasks": "Study TreeSet's Red-Black tree backing, natural ordering via Comparable, and custom ordering via Comparator.",
            "achievement": "Can implement Comparable and a separate Comparator for the same class to support two different sort orders."
          },
          {
            "day": 42,
            "topic": "HashMap Internals (Deep Dive)",
            "priority": "MUST KNOW",
            "tasks": "Study bucket array, hashing, collision handling (linked list → red-black tree conversion since Java 8), load factor, and resizing.",
            "achievement": "Can explain step-by-step what happens internally when put() is called and a hash collision occurs."
          },
          {
            "day": 43,
            "topic": "Hashing Internals Deep Dive",
            "priority": "MUST KNOW",
            "tasks": "Go deeper than HashMap mechanics into hash function design itself. Study the hashCode() contract in detail (equal objects must have equal hash codes), collision resolution strategies (chaining vs open addressing — linear/quadratic probing, double hashing), and the mathematics behind load factor and rehashing thresholds. Study why String and Integer's hashCode() implementations are designed the way they are (distribution quality, avoiding clustering).",
            "achievement": "Can design a custom hashCode() for a multi-field class that minimizes collisions and explain the trade-off between a fast hash and a well-distributed hash."
          },
          {
            "day": 44,
            "topic": "LinkedHashMap & TreeMap",
            "priority": "MUST KNOW",
            "tasks": "Learn LinkedHashMap's access-order mode (useful for LRU caches) and TreeMap's sorted-key navigation methods (firstKey, ceilingKey, etc.).",
            "achievement": "Can implement a basic LRU cache using LinkedHashMap's access-order feature."
          },
          {
            "day": 45,
            "topic": "Map Iteration & Common Patterns",
            "priority": "MUST KNOW",
            "tasks": "Study entrySet(), keySet(), values() iteration, and Java 8 methods: computeIfAbsent, merge, getOrDefault, forEach.",
            "achievement": "Can refactor verbose null-check-heavy Map code into clean one-liners using modern Map methods."
          },
          {
            "day": 46,
            "topic": "Queue, Deque & PriorityQueue",
            "priority": "MUST KNOW",
            "tasks": "Study FIFO Queue semantics, Deque as both stack and queue, and PriorityQueue's heap-based ordering.",
            "achievement": "Can use a PriorityQueue with a custom comparator to solve a \"find K largest elements\" problem."
          },
          {
            "day": 47,
            "topic": "Stack & Algorithm Use Cases",
            "priority": "MUST KNOW",
            "tasks": "Study the Stack class (and Deque-as-stack preference). Practice classic use cases: balanced parentheses, expression evaluation.",
            "achievement": "Can solve a balanced-bracket-validation problem using a stack in under 10 minutes."
          },
          {
            "day": 48,
            "topic": "Generics Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Learn why generics exist (compile-time type safety), generic classes, generic methods, and type erasure.",
            "achievement": "Can explain what \"type erasure\" means and why you can't do new T[] directly in Java."
          },
          {
            "day": 49,
            "topic": "Generic Type Erasure — Full Deep Dive",
            "priority": "MUST KNOW",
            "tasks": "Go beyond the type erasure overview into bridge methods (generated by the compiler for overridden generic methods), raw types and their dangers, reflection's limitations when inspecting generic type parameters at runtime, heap pollution scenarios, and the purpose of @SafeVarargs.",
            "achievement": "Can explain, with a code example, why heap pollution occurs with varargs and generics, and how @SafeVarargs addresses it."
          },
          {
            "day": 50,
            "topic": "Bounded Types & Wildcards",
            "priority": "MUST KNOW",
            "tasks": "Study bounded type parameters (<T extends Number>), and wildcards (? extends, ? super). Learn PECS (Producer Extends, Consumer Super).",
            "achievement": "Can correctly apply the PECS principle when designing a generic method that copies between collections."
          },
          {
            "day": 51,
            "topic": "Comparable vs Comparator",
            "priority": "MUST KNOW",
            "tasks": "Deep dive into the differences, multi-field comparator chaining (thenComparing), and lambda-based comparators.",
            "achievement": "Can write a chained comparator that sorts objects by multiple fields in one line using Java 8 syntax."
          },
          {
            "day": 52,
            "topic": "Collections Utility Class",
            "priority": "MUST KNOW",
            "tasks": "Study Collections.sort(), Collections.unmodifiableList(), Collections.synchronizedList(), and Collections.emptyList().",
            "achievement": "Can correctly make a collection read-only or thread-safe using built-in utility wrappers."
          },
          {
            "day": 53,
            "topic": "String Internals: Pool & Memory",
            "priority": "MUST KNOW",
            "tasks": "Revisit String pool with the lens of intern(), memory implications of large numbers of string literals, and why Strings are good HashMap keys.",
            "achievement": "Can explain why caching immutable Strings is safe across multiple threads without synchronization."
          },
          {
            "day": 54,
            "topic": "Regular Expressions in Java",
            "priority": "MUST KNOW",
            "tasks": "Learn Pattern and Matcher classes, common regex syntax, and String's built-in regex methods (matches, replaceAll, split).",
            "achievement": "Can write a regex to validate an email format and extract groups from a matched string."
          },
          {
            "day": 55,
            "topic": "Phase 3 Review: Data Structures Project",
            "priority": "MUST KNOW",
            "tasks": "Build a small inventory or contact-management system using the right mix of List, Map, Set, and Generics.",
            "achievement": "Can justify every collection choice made in the project based on its access pattern requirements."
          }
        ]
      },
      {
        "id": "6-4",
        "title": "EXCEPTION HANDLING, I/O, REFLECTION & ANNOTATIONS",
        "days": "Days 56–67",
        "items": [
          {
            "day": 56,
            "topic": "Exception Hierarchy & Basics",
            "priority": "MUST KNOW",
            "tasks": "Study the Throwable hierarchy: Error vs Exception, checked vs unchecked exceptions. Learn try-catch-finally mechanics.",
            "achievement": "Can correctly classify any given exception as checked or unchecked and explain why the distinction matters."
          },
          {
            "day": 57,
            "topic": "Multi-Catch, Try-With-Resources",
            "priority": "MUST KNOW",
            "tasks": "Learn multi-catch blocks, the AutoCloseable interface, and try-with-resources for automatic resource cleanup.",
            "achievement": "Can convert a verbose finally-based resource-closing block into clean try-with-resources syntax."
          },
          {
            "day": 58,
            "topic": "Custom Exceptions",
            "priority": "MUST KNOW",
            "tasks": "Learn to design meaningful custom checked and unchecked exceptions, including exception chaining (cause).",
            "achievement": "Can design a custom exception hierarchy for a domain (e.g., InsufficientFundsException for a banking app)."
          },
          {
            "day": 59,
            "topic": "Exception Best Practices",
            "priority": "MUST KNOW",
            "tasks": "Study anti-patterns: swallowing exceptions, catching generic Exception, and over-using checked exceptions. Learn fail-fast principles.",
            "achievement": "Can review and fix poorly-handled exception code in a code review setting."
          },
          {
            "day": 60,
            "topic": "File I/O: java.io Basics",
            "priority": "MUST KNOW",
            "tasks": "Learn File, FileReader/FileWriter, BufferedReader/BufferedWriter, and byte streams vs character streams.",
            "achievement": "Can read and write a text file line-by-line using buffered streams efficiently."
          },
          {
            "day": 61,
            "topic": "NIO.2 (java.nio.file)",
            "priority": "MUST KNOW",
            "tasks": "Study the modern Path, Files, and Paths APIs introduced in Java 7+. Compare with legacy java.io.",
            "achievement": "Can perform common file operations (copy, move, delete, walk a directory tree) using the NIO.2 API."
          },
          {
            "day": 62,
            "topic": "Serialization & Deserialization",
            "priority": "MUST KNOW",
            "tasks": "Learn the Serializable interface, serialVersionUID, transient keyword, and the security risks of native Java serialization.",
            "achievement": "Can explain why transient fields are excluded and why deserialization of untrusted data is a security risk."
          },
          {
            "day": 63,
            "topic": "Serialization Alternatives",
            "priority": "MUST KNOW",
            "tasks": "Study why native Java serialization is largely avoided in modern backend systems (versioning fragility, security risk, performance). Learn how JSON serialization works under the hood (Jackson's ObjectMapper mechanics — reflection + annotations), and get an overview of Protobuf (schema-defined binary serialization). Build a comparison table covering size, speed, schema evolution, and security for native serialization vs JSON vs Protobuf.",
            "achievement": "Can justify, in an interview setting, why a production Spring Boot API uses JSON (Jackson) instead of native Java serialization, and when Protobuf would be the better choice."
          },
          {
            "day": 64,
            "topic": "Reflection API (Part 1)",
            "priority": "MUST KNOW",
            "tasks": "Learn the core reflection classes: Class, Method, Field, and Constructor. Study how to obtain a Class object (three ways), use getDeclaredFields()/getDeclaredMethods() to inspect a class at runtime, and invoke methods reflectively using Method.invoke().",
            "achievement": "Can write a small program that, given any object, prints out all its field names, types, and current values using only reflection."
          },
          {
            "day": 65,
            "topic": "Reflection API (Part 2)",
            "priority": "MUST KNOW",
            "tasks": "Learn how to access and modify private fields/methods using setAccessible(true), and study the performance cost of reflection versus direct calls. Connect this directly to backend frameworks: study why Spring depends on reflection for bean instantiation, constructor/field injection resolution, and how @Autowired is satisfied behind the scenes.",
            "achievement": "Can explain, step by step, what Spring does with reflection between scanning a @Component-annotated class and having a fully wired bean ready in the ApplicationContext."
          },
          {
            "day": 66,
            "topic": "Annotations Deep Dive (Part 1)",
            "priority": "MUST KNOW",
            "tasks": "Study Java's built-in annotations: @Override, @Deprecated, @FunctionalInterface, @SuppressWarnings, and @SafeVarargs. Learn the four key meta-annotations that control annotation behavior: @Retention (SOURCE/CLASS/RUNTIME), @Target, @Documented, and @Inherited.",
            "achievement": "Can explain why an annotation meant to be read by Spring at runtime (like @Service) must use @Retention(RUNTIME), while @Override does not need runtime retention."
          },
          {
            "day": 67,
            "topic": "Annotations Deep Dive (Part 2)",
            "priority": "MUST KNOW",
            "tasks": "Design a custom annotation from scratch (e.g., a @LogExecutionTime annotation), including its meta-annotations. Get an overview of annotation processing (compile-time vs runtime processing). Study how Spring scans the classpath for annotations like @Component, @RestController, and @Service, and how that scanning result drives bean registration.",
            "achievement": "Can design and \"read\" (via reflection) a custom annotation end-to-end, explaining the full lifecycle from declaration to runtime inspection."
          },
          {
            "day": "67b",
            "topic": "Phase 4 Review: Robust File Processor",
            "priority": "MUST KNOW",
            "tasks": "Build a small program that reads a file, processes records, and handles all failure modes (missing file, bad data) with proper exceptions.",
            "achievement": "Can build a program that never crashes ungracefully, regardless of malformed input."
          }
        ]
      },
      {
        "id": "6-5",
        "title": "MULTITHREADING & CONCURRENCY",
        "days": "Days 68–86",
        "items": [
          {
            "day": 68,
            "topic": "Process vs Thread & Thread Basics",
            "priority": "MUST KNOW",
            "tasks": "Understand the difference between processes and threads. Learn the Thread class, Runnable interface, and thread lifecycle states.",
            "achievement": "Can draw and explain the full thread lifecycle diagram (New → Runnable → Running → Blocked/Waiting → Terminated)."
          },
          {
            "day": 69,
            "topic": "Creating Threads: Thread vs Runnable",
            "priority": "MUST KNOW",
            "tasks": "Compare extending Thread vs implementing Runnable. Learn why implementing Runnable is generally preferred.",
            "achievement": "Can explain why implementing Runnable allows for better design flexibility than extending Thread."
          },
          {
            "day": 70,
            "topic": "Thread Synchronization Basics",
            "priority": "MUST KNOW",
            "tasks": "Study race conditions with a hands-on example (e.g., two threads incrementing a shared counter). Learn the synchronized keyword on methods and blocks.",
            "achievement": "Can reproduce a race condition in code, then fix it using synchronized."
          },
          {
            "day": 71,
            "topic": "Intrinsic Locks & Monitor Concept",
            "priority": "MUST KNOW",
            "tasks": "Deep dive into how synchronized works using the object monitor concept. Study reentrant locking behavior.",
            "achievement": "Can explain why a thread holding a lock can re-enter another synchronized method on the same object without deadlocking itself."
          },
          {
            "day": 72,
            "topic": "Deadlock, Livelock & Starvation",
            "priority": "MUST KNOW",
            "tasks": "Study the four conditions for deadlock. Reproduce a classic two-lock deadlock scenario and learn prevention strategies (lock ordering).",
            "achievement": "Can identify a deadlock-prone code pattern and redesign it using consistent lock ordering."
          },
          {
            "day": 73,
            "topic": "volatile Keyword & Memory Visibility",
            "priority": "MUST KNOW",
            "tasks": "Study the Java Memory Model (JMM), CPU caching issues, and how volatile guarantees visibility (but not atomicity).",
            "achievement": "Can explain why volatile alone is insufficient for a counter increment but sufficient for a simple flag."
          },
          {
            "day": 74,
            "topic": "Java Memory Model (JMM) Deep Dive",
            "priority": "MUST KNOW",
            "tasks": "Go far beyond the volatile-level intro. Study the happens-before relationship formally, visibility guarantees across threads, instruction/compiler reordering, and memory barriers. Connect this theory back to exactly how synchronized, volatile, and Lock implementations achieve their guarantees under the hood.",
            "achievement": "Can explain, using the happens-before relationship, why a non-volatile flag written by one thread might never be seen by another thread, even without a compiler bug."
          },
          {
            "day": 75,
            "topic": "wait(), notify(), notifyAll()",
            "priority": "MUST KNOW",
            "tasks": "Learn low-level thread coordination using Object's wait/notify mechanism. Build a classic Producer-Consumer example.",
            "achievement": "Can implement a working Producer-Consumer pattern using wait() and notifyAll() from scratch."
          },
          {
            "day": 76,
            "topic": "java.util.concurrent.atomic",
            "priority": "MUST KNOW",
            "tasks": "Study AtomicInteger, AtomicLong, and AtomicReference. Understand Compare-And-Swap (CAS) as a lock-free alternative.",
            "achievement": "Can replace a synchronized counter with an AtomicInteger and explain the underlying CAS performance benefit."
          },
          {
            "day": 77,
            "topic": "Lock Interface & ReentrantLock",
            "priority": "MUST KNOW",
            "tasks": "Study the Lock interface, ReentrantLock, tryLock() with timeout, and fairness policies. Compare with synchronized.",
            "achievement": "Can justify when to choose ReentrantLock over synchronized (e.g., needing tryLock or interruptible locking)."
          },
          {
            "day": 78,
            "topic": "ReadWriteLock & StampedLock",
            "priority": "MUST KNOW",
            "tasks": "Learn ReentrantReadWriteLock for read-heavy/write-light scenarios, and an overview of StampedLock's optimistic reading.",
            "achievement": "Can design a thread-safe cache that allows many concurrent readers but exclusive writers."
          },
          {
            "day": 79,
            "topic": "Executor Framework Basics",
            "priority": "MUST KNOW",
            "tasks": "Study ExecutorService, the Executors factory methods (fixed, cached, scheduled thread pools), and why raw thread creation should be avoided.",
            "achievement": "Can choose the correct thread pool type for a given workload (CPU-bound vs I/O-bound)."
          },
          {
            "day": 80,
            "topic": "Callable, Future & CompletableFuture",
            "priority": "MUST KNOW",
            "tasks": "Learn Callable for tasks with return values, Future for blocking retrieval, and CompletableFuture for non-blocking composition (thenApply, thenCombine).",
            "achievement": "Can chain multiple asynchronous operations together using CompletableFuture without blocking threads."
          },
          {
            "day": 81,
            "topic": "ForkJoinPool",
            "priority": "MUST KNOW",
            "tasks": "Study the work-stealing algorithm that powers ForkJoinPool, and learn RecursiveTask (returns a value) vs RecursiveAction (no return value). Understand the direct relationship between ForkJoinPool and parallel streams' internal execution, and learn why ForkJoinPool is unsuitable for blocking I/O workloads.",
            "achievement": "Can explain why calling a blocking I/O operation inside a parallel stream can starve the common ForkJoinPool and degrade unrelated parts of an application."
          },
          {
            "day": 82,
            "topic": "ThreadPoolExecutor Internals",
            "priority": "MUST KNOW",
            "tasks": "Study core pool size, max pool size, queue capacity, and rejection policies. Understand how a custom ThreadPoolExecutor is tuned.",
            "achievement": "Can configure a custom ThreadPoolExecutor with an appropriate queue and rejection policy for a bursty workload."
          },
          {
            "day": 83,
            "topic": "Concurrent Collections",
            "priority": "MUST KNOW",
            "tasks": "Study ConcurrentHashMap internals (segment/bucket-level locking), CopyOnWriteArrayList, and BlockingQueue implementations.",
            "achievement": "Can explain why ConcurrentHashMap outperforms a synchronized HashMap under high contention."
          },
          {
            "day": 84,
            "topic": "Concurrency Utilities: Latches, Barriers, Semaphores",
            "priority": "MUST KNOW",
            "tasks": "Learn CountDownLatch, CyclicBarrier, and Semaphore for coordinating groups of threads.",
            "achievement": "Can use CountDownLatch to make a main thread wait until several worker threads complete initialization."
          },
          {
            "day": 85,
            "topic": "Structured Concurrency & Scoped Values (Java 21+)",
            "priority": "MUST KNOW",
            "tasks": "Learn the StructuredTaskScope API for treating a group of related concurrent subtasks as a single unit of work with a clear parent-child lifecycle and automatic cancellation propagation. Study ScopedValue as a safer, immutable alternative to ThreadLocal for passing context across virtual threads. Learn about virtual thread pinning issues (when a virtual thread gets stuck on a platform thread) and how Java 24 improves this.",
            "achievement": "Can rewrite a manually-coordinated multi-task CompletableFuture workflow using StructuredTaskScope and explain the cancellation/error-propagation benefit gained."
          },
          {
            "day": 86,
            "topic": "Phase 5 Review: Concurrent Application",
            "priority": "MUST KNOW",
            "tasks": "Build a multi-threaded application (e.g., a parallel file processor or a thread-safe task queue) applying executors and concurrent collections together.",
            "achievement": "Can design and defend a complete concurrent system architecture, justifying every synchronization choice."
          }
        ]
      },
      {
        "id": "6-6",
        "title": "JVM INTERNALS & MODERN JAVA",
        "days": "Days 87–104",
        "items": [
          {
            "day": 87,
            "topic": "JVM Architecture Deep Dive",
            "priority": "MUST KNOW",
            "tasks": "Study the Class Loader subsystem, Runtime Data Areas (Method Area, Heap, Stack, PC Registers, Native Stacks), and the Execution Engine.",
            "achievement": "Can draw the complete JVM architecture diagram and explain what lives in each memory area."
          },
          {
            "day": 88,
            "topic": "Class Loading Mechanism",
            "priority": "MUST KNOW",
            "tasks": "Learn the three built-in class loaders (Bootstrap, Platform, Application) and the parent delegation model.",
            "achievement": "Can explain why parent delegation prevents core Java classes from being maliciously overridden."
          },
          {
            "day": 89,
            "topic": "Heap Memory Structure",
            "priority": "MUST KNOW",
            "tasks": "Study Young Generation (Eden, Survivor spaces) and Old Generation. Understand object aging and promotion.",
            "achievement": "Can explain the journey of an object from creation in Eden to potential promotion into Old Gen."
          },
          {
            "day": 90,
            "topic": "Garbage Collection Algorithms",
            "priority": "MUST KNOW",
            "tasks": "Study Mark-and-Sweep, Serial, Parallel, G1, and ZGC garbage collectors at a conceptual level. Learn stop-the-world pauses.",
            "achievement": "Can recommend an appropriate GC algorithm based on application latency vs throughput requirements."
          },
          {
            "day": 91,
            "topic": "Memory Leaks & Common Pitfalls",
            "priority": "MUST KNOW",
            "tasks": "Study common Java memory leak patterns (static collections holding references, unclosed resources, listener leaks), and the role of WeakReference/SoftReference in preventing them.",
            "achievement": "Can identify a memory leak pattern in code and propose a fix using weak references or proper lifecycle management."
          },
          {
            "day": 92,
            "topic": "JVM Profiling & Diagnostic Tools",
            "priority": "MUST KNOW",
            "tasks": "Learn the core JVM diagnostic toolkit: jstack for thread dumps, jmap for heap dumps, JVisualVM for live monitoring, and Java Mission Control (JMC) for production-grade profiling. Practice reading a thread dump to diagnose a deadlock, and a heap dump to identify a suspected memory leak.",
            "achievement": "Can take a thread dump from a hanging application, locate the two threads in a deadlock, and identify exactly which locks they're each waiting on."
          },
          {
            "day": 93,
            "topic": "GC Tuning & JVM Performance Tuning",
            "priority": "MUST KNOW",
            "tasks": "Learn the core heap sizing flags (-Xms, -Xmx, -Xmn), how to enable and read GC logs, and the practical trade-off framework for choosing a GC algorithm based on whether an application prioritizes low pause latency or high throughput.",
            "achievement": "Can read a GC log excerpt, identify whether the application is suffering from frequent minor GCs or long major GC pauses, and recommend a tuning change."
          },
          {
            "day": 94,
            "topic": "Lambda Expressions (Java 8)",
            "priority": "MUST KNOW",
            "tasks": "Learn lambda syntax, functional interfaces, and the @FunctionalInterface annotation. Study effectively-final variable capture.",
            "achievement": "Can convert an anonymous inner class implementation into a clean lambda expression."
          },
          {
            "day": 95,
            "topic": "Functional Interfaces (java.util.function)",
            "priority": "MUST KNOW",
            "tasks": "Study Function, Predicate, Consumer, Supplier, BiFunction, and their primitive specializations.",
            "achievement": "Can select the correct built-in functional interface for a given method signature without writing a custom one."
          },
          {
            "day": 96,
            "topic": "Streams API Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Learn stream creation, intermediate operations (map, filter, sorted), and terminal operations (collect, reduce, forEach). Understand laziness.",
            "achievement": "Can rewrite an imperative loop-based data transformation as a clean, readable stream pipeline."
          },
          {
            "day": 97,
            "topic": "Streams: Collectors & Advanced Operations",
            "priority": "MUST KNOW",
            "tasks": "Study Collectors.groupingBy, partitioningBy, toMap, and joining. Learn parallel streams and when they actually help.",
            "achievement": "Can group a list of objects by a property and produce a summary Map using a single Collector pipeline."
          },
          {
            "day": 98,
            "topic": "Optional Class",
            "priority": "MUST KNOW",
            "tasks": "Learn Optional as a null-safety tool. Study correct usage patterns (map, filter, orElseGet) and anti-patterns (calling get() without checking).",
            "achievement": "Can refactor null-check-riddled code into a clean Optional-based chain."
          },
          {
            "day": 99,
            "topic": "Date & Time API (java.time)",
            "priority": "MUST KNOW",
            "tasks": "Study LocalDate, LocalDateTime, ZonedDateTime, Duration, and Period. Understand why this replaced legacy Date/Calendar.",
            "achievement": "Can correctly calculate the difference between two dates and handle time zone conversions."
          },
          {
            "day": 100,
            "topic": "Java 9–17 Features",
            "priority": "MUST KNOW",
            "tasks": "Study modules (Java 9), var local type inference (Java 10), text blocks (Java 13+), and sealed classes (Java 17).",
            "achievement": "Can identify and use the appropriate modern syntax feature to simplify legacy-style code."
          },
          {
            "day": 101,
            "topic": "Records & Pattern Matching (Java 14–21)",
            "priority": "MUST KNOW",
            "tasks": "Deep dive into records as concise immutable data carriers. Study pattern matching for instanceof and switch (Java 21).",
            "achievement": "Can convert a verbose POJO with boilerplate getters/equals/hashCode into a single-line record."
          },
          {
            "day": 102,
            "topic": "Virtual Threads (Java 21)",
            "priority": "MUST KNOW",
            "tasks": "Learn Project Loom's virtual threads, how they differ from platform threads, and their impact on high-concurrency I/O-bound applications.",
            "achievement": "Can explain why virtual threads make the thread-per-request model viable again at massive scale."
          },
          {
            "day": 103,
            "topic": "Java Interview Patterns & Tricky Outputs",
            "priority": "MUST KNOW",
            "tasks": "Review classic \"predict the output\" interview questions covering static initialization order, overloading ambiguity, and autoboxing edge cases.",
            "achievement": "Can correctly predict the output of 10+ classic tricky Java code snippets without running them."
          },
          {
            "day": 104,
            "topic": "Final Review & Mock Interview",
            "priority": "MUST KNOW",
            "tasks": "Run a full mock technical interview covering OOP design, a collections-based coding problem, and a concurrency conceptual question.",
            "achievement": "Ready to confidently handle a Core + Advanced Java technical interview round."
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "title": "Master DSA Roadmap",
    "days": 179,
    "color": "teal",
    "phases": [
      {
        "id": "7-1",
        "title": "FOUNDATIONS",
        "days": "",
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
            "day": 5,
            "topic": "Java Performance Traps: Autoboxing & Overflow (Medium, Day 1/2)",
            "tasks": "Learn: Autoboxing/unboxing costs, Integer cache (-128 to 127), integer overflow scenarios in DSA problems. | Code: Reproduce the Integer cache gotcha (`==` vs `.equals()` for boxed Integers). | Practice: 3 problems involving overflow-prone calculations (e.g., mid-point calculation in binary search).",
            "achievement": "Can identify and fix an overflow bug in a binary search midpoint calculation.",
            "priority": "MUST KNOW"
          },
          {
            "day": 6,
            "topic": "Java Performance Traps: Practice Day (Medium, Day 2/2)",
            "tasks": "Learn: Review JDK built-in performance traps table — autoboxing in loops, unnecessary object creation. | Code: Refactor a deliberately inefficient snippet to use primitives. | Practice: 5 mixed problems combining comparator + overflow-safety concepts.",
            "achievement": "Can review a code snippet and flag 3 distinct Java-specific performance traps.",
            "priority": "MUST KNOW"
          },
          {
            "day": 7,
            "topic": "Hashing Basics: HashMap & HashSet (Light)",
            "tasks": "Learn: HashMap/HashSet internals at a usage level (not full collision internals yet — that's Day 14 in Linear DS). Frequency counting fundamentals. | Code: Implement a frequency-count function using HashMap. | Practice: 4 frequency-counting problems (e.g., first unique character).",
            "achievement": "Can solve any \"count occurrences of X\" problem using HashMap in O(N).",
            "priority": "MUST KNOW"
          },
          {
            "day": 8,
            "topic": "Hashing Practice Day (Light)",
            "tasks": "Learn: Review — when to reach for HashMap vs HashSet vs frequency array. | Code: None — pure practice day. | Practice: 5 hashing problems (mix of HashMap/HashSet use cases).",
            "achievement": "Can decide within seconds whether a problem needs HashMap, HashSet, or a fixed-size frequency array.",
            "priority": "MUST KNOW"
          },
          {
            "day": 9,
            "topic": "HANDS-ON LAB: Complexity & JVM Profiling + Phase Cheat Sheet",
            "tasks": "Learn: Review the full Foundations cheat sheet. | Code: Complete the timed JVM profiling exercises. | Practice: Timed mixed-review quiz (5 questions across Days 1–8).",
            "achievement": "Can recite the Foundations cheat sheet cold and complete the lab within its suggested time.",
            "priority": "MUST KNOW"
          }
        ]
      },
      {
        "id": "7-2",
        "title": "LINEAR DATA STRUCTURES",
        "days": "",
        "items": [
          {
            "day": 10,
            "topic": "Arrays: Internals & Memory Layout (Light)",
            "tasks": "Learn: Contiguous memory layout, why array access is O(1), 2D/jagged arrays. | Code: Implement matrix operations (transpose, rotate) using 2D arrays. | Practice: 3 array-traversal problems.",
            "achievement": "Can explain why array access is O(1) and implement a 2D matrix rotation in-place.",
            "priority": "MUST KNOW"
          },
          {
            "day": 11,
            "topic": "Dynamic Array From Scratch (Medium, Day 1/2)",
            "tasks": "Learn: How ArrayList resizes internally — growth factor, amortized O(1) insertion. | Code: Begin implementing a dynamic array class from scratch (resize logic). | Practice: None yet — finish implementation first.",
            "achievement": "Has a working `resize()` method that doubles capacity when full.",
            "priority": "MUST KNOW"
          },
          {
            "day": 12,
            "topic": "Dynamic Array Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review gotchas — shrinking strategy, amortized analysis proof sketch. | Code: Finish and test the dynamic array class (add, get, remove, resize). | Practice: 5 array problems (e.g., rotate array, move zeroes, remove duplicates in-place).",
            "achievement": "Has a fully working hand-rolled dynamic array and can solve in-place array manipulation problems.",
            "priority": "MUST KNOW"
          },
          {
            "day": 13,
            "topic": "Linked Lists: Singly Linked List (Light)",
            "tasks": "Learn: Node structure, pointer manipulation, insertion/deletion at head/tail/middle. | Code: Implement a singly linked list (insert, delete, traverse). | Practice: 3 problems (reverse a linked list, find middle node).",
            "achievement": "Can implement singly linked list insert/delete and reverse it iteratively.",
            "priority": "MUST KNOW"
          },
          {
            "day": 14,
            "topic": "Doubly & Circular Linked Lists (Medium, Day 1/2)",
            "tasks": "Learn: Bidirectional traversal, sentinel nodes, circular queue using linked lists. | Code: Begin implementing a doubly linked list with sentinel head/tail nodes. | Practice: None yet.",
            "achievement": "Sentinel-node DLL skeleton compiles and supports basic insert.",
            "priority": "MUST KNOW"
          },
          {
            "day": 15,
            "topic": "Doubly Linked List Practice + Cycle Detection (Medium, Day 2/2)",
            "tasks": "Learn: Floyd's Cycle Detection (Tortoise & Hare) — finding cycle, finding cycle start, finding middle node. | Code: Finish the DLL implementation; implement Floyd's algorithm. | Practice: 4 problems (detect cycle, find cycle start, intersection of two linked lists).",
            "achievement": "Can implement Floyd's Cycle Detection and explain why the two pointers must meet inside the cycle.",
            "priority": "MUST KNOW"
          },
          {
            "day": 16,
            "topic": "Stacks: LIFO Fundamentals (Light)",
            "tasks": "Learn: Array-based vs linked-list-based stack implementation, push/pop/peek, overflow/underflow. | Code: Implement a stack from scratch using an array. | Practice: 2 problems (valid parentheses).",
            "achievement": "Can implement a stack from scratch and solve Valid Parentheses in O(N).",
            "priority": "MUST KNOW"
          },
          {
            "day": 17,
            "topic": "Stack Applications: Expression Evaluation (Medium, Day 1/2)",
            "tasks": "Learn: Infix/prefix/postfix notation, expression evaluation using two stacks (operator + operand). | Code: Begin implementing an infix expression evaluator. | Practice: None yet.",
            "achievement": "Has a working operator-precedence parsing skeleton.",
            "priority": "MUST KNOW"
          },
          {
            "day": 18,
            "topic": "Min Stack + Stack Practice (Medium, Day 2/2)",
            "tasks": "Learn: Min Stack design (O(1) min extraction using an auxiliary stack). | Code: Finish expression evaluator; implement Min Stack. | Practice: 3 problems (Min Stack, Max Stack, evaluate RPN).",
            "achievement": "Can implement Min Stack with O(1) push/pop/getMin.",
            "priority": "MUST KNOW"
          },
          {
            "day": 19,
            "topic": "Queues: FIFO Fundamentals (Light)",
            "tasks": "Learn: Simple queue, circular queue, array/list-based implementations. | Code: Implement a circular queue from scratch (handling wrap-around). | Practice: 2 problems (implement queue using stacks, or vice versa).",
            "achievement": "Can implement a circular queue without wasting array slots.",
            "priority": "MUST KNOW"
          },
          {
            "day": 20,
            "topic": "Deque (Double-Ended Queue) (Light)",
            "tasks": "Learn: Deque as both stack and queue, implementation via doubly linked list, `ArrayDeque` preference over `Stack`/`LinkedList` in Java. | Code: Implement a basic deque supporting push/pop from both ends. | Practice: 2 problems using `ArrayDeque`.",
            "achievement": "Can explain why `ArrayDeque` is preferred over `java.util.Stack` in production Java code.",
            "priority": "MUST KNOW"
          },
          {
            "day": 21,
            "topic": "Hash Tables: Internals — Hash Functions & Collisions (Light)",
            "tasks": "Learn: Hash function design, index calculation, load factor concept. | Code: Implement a basic hash function for strings. | Practice: 2 conceptual problems on hash distribution quality.",
            "achievement": "Can design a hash function and explain what makes one \"good\" (uniform distribution, low collision rate).",
            "priority": "MUST KNOW"
          },
          {
            "day": 22,
            "topic": "Collision Resolution: Chaining vs Open Addressing (Medium, Day 1/2)",
            "tasks": "Learn: Chaining (linked list/tree buckets), Open Addressing (linear probing, quadratic probing, double hashing). | Code: Begin implementing a HashMap from scratch using chaining. | Practice: None yet.",
            "achievement": "Hash table skeleton with chaining-based bucket array compiles and supports insert.",
            "priority": "MUST KNOW"
          },
          {
            "day": 23,
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
        "days": "",
        "items": [
          {
            "day": 24,
            "topic": "Binary Search: The Basic Template (Light)",
            "tasks": "Learn: Classic binary search, avoiding off-by-one errors, loop invariants. | Code: Implement binary search from memory, twice (iterative + recursive). | Practice: 2 problems (basic search, search insert position).",
            "achievement": "Can write binary search from memory without bugs, in both forms.",
            "priority": "MUST KNOW"
          },
          {
            "day": 25,
            "topic": "Binary Search: Lower Bound & Upper Bound (Light)",
            "tasks": "Learn: Lower bound (first occurrence) and upper bound (last occurrence / insertion point) variants. | Code: Implement both lower-bound and upper-bound binary search. | Practice: 3 problems (first/last occurrence, count occurrences in sorted array).",
            "achievement": "Can implement lower/upper bound binary search and use them together to count occurrences in O(log N).",
            "priority": "MUST KNOW"
          },
          {
            "day": 26,
            "topic": "Binary Search on Answer Space (Medium, Day 1/2)",
            "tasks": "Learn: The \"binary search on answer\" pattern — monotonic predicate functions, search space ≠ input array. | Code: Begin implementing Koko Eating Bananas using this pattern. | Practice: None yet.",
            "achievement": "Can articulate the monotonic predicate for Koko Eating Bananas before finishing the code.",
            "priority": "MUST KNOW"
          },
          {
            "day": 27,
            "topic": "Binary Search on Answer: Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review — Capacity to Ship Packages, Allocate Books as more \"search on answer\" examples. | Code: Finish Koko Eating Bananas. | Practice: 3 problems (Capacity to Ship Packages, Allocate Books, Split Array Largest Sum).",
            "achievement": "Can recognize a \"search on answer\" problem within the first read and set up the feasibility check correctly.",
            "priority": "MUST KNOW"
          },
          {
            "day": 28,
            "topic": "Sorting Fundamentals: Bubble, Selection, Insertion (Light)",
            "tasks": "Learn: O(N²) sorts — mechanics, stability, in-place behavior. | Code: Implement all three from scratch. | Practice: 2 problems (sort colors / Dutch national flag as an insertion-sort-adjacent problem).",
            "achievement": "Can implement all three O(N²) sorts and state which are stable.",
            "priority": "MUST KNOW"
          },
          {
            "day": 29,
            "topic": "Merge Sort (Medium, Day 1/2)",
            "tasks": "Learn: Divide & conquer, O(N log N), stability, O(N) auxiliary space requirement. | Code: Begin implementing merge sort (merge function first, then recursive split). | Practice: None yet.",
            "achievement": "Merge function correctly merges two sorted halves in O(N).",
            "priority": "MUST KNOW"
          },
          {
            "day": 30,
            "topic": "Merge Sort: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review — applications of merge sort (counting inversions). | Code: Finish full merge sort implementation. | Practice: 3 problems (sort an array, count inversions using merge sort).",
            "achievement": "Has a fully working merge sort and can use it to count array inversions in O(N log N).",
            "priority": "MUST KNOW"
          },
          {
            "day": 31,
            "topic": "Quick Sort (Medium, Day 1/2)",
            "tasks": "Learn: Pivot selection strategies, average O(N log N) vs worst O(N²), why it's unstable but in-place. | Code: Begin implementing quicksort (partition function first). | Practice: None yet.",
            "achievement": "Partition function correctly places the pivot and partitions the array around it.",
            "priority": "MUST KNOW"
          },
          {
            "day": 32,
            "topic": "Quick Sort: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Randomized pivot selection to avoid worst-case on adversarial/sorted input. | Code: Finish quicksort with randomized pivot. | Practice: 3 problems (Kth largest element using quickselect, sort an array).",
            "achievement": "Can implement Quickselect (partial quicksort) to find the Kth largest element in average O(N).",
            "priority": "MUST KNOW"
          },
          {
            "day": 33,
            "topic": "Heap Sort (Light)",
            "tasks": "Learn: In-place sorting using a Max-Heap, O(N log N), how heapify builds the heap in O(N). | Code: Implement heap sort from scratch. | Practice: 2 problems using heap sort or heap-based thinking.",
            "achievement": "Can implement heap sort and explain why building the heap is O(N), not O(N log N).",
            "priority": "MUST KNOW"
          },
          {
            "day": 34,
            "topic": "🆕 Counting Sort (Light)",
            "tasks": "Learn: Linear-time sort for small integer ranges — counting array, prefix-sum positioning. | Code: Implement Counting Sort from scratch. | Practice: 2 problems suited to Counting Sort (e.g., sort an array of 0s/1s/2s — Dutch flag revisited via counting).",
            "achievement": "Can implement Counting Sort in O(N+k) and explain when k (the range) makes it impractical.",
            "priority": "MUST KNOW"
          },
          {
            "day": 35,
            "topic": "🆕 Radix Sort & Bucket Sort (Medium, Day 1/2)",
            "tasks": "Learn: Radix Sort (digit-by-digit, stable counting sort as a subroutine), Bucket Sort (uniform distribution assumption). | Code: Begin implementing Radix Sort (LSD — least significant digit first). | Practice: None yet.",
            "achievement": "Radix Sort correctly sorts multi-digit numbers using repeated counting-sort passes.",
            "priority": "MUST KNOW"
          },
          {
            "day": 36,
            "topic": "🆕 Radix & Bucket Sort: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review — when Radix beats comparison sorts (fixed-digit-length integers, large datasets). | Code: Finish Radix Sort; implement Bucket Sort for floats in [0,1). | Practice: 2 problems comparing sort choice for different input distributions.",
            "achievement": "Can correctly choose between Counting/Radix/Bucket/comparison sort given any input distribution description.",
            "priority": "MUST KNOW"
          },
          {
            "day": 37,
            "topic": "HANDS-ON LAB: Median of Two Sorted Arrays (Medium, Day 1/2)",
            "tasks": "Learn: Binary-search-on-partition technique for finding median across two sorted arrays without merging. | Code: Begin implementing the O(log(min(N,M))) solution. | Practice: None yet — this problem IS the practice.",
            "achievement": "Understands why the partition must satisfy `maxLeft ≤ minRight` on both arrays simultaneously.",
            "priority": "MUST KNOW"
          },
          {
            "day": 38,
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
        "days": "",
        "items": [
          {
            "day": 39,
            "topic": "Two Pointers: Opposite Direction (Light)",
            "tasks": "Learn: Opposite-direction two-pointer pattern — converging pointers on sorted input. | Code: Implement Two Sum II (sorted array input). | Practice: 2 problems (Two Sum sorted, Container With Most Water).",
            "achievement": "Can solve Two Sum on a sorted array in O(N) using two converging pointers.",
            "priority": "MUST KNOW"
          },
          {
            "day": 40,
            "topic": "Two Pointers: Same Direction / Fast-Slow (Light)",
            "tasks": "Learn: Same-direction pointer pattern — removing duplicates in-place, fast-slow for middle-finding (revisit from Day 15's cycle context). | Code: Implement Remove Duplicates from Sorted Array in-place. | Practice: 2 problems (remove duplicates, move zeroes).",
            "achievement": "Can solve in-place array modification problems using same-direction two pointers.",
            "priority": "MUST KNOW"
          },
          {
            "day": 41,
            "topic": "3Sum: Opposite Pointers with Duplicate Skipping (Medium, Day 1/2)",
            "tasks": "Learn: Extending two-pointer to 3Sum — fix one element, two-pointer the rest, skip duplicates correctly. | Code: Begin implementing 3Sum. | Practice: None yet.",
            "achievement": "Understands exactly where and why duplicate-skipping logic goes in the loop.",
            "priority": "MUST KNOW"
          },
          {
            "day": 42,
            "topic": "3Sum: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review — 3Sum Closest, 4Sum as generalizations. | Code: Finish and test 3Sum. | Practice: 3 problems (3Sum, 3Sum Closest, Trapping Rain Water via two pointers).",
            "achievement": "Can implement 3Sum in O(N²) with correct duplicate handling, no Set needed.",
            "priority": "MUST KNOW"
          },
          {
            "day": 43,
            "topic": "Sliding Window: Fixed-Size Window (Light)",
            "tasks": "Learn: Fixed-size window mechanics — window slides by exactly one element per step. | Code: Implement Max Sum Subarray of Size K. | Practice: 2 problems (fixed window problems).",
            "achievement": "Can implement a fixed-size sliding window in O(N) without recomputing the window sum from scratch each time.",
            "priority": "MUST KNOW"
          },
          {
            "day": 44,
            "topic": "Sliding Window: Variable-Size Window (Medium, Day 1/2)",
            "tasks": "Learn: Variable window mechanics — grow/shrink conditions, the \"shrink while invalid\" pattern. | Code: Begin implementing Longest Substring Without Repeating Characters. | Practice: None yet.",
            "achievement": "Can articulate the exact shrink condition before finishing the implementation.",
            "priority": "MUST KNOW"
          },
          {
            "day": 45,
            "topic": "Variable Sliding Window: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review — Longest Substring with K Distinct Characters as a generalization. | Code: Finish Longest Substring Without Repeating Characters. | Practice: 2 problems (Max Consecutive Ones III, Longest Substring with K Distinct).",
            "achievement": "Has a working O(N) solution and can adapt the shrink condition to new constraints.",
            "priority": "MUST KNOW"
          },
          {
            "day": 46,
            "topic": "Minimum Window Substring (Medium, Day 1/2)",
            "tasks": "Learn: The hardest variable-window pattern — two frequency maps, \"valid window\" tracking via a counter. | Code: Begin implementing Minimum Window Substring (LeetCode 76). | Practice: None yet.",
            "achievement": "Understands why a single counter (matched characters) avoids comparing two full frequency maps every iteration.",
            "priority": "MUST KNOW"
          },
          {
            "day": 47,
            "topic": "Minimum Window Substring: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review the full solution trace on a worked example. | Code: Finish and test Minimum Window Substring. | Practice: 2 problems (Minimum Window Substring variants, Permutation in String).",
            "achievement": "Can implement Minimum Window Substring in O(N) cold, without referencing notes.",
            "priority": "MUST KNOW"
          },
          {
            "day": 48,
            "topic": "Prefix Sum: Range Sum Queries (Light)",
            "tasks": "Learn: Prefix sum array construction, O(1) range sum after O(N) preprocessing. | Code: Implement a Range Sum Query class using prefix sums. | Practice: 2 problems (range sum query, 2D range sum).",
            "achievement": "Can answer any range-sum query in O(1) after building the prefix sum array.",
            "priority": "MUST KNOW"
          },
          {
            "day": 49,
            "topic": "Subarray Sum Equals K: Prefix Map Pattern (Medium, Day 1/2)",
            "tasks": "Learn: Combining prefix sum with a HashMap to count subarrays with a target sum — the \"prefix sum seen before\" trick. | Code: Begin implementing Subarray Sum Equals K (LeetCode 560). | Practice: None yet.",
            "achievement": "Understands why `prefixSum - k` lookup in a HashMap solves this in O(N).",
            "priority": "MUST KNOW"
          },
          {
            "day": 50,
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
        "days": "",
        "items": [
          {
            "day": 51,
            "topic": "Java String Fundamentals for DSA (Light)",
            "tasks": "Learn: String immutability impact on algorithms, char arrays vs String, when to use StringBuilder in tight loops. | Code: Convert a naive concatenation-in-loop snippet to use StringBuilder. | Practice: 2 problems (reverse a string in-place using char array).",
            "achievement": "Can explain why string concatenation in a loop is O(N²) total and how StringBuilder fixes it.",
            "priority": "MUST KNOW"
          },
          {
            "day": 52,
            "topic": "Frequency Counting for Strings (Light)",
            "tasks": "Learn: Frequency arrays (fixed alphabet) vs HashMap for string problems. | Code: Implement anagram detection using a frequency array. | Practice: 2 problems (valid anagram, group anagrams).",
            "achievement": "Can solve any anagram/permutation-detection problem using frequency counting without a HashMap when the alphabet is small.",
            "priority": "MUST KNOW"
          },
          {
            "day": 53,
            "topic": "Palindrome Problems: Two-Pointer Check (Light)",
            "tasks": "Learn: Two-pointer palindrome verification, handling case/non-alphanumeric characters. | Code: Implement Valid Palindrome (with character filtering). | Practice: 2 problems (valid palindrome, valid palindrome II — one deletion allowed).",
            "achievement": "Can verify a palindrome in O(N) with O(1) space using two pointers.",
            "priority": "MUST KNOW"
          },
          {
            "day": 54,
            "topic": "Longest Palindromic Substring: Expand From Center (Medium, Day 1/2)",
            "tasks": "Learn: Expand-from-center technique, handling both odd and even-length palindromes. | Code: Begin implementing Longest Palindromic Substring. | Practice: None yet.",
            "achievement": "Understands why two separate expansion calls (odd-center, even-center) are needed per index.",
            "priority": "MUST KNOW"
          },
          {
            "day": 55,
            "topic": "Longest Palindromic Substring: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review — Palindromic Substrings (count all) as a close variant. | Code: Finish and test the expand-from-center solution. | Practice: 2 problems (Longest Palindromic Substring, Palindromic Substrings count).",
            "achievement": "Can implement Longest Palindromic Substring in O(N²) cold.",
            "priority": "MUST KNOW"
          },
          {
            "day": 56,
            "topic": "String Hashing: Rolling Hash (Light)",
            "tasks": "Learn: Rolling hash concept — computing a hash incrementally as a window slides, avoiding full recomputation. | Code: Implement a basic rolling hash function. | Practice: 1 conceptual problem (verify rolling hash matches direct hash on a few windows).",
            "achievement": "Can explain how rolling hash updates in O(1) per window shift instead of O(L) recomputation.",
            "priority": "MUST KNOW"
          },
          {
            "day": 57,
            "topic": "Rabin-Karp Algorithm (Medium, Day 1/2)",
            "tasks": "Learn: Using rolling hash for substring search — comparing hash values, handling hash collisions with a verification step. | Code: Begin implementing Rabin-Karp. | Practice: None yet.",
            "achievement": "Understands why a hash match still requires a character-by-character verification step.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 58,
            "topic": "Rabin-Karp: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review average-case O(N+M) vs worst-case behavior under hash collisions. | Code: Finish and test Rabin-Karp against a naive substring search, comparing performance. | Practice: 2 problems (repeated substring pattern, find all anagram start indices).",
            "achievement": "Can implement Rabin-Karp and explain its worst-case degradation scenario.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 59,
            "topic": "KMP: Building the LPS Array (Heavy, Day 1/4)",
            "tasks": "Learn: The failure function / LPS (Longest Prefix Suffix) array concept — what it represents and why it enables skipping. | Code: Implement the LPS array construction by hand-tracing 2 example patterns first, then in code. | Practice: None yet — pure LPS construction focus.",
            "achievement": "Can construct the LPS array for any pattern by hand within 2 minutes.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 60,
            "topic": "KMP: Using the LPS Array for Search (Heavy, Day 2/4)",
            "tasks": "Learn: How the LPS array drives the search pointer's fallback behavior on a mismatch. | Code: Implement the full KMP search function using the LPS array from Day 59. | Practice: None yet.",
            "achievement": "Has a complete, working KMP implementation achieving O(N+M).",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 61,
            "topic": "KMP: Practice Day 1 (Heavy, Day 3/4)",
            "tasks": "Learn: Review the full algorithm trace on an adversarial input (e.g., \"aaaaab\" pattern). | Code: None — pure practice. | Practice: 2 problems (implement strStr, repeated substring pattern via KMP).",
            "achievement": "Can trace KMP's pointer movement on paper for any given text/pattern pair.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 62,
            "topic": "KMP: Practice Day 2 (Heavy, Day 4/4)",
            "tasks": "Learn: Comparison — when KMP, Rabin-Karp, or naive search is the right interview answer. | Code: None — pure practice. | Practice: 2 more problems combining KMP-style thinking with other string patterns.",
            "achievement": "Can justify, in an interview, the choice between naive/Rabin-Karp/KMP for a given constraint set.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 63,
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
        "days": "",
        "items": [
          {
            "day": 64,
            "topic": "Monotonic Stack: Concept & Next Greater Element (Light)",
            "tasks": "Learn: What makes a stack \"monotonic,\" why it solves Next Greater Element in O(N) vs naive O(N²). | Code: Implement Next Greater Element from scratch. | Practice: 2 problems (Next Greater Element I & II — circular variant).",
            "achievement": "Can implement Next Greater Element in O(N) using a monotonic decreasing stack.",
            "priority": "MUST KNOW"
          },
          {
            "day": 65,
            "topic": "Monotonic Stack: Daily Temperatures & Variants (Light)",
            "tasks": "Learn: Generalizing the pattern — storing indices instead of values when distance matters. | Code: Implement Daily Temperatures. | Practice: 2 problems (Daily Temperatures, Next Smaller Element).",
            "achievement": "Can decide when to store values vs indices on the monotonic stack based on what the problem asks for.",
            "priority": "MUST KNOW"
          },
          {
            "day": 66,
            "topic": "Monotonic Queue: Sliding Window Maximum (Medium, Day 1/2)",
            "tasks": "Learn: Monotonic deque mechanics — maintaining a decreasing deque of candidates for the window max. | Code: Begin implementing Sliding Window Maximum. | Practice: None yet.",
            "achievement": "Understands why elements are evicted from the back of the deque when a larger element arrives.",
            "priority": "MUST KNOW"
          },
          {
            "day": 67,
            "topic": "Sliding Window Maximum: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review the full O(N) proof (amortized analysis of deque operations). | Code: Finish and test Sliding Window Maximum. | Practice: 2 problems (Sliding Window Maximum, shortest subarray with sum at least K).",
            "achievement": "Can implement Sliding Window Maximum in true O(N) cold.",
            "priority": "MUST KNOW"
          },
          {
            "day": 68,
            "topic": "HANDS-ON LAB: Maximal Rectangle Solver + Phase Cheat Sheet",
            "tasks": "Learn: Reducing Maximal Rectangle to repeated Largest Rectangle in Histogram calls. | Code: Implement Largest Rectangle in Histogram using a monotonic stack, then extend to Maximal Rectangle. | Practice: Timed review (2 problems).",
            "achievement": "Can solve Maximal Rectangle by combining histogram-area logic with a monotonic stack, and recite the phase cheat sheet.",
            "priority": "MUST KNOW"
          }
        ]
      },
      {
        "id": "7-7",
        "title": "RECURSION & BACKTRACKING",
        "days": "",
        "items": [
          {
            "day": 69,
            "topic": "Recursion: The Mental Model (Light)",
            "tasks": "Learn: Base case, recursive case, trusting the recursive call, call stack visualization. | Code: Trace 3 recursive functions by hand before running them. | Practice: 2 problems (factorial, power function via recursion).",
            "achievement": "Can trace any moderately complex recursive function's call stack by hand.",
            "priority": "MUST KNOW"
          },
          {
            "day": 70,
            "topic": "Recursion: Recursion Tree & Recurrence Relations (Light)",
            "tasks": "Learn: Visualizing recursion as a tree, deriving time complexity from recurrence relations (basic Master Theorem intuition). | Code: Draw and code 2 recursion trees (Fibonacci naive vs memoized). | Practice: 2 problems (climbing stairs via plain recursion, generate parentheses intro).",
            "achievement": "Can explain why naive recursive Fibonacci is O(2^N) by drawing its recursion tree.",
            "priority": "MUST KNOW"
          },
          {
            "day": 71,
            "topic": "Backtracking: The Blueprint (Light)",
            "tasks": "Learn: Choice — constraint — goal framework, the generic backtracking template (choose, explore, un-choose). | Code: Implement the generic backtracking template as a reusable skeleton. | Practice: 2 problems (subsets, then adapt template).",
            "achievement": "Can write the generic backtracking template from memory in under 2 minutes.",
            "priority": "MUST KNOW"
          },
          {
            "day": 72,
            "topic": "Backtracking: Subsets & Combinations (Light)",
            "tasks": "Learn: Adapting the template for subsets (power set) and combinations (choose K of N). | Code: Implement Subsets and Combination Sum. | Practice: 2 problems (subsets, combination sum).",
            "achievement": "Can adapt the backtracking template to subsets/combinations without re-deriving it from scratch.",
            "priority": "MUST KNOW"
          },
          {
            "day": 73,
            "topic": "Backtracking: Permutations (Medium, Day 1/2)",
            "tasks": "Learn: Permutations via swap-based backtracking vs used[] array tracking; handling duplicates. | Code: Begin implementing Permutations (and Permutations II with duplicates). | Practice: None yet.",
            "achievement": "Understands the difference between the swap-based and used-array approaches to permutation generation.",
            "priority": "MUST KNOW"
          },
          {
            "day": 74,
            "topic": "Permutations: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review duplicate-skipping logic for Permutations II. | Code: Finish both Permutations and Permutations II. | Practice: 2 problems (permutations, permutations with duplicates).",
            "achievement": "Can generate all permutations, with correct duplicate handling, in both forms.",
            "priority": "MUST KNOW"
          },
          {
            "day": 75,
            "topic": "Pruning Techniques (Light)",
            "tasks": "Learn: Dead-end detection to optimize backtracking — early termination conditions, constraint propagation basics. | Code: Add a pruning condition to an existing unpruned backtracking solution and measure the speedup. | Practice: 2 problems where pruning matters (combination sum with target, word search).",
            "achievement": "Can identify and add a pruning condition that meaningfully cuts the search space.",
            "priority": "MUST KNOW"
          },
          {
            "day": 76,
            "topic": "N-Queens: Setup & Naive Approach (Heavy, Day 1/3)",
            "tasks": "Learn: The N-Queens problem statement, naive board-scanning conflict check (before optimization). | Code: Begin implementing N-Queens with naive O(N) conflict checking per placement. | Practice: None yet.",
            "achievement": "Has a working but unoptimized N-Queens solution.",
            "priority": "MUST KNOW"
          },
          {
            "day": 77,
            "topic": "N-Queens: Optimized Conflict Checking (Heavy, Day 2/3)",
            "tasks": "Learn: O(1) conflict checking using sets/booleans for columns, diagonals, anti-diagonals. | Code: Refactor N-Queens to use O(1) conflict checks. | Practice: None yet.",
            "achievement": "N-Queens now runs with O(1) conflict checking per placement instead of O(N) board scans.",
            "priority": "MUST KNOW"
          },
          {
            "day": 78,
            "topic": "N-Queens: Practice + Variants (Heavy, Day 3/3)",
            "tasks": "Learn: Review — counting solutions vs returning all solutions as a variant. | Code: None — pure practice. | Practice: 2 problems (N-Queens, N-Queens II — count only).",
            "achievement": "Can implement N-Queens with optimal conflict checking cold, in either \"return all\" or \"count only\" form.",
            "priority": "MUST KNOW"
          },
          {
            "day": 79,
            "topic": "Sudoku Solver (Heavy, Day 1/2)",
            "tasks": "Learn: Constraint propagation for Sudoku — row/column/box validity checks, backtracking with early pruning. | Code: Begin implementing the Sudoku solver. | Practice: None yet.",
            "achievement": "Has working row/column/box validity-check functions integrated into the backtracking skeleton.",
            "priority": "MUST KNOW"
          },
          {
            "day": 80,
            "topic": "Sudoku Solver: Finish + Phase Cheat Sheet",
            "tasks": "Learn: Review the full Recursion & Backtracking cheat sheet. | Code: Finish and test the Sudoku solver. | Practice: Timed mixed review (2 problems spanning recursion + backtracking).",
            "achievement": "Has a fully working Sudoku solver and can recite the phase cheat sheet.",
            "priority": "MUST KNOW"
          }
        ]
      },
      {
        "id": "7-8",
        "title": "HIERARCHICAL DATA STRUCTURES",
        "days": "",
        "items": [
          {
            "day": 81,
            "topic": "Binary Trees: Node Structure & Properties (Light)",
            "tasks": "Learn: Tree node structure, height, depth, leaf node counting. | Code: Implement basic tree construction and a height-calculation function. | Practice: 2 problems (max depth, count leaf nodes).",
            "achievement": "Can compute tree height/depth recursively in O(N).",
            "priority": "IMPORTANT"
          },
          {
            "day": 82,
            "topic": "Binary Tree Traversals: Recursive (Light)",
            "tasks": "Learn: Preorder, Inorder, Postorder — recursive implementations. | Code: Implement all 3 recursive traversals. | Practice: 2 problems (return traversal as a list, verify two trees have same inorder).",
            "achievement": "Can implement all 3 recursive traversals from memory.",
            "priority": "MUST KNOW"
          },
          {
            "day": 83,
            "topic": "Binary Tree Traversals: Iterative + Level Order (Medium, Day 1/2)",
            "tasks": "Learn: Iterative traversal using an explicit stack, Level-order traversal (BFS) using a queue. | Code: Begin implementing iterative inorder traversal and level-order traversal. | Practice: None yet.",
            "achievement": "Has a working iterative inorder traversal using an explicit stack.",
            "priority": "MUST KNOW"
          },
          {
            "day": 84,
            "topic": "Iterative Traversals: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review — iterative preorder/postorder (the trickier ones) using stack tricks. | Code: Finish iterative preorder and postorder; finish level-order traversal. | Practice: 2 problems (binary tree level order traversal, zigzag level order).",
            "achievement": "Can implement all 4 traversal types both recursively and iteratively.",
            "priority": "IMPORTANT"
          },
          {
            "day": 85,
            "topic": "Binary Tree: Diameter & Path Sum (Light)",
            "tasks": "Learn: Diameter of a binary tree (combining left+right height at each node), root-to-leaf path sum problems. | Code: Implement Diameter of Binary Tree. | Practice: 2 problems (diameter, path sum).",
            "achievement": "Can solve Diameter of Binary Tree in a single O(N) pass (not O(N²)).",
            "priority": "IMPORTANT"
          },
          {
            "day": 86,
            "topic": "Binary Search Tree: Search, Insert, Delete (Medium, Day 1/2)",
            "tasks": "Learn: BST property, search/insert operations, the 3 deletion cases (leaf, one child, two children). | Code: Begin implementing BST insert and search. | Practice: None yet.",
            "achievement": "Has working BST insert and search operations.",
            "priority": "MUST KNOW"
          },
          {
            "day": 87,
            "topic": "BST Delete + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review the two-children deletion case (find successor/predecessor). | Code: Finish BST delete, handling all 3 cases. | Practice: 2 problems (delete node in BST, insert into BST).",
            "achievement": "Can implement BST delete correctly for all 3 cases.",
            "priority": "MUST KNOW"
          },
          {
            "day": 88,
            "topic": "BST: Validate BST & Kth Smallest (Light)",
            "tasks": "Learn: Validating BST property (range-checking, not just parent-child comparison), Kth smallest via inorder traversal. | Code: Implement Validate BST and Kth Smallest in BST. | Practice: 2 problems (validate BST, kth smallest, kth largest).",
            "achievement": "Can validate a BST correctly (catching the classic \"only checks immediate children\" bug) and find Kth smallest in O(H+K).",
            "priority": "MUST KNOW"
          },
          {
            "day": 89,
            "topic": "Balanced BSTs: AVL & Red-Black Trees Conceptual (Light)",
            "tasks": "Learn: Balance factor concept, why unbalanced BSTs degrade to O(N), Red-Black tree's role as Java's TreeMap/HashMap bucket backing. | Code: None — conceptual day. | Practice: 2 conceptual questions (when does a BST become a linked list? why does Java use Red-Black trees internally?).",
            "achievement": "Can explain why an unbalanced BST degrades to O(N) and name where Red-Black trees are used inside the JDK.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 90,
            "topic": "🆕 AVL Rotations: LL & RR Cases (Heavy, Day 1/3)",
            "tasks": "Learn: Balance factor calculation after insertion, the Left-Left and Right-Right single-rotation cases. | Code: Implement AVL node structure, balance factor calculation, and single rotation (LL case) function. | Practice: None yet.",
            "achievement": "Can identify an LL or RR imbalance from a balance factor calculation and apply the correct single rotation.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 91,
            "topic": "🆕 AVL Rotations: LR & RL Cases (Heavy, Day 2/3)",
            "tasks": "Learn: The Left-Right and Right-Left double-rotation cases (rotate child first, then the node). | Code: Implement the LR and RL double-rotation functions. | Practice: None yet.",
            "achievement": "Can identify an LR or RL imbalance and apply the correct two-step rotation sequence.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 92,
            "topic": "🆕 AVL Tree: Full Insert with Self-Balancing (Heavy, Day 3/3)",
            "tasks": "Learn: Wiring all 4 rotation cases into a complete AVL insert function that rebalances on the way back up the recursion. | Code: Finish a complete, working AVL tree insert method. | Practice: 2 problems (insert a sequence into an AVL tree by hand and verify against your code's output).",
            "achievement": "Has a fully working, self-balancing AVL insert implementation handling all 4 rotation cases correctly.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 93,
            "topic": "Heaps: Binary Heap Representation (Light)",
            "tasks": "Learn: Array-based heap representation, parent/child index formulas, Min-Heap vs Max-Heap. | Code: Implement siftUp and siftDown functions. | Practice: 2 problems (kth largest element using a heap, top K frequent elements).",
            "achievement": "Can implement siftUp/siftDown from memory and explain the parent/child index math.",
            "priority": "IMPORTANT"
          },
          {
            "day": 94,
            "topic": "Heaps: Heapify & PriorityQueue Usage (Light)",
            "tasks": "Learn: Building a heap from an unsorted array in O(N) (heapify), Java's `PriorityQueue` with custom comparators. | Code: Implement heapify and use Java's `PriorityQueue` with a custom comparator for a problem. | Practice: 2 problems (merge K sorted lists using a heap, find median from data stream).",
            "achievement": "Can explain why heapify is O(N) (not O(N log N)) and use `PriorityQueue` fluently with custom orderings.",
            "priority": "MUST KNOW"
          },
          {
            "day": 95,
            "topic": "Tries: Node Structure & Insert/Search (Light)",
            "tasks": "Learn: Trie node structure (array or map of children), insert and search operations. | Code: Implement Trie insert and search. | Practice: 2 problems (implement Trie, word search II setup).",
            "achievement": "Can implement Trie insert and search in O(L) per operation.",
            "priority": "IMPORTANT"
          },
          {
            "day": 96,
            "topic": "Tries: Prefix Search & Autocomplete Design (Medium, Day 1/2)",
            "tasks": "Learn: `startsWith` prefix matching, extending Trie nodes to support autocomplete suggestions. | Code: Begin implementing the autocomplete system (storing top suggestions per node, or DFS-collecting from a prefix). | Practice: None yet.",
            "achievement": "Trie now supports `startsWith` and can list all words under a given prefix.",
            "priority": "IMPORTANT"
          },
          {
            "day": 97,
            "topic": "Autocomplete System: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review — ranking suggestions (frequency-based) for a production-quality autocomplete. | Code: Finish the autocomplete system, returning top-K ranked suggestions. | Practice: 2 problems (design search autocomplete system, replace words using Trie).",
            "achievement": "Has a working Trie-based autocomplete system returning ranked top-K suggestions for any prefix.",
            "priority": "IMPORTANT"
          },
          {
            "day": 98,
            "topic": "Segment Trees: Construction & Range Query (Heavy, Day 1/3)",
            "tasks": "Learn: Segment tree structure for range queries, recursive construction, range-sum query logic. | Code: Begin implementing segment tree construction and the range sum query function. | Practice: None yet.",
            "achievement": "Has a working segment tree that answers range-sum queries in O(log N).",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 99,
            "topic": "Segment Trees: Point Update (Heavy, Day 2/3)",
            "tasks": "Learn: Point update logic — updating a single index and propagating the change up to ancestor nodes. | Code: Implement the point-update function. | Practice: None yet.",
            "achievement": "Segment tree now supports both range queries and point updates correctly.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 100,
            "topic": "Segment Trees: Lazy Propagation for Range Updates (Heavy, Day 3/3)",
            "tasks": "Learn: Lazy propagation — deferring updates to child nodes until they're actually queried, avoiding O(N) range updates. | Code: Implement lazy propagation for range updates. | Practice: 2 problems (range sum query mutable, range update + range query).",
            "achievement": "Has a complete segment tree supporting range updates AND range queries in O(log N) using lazy propagation.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 101,
            "topic": "Fenwick Tree (Binary Indexed Tree) (Medium, Day 1/2)",
            "tasks": "Learn: Fenwick Tree structure (implicit binary representation), prefix sum query and point update via bit manipulation on indices. | Code: Begin implementing Fenwick Tree update and query functions. | Practice: None yet.",
            "achievement": "Understands the `i & (-i)` bit trick that drives Fenwick Tree traversal.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 102,
            "topic": "Fenwick Tree: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review — when to prefer Fenwick over Segment Tree (simpler code, less memory, but point-update/range-query only by default). | Code: Finish and test the Fenwick Tree. | Practice: 2 problems (range sum query mutable using Fenwick, count of smaller numbers after self).",
            "achievement": "Can implement Fenwick Tree from scratch and justify choosing it over a Segment Tree for a given problem.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 103,
            "topic": "Disjoint Set Union: Path Compression & Union by Rank (Medium, Day 1/2)",
            "tasks": "Learn: Union-Find structure, path compression optimization, union by rank optimization. | Code: Begin implementing DSU with both optimizations. | Practice: None yet.",
            "achievement": "Has a working `find()` function with path compression.",
            "priority": "IMPORTANT"
          },
          {
            "day": 104,
            "topic": "DSU: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review the near-O(1) amortized complexity argument for combined path compression + union by rank. | Code: Finish DSU with union by rank. | Practice: 2 problems (number of provinces, redundant connection).",
            "achievement": "Has a fully optimized DSU achieving near-O(1) amortized find/union.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 105,
            "topic": "HANDS-ON LAB: Trie-Based Autocomplete Extension + Phase Cheat Sheet",
            "tasks": "Learn: Review the entire Hierarchical Data Structures cheat sheet (Trees, BST, AVL, Heaps, Tries, Segment/Fenwick, DSU). | Code: Extend the Day 97 autocomplete system with a new feature (e.g., fuzzy matching or recency weighting). | Practice: Timed mixed review (4 problems spanning the entire phase).",
            "achievement": "Can recite the full phase cheat sheet and confidently pick the right tree-based structure for any new problem.",
            "priority": "IMPORTANT"
          }
        ]
      },
      {
        "id": "7-1",
        "title": "GRAPHS & GRAPH ALGORITHMS",
        "days": "",
        "items": [
          {
            "day": 106,
            "topic": "Graph Fundamentals & Representations (Light)",
            "tasks": "Learn: Adjacency matrix vs adjacency list vs edge list, directed/undirected, weighted/unweighted, cyclic/acyclic (DAG). | Code: Implement both adjacency matrix and adjacency list representations for the same graph. | Practice: 2 problems (build graph from edge list, count connected components via simple traversal).",
            "achievement": "Can choose the correct representation for a given problem based on density and required operations.",
            "priority": "MUST KNOW"
          },
          {
            "day": 107,
            "topic": "Breadth-First Search (BFS) (Light)",
            "tasks": "Learn: BFS using a queue, shortest path in unweighted graphs, level-by-level exploration. | Code: Implement BFS from scratch. | Practice: 2 problems (shortest path in unweighted graph, rotting oranges — multi-source BFS).",
            "achievement": "Can implement BFS and use it for shortest path in an unweighted graph.",
            "priority": "MUST KNOW"
          },
          {
            "day": 108,
            "topic": "Depth-First Search (DFS) (Light)",
            "tasks": "Learn: DFS using recursion and explicit stack, connected components via DFS. | Code: Implement DFS both recursively and iteratively. | Practice: 2 problems (number of islands, flood fill).",
            "achievement": "Can implement DFS both ways and explain when iterative DFS is necessary (avoiding stack overflow on deep graphs).",
            "priority": "MUST KNOW"
          },
          {
            "day": 109,
            "topic": "Topological Sort: Kahn's Algorithm (Medium, Day 1/2)",
            "tasks": "Learn: BFS-based topological sort using in-degree tracking. | Code: Begin implementing Kahn's Algorithm. | Practice: None yet.",
            "achievement": "Understands why nodes with in-degree 0 are the correct starting points.",
            "priority": "IMPORTANT"
          },
          {
            "day": 110,
            "topic": "Topological Sort: DFS-Based + Practice (Medium, Day 2/2)",
            "tasks": "Learn: DFS-based topological sort (postorder reversal) as an alternative to Kahn's. | Code: Finish Kahn's Algorithm; implement DFS-based topological sort. | Practice: 2 problems (course schedule, course schedule II).",
            "achievement": "Can implement topological sort both ways and detect a cycle (no valid ordering exists) in the process.",
            "priority": "MUST KNOW"
          },
          {
            "day": 111,
            "topic": "🆕 Bipartite Graph Check (Light)",
            "tasks": "Learn: 2-coloring via BFS/DFS — a graph is bipartite iff it has no odd-length cycle. | Code: Implement bipartite check using BFS-based 2-coloring. | Practice: 2 problems (is graph bipartite, possible bipartition).",
            "achievement": "Can implement a bipartite check and explain why an odd cycle makes a graph non-bipartite.",
            "priority": "IMPORTANT"
          },
          {
            "day": 112,
            "topic": "Dijkstra's Algorithm: Setup & PriorityQueue Approach (Heavy, Day 1/3)",
            "tasks": "Learn: Single-source shortest path for non-negative weights, edge relaxation, why a PriorityQueue (not a plain queue) is essential. | Code: Begin implementing Dijkstra's Algorithm. | Practice: None yet.",
            "achievement": "Understands edge relaxation and why Dijkstra fails with negative weights (conceptually, before finishing code).",
            "priority": "MUST KNOW"
          },
          {
            "day": 113,
            "topic": "Dijkstra's Algorithm: Finish Implementation (Heavy, Day 2/3)",
            "tasks": "Learn: Review handling of \"already finalized\" nodes and lazy deletion in the PriorityQueue. | Code: Finish and test Dijkstra's Algorithm. | Practice: None yet.",
            "achievement": "Has a fully working Dijkstra's implementation using `PriorityQueue<int[]>`.",
            "priority": "IMPORTANT"
          },
          {
            "day": 114,
            "topic": "Dijkstra's Algorithm: Practice (Heavy, Day 3/3)",
            "tasks": "Learn: Review variants — network delay time, cheapest flights with K stops (Dijkstra variant). | Code: None — pure practice. | Practice: 2 problems (network delay time, path with maximum probability).",
            "achievement": "Can adapt Dijkstra's Algorithm to non-standard variants (probability maximization, K-stop constraints).",
            "priority": "IMPORTANT"
          },
          {
            "day": 115,
            "topic": "Bellman-Ford Algorithm (Medium, Day 1/2)",
            "tasks": "Learn: Handling negative weights, V-1 relaxation rounds, negative cycle detection via a Vth round. | Code: Begin implementing Bellman-Ford. | Practice: None yet.",
            "achievement": "Understands why exactly V-1 rounds of relaxation guarantee correctness.",
            "priority": "IMPORTANT"
          },
          {
            "day": 116,
            "topic": "Bellman-Ford: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review negative cycle detection (extra round still relaxes an edge → cycle exists). | Code: Finish Bellman-Ford with negative cycle detection. | Practice: 2 problems (cheapest flights with K stops via Bellman-Ford-style relaxation, detect negative cycle).",
            "achievement": "Can implement Bellman-Ford and correctly detect negative cycles.",
            "priority": "IMPORTANT"
          },
          {
            "day": 117,
            "topic": "Floyd-Warshall Algorithm (Medium, Day 1/2)",
            "tasks": "Learn: All-pairs shortest path via DP, the `dp[i][j] = min(dp[i][j], dp[i][k]+dp[k][j])` transition. | Code: Begin implementing Floyd-Warshall. | Practice: None yet.",
            "achievement": "Understands why the loop order (k outermost) is essential for correctness.",
            "priority": "IMPORTANT"
          },
          {
            "day": 118,
            "topic": "Floyd-Warshall: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review when Floyd-Warshall beats running Dijkstra V times (dense small graphs). | Code: Finish and test Floyd-Warshall. | Practice: 2 problems (find the city with smallest number of neighbors, all-pairs shortest path applications).",
            "achievement": "Can implement Floyd-Warshall in O(V³) and justify when it's preferable to V calls to Dijkstra.",
            "priority": "IMPORTANT"
          },
          {
            "day": 119,
            "topic": "Minimum Spanning Tree: Kruskal's Algorithm (Medium, Day 1/2)",
            "tasks": "Learn: Edge-selection greedy approach using Union-Find to avoid cycles. | Code: Begin implementing Kruskal's Algorithm (reusing your Phase 8 DSU). | Practice: None yet.",
            "achievement": "Understands why sorting edges by weight first makes the greedy choice correct.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 120,
            "topic": "Kruskal's: Finish + Prim's Algorithm Intro (Medium, Day 2/2)",
            "tasks": "Learn: Finish Kruskal's; learn Prim's Algorithm (vertex-addition greedy using a PriorityQueue). | Code: Finish Kruskal's Algorithm; begin Prim's Algorithm. | Practice: 1 problem (minimum cost to connect all points using Kruskal's).",
            "achievement": "Has a working Kruskal's implementation and understands Prim's core mechanic.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 121,
            "topic": "Prim's Algorithm: Finish + Practice (Medium, Day 1/2 — continuing)",
            "tasks": "Learn: Review Prim's PriorityQueue-based vertex selection in detail. | Code: Finish Prim's Algorithm. | Practice: 2 problems (minimum cost to connect all points using Prim's, comparing both MST approaches on the same input).",
            "achievement": "Can implement both Kruskal's and Prim's, and explain which is more efficient for sparse vs dense graphs.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 122,
            "topic": "Cycle Detection: Directed & Undirected Graphs (Light)",
            "tasks": "Learn: Directed graph cycle detection (DFS with 3-color marking: white/gray/black), undirected graph cycle detection (DFS or Union-Find). | Code: Implement cycle detection for both directed and undirected graphs. | Practice: 2 problems (course schedule revisited through the cycle-detection lens, redundant connection).",
            "achievement": "Can implement cycle detection for both graph types and explain why undirected cycle detection can't reuse the directed 3-color approach directly.",
            "priority": "IMPORTANT"
          },
          {
            "day": 123,
            "topic": "Strongly Connected Components: Tarjan's/Kosaraju's (Heavy, Day 1/2)",
            "tasks": "Learn: SCC concept, the high-level idea behind Tarjan's algorithm (low-link values) or Kosaraju's (two-pass DFS). | Code: Begin implementing Tarjan's SCC algorithm. | Practice: None yet.",
            "achievement": "Understands what a low-link value represents and how it identifies an SCC root.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 124,
            "topic": "SCC: Finish Implementation (Heavy, Day 2/2)",
            "tasks": "Learn: Review the full algorithm trace on a small example graph. | Code: Finish and test the SCC implementation. | Practice: 1 problem (number of strongly connected components).",
            "achievement": "Has a working SCC detection algorithm and can trace it by hand on a small graph.",
            "priority": "IMPORTANT"
          },
          {
            "day": 125,
            "topic": "Graph Bridges: Tarjan's Bridge Discovery (Medium, Day 1/2)",
            "tasks": "Learn: Bridge-finding via DFS discovery times and low-link values (closely related to SCC's low-link concept from Day 123). | Code: Begin implementing Tarjan's Bridges algorithm. | Practice: None yet.",
            "achievement": "Understands the bridge condition (`low[child] > disc[node]`) and why it identifies a critical edge.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 126,
            "topic": "Bridges: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review articulation points as a closely related concept (briefly, for awareness). | Code: Finish and test the bridge-finding algorithm (LeetCode 1192 — Critical Connections). | Practice: 2 problems (critical connections in a network, articulation points awareness problem).",
            "achievement": "Can implement Tarjan's Bridge Discovery and solve Critical Connections in a Network.",
            "priority": "IMPORTANT"
          },
          {
            "day": 127,
            "topic": "HANDS-ON LAB: Network Router Optimizer + Phase Cheat Sheet",
            "tasks": "Learn: Review the full Graphs cheat sheet (representations, BFS/DFS, topo sort, bipartite, shortest path, MST, SCC, bridges). | Code: Complete the Network Router Optimizer lab, combining traversal + shortest-path techniques. | Practice: Timed mixed review (4 problems spanning the entire Graphs phase).",
            "achievement": "Can recite the full Graphs cheat sheet and confidently select the right algorithm family for any new graph problem.",
            "priority": "IMPORTANT"
          }
        ]
      },
      {
        "id": "7-2",
        "title": "GREEDY ALGORITHMS",
        "days": "",
        "items": [
          {
            "day": 128,
            "topic": "Greedy Fundamentals: Proving Correctness (Light)",
            "tasks": "Learn: Greedy choice property, optimal substructure, how to argue (exchange argument) that a greedy approach is correct. | Code: None — conceptual day with worked proof sketches. | Practice: 2 conceptual problems (is this greedy approach correct? prove or disprove).",
            "achievement": "Can sketch an exchange-argument proof for why a proposed greedy strategy is or isn't correct.",
            "priority": "IMPORTANT"
          },
          {
            "day": 129,
            "topic": "Activity Selection / Interval Scheduling (Light)",
            "tasks": "Learn: Sort-by-end-time greedy strategy, why sorting by start time fails. | Code: Implement Activity Selection. | Practice: 2 problems (activity selection, non-overlapping intervals).",
            "achievement": "Can solve Activity Selection optimally and explain precisely why sorting by start time produces a wrong answer.",
            "priority": "IMPORTANT"
          },
          {
            "day": 130,
            "topic": "Merge Intervals (Light)",
            "tasks": "Learn: Interval merging — sort by start time, then linear merge pass. | Code: Implement Merge Intervals. | Practice: 2 problems (merge intervals, insert interval).",
            "achievement": "Can implement Merge Intervals in O(N log N) and explain why this sort uses start time (unlike Day 129).",
            "priority": "IMPORTANT"
          },
          {
            "day": 131,
            "topic": "Jump Game Variants (Medium, Day 1/2)",
            "tasks": "Learn: Reachability (Jump Game I) and minimum jumps (Jump Game II) via greedy range-extension. | Code: Begin implementing Jump Game II. | Practice: None yet.",
            "achievement": "Understands the \"farthest reachable from current window\" greedy invariant before finishing the code.",
            "priority": "IMPORTANT"
          },
          {
            "day": 132,
            "topic": "Jump Game: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review Jump Game I (simpler reachability-only variant) by contrast. | Code: Finish Jump Game II; implement Jump Game I. | Practice: 2 problems (Jump Game I & II, Jump Game III as an extension).",
            "achievement": "Can solve Jump Game II in O(N) using greedy range tracking, distinct from a BFS-based approach.",
            "priority": "IMPORTANT"
          },
          {
            "day": 133,
            "topic": "Huffman Coding (Medium, Day 1/2)",
            "tasks": "Learn: Optimal prefix-free encoding, building the encoding tree using a min-heap of frequencies. | Code: Begin implementing Huffman Coding tree construction. | Practice: None yet.",
            "achievement": "Can construct a Huffman tree by hand for a small frequency table before finishing the code.",
            "priority": "IMPORTANT"
          },
          {
            "day": 134,
            "topic": "Huffman Coding: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review how the tree generates variable-length prefix codes per character. | Code: Finish Huffman Coding, generating the actual code table. | Practice: 1 problem (implement Huffman encode/decode end-to-end).",
            "achievement": "Has a complete working Huffman encoder that produces a valid prefix-free code table.",
            "priority": "IMPORTANT"
          },
          {
            "day": 135,
            "topic": "Task Scheduling: Job Sequencing & Task Scheduler (Medium, Day 1/2)",
            "tasks": "Learn: Job Sequencing with Deadlines (greedy by profit, then by feasibility), Task Scheduler (LeetCode 621 — frequency-based cooldown logic). | Code: Begin implementing Task Scheduler. | Practice: None yet.",
            "achievement": "Understands the formula-based approach to Task Scheduler (max frequency × (n+1) + ties) before finishing code.",
            "priority": "IMPORTANT"
          },
          {
            "day": 136,
            "topic": "Task Scheduling: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review Job Sequencing with Deadlines as a separate but related greedy pattern. | Code: Finish Task Scheduler; implement Job Sequencing with Deadlines. | Practice: 2 problems (task scheduler, job sequencing with deadlines).",
            "achievement": "Can implement both task-scheduling variants and explain the formula-based shortcut for Task Scheduler.",
            "priority": "IMPORTANT"
          },
          {
            "day": 137,
            "topic": "Fractional Knapsack + Gas Station (Light)",
            "tasks": "Learn: Fractional Knapsack (value/weight ratio greedy — contrast with 0/1 Knapsack, which is NOT greedy), Gas Station's circular feasibility check. | Code: Implement Fractional Knapsack and Gas Station. | Practice: 2 problems (fractional knapsack, gas station).",
            "achievement": "Can explain precisely why Fractional Knapsack is greedy-solvable but 0/1 Knapsack is not, and solve Gas Station in O(N).",
            "priority": "IMPORTANT"
          },
          {
            "day": 138,
            "topic": "Partitioning & Assignment Problems (Light)",
            "tasks": "Learn: Greedy partitioning patterns (assign cookies, two-city scheduling) — the sorting criterion that enables the greedy choice. | Code: Implement Assign Cookies and Two City Scheduling. | Practice: 2 problems (assign cookies, two city scheduling).",
            "achievement": "Can identify the correct sorting criterion for a new greedy partitioning problem within the first read.",
            "priority": "IMPORTANT"
          },
          {
            "day": 139,
            "topic": "Advanced Greedy Problems + Phase Cheat Sheet",
            "tasks": "Learn: Review the handbook's advanced greedy problems section. Review the full Greedy Algorithms phase cheat sheet. | Code: None — review day. | Practice: Timed mixed review (3 problems spanning the entire Greedy phase).",
            "achievement": "Can distinguish, for any new unseen problem, whether greedy is provably correct or whether it secretly requires DP.",
            "priority": "IMPORTANT"
          }
        ]
      },
      {
        "id": "7-3",
        "title": "DYNAMIC PROGRAMMING",
        "days": "",
        "items": [
          {
            "day": 140,
            "topic": "DP Fundamentals: Memoization vs Tabulation (Light)",
            "tasks": "Learn: State definition, transition relation, base cases; converting brute-force recursion → memoization → tabulation. | Code: Take naive recursive Fibonacci and convert it step-by-step to memoized, then tabulated. | Practice: 2 problems (Fibonacci variants, climbing stairs via all 3 forms).",
            "achievement": "Can convert any brute-force recursive solution to memoized, then to tabulated, as a repeatable 3-step process.",
            "priority": "MUST KNOW"
          },
          {
            "day": 141,
            "topic": "1D DP: Climbing Stairs & House Robber (Light)",
            "tasks": "Learn: Climbing Stairs DP transition, House Robber's \"skip-adjacent\" transition. | Code: Implement Climbing Stairs and House Robber. | Practice: 2 problems (climbing stairs, house robber).",
            "achievement": "Can write the House Robber transition and explain why it generalizes to a wide class of \"skip-adjacent\" problems.",
            "priority": "MUST KNOW"
          },
          {
            "day": 142,
            "topic": "1D DP: House Robber II & Min Cost Climbing Stairs (Light)",
            "tasks": "Learn: House Robber II's circular-array adaptation (run the linear version twice, excluding first/last). | Code: Implement House Robber II and Min Cost Climbing Stairs. | Practice: 2 problems (house robber II, min cost climbing stairs).",
            "achievement": "Can adapt a linear 1D DP solution to a circular-array variant by running it twice with different exclusions.",
            "priority": "MUST KNOW"
          },
          {
            "day": 143,
            "topic": "0/1 Knapsack: 2D DP Table (Medium, Day 1/2)",
            "tasks": "Learn: Weight/value representation, the classic 2D DP table construction for 0/1 Knapsack. | Code: Begin implementing 0/1 Knapsack with a full 2D DP table. | Practice: None yet.",
            "achievement": "Has a working 2D Knapsack DP table and can read off the optimal value.",
            "priority": "MUST KNOW"
          },
          {
            "day": 144,
            "topic": "0/1 Knapsack: Space Optimization + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Reducing 2D DP to 1D by iterating weights in reverse order — why iteration order matters. | Code: Refactor to a space-optimized 1D DP array. | Practice: 2 problems (partition equal subset sum, target sum — both Knapsack-shaped).",
            "achievement": "Can implement 0/1 Knapsack with O(capacity) space instead of O(N × capacity).",
            "priority": "MUST KNOW"
          },
          {
            "day": 145,
            "topic": "Unbounded Knapsack & Coin Change (Medium, Day 1/2)",
            "tasks": "Learn: Unbounded Knapsack's forward iteration (vs 0/1's reverse iteration) — items can be reused. | Code: Begin implementing Coin Change (minimum coins). | Practice: None yet.",
            "achievement": "Understands precisely why forward iteration allows item reuse while reverse iteration (Day 144) prevents it.",
            "priority": "IMPORTANT"
          },
          {
            "day": 146,
            "topic": "Coin Change: Finish + Subset Sum Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review Coin Change II (count combinations, not minimum) as a closely related variant. | Code: Finish Coin Change; implement Coin Change II. | Practice: 2 problems (coin change, coin change II).",
            "achievement": "Can distinguish \"minimum coins\" DP from \"count combinations\" DP and implement both correctly.",
            "priority": "IMPORTANT"
          },
          {
            "day": 147,
            "topic": "DP on Strings: Longest Common Subsequence (Light)",
            "tasks": "Learn: LCS 2D DP table construction, the diagonal/up/left transition logic. | Code: Implement LCS. | Practice: 2 problems (LCS, longest common substring as a contrast).",
            "achievement": "Can implement LCS in O(N×M) and explain the difference between \"subsequence\" and \"substring\" DP transitions.",
            "priority": "MUST KNOW"
          },
          {
            "day": 148,
            "topic": "DP on Strings: Longest Palindromic Subsequence (Light)",
            "tasks": "Learn: Reframing palindrome-subsequence as LCS(string, reverse(string)) — connecting back to Day 147. | Code: Implement Longest Palindromic Subsequence. | Practice: 2 problems (longest palindromic subsequence, minimum insertions to make palindrome).",
            "achievement": "Can solve Longest Palindromic Subsequence by recognizing it as a disguised LCS problem.",
            "priority": "MUST KNOW"
          },
          {
            "day": 149,
            "topic": "Edit Distance (Medium, Day 1/2)",
            "tasks": "Learn: The three-operation (insert/delete/replace) DP transition, base case setup for empty-string comparisons. | Code: Begin implementing Edit Distance. | Practice: None yet.",
            "achievement": "Can write all 3 transition cases (insert/delete/replace) for the Edit Distance DP table by hand.",
            "priority": "IMPORTANT"
          },
          {
            "day": 150,
            "topic": "Edit Distance: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review applications — spell-checkers, diff tools. | Code: Finish and test Edit Distance. | Practice: 2 problems (edit distance, one edit distance — simplified variant).",
            "achievement": "Can implement Edit Distance in O(N×M) cold and explain each of the three operations' contribution to the transition.",
            "priority": "IMPORTANT"
          },
          {
            "day": 151,
            "topic": "Wildcard & Regex Matching (Heavy, Day 1/2)",
            "tasks": "Learn: DP-based pattern matching with `*` and `?` (wildcard) or `*` and `.` (regex) — the trickiest string DP transition. | Code: Begin implementing Wildcard Matching. | Practice: None yet.",
            "achievement": "Understands the special handling required for `*` (matches empty OR extends match) before finishing code.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 152,
            "topic": "Wildcard/Regex Matching: Finish + Practice (Heavy, Day 2/2)",
            "tasks": "Learn: Review Regex Matching's `*` semantics (tied to the preceding character, unlike Wildcard's standalone `*`). | Code: Finish Wildcard Matching; implement Regex Matching. | Practice: 2 problems (wildcard matching, regular expression matching).",
            "achievement": "Can implement both Wildcard and Regex matching DP, clearly articulating how their `*` semantics differ.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 153,
            "topic": "🆕 DP on Trees: House Robber III (Heavy, Day 1/2)",
            "tasks": "Learn: DP on trees as a distinct mental model — recursive functions returning a 2-state result per subtree (rob this node / don't rob this node), combined post-order. | Code: Begin implementing House Robber III. | Practice: None yet.",
            "achievement": "Understands why a single return value per node is insufficient and a 2-state return is required.",
            "priority": "IMPORTANT"
          },
          {
            "day": 154,
            "topic": "🆕 DP on Trees: Diameter & Max Path Sum (Heavy, Day 2/2)",
            "tasks": "Learn: Generalizing tree DP to Diameter of Binary Tree (revisited through the DP lens) and Binary Tree Maximum Path Sum. | Code: Finish House Robber III; implement Binary Tree Maximum Path Sum. | Practice: 2 problems (House Robber III, binary tree maximum path sum).",
            "achievement": "Can solve House Robber III and Max Path Sum, both using single-pass post-order DP on trees.",
            "priority": "IMPORTANT"
          },
          {
            "day": 155,
            "topic": "🆕 Interval DP: Matrix Chain Multiplication (Heavy, Day 1/2)",
            "tasks": "Learn: The canonical interval DP pattern — `dp[i][j]` as the optimal cost spanning indices i to j, iterating over all split points k between i and j. | Code: Begin implementing Matrix Chain Multiplication. | Practice: None yet.",
            "achievement": "Can write the MCM transition `dp[i][j] = min over k of dp[i][k] + dp[k+1][j] + cost(k)` from memory.",
            "priority": "IMPORTANT"
          },
          {
            "day": 156,
            "topic": "🆕 Interval DP: Burst Balloons & Palindrome Partitioning (Heavy, Day 2/2)",
            "tasks": "Learn: Recognizing the same \"split point k between i and j\" signature in Burst Balloons (LeetCode 312, the true DP version) and Palindrome Partitioning II. | Code: Finish Matrix Chain Multiplication; implement Burst Balloons (DP version). | Practice: 2 problems (Burst Balloons, Palindrome Partitioning II).",
            "achievement": "Can recognize the interval-DP signature in a new, unseen problem and set up the split-point iteration correctly.",
            "priority": "IMPORTANT"
          },
          {
            "day": 157,
            "topic": "Bitmask DP: Traveling Salesman Problem (Heavy, Day 1/2)",
            "tasks": "Learn: Representing visited-vertex sets as integer bitmasks, the `dp[mask][u]` state definition. | Code: Begin implementing TSP via Bitmask DP. | Practice: None yet.",
            "achievement": "Understands why bitmask DP is only feasible for small N (typically N ≤ 20) due to the 2^N state space.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 158,
            "topic": "Bitmask DP: Finish + Practice (Heavy, Day 2/2)",
            "tasks": "Learn: Review — other bitmask DP applications (e.g., Partition to K Equal Sum Subsets). | Code: Finish TSP Bitmask DP. | Practice: 2 problems (TSP via bitmask, partition to K equal sum subsets).",
            "achievement": "Can implement TSP using Bitmask DP in O(N² × 2^N) and adapt the bitmask pattern to a new subset-tracking problem.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 159,
            "topic": "Advanced DP Practice Day 1 (Light)",
            "tasks": "Learn: Review — mixed advanced DP problems combining patterns learned so far (e.g., DP + greedy hybrid problems). | Code: None — pure practice. | Practice: 3 mixed-pattern problems.",
            "achievement": "Can classify any new DP problem (1D/2D/Knapsack/String/Tree/Interval/Bitmask) within the first minute of reading it.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 160,
            "topic": "HANDS-ON LAB: Coin Change Optimization (Light)",
            "tasks": "Learn: Review the Coin Change Optimization hands-on lab problem set. | Code: Complete the lab exercises. | Practice: 2 problems from the lab.",
            "achievement": "Can complete the Coin Change Optimization lab within its suggested time.",
            "priority": "IMPORTANT"
          },
          {
            "day": 161,
            "topic": "Phase Cheat Sheet + Mixed DP Review",
            "tasks": "Learn: Review the complete Dynamic Programming cheat sheet, including all new additions (Tree DP, Interval DP). | Code: None — review day. | Practice: Timed mixed review (4 problems spanning the entire DP phase).",
            "achievement": "Can recite the full DP phase cheat sheet and correctly classify/solve any of the last 22 days' problem types under time pressure.",
            "priority": "IMPORTANT"
          }
        ]
      },
      {
        "id": "7-4",
        "title": "CUSTOM DESIGN PROBLEMS",
        "days": "",
        "items": [
          {
            "day": 162,
            "topic": "The Design Interview Strategy + LRU Cache: Design (Medium, Day 1/2)",
            "tasks": "Learn: General strategy for \"design X\" problems (clarify requirements → pick data structures → implement). LRU Cache's HashMap + Doubly Linked List combination. | Code: Begin implementing LRU Cache. | Practice: None yet.",
            "achievement": "Understands exactly why HashMap alone (no recency tracking) and DLL alone (no O(1) lookup) each fail individually.",
            "priority": "IMPORTANT"
          },
          {
            "day": 163,
            "topic": "LRU Cache: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review eviction logic — moving an accessed node to the front, evicting from the back on overflow. | Code: Finish and test LRU Cache with O(1) get/put. | Practice: 1 problem (LRU Cache, then re-implement using Java's `LinkedHashMap` access-order mode for comparison).",
            "achievement": "Has a fully working hand-rolled LRU Cache and can also implement it via `LinkedHashMap` for comparison.",
            "priority": "IMPORTANT"
          },
          {
            "day": 164,
            "topic": "LFU Cache: Design & Frequency Buckets (Heavy, Day 1/2)",
            "tasks": "Learn: LFU's added complexity over LRU — tracking both recency AND frequency, frequency-bucketed DLLs. | Code: Begin implementing LFU Cache. | Practice: None yet.",
            "achievement": "Understands the frequency-bucket design (each frequency maps to its own DLL of recency-ordered keys) before finishing code.",
            "priority": "IMPORTANT"
          },
          {
            "day": 165,
            "topic": "LFU Cache: Finish + Practice (Heavy, Day 2/2)",
            "tasks": "Learn: Review the min-frequency tracking that enables O(1) eviction. | Code: Finish and test LFU Cache with O(1) get/put. | Practice: 1 problem (LFU Cache full implementation).",
            "achievement": "Has a fully working LFU Cache achieving true O(1) get/put.",
            "priority": "IMPORTANT"
          },
          {
            "day": 166,
            "topic": "Min Stack/Max Stack Revisited + Design Twitter (Medium, Day 1/2)",
            "tasks": "Learn: Design Twitter's feed-generation problem — merging each followee's recent tweets using a max-heap (similar to Merge K Sorted Lists). | Code: Begin implementing Design Twitter. | Practice: None yet.",
            "achievement": "Understands why a max-heap merge (not sorting everything) is the efficient approach to `getNewsFeed`.",
            "priority": "MUST KNOW"
          },
          {
            "day": 167,
            "topic": "Design Twitter: Finish + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Review follow/unfollow bookkeeping and timestamp-based tweet ordering. | Code: Finish and test Design Twitter. | Practice: 1 problem (Design Twitter full implementation).",
            "achievement": "Has a complete working Design Twitter implementation with efficient `getNewsFeed`.",
            "priority": "IMPORTANT"
          },
          {
            "day": 168,
            "topic": "Browser History + Hit Counter/Rate Limiter (Light)",
            "tasks": "Learn: Browser History (array/stack-based forward-back navigation), Rate Limiter via sliding window counter vs token bucket. | Code: Implement Browser History and a sliding-window Rate Limiter. | Practice: 2 problems (browser history, design hit counter).",
            "achievement": "Can implement a sliding-window rate limiter and explain why fixed-window counters allow burst abuse at window boundaries.",
            "priority": "IMPORTANT"
          },
          {
            "day": 169,
            "topic": "HANDS-ON LAB: Designing an LFU Cache Extension + Phase Cheat Sheet",
            "tasks": "Learn: Review gotchas/edge cases for the entire Custom Design Problems chapter. | Code: Extend your LFU Cache (Day 164-165) with a TTL (time-to-live) feature. | Practice: Timed mixed review (2 design problems, explained out loud as if in an interview).",
            "achievement": "Can design and defend, end-to-end, the data structure choices behind any \"design X\" problem in a mock interview setting.",
            "priority": "IMPORTANT"
          }
        ]
      },
      {
        "id": "7-5",
        "title": "MATH & BIT MANIPULATION",
        "days": "",
        "items": [
          {
            "day": 170,
            "topic": "Number Theory: GCD & LCM (Light)",
            "tasks": "Learn: Euclidean algorithm for GCD, deriving LCM from GCD. | Code: Implement Euclidean GCD (iterative and recursive) and LCM. | Practice: 2 problems (GCD/LCM applications, e.g., simplify fraction).",
            "achievement": "Can implement Euclidean GCD in both forms and derive LCM from it in O(log(min(A,B))).",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 171,
            "topic": "Sieve of Eratosthenes (Light)",
            "tasks": "Learn: Prime generation up to N in O(N log log N), the marking mechanism. | Code: Implement the Sieve of Eratosthenes. | Practice: 2 problems (count primes, prime factorization using a precomputed sieve).",
            "achievement": "Can implement the Sieve and explain why it's vastly faster than checking primality one number at a time.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 172,
            "topic": "Fast (Binary) Exponentiation (Light)",
            "tasks": "Learn: O(log N) exponentiation via repeated squaring. | Code: Implement fast exponentiation (iterative and recursive). | Practice: 2 problems (pow(x,n), super pow with large exponents).",
            "achievement": "Can implement fast exponentiation in O(log N) and explain the repeated-squaring insight.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 173,
            "topic": "🆕 Modular Arithmetic: Addition, Subtraction, Multiplication (Light)",
            "tasks": "Learn: Modular addition/subtraction/multiplication, handling overflow with modulus applied at each step (not just at the end). | Code: Implement safe modular add/subtract/multiply helper functions. | Practice: 2 problems involving large-number modular arithmetic (e.g., count ways mod 10^9+7).",
            "achievement": "Can implement overflow-safe modular arithmetic helpers and explain why applying the modulus only at the end is unsafe.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 174,
            "topic": "🆕 Modular Multiplicative Inverse via Fermat's Little Theorem (Medium, Day 1/2)",
            "tasks": "Learn: Fermat's Little Theorem, deriving the modular inverse as `a^(p-2) mod p` for prime modulus p, using fast exponentiation (Day 172) to compute it. | Code: Begin implementing modular inverse using fast exponentiation. | Practice: None yet.",
            "achievement": "Understands why Fermat's Little Theorem requires a PRIME modulus and what breaks if it isn't.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 175,
            "topic": "🆕 Modular Inverse: Computing nCr mod p + Practice (Medium, Day 2/2)",
            "tasks": "Learn: Combining factorials, modular inverse, and modular multiplication to compute nCr mod a large prime — a common combinatorics-DP building block. | Code: Finish modular inverse; implement nCr mod p using precomputed factorials and their modular inverses. | Practice: 2 problems (combinatorics problems requiring nCr mod 10^9+7).",
            "achievement": "Can compute nCr mod a large prime in O(1) per query after O(N) precomputation of factorials and inverse factorials.",
            "priority": "NICE TO HAVE"
          },
          {
            "day": 176,
            "topic": "Bit Manipulation: Core Tricks + HANDS-ON LAB: Bitwise Division Engine + Phase Cheat Sheet",
            "tasks": "Learn: Hamming Weight (Brian Kernighan's algorithm), XOR tricks (single number, swap without temp). Review the full Math & Bit Manipulation cheat sheet including modular arithmetic additions. | Code: Implement Brian Kernighan's algorithm; complete the Bitwise Division Engine lab (integer division using only shifts/subtraction). | Practice: 2 problems (single number, counting bits).",
            "achievement": "Can implement bitwise integer division and recite the full phase cheat sheet, including the new modular arithmetic section.",
            "priority": "NICE TO HAVE"
          }
        ]
      },
      {
        "id": "7-6",
        "title": "INTERVIEW STRATEGY & BACKEND BRIDGE",
        "days": "",
        "items": [
          {
            "day": 177,
            "topic": "The 15 Problem-Solving Patterns + Interview Framework",
            "tasks": "Learn: The full list of 15 problem-solving patterns as a unified mental map. The step-by-step interview framework (clarify → identify pattern → outline approach → code → test edge cases → analyze complexity). | Code: None — pure strategy day. | Practice: Pick 3 random problems from across the entire 176-day journey and apply the framework out loud, mapping each to its pattern within seconds.",
            "achievement": "Can map any previously-solved problem to one of the 15 patterns instantly, and apply the full interview framework live to a brand-new problem.",
            "priority": "IMPORTANT"
          },
          {
            "day": 178,
            "topic": "🆕 DSA-to-Backend Pattern Bridge + Final Review",
            "tasks": "Learn: Map each major DSA pattern to a real production backend use case: Monotonic Stack → log/event trimming and stock-span-style analytics; Trie → autocomplete/search-suggestion microservices; DSU → network partition/connected-component detection in distributed systems; LRU/LFU Cache → the exact mechanism behind Redis/Caffeine eviction policies; Sliding Window → rate limiters and real-time metrics aggregation; Graph BFS/Dijkstra → service-dependency analysis and shortest-path routing in infrastructure; Segment Tree/Fenwick Tree → real-time analytics dashboards needing fast range aggregation. | Code: None — synthesis day. | Practice: Use the Java Collections Decision Tree and Complexity Cheat Sheet appendices to rapid-fire answer 5 \"which data structure would you use for X production scenario\" questions.",
            "achievement": "Can answer \"where would you actually use [DSA structure] in a production backend system?\" with a concrete, named example for at least 6 different structures — directly bridging this DSA roadmap into the System Design and Spring Boot phases of your master roadmap.",
            "priority": "IMPORTANT"
          }
        ]
      },
      {
        "id": "7-15",
        "title": "FREQUENTLY ASKED QUESTIONS (COLLEGE PLACEMENT)",
        "days": "Day 179",
        "items": [
          {
            "day": 179,
            "topic": "Top 50+ Frequently Asked Questions",
            "tasks": "Arrays & Strings: Two Sum, Valid Anagram, Longest Substring... | Linked Lists: Reverse Linked List, Merge Two Sorted Lists... | Trees & Graphs: Max Depth, Number of Islands, Course Schedule... | DP & Greedy: Climbing Stairs, Coin Change, LIS... | Sorting, Searching: Binary Search, Merge Intervals, Top K...",
            "achievement": "Completed practice on the top 50+ most frequently asked DSA questions for college placements.",
            "priority": "MUST KNOW"
          }
        ]
      }
    ]
  }
];
