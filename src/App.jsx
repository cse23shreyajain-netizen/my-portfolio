import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative text-white overflow-x-hidden">

      {/* 🌌 BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/background.png"
          alt="background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* 🔝 NAVBAR */}
      <Navbar />

      {/* 🔽 SECTIONS */}
      <main className="space-y-20">

        <section id="home">
          <Hero />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <Skills />
        </section>

        {/* 🆕 CERTIFICATIONS */}
        <section id="certifications">
          <Certifications />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

    </div>
  );
}

export default App;