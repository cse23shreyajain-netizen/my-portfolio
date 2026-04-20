import { useState } from "react";
import { motion } from "framer-motion";

import govCert from "../assets/certificates/gov.png";
import pitchCert from "../assets/certificates/pitch.png";
import mernCert from "../assets/certificates/mern.png";

const certifications = [
  {
    title: "MERN Full Stack Development Internship",
    org: "EduSkills Academy",
    image: mernCert,
  },
  {
    title: "Eureka Pitching Competition",
    org: "InspireX E-Cell, GGCT",
    image: pitchCert,
  },
  {
    title: "Quiz on India's Democracy",
    org: "Government of India (MyGov)",
    image: govCert,
  },
];

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
            className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-6"
          >

            <img
              src={c.image}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="text-gray-400 mb-4">{c.org}</p>

            <button
              onClick={() => setSelectedImage(c.image)}
              className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-pink-400 text-black rounded-full"
            >
              View Certificate
            </button>

          </motion.div>
        ))}

      </div>

      {/* 🔥 MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-6">

          {/* ❌ CLOSE BUTTON */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl hover:scale-110 transition"
          >
            ✕
          </button>

          {/* IMAGE */}
          <img
            src={selectedImage}
            className="max-w-5xl w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
          />

        </div>
      )}

    </section>
  );
};

export default Certifications;