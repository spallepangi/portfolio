'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
      aria-label="Projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="section-inner space-y-6"
      >
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="section-title">Projects</p>
            <h2 className="section-heading">
              Selected ML &amp; AI projects.
            </h2>
          </div>
          <p className="max-w-sm text-xs text-muted">
            RAG systems and domain-specific AI assistants built with modern LLM
            tooling and vector retrieval.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold tracking-tight sm:text-base">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted sm:text-[13px]">
                      {project.description}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted sm:text-[13px]">
                  {project.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-background/80 px-2.5 py-1 text-[11px] text-muted ring-1 ring-border-line/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline text-muted hover:text-foreground"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline text-muted hover:text-foreground"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
                <span className="text-[11px] text-muted">
                  {index === 0 ? 'Insurance · RAG' : 'ML · HR Analytics'}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

