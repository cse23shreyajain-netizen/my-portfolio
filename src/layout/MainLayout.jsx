const MainLayout = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* 🌌 Background */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/background.png"
          alt="background"
          className="w-full h-full object-cover brightness-110 contrast-125 saturate-110"
        />

        {/* ✅ VERY LIGHT overlay (almost invisible) */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* ✨ Content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
};

export default MainLayout;