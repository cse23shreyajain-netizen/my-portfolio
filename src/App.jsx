import MainLayout from "./layout/MainLayout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SectionWrapper from "./components/SectionWrapper";
import Certifications from "./components/Certifications";

<Certifications />

function App() {
  return (
    <MainLayout>

      <Navbar />

      <Hero />

      <SectionWrapper>
        <About />
      </SectionWrapper>

      <SectionWrapper>
        <Projects />
      </SectionWrapper>

      <SectionWrapper>
        <Experience />
      </SectionWrapper>

      <SectionWrapper>
        <Skills />
      </SectionWrapper>

      <SectionWrapper>
        <Contact />
      </SectionWrapper>

    </MainLayout>
  );
}

export default App;