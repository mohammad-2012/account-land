// src/components/home/FloatingIcons.jsx
import { FaRobot, FaGoogle, FaTelegramPlane, FaGem, FaBolt } from "react-icons/fa";

export default function FloatingIcons({ position }) {
  const icons = [
    { icon: <FaRobot />, delay: 0, className: "text-neon-cyan" },
    { icon: <FaGoogle />, delay: 1, className: "text-neon-blue" },
    { icon: <FaTelegramPlane />, delay: 2, className: "text-neon-cyan" },
    { icon: <FaGem />, delay: 3, className: "text-yellow-500" },
    { icon: <FaBolt />, delay: 4, className: "text-neon-mint" },
  ];

  const positions = position === "left" 
    ? ["top-10 -left-16", "top-32 -left-20", "bottom-20 -left-16", "bottom-32 -left-20", "top-1/2 -left-24"]
    : ["top-10 -right-16", "top-32 -right-20", "bottom-20 -right-16", "bottom-32 -right-20", "top-1/2 -right-24"];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${positions[index]} opacity-0 group-hover:opacity-100 transition-all duration-500 animate-float-${index % 2 === 0 ? "slow" : "fast"}`}
          style={{ animationDelay: `${item.delay * 0.5}s` }}
        >
          <div className={`text-2xl md:text-3xl ${item.className}`}>
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}