import { projects } from '@/data/projects';
import Link from 'next/link';

export default function Projects() {
    return (
        <div className='grid grid-cols-2 border border-border/50 rounded overflow-hidden max-[420px]:grid-cols-1'>
            {projects.map((project, index) => (
                <Link
                    key={project.name}
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`
                        p-4 transition-colors duration-200 block group
                        border-border/50
                        ${index % 2 === 0 ? 'border-r max-[420px]:border-r-0' : ''}
                        ${index < projects.length - 2 ? 'border-b' : ''}
                        ${index === projects.length - 2 ? 'max-[420px]:border-b' : ''}
                        hover:bg-foreground
                    `}>
                    <div className='flex items-baseline justify-between mb-[7px]'>
                        <span className='font-serif text-[17px] font-normal text-foreground group-hover:text-background transition-colors duration-200'>
                            {project.name}
                        </span>
                        <span className='text-[10px] text-muted-foreground group-hover:text-background/70 transition-colors duration-200'>
                            {project.year}
                        </span>
                    </div>
                    <p className='text-[11px] text-muted-foreground leading-[1.7] mb-2.5 group-hover:text-background/80 transition-colors duration-200'>
                        {project.description}
                    </p>
                    <div className='flex flex-wrap gap-1'>
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className='text-[9.5px] text-muted-foreground border border-border/50 px-[7px] py-0.5 rounded-sm group-hover:text-background/70 group-hover:border-background/25 transition-colors duration-200'>
                                {tag}
                            </span>
                        ))}
                    </div>
                </Link>
            ))}
        </div>
    );
}
