import { useState } from "react";
import { motion } from "framer-motion";

// 🔥 IMPORT IMAGES
import govCert from "../assets/certificates/gov.png";
import pitchCert from "../assets/certificates/pitch.png";
import mernCert from "../assets/certificates/mern.png";

const certifications = [
  {
    title: "MERN Full Stack Development Internship",
    org: "EduSkills Academy",
    desc: `
Completed a 10-week intensive internship focused on full-stack web development using the MERN stack.

Gained hands-on experience in:
• React.js (Hooks, Context API, Redux Toolkit)
• Tailwind CSS for modern UI design
• Node.js & Express.js for backend development
• MongoDB & Mongoose for database integration
• REST API development & JWT authentication
• Full-stack integration and deployment workflows

Developed real-world projects including an E-commerce platform with user management and product catalog.
    `,
    image: mernCert,
    link: "/certificates/mern.pdf",
  },
  {
    title: "Eureka Pitching Competition",
    org: "InspireX E-Cell, GGCT",
    desc: `
Successfully participated in a national-level pitching competition.

Developed and presented innovative ideas, improving:
• Presentation skills
• Public speaking
• Problem-solving mindset
• Entrepreneurship thinking

Collaborated in a competitive environment and showcased project ideas effectively.
    `,
    image: pitchCert,
    link: null,
  },
  {
    title: "Quiz on India's Democracy",
    org: "Government of India (MyGov)",
    desc: `
Successfully completed a national-level quiz conducted by the Government of India.

Demonstrated awareness and knowledge of:
• Indian political system
• Democratic structure
• Governance concepts

Recognized for active participation and engagement in national initiatives.
    `,
    image: govCert,
    link: null,
  },
];

const Certifications = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certifications" className="min-h-screen px-6 py-20 text-center">

      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Certifications
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {certifications.map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-6"
          >

            {/* IMAGE */}
            <img
              src={c.image}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="text-gray-400 mb-4">{c.org}</p>

            <div className="flex gap-3 justify-center">

              <button
                onClick={() => setSelected(c)}
                className="px-4 py-2 border border-white/30 rounded-full hover:bg-white/10"
              >
                Description
              </button>

              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-pink-400 text-black rounded-full"
                >
                  View Certificate
                </a>
              )}

            </div>
          </motion.div>
        ))}

      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-6">

          <div className="bg-black border border-white/20 rounded-2xl p-8 max-w-3xl h-[80vh] overflow-y-auto relative">

            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-6 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl mb-4">{selected.title}</h3>

            <div className="text-gray-300 whitespace-pre-line">
              {selected.desc}
            </div>

          </div>

        </div>
      )}

    </section>
  );
};

export default Certifications;