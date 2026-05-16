import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import Certifications from "@/sections/Certifications";
import Achievements from "@/sections/Achievements";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import StarsCanvas from "@/components/StarBackground";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative bg-[#030014] selection:bg-neon-blue/30 selection:text-neon-blue">
      <CustomCursor />
      <ScrollProgress />
      <StarsCanvas />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
