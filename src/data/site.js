/**
 * Single source of truth for every piece of content on the site.
 * Edit here — the pages read from this file.
 */

/**
 * Web3Forms relays the contact form to `profile.email`, so the site stays
 * static — no server, nothing to deploy alongside it.
 *
 * Get a key at web3forms.com: you give them the address to deliver to and they
 * mail the key back, no account. It belongs in client code and is safe there —
 * it only ever delivers to the address it was issued for, so a stranger who
 * copies it can only send you mail, which they could do anyway.
 *
 * Left empty, the form falls back to opening the visitor's mail client.
 */
export const contactFormKey = '64c8bafa-94a0-4d6d-a25c-e941961219d2';

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

    /**
     * Optional. Any project can carry a `media` block; the detail page swaps its
     * generated artwork for the video and renders the gallery below the write-up.
     * `span: 'full'` gives a shot the whole row, otherwise it takes half.
     */
    media: {
      /* Card artwork in the project grid. Cropped to 16/11 there, so pick a
         shot whose subject sits in the middle. */
      thumb: { src: '/projects_data/dfai/pipeline.png', width: 1859, height: 963 },

      video: {
        src: '/projects_data/dfai/walkthrough.mp4',
        poster: '/projects_data/dfai/walkthrough-poster.jpg',
        width: 1440,
        height: 722,
        length: '5 min',
        title: 'Building a pipeline end to end',
        caption:
          'A full walkthrough of the Marketplace Seller Risk Scoring pipeline — assembling the graph on the canvas, running it on Databricks, watching the execution log, then inspecting results and retention settings. No audio.',
      },
      shots: [
        {
          src: '/projects_data/dfai/pipeline.png',
          width: 1859,
          height: 963,
          span: 'full',
          title: 'The pipeline canvas',
          caption:
            'A HubSpot revenue-operations pipeline: five API sources fan out through Explode, Join, Derived, Union, Aggregate and Route nodes into five PostgreSQL sinks, each with a profiling step attached. The left rail is the node palette the graph is assembled from.',
        },
        {
          src: '/projects_data/dfai/pipeline2.png',
          width: 1889,
          height: 963,
          title: 'Routing and windowing',
          caption:
            'A Route node splitting 15,000 customer-order rows three ways by rule, with the main branch running Aggregate → Derived → Window before landing. Row counts are shown on every edge.',
        },
        {
          src: '/projects_data/dfai/query.png',
          width: 1648,
          height: 898,
          title: 'Query editor',
          caption:
            'The built-in editor with schema browsing, saved and recent queries, and an engine switch — the same query can be sent to PostgreSQL directly or to Databricks.',
        },
        {
          src: '/projects_data/dfai/chart.png',
          width: 1889,
          height: 760,
          title: 'Column profiling',
          caption:
            'Automatic profiling of every output column — cardinality, null counts, min/mean/max — with a per-column histogram. Here, customer tier across 1,000 records.',
        },
        {
          src: '/projects_data/dfai/chart2.png',
          width: 1889,
          height: 760,
          title: 'Distribution at scale',
          caption:
            'The same profiler over a 7,696-row sink, showing market-segment distribution alongside the raw distribution table.',
        },
      ],
    },
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

    media: {
      thumb: { src: '/projects_data/n8n/blog_overall_view.png', width: 1844, height: 916 },

      video: {
        src: '/projects_data/n8n/walkthrough.mp4',
        poster: '/projects_data/n8n/walkthrough-poster.jpg',
        width: 1440,
        height: 746,
        length: '2 min',
        title: 'One run, start to finish',
        caption:
          'The workflow executing live — Gmail trigger through extraction, sanitising and GPT generation to publish and notify — then a look inside the code nodes at the JSON going in and coming out. No audio.',
      },
      shots: [
        {
          src: '/projects_data/n8n/blog_overall_view.png',
          width: 1844,
          height: 916,
          span: 'full',
          title: 'The whole flow',
          caption:
            'Schedule Trigger → Gmail → label as Processing → Text Extraction → Sanitize → Generate Blog Post → Login → Create Blog → Get Manager and Invitee → notify, with every node routing its Error branch into "Add To Blogs (Error)" so a failed item lands somewhere recoverable instead of vanishing.',
        },
        {
          src: '/projects_data/n8n/javascript_text_extraction.png',
          width: 1831,
          height: 903,
          title: 'Text extraction',
          caption:
            'The code node that pulls subject, body and binary attachments off each Gmail message and flattens 50 items into one predictable shape — raw message JSON on the left, the extracted schema on the right.',
        },
        {
          src: '/projects_data/n8n/javascript_to_clean.png',
          width: 1831,
          height: 903,
          title: 'Sanitising the body',
          caption:
            'Forwarded mail arrives as HTML with encoded entities, so this step strips tags and decodes them before anything reaches the model. Note the split Success / Error branches on the output.',
        },
        {
          src: '/projects_data/n8n/content_of_email.png',
          width: 1803,
          height: 885,
          /* full width so the third half-shot isn't left alone on a row —
             and the in/out tables here need the room to be readable */
          span: 'full',
          title: 'State tracking by Gmail label',
          caption:
            'There is no database behind this — the Gmail labels are the state machine. This node stamps each message as Blogs (Processing) via {{ $json.id }}, and later steps move it to Processed or Error, which is what makes a re-run safe.',
        },
      ],
    },
  },
  {
    slug: 'yachtchartersuite',
    title: 'YachtCharterSuite — Charter Management',
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
      'YachtCharterSuite handles the operational side of charter management — yachts, bookings, crew profiles, collaboration, payments with installment support and expense tracking, built on Grails/GORM with Spring Security.',
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

    media: {
      thumb: { src: '/projects_data/ycs/browse-fleet.jpg', width: 1852, height: 928 },

      video: {
        src: '/projects_data/ycs/walkthrough.mp4',
        poster: '/projects_data/ycs/walkthrough-poster.jpg',
        width: 1440,
        height: 722,
        length: '3 min',
        title: 'A tour of the platform',
        caption:
          'Operator dashboard through the searchable fleet catalogue and into a single yacht — pricing, gallery and brochure — showing how the scraped listings and the operator-managed ones sit in one place. No audio.',
      },
      shots: [
        {
          src: '/projects_data/ycs/browse-fleet.jpg',
          width: 1852,
          height: 928,
          span: 'full',
          title: 'Browsing 2,271 yachts',
          caption:
            'The Elasticsearch layer from the user\'s side — the scraped catalogue filtered by region, dates, guests, yacht type, length and price, each card expandable into availability, pricing and offers without leaving the results.',
        },
        {
          src: '/projects_data/ycs/dashboard.png',
          width: 1852,
          height: 928,
          title: 'Operator dashboard',
          caption:
            'Revenue, occupancy rate and average booking duration against the previous year, the booking schedule with payment state per charter, and the live calendar down the right.',
        },
        {
          src: '/projects_data/ycs/yacht-database.png',
          width: 1852,
          height: 928,
          title: 'Managed vs scraped',
          caption:
            'The admin split that makes the catalogue work: 15 operator-managed yachts against 3,336 scraped ones, with a standing warning for the 945 listings still missing a contact — enquiry routing depends on it.',
        },
        {
          src: '/projects_data/ycs/yacht-gallery.jpg',
          width: 1852,
          height: 928,
          title: 'Media management',
          caption:
            'S3-backed gallery for one yacht — 33 images auto-sorted into Aerial, Exterior, Interior and Lifestyle, each re-taggable, feeding the public brochure. The progress bar tracks how complete a listing is.',
        },
        {
          src: '/projects_data/ycs/life-on-deck.jpg',
          width: 1852,
          height: 900,
          title: 'Life on Deck',
          caption:
            'Shared moments from each charter, organised per yacht and synced into the brochures — the content side that keeps a listing current once the scraper has done its part.',
        },
      ],
    },
  },
  {
    slug: 'yacht-scraper',
    title: 'Yacht Scraper — Charter Fleet Extraction',
    category: 'Selenium / FastAPI / React',
    tags: ['Web Scraping', 'FastAPI', 'Selenium'],
    year: '2026',
    // TODO: confirm these two — the repo only shows commits on 28 Jul 2026, so
    // the duration is a guess and the client is inferred from the gig artwork.
    client: 'Freelance Engagement',
    duration: '3 weeks',
    date: 'Jul 2026',
    accent: '#e0b877',
    summary:
      'A charter fleet scraped into a queryable dataset — run it from a browser, watch it live, export it, and diff one run against the last to see what moved.',
    overview: [
      'Two-phase Selenium scrape behind a FastAPI job runner, with a React front end that turns it into something a non-engineer can operate: start a run, watch the log stream, browse what came back and export it. Phase one collects every card on the fleet page; phase two opens each yacht’s detail page for the gallery, specifications, features, accommodation and seasonal rates.',
      'The interesting part is not the parsing — it is what happens when a run does not finish. A real browser session over 111 yachts at 10–15 seconds each is long enough that cancellations, failed pages and server restarts are normal, so the whole job model is built around resuming rather than starting over.',
    ],
    challenge:
      'A scrape long enough to be interrupted is a scrape that will be interrupted — and re-running the whole fleet to recover a handful of failed pages costs an hour of real browser time.',
    approach: [
      {
        title: 'Every card persisted before navigation',
        text: 'Phase 1 writes each yacht card to its own table the moment it is parsed, before phase 2 navigates away. That single decision is what makes resume possible: the outstanding work is just the cards with no successful record yet.',
      },
      {
        title: 'Retry and resume as phase-2-only runs',
        text: 'Retry re-runs the yachts whose detail page failed; resume finishes everything a cancelled or crashed job never reached. Neither revisits the fleet page, so both cost one detail page per yacht and nothing else.',
      },
      {
        title: 'Interrupted jobs reconciled at startup',
        text: 'A job’s state lives half in the database and half in the process. Any row still marked running after a restart is lying, so startup marks those interrupted — a terminal status you can resume from, rather than a ghost that blocks every future run.',
      },
      {
        title: 'Run-over-run diffing',
        text: 'Two jobs compared per yacht across the fields worth alerting on — rates, availability calendar, agent contacts, specs — with signed deltas on the numbers. Image URLs are deliberately excluded: the source rewrites them on every deploy and would drown every real change.',
      },
      {
        title: 'Live progress over SSE',
        text: 'Each job writes to the database as it goes and pushes to an in-memory ring buffer that feeds a cursor-based SSE stream, so the browser gets a live log and per-yacht progress without polling the database.',
      },
      {
        title: 'Exports in the shape the next tool wants',
        text: 'JSON keeps the nesting; CSV, XLSX and NDJSON flatten to one row per yacht with a pipe separator, because yacht features contain commas. An image manifest exports one row per gallery image, ready for wget or an asset pipeline.',
      },
    ],
    results: [
      { value: '111', label: 'Yachts In The Fleet' },
      { value: '25', label: 'Fields Per Yacht' },
      { value: '4,262', label: 'Gallery Images' },
    ],
    stack: [
      'Python',
      'FastAPI',
      'Selenium',
      'BeautifulSoup',
      'SQLAlchemy',
      'React',
      'SQLite / PostgreSQL',
      'SSE',
    ],

    media: {
      // left-aligned: a centred crop cuts the first letter off the headline
      thumb: {
        src: '/projects_data/yacht_scrapping/overview.png',
        width: 1280,
        height: 769,
        position: 'left center',
      },

      video: {
        src: '/projects_data/yacht_scrapping/walkthrough.mp4',
        poster: '/projects_data/yacht_scrapping/walkthrough-poster.jpg',
        width: 1280,
        height: 1414,
        length: '1 min',
        title: 'A run, both ends at once',
        caption:
          'The control panel on top and the browser it is driving underneath — progress counters, the live log and each detail page loading in real time as Selenium works through the fleet. No audio.',
      },
      shots: [
        {
          src: '/projects_data/yacht_scrapping/overview.png',
          width: 1280,
          height: 769,
          span: 'full',
          title: 'What the scrape produces',
          caption:
            '111 yachts, 25 fields each and 4,262 gallery images, available as JSON, CSV, Excel or straight off the API — with the crawler dashboard showing fleet totals, average charter rate and vessel length across the collected set.',
        },
        {
          src: '/projects_data/yacht_scrapping/dashboard.png',
          width: 1280,
          height: 769,
          title: 'Analytics over the result set',
          caption:
            'The collected fleet as a dataset rather than a file — capacity by shipyard, weekly rate against overall length, build-decade distribution and booking-calendar telemetry, all computed from the scraped records.',
        },
        {
          src: '/projects_data/yacht_scrapping/before-after.png',
          width: 1280,
          height: 769,
          title: 'Raw source to typed record',
          caption:
            'The actual transformation: minified markup with base64 placeholders and an inline __NEXT__ payload on the left, a typed record with normalised numbers, currency and a stable unique key on the right.',
        },
      ],
    },
  },
  {
    slug: 'driving-school-migration',
    title: 'Driving School Platform — MySQL To PostgreSQL',
    category: 'Multi-Tenant Migration / PySpark',
    tags: ['Migration', 'PySpark', 'JDBC'],
    year: '2026',
    // TODO: confirm — the notebooks are dated Jul 2026, but I have set the client
    // and duration from memory of the engagement rather than anything in the repo.
    client: 'Azminds Services Pvt. Ltd.',
    duration: '2 months',
    date: 'Jul 2026',
    accent: '#f6ad55',
    summary:
      'Two live driving-school systems folded into one multi-tenant PostgreSQL schema, with the new platform’s columns reconstructed from the old one’s evidence.',
    overview: [
      'A legacy driving-school application on MySQL and a newer PostgreSQL one had to become a single tenant on a multi-tenant platform — every record landing in one schema, tenant_<uuid>, on the new database. Forty-four target tables, drawn from seventeen legacy MySQL tables plus the newer system’s own.',
      'Databricks and PySpark did the work over JDBC, but the moving of bytes was never the hard part. The two systems had been designed independently, so they disagreed about almost everything that matters when you merge them: primary keys, what a school is, and which columns exist at all.',
    ],
    challenge:
      'Both systems numbered their rows from one, the legacy database stored a student’s school as free-typed text, and several columns the new platform treats as required simply had no counterpart in the old schema.',
    approach: [
      {
        title: 'One ID space out of two',
        text: 'Each system’s keys were re-based to continue after the other’s maximum rather than collide with it — a window-ordered row number plus an offset. Every migrated row kept an old_id, so foreign keys could be re-pointed afterwards and any record traced back to the system it came from.',
      },
      {
        title: 'Free text resolved to a foreign key',
        text: 'The legacy database had students typing their school name; the new one has a schools table. Names were trimmed and lowered, known aliases collapsed ("Carpenteria High" and "Carpenteria High School" are one school, "Other - Not Listed" and "Not Listed" are one bucket), then broadcast-joined against the school table to produce a real school_id.',
      },
      {
        title: 'Missing columns derived from behaviour',
        text: 'Rather than defaulting the new platform’s flags, each was reconstructed from what the old data proved: driver_ed from appearing in the driver-ed progress or test-status tables, has_paid from those or from a transaction, locked_by_cancellation_package from holding an undeposited cancellation fee.',
      },
      {
        title: 'A transformation library, not 44 scripts',
        text: 'Twenty-two shared helpers — column renaming, typed defaults for absent columns, a null vocabulary that folds "n/a", "unknown" and "not specified" back to real NULLs, generic multi-column joins, username synthesis — live in one notebook that every table notebook runs. The per-table work is then mostly mapping dictionaries.',
      },
      {
        title: 'JDBC tuned at both ends',
        text: 'Partitioned parallel reads with a fetch size on the source side, batched appends on the write side, and stringtype=unspecified on the PostgreSQL writer so the target casts incoming strings into its enum, UUID and JSON columns instead of rejecting them.',
      },
    ],
    results: [
      { value: '44', label: 'Tables Migrated' },
      { value: '2 → 1', label: 'Systems Merged' },
      { value: '22', label: 'Reusable Transforms' },
    ],
    stack: [
      'PySpark',
      'Databricks',
      'JDBC',
      'MySQL',
      'PostgreSQL',
      'MariaDB Driver',
      'Spark SQL',
      'Window Functions',
    ],
    media: {
      // No walkthrough for this one — a migration has nothing worth watching.
      // The hero is a drawn diagram instead; see ProjectDiagram.jsx.
      diagram: 'migration-flow',
      // left-aligned: a centred 16/11 crop starts past the "FOR SCHOOL TABLES"
      // heading and shows half a word
      thumb: {
        src: '/projects_data/driving_school_data_migration/schema-mapping.png',
        width: 1756,
        height: 930,
        position: 'left center',
      },
      // Every shot is full-width: these are dual-pane code captures, and at half
      // the container width the code stops being readable — which is the point.
      shots: [
        {
          src: '/projects_data/driving_school_data_migration/schema-mapping.png',
          width: 1756,
          height: 930,
          span: 'full',
          title: 'Mapping the legacy schema onto the new one',
          caption:
            'Old column names on the left, the dictionaries that rename them into the target schema below, and the shared transformation notebook open alongside — the pairing every table notebook works in.',
        },
        {
          src: '/projects_data/driving_school_data_migration/column-defaults.png',
          width: 1756,
          height: 930,
          span: 'full',
          title: 'Columns the legacy schema never had',
          caption:
            'A spec of column, type and default for everything the new platform expects and the old database cannot supply, applied by a helper that skips any column already present.',
        },
        {
          src: '/projects_data/driving_school_data_migration/sequential-ids.png',
          width: 1756,
          height: 930,
          span: 'full',
          title: 'Two systems, one ID space',
          caption:
            'Lesson IDs and lesson ordering re-based to continue from the other system’s maximum, using the sequential-id helper on the right rather than trusting either source’s numbering.',
        },
        {
          src: '/projects_data/driving_school_data_migration/union-and-join.png',
          width: 1756,
          height: 930,
          span: 'full',
          title: 'Merging the two sources',
          caption:
            'A union by name across mismatched columns, then a left join to pull across the fields only the newer system holds — description, address, city, state — before the combined frame is written.',
        },
        {
          src: '/projects_data/driving_school_data_migration/jdbc-writers.png',
          width: 1756,
          height: 740,
          span: 'full',
          title: 'Landing in the tenant schema',
          caption:
            'The PostgreSQL writer: schema-qualified target table, batched appends across five partitions, and stringtype=unspecified so the database casts strings into its own column types.',
        },
      ],
    },
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
    price: '$20',
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
    price: '$1000',
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
      // { label: '404 Page', to: '/404' },
    ],
  },
  { label: 'Contact', to: '/contact' },
];
