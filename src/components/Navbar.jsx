const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="flex justify-between items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-6 py-3 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition">

        <h1 className="font-semibold text-lg">Shreya.dev</h1>

        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>

      </div>
    </div>
  );
};

export default Navbar;