import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen px-6 py-20 text-center">

      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        About Me
      </h2>

      <p className="max-w-3xl mx-auto text-gray-300 mb-12">
        I am a Software Developer passionate about building modern and responsive web applications.
        I focus on clean UI, performance, and user experience.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-left"
        >
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <p className="text-gray-300">
            B.Tech in Computer Science Engineering <br />
            Gyan Ganga College of Technology <br />
            CGPA: 6.31 / 10
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-left"
        >
          <h3 className="text-2xl font-semibold mb-4">Development</h3>
          <p className="text-gray-300">
            Skilled in PHP, JavaScript, Laravel, MySQL and building full-stack web applications.
          </p>
        </motion.div>

      </div>

    </section>
  );
};

export default About;