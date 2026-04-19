const skills = [
  "React.js", "JavaScript", "HTML", "CSS", "Bootstrap",
  "Node.js", "Express.js", "PHP", "Laravel",
  "MongoDB", "MySQL",
  "REST APIs", "Authentication",
  "Git", "GitHub", "Postman"
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen px-6 py-20 text-center">

      <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-32 h-32 flex items-center justify-center text-center rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-medium hover:scale-110 hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] transition float"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
};

export default Skills;