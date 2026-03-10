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
    title: 'AI DOC Policy Chatbot',
    description: 'RAG chatbot using Gemini Pro to answer policy-related queries from Missouri Department of Corrections documents.',
    summary:
      'Built RAG chatbot integrating PyMuPDF parsing, FAISS vector store, and a Streamlit UI with source citations.',
    tech: ['Gemini Pro', 'PyMuPDF', 'FAISS', 'Streamlit', 'LangChain'],
    github: 'https://github.com/',
    demo: 'https://example.com/'
  },
  {
    title: 'CardioCopilot',
    description: 'Clinical Q&A assistant leveraging Meditron-7B for domain-specific medical insights grounded in the Oxford Handbook of Cardiology.',
    summary:
      'Developed a clinical Q&A assistant with PDF-based semantic retrieval, deployed via Streamlit for real-time domain-specific medical insights.',
    tech: ['Meditron-7B', 'HuggingFace', 'FAISS', 'Streamlit'],
    github: 'https://github.com/',
    demo: 'https://example.com/'
  }
];
