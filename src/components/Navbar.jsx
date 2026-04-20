import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 w-full flex justify-center z-50 px-4">

      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <h1 className="font-bold text-lg">shreya.dev</h1>

        {/* Desktop */}
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 w-[90%] bg-black/80 backdrop-blur-lg rounded-xl p-6 flex flex-col gap-4 text-center md:hidden">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      )}

    </nav>
  );
};

export default Navbar;