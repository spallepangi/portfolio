export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  impact: string[];
  tech: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: 'State of Missouri',
    role: 'Data Scientist',
    period: 'Oct 2023 — Present',
    location: 'Missouri, US',
    impact: [
      'Drive funding and workforce decisions using regression, XGBoost, and SHAP; built MLOps on AWS (SageMaker, S3/Glue/Athena, drift monitoring) cutting deployment time 80%.',
      'Improved staff retention 15% and forecast accuracy via turnover prediction and hierarchical time-series models; reduced stockouts 41% and freed $3.2M working capital.',
      'Increased offender classification accuracy 18% with k-means on inmate profiles for placement and resource planning.'
    ],
    tech: ['Python', 'XGBoost', 'AWS SageMaker', 'S3', 'Glue', 'Athena', 'MLOps']
  },
  {
    company: 'Y Point Analytics',
    role: 'Sr Data Engineer',
    period: 'May 2018 — July 2021',
    location: 'Hyderabad, India',
    impact: [
      'Led BI/analytics: unified 50+ sources into S3/Redshift and dbt star schemas; achieved 99.9% availability and 30% storage cost reduction.',
      'Led 5-analyst team to migrate 1,000+ ELT jobs to dbt + Airflow; cut refresh ~50% and defects ~40%; tripled self-serve adoption and reduced ad-hoc requests 45%.',
      'Delivered multi-touch attribution and cohort dashboards (+11% marketing ROI); KPI scorecards and alerts reduced executive escalations 30%.'
    ],
    tech: ['Python', 'SQL', 'dbt', 'Airflow', 'AWS', 'Redshift', 'Tableau']
  }
];
