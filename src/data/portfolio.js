// ============================================================
// PROFILE
// ============================================================

export const profile = {
  name: "Solairaj",

  title: "Python Full-Stack & AI Engineer",

  tagline:
    "Full-stack engineer with 4+ years of experience building enterprise applications, secure APIs, data processing systems, and AI-powered applications using LLMs and automation.",

  location: "Chennai, Tamil Nadu, India",

  email: "your-email@example.com",

  github: "https://github.com/solosolai74",

  linkedin:
    "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/",

  resume: "./resume.pdf",

  availability:
    "Open to Python Full-Stack, AI Engineer and GenAI opportunities",
};


// ============================================================
// WORK EXPERIENCE
// ============================================================

export const experiences = [

  // ----------------------------------------------------------
  // SPR CONSULTECH
  // ----------------------------------------------------------

  {
    role: "Solution Engineer",

    company: "SPR Consultech",

    location: "Chennai, Tamil Nadu, India",

    period: "Feb 2026 – Present",

    description:
      "Leading development of enterprise-grade AI, automation and full-stack platforms across system architecture, backend engineering and AI model integration.",

    achievements: [

      "Leading development of enterprise-grade AI and automation platforms across full-stack architecture, backend systems and AI model integration.",

      "Architected an AI-powered Single Line Diagram (SLD) generation system integrating local and open-source LLMs into a scalable full-stack application for automated engineering diagram generation.",

      "Designed and developed a fintech accounting and vendor management platform supporting invoice processing, vendor bill tracking and Zoho Books integration.",

      "Built a Python-based financial data processing engine to consolidate and analyze bank statements from multiple Excel sources and generate structured reconciliation reports.",

      "Designed REST APIs and backend services with focus on scalability, maintainability and secure application architecture.",

      "Worked on system design, API architecture, performance optimization and production deployment readiness across multiple applications.",

    ],

    technologies: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "LLM",
      "RAG",
      "LangChain",
      "Redis",
      "Excel",
      "REST API",
    ],
  },


  // ----------------------------------------------------------
  // CDAC
  // ----------------------------------------------------------

  {
    role: "Project Engineer",

    company: "CDAC — Ministry of Electronics & IT",

    location: "Chennai, Tamil Nadu, India",

    period: "July 2022 – Jan 2026",

    promotion:
      "Promoted from Project Associate in June 2023",

    description:
      "Led end-to-end development of secure enterprise web applications using Python, Django REST Framework, Angular and PostgreSQL.",

    achievements: [

      "Led end-to-end development of secure Django-based enterprise web applications using Python, Django REST Framework, Angular and PostgreSQL.",

      "Architected secure REST APIs and optimized database schemas with focus on application security, performance and maintainability.",

      "Developed enterprise applications including Next-Gen Central Management Server (NG-CMS), Question Bank system, server monitoring dashboard and DGR recruitment portal.",

      "Implemented role-based access control (RBAC), authentication, secure file sharing and multilingual application support.",

      "Worked on production deployment workflows, application monitoring and troubleshooting across enterprise applications.",

      "Managed Git repositories, code reviews, technical documentation and deployment activities while collaborating with cross-functional teams.",

    ],

    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "Angular",
      "PostgreSQL",
      "REST API",
      "RBAC",
      "Git",
      "Linux",
      "Apache",
    ],
  },


  // ----------------------------------------------------------
  // NLC INDIA
  // ----------------------------------------------------------

  {
    role: "Graduate Apprentice Trainee",

    company: "NLC India Limited",

    location: "Neyveli, Tamil Nadu, India",

    period: "Mar 2022 – Jul 2022",

    description:
      "Contributed to web application development for house allocation and smart metering systems.",

    achievements: [

      "Contributed to the development of a web-based House Allotment application.",

      "Worked on user registration and house allocation management features.",

      "Contributed to Smart Metering functionality involving real-time meter data collection.",

      "Collaborated with the development team to implement application features and business workflows.",

    ],

    technologies: [
      "Python",
      "JavaScript",
      "Web Development",
      "Database",
    ],
  },


  // ----------------------------------------------------------
  // ASSISTANT PROFESSOR
  // ----------------------------------------------------------

  {
    role: "Assistant Professor",

    company: "Kalaimagal College of Arts and Science",

    location: "Pandalkudi, Tamil Nadu, India",

    period: "Aug 2021 – Feb 2022",

    description:
      "Handled laboratory teaching responsibilities along with academic and office administrative activities.",

    achievements: [

      "Handled laboratory subjects and practical sessions.",

      "Supported students with programming and technical concepts.",

      "Managed academic and office administrative responsibilities.",

    ],

    technologies: [
      "Programming",
      "Technical Training",
      "Administration",
    ],
  },

];


// ============================================================
// PROJECTS
// ============================================================

export const projects = [

  // ----------------------------------------------------------
  // AI SLD
  // ----------------------------------------------------------

  {
    title: "AI-Powered SLD Generation Platform",

    category: "AI / Engineering Automation",

    description:
      "Enterprise AI platform for automating Single Line Diagram generation by combining LLM-based requirement understanding, engineering rules and automated diagram generation.",

    technologies: [
      "Python",
      "FastAPI",
      "React",
      "LLM",
      "RAG",
      "LangChain",
      "PostgreSQL",
      "Redis",
      "DXF",
    ],

    highlights: [
      "Natural-language requirement processing",
      "Local and open-source LLM integration",
      "Engineering rule-based processing",
      "Automated SLD generation",
      "Full-stack AI application architecture",
      "CAD/DXF integration",
    ],

    architecture:
      "React → FastAPI → AI Processing → LLM → Engineering Rules → Validation → SLD/DXF Generation",

    status: "Professional Project",
  },


  // ----------------------------------------------------------
  // FINTECH
  // ----------------------------------------------------------

  {
    title: "Fintech Accounting & Vendor Management",

    category: "Full-Stack / FinTech",

    description:
      "Business application for invoice processing, vendor bill management and accounting workflows with Zoho Books integration.",

    technologies: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "REST API",
      "Zoho Books",
    ],

    highlights: [
      "Invoice processing",
      "Vendor management",
      "Vendor bill tracking",
      "Accounting workflows",
      "Zoho Books integration",
      "Secure backend architecture",
    ],

    architecture:
      "React → REST API → Business Logic → PostgreSQL → Zoho Books",

    status: "Professional Project",
  },


  // ----------------------------------------------------------
  // FINANCIAL DATA ENGINE
  // ----------------------------------------------------------

  {
    title: "Financial Data Processing Engine",

    category: "Python / Data Engineering",

    description:
      "Python-based financial data processing engine for consolidating bank statements from multiple Excel sources and generating structured reconciliation reports.",

    technologies: [
      "Python",
      "Pandas",
      "Excel",
      "Data Processing",
      "PostgreSQL",
    ],

    highlights: [
      "Multi-source Excel processing",
      "Data consolidation",
      "Data normalization",
      "Financial reconciliation",
      "Structured report generation",
      "Automated data processing",
    ],

    architecture:
      "Excel Sources → Pandas → Data Cleaning → Processing Engine → Reconciliation → Report",

    status: "Professional Project",
  },


  // ----------------------------------------------------------
  // NG-CMS
  // ----------------------------------------------------------

  {
    title: "Next-Gen Central Management Server",

    category: "Enterprise Application",

    description:
      "Enterprise web application developed at CDAC for centralized management and monitoring capabilities.",

    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "Angular",
      "PostgreSQL",
    ],

    highlights: [
      "Enterprise REST APIs",
      "Role-based access control",
      "Authentication",
      "Database management",
      "Centralized application management",
      "Production deployment",
    ],

    architecture:
      "Angular → Django REST API → Business Logic → PostgreSQL",

    status: "CDAC Project",
  },


  // ----------------------------------------------------------
  // SERVER MONITORING
  // ----------------------------------------------------------

  {
    title: "Server Monitoring Dashboard",

    category: "Enterprise / Monitoring",

    description:
      "Web-based monitoring application for observing server and system information through a centralized dashboard.",

    technologies: [
      "Python",
      "Django",
      "Angular",
      "PostgreSQL",
      "REST API",
    ],

    highlights: [
      "Centralized monitoring",
      "Dashboard visualization",
      "REST API integration",
      "Database-backed monitoring",
      "Enterprise web architecture",
    ],

    architecture:
      "Angular Dashboard → Django REST API → Monitoring Services → PostgreSQL",

    status: "CDAC Project",
  },


  // ----------------------------------------------------------
  // QUESTION BANK
  // ----------------------------------------------------------

  {
    title: "Question Bank System",

    category: "Enterprise Application",

    description:
      "Secure enterprise application developed for managing question bank workflows, users and controlled access.",

    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "Angular",
      "PostgreSQL",
    ],

    highlights: [
      "Question management",
      "Role-based access control",
      "Authentication",
      "Secure APIs",
      "Database management",
    ],

    architecture:
      "Angular → Django REST Framework → PostgreSQL",

    status: "CDAC Project",
  },


  // ----------------------------------------------------------
  // DGR
  // ----------------------------------------------------------

  {
    title: "DGR Recruitment Portal",

    category: "Enterprise Web Application",

    description:
      "Enterprise recruitment portal developed with secure authentication, role-based access and structured application workflows.",

    technologies: [
      "Python",
      "Django",
      "Angular",
      "PostgreSQL",
      "REST API",
      "RBAC",
    ],

    highlights: [
      "Candidate workflows",
      "Authentication",
      "Role-based access",
      "Secure file handling",
      "REST APIs",
      "Database management",
    ],

    architecture:
      "Angular → Django REST API → PostgreSQL",

    status: "CDAC Project",
  },


  // ----------------------------------------------------------
  // NLC
  // ----------------------------------------------------------

  {
    title: "House Allotment & Smart Metering",

    category: "Web Application",

    description:
      "Web-based application developed during the NLC India apprenticeship for house allocation and smart meter data collection.",

    technologies: [
      "Python",
      "JavaScript",
      "Database",
      "Web Development",
    ],

    highlights: [
      "User registration",
      "House allocation",
      "Smart meter data collection",
      "Application workflows",
    ],

    architecture:
      "Web Application → Backend → Database → Meter Data",

    status: "NLC India Project",
  },

];


// ============================================================
// TECHNICAL SKILLS
// ============================================================

export const skills = {

  Languages: [
    "Python",
    "JavaScript",
    "SQL",
  ],

  Backend: [
    "Django",
    "Django REST Framework",
    "FastAPI",
    "REST APIs",
  ],

  Frontend: [
    "React",
    "Angular",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ],

  "AI / GenAI": [
    "LLM Integration",
    "RAG",
    "Prompt Engineering",
    "Embeddings",
    "AI Agents",
    "Function Calling",
    "LangChain",
    "Chat AI",
  ],

  Data: [
    "Pandas",
    "NumPy",
    "Excel Processing",
    "Data Processing",
  ],

  Databases: [
    "PostgreSQL",
    "MySQL",
    "Redis",
  ],

  DevOps: [
    "Git",
    "Linux",
    "Apache",
    "Docker",
    "Deployment",
  ],

  Integrations: [
    "Zoho Books",
    "REST APIs",
    "DXF / CAD",
  ],

};


// ============================================================
// AI / GENAI CONCEPTS
// ============================================================

export const aiConcepts = [
  "LLM Integration",
  "RAG",
  "Prompt Engineering",
  "Embeddings",
  "Vector Search",
  "Function Calling",
  "AI Agents",
  "Chatbots",
  "Structured Output",
  "AI Evaluation",
];


// ============================================================
// EDUCATION
// ============================================================

export const education = [

  {
    degree:
      "Bachelor of Engineering - Computer Science and Engineering",

    institution:
      "Dr. G.U. Pope College of Engineering",

    university:
      "Anna University, Chennai",

    location:
      "Thoothukudi, Tamil Nadu, India",

    period:
      "Jun 2016 – May 2020",

    result:
      "7.99 CGPA",
  },


  {
    degree:
      "Higher Secondary Education",

    institution:
      "Government Higher Secondary School",

    location:
      "Pudur, Tamil Nadu, India",

    period:
      "Jun 2014 – May 2016",

    result:
      "90.67%",
  },

];


// ============================================================
// CERTIFICATIONS & ACHIEVEMENTS
// ============================================================

export const certifications = [

  {
    title:
      "Security Audit Certificate",

    issuer:
      "CDAC Hyderabad",

    description:
      "Security audit certification from a CERT-In empanelled organization.",
  },


  {
    title:
      "Python Certification",

    issuer:
      "Professional Certification",
  },


  {
    title:
      "SQL Certification",

    issuer:
      "Professional Certification",
  },


  {
    title:
      "Angular Certification",

    issuer:
      "Professional Certification",
  },


  {
    title:
      "ReactJS Certification",

    issuer:
      "Professional Certification",
  },


  {
    title:
      "JavaScript Certification",

    issuer:
      "Professional Certification",
  },

];