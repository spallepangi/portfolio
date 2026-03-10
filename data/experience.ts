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
      'Drove $5M in funding decisions by isolating workforce trends with multivariate regression, Lasso, and XGBoost (CV-validated, SHAP explained).',
      'Lifted staff retention by 15% in 6 months by predicting turnover risk with logistic regression and enabling targeted, high-ROI HR interventions.',
      'Reduced forecast error 28% and stockouts 41%, freeing $3.2M in working capital via hierarchical time-series models trained on AWS SageMaker.',
      'Cut model deployment time 80% and tripled experiment throughput by building an AWS-native MLOps stack—S3/Glue/Athena lakehouse, SageMaker, ECR, with CloudWatch drift alarms and Step Functions rollback.',
      'Enhanced offender classification system accuracy by 18% by training and validating a k-means clustering model on inmate profiles, aiding in facility placement and resource planning.'
    ],
    tech: ['Python', 'XGBoost', 'AWS SageMaker', 'S3', 'Glue', 'Athena', 'MLOps']
  },
  {
    company: 'Y Point Analytics',
    role: 'Sr Data Analyst',
    period: 'May 2018 — July 2021',
    location: 'Hyderabad, India',
    impact: [
      'Unified 50+ marketing & sales sources into a governed analytics layer (S3/Redshift), modeled star schemas in dbt, and delivered 99.9% data availability while reducing storage cost 30% via tiered retention.',
      'Led a 5-analyst BI squad to migrate 1,000+ ELT jobs to dbt + Airflow, cutting dashboard refresh times ~50%, reducing defects ~40%, and publishing a shared data dictionary with business definitions.',
      'Tripled self-serve analytics adoption and cut ad-hoc requests 45% by launching a governed semantic layer (dbt metrics) and standardized Tableau dashboards.',
      'Drove +11% marketing ROI by delivering multi-touch attribution and cohort dashboards with common definitions across Sales/Marketing.',
      'Dropped executive escalations 30% with KPI scorecards and threshold alerts (email/Slack), enabling faster course-corrections.'
    ],
    tech: ['Python', 'SQL', 'dbt', 'Airflow', 'AWS', 'Redshift', 'Tableau']
  }
];
