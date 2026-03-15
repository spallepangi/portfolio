'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  return (
    <header className="sticky top-0 z-40 border-b border-border-line/60 bg-background/70 backdrop-blur-xl">
      <nav className="section flex h-16 items-center justify-between gap-4">
        <div className="hidden flex-1 items-center gap-6 md:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-xs font-medium text-muted transition-colors hover:text-foreground"
            >
              {section.label}
            </a>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="mailto:palle.santhoshk@gmail.com"
            className="hidden rounded-full border border-border-line/80 px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-foreground sm:inline-flex"
          >
            <Mail className="mr-1.5 h-3.5 w-3.5" />
            Contact
          </Link>
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() =>
              setTheme(currentTheme === 'dark' ? 'light' : 'dark')
            }
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-line/80 bg-background/80 text-muted shadow-sm transition hover:border-accent hover:text-foreground"
          >
            {mounted && currentTheme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <div className="hidden items-center gap-1.5 sm:flex">
            <Link
              href="https://github.com/spallepangi"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border-line/80 text-muted transition hover:border-accent hover:text-foreground"
            >
              <Github className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/santhoshpallepangi/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border-line/80 text-muted transition hover:border-accent hover:text-foreground"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

