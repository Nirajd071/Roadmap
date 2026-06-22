🚀 **[View the Interactive Dashboard Live](https://Nirajd071.github.io/Roadmap)**

Welcome to the ultimate, comprehensive 918-day journey from Backend basics to advanced AI, System Design & DSA.
This repository contains the source code for the interactive React dashboard and the full daily curriculum below.

---

# 918-Day Master Backend, AI & DSA Roadmap

## System Design & Architecture (128 Days)

### THE FOUNDATIONS OF DISTRIBUTED SYSTEMS (Days 0–22)

#### Day 0: Prerequisites Check
- **Priority:** MUST KNOW
- **Tasks:** Ensure you understand basic networking (IP, ports), at least one backend language (Java/Python), and basic SQL. This roadmap assumes you can code, but are new to architecture.
- **Achievement:** Can confidently begin the System Design roadmap without getting stuck on programming syntax.

#### Day 1: Introduction to Distributed Systems
- **Priority:** MUST KNOW
- **Tasks:** Study the difference between Monoliths and Microservices. Read about single point of failure (SPOF) and system coupling.
- **Achievement:** Can clearly explain when to choose microservices over monoliths and identify a SPOF.

#### Day 2: Vertical vs Horizontal Scaling
- **Priority:** MUST KNOW
- **Tasks:** Research the difference between scaling up (upgrading hardware) vs scaling out (adding more machines). Understand the limitations of vertical scaling.
- **Achievement:** Can articulate the trade-offs of both scaling methods in an interview setting.

#### Day 3: Networking Basics (TCP/UDP, IP)
- **Priority:** MUST KNOW
- **Tasks:** Review the OSI model. Deep dive into the differences between TCP (reliable, ordered) and UDP (fast, stateless).
- **Achievement:** Can decide whether to use TCP or UDP for specific applications like video streaming vs banking.

#### Day 4: DNS (Domain Name System)
- **Priority:** MUST KNOW
- **Tasks:** Learn how URLs resolve to IP addresses. Understand recursive vs iterative DNS queries, A Records, and CNAME.
- **Achievement:** Can explain the exact step-by-step process of what happens when you type google.com into a browser.

#### Day 5: Load Balancing Concepts
- **Priority:** MUST KNOW
- **Tasks:** Study what a load balancer does. Learn the difference between Layer 4 (Transport) and Layer 7 (Application) load balancing.
- **Achievement:** Can place a load balancer in an architecture diagram and explain OSI Layer 4 vs Layer 7 routing.

#### Day 6: Load Balancing Algorithms
- **Priority:** MUST KNOW
- **Tasks:** Read about Round Robin, Least Connections, IP Hash, and Weighted Round Robin.
- **Achievement:** Can select the correct load balancing algorithm based on server capacities and session persistence needs.

#### Day 7: Consistent Hashing Theory
- **Priority:** MUST KNOW
- **Tasks:** Study the math and theory behind consistent hashing. Understand how it minimizes key redistribution when nodes are added or removed.
- **Achievement:** Can draw the "hash ring" and explain how it solves the rehashing problem in distributed caches.

#### Day 8: Reverse vs Forward Proxies
- **Priority:** MUST KNOW
- **Tasks:** Understand the difference. Forward proxy hides the client; reverse proxy hides the server. Look at Nginx use cases.
- **Achievement:** Can explain how reverse proxies provide security, caching, and load balancing for backend servers.

#### Day 9: Caching Strategies
- **Priority:** MUST KNOW
- **Tasks:** Study Cache-Aside, Read-Through, Write-Through, and Write-Back caching strategies.
- **Achievement:** Can select the correct caching pattern for read-heavy vs write-heavy workloads.

#### Day 10: Cache Eviction Policies
- **Priority:** MUST KNOW
- **Tasks:** Learn LRU (Least Recently Used), LFU (Least Frequently Used), and FIFO. Implement LRU in code (Python/Java).
- **Achievement:** Can write an LRU cache implementation and explain when to use LFU instead.

#### Day 11: Content Delivery Networks (CDNs)
- **Priority:** MUST KNOW
- **Tasks:** Study Push vs Pull CDNs. Understand how edge locations cache static assets to reduce latency globally.
- **Achievement:** Can design a static asset delivery pipeline using AWS CloudFront or Cloudflare.

#### Day 12: CAP Theorem
- **Priority:** MUST KNOW
- **Tasks:** Deep dive into Consistency, Availability, and Partition Tolerance. Understand why you can only pick two in a distributed failure.
- **Achievement:** Can categorize databases (CP vs AP) and explain why network partitions force a choice.

#### Day 13: Consistent Hashing (Implementation)
- **Priority:** MUST KNOW
- **Tasks:** Take yesterday's theory and actually implement a basic Consistent Hashing ring in Python or Java. Test adding and removing nodes programmatically.
- **Achievement:** Can prove you understand the math by writing a working distributed hashing algorithm.

#### Day 14: PACELC Theorem
- **Priority:** IMPORTANT
- **Tasks:** Study the extension of CAP. If there is a Partition (P), how does it trade off between Availability and Consistency? Else (E), how does it trade off between Latency and Consistency?
- **Achievement:** Can use PACELC to explain DynamoDB vs MongoDB default configurations.

#### Day 15: Consensus Algorithms: Paxos & Raft
- **Priority:** MUST KNOW
- **Tasks:** Study distributed consensus theory, Paxos history, and the Raft consensus protocol. Learn about Leader Election, Log Replication, and Safety invariants.
- **Achievement:** Can explain how distributed nodes agree on state changes and survive network partitions.

#### Day 16: Data Partitioning & Sharding
- **Priority:** MUST KNOW
- **Tasks:** Learn the difference between vertical partitioning (splitting columns) and horizontal sharding (splitting rows).
- **Achievement:** Can design a sharding strategy based on a shard key to prevent hot spots.

#### Day 17: Database Replication
- **Priority:** MUST KNOW
- **Tasks:** Study Master-Slave (Single Leader), Multi-Leader, and Leaderless replication strategies.
- **Achievement:** Can explain the pros and cons of synchronous vs asynchronous replication for data durability.

#### Day 18: Message Queues (Pub/Sub vs P2P)
- **Priority:** MUST KNOW
- **Tasks:** Understand Point-to-Point (RabbitMQ) vs Publish-Subscribe (Kafka). Why use async communication?
- **Achievement:** Can decouple two tightly integrated microservices using a message broker.

#### Day 19: API Design Basics (REST vs RPC)
- **Priority:** MUST KNOW
- **Tasks:** Compare RESTful design principles with gRPC/RPC. Understand statelessness and idempotency.
- **Achievement:** Can design clean, standard REST API endpoints and explain when to use gRPC instead.

#### Day 20: WebSockets & Long Polling
- **Priority:** MUST KNOW
- **Tasks:** Study methods for real-time communication. Compare WebSockets, Server-Sent Events (SSE), and Long Polling.
- **Achievement:** Can choose the right protocol for a real-time chat app vs a live stock ticker.

#### Day 21: Phase 1 Review: Mock Architecture
- **Priority:** MUST KNOW
- **Tasks:** Design a highly available web server architecture combining DNS, Load Balancers, Caching, and a replicated Database.
- **Achievement:** Can confidently draw a basic, scalable 3-tier web architecture on a whiteboard.

### DATABASES & DATA MANAGEMENT (Days 22–46)

#### Day 22: RDBMS vs NoSQL
- **Priority:** MUST KNOW
- **Tasks:** Compare strictly typed, normalized relational databases with flexible, denormalized NoSQL stores.
- **Achievement:** Can evaluate business requirements and correctly choose between Postgres and MongoDB.

#### Day 23: ACID Properties
- **Priority:** MUST KNOW
- **Tasks:** Deep dive into Atomicity, Consistency, Isolation, Durability. Understand how relational DBs guarantee these.
- **Achievement:** Can explain how a bank transfer transaction is protected by ACID principles.

#### Day 24: BASE Properties (NoSQL)
- **Priority:** MUST KNOW
- **Tasks:** Study Basically Available, Soft state, Eventual consistency. Compare this to strict ACID.
- **Achievement:** Can explain why Amazon shopping carts use BASE and accept eventual consistency.

#### Day 25: Database Indexes Deep Dive
- **Priority:** MUST KNOW
- **Tasks:** Learn how B-Trees and B+ Trees work under the hood. Understand what makes an index fast for reads but slow for writes.
- **Achievement:** Can draw a B+ Tree and explain why it minimizes disk I/O operations.

#### Day 26: Advanced Indexing
- **Priority:** MUST KNOW
- **Tasks:** Study Composite Indexes, Covering Indexes, and the Left-most prefix rule.
- **Achievement:** Can optimize a slow SQL query by creating a highly efficient covering index.

#### Day 27: Key-Value Stores (Redis/Memcached)
- **Priority:** MUST KNOW
- **Tasks:** Understand in-memory KV stores. Use cases for Redis beyond simple caching (Leaderboards, Pub/Sub).
- **Achievement:** Can architect a system that uses Redis for high-speed, volatile data operations.

#### Day 28: Document Stores (MongoDB)
- **Priority:** MUST KNOW
- **Tasks:** Learn how JSON/BSON document databases work. Understand denormalization strategies.
- **Achievement:** Can design a data model for a blog with nested comments in a single document.

#### Day 29: Wide-Column Stores (Cassandra)
- **Priority:** IMPORTANT
- **Tasks:** Study distributed, masterless databases. Learn about Partition Keys and Clustering Columns.
- **Achievement:** Can explain Cassandra's architecture and design a query-driven data model.

#### Day 30: Graph Databases (Neo4j)
- **Priority:** IMPORTANT
- **Tasks:** Understand Nodes and Edges. When to use Graph DBs (Social networks, recommendation engines).
- **Achievement:** Can identify a problem that requires a graph database to avoid complex SQL JOINs.

#### Day 31: Search Engines (Elasticsearch)
- **Priority:** MUST KNOW
- **Tasks:** Learn how an Inverted Index works. Understand text analysis and full-text search.
- **Achievement:** Can design a scalable search feature utilizing Elasticsearch inverted indices.

#### Day 32: Time-Series Databases (InfluxDB, TimescaleDB)
- **Priority:** IMPORTANT
- **Tasks:** Study InfluxDB and TimescaleDB. Understand how they optimize and compress timestamped telemetry, metrics, and logs.
- **Achievement:** Can explain why a relational DB is poor for storing millions of IoT sensor metrics per second.

#### Day 33: Blob / Object Storage
- **Priority:** MUST KNOW
- **Tasks:** Understand Amazon S3 architecture. Flat namespaces vs hierarchical file systems.
- **Achievement:** Can securely architecture video/image upload features using direct-to-S3 pre-signed URLs.

#### Day 34: Transaction Isolation Levels
- **Priority:** MUST KNOW
- **Tasks:** Study Read Uncommitted, Read Committed, Repeatable Read, and Serializable levels.
- **Achievement:** Can explain Dirty Reads, Non-repeatable Reads, and Phantom Reads, and how to prevent them.

#### Day 35: Concurrency Control (Optimistic/Pessimistic)
- **Priority:** MUST KNOW
- **Tasks:** Compare locking rows (Pessimistic) vs using version numbers (Optimistic).
- **Achievement:** Can implement optimistic locking to prevent lost updates in a ticketing system.

#### Day 36: Distributed Transactions (2PC)
- **Priority:** MUST KNOW
- **Tasks:** Learn the Two-Phase Commit protocol. Understand the coordinator and cohort roles and why it blocks.
- **Achievement:** Can explain the vulnerability of the coordinator failing in a 2PC setup.

#### Day 37: Saga Pattern
- **Priority:** MUST KNOW
- **Tasks:** Study long-running distributed transactions using compensating actions instead of strict locking.
- **Achievement:** Can design an Order-Payment-Inventory flow using the Saga choreography pattern.

#### Day 38: Change Data Capture (CDC) & Debezium
- **Priority:** MUST KNOW
- **Tasks:** Learn about CDC and Debezium. Understand how monitoring database transaction logs streams changes to search/analytics engines safely.
- **Achievement:** Can explain how to safely replicate data from Postgres to Elasticsearch without dual-writes.

#### Day 39: Event Sourcing
- **Priority:** IMPORTANT
- **Tasks:** Understand storing every state change as an append-only event log rather than overwriting current state. Ideal for audit-heavy systems.
- **Achievement:** Can design an accounting ledger system using pure event sourcing.

#### Day 40: CQRS Pattern
- **Priority:** IMPORTANT
- **Tasks:** Study Command Query Responsibility Segregation. Separating write models from read models.
- **Achievement:** Can combine Event Sourcing with CQRS to build a highly scalable, eventually consistent read API.

#### Day 41: Database Migration Strategies
- **Priority:** MUST KNOW
- **Tasks:** Learn how to alter schemas in production with zero downtime using the Expand-and-Contract pattern.
- **Achievement:** Can safely rename a database column in a live, high-traffic environment.

#### Day 42: Consistent Hashing (Data Layer)
- **Priority:** MUST KNOW
- **Tasks:** Review consistent hashing specifically for distributing database shards.
- **Achievement:** Can calculate the impact of adding a new database shard on a consistent hash ring.

#### Day 43: Quorum & Replication Factor
- **Priority:** MUST KNOW
- **Tasks:** Study the math of Read and Write quorums (W + R > N) for strong consistency in leaderless databases.
- **Achievement:** Can configure a Cassandra cluster for strict consistency vs high availability.

#### Day 44: Vector Databases
- **Priority:** MUST KNOW
- **Tasks:** Understand how Pinecone/Milvus store embeddings and perform nearest-neighbor searches.
- **Achievement:** Can explain how vector DBs differ from traditional DBs for AI semantic search.

#### Day 45: Polyglot Persistence Architecture
- **Priority:** MUST KNOW
- **Tasks:** Study architectures that combine multiple database types (SQL + Redis + ES).
- **Achievement:** Can design a complex system leveraging the strengths of 3+ different database technologies.

#### Day 46: Phase 2 Review: DB Design
- **Priority:** MUST KNOW
- **Tasks:** Take a complex domain (e.g., E-commerce catalog) and design its full database architecture.
- **Achievement:** Can justify the choices between Postgres, MongoDB, Redis, and ES for various microservices.

### MICROSERVICES & REAL-WORLD PATTERNS (Days 47–75)

#### Day 47: Service Discovery
- **Priority:** MUST KNOW
- **Tasks:** Study client-side vs server-side discovery. Understand tools like Consul, Eureka, and ZooKeeper.
- **Achievement:** Can explain how a microservice dynamically finds the IP of another service in a scaling environment.

#### Day 48: API Gateway Pattern
- **Priority:** MUST KNOW
- **Tasks:** Learn the responsibilities of an API Gateway (Routing, Auth, Rate Limiting, Aggregation).
- **Achievement:** Can design a unified entry point that masks internal microservice architectures from clients.

#### Day 49: BFF (Backend for Frontend)
- **Priority:** IMPORTANT
- **Tasks:** Understand creating specific API Gateways tailored for Mobile apps vs Web apps.
- **Achievement:** Can explain when to split a single API Gateway into multiple BFFs to reduce over-fetching.

#### Day 50: Circuit Breaker Pattern
- **Priority:** MUST KNOW
- **Tasks:** Study how to prevent cascading failures using Closed, Open, and Half-Open states.
- **Achievement:** Can describe how a circuit breaker protects a healthy service from a struggling dependency.

#### Day 51: Bulkhead Pattern
- **Priority:** MUST KNOW
- **Tasks:** Learn how isolating thread pools prevents one failing service from consuming all system resources.
- **Achievement:** Can combine Circuit Breakers with Bulkheads to create highly resilient microservices.

#### Day 52: Retry & Timeout Strategies
- **Priority:** MUST KNOW
- **Tasks:** Study exponential backoff and jitter to prevent hammering recovering services.
- **Achievement:** Can implement safe retry logic that avoids causing thundering herd problems.

#### Day 53: Asynchronous Messaging (Kafka)
- **Priority:** MUST KNOW
- **Tasks:** Deep dive into Kafka architecture: Topics, Partitions, Brokers, and Consumer Groups.
- **Achievement:** Can design a high-throughput event processing pipeline using Kafka partitions for parallelism.

#### Day 54: Dead Letter Queues (DLQ)
- **Priority:** MUST KNOW
- **Tasks:** Understand how to handle poisonous messages or processing failures in async systems.
- **Achievement:** Can design a robust error-handling flow for failed Kafka or SQS messages.

#### Day 55: Idempotency in APIs
- **Priority:** MUST KNOW
- **Tasks:** Study how to design APIs where duplicate requests (e.g. payment retries, client double-clicks) have the exact same effect as one request.
- **Achievement:** Can implement an Idempotency-Key system for processing financial payments safely.

#### Day 56: Distributed Locks (Redis/Redlock, ZooKeeper)
- **Priority:** MUST KNOW
- **Tasks:** Study distributed locking patterns using Redis (Redlock) and ZooKeeper. Learn when leases are necessary to prevent split-brain write issues.
- **Achievement:** Can coordinate safe distributed executions (like scheduled jobs, inventory holds) across microservices.

#### Day 57: Transactional Outbox Pattern
- **Priority:** MUST KNOW
- **Tasks:** Learn how to reliably update a database AND publish an event to a message broker without 2PC.
- **Achievement:** Can design a Transactional Outbox to guarantee at-least-once message delivery.

#### Day 58: Authentication & Authorization
- **Priority:** MUST KNOW
- **Tasks:** Compare Basic Auth, Session Auth, and Token Auth. Understand stateful vs stateless.
- **Achievement:** Can choose the correct authentication mechanism for a monolith vs a distributed API.

#### Day 59: JWT (JSON Web Tokens)
- **Priority:** MUST KNOW
- **Tasks:** Study JWT structure (Header, Payload, Signature). Understand security risks and token expiration.
- **Achievement:** Can explain how to secure APIs with JWTs and the difficulty of revoking them.

#### Day 60: OAuth2 & OIDC
- **Priority:** IMPORTANT
- **Tasks:** Understand Authorization Code flow vs Client Credentials flow. Single Sign-On basics.
- **Achievement:** Can diagram the OAuth2 flow for a user logging in via Google to a third-party app.

#### Day 61: Distributed Tracing (OpenTelemetry & Jaeger)
- **Priority:** MUST KNOW
- **Tasks:** Study distributed request tracing. Learn how trace IDs and span IDs propagate context across multiple microservice boundaries using OpenTelemetry and Jaeger.
- **Achievement:** Can debug distributed performance bottlenecks and network latency leaks.

#### Day 62: Metrics & Observability Theory
- **Priority:** MUST KNOW
- **Tasks:** Study the RED method (Rate, Errors, Duration) and USE method (Utilization, Saturation, Errors).
- **Achievement:** Can design a monitoring dashboard strategy for a new microservice.

#### Day 63: Metrics Implementation
- **Priority:** MUST KNOW
- **Tasks:** Export raw metrics from a dummy application and scrape them with a local Prometheus instance. Graph them in Grafana.
- **Achievement:** Can build the foundational observability stack from scratch.

#### Day 64: Log Aggregation
- **Priority:** MUST KNOW
- **Tasks:** Understand the ELK Stack (Elasticsearch, Logstash, Kibana) for centralized logging.
- **Achievement:** Can explain why you must never log directly to local files in a Dockerized environment.

#### Day 65: GraphQL vs REST
- **Priority:** IMPORTANT
- **Tasks:** Study GraphQL schemas, queries, and resolvers. Understand under-fetching and over-fetching.
- **Achievement:** Can evaluate if a complex UI dashboard should use GraphQL or multiple REST endpoints.

#### Day 66: gRPC & Protobuf Fundamentals
- **Priority:** MUST KNOW
- **Tasks:** Study Protocol Buffers (protobuf) schema designs and unary vs. streaming RPCs. Compare HTTP/2 multiplexing benefits over HTTP/1.1 REST.
- **Achievement:** Can design the high-performance internal service-to-service communication layer using gRPC.

#### Day 67: Service Mesh (Istio)
- **Priority:** IMPORTANT
- **Tasks:** Study Service Mesh patterns. Differentiate the Data Plane (envoy sidecars) from the Control Plane (istiod). Explore mutual TLS (mTLS), traffic split releases, and fault injection.
- **Achievement:** Can deploy and secure microservices transparently without changing application code.

#### Day 68: Batch Processing
- **Priority:** IMPORTANT
- **Tasks:** Understand MapReduce and distributed batch jobs for heavy data processing (Hadoop/Spark basics).
- **Achievement:** Can design a system to process 10TB of log data nightly.

#### Day 69: Stream Processing
- **Priority:** IMPORTANT
- **Tasks:** Compare batch vs stream processing. Understand Apache Flink or Kafka Streams.
- **Achievement:** Can architect a real-time fraud detection pipeline on incoming credit card swipes.

#### Day 70: Data Lakes vs Data Warehouses
- **Priority:** IMPORTANT
- **Tasks:** Study the difference between structured OLAP data warehouses and raw object-storage Data Lakes.
- **Achievement:** Can explain when to use Snowflake/Redshift versus an AWS S3 Data Lake.

#### Day 71: Security: HTTPS & TLS
- **Priority:** MUST KNOW
- **Tasks:** Learn how asymmetric and symmetric encryption work together in the TLS handshake.
- **Achievement:** Can explain the TLS handshake step-by-step in a security-focused interview.

#### Day 72: Security: Common Vulnerabilities
- **Priority:** MUST KNOW
- **Tasks:** Review OWASP Top 10: SQL Injection, XSS, CSRF, and SSRF.
- **Achievement:** Can secure an architecture against the most common web exploits.

#### Day 73: Serverless Architecture
- **Priority:** IMPORTANT
- **Tasks:** Study AWS Lambda. Understand Cold Starts, stateless execution, and event-driven triggers.
- **Achievement:** Can design a highly scalable, event-driven image processing pipeline using Serverless.

#### Day 74: Phase 3 Review: Resiliency
- **Priority:** MUST KNOW
- **Tasks:** Take a basic architecture and inject failures. Add Circuit Breakers, Retries, and DLQs.
- **Achievement:** Can systematically identify and mitigate failure points in a complex architecture.

### THE SYSTEM DESIGN INTERVIEW FRAMEWORK (Days 75–88)

#### Day 75: PEDALS Framework & Requirements
- **Priority:** MUST KNOW
- **Tasks:** Learn the PEDALS framework. Practice asking functional vs non-functional requirements to perfectly scope out a vague prompt ("Design Twitter").
- **Achievement:** Can structure any system design interview answer predictably and logically.

#### Day 76: Back-of-the-Envelope Math
- **Priority:** MUST KNOW
- **Tasks:** Memorize powers of 2, time conversions, and standard metrics (1 million requests/day = 12 requests/sec). Practice calculating QPS.
- **Achievement:** Can quickly estimate required storage capacity and read/write throughput in your head.

#### Day 77: QPS Calculator (Implementation)
- **Priority:** MUST KNOW
- **Tasks:** Write a quick Python script or web app that accepts DAU (Daily Active Users) and outputs QPS, Peak QPS, and storage estimates over 5 years.
- **Achievement:** Can mathematically prove your interview estimations using code.

#### Day 78: API & Data Model Design
- **Priority:** MUST KNOW
- **Tasks:** Practice drawing Entity-Relationship diagrams, choosing SQL vs NoSQL, and writing REST API contracts (HTTP method, path, payload).
- **Achievement:** Can design clean APIs and schemas that support massive scale.

#### Day 79: REST Contracts (Implementation)
- **Priority:** MUST KNOW
- **Tasks:** Use Swagger/OpenAPI to actually write out the JSON contract for a "Design Twitter" problem. Validate the payloads.
- **Achievement:** Can translate an abstract API design into a rigid, testable technical spec.

#### Day 80: High-Level Design & Bottlenecks
- **Priority:** MUST KNOW
- **Tasks:** Practice drawing the initial architecture (Client -> LB -> App -> DB) and immediately pointing out what breaks at 100M users.
- **Achievement:** Can quickly identify network, CPU, and disk I/O bottlenecks in an architecture.

#### Day 81: Scaling Strategies
- **Priority:** MUST KNOW
- **Tasks:** Apply caching, sharding, message queues, and CDNs to fix the bottlenecks identified in your high-level designs.
- **Achievement:** Can systematically scale up a basic web app to handle enterprise-level traffic.

#### Day 82: Handling Pagination at Scale
- **Priority:** MUST KNOW
- **Tasks:** Study cursor-based pagination vs offset-based pagination. Understand why SQL OFFSET gets extremely slow at scale.
- **Achievement:** Can design a highly performant scrolling feed without database degradation.

#### Day 83: Cursor Pagination (Implementation)
- **Priority:** MUST KNOW
- **Tasks:** Write a small backend script that implements true cursor-based pagination over a dummy dataset of 1 million rows.
- **Achievement:** Can write code that fetches page 10,000 just as fast as page 1.

#### Day 84: Designing Unique ID Generators
- **Priority:** MUST KNOW
- **Tasks:** Study UUIDs, Ticket Servers, and Twitter Snowflake. How to generate 10,000 sortable unique IDs per second.
- **Achievement:** Can design a distributed, chronologically sortable ID generation service.

#### Day 85: Designing a Key-Value Store
- **Priority:** IMPORTANT
- **Tasks:** Study the internals of Dynamo or Cassandra. Understand Consistent Hashing and Quorum.
- **Achievement:** Can architect a highly available, distributed key-value database from scratch.

#### Day 86: Designing a Rate Limiter
- **Priority:** MUST KNOW
- **Tasks:** Practice designing a distributed rate limiter using Redis and sliding window logs.
- **Achievement:** Can design a middleware service to protect APIs from DDoS and brute force attacks.

#### Day 87: Rate Limiter (Implementation)
- **Priority:** MUST KNOW
- **Tasks:** Write a Python/Java script that uses Redis to implement a Sliding Window rate limiting algorithm.
- **Achievement:** Can implement production-grade API throttling in code.

#### Day 88: Designing a Web Crawler
- **Priority:** IMPORTANT
- **Tasks:** Study seed URLs, BFS crawling, DNS caching, and handling politeness rules (robots.txt).
- **Achievement:** Can architect a distributed crawler that safely treats billions of web pages.

### PRACTICAL SYSTEM DESIGN (REAL WORLD) (Days 89–128)

#### Day 89: Web Crawler (Implementation)
- **Priority:** MUST KNOW
- **Tasks:** Write a basic Breadth-First-Search (BFS) crawler in Python/Java that respects robots.txt and limits concurrency.
- **Achievement:** Can build a functional internet scraper that doesn't crash or get IP-banned.

#### Day 90: Phase 4 Review: Mock Interview
- **Priority:** MUST KNOW
- **Tasks:** Run a timed 45-minute mock interview for "Design a URL Shortener" using the full PEDALS framework.
- **Achievement:** Can successfully navigate a full system design interview from requirements to scaling.

#### Day 91: Design Pastebin
- **Priority:** MUST KNOW
- **Tasks:** Focus on blob storage for text, database for metadata, and data expiration/cleanup.
- **Achievement:** Can design a service for storing and expiring millions of text snippets.

#### Day 92: Design Twitter / X
- **Priority:** MUST KNOW
- **Tasks:** Focus on the home timeline generation. Fan-out on write vs Fan-out on read strategies.
- **Achievement:** Can architect a scalable social media feed supporting celebrity accounts with millions of followers.

#### Day 93: Design Instagram
- **Priority:** MUST KNOW
- **Tasks:** Focus on image storage (S3 + CDN) and generating the news feed using a graph database or denormalized tables.
- **Achievement:** Can design a photo-sharing app optimized for high-bandwidth read operations.

#### Day 94: Design Dropbox / Google Drive
- **Priority:** MUST KNOW
- **Tasks:** Focus on block-level file syncing, delta syncing, and handling concurrent edits.
- **Achievement:** Can architect a file synchronization service that minimizes network bandwidth usage.

#### Day 95: Design WhatsApp / Messenger
- **Priority:** MUST KNOW
- **Tasks:** Focus on WebSockets, message sequencing, presence servers (online status), and push notifications.
- **Achievement:** Can design a real-time chat application handling billions of messages daily.

#### Day 96: Design YouTube / Netflix
- **Priority:** MUST KNOW
- **Tasks:** Focus on video transcoding pipelines, chunking, and massive CDN delivery architectures.
- **Achievement:** Can design a video streaming platform that supports multiple resolutions and adaptive bitrate streaming.

#### Day 97: Design Uber / Lyft
- **Priority:** MUST KNOW
- **Tasks:** Focus on geospatial indexing (QuadTrees, Geohashes) and matching riders with drivers in real-time.
- **Achievement:** Can design a location-based dispatch system handling rapid real-time updates.

#### Day 98: Design Yelp / Proximity Service
- **Priority:** MUST KNOW
- **Tasks:** Focus specifically on optimizing geospatial databases to query "businesses near me" rapidly.
- **Achievement:** Can architect a highly read-optimized location discovery service.

#### Day 100: Design Ticketmaster / BookMyShow
- **Priority:** MUST KNOW
- **Tasks:** Focus on high concurrency, preventing double-booking using row locks, and handling massive traffic spikes.
- **Achievement:** Can design a transactional ticketing system that survives the "Taylor Swift" traffic spike.

#### Day 101: Design a Typeahead / Autocomplete
- **Priority:** MUST KNOW
- **Tasks:** Focus on Trie data structures, caching hot prefixes, and updating the trie offline.
- **Achievement:** Can architect a sub-10ms autocomplete suggestion engine for a search bar.

#### Day 102: Design Amazon / E-Commerce
- **Priority:** MUST KNOW
- **Tasks:** Focus on the shopping cart (DynamoDB), inventory management, and the checkout Saga pattern.
- **Achievement:** Can design a highly available e-commerce platform that never loses a shopping cart.

#### Day 103: Design a Payment Gateway
- **Priority:** MUST KNOW
- **Tasks:** Focus on Idempotency, 2PC vs Sagas, communicating with external banks, and strict ACID compliance.
- **Achievement:** Can design a bulletproof, secure payment processing API.

#### Day 104: Design Google Docs (Collaborative Editor)
- **Priority:** IMPORTANT
- **Tasks:** Focus on Operational Transformation (OT) or Conflict-free Replicated Data Types (CRDTs).
- **Achievement:** Can explain the algorithms required to allow multiple users to type in the same document simultaneously.

#### Day 105: Design a Notification System
- **Priority:** MUST KNOW
- **Tasks:** Focus on fan-out queues, rate limiting, and third-party integrations (APNS, FCM, SendGrid).
- **Achievement:** Can design a centralized service that delivers millions of emails and push notifications reliably.

#### Day 106: Design a Metrics / Monitoring System
- **Priority:** IMPORTANT
- **Tasks:** Focus on time-series databases, data aggregation, and handling extreme write-heavy workloads.
- **Achievement:** Can architect a Datadog-like system that ingests billions of server metrics.

#### Day 107: Design a Distributed Message Queue
- **Priority:** IMPORTANT
- **Tasks:** Focus on the internals of Kafka. Disk I/O optimization, zero-copy, and partition replication.
- **Achievement:** Can architect a high-throughput message broker from scratch.

#### Day 108: Design Tinder
- **Priority:** IMPORTANT
- **Tasks:** Focus on geospatial matching algorithms, swiping logic (queues), and recommendation engines.
- **Achievement:** Can design a fast, location-based matching service with complex recommendation logic.

#### Day 109: Design Slack
- **Priority:** IMPORTANT
- **Tasks:** Focus on channel architecture, WebSockets for live typing, and searching historical messages.
- **Achievement:** Can design a team-based chat application optimized for large channels.

#### Day 110: Design a Stock Exchange
- **Priority:** IMPORTANT
- **Tasks:** Focus on ultra-low latency, order matching engines, and strict in-memory state machines.
- **Achievement:** Can explain the extreme architectural differences required for high-frequency trading platforms.

#### Day 111: Design ChatGPT (LLM Inference System)
- **Priority:** MUST KNOW
- **Tasks:** Design a scalable large language model inference service. Focus on token streaming over SSE/WebSockets, KV-cache budgeting, speculative decoding, and dynamic query batching.
- **Achievement:** Can architect high-throughput AI services optimized for GPU utilization constraints.

#### Day 112: Design an AI RAG System
- **Priority:** MUST KNOW
- **Tasks:** Apply system design to AI. Focus on document ingestion pipelines, vector databases (pgvector/Pinecone), and LLM API orchestration.
- **Achievement:** Can architect an enterprise-grade Retrieval-Augmented Generation pipeline.

#### Day 113: Design Recommendation Engine
- **Priority:** MUST KNOW
- **Tasks:** Design a real-time recommendation feed (e.g. TikTok, Netflix). Architect the candidate retrieval stage, deep-learning ranking services, and heavy re-ranking filters.
- **Achievement:** Can design end-to-end recommendation architectures scaling to billions of items and users.

#### Day 114: Design a Distributed Web Cache
- **Priority:** IMPORTANT
- **Tasks:** Focus on consistent hashing, LRU implementation, and memcached architecture.
- **Achievement:** Can architect a Redis/Memcached clone distributed across multiple servers.

#### Day 115: System Design Anti-Patterns
- **Priority:** MUST KNOW
- **Tasks:** Study common failures: premature microservices, over-sharding, synchronous inter-service calls, and shared databases. Understand why architectures fail in the real world.
- **Achievement:** Can critically evaluate bad architecture proposals and defend simpler, more robust alternatives.

#### Day 116: Review: Handling Traffic Spikes
- **Priority:** MUST KNOW
- **Tasks:** Review all architectures and study how each handles sudden 100x traffic spikes (e.g., Black Friday).
- **Achievement:** Can apply aggressive caching, queueing, and auto-scaling to survive massive spikes.

#### Day 117: Review: Handling Data Loss
- **Priority:** MUST KNOW
- **Tasks:** Review disaster recovery, multi-region replication, and backup strategies.
- **Achievement:** Can architect systems that survive the destruction of an entire AWS data center.

#### Day 118: Mock Interview 1
- **Priority:** MUST KNOW
- **Tasks:** Run a full 45-minute mock interview with a peer or AI for "Design Twitter".
- **Achievement:** Can confidently deliver a senior-level system design presentation under time pressure.

#### Day 119: Mock Interview 2
- **Priority:** MUST KNOW
- **Tasks:** Run a full 45-minute mock interview with a peer or AI for "Design Uber".
- **Achievement:** Can successfully navigate geospatial requirements and real-time state management.

#### Day 120: Mock Interview 3
- **Priority:** MUST KNOW
- **Tasks:** Run a full 45-minute mock interview with a peer or AI for "Design Ticketmaster".
- **Achievement:** Can confidently discuss concurrency, locks, and transactional integrity.

#### Day 121: Mock Interview 4
- **Priority:** MUST KNOW
- **Tasks:** Run a full 45-minute mock interview with a peer or AI for a surprise topic.
- **Achievement:** Can adapt the PEDALS framework to completely unknown system requirements.

#### Day 122: Refinement & Weaknesses
- **Priority:** MUST KNOW
- **Tasks:** Identify your weakest areas from the mock interviews and review the relevant concepts (e.g., Sagas, WebSockets).
- **Achievement:** Can shore up knowledge gaps in specific distributed systems topics.

#### Day 123: Final Deep Dive - Networking
- **Priority:** MUST KNOW
- **Tasks:** Re-review TCP/IP, Load Balancing, and DNS routing for ultra-low latency.
- **Achievement:** Can ace deep network-layer probe questions in FAANG interviews.

#### Day 124: Final Deep Dive - Storage
- **Priority:** MUST KNOW
- **Tasks:** Re-review B-Trees, LSM Trees, and consistent hashing internals.
- **Achievement:** Can explain exactly how databases write data to disk block by block.

#### Day 125: Mock Interview 5 (Hard Mode)
- **Priority:** MUST KNOW
- **Tasks:** Attempt a highly complex architecture like "Design a Stock Exchange" under strict time limits.
- **Achievement:** Can perform under extreme cognitive load.

#### Day 126: Review of Anti-Patterns
- **Priority:** MUST KNOW
- **Tasks:** Review the Anti-Patterns day. Ensure you do not over-engineer your final interview answers.
- **Achievement:** Can demonstrate maturity by favoring simple solutions over complex ones.

#### Day 127: Whiteboarding Practice
- **Priority:** MUST KNOW
- **Tasks:** Spend the day drawing architectures physically on a whiteboard or tablet without using drawing software.
- **Achievement:** Can smoothly draw and talk simultaneously in an in-person interview.

#### Day 128: Final Review & Preparation
- **Priority:** MUST KNOW
- **Tasks:** Review your notes, cheat sheets, and back-of-the-envelope math. Mentally prepare for the real interview.
- **Achievement:** Ready to ace a FAANG-level System Design interview.

## Spring Boot & Microservices (140 Days)

### JVM & CORE JAVA INTERNALS (Days 1–27)

#### Day 1: JVM Architecture
- **Priority:** MUST KNOW
- **Tasks:** Study the Classloader subsystem, Method Area, Heap, Stack, and PC Register. Draw the JVM architecture from memory.
- **Achievement:** Can explain exactly where objects vs primitives are stored in memory.

#### Day 2: Garbage Collection Algorithms
- **Priority:** MUST KNOW
- **Tasks:** Learn Mark & Sweep, G1GC, and ZGC. Understand the difference between the Young Gen, Old Gen, and Metaspace.
- **Achievement:** Can choose the correct garbage collector based on application latency requirements.

#### Day 3: JVM Tuning & Low Latency Java
- **Priority:** MUST KNOW
- **Tasks:** Learn JVM command-line flags (e.g. -Xms, -Xmx, -XX:MaxGCPauseMillis). Study how to tune garbage collectors (G1GC, ZGC) for low latency and high throughput. Differentiate between memory footprint, latency, and throughput.
- **Achievement:** Can tune the JVM for optimal execution and low latency in enterprise environments.

#### Day 4: Memory Leaks & Profiling
- **Priority:** MUST KNOW
- **Tasks:** Write a program that intentionally causes an OutOfMemoryError. Use VisualVM or JDK Mission Control to find the leak.
- **Achievement:** Can diagnose and fix memory leaks in production JVM applications.

#### Day 5: Build Systems: Maven
- **Priority:** MUST KNOW
- **Tasks:** Create a `pom.xml` from scratch. Understand the Maven lifecycle (compile, test, package, install). Resolve a dependency conflict using `<dependencyManagement>`.
- **Achievement:** Can manage enterprise dependencies without relying on IDE auto-magic.

#### Day 6: Build Systems: Gradle
- **Priority:** IMPORTANT
- **Tasks:** Recreate the Maven project using Gradle `build.gradle`. Understand why Gradle is faster (Daemon, incremental builds).
- **Achievement:** Can read and write Groovy/Kotlin DSL build scripts.

#### Day 7: Modern Java: Streams API
- **Priority:** MUST KNOW
- **Tasks:** Write complex data transformations using `filter()`, `map()`, `flatMap()`, and `collect()`. Understand lazy evaluation.
- **Achievement:** Can replace 50 lines of nested loops with a clean 5-line Stream pipeline.

#### Day 8: Modern Java: Optional & Records
- **Priority:** MUST KNOW
- **Tasks:** Eliminate NullPointerExceptions using `Optional`. Replace boilerplate DTO classes with Java 14 `record` types.
- **Achievement:** Can write highly defensive, immutable data carriers instantly.

#### Day 9: Modern Java: Pattern Matching
- **Priority:** IMPORTANT
- **Tasks:** Use Java 17+ pattern matching for `instanceof` and switch expressions. Simplify a complex parser using these features.
- **Achievement:** Can write concise control flow logic using the latest Java LTS features.

#### Day 10: Collections Framework Deep Dive
- **Priority:** MUST KNOW
- **Tasks:** Study the time complexity of ArrayList vs LinkedList, and HashMap vs TreeMap. Understand how HashMap resolves collisions using Red-Black Trees.
- **Achievement:** Can select the most performant data structure for any algorithmic requirement.

#### Day 11: Concurrency: Threads & Runnables
- **Priority:** MUST KNOW
- **Tasks:** Create and start multiple threads. Understand race conditions by intentionally breaking a shared counter.
- **Achievement:** Can explain exactly why thread synchronization is dangerous and necessary.

#### Day 12: Concurrency: Synchronization & Volatile
- **Priority:** MUST KNOW
- **Tasks:** Fix yesterday's broken counter using `synchronized` blocks. Study CPU cache coherence and the `volatile` keyword.
- **Achievement:** Can prevent data corruption in multi-threaded applications.

#### Day 13: Java Memory Model (JMM)
- **Priority:** MUST KNOW
- **Tasks:** Study the JMM specifications deeply. Learn the happens-before relationship, instruction reordering, thread visibility, memory barriers, and atomic operations.
- **Achievement:** Can write safe multi-threaded Java applications by leveraging happens-before and volatile guarantees.

#### Day 14: Concurrency: Thread Pools
- **Priority:** MUST KNOW
- **Tasks:** Stop manually creating threads. Use `ExecutorService` (FixedThreadPool, CachedThreadPool) to manage a pool of workers.
- **Achievement:** Can prevent an application from crashing due to thread exhaustion under heavy load.

#### Day 15: Concurrency: CompletableFuture
- **Priority:** MUST KNOW
- **Tasks:** Write asynchronous, non-blocking code. Chain three REST API calls together using `thenApply` and `thenCombine`.
- **Achievement:** Can execute multiple independent tasks in parallel and merge their results instantly.

#### Day 16: Concurrency: Concurrent Collections
- **Priority:** MUST KNOW
- **Tasks:** Replace `HashMap` with `ConcurrentHashMap`. Use `CopyOnWriteArrayList` for safe iteration. Study `CountDownLatch`.
- **Achievement:** Can build highly concurrent systems without writing complex synchronization locks.

#### Day 17: Concurrency: Virtual Threads (Project Loom)
- **Priority:** MUST KNOW
- **Tasks:** Study Java 21 Virtual Threads. Write a program that spawns 1,000,000 virtual threads and observe the RAM usage.
- **Achievement:** Can explain how Loom achieves Go-like concurrency without callback hell.

#### Day 18: JUnit 5 Fundamentals
- **Priority:** MUST KNOW
- **Tasks:** Write unit tests using `@Test`, `@BeforeEach`, and `@ParameterizedTest`. Assert exceptions using `assertThrows`.
- **Achievement:** Can guarantee business logic correctness using automated tests.

#### Day 19: Mockito Framework
- **Priority:** MUST KNOW
- **Tasks:** Use `@Mock` and `@InjectMocks` to isolate a service class from its database dependency. Write tests verifying specific method calls.
- **Achievement:** Can test tightly coupled code by simulating the behavior of external systems.

#### Day 20: Test-Driven Development (TDD)
- **Priority:** IMPORTANT
- **Tasks:** Write a test for a "String Calculator" BEFORE writing the implementation code. Follow the Red-Green-Refactor cycle.
- **Achievement:** Can architect software designs implicitly driven by testability requirements.

#### Day 21: Logging Frameworks (SLF4J / Logback)
- **Priority:** MUST KNOW
- **Tasks:** Configure `logback.xml` to roll logs daily and limit file size. Differentiate between TRACE, DEBUG, INFO, WARN, and ERROR levels.
- **Achievement:** Can build auditable applications that leave a breadcrumb trail for debugging.

#### Day 22: SOLID Principles
- **Priority:** MUST KNOW
- **Tasks:** Study Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.
- **Achievement:** Can identify architectural smells and refactor code to be highly maintainable.

#### Day 23: Design Patterns: Creational
- **Priority:** MUST KNOW
- **Tasks:** Implement Singleton (Thread-safe), Builder, and Factory patterns from scratch without Spring.
- **Achievement:** Can manage complex object instantiation safely.

#### Day 24: Design Patterns: Behavioral
- **Priority:** MUST KNOW
- **Tasks:** Implement the Strategy pattern to switch between payment methods, and the Observer pattern for event notification.
- **Achievement:** Can decouple algorithms and event listeners from core business logic.

#### Day 25: Spring Context Design Patterns
- **Priority:** MUST KNOW
- **Tasks:** Study how Spring uses patterns internally: Template Method (JdbcTemplate), Decorator (Security filters), Proxy (AOP), and Observer (ApplicationEvents).
- **Achievement:** Can recognize enterprise design patterns hiding inside Spring Framework abstractions.

#### Day 26: Phase 1 Review: Core Java Challenge
- **Priority:** MUST KNOW
- **Tasks:** Build a multi-threaded web scraper using `CompletableFuture` and `ConcurrentHashMap`, unit tested with Mockito.
- **Achievement:** Can write production-ready, highly concurrent Java code without any frameworks.

#### Day 27: Interview Prep: Core Java
- **Priority:** MUST KNOW
- **Tasks:** Review JVM memory models, equals() vs hashCode() contract, and differences between volatile, synchronized, and atomic variables.
- **Achievement:** Ready to pass the language-specific portion of any Java backend interview.

### SPRING FRAMEWORK & REST APIs (Days 28–65)

#### Day 28: Inversion of Control (IoC)
- **Priority:** MUST KNOW
- **Tasks:** Understand the concept of IoC. Write a pure Java application where an orchestrator creates objects and passes them to dependents.
- **Achievement:** Can explain the foundational philosophy that makes Spring necessary.

#### Day 29: Dependency Injection (DI)
- **Priority:** MUST KNOW
- **Tasks:** Add the Spring Context dependency. Use `@Component` and `@Autowired` (Constructor injection) to let Spring wire your objects together.
- **Achievement:** Can decouple classes completely by letting the framework manage their dependencies.

#### Day 30: Spring Bean Lifecycle
- **Priority:** MUST KNOW
- **Tasks:** Study Bean Scopes (Singleton vs Prototype). Implement `@PostConstruct` and `@PreDestroy`.
- **Achievement:** Can manage resources (like opening/closing network connections) tied to bean lifecycles.

#### Day 31: Aspect-Oriented Programming (AOP)
- **Priority:** MUST KNOW
- **Tasks:** Write a custom `@LogExecutionTime` annotation and use an `@Around` aspect to measure method performance without modifying the method code.
- **Achievement:** Can implement cross-cutting concerns (logging, security) cleanly across the entire codebase.

#### Day 32: Introduction to Spring Boot
- **Priority:** MUST KNOW
- **Tasks:** Initialize a project via Spring Initializr. Understand Auto-Configuration (`@SpringBootApplication`).
- **Achievement:** Can explain how Spring Boot eliminates thousands of lines of XML configuration.

#### Day 33: Native Compilation (GraalVM)
- **Priority:** MUST KNOW
- **Tasks:** Use Spring Boot 3 AOT (Ahead-of-Time) compilation. Build a native executable using GraalVM. Compare startup time to a standard JVM JAR.
- **Achievement:** Can deploy Java applications that start in 50 milliseconds with minimal RAM footprints.

#### Day 34: Configuration Management
- **Priority:** MUST KNOW
- **Tasks:** Use `application.yml`. Bind properties to a POJO using `@ConfigurationProperties`. Use `@Profile` for dev vs prod environments.
- **Achievement:** Can manage application settings dynamically without recompiling code.

#### Day 35: Spring Boot Actuator
- **Priority:** MUST KNOW
- **Tasks:** Enable Actuator. Explore `/actuator/health` and `/actuator/metrics`. Add custom health checks for a third-party API.
- **Achievement:** Can expose application internals to monitoring tools for production readiness.

#### Day 36: Prometheus & Grafana Integration
- **Priority:** MUST KNOW
- **Tasks:** Expose the `/actuator/prometheus` endpoint. Run a local Prometheus instance via Docker to scrape it, and build a Grafana dashboard for memory usage.
- **Achievement:** Can complete the full observability loop from code to visual dashboard.

#### Day 37: Virtual Threads + Spring Boot
- **Priority:** MUST KNOW
- **Tasks:** Enable Java 21 Virtual Threads in `application.yml`. Load test a blocking REST endpoint and compare the throughput against platform threads.
- **Achievement:** Can drastically increase the throughput of heavily blocking I/O applications using a single property.

#### Day 38: Spring Web MVC Fundamentals
- **Priority:** MUST KNOW
- **Tasks:** Create a `@RestController`. Return a simple String. Understand the DispatcherServlet under the hood.
- **Achievement:** Can bootstrap an HTTP server and expose endpoints to the internet.

#### Day 39: RESTful API Design: Path & Query Params
- **Priority:** MUST KNOW
- **Tasks:** Use `@PathVariable` for identifying resources (`/users/1`) and `@RequestParam` for filtering/sorting (`/users?role=admin`).
- **Achievement:** Can design REST APIs that follow industry-standard URL structures.

#### Day 40: RESTful API Design: HTTP Methods
- **Priority:** MUST KNOW
- **Tasks:** Implement POST (Create), GET (Read), PUT (Update full), PATCH (Update partial), and DELETE. Understand idempotency in methods.
- **Achievement:** Can map CRUD operations perfectly to the correct HTTP verbs.

#### Day 41: API Versioning (URI & Header)
- **Priority:** MUST KNOW
- **Tasks:** Implement API versioning using URI path (e.g. /v1/users) and HTTP Headers (e.g. Accept-Version: v1). Understand compatibility trade-offs.
- **Achievement:** Can design and implement backward-compatible APIs supporting multiple client versions.

#### Day 42: Swagger/OpenAPI Integration
- **Priority:** MUST KNOW
- **Tasks:** Configure springdoc-openapi in Spring Boot. Annotate controllers with @Operation and @ApiResponses. Generate OpenAPI JSON and test endpoints via Swagger UI.
- **Achievement:** Can automatically document and test REST endpoints using industry-standard OpenAPI schemas.

#### Day 43: API Rate Limiting & Throttling
- **Priority:** MUST KNOW
- **Tasks:** Implement API rate limiting using the Bucket4j library or a custom Servlet Filter. Learn to read and write rate-limit headers (X-RateLimit-Limit, X-RateLimit-Remaining).
- **Achievement:** Can protect Spring Boot APIs from resource abuse and denial-of-service attempts.

#### Day 44: ResponseEntity & Status Codes
- **Priority:** MUST KNOW
- **Tasks:** Stop returning raw objects. Wrap responses in `ResponseEntity` to explicitly control HTTP status codes (200, 201, 404, 400).
- **Achievement:** Can return predictable, standard HTTP responses that frontend clients expect.

#### Day 45: Global Exception Handling
- **Priority:** MUST KNOW
- **Tasks:** Create a `@RestControllerAdvice` class. Catch specific exceptions (e.g., `UserNotFoundException`) and return a formatted 404 JSON response.
- **Achievement:** Can prevent ugly stack traces from leaking to clients and unify API error formats.

#### Day 46: RFC 7807 Problem Details
- **Priority:** IMPORTANT
- **Tasks:** Upgrade your exception handler to return `ProblemDetail` objects (Spring Boot 3 feature) for standardized error reporting.
- **Achievement:** Can adhere to strict, modern API design specifications (RFC 7807).

#### Day 47: DTO Pattern (Data Transfer Objects)
- **Priority:** MUST KNOW
- **Tasks:** Stop returning JPA entities from controllers! Create separate RequestDTOs and ResponseDTOs to decouple the database from the API contract.
- **Achievement:** Can prevent data leakage (like exposing hashed passwords) and prevent infinite recursion.

#### Day 48: Bean Validation
- **Priority:** MUST KNOW
- **Tasks:** Add `spring-boot-starter-validation`. Use `@NotNull`, `@Size`, and `@Email` on DTOs. Validate them in the controller using `@Valid`.
- **Achievement:** Can reject bad data instantly before it ever touches business logic.

#### Day 49: MapStruct for Object Mapping
- **Priority:** MUST KNOW
- **Tasks:** Stop writing manual getter/setter mapping code. Configure MapStruct to auto-generate mapping code between Entities and DTOs.
- **Achievement:** Can write highly performant, type-safe data conversion layers with zero boilerplate.

#### Day 50: Swagger / OpenAPI Documentation
- **Priority:** MUST KNOW
- **Tasks:** Integrate `springdoc-openapi`. Annotate controllers to generate a beautiful, interactive Swagger UI documentation page.
- **Achievement:** Can automatically generate API documentation that stays perfectly in sync with the code.

#### Day 51: File Uploads & Downloads
- **Priority:** IMPORTANT
- **Tasks:** Implement an endpoint that accepts `MultipartFile`. Save it to the local disk and write an endpoint to download it via `Resource`.
- **Achievement:** Can handle binary data streams and manage user file uploads securely.

#### Day 52: Pagination & Sorting (API Layer)
- **Priority:** MUST KNOW
- **Tasks:** Accept `page`, `size`, and `sort` parameters in your API. Return a structured `Page` response containing metadata (total elements, total pages).
- **Achievement:** Can build APIs capable of serving millions of records safely to a UI data table.

#### Day 53: Content Negotiation
- **Priority:** IMPORTANT
- **Tasks:** Configure your API to return XML instead of JSON if the client sends an `Accept: application/xml` header.
- **Achievement:** Can build highly flexible APIs that support legacy B2B clients.

#### Day 54: CORS Configuration
- **Priority:** MUST KNOW
- **Tasks:** Implement a `WebMvcConfigurer` to configure Cross-Origin Resource Sharing. Understand why browsers block cross-domain AJAX requests.
- **Achievement:** Can securely allow specific single-page applications (React/Angular) to consume your API.

#### Day 55: Testing Controllers (WebMvcTest)
- **Priority:** MUST KNOW
- **Tasks:** Write `@WebMvcTest` slices to mock the service layer and test HTTP endpoints using `MockMvc` without starting the full server.
- **Achievement:** Can mathematically prove your API routing, validation, and serialization works perfectly.

#### Day 56: RestTemplate / WebClient
- **Priority:** MUST KNOW
- **Tasks:** Write a service that calls an external API (like GitHub API) using `RestTemplate` or the reactive `WebClient`.
- **Achievement:** Can integrate your microservice with external third-party systems.

#### Day 57: HTTP Declarative Clients
- **Priority:** IMPORTANT
- **Tasks:** Refactor yesterday's code using Spring Boot 3 `@HttpExchange` interfaces to call the external API without writing implementation code.
- **Achievement:** Can write modern, boilerplate-free HTTP clients similar to Feign or Retrofit.

#### Day 58: Integration Testing (SpringBootTest)
- **Priority:** MUST KNOW
- **Tasks:** Write an `@SpringBootTest` that boots the entire context. Call the controller, hit a real (in-memory) database, and verify the response.
- **Achievement:** Can perform end-to-end testing of the entire application stack.

#### Day 59: Testcontainers
- **Priority:** MUST KNOW
- **Tasks:** Throw away H2 in-memory databases! Use Testcontainers to spin up a real PostgreSQL Docker container during the test phase.
- **Achievement:** Can guarantee that tests perfectly simulate the production database environment.

#### Day 60: WireMock
- **Priority:** MUST KNOW
- **Tasks:** Use WireMock in your integration tests to stub the responses of external third-party APIs.
- **Achievement:** Can test code that relies on external services without making actual network calls.

#### Day 61: Dockerizing Spring Boot
- **Priority:** MUST KNOW
- **Tasks:** Write a multi-stage Dockerfile. Package your Spring Boot JAR and run it in an Alpine JRE container. Optimize layers for caching.
- **Achievement:** Can package the entire application into a portable, production-ready artifact.

#### Day 62: Docker Compose for Local Dev
- **Priority:** MUST KNOW
- **Tasks:** Write a `docker-compose.yml` that boots your Spring Boot app alongside a PostgreSQL database and a Redis cache.
- **Achievement:** Can onboard new developers instantly with a single terminal command.

#### Day 63: Caching with Spring Cache
- **Priority:** MUST KNOW
- **Tasks:** Enable `@EnableCaching`. Annotate expensive methods with `@Cacheable`. Configure a Redis cache provider.
- **Achievement:** Can drastically reduce database load by caching heavy computational or query results.

#### Day 64: Scheduling Tasks
- **Priority:** IMPORTANT
- **Tasks:** Use `@Scheduled` to write a cron job that cleans up expired database records every night at midnight.
- **Achievement:** Can automate recurring background maintenance tasks directly within Spring.

#### Day 65: Phase 2 Capstone
- **Priority:** MUST KNOW
- **Tasks:** Build a fully documented, tested, and dockerized REST API for a "Task Management System" using DTOs, global exceptions, and validation.
- **Achievement:** Can build a production-grade backend service completely from scratch.

### DATA PERSISTENCE & SECURITY (Days 66–102)

#### Day 66: Raw JDBC & Connection Pools
- **Priority:** MUST KNOW
- **Tasks:** Connect to Postgres using pure JDBC. Understand `PreparedStatement`. Learn why HikariCP connection pooling is essential.
- **Achievement:** Can explain how Java communicates with databases at the lowest driver level.

#### Day 67: Object-Relational Mapping (ORM)
- **Priority:** MUST KNOW
- **Tasks:** Study the impedance mismatch between objects and relational tables. Understand what Hibernate actually does under the hood.
- **Achievement:** Can explain why ORMs are used and when they should be avoided (e.g., massive batch inserts).

#### Day 68: JPA Entities & Primary Keys
- **Priority:** MUST KNOW
- **Tasks:** Create `@Entity` classes. Map columns. Use `@Id` and `@GeneratedValue(strategy = GenerationType.IDENTITY)` or `UUID`.
- **Achievement:** Can map Java classes directly to database tables securely.

#### Day 69: Spring Data JPA Basics
- **Priority:** MUST KNOW
- **Tasks:** Create an interface extending `JpaRepository`. Use derived query methods (e.g., `findByLastNameAndAgeGreaterThan`).
- **Achievement:** Can perform basic CRUD operations without writing a single line of SQL.

#### Day 70: JPA Relationships: One-to-Many
- **Priority:** MUST KNOW
- **Tasks:** Map an Author to many Books. Understand `@OneToMany`, `@ManyToOne`, and the importance of the `mappedBy` attribute.
- **Achievement:** Can implement bidirectional relationships without causing infinite loops.

#### Day 71: JPA Relationships: Many-to-Many
- **Priority:** MUST KNOW
- **Tasks:** Map Students to Courses. Understand how Hibernate automatically creates the hidden join table using `@JoinTable`.
- **Achievement:** Can design complex, interconnected domain models in Java.

#### Day 72: Cascade Types & Orphan Removal
- **Priority:** MUST KNOW
- **Tasks:** Study `CascadeType.ALL` vs `PERSIST`. Understand when deleting an Author should automatically delete their Books.
- **Achievement:** Can safely manage the lifecycle of child entities without leaving orphaned database rows.

#### Day 73: Transactions (@Transactional)
- **Priority:** MUST KNOW
- **Tasks:** Annotate a service method with `@Transactional`. Intentionally throw a RuntimeException and observe the database rollback.
- **Achievement:** Can guarantee ACID properties across complex, multi-step business logic operations.

#### Day 74: Fetch Strategies (Lazy vs Eager)
- **Priority:** MUST KNOW
- **Tasks:** Study `FetchType.LAZY`. Understand why Eager fetching is considered an anti-pattern and leads to performance nightmares.
- **Achievement:** Can design entities that do not accidentally load the entire database into memory.

#### Day 75: The N+1 Query Problem
- **Priority:** MUST KNOW
- **Tasks:** Observe the N+1 problem in the logs when fetching a list of Authors and their Books. Fix it using `@EntityGraph` or `JOIN FETCH`.
- **Achievement:** Can diagnose and fix the most common performance killer in Spring Boot applications.

#### Day 76: JPQL & Native Queries
- **Priority:** MUST KNOW
- **Tasks:** Write custom `@Query` annotations using JPQL for complex joins. Fall back to `nativeQuery = true` for database-specific features.
- **Achievement:** Can bypass ORM limitations to execute highly optimized custom SQL queries.

#### Day 77: Pagination in Spring Data
- **Priority:** MUST KNOW
- **Tasks:** Pass a `PageRequest.of(0, 10)` to a repository method. Understand how Hibernate generates the specific SQL `LIMIT`/`OFFSET` clauses.
- **Achievement:** Can fetch data in small, memory-safe chunks directly from the database.

#### Day 78: Projections
- **Priority:** IMPORTANT
- **Tasks:** Create an interface projection to fetch ONLY the `firstName` and `email` columns instead of the entire User entity.
- **Achievement:** Can optimize read performance by preventing `SELECT *` on massive tables.

#### Day 79: Database Migrations (Flyway)
- **Priority:** MUST KNOW
- **Tasks:** Integrate Flyway. Write `V1__init.sql` and `V2__add_column.sql`. Understand why `spring.jpa.hibernate.ddl-auto=update` is illegal in production.
- **Achievement:** Can safely version-control and deploy database schema changes across environments.

#### Day 80: Optimistic Locking
- **Priority:** MUST KNOW
- **Tasks:** Add an `@Version` column. Simulate two users updating the same record simultaneously and handle the `OptimisticLockException`.
- **Achievement:** Can prevent lost updates in highly concurrent business applications (like inventory management).

#### Day 81: Data Auditing
- **Priority:** IMPORTANT
- **Tasks:** Enable `@EnableJpaAuditing`. Use `@CreatedDate` and `@LastModifiedDate` to automatically track when rows are inserted or updated.
- **Achievement:** Can implement automatic auditing required for enterprise compliance.

#### Day 82: Soft Deletes
- **Priority:** IMPORTANT
- **Tasks:** Implement Soft Deletes using `@SQLDelete` and `@Where`. When a user deletes an item, update a `deleted` flag instead of removing the row.
- **Achievement:** Can prevent catastrophic data loss while maintaining a clean application view.

#### Day 83: Testing the Data Layer (@DataJpaTest)
- **Priority:** MUST KNOW
- **Tasks:** Write tests focused purely on repository queries using `@DataJpaTest`. Validate custom JPQL logic without booting web servers.
- **Achievement:** Can mathematically prove that custom database queries return the exact expected data.

#### Day 84: Spring Security Architecture
- **Priority:** MUST KNOW
- **Tasks:** Study the `SecurityFilterChain`, `AuthenticationManager`, and `Filter` order. Do not write code yet, just understand the request flow.
- **Achievement:** Can explain how Spring intercepts HTTP requests to enforce security rules.

#### Day 85: Basic Authentication & Users
- **Priority:** MUST KNOW
- **Tasks:** Implement `UserDetailsService`. Load users from the database. Encode passwords using `BCryptPasswordEncoder`.
- **Achievement:** Can securely store passwords and authenticate users against a relational database.

#### Day 86: Role-Based Access Control (RBAC)
- **Priority:** MUST KNOW
- **Tasks:** Configure URL-based security (`.requestMatchers("/admin/**").hasRole("ADMIN")`). Add method-level security using `@PreAuthorize`.
- **Achievement:** Can build complex authorization hierarchies to restrict feature access.

#### Day 87: Attribute-Based Access Control (ABAC)
- **Priority:** MUST KNOW
- **Tasks:** Implement ABAC using Spring Security and custom evaluation context. Define access control rules based on user attributes, resource type, and environmental variables.
- **Achievement:** Can secure microservices using fine-grained, attribute-based access control rules.

#### Day 88: Stateless Security & JWT
- **Priority:** MUST KNOW
- **Tasks:** Disable session management (Cookies/JSESSIONID). Generate a JWT containing user roles upon successful login.
- **Achievement:** Can architect stateless security required for horizontally scaling microservices.

#### Day 89: JWT Filter Implementation
- **Priority:** MUST KNOW
- **Tasks:** Write a custom `OncePerRequestFilter` that intercepts all incoming requests, extracts the JWT from the Authorization header, and validates the signature.
- **Achievement:** Can secure an entire API ecosystem using cryptographically signed tokens.

#### Day 90: Refresh Tokens
- **Priority:** MUST KNOW
- **Tasks:** Implement a short-lived Access Token (15 mins) and a long-lived Refresh Token stored securely in an HTTP-only cookie.
- **Achievement:** Can balance high security with excellent user experience (avoiding constant logins).

#### Day 91: CORS & CSRF Defenses
- **Priority:** MUST KNOW
- **Tasks:** Understand Cross-Site Request Forgery. Why is CSRF mostly disabled in stateless API architectures? Properly configure CORS in the security chain.
- **Achievement:** Can secure APIs against browser-based exploitation techniques.

#### Day 92: OWASP Top 10 for Java/Spring
- **Priority:** MUST KNOW
- **Tasks:** Study the OWASP Top 10 vulnerabilities in the context of Java and Spring Boot. Learn to secure endpoints against Injection, Broken Authentication, Sensitive Data Exposure, and XML External Entities (XXE).
- **Achievement:** Can audit and harden Spring Boot microservices against the most common security exploits.

#### Day 93: OAuth2 Fundamentals
- **Priority:** MUST KNOW
- **Tasks:** Study the OAuth2 standard. Understand Authorization Servers, Resource Servers, and the Authorization Code flow.
- **Achievement:** Can explain how a user can grant an application access to their data without sharing passwords.

#### Day 94: Spring Security OAuth2 Client
- **Priority:** MUST KNOW
- **Tasks:** Implement "Login with Google/GitHub" using `spring-boot-starter-oauth2-client`. Extract user details from the provider.
- **Achievement:** Can seamlessly integrate third-party social logins into your application.

#### Day 95: OAuth2 Resource Server
- **Priority:** MUST KNOW
- **Tasks:** Configure your API to act as a Resource Server that accepts and validates opaque tokens or JWTs issued by an external provider (like Keycloak).
- **Achievement:** Can decouple authentication infrastructure from core business APIs.

#### Day 96: Keycloak Integration
- **Priority:** IMPORTANT
- **Tasks:** Spin up Keycloak in Docker. Configure a Realm and a Client. Protect your Spring Boot application by delegating authentication to Keycloak.
- **Achievement:** Can leverage enterprise Identity and Access Management (IAM) systems.

#### Day 97: Method Security Extravaganza
- **Priority:** IMPORTANT
- **Tasks:** Use `@PostFilter` to filter a returned list so the user only sees data belonging to their tenant id.
- **Achievement:** Can implement highly granular, row-level data security constraints.

#### Day 98: Phase 3 Capstone - Part 1
- **Priority:** MUST KNOW
- **Tasks:** Design the database schema for a "Blogging Platform". Write Flyway scripts, Entities, and complex JPQL queries for search.
- **Achievement:** Can build a robust, optimized persistence layer from scratch.

#### Day 99: Phase 3 Capstone - Part 2
- **Priority:** MUST KNOW
- **Tasks:** Wrap the persistence layer in a REST API and secure it with custom JWT authentication and Role-based method security.
- **Achievement:** Can integrate database design, web routing, and strict security into a unified backend.

#### Day 100: Interview Prep: Persistence
- **Priority:** MUST KNOW
- **Tasks:** Review N+1 problems, transaction propagation (`REQUIRES_NEW`), and Isolation Levels.
- **Achievement:** Ready to answer advanced database-related Java interview questions.

#### Day 101: Interview Prep: Security
- **Priority:** MUST KNOW
- **Tasks:** Review JWT vulnerabilities, the OAuth2 flow, and the internal workings of the SecurityFilterChain.
- **Achievement:** Ready to confidently discuss modern API security architectures.

#### Day 102: Architecture Review
- **Priority:** MUST KNOW
- **Tasks:** Draw a diagram of your Capstone project indicating where Validation, Security Filters, Transactions, and Caching occur.
- **Achievement:** Can visualize and explain the layered architecture of an enterprise Spring Boot application.

### MICROSERVICES, KAFKA & RESILIENCY (Days 103–140)

#### Day 103: gRPC Services in Spring Boot
- **Priority:** MUST KNOW
- **Tasks:** Configure grpc-spring-boot-starter. Define service schemas in .proto files, compile them to Java code, and implement a gRPC server and client stub.
- **Achievement:** Can build high-performance, strongly typed RPC communication protocols between internal microservices.

#### Day 104: Distributed Tracing with OpenTelemetry
- **Priority:** MUST KNOW
- **Tasks:** Configure OpenTelemetry Java Agent or Micrometer Tracing. Propagate Span and Trace IDs from client request to gRPC call, exporting trace telemetry to Jaeger.
- **Achievement:** Can debug performance leaks and visualize request journeys across a microservice fleet.

#### Day 105: Reactive Programming with Spring WebFlux
- **Priority:** IMPORTANT
- **Tasks:** Build reactive endpoints using Spring WebFlux, Mono, and Flux. Connect to a database using R2DBC. Differentiate non-blocking I/O (Netty) from thread-per-request (Tomcat).
- **Achievement:** Can architect ultra-high-concurrency, non-blocking APIs that handle massive event streams.

#### Day 106: Centralized Secret Management (Spring Cloud Vault)
- **Priority:** MUST KNOW
- **Tasks:** Integrate Spring Cloud Vault with a local HashiCorp Vault instance. Store database credentials dynamically and configure automatic runtime credential rotation.
- **Achievement:** Can protect backend applications from hardcoded credentials by injecting configuration secrets dynamically at startup.

#### Day 107: Microservices vs Monoliths
- **Priority:** MUST KNOW
- **Tasks:** Study the Fallacies of Distributed Computing. Define bounded contexts using Domain-Driven Design (DDD).
- **Achievement:** Can justify exactly when a project should (and should not) use microservices.

#### Day 108: Service Discovery (Eureka)
- **Priority:** MUST KNOW
- **Tasks:** Create a Eureka Server. Register an Order Service and an Inventory Service so they can find each other without hardcoding IPs.
- **Achievement:** Can build dynamically scaling microservice clusters.

#### Day 109: API Gateway (Spring Cloud Gateway)
- **Priority:** MUST KNOW
- **Tasks:** Create a Gateway service. Route requests to Order (`/api/orders/**`) and Inventory based on URL paths. Implement a Global Pre-Filter.
- **Achievement:** Can build a unified entry point that routes traffic across a massive microservice ecosystem.

#### Day 110: Centralized Security at Gateway
- **Priority:** MUST KNOW
- **Tasks:** Move JWT validation to the API Gateway. Let the downstream microservices trust the Gateway via internal headers.
- **Achievement:** Can drastically simplify security across dozens of microservices.

#### Day 111: Synchronous Communication (Feign)
- **Priority:** MUST KNOW
- **Tasks:** Use Spring Cloud OpenFeign. Create an interface in the Order Service that declaratively calls the Inventory Service via Eureka.
- **Achievement:** Can implement service-to-service HTTP communication cleanly and elegantly.

#### Day 112: Distributed Tracing (Micrometer)
- **Priority:** MUST KNOW
- **Tasks:** Add Micrometer Tracing. Send traces to a Zipkin or Jaeger Docker container. View a request flowing through the Gateway -> Order -> Inventory.
- **Achievement:** Can debug latency issues hidden deep within a distributed microservice call chain.

#### Day 113: Resilience4j: Circuit Breaker
- **Priority:** MUST KNOW
- **Tasks:** Wrap the Feign client with a Circuit Breaker. Provide a fallback method if the Inventory Service is down (e.g., return "Try again later").
- **Achievement:** Can prevent a single failing microservice from taking down the entire application.

#### Day 114: Resilience4j: Retries & Rate Limiting
- **Priority:** MUST KNOW
- **Tasks:** Add exponential backoff retries for transient network failures. Add a Rate Limiter at the API Gateway to prevent DDoS attacks.
- **Achievement:** Can build highly robust APIs that gracefully survive traffic spikes and network blips.

#### Day 115: Centralized Configuration
- **Priority:** IMPORTANT
- **Tasks:** Set up Spring Cloud Config Server backed by a Git repository. Update an application property dynamically without restarting the service.
- **Achievement:** Can manage configuration for 50+ microservices from a single secure location.

#### Day 116: Introduction to Apache Kafka
- **Priority:** MUST KNOW
- **Tasks:** Spin up Kafka and Zookeeper/Kraft in Docker. Understand Topics, Partitions, Producers, and Consumer Groups.
- **Achievement:** Can explain the architecture of an append-only distributed event log.

#### Day 117: Spring Kafka: Producers
- **Priority:** MUST KNOW
- **Tasks:** Configure a `KafkaTemplate`. Publish a JSON `OrderCreatedEvent` to a Kafka topic when an order is placed.
- **Achievement:** Can emit asynchronous events to decouple business processes.

#### Day 118: Spring Kafka: Consumers
- **Priority:** MUST KNOW
- **Tasks:** Use `@KafkaListener` in the Inventory Service to listen for `OrderCreatedEvent`. Update inventory asynchronously.
- **Achievement:** Can process distributed events in real-time, completely decoupling microservices.

#### Day 119: Kafka: Consumer Groups & Scaling
- **Priority:** MUST KNOW
- **Tasks:** Spin up 3 instances of the Inventory Service. Observe how Kafka distributes the partitions across the Consumer Group for parallel processing.
- **Achievement:** Can horizontally scale background event processing infinitely.

#### Day 120: Kafka: Error Handling & DLQs
- **Priority:** MUST KNOW
- **Tasks:** Simulate a database failure during event processing. Configure a Dead Letter Queue (DLQ) to catch and store the failed message for manual review.
- **Achievement:** Can build resilient event pipelines that never lose data during crashes.

#### Day 121: The Transactional Outbox Pattern
- **Priority:** MUST KNOW
- **Tasks:** Understand the dual-write problem (DB save + Kafka publish). Implement the Outbox pattern using a separate table and a background publisher.
- **Achievement:** Can guarantee 100% data consistency between microservice databases and Kafka topics.

#### Day 122: Distributed Transactions: Saga (Choreography)
- **Priority:** MUST KNOW
- **Tasks:** Implement a Saga. Order Service emits event -> Inventory Service consumes, updates DB, emits "InventoryReserved" event -> Order Service finalizes.
- **Achievement:** Can maintain data consistency across microservices without using distributed database locks.

#### Day 123: Distributed Transactions: Saga (Orchestration)
- **Priority:** IMPORTANT
- **Tasks:** Understand the Orchestration approach using a centralized state machine to coordinate the Saga steps and compensations.
- **Achievement:** Can evaluate and select the correct Saga architecture based on workflow complexity.

#### Day 124: Compensating Transactions
- **Priority:** MUST KNOW
- **Tasks:** Implement the failure path of a Saga. If Payment fails, emit an event that triggers the Inventory service to add the items back.
- **Achievement:** Can cleanly rollback distributed transactions across multiple disparate databases.

#### Day 125: Event Sourcing Fundamentals
- **Priority:** IMPORTANT
- **Tasks:** Study the theory of storing every state change as an event rather than overwriting rows. Look at frameworks like Axon.
- **Achievement:** Can architect audit-proof financial systems using pure event sourcing.

#### Day 126: CQRS Implementation
- **Priority:** IMPORTANT
- **Tasks:** Separate the Write API (hitting a relational DB) from the Read API (hitting an Elasticsearch cluster populated via Kafka events).
- **Achievement:** Can scale read-heavy applications infinitely without impacting write performance.

#### Day 127: GraphQL Integration
- **Priority:** IMPORTANT
- **Tasks:** Add `spring-boot-starter-graphql`. Create a schema file and implement `@QueryMapping` and `@SchemaMapping` to resolve complex object graphs.
- **Achievement:** Can build modern, flexible APIs for frontend clients suffering from over-fetching.

#### Day 128: WebSocket Communication
- **Priority:** IMPORTANT
- **Tasks:** Implement STOMP over WebSockets in Spring. Build a real-time notification endpoint that pushes alerts to connected clients.
- **Achievement:** Can push data from the server to the browser instantly without polling.

#### Day 129: Redis for Distributed Locking
- **Priority:** MUST KNOW
- **Tasks:** Use Redisson to acquire a distributed lock before executing a scheduled task, ensuring it only runs on one microservice instance.
- **Achievement:** Can prevent data corruption caused by background jobs running concurrently across a cluster.

#### Day 130: API Versioning Strategies
- **Priority:** MUST KNOW
- **Tasks:** Implement URL versioning (`/v1/api`), Header versioning, and Content Negotiation versioning.
- **Achievement:** Can evolve APIs safely without breaking existing mobile app clients in production.

#### Day 131: Phase 4 Capstone - Architecture (Part 1)
- **Priority:** MUST KNOW
- **Tasks:** Design an E-Commerce microservice architecture: Gateway, Auth Service, Order Service, Inventory Service, and Payment Service. Spin up Kafka and DBs in Docker.
- **Achievement:** Can bootstrap a massive, enterprise-grade distributed system infrastructure.

#### Day 132: Phase 4 Capstone - Security & Routing (Part 2)
- **Priority:** MUST KNOW
- **Tasks:** Implement the Gateway, configure routes, and centralize JWT validation. Ensure downstream services are secure.
- **Achievement:** Can secure an entire ecosystem of microservices perfectly.

#### Day 133: Phase 4 Capstone - Business Logic (Part 3)
- **Priority:** MUST KNOW
- **Tasks:** Implement the core CRUD and persistence logic for Orders and Inventory using Spring Data JPA and MapStruct.
- **Achievement:** Can rapidly develop robust domain-driven microservices.

#### Day 134: Phase 4 Capstone - Kafka Sagas (Part 4)
- **Priority:** MUST KNOW
- **Tasks:** Wire the services together using Kafka. Implement a fully functioning Saga with compensating transactions for failed payments.
- **Achievement:** Can build bulletproof, eventually-consistent distributed workflows.

#### Day 135: Phase 4 Capstone - Resiliency (Part 5)
- **Priority:** MUST KNOW
- **Tasks:** Add Circuit Breakers to external calls, export Micrometer traces to Zipkin, and add global exception handling.
- **Achievement:** Can harden a system against network failures and provide deep observability.

#### Day 136: Interview Prep: Spring Framework
- **Priority:** MUST KNOW
- **Tasks:** Review IoC, Bean Lifecycles, AOP, and `@Transactional` propagation behaviors.
- **Achievement:** Ready to dominate the foundational Spring boot technical interview.

#### Day 137: Interview Prep: Microservices
- **Priority:** MUST KNOW
- **Tasks:** Review Circuit Breakers, API Gateways, Service Discovery, and the Outbox Pattern.
- **Achievement:** Ready to ace system design interviews focusing on microservice architecture.

#### Day 138: Interview Prep: Kafka & Async
- **Priority:** MUST KNOW
- **Tasks:** Review Kafka partitions, consumer groups, offset management, and at-least-once delivery semantics.
- **Achievement:** Ready to discuss high-throughput data pipelines with senior engineers.

#### Day 139: Resume & GitHub Polish
- **Priority:** MUST KNOW
- **Tasks:** Push your capstone to GitHub. Write an exceptional README detailing the architecture, Saga flow, and how to run it via Docker Compose.
- **Achievement:** Can present a FAANG-tier portfolio project to hiring managers.

#### Day 140: Graduation Day
- **Priority:** MUST KNOW
- **Tasks:** Reflect on your journey from basic Java syntax to architecting distributed, event-driven microservices.
- **Achievement:** You are now a highly capable, job-ready Senior Backend Engineer.

## Gen AI & LLM Engineering (141 Days)

### PYTHON, MATH & CLASSICAL ML (Days 1–25)

#### Day 1: Python for Java Devs
- **Priority:** MUST KNOW
- **Tasks:** Fast-track Python. Focus on dictionaries, list comprehensions, decorators, and basic typing (TypeHints).
- **Achievement:** Can translate basic Java algorithms into Pythonic syntax rapidly.

#### Day 2: Data Manipulation: NumPy
- **Priority:** MUST KNOW
- **Tasks:** Master NumPy arrays, broadcasting, vectorization, and multi-dimensional indexing.
- **Achievement:** Can manipulate massive matrices in memory without slow `for` loops.

#### Day 3: Data Manipulation: Pandas 1
- **Priority:** MUST KNOW
- **Tasks:** Learn DataFrames, Series, `iloc`, `loc`, reading CSVs, and handling missing data (`dropna`, `fillna`).
- **Achievement:** Can clean and sanitize raw, messy datasets for machine learning input.

#### Day 4: Data Manipulation: Pandas 2
- **Priority:** MUST KNOW
- **Tasks:** Master `groupby`, merging, pivoting, and time-series resampling.
- **Achievement:** Can perform complex SQL-like aggregations directly in Python memory.

#### Day 5: Data Visualization
- **Priority:** IMPORTANT
- **Tasks:** Use Matplotlib and Seaborn. Create scatter plots, histograms, and correlation heatmaps.
- **Achievement:** Can visually identify outliers and feature correlations in a dataset.

#### Day 6: Linear Algebra: Vectors & Matrices
- **Priority:** MUST KNOW
- **Tasks:** Study vector spaces, dot products, matrix multiplication, and identity matrices.
- **Achievement:** Can mathematically explain how data points are represented and transformed in AI models.

#### Day 7: Linear Algebra: Eigenvalues & SVD
- **Priority:** MUST KNOW
- **Tasks:** Deep dive into Eigenvectors, Eigenvalues, and Singular Value Decomposition (SVD).
- **Achievement:** Can conceptually grasp how dimensionality reduction techniques (like PCA) work under the hood.

#### Day 8: Linear Algebra: Cosine Similarity
- **Priority:** MUST KNOW
- **Tasks:** Implement Cosine Similarity in pure NumPy. Understand the geometric difference between Euclidean distance and Cosine distance.
- **Achievement:** Can mathematically compute the semantic similarity between two vectors (the foundation of vector search).

#### Day 9: Calculus for Deep Learning
- **Priority:** MUST KNOW
- **Tasks:** Study derivatives, partial derivatives, and the Chain Rule.
- **Achievement:** Can explain the exact mathematical mechanism (Backpropagation) that allows neural networks to "learn".

#### Day 10: Probability & Statistics
- **Priority:** MUST KNOW
- **Tasks:** Study Normal Distributions, Variance, Standard Deviation, and Bayes' Theorem.
- **Achievement:** Can evaluate if a dataset is statistically significant enough to train a model.

#### Day 11: Intro to Scikit-Learn
- **Priority:** MUST KNOW
- **Tasks:** Understand the `fit`, `predict`, and `transform` API design of sklearn.
- **Achievement:** Can utilize the industry-standard classical machine learning library.

#### Day 12: Linear & Logistic Regression
- **Priority:** MUST KNOW
- **Tasks:** Train a Linear model for continuous prediction (house prices) and a Logistic model for binary classification (spam detection).
- **Achievement:** Can solve standard predictive problems using lightweight mathematical models.

#### Day 13: Decision Trees
- **Priority:** MUST KNOW
- **Tasks:** Study Gini impurity and Information Gain. Visualize a trained decision tree.
- **Achievement:** Can train a highly interpretable model where every decision is easily explained to business stakeholders.

#### Day 14: Random Forests
- **Priority:** MUST KNOW
- **Tasks:** Understand Ensemble learning and Bagging. Train a Random Forest to prevent the overfitting issues of single Decision Trees.
- **Achievement:** Can build highly robust predictive models that generalize well to unseen data.

#### Day 15: Gradient Boosting (XGBoost)
- **Priority:** MUST KNOW
- **Tasks:** Study Boosting vs Bagging. Install XGBoost/LightGBM and train a model. Understand why it dominates Kaggle competitions.
- **Achievement:** Can deploy the most powerful classical ML algorithm for tabular data.

#### Day 16: Unsupervised Learning (K-Means)
- **Priority:** IMPORTANT
- **Tasks:** Train a K-Means clustering model. Use the Elbow Method to find the optimal number of clusters.
- **Achievement:** Can automatically discover hidden groupings (like customer segments) in unlabelled data.

#### Day 17: Dimensionality Reduction (PCA)
- **Priority:** IMPORTANT
- **Tasks:** Use Principal Component Analysis to compress a 50-feature dataset into 3 features while retaining 95% of the variance.
- **Achievement:** Can drastically speed up model training by mathematically removing redundant data.

#### Day 18: Model Evaluation: Classification
- **Priority:** MUST KNOW
- **Tasks:** Calculate Accuracy, Precision, Recall, and the F1 Score. Plot an ROC-AUC curve.
- **Achievement:** Can prove mathematically why "99% accuracy" is a terrible metric for cancer detection models.

#### Day 19: Model Evaluation: Regression
- **Priority:** MUST KNOW
- **Tasks:** Calculate Mean Absolute Error (MAE), Mean Squared Error (MSE), and R-Squared.
- **Achievement:** Can quantify exactly how far off a model's continuous predictions are on average.

#### Day 20: Hyperparameter Tuning
- **Priority:** MUST KNOW
- **Tasks:** Use GridSearchCV and RandomizedSearchCV to automatically find the best `max_depth` and `learning_rate` for your XGBoost model.
- **Achievement:** Can automate the trial-and-error process of maximizing model performance.

#### Day 21: Cross-Validation
- **Priority:** MUST KNOW
- **Tasks:** Implement K-Fold Cross-Validation. Understand why a simple train/test split is dangerous for small datasets.
- **Achievement:** Can guarantee that a model's evaluation metrics are not the result of a "lucky" random split.

#### Day 22: Neural Networks Basics
- **Priority:** MUST KNOW
- **Tasks:** Study Perceptrons, Weights, Biases, and Activation Functions (Sigmoid, ReLU).
- **Achievement:** Can manually trace the mathematical forward pass of a simple artificial neuron.

#### Day 23: Loss Functions & Optimizers
- **Priority:** MUST KNOW
- **Tasks:** Study Gradient Descent. Understand how the Learning Rate controls the step size towards the global minimum loss.
- **Achievement:** Can diagnose why a model is failing to converge or is overshooting the optimal weights.

#### Day 24: Backpropagation Theory
- **Priority:** MUST KNOW
- **Tasks:** Synthesize the Chain Rule and Gradient Descent. Understand how the error at the output layer updates the weights in the first layer.
- **Achievement:** Can explain the "magic" of deep learning as a series of calculus chain-rule operations.

#### Day 25: Phase 1 Capstone
- **Priority:** MUST KNOW
- **Tasks:** Take a raw dataset from Kaggle, clean it with Pandas, train an XGBoost model, tune its hyperparameters, and evaluate it rigorously.
- **Achievement:** Can execute an end-to-end Classical Machine Learning project from scratch.

### DEEP LEARNING, NLP & TRANSFORMERS (Days 26–57)

#### Day 26: PyTorch Fundamentals
- **Priority:** MUST KNOW
- **Tasks:** Install PyTorch. Create and manipulate Tensors. Move Tensors from CPU to GPU (`.cuda()` or `.to("cuda")`).
- **Achievement:** Can utilize hardware-accelerated multidimensional arrays.

#### Day 27: PyTorch Autograd
- **Priority:** MUST KNOW
- **Tasks:** Enable `requires_grad=True`. Perform mathematical operations and call `.backward()`. Inspect the generated gradients.
- **Achievement:** Can utilize automatic differentiation to calculate complex derivatives instantly.

#### Day 28: PyTorch DataLoaders
- **Priority:** MUST KNOW
- **Tasks:** Create a custom `Dataset` class overriding `__len__` and `__getitem__`. Wrap it in a `DataLoader` for batching and shuffling.
- **Achievement:** Can feed massive datasets into a deep learning model without running out of RAM.

#### Day 29: The PyTorch Training Loop
- **Priority:** MUST KNOW
- **Tasks:** Build a Multi-Layer Perceptron (MLP) using `nn.Module`. Write the standard 5-step training loop (forward, loss, zero_grad, backward, step).
- **Achievement:** Can train a custom Deep Learning model from scratch in pure PyTorch.

#### Day 30: NLP Fundamentals: Tokenization
- **Priority:** MUST KNOW
- **Tasks:** Study Word, Subword (BPE), and Character tokenization. Use the `tiktoken` library to see how GPT-4 tokenizes text.
- **Achievement:** Can explain why LLMs struggle with math and spelling due to subword tokenization artifacts.

#### Day 31: NLP: Bag of Words & TF-IDF
- **Priority:** IMPORTANT
- **Tasks:** Implement TF-IDF to convert text into sparse vectors. Understand its limitations (ignores word order and semantics).
- **Achievement:** Can build a basic keyword-matching search engine.

#### Day 32: NLP: Word Embeddings (Word2Vec)
- **Priority:** MUST KNOW
- **Tasks:** Study dense vector embeddings. Understand how `King - Man + Woman = Queen` works geometrically in the embedding space.
- **Achievement:** Can map human language into mathematical space where semantic relationships are preserved.

#### Day 33: Recurrent Neural Networks (RNNs)
- **Priority:** IMPORTANT
- **Tasks:** Study the theory of RNNs and how they handle sequential data. Understand the Vanishing Gradient problem.
- **Achievement:** Can explain why early AI models forgot the beginning of a sentence by the time they reached the end.

#### Day 34: LSTMs & GRUs
- **Priority:** IMPORTANT
- **Tasks:** Study Long Short-Term Memory networks. Understand the Forget, Input, and Output gates.
- **Achievement:** Can explain the architecture that dominated NLP right before Transformers were invented.

#### Day 35: The Attention Mechanism
- **Priority:** MUST KNOW
- **Tasks:** Read the "Attention Is All You Need" paper. Understand Queries (Q), Keys (K), and Values (V), and scaled dot-product attention.
- **Achievement:** Can mathematically explain how a model learns to focus on specific words in a sentence.

#### Day 36: Transformer Architecture Deep Dive
- **Priority:** MUST KNOW
- **Tasks:** Study Multi-Head Attention, Feed Forward Networks, Layer Normalization, and Positional Encoding.
- **Achievement:** Can draw the complete Transformer block architecture from memory.

#### Day 37: KV Cache & Decoding Optimization
- **Priority:** MUST KNOW
- **Tasks:** Study KV-cache internals. Differentiate prefill vs. decode stages in LLM inference. Implement speculative decoding and rotary positional embeddings (RoPE) optimizations.
- **Achievement:** Can optimize LLM decoding speed and manage GPU memory footprints during sequence generation.

#### Day 38: Encoder vs Decoder Models
- **Priority:** MUST KNOW
- **Tasks:** Understand the difference between BERT (Encoder-only, masked language modeling) and GPT (Decoder-only, autoregressive generation).
- **Achievement:** Can choose the correct transformer family for classification vs text generation tasks.

#### Day 39: Hugging Face Ecosystem
- **Priority:** MUST KNOW
- **Tasks:** Explore the `transformers` library. Use the high-level `pipeline` API for sentiment analysis and text generation.
- **Achievement:** Can leverage pre-trained, state-of-the-art models with exactly 3 lines of code.

#### Day 40: Hugging Face Tokenizers
- **Priority:** MUST KNOW
- **Tasks:** Load a specific model's tokenizer (e.g., `AutoTokenizer.from_pretrained`). Handle padding, truncation, and attention masks.
- **Achievement:** Can prepare raw text batches perfectly formatted for transformer input.

#### Day 41: Fine-Tuning with HF Trainer API
- **Priority:** MUST KNOW
- **Tasks:** Take a pre-trained BERT model. Use the `Trainer` API to fine-tune it on a custom IMDB dataset for sentiment classification.
- **Achievement:** Can adapt open-source foundational models to highly specific business tasks.

#### Day 42: Intro to Large Language Models (LLMs)
- **Priority:** MUST KNOW
- **Tasks:** Study the evolution from GPT-2 to Llama 3. Understand parameter counts (7B vs 70B) and the concept of Emergent Abilities.
- **Achievement:** Can navigate the open-source LLM landscape and select appropriate models for different hardware.

#### Day 43: Prompt Engineering Techniques
- **Priority:** MUST KNOW
- **Tasks:** Master Few-Shot Prompting, Chain-of-Thought (CoT), and ReAct prompting.
- **Achievement:** Can dramatically increase the reasoning capability of an LLM through clever text inputs.

#### Day 44: OpenAI API & System Prompts
- **Priority:** MUST KNOW
- **Tasks:** Write a Python script to call the OpenAI API. Understand the difference between System, User, and Assistant message roles.
- **Achievement:** Can integrate commercial frontier models into a Python application.

#### Day 45: Structured Outputs (Instructor/Pydantic)
- **Priority:** MUST KNOW
- **Tasks:** Use the `instructor` library with Pydantic to force an LLM (like GPT-4) to return strictly typed, validated JSON instead of raw text.
- **Achievement:** Can reliably extract structured data (like objects and lists) from unstructured text using AI.

#### Day 46: Instruction Tuning vs RLHF
- **Priority:** MUST KNOW
- **Tasks:** Study how base foundation models are transformed into chat models. Understand Reinforcement Learning from Human Feedback (RLHF) and DPO.
- **Achievement:** Can explain why a base Llama model continues your text while a chat Llama answers your questions.

#### Day 47: Parameter-Efficient Fine-Tuning (PEFT)
- **Priority:** MUST KNOW
- **Tasks:** Study why full fine-tuning of a 7B model is impossible on consumer GPUs. Learn the theory of PEFT.
- **Achievement:** Can explain how to fine-tune massive models without updating all 7 billion parameters.

#### Day 48: LoRA (Low-Rank Adaptation)
- **Priority:** MUST KNOW
- **Tasks:** Deep dive into LoRA. Understand how freezing the original weights and injecting tiny, trainable rank-decomposition matrices saves RAM.
- **Achievement:** Can explain the math behind the most popular LLM fine-tuning technique in the world.

#### Day 49: LLM Distillation & Compression
- **Priority:** IMPORTANT
- **Tasks:** Study knowledge distillation (Student-Teacher network training). Compare it with structural pruning and weights quantization for model size reduction.
- **Achievement:** Can train compact, highly efficient student models that preserve parent LLM intelligence.

#### Day 50: Quantization Theory
- **Priority:** MUST KNOW
- **Tasks:** Study FP32, FP16, INT8, and INT4 (NF4). Understand how reducing the precision of weights shrinks model size drastically with minimal accuracy loss.
- **Achievement:** Can fit a 14GB model into 4GB of VRAM using mathematical approximation.

#### Day 51: QLoRA Implementation (Hands-on)
- **Priority:** MUST KNOW
- **Tasks:** Use `bitsandbytes` and `peft` to fine-tune a 4-bit quantized Llama 3 model on a custom dataset using a single Colab T4 GPU.
- **Achievement:** Can train a state-of-the-art open-source LLM on cheap consumer hardware.

#### Day 52: Post-Fine-Tune Evaluation
- **Priority:** MUST KNOW
- **Tasks:** Write a script that uses GPT-4 as an "LLM-as-a-judge" to compare the answers of your base Llama model vs your newly fine-tuned QLoRA model.
- **Achievement:** Can mathematically prove that your fine-tuning process actually improved the model.

#### Day 53: Context Windows & RoPE
- **Priority:** MUST KNOW
- **Tasks:** Study how LLMs handle long context. Understand Rotary Positional Embeddings (RoPE) and KV-Cache memory consumption.
- **Achievement:** Can explain why passing a 100-page PDF to an LLM causes massive RAM spikes.

#### Day 54: Vision Transformers (ViT)
- **Priority:** IMPORTANT
- **Tasks:** Study how images are split into patches and fed into a standard Transformer architecture (treating patches like word tokens).
- **Achievement:** Can explain how modern AI understands and classifies images without using Convolutional layers.

#### Day 55: CLIP & Multimodal Embeddings
- **Priority:** MUST KNOW
- **Tasks:** Study OpenAI's CLIP model. Understand how it maps images and text into the exact same embedding space.
- **Achievement:** Can build a "search images with text" search engine.

#### Day 56: LLM Evaluation Basics
- **Priority:** IMPORTANT
- **Tasks:** Study traditional metrics: Perplexity, BLEU, and ROUGE. Understand why they fail for generative tasks.
- **Achievement:** Can evaluate standard translation and summarization models.

#### Day 57: Modern LLM Benchmarks
- **Priority:** MUST KNOW
- **Tasks:** Study MMLU, HumanEval, and GSM8K. Understand the concept of contamination in training datasets.
- **Achievement:** Can critically evaluate the "leaderboards" when choosing an open-source model.

### ENTERPRISE RAG & AI SECURITY (Days 58–92)

#### Day 58: RAG Architecture Fundamentals
- **Priority:** MUST KNOW
- **Tasks:** Study Retrieval-Augmented Generation. Understand why giving an LLM access to external data prevents hallucinations and provides private context.
- **Achievement:** Can architect the standard enterprise solution for internal corporate AI chat.

#### Day 59: Document Ingestion & Parsing
- **Priority:** MUST KNOW
- **Tasks:** Write a script to load PDFs, Word docs, and HTML files. Handle difficult formats like tables and images inside PDFs.
- **Achievement:** Can extract clean, usable text from messy corporate document stores.

#### Day 60: Chunking Strategies
- **Priority:** MUST KNOW
- **Tasks:** Implement Fixed-size, Recursive Character, and Semantic chunking. Understand the overlap parameter.
- **Achievement:** Can split massive documents into the perfect size for vector search and LLM context windows.

#### Day 61: Embedding Models in Practice
- **Priority:** MUST KNOW
- **Tasks:** Compare OpenAI `text-embedding-3` with open-source `BGE-Large` via Hugging Face. Generate embeddings for 1000 chunks.
- **Achievement:** Can convert human text into high-dimensional semantic vectors.

#### Day 62: Vector Databases (Pinecone/Milvus)
- **Priority:** MUST KNOW
- **Tasks:** Provision a cloud Vector DB. Insert your chunk embeddings alongside metadata (author, date, page_number).
- **Achievement:** Can manage a massive, scalable database optimized purely for semantic search.

#### Day 63: Vector Search Algorithms (HNSW)
- **Priority:** MUST KNOW
- **Tasks:** Study Hierarchical Navigable Small World (HNSW) and Inverted File Index (IVFFlat). Understand approximate nearest neighbors (ANN).
- **Achievement:** Can explain how a Vector DB searches 10 million vectors in 10 milliseconds.

#### Day 64: RAG with pgvector
- **Priority:** MUST KNOW
- **Tasks:** Install the `pgvector` extension in PostgreSQL. Create a vector column, index it with HNSW, and write a cosine distance SQL query.
- **Achievement:** Can add semantic search capabilities to a standard relational database without adding new infrastructure.

#### Day 65: Building a Basic RAG Pipeline
- **Priority:** MUST KNOW
- **Tasks:** Combine the pieces: User query -> Embed query -> Vector Search -> Retrieve Top K -> Inject into Prompt -> LLM Generation.
- **Achievement:** Can build a fully functional "Chat with your PDF" application from scratch.

#### Day 66: Advanced RAG: Query Expansion
- **Priority:** MUST KNOW
- **Tasks:** Implement Multi-Query (having the LLM rephrase the user's question 3 times and searching all of them) to improve retrieval recall.
- **Achievement:** Can prevent poor search results caused by vague user queries.

#### Day 67: Advanced RAG: HyDE
- **Priority:** MUST KNOW
- **Tasks:** Implement Hypothetical Document Embeddings. Ask the LLM to generate a fake answer, embed the fake answer, and search for that vector.
- **Achievement:** Can drastically improve retrieval when the user query and the document text are structured very differently.

#### Day 68: Advanced Retrieval: DSPy Basics
- **Priority:** MUST KNOW
- **Tasks:** Learn DSPy, a framework that compiles and optimizes prompts automatically. Write a basic Signature and compile it using a Teleprompter.
- **Achievement:** Can programmatically optimize prompts rather than manually tweaking text.

#### Day 69: Advanced RAG: Parent-Child Chunking
- **Priority:** MUST KNOW
- **Tasks:** Embed small "child" chunks for accurate search, but retrieve the larger "parent" document to give the LLM more context.
- **Achievement:** Can balance strict search precision with broad LLM context generation.

#### Day 70: Advanced RAG: Hybrid Search
- **Priority:** MUST KNOW
- **Tasks:** Combine Vector Search (semantic meaning) with BM25 Keyword Search (exact matching). Use Reciprocal Rank Fusion (RRF) to merge the scores.
- **Achievement:** Can build a search engine that understands synonyms but doesn't miss exact product IDs.

#### Day 71: Advanced RAG: Reranking Models
- **Priority:** MUST KNOW
- **Tasks:** Retrieve Top 50 documents using fast Vector Search, then pass them through a Cross-Encoder (like Cohere Rerank) to perfectly re-order the Top 5.
- **Achievement:** Can implement the single most effective technique for boosting RAG accuracy.

#### Day 72: RAG Evaluation Theory (RAGAS)
- **Priority:** MUST KNOW
- **Tasks:** Study the RAGAS metrics: Faithfulness (no hallucinations), Answer Relevance, Context Precision, and Context Recall.
- **Achievement:** Can mathematically evaluate if a RAG pipeline is ready for production.

#### Day 73: RAGAS Implementation
- **Priority:** MUST KNOW
- **Tasks:** Use the `ragas` Python library to automatically score your RAG pipeline against a test dataset of 50 questions.
- **Achievement:** Can build a CI/CD test suite for an AI application.

#### Day 74: Self-Reflective RAG
- **Priority:** MUST KNOW
- **Tasks:** Implement a loop: LLM generates answer -> Another LLM checks if the answer actually addresses the prompt -> If no, re-retrieve and try again.
- **Achievement:** Can build highly robust, error-correcting AI generation pipelines.

#### Day 75: Data Engineering: Airflow Basics
- **Priority:** IMPORTANT
- **Tasks:** Study Apache Airflow for DAG (Directed Acyclic Graph) orchestration. Understand Tasks, Operators, and Scheduling.
- **Achievement:** Can automate complex, multi-step data pipelines reliably.

#### Day 76: Data Engineering: RAG Ingestion DAG
- **Priority:** MUST KNOW
- **Tasks:** Write an Airflow DAG that runs nightly: Downloads new PDFs -> Chunks them -> Embeds them -> Upserts to Pinecone.
- **Achievement:** Can automate the continuous updating of an enterprise RAG knowledge base.

#### Day 77: GraphRAG Theory & Setup
- **Priority:** MUST KNOW
- **Tasks:** Install Neo4j. Use an LLM to extract Entities (Nodes) and Relationships (Edges) from raw text. Understand why Knowledge Graphs excel where Vector DBs fail.
- **Achievement:** Can map unstructured text into highly structured, queryable relationship graphs.

#### Day 78: GraphRAG Queries (Cypher)
- **Priority:** MUST KNOW
- **Tasks:** Combine Vector Search with Cypher Graph Queries. Retrieve a document, then use the graph to retrieve all connected entities up to 3 hops away.
- **Achievement:** Can solve complex "connect the dots" questions across thousands of documents.

#### Day 79: AI Security: OWASP LLM Top 10
- **Priority:** MUST KNOW
- **Tasks:** Study Prompt Injection, Insecure Output Handling, Training Data Poisoning, and Supply Chain Vulnerabilities.
- **Achievement:** Can identify critical security risks unique to Large Language Models.

#### Day 80: AI Security: Prompt Injection Defense
- **Priority:** MUST KNOW
- **Tasks:** Implement robust system prompts, use delimiters (`"""`), and test your app against common jailbreaks (like "DAN").
- **Achievement:** Can prevent malicious users from hijacking your AI application.

#### Day 81: AI Security: PII Detection (Presidio)
- **Priority:** MUST KNOW
- **Tasks:** Use Microsoft Presidio to automatically detect and redact Personally Identifiable Information (SSN, emails) before sending text to the OpenAI API.
- **Achievement:** Can guarantee data privacy compliance (GDPR/HIPAA) in AI architectures.

#### Day 82: AI Security: NeMo Guardrails
- **Priority:** MUST KNOW
- **Tasks:** Implement Nvidia NeMo Guardrails to strictly restrict the topics your chatbot is allowed to discuss using Colang configurations.
- **Achievement:** Can prevent a corporate chatbot from answering questions about competitors or politics.

#### Day 83: AI Security: LlamaGuard
- **Priority:** MUST KNOW
- **Tasks:** Deploy Meta's LlamaGuard model as an input/output filter to automatically detect and block toxic, violent, or unsafe content.
- **Achievement:** Can implement an enterprise-grade AI safety layer.

#### Day 84: AI Security: Red Teaming
- **Priority:** MUST KNOW
- **Tasks:** Act as an attacker. Systematically attempt to break, bypass, and exploit the RAG pipeline you built over the last 20 days.
- **Achievement:** Can rigorously audit an AI application for catastrophic edge cases.

#### Day 85: Semantic Caching
- **Priority:** MUST KNOW
- **Tasks:** Implement `GPTCache`. Store LLM responses in Redis based on the embedding of the user's question. If a similar question is asked, return the cache.
- **Achievement:** Can drastically reduce OpenAI API costs and response latency by caching semantic meaning.

#### Day 86: Async Python Basics (asyncio)
- **Priority:** MUST KNOW
- **Tasks:** Deep dive into `asyncio` and `await`. Compare synchronous `requests` to asynchronous `httpx` for making multiple API calls concurrently.
- **Achievement:** Can write highly concurrent, non-blocking Python code essential for production AI.

#### Day 87: Serving Models with FastAPI
- **Priority:** MUST KNOW
- **Tasks:** Wrap your RAG pipeline in a FastAPI backend. Understand Uvicorn and ASGI. Implement an endpoint that receives JSON and returns the LLM answer.
- **Achievement:** Can expose AI functionality as a high-performance REST API.

#### Day 88: High-Performance Serving with vLLM
- **Priority:** MUST KNOW
- **Tasks:** Set up a local vLLM server. Understand PagedAttention memory optimization. Benchpress token generation throughput vs. standard PyTorch pipelines.
- **Achievement:** Can serve open-source LLMs at scale with maximized GPU utilization and minimal latency.

#### Day 89: NVIDIA Triton Inference Server
- **Priority:** MUST KNOW
- **Tasks:** Configure Triton Inference Server. Write a model configuration file (config.pbtxt), set up dynamic batching, and route model queries via gRPC and HTTP interfaces.
- **Achievement:** Can deploy production model servers capable of orchestration, batching, and concurrent multi-model executions.

#### Day 90: Streaming LLM Responses
- **Priority:** MUST KNOW
- **Tasks:** Modify your FastAPI endpoint to use Server-Sent Events (SSE). Stream the LLM tokens to the client as they are generated.
- **Achievement:** Can provide the "ChatGPT-like" instant typing experience to users, bypassing long generation delays.

#### Day 91: Phase 3 Capstone - Part 1
- **Priority:** MUST KNOW
- **Tasks:** Build the Ingestion layer of a "Corporate Knowledge Bot". Parse 100 PDFs, chunk them, embed with open-source models, and store in pgvector.
- **Achievement:** Can build a highly optimized data foundation for an AI product.

#### Day 92: Phase 3 Capstone - Part 2
- **Priority:** MUST KNOW
- **Tasks:** Build the FastAPI layer. Implement Hybrid Search + Reranking, wrap the LLM call with NeMo guardrails, and stream the response asynchronously.
- **Achievement:** Can architect and deploy a secure, production-grade Enterprise RAG system.

### AUTONOMOUS AGENTS & LANGGRAPH (Days 93–141)

#### Day 93: Introduction to Autonomous Agents
- **Priority:** MUST KNOW
- **Tasks:** Study the difference between RAG (retrieve and generate) and Agents (plan, use tools, loop, and act).
- **Achievement:** Can explain the paradigm shift from passive text generators to active digital workers.

#### Day 94: Function Calling (Tool Use)
- **Priority:** MUST KNOW
- **Tasks:** Use the OpenAI API `tools` parameter. Define a JSON schema for a `get_weather(location)` function. See how the LLM decides to call it.
- **Achievement:** Can give a frozen language model the ability to fetch real-time, external data.

#### Day 95: Building Custom Tools
- **Priority:** MUST KNOW
- **Tasks:** Write Python functions to search Google, query a SQL database, and fetch a stock price. Wrap them as LLM-accessible tools.
- **Achievement:** Can bridge the gap between AI reasoning and real-world system execution.

#### Day 96: Model Context Protocol (MCP)
- **Priority:** MUST KNOW
- **Tasks:** Study the Model Context Protocol (MCP) specification. Implement an MCP Server in Python to expose local filesystem and database access, and configure Claude Desktop or an MCP client to interact with your server.
- **Achievement:** Can build standard-compliant, secure, and interoperable connections between LLMs and external data/tool services.

#### Day 97: OpenAI Assistants API v2
- **Priority:** IMPORTANT
- **Tasks:** Experiment with the managed Assistants API. Utilize built-in Code Interpreter and File Search without building the infrastructure yourself.
- **Achievement:** Can quickly deploy capable agents using OpenAI's managed platform.

#### Day 98: ReAct Prompting Paradigm
- **Priority:** MUST KNOW
- **Tasks:** Study the Reason + Act paper. Understand the "Thought -> Action -> Observation" loop that powers agentic decision-making.
- **Achievement:** Can explain the core cognitive loop utilized by almost all autonomous agents.

#### Day 99: LangChain Fundamentals
- **Priority:** MUST KNOW
- **Tasks:** Learn the core LangChain abstractions: Prompts, Output Parsers, and Runnables (LCEL - LangChain Expression Language).
- **Achievement:** Can chain multiple LLM calls and parsers together using modular syntax.

#### Day 100: LangGraph Concepts
- **Priority:** MUST KNOW
- **Tasks:** Understand why LangChain Chains (linear) fail for agents. Study LangGraph: Nodes, Edges, and representing agent logic as a cyclic graph.
- **Achievement:** Can articulate why state machines are the correct architecture for complex AI agents.

#### Day 101: LangGraph: State & StateGraph
- **Priority:** MUST KNOW
- **Tasks:** Define a TypedDict representing the agent's memory (State). Initialize a `StateGraph` and understand how State is passed between nodes.
- **Achievement:** Can architect the memory structure for an autonomous workflow.

#### Day 102: LangGraph: Nodes & Edges
- **Priority:** MUST KNOW
- **Tasks:** Write standard Python functions (Nodes) that modify the State. Connect them using linear edges. Compile and run the graph.
- **Achievement:** Can execute a multi-step LLM workflow defined as a strict graph.

#### Day 103: LangGraph: Conditional Edges
- **Priority:** MUST KNOW
- **Tasks:** Implement a routing function. If the LLM output contains a tool call, route to the ToolNode. Otherwise, route to the END node.
- **Achievement:** Can build the core loop of an autonomous, decision-making agent.

#### Day 104: LangGraph: Advanced State (Reducers)
- **Priority:** MUST KNOW
- **Tasks:** Modify your State to use the `add_messages` reducer. Understand how this automatically appends new messages to the chat history array.
- **Achievement:** Can manage growing conversational memory without manually merging lists.

#### Day 105: LangGraph: Persistence (Checkpointers)
- **Priority:** MUST KNOW
- **Tasks:** Use `MemorySaver` or `PostgresSaver`. Pass a `thread_id` to the graph. Stop the graph, and resume it later from the exact same state.
- **Achievement:** Can build long-running agents that remember user conversations across sessions.

#### Day 106: LangGraph: Human-in-the-Loop (HITL)
- **Priority:** MUST KNOW
- **Tasks:** Configure the graph to interrupt `before` the ToolNode executes. Prompt the user for approval via terminal, then resume the graph.
- **Achievement:** Can design safe agent architectures that require human sign-off for dangerous actions (like DB drops).

#### Day 107: LangGraph: Time Travel
- **Priority:** MUST KNOW
- **Tasks:** Fetch the state history using the checkpointer. Rewind the agent to a previous state, modify a message, and branch the execution.
- **Achievement:** Can debug complex agent failures by replaying past executions.

#### Day 108: LangGraph: Multi-Agent Supervisor
- **Priority:** MUST KNOW
- **Tasks:** Design a graph with a "Supervisor" LLM node that decides whether to route the task to a "Coder" LLM node or a "Researcher" LLM node.
- **Achievement:** Can orchestrate a team of specialized AI agents working under a manager.

#### Day 109: LangGraph: Multi-Agent Collaboration
- **Priority:** MUST KNOW
- **Tasks:** Design a graph where a "Generator" LLM writes an article and passes it to a "Reviewer" LLM, looping until the Reviewer approves it.
- **Achievement:** Can build self-improving, peer-reviewing AI architectures.

#### Day 110: LangGraph: Streaming Outputs
- **Priority:** MUST KNOW
- **Tasks:** Stream the execution of the graph using `.astream_events()`. Yield tokens to the frontend as the LLM generates them inside the nodes.
- **Achievement:** Can provide real-time UI feedback while a complex LangGraph is executing.

#### Day 111: Semantic Routing
- **Priority:** MUST KNOW
- **Tasks:** Implement `semantic-router`. Instead of asking an LLM to decide which tool to use, use fast vector embeddings to route the user's query instantly.
- **Achievement:** Can bypass slow, expensive LLM calls for predictable routing logic.

#### Day 112: SQL Agents
- **Priority:** MUST KNOW
- **Tasks:** Build an agent connected to a PostgreSQL database. Give it the schema, and let it autonomously write, execute, and fix SQL queries to answer questions.
- **Achievement:** Can build a "text-to-SQL" analytics bot for business intelligence.

#### Day 113: Code Interpreter Agents
- **Priority:** MUST KNOW
- **Tasks:** Spin up a secure Docker sandbox. Build an agent that writes Python code to perform data analysis, executes it in the sandbox, and reads the output.
- **Achievement:** Can build highly capable data-science agents that solve math using code, not text generation.

#### Day 114: Web Research Agents (Tavily)
- **Priority:** MUST KNOW
- **Tasks:** Integrate the Tavily Search API. Build an agent that searches the web, scrapes 5 articles, synthesizes the information, and cites its sources.
- **Achievement:** Can build an automated research assistant that grounds answers in real-time internet data.

#### Day 115: Agent Observability (LangSmith)
- **Priority:** MUST KNOW
- **Tasks:** Configure LangSmith. Run your LangGraph agent and view the trace. Inspect exactly which prompts were sent and which tools were called.
- **Achievement:** Can debug non-deterministic AI agent loops using enterprise observability platforms.

#### Day 116: Agent Evaluation
- **Priority:** MUST KNOW
- **Tasks:** Use LLM-as-a-judge to evaluate an agent's trajectory. Did it select the most efficient tools? Did it loop too many times?
- **Achievement:** Can quantitatively score the intelligence and efficiency of an autonomous agent.

#### Day 117: Optimizing Agent Latency
- **Priority:** MUST KNOW
- **Tasks:** Implement parallel tool execution. If an agent needs weather for NY, SF, and LA, ensure it calls the tool 3 times concurrently, not sequentially.
- **Achievement:** Can architect high-performance agents that don't leave users waiting for minutes.

#### Day 118: Phase 4 Capstone - Scope & Tools (Part 1)
- **Priority:** MUST KNOW
- **Tasks:** Design a "Software Engineer Agent". Write tools for reading local files, running bash commands in a Docker sandbox, and searching GitHub.
- **Achievement:** Can establish the foundational capabilities of an advanced autonomous system.

#### Day 119: Phase 4 Capstone - LangGraph Setup (Part 2)
- **Priority:** MUST KNOW
- **Tasks:** Build the StateGraph. Implement a Supervisor, a Coder, and a Reviewer. Wire up the conditional edges and the PostgresSaver checkpointer.
- **Achievement:** Can architect complex, multi-agent state machines.

#### Day 120: Phase 4 Capstone - FastAPI Deployment (Part 3)
- **Priority:** MUST KNOW
- **Tasks:** Wrap the LangGraph execution in a FastAPI backend using SSE streaming. Implement a Human-in-the-loop endpoint to approve code execution.
- **Achievement:** Can deploy enterprise-grade AI agents as scalable HTTP services.

#### Day 121: Review: Core AI Math & Transformers
- **Priority:** MUST KNOW
- **Tasks:** Review gradients, multi-head attention, and how tokenization impacts model capabilities.
- **Achievement:** Ready to answer deep technical questions on how LLMs actually work.

#### Day 122: Review: RAG Architecture
- **Priority:** MUST KNOW
- **Tasks:** Review chunking strategies, vector search algorithms (HNSW), and reranking patterns.
- **Achievement:** Ready to ace system design interviews focusing on Enterprise RAG pipelines.

#### Day 123: Review: Agentic Workflows
- **Priority:** MUST KNOW
- **Tasks:** Review ReAct, LangGraph state management, and strategies for preventing infinite agent loops.
- **Achievement:** Ready to discuss the cutting edge of autonomous AI architectures.

#### Day 124: Graduation Day
- **Priority:** MUST KNOW
- **Tasks:** Reflect on the massive journey from basic Python arrays to architecting autonomous multi-agent systems.
- **Achievement:** You are now a highly capable, job-ready Senior AI & LLM Engineer.

#### Day 125: Advanced Topic: Multimodal Agents
- **Priority:** IMPORTANT
- **Tasks:** Extend the agent to accept images as input, using GPT-4V to analyze screenshots and write code based on UI mockups.
- **Achievement:** Can build agents that interact with both text and visual data.

#### Day 126: Advanced Topic: Voice Integration
- **Priority:** IMPORTANT
- **Tasks:** Integrate Whisper for STT and TTS models. Build a real-time voice-to-voice agent over WebSockets.
- **Achievement:** Can build seamless conversational AI systems.

#### Day 127: Advanced Topic: On-Device LLMs
- **Priority:** MUST KNOW
- **Tasks:** Experiment with Llama.cpp and Ollama. Run a quantized 8B model locally and connect it to your LangGraph agent.
- **Achievement:** Can deploy completely private, offline AI agents.

#### Day 128: System Design: Agentic Systems
- **Priority:** MUST KNOW
- **Tasks:** Design an architecture capable of running 10,000 asynchronous long-lived agents using Temporal or Kafka.
- **Achievement:** Can scale agentic workflows to enterprise workloads.

#### Day 129: Advanced Security: Jailbreaks & Defenses
- **Priority:** MUST KNOW
- **Tasks:** Study advanced prompt injections like Crescendo and ASCII art bypasses. Implement strict semantic filters.
- **Achievement:** Can secure frontier models against state-of-the-art red teaming attacks.

#### Day 130: Distributed AI Workloads with Ray
- **Priority:** IMPORTANT
- **Tasks:** Install Ray. Write distributed tasks and actors. Configure Ray Train or Ray Serve to orchestrate model fine-tuning and inference across multiple node cores.
- **Achievement:** Can scale compute execution dynamically across clusters to run heavy AI training and serving operations.

#### Day 131: Cost Optimization & Token Management
- **Priority:** MUST KNOW
- **Tasks:** Implement strict token counting, dynamic context window truncation, and caching to reduce API costs by 80%.
- **Achievement:** Can manage the massive financial overhead of running LLMs in production.

#### Day 132: Fine-Tuning Review: Custom Embeddings
- **Priority:** IMPORTANT
- **Tasks:** Learn how to fine-tune an embedding model (like BGE) using SentenceTransformers on domain-specific vocabulary.
- **Achievement:** Can boost RAG accuracy on highly specialized corporate jargon.

#### Day 133: Emerging Frameworks: LlamaIndex vs LangChain
- **Priority:** IMPORTANT
- **Tasks:** Build a complex RAG pipeline in LlamaIndex. Compare the abstractions to LangChain.
- **Achievement:** Can select the optimal framework based on task requirements (RAG vs Agents).

#### Day 134: Emerging Frameworks: Autogen
- **Priority:** IMPORTANT
- **Tasks:** Study Microsoft Autogen. Build a conversational multi-agent system and compare its approach to LangGraph.
- **Achievement:** Can evaluate alternative multi-agent orchestration frameworks.

#### Day 135: Emerging Frameworks: CrewAI Deep Dive
- **Priority:** IMPORTANT
- **Tasks:** Build a task-delegation hierarchy using CrewAI. Understand Tasks, Agents, and Tools in this framework.
- **Achievement:** Can rapidly prototype role-playing agent teams.

#### Day 136: Portfolio Project Polish
- **Priority:** MUST KNOW
- **Tasks:** Clean up the "Corporate Knowledge Bot" and "Software Engineer Agent" repositories. Add comprehensive READMEs with architecture diagrams.
- **Achievement:** Can present undeniable proof of senior-level AI engineering skills.

#### Day 137: Mock Interview: ML Fundamentals
- **Priority:** MUST KNOW
- **Tasks:** Do a mock interview focusing strictly on calculus, backpropagation, and classical ML algorithms.
- **Achievement:** Can pass the mathematical screen of an AI interview.

#### Day 138: Mock Interview: Transformer Architecture
- **Priority:** MUST KNOW
- **Tasks:** Do a mock interview focusing on attention mechanisms, LoRA math, and KV-caching.
- **Achievement:** Can pass the deep-learning architecture screen.

#### Day 139: Mock Interview: RAG System Design
- **Priority:** MUST KNOW
- **Tasks:** Do a mock interview designing a multi-tenant RAG system for a legal firm with strict data access controls.
- **Achievement:** Can pass an enterprise AI system design interview.

#### Day 140: Mock Interview: Agent System Design
- **Priority:** MUST KNOW
- **Tasks:** Do a mock interview designing an autonomous coding assistant that scales to thousands of concurrent users.
- **Achievement:** Can architect state-of-the-art AI applications under pressure.

#### Day 141: Ultimate Graduation
- **Priority:** MUST KNOW
- **Tasks:** Review your entire journey. You have mastered Python, Deep Learning, RAG, and Autonomous Agents.
- **Achievement:** You are now an Elite GenAI & LLM Engineer.

## Linux, OS & Databases (112 Days)

### LINUX & OS INTERNALS (Days 1–29)

#### Day 1: OS Fundamentals & Kernel
- **Priority:** MUST KNOW
- **Tasks:** Study the difference between the Kernel Space and User Space. Understand what System Calls (syscalls) are and how the OS manages hardware resources.
- **Achievement:** Can explain the exact role of an Operating System Kernel in a server environment.

#### Day 2: Linux File System Hierarchy
- **Priority:** MUST KNOW
- **Tasks:** Explore `/etc`, `/var`, `/home`, `/usr`, and `/bin`. Understand the Linux philosophy: "Everything is a file" (including hardware devices in `/dev`).
- **Achievement:** Can navigate to the correct directory to find system logs, configuration files, and installed binaries without searching blindly.

#### Day 3: Essential CLI Navigation
- **Priority:** MUST KNOW
- **Tasks:** Master absolute vs relative paths. Practice using `cd`, `ls -la`, `pwd`, `mkdir -p`, `rm -rf`, `cp -r`, and `mv` commands rapidly in a terminal without a GUI.
- **Achievement:** Can manipulate files and directories strictly via the command line with high speed.

#### Day 4: File Reading & Searching
- **Priority:** MUST KNOW
- **Tasks:** Use `cat`, `less`, `head`, and `tail -f` to read files. Learn how to search for text inside files using `grep` (with regex flags like `-i` and `-E`).
- **Achievement:** Can monitor real-time server logs and extract specific error messages instantly using grep.

#### Day 5: Finding Files in Linux
- **Priority:** MUST KNOW
- **Tasks:** Master the `find` command. Write commands to find files by name (`-name`), by extension (`*.log`), by size (`+100M`), and by modification date (`-mtime`).
- **Achievement:** Can locate any file hidden deep within a server based on complex metadata rules.

#### Day 6: Pipes and Redirection
- **Priority:** MUST KNOW
- **Tasks:** Study standard input (stdin), standard output (stdout), and standard error (stderr). Practice piping `|` the output of one command into another, and redirecting `>` to files.
- **Achievement:** Can chain multiple simple Linux utilities together to perform complex data transformations.

#### Day 7: User & Group Management
- **Priority:** MUST KNOW
- **Tasks:** Learn how to create users (`useradd`), assign them to groups (`usermod`), and switch users (`su`). Understand the `/etc/passwd` and `/etc/group` files.
- **Achievement:** Can provision access to a Linux server for multiple developers securely.

#### Day 8: Linux Permissions (chmod/chown)
- **Priority:** MUST KNOW
- **Tasks:** Study the read (4), write (2), execute (1) octal permission system. Use `chmod` to change permissions and `chown` to change file ownership. Understand the `root` user.
- **Achievement:** Can secure sensitive files (like SSH keys) so only the owner can read them (chmod 400).

#### Day 9: Sudo & Privilege Escalation
- **Priority:** MUST KNOW
- **Tasks:** Understand how the `sudo` command works and how to configure the `/etc/sudoers` file safely using `visudo`.
- **Achievement:** Can grant a specific user permission to restart a service without giving them full root access.

#### Day 10: Process Management
- **Priority:** MUST KNOW
- **Tasks:** Use `ps aux` and `top` / `htop` to list running processes. Learn what a PID is. Practice sending signals to processes using `kill -9` (SIGKILL) and `kill -15` (SIGTERM).
- **Achievement:** Can identify a runaway, CPU-hogging application and terminate it safely.

#### Day 11: OS Internals: Concurrency, Mutexes & Semaphores
- **Priority:** MUST KNOW
- **Tasks:** Study race conditions, critical sections, and mutual exclusion. Compare Mutexes, Semaphores (binary and counting), and spinlocks. Implement a thread-safe producer-consumer queue.
- **Achievement:** Can prevent race conditions and write thread-safe concurrent programs at the operating system level.

#### Day 12: OS Internals: CPU Scheduling & Deadlocks
- **Priority:** MUST KNOW
- **Tasks:** Study CPU scheduling algorithms (Round Robin, FIFO, Shortest Job First). Understand what a Deadlock is, the 4 Coffman conditions for deadlocks, and deadlock prevention/detection strategies.
- **Achievement:** Can explain process scheduling and resolve deadlocks in multi-process systems.

#### Day 13: OS Internals: Paging & Virtual Memory
- **Priority:** MUST KNOW
- **Tasks:** Study physical vs virtual memory. Learn how the CPU MMU maps pages to frames. Understand page tables, page faults, thrashing, and page replacement algorithms (LRU, FIFO).
- **Achievement:** Can optimize memory usage and troubleshoot page faults on Linux servers.

#### Day 14: Diagnostic Tools (strace, lsof, perf)
- **Priority:** MUST KNOW
- **Tasks:** Use `strace` to intercept system calls of a process. Use `lsof` to find which process is holding a file open. Understand what `perf` does for CPU profiling.
- **Achievement:** Can debug complex production crashes where a process hangs waiting for I/O.

#### Day 15: Background Jobs & Screen/Tmux
- **Priority:** MUST KNOW
- **Tasks:** Learn how to send processes to the background using `&`, `bg`, and `fg`. Install and practice using `tmux` or `screen` to keep sessions alive after disconnecting from SSH.
- **Achievement:** Can start a long-running script, disconnect your laptop, and check back on it tomorrow.

#### Day 16: Daemons and Systemd
- **Priority:** MUST KNOW
- **Tasks:** Understand what a daemon is. Master `systemctl` commands (start, stop, restart, status, enable). Write a custom `.service` file to run a Python script automatically on boot.
- **Achievement:** Can configure a backend application to start automatically when the server reboots.

#### Day 17: Package Management (APT/YUM)
- **Priority:** MUST KNOW
- **Tasks:** Learn how software is installed in Linux. Practice using `apt update`, `apt upgrade`, and installing packages. Understand dependency resolution.
- **Achievement:** Can install and update server software safely on Debian/Ubuntu systems.

#### Day 18: Archive and Compression
- **Priority:** MUST KNOW
- **Tasks:** Master the `tar` command (`tar -czvf` to compress, `tar -xzvf` to extract). Understand the difference between `.tar`, `.gz`, and `.zip`.
- **Achievement:** Can back up an entire application directory into a single compressed file for transport.

#### Day 19: Disk Usage & Partitions
- **Priority:** MUST KNOW
- **Tasks:** Use `df -h` to check available disk space and `du -sh` to find massive directories. Understand basic disk mounting.
- **Achievement:** Can diagnose a "No space left on device" error and identify which folder is causing it.

#### Day 20: Symlinks & Hard Links
- **Priority:** IMPORTANT
- **Tasks:** Use `ln -s` to create soft links (shortcuts) and `ln` for hard links. Understand the concept of Inodes in the Linux file system.
- **Achievement:** Can manage different versions of software by symlinking `/usr/bin/node` to the correct version folder.

#### Day 21: Environment Variables
- **Priority:** MUST KNOW
- **Tasks:** Understand `export`. Edit the `~/.bashrc` or `~/.profile` file to make environment variables permanent. Learn how the `$PATH` variable dictates command execution.
- **Achievement:** Can fix "command not found" errors by correctly configuring the PATH variable.

#### Day 22: Networking Basics in CLI
- **Priority:** MUST KNOW
- **Tasks:** Use `ping` to test connectivity, `curl` / `wget` to make HTTP requests or download files, and `traceroute` to track network paths.
- **Achievement:** Can diagnose basic network connectivity issues directly from the server terminal.

#### Day 23: Port Checking & Firewalls (UFW)
- **Priority:** MUST KNOW
- **Tasks:** Use `netstat -tulpn` or `ss` to see which processes are listening on which ports. Configure `ufw` (Uncomplicated Firewall) to allow port 80/443 and block others.
- **Achievement:** Can secure a server by closing all ports except the ones explicitly needed by the application.

#### Day 24: SSH Configuration & Keys
- **Priority:** MUST KNOW
- **Tasks:** Generate SSH keys (`ssh-keygen`). Understand public vs private keys. Copy keys to a server using `ssh-copy-id`. Disable password authentication in `/etc/ssh/sshd_config`.
- **Achievement:** Can lock down a server so it is completely immune to SSH password brute-force attacks.

#### Day 25: Memory & Swap Management
- **Priority:** IMPORTANT
- **Tasks:** Use `free -m` to check RAM. Understand what Swap space is and how it acts as emergency memory. Learn the dangers of excessive swapping (thrashing).
- **Achievement:** Can diagnose if an OutOfMemory error was caused by a lack of physical RAM or insufficient Swap.

#### Day 26: Text Editors (Vim/Nano)
- **Priority:** MUST KNOW
- **Tasks:** Learn the absolute basics of Nano for quick edits. Learn Vim basics: Insert mode (`i`), Visual mode, saving/quitting (`:wq`, `:q!`), and basic navigation.
- **Achievement:** Can edit configuration files on a headless remote server without panicking.

#### Day 27: Cron Jobs & Scheduling
- **Priority:** MUST KNOW
- **Tasks:** Edit the crontab (`crontab -e`). Learn cron syntax (`* * * * *`). Schedule a script to run every day at midnight.
- **Achievement:** Can automate recurring maintenance tasks like database backups or log rotations.

#### Day 28: Log Rotation (logrotate)
- **Priority:** IMPORTANT
- **Tasks:** Understand why log files must be rotated to prevent disk exhaustion. Inspect `/etc/logrotate.conf` to see how system logs are compressed and deleted automatically.
- **Achievement:** Can configure an application to keep only the last 7 days of logs automatically.

#### Day 29: Phase 1 Review: Linux Survival
- **Priority:** MUST KNOW
- **Tasks:** Provision a raw Ubuntu server on a cloud provider. Create a new user, lock down SSH, configure a firewall, install a database, and configure it as a systemd service.
- **Achievement:** Can take a blank server and configure it securely for production application hosting.

### BASH, NGINX & GIT ENGINEERING (Days 30–54)

#### Day 30: Bash Scripting Basics
- **Priority:** MUST KNOW
- **Tasks:** Write your first `#!/bin/bash` script. Learn how to declare variables, accept command-line arguments (`$1`, `$2`), and return exit codes.
- **Achievement:** Can write reusable executable scripts to automate manual terminal tasks.

#### Day 31: Bash Conditionals (If/Else)
- **Priority:** MUST KNOW
- **Tasks:** Use `if`, `elif`, and `else`. Learn file testing operators (`-f`, `-d`) and string comparisons. Write a script that checks if a required configuration file exists before proceeding.
- **Achievement:** Can write defensive scripts that validate their environment before executing dangerous operations.

#### Day 32: Bash Loops (For/While)
- **Priority:** MUST KNOW
- **Tasks:** Write `for` loops to iterate over files in a directory. Write a `while` loop that reads a text file line-by-line.
- **Achievement:** Can automate repetitive operations across hundreds of files instantly.

#### Day 33: Advanced Text Processing (AWK)
- **Priority:** IMPORTANT
- **Tasks:** Learn `awk` basics. Use it to extract specific columns from structured text files (like parsing access logs).
- **Achievement:** Can slice and transform tabular command-line data without needing Python.

#### Day 34: Advanced Text Processing (SED)
- **Priority:** IMPORTANT
- **Tasks:** Learn the Stream Editor (`sed`). Practice performing massive find-and-replace operations across configuration files via the terminal.
- **Achievement:** Can programmatically update connection strings in configuration files dynamically during deployment.

#### Day 35: DNS & Domains (Real World)
- **Priority:** MUST KNOW
- **Tasks:** Purchase a cheap domain name. Configure an A Record to point to your cloud server's IP address. Understand TTL (Time to Live) propagation delays.
- **Achievement:** Can connect human-readable domain names to raw infrastructure.

#### Day 36: Nginx Fundamentals
- **Priority:** MUST KNOW
- **Tasks:** Install Nginx. Understand the difference between Nginx (event-driven) and Apache (thread-per-request). Explore the `nginx.conf` and `sites-available` directory structures.
- **Achievement:** Can explain why Nginx is the industry standard for high-concurrency web serving.

#### Day 37: Nginx Reverse Proxy
- **Priority:** MUST KNOW
- **Tasks:** Configure a `server` block to listen on port 80 and use `proxy_pass` to forward traffic to a backend Node.js or Spring Boot app running on port 8080.
- **Achievement:** Can securely expose a backend application to the internet via an enterprise-grade proxy.

#### Day 38: Nginx Load Balancing
- **Priority:** MUST KNOW
- **Tasks:** Set up an `upstream` block containing three backend server IPs. Configure Nginx to load balance traffic between them using round-robin.
- **Achievement:** Can scale a backend application horizontally by placing Nginx in front of multiple instances.

#### Day 39: SSL/TLS with Nginx (Certbot)
- **Priority:** MUST KNOW
- **Tasks:** Use Let's Encrypt and Certbot to automatically fetch an SSL certificate and configure Nginx to serve HTTPS traffic on port 443. Set up a port 80 -> 443 redirect.
- **Achievement:** Can secure all internet traffic to your application with free, auto-renewing cryptography.

#### Day 40: Git Internals: Trees & Blobs
- **Priority:** IMPORTANT
- **Tasks:** Study how Git actually stores data. Initialize a repo, create a file, and use `git cat-file` to explore how Git stores it as a blob, and how commits are just pointers.
- **Achievement:** Can explain why Git is incredibly fast and why branching is essentially instantaneous.

#### Day 41: Advanced Git Branching Strategy
- **Priority:** MUST KNOW
- **Tasks:** Study GitFlow vs Trunk-based development. Understand the role of feature branches, release branches, and hotfix branches.
- **Achievement:** Can enforce a clean, organized branching strategy for a team of 10+ developers.

#### Day 42: Git Merging vs Rebasing
- **Priority:** MUST KNOW
- **Tasks:** Perform a `git merge`. Then, undo it and perform a `git rebase`. Understand how rebasing rewrites commit history to create a perfectly linear project timeline.
- **Achievement:** Can decide exactly when it is safe to use rebase (local) and when it is disastrous (public branches).

#### Day 43: Resolving Git Conflicts
- **Priority:** MUST KNOW
- **Tasks:** Intentionally create a merge conflict by editing the same line in two branches. Use VSCode or a terminal to manually resolve the conflict markers (`<<<<<<<`).
- **Achievement:** Can confidently untangle messy code conflicts without accidentally deleting a coworker's work.

#### Day 44: Git Reset & Revert
- **Priority:** MUST KNOW
- **Tasks:** Understand the difference between `git reset --soft`, `--mixed`, and `--hard`. Learn how `git revert` safely undoes a commit by creating a new, opposite commit.
- **Achievement:** Can panic-fix a broken production branch by safely reverting the offending commit.

#### Day 45: Git Interactive Rebase
- **Priority:** MUST KNOW
- **Tasks:** Use `git rebase -i` to squash three messy "WIP" commits into a single, clean feature commit before pushing to GitHub.
- **Achievement:** Can maintain a pristine, highly readable commit history for the team.

#### Day 46: Git Stash & Cherry-Pick
- **Priority:** MUST KNOW
- **Tasks:** Use `git stash` to temporarily hide unfinished work. Use `git cherry-pick` to grab a specific commit from another branch and apply it to your current branch.
- **Achievement:** Can quickly switch context between tasks and move individual fixes between branches.

#### Day 47: Git Hooks
- **Priority:** IMPORTANT
- **Tasks:** Explore the `.git/hooks` directory. Write a `pre-commit` Bash script that runs your unit tests and rejects the commit if the tests fail.
- **Achievement:** Can enforce code quality and prevent broken code from ever being committed to the repository.

#### Day 48: SSH Git Authentication
- **Priority:** MUST KNOW
- **Tasks:** Switch your GitHub remotes from HTTPS to SSH. Understand why SSH is more secure and convenient for CI/CD pipelines than using personal access tokens.
- **Achievement:** Can securely interact with GitHub without ever typing a password again.

#### Day 49: Nginx Caching & Gzip
- **Priority:** MUST KNOW
- **Tasks:** Configure Nginx to compress outgoing text responses using Gzip to save bandwidth. Set up proxy caching for static assets like images and CSS.
- **Achievement:** Can drastically reduce server load and improve website load times via proxy-level caching.

#### Day 50: Nginx Rate Limiting
- **Priority:** MUST KNOW
- **Tasks:** Use the `limit_req_zone` directive in Nginx to restrict a single IP address to 5 requests per second, dropping excess traffic with a 503 error.
- **Achievement:** Can protect backend servers from basic Denial of Service (DoS) attacks at the proxy layer.

#### Day 51: Monorepos vs Polyrepos
- **Priority:** IMPORTANT
- **Tasks:** Study the trade-offs of storing all microservices in a single Git repository (Monorepo) versus separate repositories. Look at tools like Lerna or Nx.
- **Achievement:** Can recommend the correct repository structure for a growing engineering team.

#### Day 52: Semantic Versioning (SemVer)
- **Priority:** MUST KNOW
- **Tasks:** Study the MAJOR.MINOR.PATCH specification. Understand when to increment each number based on breaking changes vs backward-compatible additions.
- **Achievement:** Can version software releases predictably so downstream consumers don't break.

#### Day 53: Phase 2 Capstone - Prep
- **Priority:** MUST KNOW
- **Tasks:** Write a bash script that automatically pulls the latest code from GitHub, builds it, restarts the systemd service, and tails the logs.
- **Achievement:** Can build a "poor man's CI/CD" pipeline purely using Bash and Git.

#### Day 54: Phase 2 Capstone - Execution
- **Priority:** MUST KNOW
- **Tasks:** Deploy a web application on a Linux server. Point a custom domain to it. Secure it with Nginx + HTTPS Certbot, and use your Bash script to deploy updates.
- **Achievement:** Can manually launch a secure, internet-facing application from scratch.

### RELATIONAL DBs & SQL MASTERY (Days 55–81)

#### Day 55: PostgreSQL Architecture
- **Priority:** MUST KNOW
- **Tasks:** Study the Postgres process model (postmaster), shared buffers, and the Write-Ahead Log (WAL). Understand why Postgres is highly reliable for enterprise data.
- **Achievement:** Can explain the internal memory and logging mechanisms that protect PostgreSQL data.

#### Day 56: Advanced Data Types
- **Priority:** MUST KNOW
- **Tasks:** Go beyond VARCHAR and INT. Experiment with Postgres-specific types: UUID, ARRAY, and ENUM. Understand the storage benefits of exact data typing.
- **Achievement:** Can design strict database schemas that reject invalid data formats instantly.

#### Day 57: JSONB in PostgreSQL
- **Priority:** MUST KNOW
- **Tasks:** Learn how to store NoSQL-like JSON documents directly inside Postgres. Query specific keys inside the JSONB column and index them.
- **Achievement:** Can implement flexible, schema-less features (like user settings) without needing MongoDB.

#### Day 58: Complex JOIN Operations
- **Priority:** MUST KNOW
- **Tasks:** Master INNER, LEFT, RIGHT, and FULL OUTER joins. Understand CROSS JOINs and Self Joins. Write a query that joins 4 different tables to generate a report.
- **Achievement:** Can extract highly correlated data spread across complex normalized schemas.

#### Day 59: Subqueries and CTEs (WITH clause)
- **Priority:** MUST KNOW
- **Tasks:** Refactor messy nested subqueries into readable Common Table Expressions (CTEs). Write a recursive CTE to traverse a hierarchical tree (like an employee org chart).
- **Achievement:** Can write elegant, readable SQL for extremely complex, multi-step data extraction logic.

#### Day 60: Window Functions - OVER & PARTITION BY
- **Priority:** MUST KNOW
- **Tasks:** Use `ROW_NUMBER()`, `RANK()`, and `DENSE_RANK()`. Calculate a running total or a moving average without grouping the data.
- **Achievement:** Can perform advanced analytical and reporting queries directly in the database.

#### Day 61: Window Functions - LEAD & LAG
- **Priority:** IMPORTANT
- **Tasks:** Use `LEAD()` and `LAG()` to compare a row's value to the previous row (e.g., calculating the day-over-day percentage change in sales).
- **Achievement:** Can extract time-series insights using pure SQL without writing Python logic.

#### Day 62: Database Normalization
- **Priority:** MUST KNOW
- **Tasks:** Study 1st, 2nd, and 3rd Normal Forms (1NF, 2NF, 3NF). Normalize a flat spreadsheet into a properly structured relational schema to eliminate data redundancy.
- **Achievement:** Can architect data models that prevent update anomalies and maintain strict consistency.

#### Day 63: Denormalization Strategies
- **Priority:** MUST KNOW
- **Tasks:** Understand when to break 3NF for performance. Study read-heavy architectures where redundant data is acceptable to avoid massive, slow JOIN operations.
- **Achievement:** Can balance strict data integrity with the practical performance needs of an application.

#### Day 64: Indexing - B-Trees under the hood
- **Priority:** MUST KNOW
- **Tasks:** Deep dive into B-Tree structures. Understand why an index dramatically speeds up `WHERE` and `ORDER BY` clauses, but slows down `INSERT` and `UPDATE` operations.
- **Achievement:** Can accurately predict exactly how a database will locate a row on the hard drive.

#### Day 65: EXPLAIN ANALYZE
- **Priority:** MUST KNOW
- **Tasks:** Use `EXPLAIN ANALYZE` on a slow query. Read the query plan. Understand Sequential Scans vs Index Scans, and Hash Joins vs Nested Loops.
- **Achievement:** Can profile and diagnose exactly why a specific SQL query is taking 5 seconds to run.

#### Day 66: Advanced Indexing Strategies
- **Priority:** MUST KNOW
- **Tasks:** Create Composite Indexes for queries filtering on multiple columns. Understand the Leftmost Prefix Rule. Create Partial Indexes (indexing only active users) to save space.
- **Achievement:** Can optimize complex queries by designing highly targeted, memory-efficient indexes.

#### Day 67: Transactions and ACID in Postgres
- **Priority:** MUST KNOW
- **Tasks:** Use `BEGIN`, `COMMIT`, and `ROLLBACK`. Intentionally cause a deadlock between two terminal sessions and observe how Postgres resolves it.
- **Achievement:** Can write bulletproof database scripts that never leave data in a partially updated state.

#### Day 68: Isolation Levels & MVCC
- **Priority:** MUST KNOW
- **Tasks:** Study Multi-Version Concurrency Control (MVCC). Understand how Postgres allows readers to read while writers write by keeping multiple versions of a row.
- **Achievement:** Can explain how PostgreSQL achieves high concurrency without locking entire tables.

#### Day 69: PostgreSQL Internals: WAL, MVCC & Vacuum
- **Priority:** MUST KNOW
- **Tasks:** Deep dive into PostgreSQL internals. Study Write-Ahead Logging (WAL) for durability, MVCC (Multi-Version Concurrency Control) page layout, and why VACUUM is necessary to clean up dead tuples.
- **Achievement:** Can optimize PostgreSQL write performance and maintain database health through autovacuum tuning.

#### Day 70: Locks in PostgreSQL
- **Priority:** MUST KNOW
- **Tasks:** Study Row-level locks vs Table-level locks. Use `SELECT ... FOR UPDATE` to implement pessimistic locking for a ticketing system or bank transfer.
- **Achievement:** Can prevent race conditions and double-spending issues at the database layer.

#### Day 71: Views and Materialized Views
- **Priority:** MUST KNOW
- **Tasks:** Create a View to hide a complex join. Create a Materialized View to physically cache the result of an expensive calculation, and learn how to refresh it.
- **Achievement:** Can speed up heavy analytical dashboards instantly using pre-computed materialized views.

#### Day 72: Stored Procedures & Functions
- **Priority:** IMPORTANT
- **Tasks:** Write a basic PL/pgSQL function. Understand when logic should live in the database (for performance) vs in the application code (for maintainability).
- **Achievement:** Can execute complex data manipulation directly on the database server to reduce network latency.

#### Day 73: Triggers
- **Priority:** IMPORTANT
- **Tasks:** Write a Trigger that automatically updates an `updated_at` timestamp column or logs changes to an audit table whenever a row is modified.
- **Achievement:** Can implement automatic, database-level side effects that cannot be bypassed by buggy application code.

#### Day 74: VACUUM and Maintenance
- **Priority:** MUST KNOW
- **Tasks:** Understand Dead Tuples in MVCC. Learn why the `VACUUM` process is critical to reclaim disk space and why `VACUUM FULL` locks the table.
- **Achievement:** Can manage database health and prevent PostgreSQL from bloating over time.

#### Day 75: Connection Pooling (PgBouncer)
- **Priority:** MUST KNOW
- **Tasks:** Understand the high memory cost of a PostgreSQL connection. Set up PgBouncer to multiplex thousands of client connections onto a few dozen actual database connections.
- **Achievement:** Can prevent connection exhaustion when scaling up a massive microservice fleet.

#### Day 76: Database Replication (Primary/Replica)
- **Priority:** MUST KNOW
- **Tasks:** Set up a Read Replica using PostgreSQL streaming replication via the WAL. Understand synchronous vs asynchronous replication lag.
- **Achievement:** Can scale out database read capacity and ensure high availability in case the primary crashes.

#### Day 77: Sharding / Partitioning
- **Priority:** IMPORTANT
- **Tasks:** Implement Table Partitioning (e.g., partitioning a massive `logs` table by month). Discuss the complexities of distributed sharding (e.g., Citus).
- **Achievement:** Can design tables that efficiently store billions of rows without degrading query performance.

#### Day 78: Backup and Restore (pg_dump)
- **Priority:** MUST KNOW
- **Tasks:** Use `pg_dump` to create a logical backup. Practice restoring the database from scratch. Learn about Point-in-Time Recovery (PITR) using WAL archiving.
- **Achievement:** Can securely back up business data and restore it during a catastrophic failure.

#### Day 79: Security and Roles
- **Priority:** MUST KNOW
- **Tasks:** Create specific database roles (e.g., `read_only_user`, `app_user`). Implement Row-Level Security (RLS) to restrict users to querying only their own tenant data.
- **Achievement:** Can secure database access utilizing the principle of least privilege.

#### Day 80: Advanced Topic: pgvector
- **Priority:** MUST KNOW
- **Tasks:** Install pgvector. Create a vector column, store AI embeddings, and create an HNSW index to perform high-speed cosine similarity searches natively in Postgres.
- **Achievement:** Can bridge traditional relational databases with modern AI vector search capabilities.

#### Day 81: Phase 3 Capstone
- **Priority:** MUST KNOW
- **Tasks:** Given a complex schema of 10 tables, write a series of highly optimized CTEs and Window Functions to generate an Executive Dashboard report, ensuring EXPLAIN ANALYZE shows index hits.
- **Achievement:** Can dominate the SQL portion of any FAANG Data/Backend Engineering interview.

### NOSQL, ELASTICSEARCH & CACHING (Days 82–101)

#### Day 82: Redis Data Structures
- **Priority:** MUST KNOW
- **Tasks:** Install Redis. Experiment with Strings, Hashes, Lists, Sets, and Sorted Sets via the `redis-cli`. Understand why Redis is single-threaded but insanely fast.
- **Achievement:** Can utilize specific in-memory data structures to solve complex performance problems.

#### Day 83: Redis Internals: Persistence & Eviction
- **Priority:** MUST KNOW
- **Tasks:** Study how Redis persists data to disk. Compare RDB (snapshotting) vs AOF (Append Only File) persistence, and learn about AOF rewriting. Understand Redis eviction policies (e.g., volatile-lru, allkeys-lru) and how Redis manages memory under pressure.
- **Achievement:** Can configure Redis persistence and eviction policies to balance performance, memory usage, and data durability in production.

#### Day 84: Dedicated Vector Databases (Pinecone & Weaviate)
- **Priority:** MUST KNOW
- **Tasks:** Study dedicated vector database architectures. Connect to Pinecone and Weaviate. Compare sparse/dense hybrid search indexing (HNSW vs Flat) and CRUD metadata filtering.
- **Achievement:** Can select and deploy optimized vector databases to back enterprise AI retrieval applications.

#### Day 85: Redis: Caching Strategies
- **Priority:** MUST KNOW
- **Tasks:** Implement Cache-Aside and Write-Through patterns. Set TTLs. Understand eviction policies (allkeys-lru vs volatile-ttl).
- **Achievement:** Can design a bulletproof caching layer that significantly reduces primary database load.

#### Day 86: Redis: Advanced Use Cases
- **Priority:** MUST KNOW
- **Tasks:** Use a Sorted Set to build a real-time gaming leaderboard. Use a Set to track unique daily IP visitors. Use Redis Pub/Sub for a chat application.
- **Achievement:** Can leverage Redis for advanced system architectures beyond basic object caching.

#### Day 87: Redis Cluster (Hands-On)
- **Priority:** MUST KNOW
- **Tasks:** Set up a local Redis Cluster with 3 masters and 3 replicas. Study Hash Slots and understand how Redis distributes keys. Use Redisson for a distributed lock in Java/Python.
- **Achievement:** Can horizontally scale in-memory datastores and prevent race conditions across a microservice fleet.

#### Day 88: MongoDB: Document Modeling
- **Priority:** MUST KNOW
- **Tasks:** Understand BSON documents. Design a schema for an E-Commerce site utilizing denormalization (embedding arrays of reviews inside a product document).
- **Achievement:** Can design NoSQL data models that optimize for fast reads rather than normalization.

#### Day 89: MongoDB: CRUD & Aggregation
- **Priority:** MUST KNOW
- **Tasks:** Perform deep queries into nested JSON arrays. Write an Aggregation Pipeline (`$match`, `$group`, `$project`) to calculate total sales per category.
- **Achievement:** Can perform complex analytics natively inside a NoSQL document database.

#### Day 90: MongoDB: Indexes & Sharding
- **Priority:** IMPORTANT
- **Tasks:** Create a compound index in Mongo. Study the concept of a Shard Key and how MongoDB distributes documents across a cluster based on that key.
- **Achievement:** Can architect a MongoDB cluster capable of scaling horizontally across multiple servers.

#### Day 91: Elasticsearch: The Inverted Index
- **Priority:** MUST KNOW
- **Tasks:** Study the core theory. Understand how documents are tokenized, stemmed, and stored in an Inverted Index. Contrast this with B-Tree indexes.
- **Achievement:** Can explain exactly why standard databases are terrible at "search bar" autocomplete functionality.

#### Day 92: Elasticsearch: Query DSL
- **Priority:** MUST KNOW
- **Tasks:** Write complex JSON queries. Differentiate between `match` (full-text search) and `term` (exact filtering). Implement pagination and aggregations.
- **Achievement:** Can build complex, Google-like search queries using the Elasticsearch REST API.

#### Day 93: Elasticsearch: Analyzers
- **Priority:** IMPORTANT
- **Tasks:** Create a custom analyzer that strips HTML, lowers cases, and applies English stemming before indexing the text.
- **Achievement:** Can configure search engines to perfectly understand the nuances of human text input.

#### Day 94: Cassandra Architecture
- **Priority:** MUST KNOW
- **Tasks:** Study masterless architectures and the gossip protocol. Understand consistency levels and how read/write quorums guarantee tunable consistency.
- **Achievement:** Can explain how Cassandra achieves extreme write-speeds and survives multiple node failures.

#### Day 95: Cassandra Keys & Partitioning
- **Priority:** MUST KNOW
- **Tasks:** Deep dive into Partition Keys (which node stores the data) and Clustering Columns (how data is sorted on disk within that node).
- **Achievement:** Can precisely control how massive datasets are physically distributed across a cluster.

#### Day 96: Cassandra Query-Driven Modeling
- **Priority:** MUST KNOW
- **Tasks:** Complete a data modeling workshop. Design 3 different tables heavily duplicating data to satisfy 3 specific query requirements, since JOINs do not exist.
- **Achievement:** Can abandon relational normalization habits to design for extreme read/write scale.

#### Day 97: Cassandra vs Postgres vs Mongo
- **Priority:** MUST KNOW
- **Tasks:** Compare all three. When do you use each? Outline the absolute breaking point where you are forced to migrate from Postgres to Cassandra.
- **Achievement:** Can critically evaluate and select the correct database technology for any business requirement.

#### Day 98: Message Brokers: RabbitMQ
- **Priority:** MUST KNOW
- **Tasks:** Study AMQP. Understand Exchanges (Direct, Fanout, Topic), Queues, and Bindings. Write a script to publish and consume messages.
- **Achievement:** Can decouple microservices utilizing complex message routing rules.

#### Day 99: Event Streaming: Kafka vs RabbitMQ
- **Priority:** MUST KNOW
- **Tasks:** Compare the pull-based, append-only log of Kafka to the push-based, smart-broker architecture of RabbitMQ.
- **Achievement:** Can select the correct messaging technology based on throughput vs routing requirements.

#### Day 100: Neo4j & Graph DBs Concepts
- **Priority:** IMPORTANT
- **Tasks:** Study Nodes, Relationships, and Properties. Understand why Graph databases solve "friend of a friend" queries exponentially faster than SQL JOINs.
- **Achievement:** Can identify problems that require highly connected relationship querying.

#### Day 101: Neo4j Hands-On
- **Priority:** MUST KNOW
- **Tasks:** Install Neo4j. Model a social network graph. Write a Cypher query to generate friend recommendations and connect a simple Java/Python app via the official driver.
- **Achievement:** Can implement and query a graph database in a real application.

### DB ADMINISTRATION & REAL-WORLD ARCHITECTURE (Days 102–112)

#### Day 102: Database High Availability
- **Priority:** MUST KNOW
- **Tasks:** Study active-passive failover mechanisms. Understand split-brain scenarios and how quorum mechanisms (like Patroni or etcd) prevent multiple primary databases.
- **Achievement:** Can design database architectures that survive complete hardware failure automatically.

#### Day 103: Data Migration Strategies
- **Priority:** MUST KNOW
- **Tasks:** Study the Strangler Fig pattern for databases. Learn how to migrate data from a legacy monolith database to a new microservice database using dual-writes and CDC.
- **Achievement:** Can migrate millions of rows in production without causing system downtime.

#### Day 104: Change Data Capture (Debezium)
- **Priority:** MUST KNOW
- **Tasks:** Study how CDC reads the database transaction log. Set up a pipeline where every Postgres UPDATE triggers a Kafka message automatically.
- **Achievement:** Can stream live database changes directly to a search engine (Elasticsearch) for instant indexing.

#### Day 105: Database Security & Encryption
- **Priority:** MUST KNOW
- **Tasks:** Implement Encryption at Rest (Disk encryption) and Encryption in Transit (SSL/TLS for DB connections). Audit database user privileges.
- **Achievement:** Can guarantee that stolen hard drives or compromised networks do not leak business data.

#### Day 106: Cloud Databases (RDS/Aurora)
- **Priority:** MUST KNOW
- **Tasks:** Study managed cloud databases. Compare standard AWS RDS to AWS Aurora's distributed storage engine. Understand read-replica auto-scaling.
- **Achievement:** Can explain the benefits and costs of using managed databases versus hosting them yourself on EC2.

#### Day 107: NoSQL in the Cloud (DynamoDB)
- **Priority:** IMPORTANT
- **Tasks:** Study DynamoDB. Understand Partition keys, Sort keys, GSIs (Global Secondary Indexes), and Provisioned vs On-Demand capacity.
- **Achievement:** Can design a highly scalable, serverless NoSQL database architecture on AWS.

#### Day 108: Database Troubleshooting
- **Priority:** MUST KNOW
- **Tasks:** Simulate a sudden spike in DB CPU usage. Practice checking `pg_stat_activity`, finding long-running transactions, and killing them.
- **Achievement:** Can act as an emergency DBA during a production crisis to restore application stability.

#### Day 109: Performance Benchmarking
- **Priority:** IMPORTANT
- **Tasks:** Use `pgbench` to load-test your PostgreSQL database. Tweak `postgresql.conf` parameters (`shared_buffers`, `work_mem`) and measure the TPS (Transactions Per Second) difference.
- **Achievement:** Can mathematically prove that a database configuration change improved throughput.

#### Day 110: Final Project Architecture
- **Priority:** MUST KNOW
- **Tasks:** Design the complete schema and indexing strategy for a "Netflix Clone". Include relational tables for users/billing, NoSQL for watch history, and Elasticsearch for movie search.
- **Achievement:** Can synthesize all learned data modeling techniques into a unified, massive architecture.

#### Day 111: Final Review & Interview Prep
- **Priority:** MUST KNOW
- **Tasks:** Run mock interviews focusing on B-Trees, transaction isolation levels, N+1 problems, CAP Theorem, and choosing the right database for a specific problem.
- **Achievement:** Ready to dominate any Database, Linux, or Backend Engineering technical interview.

#### Day 112: Graduation
- **Priority:** MUST KNOW
- **Tasks:** Reflect on 106 days of operating systems, scripting, and extreme data mastery.
- **Achievement:** You are now an Elite Database and Systems Engineer.

## DevOps, Cloud & MLOps (114 Days)

### CONTAINERIZATION & CLOUD FUNDAMENTALS (Days 1–27)

#### Day 1: The DevOps Philosophy
- **Priority:** MUST KNOW
- **Tasks:** Study the history of software delivery (Waterfall -> Agile -> DevOps). Understand the "Wall of Confusion" between developers and system admins.
- **Achievement:** Can articulate why DevOps exists and how it accelerates software delivery.

#### Day 2: Introduction to Docker
- **Priority:** MUST KNOW
- **Tasks:** Understand what a container is. Contrast containers (sharing the host OS kernel) with Virtual Machines (running a full guest OS).
- **Achievement:** Can explain exactly why "it works on my machine" is solved by Docker.

#### Day 3: Basic Docker Commands
- **Priority:** MUST KNOW
- **Tasks:** Use `docker run`, `docker ps`, `docker stop`, `docker rm`. Pull an Nginx image and run it on port 8080.
- **Achievement:** Can manage the lifecycle of pre-built containerized applications.

#### Day 4: Writing Dockerfiles
- **Priority:** MUST KNOW
- **Tasks:** Write a Dockerfile for a Spring Boot and a Python Flask app. Use `FROM`, `WORKDIR`, `COPY`, `RUN`, and `CMD`.
- **Achievement:** Can package custom source code into a portable, reproducible image.

#### Day 5: Docker Volumes (State)
- **Priority:** MUST KNOW
- **Tasks:** Run a PostgreSQL container. Notice how data is lost when it stops. Use `docker run -v` to mount a host directory to persist the database data.
- **Achievement:** Can safely run stateful databases inside ephemeral containers.

#### Day 6: Docker Networks
- **Priority:** MUST KNOW
- **Tasks:** Create a custom Docker network. Run a backend app container and a DB container on the same network. Prove they can communicate using container names instead of IP addresses.
- **Achievement:** Can isolate application traffic from the host machine using software-defined networks.

#### Day 7: Multi-Stage Builds
- **Priority:** MUST KNOW
- **Tasks:** Write a Dockerfile that uses a heavy JDK image to compile a Java app, but uses a tiny JRE Alpine image to run it. Observe the massive reduction in image size.
- **Achievement:** Can build highly optimized, secure containers ready for production.

#### Day 8: Docker Compose Basics
- **Priority:** MUST KNOW
- **Tasks:** Stop writing massive `docker run` commands. Write a `docker-compose.yml` to orchestrate a Frontend, Backend, and Database simultaneously.
- **Achievement:** Can spin up a complex 3-tier architecture with a single `docker-compose up`.

#### Day 9: Docker Registries (DockerHub / ECR)
- **Priority:** MUST KNOW
- **Tasks:** Tag your custom image (`docker tag`) and push it to DockerHub or AWS ECR (`docker push`). Delete it locally, and pull it back down.
- **Achievement:** Can distribute compiled application images to servers anywhere in the world.

#### Day 10: Cloud Computing 101
- **Priority:** MUST KNOW
- **Tasks:** Study IaaS, PaaS, and SaaS. Create an AWS Free Tier account. Understand the AWS Global Infrastructure (Regions and Availability Zones).
- **Achievement:** Can navigate the AWS Console and understand how physical data centers map to cloud concepts.

#### Day 11: AWS Identity & Access Management (IAM)
- **Priority:** MUST KNOW
- **Tasks:** Never use the Root user! Create an IAM Admin User. Understand Roles, Policies, and Groups. Generate programmatic Access Keys.
- **Achievement:** Can secure an AWS account using the Principle of Least Privilege.

#### Day 12: AWS Virtual Private Cloud (VPC)
- **Priority:** MUST KNOW
- **Tasks:** Study VPCs, Subnets, Internet Gateways, and Route Tables. Draw a diagram of a public subnet routing to the internet.
- **Achievement:** Can architect the foundational network security boundary for cloud resources.

#### Day 13: VPC Security Groups & NACLs
- **Priority:** MUST KNOW
- **Tasks:** Understand the difference between stateful Security Groups (attached to instances) and stateless Network ACLs (attached to subnets).
- **Achievement:** Can lock down a database so it can only be accessed by specific backend application IPs.

#### Day 14: AWS EC2 (Elastic Compute Cloud)
- **Priority:** MUST KNOW
- **Tasks:** Launch an Ubuntu EC2 instance. SSH into it using a `.pem` keypair. Install Docker on it and run your web app.
- **Achievement:** Can provision raw computing power in the cloud and manually deploy software to it.

#### Day 15: AWS S3 (Simple Storage Service)
- **Priority:** MUST KNOW
- **Tasks:** Create an S3 Bucket. Upload a file via the AWS Console and via the AWS CLI (`aws s3 cp`). Understand Bucket Policies for public access.
- **Achievement:** Can store infinite amounts of unstructured data (images, backups) securely.

#### Day 16: Multi-Cloud Basics & Providers
- **Priority:** IMPORTANT
- **Tasks:** Differentiate between AWS, GCP, and Azure core services. Differentiate pricing models and region availability. Understand multi-cloud deployment strategies.
- **Achievement:** Can draft architectural plans that operate across multiple cloud providers to avoid vendor lock-in.

#### Day 17: AWS Route53 & ACM
- **Priority:** MUST KNOW
- **Tasks:** Register a domain (or use an existing one). Use Route53 to route traffic to your EC2 instance. Use AWS Certificate Manager (ACM) to provision an SSL cert.
- **Achievement:** Can configure enterprise DNS routing and free HTTPS certificates.

#### Day 18: Load Balancing (AWS ALB)
- **Priority:** MUST KNOW
- **Tasks:** Provision an Application Load Balancer. Point it to two different EC2 instances running the same app. Observe traffic splitting.
- **Achievement:** Can scale an application horizontally across multiple servers to handle heavy traffic.

#### Day 19: Auto Scaling Groups (ASG)
- **Priority:** MUST KNOW
- **Tasks:** Create an AMI (Amazon Machine Image) from your EC2. Configure an ASG to automatically spin up a new instance if CPU usage exceeds 70%.
- **Achievement:** Can build self-healing infrastructure that dynamically adapts to traffic spikes.

#### Day 20: AWS Relational Database Service (RDS)
- **Priority:** MUST KNOW
- **Tasks:** Provision a Managed PostgreSQL RDS instance inside a private subnet. Connect your EC2 backend to it.
- **Achievement:** Can deploy highly available, automatically backed-up databases without acting as a DBA.

#### Day 21: AWS ECS (Elastic Container Service)
- **Priority:** MUST KNOW
- **Tasks:** Study ECS clusters and Task Definitions. Understand the difference between EC2 launch type and serverless Fargate launch type.
- **Achievement:** Can explain AWS's native container orchestration engine.

#### Day 22: AWS Fargate Hands-On
- **Priority:** MUST KNOW
- **Tasks:** Deploy a Docker container to ECS using Fargate. Access it via a Load Balancer. Never provision an underlying EC2 server.
- **Achievement:** Can run Docker containers in production with exactly zero server maintenance.

#### Day 23: Cloud Design Patterns
- **Priority:** MUST KNOW
- **Tasks:** Study cloud architectural patterns: Sidecar pattern, Circuit Breaker, CQRS, Saga, and Gateway Routing. Focus on building resilient microservices.
- **Achievement:** Can apply industry-standard resiliency and architectural patterns to cloud deployments.

#### Day 24: Serverless Compute (AWS Lambda)
- **Priority:** IMPORTANT
- **Tasks:** Write a simple Python function. Deploy it as an AWS Lambda. Trigger it manually and via an API Gateway.
- **Achievement:** Can run code purely in response to events without provisioning any infrastructure.

#### Day 25: Event-Driven AWS (S3 to Lambda)
- **Priority:** IMPORTANT
- **Tasks:** Configure an S3 bucket to trigger a Lambda function every time an image is uploaded. Have the Lambda generate a thumbnail.
- **Achievement:** Can build highly scalable asynchronous background processing pipelines.

#### Day 26: Secrets Management (AWS Secrets Manager)
- **Priority:** MUST KNOW
- **Tasks:** Store database credentials in AWS Secrets Manager. Modify your application to fetch them via API on startup instead of hardcoding them.
- **Achievement:** Can prevent massive security breaches caused by leaked environment variables.

#### Day 27: Phase 1 Capstone
- **Priority:** MUST KNOW
- **Tasks:** Manually deploy a highly available 3-tier app: Custom VPC, public subnets for Load Balancer, private subnets for ECS Fargate backend, and an RDS database.
- **Achievement:** Can architect a FAANG-tier AWS production environment by hand.

### INFRASTRUCTURE AS CODE & CI/CD (Days 28–52)

#### Day 28: Intro to Infrastructure as Code (IaC)
- **Priority:** MUST KNOW
- **Tasks:** Understand the danger of "ClickOps" (clicking around the AWS console). Learn why infrastructure must be version-controlled like source code.
- **Achievement:** Can articulate why Terraform is required for reproducible cloud environments.

#### Day 29: Terraform Basics
- **Priority:** MUST KNOW
- **Tasks:** Install Terraform. Write `main.tf` to define an AWS provider and provision a single EC2 instance. Run `terraform init`, `plan`, and `apply`.
- **Achievement:** Can deploy physical cloud resources instantly using code.

#### Day 30: Terraform State Management
- **Priority:** MUST KNOW
- **Tasks:** Study the `terraform.tfstate` file. Understand how Terraform tracks what it built. Destroy the infrastructure using `terraform destroy`.
- **Achievement:** Can safely manage the lifecycle of infrastructure without orphaned resources.

#### Day 31: Remote State & Locking
- **Priority:** MUST KNOW
- **Tasks:** Configure Terraform to store the state file in an S3 bucket and use a DynamoDB table for state locking.
- **Achievement:** Can safely collaborate on infrastructure code with a team without corrupting state.

#### Day 32: Terraform Variables & Outputs
- **Priority:** MUST KNOW
- **Tasks:** Use `variables.tf` to make the EC2 instance type configurable. Use `outputs.tf` to print the new instance's IP address after creation.
- **Achievement:** Can write dynamic, reusable infrastructure templates.

#### Day 33: Terraform Modules
- **Priority:** MUST KNOW
- **Tasks:** Refactor a massive `main.tf` into reusable modules (e.g., a custom `network-module` that provisions a VPC, subnets, and IGW).
- **Achievement:** Can architect complex IaC repositories that follow DRY (Don't Repeat Yourself) principles.

#### Day 34: Provisioning AWS ECS via Terraform
- **Priority:** MUST KNOW
- **Tasks:** Write Terraform code to spin up an ECS Cluster, a Task Definition, a Fargate Service, and an Application Load Balancer.
- **Achievement:** Can automate the deployment of the entire Phase 1 Capstone architecture.

#### Day 35: Introduction to CI/CD
- **Priority:** MUST KNOW
- **Tasks:** Study Continuous Integration (building/testing) and Continuous Deployment (shipping to production). Understand the pipeline lifecycle.
- **Achievement:** Can explain how code gets from a developer's laptop to production in 5 minutes.

#### Day 36: GitHub Actions Fundamentals
- **Priority:** MUST KNOW
- **Tasks:** Create a `.github/workflows/main.yml` file. Define jobs, steps, and triggers (`on: push`). Run a basic "Hello World" bash command.
- **Achievement:** Can trigger automated scripts directly from GitHub repository events.

#### Day 37: CI: Automated Testing
- **Priority:** MUST KNOW
- **Tasks:** Configure GitHub Actions to automatically run `mvn test` (Java) or `pytest` (Python) every time a Pull Request is opened.
- **Achievement:** Can prevent broken code from being merged into the `main` branch.

#### Day 38: CI: Static Code Analysis (SonarQube/Linting)
- **Priority:** MUST KNOW
- **Tasks:** Add a step to the pipeline that runs a linter (like Checkstyle or Flake8) and SonarCloud to fail the build if code smells or bugs are detected.
- **Achievement:** Can enforce strict code quality standards completely automatically.

#### Day 39: CI: Security Scanning (SAST/SCA)
- **Priority:** MUST KNOW
- **Tasks:** Integrate Trivy or Dependabot into the pipeline to scan the codebase for known vulnerable dependencies (CVEs) before building.
- **Achievement:** Can catch critical security flaws before they ever reach the compiled artifact.

#### Day 40: Building & Pushing Docker Images in CI
- **Priority:** MUST KNOW
- **Tasks:** Configure GitHub Actions to securely log into DockerHub/ECR, run `docker build`, and `docker push` the new image labeled with the Git commit hash.
- **Achievement:** Can automatically generate a deployable container every time code is merged.

#### Day 41: Managing Secrets in CI/CD
- **Priority:** MUST KNOW
- **Tasks:** Add AWS credentials as GitHub Secrets. Use them in the pipeline without exposing them in the YAML file.
- **Achievement:** Can securely authenticate pipelines to production cloud environments.

#### Day 42: CD: Deploying to AWS via GitHub Actions
- **Priority:** MUST KNOW
- **Tasks:** Add a final step to your pipeline: use the AWS CLI to update the ECS Fargate service to pull and run the newly pushed Docker image.
- **Achievement:** Can achieve 100% automated deployment from `git push` to a live website.

#### Day 43: Pipeline Optimization & Caching
- **Priority:** MUST KNOW
- **Tasks:** Use the `actions/cache` step to cache Maven/Pip dependencies between workflow runs. Cut the build time from 5 minutes to 30 seconds.
- **Achievement:** Can drastically speed up developer feedback loops by optimizing CI execution.

#### Day 44: HashiCorp Vault Basics
- **Priority:** IMPORTANT
- **Tasks:** Study enterprise secrets management. Spin up Vault in a container. Write/read secrets to it instead of using environment variables directly.
- **Achievement:** Can utilize industry-standard tools for extreme credential security.

#### Day 45: Configuration Management (Ansible)
- **Priority:** IMPORTANT
- **Tasks:** Understand when Terraform (provisioning) stops and Ansible (configuration) begins. Write a simple Ansible Playbook to install Nginx on an existing EC2 server.
- **Achievement:** Can automate the internal configuration of 100s of Linux servers simultaneously.

#### Day 46: Ansible Roles & Inventory
- **Priority:** IMPORTANT
- **Tasks:** Organize your Playbook into Roles. Use a dynamic inventory file to automatically find AWS EC2 instances based on their tags.
- **Achievement:** Can structure complex configuration management repositories.

#### Day 47: Immutable Infrastructure Paradigm
- **Priority:** MUST KNOW
- **Tasks:** Study the difference between Mutable (updating an existing server with Ansible) and Immutable (destroying the server and deploying a fresh AMI).
- **Achievement:** Can explain why modern DevOps heavily favors Docker/Immutable AMIs over Ansible updates.

#### Day 48: GitOps Fundamentals
- **Priority:** MUST KNOW
- **Tasks:** Study GitOps. Understand the paradigm shift from "pushing" code from a CI pipeline to having an agent "pull" state from Git.
- **Achievement:** Can explain the modern standard for Kubernetes deployments.

#### Day 49: Blue/Green Deployments
- **Priority:** MUST KNOW
- **Tasks:** Study deployment strategies. Understand how to spin up a "Green" production environment alongside "Blue", and flip the router instantly.
- **Achievement:** Can deploy major application updates with literally zero downtime or risk.

#### Day 50: Canary Deployments
- **Priority:** MUST KNOW
- **Tasks:** Understand Canary releases. Route 5% of real user traffic to the new version, monitor error rates, and automatically rollback if it fails.
- **Achievement:** Can test code in production safely using live user traffic.

#### Day 51: Phase 2 Capstone - Prep
- **Priority:** MUST KNOW
- **Tasks:** Write a massive Terraform repository that provisions a VPC, RDS, and ECS cluster completely from scratch.
- **Achievement:** Can codify entire network architectures into reproducible scripts.

#### Day 52: Phase 2 Capstone - Execution
- **Priority:** MUST KNOW
- **Tasks:** Write a GitHub Actions pipeline that lints, tests, builds a Docker image, pushes it to ECR, and automatically updates the Terraform ECS state.
- **Achievement:** Can build a FAANG-tier, fully automated Infrastructure-as-Code delivery pipeline.

### KUBERNETES & OBSERVABILITY (Days 53–77)

#### Day 53: Introduction to Kubernetes (K8s)
- **Priority:** MUST KNOW
- **Tasks:** Understand why Docker Compose fails at enterprise scale. Study the K8s Master Node (API Server, etcd, Scheduler) and Worker Nodes (Kubelet, Container Runtime).
- **Achievement:** Can explain the architecture of the most powerful container orchestration platform on earth.

#### Day 54: Minikube & kubectl
- **Priority:** MUST KNOW
- **Tasks:** Install Minikube to run a local cluster. Master basic `kubectl` commands: `get nodes`, `get all`, `describe`, and `logs`.
- **Achievement:** Can interact with and debug a live Kubernetes cluster.

#### Day 55: K8s Pods
- **Priority:** MUST KNOW
- **Tasks:** Understand that K8s schedules Pods, not containers. Write a `pod.yaml` and deploy an Nginx pod. Learn about sidecar containers.
- **Achievement:** Can define and deploy the atomic unit of Kubernetes computing.

#### Day 56: K8s Deployments & ReplicaSets
- **Priority:** MUST KNOW
- **Tasks:** Never deploy naked Pods! Write a `deployment.yaml`. Specify 3 replicas. Manually delete a pod and watch K8s instantly recreate it to maintain desired state.
- **Achievement:** Can deploy self-healing applications that survive node crashes automatically.

#### Day 57: K8s Services (Networking)
- **Priority:** MUST KNOW
- **Tasks:** Pods get new IPs when they die. Write a `service.yaml` (ClusterIP type) to provide a stable internal DNS name for your backend to reach your database.
- **Achievement:** Can network microservices together reliably despite constant container death.

#### Day 58: K8s External Access (NodePort & LoadBalancer)
- **Priority:** MUST KNOW
- **Tasks:** Expose your Deployment to the outside world. Change the Service type to `NodePort`, and then to `LoadBalancer` (which provisions a cloud ELB).
- **Achievement:** Can expose Kubernetes applications to internet traffic.

#### Day 59: K8s Ingress Controllers
- **Priority:** MUST KNOW
- **Tasks:** LoadBalancers are expensive (1 per service). Deploy an Nginx Ingress Controller. Write an `ingress.yaml` to route `/api` to the backend and `/` to the frontend using one IP.
- **Achievement:** Can drastically reduce cloud costs by consolidating web routing inside the cluster.

#### Day 60: K8s ConfigMaps & Secrets
- **Priority:** MUST KNOW
- **Tasks:** Extract configuration from your image. Write a `configmap.yaml` for environment variables and a `secret.yaml` (base64 encoded) for passwords. Inject them into the Pod.
- **Achievement:** Can manage application configurations natively without modifying Docker images.

#### Day 61: K8s Volumes & PersistentVolumeClaims (PVC)
- **Priority:** MUST KNOW
- **Tasks:** Run a Postgres database in K8s. Write a PVC to request a 10GB persistent disk from AWS EBS so the data survives Pod restarts.
- **Achievement:** Can run stateful applications reliably on stateless cluster nodes.

#### Day 62: K8s StatefulSets
- **Priority:** IMPORTANT
- **Tasks:** Understand why deploying databases using Deployments is dangerous. Study StatefulSets, sticky identity, and ordered deployment.
- **Achievement:** Can architect clustered databases (like Cassandra/Kafka) properly inside Kubernetes.

#### Day 63: K8s Namespaces & Resource Quotas
- **Priority:** MUST KNOW
- **Tasks:** Create `dev` and `prod` namespaces. Set CPU/Memory limits (`requests` and `limits`) on your Pods so one buggy app doesn't crash the entire Node.
- **Achievement:** Can safely host multiple distinct applications on a single shared cluster.

#### Day 64: Managed Kubernetes (AWS EKS)
- **Priority:** MUST KNOW
- **Tasks:** Stop using Minikube. Use Terraform or `eksctl` to provision a real Amazon Elastic Kubernetes Service (EKS) cluster. Connect your local `kubectl` to it.
- **Achievement:** Can deploy a production-grade K8s cluster on cloud infrastructure.

#### Day 65: Helm Package Manager
- **Priority:** MUST KNOW
- **Tasks:** Stop writing raw YAML. Install Helm. Browse ArtifactHub. Use `helm install` to deploy a massive system (like Jenkins or Redis Cluster) with one command.
- **Achievement:** Can utilize the open-source ecosystem to instantly deploy complex infrastructure.

#### Day 66: Creating Custom Helm Charts
- **Priority:** MUST KNOW
- **Tasks:** Run `helm create`. Parameterize your Deployment and Service YAMLs using Go templating. Deploy your app using `helm upgrade --install`.
- **Achievement:** Can package internal company applications for standardized, repeatable K8s deployments.

#### Day 67: ArgoCD & GitOps Implementation
- **Priority:** MUST KNOW
- **Tasks:** Install ArgoCD in your cluster. Point it at your Git repository containing Helm charts. Make a commit, and watch ArgoCD automatically sync the cluster state.
- **Achievement:** Can implement state-of-the-art, purely automated GitOps deployments.

#### Day 68: Observability Fundamentals
- **Priority:** MUST KNOW
- **Tasks:** Study the three pillars of observability: Metrics (is there a problem?), Logs (what is the problem?), and Traces (where is the problem?).
- **Achievement:** Can differentiate between basic monitoring and deep system observability.

#### Day 69: Prometheus Architecture
- **Priority:** MUST KNOW
- **Tasks:** Study how Prometheus works. Understand the pull-based model, time-series data, exporters, and PromQL (Prometheus Query Language).
- **Achievement:** Can explain the industry standard for cloud-native metrics collection.

#### Day 70: Deploying Prometheus & Grafana
- **Priority:** MUST KNOW
- **Tasks:** Use Helm to deploy the `kube-prometheus-stack` into EKS. Open Grafana and view the pre-built dashboards showing CPU and Memory usage across the cluster.
- **Achievement:** Can gain instant, beautiful visibility into massive infrastructure health.

#### Day 71: Custom Application Metrics
- **Priority:** MUST KNOW
- **Tasks:** Expose a `/metrics` endpoint in your Spring/Python app. Configure a Prometheus `ServiceMonitor` to scrape it. Build a Grafana dashboard for "Total API Requests".
- **Achievement:** Can monitor business-specific logic (like sales per minute) alongside hardware metrics.

#### Day 72: Alertmanager
- **Priority:** MUST KNOW
- **Tasks:** Configure Prometheus Alertmanager. Write a rule: "If CPU > 80% for 5 minutes, send a Slack message or trigger a PagerDuty incident."
- **Achievement:** Can automate incident response and wake up engineers only when critical failures occur.

#### Day 73: Centralized Logging (ELK / EFK Stack)
- **Priority:** MUST KNOW
- **Tasks:** Deploy Elasticsearch, Fluentd (or Filebeat), and Kibana. Configure Fluentd as a DaemonSet to automatically scrape all Pod logs and send them to Elasticsearch.
- **Achievement:** Can instantly search through logs across 100s of containers from a single UI.

#### Day 74: OpenTelemetry (OTel)
- **Priority:** MUST KNOW
- **Tasks:** Study the OpenTelemetry standard. Instrument a microservice to generate distributed traces. Deploy an OTel Collector to receive and forward them to Jaeger.
- **Achievement:** Can implement vendor-agnostic observability instrumentation.

#### Day 75: Service Mesh (Istio Fundamentals)
- **Priority:** IMPORTANT
- **Tasks:** Study what a Service Mesh is. Understand how injecting Envoy sidecar proxies enables mTLS (mutual TLS) and advanced routing without changing application code.
- **Achievement:** Can explain how massive enterprises secure and route microservice traffic internally.

#### Day 76: Phase 3 Capstone - Cluster Setup
- **Priority:** MUST KNOW
- **Tasks:** Provision an EKS Cluster via Terraform. Install ArgoCD, Ingress Controller, and the Prometheus stack via Helm.
- **Achievement:** Can build a pristine, automated Kubernetes foundation.

#### Day 77: Phase 3 Capstone - App Deployment
- **Priority:** MUST KNOW
- **Tasks:** Write a Helm chart for a 3-tier application. Push it to Git. Let ArgoCD deploy it. Prove the app is running, logging to EFK, and monitored by Grafana.
- **Achievement:** Can operate a complete, modern Cloud-Native ecosystem.

### MLOPS & AI INFRASTRUCTURE (Days 78–104)

#### Day 78: Introduction to MLOps
- **Priority:** MUST KNOW
- **Tasks:** Study the difference between DevOps and MLOps. Understand why tracking code versions is not enough—you must track Data versions and Model versions.
- **Achievement:** Can explain the massive operational complexity of deploying AI to production.

#### Day 79: Data Version Control (DVC)
- **Priority:** MUST KNOW
- **Tasks:** Stop pushing CSVs to Git! Use `dvc` to version a 5GB dataset, store the data in S3, and push only the lightweight `.dvc` pointer file to Git.
- **Achievement:** Can safely manage and collaborate on massive datasets without crashing GitHub.

#### Day 80: Experiment Tracking (Weights & Biases)
- **Priority:** MUST KNOW
- **Tasks:** Integrate W&B (or MLflow) into a PyTorch training script. Automatically log hyperparameters, loss curves, and validation accuracy to a cloud dashboard.
- **Achievement:** Can mathematically prove which model training run performed the best over time.

#### Day 81: Model Registry (MLflow)
- **Priority:** MUST KNOW
- **Tasks:** Set up an MLflow tracking server. Register a newly trained XGBoost model. Transition its state from "Staging" to "Production" via the UI or API.
- **Achievement:** Can maintain a single source of truth for all production-ready AI models.

#### Day 82: Automated Model Retraining
- **Priority:** MUST KNOW
- **Tasks:** Write a GitHub Actions pipeline that triggers when data changes in DVC: Downloads data, trains the model, evaluates it, and registers it to MLflow if accuracy > 90%.
- **Achievement:** Can automate the continuous learning cycle of an AI system.

#### Day 83: Model Serialization & Optimization
- **Priority:** MUST KNOW
- **Tasks:** Study Pickle vs Joblib vs Safetensors. Convert a PyTorch model to ONNX (Open Neural Network Exchange) format to decouple it from Python.
- **Achievement:** Can prepare a trained model for high-speed, cross-platform inference.

#### Day 84: High-Performance Model Serving
- **Priority:** MUST KNOW
- **Tasks:** Stop using basic Flask! Wrap your ONNX model using FastAPI, Ray Serve, or Nvidia Triton Inference Server to handle concurrent inference requests.
- **Achievement:** Can serve AI models with drastically reduced latency and higher throughput.

#### Day 85: Serving Models on Kubernetes
- **Priority:** MUST KNOW
- **Tasks:** Dockerize your model server. Deploy it to your EKS cluster. Configure a Horizontal Pod Autoscaler (HPA) to scale up pods when CPU usage spikes during inference.
- **Achievement:** Can architect AI APIs that handle massive viral traffic automatically.

#### Day 86: GPU Orchestration in K8s
- **Priority:** MUST KNOW
- **Tasks:** Study how to provision GPU-enabled EC2 nodes in EKS. Configure the Nvidia Device Plugin to allow K8s Pods to request `nvidia.com/gpu: 1`.
- **Achievement:** Can manage and allocate highly expensive AI hardware effectively in a cluster.

#### Day 87: vLLM for LLM Serving
- **Priority:** MUST KNOW
- **Tasks:** Deep dive into serving Large Language Models. Deploy an open-source model using vLLM. Understand PagedAttention and continuous batching.
- **Achievement:** Can serve 7B parameter models 10x faster than standard Hugging Face pipelines.

#### Day 88: Feature Stores (Feast)
- **Priority:** IMPORTANT
- **Tasks:** Study the concept of a Feature Store. Understand how it prevents training-serving skew by providing a unified repository for machine learning features.
- **Achievement:** Can architect data architectures that ensure models receive the exact same data formats in prod as they did in training.

#### Day 89: Data Drift & Concept Drift
- **Priority:** MUST KNOW
- **Tasks:** Study why models degrade over time. Understand Data Drift (inputs change) vs Concept Drift (the real-world relationship changes, e.g., inflation affecting housing prices).
- **Achievement:** Can identify exactly when and why an AI model needs to be retrained.

#### Day 90: Model Monitoring (Evidently AI)
- **Priority:** MUST KNOW
- **Tasks:** Deploy Evidently AI to monitor production inference data. Generate reports comparing the statistical distribution of yesterday's live data to the original training data.
- **Achievement:** Can automatically detect "silent failures" where a model is technically running, but predicting garbage.

#### Day 91: Shadow Deployments
- **Priority:** MUST KNOW
- **Tasks:** Deploy a new V2 model alongside V1. Route a copy of real user traffic to V2, but do not return V2's answers. Compare the outputs asynchronously.
- **Achievement:** Can safely test experimental AI models using real-world data with zero user risk.

#### Day 92: A/B Testing AI Models
- **Priority:** MUST KNOW
- **Tasks:** Route 10% of traffic to Model B. Track business metrics (e.g., click-through rate). Perform statistical significance testing to determine if Model B is actually better.
- **Achievement:** Can prove the ROI of a new AI model to business stakeholders.

#### Day 93: Apache Kafka for Streaming MLOps
- **Priority:** MUST KNOW
- **Tasks:** Set up a Kafka cluster. Stream user click data into a topic, process it in real-time, and feed it into a recommendation model for instant personalized updates.
- **Achievement:** Can build real-time, event-driven AI applications.

#### Day 94: Prompt Versioning & Management
- **Priority:** MUST KNOW
- **Tasks:** Set up a git-based or registry-based prompt management system (e.g. LangChain Hub or custom prompt registry). Implement semantic versioning for prompts and log variations.
- **Achievement:** Can track prompt templates independently of application code, ensuring zero-downtime prompt hot-fixes.

#### Day 95: AI Evaluation Pipelines & CI/CD
- **Priority:** MUST KNOW
- **Tasks:** Build a CI/CD pipeline that automatically evaluates prompts and model responses using LLM-as-a-judge frameworks. Reject deployment if semantic accuracy drops.
- **Achievement:** Can automate AI quality assurance during CI/CD to prevent regressions in user-facing model interfaces.

#### Day 96: Data Orchestration (Airflow/Prefect)
- **Priority:** MUST KNOW
- **Tasks:** Write a complex Directed Acyclic Graph (DAG) that coordinates data extraction, cleaning, DVC updating, and model training across multiple distributed systems.
- **Achievement:** Can reliably manage the tangled web of data engineering tasks required for AI.

#### Day 97: AI Security: Model Poisoning
- **Priority:** MUST KNOW
- **Tasks:** Study how attackers can inject malicious data into automated training pipelines to fundamentally compromise the resulting model.
- **Achievement:** Can secure MLOps pipelines against advanced adversarial attacks.

#### Day 98: Cost Optimization (Spot Instances)
- **Priority:** MUST KNOW
- **Tasks:** Configure your EKS node groups to use AWS Spot Instances for model training jobs, saving up to 90% on compute costs while handling interruptions gracefully.
- **Achievement:** Can dramatically reduce the massive cloud bills associated with AI engineering.

#### Day 99: Kubeflow Fundamentals
- **Priority:** IMPORTANT
- **Tasks:** Study Kubeflow, the machine learning toolkit for Kubernetes. Understand Pipelines, Katib (hyperparameter tuning), and KServe.
- **Achievement:** Can navigate the enterprise standard framework for Kubernetes-native MLOps.

#### Day 100: Phase 4 Capstone - MLOps Pipeline
- **Priority:** MUST KNOW
- **Tasks:** Combine DVC, MLflow, and GitHub Actions to create a fully automated pipeline that trains a model, versions it, and creates a Dockerized serving API.
- **Achievement:** Can build a production-grade CI/CD pipeline specifically designed for Machine Learning.

#### Day 101: Phase 4 Capstone - Deployment & Monitoring
- **Priority:** MUST KNOW
- **Tasks:** Deploy the serving API to EKS using ArgoCD. Set up Evidently AI to monitor the incoming inference requests and trigger a Slack alert if data drift occurs.
- **Achievement:** Can architect a self-monitoring, highly scalable AI deployment ecosystem.

#### Day 102: Interview Prep: CI/CD & Terraform
- **Priority:** MUST KNOW
- **Tasks:** Review state locking, GitOps vs CIOps, and the exact steps to securely manage cloud credentials in pipelines.
- **Achievement:** Ready to dominate the DevOps portion of an engineering interview.

#### Day 103: Interview Prep: Kubernetes
- **Priority:** MUST KNOW
- **Tasks:** Review Pod lifecycles, Ingress routing, PVCs, and how to troubleshoot a `CrashLoopBackOff`.
- **Achievement:** Ready to pass a rigorous infrastructure and systems interview.

#### Day 104: Interview Prep: MLOps
- **Priority:** MUST KNOW
- **Tasks:** Review data drift, model registry workflows, and the architectural differences between batch inference and real-time streaming inference.
- **Achievement:** Ready to ace an elite Machine Learning Engineering interview.

### THE FINAL MILE (Days 105–114)

#### Day 105: Portfolio Polish: Infrastructure
- **Priority:** MUST KNOW
- **Tasks:** Clean up your Terraform repository. Add a pristine README.md with architecture diagrams made in Excalidraw or draw.io.
- **Achievement:** Can present your infrastructure skills professionally to recruiters.

#### Day 106: Portfolio Polish: MLOps
- **Priority:** MUST KNOW
- **Tasks:** Document your MLOps pipeline project. Explain the exact drift metrics you chose and why. Highlight the GitOps deployment flow.
- **Achievement:** Can prove you understand the complete AI lifecycle, not just Jupyter Notebooks.

#### Day 107: System Design Mock: Scale
- **Priority:** MUST KNOW
- **Tasks:** Design a system that handles 1 million requests per second. Focus on Load Balancers, Redis caching, and Database Sharding.
- **Achievement:** Can confidently architect extreme-scale web applications.

#### Day 108: System Design Mock: Microservices
- **Priority:** MUST KNOW
- **Tasks:** Design an E-Commerce platform. Define the bounded contexts, Kafka event streams, and Saga patterns for distributed transactions.
- **Achievement:** Can navigate the complexities of distributed system architecture.

#### Day 109: System Design Mock: MLOps
- **Priority:** MUST KNOW
- **Tasks:** Design an automated retraining pipeline for a fraud detection model that ingests 5TB of streaming data daily.
- **Achievement:** Can architect massive, real-time AI data pipelines under pressure.

#### Day 110: Behavioral Prep (STAR Method)
- **Priority:** MUST KNOW
- **Tasks:** Prepare 5 stories using Situation, Task, Action, Result. Focus on "a time you failed," "resolving a conflict," and "learning a new tech rapidly."
- **Achievement:** Can pass the crucial cultural and behavioral fit interviews.

#### Day 111: Resume Review
- **Priority:** MUST KNOW
- **Tasks:** Ensure every bullet point includes metrics (e.g., "Reduced deployment time by 80% using GitHub Actions"). Remove basic tutorials.
- **Achievement:** Can craft a resume that bypasses ATS filters and impresses hiring managers.

#### Day 112: The Soft Skills of DevOps
- **Priority:** MUST KNOW
- **Tasks:** Study Site Reliability Engineering (SRE) culture. Understand Error Budgets, Service Level Objectives (SLOs), and Blameless Post-Mortems.
- **Achievement:** Can integrate seamlessly into elite engineering cultures.

#### Day 113: The Future of AI Infrastructure
- **Priority:** IMPORTANT
- **Tasks:** Read about the future of GPUs, specialized AI chips (TPUs/Groq), and the shifting landscape of foundational models.
- **Achievement:** Can hold high-level strategic conversations with senior technical leaders.

#### Day 114: Ultimate Graduation
- **Priority:** MUST KNOW
- **Tasks:** Reflect on mastering AWS, Kubernetes, Terraform, and MLOps. You have bridged the gap between code and reality.
- **Achievement:** You are now an Elite DevOps & MLOps Engineer.

## Java Core & Advanced (104 Days)

### JAVA BASICS & SYNTAX (Days 1–15)

#### Day 1: Introduction to Java & JVM Architecture
- **Priority:** MUST KNOW
- **Tasks:** Learn what makes Java "write once, run anywhere." Understand the relationship between JDK, JRE, and JVM. Learn the compile-to-bytecode-then-interpret/JIT model.
- **Achievement:** Can explain the journey of a .java file from source code to execution, naming each component involved.

#### Day 2: Variables, Data Types & Literals
- **Priority:** MUST KNOW
- **Tasks:** Study primitive types (byte, short, int, long, float, double, char, boolean) and their memory sizes. Learn literal notations (hex, octal, binary, underscore in numbers).
- **Achievement:** Can correctly choose the most memory-efficient primitive type for a given value range.

#### Day 3: Type Casting & Conversion
- **Priority:** MUST KNOW
- **Tasks:** Understand widening (implicit) vs narrowing (explicit) casting. Study overflow behavior when narrowing.
- **Achievement:** Can predict the output of tricky casting expressions involving overflow and precision loss.

#### Day 4: Operators in Java
- **Priority:** MUST KNOW
- **Tasks:** Cover arithmetic, relational, logical, bitwise, assignment, ternary, and the instanceof operator. Study operator precedence.
- **Achievement:** Can evaluate complex multi-operator expressions by hand, respecting precedence rules.

#### Day 5: Control Flow: if-else & switch
- **Priority:** MUST KNOW
- **Tasks:** Master if-else-if ladders. Learn classic switch-case with fall-through and the modern switch expression (Java 14+) with arrow syntax and yield.
- **Achievement:** Can rewrite a nested if-else chain as a clean switch expression.

#### Day 6: Loops: for, while, do-while
- **Priority:** MUST KNOW
- **Tasks:** Study all three loop types, the enhanced for-each loop, labeled breaks/continues, and infinite loop patterns.
- **Achievement:** Can choose the correct loop type for a given iteration scenario and use labeled breaks to exit nested loops cleanly.

#### Day 7: Arrays (1D & Multi-Dimensional)
- **Priority:** MUST KNOW
- **Tasks:** Learn array declaration, initialization, default values, and memory layout (contiguous block on heap). Study 2D/jagged arrays.
- **Achievement:** Can implement matrix operations using 2D arrays and explain why array access is O(1).

#### Day 8: Array Utility Methods (Arrays class)
- **Priority:** MUST KNOW
- **Tasks:** Study Arrays.sort(), Arrays.binarySearch(), Arrays.fill(), Arrays.copyOf(), and Arrays.equals().
- **Achievement:** Can use built-in utilities instead of hand-rolling common array operations.

#### Day 9: Methods: Declaration, Overloading
- **Priority:** MUST KNOW
- **Tasks:** Learn method signatures, return types, parameter passing (pass-by-value for primitives, pass-by-reference-value for objects). Study method overloading rules.
- **Achievement:** Can explain why Java is technically "pass-by-value" even for objects, using a clear example.

#### Day 10: Varargs & Recursion
- **Priority:** MUST KNOW
- **Tasks:** Study variable-length arguments (...). Deep dive into recursion: base case, recursive case, call stack visualization.
- **Achievement:** Can write a recursive function and manually trace its call stack to detect a missing base case.

#### Day 11: Strings: Basics & Immutability
- **Priority:** MUST KNOW
- **Tasks:** Learn why Strings are immutable in Java. Study the String Pool (intern pool) and new String() vs literal creation.
- **Achievement:** Can explain with a diagram why s1 == s2 may be true or false depending on creation method.

#### Day 12: StringBuilder & StringBuffer
- **Priority:** MUST KNOW
- **Tasks:** Understand why mutable string builders exist. Compare StringBuilder (non-thread-safe, fast) vs StringBuffer (thread-safe, synchronized).
- **Achievement:** Can refactor a string-concatenation-in-a-loop anti-pattern into an efficient StringBuilder-based solution.

#### Day 13: Wrapper Classes & Autoboxing
- **Priority:** MUST KNOW
- **Tasks:** Study Integer, Double, Boolean, etc. Understand autoboxing/unboxing and the Integer cache (-128 to 127).
- **Achievement:** Can explain the classic Integer i1 = 127; Integer i2 = 127; vs 200 comparison gotcha.

#### Day 14: Scanner, User Input & Basic I/O
- **Priority:** MUST KNOW
- **Tasks:** Learn to read console input using Scanner and BufferedReader. Compare their performance and use cases.
- **Achievement:** Can write a program that robustly reads mixed input types (int, String, double) from the console.

#### Day 15: Phase 1 Review: Mini Project
- **Priority:** MUST KNOW
- **Tasks:** Build a small console app (e.g., a basic calculator or grade calculator) using only Phase 1 concepts.
- **Achievement:** Can confidently write a complete, working Java program without an IDE's auto-complete.

### OBJECT-ORIENTED PROGRAMMING (Days 16–35)

#### Day 16: Classes & Objects Fundamentals
- **Priority:** MUST KNOW
- **Tasks:** Learn class structure, fields, methods, and object instantiation. Understand the this keyword and object references on the heap.
- **Achievement:** Can draw a memory diagram showing stack references pointing to heap objects.

#### Day 17: Constructors & Constructor Overloading
- **Priority:** MUST KNOW
- **Tasks:** Study default, parameterized, and copy constructors. Learn constructor chaining with this().
- **Achievement:** Can design a class with multiple constructors that avoid code duplication via chaining.

#### Day 18: The Four Pillars of OOP (Overview)
- **Priority:** MUST KNOW
- **Tasks:** Get a conceptual overview of Encapsulation, Abstraction, Inheritance, and Polymorphism before going deep on each.
- **Achievement:** Can give a one-sentence, interview-ready definition of each pillar with a real-world analogy.

#### Day 19: Encapsulation & Access Modifiers
- **Priority:** MUST KNOW
- **Tasks:** Study public, private, protected, and default (package-private) access. Learn getter/setter conventions and why encapsulation matters.
- **Achievement:** Can design a class that fully protects its internal state while exposing a clean public API.

#### Day 20: Static Keyword Deep Dive
- **Priority:** MUST KNOW
- **Tasks:** Understand static variables, static methods, static blocks, and static nested classes. Learn class-loading-time initialization order.
- **Achievement:** Can trace the exact execution order of static blocks, instance blocks, and constructors when an object is created.

#### Day 21: Inheritance Fundamentals
- **Priority:** MUST KNOW
- **Tasks:** Learn extends, the super keyword, and constructor chaining in inheritance hierarchies. Understand why Java doesn't support multiple class inheritance.
- **Achievement:** Can design a 3-level class hierarchy and explain the diamond problem Java avoids.

#### Day 22: Method Overriding & the @Override Annotation
- **Priority:** MUST KNOW
- **Tasks:** Study overriding rules (signature, access modifier widening, covariant return types). Compare overriding vs overloading directly.
- **Achievement:** Can list 5 rules that must be satisfied for valid method overriding.

#### Day 23: Polymorphism: Compile-Time vs Runtime
- **Priority:** MUST KNOW
- **Tasks:** Deep dive into static binding (overloading) vs dynamic binding (overriding). Study upcasting and downcasting with instanceof checks.
- **Achievement:** Can explain dynamic method dispatch and predict output of polymorphic method calls through a class hierarchy.

#### Day 24: Abstract Classes
- **Priority:** MUST KNOW
- **Tasks:** Learn abstract classes and abstract methods. Understand when a class must be declared abstract and constructor rules for abstract classes.
- **Achievement:** Can design an abstract base class that enforces a contract while sharing common implementation.

#### Day 25: Interfaces Deep Dive
- **Priority:** MUST KNOW
- **Tasks:** Study interface declaration, multiple interface implementation, and constant fields. Learn default and static methods in interfaces (Java 8+).
- **Achievement:** Can explain how default methods solve the "interface evolution" problem without breaking existing implementers.

#### Day 26: Abstract Class vs Interface
- **Priority:** MUST KNOW
- **Tasks:** Compare use cases directly: "is-a" vs "can-do" relationships, state vs pure contract, single vs multiple inheritance.
- **Achievement:** Can justify, in an interview setting, when to choose an abstract class over an interface and vice versa.

#### Day 27: Composition vs Inheritance
- **Priority:** MUST KNOW
- **Tasks:** Study "has-a" vs "is-a" relationships in depth. Learn the delegation pattern, and why Effective Java's "favor composition over inheritance" guideline exists. Study real Spring examples (a service class composing repository/utility dependencies rather than extending them).
- **Achievement:** Can refactor a fragile inheritance hierarchy into a composition-based design and explain, with a concrete example, why it's more maintainable.

#### Day 28: Immutability & Defensive Copying
- **Priority:** MUST KNOW
- **Tasks:** Learn how to design a fully immutable class (final fields, no setters, no mutator methods). Study defensive copying for mutable fields (arrays, Date, collections) in both constructors and getters. Understand why immutability matters for thread safety and for backend DTOs. Compare hand-rolled immutable classes vs Java records.
- **Achievement:** Can design an immutable class containing a mutable field (e.g., a List or Date) without leaking a reference to internal state.

#### Day 29: SOLID Principles in Java
- **Priority:** MUST KNOW
- **Tasks:** Study all five SOLID principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) with concrete Java code examples for each. Identify common SOLID violations in poorly designed code and how to fix them. Connect Dependency Inversion directly to how Spring's DI container works.
- **Achievement:** Can review a Java class that violates 2–3 SOLID principles and refactor it while explaining which principle each fix satisfies.

#### Day 30: Object Class Methods
- **Priority:** MUST KNOW
- **Tasks:** Study equals(), hashCode(), toString(), clone(), and getClass() from java.lang.Object. Learn the equals-hashCode contract.
- **Achievement:** Can correctly override equals() and hashCode() together for a custom class used in a HashMap.

#### Day 31: Object Cloning (Shallow vs Deep)
- **Priority:** MUST KNOW
- **Tasks:** Study the Cloneable interface, shallow copy vs deep copy, and copy constructors as an alternative to clone().
- **Achievement:** Can implement a deep clone for a class containing nested mutable objects.

#### Day 32: Inner Classes & Nested Classes
- **Priority:** MUST KNOW
- **Tasks:** Learn member inner classes, static nested classes, local classes, and anonymous inner classes. Understand the implicit outer-class reference.
- **Achievement:** Can choose the correct type of nested class for a given encapsulation scenario.

#### Day 33: Enums Deep Dive
- **Priority:** MUST KNOW
- **Tasks:** Study enums as type-safe constants, enums with fields/methods/constructors, and abstract methods inside enums.
- **Achievement:** Can design an enum that encapsulates behavior (e.g., a calculator operation enum with an abstract apply() method).

#### Day 34: Packages & Access Control
- **Priority:** MUST KNOW
- **Tasks:** Learn package declaration, imports (including static imports), and how packages relate to default access modifiers.
- **Achievement:** Can organize a multi-class project into a clean, logically separated package structure.

#### Day 35: Phase 2 Review: OOP Mini Project
- **Priority:** MUST KNOW
- **Tasks:** Design a small system (e.g., a Library Management or Shape Calculator) using inheritance, interfaces, composition, immutability, and SOLID principles together.
- **Achievement:** Can confidently model a real-world domain using all four OOP pillars plus composition and SOLID in a cohesive class design.

### COLLECTIONS, GENERICS & STRINGS (Days 36–55)

#### Day 36: Collections Framework Overview
- **Priority:** MUST KNOW
- **Tasks:** Study the Collection hierarchy: List, Set, Queue, Map interfaces and their relationship to Iterable and Collection.
- **Achievement:** Can draw the full Collections Framework hierarchy diagram from memory.

#### Day 37: ArrayList Deep Dive
- **Priority:** MUST KNOW
- **Tasks:** Study internal array-backed implementation, dynamic resizing (growth factor), and time complexity of get/add/remove.
- **Achievement:** Can explain why ArrayList.add() is amortized O(1) but remove(0) is O(n).

#### Day 38: LinkedList Deep Dive
- **Priority:** MUST KNOW
- **Tasks:** Study doubly-linked-list internal structure. Compare ArrayList vs LinkedList trade-offs for different access patterns.
- **Achievement:** Can recommend ArrayList or LinkedList based on whether a use case is read-heavy or insert/delete-heavy.

#### Day 39: Iterator & ListIterator
- **Priority:** MUST KNOW
- **Tasks:** Learn safe iteration and removal using Iterator. Understand ConcurrentModificationException and fail-fast behavior.
- **Achievement:** Can safely remove elements from a list while iterating, without triggering ConcurrentModificationException.

#### Day 40: HashSet & LinkedHashSet
- **Priority:** MUST KNOW
- **Tasks:** Study how HashSet uses hashCode()/equals() internally (backed by HashMap). Learn LinkedHashSet's insertion-order guarantee.
- **Achievement:** Can explain why a custom object needs a correct hashCode() override to work properly in a HashSet.

#### Day 41: TreeSet & Sorted Collections
- **Priority:** MUST KNOW
- **Tasks:** Study TreeSet's Red-Black tree backing, natural ordering via Comparable, and custom ordering via Comparator.
- **Achievement:** Can implement Comparable and a separate Comparator for the same class to support two different sort orders.

#### Day 42: HashMap Internals (Deep Dive)
- **Priority:** MUST KNOW
- **Tasks:** Study bucket array, hashing, collision handling (linked list → red-black tree conversion since Java 8), load factor, and resizing.
- **Achievement:** Can explain step-by-step what happens internally when put() is called and a hash collision occurs.

#### Day 43: Hashing Internals Deep Dive
- **Priority:** MUST KNOW
- **Tasks:** Go deeper than HashMap mechanics into hash function design itself. Study the hashCode() contract in detail (equal objects must have equal hash codes), collision resolution strategies (chaining vs open addressing — linear/quadratic probing, double hashing), and the mathematics behind load factor and rehashing thresholds. Study why String and Integer's hashCode() implementations are designed the way they are (distribution quality, avoiding clustering).
- **Achievement:** Can design a custom hashCode() for a multi-field class that minimizes collisions and explain the trade-off between a fast hash and a well-distributed hash.

#### Day 44: LinkedHashMap & TreeMap
- **Priority:** MUST KNOW
- **Tasks:** Learn LinkedHashMap's access-order mode (useful for LRU caches) and TreeMap's sorted-key navigation methods (firstKey, ceilingKey, etc.).
- **Achievement:** Can implement a basic LRU cache using LinkedHashMap's access-order feature.

#### Day 45: Map Iteration & Common Patterns
- **Priority:** MUST KNOW
- **Tasks:** Study entrySet(), keySet(), values() iteration, and Java 8 methods: computeIfAbsent, merge, getOrDefault, forEach.
- **Achievement:** Can refactor verbose null-check-heavy Map code into clean one-liners using modern Map methods.

#### Day 46: Queue, Deque & PriorityQueue
- **Priority:** MUST KNOW
- **Tasks:** Study FIFO Queue semantics, Deque as both stack and queue, and PriorityQueue's heap-based ordering.
- **Achievement:** Can use a PriorityQueue with a custom comparator to solve a "find K largest elements" problem.

#### Day 47: Stack & Algorithm Use Cases
- **Priority:** MUST KNOW
- **Tasks:** Study the Stack class (and Deque-as-stack preference). Practice classic use cases: balanced parentheses, expression evaluation.
- **Achievement:** Can solve a balanced-bracket-validation problem using a stack in under 10 minutes.

#### Day 48: Generics Fundamentals
- **Priority:** MUST KNOW
- **Tasks:** Learn why generics exist (compile-time type safety), generic classes, generic methods, and type erasure.
- **Achievement:** Can explain what "type erasure" means and why you can't do new T[] directly in Java.

#### Day 49: Generic Type Erasure — Full Deep Dive
- **Priority:** MUST KNOW
- **Tasks:** Go beyond the type erasure overview into bridge methods (generated by the compiler for overridden generic methods), raw types and their dangers, reflection's limitations when inspecting generic type parameters at runtime, heap pollution scenarios, and the purpose of @SafeVarargs.
- **Achievement:** Can explain, with a code example, why heap pollution occurs with varargs and generics, and how @SafeVarargs addresses it.

#### Day 50: Bounded Types & Wildcards
- **Priority:** MUST KNOW
- **Tasks:** Study bounded type parameters (<T extends Number>), and wildcards (? extends, ? super). Learn PECS (Producer Extends, Consumer Super).
- **Achievement:** Can correctly apply the PECS principle when designing a generic method that copies between collections.

#### Day 51: Comparable vs Comparator
- **Priority:** MUST KNOW
- **Tasks:** Deep dive into the differences, multi-field comparator chaining (thenComparing), and lambda-based comparators.
- **Achievement:** Can write a chained comparator that sorts objects by multiple fields in one line using Java 8 syntax.

#### Day 52: Collections Utility Class
- **Priority:** MUST KNOW
- **Tasks:** Study Collections.sort(), Collections.unmodifiableList(), Collections.synchronizedList(), and Collections.emptyList().
- **Achievement:** Can correctly make a collection read-only or thread-safe using built-in utility wrappers.

#### Day 53: String Internals: Pool & Memory
- **Priority:** MUST KNOW
- **Tasks:** Revisit String pool with the lens of intern(), memory implications of large numbers of string literals, and why Strings are good HashMap keys.
- **Achievement:** Can explain why caching immutable Strings is safe across multiple threads without synchronization.

#### Day 54: Regular Expressions in Java
- **Priority:** MUST KNOW
- **Tasks:** Learn Pattern and Matcher classes, common regex syntax, and String's built-in regex methods (matches, replaceAll, split).
- **Achievement:** Can write a regex to validate an email format and extract groups from a matched string.

#### Day 55: Phase 3 Review: Data Structures Project
- **Priority:** MUST KNOW
- **Tasks:** Build a small inventory or contact-management system using the right mix of List, Map, Set, and Generics.
- **Achievement:** Can justify every collection choice made in the project based on its access pattern requirements.

### EXCEPTION HANDLING, I/O, REFLECTION & ANNOTATIONS (Days 56–67)

#### Day 56: Exception Hierarchy & Basics
- **Priority:** MUST KNOW
- **Tasks:** Study the Throwable hierarchy: Error vs Exception, checked vs unchecked exceptions. Learn try-catch-finally mechanics.
- **Achievement:** Can correctly classify any given exception as checked or unchecked and explain why the distinction matters.

#### Day 57: Multi-Catch, Try-With-Resources
- **Priority:** MUST KNOW
- **Tasks:** Learn multi-catch blocks, the AutoCloseable interface, and try-with-resources for automatic resource cleanup.
- **Achievement:** Can convert a verbose finally-based resource-closing block into clean try-with-resources syntax.

#### Day 58: Custom Exceptions
- **Priority:** MUST KNOW
- **Tasks:** Learn to design meaningful custom checked and unchecked exceptions, including exception chaining (cause).
- **Achievement:** Can design a custom exception hierarchy for a domain (e.g., InsufficientFundsException for a banking app).

#### Day 59: Exception Best Practices
- **Priority:** MUST KNOW
- **Tasks:** Study anti-patterns: swallowing exceptions, catching generic Exception, and over-using checked exceptions. Learn fail-fast principles.
- **Achievement:** Can review and fix poorly-handled exception code in a code review setting.

#### Day 60: File I/O: java.io Basics
- **Priority:** MUST KNOW
- **Tasks:** Learn File, FileReader/FileWriter, BufferedReader/BufferedWriter, and byte streams vs character streams.
- **Achievement:** Can read and write a text file line-by-line using buffered streams efficiently.

#### Day 61: NIO.2 (java.nio.file)
- **Priority:** MUST KNOW
- **Tasks:** Study the modern Path, Files, and Paths APIs introduced in Java 7+. Compare with legacy java.io.
- **Achievement:** Can perform common file operations (copy, move, delete, walk a directory tree) using the NIO.2 API.

#### Day 62: Serialization & Deserialization
- **Priority:** MUST KNOW
- **Tasks:** Learn the Serializable interface, serialVersionUID, transient keyword, and the security risks of native Java serialization.
- **Achievement:** Can explain why transient fields are excluded and why deserialization of untrusted data is a security risk.

#### Day 63: Serialization Alternatives
- **Priority:** MUST KNOW
- **Tasks:** Study why native Java serialization is largely avoided in modern backend systems (versioning fragility, security risk, performance). Learn how JSON serialization works under the hood (Jackson's ObjectMapper mechanics — reflection + annotations), and get an overview of Protobuf (schema-defined binary serialization). Build a comparison table covering size, speed, schema evolution, and security for native serialization vs JSON vs Protobuf.
- **Achievement:** Can justify, in an interview setting, why a production Spring Boot API uses JSON (Jackson) instead of native Java serialization, and when Protobuf would be the better choice.

#### Day 64: Reflection API (Part 1)
- **Priority:** MUST KNOW
- **Tasks:** Learn the core reflection classes: Class, Method, Field, and Constructor. Study how to obtain a Class object (three ways), use getDeclaredFields()/getDeclaredMethods() to inspect a class at runtime, and invoke methods reflectively using Method.invoke().
- **Achievement:** Can write a small program that, given any object, prints out all its field names, types, and current values using only reflection.

#### Day 65: Reflection API (Part 2)
- **Priority:** MUST KNOW
- **Tasks:** Learn how to access and modify private fields/methods using setAccessible(true), and study the performance cost of reflection versus direct calls. Connect this directly to backend frameworks: study why Spring depends on reflection for bean instantiation, constructor/field injection resolution, and how @Autowired is satisfied behind the scenes.
- **Achievement:** Can explain, step by step, what Spring does with reflection between scanning a @Component-annotated class and having a fully wired bean ready in the ApplicationContext.

#### Day 66: Annotations Deep Dive (Part 1)
- **Priority:** MUST KNOW
- **Tasks:** Study Java's built-in annotations: @Override, @Deprecated, @FunctionalInterface, @SuppressWarnings, and @SafeVarargs. Learn the four key meta-annotations that control annotation behavior: @Retention (SOURCE/CLASS/RUNTIME), @Target, @Documented, and @Inherited.
- **Achievement:** Can explain why an annotation meant to be read by Spring at runtime (like @Service) must use @Retention(RUNTIME), while @Override does not need runtime retention.

#### Day 67: Annotations Deep Dive (Part 2)
- **Priority:** MUST KNOW
- **Tasks:** Design a custom annotation from scratch (e.g., a @LogExecutionTime annotation), including its meta-annotations. Get an overview of annotation processing (compile-time vs runtime processing). Study how Spring scans the classpath for annotations like @Component, @RestController, and @Service, and how that scanning result drives bean registration.
- **Achievement:** Can design and "read" (via reflection) a custom annotation end-to-end, explaining the full lifecycle from declaration to runtime inspection.

#### Day 67b: Phase 4 Review: Robust File Processor
- **Priority:** MUST KNOW
- **Tasks:** Build a small program that reads a file, processes records, and handles all failure modes (missing file, bad data) with proper exceptions.
- **Achievement:** Can build a program that never crashes ungracefully, regardless of malformed input.

### MULTITHREADING & CONCURRENCY (Days 68–86)

#### Day 68: Process vs Thread & Thread Basics
- **Priority:** MUST KNOW
- **Tasks:** Understand the difference between processes and threads. Learn the Thread class, Runnable interface, and thread lifecycle states.
- **Achievement:** Can draw and explain the full thread lifecycle diagram (New → Runnable → Running → Blocked/Waiting → Terminated).

#### Day 69: Creating Threads: Thread vs Runnable
- **Priority:** MUST KNOW
- **Tasks:** Compare extending Thread vs implementing Runnable. Learn why implementing Runnable is generally preferred.
- **Achievement:** Can explain why implementing Runnable allows for better design flexibility than extending Thread.

#### Day 70: Thread Synchronization Basics
- **Priority:** MUST KNOW
- **Tasks:** Study race conditions with a hands-on example (e.g., two threads incrementing a shared counter). Learn the synchronized keyword on methods and blocks.
- **Achievement:** Can reproduce a race condition in code, then fix it using synchronized.

#### Day 71: Intrinsic Locks & Monitor Concept
- **Priority:** MUST KNOW
- **Tasks:** Deep dive into how synchronized works using the object monitor concept. Study reentrant locking behavior.
- **Achievement:** Can explain why a thread holding a lock can re-enter another synchronized method on the same object without deadlocking itself.

#### Day 72: Deadlock, Livelock & Starvation
- **Priority:** MUST KNOW
- **Tasks:** Study the four conditions for deadlock. Reproduce a classic two-lock deadlock scenario and learn prevention strategies (lock ordering).
- **Achievement:** Can identify a deadlock-prone code pattern and redesign it using consistent lock ordering.

#### Day 73: volatile Keyword & Memory Visibility
- **Priority:** MUST KNOW
- **Tasks:** Study the Java Memory Model (JMM), CPU caching issues, and how volatile guarantees visibility (but not atomicity).
- **Achievement:** Can explain why volatile alone is insufficient for a counter increment but sufficient for a simple flag.

#### Day 74: Java Memory Model (JMM) Deep Dive
- **Priority:** MUST KNOW
- **Tasks:** Go far beyond the volatile-level intro. Study the happens-before relationship formally, visibility guarantees across threads, instruction/compiler reordering, and memory barriers. Connect this theory back to exactly how synchronized, volatile, and Lock implementations achieve their guarantees under the hood.
- **Achievement:** Can explain, using the happens-before relationship, why a non-volatile flag written by one thread might never be seen by another thread, even without a compiler bug.

#### Day 75: wait(), notify(), notifyAll()
- **Priority:** MUST KNOW
- **Tasks:** Learn low-level thread coordination using Object's wait/notify mechanism. Build a classic Producer-Consumer example.
- **Achievement:** Can implement a working Producer-Consumer pattern using wait() and notifyAll() from scratch.

#### Day 76: java.util.concurrent.atomic
- **Priority:** MUST KNOW
- **Tasks:** Study AtomicInteger, AtomicLong, and AtomicReference. Understand Compare-And-Swap (CAS) as a lock-free alternative.
- **Achievement:** Can replace a synchronized counter with an AtomicInteger and explain the underlying CAS performance benefit.

#### Day 77: Lock Interface & ReentrantLock
- **Priority:** MUST KNOW
- **Tasks:** Study the Lock interface, ReentrantLock, tryLock() with timeout, and fairness policies. Compare with synchronized.
- **Achievement:** Can justify when to choose ReentrantLock over synchronized (e.g., needing tryLock or interruptible locking).

#### Day 78: ReadWriteLock & StampedLock
- **Priority:** MUST KNOW
- **Tasks:** Learn ReentrantReadWriteLock for read-heavy/write-light scenarios, and an overview of StampedLock's optimistic reading.
- **Achievement:** Can design a thread-safe cache that allows many concurrent readers but exclusive writers.

#### Day 79: Executor Framework Basics
- **Priority:** MUST KNOW
- **Tasks:** Study ExecutorService, the Executors factory methods (fixed, cached, scheduled thread pools), and why raw thread creation should be avoided.
- **Achievement:** Can choose the correct thread pool type for a given workload (CPU-bound vs I/O-bound).

#### Day 80: Callable, Future & CompletableFuture
- **Priority:** MUST KNOW
- **Tasks:** Learn Callable for tasks with return values, Future for blocking retrieval, and CompletableFuture for non-blocking composition (thenApply, thenCombine).
- **Achievement:** Can chain multiple asynchronous operations together using CompletableFuture without blocking threads.

#### Day 81: ForkJoinPool
- **Priority:** MUST KNOW
- **Tasks:** Study the work-stealing algorithm that powers ForkJoinPool, and learn RecursiveTask (returns a value) vs RecursiveAction (no return value). Understand the direct relationship between ForkJoinPool and parallel streams' internal execution, and learn why ForkJoinPool is unsuitable for blocking I/O workloads.
- **Achievement:** Can explain why calling a blocking I/O operation inside a parallel stream can starve the common ForkJoinPool and degrade unrelated parts of an application.

#### Day 82: ThreadPoolExecutor Internals
- **Priority:** MUST KNOW
- **Tasks:** Study core pool size, max pool size, queue capacity, and rejection policies. Understand how a custom ThreadPoolExecutor is tuned.
- **Achievement:** Can configure a custom ThreadPoolExecutor with an appropriate queue and rejection policy for a bursty workload.

#### Day 83: Concurrent Collections
- **Priority:** MUST KNOW
- **Tasks:** Study ConcurrentHashMap internals (segment/bucket-level locking), CopyOnWriteArrayList, and BlockingQueue implementations.
- **Achievement:** Can explain why ConcurrentHashMap outperforms a synchronized HashMap under high contention.

#### Day 84: Concurrency Utilities: Latches, Barriers, Semaphores
- **Priority:** MUST KNOW
- **Tasks:** Learn CountDownLatch, CyclicBarrier, and Semaphore for coordinating groups of threads.
- **Achievement:** Can use CountDownLatch to make a main thread wait until several worker threads complete initialization.

#### Day 85: Structured Concurrency & Scoped Values (Java 21+)
- **Priority:** MUST KNOW
- **Tasks:** Learn the StructuredTaskScope API for treating a group of related concurrent subtasks as a single unit of work with a clear parent-child lifecycle and automatic cancellation propagation. Study ScopedValue as a safer, immutable alternative to ThreadLocal for passing context across virtual threads. Learn about virtual thread pinning issues (when a virtual thread gets stuck on a platform thread) and how Java 24 improves this.
- **Achievement:** Can rewrite a manually-coordinated multi-task CompletableFuture workflow using StructuredTaskScope and explain the cancellation/error-propagation benefit gained.

#### Day 86: Phase 5 Review: Concurrent Application
- **Priority:** MUST KNOW
- **Tasks:** Build a multi-threaded application (e.g., a parallel file processor or a thread-safe task queue) applying executors and concurrent collections together.
- **Achievement:** Can design and defend a complete concurrent system architecture, justifying every synchronization choice.

### JVM INTERNALS & MODERN JAVA (Days 87–104)

#### Day 87: JVM Architecture Deep Dive
- **Priority:** MUST KNOW
- **Tasks:** Study the Class Loader subsystem, Runtime Data Areas (Method Area, Heap, Stack, PC Registers, Native Stacks), and the Execution Engine.
- **Achievement:** Can draw the complete JVM architecture diagram and explain what lives in each memory area.

#### Day 88: Class Loading Mechanism
- **Priority:** MUST KNOW
- **Tasks:** Learn the three built-in class loaders (Bootstrap, Platform, Application) and the parent delegation model.
- **Achievement:** Can explain why parent delegation prevents core Java classes from being maliciously overridden.

#### Day 89: Heap Memory Structure
- **Priority:** MUST KNOW
- **Tasks:** Study Young Generation (Eden, Survivor spaces) and Old Generation. Understand object aging and promotion.
- **Achievement:** Can explain the journey of an object from creation in Eden to potential promotion into Old Gen.

#### Day 90: Garbage Collection Algorithms
- **Priority:** MUST KNOW
- **Tasks:** Study Mark-and-Sweep, Serial, Parallel, G1, and ZGC garbage collectors at a conceptual level. Learn stop-the-world pauses.
- **Achievement:** Can recommend an appropriate GC algorithm based on application latency vs throughput requirements.

#### Day 91: Memory Leaks & Common Pitfalls
- **Priority:** MUST KNOW
- **Tasks:** Study common Java memory leak patterns (static collections holding references, unclosed resources, listener leaks), and the role of WeakReference/SoftReference in preventing them.
- **Achievement:** Can identify a memory leak pattern in code and propose a fix using weak references or proper lifecycle management.

#### Day 92: JVM Profiling & Diagnostic Tools
- **Priority:** MUST KNOW
- **Tasks:** Learn the core JVM diagnostic toolkit: jstack for thread dumps, jmap for heap dumps, JVisualVM for live monitoring, and Java Mission Control (JMC) for production-grade profiling. Practice reading a thread dump to diagnose a deadlock, and a heap dump to identify a suspected memory leak.
- **Achievement:** Can take a thread dump from a hanging application, locate the two threads in a deadlock, and identify exactly which locks they're each waiting on.

#### Day 93: GC Tuning & JVM Performance Tuning
- **Priority:** MUST KNOW
- **Tasks:** Learn the core heap sizing flags (-Xms, -Xmx, -Xmn), how to enable and read GC logs, and the practical trade-off framework for choosing a GC algorithm based on whether an application prioritizes low pause latency or high throughput.
- **Achievement:** Can read a GC log excerpt, identify whether the application is suffering from frequent minor GCs or long major GC pauses, and recommend a tuning change.

#### Day 94: Lambda Expressions (Java 8)
- **Priority:** MUST KNOW
- **Tasks:** Learn lambda syntax, functional interfaces, and the @FunctionalInterface annotation. Study effectively-final variable capture.
- **Achievement:** Can convert an anonymous inner class implementation into a clean lambda expression.

#### Day 95: Functional Interfaces (java.util.function)
- **Priority:** MUST KNOW
- **Tasks:** Study Function, Predicate, Consumer, Supplier, BiFunction, and their primitive specializations.
- **Achievement:** Can select the correct built-in functional interface for a given method signature without writing a custom one.

#### Day 96: Streams API Fundamentals
- **Priority:** MUST KNOW
- **Tasks:** Learn stream creation, intermediate operations (map, filter, sorted), and terminal operations (collect, reduce, forEach). Understand laziness.
- **Achievement:** Can rewrite an imperative loop-based data transformation as a clean, readable stream pipeline.

#### Day 97: Streams: Collectors & Advanced Operations
- **Priority:** MUST KNOW
- **Tasks:** Study Collectors.groupingBy, partitioningBy, toMap, and joining. Learn parallel streams and when they actually help.
- **Achievement:** Can group a list of objects by a property and produce a summary Map using a single Collector pipeline.

#### Day 98: Optional Class
- **Priority:** MUST KNOW
- **Tasks:** Learn Optional as a null-safety tool. Study correct usage patterns (map, filter, orElseGet) and anti-patterns (calling get() without checking).
- **Achievement:** Can refactor null-check-riddled code into a clean Optional-based chain.

#### Day 99: Date & Time API (java.time)
- **Priority:** MUST KNOW
- **Tasks:** Study LocalDate, LocalDateTime, ZonedDateTime, Duration, and Period. Understand why this replaced legacy Date/Calendar.
- **Achievement:** Can correctly calculate the difference between two dates and handle time zone conversions.

#### Day 100: Java 9–17 Features
- **Priority:** MUST KNOW
- **Tasks:** Study modules (Java 9), var local type inference (Java 10), text blocks (Java 13+), and sealed classes (Java 17).
- **Achievement:** Can identify and use the appropriate modern syntax feature to simplify legacy-style code.

#### Day 101: Records & Pattern Matching (Java 14–21)
- **Priority:** MUST KNOW
- **Tasks:** Deep dive into records as concise immutable data carriers. Study pattern matching for instanceof and switch (Java 21).
- **Achievement:** Can convert a verbose POJO with boilerplate getters/equals/hashCode into a single-line record.

#### Day 102: Virtual Threads (Java 21)
- **Priority:** MUST KNOW
- **Tasks:** Learn Project Loom's virtual threads, how they differ from platform threads, and their impact on high-concurrency I/O-bound applications.
- **Achievement:** Can explain why virtual threads make the thread-per-request model viable again at massive scale.

#### Day 103: Java Interview Patterns & Tricky Outputs
- **Priority:** MUST KNOW
- **Tasks:** Review classic "predict the output" interview questions covering static initialization order, overloading ambiguity, and autoboxing edge cases.
- **Achievement:** Can correctly predict the output of 10+ classic tricky Java code snippets without running them.

#### Day 104: Final Review & Mock Interview
- **Priority:** MUST KNOW
- **Tasks:** Run a full mock technical interview covering OOP design, a collections-based coding problem, and a concurrency conceptual question.
- **Achievement:** Ready to confidently handle a Core + Advanced Java technical interview round.

## Master DSA Roadmap (179 Days)

