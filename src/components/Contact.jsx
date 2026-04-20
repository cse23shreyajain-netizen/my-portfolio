import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 relative"
    >

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6"
      >

        {/* HEADING */}
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Get in Touch
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-300 max-w-xl mx-auto">
          I’m always open to new opportunities, collaborations, and exciting tech ideas. Feel free to connect with me anytime.
        </p>

        {/* CONTACT BUTTONS */}
        <div className="flex flex-col gap-4 items-center">

          {/* EMAIL */}
          <motion.a
            href="mailto:shreyajain.dev12@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition"
          >
            📧 shreyajain.dev12@gmail.com
          </motion.a>

          {/* PHONE */}
          <motion.a
            href="tel:8839357130"
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition"
          >
            📱 +91 8839357130
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            href="https://www.linkedin.com/in/shreya-jain-b041903b3/"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
          >
            🔗 LinkedIn Profile
          </motion.a>

          {/* GITHUB */}
          <motion.a
            href="https://github.com/cse23shreyajain-netizen"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-700 to-black text-white"
          >
            💻 GitHub Profile
          </motion.a>

        </div>

      </motion.div>
    </section>
  );
};

export default Contact;