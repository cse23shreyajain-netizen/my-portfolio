import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const Hero = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef();

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) setImage(savedImage);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 float">

      {/* Profile */}
      <div
        onClick={() => fileInputRef.current.click()}
        className="w-40 h-40 rounded-full border-2 border-white/30 mb-6 overflow-hidden cursor-pointer hover:scale-105 transition bg-white/10 flex items-center justify-center"
      >
        {image ? (
          <img src={image} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400">Upload Photo</span>
        )}
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold mb-6"
      >
        Hi, I am <span className="text-blue-400">Shreya</span>
      </motion.h1>

      {/* 🔥 STRONG FULL STACK DESCRIPTION */}
      <p className="max-w-3xl text-gray-300 mb-8 leading-relaxed text-lg">
        I am a Full Stack Web Developer specializing in building modern,
        scalable, and user-friendly applications. I work across both frontend
        and backend using technologies like React.js, Node.js, Express.js, and
        MongoDB. I focus on creating clean UI/UX designs, responsive interfaces,
        and efficient backend systems with REST APIs and authentication. My goal
        is to deliver high-performance web applications with seamless user
        experience and strong architecture.
      </p>

      {/* 🔥 DOWNLOAD RESUME */}
      <a
        href="/resume.pdf"
        download
        className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-medium hover:scale-105 transition"
      >
        Download Resume
      </a>

    </section>
  );
};

export default Hero;