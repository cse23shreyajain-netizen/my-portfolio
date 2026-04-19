import { useState } from "react";

import socialImg from "../assets/projects/social.png";
import aiImg from "../assets/projects/ai.png";
import posImg from "../assets/projects/pos.png";

const projects = [
  {
    title: "Social Media Platform",
    short: "Full-stack LinkedIn-like platform.",
    full: `
This project is a full-stack social networking platform inspired by LinkedIn, designed to allow users to connect, share, and interact in a professional environment.

🔹 Frontend Development:
The frontend was developed using HTML, CSS, JavaScript, and Bootstrap to create a clean, responsive, and user-friendly interface. The UI focuses on smooth navigation, structured layouts, and responsive design across different devices.

🔹 Backend Development:
The backend was built using Laravel (PHP), following MVC architecture for better scalability and maintainability. RESTful APIs were implemented to handle user interactions such as posting content, liking, commenting, and managing connections.

🔹 Database:
MySQL was used to manage structured data including user profiles, posts, comments, and relationships. Efficient database queries were implemented to handle multiple users and large data operations.

🔹 Features:
- User authentication (login/signup)
- Profile management system
- Create, update, and delete posts
- Like and comment functionality
- Connection system between users

🔹 Key Learning:
This project helped in understanding full-stack architecture, API integration, authentication systems, and database management in real-world applications.
    `,
    demo: "https://project1.great-site.net/?i=1",
    image: socialImg,
  },
  {
    title: "AI Interview Platform",
    short: "AI-based mock interview system.",
    full: `
This project is an AI-powered interview simulation platform designed to help users practice and improve their interview skills in a real-time interactive environment.

🔹 Frontend Development:
The frontend was built using React.js with modern UI/UX principles. The application provides a smooth and responsive user experience with dynamic rendering of questions and real-time interaction.

🔹 Backend Development:
The backend was developed using Node.js and Express.js, handling API requests, business logic, and user session management efficiently.

🔹 Database:
MongoDB was used to store user responses, interview sessions, and structured data. It allows flexible schema design and efficient handling of dynamic data.

🔹 Features:
- Real-time interview simulation
- Dynamic question flow
- Session tracking and response storage
- Interactive UI for better user engagement

🔹 Key Learning:
This project strengthened knowledge in MERN stack development, real-time application flow, API integration, and user experience design.
    `,
    demo: "https://ai-interview-frontend-lktd.vercel.app/",
    image: aiImg,
  },
  {
    title: "POS Billing System",
    short: "Billing + transaction system.",
    full: `
This project is a Point-of-Sale (POS) billing system developed to manage products, invoices, and daily business transactions efficiently.

🔹 Backend Development:
The system was built using Laravel (PHP), handling core business logic, authentication, and role-based access control.

🔹 Database:
MySQL was used to store product data, transaction records, and invoice details. The system ensures structured data handling and efficient querying.

🔹 Features:
- Product management system
- Invoice generation
- Transaction tracking
- Role-based authentication system
- Automated billing workflows

🔹 Key Learning:
This project enhanced backend development skills, database design, and understanding of real-world business logic implementation.
    `,
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

            {/* Background Image */}
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

      {/* 🔥 BIG MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-6">

          <div className="bg-black border border-white/20 rounded-2xl p-10 w-full max-w-4xl h-[80vh] overflow-y-auto relative">

            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-6 text-2xl"
            >
              ✕
            </button>

            <h3 className="text-3xl font-bold mb-6">
              {selected.title}
            </h3>

            <div className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
              {selected.full}
            </div>

          </div>

        </div>
      )}

    </section>
  );
};

export default Projects;