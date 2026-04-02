import { useState, useEffect } from "react";

const CATS = {
  backend: { label: "Backend Engineering", short: "Backend", icon: "BE", accent: "#2563eb", light: "#eff6ff", border: "#bfdbfe", textc: "#1d4ed8" },
  ai:      { label: "Artificial Intelligence", short: "AI / ML", icon: "AI", accent: "#7c3aed", light: "#f5f3ff", border: "#ddd6fe", textc: "#6d28d9" },
  prod:    { label: "Production AI Eng.", short: "Production", icon: "P", accent: "#059669", light: "#ecfdf5", border: "#a7f3d0", textc: "#047857" },
};

const ROADMAP = {
  backend: { sections: [
    { id:"s1", num:"01", title:"Programming & Foundations", tag:"Core Skills", items:[
      "Core Java: OOP, Collections, Streams, Concurrency, Exception Handling, Generics, Lambdas",
      "DSA: Arrays, LinkedLists, Stacks, Queues, Trees, Graphs, Heaps, HashMaps",
      "DSA: Sorting, Searching, Dynamic Programming, Recursion, Greedy, Backtracking",
      "SQL: Queries, Joins, Aggregations, Subqueries, Window Functions, CTEs",
      "Linux: Command line, File system, Permissions, Process management, Shell scripting",
      "Operating Systems: Processes, Threads, Memory management, Deadlocks, Scheduling",
      "Networking: TCP/IP, HTTP/HTTPS, DNS, Load balancing concepts, Proxies",
    ]},
    { id:"s2", num:"02", title:"Backend Frameworks & APIs", tag:"Application Dev", items:[
      "Maven: POM.xml, lifecycle, plugins, repositories, multi-module projects, dependency scopes",
      "Lombok: @Data, @Builder, @Slf4j, @NoArgsConstructor, @AllArgsConstructor, IDE setup",
      "Spring Boot: DI, IoC, Spring Data JPA, Spring Security, Spring MVC, AOP, Profiles",
      "RESTful API Design: Resource modeling, HTTP methods, Status codes, Versioning, HATEOAS",
      "Authentication: JWT, OAuth2 flows, GitHub/Google integration, RBAC, @PreAuthorize",
      "Validation & Error Handling: @Valid, @ControllerAdvice, Custom validators",
      "Pagination: Offset-based, Cursor-based, Spring Data Pageable",
      "Async Processing: CompletableFuture, @Async, Thread pools, Message queues basics",
    ]},
    { id:"s3", num:"03", title:"Databases & Storage", tag:"Data Layer", items:[
      "JDBC Fundamentals: DriverManager, Connection, PreparedStatement, Transaction management",
      "Spring JDBC Template: JdbcTemplate, RowMapper, Named parameters, Batch operations",
      "Spring Data JPA & Hibernate: Entity mapping, Relationships, Lazy vs Eager, N+1, Cache",
      "Relational DBs: Deep SQL, Indexing (B-tree, Hash), Query optimization, EXPLAIN, ACID",
      "NoSQL: MongoDB (document store), Redis (key-value, caching), When to use NoSQL",
      "Caching Concepts: Cache-aside, Write-through, Write-behind, TTL, LRU/LFU eviction",
      "Connection Pooling: HikariCP configuration and tuning",
    ]},
    { id:"s4", num:"04", title:"System Design", tag:"Architecture & Scale", items:[
      "Low-Level Design: SOLID principles, Design patterns (Factory, Singleton, Strategy, Observer)",
      "High-Level Design: Scalability, CAP theorem, Load balancing, Horizontal vs Vertical scaling",
      "Database Design: Sharding, Replication (Master-Slave, Multi-Master), Partitioning",
      "Cache Design: Multi-tier caching, Distributed caching, Cache warming",
      "API Design at Scale: Rate limiting, Circuit breakers, Bulkheads, Retry, Idempotency",
    ]},
    { id:"s5", num:"05", title:"Architecture Patterns", tag:"Modern Patterns", items:[
      "Monolith vs Microservices: Tradeoffs, Migration strategies, Domain-Driven Design basics",
      "Spring Cloud Gateway: Route config, Filters, Load balancing, Rate limiting",
      "Feign Client: Declarative HTTP clients, Inter-service communication, Error handling",
      "Service Discovery: Service registry, Health checks, Eureka/Consul concepts",
      "Circuit Breaker: Resilience4j (@CircuitBreaker, @Retry, @RateLimiter, @Bulkhead)",
      "Event-Driven Architecture: Event sourcing, CQRS, Kafka/RabbitMQ, Pub-Sub patterns",
      "Saga Pattern: Orchestration vs Choreography for distributed transactions",
    ]},
    { id:"s6", num:"06", title:"Development & Deployment", tag:"DevOps Essentials", items:[
      "Unit Testing: JUnit 5, Mockito (@Mock, @InjectMocks, verify()), MockMvc, TDD",
      "Integration Testing: @SpringBootTest, TestContainers, @WebMvcTest, @DataJpaTest",
      "Docker: Images, Containers, Dockerfile, Docker Compose, Multi-stage builds",
      "CI/CD: Jenkins/GitHub Actions, Build pipelines, Blue-Green & Canary deployments",
      "AWS: EC2, RDS, S3, IAM, CloudWatch — core services and concepts",
      "Logging & Monitoring: Structured logging, ELK basics, APM tools",
      "Git: GitFlow, Trunk-based development, Merge vs Rebase, Pull requests",
    ]},
  ]},
  ai: { sections: [
    { id:"s7", num:"07", title:"Core AI Foundations", tag:"Fundamentals", items:[
      "Python: NumPy, Pandas, Matplotlib, List comprehensions, Generators, Decorators",
      "Machine Learning: Supervised, Unsupervised, Feature engineering, Model evaluation, Overfitting",
      "Deep Learning: Neural networks, Backpropagation, Activation functions, Optimizers, Transfer learning",
      "NLP: Tokenization, TF-IDF, Word embeddings, Transformers architecture, Attention mechanism",
      "Computer Vision: Image preprocessing, CNNs, Object detection, ResNet, YOLO",
    ]},
    { id:"s8", num:"08", title:"Generative AI & LLMs", tag:"GenAI Era", items:[
      "GenAI Fundamentals: Generative vs Discriminative models, Diffusion models, GANs",
      "LLM Concepts: Tokens, Embeddings, Context windows, Hallucinations, Temperature, Top-p/k",
      "Prompt Engineering: System prompts, Zero-shot, Few-shot, Chain-of-Thought, Structured outputs",
      "OpenAI & Open-Source LLMs: GPT-4, Claude, Llama, Mistral, Gemini API integration",
      "RLHF: Reinforcement Learning from Human Feedback — conceptual understanding",
      "Fine-tuning: When to fine-tune vs prompt engineer, LoRA, QLoRA, PEFT methods",
      "Function Calling: JSON mode, Pydantic integration, Tool schemas, Parallel function calling",
    ]},
    { id:"s9", num:"09", title:"RAG & Knowledge Systems", tag:"Retrieval Augmented Gen.", items:[
      "RAG Architecture: Query understanding, Retrieval, Re-ranking, Generation, Evaluation",
      "Embeddings: Dense vs Sparse, Sentence transformers, OpenAI embeddings, Multilingual",
      "Vector Databases: FAISS, ChromaDB, Pinecone, Weaviate, Milvus, Qdrant, pgvector",
      "Chunking Strategies: Fixed-size, Semantic, Sliding window, Recursive character splitting",
      "Retrieval Strategies: Dense retrieval, Hybrid search, Metadata filtering, MMR, Re-ranking",
      "Advanced RAG: Multi-query, Query expansion, HyDE, RAPTOR, Graph RAG",
    ]},
    { id:"s10", num:"10", title:"Agentic AI & Orchestration", tag:"AI Agents & Workflows", items:[
      "Agentic AI Concepts: ReAct, Planning, Reasoning, Memory (short-term, long-term), Self-reflection",
      "LangChain/LangGraph: Chains, Agents, Tools, Memory systems, State graphs, Human-in-the-loop",
      "LlamaIndex: RAG framework, Data connectors, Query engines",
      "MCP (Model Context Protocol): Context management, Building MCP Servers, Cursor IDE",
      "Multi-Agent Workflows: Agent collaboration, Task delegation, Supervisor-worker patterns",
      "Agent Frameworks: LangGraph, AutoGPT, BabyAGI, CrewAI, OpenAI Agents SDK, Pydantic AI",
      "Memory Systems: Mem0/MemGPT, Zep (conversational memory)",
    ]},
    { id:"s11", num:"11", title:"AI Frameworks & Ecosystem", tag:"Tools & Libraries", items:[
      "Hugging Face: Model Hub, Transformers library, Tokenizers, Inference API, Datasets",
      "Model Serving with FastAPI: REST endpoints, Async inference, Request batching",
      "TensorFlow/PyTorch: Framework basics, Model training, ONNX for interoperability",
      "Ollama: Local LLM deployment and model management",
      "LiteLLM: Unified API for 100+ LLMs, Fallback strategies, Load balancing",
      "Quick Demo Interfaces: Gradio, Streamlit, Chainlit",
    ]},
    { id:"s12", num:"12", title:"MLOps & Production AI", tag:"Production Readiness", items:[
      "Model Lifecycle: Training, Validation, Deployment, Monitoring, Retraining triggers",
      "Experiment Tracking: MLflow, Weights & Biases (W&B), Hyperparameter logging, Model registry",
      "Versioning: Model versioning, Data versioning (DVC), Reproducibility",
      "Monitoring: Performance metrics, Data drift, Model drift, A/B testing, Shadow deployments",
      "Cost & Latency: Token optimization, Caching, Model quantization, Prompt compression",
      "Model Optimization: Quantization, Pruning, Distillation, ONNX Runtime, TensorRT",
      "Safety & Security: Content filtering, PII detection, Jailbreak prevention, Guardrails",
    ]},
    { id:"s13", num:"13", title:"Data & Automation", tag:"Data Engineering for AI", items:[
      "Big Data Fundamentals: Distributed computing, MapReduce, Apache Spark basics, Data lakes",
      "ETL Pipelines: Extract, Transform, Load, Data cleaning, Orchestration (Airflow)",
      "Streaming Concepts: Real-time data processing, Kafka basics, Stream processing",
      "n8n Workflow Automation: No-code/low-code automation, API integrations, Webhooks",
      "Data Quality: Validation, Profiling, Anomaly detection, Schema evolution",
      "Synthetic Data Generation: Faker/SDV, LLM-based generation, Distillation",
    ]},
  ]},
  prod: { sections: [
    { id:"s14", num:"14", title:"AI Observability & Debugging", tag:"Visibility & Troubleshooting", items:[
      "Langfuse: Open-source, Framework-agnostic, 50k events/month free",
      "LangSmith: LangChain native, Single environment variable setup",
      "Phoenix (Arize AI): LLM observability, Embeddings visualization, Drift detection",
      "PromptLayer/Helicone: LLM request logging, Analytics, Cost tracking",
      "AgentOps: Tracks 400+ LLMs, Cost optimization features",
      "Braintrust: Evals tied to CI/CD, High-performance trace search",
      "Weights & Biases Weave: Multi-agent system monitoring",
    ]},
    { id:"s15", num:"15", title:"AI API Design & Integration", tag:"Backend + AI Integration", items:[
      "Streaming Responses: Server-Sent Events (SSE), WebSocket, Chunked transfer encoding",
      "Webhook Patterns: Long-running job callbacks, Status updates, Result delivery",
      "Rate Limiting for AI: Token-based limits, Cost-aware throttling, User tier management",
      "Fallback Strategies: Model unavailable handling, Graceful degradation, Circuit breakers",
      "API Versioning: Prompt version management, Model version routing, Backward compatibility",
      "Async & Background Jobs: Celery/Redis, BullMQ, Job status tracking, Result caching",
    ]},
    { id:"s16", num:"16", title:"Evaluation & Quality Assurance", tag:"Testing & Validation", items:[
      "RAGAS: Faithfulness, Answer relevance, Context precision/recall",
      "DeepEval: Custom metrics, LLM-as-judge, Hallucination detection",
      "TruLens: Feedback functions, Ground truth comparison",
      "Evaluation Metrics: BLEU, ROUGE, BERTScore, Semantic similarity",
      "Human Evaluation: Annotation workflows, Inter-annotator agreement",
      "A/B Testing for AI: Prompt variants, Model comparison, Statistical significance",
    ]},
    { id:"s17", num:"17", title:"Token Economics & Cost Optimization", tag:"Cost-Aware Engineering", items:[
      "Token Counting: tiktoken library, Accurate cost estimation, Context window management",
      "Prompt Caching: System prompt reuse, Prefix caching, Context caching strategies",
      "Model Selection: Cost/performance tradeoffs, Task-appropriate model sizing",
      "Batch Processing: Batch API usage, Cost savings (50% off), Queue management",
      "Streaming vs Full Responses: Latency vs cost tradeoffs, User experience",
      "Cost Monitoring: Token usage tracking, Budget alerts, User-level cost attribution",
    ]},
    { id:"s18", num:"18", title:"AI Code Execution & Sandboxing", tag:"Agents That Write Code", items:[
      "Sandboxed Execution: E2B (isolated environments), Code interpreter patterns, Security",
      "Serverless Compute: Modal (AI-focused serverless), Lambda for inference",
      "Code Generation Safety: Input validation, Output sanitization, Execution timeouts",
      "Jupyter Integration: Dynamic notebook execution, Result visualization, Interactive agents",
    ]},
    { id:"s19", num:"19", title:"Development Tools & Productivity", tag:"Daily Workflow", items:[
      "AI-Assisted Coding: GitHub Copilot, Cursor AI, Tabnine, Code completion & generation",
      "API Testing: Postman collections, Environment variables, Pre-request scripts",
      "Notebook Environments: Jupyter, Google Colab, Kaggle notebooks",
      "Version Control for AI: Git LFS for model files, DVC for data versioning",
      "Documentation: Model cards, API documentation, Prompt libraries, Architecture diagrams",
    ]},
  ]},
};

const PROJECTS = [
  { id:"p1", num:"01", title:"E-Commerce Backend API", tier:"Tier 2", weeks:"4–6 wks", color:"#2563eb", bg:"#eff6ff", border:"#bfdbfe", stack:["Spring Boot","PostgreSQL","Redis","RabbitMQ","Stripe API"] },
  { id:"p2", num:"02", title:"Banking / Fintech Transaction System", tier:"Tier 3", weeks:"6–8 wks", color:"#dc2626", bg:"#fef2f2", border:"#fecaca", stack:["Spring Boot Microservices","PostgreSQL","Redis","Kafka","HashiCorp Vault"] },
  { id:"p3", num:"03", title:"Microservices Booking Platform", tier:"Tier 3", weeks:"8–10 wks", color:"#b45309", bg:"#fffbeb", border:"#fde68a", stack:["Spring Boot","Spring Cloud Gateway","Eureka","Kafka","Docker","K8s"] },
  { id:"p4", num:"04", title:"Production RAG System", tier:"Tier 3 · AI", weeks:"4–6 wks", color:"#7c3aed", bg:"#f5f3ff", border:"#ddd6fe", stack:["Python","LangChain","Qdrant","FastAPI","Langfuse","Docker"] },
  { id:"p5", num:"05", title:"AI SaaS Platform — Capstone", tier:"Tier 3 · Full-Stack", weeks:"10–12 wks", color:"#059669", bg:"#ecfdf5", border:"#a7f3d0", stack:["Spring Boot","Python/FastAPI","React","PostgreSQL","AWS","K8s"] },
];

const CAREER = [
  { role:"Junior Backend Engineer", years:"0–2 yrs", color:"#2563eb", focus:"Java, Spring Boot, SQL, REST APIs, Git, Docker basics" },
  { role:"Mid-Level Backend Engineer", years:"2–4 yrs", color:"#0284c7", focus:"System Design, Microservices, Caching, Message Queues, CI/CD, Performance" },
  { role:"Senior Backend Engineer", years:"4–6 yrs", color:"#7c3aed", focus:"Architecture decisions, Scalability, Mentoring, Technical leadership" },
  { role:"AI Engineer (transition)", years:"Mid-Level+", color:"#d97706", focus:"Python, ML, LLMs, RAG, Prompt engineering, AI integration with backends" },
  { role:"Senior AI Engineer / ML Architect", years:"Specialized", color:"#059669", focus:"Multi-agent architectures, AI strategy, End-to-end AI systems, Team leadership" },
];

const SK = "rmv3";
function load() { try { return JSON.parse(localStorage.getItem(SK))||{}; } catch { return {}; } }
function save(s) { try { localStorage.setItem(SK, JSON.stringify(s)); } catch {} }

function PBar({ pct, color, h=4 }) {
  return (
    <div style={{height:h,background:"#f1f5f9",borderRadius:99,overflow:"hidden",flexShrink:0}}>
      <div style={{height:"100%",width:`${pct}%`,background:color,borderRadius:99,transition:"width 0.3s"}}/>
    </div>
  );
}

function Donut({ pct, color, size=64 }) {
  const r=(size-10)/2, c=2*Math.PI*r;
  return (
    <svg width={size} height={size} style={{display:"block"}}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#f1f5f9" strokeWidth={5}/>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={5}
        strokeDasharray={c} strokeDashoffset={c-(pct/100)*c}
        strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`}
        style={{transition:"stroke-dashoffset 0.5s"}}/>
      <text x={size/2} y={size/2+5} textAnchor="middle" fill={color}
        fontSize={13} fontWeight="600" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">{pct}%</text>
    </svg>
  );
}

export default function App() {
  const [ck, setCk] = useState(load);
  const [op, setOp] = useState({});
  const [tab, setTab] = useState("backend");
  const [view, setView] = useState("roadmap");

  useEffect(()=>{ save(ck); },[ck]);

  const tog = k => setCk(s=>({...s,[k]:!s[k]}));
  const togSec = id => setOp(s=>({...s,[id]:!s[id]}));

  const sp = sec => {
    const total=sec.items.length, done=sec.items.filter((_,i)=>ck[`${sec.id}-${i}`]).length;
    return {done,total,pct:total?Math.round((done/total)*100):0};
  };
  const cp = key => {
    let done=0,total=0;
    ROADMAP[key].sections.forEach(s=>{const p=sp(s);done+=p.done;total+=p.total;});
    return {done,total,pct:total?Math.round((done/total)*100):0};
  };
  const ov = () => {
    let done=0,total=0;
    Object.keys(ROADMAP).forEach(k=>{const p=cp(k);done+=p.done;total+=p.total;});
    return {done,total,pct:total?Math.round((done/total)*100):0,proj:PROJECTS.filter(p=>ck[p.id]).length};
  };

  const O=ov(), cat=CATS[tab];

  return (
    <div style={{minHeight:"100vh",background:"#f8fafc",fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",fontSize:14,color:"#0f172a"}}>

      {/* ── HEADER ── */}
      <div style={{background:"#fff",borderBottom:"1px solid #e2e8f0",position:"sticky",top:0,zIndex:100}}>
        <div style={{maxWidth:880,margin:"0 auto",padding:"0 20px"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 0 10px",gap:12,flexWrap:"wrap"}}>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <div style={{width:34,height:34,background:"#0f172a",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:10,fontWeight:800,lineHeight:1.2,textAlign:"center"}}>BE<br/>AI</div>
              <div>
                <div style={{fontWeight:700,fontSize:15,letterSpacing:"-0.3px"}}>Backend + AI Roadmap</div>
                <div style={{fontSize:11,color:"#94a3b8",marginTop:1}}>Ultimate Edition · 2025+</div>
              </div>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <div style={{width:140,height:5,background:"#e2e8f0",borderRadius:99,overflow:"hidden"}}>
                <div style={{height:"100%",width:`${O.pct}%`,background:"linear-gradient(90deg,#2563eb,#7c3aed)",borderRadius:99,transition:"width 0.3s"}}/>
              </div>
              <span style={{fontSize:13,fontWeight:700,color:"#0f172a",minWidth:34}}>{O.pct}%</span>
            </div>
          </div>
          <div style={{display:"flex",borderTop:"1px solid #f1f5f9"}}>
            {[["roadmap","Roadmap"],["projects","Projects"],["overview","Overview"]].map(([v,l])=>(
              <button key={v} onClick={()=>setView(v)} style={{background:"none",border:"none",borderBottom:`2px solid ${view===v?"#0f172a":"transparent"}`,color:view===v?"#0f172a":"#64748b",cursor:"pointer",padding:"10px 18px",fontSize:13,fontWeight:view===v?600:400,transition:"all 0.15s"}}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{maxWidth:880,margin:"0 auto",padding:"24px 20px 60px"}}>

        {/* ══ ROADMAP VIEW ══ */}
        {view==="roadmap" && (
          <>
            {/* Category pills */}
            <div style={{display:"flex",gap:8,marginBottom:20,flexWrap:"wrap"}}>
              {Object.entries(CATS).map(([k,c])=>{
                const p=cp(k), active=tab===k;
                return (
                  <button key={k} onClick={()=>setTab(k)} style={{
                    display:"flex",alignItems:"center",gap:8,padding:"8px 16px",
                    background:active?c.accent:"#fff",
                    border:`1px solid ${active?c.accent:"#e2e8f0"}`,
                    borderRadius:8,cursor:"pointer",transition:"all 0.15s",
                    color:active?"#fff":"#374151",fontWeight:500,fontSize:13
                  }}>
                    <span style={{fontWeight:700,fontSize:11,opacity:0.85}}>{c.short}</span>
                    <span style={{fontSize:11,opacity:0.7}}>{p.done}/{p.total}</span>
                  </button>
                );
              })}
            </div>

            {/* Category progress header */}
            <div style={{background:"#fff",border:"1px solid #e2e8f0",borderRadius:12,padding:"16px 20px",marginBottom:12,display:"flex",alignItems:"center",gap:16}}>
              <div style={{width:42,height:42,borderRadius:10,background:cat.light,border:`1px solid ${cat.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:12,color:cat.accent,flexShrink:0}}>
                {cat.icon}
              </div>
              <div style={{flex:1}}>
                <div style={{fontWeight:700,fontSize:14,color:"#0f172a",marginBottom:7}}>{cat.label}</div>
                <PBar pct={cp(tab).pct} color={cat.accent} h={5}/>
              </div>
              <div style={{fontSize:24,fontWeight:800,color:cat.accent,letterSpacing:"-1px",flexShrink:0}}>{cp(tab).pct}%</div>
            </div>

            {/* Sections */}
            {ROADMAP[tab].sections.map(sec=>{
              const {done,total,pct}=sp(sec), isOpen=op[sec.id];
              return (
                <div key={sec.id} style={{background:"#fff",border:"1px solid #e2e8f0",borderRadius:10,marginBottom:8,overflow:"hidden",transition:"border-color 0.15s"}}>
                  <div onClick={()=>togSec(sec.id)} style={{display:"flex",alignItems:"center",gap:12,padding:"14px 16px",cursor:"pointer"}}>
                    <div style={{width:28,height:28,borderRadius:6,background:cat.light,color:cat.accent,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,flexShrink:0}}>
                      {sec.num}
                    </div>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:6,flexWrap:"wrap"}}>
                        <span style={{fontWeight:600,fontSize:14,color:"#0f172a"}}>{sec.title}</span>
                        <span style={{fontSize:11,color:cat.textc,background:cat.light,border:`1px solid ${cat.border}`,borderRadius:99,padding:"1px 8px",fontWeight:500,whiteSpace:"nowrap"}}>{sec.tag}</span>
                      </div>
                      <div style={{display:"flex",alignItems:"center",gap:8}}>
                        <div style={{flex:1}}><PBar pct={pct} color={cat.accent} h={3}/></div>
                        <span style={{fontSize:12,fontWeight:600,color:pct===100?cat.accent:"#94a3b8",minWidth:42,textAlign:"right",whiteSpace:"nowrap"}}>
                          {done}/{total}{pct===100?" ✓":""}
                        </span>
                      </div>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{flexShrink:0,transform:isOpen?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s",color:"#94a3b8"}}>
                      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {isOpen && (
                    <div style={{borderTop:"1px solid #f8fafc",paddingBottom:6}}>
                      {sec.items.map((item,i)=>{
                        const key=`${sec.id}-${i}`, on=!!ck[key];
                        return (
                          <div key={i} onClick={()=>tog(key)} style={{display:"flex",alignItems:"flex-start",gap:10,padding:"7px 16px 7px 20px",cursor:"pointer",transition:"background 0.1s"}}
                            onMouseEnter={e=>e.currentTarget.style.background="#f8fafc"}
                            onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                            <div style={{width:16,height:16,borderRadius:4,border:`1.5px solid ${on?cat.accent:"#cbd5e1"}`,background:on?cat.accent:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1,transition:"all 0.15s"}}>
                              {on && <svg width="9" height="7" viewBox="0 0 9 7" fill="none"><path d="M1 3.5l2.2 2.2L8 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                            </div>
                            <span style={{fontSize:13,color:on?"#94a3b8":"#374151",textDecoration:on?"line-through":"none",lineHeight:1.55}}>{item}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}

        {/* ══ PROJECTS VIEW ══ */}
        {view==="projects" && (
          <>
            <div style={{marginBottom:20}}>
              <div style={{fontWeight:700,fontSize:17,color:"#0f172a",marginBottom:4,letterSpacing:"-0.3px"}}>5 Essential Portfolio Projects</div>
              <div style={{fontSize:13,color:"#64748b"}}>These 5 projects cover 95% of the entire roadmap · 32–42 weeks total · Follow this order</div>
            </div>

            <div style={{position:"relative"}}>
              <div style={{position:"absolute",left:20,top:20,bottom:20,width:1,background:"#e2e8f0",zIndex:0}}/>
              {PROJECTS.map(proj=>{
                const done=!!ck[proj.id];
                return (
                  <div key={proj.id} style={{display:"flex",gap:16,marginBottom:12,position:"relative",zIndex:1}}>
                    <div style={{width:40,height:40,borderRadius:"50%",border:`2px solid ${done?"#059669":proj.border}`,background:done?"#ecfdf5":proj.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:done?"#059669":proj.color,flexShrink:0,transition:"all 0.2s"}}>
                      {done?"✓":proj.num}
                    </div>
                    <div style={{flex:1,background:"#fff",border:`1px solid ${done?proj.border:"#e2e8f0"}`,borderRadius:10,padding:"16px 18px",opacity:done?0.7:1,transition:"all 0.15s"}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12}}>
                        <div style={{flex:1,minWidth:0}}>
                          <div style={{fontWeight:700,fontSize:14,color:"#0f172a",marginBottom:6}}>{proj.title}</div>
                          <div style={{display:"flex",gap:6,marginBottom:10,flexWrap:"wrap"}}>
                            <span style={{display:"inline-flex",alignItems:"center",padding:"2px 10px",borderRadius:99,fontSize:11,fontWeight:500,color:proj.color,background:proj.bg,border:`1px solid ${proj.border}`}}>{proj.tier}</span>
                            <span style={{display:"inline-flex",alignItems:"center",padding:"2px 10px",borderRadius:99,fontSize:11,fontWeight:500,color:"#64748b",background:"#f8fafc",border:"1px solid #e2e8f0"}}>⏱ {proj.weeks}</span>
                          </div>
                          <div>{proj.stack.map(s=>(
                            <span key={s} style={{display:"inline-block",background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:5,padding:"2px 8px",fontSize:11,color:"#475569",margin:"2px"}}>{s}</span>
                          ))}</div>
                        </div>
                        <button onClick={()=>tog(proj.id)} style={{padding:"6px 14px",borderRadius:7,border:`1px solid ${done?"#059669":"#e2e8f0"}`,background:done?"#ecfdf5":"#fff",color:done?"#059669":"#64748b",fontSize:12,fontWeight:500,cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.15s"}}>
                          {done?"✓ Complete":"Mark done"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{background:"#fff",border:"1px solid #e2e8f0",borderRadius:10,padding:"18px 20px",marginTop:4}}>
              <div style={{fontWeight:600,fontSize:13,color:"#0f172a",marginBottom:12}}>Every project must have</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px 16px"}}>
                {["Live Demo URL (AWS/Heroku/Render)","GitHub Repo + comprehensive README","API Documentation (Swagger/Postman)","Architecture Diagram (draw.io/Mermaid)","Demo Video — 2–3 min Loom/YouTube","Test Coverage ≥70% (JUnit/pytest)","CI/CD Pipeline (GitHub Actions)","Docker Compose — one-command setup"].map(item=>(
                  <div key={item} style={{display:"flex",alignItems:"center",gap:7,fontSize:12,color:"#64748b"}}>
                    <div style={{width:6,height:6,borderRadius:"50%",background:"#059669",flexShrink:0}}/>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ══ OVERVIEW VIEW ══ */}
        {view==="overview" && (
          <>
            <div style={{marginBottom:20}}>
              <div style={{fontWeight:700,fontSize:17,color:"#0f172a",marginBottom:4,letterSpacing:"-0.3px"}}>Your Progress Overview</div>
              <div style={{fontSize:13,color:"#64748b"}}>Complete snapshot of your Backend + AI engineering journey</div>
            </div>

            {/* Hero stats */}
            <div style={{background:"#fff",border:"1px solid #e2e8f0",borderRadius:12,padding:"28px 24px",marginBottom:14}}>
              <div style={{display:"flex",justifyContent:"center",gap:40,flexWrap:"wrap",marginBottom:20}}>
                {[{v:`${O.pct}%`,l:"Overall complete",c:"#2563eb"},{v:O.done,l:"Topics done",c:"#7c3aed"},{v:`${O.proj}/5`,l:"Projects built",c:"#059669"}].map(s=>(
                  <div key={s.l} style={{textAlign:"center"}}>
                    <div style={{fontSize:36,fontWeight:800,color:s.c,letterSpacing:"-1.5px",lineHeight:1}}>{s.v}</div>
                    <div style={{fontSize:11,color:"#94a3b8",marginTop:5,fontWeight:500,textTransform:"uppercase",letterSpacing:"0.05em"}}>{s.l}</div>
                  </div>
                ))}
              </div>
              <div style={{maxWidth:440,margin:"0 auto"}}>
                <PBar pct={O.pct} color="#2563eb" h={6}/>
              </div>
            </div>

            {/* Per-category donuts */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:14}}>
              {Object.entries(CATS).map(([k,c])=>{
                const p=cp(k);
                return (
                  <div key={k} style={{background:"#fff",border:"1px solid #e2e8f0",borderRadius:10,padding:16,textAlign:"center"}}>
                    <div style={{display:"flex",justifyContent:"center",marginBottom:10}}><Donut pct={p.pct} color={c.accent} size={64}/></div>
                    <div style={{fontWeight:700,fontSize:12,color:"#0f172a"}}>{c.short}</div>
                    <div style={{fontSize:11,color:"#94a3b8",marginTop:3}}>{p.done} / {p.total} topics</div>
                  </div>
                );
              })}
            </div>

            {/* Section breakdown */}
            <div style={{background:"#fff",border:"1px solid #e2e8f0",borderRadius:10,padding:"18px 20px",marginBottom:12}}>
              <div style={{fontWeight:600,fontSize:13,color:"#0f172a",marginBottom:14}}>Section breakdown</div>
              {Object.entries(ROADMAP).map(([k,cat_])=>
                cat_.sections.map(sec=>{
                  const {done,total,pct}=sp(sec), c=CATS[k];
                  return (
                    <div key={sec.id} onClick={()=>{setTab(k);setView("roadmap");setOp(s=>({...s,[sec.id]:true}));}}
                      style={{display:"flex",alignItems:"center",gap:10,marginBottom:8,cursor:"pointer",padding:"3px 5px",borderRadius:6,transition:"background 0.1s"}}
                      onMouseEnter={e=>e.currentTarget.style.background="#f8fafc"}
                      onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                      <div style={{width:6,height:6,borderRadius:"50%",background:c.accent,flexShrink:0}}/>
                      <span style={{fontSize:12,color:"#64748b",width:190,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{sec.num}. {sec.title}</span>
                      <div style={{flex:1}}><PBar pct={pct} color={c.accent} h={3}/></div>
                      <span style={{fontSize:12,fontWeight:pct===100?600:400,color:pct===100?c.accent:"#94a3b8",minWidth:38,textAlign:"right"}}>{done}/{total}</span>
                    </div>
                  );
                })
              )}
            </div>

            {/* Career path */}
            <div style={{background:"#fff",border:"1px solid #e2e8f0",borderRadius:10,padding:"18px 20px"}}>
              <div style={{fontWeight:600,fontSize:13,color:"#0f172a",marginBottom:14}}>Career progression path</div>
              {CAREER.map((lvl,i)=>(
                <div key={i} style={{display:"flex",gap:12,marginBottom:i<CAREER.length-1?14:0,alignItems:"flex-start"}}>
                  <div style={{width:10,height:10,borderRadius:"50%",background:lvl.color,flexShrink:0,marginTop:4}}/>
                  <div>
                    <div style={{fontWeight:600,fontSize:13,color:"#0f172a",marginBottom:3}}>
                      {lvl.role} <span style={{fontWeight:400,fontSize:11,color:"#94a3b8"}}>· {lvl.years}</span>
                    </div>
                    <div style={{fontSize:12,color:"#64748b",lineHeight:1.5}}>{lvl.focus}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
