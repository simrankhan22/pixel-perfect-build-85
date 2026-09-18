export type ProjectStatus =
  | "ieee"
  | "completed"
  | "in-progress"
  | "hackathon";

export interface ProjectLink {
  label: string;
  href?: string;
  icon: "external" | "github" | "database" | "award";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  statusLabel: string;
  featured?: boolean;
  tags: string[];
  links?: ProjectLink[];
  relevantTo?: string[];
  partner?: { name: string; href: string };
}

export const completedProjects: Project[] = [
  {
    id: "medimatch",
    title: "MediMatch — AI-driven drug recommendation system",
    description:
      "Most drug recommendation systems are built on pharmaceutical databases. MediMatch was built on a problem: Ayurvedic medicine has no standardised digital dataset. So I built one from scratch with 4,000+ hand-labeled entries mapping individual symptoms to personalised Ayurvedic treatments across 25+ symptom features. The data engineering alone took months of research, curation, and cleaning before a single model was trained.\n\nOn top of that dataset, I designed and trained a machine learning pipeline using Random Forest and SVM models with custom feature engineering. The system went through rigorous hyperparameter tuning and cross-validation to push recommendation accuracy as high as possible. The research was submitted, accepted, and presented at the IEEE International Conference on Sustainable Computing and Smart Systems (ICSCSS 2024) — published in the proceedings at pp. 1342–1349. The dataset is publicly available on Kaggle for other researchers to build on.",
    status: "ieee",
    statusLabel: "IEEE ICSCSS 2024",
    featured: false,
    tags: ["Python", "Scikit-learn", "Random Forest", "SVM", "Feature engineering", "Hyperparameter tuning"],
    links: [
      {
        label: "IEEE paper",
        icon: "external",
        href: "https://ieeexplore.ieee.org/document/10625049",
      },
      {
        label: "Kaggle dataset",
        icon: "database",
        href: "https://www.kaggle.com/datasets/simrankhan2002/medimatch-dataset",
      },
      {
        label: "Publication certificate",
        icon: "award",
        href: "https://www.linkedin.com/posts/simrankhan23_i-recently-had-the-honor-of-presenting-my-share-7223309708118376448-rx5x",
      },
      {
        label: "GitHub",
        icon: "github",
        href: "https://github.com/simrankhan22/MediMatch-AI-driven-drug-recommendation-system",
      },
    ],
  },
  {
    id: "ai-grader",
    title: "How Good Is the AI Grader? A Continuous Statistical Validation System for AI-Assisted Assessment",
    description:
      "Working with an early-stage Italian edtech startup to make AI-assisted grading reliable at scale. The product automates exam and assignment correction; my job is to make sure the model's outputs are trustworthy over time.\n\nI'm building the data engineering backbone for a continuous statistical validation system: designing metrics that measure grading consistency and accuracy, creating reproducible testing pipelines for new features, and structuring the data flow so the team can catch regressions before they reach teachers. It's a hands-on role that sits between ML evaluation, metric design, and product engineering — and it's running until January.",
    status: "in-progress",
    statusLabel: "ongoing · startup project",
    partner: { name: "Correggi Verifiche AI", href: "https://www.correggiverificheai.it/" },
    tags: ["Python", "Data engineering", "Metrics design", "Testing pipelines", "AI evaluation", "Startup"],
    links: [
      {
        label: "Startup website",
        icon: "external",
        href: "https://www.correggiverificheai.it/",
      },
    ],
  },
  {
    id: "brain-tumor",
    title: "Brain tumor detection using CNN",
    description:
      "Medical imaging is one of the hardest problems in applied deep learning — the margin for error is zero and the data is expensive to label. This project tackled early tumor detection from MRI scans using a Convolutional Neural Network trained on a dataset of 8,000 images.\n\nThe work wasn't just about building a model. It was about making it reliable. I built augmentation and preprocessing pipelines from scratch to handle the natural variability in MRI scans, which is often where medical imaging models fail in the real world. From there, the project went through iterative architecture tuning and optimizer experiments — testing different layer configurations, activation functions, and learning rate schedules until the system reached a classification accuracy of 92%. The result is a model that doesn't just perform well on paper, but is built with the kind of rigour that medical applications demand.",
    status: "completed",
    statusLabel: "completed",
    tags: ["TensorFlow", "CNNs", "Data augmentation", "Preprocessing pipelines", "Deep learning"],
    links: [
      {
        label: "GitHub",
        icon: "github",
        href: "https://github.com/simrankhan22/BrainTumor_detection_system",
      },
    ],
  },
  {
    id: "aideas",
    title: "Aideas — AI grant verification assistant",
    description:
      "Grant applications are full of unverified claims. Aideas was built to fix that — an AI system that takes a business's submitted information, cross-references it against publicly available online data, and then places an actual phone call to the business to verbally confirm the details.\n\nThe architecture has three moving parts working together: an information retrieval layer that scrapes and parses public data about the business, a decision layer that identifies discrepancies between what was submitted and what's publicly known, and a voice layer built on the ElevenLabs speech synthesis API and a telephone cell API that handles the outbound call with natural, real-time voice responses. The result is an end-to-end verification pipeline that removes human bottlenecks from a process that currently takes days. Built as part of a grant project.",
    status: "hackathon",
    statusLabel: "hackathon · grant project",
    partner: { name: "Grant Thornton", href: "https://www.grantthornton.se/en/" },
    tags: ["Python", "ElevenLabs API", "Telephony API", "Voice AI", "Data retrieval"],
    links: [
      {
        label: "GitHub",
        icon: "github",
        href: "https://github.com/simrankhan22/aideas-a-strart-up-hack",
      },
    ],
  },
  {
    id: "customer-segmentation",
    title: "Customer segmentation — RFM + K-means clustering",
    description:
      "Understanding your customers sounds simple. Doing it rigorously on real transaction data is not. This project uses the HuggingFace dataset — one of the richest public retail datasets available — to build a full customer segmentation and churn prediction system.\n\nThe pipeline starts with RFM scoring: each customer is scored on Recency (how recently they bought), Frequency (how often), and Monetary value (how much they spent). Those scores feed into a K-means clustering model that groups customers into behaviorally distinct segments — high-value loyalists, at-risk churners, one-time buyers, and so on. On top of the segments, a churn prediction model identifies which customers are most likely to leave before they do, giving a business the window to act. This is the kind of work that directly maps to retention, loyalty, and CRM problems at companies like Klarna, H&M, and IKEA.",
    status: "completed",
    statusLabel: "completed",
    tags: ["Python", "Scikit-learn", "K-means", "RFM scoring", "Churn prediction", "Pandas", "Olist dataset"],
    relevantTo: ["Klarna", "H&M", "IKEA"],
    links: [
      {
        label: "GitHub",
        icon: "github",
        href: "https://github.com/simrankhan22/customer-segmentation-and-retention-analysis-main",
      },
    ],
  },
  {
    id: "demand-forecasting",
    title: "Demand forecasting — ARIMA vs LSTM",
    description:
      "Comparing classical time series methods (ARIMA, Prophet) against an LSTM on a supply chain or retail dataset. The model comparison writeup — why one wins, where each breaks down — is the core deliverable.",
    status: "in-progress",
    statusLabel: "in progress",
    tags: ["TensorFlow", "Prophet", "ARIMA", "LSTM"],
    relevantTo: ["Ericsson", "ABB", "Volvo"],
  },
  {
    id: "agnetic-ragnar",
    title: "Agnetic Ragnar — voice AI customer service assistant",
    description:
      "Built in 48 hours at a hackathon, Agnetic Ragnar is a voice-based AI assistant designed to handle real customer service interactions — not just answer FAQs, but manage the full speech-to-response loop across 10+ distinct query types.\n\nThe core challenge wasn't the AI, it was latency. A voice assistant that hesitates for three seconds between question and answer is useless in a real service context. The project required integrating the ElevenLabs speech synthesis API for natural-sounding real-time voice output, and designing a pipeline architecture where speech input, intent classification, response generation, and voice synthesis all happen fast enough to feel like a conversation. Shipping something this technically layered in 48 hours required tight scoping, fast debugging, and a lot of decision-making under pressure — which, as it turns out, is also what most real engineering jobs feel like.",
    status: "hackathon",
    statusLabel: "48h hackathon",
    partner: { name: "Impact Solution", href: "https://www.impactsolution.se/" },
    tags: ["Python", "ElevenLabs API", "Voice AI", "Speech-to-response pipeline", "API integration"],
    links: [
      {
        label: "GitHub",
        icon: "github",
        href: "https://github.com/simrankhan22/Agentic_Ragnar",
      },
    ],
  },
];

export interface RoadmapItem {
  title: string;
  why: string;
  relevantTo?: string[];
}

export const roadmap: RoadmapItem[] = [
  {
    title: "End-to-end ML deployment — FastAPI + Docker + GCP Cloud Run",
    why: "The planned stack: a FastAPI endpoint will expose the model as a REST API that takes in a customer's RFM features and returns a churn probability. That API will be Dockerized for full environment reproducibility, deployed on GCP Cloud Run for automatic scaling, and wired up with basic model monitoring to catch prediction drift before it becomes a real problem.\n\nThis is intentionally the last project in my roadmap because it's the one that ties everything together. The goal isn't just to deploy a model — it's to demonstrate the full lifecycle from experiment to production.",
    relevantTo: ["all data engineering roles"],
  },
  {
    title: "A/B testing + uplift modelling",
    why: "The plan covers the full experimental design and causal inference stack, starting with proper A/B test setup: defining treatment and control, checking pre-experiment covariate balance, calculating required sample sizes, and avoiding the peeking problem that invalidates most real-world tests. From there the project moves into uplift modelling — instead of asking \"did this intervention work?\", the goal is to answer \"for which users did it work, and by how much?\" using T-Learner, S-Learner, and X-Learner meta-models on top of gradient boosted trees.\n\nI'm prioritising this because it's the most underrated skill gap at graduate level right now. Product-led companies like Spotify, Klarna, and Voi run hundreds of experiments simultaneously and need people who genuinely understand causal inference, not just statistical significance. I want to be able to walk into any of those interviews and talk about treatment effects with confidence.",
    relevantTo: ["Spotify", "Klarna", "Voi"],
  },
  {
    title: "NLP insights pipeline — transformer + RAG",
    why: "The plan is to work in layers. Raw text data — product reviews, support tickets, or user feedback — will be chunked, embedded, and stored in a vector database. When a query comes in (\"what are users complaining about in the checkout flow?\"), the retrieval layer will pull the most semantically relevant chunks and pass them as context to a transformer model, which synthesises a structured, grounded answer rather than hallucinating one. The goal is output that isn't just sentiment but categorised themes, recurring pain points, and actionable signals that a product or data team can actually use.\n\nI'm building this because companies like Spotify, King, and Klarna are sitting on massive volumes of user-generated text and very few candidates at graduate level can build a pipeline that turns raw text into structured intelligence. I want to be one of them.",
    relevantTo: ["Spotify", "King", "Klarna"],
  },
];
