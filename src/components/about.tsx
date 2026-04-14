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
                    Full Stack Developer focused on building modern, scalable
                    web applications using React, Next.js, and contemporary
                    backend technologies. I enjoy creating performant,
                    maintainable, and user-friendly solutions that deliver real
                    value.
                </p>
                <p className='text-[14px] leading-[1.85]'>
                    I have a strong attention to detail and a problem-solving
                    mindset, which helps me turn complex requirements into clean
                    and efficient implementations.
                </p>
                <p className='text-[14px] leading-[1.85]'>
                    Continuously improving my skills and staying up to date with
                    the latest trends in web development.
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
