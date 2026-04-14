import { projects } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import SectionSeparator from './section-separator';

export default function Projects() {
    return (
        <>
            <SectionSeparator label='projects' />

            <div className='grid grid-cols-2 gap-3 max-[420px]:grid-cols-1'>
                {projects.map((project) => (
                    <Link
                        key={project.name}
                        href={project.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex flex-col h-full p-4 border border-border rounded transition-colors duration-200 group hover:bg-foreground'>
                        <div className='flex items-baseline justify-between mb-[7px]'>
                            <div className='flex items-center gap-1'>
                                <span className='text-[17px] font-light tracking-[-0.01em] text-foreground group-hover:text-background transition-colors duration-200'>
                                    {project.name}
                                </span>
                                <ArrowUpRight className='w-3.5 h-3.5 stroke-current text-muted-foreground transition-all duration-200 group-hover:text-background group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                            </div>

                            <span className='text-[11.5px] text-muted-foreground group-hover:text-background/70 transition-colors duration-200'>
                                {project.year}
                            </span>
                        </div>
                        <p className='flex-1 text-[12.5px] text-muted-foreground leading-[1.7] mb-2.5 group-hover:text-background/80 transition-colors duration-200'>
                            {project.description}
                        </p>
                        <div className='flex flex-wrap gap-1'>
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className='text-[11px] text-muted-foreground border border-border/50 px-[7px] py-0.5 rounded-sm group-hover:text-background/70 group-hover:border-background/25 transition-colors duration-200'>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
