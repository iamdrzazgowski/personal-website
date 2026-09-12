import Section from "@/components/ui/section";

interface StatementProps {
  index: number;
}

export default function Statement({ index }: StatementProps) {
  return (
    <Section index={index} label="About">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
        <h2 className="reveal font-display font-medium uppercase text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[0.95] tracking-[-0.03em] md:max-w-[62%]">
          Building modern web
          <br />
          applications with React
          <br />
          and Next.js.
        </h2>

        <div className="reveal flex flex-col gap-4 pt-1 md:max-w-70">
          <p className="text-[14px] leading-[1.75] text-foreground/80">
            I enjoy creating simple, efficient, and user-friendly solutions,
            with strong attention to detail and a problem-solving mindset that
            turns requirements into clean, working implementations.
          </p>
          <p className="text-[14px] leading-[1.75] text-foreground/80">
            Continuously improving through real projects and practice — open to
            new opportunities and freelance collaborations.
          </p>
        </div>
      </div>
    </Section>
  );
}
