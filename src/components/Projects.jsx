import { useState } from "react";

import socialImg from "../assets/projects/social.png";
import aiImg from "../assets/projects/ai.png";
import posImg from "../assets/projects/pos.png";

const projects = [
  {
    title: "Social Media Platform",
    short: "Full-stack LinkedIn-like platform.",
    full:
      "Developed a full-stack social networking platform inspired by LinkedIn, enabling users to create profiles, share posts, like and comment on content, and connect with other users. The frontend was built using HTML, CSS, JavaScript, and Bootstrap to ensure a responsive and user-friendly interface. On the backend, Laravel (PHP) was used to implement RESTful APIs, authentication systems, and server-side logic. MySQL was used as the database to manage structured user data, posts, and relationships. The project follows MVC architecture, ensuring scalability and maintainability. Key features include secure login/signup, dynamic content rendering, and efficient database queries for handling multiple users.",
    demo: "https://project1.great-site.net/?i=1",
    image: socialImg,
  },
  {
    title: "AI Interview Platform",
    short: "AI-based mock interview system.",
    full:
      "Built an AI-powered interview simulation platform that allows users to practice real-world interview scenarios. The frontend was developed using React.js with a modern UI/UX design approach, ensuring smooth and responsive interaction. The backend was built using Node.js and Express.js to handle API requests and business logic. MongoDB was used as the database to store user responses, session data, and interview records. The system enables real-time interaction, structured question flow, and efficient data handling. Key features include dynamic question rendering, session tracking, and a responsive design that works seamlessly across devices.",
    demo: "https://ai-interview-frontend-lktd.vercel.app/",
    image: aiImg,
  },
  {
    title: "POS Billing System",
    short: "Billing + transaction system.",
    full:
      "Developed a Point-of-Sale (POS) billing system designed to manage products, invoices, and daily business transactions efficiently. The backend was implemented using Laravel (PHP), handling authentication, business logic, and secure role-based access control. MySQL was used as the database to store product details, transaction records, and invoice data. The system automates billing workflows, reducing manual effort and improving operational efficiency. Key features include invoice generation, product management, transaction tracking, and a secure login system. This project highlights strong backend development and database management skills.",
    demo: null,
    image: posImg,
  }
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="min-h-screen px-6 py-20 text-center">

      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projects.map((p, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-6 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition"
          >

            <img
              src={p.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-gray-300 mb-6">{p.short}</p>

              <div className="flex gap-3 justify-center">

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

      {/* MODAL */}
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

            {/* 🔥 SCROLLABLE CONTENT */}
            <div className="max-h-[400px] overflow-y-auto text-gray-300 leading-relaxed">
              {selected.full}
            </div>

          </div>

        </div>
      )}

    </section>
  );
};

export default Projects;