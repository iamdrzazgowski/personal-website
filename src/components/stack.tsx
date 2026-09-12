import Section from "@/components/ui/section";
import { stackData } from "@/data/tech-stack";

interface StackProps {
  index: number;
}

export default function Stack({ index }: StackProps) {
  return (
    <Section index={index} label="Stack">
      <div className="flex flex-col">
        {stackData.map((stack, i) => (
          <div
            key={stack.category}
            className={`reveal flex flex-col gap-2 py-5 md:flex-row md:items-baseline md:gap-8 ${
              i !== 0 ? "border-t border-(--subtle-border)" : ""
            }`}
          >
            <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground md:w-28">
              {String(i + 1).padStart(2, "0")} / {stack.category}
            </span>
            <p className="flex-1 text-[14px] uppercase leading-[1.8] tracking-[0.01em]">
              {stack.items.join(" / ")}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
