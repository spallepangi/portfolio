'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="section"
      aria-label="Contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="section-inner grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]"
      >
        <div className="space-y-4">
          <p className="section-title">Contact</p>
          <h2 className="section-heading">
            Let&apos;s talk about data and ML.
          </h2>
          <p className="text-sm text-muted sm:text-[15px]">
            Whether you&apos;re exploring a role, collaborating on research, or
            looking to bring ML and GenAI into a product, feel free to reach
            out.
          </p>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2 text-muted">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:palle.santhoshk@gmail.com"
                className="link-underline"
              >
                palle.santhoshk@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2 text-muted">
              <Linkedin className="h-4 w-4" />
              <a
                href="https://www.linkedin.com/in/santhoshpallepangi/"
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                LinkedIn
              </a>
            </p>
            <p className="flex items-center gap-2 text-muted">
              <Github className="h-4 w-4" />
              <a
                href="https://github.com/spallepangi"
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>

        <form
          className="space-y-4 rounded-2xl border border-border-line/70 bg-background/80 p-4 sm:p-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Contact Form
            </p>
            <p className="text-[11px] text-muted">
              Static UI — hooks into your preferred backend.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-xs font-medium text-muted"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="h-9 w-full rounded-lg border border-border-line/80 bg-background px-3 text-sm outline-none ring-0 transition focus:border-accent/80 focus:ring-1 focus:ring-accent/50"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-medium text-muted"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="h-9 w-full rounded-lg border border-border-line/80 bg-background px-3 text-sm outline-none ring-0 transition focus:border-accent/80 focus:ring-1 focus:ring-accent/50"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="text-xs font-medium text-muted"
            >
              Project or opportunity
            </label>
            <textarea
              id="message"
              placeholder="Briefly describe what you'd like to discuss."
              rows={4}
              className="w-full rounded-lg border border-border-line/80 bg-background px-3 py-2 text-sm outline-none ring-0 transition focus:border-accent/80 focus:ring-1 focus:ring-accent/50"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-slate-50 shadow-subtle transition hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-100"
          >
            Send message
          </button>
          <p className="text-[11px] text-muted">
            This is a static portfolio. You can wire this form to an API
            endpoint, email service, or your own backend.
          </p>
        </form>
      </motion.div>
    </section>
  );
}

