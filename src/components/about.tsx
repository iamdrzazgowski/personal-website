import { links } from "@/data/links";
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
                        className="text-[12.5px] text-muted-foreground border-b border-transparent hover:text-foreground hover:border-foreground transition-colors duration-150"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.label} ↗
                    </Link>
                ))}
            </div>
        </div>
    );
}
