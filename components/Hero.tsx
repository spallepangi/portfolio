'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="section"
      aria-label="Hero - Introduction"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border-line/80 bg-background/70 px-3 py-1 text-xs text-muted shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to senior Data Science & ML roles
          </div>

          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block">Santhosh Pallepangi</span>
              <span className="block mt-2 text-lg font-normal text-muted sm:text-xl">
                Data Scientist · GenAI
              </span>
            </h1>
            <p className="max-w-xl text-balance text-sm leading-relaxed text-muted sm:text-base">
              Building intelligent systems using machine learning and
              generative AI — from production-grade predictive models to RAG
              systems and data-centric ML pipelines.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-slate-50 shadow-subtle transition hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-100"
            >
              View projects
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border-line/80 bg-background/80 px-4 py-2 text-xs font-medium text-muted backdrop-blur transition hover:border-accent hover:text-foreground"
            >
              Get in touch
            </Link>
            <div className="flex items-center gap-1.5">
              <Link
                href="https://github.com/"
                target="_blank"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-line/80 bg-background/80 text-muted transition hover:border-accent hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-line/80 bg-background/80 text-muted transition hover:border-accent hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="mailto:palle.santhoshk@gmail.com"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-line/80 bg-background/80 text-muted transition hover:border-accent hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px] text-muted">
            <span className="pill">6+ years in applied ML</span>
            <span className="pill">GenAI &amp; RAG Systems</span>
            <span className="pill">End-to-end ML pipelines</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="relative"
        >
          <div className="glass-panel relative mx-auto flex max-w-xs flex-col items-center rounded-3xl p-6 sm:max-w-sm sm:p-8">
            <div className="relative mb-5 h-28 w-28 overflow-hidden rounded-full border border-border-line/80 bg-slate-200 shadow-subtle sm:h-32 sm:w-32">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/headshot2.jpeg`}
                alt="Santhosh Pallepangi"
                className="h-full w-full object-cover object-center brightness-[0.97] contrast-[1.05]"
              />
            </div>
            <div className="space-y-2 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Focus Areas
              </p>
              <p className="text-sm text-muted">
                Machine learning, generative AI, and RAG systems—from research
                to production.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

