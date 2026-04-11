import { links } from '@/data/links';
import Link from 'next/link';

export default function About() {
    return (
        <div className='flex flex-col gap-3.5'>
            <p className='text-[12.5px] leading-[1.85]'>
                I build things for the web. Focused on crafting clean, fast, and
                accessible digital products — from idea to production.
            </p>
            <p className='text-[12.5px] leading-[1.85]'>
                Currently open to new opportunities and freelance projects.
            </p>
            <div className='flex gap-4 flex-wrap mt-0.5'>
                {links.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className='text-[11px] text-muted-foreground border-b border-transparent hover:text-foreground hover:border-foreground transition-colors duration-150'
                        target='_blank'
                        rel='noopener noreferrer'>
                        {link.label} ↗
                    </Link>
                ))}
            </div>
        </div>
    );
}
