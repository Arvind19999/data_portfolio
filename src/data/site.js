/**
 * Single source of truth for every piece of content on the site.
 * Edit here — the pages read from this file.
 */

export const profile = {
  name: 'Arbind Sah',
  firstName: 'Arbind',
  lastName: 'Sah',
  role: 'Data Engineer',
  tagline: 'Data Engineer building scalable ETL pipelines on Spark, AWS & Snowflake.',
  intro:
    'Results-driven Data Engineer with 3+ years of experience designing scalable ETL pipelines, automating data workflows, and integrating diverse data sources across cloud platforms.',
  about: [
    'I design and build the systems that move data — from messy source systems into clean, reliable, query-ready platforms. My day-to-day is PySpark, Apache Spark, AWS, SQL, Snowflake and Terraform, with a strong backend engineering foundation underneath it all.',
    'Over the last three years I have built a low-code ETL platform used by non-technical teams, integrated 20+ data source connectors, engineered an Apache Livy execution engine for remote PySpark submission, and run cross-database migrations across MySQL, PostgreSQL, Snowflake, Oracle, MSSQL and BigQuery.',
    'I care about data infrastructure that is fast, observable and hard to break — pipelines with checkpoint/resume, row-count validation and deduplication built in from day one.',
  ],
  email: 'SHa.arvind99@gmail.com',
  phone: '+977 9808593382',
  website: 'github.com/Arvind19999',
  location: 'Kathmandu, Nepal',
  address: 'Kathmandu, Bagmati Province, Nepal',
  availability: 'Open to new opportunities',
  experienceYears: '3+',
  resume: '/files/Arbind_Sah_Resume.pdf',
  // A short intro reel. Swap for your own YouTube/Vimeo embed URL.
  videoUrl: 'https://www.youtube.com/embed/PhvVNZ0FZZo',
};

/**
 * Rendered on the arc beside the hero portrait, and in the footer / drawer.
 * Order here is the order they sit on the arc, top to bottom.
 *
 * TODO: replace the two placeholder URLs below with your real profiles.
 */
export const socials = [
  {
    name: 'LinkedIn',
    short: 'in',
    url: 'https://linkedin.com/in/arbind-sah-a929051a8',
    icon: 'linkedin',
  },
  // placeholder — swap for your Facebook profile
  { name: 'Facebook', short: 'fb', url: 'https://facebook.com/', icon: 'facebook' },
  { name: 'GitHub', short: 'gh', url: 'https://github.com/Arvind19999', icon: 'github' },
  // placeholder — swap for your Fiverr gig URL
  { name: 'Fiverr', short: 'fvr', url: 'https://www.fiverr.com/', icon: 'fiverr' },
  { name: 'Email', short: '@', url: 'mailto:SHa.arvind99@gmail.com', icon: 'mail' },
];

export const stats = [
  { value: 3, suffix: '+', label: 'Years Engineering Data' },
  { value: 20, suffix: '+', label: 'Data Source Connectors' },
  { value: 15, suffix: '+', label: 'Transformation Types' },
  { value: 5, suffix: '', label: 'Cross-DB Migrations' },
];

export const services = [
  {
    slug: 'etl-pipeline-development',
    icon: 'pipeline',
    title: 'ETL Pipeline Development',
    excerpt:
      'End-to-end batch and incremental pipelines built on PySpark and Apache Spark, tuned for throughput and cost.',
    points: ['PySpark & Spark', 'Incremental Loads', 'Checkpoint / Resume', 'Row-Count Validation'],
    description:
      'I build ingestion and transformation pipelines that survive real production conditions — partial failures, schema drift, duplicate records and late-arriving data. Every pipeline ships with checkpoint/resume support, row-count reconciliation and deduplication so a failed run is a restart, not an incident.',
    deliverables: [
      'Source-to-target mapping and schema reconciliation',
      'PySpark jobs tuned for partition sizing and shuffle cost',
      'Incremental / CDC load strategies with watermarking',
      'Automated row-count and checksum validation',
      'Run history, alerting and failure recovery',
    ],
  },
  {
    slug: 'cloud-data-platforms',
    icon: 'cloud',
    title: 'Cloud Data Platforms',
    excerpt:
      'AWS infrastructure for data workloads — EC2 Spark clusters, S3 lakes, RDS, Lambda, all provisioned with Terraform.',
    points: ['AWS EC2 & S3', 'Terraform IaC', 'Auto Scaling', 'Docker & Nginx'],
    description:
      'I stand up and operate the infrastructure your data platform runs on. That means Spark clusters that scale with the workload instead of sitting idle, storage laid out for cheap scans, and every piece of it defined in Terraform so the environment can be rebuilt from scratch.',
    deliverables: [
      'Terraform modules for repeatable environments',
      'EC2 cluster provisioning with auto-scaling policies',
      'S3 data lake layout, lifecycle rules and partitioning',
      'Load balancers, Elastic IP and network configuration',
      'Containerised deployments with Docker Compose and Nginx',
    ],
  },
  {
    slug: 'database-migration',
    icon: 'migrate',
    title: 'Database Migration',
    excerpt:
      'Cross-database moves between MySQL, PostgreSQL, Snowflake, Oracle, MSSQL and BigQuery — validated end to end.',
    points: ['PySpark / JDBC', 'Type Mapping', 'Staged Bulk Loads', 'Zero Data Loss'],
    description:
      'Migrations are where data quietly goes missing. I have run MySQL→PostgreSQL, PostgreSQL→Snowflake, PostgreSQL→MySQL, MSSQL→BigQuery and Oracle→PostgreSQL moves, and every one of them was reconciled row by row before cutover.',
    deliverables: [
      'Schema translation and data type compatibility resolution',
      'PySpark JDBC extraction with parallel partition reads',
      'Staged bulk loading via S3 / GCS for warehouse targets',
      'Checkpoint/resume so long migrations survive interruption',
      'Row count validation and duplicate detection reports',
    ],
  },
  {
    slug: 'data-warehousing',
    icon: 'warehouse',
    title: 'Data Warehousing',
    excerpt:
      'Modelled, documented warehouses on Snowflake, Redshift and BigQuery with dbt and SQLMesh transformations.',
    points: ['Snowflake & Redshift', 'BigQuery', 'dbt / SQLMesh', 'Dimensional Modelling'],
    description:
      'A warehouse is only useful if analysts trust it. I model the layers — raw, staging, marts — write the transformations as tested, version-controlled code, and document the lineage so nobody has to guess where a number came from.',
    deliverables: [
      'Layered warehouse architecture (raw → staging → marts)',
      'dbt / SQLMesh models with tests and documentation',
      'Dimensional models for analytics and BI consumption',
      'Query and storage cost optimisation',
      'Data lineage and column-level documentation',
    ],
  },
  {
    slug: 'workflow-automation',
    icon: 'automation',
    title: 'Workflow Automation',
    excerpt:
      'Orchestrated, self-healing workflows using n8n, scheduled jobs and event-driven AWS Lambda functions.',
    points: ['n8n Workflows', 'AWS Lambda', 'Job Scheduling', 'State Tracking'],
    description:
      'Manual data work is the most expensive kind. I automate the recurring paths — ingestion, enrichment, publishing, notification — with explicit state tracking so a workflow knows what it already processed and can recover cleanly from an error.',
    deliverables: [
      'n8n workflows with deduplication and state labels',
      'Event-driven AWS Lambda functions (Docker packaged)',
      'Scheduled job orchestration with run history',
      'REST API integration and third-party service wiring',
      'Failure alerting and retry policies',
    ],
  },
  {
    slug: 'search-and-log-analytics',
    icon: 'search',
    title: 'Search & Log Analytics',
    excerpt:
      'Elasticsearch, Kibana and Logstash deployments for full-text search and operational log analytics.',
    points: ['Elasticsearch', 'Kibana Dashboards', 'Logstash', 'Index Design'],
    description:
      'When your data needs to be searched rather than queried, or when you need to see what your systems are actually doing, I deploy and tune the Elastic stack — index mappings, analyzers, ingest pipelines and the dashboards that sit on top.',
    deliverables: [
      'Elasticsearch cluster deployment and index mapping design',
      'Full-text search relevance tuning and analyzers',
      'Logstash ingest pipelines for application and system logs',
      'Kibana dashboards for operational visibility',
      'Retention, rollover and snapshot policies',
    ],
  },
];

export const skills = [
  { name: 'PySpark & Apache Spark', level: 92 },
  { name: 'SQL & Query Optimisation', level: 95 },
  { name: 'Python', level: 90 },
  { name: 'AWS & Terraform', level: 85 },
  { name: 'Snowflake / Redshift / BigQuery', level: 82 },
  { name: 'Airflow & Workflow Orchestration', level: 80 },
];

export const techStack = [
  {
    group: 'Languages',
    items: ['Python', 'SQL', 'Scala', 'Groovy', 'JavaScript', 'PHP'],
  },
  {
    group: 'Big Data & ETL',
    items: ['Apache Spark', 'PySpark', 'Apache Livy', 'Databricks', 'dbt', 'SQLMesh'],
  },
  {
    group: 'Databases',
    items: [
      'PostgreSQL',
      'MySQL',
      'Oracle',
      'MSSQL',
      'Snowflake',
      'Redshift',
      'BigQuery',
      'MongoDB',
      'Couchbase',
      'Cassandra',
    ],
  },
  {
    group: 'Cloud & DevOps',
    items: ['AWS EC2', 'S3', 'RDS', 'Lambda', 'SNS', 'IAM', 'Terraform', 'Docker', 'Nginx'],
  },
  {
    group: 'Search & Logging',
    items: ['Elasticsearch', 'Kibana', 'Logstash'],
  },
  {
    group: 'Frameworks & Tools',
    items: ['Grails/GORM', 'Laravel', 'Node.js', 'React', 'Vue.js', 'Pandas', 'Git', 'n8n'],
  },
];

export const experience = [
  {
    period: 'Jan 2024 – Present',
    title: 'Data Engineer',
    org: 'Azminds Services Pvt. Ltd.',
    location: 'Kathmandu, Nepal',
    points: [
      'Designed and developed DataFuseAI, a low-code ETL platform enabling non-technical users to build end-to-end pipelines through a visual interface, supporting 15+ transformation types.',
      'Built and integrated 20+ data source connectors spanning RDBMS, cloud warehouses, NoSQL stores, object storage and FTP/SFTP.',
      'Engineered an Apache Livy-based execution engine for remote PySpark job submission without direct cluster access.',
      'Managed AWS infrastructure — EC2 clusters, load balancers, auto-scaling groups — with scaling policies automated in Terraform.',
      'Executed cross-database migrations with checkpoint/resume, row-count validation and deduplication.',
    ],
  },
  {
    period: 'Dec 2022 – Dec 2023',
    title: 'Backend Developer',
    org: 'Unlimited Remit Technology',
    location: 'Kathmandu, Nepal',
    points: [
      'Built RESTful APIs for the Earn Sikka loyalty platform with multi-channel distribution via phone number, QR code and 6-digit code.',
      'Designed and optimised relational schemas in MySQL, PostgreSQL and Oracle for efficient storage and retrieval.',
      'Integrated third-party payment and identity verification services into the application backend.',
      'Delivered full-stack features with PHP (Laravel), MySQL and Vue.js alongside frontend and design teams.',
    ],
  },
];

export const education = [
  {
    period: '2026 – Ongoing',
    title: 'M.Sc. in Computer Engineering',
    org: 'Pulchowk Campus, Tribhuvan University',
    note: 'Specialization: Data Science and Analytics',
  },
  {
    period: '2017 – 2022',
    title: 'B.E. in Computer Engineering',
    org: 'Western Regional Campus, Pokhara',
    note: 'Percentage: 70.58%',
  },
  {
    period: '2015 – 2017',
    title: 'Higher Secondary Education (NEB — Science)',
    org: 'Arniko H.S.S, Biratnagar',
    note: 'Percentage: 80%',
  },
  {
    period: '2015',
    title: 'School Leaving Certificate (SLC)',
    org: 'Times School, Mirchaiya',
    note: 'Percentage: 86.875%',
  },
];

export const projects = [
  {
    slug: 'datafuseai',
    title: 'DataFuseAI — Low-Code ETL Platform',
    category: 'ETL Platform / PySpark / AWS',
    tags: ['ETL Platform', 'PySpark', 'AWS'],
    year: '2024 – Ongoing',
    client: 'Azminds Services Pvt. Ltd.',
    duration: 'Ongoing',
    date: 'Jan 2024',
    accent: '#7c8cff',
    summary:
      'A low-code data integration platform that lets non-technical users build end-to-end ETL pipelines visually — no code required.',
    overview: [
      'DataFuseAI was built to close the gap between the people who understand the data and the people who can write Spark jobs. Users assemble pipelines on a visual canvas; the platform compiles that graph into PySpark and submits it to one of three execution engines.',
      'The hardest part was not the canvas — it was making 20+ heterogeneous sources behave like one consistent interface, and making long-running distributed jobs observable enough that a failure is diagnosable without SSH access to a cluster.',
    ],
    challenge:
      'Non-technical analysts needed to build production ETL pipelines, but every existing option required either writing Spark code or accepting a rigid, closed transformation set.',
    approach: [
      {
        title: 'Visual pipeline compiler',
        text: 'A node graph compiled down to PySpark, supporting 15+ transformation types — Aggregate, Deduplicate, Filter, Join, Pivot, Unpivot, Window, Route, Split, Union, Derived and Rank.',
      },
      {
        title: 'Three execution engines',
        text: 'The same pipeline definition runs on Databricks, Apache Livy or local PySpark, so workloads can move between environments without being rewritten.',
      },
      {
        title: 'Connector abstraction layer',
        text: '20+ sources — MySQL, MSSQL, PostgreSQL, Oracle, Snowflake, Redshift, MongoDB, Couchbase, Cassandra, BigQuery, AWS RDS, Azure Blob, S3, FTP and SFTP — behind one uniform read/write contract.',
      },
      {
        title: 'Observability built in',
        text: 'Job scheduling, run history and data profiling modules so pipeline health is visible without cluster access.',
      },
    ],
    results: [
      { value: '20+', label: 'Data Source Connectors' },
      { value: '15+', label: 'Transformation Nodes' },
      { value: '3', label: 'Processing Engines' },
    ],
    stack: ['Python', 'PySpark', 'Apache Livy', 'Databricks', 'AWS', 'PostgreSQL', 'Docker'],
  },
  {
    slug: 'text-to-sql-engine',
    title: 'Text-to-SQL Engine',
    category: 'LLM / SqlGlot / Redis',
    tags: ['LLM', 'SqlGlot', 'Redis'],
    year: '2025',
    client: 'Internal R&D',
    duration: '4 months',
    date: 'Mar 2025',
    accent: '#4fd1c5',
    summary:
      'Natural-language questions converted into validated, dialect-correct SQL by a locally hosted LLM — with no query data leaving the environment.',
    overview: [
      'The premise: analysts should be able to ask a question in English and get SQL they can trust. The constraint: nothing about the schema or the query could leave the network, which ruled out hosted model APIs.',
      'Running a local model made generation cheap but unreliable, so the interesting engineering went into validation — three independent layers that catch a bad query before it ever touches the database, and feed the failure back to the model to correct itself.',
    ],
    challenge:
      'LLMs produce plausible SQL that is subtly wrong — wrong dialect, hallucinated columns, or a destructive statement dressed up as a question.',
    approach: [
      {
        title: 'Local-only inference',
        text: 'Ollama running DeepSeek-Coder-v2 16B, so schema and query data never leave the environment.',
      },
      {
        title: 'Three-layer validation with self-correction',
        text: 'A read-only keyword guard blocking 20 write/DDL operations, sqlglot AST parsing per dialect, and live EXPLAIN validation via SQLAlchemy. Failed SQL and its error are fed back to the model for up to 3 correction attempts.',
      },
      {
        title: 'Depth-limited schema extraction',
        text: 'Rather than sending the whole database to the model, the engine walks foreign-key relationships outward from a chosen table to a bounded depth.',
      },
      {
        title: 'Two-tier schema and session store',
        text: 'Redis as a hot cache with TTL, PostgreSQL as durable backup that automatically repopulates Redis on cache miss or restart. Multi-turn session context resolves follow-ups against previous turns.',
      },
    ],
    results: [
      { value: '14', label: 'SQL Dialects Supported' },
      { value: '26', label: 'Database Drivers' },
      { value: '3', label: 'Validation Layers' },
    ],
    stack: [
      'Python',
      'Ollama',
      'DeepSeek-Coder-v2',
      'SqlGlot',
      'SQLAlchemy',
      'Redis',
      'PostgreSQL',
      'Docker',
    ],
  },
  {
    slug: 'data-migration-pipelines',
    title: 'Data Migration Pipelines',
    category: 'Cross-Database ETL / PySpark',
    tags: ['Migration', 'PySpark', 'JDBC'],
    year: '2024 – 2025',
    client: 'Multiple Engagements',
    duration: '12 months',
    date: 'Jun 2024',
    accent: '#f6ad55',
    summary:
      'Five production cross-database migrations, each reconciled row by row before cutover.',
    overview: [
      'Five distinct migration paths, each with its own failure mode: type precision loss, dialect-specific NULL semantics, warehouse bulk-load requirements, and datasets large enough that a mid-run failure could not mean starting over.',
      'The shared foundation across all of them was PySpark reading through JDBC with partitioned parallel reads, plus a validation harness that compared row counts and detected duplicates on every table before the target was declared live.',
    ],
    challenge:
      'Large-scale relational datasets had to move between incompatible engines without data loss, and without a migration window long enough to allow a full restart on failure.',
    approach: [
      {
        title: 'MySQL → PostgreSQL',
        text: 'PySpark JDBC connectors with schema mapping, type casting and incremental load strategies.',
      },
      {
        title: 'PostgreSQL → Snowflake',
        text: 'Automated pipelines using the Snowflake Spark connector, staging through S3 for efficient bulk loading.',
      },
      {
        title: 'MSSQL → BigQuery',
        text: 'CTE-based transformation chains across 11 stages, followed by PySpark-to-BigQuery writes via a GCS staging bucket.',
      },
      {
        title: 'Oracle → PostgreSQL',
        text: 'Resolved CLOB and NUMBER precision compatibility issues with schema filtering during full-load migration.',
      },
    ],
    results: [
      { value: '5', label: 'Migration Paths' },
      { value: '11', label: 'Transformation Stages' },
      { value: '100%', label: 'Row-Count Reconciled' },
    ],
    stack: [
      'PySpark',
      'JDBC',
      'Snowflake',
      'BigQuery',
      'AWS S3',
      'GCS',
      'PostgreSQL',
      'MySQL',
      'MSSQL',
      'Oracle',
    ],
  },
  {
    slug: 'yacht-cloud',
    title: 'Yacht Cloud — Charter Management',
    category: 'Grails / Elasticsearch / AWS',
    tags: ['Grails', 'Elasticsearch', 'AWS Lambda'],
    year: '2024 – Ongoing',
    client: 'Azminds Services Pvt. Ltd.',
    duration: 'Ongoing',
    date: 'May 2024',
    accent: '#68d391',
    summary:
      'A charter management platform with full-text yacht search, an AI chatbot, and an async multi-site scraper running on Lambda.',
    overview: [
      'Yacht Cloud handles the operational side of charter management — yachts, bookings, crew profiles, collaboration, payments with installment support and expense tracking, built on Grails/GORM with Spring Security.',
      'The data engineering work sat underneath: an Elasticsearch layer powering both full-text search and an AI chatbot that resolves queries about offers, availability and booking status, plus a scraper that keeps listing data current.',
    ],
    challenge:
      'Charter listings live across many operator sites in inconsistent formats, and users expect to search all of them as one catalogue.',
    approach: [
      {
        title: 'Async multi-site scraper',
        text: 'Playwright-based scraper deployed to AWS Lambda in a Docker image, processing thousands of listings with OpenAI Batch API normalization.',
      },
      {
        title: 'Elasticsearch search layer',
        text: 'Full-text yacht search with an AI-powered chatbot resolving offer, availability and booking-status queries.',
      },
      {
        title: 'Media and payments',
        text: 'S3 presigned URL uploads, gallery management, installment-aware payment tracking and expense management.',
      },
      {
        title: 'Tiered packages',
        text: 'Anchor (3 yachts), Harbour (5 yachts), Regatta (10 yachts) and Admiral (unlimited) subscription tiers.',
      },
    ],
    results: [
      { value: '1000s', label: 'Listings Processed' },
      { value: '4', label: 'Subscription Tiers' },
      { value: 'AI', label: 'Chatbot Search' },
    ],
    stack: [
      'Grails',
      'Groovy',
      'PostgreSQL',
      'Elasticsearch',
      'AWS S3',
      'AWS Lambda',
      'PySpark',
      'OpenAI API',
    ],
  },
  {
    slug: 'blogs-automation-flow',
    title: 'Blogs Automation Flow',
    category: 'n8n / OpenAI / REST APIs',
    tags: ['n8n', 'OpenAI', 'Automation'],
    year: '2025',
    client: 'Internal Tooling',
    duration: '6 weeks',
    date: 'Feb 2025',
    accent: '#f687b3',
    summary:
      'An end-to-end n8n workflow that ingests blog content from Gmail, generates structured posts with GPT, and publishes them automatically.',
    overview: [
      'A content pipeline that starts in an inbox and ends with a published post and a notified stakeholder, with no human step in between.',
      'The engineering value is in the state machine: every item is tracked through Processing → Processed/Error using label-based Gmail folders, so a re-run never duplicates work and a failure is recoverable rather than silent.',
    ],
    challenge:
      'Blog content arrived by email in inconsistent formats and had to be published reliably without duplicate posts on re-runs.',
    approach: [
      {
        title: 'Ingest and deduplicate',
        text: 'Gmail-triggered ingestion that deduplicates against a processing log and extracts/sanitizes raw text.',
      },
      {
        title: 'LLM content generation',
        text: 'OpenAI GPT generates structured blog content from sanitized input, with the output parsed into validated JSON.',
      },
      {
        title: 'API orchestration',
        text: 'Sequenced REST calls for login, blog creation and manager/invitee lookup, publishing content and notifying stakeholders via Gmail.',
      },
      {
        title: 'State tracking',
        text: 'Label-based Gmail folders track Processing → Processed/Error to prevent duplicate runs and support failure recovery.',
      },
    ],
    results: [
      { value: '100%', label: 'Hands-Off Publishing' },
      { value: '0', label: 'Duplicate Posts' },
      { value: '3', label: 'Pipeline States' },
    ],
    stack: ['n8n', 'Gmail API', 'OpenAI API', 'REST APIs', 'JSON'],
  },
  {
    slug: 'sql-dialect-conversion',
    title: 'SQL Dialect Conversion Platform',
    category: 'SqlGlot / Python',
    tags: ['SqlGlot', 'Python', 'Parsing'],
    year: '2024',
    client: 'Azminds Services Pvt. Ltd.',
    duration: '2 months',
    date: 'Sep 2024',
    accent: '#63b3ed',
    summary:
      'A query translation tool that converts SQL across MySQL, MSSQL, PostgreSQL and Oracle dialects.',
    overview: [
      'Migrating a database means migrating every query that touched it. This tool takes the mechanical part of that work — dialect syntax differences — and automates it.',
      'SqlGlot handles the AST-level translation; a layer of custom regex-based rules covers the vendor-specific constructs that a generic parser maps imperfectly.',
    ],
    challenge:
      'Migration projects stalled on the manual rewrite of hundreds of vendor-specific queries between SQL dialects.',
    approach: [
      {
        title: 'AST-based translation',
        text: 'SqlGlot parses source SQL into an abstract syntax tree and regenerates it in the target dialect.',
      },
      {
        title: 'Custom rule layer',
        text: 'Regex-based transformation rules handle vendor-specific functions and syntax the generic parser maps imperfectly.',
      },
      {
        title: 'Four-dialect coverage',
        text: 'Bidirectional conversion across MySQL, MSSQL, PostgreSQL and Oracle.',
      },
    ],
    results: [
      { value: '4', label: 'SQL Dialects' },
      { value: 'AST', label: 'Based Translation' },
      { value: '2mo', label: 'Delivery Time' },
    ],
    stack: ['Python', 'SqlGlot', 'Regular Expressions'],
  },
];

export const testimonials = [
  {
    quote:
      'Arbind rebuilt our ingestion layer in PySpark and cut the nightly window from six hours to under one. He is the rare engineer who treats data validation as part of the job rather than an afterthought.',
    name: 'Engineering Manager',
    role: 'Azminds Services',
    rating: 5,
  },
  {
    quote:
      'We handed him an Oracle to PostgreSQL migration everyone else called risky. He delivered it with checkpoint/resume and row-level reconciliation, and we cut over with zero data loss.',
    name: 'Data Platform Lead',
    role: 'Enterprise Client',
    rating: 5,
  },
  {
    quote:
      'The low-code ETL platform he built means our analysts ship their own pipelines now. That single change removed our biggest engineering bottleneck.',
    name: 'Product Owner',
    role: 'DataFuseAI',
    rating: 5,
  },
];

export const pricing = [
  {
    name: 'Pipeline',
    price: '$45',
    unit: '/hr',
    featured: false,
    description: 'For focused, well-scoped data engineering work.',
    features: [
      'ETL pipeline development',
      'SQL & Spark query optimisation',
      'Up to 20 hrs / week',
      'Code review & handover docs',
      'Email support',
    ],
  },
  {
    name: 'Platform',
    price: '$3,200',
    unit: '/mo',
    featured: true,
    description: 'Ongoing ownership of your data platform.',
    features: [
      'Everything in Pipeline',
      'Cloud infrastructure & Terraform',
      'Warehouse modelling (dbt / SQLMesh)',
      'Monitoring & on-call for pipelines',
      'Weekly sync + priority support',
    ],
  },
];

export const faqs = [
  {
    q: 'What does a data engineer actually deliver?',
    a: 'Working infrastructure, not slides. Typically: ingestion pipelines from your source systems, a modelled warehouse or lake your analysts can query, orchestration so it runs on schedule, and validation so you find out about a problem before your stakeholders do.',
  },
  {
    q: 'Which cloud platforms do you work with?',
    a: 'Primarily AWS — EC2, S3, RDS, Lambda, SNS, Route 53 and IAM — provisioned with Terraform. I also work with Databricks, Snowflake, Redshift, BigQuery and Azure Blob storage as platform components.',
  },
  {
    q: 'Can you migrate our existing database?',
    a: 'Yes. I have run production migrations across MySQL→PostgreSQL, PostgreSQL→Snowflake, PostgreSQL→MySQL, MSSQL→BigQuery and Oracle→PostgreSQL, all with checkpoint/resume, row-count validation and duplicate detection so nothing is lost in transit.',
  },
  {
    q: 'How do you handle pipeline failures?',
    a: 'Every pipeline is built with checkpoint/resume so a failed run restarts from the last good state rather than the beginning. Row-count validation and deduplication run automatically, and run history plus alerting mean failures surface immediately.',
  },
  {
    q: 'Do you work with streaming data?',
    a: 'Yes — Spark Structured Streaming for continuous processing, with Elasticsearch and Kibana where the use case calls for real-time search or log analytics rather than batch aggregation.',
  },
  {
    q: 'How do we start working together?',
    a: 'Send a note through the contact form describing your data stack and what is currently painful. I will come back with an honest assessment of scope, approach and timeline before any commitment.',
  },
];

export const posts = [
  {
    slug: 'checkpoint-resume-pyspark-migrations',
    title: 'Checkpoint and Resume: Making Long PySpark Migrations Survivable',
    category: 'Data Engineering',
    date: '18 March 2025',
    author: 'Arbind Sah',
    readTime: '8 min read',
    accent: '#7c8cff',
    excerpt:
      'A twelve-hour migration that fails at hour eleven should not cost you eleven hours. Here is the checkpointing pattern I use on every cross-database move.',
    body: [
      'The first large migration I ran failed at 94% because a single row had a NUMBER precision that PostgreSQL would not accept. We restarted from zero. That was the last time.',
      'The pattern is simple in outline: partition the source table by a monotonic key, record each completed partition in a control table, and on restart skip everything already recorded. The details are where it gets interesting.',
      'Partition boundaries have to be deterministic across runs. If you compute them from a live MIN/MAX at job start, a restart after new inserts will produce different boundaries and you will either duplicate or skip rows. Freeze the boundaries into the control table on the first run and read them back on every subsequent one.',
      'Write idempotently. Even with perfect bookkeeping, a worker can die between writing data and committing its checkpoint. Either make the target write upsert-shaped on a natural key, or write each partition to a staging location and promote atomically once the checkpoint lands.',
      'Finally, validate. Row counts per partition, compared source to target, before you declare the migration complete. A migration that "finished" is not the same as a migration that is correct, and the difference tends to surface at the worst possible moment.',
    ],
  },
  {
    slug: 'spark-partition-sizing',
    title: 'Why Your Spark Job Is Slow: Partition Sizing First',
    category: 'Apache Spark',
    date: '02 February 2025',
    author: 'Arbind Sah',
    readTime: '6 min read',
    accent: '#4fd1c5',
    excerpt:
      'Before you touch executor memory or add nodes, look at how your data is partitioned. It is the cause more often than anything else.',
    body: [
      'Most Spark tuning advice starts with cluster configuration. In my experience, the majority of slow jobs are slow for a much more boring reason: the partitions are the wrong size.',
      'Too few partitions and you leave cores idle while a handful of tasks grind through oversized chunks. Too many and the scheduler overhead plus tiny output files cost more than the work itself. The useful target is partitions in the low hundreds of megabytes, sized so every core gets work.',
      'Skew is the other half of the problem. A join key with one dominant value produces one task doing 80% of the work while the rest of the cluster waits. Salting the key, or switching to a broadcast join when one side is small enough, usually resolves it outright.',
      'Check the Spark UI before changing anything. If your longest task takes ten times the median, you have skew, not a resource shortage — and adding executors will not help.',
    ],
  },
  {
    slug: 'low-code-etl-lessons',
    title: 'What I Learned Building a Low-Code ETL Platform',
    category: 'Platform Engineering',
    date: '11 December 2024',
    author: 'Arbind Sah',
    readTime: '9 min read',
    accent: '#f6ad55',
    excerpt:
      'Twenty connectors, fifteen transformation types and three execution engines later — the abstractions that held up and the ones that did not.',
    body: [
      'DataFuseAI started from a simple observation: the people who understood the data best could not write the Spark jobs that moved it, and the people who could write those jobs did not have the domain context.',
      'The connector abstraction held up best. Every source — relational, warehouse, NoSQL, object storage, FTP — implements the same read/write contract. Adding the twentieth connector took a day because the nineteen before it had already forced the interface into the right shape.',
      'The transformation abstraction was harder. A visual node that maps cleanly to a Spark operation is easy; a node that has to express window functions, unpivots and conditional routing without becoming a programming language is not. We settled on 15+ explicit node types rather than a general-purpose expression builder, and users were measurably happier with the constraint.',
      'The lesson I would carry into the next platform: make the execution engine swappable from day one. Supporting Databricks, Apache Livy and local PySpark behind one interface meant workloads could move between environments without a rewrite — and that flexibility turned out to matter more than any individual feature.',
    ],
  },
  {
    slug: 'local-llm-sql-validation',
    title: 'Trusting an LLM With SQL: Three Layers of Validation',
    category: 'AI & Data',
    date: '24 October 2024',
    author: 'Arbind Sah',
    readTime: '7 min read',
    accent: '#68d391',
    excerpt:
      'Generated SQL is plausible far more often than it is correct. The fix is not a better prompt — it is a validation pipeline that self-corrects.',
    body: [
      'A local model will happily produce a DELETE statement in response to a question phrased as a query, invent a column that does not exist, or emit MySQL syntax for a Postgres connection. None of these look wrong until they run.',
      'Layer one is a read-only keyword guard: 20 write and DDL operations blocked outright before anything else happens. Cheap, absolute, and it eliminates the entire class of destructive failures.',
      'Layer two is sqlglot AST parsing against the specific target dialect. This catches syntax that is valid somewhere but not here — the failure mode a generic SQL parser would let through.',
      'Layer three is a live EXPLAIN through SQLAlchemy. This is the only layer that can catch a hallucinated column or table, because it is the only one that asks the actual database.',
      'The part that makes it usable is the feedback loop. When a layer rejects a query, the SQL and the specific error go back to the model for correction, up to three attempts. Most failures resolve on the first retry — the model just needed to be told what it got wrong.',
    ],
  },
];

export const navigation = [
  { label: 'Home', to: '/' },
  {
    label: 'Service',
    to: '/services',
    children: [
      { label: 'Services', to: '/services' },
      { label: 'Service Details', to: '/services/etl-pipeline-development' },
    ],
  },
  {
    label: 'Blog',
    to: '/blog',
    children: [
      { label: 'Blog List', to: '/blog' },
      { label: 'Blog Details', to: '/blog/checkpoint-resume-pyspark-migrations' },
    ],
  },
  {
    label: 'Pages',
    to: '/about',
    children: [
      { label: 'About Me', to: '/about' },
      { label: 'Projects', to: '/projects' },
      { label: 'Project Details', to: '/projects/datafuseai' },
      { label: 'FAQ', to: '/faq' },
      { label: '404 Page', to: '/404' },
    ],
  },
  { label: 'Contact', to: '/contact' },
];
