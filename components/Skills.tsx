'use client';

import { motion } from 'framer-motion';
import { skillsByCategory } from '../data/skills';

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
      aria-label="Skills"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="section-inner space-y-6"
      >
        <div className="space-y-2">
          <p className="section-title">Skills</p>
          <h2 className="section-heading">
            Modern ML, GenAI, and data tooling.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsByCategory.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="rounded-2xl border border-border-line/70 bg-background/80 p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                {category.name}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

