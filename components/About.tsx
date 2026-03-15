'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="section"
      aria-label="About Santhosh Pallepangi"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="section-inner space-y-6"
      >
        <div className="space-y-2">
          <p className="section-title">About</p>
          <h2 className="section-heading">
            Data science, ML systems, and GenAI in production.
          </h2>
          <p className="text-xs text-muted">
            6+ years · MS Data Science, University of Missouri
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.6fr_1.2fr]">
          <div className="space-y-4 text-sm leading-relaxed text-muted sm:text-[15px]">
            <p>
              I am a Data Scientist with 6+ years of experience building
              machine learning systems, predictive analytics pipelines, and AI
              applications across public sector and industry.
            </p>
            <p>
              My work spans workforce analytics, risk modeling, corrections analytics,
              and applied generative AI. I focus on high-signal feature
              engineering, reliable deployment, and closing the loop between
              models and real-world decisions.
            </p>
            <p>
              Recently, I have been designing retrieval-augmented generation
              (RAG) systems and domain-specific assistants that sit on top of
              existing data and policy documents.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Expertise
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  'Machine Learning',
                  'GenAI / RAG Systems',
                  'Predictive Modeling',
                  'Feature Engineering',
                  'MLOps',
                  'Data Engineering'
                ].map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div id="education" className="grid gap-4 text-sm scroll-mt-24">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  Education
                </p>
                <div className="mt-2 space-y-1.5">
                  <div>
                    <p className="font-medium">
                      MS Data Science &amp; Analytics
                    </p>
                    <p className="text-xs text-muted">
                      University of Missouri
                    </p>
                  </div>
                  <div className="pt-2">
                    <p className="font-medium">
                      BTech Computer Science &amp; Engineering
                    </p>
                    <p className="text-xs text-muted">NIT Calicut</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

