import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Leadership from "@/components/Leadership";
import Education from "@/components/Education";
import Publications from "@/components/Publications";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Leadership />
        <Education />
        <Publications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
