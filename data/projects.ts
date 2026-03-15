export type Project = {
  title: string;
  description: string;
  summary: string;
  why?: string;
  features?: string[];
  outcome?: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: 'Insurance Copilot',
    description: 'AI-powered copilot for insurance-related queries using RAG and LLMs.',
    summary:
      'Built a retrieval-augmented generation system to answer insurance policy and product questions with source-grounded responses. Uses hybrid retrieval (vector + BM25), reranking, and a FastAPI + Streamlit stack.',
    why:
      'Insurance policy documents are dense and hard to search. I built this so teams can ask questions in plain language and get accurate, cited answers—reducing lookup time and improving compliance. The hybrid retrieval (vector + BM25) and reranking improve relevance over keyword search alone.',
    features: [
      'Hybrid retrieval: vector similarity (embeddings) + BM25 for better recall on exact terms',
      'Reranking step to boost the most relevant chunks before passing to the LLM',
      'Source citations so every answer links back to policy sections',
      'FastAPI backend + Streamlit UI; ready to plug in different LLM providers'
    ],
    outcome: 'Enables quick, auditable answers from long policy docs with minimal manual search.',
    tech: ['Python', 'LangChain', 'RAG', 'LLMs', 'Streamlit', 'FastAPI'],
    github: 'https://github.com/spallepangi/insurance-copilot'
  },
  {
    title: 'Employee Attrition ML System',
    description: 'End-to-end ML system for predicting employee attrition and retention risk.',
    summary:
      'Developed predictive models and pipeline for workforce attrition, enabling proactive HR interventions and retention strategies. Covers EDA, feature engineering, model training (XGBoost/Scikit-Learn), and evaluation.',
    why:
      'Retention is costly and preventable when you spot risk early. This project gives HR and managers a data-driven view of attrition risk so they can target interventions (e.g. engagement, career path, compensation) before people leave. The pipeline is built for reuse across different workforce segments.',
    features: [
      'End-to-end pipeline: data load, preprocessing, feature engineering, train/validation split',
      'Multiple model options (e.g. logistic regression, tree-based) with hyperparameter tuning',
      'Feature importance and basic interpretability to explain risk drivers',
      'Structured for reuse: config-driven so new cohorts or attributes are easy to add'
    ],
    outcome: 'Delivers a reusable ML pipeline and risk scores to support retention and planning.',
    tech: ['Python', 'Scikit-Learn', 'XGBoost', 'Pandas', 'ML Pipeline'],
    github: 'https://github.com/spallepangi/employee-attrition-ml-system'
  }
];
