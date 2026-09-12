import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Stack from "@/components/stack";
import Statement from "@/components/statement";
import UtilityBar from "@/components/utility-bar";
import { experiences } from "@/data/experience";

export default function Home() {
  const hasExperience = experiences.length > 0;

  let counter = 0;
  const statementIndex = ++counter;
  const stackIndex = ++counter;
  const experienceIndex = hasExperience ? ++counter : null;
  const projectsIndex = ++counter;
  const contactIndex = ++counter;

  return (
    <div className="page">
      <UtilityBar />
      <main>
        <Hero />
        <Statement index={statementIndex} />
        <Stack index={stackIndex} />
        {hasExperience && experienceIndex !== null && (
          <Experience index={experienceIndex} />
        )}
        <Projects index={projectsIndex} />
        <Contact index={contactIndex} />
      </main>
      <Footer />
    </div>
  );
}
