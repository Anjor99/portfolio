// Portfolio content is data-driven. Add or edit entries here; the UI renders them automatically.
export const projects = [
  {
    number: '01', icon: 'portfolio', title: 'Portfolios',
    category: 'Web development . UI/UX . Responsive design',
    description: 'Delivered three live, responsive portfolio websites end to end, including deployment on Vercel. Built Google Drive-backed content updates and integrated Google location/reviews, service information, and WhatsApp contact workflows where required.',
    stack: ['React', 'Vercel', 'Google Drive', 'Responsive UI'],
    actions: [
      { type: 'link', label: 'Photographer portfolio', href: 'https://jui-portfolio.vercel.app/', external: true },
      { type: 'link', label: 'Clinical Therapist portfolio', href: 'https://vidya-bansode.vercel.app/', external: true },
      { type: 'link', label: 'Actor portfolio', href: 'https://samruddhi-rane.vercel.app/', external: true },
      { type: 'chat', label: 'Ask AI about project', prompt: 'Describe Anjor’s verified work on his portfolio websites, including deployment and integrations.' },
    ],
  },
  {
    number: '02', icon: 'workflow', title: 'Naukri AI Recruitment / Support Agent',
    category: 'Agentic AI · RAG',
    description: 'Built and deployed a live LangGraph agent with status-retrieval and RAG tools over 12 policy documents. Includes memory, guardrails, required-field checks, fallback/error handling, and a 10-query evaluation set.',
    stack: ['LangGraph', 'RAG', 'MCP', 'FastAPI', 'Python', 'Google Cloud'],
    status: 'Live deployment',
    actions: [
      { type: 'link', label: 'Live demo', href: 'https://naukri-agent.anjorrane.in/', external: true },
      { type: 'link', label: 'GitHub source', href: 'https://github.com/Anjor99/naukri-ai-recruitment-agent.git', external: true },
      { type: 'chat', label: 'Ask AI about project', prompt: 'Explain Anjor’s Naukri AI Recruitment / Support Agent, including only verified implementation details.' },
    ],
  },
  {
    number: '03', icon: 'shield', title: 'PhishGuard',
    category: 'Machine learning · Security',
    description: 'A full-stack phishing URL classifier with a FastAPI inference API and React interface. Compared Random Forest, Logistic Regression, and XGBoost models.',
    stack: ['Python', 'FastAPI', 'React', 'Random Forest', 'XGBoost'],
    actions: [
      { type: 'link', label: 'GitHub source', href: 'https://github.com/Anjor99/Phish_Guard', external: true },
      { type: 'link', label: 'IEEE Xplore publication', href: 'https://ieeexplore.ieee.org/document/11208974', external: true },
      { type: 'link', label: 'Live demo', href: 'https://phishguard-5bpv.onrender.com/', external: true },
      { type: 'chat', label: 'Ask AI about project', prompt: 'Explain Anjor’s PhishGuard project and the models compared, using only verified details.' },
    ],
  },
  {
    number: '04', icon: 'scan', title: 'SignSure',
    category: 'Computer vision',
    description: 'A signature-verification pipeline combining document-image detection, image preprocessing, and Siamese-network comparison. The resume reports 85% detection accuracy and 92% comparison accuracy on clean images; noisy end-to-end results were around 70%.',
    stack: ['Detectron2', 'Siamese Network', 'FastAPI', 'Computer Vision'],
    actions: [
      { type: 'link', label: 'Company recognition', href: 'https://drive.google.com/file/d/1QCIvK3Me6anuxsyq8caPcfnpXGLBZMVR/view?usp=drive_link', external: true },
      { type: 'chat', label: 'Ask AI about project', prompt: 'Describe Anjor’s work on SignSure, including the technologies used and the results achieved.' },
    ],
  },
  {
    number: '05', icon: 'workflow', title: 'FinlyticZ — Visual ETL Tool',
    category: 'Data workflows · Frontend',
    description: 'Built the React UI for a visual ETL tool that let nontechnical banking users map columns and configure joins. The resume describes recurring transfers of approximately 800K–1M rows.',
    stack: ['React', 'ETL', 'Data Mapping', 'Joins'],
    actions: [
      { type: 'chat', label: 'Ask AI about project', prompt: 'Describe Anjor’s verified work on the visual ETL tool, without inventing implementation details.' },
      // Add a public case study or demo link if one is available to share publicly.
    ],
  },
];

export const skillGroups = [
  { title: 'Languages & APIs', skills: 'Python · Java · JavaScript · FastAPI · Spring Boot · REST APIs · Microservices' },
  { title: 'Agentic AI & LLMs', skills: 'LangGraph · RAG · Tool calling · MCP · Agent memory · Guardrails · Rasa' },
  { title: 'Machine learning', skills: 'Detectron2 · Siamese Networks · NLP · Random Forest · XGBoost · Decision Tree · Logistic Regression · TensorFlow' },
  { title: 'Cloud & delivery', skills: 'Google Cloud · AWS EC2 · Cloudflare Tunnel · Docker · Jenkins · CI/CD · Linux · Git · Gitea' },
  { title: 'Web & databases', skills: 'React · MySQL · MongoDB · Google Drive integration · Responsive UI · Data mapping / ETL' },
];

export const experience = [
  {
    date: 'DEC 2024 — DEC 2025',
    title: 'Software Development Engineer',
    organization: 'PayVance Innovation Pvt. Ltd.',
    context: 'B2B FinTech',
    bullets: [
      'Built a Rasa chatbot with four intent categories for employee account lookup, customer-document retrieval, loan/date calculations, and policy questions. Integrated internal services with caller-token authentication and access-aware responses.',
      'Built SignSure, a FastAPI-served signature-verification pipeline using fine-tuned Detectron2, image preprocessing, and a Siamese comparison model.',
      'Fine-tuned the detector using approximately 200 client documents and evaluated it on 90 additional documents. The detection component was reused in other projects; received a “Pat on the Back” appreciation certificate.',
      'Co-managed Docker/Jenkins delivery across 13 ongoing and several completed projects, helping replace manual Windows JAR copying with Linux containerized, multi-environment pipelines.',
      'Built the React UI for a visual ETL tool supporting column mapping and join configuration for recurring transfers of approximately 800K–1M rows.',
      'Worked directly with founders and clients, demonstrated work, translated monthly feedback into Agile changes, and reviewed peer code and an intern’s Docker/Jenkins changes.',
    ],
  },
  {
    date: '2025 — PRESENT',
    title: 'Freelance Web Developer',
    organization: 'Independent client projects',
    context: 'Client delivery',
    bullets: [
      'Delivered three live, responsive portfolio websites end to end, including deployment on Vercel.',
      'Built Google Drive-backed content updates and integrated Google location/reviews, service information, and WhatsApp contact workflows where required.',
    ],
  },
  {
    date: '2026',
    title: 'Selected for Agentic AI Program',
    organization: 'iHUB DivyaSampark · IIT Roorkee',
    context: 'Program selection',
    bullets: [
      'Selected for the Agentic Systems and Design program associated with iHUB DivyaSampark / Masai. Received evaluation recognition recorded for Jun, Jul, Aug, and Oct 2026.',
    ],
  },
];

export const education = {
  degree: 'B.Tech, Information Technology',
  institution: 'Ramrao Adik Institute of Technology, DY Patil University',
  period: '2021 — 2025',
  result: 'GPA: 8.44 / 10',
};

export const recognition = [
  { title: 'IEEE Xplore publication',href:'https://ieeexplore.ieee.org/document/11208974', detail: '“Phishing URL Detection using Machine Learning Algorithms” · October 2025' },
  { title: 'Pat on the Back', href: 'https://drive.google.com/file/d/1QCIvK3Me6anuxsyq8caPcfnpXGLBZMVR/view?usp=drive_link', detail: 'PayVance Innovation · Recognition for successful delivery of the SignSure module' },
  { title: 'IIT Roorkee Campus Immersion',href: 'https://drive.google.com/file/d/1Se2a4xUPpGaKnbEsk6ccoXL_R-xbBEgO/view?usp=sharing', detail: '2026 · Certificate listed on resume' },
  { title: 'Excellence in Evaluations — Agentic Systems and Design', href: 'https://verify.masaischool.com/certificate/FZdGwijqsh',detail: 'iHUB DivyaSampark / Masai · Jun, Jul, Aug, and Oct 2026' },
];
