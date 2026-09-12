import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

interface EditorialLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function EditorialLink({
  href,
  children,
  className,
}: EditorialLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex items-baseline gap-2 ${className ?? ""}`}
    >
      {children}
      <ArrowUpRight className="w-[0.55em] h-[0.55em] shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
