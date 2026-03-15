'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, X, Info, Star, Calendar } from 'lucide-react';
import { projects } from '../data/projects';
import repoMeta from '../data/repo-meta.json';

type RepoMeta = Record<string, { pushed_at: string | null; description?: string | null; stargazers_count?: number }>;

function formatRelativeTime(dateStr: string | null): string | null {
  if (!dateStr) return null;
  const date = new Date(dateStr);
  const now = new Date();
  const sec = Math.floor((now.getTime() - date.getTime()) / 1000);
  if (sec < 60) return 'just now';
  if (sec < 3600) return `${Math.floor(sec / 60)}m ago`;
  if (sec < 86400) return `${Math.floor(sec / 3600)}h ago`;
  if (sec < 86400 * 2) return '1 day ago';
  if (sec < 86400 * 30) return `${Math.floor(sec / 86400)} days ago`;
  if (sec < 86400 * 60) return `${Math.floor(sec / (86400 * 30))} mo ago`;
  return date.toLocaleDateString();
}

function formatFullDate(dateStr: string | null): string {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString(undefined, { dateStyle: 'medium' });
}

function getRepoName(githubUrl: string | undefined): string | null {
  if (!githubUrl) return null;
  const parts = githubUrl.replace(/\/$/, '').split('/');
  return parts[parts.length - 1] || null;
}

export default function Projects() {
  const meta = repoMeta as RepoMeta;
  const [expandedId, setExpandedId] = useState<string | null>(null);

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
            RAG systems and domain-specific AI assistants. All code on{' '}
            <a
              href="https://github.com/spallepangi?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="link-underline text-foreground hover:no-underline"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => {
            const repoName = getRepoName(project.github);
            const repo = repoName ? meta[repoName] : null;
            const isExpanded = expandedId === project.title;

            return (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card group flex flex-col overflow-hidden"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-semibold tracking-tight sm:text-base">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted sm:text-[13px]">
                        {(repoName && repo?.description) || project.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted sm:text-[13px]">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
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

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      layout
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 space-y-4 rounded-xl border border-border-line/70 bg-background/60 p-4">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                            More information
                          </span>
                          <button
                            type="button"
                            onClick={() => setExpandedId(null)}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-border-line/80 text-muted transition hover:border-accent hover:text-foreground"
                            aria-label="Close"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>

                        {repo && (
                          <div className="space-y-2">
                            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                              Repo metrics
                            </p>
                            <ul className="flex flex-wrap gap-3 text-xs text-muted">
                              <li className="flex items-center gap-1.5">
                                <Star className="h-3.5 w-3.5 shrink-0" />
                                {repo.stargazers_count ?? 0} stars
                              </li>
                              <li className="flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5 shrink-0" />
                                Last updated {formatFullDate(repo.pushed_at)}
                              </li>
                              {formatRelativeTime(repo.pushed_at) && (
                                <li className="text-[11px]">
                                  ({formatRelativeTime(repo.pushed_at)})
                                </li>
                              )}
                            </ul>
                          </div>
                        )}

                        {project.why && (
                          <div className="space-y-1.5">
                            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                              Why we built this
                            </p>
                            <p className="text-xs leading-relaxed text-muted sm:text-[13px]">
                              {project.why}
                            </p>
                          </div>
                        )}

                        {project.features && project.features.length > 0 && (
                          <div className="space-y-1.5">
                            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                              Key features
                            </p>
                            <ul className="list-disc space-y-1 pl-4 text-xs leading-relaxed text-muted sm:text-[13px]">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {project.outcome && (
                          <div className="space-y-1.5">
                            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                              Outcome
                            </p>
                            <p className="text-xs leading-relaxed text-muted sm:text-[13px]">
                              {project.outcome}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : project.title)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border-line/80 px-3 py-1.5 text-muted transition hover:border-accent hover:text-foreground"
                    >
                      <Info className="h-3.5 w-3.5" />
                      {isExpanded ? 'Less' : 'More information'}
                    </button>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="link-underline inline-flex items-center gap-1.5 text-muted hover:text-foreground"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="link-underline inline-flex items-center gap-1.5 text-muted hover:text-foreground"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" />
                        Demo
                      </a>
                    )}
                  </div>
                  <span className="text-[11px] text-muted">
                    {formatRelativeTime(repo?.pushed_at ?? null) ? (
                      <>Updated {formatRelativeTime(repo?.pushed_at ?? null)}</>
                    ) : (
                      <>{index === 0 ? 'Insurance · RAG' : 'ML · HR Analytics'}</>
                    )}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
