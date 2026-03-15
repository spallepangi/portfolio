export type Project = {
  title: string;
  description: string;
  summary: string;
  why?: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: 'Insurance Copilot',
    description: 'AI-powered copilot for insurance-related queries using RAG and LLMs.',
    summary:
      'Built a retrieval-augmented generation system to answer insurance policy and product questions with source-grounded responses.',
    why:
      'Insurance policy documents are dense and hard to search. I built this so teams can ask questions in plain language and get accurate, cited answers—reducing lookup time and improving compliance. The hybrid retrieval (vector + BM25) and reranking improve relevance over keyword search alone.',
    tech: ['Python', 'LangChain', 'RAG', 'LLMs', 'Streamlit'],
    github: 'https://github.com/spallepangi/insurance-copilot'
  },
  {
    title: 'Employee Attrition ML System',
    description: 'End-to-end ML system for predicting employee attrition and retention risk.',
    summary:
      'Developed predictive models and pipeline for workforce attrition, enabling proactive HR interventions and retention strategies.',
    why:
      'Retention is costly and preventable when you spot risk early. This project gives HR and managers a data-driven view of attrition risk so they can target interventions (e.g. engagement, career path, compensation) before people leave. The pipeline is built for reuse across different workforce segments.',
    tech: ['Python', 'Scikit-Learn', 'XGBoost', 'Pandas', 'ML Pipeline'],
    github: 'https://github.com/spallepangi/employee-attrition-ml-system'
  }
];
