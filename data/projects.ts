export type Project = {
  title: string;
  description: string;
  summary: string;
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
    tech: ['Python', 'LangChain', 'RAG', 'LLMs', 'Streamlit'],
    github: 'https://github.com/spallepangi/insurance-copilot'
  },
  {
    title: 'Employee Attrition ML System',
    description: 'End-to-end ML system for predicting employee attrition and retention risk.',
    summary:
      'Developed predictive models and pipeline for workforce attrition, enabling proactive HR interventions and retention strategies.',
    tech: ['Python', 'Scikit-Learn', 'XGBoost', 'Pandas', 'ML Pipeline'],
    github: 'https://github.com/spallepangi/employee-attrition-ml-system'
  }
];
