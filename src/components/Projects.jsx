import { useState } from "react";

// ✅ IMPORT IMAGES (make sure these exist)
import socialImg from "../assets/projects/social.png";
import aiImg from "../assets/projects/ai.png";
import posImg from "../assets/projects/pos.png";

const projects = [
  {
    title: "Social Media Platform",
    short: "Full-stack LinkedIn-like platform.",
    full:
      "Developed a full-stack social networking platform with user profiles, posts, likes, and comments using Laravel, MySQL, and REST APIs.",
    demo: "https://project1.great-site.net/?i=1",
    image: socialImg,
  },
  {
    title: "AI Interview Platform",
    short: "AI-based mock interview system.",
    full:
      "Built using React, Node.js, and MongoDB for real-time interview simulation and response tracking.",
    demo: "https://ai-interview-frontend-lktd.vercel.app/",
    image: aiImg,
  },
  {
    title: "POS Billing System",
    short: "Billing + transaction system.",
    full:
      "Backend system using Laravel & MySQL for invoices, products and transaction handling.",
    demo: null,
    image: posImg,
  }
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="min-h-screen px-6 py-20 text-center">

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Projects
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projects.map((p, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-6 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition"
          >

            {/* 🔥 BACKGROUND IMAGE (FIXED VISIBILITY) */}
            <img
              src={p.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />

            {/* 🔥 GRADIENT OVERLAY (BETTER THAN DARK BLOCK) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* CONTENT */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-gray-300 mb-6">{p.short}</p>

              <div className="flex gap-3 justify-center">

                {/* Live Demo */}
                {p.demo ? (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-black hover:scale-105 transition"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="px-4 py-2 bg-gray-500/30 rounded-full">
                    Coming Soon
                  </span>
                )}

                {/* Description */}
                <button
                  onClick={() => setSelected(p)}
                  className="px-4 py-2 border border-white/30 rounded-full hover:bg-white/10 transition"
                >
                  Description
                </button>

              </div>
            </div>

          </div>
        ))}

      </div>

      {/* 🔥 MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-black border border-white/20 rounded-xl p-8 max-w-xl relative">

            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-4 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl mb-4">{selected.title}</h3>
            <p className="text-gray-300 leading-relaxed">{selected.full}</p>

          </div>

        </div>
      )}

    </section>
  );
};

export default Projects;