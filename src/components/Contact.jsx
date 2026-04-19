import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center"
    >

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h2>

      {/* Container */}
      <div className="max-w-4xl w-full grid gap-6">

        {/* Email */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg transition hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
        >
          <p className="text-gray-400 mb-2">📧 Email</p>
          <p className="text-2xl font-semibold text-white">
            shreyajain.dev12@gmail.com
          </p>
        </motion.div>

        {/* Phone */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg transition hover:shadow-[0_0_25px_rgba(236,72,153,0.5)]"
        >
          <p className="text-gray-400 mb-2">📱 Phone</p>
          <p className="text-2xl font-semibold text-white">
            +91 8839357130
          </p>
        </motion.div>

        {/* Links */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/shreya-jain-b041903b3/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-xl font-medium transition hover:bg-blue-500/20 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
          >
            🔗 LinkedIn Profile
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/cse23shreyajain-netizen"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-xl font-medium transition hover:bg-gray-500/20 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
          >
            💻 GitHub Profile
          </motion.a>

        </div>

      </div>

    </section>
  );
};

export default Contact;