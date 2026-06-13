import { About } from "@/components/About";
import { AutomationWorkflows } from "@/components/AutomationWorkflows";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <AutomationWorkflows />
        <TechStack />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
