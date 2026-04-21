import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <h1 className="font-bold text-lg">Shreya</h1>

        <ul className="flex gap-6 text-sm">
          <li><a href="#hero" className="hover:text-purple-400">Home</a></li>
          <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
          <li><a href="#experience" className="hover:text-purple-400">Experience</a></li>
          <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>
          <li><a href="#certifications" className="hover:text-purple-400">Certifications</a></li> {/* ✅ FIX */}
          <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
}