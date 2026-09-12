import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Section from "@/components/ui/section";
import { projects } from "@/data/projects";

interface ProjectsProps {
  index: number;
}

export default function Projects({ index }: ProjectsProps) {
  return (
    <Section index={index} label="Selected work">
      <div className="flex flex-col">
        {projects.map((project, i) => (
          <Link
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col gap-3 py-8 transition-[padding-inline] duration-200 hover:pl-2 md:flex-row md:items-start md:justify-between md:gap-8 ${
              i !== 0 ? "border-t border-(--subtle-border)" : ""
            }`}
          >
            <span className="font-mono text-[11px] text-muted-foreground md:pt-2">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="flex-1 md:max-w-[60%]">
              <div className="flex items-baseline gap-3">
                <h3 className="font-display text-[24px] font-medium uppercase tracking-[-0.02em] md:text-[32px]">
                  {project.name}
                </h3>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
              <p className="mt-2 max-w-[48ch] text-[14px] leading-[1.7] text-foreground/75">
                {project.description}
              </p>
            </div>

            <p
              title={project.tags.join(" / ")}
              className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:w-56 md:shrink-0 md:truncate md:pt-2 md:text-right"
            >
              {project.tags.join(" / ")}
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
