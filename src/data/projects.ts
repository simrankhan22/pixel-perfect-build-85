export type ProjectStatus =
  | "ieee"
  | "completed"
  | "in-progress"
  | "hackathon";

export interface ProjectLink {
  label: string;
  href?: string;
  icon: "external" | "github" | "database";
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
}

export const completedProjects: Project[] = [
  {
    id: "medimatch",
    title: "MediMatch — AI drug recommendation system",
    description:
      "Built a hand-labeled dataset of 4,000+ entries across 25+ Ayurvedic symptom features. Trained Random Forest and SVM models with custom feature engineering pipelines and rigorous hyperparameter tuning. Presented and published at IEEE ICSCSS 2024.",
    status: "ieee",
    statusLabel: "IEEE ICSCSS 2024",
    featured: true,
    tags: ["Python", "Scikit-learn", "Random Forest", "SVM", "Kaggle dataset"],
    links: [
      { label: "IEEE paper", icon: "external" },
      { label: "Kaggle dataset", icon: "database" },
    ],
  },
  {
    id: "brain-tumor",
    title: "Brain tumor detection via CNN",
    description:
      "Deep learning classifier trained on 8,000 MRI scans. Built augmentation and preprocessing pipelines from scratch. Iterative architecture and optimizer tuning reached 92% classification accuracy.",
    status: "completed",
    statusLabel: "completed",
    tags: ["TensorFlow", "CNNs", "Data augmentation", "92% accuracy"],
    links: [{ label: "GitHub", icon: "github" }],
  },
  {
    id: "aideas",
    title: "Aideas — AI grant verification assistant",
    description:
      "AI system that takes business information as input, cross-references it with publicly available online data, then places a real phone call to the business to confirm accuracy. Built with ElevenLabs speech synthesis and a telephony cell API for automated voice outreach.",
    status: "hackathon",
    statusLabel: "hackathon · grant project",
    tags: ["ElevenLabs API", "Telephony API", "Python", "Voice AI"],
  },
  {
    id: "customer-segmentation",
    title: "Customer segmentation — RFM + K-means",
    description:
      "RFM scoring and K-means clustering on the Olist e-commerce dataset. Adding a churn prediction model on top of the segments. Maps directly to retention and loyalty problems at retail companies.",
    status: "in-progress",
    statusLabel: "in progress",
    tags: ["Python", "Scikit-learn", "K-means", "Olist dataset"],
    relevantTo: ["Klarna", "H&M", "IKEA"],
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
    tags: ["ElevenLabs API", "Voice AI", "Python"],
    links: [{ label: "GitHub", icon: "github" }],
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
