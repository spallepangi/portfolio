export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillsByCategory: SkillCategory[] = [
  {
    name: 'ML Algorithms & Modeling',
    skills: [
      'Linear & Logistic Regression',
      'Random Forest',
      'XGBoost',
      'CatBoost',
      'LightGBM',
      'Gradient Boosting',
      'SVM',
      'K-Means & Clustering',
      'Neural Networks',
      'Time Series (ARIMA, Prophet)',
      'Ensemble Methods',
      'SHAP & Model Interpretability'
    ]
  },
  {
    name: 'Data Science',
    skills: [
      'Statistical Analysis',
      'Feature Engineering',
      'A/B Testing',
      'Predictive Analytics',
      'Experimental Design',
      'Pandas',
      'Scikit-Learn',
      'Hypothesis Testing',
      'Data Wrangling'
    ]
  },
  {
    name: 'AI / GenAI & NLP',
    skills: [
      'RAG',
      'LangChain',
      'Prompt Engineering',
      'LLMs (GPT, Gemini, open-source)',
      'Vector Databases',
      'Embeddings',
      'Transformers',
      'Fine-tuning',
      'Context Engineering'
    ]
  },
  {
    name: 'ML Engineering',
    skills: [
      'Model Serving',
      'REST APIs',
      'Python',
      'SQL',
      'System Design',
      'Scalable Pipelines',
      'Version Control (Git)',
      'Code Quality & Testing'
    ]
  },
  {
    name: 'MLOps & Cloud',
    skills: [
      'AWS (SageMaker, S3, Glue, Lambda)',
      'GCP',
      'Docker',
      'CI/CD',
      'Model Monitoring',
      'Drift Detection',
      'Databricks',
      'Airflow',
      'MLflow',
      'Experiment Tracking'
    ]
  },
  {
    name: 'Data & Visualization',
    skills: [
      'ETL Pipelines',
      'PostgreSQL',
      'FAISS',
      'ChromaDB',
      'Pinecone',
      'Tableau',
      'Power BI',
      'Jupyter'
    ]
  }
];
