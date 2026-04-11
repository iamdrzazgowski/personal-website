import About from '@/components/about';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Projects from '@/components/projects';
import SectionSeparator from '@/components/section-separator';
import Stack from '@/components/stack';

export default function Home() {
    return (
        <main className='max-w-[720px] mx-auto px-6 py-10 pb-16 text-[16px] leading-[1.75]'>
            <Header />
            <SectionSeparator label='about' />
            <About />
            <SectionSeparator label='stack' />
            <Stack />
            {/* <SectionSeparator label='experience' /> */}
            <Experience />
            <SectionSeparator label='projects' />
            <Projects />
            <Footer />
        </main>
    );
}
