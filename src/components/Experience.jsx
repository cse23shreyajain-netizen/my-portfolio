import { useState } from "react";

const experiences = [
  {
    title: "Marketing Head — Newton School Coding Club (NSCC)",
    short: "Leading marketing and organizing technical events.",
    full:
      "Currently serving as the Marketing Head at Newton School Coding Club (NSCC), where I lead marketing strategies and event promotions. Organized and managed multiple events such as group discussions, Squid Game-based activities, tech treasure hunts, and hackathons. Responsible for increasing participation, coordinating teams, and ensuring smooth execution of events. This role helped me develop leadership, communication, and event management skills while working in a dynamic team environment.",
  },
  {
    title: "Smart India Hackathon (SIH) Finalist",
    short: "Finalist in SIH 2024 & 2025.",
    full:
      "Selected as a finalist in Smart India Hackathon (SIH) 2024 and 2025. Worked in a team to build innovative solutions such as an attendance management system and a smart kiosk system. Contributed to problem analysis, design, and implementation. Gained hands-on experience in teamwork, real-world problem solving, and rapid development under pressure.",
  }
];

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section className="min-h-screen px-6 py-20 text-center">

      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-left"
          >
            <h3 className="text-xl font-semibold mb-2">
              {exp.title}
            </h3>

            <p className="text-gray-300 text-sm mb-4">
              {exp.short}
            </p>

            {/* 🔥 BUTTON */}
            <button
              onClick={() => setSelectedExp(exp)}
              className="px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition text-sm"
            >
              Click to see description →
            </button>
          </div>
        ))}

      </div>

      {/* MODAL */}
      {selectedExp && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">

          <div className="bg-black border border-white/20 rounded-2xl p-8 max-w-2xl w-full relative">

            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-4 right-4 text-white text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4">
              {selectedExp.title}
            </h3>

            <p className="text-gray-300 leading-relaxed">
              {selectedExp.full}
            </p>

          </div>

        </div>
      )}

    </section>
  );
};

export default Experience;