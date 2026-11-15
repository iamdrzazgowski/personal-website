import Section from "@/components/ui/section";

interface StatementProps {
  index: number;
}

export default function Statement({ index }: StatementProps) {
  return (
    <Section index={index} label="About">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
        <h2 className="reveal font-display font-medium uppercase text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[0.95] tracking-[-0.03em] md:max-w-[62%]">
          Building complete web
          <br />
          applications, from UI
          <br />
          to API and database.
        </h2>

        <div className="reveal flex flex-col gap-4 pt-1 md:max-w-70">
          <p className="text-[14px] leading-[1.75] text-foreground/80">
            I'm a fullstack developer working with React and Next.js on the
            front end and building APIs, databases and server-side logic on the
            back end — turning requirements into clean, scalable and
            user-friendly products.
          </p>
          <p className="text-[14px] leading-[1.75] text-foreground/80">
            I care about performance, maintainable code and attention to
            detail across the whole stack — open to new opportunities and
            freelance collaborations.
          </p>
        </div>
      </div>
    </Section>
  );
}
