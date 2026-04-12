import { links } from "@/data/links";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function About() {
    return (
        <div className="flex flex-col gap-3.5">
            <p className="text-[14px] leading-[1.85]">
                Frontend Developer with a focus on React, Next.js and modern web
                development practices. Passionate about building clean,
                efficient and user-friendly digital products.
            </p>
            <p className="text-[14px] leading-[1.85]">
                Actively looking for new opportunities and freelance
                collaborations.
            </p>
            <div className="flex gap-4 flex-wrap mt-0.5">
                {links.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[12.5px] text-muted-foreground border-b border-transparent hover:text-foreground hover:border-foreground transition-colors duration-150 group"
                    >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                ))}
            </div>
        </div>
    );
}
