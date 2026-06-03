// export const HomeStyles = () => (
//   <style>{`
//     @keyframes float {
//       0%, 100% { transform: translateY(0px); }
//       50% { transform: translateY(-20px); }
//     }

//     @keyframes floatSlow {
//       0%, 100% { transform: translateY(0px); }
//       50% { transform: translateY(-15px); }
//     }

//     @keyframes floatDelayed {
//       0%, 100% { transform: translateY(0px); }
//       50% { transform: translateY(-25px); }
//     }

//     @keyframes floatFast {
//       0%, 100% { transform: translateY(0px); }
//       50% { transform: translateY(-10px); }
//     }

//     @keyframes floatTelegram {
//       0% {
//         transform: translateY(0px) translateX(0px) rotate(0deg);
//         opacity: 1;
//       }
//       20% {
//         transform: translateY(-20px) translateX(10px) rotate(15deg);
//         opacity: 1;
//       }
//       40% {
//         transform: translateY(-35px) translateX(-5px) rotate(-10deg);
//         opacity: 1;
//       }
//       60% {
//         transform: translateY(-25px) translateX(15px) rotate(20deg);
//         opacity: 0.8;
//       }
//       80% {
//         transform: translateY(-45px) translateX(-10px) rotate(-15deg);
//         opacity: 1;
//       }
//       100% {
//         transform: translateY(0px) translateX(0px) rotate(0deg);
//         opacity: 1;
//       }
//     }

//     .animate-float {
//       animation: float 3s ease-in-out infinite;
//     }

//     .animate-float-slow {
//       animation: floatSlow 4s ease-in-out infinite;
//     }

//     .animate-float-delayed {
//       animation: floatDelayed 3.5s ease-in-out infinite;
//     }

//     .animate-float-fast {
//       animation: floatFast 2.5s ease-in-out infinite;
//     }

//     .animate-float-telegram {
//       animation: floatTelegram 4s ease-in-out infinite;
//     }
//   `}</style>
// );

// src/components/home/HomeStyles.jsx
export const HomeStyles = () => (
  <style>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }

    @keyframes floatSlow {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }

    @keyframes floatDelayed {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-25px); }
    }

    @keyframes floatFast {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    @keyframes floatTelegram {
      0% {
        transform: translateY(0px) translateX(0px) rotate(0deg);
        opacity: 1;
      }
      20% {
        transform: translateY(-20px) translateX(10px) rotate(15deg);
        opacity: 1;
      }
      40% {
        transform: translateY(-35px) translateX(-5px) rotate(-10deg);
        opacity: 1;
      }
      60% {
        transform: translateY(-25px) translateX(15px) rotate(20deg);
        opacity: 0.8;
      }
      80% {
        transform: translateY(-45px) translateX(-10px) rotate(-15deg);
        opacity: 1;
      }
      100% {
        transform: translateY(0px) translateX(0px) rotate(0deg);
        opacity: 1;
      }
    }

    .animate-float {
      animation: float 3s ease-in-out infinite;
    }

    .animate-float-slow {
      animation: floatSlow 4s ease-in-out infinite;
    }

    .animate-float-delayed {
      animation: floatDelayed 3.5s ease-in-out infinite;
    }

    .animate-float-fast {
      animation: floatFast 2.5s ease-in-out infinite;
    }

    .animate-float-telegram {
      animation: floatTelegram 4s ease-in-out infinite;
    }
  `}</style>
);
