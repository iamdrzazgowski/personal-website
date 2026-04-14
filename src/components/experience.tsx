import { experiences } from '@/data/experience';
import Link from 'next/link';
import SectionSeparator from './section-separator';

export default function Experience() {
    if (experiences.length === 0) return null;

    return (
        <>
            <SectionSeparator label='experience' />
            <div className='flex flex-col gap-0'>
                {experiences.map((exp, index) => (
                    <div
                        key={exp.role}
                        className={`pb-[18px] ${index !== experiences.length - 1 ? 'border-b border-border/50' : ''} ${index !== 0 ? 'pt-[18px]' : ''}`}>
                        <p className='text-[11.5px] text-muted-foreground mb-1.5 tracking-[0.03em]'>
                            {exp.period}
                        </p>
                        <div className='flex items-baseline flex-wrap gap-[5px]'>
                            <span className='text-[14.5px] font-medium'>
                                {exp.role}
                            </span>
                            {exp.companyUrl ? (
                                <Link
                                    href={exp.companyUrl}
                                    className='text-[12.5px] text-muted-foreground hover:text-foreground transition-colors'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    @ {exp.company} ↗
                                </Link>
                            ) : (
                                <span className='text-[12.5px] text-muted-foreground'>
                                    @ {exp.company}
                                </span>
                            )}
                        </div>
                        <p className='text-[13px] text-muted-foreground mt-1.5 leading-[1.75]'>
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}
