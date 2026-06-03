const GlobalStyles = () => {
  return (
    <style jsx>{`
      @keyframes float {
        0%,
        100% {
          transform: translateY(0px) translateX(0px);
        }
        25% {
          transform: translateY(-10px) translateX(6px);
        }
        50% {
          transform: translateY(-15px) translateX(-6px);
        }
        75% {
          transform: translateY(-10px) translateX(6px);
        }
      }
      .animate-float {
        animation: float 8s ease-in-out infinite;
      }
    `}</style>
  );
};

export default GlobalStyles;
