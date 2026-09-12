export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col gap-2 border-t border-border py-8 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground md:flex-row md:items-center md:justify-between">
      <span>© {year} Adrian Drzazgowski</span>
      <span>Built with Next.js — No template</span>
    </footer>
  );
}
