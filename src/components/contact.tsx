import EditorialLink from "@/components/ui/editorial-link";
import Section from "@/components/ui/section";
import { links } from "@/data/links";

interface ContactProps {
  index: number;
}

export default function Contact({ index }: ContactProps) {
  return (
    <Section index={index} label="Contact">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <nav aria-label="Contact links" className="reveal flex flex-col gap-3">
          {links.map((link) => (
            <EditorialLink
              key={link.label}
              href={link.href}
              className="font-display text-[28px] font-medium uppercase tracking-[-0.02em] transition-colors duration-200 hover:text-foreground/60 md:text-[40px]"
            >
              {link.label}
            </EditorialLink>
          ))}
        </nav>

        <div className="reveal font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:text-right">
          <p>Lublin, Poland</p>
          <p className="mt-1">Open to remote work</p>
        </div>
      </div>
    </Section>
  );
}
