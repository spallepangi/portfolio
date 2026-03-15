'use client';

import { motion } from 'framer-motion';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section
      id="experience"
      className="section"
      aria-label="Experience"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="section-inner space-y-6"
      >
        <div className="space-y-2">
          <p className="section-title">Experience</p>
          <h2 className="section-heading">Impact across public sector and analytics.</h2>
        </div>

        <ol className="relative border-l border-border-line/70 pl-5">
          {experience.map((item, index) => (
            <motion.li
              key={item.company}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="mb-8 last:mb-0"
            >
              <div className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border border-background bg-slate-900 shadow-subtle dark:bg-slate-50" />
              <div className="ml-1 space-y-2 rounded-2xl border border-border-line/70 bg-background/80 p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold tracking-tight">
                      {item.role}
                    </p>
                    <p className="text-xs text-muted">{item.company}</p>
                  </div>
                  <div className="text-right text-[11px] text-muted">
                    <p>{item.period}</p>
                  </div>
                </div>
                <ul className="mt-1 list-disc space-y-1.5 pl-5 text-xs text-muted">
                  {item.impact.map((point) => (
                    <li key={point} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-background px-2.5 py-1 text-[11px] text-muted ring-1 ring-border-line/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}

