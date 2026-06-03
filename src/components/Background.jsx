const Background = ({ isDarkMode }) => {
  return (
    <>
      <div
        className={`fixed inset-0 -z-10 transition-all duration-300 ${
          isDarkMode
            ? "bg-gradient-to-br from-[#01050c] via-[#0a0f1a] to-[#01050c]"
            : "bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#f0f9ff]"
        }`}
      />

      <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 200 + 30}px`,
              height: `${Math.random() * 200 + 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${isDarkMode ? "rgba(0, 242, 255, 0.02)" : "rgba(8, 145, 178, 0.03)"})`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 8 + 6}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Background;
