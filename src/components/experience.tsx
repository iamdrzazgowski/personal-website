import Link from "next/link";
import Section from "@/components/ui/section";
import { experiences } from "@/data/experience";

interface ExperienceProps {
  index: number;
}

export default function Experience({ index }: ExperienceProps) {
  if (experiences.length === 0) return null;

  return (
    <Section index={index} label="Experience">
      <div className="flex flex-col">
        {experiences.map((exp, i) => (
          <div
            key={exp.role}
            className={`group flex flex-col gap-2 py-6 transition-[padding-inline] duration-200 hover:pl-2 md:flex-row md:items-baseline md:justify-between ${
              i !== 0 ? "border-t border-(--subtle-border)" : ""
            }`}
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[11px] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-display text-[18px] font-medium uppercase tracking-[-0.01em] md:text-[20px]">
                    {exp.role}
                  </span>
                  {exp.companyUrl ? (
                    <Link
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[12px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      @ {exp.company} ↗
                    </Link>
                  ) : (
                    <span className="font-mono text-[12px] text-muted-foreground">
                      @ {exp.company}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 max-w-[52ch] text-[13.5px] leading-[1.7] text-foreground/75">
                  {exp.description}
                </p>
              </div>
            </div>
            <span className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {exp.period}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
