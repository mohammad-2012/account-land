import { FaCheckCircle, FaShieldAlt, FaUsersSlash } from "react-icons/fa";

const InfoItem = ({
  icon: Icon,
  text,
  colorClass,
  hoverColorClass,
  bgClass,
}) => {
  const getIcon = () => {
    if (Icon === "FaCheckCircle")
      return (
        <FaCheckCircle
          className={`${colorClass} text-sm group-hover:scale-110 transition-transform duration-300`}
        />
      );
    if (Icon === "FaShieldAlt")
      return (
        <FaShieldAlt
          className={`${colorClass} text-sm group-hover:scale-110 transition-transform duration-300`}
        />
      );
    if (Icon === "FaUsersSlash")
      return (
        <FaUsersSlash
          className={`${colorClass} text-sm group-hover:scale-110 transition-transform duration-300`}
        />
      );
    return (
      <FaCheckCircle
        className={`${colorClass} text-sm group-hover:scale-110 transition-transform duration-300`}
      />
    );
  };

  return (
    <div
      className={`flex items-center gap-3 text-sm py-2 px-3 rounded-xl ${bgClass} hover:bg-opacity-10 transition-all duration-300 group cursor-pointer border border-opacity-10 hover:border-opacity-30 ${colorClass.replace("text", "border")}`}
    >
      {getIcon()}
      <span
        className={`text-muted ${hoverColorClass} transition-colors duration-300`}
      >
        {text}
      </span>
    </div>
  );
};

export default InfoItem;
