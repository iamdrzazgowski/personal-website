interface SectionSeparatorProps {
    label: string;
}

export default function SectionSeparator({ label }: SectionSeparatorProps) {
    return (
        <div className='flex items-center gap-3.5 mt-8 mb-6'>
            <span className='font-serif text-[13px] font-normal text-muted-foreground tracking-[0.06em] whitespace-nowrap'>
                {label}
            </span>
            <div className='flex-1 h-px bg-border/50' />
        </div>
    );
}
