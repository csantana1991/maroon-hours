/* Generated from the four CSCE studio artifacts. Do not hand-edit casually. */
export type Band = "foundations" | "intelligence" | "systems" | "capstone";

export type Lecture = {
  title: string;
  topics: string[];
  lab?: string;
};

export type Course = {
  code: string;
  title: string;
  level: string;
  band: Band;
  description: string;
  prereqs: string;
  equivalents: string[];
  credits: number;
  aside?: string;
  lectures: Lecture[];
};

export const BANDS: { id: Band; volume: string; label: string; blurb: string }[] = [
  { id: "foundations", volume: "I", label: "603–630", blurb: "Systems, theory, and the bridge courses that make the rest legible." },
  { id: "intelligence", volume: "II", label: "631–647", blurb: "Agents, learning, language, graphics, and machines that perceive." },
  { id: "systems", volume: "III", label: "658–680", blurb: "Distributed systems, data, networks, and the people who use them." },
  { id: "capstone", volume: "IV", label: "Studios", blurb: "Algorithms, imaging, robotics, cryptography, and defense — the late sequence." },
];

export const COURSE_HOURS = { lecture: 24, reading: 36, lab: 48, total: 108 } as const;

export const courses: Course[] = [
  {
    "code": "603",
    "title": "Database Systems for Non-Majors",
    "level": "Bridge",
    "band": "foundations",
    "description": "Introduction to database concepts for students without CS background. Covers relational model, SQL, design, application development, and NoSQL. Emphasis on practical use in interdisciplinary domains.",
    "prereqs": "CSCE 121 or equivalent programming",
    "equivalents": [
      "MIT 6.5830/6.830 Database Systems",
      "Stanford CS145 Introduction to Databases",
      "CMU 15-445/645"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Introduction to Data-Driven Applications",
        "topics": [
          "Why data apps matter",
          "File vs DBMS",
          "Three-schema architecture"
        ]
      },
      {
        "title": "Relational Model & Algebra Foundations",
        "topics": [
          "Relations, tuples, domains",
          "Selection projection join",
          "Algebra equivalence"
        ]
      },
      {
        "title": "SQL Mastery - DDL, DML & Advanced Queries",
        "topics": [
          "SELECT deep dive",
          "Aggregation window functions",
          "CTEs recursive queries"
        ]
      },
      {
        "title": "Conceptual Design ER & Normalization Theory",
        "topics": [
          "ER modeling pitfalls",
          "FDs closure",
          "BCNF 3NF decomposition"
        ]
      },
      {
        "title": "Physical Design Indexing & Query Optimization",
        "topics": [
          "B+Tree Hash indexes",
          "Cost-based optimization",
          "EXPLAIN analysis"
        ]
      },
      {
        "title": "Transaction Management ACID & Recovery",
        "topics": [
          "Serializability",
          "2PL MVCC",
          "WAL ARIES recovery"
        ]
      },
      {
        "title": "Application Development ORMs & APIs",
        "topics": [
          "Connection pooling",
          "ORM impedance mismatch",
          "REST GraphQL"
        ]
      },
      {
        "title": "NoSQL Systems Document Graph Key-Value",
        "topics": [
          "CAP theorem",
          "Document modeling",
          "Graph traversal"
        ]
      },
      {
        "title": "Data Warehousing OLAP & ETL Pipelines",
        "topics": [
          "Star schema",
          "Slowly changing dimensions",
          "ETL idempotency"
        ]
      },
      {
        "title": "Security Access Control & Privacy by Design",
        "topics": [
          "RBAC ABAC",
          "SQL injection defense",
          "GDPR anonymization"
        ]
      },
      {
        "title": "Performance Tuning Benchmarking & Scaling",
        "topics": [
          "Workload characterization",
          "Index advisor",
          "Partition pruning"
        ]
      },
      {
        "title": "Web-Scale Deployment Replication Sharding",
        "topics": [
          "Primary-replica",
          "Consistent hashing",
          "Sharding strategies"
        ]
      },
      {
        "title": "Analytics & Visualization for Non-Majors",
        "topics": [
          "BI tooling",
          "Dashboard design",
          "Storytelling with data"
        ]
      },
      {
        "title": "Capstone Architecture Review",
        "topics": [
          "Requirements traceability",
          "Risk assessment",
          "Milestone planning"
        ]
      },
      {
        "title": "Final Project Portfolio Defense",
        "topics": [
          "Portfolio curation",
          "Demo script",
          "Reflection essay"
        ]
      }
    ]
  },
  {
    "code": "605",
    "title": "Compiler Design",
    "level": "Core",
    "band": "foundations",
    "description": "Theory and practice of compilers. Lexical analysis, parsing, semantic analysis, IR, optimization, code generation, runtime systems. Students build compiler for significant language subset.",
    "prereqs": "CSCE 314, 321, 221",
    "equivalents": [
      "MIT 6.035 Computer Language Engineering",
      "Stanford CS143 Compilers",
      "CMU 15-411 Compiler Design"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Compilers Overview - From Source to Executable",
        "topics": [
          "Phases of compiler",
          "Bootstrapping",
          "T-diagrams"
        ]
      },
      {
        "title": "Lexical Analysis Theory & Practice",
        "topics": [
          "Regex to NFA DFA",
          "Maximal munch",
          "Error recovery lexer"
        ]
      },
      {
        "title": "Syntax Analysis LL LR Parsing",
        "topics": [
          "CFG ambiguity",
          "First Follow sets",
          "LR conflicts"
        ]
      },
      {
        "title": "Semantic Analysis Types & Symbol Tables",
        "topics": [
          "Type systems",
          "Symbol table scopes",
          "Type inference"
        ]
      },
      {
        "title": "Intermediate Representations IR Design",
        "topics": [
          "Three-address code",
          "AST lowering",
          "Control flow graphs"
        ]
      },
      {
        "title": "Optimization I Dataflow Analysis",
        "topics": [
          "Reaching defs liveness",
          "Constant prop",
          "Dead code elim"
        ]
      },
      {
        "title": "Optimization II SSA & Loop Transforms",
        "topics": [
          "SSA construction",
          "Loop invariant hoisting",
          "Unrolling"
        ]
      },
      {
        "title": "Code Generation Instruction Selection",
        "topics": [
          "Tree pattern matching",
          "Peephole opt",
          "Calling conventions"
        ]
      },
      {
        "title": "Register Allocation Graph Coloring",
        "topics": [
          "Interference graph",
          "Spilling heuristics",
          "Linear scan"
        ]
      },
      {
        "title": "Runtime Systems GC & Exceptions",
        "topics": [
          "Mark-sweep",
          "Generational GC",
          "Exception tables"
        ]
      },
      {
        "title": "Advanced Topics JIT & Polyglot",
        "topics": [
          "Tracing JIT",
          "Deoptimization",
          "Inline caching"
        ]
      },
      {
        "title": "Frontends for Modern Languages",
        "topics": [
          "Ownership types",
          "Async desugaring",
          "Macro expansion"
        ]
      },
      {
        "title": "Verification of Compiler Passes",
        "topics": [
          "CompCert ideas",
          "Translation validation",
          "Fuzzing"
        ]
      },
      {
        "title": "Capstone - Build Mini-C Language",
        "topics": [
          "Language spec",
          "Test suite design",
          "Benchmarking"
        ]
      },
      {
        "title": "Final Portfolio & Optimization Shootout",
        "topics": [
          "Performance report",
          "Binary size analysis",
          "Lessons learned"
        ]
      }
    ]
  },
  {
    "code": "606",
    "title": "Software Engineering",
    "level": "Core",
    "band": "foundations",
    "description": "Advanced software engineering principles, lifecycle models, requirements, architecture, design patterns, testing, maintenance, project management, and teamwork at scale.",
    "prereqs": "CSCE 431",
    "equivalents": [
      "MIT 6.170 Software Studio",
      "Stanford CS210 Software Project Experience"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Lifecycle models that survive contact",
        "topics": [
          "Plan-driven vs iterative",
          "Risk-first spirals",
          "When a process is theater"
        ]
      },
      {
        "title": "Requirements you can test",
        "topics": [
          "User stories vs specs",
          "Non-functional requirements",
          "Traceability matrices"
        ]
      },
      {
        "title": "Architecture and design patterns at scale",
        "topics": [
          "Module boundaries",
          "Dependency direction",
          "ADR discipline"
        ]
      },
      {
        "title": "Testing as a design activity",
        "topics": [
          "Unit, contract, system",
          "Mutation testing",
          "CI that fails closed"
        ]
      },
      {
        "title": "Maintenance and technical debt",
        "topics": [
          "Debt as interest",
          "Refactor triggers",
          "Deprecation plans"
        ]
      },
      {
        "title": "Teams, estimation, and delivery",
        "topics": [
          "Forecasts not promises",
          "Code review culture",
          "Incident learning"
        ]
      },
      {
        "title": "Human factors in engineering orgs",
        "topics": [
          "On-call load",
          "Documentation as interface",
          "Handoffs"
        ]
      },
      {
        "title": "Capstone: ship a maintained system",
        "topics": [
          "Release checklist",
          "Ops runbook",
          "Postmortem of your own plan"
        ]
      }
    ]
  },
  {
    "code": "608",
    "title": "Database Systems",
    "level": "Core",
    "band": "foundations",
    "description": "Advanced database systems including storage, indexing, query processing, optimization, transactions, recovery, distributed and parallel databases, modern architectures.",
    "prereqs": "CSCE 310, 603",
    "equivalents": [
      "MIT 6.5830 Advanced DB",
      "CMU 15-721 Advanced DB",
      "Stanford CS346"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "DB Systems Architecture Deep Dive",
        "topics": [
          "Process vs thread model",
          "Buffer pool",
          "WAL design"
        ]
      },
      {
        "title": "Storage Engines - Row vs Columnar",
        "topics": [
          "Slotted pages",
          "LSM trees",
          "Columnar compression"
        ]
      },
      {
        "title": "Index Structures Beyond B-Tree",
        "topics": [
          "Bw-Trees",
          "LSM bloom filters",
          "Fractal trees"
        ]
      },
      {
        "title": "Query Execution Volcano Model",
        "topics": [
          "Iterator model",
          "Materialization",
          "Parallel execution"
        ]
      },
      {
        "title": "Query Optimization - Cascades Framework",
        "topics": [
          "Selinger optimizer",
          "Cost models",
          "Cardinality est"
        ]
      },
      {
        "title": "Concurrency Control Serializability Theory",
        "topics": [
          "Conflict serializability",
          "SSI",
          "Deterministic DBs"
        ]
      },
      {
        "title": "Distributed Transactions 2PC 3PC",
        "topics": [
          "Atomic commit",
          "Byzantine generals",
          "Saga pattern"
        ]
      },
      {
        "title": "Recovery ARIES in Depth",
        "topics": [
          "Steal/no-force",
          "Physiological logging",
          "Checkpointing"
        ]
      },
      {
        "title": "Distributed DBs Spanner & Calvin",
        "topics": [
          "TrueTime",
          " Calvin deterministic",
          "CRDTs"
        ]
      },
      {
        "title": "Modern OLTP - H-Store MemSQL",
        "topics": [
          "Anti-caching",
          "Stored procedures",
          "Partitioning"
        ]
      },
      {
        "title": "Analytical Systems - Vectorization",
        "topics": [
          "SIMD vectorization",
          "Late materialization",
          "Codegen"
        ]
      },
      {
        "title": "Security & Provenance",
        "topics": [
          "Row-level security",
          "Data lineage",
          "Auditing"
        ]
      },
      {
        "title": "NewSQL & HTAP Design",
        "topics": [
          "TiDB Cockroach",
          "HTAP tradeoffs",
          "Isolation levels"
        ]
      },
      {
        "title": "Research Frontiers - Learned Indexes",
        "topics": [
          "Learned indexes",
          "AI4DB",
          "Disaggregated storage"
        ]
      },
      {
        "title": "Capstone System Build & TPC-C",
        "topics": [
          "TPC-C workload",
          "System tuning",
          "Paper critique"
        ]
      }
    ]
  },
  {
    "code": "611",
    "title": "Operating Systems",
    "level": "Core",
    "band": "foundations",
    "description": "Advanced OS principles, processes, threads, scheduling, synchronization, virtual memory, file systems, I/O, multiprocessors, virtualization, security, case studies of Linux/Windows.",
    "prereqs": "CSCE 410",
    "equivalents": [
      "MIT 6.S081 / 6.828 OS Engineering",
      "MIT 6.824 Distributed Systems",
      "Stanford CS140E"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Operating Systems - Abstractions & Mechanisms",
        "topics": [
          "Dual mode",
          "System calls",
          "Monolithic vs microkernel"
        ]
      },
      {
        "title": "Processes & Threads - Life Cycle",
        "topics": [
          "PCB",
          "Context switch",
          "Thread vs process"
        ]
      },
      {
        "title": "Scheduling - From FIFO to CFS",
        "topics": [
          "Convoy effect",
          "MLFQ",
          "Linux CFS vruntime"
        ]
      },
      {
        "title": "Virtual Memory Paging & Swapping",
        "topics": [
          "TLB shootdown",
          "Demand paging",
          "Swap thrashing"
        ]
      },
      {
        "title": "Synchronization - Locks Semaphores Monitors",
        "topics": [
          "Race conditions",
          "Peterson's",
          "Futex"
        ]
      },
      {
        "title": "File Systems - FFS LFS ext4",
        "topics": [
          "Inodes",
          "Directory structures",
          "Allocation policies"
        ]
      },
      {
        "title": "Crash Consistency Journaling & COW",
        "topics": [
          "FSCK",
          "Journaling modes",
          "Copy-on-write"
        ]
      },
      {
        "title": "I/O & Device Drivers",
        "topics": [
          "Interrupt handling",
          "DMA",
          "Driver models"
        ]
      },
      {
        "title": "Multiprocessor OS - Cache Coherence",
        "topics": [
          "MESI protocol",
          "Lock scalability",
          "RCU"
        ]
      },
      {
        "title": "Virtualization & Containers",
        "topics": [
          "Trap-and-emulate",
          "Namespaces cgroups",
          "Unikernels"
        ]
      },
      {
        "title": "Security Capabilities & Isolation",
        "topics": [
          "ACL vs caps",
          "SMACK AppArmor",
          "Side channels"
        ]
      },
      {
        "title": "Distributed OS Concepts",
        "topics": [
          "Lamport clocks",
          "Consensus",
          "Distributed FS"
        ]
      },
      {
        "title": "Kernel Programming Lab",
        "topics": [
          "Kernel module",
          "Lockdep",
          "KASAN"
        ]
      },
      {
        "title": "Performance Debugging eBPF",
        "topics": [
          "Perf ftrace",
          "eBPF programs",
          "Flame graphs"
        ]
      },
      {
        "title": "Final Kernel Project Portfolio",
        "topics": [
          "Project retrospective",
          "Upstream contribution",
          "Design doc"
        ]
      }
    ]
  },
  {
    "code": "612",
    "title": "Computer Networks",
    "level": "Core",
    "band": "foundations",
    "description": "Principles of computer networks, layered architecture, transport, routing, link layer, wireless, security, congestion control, SDN, measurement, and emerging paradigms.",
    "prereqs": "CSCE 463 or 410",
    "equivalents": [
      "MIT 6.829 Computer Networks",
      "Stanford CS144 Intro to Networking",
      "Stanford CS244 Advanced Networks"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Layering and the end-to-end argument",
        "topics": [
          "Hourglass model",
          "Encapsulation",
          "Where to put reliability"
        ]
      },
      {
        "title": "Links, frames, and shared media",
        "topics": [
          "Ethernet switching",
          "Wireless MAC",
          "Error detection"
        ]
      },
      {
        "title": "IP forwarding and addressing",
        "topics": [
          "Longest prefix match",
          "Subnetting",
          "ICMP as a tool"
        ]
      },
      {
        "title": "Intra-domain routing",
        "topics": [
          "Link state",
          "Distance vector",
          "Convergence failures"
        ]
      },
      {
        "title": "BGP and policy routing",
        "topics": [
          "AS paths",
          "Local preference",
          "Route leaks"
        ]
      },
      {
        "title": "Transport: reliability and congestion",
        "topics": [
          "TCP state machine",
          "AIMD",
          "Bufferbloat"
        ]
      },
      {
        "title": "Names, the web, and QUIC",
        "topics": [
          "DNS resolution",
          "HTTP/3",
          "TLS placement"
        ]
      },
      {
        "title": "Measurement, SDN, and security",
        "topics": [
          "Active vs passive",
          "Control/data split",
          "DDoS economics"
        ]
      }
    ]
  },
  {
    "code": "614",
    "title": "Computer Architecture",
    "level": "Core",
    "band": "foundations",
    "description": "Advanced computer architecture, ISA, pipelining, superscalar, OoO, speculation, memory hierarchy, coherence, interconnection, vector/GPU, warehouse-scale, power.",
    "prereqs": "CSCE 321, 350",
    "equivalents": [
      "MIT 6.823 Computer System Architecture",
      "Stanford EE282 / CS316",
      "CMU 15-740"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Computer Architecture - From Transistors to Systems",
        "topics": [
          "Abstraction layers",
          "Technology scaling",
          "Metrics IPC"
        ]
      },
      {
        "title": "ISA Design - RISC vs CISC Philosophy",
        "topics": [
          "Instruction formats",
          "Addressing modes",
          "RISC principles"
        ]
      },
      {
        "title": "Pipelining Hazards & Forwarding",
        "topics": [
          "Data hazards",
          "Control hazards",
          "Bypassing"
        ]
      },
      {
        "title": "Superscalar & Out-of-Order Execution",
        "topics": [
          "Tomasulo algorithm",
          "Reorder buffer",
          "Load-store queue"
        ]
      },
      {
        "title": "Memory Hierarchy - Caches Demystified",
        "topics": [
          "3Cs model",
          "Prefetching",
          "Non-blocking caches"
        ]
      },
      {
        "title": "Virtual Memory & TLB Coherence",
        "topics": [
          "Page walk",
          "TLB shootdown",
          "Memory consistency"
        ]
      },
      {
        "title": "Multicore & Cache Coherence MESI",
        "topics": [
          "Snooping vs directory",
          "False sharing",
          "Memory models"
        ]
      },
      {
        "title": "Interconnection Networks Topologies",
        "topics": [
          "Mesh torus",
          "Routing deadlock",
          "Flow control"
        ]
      },
      {
        "title": "Vector & GPU Architectures",
        "topics": [
          "SIMT execution",
          "Coalescing",
          "Tensor cores"
        ]
      },
      {
        "title": "Speculation - Branch Prediction & SMT",
        "topics": [
          "Two-level predictors",
          "TAGE",
          "SMT fetch policy"
        ]
      },
      {
        "title": "Power Thermal & Dark Silicon",
        "topics": [
          "DVFS",
          "Power gating",
          "Thermal throttling"
        ]
      },
      {
        "title": "Dependability ECC & Redundancy",
        "topics": [
          "Fault models",
          "ECC codes",
          "Checkpoint restart"
        ]
      },
      {
        "title": "Warehouse-Scale Computing",
        "topics": [
          "TCO analysis",
          "Disaggregation",
          "Tail latency"
        ]
      },
      {
        "title": "RISC-V Custom Extensions Lab",
        "topics": [
          "RISC-V encoding",
          "RoCC accelerator",
          "Chisel HDL"
        ]
      },
      {
        "title": "Capstone - Build 5-stage Core Portfolio",
        "topics": [
          "Verification plan",
          "FPGA bringup",
          "Perf counters"
        ]
      }
    ]
  },
  {
    "code": "616",
    "title": "Hardware Verification",
    "level": "Core",
    "band": "foundations",
    "description": "Formal methods for hardware verification, model checking, theorem proving, equivalence checking, temporal logic, SAT/SMT, UVM, coverage, security verification.",
    "prereqs": "CSCE 321, 614",
    "equivalents": [
      "MIT 6.175 Constructive Hardware",
      "Stanford CS357 Formal Verification"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Why hardware needs proof",
        "topics": [
          "Spec vs implementation",
          "Bug cost after tapeout",
          "Verification plan"
        ]
      },
      {
        "title": "Assertions and temporal logic",
        "topics": [
          "Safety vs liveness",
          "LTL patterns",
          "SVA sketches"
        ]
      },
      {
        "title": "Model checking",
        "topics": [
          "State explosion",
          "BDDs and SAT",
          "Bounded model checking"
        ]
      },
      {
        "title": "Equivalence and SAT/SMT",
        "topics": [
          "Miter circuits",
          "Solver limits",
          "Counterexamples"
        ]
      },
      {
        "title": "Theorem proving for RTL",
        "topics": [
          "Invariants",
          "Inductive proofs",
          "When to stop modeling"
        ]
      },
      {
        "title": "UVM, coverage, and simulation",
        "topics": [
          "Constrained random",
          "Functional coverage",
          "Coverage holes"
        ]
      },
      {
        "title": "Security verification",
        "topics": [
          "Information flow",
          "Side channels",
          "Trusted boundaries"
        ]
      },
      {
        "title": "Capstone: verify a small core",
        "topics": [
          "Properties list",
          "Bug injection",
          "Signoff argument"
        ]
      }
    ]
  },
  {
    "code": "620",
    "title": "Computational Geometry",
    "level": "Core",
    "band": "foundations",
    "description": "Algorithms for geometric problems, convex hulls, intersection, triangulation, Voronoi, range searching, arrangements, motion planning, robustness.",
    "prereqs": "CSCE 221, 629",
    "equivalents": [
      "MIT 6.850 Geometric Computing",
      "Stanford CS268 Geometric Algorithms"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Geometry as algorithms",
        "topics": [
          "Predicates",
          "Orientation tests",
          "Robustness"
        ]
      },
      {
        "title": "Convex hulls",
        "topics": [
          "Graham and Jarvis",
          "Output-sensitive bounds",
          "Degeneracy"
        ]
      },
      {
        "title": "Line segment intersection",
        "topics": [
          "Sweep lines",
          "Event queues",
          "Map overlays"
        ]
      },
      {
        "title": "Polygon triangulation",
        "topics": [
          "Monotone polygons",
          "Ear clipping limits",
          "Art galleries"
        ]
      },
      {
        "title": "Voronoi and Delaunay",
        "topics": [
          "Duality",
          "Fortune's sweep",
          "Nearest neighbors"
        ]
      },
      {
        "title": "Range searching",
        "topics": [
          "kd-trees",
          "Range trees",
          "Fractional cascading"
        ]
      },
      {
        "title": "Arrangements and motion planning",
        "topics": [
          "Configuration space",
          "Roadmaps",
          "Collision"
        ]
      },
      {
        "title": "Robust implementation",
        "topics": [
          "Exact arithmetic",
          "Floating filters",
          "A library you trust"
        ]
      }
    ]
  },
  {
    "code": "624",
    "title": "Sketch Recognition",
    "level": "Core",
    "band": "foundations",
    "description": "Pen-based computing, sketch recognition algorithms, feature extraction, machine learning for gestures, multimodal interfaces, cognitive aspects, applications.",
    "prereqs": "CSCE 315 or consent",
    "equivalents": [
      "TAMU Sketch Recognition Lab",
      "CMU HCII Pen Computing"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Pen input as a time series",
        "topics": [
          "(x, y, pressure)",
          "Sampling rate",
          "Why mice are not pens"
        ]
      },
      {
        "title": "Feature extraction from strokes",
        "topics": [
          "Curvature",
          "Corners",
          "Normalization"
        ]
      },
      {
        "title": "Geometric recognizers",
        "topics": [
          "$1 and $P",
          "Templates",
          "Rotation invariance"
        ]
      },
      {
        "title": "Machine learning for gestures",
        "topics": [
          "HMMs on strokes",
          "Small-data classifiers",
          "User-dependent models"
        ]
      },
      {
        "title": "Sketch parsing",
        "topics": [
          "Symbols vs relations",
          "Spatial grammars",
          "Diagram repair"
        ]
      },
      {
        "title": "Multimodal interfaces",
        "topics": [
          "Speech plus pen",
          "Late fusion",
          "Error recovery"
        ]
      },
      {
        "title": "Cognitive aspects of sketching",
        "topics": [
          "External cognition",
          "Ambiguity as a feature",
          "Study design"
        ]
      },
      {
        "title": "Capstone: a domain recognizer",
        "topics": [
          "Circuit or UML",
          "Accuracy vs delight",
          "Failure gallery"
        ]
      }
    ]
  },
  {
    "code": "625",
    "title": "Artificial Intelligence",
    "level": "Core",
    "band": "foundations",
    "description": "Foundations of AI, search, knowledge representation, planning, reasoning under uncertainty, learning, natural language, robotics, ethics.",
    "prereqs": "CSCE 221, 420",
    "equivalents": [
      "MIT 6.034 Artificial Intelligence",
      "Stanford CS221 AI Principles",
      "Berkeley CS188"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Artificial Intelligence - Agents & Search",
        "topics": [
          "Rational agents",
          "PEAS",
          "State spaces"
        ]
      },
      {
        "title": "Uninformed & Informed Search A*",
        "topics": [
          "BFS DFS UCS",
          "Heuristic admissibility",
          "IDA*"
        ]
      },
      {
        "title": "Adversarial Search Minimax & MCTS",
        "topics": [
          "Alpha-beta pruning",
          "Evaluation functions",
          "MCTS UCT"
        ]
      },
      {
        "title": "Constraint Satisfaction Backtracking",
        "topics": [
          "Arc consistency",
          "Forward checking",
          "Variable ordering"
        ]
      },
      {
        "title": "Logic & Knowledge Representation",
        "topics": [
          "Propositional logic",
          "First-order",
          "Resolution"
        ]
      },
      {
        "title": "Planning - STRIPS & Heuristics",
        "topics": [
          "PDDL",
          "Plan graphs",
          "Hierarchical planning"
        ]
      },
      {
        "title": "Uncertainty - Bayesian Networks",
        "topics": [
          "Bayes rule",
          "Independence",
          "Variable elimination"
        ]
      },
      {
        "title": "Markov Decision Processes",
        "topics": [
          "Bellman equations",
          "Value iteration",
          "Policy iteration"
        ]
      },
      {
        "title": "Reinforcement Learning - Q-Learning to PPO",
        "topics": [
          "Exploration-exploitation",
          "Policy gradients",
          "Actor-critic"
        ]
      },
      {
        "title": "Machine Learning Foundations for AI",
        "topics": [
          "Bias-variance",
          "Decision trees",
          "Neural nets intro"
        ]
      },
      {
        "title": "Natural Language & Vision Integration",
        "topics": [
          "Transformers",
          "CLIP",
          "Multimodal fusion"
        ]
      },
      {
        "title": "Robotics & Embodied AI",
        "topics": [
          "SLAM",
          "Path planning",
          "Sim2real"
        ]
      },
      {
        "title": "Ethics Explainability & Alignment",
        "topics": [
          "Fairness metrics",
          "Interpretability",
          "RLHF"
        ]
      },
      {
        "title": "Capstone - Build Game AI Agent",
        "topics": [
          "Game selection",
          "Opponent modeling",
          "Tournament"
        ]
      },
      {
        "title": "Final Portfolio - AI System Card",
        "topics": [
          "Model card",
          "Limitations",
          "Future work"
        ]
      }
    ]
  },
  {
    "code": "626",
    "title": "Parallel Algorithm Design",
    "level": "Core",
    "band": "foundations",
    "description": "Design and analysis of parallel algorithms, models PRAM BSP, sorting, graph algorithms, load balancing, communication, GPU, distributed memory.",
    "prereqs": "CSCE 629",
    "equivalents": [
      "MIT 6.852J Distributed Algorithms",
      "MIT 6.846 Parallel Algorithms",
      "CMU 15-740"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Models: PRAM, BSP, and reality",
        "topics": [
          "Work and span",
          "Communication cost",
          "What the model hides"
        ]
      },
      {
        "title": "Parallel sorting and prefix sums",
        "topics": [
          "Odd-even merge",
          "Scan",
          "Work efficiency"
        ]
      },
      {
        "title": "Graph algorithms in parallel",
        "topics": [
          "BFS layering",
          "Connected components",
          "Load imbalance"
        ]
      },
      {
        "title": "Load balancing",
        "topics": [
          "Work stealing",
          "Randomized allocation",
          "Tail latency"
        ]
      },
      {
        "title": "Distributed memory and MPI thinking",
        "topics": [
          "Message cost",
          "Collectives",
          "Deadlock patterns"
        ]
      },
      {
        "title": "GPU algorithm design",
        "topics": [
          "SIMT",
          "Coalescing",
          "Occupancy vs correctness"
        ]
      },
      {
        "title": "Communication-avoiding algorithms",
        "topics": [
          "Arithmetic intensity",
          "Tiling",
          "Lower bounds"
        ]
      },
      {
        "title": "Capstone: a measured parallel code",
        "topics": [
          "Strong scaling plot",
          "Bottleneck",
          "A better algorithm"
        ]
      }
    ]
  },
  {
    "code": "627",
    "title": "Computability & Complexity",
    "level": "Core",
    "band": "foundations",
    "description": "Theory of computation, models, decidability, reducibility, P NP, NP-completeness, space, randomization, approximation, advanced complexity.",
    "prereqs": "CSCE 221, 433",
    "equivalents": [
      "MIT 6.045 Automata Computability Complexity",
      "MIT 18.400J Theory of Computation"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Models of computation",
        "topics": [
          "DFAs and TMs",
          "Church-Turing",
          "Encoding matters"
        ]
      },
      {
        "title": "Decidability and reductions",
        "topics": [
          "Halting problem",
          "Mapping reductions",
          "Rice's theorem intuition"
        ]
      },
      {
        "title": "P, NP, and certificates",
        "topics": [
          "Verifiers",
          "NP-completeness",
          "Cook-Levin idea"
        ]
      },
      {
        "title": "Classic NP-complete problems",
        "topics": [
          "SAT, clique, vertex cover",
          "Reduction craft",
          "Gadget hygiene"
        ]
      },
      {
        "title": "Space complexity",
        "topics": [
          "Savitch",
          "NL vs P",
          "PSPACE"
        ]
      },
      {
        "title": "Randomness and approximation",
        "topics": [
          "BPP",
          "Approximation gaps",
          "When randomness helps"
        ]
      },
      {
        "title": "Hierarchy and diagonalization",
        "topics": [
          "Time hierarchy",
          "Relativization",
          "What it cannot settle"
        ]
      },
      {
        "title": "Advanced landscape",
        "topics": [
          "PCP sketch",
          "Fine-grained hypotheses",
          "Open problems you can state"
        ]
      }
    ]
  },
  {
    "code": "628",
    "title": "Computational Biology",
    "level": "Studio",
    "band": "capstone",
    "prereqs": "CSCE 629, BIOL 111",
    "equivalents": [
      "MIT 6.047",
      "Stanford CS274",
      "CMU 02-710"
    ],
    "description": "Alignment, indexing, HMMs, phylogeny, single-cell RNA-seq, and the computational ideas behind structure prediction.",
    "credits": 3,
    "lectures": [
      {
        "title": "Sequences as strings with biology",
        "topics": [
          "Alphabets",
          "Reads vs genomes",
          "Error profiles"
        ]
      },
      {
        "title": "Alignment",
        "topics": [
          "Needleman-Wunsch",
          "Smith-Waterman",
          "Affine gaps"
        ]
      },
      {
        "title": "Indexing biological sequences",
        "topics": [
          "k-mers",
          "Burrows-Wheeler idea",
          "Seed and extend"
        ]
      },
      {
        "title": "Hidden Markov models in biology",
        "topics": [
          "Gene finding",
          "Profile HMMs",
          "Viterbi"
        ]
      },
      {
        "title": "Phylogeny",
        "topics": [
          "Distance vs character",
          "Likelihood",
          "Why trees lie"
        ]
      },
      {
        "title": "Single-cell RNA-seq",
        "topics": [
          "Counts",
          "Normalization",
          "Clustering cells"
        ]
      },
      {
        "title": "Structure and AlphaFold thinking",
        "topics": [
          "Energy vs learned",
          "MSA signal",
          "What confidence means"
        ]
      },
      {
        "title": "A reproducible bioinformatics memo",
        "topics": [
          "Provenance",
          "Versioned references",
          "A claim sized to the data"
        ]
      }
    ]
  },
  {
    "code": "629",
    "title": "Analysis of Algorithms",
    "level": "Theory",
    "band": "capstone",
    "prereqs": "An undergraduate algorithms course",
    "equivalents": [
      "MIT 6.046 / 6.854",
      "Stanford CS161",
      "CMU 15-451"
    ],
    "description": "Amortized, randomized, greedy, dynamic programming, approximation, online algorithms, and lower bounds. The graduate algorithms spine.",
    "credits": 3,
    "lectures": [
      {
        "title": "Models and the master theorem",
        "topics": [
          "Recurrences",
          "Cases",
          "When it doesn't apply"
        ]
      },
      {
        "title": "Amortized analysis",
        "topics": [
          "Aggregate",
          "Accounting",
          "Potential method"
        ]
      },
      {
        "title": "Randomized analysis",
        "topics": [
          "Expected time",
          "High probability",
          "Yao's minimax idea"
        ]
      },
      {
        "title": "Greedy proofs",
        "topics": [
          "Exchange arguments",
          "Matroids sketch",
          "Counterexamples"
        ]
      },
      {
        "title": "Dynamic programming craft",
        "topics": [
          "Subproblem graphs",
          "Reconstruction",
          "Space tradeoffs"
        ]
      },
      {
        "title": "Approximation algorithms",
        "topics": [
          "Ratios",
          "LP rounding sketch",
          "Hardness pointers"
        ]
      },
      {
        "title": "Online algorithms",
        "topics": [
          "Competitive ratio",
          "Ski rental",
          "Paging"
        ]
      },
      {
        "title": "Lower bounds",
        "topics": [
          "Adversary arguments",
          "Decision trees",
          "A bound you can prove"
        ]
      }
    ]
  },
  {
    "code": "630",
    "title": "Speech Processing",
    "level": "Core",
    "band": "foundations",
    "description": "Speech production, signal processing, acoustic and language modeling, HMMs, end-to-end ASR, TTS, speaker recognition, enhancement, evaluation.",
    "prereqs": "CSCE 420, 625 or ECEN 448",
    "equivalents": [
      "MIT 6.345 ASR",
      "Stanford CS224S Spoken Language Processing",
      "CMU 11-751"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Speech production and acoustics",
        "topics": [
          "Source-filter",
          "Formants",
          "Why phones overlap"
        ]
      },
      {
        "title": "Signal processing for speech",
        "topics": [
          "Windowing",
          "Spectrograms",
          "MFCC intuition"
        ]
      },
      {
        "title": "Acoustic modeling",
        "topics": [
          "GMMs",
          "HMMs",
          "Alignment"
        ]
      },
      {
        "title": "Language models for ASR",
        "topics": [
          "N-grams",
          "Perplexity",
          "Neural LMs"
        ]
      },
      {
        "title": "End-to-end recognition",
        "topics": [
          "CTC",
          "Attention ASR",
          "WER vs human"
        ]
      },
      {
        "title": "Text to speech",
        "topics": [
          "Concatenative vs neural",
          "Prosody",
          "Evaluation listening tests"
        ]
      },
      {
        "title": "Speaker recognition and enhancement",
        "topics": [
          "Embeddings",
          "Denoising",
          "Diarization"
        ]
      },
      {
        "title": "Evaluation and deployment",
        "topics": [
          "Datasets bias",
          "Latency",
          "A demo you can measure"
        ]
      }
    ]
  },
  {
    "code": "631",
    "title": "Intelligent Agents",
    "level": "Core AI",
    "band": "intelligence",
    "description": "Foundations of rational agents, PEAS framework, search strategies, knowledge representation, planning under uncertainty, and multi-agent coordination. Design and evaluation of autonomous systems that perceive, reason, and act in open worlds.",
    "prereqs": "CSCE 420, CSCE 625 or approval",
    "equivalents": [
      "MIT 6.034 Artificial Intelligence",
      "Stanford CS221 AI Principles",
      "Berkeley CS188 Intro to AI"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Rational Agents & PEAS Framework",
        "topics": [
          "Rational Agents",
          "PEAS Framework",
          "How PEAS Framework changes the design"
        ]
      },
      {
        "title": "Uninformed Search: BFS, DFS, UCS",
        "topics": [
          "Uninformed Search",
          "BFS",
          "DFS"
        ]
      },
      {
        "title": "Informed Search: Heuristics & A*",
        "topics": [
          "Informed Search",
          "Heuristics",
          "A*"
        ]
      },
      {
        "title": "Adversarial Search & Alpha-Beta Pruning",
        "topics": [
          "Adversarial Search",
          "Alpha-Beta Pruning",
          "How Alpha-Beta Pruning changes the design"
        ]
      },
      {
        "title": "Constraint Satisfaction Problems",
        "topics": [
          "Constraint Satisfaction Problems",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Logical Agents: Propositional Logic",
        "topics": [
          "Logical Agents",
          "Propositional Logic",
          "How Propositional Logic changes the design"
        ]
      },
      {
        "title": "First-Order Logic & Inference",
        "topics": [
          "First-Order Logic",
          "Inference",
          "How Inference changes the design"
        ]
      },
      {
        "title": "Classical Planning: STRIPS & PDDL",
        "topics": [
          "Classical Planning",
          "STRIPS",
          "PDDL"
        ]
      },
      {
        "title": "Probabilistic Reasoning & Bayesian Networks",
        "topics": [
          "Probabilistic Reasoning",
          "Bayesian Networks",
          "How Bayesian Networks changes the design"
        ]
      },
      {
        "title": "MDPs & Utility Theory",
        "topics": [
          "MDPs",
          "Utility Theory",
          "How Utility Theory changes the design"
        ]
      },
      {
        "title": "Reinforcement Learning for Agents",
        "topics": [
          "Reinforcement Learning for Agents",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Multi-Agent Systems & Game Theory",
        "topics": [
          "Multi-Agent Systems",
          "Game Theory",
          "How Game Theory changes the design"
        ]
      },
      {
        "title": "Communication & Coordination Protocols",
        "topics": [
          "Communication",
          "Coordination Protocols",
          "How Coordination Protocols changes the design"
        ]
      },
      {
        "title": "BDI Architecture & Agent Programming",
        "topics": [
          "BDI Architecture",
          "Agent Programming",
          "How Agent Programming changes the design"
        ]
      },
      {
        "title": "Capstone: Autonomous Agent Design",
        "topics": [
          "Capstone",
          "Autonomous Agent Design",
          "How Autonomous Agent Design changes the design"
        ]
      }
    ]
  },
  {
    "code": "632",
    "title": "Accessible Computing",
    "level": "HCI",
    "band": "intelligence",
    "description": "Design of inclusive computing systems. Disability models, WCAG 2.2, ARIA, assistive tech integration, and evaluation with users. Focus on mobile, wearables, and Ray-Ban Meta glasses.",
    "prereqs": "CSCE 410 or HCDE background",
    "equivalents": [
      "MIT 6.811 Principles of HCI",
      "UW HCDE 518 Accessible Design",
      "CMU 05-830"
    ],
    "credits": 3,
    "aside": "Capstone track anchor: inclusive tech, WCAG 2.2 AA, and co-design. A 6-credit, 200-hour option exists.",
    "lectures": [
      {
        "title": "Intro to Accessibility & Disability Justice",
        "topics": [
          "Intro to Accessibility",
          "Disability Justice",
          "How Disability Justice changes the design"
        ]
      },
      {
        "title": "WCAG 2.2 & ARIA Deep Dive",
        "topics": [
          "WCAG 2.2",
          "ARIA Deep Dive",
          "How ARIA Deep Dive changes the design"
        ]
      },
      {
        "title": "Screen Readers & Keyboard Navigation",
        "topics": [
          "Screen Readers",
          "Keyboard Navigation",
          "How Keyboard Navigation changes the design"
        ]
      },
      {
        "title": "Color, Contrast & Visual Impairments",
        "topics": [
          "Color",
          "Contrast",
          "Visual Impairments"
        ]
      },
      {
        "title": "Motor & Cognitive Accessibility",
        "topics": [
          "Motor",
          "Cognitive Accessibility",
          "How Cognitive Accessibility changes the design"
        ]
      },
      {
        "title": "Accessible Mobile & Wearables (Ray-Ban Meta)",
        "topics": [
          "Accessible Mobile",
          "Wearables (Ray-Ban Meta)",
          "How Wearables (Ray-Ban Meta) changes the design"
        ]
      },
      {
        "title": "Inclusive User Research Methods",
        "topics": [
          "Inclusive User Research Methods",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Assistive Technologies & APIs",
        "topics": [
          "Assistive Technologies",
          "APIs",
          "How APIs changes the design"
        ]
      },
      {
        "title": "Accessible Data Visualization",
        "topics": [
          "Accessible Data Visualization",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "AI for Accessibility",
        "topics": [
          "AI for Accessibility",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Evaluation: Audits & User Testing",
        "topics": [
          "Evaluation",
          "Audits",
          "User Testing"
        ]
      },
      {
        "title": "Capstone: Accessible App Redesign",
        "topics": [
          "Capstone",
          "Accessible App Redesign",
          "How Accessible App Redesign changes the design"
        ]
      }
    ]
  },
  {
    "code": "633",
    "title": "Machine Learning",
    "level": "Core AI",
    "band": "intelligence",
    "description": "Statistical learning theory, supervised and unsupervised methods, ensemble methods, SVMs, neural fundamentals, model selection, and system design. Mathematical foundations with hands-on implementation.",
    "prereqs": "CSCE 421, STAT 211, MATH 304",
    "equivalents": [
      "Stanford CS229 Machine Learning",
      "MIT 6.036 Intro to ML",
      "CMU 10-701"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Introduction, Hypothesis Space & Inductive Bias",
        "topics": [
          "Introduction",
          "Hypothesis Space",
          "Inductive Bias"
        ]
      },
      {
        "title": "Linear Regression & Gradient Descent",
        "topics": [
          "Linear Regression",
          "Gradient Descent",
          "How Gradient Descent changes the design"
        ]
      },
      {
        "title": "Logistic Regression & Generalized Linear Models",
        "topics": [
          "Logistic Regression",
          "Generalized Linear Models",
          "How Generalized Linear Models changes the design"
        ]
      },
      {
        "title": "Naive Bayes & Generative vs Discriminative",
        "topics": [
          "Naive Bayes",
          "Generative vs Discriminative",
          "How Generative vs Discriminative changes the design"
        ]
      },
      {
        "title": "Decision Trees & Bagging",
        "topics": [
          "Decision Trees",
          "Bagging",
          "How Bagging changes the design"
        ]
      },
      {
        "title": "Boosting: AdaBoost & Random Forests",
        "topics": [
          "Boosting",
          "AdaBoost",
          "Random Forests"
        ]
      },
      {
        "title": "Support Vector Machines & Kernels",
        "topics": [
          "Support Vector Machines",
          "Kernels",
          "How Kernels changes the design"
        ]
      },
      {
        "title": "Neural Networks & Backpropagation Fundamentals",
        "topics": [
          "Neural Networks",
          "Backpropagation Fundamentals",
          "How Backpropagation Fundamentals changes the design"
        ]
      },
      {
        "title": "Model Selection, Bias-Variance & Regularization",
        "topics": [
          "Model Selection",
          "Bias-Variance",
          "Regularization"
        ]
      },
      {
        "title": "Unsupervised: K-means, GMM & EM",
        "topics": [
          "Unsupervised",
          "K-means",
          "GMM"
        ]
      },
      {
        "title": "Dimensionality Reduction: PCA & ICA",
        "topics": [
          "Dimensionality Reduction",
          "PCA",
          "ICA"
        ]
      },
      {
        "title": "Learning Theory: PAC & VC Dimension",
        "topics": [
          "Learning Theory",
          "PAC",
          "VC Dimension"
        ]
      },
      {
        "title": "Reinforcement Learning & Policy Gradient Intro",
        "topics": [
          "Reinforcement Learning",
          "Policy Gradient Intro",
          "How Policy Gradient Intro changes the design"
        ]
      },
      {
        "title": "Fairness, Robustness & Interpretability",
        "topics": [
          "Fairness",
          "Robustness",
          "Interpretability"
        ]
      },
      {
        "title": "End-to-End ML System Design",
        "topics": [
          "End-to-End ML System Design",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      }
    ]
  },
  {
    "code": "634",
    "title": "Intelligent User Interfaces",
    "level": "HCI",
    "band": "intelligence",
    "description": "Adaptive, context-aware, and explainable interfaces. User modeling, personalization, multimodal fusion, and evaluation of intelligent UI. Applications in AR/VR and conversational agents.",
    "prereqs": "CSCE 410, 631",
    "equivalents": [
      "MIT 6.813/6.814 HCI",
      "Stanford CS147 Design",
      "UW CSE 510 IUI"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "IUI Foundations & Adaptation Loops",
        "topics": [
          "IUI Foundations",
          "Adaptation Loops",
          "How Adaptation Loops changes the design"
        ]
      },
      {
        "title": "User Modeling & Personalization",
        "topics": [
          "User Modeling",
          "Personalization",
          "How Personalization changes the design"
        ]
      },
      {
        "title": "Explainable AI Interfaces",
        "topics": [
          "Explainable AI Interfaces",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Multimodal Interaction Fusion",
        "topics": [
          "Multimodal Interaction Fusion",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Context-Aware Systems",
        "topics": [
          "Context-Aware Systems",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Conversational UI & Chatbots",
        "topics": [
          "Conversational UI",
          "Chatbots",
          "How Chatbots changes the design"
        ]
      },
      {
        "title": "Adaptive Visualization",
        "topics": [
          "Adaptive Visualization",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Affective Computing & Emotion",
        "topics": [
          "Affective Computing",
          "Emotion",
          "How Emotion changes the design"
        ]
      },
      {
        "title": "Intelligent Tutoring Systems",
        "topics": [
          "Intelligent Tutoring Systems",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Evaluation of IUIs",
        "topics": [
          "Evaluation of IUIs",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "AR/VR Intelligent Interfaces",
        "topics": [
          "AR/VR Intelligent Interfaces",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Ethics & Future of IUI",
        "topics": [
          "Ethics",
          "Future of IUI",
          "How Future of IUI changes the design"
        ]
      }
    ]
  },
  {
    "code": "635",
    "title": "AI Robotics",
    "level": "Robotics",
    "band": "intelligence",
    "description": "Perception, planning, and control for autonomous robots. ROS2, SLAM, manipulation, human-robot interaction, and learning-based control. Integration of vision-language-action models.",
    "prereqs": "CSCE 420, 452, 633",
    "equivalents": [
      "MIT 6.832 Underactuated Robotics",
      "Stanford CS223A Robotics",
      "CMU 16-831"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Robotics Foundations & ROS2 Architecture",
        "topics": [
          "Robotics Foundations",
          "ROS2 Architecture",
          "How ROS2 Architecture changes the design"
        ]
      },
      {
        "title": "Kinematics & Dynamics",
        "topics": [
          "Kinematics",
          "Dynamics",
          "How Dynamics changes the design"
        ]
      },
      {
        "title": "Perception: SLAM & Sensor Fusion",
        "topics": [
          "Perception",
          "SLAM",
          "Sensor Fusion"
        ]
      },
      {
        "title": "Path Planning: RRT, A* in Robotics",
        "topics": [
          "Path Planning",
          "RRT",
          "A* in Robotics"
        ]
      },
      {
        "title": "Manipulation & Grasping",
        "topics": [
          "Manipulation",
          "Grasping",
          "How Grasping changes the design"
        ]
      },
      {
        "title": "Human-Robot Interaction",
        "topics": [
          "Human-Robot Interaction",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Learning for Robotics: Imitation",
        "topics": [
          "Learning for Robotics",
          "Imitation",
          "How Imitation changes the design"
        ]
      },
      {
        "title": "Reinforcement Learning for Control",
        "topics": [
          "Reinforcement Learning for Control",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Multi-Robot Systems",
        "topics": [
          "Multi-Robot Systems",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Vision-Language-Action Models",
        "topics": [
          "Vision-Language-Action Models",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Navigation in Dynamic Environments",
        "topics": [
          "Navigation in Dynamic Environments",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Capstone: Autonomous Delivery Robot",
        "topics": [
          "Capstone",
          "Autonomous Delivery Robot",
          "How Autonomous Delivery Robot changes the design"
        ]
      }
    ]
  },
  {
    "code": "636",
    "title": "Deep Learning",
    "level": "Core AI",
    "band": "intelligence",
    "description": "Deep neural networks: optimization, regularization, CNNs, RNNs, transformers, generative models, self-supervised learning, GNNs, deployment, and responsible AI. Project-based.",
    "prereqs": "CSCE 633, MATH 304, Python",
    "equivalents": [
      "MIT 6.S191 Deep Learning",
      "Stanford CS230 Deep Learning",
      "Stanford CS231n CNNs"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Historical Context & Deep Learning Foundations",
        "topics": [
          "Historical Context",
          "Deep Learning Foundations",
          "How Deep Learning Foundations changes the design"
        ]
      },
      {
        "title": "Neural Network Basics & Backpropagation Math",
        "topics": [
          "Neural Network Basics",
          "Backpropagation Math",
          "How Backpropagation Math changes the design"
        ]
      },
      {
        "title": "Optimization: SGD, Momentum, AdamW",
        "topics": [
          "Optimization",
          "SGD",
          "Momentum"
        ]
      },
      {
        "title": "Regularization: Dropout, BatchNorm, Weight Decay",
        "topics": [
          "Regularization",
          "Dropout",
          "BatchNorm"
        ]
      },
      {
        "title": "CNNs: Convolution, Pooling & Architectures",
        "topics": [
          "CNNs",
          "Convolution",
          "Pooling"
        ]
      },
      {
        "title": "Advanced CNNs: ResNet, EfficientNet, ViT",
        "topics": [
          "Advanced CNNs",
          "ResNet",
          "EfficientNet"
        ]
      },
      {
        "title": "RNNs, LSTM & Sequence Modeling",
        "topics": [
          "RNNs",
          "LSTM",
          "Sequence Modeling"
        ]
      },
      {
        "title": "Attention Mechanism & Transformer Architecture",
        "topics": [
          "Attention Mechanism",
          "Transformer Architecture",
          "How Transformer Architecture changes the design"
        ]
      },
      {
        "title": "Generative Models: Autoencoders & VAEs",
        "topics": [
          "Generative Models",
          "Autoencoders",
          "VAEs"
        ]
      },
      {
        "title": "GANs & Diffusion Models",
        "topics": [
          "GANs",
          "Diffusion Models",
          "How Diffusion Models changes the design"
        ]
      },
      {
        "title": "Self-Supervised & Contrastive Learning",
        "topics": [
          "Self-Supervised",
          "Contrastive Learning",
          "How Contrastive Learning changes the design"
        ]
      },
      {
        "title": "Transfer Learning & Foundation Models",
        "topics": [
          "Transfer Learning",
          "Foundation Models",
          "How Foundation Models changes the design"
        ]
      },
      {
        "title": "Graph Neural Networks",
        "topics": [
          "Graph Neural Networks",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Deployment: Quantization, Pruning & Edge AI",
        "topics": [
          "Deployment",
          "Quantization",
          "Pruning"
        ]
      },
      {
        "title": "Research Frontiers & Responsible AI",
        "topics": [
          "Research Frontiers",
          "Responsible AI",
          "How Responsible AI changes the design"
        ]
      }
    ]
  },
  {
    "code": "637",
    "title": "Complexity Theory",
    "level": "Theory",
    "band": "intelligence",
    "description": "Time and space complexity, P vs NP, reductions, randomized and interactive classes, circuit complexity, PCP, and quantum complexity. Proof-intensive.",
    "prereqs": "CSCE 411, MATH 302",
    "equivalents": [
      "MIT 6.045 Automata & Complexity",
      "Stanford CS154 Complexity",
      "MIT 18.404"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "P vs NP & Complexity Classes",
        "topics": [
          "P vs NP",
          "Complexity Classes",
          "How Complexity Classes changes the design"
        ]
      },
      {
        "title": "NP-Completeness & Reductions",
        "topics": [
          "NP-Completeness",
          "Reductions",
          "How Reductions changes the design"
        ]
      },
      {
        "title": "Space Complexity & Savitch",
        "topics": [
          "Space Complexity",
          "Savitch",
          "How Savitch changes the design"
        ]
      },
      {
        "title": "Hierarchy Theorems",
        "topics": [
          "Hierarchy Theorems",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Randomized Complexity & BPP",
        "topics": [
          "Randomized Complexity",
          "BPP",
          "How BPP changes the design"
        ]
      },
      {
        "title": "Interactive Proofs & IP=PSPACE",
        "topics": [
          "Interactive Proofs",
          "IP=PSPACE",
          "How IP=PSPACE changes the design"
        ]
      },
      {
        "title": "Circuit Complexity",
        "topics": [
          "Circuit Complexity",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Approximation & Hardness",
        "topics": [
          "Approximation",
          "Hardness",
          "How Hardness changes the design"
        ]
      },
      {
        "title": "Parameterized Complexity",
        "topics": [
          "Parameterized Complexity",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Fine-Grained Complexity",
        "topics": [
          "Fine-Grained Complexity",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Quantum Complexity",
        "topics": [
          "Quantum Complexity",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "PCP Theorem & Inapproximability",
        "topics": [
          "PCP Theorem",
          "Inapproximability",
          "How Inapproximability changes the design"
        ]
      }
    ]
  },
  {
    "code": "638",
    "title": "Natural Language Processing",
    "level": "Core AI",
    "band": "intelligence",
    "description": "Linguistic foundations, word vectors, language modeling, parsing, seq2seq, transformers, LLMs, QA, IE, dialogue, and ethics. Build end-to-end NLP systems.",
    "prereqs": "CSCE 633, 636 recommended",
    "equivalents": [
      "Stanford CS224n NLP",
      "MIT 6.861 Advanced NLP",
      "CMU 11-711"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "NLP Foundations & Language Modeling",
        "topics": [
          "NLP Foundations",
          "Language Modeling",
          "How Language Modeling changes the design"
        ]
      },
      {
        "title": "Text Classification & Naive Bayes for NLP",
        "topics": [
          "Text Classification",
          "Naive Bayes for NLP",
          "How Naive Bayes for NLP changes the design"
        ]
      },
      {
        "title": "Word Vectors: Word2Vec, GloVe & Evaluation",
        "topics": [
          "Word Vectors",
          "Word2Vec",
          "GloVe"
        ]
      },
      {
        "title": "Language Models: N-grams to Neural LMs",
        "topics": [
          "Language Models",
          "N-grams to Neural LMs",
          "How N-grams to Neural LMs changes the design"
        ]
      },
      {
        "title": "Sequence Labeling: HMM, CRF & POS Tagging",
        "topics": [
          "Sequence Labeling",
          "HMM",
          "CRF"
        ]
      },
      {
        "title": "Syntax: Constituency & Dependency Parsing",
        "topics": [
          "Syntax",
          "Constituency",
          "Dependency Parsing"
        ]
      },
      {
        "title": "RNNs for NLP & Intro to MT",
        "topics": [
          "RNNs for NLP",
          "Intro to MT",
          "How Intro to MT changes the design"
        ]
      },
      {
        "title": "Attention, Seq2Seq & Transformers for MT",
        "topics": [
          "Attention",
          "Seq2Seq",
          "Transformers for MT"
        ]
      },
      {
        "title": "Pretrained LMs: ELMo, BERT & Fine-tuning",
        "topics": [
          "Pretrained LMs",
          "ELMo",
          "BERT"
        ]
      },
      {
        "title": "Large Language Models & Prompting",
        "topics": [
          "Large Language Models",
          "Prompting",
          "How Prompting changes the design"
        ]
      },
      {
        "title": "Question Answering & Reading Comprehension",
        "topics": [
          "Question Answering",
          "Reading Comprehension",
          "How Reading Comprehension changes the design"
        ]
      },
      {
        "title": "Information Extraction & Relation Extraction",
        "topics": [
          "Information Extraction",
          "Relation Extraction",
          "How Relation Extraction changes the design"
        ]
      },
      {
        "title": "Dialogue Systems & Conversational AI",
        "topics": [
          "Dialogue Systems",
          "Conversational AI",
          "How Conversational AI changes the design"
        ]
      },
      {
        "title": "Ethics, Bias & Evaluation in NLP",
        "topics": [
          "Ethics",
          "Bias",
          "Evaluation in NLP"
        ]
      },
      {
        "title": "Capstone: End-to-End NLP System",
        "topics": [
          "Capstone",
          "End-to-End NLP System",
          "How End-to-End NLP System changes the design"
        ]
      }
    ]
  },
  {
    "code": "640",
    "title": "Quantum Algorithms",
    "level": "Theory",
    "band": "intelligence",
    "description": "Quantum computation: qubits, gates, Deutsch-Jozsa, Grover, Shor, QFT, phase estimation, QML, error correction, and variational algorithms. Qiskit labs.",
    "prereqs": "CSCE 411, MATH 308, PHYS 221",
    "equivalents": [
      "MIT 8.370 Quantum Computation",
      "Stanford CS269Q Quantum",
      "Berkeley CS191"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Quantum Mechanics Primer",
        "topics": [
          "Quantum Mechanics Primer",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Qubits, Gates & Circuits",
        "topics": [
          "Qubits",
          "Gates",
          "Circuits"
        ]
      },
      {
        "title": "Deutsch-Jozsa & Bernstein-Vazirani",
        "topics": [
          "Deutsch-Jozsa",
          "Bernstein-Vazirani",
          "How Bernstein-Vazirani changes the design"
        ]
      },
      {
        "title": "Grover's Search & Amplitude Amplification",
        "topics": [
          "Grover's Search",
          "Amplitude Amplification",
          "How Amplitude Amplification changes the design"
        ]
      },
      {
        "title": "Quantum Fourier Transform",
        "topics": [
          "Quantum Fourier Transform",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Shor's Factoring Algorithm",
        "topics": [
          "Shor's Factoring Algorithm",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Quantum Phase Estimation",
        "topics": [
          "Quantum Phase Estimation",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Quantum Machine Learning",
        "topics": [
          "Quantum Machine Learning",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Quantum Complexity & BQP",
        "topics": [
          "Quantum Complexity",
          "BQP",
          "How BQP changes the design"
        ]
      },
      {
        "title": "Quantum Error Correction",
        "topics": [
          "Quantum Error Correction",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Variational Quantum Algorithms",
        "topics": [
          "Variational Quantum Algorithms",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Capstone: Implementing on Qiskit",
        "topics": [
          "Capstone",
          "Implementing on Qiskit",
          "How Implementing on Qiskit changes the design"
        ]
      }
    ]
  },
  {
    "code": "641",
    "title": "Computer Graphics",
    "level": "Core Systems",
    "band": "intelligence",
    "description": "Graphics pipeline, transformations, viewing, ray tracing, shading, textures, geometry, animation, PBR, GPU shaders, sampling, and VR/AR rendering. Renderer from scratch.",
    "prereqs": "CSCE 441, MATH 308",
    "equivalents": [
      "MIT 6.837 Computer Graphics",
      "Stanford CS148 Intro Graphics",
      "CMU 15-462"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Graphics Pipeline & Rasterization Basics",
        "topics": [
          "Graphics Pipeline",
          "Rasterization Basics",
          "How Rasterization Basics changes the design"
        ]
      },
      {
        "title": "Transformations & Homogeneous Coordinates",
        "topics": [
          "Transformations",
          "Homogeneous Coordinates",
          "How Homogeneous Coordinates changes the design"
        ]
      },
      {
        "title": "Viewing, Projection & Camera Models",
        "topics": [
          "Viewing",
          "Projection",
          "Camera Models"
        ]
      },
      {
        "title": "Ray Tracing Fundamentals",
        "topics": [
          "Ray Tracing Fundamentals",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Shading Models: Phong, BRDF & Global Illumination",
        "topics": [
          "Shading Models",
          "Phong",
          "BRDF"
        ]
      },
      {
        "title": "Texturing & Mapping Techniques",
        "topics": [
          "Texturing",
          "Mapping Techniques",
          "How Mapping Techniques changes the design"
        ]
      },
      {
        "title": "Geometry: Meshes, Subdivision & Implicit Surfaces",
        "topics": [
          "Geometry",
          "Meshes",
          "Subdivision"
        ]
      },
      {
        "title": "Animation: Kinematics & Skinning",
        "topics": [
          "Animation",
          "Kinematics",
          "Skinning"
        ]
      },
      {
        "title": "Physically Based Rendering & Path Tracing",
        "topics": [
          "Physically Based Rendering",
          "Path Tracing",
          "How Path Tracing changes the design"
        ]
      },
      {
        "title": "Real-Time Rendering & Shadows",
        "topics": [
          "Real-Time Rendering",
          "Shadows",
          "How Shadows changes the design"
        ]
      },
      {
        "title": "GPU Programming & Shaders (GLSL/HLSL)",
        "topics": [
          "GPU Programming",
          "Shaders (GLSL/HLSL)",
          "How Shaders (GLSL/HLSL) changes the design"
        ]
      },
      {
        "title": "Curves & Surfaces: Bezier & NURBS",
        "topics": [
          "Curves",
          "Surfaces",
          "Bezier"
        ]
      },
      {
        "title": "Sampling & Anti-Aliasing",
        "topics": [
          "Sampling",
          "Anti-Aliasing",
          "How Anti-Aliasing changes the design"
        ]
      },
      {
        "title": "VR/AR & Advanced Display Systems",
        "topics": [
          "VR/AR",
          "Advanced Display Systems",
          "How Advanced Display Systems changes the design"
        ]
      },
      {
        "title": "Final Project: Renderer from Scratch",
        "topics": [
          "Final Project",
          "Renderer from Scratch",
          "How Renderer from Scratch changes the design"
        ]
      }
    ]
  },
  {
    "code": "642",
    "title": "Deep Reinforcement Learning",
    "level": "Core AI",
    "band": "intelligence",
    "description": "Deep RL: DQN, policy gradients, actor-critic, PPO, model-based RL, offline RL, RLHF, exploration, meta-RL. Atari and robotics projects.",
    "prereqs": "CSCE 633, 636",
    "equivalents": [
      "Stanford CS234 RL",
      "Berkeley CS285 Deep RL",
      "UCL COMPM050"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "RL Foundations & MDPs Revisited",
        "topics": [
          "RL Foundations",
          "MDPs Revisited",
          "How MDPs Revisited changes the design"
        ]
      },
      {
        "title": "Deep Q-Networks (DQN)",
        "topics": [
          "Deep Q-Networks (DQN)",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Policy Gradients & REINFORCE",
        "topics": [
          "Policy Gradients",
          "REINFORCE",
          "How REINFORCE changes the design"
        ]
      },
      {
        "title": "Actor-Critic & A2C/A3C",
        "topics": [
          "Actor-Critic",
          "A2C/A3C",
          "How A2C/A3C changes the design"
        ]
      },
      {
        "title": "PPO & TRPO",
        "topics": [
          "PPO",
          "TRPO",
          "How TRPO changes the design"
        ]
      },
      {
        "title": "Model-Based RL & MuZero",
        "topics": [
          "Model-Based RL",
          "MuZero",
          "How MuZero changes the design"
        ]
      },
      {
        "title": "Multi-Agent Deep RL",
        "topics": [
          "Multi-Agent Deep RL",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Offline RL & Conservative Q-Learning",
        "topics": [
          "Offline RL",
          "Conservative Q-Learning",
          "How Conservative Q-Learning changes the design"
        ]
      },
      {
        "title": "RLHF & Alignment",
        "topics": [
          "RLHF",
          "Alignment",
          "How Alignment changes the design"
        ]
      },
      {
        "title": "Exploration & Curiosity",
        "topics": [
          "Exploration",
          "Curiosity",
          "How Curiosity changes the design"
        ]
      },
      {
        "title": "Meta-RL",
        "topics": [
          "Meta-RL",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Capstone: Atari & Robotics",
        "topics": [
          "Capstone",
          "Atari",
          "Robotics"
        ]
      }
    ]
  },
  {
    "code": "645",
    "title": "Geometric Modeling",
    "level": "Graphics",
    "band": "intelligence",
    "description": "Mathematical representation of shapes: Bezier, B-splines, NURBS, meshes, subdivision, deformation, procedural modeling, and fabrication-aware design.",
    "prereqs": "CSCE 441, MATH 304",
    "equivalents": [
      "MIT 6.839 Advanced Graphics",
      "Stanford CS348B Geometry",
      "CMU 15-868"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Curves: Parametric & Implicit Forms",
        "topics": [
          "Curves",
          "Parametric",
          "Implicit Forms"
        ]
      },
      {
        "title": "Bezier & B-Splines",
        "topics": [
          "Bezier",
          "B-Splines",
          "How B-Splines changes the design"
        ]
      },
      {
        "title": "NURBS & Subdivision Surfaces",
        "topics": [
          "NURBS",
          "Subdivision Surfaces",
          "How Subdivision Surfaces changes the design"
        ]
      },
      {
        "title": "Mesh Representation & Data Structures",
        "topics": [
          "Mesh Representation",
          "Data Structures",
          "How Data Structures changes the design"
        ]
      },
      {
        "title": "Mesh Simplification & Remeshing",
        "topics": [
          "Mesh Simplification",
          "Remeshing",
          "How Remeshing changes the design"
        ]
      },
      {
        "title": "Surface Reconstruction",
        "topics": [
          "Surface Reconstruction",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Deformation & Morphing",
        "topics": [
          "Deformation",
          "Morphing",
          "How Morphing changes the design"
        ]
      },
      {
        "title": "CSG & Procedural Modeling",
        "topics": [
          "CSG",
          "Procedural Modeling",
          "How Procedural Modeling changes the design"
        ]
      },
      {
        "title": "Discrete Differential Geometry",
        "topics": [
          "Discrete Differential Geometry",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Isogeometric Analysis",
        "topics": [
          "Isogeometric Analysis",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Fabrication-Aware Design",
        "topics": [
          "Fabrication-Aware Design",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Capstone: CAD Kernel",
        "topics": [
          "Capstone",
          "CAD Kernel",
          "How CAD Kernel changes the design"
        ]
      }
    ]
  },
  {
    "code": "646",
    "title": "Digital Image",
    "level": "Vision",
    "band": "intelligence",
    "description": "Image formation, filtering, segmentation, features, morphology, frequency domain, compression, stereo, recognition, and computational photography.",
    "prereqs": "CSCE 421, MATH 304",
    "equivalents": [
      "MIT 6.869 Advances in Vision",
      "Stanford CS231A Vision",
      "CMU 16-720"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Image Formation & Sensors",
        "topics": [
          "Image Formation",
          "Sensors",
          "How Sensors changes the design"
        ]
      },
      {
        "title": "Filtering & Convolution",
        "topics": [
          "Filtering",
          "Convolution",
          "How Convolution changes the design"
        ]
      },
      {
        "title": "Edge Detection & Segmentation",
        "topics": [
          "Edge Detection",
          "Segmentation",
          "How Segmentation changes the design"
        ]
      },
      {
        "title": "Feature Detection: SIFT, ORB",
        "topics": [
          "Feature Detection",
          "SIFT",
          "ORB"
        ]
      },
      {
        "title": "Morphological Processing",
        "topics": [
          "Morphological Processing",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Color Spaces & Restoration",
        "topics": [
          "Color Spaces",
          "Restoration",
          "How Restoration changes the design"
        ]
      },
      {
        "title": "Frequency Domain & Fourier",
        "topics": [
          "Frequency Domain",
          "Fourier",
          "How Fourier changes the design"
        ]
      },
      {
        "title": "Compression: JPEG, Wavelet",
        "topics": [
          "Compression",
          "JPEG",
          "Wavelet"
        ]
      },
      {
        "title": "Stereo & Depth Estimation",
        "topics": [
          "Stereo",
          "Depth Estimation",
          "How Depth Estimation changes the design"
        ]
      },
      {
        "title": "Object Recognition Pipeline",
        "topics": [
          "Object Recognition Pipeline",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Image-Based Rendering",
        "topics": [
          "Image-Based Rendering",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Capstone: Computational Photography",
        "topics": [
          "Capstone",
          "Computational Photography",
          "How Computational Photography changes the design"
        ]
      }
    ]
  },
  {
    "code": "647",
    "title": "Image Synthesis",
    "level": "Graphics",
    "band": "intelligence",
    "description": "Advanced rendering: rendering equation, path tracing, Monte Carlo, BRDFs, photon mapping, volumetric, RTX, neural rendering, NeRF, and tone mapping.",
    "prereqs": "CSCE 641",
    "equivalents": [
      "MIT 6.838 Graphics & Rendering",
      "Stanford CS348B Rendering",
      "UCSD CSE 168"
    ],
    "credits": 3,
    "lectures": [
      {
        "title": "Rendering Equation & Light Transport",
        "topics": [
          "Rendering Equation",
          "Light Transport",
          "How Light Transport changes the design"
        ]
      },
      {
        "title": "Ray Tracing & Acceleration Structures",
        "topics": [
          "Ray Tracing",
          "Acceleration Structures",
          "How Acceleration Structures changes the design"
        ]
      },
      {
        "title": "Monte Carlo Integration & Sampling",
        "topics": [
          "Monte Carlo Integration",
          "Sampling",
          "How Sampling changes the design"
        ]
      },
      {
        "title": "BRDFs & Material Models",
        "topics": [
          "BRDFs",
          "Material Models",
          "How Material Models changes the design"
        ]
      },
      {
        "title": "Global Illumination: Photon Mapping",
        "topics": [
          "Global Illumination",
          "Photon Mapping",
          "How Photon Mapping changes the design"
        ]
      },
      {
        "title": "Path Tracing & Denoising",
        "topics": [
          "Path Tracing",
          "Denoising",
          "How Denoising changes the design"
        ]
      },
      {
        "title": "Volumetric Rendering",
        "topics": [
          "Volumetric Rendering",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      },
      {
        "title": "Real-Time Ray Tracing & RTX",
        "topics": [
          "Real-Time Ray Tracing",
          "RTX",
          "How RTX changes the design"
        ]
      },
      {
        "title": "Procedural Textures & Noise",
        "topics": [
          "Procedural Textures",
          "Noise",
          "How Noise changes the design"
        ]
      },
      {
        "title": "Neural Rendering & NeRF",
        "topics": [
          "Neural Rendering",
          "NeRF",
          "How NeRF changes the design"
        ]
      },
      {
        "title": "HDR & Tone Mapping",
        "topics": [
          "HDR",
          "Tone Mapping",
          "How Tone Mapping changes the design"
        ]
      },
      {
        "title": "Final Renderer",
        "topics": [
          "Final Renderer",
          "The definition you must be able to say aloud",
          "A failure mode if you skip it"
        ]
      }
    ]
  },
  {
    "code": "658",
    "title": "Randomized Algorithms",
    "level": "Theory",
    "band": "systems",
    "prereqs": "CSCE 629, MATH 304, STAT 211",
    "equivalents": [
      "MIT 6.262 Discrete Stochastic Processes",
      "Stanford CS265 Randomized Algorithms",
      "CMU 15-859"
    ],
    "description": "Design and analysis of randomized algorithms: probabilistic analysis, sampling, random walks, Markov chains, concentration, and derandomization.",
    "credits": 3,
    "lectures": [
      {
        "title": "Expectation, and the coupon collector",
        "topics": [
          "Linearity of expectation",
          "Indicator variables",
          "n log n bound"
        ],
        "lab": "Simulate coupon collector for n=100 and compare empirical time to n ln n."
      },
      {
        "title": "Balls, bins, and the power of two choices",
        "topics": [
          "Max load",
          "Chernoff tails",
          "d-choice"
        ],
        "lab": "Simulate n balls into n bins, d=1 vs d=2, and plot max load."
      },
      {
        "title": "Randomized quicksort and selection",
        "topics": [
          "Pivot depth",
          "High-probability bounds",
          "Median of medians contrast"
        ],
        "lab": "Instrument quicksort pivot depth: random vs median-of-3."
      },
      {
        "title": "Universal hashing",
        "topics": [
          "Carter-Wegman",
          "Collision probability",
          "Practical families"
        ],
        "lab": "Build a random-matrix universal hash and measure collisions on real titles."
      },
      {
        "title": "Karger min-cut",
        "topics": [
          "Contraction",
          "Success probability",
          "Karger-Stein"
        ],
        "lab": "Implement Karger and Karger-Stein; plot success vs trials on 50-node graphs."
      },
      {
        "title": "Concentration beyond Chernoff",
        "topics": [
          "Azuma",
          "Martingales",
          "Chromatic number of G(n,p)"
        ],
        "lab": "Show chromatic number concentration of G(n,p) via an Azuma-style simulation."
      },
      {
        "title": "Random walks and Markov chains",
        "topics": [
          "Mixing time",
          "Total variation",
          "Matchings chain"
        ],
        "lab": "Random-walk a social graph and estimate mixing via total variation."
      },
      {
        "title": "Derandomization",
        "topics": [
          "Conditional expectation",
          "Method of conditional probabilities",
          "MAX-CUT"
        ],
        "lab": "Derandomize a 0.5 MAX-CUT approximation and compare cut size to pure random."
      }
    ]
  },
  {
    "code": "662",
    "title": "Distributed Processing Systems",
    "level": "Systems",
    "band": "systems",
    "prereqs": "CSCE 611, CSCE 613",
    "equivalents": [
      "MIT 6.824 Distributed Systems",
      "Stanford CS244B",
      "CMU 15-440"
    ],
    "description": "Communication, synchronization, consistency, fault tolerance, replication, consensus, and large-scale data processing.",
    "credits": 3,
    "lectures": [
      {
        "title": "Why distribution breaks intuition",
        "topics": [
          "Partial failure",
          "No global clock",
          "FLP in one paragraph"
        ],
        "lab": "Build an async simulator and demonstrate an FLP-style bivalent loop."
      },
      {
        "title": "Time, clocks, and causality",
        "topics": [
          "Lamport clocks",
          "Vector clocks",
          "Hybrid logical clocks"
        ],
        "lab": "Show a causality violation, then fix it with a hybrid logical clock."
      },
      {
        "title": "Mutual exclusion and leases",
        "topics": [
          "Ricart-Agrawala",
          "Lease expiry",
          "Split brain"
        ],
        "lab": "Implement Ricart-Agrawala with leases and partition it."
      },
      {
        "title": "Consensus: Paxos",
        "topics": [
          "Proposers",
          "Chosen-value stability",
          "Single-decree"
        ],
        "lab": "Drive single-decree Paxos with two proposers and log the chosen value."
      },
      {
        "title": "Consensus: Raft",
        "topics": [
          "Terms",
          "Randomized timeouts",
          "Log matching"
        ],
        "lab": "Kill a Raft leader and measure election time p50 and p99."
      },
      {
        "title": "Replication and quorums",
        "topics": [
          "Chain vs quorum",
          "Hinted handoff",
          "Tail latency"
        ],
        "lab": "Benchmark chain vs quorum writes on 3 replicas."
      },
      {
        "title": "Atomic commit and recovery",
        "topics": [
          "2PC",
          "WAL",
          "Coordinator crash"
        ],
        "lab": "Crash a 2PC coordinator after prepare and test recovery."
      },
      {
        "title": "Data-parallel systems",
        "topics": [
          "MapReduce shuffle",
          "Spark",
          "Exactly-once myths"
        ],
        "lab": "Compare shuffle bytes for the same job in MapReduce style vs Spark."
      }
    ]
  },
  {
    "code": "664",
    "title": "Wireless & Mobile Systems",
    "level": "Networks",
    "band": "systems",
    "prereqs": "CSCE 463 or 665",
    "equivalents": [
      "MIT 6.02 Digital Communication",
      "Stanford CS244 Wireless",
      "CMU 18-759"
    ],
    "description": "Cellular, Wi-Fi, sensor nets, mobility, channel models, MAC, routing, and energy-aware mobile design.",
    "credits": 3,
    "lectures": [
      {
        "title": "The wireless channel",
        "topics": [
          "Path loss",
          "Fading",
          "Why SNR is not throughput"
        ]
      },
      {
        "title": "MAC for contention",
        "topics": [
          "CSMA/CA",
          "Hidden terminals",
          "Duty cycling"
        ]
      },
      {
        "title": "Wi-Fi architecture",
        "topics": [
          "Association",
          "OFDMA intuition",
          "Roaming"
        ]
      },
      {
        "title": "Cellular systems",
        "topics": [
          "Cells and handoff",
          "Scheduling",
          "Control vs user plane"
        ]
      },
      {
        "title": "Sensor and ad hoc nets",
        "topics": [
          "Energy budgets",
          "Geographic routing",
          "Duty cycle traps"
        ]
      },
      {
        "title": "Mobility management",
        "topics": [
          "Location updates",
          "Anchor points",
          "Ping-pong handoff"
        ]
      },
      {
        "title": "Mobile systems design",
        "topics": [
          "Offload",
          "Intermittent links",
          "Battery as a constraint"
        ]
      },
      {
        "title": "Measurement on real radios",
        "topics": [
          "Trace design",
          "Confounders",
          "A claim you can defend"
        ]
      }
    ]
  },
  {
    "code": "665",
    "title": "Advanced Networking",
    "level": "Networks",
    "band": "systems",
    "prereqs": "CSCE 463",
    "equivalents": [
      "MIT 6.829 Computer Networks",
      "Stanford CS244",
      "Princeton COS 561"
    ],
    "description": "Routing, congestion control, QoS, SDN, measurement, and next-generation protocols including QUIC and HTTP/3.",
    "credits": 3,
    "lectures": [
      {
        "title": "Internet architecture, revisited",
        "topics": [
          "Narrow waist",
          "Ossification",
          "What changed since Clark"
        ]
      },
      {
        "title": "Routing at depth",
        "topics": [
          "IGP/EGP split",
          "Traffic engineering",
          "Fast reroute"
        ]
      },
      {
        "title": "Congestion control research",
        "topics": [
          "Loss vs delay",
          "Fairness",
          "BBR intuition"
        ]
      },
      {
        "title": "Quality of service",
        "topics": [
          "Diffserv",
          "Scheduling",
          "Why QoS often fails"
        ]
      },
      {
        "title": "Software-defined networking",
        "topics": [
          "OpenFlow idea",
          "Centralized control",
          "Failure of the controller"
        ]
      },
      {
        "title": "QUIC and HTTP/3",
        "topics": [
          "Streams",
          "0-RTT risks",
          "Migration"
        ]
      },
      {
        "title": "Network measurement",
        "topics": [
          "Sampling",
          "Tomography",
          "Bias"
        ]
      },
      {
        "title": "Security of the infrastructure",
        "topics": [
          "BGP hijack",
          "DNSSEC limits",
          "DDoS defense layers"
        ]
      }
    ]
  },
  {
    "code": "666",
    "title": "Pattern Analysis",
    "level": "Core AI",
    "band": "systems",
    "prereqs": "CSCE 633, MATH 304, STAT 211",
    "equivalents": [
      "Stanford CS229",
      "MIT 6.036",
      "CMU 10-701"
    ],
    "description": "Bayesian decision theory, parametric and non-parametric methods, discriminants, SVMs, ensembles, and honest evaluation.",
    "credits": 3,
    "lectures": [
      {
        "title": "Bayesian decision theory",
        "topics": [
          "Risk",
          "Priors",
          "Decision boundaries"
        ],
        "lab": "Classify 2D Gaussians with a Bayes classifier and move the priors."
      },
      {
        "title": "Parametric vs non-parametric",
        "topics": [
          "Density estimation",
          "KDE bandwidth",
          "Bias-variance of bandwidth"
        ],
        "lab": "Select KDE bandwidth by cross-validation on a 3-Gaussian mixture."
      },
      {
        "title": "Linear discriminants and perceptrons",
        "topics": [
          "Separability",
          "Margins",
          "What a weight vector looks like"
        ],
        "lab": "Train a perceptron on MNIST 0 vs 1 and visualize the weights."
      },
      {
        "title": "Support vector machines",
        "topics": [
          "Hinge loss",
          "Kernels",
          "Gamma as a length scale"
        ],
        "lab": "Fit an RBF SVM to concentric circles and tune gamma."
      },
      {
        "title": "Ensembles",
        "topics": [
          "Bagging",
          "Boosting",
          "Feature importance caveats"
        ],
        "lab": "AdaBoost stumps on a small medical dataset and plot training error decay."
      },
      {
        "title": "Neural pattern recognizers",
        "topics": [
          "MLPs",
          "Dropout",
          "When depth is not the point"
        ],
        "lab": "Train a small MLP on MNIST with and without dropout 0.5."
      },
      {
        "title": "Evaluation that doesn't lie",
        "topics": [
          "Nested CV",
          "ROC vs PR",
          "Demographic parity"
        ],
        "lab": "Nested cross-validation: compare SVM and a forest without peeking."
      },
      {
        "title": "A real pipeline",
        "topics": [
          "Missingness",
          "Leakage",
          "Model cards"
        ],
        "lab": "Profile a messy table, name leakage risks, and write a one-page model card."
      }
    ]
  },
  {
    "code": "668",
    "title": "Distributed Algorithms",
    "level": "Theory",
    "band": "systems",
    "prereqs": "CSCE 629, CSCE 662",
    "equivalents": [
      "MIT 6.852 Distributed Algorithms",
      "Stanford CS244B theory",
      "CMU 15-852"
    ],
    "description": "Models, leader election, mutual exclusion, consensus, Byzantine agreement, graph algorithms, and self-stabilization.",
    "credits": 3,
    "lectures": [
      {
        "title": "Models of distributed computation",
        "topics": [
          "LOCAL vs CONGEST",
          "Asynchrony",
          "Fault types"
        ]
      },
      {
        "title": "Leader election",
        "topics": [
          "Rings",
          "Message complexity",
          "Symmetry breaking"
        ]
      },
      {
        "title": "Mutual exclusion proofs",
        "topics": [
          "Safety",
          "Liveness",
          "Fairness"
        ]
      },
      {
        "title": "Consensus and FLP",
        "topics": [
          "Bivalence",
          "Impossibility",
          "What randomness buys"
        ]
      },
      {
        "title": "Byzantine agreement",
        "topics": [
          "Oral messages",
          "Thresholds",
          "Authenticated variants"
        ]
      },
      {
        "title": "Graph algorithms in the LOCAL model",
        "topics": [
          "Coloring",
          "MIS",
          "Round complexity"
        ],
        "lab": "Simulate Luby's MIS and count rounds to completion."
      },
      {
        "title": "Self-stabilization",
        "topics": [
          "Transient faults",
          "Convergence",
          "Silent algorithms"
        ]
      },
      {
        "title": "Lower bounds you can tell",
        "topics": [
          "Information arguments",
          "Indistinguishability",
          "A problem you reduce"
        ]
      }
    ]
  },
  {
    "code": "669",
    "title": "Optimization",
    "level": "Theory",
    "band": "systems",
    "prereqs": "MATH 304, CSCE 629",
    "equivalents": [
      "Stanford EE364A Convex Optimization",
      "MIT 6.255",
      "CMU 10-725"
    ],
    "description": "Convex sets, gradient and Newton methods, stochastic optimization, duality, and submodular optimization for ML and systems.",
    "credits": 3,
    "lectures": [
      {
        "title": "Convex sets and functions",
        "topics": [
          "Convexity tests",
          "Projections",
          "Why convexity is kind"
        ]
      },
      {
        "title": "Gradient methods",
        "topics": [
          "Step sizes",
          "Smoothness",
          "Momentum"
        ]
      },
      {
        "title": "Newton and quasi-Newton",
        "topics": [
          "Hessian",
          "Local quadratic",
          "Cost of curvature"
        ]
      },
      {
        "title": "Stochastic optimization",
        "topics": [
          "SGD noise",
          "Variance reduction idea",
          "Learning rates"
        ]
      },
      {
        "title": "Duality",
        "topics": [
          "Lagrangians",
          "KKT intuition",
          "When strong duality holds"
        ]
      },
      {
        "title": "Constrained problems",
        "topics": [
          "Projections",
          "Penalties",
          "Simplex thinking"
        ]
      },
      {
        "title": "Submodular optimization",
        "topics": [
          "Diminishing returns",
          "Greedy guarantees",
          "A set function"
        ]
      },
      {
        "title": "Optimization inside ML and systems",
        "topics": [
          "What you actually minimize",
          "Non-convex reality",
          "A diagnostic plot"
        ]
      }
    ]
  },
  {
    "code": "670",
    "title": "Information Retrieval",
    "level": "AI / Systems",
    "band": "systems",
    "prereqs": "CSCE 310, CSCE 633",
    "equivalents": [
      "Stanford CS276",
      "CMU 11-442",
      "UMass COMPSCI 646"
    ],
    "description": "Ranking, indexing, query processing, link analysis, evaluation, recommenders, and neural retrieval including RAG.",
    "credits": 3,
    "lectures": [
      {
        "title": "Retrieval as ranking",
        "topics": [
          "Relevance",
          "Collections",
          "Cranfield idea"
        ]
      },
      {
        "title": "Inverted indexes",
        "topics": [
          "Postings",
          "Compression",
          "Skip lists"
        ]
      },
      {
        "title": "Classic models",
        "topics": [
          "Boolean",
          "Vector space",
          "BM25"
        ]
      },
      {
        "title": "Query processing",
        "topics": [
          "DAAT vs TAAT",
          "Early termination",
          "Caching"
        ]
      },
      {
        "title": "Evaluation",
        "topics": [
          "Precision, recall, nDCG",
          "Judgments",
          "A/B traps"
        ]
      },
      {
        "title": "Link analysis",
        "topics": [
          "PageRank",
          "Hubs and authorities",
          "Spam"
        ],
        "lab": "PageRank a 10k-node graph at damping 0.85 and watch convergence."
      },
      {
        "title": "Neural retrieval and RAG",
        "topics": [
          "Dense indexes",
          "Chunking",
          "Citation failures"
        ]
      },
      {
        "title": "Recommenders as retrieval",
        "topics": [
          "Implicit feedback",
          "Two-tower sketch",
          "Filter bubbles"
        ]
      }
    ]
  },
  {
    "code": "671",
    "title": "Computer-Human Interaction",
    "level": "HCI",
    "band": "systems",
    "prereqs": "CSCE 310 or consent",
    "equivalents": [
      "MIT 6.811 HCI",
      "Stanford CS147",
      "CMU 05-430"
    ],
    "description": "User-centered design, prototyping, usability testing, accessibility, and interaction for AR, VR, and wearables.",
    "credits": 3,
    "lectures": [
      {
        "title": "User-centered design, without the poster",
        "topics": [
          "Stakeholders",
          "Tasks not features",
          "A problem statement"
        ]
      },
      {
        "title": "Prototyping fidelity",
        "topics": [
          "Paper",
          "Clickable",
          "What not to polish"
        ]
      },
      {
        "title": "Usability testing",
        "topics": [
          "Tasks",
          "Think-aloud",
          "Five users is not a law"
        ]
      },
      {
        "title": "Interaction techniques",
        "topics": [
          "Direct manipulation",
          "Modes",
          "Undo"
        ]
      },
      {
        "title": "Accessibility as design, not a patch",
        "topics": [
          "WCAG as a floor",
          "Keyboard paths",
          "Contrast"
        ]
      },
      {
        "title": "AR, VR, and wearables",
        "topics": [
          "Comfort",
          "Field of view",
          "Social acceptability"
        ]
      },
      {
        "title": "Study design and ethics",
        "topics": [
          "IRB thinking",
          "Measures",
          "Confounds"
        ]
      },
      {
        "title": "Capstone critique",
        "topics": [
          "Heuristic review",
          "User evidence",
          "What you would cut"
        ]
      }
    ]
  },
  {
    "code": "672",
    "title": "CSCW & Social Computing",
    "level": "HCI",
    "band": "systems",
    "prereqs": "CSCE 671 or CSCE 670",
    "equivalents": [
      "Stanford CS347",
      "CMU 05-820",
      "UW CSE 510"
    ],
    "description": "Cooperative work, social networks, crowdsourcing, communities, moderation, and sociotechnical design.",
    "credits": 3,
    "lectures": [
      {
        "title": "CSCW foundations",
        "topics": [
          "Time/space matrix",
          "Awareness",
          "Articulation work"
        ]
      },
      {
        "title": "Social network analysis",
        "topics": [
          "Degree and betweenness",
          "Communities",
          "What a graph hides"
        ]
      },
      {
        "title": "Collaboration tools",
        "topics": [
          "Shared editors",
          "Conflict",
          "Presence"
        ]
      },
      {
        "title": "Crowdsourcing",
        "topics": [
          "Task design",
          "Quality control",
          "Labor"
        ]
      },
      {
        "title": "Online communities",
        "topics": [
          "Norms",
          "Onboarding",
          "Lurking"
        ]
      },
      {
        "title": "Moderation",
        "topics": [
          "Policies",
          "Appeals",
          "Scale vs context"
        ]
      },
      {
        "title": "Sociotechnical design",
        "topics": [
          "Incentives",
          "Abuse cases",
          "Values in defaults"
        ]
      },
      {
        "title": "A field study plan",
        "topics": [
          "Site access",
          "Traces plus interviews",
          "Claims you won't overreach"
        ]
      }
    ]
  },
  {
    "code": "676",
    "title": "Data Mining",
    "level": "Core AI",
    "band": "systems",
    "prereqs": "CSCE 310, STAT 211",
    "equivalents": [
      "Stanford CS246",
      "CMU 10-605",
      "UIUC CS 412"
    ],
    "description": "Frequent patterns, clustering, classification, graph and stream mining, anomaly detection, and scalable pipelines.",
    "credits": 3,
    "lectures": [
      {
        "title": "Patterns in baskets",
        "topics": [
          "Support and confidence",
          "Apriori",
          "FP-Growth"
        ],
        "lab": "Run Apriori on a groceries set and plot runtime against minsup."
      },
      {
        "title": "Clustering",
        "topics": [
          "k-means",
          "Hierarchical",
          "Silhouette"
        ],
        "lab": "Compare k-means and hierarchical clustering on a segmentation set."
      },
      {
        "title": "Density and noise",
        "topics": [
          "DBSCAN",
          "k-distance graphs",
          "When clusters aren't blobs"
        ],
        "lab": "Tune DBSCAN epsilon from a k-distance graph."
      },
      {
        "title": "Classification at scale",
        "topics": [
          "Bias",
          "Imbalance",
          "PR-AUC"
        ],
        "lab": "Plot ROC and PR on an imbalanced set and explain the divergence."
      },
      {
        "title": "Graph mining",
        "topics": [
          "PageRank recap",
          "Community detection",
          "Louvain"
        ],
        "lab": "Run Louvain on a co-appearance graph and name the communities."
      },
      {
        "title": "Streams",
        "topics": [
          "Reservoir sampling",
          "Count-Min idea",
          "One pass"
        ],
        "lab": "Reservoir-sample a long stream and test uniformity."
      },
      {
        "title": "Anomalies",
        "topics": [
          "Isolation forests",
          "Precision at k",
          "Label scarcity"
        ],
        "lab": "Isolation Forest on an intrusion set; report precision at k."
      },
      {
        "title": "Privacy and pipelines",
        "topics": [
          "Laplace noise",
          "Utility loss",
          "Spark ML shape"
        ],
        "lab": "Add Laplace noise to a histogram at two epsilons and compare utility."
      }
    ]
  },
  {
    "code": "678",
    "title": "Cloud Computing",
    "level": "Systems",
    "band": "systems",
    "prereqs": "CSCE 611, CSCE 662",
    "equivalents": [
      "Berkeley CS162 + CS294",
      "CMU 15-719",
      "Stanford CS349D"
    ],
    "description": "Virtualization, containers, orchestration, distributed storage, consistency, serverless, security, and cost.",
    "credits": 3,
    "lectures": [
      {
        "title": "What a cloud actually sells",
        "topics": [
          "Elasticity",
          "Isolation",
          "The bill"
        ],
        "lab": "Compare a rough TCO for 100 VMs on-prem vs a public cloud."
      },
      {
        "title": "Virtualization",
        "topics": [
          "KVM",
          "Overhead",
          "Noisy neighbors"
        ],
        "lab": "Reason about boot time and CPU overhead versus bare metal."
      },
      {
        "title": "Containers and orchestration",
        "topics": [
          "Images",
          "Rolling updates",
          "k3s/Kubernetes"
        ],
        "lab": "Describe a zero-downtime rolling update and what would break it."
      },
      {
        "title": "Distributed storage",
        "topics": [
          "Object stores",
          "HDFS replication",
          "Multipart upload"
        ],
        "lab": "Explain resumable multipart upload after a mid-file failure."
      },
      {
        "title": "Consistency menus",
        "topics": [
          "Linearizable vs serializable reads",
          "CRDTs",
          "LWW vs OR-Set"
        ],
        "lab": "Contrast an LWW register with an OR-Set under partition."
      },
      {
        "title": "Serverless",
        "topics": [
          "Cold starts",
          "Concurrency limits",
          "Edge vs region"
        ],
        "lab": "Sketch a cold-vs-warm latency histogram and what you'd measure."
      },
      {
        "title": "Security and identity",
        "topics": [
          "Least privilege IAM",
          "KMS",
          "Network boundaries"
        ],
        "lab": "Write the intent of a read-only object-store policy."
      },
      {
        "title": "Cost, spot, and autoscaling",
        "topics": [
          "HPA lag",
          "Spot interruption",
          "Checkpointing"
        ],
        "lab": "Design a SIGTERM checkpoint for a spot interruption."
      }
    ]
  },
  {
    "code": "679",
    "title": "Data Visualization",
    "level": "HCI",
    "band": "systems",
    "prereqs": "CSCE 310, CSCE 441",
    "equivalents": [
      "Stanford CS448B",
      "MIT 6.859",
      "UW CSE 512"
    ],
    "description": "Perception, color, multidimensional and geographic views, interaction, and grammars such as Vega-Lite.",
    "credits": 3,
    "lectures": [
      {
        "title": "Perception before pixels",
        "topics": [
          "Preattentive features",
          "Stevens' law",
          "Lie factor"
        ]
      },
      {
        "title": "Color with intent",
        "topics": [
          "Sequential vs diverging",
          "Color vision deficiency",
          "Never rainbow by default"
        ]
      },
      {
        "title": "Tables, bars, and when not to",
        "topics": [
          "Position encoding",
          "Small multiples",
          "Chart junk"
        ]
      },
      {
        "title": "Multidimensional data",
        "topics": [
          "Scatterplot matrices",
          "Parallel coordinates",
          "Overplotting"
        ]
      },
      {
        "title": "Networks and trees",
        "topics": [
          "Node-link vs matrix",
          "Hairballs",
          "Aggregation"
        ]
      },
      {
        "title": "Maps",
        "topics": [
          "Projections",
          "Choropleths",
          "Normalization"
        ]
      },
      {
        "title": "Interaction and analytics",
        "topics": [
          "Brushing",
          "Details on demand",
          "Shneiderman's mantra"
        ]
      },
      {
        "title": "Systems: D3 and Vega-Lite",
        "topics": [
          "Grammar of graphics",
          "Scales",
          "A spec you can diff"
        ]
      }
    ]
  },
  {
    "code": "680",
    "title": "Testing & Diagnosis",
    "level": "Security",
    "band": "systems",
    "prereqs": "CSCE 431, CSCE 611",
    "equivalents": [
      "MIT 6.170 Testing",
      "Stanford CS242",
      "CMU 17-654"
    ],
    "description": "Fault models, coverage, mutation testing, symbolic execution, model checking, diagnosis, and observability.",
    "credits": 3,
    "lectures": [
      {
        "title": "Fault models",
        "topics": [
          "Mistake, fault, error, failure",
          "Oracles",
          "What you can observe"
        ]
      },
      {
        "title": "Coverage criteria",
        "topics": [
          "Statement, branch, MC/DC",
          "Coverage is not correctness"
        ]
      },
      {
        "title": "Mutation testing",
        "topics": [
          "Kill a mutant",
          "Equivalent mutants",
          "Cost"
        ]
      },
      {
        "title": "Symbolic execution",
        "topics": [
          "Path conditions",
          "Solvers",
          "Path explosion"
        ]
      },
      {
        "title": "Model checking for software",
        "topics": [
          "Abstraction",
          "Liveness",
          "Spurious counterexamples"
        ]
      },
      {
        "title": "Diagnosis",
        "topics": [
          "Spectra",
          "Ranking suspicious lines",
          "Distributed traces"
        ]
      },
      {
        "title": "Observability",
        "topics": [
          "Logs, metrics, traces",
          "Cardinality",
          "What you page on"
        ]
      },
      {
        "title": "A testing argument",
        "topics": [
          "Risk list",
          "What you did not test",
          "Signoff memo"
        ]
      }
    ]
  },
  {
    "code": "735",
    "title": "Parallel Computing",
    "level": "Systems",
    "band": "capstone",
    "prereqs": "CSCE 435",
    "equivalents": [
      "MIT 6.172",
      "CMU 15-418",
      "Stanford CS149"
    ],
    "description": "PRAM and BSP thinking, MPI, OpenMP, CUDA, consistency, and Amdahl/Gustafson performance modeling.",
    "credits": 3,
    "lectures": [
      {
        "title": "Work, span, and the laws",
        "topics": [
          "Amdahl",
          "Gustafson",
          "T_p = T_1/p + T_comm"
        ]
      },
      {
        "title": "Shared memory: OpenMP thinking",
        "topics": [
          "Races",
          "Reductions",
          "False sharing"
        ]
      },
      {
        "title": "Message passing",
        "topics": [
          "MPI collectives",
          "Deadlock",
          "Overlap"
        ]
      },
      {
        "title": "GPU parallelism",
        "topics": [
          "Kernels",
          "Memory hierarchy",
          "Occupancy"
        ]
      },
      {
        "title": "Consistency models",
        "topics": [
          "Sequential consistency",
          "Weak memory",
          "What your language actually does"
        ]
      },
      {
        "title": "Scalability measurement",
        "topics": [
          "Strong vs weak",
          "Efficiency",
          "Noise"
        ]
      },
      {
        "title": "Distributed data parallelism",
        "topics": [
          "Partitioning",
          "Stragglers",
          "Checkpoint"
        ]
      },
      {
        "title": "Review studio",
        "topics": [
          "A speedup plot",
          "A failed scaling story",
          "The next bottleneck"
        ]
      }
    ]
  },
  {
    "code": "748",
    "title": "Computational Photography",
    "level": "Studio",
    "band": "capstone",
    "prereqs": "CSCE 643 or CSCE 646",
    "equivalents": [
      "MIT 6.815",
      "Stanford CS448A",
      "CMU 16-822"
    ],
    "description": "Physics-based imaging, light transport, inverse problems, HDR, denoising, deblurring, super-resolution, and neural rendering. Model formation as I = k * L + n.",
    "credits": 3,
    "lectures": [
      {
        "title": "Image formation as physics",
        "topics": [
          "Pinhole",
          "I = k * L + n",
          "What the sensor records"
        ],
        "lab": "Write the formation model for a blurry RAW frame and name each term."
      },
      {
        "title": "Sensors, noise, and RAW",
        "topics": [
          "Demosaic",
          "Read noise",
          "Why JPEG is too late"
        ],
        "lab": "Inspect a RAW pipeline and list demosaic artifacts."
      },
      {
        "title": "HDR and tone",
        "topics": [
          "Exposure brackets",
          "Merging",
          "Tone mapping tradeoffs"
        ]
      },
      {
        "title": "Deblurring and denoising",
        "topics": [
          "Deconvolution",
          "Priors",
          "Failure halos"
        ]
      },
      {
        "title": "Super-resolution",
        "topics": [
          "Aliases",
          "Multi-frame",
          "Hallucinated detail"
        ]
      },
      {
        "title": "Light fields",
        "topics": [
          "Angular samples",
          "Refocus",
          "Capture cost"
        ]
      },
      {
        "title": "Neural rendering",
        "topics": [
          "Inverse problems",
          "NeRF intuition",
          "What is not measured"
        ]
      },
      {
        "title": "Optics-algorithm co-design",
        "topics": [
          "Joint optimization",
          "A metric that matches the task",
          "Portfolio frame"
        ]
      }
    ]
  },
  {
    "code": "749",
    "title": "Applied Cryptography",
    "level": "Security",
    "band": "capstone",
    "prereqs": "CSCE 465, MATH 470",
    "equivalents": [
      "Stanford CS255",
      "MIT 6.875",
      "Dan Boneh's crypto course"
    ],
    "description": "Symmetric and public-key practice, AEAD, protocols, zero knowledge, side channels, and the post-quantum transition. Notions: IND-CPA and IND-CCA.",
    "credits": 3,
    "lectures": [
      {
        "title": "Kerckhoffs and threat models",
        "topics": [
          "What is secret",
          "IND-CPA",
          "IND-CCA"
        ]
      },
      {
        "title": "Symmetric primitives",
        "topics": [
          "Block vs stream",
          "Modes",
          "Nonce reuse"
        ]
      },
      {
        "title": "AEAD in practice",
        "topics": [
          "Encrypt-then-MAC",
          "Associated data",
          "API footguns"
        ]
      },
      {
        "title": "Public key and hybrids",
        "topics": [
          "Key exchange",
          "Signatures",
          "Hybrid encryption"
        ]
      },
      {
        "title": "Protocols",
        "topics": [
          "TLS 1.3 sketch",
          "Forward secrecy",
          "Downgrade"
        ]
      },
      {
        "title": "Zero knowledge and MPC, applied",
        "topics": [
          "What is proved",
          "Cost",
          "When not to"
        ]
      },
      {
        "title": "Side channels",
        "topics": [
          "Timing",
          "Padding oracles",
          "Constant-time intent"
        ]
      },
      {
        "title": "Post-quantum transition",
        "topics": [
          "Lattices sketch",
          "Hybrid deployment",
          "What you would not roll yourself"
        ]
      }
    ]
  },
  {
    "code": "752",
    "title": "Robotics",
    "level": "Robotics",
    "band": "capstone",
    "prereqs": "CSCE 625, MATH 304",
    "equivalents": [
      "MIT 6.1200",
      "Stanford CS237A",
      "Berkeley CS285"
    ],
    "description": "Kinematics, dynamics, localization, SLAM, RRT* planning, manipulation, and model-predictive control for embodied systems.",
    "credits": 3,
    "lectures": [
      {
        "title": "Configuration space",
        "topics": [
          "C-space",
          "Obstacles",
          "Degrees of freedom"
        ]
      },
      {
        "title": "Kinematics",
        "topics": [
          "Forward kinematics T(θ)",
          "Jacobians",
          "Singularities"
        ]
      },
      {
        "title": "Dynamics and control",
        "topics": [
          "Equations of motion",
          "PID limits",
          "MPC idea"
        ]
      },
      {
        "title": "Localization",
        "topics": [
          "Kalman",
          "Particle filters",
          "When the model is wrong"
        ]
      },
      {
        "title": "SLAM",
        "topics": [
          "Landmarks",
          "Loop closure",
          "Drift"
        ]
      },
      {
        "title": "Motion planning",
        "topics": [
          "RRT*",
          "Smoothing",
          "Kinodynamic constraints"
        ]
      },
      {
        "title": "Manipulation",
        "topics": [
          "Grasps",
          "Contact",
          "Perception error"
        ]
      },
      {
        "title": "Embodied capstone",
        "topics": [
          "Safety envelope",
          "Sim to real",
          "A demo with limits stated"
        ]
      }
    ]
  },
  {
    "code": "753",
    "title": "Computer Vision",
    "level": "Core AI",
    "band": "capstone",
    "prereqs": "CSCE 633, CSCE 646",
    "equivalents": [
      "Stanford CS231n",
      "MIT 6.8610",
      "CMU 16-824"
    ],
    "description": "From hand-crafted features to detectors, segmentation, multiview geometry, vision transformers, and neural fields. Treat vision as inverse graphics.",
    "credits": 3,
    "lectures": [
      {
        "title": "Vision as inverse graphics",
        "topics": [
          "Ambiguity",
          "Priors",
          "What pixels don't say"
        ]
      },
      {
        "title": "Features to representation learning",
        "topics": [
          "SIFT",
          "Convnets",
          "Invariance"
        ]
      },
      {
        "title": "Detection",
        "topics": [
          "R-CNN family",
          "YOLO idea",
          "mAP and NMS"
        ]
      },
      {
        "title": "Segmentation",
        "topics": [
          "Semantic vs instance",
          "Losses",
          "Boundaries"
        ]
      },
      {
        "title": "Geometry and 3D",
        "topics": [
          "Cameras",
          "Stereo",
          "Multiview"
        ]
      },
      {
        "title": "Transformers for vision",
        "topics": [
          "ViT",
          "Inductive bias lost",
          "Data scale"
        ]
      },
      {
        "title": "Neural fields and tracking",
        "topics": [
          "NeRF",
          "Temporal consistency",
          "Identity switches"
        ]
      },
      {
        "title": "A measured vision system",
        "topics": [
          "L = CE + λ_geo",
          "Ablation",
          "Failure gallery"
        ]
      }
    ]
  },
  {
    "code": "765",
    "title": "Network Security",
    "level": "Security",
    "band": "capstone",
    "prereqs": "CSCE 463, CSCE 465",
    "equivalents": [
      "MIT 6.858",
      "Stanford CS255",
      "Berkeley CS161"
    ],
    "description": "Adversarial networks: DDoS, BGP hijack, detection, zero trust, TLS, and measurement. Model the attacker, then the control.",
    "credits": 3,
    "lectures": [
      {
        "title": "The network as an adversary",
        "topics": [
          "Threat models",
          "Attacker cost",
          "What you defend"
        ]
      },
      {
        "title": "Cryptography on the wire",
        "topics": [
          "TLS 1.3",
          "Certificate errors",
          "What TLS does not hide"
        ]
      },
      {
        "title": "Routing attacks",
        "topics": [
          "BGP hijack",
          "RPKI limits",
          "Detection"
        ]
      },
      {
        "title": "Denial of service",
        "topics": [
          "Volumetric",
          "Application-layer",
          "Economics of bots"
        ]
      },
      {
        "title": "Detection and response",
        "topics": [
          "IDS vs IPS",
          "False positives",
          "eBPF observation"
        ]
      },
      {
        "title": "Zero trust",
        "topics": [
          "Identity",
          "Microsegmentation",
          "What still trusts the LAN"
        ]
      },
      {
        "title": "Measurement for defense",
        "topics": [
          "Baselines",
          "Darkspace",
          "Privacy of telemetry"
        ]
      },
      {
        "title": "A defense memo",
        "topics": [
          "Controls",
          "Residual risk",
          "A tabletop you could run"
        ]
      }
    ]
  }
];

export const courseByCode: Record<string, Course> = Object.fromEntries(
  courses.map((c) => [c.code, c]),
);

export function getCourse(code: string): Course | undefined {
  return courseByCode[code];
}
