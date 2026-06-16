export const roadmapData = [
  {
    "id": 1,
    "title": "System Design & Architecture",
    "days": 123,
    "color": "cyan",
    "phases": [
      {
        "id": "1-1",
        "title": "THE FOUNDATIONS OF DISTRIBUTED SYSTEMS",
        "days": "Days 0–20",
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
            "topic": "Data Partitioning & Sharding",
            "priority": "MUST KNOW",
            "tasks": "Learn the difference between vertical partitioning (splitting columns) and horizontal sharding (splitting rows).",
            "achievement": "Can design a sharding strategy based on a shard key to prevent hot spots."
          },
          {
            "day": 16,
            "topic": "Database Replication",
            "priority": "MUST KNOW",
            "tasks": "Study Master-Slave (Single Leader), Multi-Leader, and Leaderless replication strategies.",
            "achievement": "Can explain the pros and cons of synchronous vs asynchronous replication for data durability."
          },
          {
            "day": 17,
            "topic": "Message Queues (Pub/Sub vs P2P)",
            "priority": "MUST KNOW",
            "tasks": "Understand Point-to-Point (RabbitMQ) vs Publish-Subscribe (Kafka). Why use async communication?",
            "achievement": "Can decouple two tightly integrated microservices using a message broker."
          },
          {
            "day": 18,
            "topic": "API Design Basics (REST vs RPC)",
            "priority": "MUST KNOW",
            "tasks": "Compare RESTful design principles with gRPC/RPC. Understand statelessness and idempotency.",
            "achievement": "Can design clean, standard REST API endpoints and explain when to use gRPC instead."
          },
          {
            "day": 19,
            "topic": "WebSockets & Long Polling",
            "priority": "MUST KNOW",
            "tasks": "Study methods for real-time communication. Compare WebSockets, Server-Sent Events (SSE), and Long Polling.",
            "achievement": "Can choose the right protocol for a real-time chat app vs a live stock ticker."
          },
          {
            "day": 20,
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
        "days": "Days 21–45",
        "items": [
          {
            "day": 21,
            "topic": "RDBMS vs NoSQL",
            "priority": "MUST KNOW",
            "tasks": "Compare strictly typed, normalized relational databases with flexible, denormalized NoSQL stores.",
            "achievement": "Can evaluate business requirements and correctly choose between Postgres and MongoDB."
          },
          {
            "day": 22,
            "topic": "ACID Properties",
            "priority": "MUST KNOW",
            "tasks": "Deep dive into Atomicity, Consistency, Isolation, Durability. Understand how relational DBs guarantee these.",
            "achievement": "Can explain how a bank transfer transaction is protected by ACID principles."
          },
          {
            "day": 23,
            "topic": "BASE Properties (NoSQL)",
            "priority": "MUST KNOW",
            "tasks": "Study Basically Available, Soft state, Eventual consistency. Compare this to strict ACID.",
            "achievement": "Can explain why Amazon shopping carts use BASE and accept eventual consistency."
          },
          {
            "day": 24,
            "topic": "Database Indexes Deep Dive",
            "priority": "MUST KNOW",
            "tasks": "Learn how B-Trees and B+ Trees work under the hood. Understand what makes an index fast for reads but slow for writes.",
            "achievement": "Can draw a B+ Tree and explain why it minimizes disk I/O operations."
          },
          {
            "day": 25,
            "topic": "Advanced Indexing",
            "priority": "MUST KNOW",
            "tasks": "Study Composite Indexes, Covering Indexes, and the Left-most prefix rule.",
            "achievement": "Can optimize a slow SQL query by creating a highly efficient covering index."
          },
          {
            "day": 26,
            "topic": "Key-Value Stores (Redis/Memcached)",
            "priority": "MUST KNOW",
            "tasks": "Understand in-memory KV stores. Use cases for Redis beyond simple caching (Leaderboards, Pub/Sub).",
            "achievement": "Can architect a system that uses Redis for high-speed, volatile data operations."
          },
          {
            "day": 27,
            "topic": "Document Stores (MongoDB)",
            "priority": "MUST KNOW",
            "tasks": "Learn how JSON/BSON document databases work. Understand denormalization strategies.",
            "achievement": "Can design a data model for a blog with nested comments in a single document."
          },
          {
            "day": 28,
            "topic": "Wide-Column Stores (Cassandra)",
            "priority": "IMPORTANT",
            "tasks": "Study distributed, masterless databases. Learn about Partition Keys and Clustering Columns.",
            "achievement": "Can explain Cassandra's architecture and design a query-driven data model."
          },
          {
            "day": 29,
            "topic": "Graph Databases (Neo4j)",
            "priority": "IMPORTANT",
            "tasks": "Understand Nodes and Edges. When to use Graph DBs (Social networks, recommendation engines).",
            "achievement": "Can identify a problem that requires a graph database to avoid complex SQL JOINs."
          },
          {
            "day": 30,
            "topic": "Search Engines (Elasticsearch)",
            "priority": "MUST KNOW",
            "tasks": "Learn how an Inverted Index works. Understand text analysis and full-text search.",
            "achievement": "Can design a scalable search feature utilizing Elasticsearch inverted indices."
          },
          {
            "day": 31,
            "topic": "Time-Series Databases",
            "priority": "IMPORTANT",
            "tasks": "Study InfluxDB or Prometheus. Understand how they compress and store timestamped data metrics.",
            "achievement": "Can explain why a relational DB is poor for storing millions of IoT sensor metrics per second."
          },
          {
            "day": 32,
            "topic": "Blob / Object Storage",
            "priority": "MUST KNOW",
            "tasks": "Understand Amazon S3 architecture. Flat namespaces vs hierarchical file systems.",
            "achievement": "Can securely architecture video/image upload features using direct-to-S3 pre-signed URLs."
          },
          {
            "day": 33,
            "topic": "Transaction Isolation Levels",
            "priority": "MUST KNOW",
            "tasks": "Study Read Uncommitted, Read Committed, Repeatable Read, and Serializable levels.",
            "achievement": "Can explain Dirty Reads, Non-repeatable Reads, and Phantom Reads, and how to prevent them."
          },
          {
            "day": 34,
            "topic": "Concurrency Control (Optimistic/Pessimistic)",
            "priority": "MUST KNOW",
            "tasks": "Compare locking rows (Pessimistic) vs using version numbers (Optimistic).",
            "achievement": "Can implement optimistic locking to prevent lost updates in a ticketing system."
          },
          {
            "day": 35,
            "topic": "Distributed Transactions (2PC)",
            "priority": "MUST KNOW",
            "tasks": "Learn the Two-Phase Commit protocol. Understand the coordinator and cohort roles and why it blocks.",
            "achievement": "Can explain the vulnerability of the coordinator failing in a 2PC setup."
          },
          {
            "day": 36,
            "topic": "Saga Pattern",
            "priority": "MUST KNOW",
            "tasks": "Study long-running distributed transactions using compensating actions instead of strict locking.",
            "achievement": "Can design an Order-Payment-Inventory flow using the Saga choreography pattern."
          },
          {
            "day": 37,
            "topic": "Change Data Capture (CDC)",
            "priority": "MUST KNOW",
            "tasks": "Learn about Debezium and monitoring the database transaction log to stream changes.",
            "achievement": "Can explain how to safely replicate data from Postgres to Elasticsearch without dual-writes."
          },
          {
            "day": 38,
            "topic": "Event Sourcing",
            "priority": "IMPORTANT",
            "tasks": "Understand storing every state change as an append-only event log rather than overwriting current state.",
            "achievement": "Can design an accounting ledger system using pure event sourcing."
          },
          {
            "day": 39,
            "topic": "CQRS Pattern",
            "priority": "IMPORTANT",
            "tasks": "Study Command Query Responsibility Segregation. Separating write models from read models.",
            "achievement": "Can combine Event Sourcing with CQRS to build a highly scalable, eventually consistent read API."
          },
          {
            "day": 40,
            "topic": "Database Migration Strategies",
            "priority": "MUST KNOW",
            "tasks": "Learn how to alter schemas in production with zero downtime using the Expand-and-Contract pattern.",
            "achievement": "Can safely rename a database column in a live, high-traffic environment."
          },
          {
            "day": 41,
            "topic": "Consistent Hashing (Data Layer)",
            "priority": "MUST KNOW",
            "tasks": "Review consistent hashing specifically for distributing database shards.",
            "achievement": "Can calculate the impact of adding a new database shard on a consistent hash ring."
          },
          {
            "day": 42,
            "topic": "Quorum & Replication Factor",
            "priority": "MUST KNOW",
            "tasks": "Study the math of Read and Write quorums (W + R > N) for strong consistency in leaderless databases.",
            "achievement": "Can configure a Cassandra cluster for strict consistency vs high availability."
          },
          {
            "day": 43,
            "topic": "Vector Databases",
            "priority": "MUST KNOW",
            "tasks": "Understand how Pinecone/Milvus store embeddings and perform nearest-neighbor searches.",
            "achievement": "Can explain how vector DBs differ from traditional DBs for AI semantic search."
          },
          {
            "day": 44,
            "topic": "Polyglot Persistence Architecture",
            "priority": "MUST KNOW",
            "tasks": "Study architectures that combine multiple database types (SQL + Redis + ES).",
            "achievement": "Can design a complex system leveraging the strengths of 3+ different database technologies."
          },
          {
            "day": 45,
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
        "days": "Days 46–72",
        "items": [
          {
            "day": 46,
            "topic": "Service Discovery",
            "priority": "MUST KNOW",
            "tasks": "Study client-side vs server-side discovery. Understand tools like Consul, Eureka, and ZooKeeper.",
            "achievement": "Can explain how a microservice dynamically finds the IP of another service in a scaling environment."
          },
          {
            "day": 47,
            "topic": "API Gateway Pattern",
            "priority": "MUST KNOW",
            "tasks": "Learn the responsibilities of an API Gateway (Routing, Auth, Rate Limiting, Aggregation).",
            "achievement": "Can design a unified entry point that masks internal microservice architectures from clients."
          },
          {
            "day": 48,
            "topic": "BFF (Backend for Frontend)",
            "priority": "IMPORTANT",
            "tasks": "Understand creating specific API Gateways tailored for Mobile apps vs Web apps.",
            "achievement": "Can explain when to split a single API Gateway into multiple BFFs to reduce over-fetching."
          },
          {
            "day": 49,
            "topic": "Circuit Breaker Pattern",
            "priority": "MUST KNOW",
            "tasks": "Study how to prevent cascading failures using Closed, Open, and Half-Open states.",
            "achievement": "Can describe how a circuit breaker protects a healthy service from a struggling dependency."
          },
          {
            "day": 50,
            "topic": "Bulkhead Pattern",
            "priority": "MUST KNOW",
            "tasks": "Learn how isolating thread pools prevents one failing service from consuming all system resources.",
            "achievement": "Can combine Circuit Breakers with Bulkheads to create highly resilient microservices."
          },
          {
            "day": 51,
            "topic": "Retry & Timeout Strategies",
            "priority": "MUST KNOW",
            "tasks": "Study exponential backoff and jitter to prevent hammering recovering services.",
            "achievement": "Can implement safe retry logic that avoids causing thundering herd problems."
          },
          {
            "day": 52,
            "topic": "Asynchronous Messaging (Kafka)",
            "priority": "MUST KNOW",
            "tasks": "Deep dive into Kafka architecture: Topics, Partitions, Brokers, and Consumer Groups.",
            "achievement": "Can design a high-throughput event processing pipeline using Kafka partitions for parallelism."
          },
          {
            "day": 53,
            "topic": "Dead Letter Queues (DLQ)",
            "priority": "MUST KNOW",
            "tasks": "Understand how to handle poisonous messages or processing failures in async systems.",
            "achievement": "Can design a robust error-handling flow for failed Kafka or SQS messages."
          },
          {
            "day": 54,
            "topic": "Idempotency in APIs",
            "priority": "MUST KNOW",
            "tasks": "Study how to design APIs where duplicate requests have the exact same effect as one request.",
            "achievement": "Can implement an Idempotency-Key system for processing financial payments safely."
          },
          {
            "day": 55,
            "topic": "Outbox Pattern",
            "priority": "MUST KNOW",
            "tasks": "Learn how to reliably update a database AND publish an event to a message broker without 2PC.",
            "achievement": "Can design a Transactional Outbox to guarantee at-least-once message delivery."
          },
          {
            "day": 56,
            "topic": "Authentication & Authorization",
            "priority": "MUST KNOW",
            "tasks": "Compare Basic Auth, Session Auth, and Token Auth. Understand stateful vs stateless.",
            "achievement": "Can choose the correct authentication mechanism for a monolith vs a distributed API."
          },
          {
            "day": 57,
            "topic": "JWT (JSON Web Tokens)",
            "priority": "MUST KNOW",
            "tasks": "Study JWT structure (Header, Payload, Signature). Understand security risks and token expiration.",
            "achievement": "Can explain how to secure APIs with JWTs and the difficulty of revoking them."
          },
          {
            "day": 58,
            "topic": "OAuth2 & OIDC",
            "priority": "IMPORTANT",
            "tasks": "Understand Authorization Code flow vs Client Credentials flow. Single Sign-On basics.",
            "achievement": "Can diagram the OAuth2 flow for a user logging in via Google to a third-party app."
          },
          {
            "day": 59,
            "topic": "Distributed Tracing Theory",
            "priority": "MUST KNOW",
            "tasks": "Learn how Trace IDs and Span IDs track requests across dozens of microservices (Jaeger/Zipkin).",
            "achievement": "Can explain the theory of tracing a single request hop-by-hop across a massive architecture."
          },
          {
            "day": 60,
            "topic": "Tracing Implementation",
            "priority": "MUST KNOW",
            "tasks": "Actually implement tracing in code (e.g., OpenTelemetry in a mock Python/Java app) and view the trace waterfall in Jaeger.",
            "achievement": "Can practically diagnose latency bottlenecks in distributed microservices."
          },
          {
            "day": 61,
            "topic": "Metrics & Observability Theory",
            "priority": "MUST KNOW",
            "tasks": "Study the RED method (Rate, Errors, Duration) and USE method (Utilization, Saturation, Errors).",
            "achievement": "Can design a monitoring dashboard strategy for a new microservice."
          },
          {
            "day": 62,
            "topic": "Metrics Implementation",
            "priority": "MUST KNOW",
            "tasks": "Export raw metrics from a dummy application and scrape them with a local Prometheus instance. Graph them in Grafana.",
            "achievement": "Can build the foundational observability stack from scratch."
          },
          {
            "day": 63,
            "topic": "Log Aggregation",
            "priority": "MUST KNOW",
            "tasks": "Understand the ELK Stack (Elasticsearch, Logstash, Kibana) for centralized logging.",
            "achievement": "Can explain why you must never log directly to local files in a Dockerized environment."
          },
          {
            "day": 64,
            "topic": "GraphQL vs REST",
            "priority": "IMPORTANT",
            "tasks": "Study GraphQL schemas, queries, and resolvers. Understand under-fetching and over-fetching.",
            "achievement": "Can evaluate if a complex UI dashboard should use GraphQL or multiple REST endpoints."
          },
          {
            "day": 65,
            "topic": "gRPC Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Learn about Protocol Buffers and HTTP/2. Why gRPC is faster than JSON over HTTP/1.1.",
            "achievement": "Can design the internal service-to-service communication layer using gRPC."
          },
          {
            "day": 66,
            "topic": "Batch Processing",
            "priority": "IMPORTANT",
            "tasks": "Understand MapReduce and distributed batch jobs for heavy data processing (Hadoop/Spark basics).",
            "achievement": "Can design a system to process 10TB of log data nightly."
          },
          {
            "day": 67,
            "topic": "Stream Processing",
            "priority": "IMPORTANT",
            "tasks": "Compare batch vs stream processing. Understand Apache Flink or Kafka Streams.",
            "achievement": "Can architect a real-time fraud detection pipeline on incoming credit card swipes."
          },
          {
            "day": 68,
            "topic": "Data Lakes vs Data Warehouses",
            "priority": "IMPORTANT",
            "tasks": "Study the difference between structured OLAP data warehouses and raw object-storage Data Lakes.",
            "achievement": "Can explain when to use Snowflake/Redshift versus an AWS S3 Data Lake."
          },
          {
            "day": 69,
            "topic": "Security: HTTPS & TLS",
            "priority": "MUST KNOW",
            "tasks": "Learn how asymmetric and symmetric encryption work together in the TLS handshake.",
            "achievement": "Can explain the TLS handshake step-by-step in a security-focused interview."
          },
          {
            "day": 70,
            "topic": "Security: Common Vulnerabilities",
            "priority": "MUST KNOW",
            "tasks": "Review OWASP Top 10: SQL Injection, XSS, CSRF, and SSRF.",
            "achievement": "Can secure an architecture against the most common web exploits."
          },
          {
            "day": 71,
            "topic": "Serverless Architecture",
            "priority": "IMPORTANT",
            "tasks": "Study AWS Lambda. Understand Cold Starts, stateless execution, and event-driven triggers.",
            "achievement": "Can design a highly scalable, event-driven image processing pipeline using Serverless."
          },
          {
            "day": 72,
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
        "days": "Days 73–86",
        "items": [
          {
            "day": 73,
            "topic": "PEDALS Framework & Requirements",
            "priority": "MUST KNOW",
            "tasks": "Learn the PEDALS framework. Practice asking functional vs non-functional requirements to perfectly scope out a vague prompt (\"Design Twitter\").",
            "achievement": "Can structure any system design interview answer predictably and logically."
          },
          {
            "day": 74,
            "topic": "Back-of-the-Envelope Math",
            "priority": "MUST KNOW",
            "tasks": "Memorize powers of 2, time conversions, and standard metrics (1 million requests/day = 12 requests/sec). Practice calculating QPS.",
            "achievement": "Can quickly estimate required storage capacity and read/write throughput in your head."
          },
          {
            "day": 75,
            "topic": "QPS Calculator (Implementation)",
            "priority": "MUST KNOW",
            "tasks": "Write a quick Python script or web app that accepts DAU (Daily Active Users) and outputs QPS, Peak QPS, and storage estimates over 5 years.",
            "achievement": "Can mathematically prove your interview estimations using code."
          },
          {
            "day": 76,
            "topic": "API & Data Model Design",
            "priority": "MUST KNOW",
            "tasks": "Practice drawing Entity-Relationship diagrams, choosing SQL vs NoSQL, and writing REST API contracts (HTTP method, path, payload).",
            "achievement": "Can design clean APIs and schemas that support massive scale."
          },
          {
            "day": 77,
            "topic": "REST Contracts (Implementation)",
            "priority": "MUST KNOW",
            "tasks": "Use Swagger/OpenAPI to actually write out the JSON contract for a \"Design Twitter\" problem. Validate the payloads.",
            "achievement": "Can translate an abstract API design into a rigid, testable technical spec."
          },
          {
            "day": 78,
            "topic": "High-Level Design & Bottlenecks",
            "priority": "MUST KNOW",
            "tasks": "Practice drawing the initial architecture (Client -> LB -> App -> DB) and immediately pointing out what breaks at 100M users.",
            "achievement": "Can quickly identify network, CPU, and disk I/O bottlenecks in an architecture."
          },
          {
            "day": 79,
            "topic": "Scaling Strategies",
            "priority": "MUST KNOW",
            "tasks": "Apply caching, sharding, message queues, and CDNs to fix the bottlenecks identified in your high-level designs.",
            "achievement": "Can systematically scale up a basic web app to handle enterprise-level traffic."
          },
          {
            "day": 80,
            "topic": "Handling Pagination at Scale",
            "priority": "MUST KNOW",
            "tasks": "Study cursor-based pagination vs offset-based pagination. Understand why SQL OFFSET gets extremely slow at scale.",
            "achievement": "Can design a highly performant scrolling feed without database degradation."
          },
          {
            "day": 81,
            "topic": "Cursor Pagination (Implementation)",
            "priority": "MUST KNOW",
            "tasks": "Write a small backend script that implements true cursor-based pagination over a dummy dataset of 1 million rows.",
            "achievement": "Can write code that fetches page 10,000 just as fast as page 1."
          },
          {
            "day": 82,
            "topic": "Designing Unique ID Generators",
            "priority": "MUST KNOW",
            "tasks": "Study UUIDs, Ticket Servers, and Twitter Snowflake. How to generate 10,000 sortable unique IDs per second.",
            "achievement": "Can design a distributed, chronologically sortable ID generation service."
          },
          {
            "day": 83,
            "topic": "Designing a Key-Value Store",
            "priority": "IMPORTANT",
            "tasks": "Study the internals of Dynamo or Cassandra. Understand Consistent Hashing and Quorum.",
            "achievement": "Can architect a highly available, distributed key-value database from scratch."
          },
          {
            "day": 84,
            "topic": "Designing a Rate Limiter",
            "priority": "MUST KNOW",
            "tasks": "Practice designing a distributed rate limiter using Redis and sliding window logs.",
            "achievement": "Can design a middleware service to protect APIs from DDoS and brute force attacks."
          },
          {
            "day": 85,
            "topic": "Rate Limiter (Implementation)",
            "priority": "MUST KNOW",
            "tasks": "Write a Python/Java script that uses Redis to implement a Sliding Window rate limiting algorithm.",
            "achievement": "Can implement production-grade API throttling in code."
          },
          {
            "day": 86,
            "topic": "Designing a Web Crawler",
            "priority": "IMPORTANT",
            "tasks": "Study seed URLs, BFS crawling, DNS caching, and handling politeness rules (robots.txt).",
            "achievement": "Can architect a distributed crawler that safely indexes billions of web pages."
          }
        ]
      },
      {
        "id": "1-5",
        "title": "PRACTICAL SYSTEM DESIGN (REAL WORLD)",
        "days": "Days 87–123",
        "items": [
          {
            "day": 87,
            "topic": "Web Crawler (Implementation)",
            "priority": "MUST KNOW",
            "tasks": "Write a basic Breadth-First-Search (BFS) crawler in Python/Java that respects robots.txt and limits concurrency.",
            "achievement": "Can build a functional internet scraper that doesn't crash or get IP-banned."
          },
          {
            "day": 88,
            "topic": "Phase 4 Review: Mock Interview",
            "priority": "MUST KNOW",
            "tasks": "Run a timed 45-minute mock interview for \"Design a URL Shortener\" using the full PEDALS framework.",
            "achievement": "Can successfully navigate a full system design interview from requirements to scaling."
          },
          {
            "day": 89,
            "topic": "Design Pastebin",
            "priority": "MUST KNOW",
            "tasks": "Focus on blob storage for text, database for metadata, and data expiration/cleanup.",
            "achievement": "Can design a service for storing and expiring millions of text snippets."
          },
          {
            "day": 90,
            "topic": "Design Twitter / X",
            "priority": "MUST KNOW",
            "tasks": "Focus on the home timeline generation. Fan-out on write vs Fan-out on read strategies.",
            "achievement": "Can architect a scalable social media feed supporting celebrity accounts with millions of followers."
          },
          {
            "day": 91,
            "topic": "Design Instagram",
            "priority": "MUST KNOW",
            "tasks": "Focus on image storage (S3 + CDN) and generating the news feed using a graph database or denormalized tables.",
            "achievement": "Can design a photo-sharing app optimized for high-bandwidth read operations."
          },
          {
            "day": 92,
            "topic": "Design Dropbox / Google Drive",
            "priority": "MUST KNOW",
            "tasks": "Focus on block-level file syncing, delta syncing, and handling concurrent edits.",
            "achievement": "Can architect a file synchronization service that minimizes network bandwidth usage."
          },
          {
            "day": 93,
            "topic": "Design WhatsApp / Messenger",
            "priority": "MUST KNOW",
            "tasks": "Focus on WebSockets, message sequencing, presence servers (online status), and push notifications.",
            "achievement": "Can design a real-time chat application handling billions of messages daily."
          },
          {
            "day": 94,
            "topic": "Design YouTube / Netflix",
            "priority": "MUST KNOW",
            "tasks": "Focus on video transcoding pipelines, chunking, and massive CDN delivery architectures.",
            "achievement": "Can design a video streaming platform that supports multiple resolutions and adaptive bitrate streaming."
          },
          {
            "day": 95,
            "topic": "Design Uber / Lyft",
            "priority": "MUST KNOW",
            "tasks": "Focus on geospatial indexing (QuadTrees, Geohashes) and matching riders with drivers in real-time.",
            "achievement": "Can design a location-based dispatch system handling rapid real-time updates."
          },
          {
            "day": 96,
            "topic": "Design Yelp / Proximity Service",
            "priority": "MUST KNOW",
            "tasks": "Focus specifically on optimizing geospatial databases to query \"businesses near me\" rapidly.",
            "achievement": "Can architect a highly read-optimized location discovery service."
          },
          {
            "day": 97,
            "topic": "Design Ticketmaster / BookMyShow",
            "priority": "MUST KNOW",
            "tasks": "Focus on high concurrency, preventing double-booking using row locks, and handling massive traffic spikes.",
            "achievement": "Can design a transactional ticketing system that survives the \"Taylor Swift\" traffic spike."
          },
          {
            "day": 98,
            "topic": "Design a Typeahead / Autocomplete",
            "priority": "MUST KNOW",
            "tasks": "Focus on Trie data structures, caching hot prefixes, and updating the trie offline.",
            "achievement": "Can architect a sub-10ms autocomplete suggestion engine for a search bar."
          },
          {
            "day": 99,
            "topic": "Design Amazon / E-Commerce",
            "priority": "MUST KNOW",
            "tasks": "Focus on the shopping cart (DynamoDB), inventory management, and the checkout Saga pattern.",
            "achievement": "Can design a highly available e-commerce platform that never loses a shopping cart."
          },
          {
            "day": 100,
            "topic": "Design a Payment Gateway",
            "priority": "MUST KNOW",
            "tasks": "Focus on Idempotency, 2PC vs Sagas, communicating with external banks, and strict ACID compliance.",
            "achievement": "Can design a bulletproof, secure payment processing API."
          },
          {
            "day": 101,
            "topic": "Design Google Docs (Collaborative Editor)",
            "priority": "IMPORTANT",
            "tasks": "Focus on Operational Transformation (OT) or Conflict-free Replicated Data Types (CRDTs).",
            "achievement": "Can explain the algorithms required to allow multiple users to type in the same document simultaneously."
          },
          {
            "day": 102,
            "topic": "Design a Notification System",
            "priority": "MUST KNOW",
            "tasks": "Focus on fan-out queues, rate limiting, and third-party integrations (APNS, FCM, SendGrid).",
            "achievement": "Can design a centralized service that delivers millions of emails and push notifications reliably."
          },
          {
            "day": 103,
            "topic": "Design a Metrics / Monitoring System",
            "priority": "IMPORTANT",
            "tasks": "Focus on time-series databases, data aggregation, and handling extreme write-heavy workloads.",
            "achievement": "Can architect a Datadog-like system that ingests billions of server metrics."
          },
          {
            "day": 104,
            "topic": "Design a Distributed Message Queue",
            "priority": "IMPORTANT",
            "tasks": "Focus on the internals of Kafka. Disk I/O optimization, zero-copy, and partition replication.",
            "achievement": "Can architect a high-throughput message broker from scratch."
          },
          {
            "day": 105,
            "topic": "Design Tinder",
            "priority": "IMPORTANT",
            "tasks": "Focus on geospatial matching algorithms, swiping logic (queues), and recommendation engines.",
            "achievement": "Can design a fast, location-based matching service with complex recommendation logic."
          },
          {
            "day": 106,
            "topic": "Design Slack",
            "priority": "IMPORTANT",
            "tasks": "Focus on channel architecture, WebSockets for live typing, and searching historical messages.",
            "achievement": "Can design a team-based chat application optimized for large channels."
          },
          {
            "day": 107,
            "topic": "Design a Stock Exchange",
            "priority": "IMPORTANT",
            "tasks": "Focus on ultra-low latency, order matching engines, and strict in-memory state machines.",
            "achievement": "Can explain the extreme architectural differences required for high-frequency trading platforms."
          },
          {
            "day": 108,
            "topic": "Design an AI RAG System",
            "priority": "MUST KNOW",
            "tasks": "Apply system design to AI. Focus on document ingestion pipelines, vector databases, and LLM API orchestration.",
            "achievement": "Can architect an enterprise-grade Retrieval-Augmented Generation pipeline."
          },
          {
            "day": 109,
            "topic": "Design a Distributed Web Cache",
            "priority": "IMPORTANT",
            "tasks": "Focus on consistent hashing, LRU implementation, and memcached architecture.",
            "achievement": "Can architect a Redis/Memcached clone distributed across multiple servers."
          },
          {
            "day": 110,
            "topic": "System Design Anti-Patterns",
            "priority": "MUST KNOW",
            "tasks": "Study common failures: premature microservices, over-sharding, synchronous inter-service calls, and shared databases. Understand why architectures fail in the real world.",
            "achievement": "Can critically evaluate bad architecture proposals and defend simpler, more robust alternatives."
          },
          {
            "day": 111,
            "topic": "Review: Handling Traffic Spikes",
            "priority": "MUST KNOW",
            "tasks": "Review all architectures and study how each handles sudden 100x traffic spikes (e.g., Black Friday).",
            "achievement": "Can apply aggressive caching, queueing, and auto-scaling to survive massive spikes."
          },
          {
            "day": 112,
            "topic": "Review: Handling Data Loss",
            "priority": "MUST KNOW",
            "tasks": "Review disaster recovery, multi-region replication, and backup strategies.",
            "achievement": "Can architect systems that survive the destruction of an entire AWS data center."
          },
          {
            "day": 113,
            "topic": "Mock Interview 1",
            "priority": "MUST KNOW",
            "tasks": "Run a full 45-minute mock interview with a peer or AI for \"Design Twitter\".",
            "achievement": "Can confidently deliver a senior-level system design presentation under time pressure."
          },
          {
            "day": 114,
            "topic": "Mock Interview 2",
            "priority": "MUST KNOW",
            "tasks": "Run a full 45-minute mock interview with a peer or AI for \"Design Uber\".",
            "achievement": "Can successfully navigate geospatial requirements and real-time state management."
          },
          {
            "day": 115,
            "topic": "Mock Interview 3",
            "priority": "MUST KNOW",
            "tasks": "Run a full 45-minute mock interview with a peer or AI for \"Design Ticketmaster\".",
            "achievement": "Can confidently discuss concurrency, locks, and transactional integrity."
          },
          {
            "day": 116,
            "topic": "Mock Interview 4",
            "priority": "MUST KNOW",
            "tasks": "Run a full 45-minute mock interview with a peer or AI for a surprise topic.",
            "achievement": "Can adapt the PEDALS framework to completely unknown system requirements."
          },
          {
            "day": 117,
            "topic": "Refinement & Weaknesses",
            "priority": "MUST KNOW",
            "tasks": "Identify your weakest areas from the mock interviews and review the relevant concepts (e.g., Sagas, WebSockets).",
            "achievement": "Can shore up knowledge gaps in specific distributed systems topics."
          },
          {
            "day": 118,
            "topic": "Final Deep Dive - Networking",
            "priority": "MUST KNOW",
            "tasks": "Re-review TCP/IP, Load Balancing, and DNS routing for ultra-low latency.",
            "achievement": "Can ace deep network-layer probe questions in FAANG interviews."
          },
          {
            "day": 119,
            "topic": "Final Deep Dive - Storage",
            "priority": "MUST KNOW",
            "tasks": "Re-review B-Trees, LSM Trees, and consistent hashing internals.",
            "achievement": "Can explain exactly how databases write data to disk block by block."
          },
          {
            "day": 120,
            "topic": "Mock Interview 5 (Hard Mode)",
            "priority": "MUST KNOW",
            "tasks": "Attempt a highly complex architecture like \"Design a Stock Exchange\" under strict time limits.",
            "achievement": "Can perform under extreme cognitive load."
          },
          {
            "day": 121,
            "topic": "Review of Anti-Patterns",
            "priority": "MUST KNOW",
            "tasks": "Review the Anti-Patterns day. Ensure you do not over-engineer your final interview answers.",
            "achievement": "Can demonstrate maturity by favoring simple solutions over complex ones."
          },
          {
            "day": 122,
            "topic": "Whiteboarding Practice",
            "priority": "MUST KNOW",
            "tasks": "Spend the day drawing architectures physically on a whiteboard or tablet without using drawing software.",
            "achievement": "Can smoothly draw and talk simultaneously in an in-person interview."
          },
          {
            "day": 123,
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
    "days": 129,
    "color": "emerald",
    "phases": [
      {
        "id": "2-1",
        "title": "JVM & CORE JAVA INTERNALS",
        "days": "Days 1–25",
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
            "topic": "Memory Leaks & Profiling",
            "priority": "MUST KNOW",
            "tasks": "Write a program that intentionally causes an OutOfMemoryError. Use VisualVM or JDK Mission Control to find the leak.",
            "achievement": "Can diagnose and fix memory leaks in production JVM applications."
          },
          {
            "day": 4,
            "topic": "Build Systems: Maven",
            "priority": "MUST KNOW",
            "tasks": "Create a `pom.xml` from scratch. Understand the Maven lifecycle (compile, test, package, install). Resolve a dependency conflict using `<dependencyManagement>`.",
            "achievement": "Can manage enterprise dependencies without relying on IDE auto-magic."
          },
          {
            "day": 5,
            "topic": "Build Systems: Gradle",
            "priority": "IMPORTANT",
            "tasks": "Recreate the Maven project using Gradle `build.gradle`. Understand why Gradle is faster (Daemon, incremental builds).",
            "achievement": "Can read and write Groovy/Kotlin DSL build scripts."
          },
          {
            "day": 6,
            "topic": "Modern Java: Streams API",
            "priority": "MUST KNOW",
            "tasks": "Write complex data transformations using `filter()`, `map()`, `flatMap()`, and `collect()`. Understand lazy evaluation.",
            "achievement": "Can replace 50 lines of nested loops with a clean 5-line Stream pipeline."
          },
          {
            "day": 7,
            "topic": "Modern Java: Optional & Records",
            "priority": "MUST KNOW",
            "tasks": "Eliminate NullPointerExceptions using `Optional`. Replace boilerplate DTO classes with Java 14 `record` types.",
            "achievement": "Can write highly defensive, immutable data carriers instantly."
          },
          {
            "day": 8,
            "topic": "Modern Java: Pattern Matching",
            "priority": "IMPORTANT",
            "tasks": "Use Java 17+ pattern matching for `instanceof` and switch expressions. Simplify a complex parser using these features.",
            "achievement": "Can write concise control flow logic using the latest Java LTS features."
          },
          {
            "day": 9,
            "topic": "Collections Framework Deep Dive",
            "priority": "MUST KNOW",
            "tasks": "Study the time complexity of ArrayList vs LinkedList, and HashMap vs TreeMap. Understand how HashMap resolves collisions using Red-Black Trees.",
            "achievement": "Can select the most performant data structure for any algorithmic requirement."
          },
          {
            "day": 10,
            "topic": "Concurrency: Threads & Runnables",
            "priority": "MUST KNOW",
            "tasks": "Create and start multiple threads. Understand race conditions by intentionally breaking a shared counter.",
            "achievement": "Can explain exactly why thread synchronization is dangerous and necessary."
          },
          {
            "day": 11,
            "topic": "Concurrency: Synchronization & Volatile",
            "priority": "MUST KNOW",
            "tasks": "Fix yesterday's broken counter using `synchronized` blocks. Study CPU cache coherence and the `volatile` keyword.",
            "achievement": "Can prevent data corruption in multi-threaded applications."
          },
          {
            "day": 12,
            "topic": "Concurrency: Thread Pools",
            "priority": "MUST KNOW",
            "tasks": "Stop manually creating threads. Use `ExecutorService` (FixedThreadPool, CachedThreadPool) to manage a pool of workers.",
            "achievement": "Can prevent an application from crashing due to thread exhaustion under heavy load."
          },
          {
            "day": 13,
            "topic": "Concurrency: CompletableFuture",
            "priority": "MUST KNOW",
            "tasks": "Write asynchronous, non-blocking code. Chain three REST API calls together using `thenApply` and `thenCombine`.",
            "achievement": "Can execute multiple independent tasks in parallel and merge their results instantly."
          },
          {
            "day": 14,
            "topic": "Concurrency: Concurrent Collections",
            "priority": "MUST KNOW",
            "tasks": "Replace `HashMap` with `ConcurrentHashMap`. Use `CopyOnWriteArrayList` for safe iteration. Study `CountDownLatch`.",
            "achievement": "Can build highly concurrent systems without writing complex synchronization locks."
          },
          {
            "day": 15,
            "topic": "Concurrency: Virtual Threads (Project Loom)",
            "priority": "MUST KNOW",
            "tasks": "Study Java 21 Virtual Threads. Write a program that spawns 1,000,000 virtual threads and observe the RAM usage.",
            "achievement": "Can explain how Loom achieves Go-like concurrency without callback hell."
          },
          {
            "day": 16,
            "topic": "JUnit 5 Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Write unit tests using `@Test`, `@BeforeEach`, and `@ParameterizedTest`. Assert exceptions using `assertThrows`.",
            "achievement": "Can guarantee business logic correctness using automated tests."
          },
          {
            "day": 17,
            "topic": "Mockito Framework",
            "priority": "MUST KNOW",
            "tasks": "Use `@Mock` and `@InjectMocks` to isolate a service class from its database dependency. Write tests verifying specific method calls.",
            "achievement": "Can test tightly coupled code by simulating the behavior of external systems."
          },
          {
            "day": 18,
            "topic": "Test-Driven Development (TDD)",
            "priority": "IMPORTANT",
            "tasks": "Write a test for a \"String Calculator\" BEFORE writing the implementation code. Follow the Red-Green-Refactor cycle.",
            "achievement": "Can architect software designs implicitly driven by testability requirements."
          },
          {
            "day": 19,
            "topic": "Logging Frameworks (SLF4J / Logback)",
            "priority": "MUST KNOW",
            "tasks": "Configure `logback.xml` to roll logs daily and limit file size. Differentiate between TRACE, DEBUG, INFO, WARN, and ERROR levels.",
            "achievement": "Can build auditable applications that leave a breadcrumb trail for debugging."
          },
          {
            "day": 20,
            "topic": "SOLID Principles",
            "priority": "MUST KNOW",
            "tasks": "Study Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.",
            "achievement": "Can identify architectural smells and refactor code to be highly maintainable."
          },
          {
            "day": 21,
            "topic": "Design Patterns: Creational",
            "priority": "MUST KNOW",
            "tasks": "Implement Singleton (Thread-safe), Builder, and Factory patterns from scratch without Spring.",
            "achievement": "Can manage complex object instantiation safely."
          },
          {
            "day": 22,
            "topic": "Design Patterns: Behavioral",
            "priority": "MUST KNOW",
            "tasks": "Implement the Strategy pattern to switch between payment methods, and the Observer pattern for event notification.",
            "achievement": "Can decouple algorithms and event listeners from core business logic."
          },
          {
            "day": 23,
            "topic": "Spring Context Design Patterns",
            "priority": "MUST KNOW",
            "tasks": "Study how Spring uses patterns internally: Template Method (JdbcTemplate), Decorator (Security filters), Proxy (AOP), and Observer (ApplicationEvents).",
            "achievement": "Can recognize enterprise design patterns hiding inside Spring Framework abstractions."
          },
          {
            "day": 24,
            "topic": "Phase 1 Review: Core Java Challenge",
            "priority": "MUST KNOW",
            "tasks": "Build a multi-threaded web scraper using `CompletableFuture` and `ConcurrentHashMap`, unit tested with Mockito.",
            "achievement": "Can write production-ready, highly concurrent Java code without any frameworks."
          },
          {
            "day": 25,
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
        "days": "Days 26–60",
        "items": [
          {
            "day": 26,
            "topic": "Inversion of Control (IoC)",
            "priority": "MUST KNOW",
            "tasks": "Understand the concept of IoC. Write a pure Java application where an orchestrator creates objects and passes them to dependents.",
            "achievement": "Can explain the foundational philosophy that makes Spring necessary."
          },
          {
            "day": 27,
            "topic": "Dependency Injection (DI)",
            "priority": "MUST KNOW",
            "tasks": "Add the Spring Context dependency. Use `@Component` and `@Autowired` (Constructor injection) to let Spring wire your objects together.",
            "achievement": "Can decouple classes completely by letting the framework manage their dependencies."
          },
          {
            "day": 28,
            "topic": "Spring Bean Lifecycle",
            "priority": "MUST KNOW",
            "tasks": "Study Bean Scopes (Singleton vs Prototype). Implement `@PostConstruct` and `@PreDestroy`.",
            "achievement": "Can manage resources (like opening/closing network connections) tied to bean lifecycles."
          },
          {
            "day": 29,
            "topic": "Aspect-Oriented Programming (AOP)",
            "priority": "MUST KNOW",
            "tasks": "Write a custom `@LogExecutionTime` annotation and use an `@Around` aspect to measure method performance without modifying the method code.",
            "achievement": "Can implement cross-cutting concerns (logging, security) cleanly across the entire codebase."
          },
          {
            "day": 30,
            "topic": "Introduction to Spring Boot",
            "priority": "MUST KNOW",
            "tasks": "Initialize a project via Spring Initializr. Understand Auto-Configuration (`@SpringBootApplication`).",
            "achievement": "Can explain how Spring Boot eliminates thousands of lines of XML configuration."
          },
          {
            "day": 31,
            "topic": "Native Compilation (GraalVM)",
            "priority": "MUST KNOW",
            "tasks": "Use Spring Boot 3 AOT (Ahead-of-Time) compilation. Build a native executable using GraalVM. Compare startup time to a standard JVM JAR.",
            "achievement": "Can deploy Java applications that start in 50 milliseconds with minimal RAM footprints."
          },
          {
            "day": 32,
            "topic": "Configuration Management",
            "priority": "MUST KNOW",
            "tasks": "Use `application.yml`. Bind properties to a POJO using `@ConfigurationProperties`. Use `@Profile` for dev vs prod environments.",
            "achievement": "Can manage application settings dynamically without recompiling code."
          },
          {
            "day": 33,
            "topic": "Spring Boot Actuator",
            "priority": "MUST KNOW",
            "tasks": "Enable Actuator. Explore `/actuator/health` and `/actuator/metrics`. Add custom health checks for a third-party API.",
            "achievement": "Can expose application internals to monitoring tools for production readiness."
          },
          {
            "day": 34,
            "topic": "Prometheus & Grafana Integration",
            "priority": "MUST KNOW",
            "tasks": "Expose the `/actuator/prometheus` endpoint. Run a local Prometheus instance via Docker to scrape it, and build a Grafana dashboard for memory usage.",
            "achievement": "Can complete the full observability loop from code to visual dashboard."
          },
          {
            "day": 35,
            "topic": "Virtual Threads + Spring Boot",
            "priority": "MUST KNOW",
            "tasks": "Enable Java 21 Virtual Threads in `application.yml`. Load test a blocking REST endpoint and compare the throughput against platform threads.",
            "achievement": "Can drastically increase the throughput of heavily blocking I/O applications using a single property."
          },
          {
            "day": 36,
            "topic": "Spring Web MVC Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Create a `@RestController`. Return a simple String. Understand the DispatcherServlet under the hood.",
            "achievement": "Can bootstrap an HTTP server and expose endpoints to the internet."
          },
          {
            "day": 37,
            "topic": "RESTful API Design: Path & Query Params",
            "priority": "MUST KNOW",
            "tasks": "Use `@PathVariable` for identifying resources (`/users/1`) and `@RequestParam` for filtering/sorting (`/users?role=admin`).",
            "achievement": "Can design REST APIs that follow industry-standard URL structures."
          },
          {
            "day": 38,
            "topic": "RESTful API Design: HTTP Methods",
            "priority": "MUST KNOW",
            "tasks": "Implement POST (Create), GET (Read), PUT (Update full), PATCH (Update partial), and DELETE. Understand idempotency in methods.",
            "achievement": "Can map CRUD operations perfectly to the correct HTTP verbs."
          },
          {
            "day": 39,
            "topic": "ResponseEntity & Status Codes",
            "priority": "MUST KNOW",
            "tasks": "Stop returning raw objects. Wrap responses in `ResponseEntity` to explicitly control HTTP status codes (200, 201, 404, 400).",
            "achievement": "Can return predictable, standard HTTP responses that frontend clients expect."
          },
          {
            "day": 40,
            "topic": "Global Exception Handling",
            "priority": "MUST KNOW",
            "tasks": "Create a `@RestControllerAdvice` class. Catch specific exceptions (e.g., `UserNotFoundException`) and return a formatted 404 JSON response.",
            "achievement": "Can prevent ugly stack traces from leaking to clients and unify API error formats."
          },
          {
            "day": 41,
            "topic": "RFC 7807 Problem Details",
            "priority": "IMPORTANT",
            "tasks": "Upgrade your exception handler to return `ProblemDetail` objects (Spring Boot 3 feature) for standardized error reporting.",
            "achievement": "Can adhere to strict, modern API design specifications (RFC 7807)."
          },
          {
            "day": 42,
            "topic": "DTO Pattern (Data Transfer Objects)",
            "priority": "MUST KNOW",
            "tasks": "Stop returning JPA entities from controllers! Create separate RequestDTOs and ResponseDTOs to decouple the database from the API contract.",
            "achievement": "Can prevent data leakage (like exposing hashed passwords) and prevent infinite recursion."
          },
          {
            "day": 43,
            "topic": "Bean Validation",
            "priority": "MUST KNOW",
            "tasks": "Add `spring-boot-starter-validation`. Use `@NotNull`, `@Size`, and `@Email` on DTOs. Validate them in the controller using `@Valid`.",
            "achievement": "Can reject bad data instantly before it ever touches business logic."
          },
          {
            "day": 44,
            "topic": "MapStruct for Object Mapping",
            "priority": "MUST KNOW",
            "tasks": "Stop writing manual getter/setter mapping code. Configure MapStruct to auto-generate mapping code between Entities and DTOs.",
            "achievement": "Can write highly performant, type-safe data conversion layers with zero boilerplate."
          },
          {
            "day": 45,
            "topic": "Swagger / OpenAPI Documentation",
            "priority": "MUST KNOW",
            "tasks": "Integrate `springdoc-openapi`. Annotate controllers to generate a beautiful, interactive Swagger UI documentation page.",
            "achievement": "Can automatically generate API documentation that stays perfectly in sync with the code."
          },
          {
            "day": 46,
            "topic": "File Uploads & Downloads",
            "priority": "IMPORTANT",
            "tasks": "Implement an endpoint that accepts `MultipartFile`. Save it to the local disk and write an endpoint to download it via `Resource`.",
            "achievement": "Can handle binary data streams and manage user file uploads securely."
          },
          {
            "day": 47,
            "topic": "Pagination & Sorting (API Layer)",
            "priority": "MUST KNOW",
            "tasks": "Accept `page`, `size`, and `sort` parameters in your API. Return a structured `Page` response containing metadata (total elements, total pages).",
            "achievement": "Can build APIs capable of serving millions of records safely to a UI data table."
          },
          {
            "day": 48,
            "topic": "Content Negotiation",
            "priority": "IMPORTANT",
            "tasks": "Configure your API to return XML instead of JSON if the client sends an `Accept: application/xml` header.",
            "achievement": "Can build highly flexible APIs that support legacy B2B clients."
          },
          {
            "day": 49,
            "topic": "CORS Configuration",
            "priority": "MUST KNOW",
            "tasks": "Implement a `WebMvcConfigurer` to configure Cross-Origin Resource Sharing. Understand why browsers block cross-domain AJAX requests.",
            "achievement": "Can securely allow specific single-page applications (React/Angular) to consume your API."
          },
          {
            "day": 50,
            "topic": "Testing Controllers (WebMvcTest)",
            "priority": "MUST KNOW",
            "tasks": "Write `@WebMvcTest` slices to mock the service layer and test HTTP endpoints using `MockMvc` without starting the full server.",
            "achievement": "Can mathematically prove your API routing, validation, and serialization works perfectly."
          },
          {
            "day": 51,
            "topic": "RestTemplate / WebClient",
            "priority": "MUST KNOW",
            "tasks": "Write a service that calls an external API (like GitHub API) using `RestTemplate` or the reactive `WebClient`.",
            "achievement": "Can integrate your microservice with external third-party systems."
          },
          {
            "day": 52,
            "topic": "HTTP Declarative Clients",
            "priority": "IMPORTANT",
            "tasks": "Refactor yesterday's code using Spring Boot 3 `@HttpExchange` interfaces to call the external API without writing implementation code.",
            "achievement": "Can write modern, boilerplate-free HTTP clients similar to Feign or Retrofit."
          },
          {
            "day": 53,
            "topic": "Integration Testing (SpringBootTest)",
            "priority": "MUST KNOW",
            "tasks": "Write an `@SpringBootTest` that boots the entire context. Call the controller, hit a real (in-memory) database, and verify the response.",
            "achievement": "Can perform end-to-end testing of the entire application stack."
          },
          {
            "day": 54,
            "topic": "Testcontainers",
            "priority": "MUST KNOW",
            "tasks": "Throw away H2 in-memory databases! Use Testcontainers to spin up a real PostgreSQL Docker container during the test phase.",
            "achievement": "Can guarantee that tests perfectly simulate the production database environment."
          },
          {
            "day": 55,
            "topic": "WireMock",
            "priority": "MUST KNOW",
            "tasks": "Use WireMock in your integration tests to stub the responses of external third-party APIs.",
            "achievement": "Can test code that relies on external services without making actual network calls."
          },
          {
            "day": 56,
            "topic": "Dockerizing Spring Boot",
            "priority": "MUST KNOW",
            "tasks": "Write a multi-stage Dockerfile. Package your Spring Boot JAR and run it in an Alpine JRE container. Optimize layers for caching.",
            "achievement": "Can package the entire application into a portable, production-ready artifact."
          },
          {
            "day": 57,
            "topic": "Docker Compose for Local Dev",
            "priority": "MUST KNOW",
            "tasks": "Write a `docker-compose.yml` that boots your Spring Boot app alongside a PostgreSQL database and a Redis cache.",
            "achievement": "Can onboard new developers instantly with a single terminal command."
          },
          {
            "day": 58,
            "topic": "Caching with Spring Cache",
            "priority": "MUST KNOW",
            "tasks": "Enable `@EnableCaching`. Annotate expensive methods with `@Cacheable`. Configure a Redis cache provider.",
            "achievement": "Can drastically reduce database load by caching heavy computational or query results."
          },
          {
            "day": 59,
            "topic": "Scheduling Tasks",
            "priority": "IMPORTANT",
            "tasks": "Use `@Scheduled` to write a cron job that cleans up expired database records every night at midnight.",
            "achievement": "Can automate recurring background maintenance tasks directly within Spring."
          },
          {
            "day": 60,
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
        "days": "Days 61–95",
        "items": [
          {
            "day": 61,
            "topic": "Raw JDBC & Connection Pools",
            "priority": "MUST KNOW",
            "tasks": "Connect to Postgres using pure JDBC. Understand `PreparedStatement`. Learn why HikariCP connection pooling is essential.",
            "achievement": "Can explain how Java communicates with databases at the lowest driver level."
          },
          {
            "day": 62,
            "topic": "Object-Relational Mapping (ORM)",
            "priority": "MUST KNOW",
            "tasks": "Study the impedance mismatch between objects and relational tables. Understand what Hibernate actually does under the hood.",
            "achievement": "Can explain why ORMs are used and when they should be avoided (e.g., massive batch inserts)."
          },
          {
            "day": 63,
            "topic": "JPA Entities & Primary Keys",
            "priority": "MUST KNOW",
            "tasks": "Create `@Entity` classes. Map columns. Use `@Id` and `@GeneratedValue(strategy = GenerationType.IDENTITY)` or `UUID`.",
            "achievement": "Can map Java classes directly to database tables securely."
          },
          {
            "day": 64,
            "topic": "Spring Data JPA Basics",
            "priority": "MUST KNOW",
            "tasks": "Create an interface extending `JpaRepository`. Use derived query methods (e.g., `findByLastNameAndAgeGreaterThan`).",
            "achievement": "Can perform basic CRUD operations without writing a single line of SQL."
          },
          {
            "day": 65,
            "topic": "JPA Relationships: One-to-Many",
            "priority": "MUST KNOW",
            "tasks": "Map an Author to many Books. Understand `@OneToMany`, `@ManyToOne`, and the importance of the `mappedBy` attribute.",
            "achievement": "Can implement bidirectional relationships without causing infinite loops."
          },
          {
            "day": 66,
            "topic": "JPA Relationships: Many-to-Many",
            "priority": "MUST KNOW",
            "tasks": "Map Students to Courses. Understand how Hibernate automatically creates the hidden join table using `@JoinTable`.",
            "achievement": "Can design complex, interconnected domain models in Java."
          },
          {
            "day": 67,
            "topic": "Cascade Types & Orphan Removal",
            "priority": "MUST KNOW",
            "tasks": "Study `CascadeType.ALL` vs `PERSIST`. Understand when deleting an Author should automatically delete their Books.",
            "achievement": "Can safely manage the lifecycle of child entities without leaving orphaned database rows."
          },
          {
            "day": 68,
            "topic": "Transactions (@Transactional)",
            "priority": "MUST KNOW",
            "tasks": "Annotate a service method with `@Transactional`. Intentionally throw a RuntimeException and observe the database rollback.",
            "achievement": "Can guarantee ACID properties across complex, multi-step business logic operations."
          },
          {
            "day": 69,
            "topic": "Fetch Strategies (Lazy vs Eager)",
            "priority": "MUST KNOW",
            "tasks": "Study `FetchType.LAZY`. Understand why Eager fetching is considered an anti-pattern and leads to performance nightmares.",
            "achievement": "Can design entities that do not accidentally load the entire database into memory."
          },
          {
            "day": 70,
            "topic": "The N+1 Query Problem",
            "priority": "MUST KNOW",
            "tasks": "Observe the N+1 problem in the logs when fetching a list of Authors and their Books. Fix it using `@EntityGraph` or `JOIN FETCH`.",
            "achievement": "Can diagnose and fix the most common performance killer in Spring Boot applications."
          },
          {
            "day": 71,
            "topic": "JPQL & Native Queries",
            "priority": "MUST KNOW",
            "tasks": "Write custom `@Query` annotations using JPQL for complex joins. Fall back to `nativeQuery = true` for database-specific features.",
            "achievement": "Can bypass ORM limitations to execute highly optimized custom SQL queries."
          },
          {
            "day": 72,
            "topic": "Pagination in Spring Data",
            "priority": "MUST KNOW",
            "tasks": "Pass a `PageRequest.of(0, 10)` to a repository method. Understand how Hibernate generates the specific SQL `LIMIT`/`OFFSET` clauses.",
            "achievement": "Can fetch data in small, memory-safe chunks directly from the database."
          },
          {
            "day": 73,
            "topic": "Projections",
            "priority": "IMPORTANT",
            "tasks": "Create an interface projection to fetch ONLY the `firstName` and `email` columns instead of the entire User entity.",
            "achievement": "Can optimize read performance by preventing `SELECT *` on massive tables."
          },
          {
            "day": 74,
            "topic": "Database Migrations (Flyway)",
            "priority": "MUST KNOW",
            "tasks": "Integrate Flyway. Write `V1__init.sql` and `V2__add_column.sql`. Understand why `spring.jpa.hibernate.ddl-auto=update` is illegal in production.",
            "achievement": "Can safely version-control and deploy database schema changes across environments."
          },
          {
            "day": 75,
            "topic": "Optimistic Locking",
            "priority": "MUST KNOW",
            "tasks": "Add an `@Version` column. Simulate two users updating the same record simultaneously and handle the `OptimisticLockException`.",
            "achievement": "Can prevent lost updates in highly concurrent business applications (like inventory management)."
          },
          {
            "day": 76,
            "topic": "Data Auditing",
            "priority": "IMPORTANT",
            "tasks": "Enable `@EnableJpaAuditing`. Use `@CreatedDate` and `@LastModifiedDate` to automatically track when rows are inserted or updated.",
            "achievement": "Can implement automatic auditing required for enterprise compliance."
          },
          {
            "day": 77,
            "topic": "Soft Deletes",
            "priority": "IMPORTANT",
            "tasks": "Implement Soft Deletes using `@SQLDelete` and `@Where`. When a user deletes an item, update a `deleted` flag instead of removing the row.",
            "achievement": "Can prevent catastrophic data loss while maintaining a clean application view."
          },
          {
            "day": 78,
            "topic": "Testing the Data Layer (@DataJpaTest)",
            "priority": "MUST KNOW",
            "tasks": "Write tests focused purely on repository queries using `@DataJpaTest`. Validate custom JPQL logic without booting web servers.",
            "achievement": "Can mathematically prove that custom database queries return the exact expected data."
          },
          {
            "day": 79,
            "topic": "Spring Security Architecture",
            "priority": "MUST KNOW",
            "tasks": "Study the `SecurityFilterChain`, `AuthenticationManager`, and `Filter` order. Do not write code yet, just understand the request flow.",
            "achievement": "Can explain how Spring intercepts HTTP requests to enforce security rules."
          },
          {
            "day": 80,
            "topic": "Basic Authentication & Users",
            "priority": "MUST KNOW",
            "tasks": "Implement `UserDetailsService`. Load users from the database. Encode passwords using `BCryptPasswordEncoder`.",
            "achievement": "Can securely store passwords and authenticate users against a relational database."
          },
          {
            "day": 81,
            "topic": "Role-Based Access Control (RBAC)",
            "priority": "MUST KNOW",
            "tasks": "Configure URL-based security (`.requestMatchers(\"/admin/**\").hasRole(\"ADMIN\")`). Add method-level security using `@PreAuthorize`.",
            "achievement": "Can build complex authorization hierarchies to restrict feature access."
          },
          {
            "day": 82,
            "topic": "Stateless Security & JWT",
            "priority": "MUST KNOW",
            "tasks": "Disable session management (Cookies/JSESSIONID). Generate a JWT containing user roles upon successful login.",
            "achievement": "Can architect stateless security required for horizontally scaling microservices."
          },
          {
            "day": 83,
            "topic": "JWT Filter Implementation",
            "priority": "MUST KNOW",
            "tasks": "Write a custom `OncePerRequestFilter` that intercepts all incoming requests, extracts the JWT from the Authorization header, and validates the signature.",
            "achievement": "Can secure an entire API ecosystem using cryptographically signed tokens."
          },
          {
            "day": 84,
            "topic": "Refresh Tokens",
            "priority": "MUST KNOW",
            "tasks": "Implement a short-lived Access Token (15 mins) and a long-lived Refresh Token stored securely in an HTTP-only cookie.",
            "achievement": "Can balance high security with excellent user experience (avoiding constant logins)."
          },
          {
            "day": 85,
            "topic": "CORS & CSRF Defenses",
            "priority": "MUST KNOW",
            "tasks": "Understand Cross-Site Request Forgery. Why is CSRF mostly disabled in stateless API architectures? Properly configure CORS in the security chain.",
            "achievement": "Can secure APIs against browser-based exploitation techniques."
          },
          {
            "day": 86,
            "topic": "OAuth2 Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Study the OAuth2 standard. Understand Authorization Servers, Resource Servers, and the Authorization Code flow.",
            "achievement": "Can explain how a user can grant an application access to their data without sharing passwords."
          },
          {
            "day": 87,
            "topic": "Spring Security OAuth2 Client",
            "priority": "MUST KNOW",
            "tasks": "Implement \"Login with Google/GitHub\" using `spring-boot-starter-oauth2-client`. Extract user details from the provider.",
            "achievement": "Can seamlessly integrate third-party social logins into your application."
          },
          {
            "day": 88,
            "topic": "OAuth2 Resource Server",
            "priority": "MUST KNOW",
            "tasks": "Configure your API to act as a Resource Server that accepts and validates opaque tokens or JWTs issued by an external provider (like Keycloak).",
            "achievement": "Can decouple authentication infrastructure from core business APIs."
          },
          {
            "day": 89,
            "topic": "Keycloak Integration",
            "priority": "IMPORTANT",
            "tasks": "Spin up Keycloak in Docker. Configure a Realm and a Client. Protect your Spring Boot application by delegating authentication to Keycloak.",
            "achievement": "Can leverage enterprise Identity and Access Management (IAM) systems."
          },
          {
            "day": 90,
            "topic": "Method Security Extravaganza",
            "priority": "IMPORTANT",
            "tasks": "Use `@PostFilter` to filter a returned list so the user only sees data belonging to their tenant id.",
            "achievement": "Can implement highly granular, row-level data security constraints."
          },
          {
            "day": 91,
            "topic": "Phase 3 Capstone - Part 1",
            "priority": "MUST KNOW",
            "tasks": "Design the database schema for a \"Blogging Platform\". Write Flyway scripts, Entities, and complex JPQL queries for search.",
            "achievement": "Can build a robust, optimized persistence layer from scratch."
          },
          {
            "day": 92,
            "topic": "Phase 3 Capstone - Part 2",
            "priority": "MUST KNOW",
            "tasks": "Wrap the persistence layer in a REST API and secure it with custom JWT authentication and Role-based method security.",
            "achievement": "Can integrate database design, web routing, and strict security into a unified backend."
          },
          {
            "day": 93,
            "topic": "Interview Prep: Persistence",
            "priority": "MUST KNOW",
            "tasks": "Review N+1 problems, transaction propagation (`REQUIRES_NEW`), and Isolation Levels.",
            "achievement": "Ready to answer advanced database-related Java interview questions."
          },
          {
            "day": 94,
            "topic": "Interview Prep: Security",
            "priority": "MUST KNOW",
            "tasks": "Review JWT vulnerabilities, the OAuth2 flow, and the internal workings of the SecurityFilterChain.",
            "achievement": "Ready to confidently discuss modern API security architectures."
          },
          {
            "day": 95,
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
        "days": "Days 96–129",
        "items": [
          {
            "day": 96,
            "topic": "Microservices vs Monoliths",
            "priority": "MUST KNOW",
            "tasks": "Study the Fallacies of Distributed Computing. Define bounded contexts using Domain-Driven Design (DDD).",
            "achievement": "Can justify exactly when a project should (and should not) use microservices."
          },
          {
            "day": 97,
            "topic": "Service Discovery (Eureka)",
            "priority": "MUST KNOW",
            "tasks": "Create a Eureka Server. Register an Order Service and an Inventory Service so they can find each other without hardcoding IPs.",
            "achievement": "Can build dynamically scaling microservice clusters."
          },
          {
            "day": 98,
            "topic": "API Gateway (Spring Cloud Gateway)",
            "priority": "MUST KNOW",
            "tasks": "Create a Gateway service. Route requests to Order (`/api/orders/**`) and Inventory based on URL paths. Implement a Global Pre-Filter.",
            "achievement": "Can build a unified entry point that routes traffic across a massive microservice ecosystem."
          },
          {
            "day": 99,
            "topic": "Centralized Security at Gateway",
            "priority": "MUST KNOW",
            "tasks": "Move JWT validation to the API Gateway. Let the downstream microservices trust the Gateway via internal headers.",
            "achievement": "Can drastically simplify security across dozens of microservices."
          },
          {
            "day": 100,
            "topic": "Synchronous Communication (Feign)",
            "priority": "MUST KNOW",
            "tasks": "Use Spring Cloud OpenFeign. Create an interface in the Order Service that declaratively calls the Inventory Service via Eureka.",
            "achievement": "Can implement service-to-service HTTP communication cleanly and elegantly."
          },
          {
            "day": 101,
            "topic": "Distributed Tracing (Micrometer)",
            "priority": "MUST KNOW",
            "tasks": "Add Micrometer Tracing. Send traces to a Zipkin or Jaeger Docker container. View a request flowing through the Gateway -> Order -> Inventory.",
            "achievement": "Can debug latency issues hidden deep within a distributed microservice call chain."
          },
          {
            "day": 102,
            "topic": "Resilience4j: Circuit Breaker",
            "priority": "MUST KNOW",
            "tasks": "Wrap the Feign client with a Circuit Breaker. Provide a fallback method if the Inventory Service is down (e.g., return \"Try again later\").",
            "achievement": "Can prevent a single failing microservice from taking down the entire application."
          },
          {
            "day": 103,
            "topic": "Resilience4j: Retries & Rate Limiting",
            "priority": "MUST KNOW",
            "tasks": "Add exponential backoff retries for transient network failures. Add a Rate Limiter at the API Gateway to prevent DDoS attacks.",
            "achievement": "Can build highly robust APIs that gracefully survive traffic spikes and network blips."
          },
          {
            "day": 104,
            "topic": "Centralized Configuration",
            "priority": "IMPORTANT",
            "tasks": "Set up Spring Cloud Config Server backed by a Git repository. Update an application property dynamically without restarting the service.",
            "achievement": "Can manage configuration for 50+ microservices from a single secure location."
          },
          {
            "day": 105,
            "topic": "Introduction to Apache Kafka",
            "priority": "MUST KNOW",
            "tasks": "Spin up Kafka and Zookeeper/Kraft in Docker. Understand Topics, Partitions, Producers, and Consumer Groups.",
            "achievement": "Can explain the architecture of an append-only distributed event log."
          },
          {
            "day": 106,
            "topic": "Spring Kafka: Producers",
            "priority": "MUST KNOW",
            "tasks": "Configure a `KafkaTemplate`. Publish a JSON `OrderCreatedEvent` to a Kafka topic when an order is placed.",
            "achievement": "Can emit asynchronous events to decouple business processes."
          },
          {
            "day": 107,
            "topic": "Spring Kafka: Consumers",
            "priority": "MUST KNOW",
            "tasks": "Use `@KafkaListener` in the Inventory Service to listen for `OrderCreatedEvent`. Update inventory asynchronously.",
            "achievement": "Can process distributed events in real-time, completely decoupling microservices."
          },
          {
            "day": 108,
            "topic": "Kafka: Consumer Groups & Scaling",
            "priority": "MUST KNOW",
            "tasks": "Spin up 3 instances of the Inventory Service. Observe how Kafka distributes the partitions across the Consumer Group for parallel processing.",
            "achievement": "Can horizontally scale background event processing infinitely."
          },
          {
            "day": 109,
            "topic": "Kafka: Error Handling & DLQs",
            "priority": "MUST KNOW",
            "tasks": "Simulate a database failure during event processing. Configure a Dead Letter Queue (DLQ) to catch and store the failed message for manual review.",
            "achievement": "Can build resilient event pipelines that never lose data during crashes."
          },
          {
            "day": 110,
            "topic": "The Transactional Outbox Pattern",
            "priority": "MUST KNOW",
            "tasks": "Understand the dual-write problem (DB save + Kafka publish). Implement the Outbox pattern using a separate table and a background publisher.",
            "achievement": "Can guarantee 100% data consistency between microservice databases and Kafka topics."
          },
          {
            "day": 111,
            "topic": "Distributed Transactions: Saga (Choreography)",
            "priority": "MUST KNOW",
            "tasks": "Implement a Saga. Order Service emits event -> Inventory Service consumes, updates DB, emits \"InventoryReserved\" event -> Order Service finalizes.",
            "achievement": "Can maintain data consistency across microservices without using distributed database locks."
          },
          {
            "day": 112,
            "topic": "Distributed Transactions: Saga (Orchestration)",
            "priority": "IMPORTANT",
            "tasks": "Understand the Orchestration approach using a centralized state machine to coordinate the Saga steps and compensations.",
            "achievement": "Can evaluate and select the correct Saga architecture based on workflow complexity."
          },
          {
            "day": 113,
            "topic": "Compensating Transactions",
            "priority": "MUST KNOW",
            "tasks": "Implement the failure path of a Saga. If Payment fails, emit an event that triggers the Inventory service to add the items back.",
            "achievement": "Can cleanly rollback distributed transactions across multiple disparate databases."
          },
          {
            "day": 114,
            "topic": "Event Sourcing Fundamentals",
            "priority": "IMPORTANT",
            "tasks": "Study the theory of storing every state change as an event rather than overwriting rows. Look at frameworks like Axon.",
            "achievement": "Can architect audit-proof financial systems using pure event sourcing."
          },
          {
            "day": 115,
            "topic": "CQRS Implementation",
            "priority": "IMPORTANT",
            "tasks": "Separate the Write API (hitting a relational DB) from the Read API (hitting an Elasticsearch cluster populated via Kafka events).",
            "achievement": "Can scale read-heavy applications infinitely without impacting write performance."
          },
          {
            "day": 116,
            "topic": "GraphQL Integration",
            "priority": "IMPORTANT",
            "tasks": "Add `spring-boot-starter-graphql`. Create a schema file and implement `@QueryMapping` and `@SchemaMapping` to resolve complex object graphs.",
            "achievement": "Can build modern, flexible APIs for frontend clients suffering from over-fetching."
          },
          {
            "day": 117,
            "topic": "WebSocket Communication",
            "priority": "IMPORTANT",
            "tasks": "Implement STOMP over WebSockets in Spring. Build a real-time notification endpoint that pushes alerts to connected clients.",
            "achievement": "Can push data from the server to the browser instantly without polling."
          },
          {
            "day": 118,
            "topic": "Redis for Distributed Locking",
            "priority": "MUST KNOW",
            "tasks": "Use Redisson to acquire a distributed lock before executing a scheduled task, ensuring it only runs on one microservice instance.",
            "achievement": "Can prevent data corruption caused by background jobs running concurrently across a cluster."
          },
          {
            "day": 119,
            "topic": "API Versioning Strategies",
            "priority": "MUST KNOW",
            "tasks": "Implement URL versioning (`/v1/api`), Header versioning, and Content Negotiation versioning.",
            "achievement": "Can evolve APIs safely without breaking existing mobile app clients in production."
          },
          {
            "day": 120,
            "topic": "Phase 4 Capstone - Architecture (Part 1)",
            "priority": "MUST KNOW",
            "tasks": "Design an E-Commerce microservice architecture: Gateway, Auth Service, Order Service, Inventory Service, and Payment Service. Spin up Kafka and DBs in Docker.",
            "achievement": "Can bootstrap a massive, enterprise-grade distributed system infrastructure."
          },
          {
            "day": 121,
            "topic": "Phase 4 Capstone - Security & Routing (Part 2)",
            "priority": "MUST KNOW",
            "tasks": "Implement the Gateway, configure routes, and centralize JWT validation. Ensure downstream services are secure.",
            "achievement": "Can secure an entire ecosystem of microservices perfectly."
          },
          {
            "day": 122,
            "topic": "Phase 4 Capstone - Business Logic (Part 3)",
            "priority": "MUST KNOW",
            "tasks": "Implement the core CRUD and persistence logic for Orders and Inventory using Spring Data JPA and MapStruct.",
            "achievement": "Can rapidly develop robust domain-driven microservices."
          },
          {
            "day": 123,
            "topic": "Phase 4 Capstone - Kafka Sagas (Part 4)",
            "priority": "MUST KNOW",
            "tasks": "Wire the services together using Kafka. Implement a fully functioning Saga with compensating transactions for failed payments.",
            "achievement": "Can build bulletproof, eventually-consistent distributed workflows."
          },
          {
            "day": 124,
            "topic": "Phase 4 Capstone - Resiliency (Part 5)",
            "priority": "MUST KNOW",
            "tasks": "Add Circuit Breakers to external calls, export Micrometer traces to Zipkin, and add global exception handling.",
            "achievement": "Can harden a system against network failures and provide deep observability."
          },
          {
            "day": 125,
            "topic": "Interview Prep: Spring Framework",
            "priority": "MUST KNOW",
            "tasks": "Review IoC, Bean Lifecycles, AOP, and `@Transactional` propagation behaviors.",
            "achievement": "Ready to dominate the foundational Spring boot technical interview."
          },
          {
            "day": 126,
            "topic": "Interview Prep: Microservices",
            "priority": "MUST KNOW",
            "tasks": "Review Circuit Breakers, API Gateways, Service Discovery, and the Outbox Pattern.",
            "achievement": "Ready to ace system design interviews focusing on microservice architecture."
          },
          {
            "day": 127,
            "topic": "Interview Prep: Kafka & Async",
            "priority": "MUST KNOW",
            "tasks": "Review Kafka partitions, consumer groups, offset management, and at-least-once delivery semantics.",
            "achievement": "Ready to discuss high-throughput data pipelines with senior engineers."
          },
          {
            "day": 128,
            "topic": "Resume & GitHub Polish",
            "priority": "MUST KNOW",
            "tasks": "Push your capstone to GitHub. Write an exceptional README detailing the architecture, Saga flow, and how to run it via Docker Compose.",
            "achievement": "Can present a FAANG-tier portfolio project to hiring managers."
          },
          {
            "day": 129,
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
    "days": 135,
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
        "days": "Days 26–55",
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
            "topic": "Encoder vs Decoder Models",
            "priority": "MUST KNOW",
            "tasks": "Understand the difference between BERT (Encoder-only, masked language modeling) and GPT (Decoder-only, autoregressive generation).",
            "achievement": "Can choose the correct transformer family for classification vs text generation tasks."
          },
          {
            "day": 38,
            "topic": "Hugging Face Ecosystem",
            "priority": "MUST KNOW",
            "tasks": "Explore the `transformers` library. Use the high-level `pipeline` API for sentiment analysis and text generation.",
            "achievement": "Can leverage pre-trained, state-of-the-art models with exactly 3 lines of code."
          },
          {
            "day": 39,
            "topic": "Hugging Face Tokenizers",
            "priority": "MUST KNOW",
            "tasks": "Load a specific model's tokenizer (e.g., `AutoTokenizer.from_pretrained`). Handle padding, truncation, and attention masks.",
            "achievement": "Can prepare raw text batches perfectly formatted for transformer input."
          },
          {
            "day": 40,
            "topic": "Fine-Tuning with HF Trainer API",
            "priority": "MUST KNOW",
            "tasks": "Take a pre-trained BERT model. Use the `Trainer` API to fine-tune it on a custom IMDB dataset for sentiment classification.",
            "achievement": "Can adapt open-source foundational models to highly specific business tasks."
          },
          {
            "day": 41,
            "topic": "Intro to Large Language Models (LLMs)",
            "priority": "MUST KNOW",
            "tasks": "Study the evolution from GPT-2 to Llama 3. Understand parameter counts (7B vs 70B) and the concept of Emergent Abilities.",
            "achievement": "Can navigate the open-source LLM landscape and select appropriate models for different hardware."
          },
          {
            "day": 42,
            "topic": "Prompt Engineering Techniques",
            "priority": "MUST KNOW",
            "tasks": "Master Few-Shot Prompting, Chain-of-Thought (CoT), and ReAct prompting.",
            "achievement": "Can dramatically increase the reasoning capability of an LLM through clever text inputs."
          },
          {
            "day": 43,
            "topic": "OpenAI API & System Prompts",
            "priority": "MUST KNOW",
            "tasks": "Write a Python script to call the OpenAI API. Understand the difference between System, User, and Assistant message roles.",
            "achievement": "Can integrate commercial frontier models into a Python application."
          },
          {
            "day": 44,
            "topic": "Structured Outputs (Instructor/Pydantic)",
            "priority": "MUST KNOW",
            "tasks": "Use the `instructor` library with Pydantic to force an LLM (like GPT-4) to return strictly typed, validated JSON instead of raw text.",
            "achievement": "Can reliably extract structured data (like objects and lists) from unstructured text using AI."
          },
          {
            "day": 45,
            "topic": "Instruction Tuning vs RLHF",
            "priority": "MUST KNOW",
            "tasks": "Study how base foundation models are transformed into chat models. Understand Reinforcement Learning from Human Feedback (RLHF) and DPO.",
            "achievement": "Can explain why a base Llama model continues your text while a chat Llama answers your questions."
          },
          {
            "day": 46,
            "topic": "Parameter-Efficient Fine-Tuning (PEFT)",
            "priority": "MUST KNOW",
            "tasks": "Study why full fine-tuning of a 7B model is impossible on consumer GPUs. Learn the theory of PEFT.",
            "achievement": "Can explain how to fine-tune massive models without updating all 7 billion parameters."
          },
          {
            "day": 47,
            "topic": "LoRA (Low-Rank Adaptation)",
            "priority": "MUST KNOW",
            "tasks": "Deep dive into LoRA. Understand how freezing the original weights and injecting tiny, trainable rank-decomposition matrices saves RAM.",
            "achievement": "Can explain the math behind the most popular LLM fine-tuning technique in the world."
          },
          {
            "day": 48,
            "topic": "Quantization Theory",
            "priority": "MUST KNOW",
            "tasks": "Study FP32, FP16, INT8, and INT4 (NF4). Understand how reducing the precision of weights shrinks model size drastically with minimal accuracy loss.",
            "achievement": "Can fit a 14GB model into 4GB of VRAM using mathematical approximation."
          },
          {
            "day": 49,
            "topic": "QLoRA Implementation (Hands-on)",
            "priority": "MUST KNOW",
            "tasks": "Use `bitsandbytes` and `peft` to fine-tune a 4-bit quantized Llama 3 model on a custom dataset using a single Colab T4 GPU.",
            "achievement": "Can train a state-of-the-art open-source LLM on cheap consumer hardware."
          },
          {
            "day": 50,
            "topic": "Post-Fine-Tune Evaluation",
            "priority": "MUST KNOW",
            "tasks": "Write a script that uses GPT-4 as an \"LLM-as-a-judge\" to compare the answers of your base Llama model vs your newly fine-tuned QLoRA model.",
            "achievement": "Can mathematically prove that your fine-tuning process actually improved the model."
          },
          {
            "day": 51,
            "topic": "Context Windows & RoPE",
            "priority": "MUST KNOW",
            "tasks": "Study how LLMs handle long context. Understand Rotary Positional Embeddings (RoPE) and KV-Cache memory consumption.",
            "achievement": "Can explain why passing a 100-page PDF to an LLM causes massive RAM spikes."
          },
          {
            "day": 52,
            "topic": "Vision Transformers (ViT)",
            "priority": "IMPORTANT",
            "tasks": "Study how images are split into patches and fed into a standard Transformer architecture (treating patches like word tokens).",
            "achievement": "Can explain how modern AI understands and classifies images without using Convolutional layers."
          },
          {
            "day": 53,
            "topic": "CLIP & Multimodal Embeddings",
            "priority": "MUST KNOW",
            "tasks": "Study OpenAI's CLIP model. Understand how it maps images and text into the exact same embedding space.",
            "achievement": "Can build a \"search images with text\" search engine."
          },
          {
            "day": 54,
            "topic": "LLM Evaluation Basics",
            "priority": "IMPORTANT",
            "tasks": "Study traditional metrics: Perplexity, BLEU, and ROUGE. Understand why they fail for generative tasks.",
            "achievement": "Can evaluate standard translation and summarization models."
          },
          {
            "day": 55,
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
        "days": "Days 56–88",
        "items": [
          {
            "day": 56,
            "topic": "RAG Architecture Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Study Retrieval-Augmented Generation. Understand why giving an LLM access to external data prevents hallucinations and provides private context.",
            "achievement": "Can architect the standard enterprise solution for internal corporate AI chat."
          },
          {
            "day": 57,
            "topic": "Document Ingestion & Parsing",
            "priority": "MUST KNOW",
            "tasks": "Write a script to load PDFs, Word docs, and HTML files. Handle difficult formats like tables and images inside PDFs.",
            "achievement": "Can extract clean, usable text from messy corporate document stores."
          },
          {
            "day": 58,
            "topic": "Chunking Strategies",
            "priority": "MUST KNOW",
            "tasks": "Implement Fixed-size, Recursive Character, and Semantic chunking. Understand the overlap parameter.",
            "achievement": "Can split massive documents into the perfect size for vector search and LLM context windows."
          },
          {
            "day": 59,
            "topic": "Embedding Models in Practice",
            "priority": "MUST KNOW",
            "tasks": "Compare OpenAI `text-embedding-3` with open-source `BGE-Large` via Hugging Face. Generate embeddings for 1000 chunks.",
            "achievement": "Can convert human text into high-dimensional semantic vectors."
          },
          {
            "day": 60,
            "topic": "Vector Databases (Pinecone/Milvus)",
            "priority": "MUST KNOW",
            "tasks": "Provision a cloud Vector DB. Insert your chunk embeddings alongside metadata (author, date, page_number).",
            "achievement": "Can manage a massive, scalable database optimized purely for semantic search."
          },
          {
            "day": 61,
            "topic": "Vector Search Algorithms (HNSW)",
            "priority": "MUST KNOW",
            "tasks": "Study Hierarchical Navigable Small World (HNSW) and Inverted File Index (IVFFlat). Understand approximate nearest neighbors (ANN).",
            "achievement": "Can explain how a Vector DB searches 10 million vectors in 10 milliseconds."
          },
          {
            "day": 62,
            "topic": "RAG with pgvector",
            "priority": "MUST KNOW",
            "tasks": "Install the `pgvector` extension in PostgreSQL. Create a vector column, index it with HNSW, and write a cosine distance SQL query.",
            "achievement": "Can add semantic search capabilities to a standard relational database without adding new infrastructure."
          },
          {
            "day": 63,
            "topic": "Building a Basic RAG Pipeline",
            "priority": "MUST KNOW",
            "tasks": "Combine the pieces: User query -> Embed query -> Vector Search -> Retrieve Top K -> Inject into Prompt -> LLM Generation.",
            "achievement": "Can build a fully functional \"Chat with your PDF\" application from scratch."
          },
          {
            "day": 64,
            "topic": "Advanced RAG: Query Expansion",
            "priority": "MUST KNOW",
            "tasks": "Implement Multi-Query (having the LLM rephrase the user's question 3 times and searching all of them) to improve retrieval recall.",
            "achievement": "Can prevent poor search results caused by vague user queries."
          },
          {
            "day": 65,
            "topic": "Advanced RAG: HyDE",
            "priority": "MUST KNOW",
            "tasks": "Implement Hypothetical Document Embeddings. Ask the LLM to generate a fake answer, embed the fake answer, and search for that vector.",
            "achievement": "Can drastically improve retrieval when the user query and the document text are structured very differently."
          },
          {
            "day": 66,
            "topic": "Advanced Retrieval: DSPy Basics",
            "priority": "MUST KNOW",
            "tasks": "Learn DSPy, a framework that compiles and optimizes prompts automatically. Write a basic Signature and compile it using a Teleprompter.",
            "achievement": "Can programmatically optimize prompts rather than manually tweaking text."
          },
          {
            "day": 67,
            "topic": "Advanced RAG: Parent-Child Chunking",
            "priority": "MUST KNOW",
            "tasks": "Embed small \"child\" chunks for accurate search, but retrieve the larger \"parent\" document to give the LLM more context.",
            "achievement": "Can balance strict search precision with broad LLM context generation."
          },
          {
            "day": 68,
            "topic": "Advanced RAG: Hybrid Search",
            "priority": "MUST KNOW",
            "tasks": "Combine Vector Search (semantic meaning) with BM25 Keyword Search (exact matching). Use Reciprocal Rank Fusion (RRF) to merge the scores.",
            "achievement": "Can build a search engine that understands synonyms but doesn't miss exact product IDs."
          },
          {
            "day": 69,
            "topic": "Advanced RAG: Reranking Models",
            "priority": "MUST KNOW",
            "tasks": "Retrieve Top 50 documents using fast Vector Search, then pass them through a Cross-Encoder (like Cohere Rerank) to perfectly re-order the Top 5.",
            "achievement": "Can implement the single most effective technique for boosting RAG accuracy."
          },
          {
            "day": 70,
            "topic": "RAG Evaluation Theory (RAGAS)",
            "priority": "MUST KNOW",
            "tasks": "Study the RAGAS metrics: Faithfulness (no hallucinations), Answer Relevance, Context Precision, and Context Recall.",
            "achievement": "Can mathematically evaluate if a RAG pipeline is ready for production."
          },
          {
            "day": 71,
            "topic": "RAGAS Implementation",
            "priority": "MUST KNOW",
            "tasks": "Use the `ragas` Python library to automatically score your RAG pipeline against a test dataset of 50 questions.",
            "achievement": "Can build a CI/CD test suite for an AI application."
          },
          {
            "day": 72,
            "topic": "Self-Reflective RAG",
            "priority": "MUST KNOW",
            "tasks": "Implement a loop: LLM generates answer -> Another LLM checks if the answer actually addresses the prompt -> If no, re-retrieve and try again.",
            "achievement": "Can build highly robust, error-correcting AI generation pipelines."
          },
          {
            "day": 73,
            "topic": "Data Engineering: Airflow Basics",
            "priority": "IMPORTANT",
            "tasks": "Study Apache Airflow for DAG (Directed Acyclic Graph) orchestration. Understand Tasks, Operators, and Scheduling.",
            "achievement": "Can automate complex, multi-step data pipelines reliably."
          },
          {
            "day": 74,
            "topic": "Data Engineering: RAG Ingestion DAG",
            "priority": "MUST KNOW",
            "tasks": "Write an Airflow DAG that runs nightly: Downloads new PDFs -> Chunks them -> Embeds them -> Upserts to Pinecone.",
            "achievement": "Can automate the continuous updating of an enterprise RAG knowledge base."
          },
          {
            "day": 75,
            "topic": "GraphRAG Theory & Setup",
            "priority": "MUST KNOW",
            "tasks": "Install Neo4j. Use an LLM to extract Entities (Nodes) and Relationships (Edges) from raw text. Understand why Knowledge Graphs excel where Vector DBs fail.",
            "achievement": "Can map unstructured text into highly structured, queryable relationship graphs."
          },
          {
            "day": 76,
            "topic": "GraphRAG Queries (Cypher)",
            "priority": "MUST KNOW",
            "tasks": "Combine Vector Search with Cypher Graph Queries. Retrieve a document, then use the graph to retrieve all connected entities up to 3 hops away.",
            "achievement": "Can solve complex \"connect the dots\" questions across thousands of documents."
          },
          {
            "day": 77,
            "topic": "AI Security: OWASP LLM Top 10",
            "priority": "MUST KNOW",
            "tasks": "Study Prompt Injection, Insecure Output Handling, Training Data Poisoning, and Supply Chain Vulnerabilities.",
            "achievement": "Can identify critical security risks unique to Large Language Models."
          },
          {
            "day": 78,
            "topic": "AI Security: Prompt Injection Defense",
            "priority": "MUST KNOW",
            "tasks": "Implement robust system prompts, use delimiters (`\"\"\"`), and test your app against common jailbreaks (like \"DAN\").",
            "achievement": "Can prevent malicious users from hijacking your AI application."
          },
          {
            "day": 79,
            "topic": "AI Security: PII Detection (Presidio)",
            "priority": "MUST KNOW",
            "tasks": "Use Microsoft Presidio to automatically detect and redact Personally Identifiable Information (SSN, emails) before sending text to the OpenAI API.",
            "achievement": "Can guarantee data privacy compliance (GDPR/HIPAA) in AI architectures."
          },
          {
            "day": 80,
            "topic": "AI Security: NeMo Guardrails",
            "priority": "MUST KNOW",
            "tasks": "Implement Nvidia NeMo Guardrails to strictly restrict the topics your chatbot is allowed to discuss using Colang configurations.",
            "achievement": "Can prevent a corporate chatbot from answering questions about competitors or politics."
          },
          {
            "day": 81,
            "topic": "AI Security: LlamaGuard",
            "priority": "MUST KNOW",
            "tasks": "Deploy Meta's LlamaGuard model as an input/output filter to automatically detect and block toxic, violent, or unsafe content.",
            "achievement": "Can implement an enterprise-grade AI safety layer."
          },
          {
            "day": 82,
            "topic": "AI Security: Red Teaming",
            "priority": "MUST KNOW",
            "tasks": "Act as an attacker. Systematically attempt to break, bypass, and exploit the RAG pipeline you built over the last 20 days.",
            "achievement": "Can rigorously audit an AI application for catastrophic edge cases."
          },
          {
            "day": 83,
            "topic": "Semantic Caching",
            "priority": "MUST KNOW",
            "tasks": "Implement `GPTCache`. Store LLM responses in Redis based on the embedding of the user's question. If a similar question is asked, return the cache.",
            "achievement": "Can drastically reduce OpenAI API costs and response latency by caching semantic meaning."
          },
          {
            "day": 84,
            "topic": "Async Python Basics (asyncio)",
            "priority": "MUST KNOW",
            "tasks": "Deep dive into `asyncio` and `await`. Compare synchronous `requests` to asynchronous `httpx` for making multiple API calls concurrently.",
            "achievement": "Can write highly concurrent, non-blocking Python code essential for production AI."
          },
          {
            "day": 85,
            "topic": "Serving Models with FastAPI",
            "priority": "MUST KNOW",
            "tasks": "Wrap your RAG pipeline in a FastAPI backend. Understand Uvicorn and ASGI. Implement an endpoint that receives JSON and returns the LLM answer.",
            "achievement": "Can expose AI functionality as a high-performance REST API."
          },
          {
            "day": 86,
            "topic": "Streaming LLM Responses",
            "priority": "MUST KNOW",
            "tasks": "Modify your FastAPI endpoint to use Server-Sent Events (SSE). Stream the LLM tokens to the client as they are generated.",
            "achievement": "Can provide the \"ChatGPT-like\" instant typing experience to users, bypassing long generation delays."
          },
          {
            "day": 87,
            "topic": "Phase 3 Capstone - Part 1",
            "priority": "MUST KNOW",
            "tasks": "Build the Ingestion layer of a \"Corporate Knowledge Bot\". Parse 100 PDFs, chunk them, embed with open-source models, and store in pgvector.",
            "achievement": "Can build a highly optimized data foundation for an AI product."
          },
          {
            "day": 88,
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
        "days": "Days 89–135",
        "items": [
          {
            "day": 89,
            "topic": "Introduction to Autonomous Agents",
            "priority": "MUST KNOW",
            "tasks": "Study the difference between RAG (retrieve and generate) and Agents (plan, use tools, loop, and act).",
            "achievement": "Can explain the paradigm shift from passive text generators to active digital workers."
          },
          {
            "day": 90,
            "topic": "Function Calling (Tool Use)",
            "priority": "MUST KNOW",
            "tasks": "Use the OpenAI API `tools` parameter. Define a JSON schema for a `get_weather(location)` function. See how the LLM decides to call it.",
            "achievement": "Can give a frozen language model the ability to fetch real-time, external data."
          },
          {
            "day": 91,
            "topic": "Building Custom Tools",
            "priority": "MUST KNOW",
            "tasks": "Write Python functions to search Google, query a SQL database, and fetch a stock price. Wrap them as LLM-accessible tools.",
            "achievement": "Can bridge the gap between AI reasoning and real-world system execution."
          },
          {
            "day": 92,
            "topic": "OpenAI Assistants API v2",
            "priority": "IMPORTANT",
            "tasks": "Experiment with the managed Assistants API. Utilize built-in Code Interpreter and File Search without building the infrastructure yourself.",
            "achievement": "Can quickly deploy capable agents using OpenAI's managed platform."
          },
          {
            "day": 93,
            "topic": "ReAct Prompting Paradigm",
            "priority": "MUST KNOW",
            "tasks": "Study the Reason + Act paper. Understand the \"Thought -> Action -> Observation\" loop that powers agentic decision-making.",
            "achievement": "Can explain the core cognitive loop utilized by almost all autonomous agents."
          },
          {
            "day": 94,
            "topic": "LangChain Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Learn the core LangChain abstractions: Prompts, Output Parsers, and Runnables (LCEL - LangChain Expression Language).",
            "achievement": "Can chain multiple LLM calls and parsers together using modular syntax."
          },
          {
            "day": 95,
            "topic": "LangGraph Concepts",
            "priority": "MUST KNOW",
            "tasks": "Understand why LangChain Chains (linear) fail for agents. Study LangGraph: Nodes, Edges, and representing agent logic as a cyclic graph.",
            "achievement": "Can articulate why state machines are the correct architecture for complex AI agents."
          },
          {
            "day": 96,
            "topic": "LangGraph: State & StateGraph",
            "priority": "MUST KNOW",
            "tasks": "Define a TypedDict representing the agent's memory (State). Initialize a `StateGraph` and understand how State is passed between nodes.",
            "achievement": "Can architect the memory structure for an autonomous workflow."
          },
          {
            "day": 97,
            "topic": "LangGraph: Nodes & Edges",
            "priority": "MUST KNOW",
            "tasks": "Write standard Python functions (Nodes) that modify the State. Connect them using linear edges. Compile and run the graph.",
            "achievement": "Can execute a multi-step LLM workflow defined as a strict graph."
          },
          {
            "day": 98,
            "topic": "LangGraph: Conditional Edges",
            "priority": "MUST KNOW",
            "tasks": "Implement a routing function. If the LLM output contains a tool call, route to the ToolNode. Otherwise, route to the END node.",
            "achievement": "Can build the core loop of an autonomous, decision-making agent."
          },
          {
            "day": 99,
            "topic": "LangGraph: Advanced State (Reducers)",
            "priority": "MUST KNOW",
            "tasks": "Modify your State to use the `add_messages` reducer. Understand how this automatically appends new messages to the chat history array.",
            "achievement": "Can manage growing conversational memory without manually merging lists."
          },
          {
            "day": 100,
            "topic": "LangGraph: Persistence (Checkpointers)",
            "priority": "MUST KNOW",
            "tasks": "Use `MemorySaver` or `PostgresSaver`. Pass a `thread_id` to the graph. Stop the graph, and resume it later from the exact same state.",
            "achievement": "Can build long-running agents that remember user conversations across sessions."
          },
          {
            "day": 101,
            "topic": "LangGraph: Human-in-the-Loop (HITL)",
            "priority": "MUST KNOW",
            "tasks": "Configure the graph to interrupt `before` the ToolNode executes. Prompt the user for approval via terminal, then resume the graph.",
            "achievement": "Can design safe agent architectures that require human sign-off for dangerous actions (like DB drops)."
          },
          {
            "day": 102,
            "topic": "LangGraph: Time Travel",
            "priority": "MUST KNOW",
            "tasks": "Fetch the state history using the checkpointer. Rewind the agent to a previous state, modify a message, and branch the execution.",
            "achievement": "Can debug complex agent failures by replaying past executions."
          },
          {
            "day": 103,
            "topic": "LangGraph: Multi-Agent Supervisor",
            "priority": "MUST KNOW",
            "tasks": "Design a graph with a \"Supervisor\" LLM node that decides whether to route the task to a \"Coder\" LLM node or a \"Researcher\" LLM node.",
            "achievement": "Can orchestrate a team of specialized AI agents working under a manager."
          },
          {
            "day": 104,
            "topic": "LangGraph: Multi-Agent Collaboration",
            "priority": "MUST KNOW",
            "tasks": "Design a graph where a \"Generator\" LLM writes an article and passes it to a \"Reviewer\" LLM, looping until the Reviewer approves it.",
            "achievement": "Can build self-improving, peer-reviewing AI architectures."
          },
          {
            "day": 105,
            "topic": "LangGraph: Streaming Outputs",
            "priority": "MUST KNOW",
            "tasks": "Stream the execution of the graph using `.astream_events()`. Yield tokens to the frontend as the LLM generates them inside the nodes.",
            "achievement": "Can provide real-time UI feedback while a complex LangGraph is executing."
          },
          {
            "day": 106,
            "topic": "Semantic Routing",
            "priority": "MUST KNOW",
            "tasks": "Implement `semantic-router`. Instead of asking an LLM to decide which tool to use, use fast vector embeddings to route the user's query instantly.",
            "achievement": "Can bypass slow, expensive LLM calls for predictable routing logic."
          },
          {
            "day": 107,
            "topic": "SQL Agents",
            "priority": "MUST KNOW",
            "tasks": "Build an agent connected to a PostgreSQL database. Give it the schema, and let it autonomously write, execute, and fix SQL queries to answer questions.",
            "achievement": "Can build a \"text-to-SQL\" analytics bot for business intelligence."
          },
          {
            "day": 108,
            "topic": "Code Interpreter Agents",
            "priority": "MUST KNOW",
            "tasks": "Spin up a secure Docker sandbox. Build an agent that writes Python code to perform data analysis, executes it in the sandbox, and reads the output.",
            "achievement": "Can build highly capable data-science agents that solve math using code, not text generation."
          },
          {
            "day": 109,
            "topic": "Web Research Agents (Tavily)",
            "priority": "MUST KNOW",
            "tasks": "Integrate the Tavily Search API. Build an agent that searches the web, scrapes 5 articles, synthesizes the information, and cites its sources.",
            "achievement": "Can build an automated research assistant that grounds answers in real-time internet data."
          },
          {
            "day": 110,
            "topic": "Agent Observability (LangSmith)",
            "priority": "MUST KNOW",
            "tasks": "Configure LangSmith. Run your LangGraph agent and view the trace. Inspect exactly which prompts were sent and which tools were called.",
            "achievement": "Can debug non-deterministic AI agent loops using enterprise observability platforms."
          },
          {
            "day": 111,
            "topic": "Agent Evaluation",
            "priority": "MUST KNOW",
            "tasks": "Use LLM-as-a-judge to evaluate an agent's trajectory. Did it select the most efficient tools? Did it loop too many times?",
            "achievement": "Can quantitatively score the intelligence and efficiency of an autonomous agent."
          },
          {
            "day": 112,
            "topic": "Optimizing Agent Latency",
            "priority": "MUST KNOW",
            "tasks": "Implement parallel tool execution. If an agent needs weather for NY, SF, and LA, ensure it calls the tool 3 times concurrently, not sequentially.",
            "achievement": "Can architect high-performance agents that don't leave users waiting for minutes."
          },
          {
            "day": 113,
            "topic": "Phase 4 Capstone - Scope & Tools (Part 1)",
            "priority": "MUST KNOW",
            "tasks": "Design a \"Software Engineer Agent\". Write tools for reading local files, running bash commands in a Docker sandbox, and searching GitHub.",
            "achievement": "Can establish the foundational capabilities of an advanced autonomous system."
          },
          {
            "day": 114,
            "topic": "Phase 4 Capstone - LangGraph Setup (Part 2)",
            "priority": "MUST KNOW",
            "tasks": "Build the StateGraph. Implement a Supervisor, a Coder, and a Reviewer. Wire up the conditional edges and the PostgresSaver checkpointer.",
            "achievement": "Can architect complex, multi-agent state machines."
          },
          {
            "day": 115,
            "topic": "Phase 4 Capstone - FastAPI Deployment (Part 3)",
            "priority": "MUST KNOW",
            "tasks": "Wrap the LangGraph execution in a FastAPI backend using SSE streaming. Implement a Human-in-the-loop endpoint to approve code execution.",
            "achievement": "Can deploy enterprise-grade AI agents as scalable HTTP services."
          },
          {
            "day": 116,
            "topic": "Review: Core AI Math & Transformers",
            "priority": "MUST KNOW",
            "tasks": "Review gradients, multi-head attention, and how tokenization impacts model capabilities.",
            "achievement": "Ready to answer deep technical questions on how LLMs actually work."
          },
          {
            "day": 117,
            "topic": "Review: RAG Architecture",
            "priority": "MUST KNOW",
            "tasks": "Review chunking strategies, vector search algorithms (HNSW), and reranking patterns.",
            "achievement": "Ready to ace system design interviews focusing on Enterprise RAG pipelines."
          },
          {
            "day": 118,
            "topic": "Review: Agentic Workflows",
            "priority": "MUST KNOW",
            "tasks": "Review ReAct, LangGraph state management, and strategies for preventing infinite agent loops.",
            "achievement": "Ready to discuss the cutting edge of autonomous AI architectures."
          },
          {
            "day": 119,
            "topic": "Graduation Day",
            "priority": "MUST KNOW",
            "tasks": "Reflect on the massive journey from basic Python arrays to architecting autonomous multi-agent systems.",
            "achievement": "You are now a highly capable, job-ready Senior AI & LLM Engineer."
          },
          {
            "day": 120,
            "topic": "Advanced Topic: Multimodal Agents",
            "priority": "IMPORTANT",
            "tasks": "Extend the agent to accept images as input, using GPT-4V to analyze screenshots and write code based on UI mockups.",
            "achievement": "Can build agents that interact with both text and visual data."
          },
          {
            "day": 121,
            "topic": "Advanced Topic: Voice Integration",
            "priority": "IMPORTANT",
            "tasks": "Integrate Whisper for STT and TTS models. Build a real-time voice-to-voice agent over WebSockets.",
            "achievement": "Can build seamless conversational AI systems."
          },
          {
            "day": 122,
            "topic": "Advanced Topic: On-Device LLMs",
            "priority": "MUST KNOW",
            "tasks": "Experiment with Llama.cpp and Ollama. Run a quantized 8B model locally and connect it to your LangGraph agent.",
            "achievement": "Can deploy completely private, offline AI agents."
          },
          {
            "day": 123,
            "topic": "System Design: Agentic Systems",
            "priority": "MUST KNOW",
            "tasks": "Design an architecture capable of running 10,000 asynchronous long-lived agents using Temporal or Kafka.",
            "achievement": "Can scale agentic workflows to enterprise workloads."
          },
          {
            "day": 124,
            "topic": "Advanced Security: Jailbreaks & Defenses",
            "priority": "MUST KNOW",
            "tasks": "Study advanced prompt injections like Crescendo and ASCII art bypasses. Implement strict semantic filters.",
            "achievement": "Can secure frontier models against state-of-the-art red teaming attacks."
          },
          {
            "day": 125,
            "topic": "Cost Optimization & Token Management",
            "priority": "MUST KNOW",
            "tasks": "Implement strict token counting, dynamic context window truncation, and caching to reduce API costs by 80%.",
            "achievement": "Can manage the massive financial overhead of running LLMs in production."
          },
          {
            "day": 126,
            "topic": "Fine-Tuning Review: Custom Embeddings",
            "priority": "IMPORTANT",
            "tasks": "Learn how to fine-tune an embedding model (like BGE) using SentenceTransformers on domain-specific vocabulary.",
            "achievement": "Can boost RAG accuracy on highly specialized corporate jargon."
          },
          {
            "day": 127,
            "topic": "Emerging Frameworks: LlamaIndex vs LangChain",
            "priority": "IMPORTANT",
            "tasks": "Build a complex RAG pipeline in LlamaIndex. Compare the abstractions to LangChain.",
            "achievement": "Can select the optimal framework based on task requirements (RAG vs Agents)."
          },
          {
            "day": 128,
            "topic": "Emerging Frameworks: Autogen",
            "priority": "IMPORTANT",
            "tasks": "Study Microsoft Autogen. Build a conversational multi-agent system and compare its approach to LangGraph.",
            "achievement": "Can evaluate alternative multi-agent orchestration frameworks."
          },
          {
            "day": 129,
            "topic": "Emerging Frameworks: CrewAI Deep Dive",
            "priority": "IMPORTANT",
            "tasks": "Build a task-delegation hierarchy using CrewAI. Understand Tasks, Agents, and Tools in this framework.",
            "achievement": "Can rapidly prototype role-playing agent teams."
          },
          {
            "day": 130,
            "topic": "Portfolio Project Polish",
            "priority": "MUST KNOW",
            "tasks": "Clean up the \"Corporate Knowledge Bot\" and \"Software Engineer Agent\" repositories. Add comprehensive READMEs with architecture diagrams.",
            "achievement": "Can present undeniable proof of senior-level AI engineering skills."
          },
          {
            "day": 131,
            "topic": "Mock Interview: ML Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Do a mock interview focusing strictly on calculus, backpropagation, and classical ML algorithms.",
            "achievement": "Can pass the mathematical screen of an AI interview."
          },
          {
            "day": 132,
            "topic": "Mock Interview: Transformer Architecture",
            "priority": "MUST KNOW",
            "tasks": "Do a mock interview focusing on attention mechanisms, LoRA math, and KV-caching.",
            "achievement": "Can pass the deep-learning architecture screen."
          },
          {
            "day": 133,
            "topic": "Mock Interview: RAG System Design",
            "priority": "MUST KNOW",
            "tasks": "Do a mock interview designing a multi-tenant RAG system for a legal firm with strict data access controls.",
            "achievement": "Can pass an enterprise AI system design interview."
          },
          {
            "day": 134,
            "topic": "Mock Interview: Agent System Design",
            "priority": "MUST KNOW",
            "tasks": "Do a mock interview designing an autonomous coding assistant that scales to thousands of concurrent users.",
            "achievement": "Can architect state-of-the-art AI applications under pressure."
          },
          {
            "day": 135,
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
    "days": 106,
    "color": "amber",
    "phases": [
      {
        "id": "4-1",
        "title": "LINUX & OS INTERNALS",
        "days": "Days 1–26",
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
            "topic": "Diagnostic Tools (strace, lsof, perf)",
            "priority": "MUST KNOW",
            "tasks": "Use `strace` to intercept system calls of a process. Use `lsof` to find which process is holding a file open. Understand what `perf` does for CPU profiling.",
            "achievement": "Can debug complex production crashes where a process hangs waiting for I/O."
          },
          {
            "day": 12,
            "topic": "Background Jobs & Screen/Tmux",
            "priority": "MUST KNOW",
            "tasks": "Learn how to send processes to the background using `&`, `bg`, and `fg`. Install and practice using `tmux` or `screen` to keep sessions alive after disconnecting from SSH.",
            "achievement": "Can start a long-running script, disconnect your laptop, and check back on it tomorrow."
          },
          {
            "day": 13,
            "topic": "Daemons and Systemd",
            "priority": "MUST KNOW",
            "tasks": "Understand what a daemon is. Master `systemctl` commands (start, stop, restart, status, enable). Write a custom `.service` file to run a Python script automatically on boot.",
            "achievement": "Can configure a backend application to start automatically when the server reboots."
          },
          {
            "day": 14,
            "topic": "Package Management (APT/YUM)",
            "priority": "MUST KNOW",
            "tasks": "Learn how software is installed in Linux. Practice using `apt update`, `apt upgrade`, and installing packages. Understand dependency resolution.",
            "achievement": "Can install and update server software safely on Debian/Ubuntu systems."
          },
          {
            "day": 15,
            "topic": "Archive and Compression",
            "priority": "MUST KNOW",
            "tasks": "Master the `tar` command (`tar -czvf` to compress, `tar -xzvf` to extract). Understand the difference between `.tar`, `.gz`, and `.zip`.",
            "achievement": "Can back up an entire application directory into a single compressed file for transport."
          },
          {
            "day": 16,
            "topic": "Disk Usage & Partitions",
            "priority": "MUST KNOW",
            "tasks": "Use `df -h` to check available disk space and `du -sh` to find massive directories. Understand basic disk mounting.",
            "achievement": "Can diagnose a \"No space left on device\" error and identify which folder is causing it."
          },
          {
            "day": 17,
            "topic": "Symlinks & Hard Links",
            "priority": "IMPORTANT",
            "tasks": "Use `ln -s` to create soft links (shortcuts) and `ln` for hard links. Understand the concept of Inodes in the Linux file system.",
            "achievement": "Can manage different versions of software by symlinking `/usr/bin/node` to the correct version folder."
          },
          {
            "day": 18,
            "topic": "Environment Variables",
            "priority": "MUST KNOW",
            "tasks": "Understand `export`. Edit the `~/.bashrc` or `~/.profile` file to make environment variables permanent. Learn how the `$PATH` variable dictates command execution.",
            "achievement": "Can fix \"command not found\" errors by correctly configuring the PATH variable."
          },
          {
            "day": 19,
            "topic": "Networking Basics in CLI",
            "priority": "MUST KNOW",
            "tasks": "Use `ping` to test connectivity, `curl` / `wget` to make HTTP requests or download files, and `traceroute` to track network paths.",
            "achievement": "Can diagnose basic network connectivity issues directly from the server terminal."
          },
          {
            "day": 20,
            "topic": "Port Checking & Firewalls (UFW)",
            "priority": "MUST KNOW",
            "tasks": "Use `netstat -tulpn` or `ss` to see which processes are listening on which ports. Configure `ufw` (Uncomplicated Firewall) to allow port 80/443 and block others.",
            "achievement": "Can secure a server by closing all ports except the ones explicitly needed by the application."
          },
          {
            "day": 21,
            "topic": "SSH Configuration & Keys",
            "priority": "MUST KNOW",
            "tasks": "Generate SSH keys (`ssh-keygen`). Understand public vs private keys. Copy keys to a server using `ssh-copy-id`. Disable password authentication in `/etc/ssh/sshd_config`.",
            "achievement": "Can lock down a server so it is completely immune to SSH password brute-force attacks."
          },
          {
            "day": 22,
            "topic": "Memory & Swap Management",
            "priority": "IMPORTANT",
            "tasks": "Use `free -m` to check RAM. Understand what Swap space is and how it acts as emergency memory. Learn the dangers of excessive swapping (thrashing).",
            "achievement": "Can diagnose if an OutOfMemory error was caused by a lack of physical RAM or insufficient Swap."
          },
          {
            "day": 23,
            "topic": "Text Editors (Vim/Nano)",
            "priority": "MUST KNOW",
            "tasks": "Learn the absolute basics of Nano for quick edits. Learn Vim basics: Insert mode (`i`), Visual mode, saving/quitting (`:wq`, `:q!`), and basic navigation.",
            "achievement": "Can edit configuration files on a headless remote server without panicking."
          },
          {
            "day": 24,
            "topic": "Cron Jobs & Scheduling",
            "priority": "MUST KNOW",
            "tasks": "Edit the crontab (`crontab -e`). Learn cron syntax (`* * * * *`). Schedule a script to run every day at midnight.",
            "achievement": "Can automate recurring maintenance tasks like database backups or log rotations."
          },
          {
            "day": 25,
            "topic": "Log Rotation (logrotate)",
            "priority": "IMPORTANT",
            "tasks": "Understand why log files must be rotated to prevent disk exhaustion. Inspect `/etc/logrotate.conf` to see how system logs are compressed and deleted automatically.",
            "achievement": "Can configure an application to keep only the last 7 days of logs automatically."
          },
          {
            "day": 26,
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
        "days": "Days 27–51",
        "items": [
          {
            "day": 27,
            "topic": "Bash Scripting Basics",
            "priority": "MUST KNOW",
            "tasks": "Write your first `#!/bin/bash` script. Learn how to declare variables, accept command-line arguments (`$1`, `$2`), and return exit codes.",
            "achievement": "Can write reusable executable scripts to automate manual terminal tasks."
          },
          {
            "day": 28,
            "topic": "Bash Conditionals (If/Else)",
            "priority": "MUST KNOW",
            "tasks": "Use `if`, `elif`, and `else`. Learn file testing operators (`-f`, `-d`) and string comparisons. Write a script that checks if a required configuration file exists before proceeding.",
            "achievement": "Can write defensive scripts that validate their environment before executing dangerous operations."
          },
          {
            "day": 29,
            "topic": "Bash Loops (For/While)",
            "priority": "MUST KNOW",
            "tasks": "Write `for` loops to iterate over files in a directory. Write a `while` loop that reads a text file line-by-line.",
            "achievement": "Can automate repetitive operations across hundreds of files instantly."
          },
          {
            "day": 30,
            "topic": "Advanced Text Processing (AWK)",
            "priority": "IMPORTANT",
            "tasks": "Learn `awk` basics. Use it to extract specific columns from structured text files (like parsing access logs).",
            "achievement": "Can slice and transform tabular command-line data without needing Python."
          },
          {
            "day": 31,
            "topic": "Advanced Text Processing (SED)",
            "priority": "IMPORTANT",
            "tasks": "Learn the Stream Editor (`sed`). Practice performing massive find-and-replace operations across configuration files via the terminal.",
            "achievement": "Can programmatically update connection strings in configuration files dynamically during deployment."
          },
          {
            "day": 32,
            "topic": "DNS & Domains (Real World)",
            "priority": "MUST KNOW",
            "tasks": "Purchase a cheap domain name. Configure an A Record to point to your cloud server's IP address. Understand TTL (Time to Live) propagation delays.",
            "achievement": "Can connect human-readable domain names to raw infrastructure."
          },
          {
            "day": 33,
            "topic": "Nginx Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Install Nginx. Understand the difference between Nginx (event-driven) and Apache (thread-per-request). Explore the `nginx.conf` and `sites-available` directory structures.",
            "achievement": "Can explain why Nginx is the industry standard for high-concurrency web serving."
          },
          {
            "day": 34,
            "topic": "Nginx Reverse Proxy",
            "priority": "MUST KNOW",
            "tasks": "Configure a `server` block to listen on port 80 and use `proxy_pass` to forward traffic to a backend Node.js or Spring Boot app running on port 8080.",
            "achievement": "Can securely expose a backend application to the internet via an enterprise-grade proxy."
          },
          {
            "day": 35,
            "topic": "Nginx Load Balancing",
            "priority": "MUST KNOW",
            "tasks": "Set up an `upstream` block containing three backend server IPs. Configure Nginx to load balance traffic between them using round-robin.",
            "achievement": "Can scale a backend application horizontally by placing Nginx in front of multiple instances."
          },
          {
            "day": 36,
            "topic": "SSL/TLS with Nginx (Certbot)",
            "priority": "MUST KNOW",
            "tasks": "Use Let's Encrypt and Certbot to automatically fetch an SSL certificate and configure Nginx to serve HTTPS traffic on port 443. Set up a port 80 -> 443 redirect.",
            "achievement": "Can secure all internet traffic to your application with free, auto-renewing cryptography."
          },
          {
            "day": 37,
            "topic": "Git Internals: Trees & Blobs",
            "priority": "IMPORTANT",
            "tasks": "Study how Git actually stores data. Initialize a repo, create a file, and use `git cat-file` to explore how Git stores it as a blob, and how commits are just pointers.",
            "achievement": "Can explain why Git is incredibly fast and why branching is essentially instantaneous."
          },
          {
            "day": 38,
            "topic": "Advanced Git Branching Strategy",
            "priority": "MUST KNOW",
            "tasks": "Study GitFlow vs Trunk-based development. Understand the role of feature branches, release branches, and hotfix branches.",
            "achievement": "Can enforce a clean, organized branching strategy for a team of 10+ developers."
          },
          {
            "day": 39,
            "topic": "Git Merging vs Rebasing",
            "priority": "MUST KNOW",
            "tasks": "Perform a `git merge`. Then, undo it and perform a `git rebase`. Understand how rebasing rewrites commit history to create a perfectly linear project timeline.",
            "achievement": "Can decide exactly when it is safe to use rebase (local) and when it is disastrous (public branches)."
          },
          {
            "day": 40,
            "topic": "Resolving Git Conflicts",
            "priority": "MUST KNOW",
            "tasks": "Intentionally create a merge conflict by editing the same line in two branches. Use VSCode or a terminal to manually resolve the conflict markers (`<<<<<<<`).",
            "achievement": "Can confidently untangle messy code conflicts without accidentally deleting a coworker's work."
          },
          {
            "day": 41,
            "topic": "Git Reset & Revert",
            "priority": "MUST KNOW",
            "tasks": "Understand the difference between `git reset --soft`, `--mixed`, and `--hard`. Learn how `git revert` safely undoes a commit by creating a new, opposite commit.",
            "achievement": "Can panic-fix a broken production branch by safely reverting the offending commit."
          },
          {
            "day": 42,
            "topic": "Git Interactive Rebase",
            "priority": "MUST KNOW",
            "tasks": "Use `git rebase -i` to squash three messy \"WIP\" commits into a single, clean feature commit before pushing to GitHub.",
            "achievement": "Can maintain a pristine, highly readable commit history for the team."
          },
          {
            "day": 43,
            "topic": "Git Stash & Cherry-Pick",
            "priority": "MUST KNOW",
            "tasks": "Use `git stash` to temporarily hide unfinished work. Use `git cherry-pick` to grab a specific commit from another branch and apply it to your current branch.",
            "achievement": "Can quickly switch context between tasks and move individual fixes between branches."
          },
          {
            "day": 44,
            "topic": "Git Hooks",
            "priority": "IMPORTANT",
            "tasks": "Explore the `.git/hooks` directory. Write a `pre-commit` Bash script that runs your unit tests and rejects the commit if the tests fail.",
            "achievement": "Can enforce code quality and prevent broken code from ever being committed to the repository."
          },
          {
            "day": 45,
            "topic": "SSH Git Authentication",
            "priority": "MUST KNOW",
            "tasks": "Switch your GitHub remotes from HTTPS to SSH. Understand why SSH is more secure and convenient for CI/CD pipelines than using personal access tokens.",
            "achievement": "Can securely interact with GitHub without ever typing a password again."
          },
          {
            "day": 46,
            "topic": "Nginx Caching & Gzip",
            "priority": "MUST KNOW",
            "tasks": "Configure Nginx to compress outgoing text responses using Gzip to save bandwidth. Set up proxy caching for static assets like images and CSS.",
            "achievement": "Can drastically reduce server load and improve website load times via proxy-level caching."
          },
          {
            "day": 47,
            "topic": "Nginx Rate Limiting",
            "priority": "MUST KNOW",
            "tasks": "Use the `limit_req_zone` directive in Nginx to restrict a single IP address to 5 requests per second, dropping excess traffic with a 503 error.",
            "achievement": "Can protect backend servers from basic Denial of Service (DoS) attacks at the proxy layer."
          },
          {
            "day": 48,
            "topic": "Monorepos vs Polyrepos",
            "priority": "IMPORTANT",
            "tasks": "Study the trade-offs of storing all microservices in a single Git repository (Monorepo) versus separate repositories. Look at tools like Lerna or Nx.",
            "achievement": "Can recommend the correct repository structure for a growing engineering team."
          },
          {
            "day": 49,
            "topic": "Semantic Versioning (SemVer)",
            "priority": "MUST KNOW",
            "tasks": "Study the MAJOR.MINOR.PATCH specification. Understand when to increment each number based on breaking changes vs backward-compatible additions.",
            "achievement": "Can version software releases predictably so downstream consumers don't break."
          },
          {
            "day": 50,
            "topic": "Phase 2 Capstone - Prep",
            "priority": "MUST KNOW",
            "tasks": "Write a bash script that automatically pulls the latest code from GitHub, builds it, restarts the systemd service, and tails the logs.",
            "achievement": "Can build a \"poor man's CI/CD\" pipeline purely using Bash and Git."
          },
          {
            "day": 51,
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
        "days": "Days 52–77",
        "items": [
          {
            "day": 52,
            "topic": "PostgreSQL Architecture",
            "priority": "MUST KNOW",
            "tasks": "Study the Postgres process model (postmaster), shared buffers, and the Write-Ahead Log (WAL). Understand why Postgres is highly reliable for enterprise data.",
            "achievement": "Can explain the internal memory and logging mechanisms that protect PostgreSQL data."
          },
          {
            "day": 53,
            "topic": "Advanced Data Types",
            "priority": "MUST KNOW",
            "tasks": "Go beyond VARCHAR and INT. Experiment with Postgres-specific types: UUID, ARRAY, and ENUM. Understand the storage benefits of exact data typing.",
            "achievement": "Can design strict database schemas that reject invalid data formats instantly."
          },
          {
            "day": 54,
            "topic": "JSONB in PostgreSQL",
            "priority": "MUST KNOW",
            "tasks": "Learn how to store NoSQL-like JSON documents directly inside Postgres. Query specific keys inside the JSONB column and index them.",
            "achievement": "Can implement flexible, schema-less features (like user settings) without needing MongoDB."
          },
          {
            "day": 55,
            "topic": "Complex JOIN Operations",
            "priority": "MUST KNOW",
            "tasks": "Master INNER, LEFT, RIGHT, and FULL OUTER joins. Understand CROSS JOINs and Self Joins. Write a query that joins 4 different tables to generate a report.",
            "achievement": "Can extract highly correlated data spread across complex normalized schemas."
          },
          {
            "day": 56,
            "topic": "Subqueries and CTEs (WITH clause)",
            "priority": "MUST KNOW",
            "tasks": "Refactor messy nested subqueries into readable Common Table Expressions (CTEs). Write a recursive CTE to traverse a hierarchical tree (like an employee org chart).",
            "achievement": "Can write elegant, readable SQL for extremely complex, multi-step data extraction logic."
          },
          {
            "day": 57,
            "topic": "Window Functions - OVER & PARTITION BY",
            "priority": "MUST KNOW",
            "tasks": "Use `ROW_NUMBER()`, `RANK()`, and `DENSE_RANK()`. Calculate a running total or a moving average without grouping the data.",
            "achievement": "Can perform advanced analytical and reporting queries directly in the database."
          },
          {
            "day": 58,
            "topic": "Window Functions - LEAD & LAG",
            "priority": "IMPORTANT",
            "tasks": "Use `LEAD()` and `LAG()` to compare a row's value to the previous row (e.g., calculating the day-over-day percentage change in sales).",
            "achievement": "Can extract time-series insights using pure SQL without writing Python logic."
          },
          {
            "day": 59,
            "topic": "Database Normalization",
            "priority": "MUST KNOW",
            "tasks": "Study 1st, 2nd, and 3rd Normal Forms (1NF, 2NF, 3NF). Normalize a flat spreadsheet into a properly structured relational schema to eliminate data redundancy.",
            "achievement": "Can architect data models that prevent update anomalies and maintain strict consistency."
          },
          {
            "day": 60,
            "topic": "Denormalization Strategies",
            "priority": "MUST KNOW",
            "tasks": "Understand when to break 3NF for performance. Study read-heavy architectures where redundant data is acceptable to avoid massive, slow JOIN operations.",
            "achievement": "Can balance strict data integrity with the practical performance needs of an application."
          },
          {
            "day": 61,
            "topic": "Indexing - B-Trees under the hood",
            "priority": "MUST KNOW",
            "tasks": "Deep dive into B-Tree structures. Understand why an index dramatically speeds up `WHERE` and `ORDER BY` clauses, but slows down `INSERT` and `UPDATE` operations.",
            "achievement": "Can accurately predict exactly how a database will locate a row on the hard drive."
          },
          {
            "day": 62,
            "topic": "EXPLAIN ANALYZE",
            "priority": "MUST KNOW",
            "tasks": "Use `EXPLAIN ANALYZE` on a slow query. Read the query plan. Understand Sequential Scans vs Index Scans, and Hash Joins vs Nested Loops.",
            "achievement": "Can profile and diagnose exactly why a specific SQL query is taking 5 seconds to run."
          },
          {
            "day": 63,
            "topic": "Advanced Indexing Strategies",
            "priority": "MUST KNOW",
            "tasks": "Create Composite Indexes for queries filtering on multiple columns. Understand the Leftmost Prefix Rule. Create Partial Indexes (indexing only active users) to save space.",
            "achievement": "Can optimize complex queries by designing highly targeted, memory-efficient indexes."
          },
          {
            "day": 64,
            "topic": "Transactions and ACID in Postgres",
            "priority": "MUST KNOW",
            "tasks": "Use `BEGIN`, `COMMIT`, and `ROLLBACK`. Intentionally cause a deadlock between two terminal sessions and observe how Postgres resolves it.",
            "achievement": "Can write bulletproof database scripts that never leave data in a partially updated state."
          },
          {
            "day": 65,
            "topic": "Isolation Levels & MVCC",
            "priority": "MUST KNOW",
            "tasks": "Study Multi-Version Concurrency Control (MVCC). Understand how Postgres allows readers to read while writers write by keeping multiple versions of a row.",
            "achievement": "Can explain how PostgreSQL achieves high concurrency without locking entire tables."
          },
          {
            "day": 66,
            "topic": "Locks in PostgreSQL",
            "priority": "MUST KNOW",
            "tasks": "Study Row-level locks vs Table-level locks. Use `SELECT ... FOR UPDATE` to implement pessimistic locking for a ticketing system or bank transfer.",
            "achievement": "Can prevent race conditions and double-spending issues at the database layer."
          },
          {
            "day": 67,
            "topic": "Views and Materialized Views",
            "priority": "MUST KNOW",
            "tasks": "Create a View to hide a complex join. Create a Materialized View to physically cache the result of an expensive calculation, and learn how to refresh it.",
            "achievement": "Can speed up heavy analytical dashboards instantly using pre-computed materialized views."
          },
          {
            "day": 68,
            "topic": "Stored Procedures & Functions",
            "priority": "IMPORTANT",
            "tasks": "Write a basic PL/pgSQL function. Understand when logic should live in the database (for performance) vs in the application code (for maintainability).",
            "achievement": "Can execute complex data manipulation directly on the database server to reduce network latency."
          },
          {
            "day": 69,
            "topic": "Triggers",
            "priority": "IMPORTANT",
            "tasks": "Write a Trigger that automatically updates an `updated_at` timestamp column or logs changes to an audit table whenever a row is modified.",
            "achievement": "Can implement automatic, database-level side effects that cannot be bypassed by buggy application code."
          },
          {
            "day": 70,
            "topic": "VACUUM and Maintenance",
            "priority": "MUST KNOW",
            "tasks": "Understand Dead Tuples in MVCC. Learn why the `VACUUM` process is critical to reclaim disk space and why `VACUUM FULL` locks the table.",
            "achievement": "Can manage database health and prevent PostgreSQL from bloating over time."
          },
          {
            "day": 71,
            "topic": "Connection Pooling (PgBouncer)",
            "priority": "MUST KNOW",
            "tasks": "Understand the high memory cost of a PostgreSQL connection. Set up PgBouncer to multiplex thousands of client connections onto a few dozen actual database connections.",
            "achievement": "Can prevent connection exhaustion when scaling up a massive microservice fleet."
          },
          {
            "day": 72,
            "topic": "Database Replication (Primary/Replica)",
            "priority": "MUST KNOW",
            "tasks": "Set up a Read Replica using PostgreSQL streaming replication via the WAL. Understand synchronous vs asynchronous replication lag.",
            "achievement": "Can scale out database read capacity and ensure high availability in case the primary crashes."
          },
          {
            "day": 73,
            "topic": "Sharding / Partitioning",
            "priority": "IMPORTANT",
            "tasks": "Implement Table Partitioning (e.g., partitioning a massive `logs` table by month). Discuss the complexities of distributed sharding (e.g., Citus).",
            "achievement": "Can design tables that efficiently store billions of rows without degrading query performance."
          },
          {
            "day": 74,
            "topic": "Backup and Restore (pg_dump)",
            "priority": "MUST KNOW",
            "tasks": "Use `pg_dump` to create a logical backup. Practice restoring the database from scratch. Learn about Point-in-Time Recovery (PITR) using WAL archiving.",
            "achievement": "Can securely back up business data and restore it during a catastrophic failure."
          },
          {
            "day": 75,
            "topic": "Security and Roles",
            "priority": "MUST KNOW",
            "tasks": "Create specific database roles (e.g., `read_only_user`, `app_user`). Implement Row-Level Security (RLS) to restrict users to querying only their own tenant data.",
            "achievement": "Can secure database access utilizing the principle of least privilege."
          },
          {
            "day": 76,
            "topic": "Advanced Topic: pgvector",
            "priority": "MUST KNOW",
            "tasks": "Install pgvector. Create a vector column, store AI embeddings, and create an HNSW index to perform high-speed cosine similarity searches natively in Postgres.",
            "achievement": "Can bridge traditional relational databases with modern AI vector search capabilities."
          },
          {
            "day": 77,
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
        "days": "Days 78–95",
        "items": [
          {
            "day": 78,
            "topic": "Redis Data Structures",
            "priority": "MUST KNOW",
            "tasks": "Install Redis. Experiment with Strings, Hashes, Lists, Sets, and Sorted Sets via the `redis-cli`. Understand why Redis is single-threaded but insanely fast.",
            "achievement": "Can utilize specific in-memory data structures to solve complex performance problems."
          },
          {
            "day": 79,
            "topic": "Redis: Caching Strategies",
            "priority": "MUST KNOW",
            "tasks": "Implement Cache-Aside and Write-Through patterns. Set TTLs. Understand eviction policies (allkeys-lru vs volatile-ttl).",
            "achievement": "Can design a bulletproof caching layer that significantly reduces primary database load."
          },
          {
            "day": 80,
            "topic": "Redis: Advanced Use Cases",
            "priority": "MUST KNOW",
            "tasks": "Use a Sorted Set to build a real-time gaming leaderboard. Use a Set to track unique daily IP visitors. Use Redis Pub/Sub for a chat application.",
            "achievement": "Can leverage Redis for advanced system architectures beyond basic object caching."
          },
          {
            "day": 81,
            "topic": "Redis Cluster (Hands-On)",
            "priority": "MUST KNOW",
            "tasks": "Set up a local Redis Cluster with 3 masters and 3 replicas. Study Hash Slots and understand how Redis distributes keys. Use Redisson for a distributed lock in Java/Python.",
            "achievement": "Can horizontally scale in-memory datastores and prevent race conditions across a microservice fleet."
          },
          {
            "day": 82,
            "topic": "MongoDB: Document Modeling",
            "priority": "MUST KNOW",
            "tasks": "Understand BSON documents. Design a schema for an E-Commerce site utilizing denormalization (embedding arrays of reviews inside a product document).",
            "achievement": "Can design NoSQL data models that optimize for fast reads rather than normalization."
          },
          {
            "day": 83,
            "topic": "MongoDB: CRUD & Aggregation",
            "priority": "MUST KNOW",
            "tasks": "Perform deep queries into nested JSON arrays. Write an Aggregation Pipeline (`$match`, `$group`, `$project`) to calculate total sales per category.",
            "achievement": "Can perform complex analytics natively inside a NoSQL document database."
          },
          {
            "day": 84,
            "topic": "MongoDB: Indexes & Sharding",
            "priority": "IMPORTANT",
            "tasks": "Create a compound index in Mongo. Study the concept of a Shard Key and how MongoDB distributes documents across a cluster based on that key.",
            "achievement": "Can architect a MongoDB cluster capable of scaling horizontally across multiple servers."
          },
          {
            "day": 85,
            "topic": "Elasticsearch: The Inverted Index",
            "priority": "MUST KNOW",
            "tasks": "Study the core theory. Understand how documents are tokenized, stemmed, and stored in an Inverted Index. Contrast this with B-Tree indexes.",
            "achievement": "Can explain exactly why standard databases are terrible at \"search bar\" autocomplete functionality."
          },
          {
            "day": 86,
            "topic": "Elasticsearch: Query DSL",
            "priority": "MUST KNOW",
            "tasks": "Write complex JSON queries. Differentiate between `match` (full-text search) and `term` (exact filtering). Implement pagination and aggregations.",
            "achievement": "Can build complex, Google-like search queries using the Elasticsearch REST API."
          },
          {
            "day": 87,
            "topic": "Elasticsearch: Analyzers",
            "priority": "IMPORTANT",
            "tasks": "Create a custom analyzer that strips HTML, lowers cases, and applies English stemming before indexing the text.",
            "achievement": "Can configure search engines to perfectly understand the nuances of human text input."
          },
          {
            "day": 88,
            "topic": "Cassandra Architecture",
            "priority": "MUST KNOW",
            "tasks": "Study masterless architectures and the gossip protocol. Understand consistency levels and how read/write quorums guarantee tunable consistency.",
            "achievement": "Can explain how Cassandra achieves extreme write-speeds and survives multiple node failures."
          },
          {
            "day": 89,
            "topic": "Cassandra Keys & Partitioning",
            "priority": "MUST KNOW",
            "tasks": "Deep dive into Partition Keys (which node stores the data) and Clustering Columns (how data is sorted on disk within that node).",
            "achievement": "Can precisely control how massive datasets are physically distributed across a cluster."
          },
          {
            "day": 90,
            "topic": "Cassandra Query-Driven Modeling",
            "priority": "MUST KNOW",
            "tasks": "Complete a data modeling workshop. Design 3 different tables heavily duplicating data to satisfy 3 specific query requirements, since JOINs do not exist.",
            "achievement": "Can abandon relational normalization habits to design for extreme read/write scale."
          },
          {
            "day": 91,
            "topic": "Cassandra vs Postgres vs Mongo",
            "priority": "MUST KNOW",
            "tasks": "Compare all three. When do you use each? Outline the absolute breaking point where you are forced to migrate from Postgres to Cassandra.",
            "achievement": "Can critically evaluate and select the correct database technology for any business requirement."
          },
          {
            "day": 92,
            "topic": "Message Brokers: RabbitMQ",
            "priority": "MUST KNOW",
            "tasks": "Study AMQP. Understand Exchanges (Direct, Fanout, Topic), Queues, and Bindings. Write a script to publish and consume messages.",
            "achievement": "Can decouple microservices utilizing complex message routing rules."
          },
          {
            "day": 93,
            "topic": "Event Streaming: Kafka vs RabbitMQ",
            "priority": "MUST KNOW",
            "tasks": "Compare the pull-based, append-only log of Kafka to the push-based, smart-broker architecture of RabbitMQ.",
            "achievement": "Can select the correct messaging technology based on throughput vs routing requirements."
          },
          {
            "day": 94,
            "topic": "Neo4j & Graph DBs Concepts",
            "priority": "IMPORTANT",
            "tasks": "Study Nodes, Relationships, and Properties. Understand why Graph databases solve \"friend of a friend\" queries exponentially faster than SQL JOINs.",
            "achievement": "Can identify problems that require highly connected relationship querying."
          },
          {
            "day": 95,
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
        "days": "Days 96–106",
        "items": [
          {
            "day": 96,
            "topic": "Database High Availability",
            "priority": "MUST KNOW",
            "tasks": "Study active-passive failover mechanisms. Understand split-brain scenarios and how quorum mechanisms (like Patroni or etcd) prevent multiple primary databases.",
            "achievement": "Can design database architectures that survive complete hardware failure automatically."
          },
          {
            "day": 97,
            "topic": "Data Migration Strategies",
            "priority": "MUST KNOW",
            "tasks": "Study the Strangler Fig pattern for databases. Learn how to migrate data from a legacy monolith database to a new microservice database using dual-writes and CDC.",
            "achievement": "Can migrate millions of rows in production without causing system downtime."
          },
          {
            "day": 98,
            "topic": "Change Data Capture (Debezium)",
            "priority": "MUST KNOW",
            "tasks": "Study how CDC reads the database transaction log. Set up a pipeline where every Postgres UPDATE triggers a Kafka message automatically.",
            "achievement": "Can stream live database changes directly to a search engine (Elasticsearch) for instant indexing."
          },
          {
            "day": 99,
            "topic": "Database Security & Encryption",
            "priority": "MUST KNOW",
            "tasks": "Implement Encryption at Rest (Disk encryption) and Encryption in Transit (SSL/TLS for DB connections). Audit database user privileges.",
            "achievement": "Can guarantee that stolen hard drives or compromised networks do not leak business data."
          },
          {
            "day": 100,
            "topic": "Cloud Databases (RDS/Aurora)",
            "priority": "MUST KNOW",
            "tasks": "Study managed cloud databases. Compare standard AWS RDS to AWS Aurora's distributed storage engine. Understand read-replica auto-scaling.",
            "achievement": "Can explain the benefits and costs of using managed databases versus hosting them yourself on EC2."
          },
          {
            "day": 101,
            "topic": "NoSQL in the Cloud (DynamoDB)",
            "priority": "IMPORTANT",
            "tasks": "Study DynamoDB. Understand Partition keys, Sort keys, GSIs (Global Secondary Indexes), and Provisioned vs On-Demand capacity.",
            "achievement": "Can design a highly scalable, serverless NoSQL database architecture on AWS."
          },
          {
            "day": 102,
            "topic": "Database Troubleshooting",
            "priority": "MUST KNOW",
            "tasks": "Simulate a sudden spike in DB CPU usage. Practice checking `pg_stat_activity`, finding long-running transactions, and killing them.",
            "achievement": "Can act as an emergency DBA during a production crisis to restore application stability."
          },
          {
            "day": 103,
            "topic": "Performance Benchmarking",
            "priority": "IMPORTANT",
            "tasks": "Use `pgbench` to load-test your PostgreSQL database. Tweak `postgresql.conf` parameters (`shared_buffers`, `work_mem`) and measure the TPS (Transactions Per Second) difference.",
            "achievement": "Can mathematically prove that a database configuration change improved throughput."
          },
          {
            "day": 104,
            "topic": "Final Project Architecture",
            "priority": "MUST KNOW",
            "tasks": "Design the complete schema and indexing strategy for a \"Netflix Clone\". Include relational tables for users/billing, NoSQL for watch history, and Elasticsearch for movie search.",
            "achievement": "Can synthesize all learned data modeling techniques into a unified, massive architecture."
          },
          {
            "day": 105,
            "topic": "Final Review & Interview Prep",
            "priority": "MUST KNOW",
            "tasks": "Run mock interviews focusing on B-Trees, transaction isolation levels, N+1 problems, CAP Theorem, and choosing the right database for a specific problem.",
            "achievement": "Ready to dominate any Database, Linux, or Backend Engineering technical interview."
          },
          {
            "day": 106,
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
    "days": 110,
    "color": "indigo",
    "phases": [
      {
        "id": "5-1",
        "title": "CONTAINERIZATION & CLOUD FUNDAMENTALS",
        "days": "Days 1–25",
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
            "topic": "AWS Route53 & ACM",
            "priority": "MUST KNOW",
            "tasks": "Register a domain (or use an existing one). Use Route53 to route traffic to your EC2 instance. Use AWS Certificate Manager (ACM) to provision an SSL cert.",
            "achievement": "Can configure enterprise DNS routing and free HTTPS certificates."
          },
          {
            "day": 17,
            "topic": "Load Balancing (AWS ALB)",
            "priority": "MUST KNOW",
            "tasks": "Provision an Application Load Balancer. Point it to two different EC2 instances running the same app. Observe traffic splitting.",
            "achievement": "Can scale an application horizontally across multiple servers to handle heavy traffic."
          },
          {
            "day": 18,
            "topic": "Auto Scaling Groups (ASG)",
            "priority": "MUST KNOW",
            "tasks": "Create an AMI (Amazon Machine Image) from your EC2. Configure an ASG to automatically spin up a new instance if CPU usage exceeds 70%.",
            "achievement": "Can build self-healing infrastructure that dynamically adapts to traffic spikes."
          },
          {
            "day": 19,
            "topic": "AWS Relational Database Service (RDS)",
            "priority": "MUST KNOW",
            "tasks": "Provision a Managed PostgreSQL RDS instance inside a private subnet. Connect your EC2 backend to it.",
            "achievement": "Can deploy highly available, automatically backed-up databases without acting as a DBA."
          },
          {
            "day": 20,
            "topic": "AWS ECS (Elastic Container Service)",
            "priority": "MUST KNOW",
            "tasks": "Study ECS clusters and Task Definitions. Understand the difference between EC2 launch type and serverless Fargate launch type.",
            "achievement": "Can explain AWS's native container orchestration engine."
          },
          {
            "day": 21,
            "topic": "AWS Fargate Hands-On",
            "priority": "MUST KNOW",
            "tasks": "Deploy a Docker container to ECS using Fargate. Access it via a Load Balancer. Never provision an underlying EC2 server.",
            "achievement": "Can run Docker containers in production with exactly zero server maintenance."
          },
          {
            "day": 22,
            "topic": "Serverless Compute (AWS Lambda)",
            "priority": "IMPORTANT",
            "tasks": "Write a simple Python function. Deploy it as an AWS Lambda. Trigger it manually and via an API Gateway.",
            "achievement": "Can run code purely in response to events without provisioning any infrastructure."
          },
          {
            "day": 23,
            "topic": "Event-Driven AWS (S3 to Lambda)",
            "priority": "IMPORTANT",
            "tasks": "Configure an S3 bucket to trigger a Lambda function every time an image is uploaded. Have the Lambda generate a thumbnail.",
            "achievement": "Can build highly scalable asynchronous background processing pipelines."
          },
          {
            "day": 24,
            "topic": "Secrets Management (AWS Secrets Manager)",
            "priority": "MUST KNOW",
            "tasks": "Store database credentials in AWS Secrets Manager. Modify your application to fetch them via API on startup instead of hardcoding them.",
            "achievement": "Can prevent massive security breaches caused by leaked environment variables."
          },
          {
            "day": 25,
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
        "days": "Days 26–50",
        "items": [
          {
            "day": 26,
            "topic": "Intro to Infrastructure as Code (IaC)",
            "priority": "MUST KNOW",
            "tasks": "Understand the danger of \"ClickOps\" (clicking around the AWS console). Learn why infrastructure must be version-controlled like source code.",
            "achievement": "Can articulate why Terraform is required for reproducible cloud environments."
          },
          {
            "day": 27,
            "topic": "Terraform Basics",
            "priority": "MUST KNOW",
            "tasks": "Install Terraform. Write `main.tf` to define an AWS provider and provision a single EC2 instance. Run `terraform init`, `plan`, and `apply`.",
            "achievement": "Can deploy physical cloud resources instantly using code."
          },
          {
            "day": 28,
            "topic": "Terraform State Management",
            "priority": "MUST KNOW",
            "tasks": "Study the `terraform.tfstate` file. Understand how Terraform tracks what it built. Destroy the infrastructure using `terraform destroy`.",
            "achievement": "Can safely manage the lifecycle of infrastructure without orphaned resources."
          },
          {
            "day": 29,
            "topic": "Remote State & Locking",
            "priority": "MUST KNOW",
            "tasks": "Configure Terraform to store the state file in an S3 bucket and use a DynamoDB table for state locking.",
            "achievement": "Can safely collaborate on infrastructure code with a team without corrupting state."
          },
          {
            "day": 30,
            "topic": "Terraform Variables & Outputs",
            "priority": "MUST KNOW",
            "tasks": "Use `variables.tf` to make the EC2 instance type configurable. Use `outputs.tf` to print the new instance's IP address after creation.",
            "achievement": "Can write dynamic, reusable infrastructure templates."
          },
          {
            "day": 31,
            "topic": "Terraform Modules",
            "priority": "MUST KNOW",
            "tasks": "Refactor a massive `main.tf` into reusable modules (e.g., a custom `network-module` that provisions a VPC, subnets, and IGW).",
            "achievement": "Can architect complex IaC repositories that follow DRY (Don't Repeat Yourself) principles."
          },
          {
            "day": 32,
            "topic": "Provisioning AWS ECS via Terraform",
            "priority": "MUST KNOW",
            "tasks": "Write Terraform code to spin up an ECS Cluster, a Task Definition, a Fargate Service, and an Application Load Balancer.",
            "achievement": "Can automate the deployment of the entire Phase 1 Capstone architecture."
          },
          {
            "day": 33,
            "topic": "Introduction to CI/CD",
            "priority": "MUST KNOW",
            "tasks": "Study Continuous Integration (building/testing) and Continuous Deployment (shipping to production). Understand the pipeline lifecycle.",
            "achievement": "Can explain how code gets from a developer's laptop to production in 5 minutes."
          },
          {
            "day": 34,
            "topic": "GitHub Actions Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Create a `.github/workflows/main.yml` file. Define jobs, steps, and triggers (`on: push`). Run a basic \"Hello World\" bash command.",
            "achievement": "Can trigger automated scripts directly from GitHub repository events."
          },
          {
            "day": 35,
            "topic": "CI: Automated Testing",
            "priority": "MUST KNOW",
            "tasks": "Configure GitHub Actions to automatically run `mvn test` (Java) or `pytest` (Python) every time a Pull Request is opened.",
            "achievement": "Can prevent broken code from being merged into the `main` branch."
          },
          {
            "day": 36,
            "topic": "CI: Static Code Analysis (SonarQube/Linting)",
            "priority": "MUST KNOW",
            "tasks": "Add a step to the pipeline that runs a linter (like Checkstyle or Flake8) and SonarCloud to fail the build if code smells or bugs are detected.",
            "achievement": "Can enforce strict code quality standards completely automatically."
          },
          {
            "day": 37,
            "topic": "CI: Security Scanning (SAST/SCA)",
            "priority": "MUST KNOW",
            "tasks": "Integrate Trivy or Dependabot into the pipeline to scan the codebase for known vulnerable dependencies (CVEs) before building.",
            "achievement": "Can catch critical security flaws before they ever reach the compiled artifact."
          },
          {
            "day": 38,
            "topic": "Building & Pushing Docker Images in CI",
            "priority": "MUST KNOW",
            "tasks": "Configure GitHub Actions to securely log into DockerHub/ECR, run `docker build`, and `docker push` the new image labeled with the Git commit hash.",
            "achievement": "Can automatically generate a deployable container every time code is merged."
          },
          {
            "day": 39,
            "topic": "Managing Secrets in CI/CD",
            "priority": "MUST KNOW",
            "tasks": "Add AWS credentials as GitHub Secrets. Use them in the pipeline without exposing them in the YAML file.",
            "achievement": "Can securely authenticate pipelines to production cloud environments."
          },
          {
            "day": 40,
            "topic": "CD: Deploying to AWS via GitHub Actions",
            "priority": "MUST KNOW",
            "tasks": "Add a final step to your pipeline: use the AWS CLI to update the ECS Fargate service to pull and run the newly pushed Docker image.",
            "achievement": "Can achieve 100% automated deployment from `git push` to a live website."
          },
          {
            "day": 41,
            "topic": "Pipeline Optimization & Caching",
            "priority": "MUST KNOW",
            "tasks": "Use the `actions/cache` step to cache Maven/Pip dependencies between workflow runs. Cut the build time from 5 minutes to 30 seconds.",
            "achievement": "Can drastically speed up developer feedback loops by optimizing CI execution."
          },
          {
            "day": 42,
            "topic": "HashiCorp Vault Basics",
            "priority": "IMPORTANT",
            "tasks": "Study enterprise secrets management. Spin up Vault in a container. Write/read secrets to it instead of using environment variables directly.",
            "achievement": "Can utilize industry-standard tools for extreme credential security."
          },
          {
            "day": 43,
            "topic": "Configuration Management (Ansible)",
            "priority": "IMPORTANT",
            "tasks": "Understand when Terraform (provisioning) stops and Ansible (configuration) begins. Write a simple Ansible Playbook to install Nginx on an existing EC2 server.",
            "achievement": "Can automate the internal configuration of 100s of Linux servers simultaneously."
          },
          {
            "day": 44,
            "topic": "Ansible Roles & Inventory",
            "priority": "IMPORTANT",
            "tasks": "Organize your Playbook into Roles. Use a dynamic inventory file to automatically find AWS EC2 instances based on their tags.",
            "achievement": "Can structure complex configuration management repositories."
          },
          {
            "day": 45,
            "topic": "Immutable Infrastructure Paradigm",
            "priority": "MUST KNOW",
            "tasks": "Study the difference between Mutable (updating an existing server with Ansible) and Immutable (destroying the server and deploying a fresh AMI).",
            "achievement": "Can explain why modern DevOps heavily favors Docker/Immutable AMIs over Ansible updates."
          },
          {
            "day": 46,
            "topic": "GitOps Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Study GitOps. Understand the paradigm shift from \"pushing\" code from a CI pipeline to having an agent \"pull\" state from Git.",
            "achievement": "Can explain the modern standard for Kubernetes deployments."
          },
          {
            "day": 47,
            "topic": "Blue/Green Deployments",
            "priority": "MUST KNOW",
            "tasks": "Study deployment strategies. Understand how to spin up a \"Green\" production environment alongside \"Blue\", and flip the router instantly.",
            "achievement": "Can deploy major application updates with literally zero downtime or risk."
          },
          {
            "day": 48,
            "topic": "Canary Deployments",
            "priority": "MUST KNOW",
            "tasks": "Understand Canary releases. Route 5% of real user traffic to the new version, monitor error rates, and automatically rollback if it fails.",
            "achievement": "Can test code in production safely using live user traffic."
          },
          {
            "day": 49,
            "topic": "Phase 2 Capstone - Prep",
            "priority": "MUST KNOW",
            "tasks": "Write a massive Terraform repository that provisions a VPC, RDS, and ECS cluster completely from scratch.",
            "achievement": "Can codify entire network architectures into reproducible scripts."
          },
          {
            "day": 50,
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
        "days": "Days 51–75",
        "items": [
          {
            "day": 51,
            "topic": "Introduction to Kubernetes (K8s)",
            "priority": "MUST KNOW",
            "tasks": "Understand why Docker Compose fails at enterprise scale. Study the K8s Master Node (API Server, etcd, Scheduler) and Worker Nodes (Kubelet, Container Runtime).",
            "achievement": "Can explain the architecture of the most powerful container orchestration platform on earth."
          },
          {
            "day": 52,
            "topic": "Minikube & kubectl",
            "priority": "MUST KNOW",
            "tasks": "Install Minikube to run a local cluster. Master basic `kubectl` commands: `get nodes`, `get all`, `describe`, and `logs`.",
            "achievement": "Can interact with and debug a live Kubernetes cluster."
          },
          {
            "day": 53,
            "topic": "K8s Pods",
            "priority": "MUST KNOW",
            "tasks": "Understand that K8s schedules Pods, not containers. Write a `pod.yaml` and deploy an Nginx pod. Learn about sidecar containers.",
            "achievement": "Can define and deploy the atomic unit of Kubernetes computing."
          },
          {
            "day": 54,
            "topic": "K8s Deployments & ReplicaSets",
            "priority": "MUST KNOW",
            "tasks": "Never deploy naked Pods! Write a `deployment.yaml`. Specify 3 replicas. Manually delete a pod and watch K8s instantly recreate it to maintain desired state.",
            "achievement": "Can deploy self-healing applications that survive node crashes automatically."
          },
          {
            "day": 55,
            "topic": "K8s Services (Networking)",
            "priority": "MUST KNOW",
            "tasks": "Pods get new IPs when they die. Write a `service.yaml` (ClusterIP type) to provide a stable internal DNS name for your backend to reach your database.",
            "achievement": "Can network microservices together reliably despite constant container death."
          },
          {
            "day": 56,
            "topic": "K8s External Access (NodePort & LoadBalancer)",
            "priority": "MUST KNOW",
            "tasks": "Expose your Deployment to the outside world. Change the Service type to `NodePort`, and then to `LoadBalancer` (which provisions a cloud ELB).",
            "achievement": "Can expose Kubernetes applications to internet traffic."
          },
          {
            "day": 57,
            "topic": "K8s Ingress Controllers",
            "priority": "MUST KNOW",
            "tasks": "LoadBalancers are expensive (1 per service). Deploy an Nginx Ingress Controller. Write an `ingress.yaml` to route `/api` to the backend and `/` to the frontend using one IP.",
            "achievement": "Can drastically reduce cloud costs by consolidating web routing inside the cluster."
          },
          {
            "day": 58,
            "topic": "K8s ConfigMaps & Secrets",
            "priority": "MUST KNOW",
            "tasks": "Extract configuration from your image. Write a `configmap.yaml` for environment variables and a `secret.yaml` (base64 encoded) for passwords. Inject them into the Pod.",
            "achievement": "Can manage application configurations natively without modifying Docker images."
          },
          {
            "day": 59,
            "topic": "K8s Volumes & PersistentVolumeClaims (PVC)",
            "priority": "MUST KNOW",
            "tasks": "Run a Postgres database in K8s. Write a PVC to request a 10GB persistent disk from AWS EBS so the data survives Pod restarts.",
            "achievement": "Can run stateful applications reliably on stateless cluster nodes."
          },
          {
            "day": 60,
            "topic": "K8s StatefulSets",
            "priority": "IMPORTANT",
            "tasks": "Understand why deploying databases using Deployments is dangerous. Study StatefulSets, sticky identity, and ordered deployment.",
            "achievement": "Can architect clustered databases (like Cassandra/Kafka) properly inside Kubernetes."
          },
          {
            "day": 61,
            "topic": "K8s Namespaces & Resource Quotas",
            "priority": "MUST KNOW",
            "tasks": "Create `dev` and `prod` namespaces. Set CPU/Memory limits (`requests` and `limits`) on your Pods so one buggy app doesn't crash the entire Node.",
            "achievement": "Can safely host multiple distinct applications on a single shared cluster."
          },
          {
            "day": 62,
            "topic": "Managed Kubernetes (AWS EKS)",
            "priority": "MUST KNOW",
            "tasks": "Stop using Minikube. Use Terraform or `eksctl` to provision a real Amazon Elastic Kubernetes Service (EKS) cluster. Connect your local `kubectl` to it.",
            "achievement": "Can deploy a production-grade K8s cluster on cloud infrastructure."
          },
          {
            "day": 63,
            "topic": "Helm Package Manager",
            "priority": "MUST KNOW",
            "tasks": "Stop writing raw YAML. Install Helm. Browse ArtifactHub. Use `helm install` to deploy a massive system (like Jenkins or Redis Cluster) with one command.",
            "achievement": "Can utilize the open-source ecosystem to instantly deploy complex infrastructure."
          },
          {
            "day": 64,
            "topic": "Creating Custom Helm Charts",
            "priority": "MUST KNOW",
            "tasks": "Run `helm create`. Parameterize your Deployment and Service YAMLs using Go templating. Deploy your app using `helm upgrade --install`.",
            "achievement": "Can package internal company applications for standardized, repeatable K8s deployments."
          },
          {
            "day": 65,
            "topic": "ArgoCD & GitOps Implementation",
            "priority": "MUST KNOW",
            "tasks": "Install ArgoCD in your cluster. Point it at your Git repository containing Helm charts. Make a commit, and watch ArgoCD automatically sync the cluster state.",
            "achievement": "Can implement state-of-the-art, purely automated GitOps deployments."
          },
          {
            "day": 66,
            "topic": "Observability Fundamentals",
            "priority": "MUST KNOW",
            "tasks": "Study the three pillars of observability: Metrics (is there a problem?), Logs (what is the problem?), and Traces (where is the problem?).",
            "achievement": "Can differentiate between basic monitoring and deep system observability."
          },
          {
            "day": 67,
            "topic": "Prometheus Architecture",
            "priority": "MUST KNOW",
            "tasks": "Study how Prometheus works. Understand the pull-based model, time-series data, exporters, and PromQL (Prometheus Query Language).",
            "achievement": "Can explain the industry standard for cloud-native metrics collection."
          },
          {
            "day": 68,
            "topic": "Deploying Prometheus & Grafana",
            "priority": "MUST KNOW",
            "tasks": "Use Helm to deploy the `kube-prometheus-stack` into EKS. Open Grafana and view the pre-built dashboards showing CPU and Memory usage across the cluster.",
            "achievement": "Can gain instant, beautiful visibility into massive infrastructure health."
          },
          {
            "day": 69,
            "topic": "Custom Application Metrics",
            "priority": "MUST KNOW",
            "tasks": "Expose a `/metrics` endpoint in your Spring/Python app. Configure a Prometheus `ServiceMonitor` to scrape it. Build a Grafana dashboard for \"Total API Requests\".",
            "achievement": "Can monitor business-specific logic (like sales per minute) alongside hardware metrics."
          },
          {
            "day": 70,
            "topic": "Alertmanager",
            "priority": "MUST KNOW",
            "tasks": "Configure Prometheus Alertmanager. Write a rule: \"If CPU > 80% for 5 minutes, send a Slack message or trigger a PagerDuty incident.\"",
            "achievement": "Can automate incident response and wake up engineers only when critical failures occur."
          },
          {
            "day": 71,
            "topic": "Centralized Logging (ELK / EFK Stack)",
            "priority": "MUST KNOW",
            "tasks": "Deploy Elasticsearch, Fluentd (or Filebeat), and Kibana. Configure Fluentd as a DaemonSet to automatically scrape all Pod logs and send them to Elasticsearch.",
            "achievement": "Can instantly search through logs across 100s of containers from a single UI."
          },
          {
            "day": 72,
            "topic": "OpenTelemetry (OTel)",
            "priority": "MUST KNOW",
            "tasks": "Study the OpenTelemetry standard. Instrument a microservice to generate distributed traces. Deploy an OTel Collector to receive and forward them to Jaeger.",
            "achievement": "Can implement vendor-agnostic observability instrumentation."
          },
          {
            "day": 73,
            "topic": "Service Mesh (Istio Fundamentals)",
            "priority": "IMPORTANT",
            "tasks": "Study what a Service Mesh is. Understand how injecting Envoy sidecar proxies enables mTLS (mutual TLS) and advanced routing without changing application code.",
            "achievement": "Can explain how massive enterprises secure and route microservice traffic internally."
          },
          {
            "day": 74,
            "topic": "Phase 3 Capstone - Cluster Setup",
            "priority": "MUST KNOW",
            "tasks": "Provision an EKS Cluster via Terraform. Install ArgoCD, Ingress Controller, and the Prometheus stack via Helm.",
            "achievement": "Can build a pristine, automated Kubernetes foundation."
          },
          {
            "day": 75,
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
        "days": "Days 76–100",
        "items": [
          {
            "day": 76,
            "topic": "Introduction to MLOps",
            "priority": "MUST KNOW",
            "tasks": "Study the difference between DevOps and MLOps. Understand why tracking code versions is not enough—you must track Data versions and Model versions.",
            "achievement": "Can explain the massive operational complexity of deploying AI to production."
          },
          {
            "day": 77,
            "topic": "Data Version Control (DVC)",
            "priority": "MUST KNOW",
            "tasks": "Stop pushing CSVs to Git! Use `dvc` to version a 5GB dataset, store the data in S3, and push only the lightweight `.dvc` pointer file to Git.",
            "achievement": "Can safely manage and collaborate on massive datasets without crashing GitHub."
          },
          {
            "day": 78,
            "topic": "Experiment Tracking (Weights & Biases)",
            "priority": "MUST KNOW",
            "tasks": "Integrate W&B (or MLflow) into a PyTorch training script. Automatically log hyperparameters, loss curves, and validation accuracy to a cloud dashboard.",
            "achievement": "Can mathematically prove which model training run performed the best over time."
          },
          {
            "day": 79,
            "topic": "Model Registry (MLflow)",
            "priority": "MUST KNOW",
            "tasks": "Set up an MLflow tracking server. Register a newly trained XGBoost model. Transition its state from \"Staging\" to \"Production\" via the UI or API.",
            "achievement": "Can maintain a single source of truth for all production-ready AI models."
          },
          {
            "day": 80,
            "topic": "Automated Model Retraining",
            "priority": "MUST KNOW",
            "tasks": "Write a GitHub Actions pipeline that triggers when data changes in DVC: Downloads data, trains the model, evaluates it, and registers it to MLflow if accuracy > 90%.",
            "achievement": "Can automate the continuous learning cycle of an AI system."
          },
          {
            "day": 81,
            "topic": "Model Serialization & Optimization",
            "priority": "MUST KNOW",
            "tasks": "Study Pickle vs Joblib vs Safetensors. Convert a PyTorch model to ONNX (Open Neural Network Exchange) format to decouple it from Python.",
            "achievement": "Can prepare a trained model for high-speed, cross-platform inference."
          },
          {
            "day": 82,
            "topic": "High-Performance Model Serving",
            "priority": "MUST KNOW",
            "tasks": "Stop using basic Flask! Wrap your ONNX model using FastAPI, Ray Serve, or Nvidia Triton Inference Server to handle concurrent inference requests.",
            "achievement": "Can serve AI models with drastically reduced latency and higher throughput."
          },
          {
            "day": 83,
            "topic": "Serving Models on Kubernetes",
            "priority": "MUST KNOW",
            "tasks": "Dockerize your model server. Deploy it to your EKS cluster. Configure a Horizontal Pod Autoscaler (HPA) to scale up pods when CPU usage spikes during inference.",
            "achievement": "Can architect AI APIs that handle massive viral traffic automatically."
          },
          {
            "day": 84,
            "topic": "GPU Orchestration in K8s",
            "priority": "MUST KNOW",
            "tasks": "Study how to provision GPU-enabled EC2 nodes in EKS. Configure the Nvidia Device Plugin to allow K8s Pods to request `nvidia.com/gpu: 1`.",
            "achievement": "Can manage and allocate highly expensive AI hardware effectively in a cluster."
          },
          {
            "day": 85,
            "topic": "vLLM for LLM Serving",
            "priority": "MUST KNOW",
            "tasks": "Deep dive into serving Large Language Models. Deploy an open-source model using vLLM. Understand PagedAttention and continuous batching.",
            "achievement": "Can serve 7B parameter models 10x faster than standard Hugging Face pipelines."
          },
          {
            "day": 86,
            "topic": "Feature Stores (Feast)",
            "priority": "IMPORTANT",
            "tasks": "Study the concept of a Feature Store. Understand how it prevents training-serving skew by providing a unified repository for machine learning features.",
            "achievement": "Can architect data architectures that ensure models receive the exact same data formats in prod as they did in training."
          },
          {
            "day": 87,
            "topic": "Data Drift & Concept Drift",
            "priority": "MUST KNOW",
            "tasks": "Study why models degrade over time. Understand Data Drift (inputs change) vs Concept Drift (the real-world relationship changes, e.g., inflation affecting housing prices).",
            "achievement": "Can identify exactly when and why an AI model needs to be retrained."
          },
          {
            "day": 88,
            "topic": "Model Monitoring (Evidently AI)",
            "priority": "MUST KNOW",
            "tasks": "Deploy Evidently AI to monitor production inference data. Generate reports comparing the statistical distribution of yesterday's live data to the original training data.",
            "achievement": "Can automatically detect \"silent failures\" where a model is technically running, but predicting garbage."
          },
          {
            "day": 89,
            "topic": "Shadow Deployments",
            "priority": "MUST KNOW",
            "tasks": "Deploy a new V2 model alongside V1. Route a copy of real user traffic to V2, but do not return V2's answers. Compare the outputs asynchronously.",
            "achievement": "Can safely test experimental AI models using real-world data with zero user risk."
          },
          {
            "day": 90,
            "topic": "A/B Testing AI Models",
            "priority": "MUST KNOW",
            "tasks": "Route 10% of traffic to Model B. Track business metrics (e.g., click-through rate). Perform statistical significance testing to determine if Model B is actually better.",
            "achievement": "Can prove the ROI of a new AI model to business stakeholders."
          },
          {
            "day": 91,
            "topic": "Apache Kafka for Streaming MLOps",
            "priority": "MUST KNOW",
            "tasks": "Set up a Kafka cluster. Stream user click data into a topic, process it in real-time, and feed it into a recommendation model for instant personalized updates.",
            "achievement": "Can build real-time, event-driven AI applications."
          },
          {
            "day": 92,
            "topic": "Data Orchestration (Airflow/Prefect)",
            "priority": "MUST KNOW",
            "tasks": "Write a complex Directed Acyclic Graph (DAG) that coordinates data extraction, cleaning, DVC updating, and model training across multiple distributed systems.",
            "achievement": "Can reliably manage the tangled web of data engineering tasks required for AI."
          },
          {
            "day": 93,
            "topic": "AI Security: Model Poisoning",
            "priority": "MUST KNOW",
            "tasks": "Study how attackers can inject malicious data into automated training pipelines to fundamentally compromise the resulting model.",
            "achievement": "Can secure MLOps pipelines against advanced adversarial attacks."
          },
          {
            "day": 94,
            "topic": "Cost Optimization (Spot Instances)",
            "priority": "MUST KNOW",
            "tasks": "Configure your EKS node groups to use AWS Spot Instances for model training jobs, saving up to 90% on compute costs while handling interruptions gracefully.",
            "achievement": "Can dramatically reduce the massive cloud bills associated with AI engineering."
          },
          {
            "day": 95,
            "topic": "Kubeflow Fundamentals",
            "priority": "IMPORTANT",
            "tasks": "Study Kubeflow, the machine learning toolkit for Kubernetes. Understand Pipelines, Katib (hyperparameter tuning), and KServe.",
            "achievement": "Can navigate the enterprise standard framework for Kubernetes-native MLOps."
          },
          {
            "day": 96,
            "topic": "Phase 4 Capstone - MLOps Pipeline",
            "priority": "MUST KNOW",
            "tasks": "Combine DVC, MLflow, and GitHub Actions to create a fully automated pipeline that trains a model, versions it, and creates a Dockerized serving API.",
            "achievement": "Can build a production-grade CI/CD pipeline specifically designed for Machine Learning."
          },
          {
            "day": 97,
            "topic": "Phase 4 Capstone - Deployment & Monitoring",
            "priority": "MUST KNOW",
            "tasks": "Deploy the serving API to EKS using ArgoCD. Set up Evidently AI to monitor the incoming inference requests and trigger a Slack alert if data drift occurs.",
            "achievement": "Can architect a self-monitoring, highly scalable AI deployment ecosystem."
          },
          {
            "day": 98,
            "topic": "Interview Prep: CI/CD & Terraform",
            "priority": "MUST KNOW",
            "tasks": "Review state locking, GitOps vs CIOps, and the exact steps to securely manage cloud credentials in pipelines.",
            "achievement": "Ready to dominate the DevOps portion of an engineering interview."
          },
          {
            "day": 99,
            "topic": "Interview Prep: Kubernetes",
            "priority": "MUST KNOW",
            "tasks": "Review Pod lifecycles, Ingress routing, PVCs, and how to troubleshoot a `CrashLoopBackOff`.",
            "achievement": "Ready to pass a rigorous infrastructure and systems interview."
          },
          {
            "day": 100,
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
        "days": "Days 101–110",
        "items": [
          {
            "day": 101,
            "topic": "Portfolio Polish: Infrastructure",
            "priority": "MUST KNOW",
            "tasks": "Clean up your Terraform repository. Add a pristine README.md with architecture diagrams made in Excalidraw or draw.io.",
            "achievement": "Can present your infrastructure skills professionally to recruiters."
          },
          {
            "day": 102,
            "topic": "Portfolio Polish: MLOps",
            "priority": "MUST KNOW",
            "tasks": "Document your MLOps pipeline project. Explain the exact drift metrics you chose and why. Highlight the GitOps deployment flow.",
            "achievement": "Can prove you understand the complete AI lifecycle, not just Jupyter Notebooks."
          },
          {
            "day": 103,
            "topic": "System Design Mock: Scale",
            "priority": "MUST KNOW",
            "tasks": "Design a system that handles 1 million requests per second. Focus on Load Balancers, Redis caching, and Database Sharding.",
            "achievement": "Can confidently architect extreme-scale web applications."
          },
          {
            "day": 104,
            "topic": "System Design Mock: Microservices",
            "priority": "MUST KNOW",
            "tasks": "Design an E-Commerce platform. Define the bounded contexts, Kafka event streams, and Saga patterns for distributed transactions.",
            "achievement": "Can navigate the complexities of distributed system architecture."
          },
          {
            "day": 105,
            "topic": "System Design Mock: MLOps",
            "priority": "MUST KNOW",
            "tasks": "Design an automated retraining pipeline for a fraud detection model that ingests 5TB of streaming data daily.",
            "achievement": "Can architect massive, real-time AI data pipelines under pressure."
          },
          {
            "day": 106,
            "topic": "Behavioral Prep (STAR Method)",
            "priority": "MUST KNOW",
            "tasks": "Prepare 5 stories using Situation, Task, Action, Result. Focus on \"a time you failed,\" \"resolving a conflict,\" and \"learning a new tech rapidly.\"",
            "achievement": "Can pass the crucial cultural and behavioral fit interviews."
          },
          {
            "day": 107,
            "topic": "Resume Review",
            "priority": "MUST KNOW",
            "tasks": "Ensure every bullet point includes metrics (e.g., \"Reduced deployment time by 80% using GitHub Actions\"). Remove basic tutorials.",
            "achievement": "Can craft a resume that bypasses ATS filters and impresses hiring managers."
          },
          {
            "day": 108,
            "topic": "The Soft Skills of DevOps",
            "priority": "MUST KNOW",
            "tasks": "Study Site Reliability Engineering (SRE) culture. Understand Error Budgets, Service Level Objectives (SLOs), and Blameless Post-Mortems.",
            "achievement": "Can integrate seamlessly into elite engineering cultures."
          },
          {
            "day": 109,
            "topic": "The Future of AI Infrastructure",
            "priority": "IMPORTANT",
            "tasks": "Read about the future of GPUs, specialized AI chips (TPUs/Groq), and the shifting landscape of foundational models.",
            "achievement": "Can hold high-level strategic conversations with senior technical leaders."
          },
          {
            "day": 110,
            "topic": "Ultimate Graduation",
            "priority": "MUST KNOW",
            "tasks": "Reflect on mastering AWS, Kubernetes, Terraform, and MLOps. You have bridged the gap between code and reality.",
            "achievement": "You are now an Elite DevOps & MLOps Engineer."
          }
        ]
      }
    ]
  }
];
