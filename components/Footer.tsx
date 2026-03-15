import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border-line/60 bg-background/80">
      <div className="section flex flex-col items-center justify-between gap-3 py-6 text-[11px] text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} Santhosh Pallepangi. Crafted in Next.js, Tailwind,
          and Framer Motion.
        </p>
        <p className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="https://github.com/spallepangi/portfolio"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Portfolio
          </Link>
          <span aria-hidden>·</span>
          <Link
            href="https://github.com/spallepangi"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </Link>
          <span aria-hidden>·</span>
          <Link
            href="https://www.linkedin.com/in/santhoshpallepangi/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </Link>
          <span aria-hidden>·</span>
          <span>Data Scientist · ML Engineer · GenAI</span>
        </p>
      </div>
    </footer>
  );
}

