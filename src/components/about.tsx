import { links } from '@/data/links';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import SectionSeparator from './section-separator';

export default function About() {
    return (
        <>
            <SectionSeparator label='about' />

            <div className='flex flex-col gap-3.5'>
                <p className='text-[14px] leading-[1.85]'>
                    Frontend Developer focused on building modern web
                    applications using React, Next.js. I enjoy creating simple,
                    efficient, and user-friendly solutions.
                </p>
                <p className='text-[14px] leading-[1.85]'>
                    I have a strong attention to detail and a problem-solving
                    mindset, which helps me turn requirements into clean and
                    working implementations.
                </p>
                <p className='text-[14px] leading-[1.85]'>
                    Continuously improving my skills through real projects and
                    practice.
                </p>
                <p className='text-[14px] leading-[1.85]'>
                    Open to new opportunities and freelance collaborations.
                </p>
                <div className='flex gap-4 flex-wrap mt-0.5'>
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center gap-1 text-[12.5px] text-muted-foreground border-b border-transparent hover:text-foreground hover:border-foreground transition-colors duration-150 group'>
                            {link.label}
                            <ArrowUpRight className='w-3 h-3 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
