export default function Footer() {
  return (
    <footer className="border-t border-border-line/60 bg-background/80">
      <div className="section flex flex-col items-center justify-between gap-3 py-6 text-[11px] text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} Santhosh Pallepangi. Crafted in Next.js, Tailwind,
          and Framer Motion.
        </p>
        <p className="flex flex-wrap items-center gap-2">
          <span>Senior Data Scientist · ML Engineer · GenAI</span>
        </p>
      </div>
    </footer>
  );
}

