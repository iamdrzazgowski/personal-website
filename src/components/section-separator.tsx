interface SectionSeparatorProps {
    label: string;
}

export default function SectionSeparator({ label }: SectionSeparatorProps) {
    return (
        <div className="flex items-center gap-3.5 mt-14 mb-6">
            <span className="text-[11px] font-normal uppercase tracking-[0.12em] text-muted-foreground whitespace-nowrap">
                {label}
            </span>
            <div className="flex-1 h-px bg-border" />
        </div>
    );
}
