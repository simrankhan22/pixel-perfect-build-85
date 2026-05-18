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
      "AI system that takes business information as input, cross-references it with publicly available online data, then places a real phone call to the business to confirm accuracy. Built with ElevenLabs speech synthesis and a telephony cell API for automated voice outreach.",
    status: "hackathon",
    statusLabel: "hackathon · grant project",
    partner: { name: "Grant Thornton", href: "https://www.grantthornton.se/en/" },
    tags: ["ElevenLabs API", "Telephony API", "Python", "Voice AI"],
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
    title: "Customer segmentation — RFM + K-means",
    description:
      "RFM scoring and K-means clustering on the Olist e-commerce dataset. Adding a churn prediction model on top of the segments. Maps directly to retention and loyalty problems at retail companies.",
    status: "completed",
    statusLabel: "completed",
    tags: ["Python", "Scikit-learn", "K-means", "Olist dataset"],
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
    title: "Agnetic Ragnar — voice AI customer service",
    description:
      "Speech-to-response pipeline handling 10+ distinct customer service query types. Integrated ElevenLabs for real-time natural voice synthesis. Built end-to-end in 48 hours.",
    status: "hackathon",
    statusLabel: "48h hackathon",
    partner: { name: "Impact Solution", href: "https://www.impactsolution.se/" },
    tags: ["ElevenLabs API", "Voice AI", "Python"],
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
    title: "NLP insights pipeline — transformer + RAG",
    why: "Going beyond sentiment analysis: build a small RAG pipeline on top of a transformer model for extracting structured insights from text/review data.",
    relevantTo: ["Spotify", "King", "Klarna"],
  },
  {
    title: "A/B testing + uplift modelling",
    why: "Causal inference, treatment effects, and experimental design — the most underrated skill at this level. Very few candidates can do this properly.",
    relevantTo: ["Spotify", "Klarna", "Voi"],
  },
  {
    title: "End-to-end ML deployment (FastAPI + Docker + GCP)",
    why: "Take the churn model from project 1, wrap a FastAPI endpoint around it, Dockerize, deploy on GCP Cloud Run, add basic monitoring. Shows the full production engineering loop.",
    relevantTo: ["all data engineering roles"],
  },
];
