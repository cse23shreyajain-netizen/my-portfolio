import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 text-center"
    >

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10 max-w-xl w-full shadow-lg"
      >

        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

        <div className="space-y-4 text-gray-300">

          <p>Email: your@email.com</p>
          <p>Phone: +91-XXXXXXXXXX</p>

          <a
            href="https://www.linkedin.com/in/shreya-jain-b041903b3/"
            target="_blank"
            className="block hover:text-blue-400"
          >
            LinkedIn Profile
          </a>

          <a
            href="https://github.com/cse23shreyajain-netizen"
            target="_blank"
            className="block hover:text-blue-400"
          >
            GitHub Profile
          </a>

        </div>

      </motion.div>

    </section>
  );
};

export default Contact;