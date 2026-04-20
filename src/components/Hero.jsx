import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6"
    >

      <div className="max-w-3xl mx-auto">

        {/* PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-white/30 shadow-xl hover:scale-105 transition"
          />
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Hi, I am{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Shreya
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 text-sm md:text-lg leading-relaxed mb-8"
        >
          I am a Full Stack Web Developer specializing in building modern,
          scalable, and user-friendly applications. I work across both frontend
          and backend using technologies like React.js, Node.js, Express.js, and
          MongoDB. I focus on creating clean UI/UX designs, responsive
          interfaces, and efficient backend systems with REST APIs and
          authentication. My goal is to deliver high-performance web
          applications with seamless user experience and strong architecture.
        </motion.p>

        {/* BUTTON */}
        <motion.a
          href="/resume.pdf"
          download
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-medium hover:scale-105 transition"
        >
          Download Resume
        </motion.a>

      </div>
    </section>
  );
};

export default Hero;