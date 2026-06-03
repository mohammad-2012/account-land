const GlobalStyles = () => {
  return (
    <style jsx>{`
      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

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

      @keyframes bounce {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-3px);
        }
      }

      @keyframes rocket {
        0%,
        100% {
          transform: translateY(0) rotate(0deg);
        }
        25% {
          transform: translateY(-3px) rotate(-5deg);
        }
        75% {
          transform: translateY(3px) rotate(5deg);
        }
      }

      @keyframes bounce-slow {
        0%,
        100% {
          transform: translateY(0);
          opacity: 0.3;
        }
        50% {
          transform: translateY(-4px);
          opacity: 1;
        }
      }

      .animate-fadeInDown {
        animation: fadeInDown 0.25s ease-out;
      }

      .animate-fadeInUp {
        animation: fadeInUp 0.25s ease-out forwards;
        opacity: 0;
      }

      .animate-float {
        animation: float 8s ease-in-out infinite;
      }

      .animate-bounce {
        animation: bounce 0.8s ease-in-out infinite;
      }

      .animate-rocket {
        animation: rocket 1.5s ease-in-out infinite;
      }

      .animate-bounce-slow {
        animation: bounce-slow 1s ease-in-out infinite;
      }

      .animation-delay-150 {
        animation-delay: 150ms;
      }

      .animation-delay-200 {
        animation-delay: 200ms;
      }

      .animation-delay-300 {
        animation-delay: 300ms;
      }

      .animation-delay-500 {
        animation-delay: 500ms;
      }

      .animation-delay-700 {
        animation-delay: 700ms;
      }

      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `}</style>
  );
};

export default GlobalStyles;
