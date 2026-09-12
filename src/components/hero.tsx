export default function Hero() {
  return (
    <section className="flex min-h-dvh flex-col justify-between py-14 md:py-20">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
        Frontend Developer
      </p>

      <h1 className="font-display font-medium uppercase text-[clamp(3.5rem,13vw,10.5rem)] leading-[0.84] tracking-[-0.045em]">
        Adrian
        <br />
        Drzazgowski
      </h1>

      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10">
        <p className="max-w-[42ch] text-[15px] leading-[1.6] text-foreground/85 md:text-[17px]">
          I build fast, scalable and user-focused web applications using React,
          Next.js and TypeScript.
        </p>
        <p className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          Lublin / Poland
        </p>
      </div>
    </section>
  );
}
