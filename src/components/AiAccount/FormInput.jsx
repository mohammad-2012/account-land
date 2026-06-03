import { FaUser, FaPhone, FaTelegram, FaEnvelope } from "react-icons/fa";

const iconMap = {
  FaUser: <FaUser className="text-neon-cyan text-sm sm:text-base" />,
  FaPhone: <FaPhone className="text-neon-cyan text-sm sm:text-base" />,
  FaTelegram: <FaTelegram className="text-[#0088cc] text-sm sm:text-base" />,
  FaEnvelope: <FaEnvelope className="text-neon-cyan text-sm sm:text-base" />,
};

const FormInput = ({
  type,
  name,
  label,
  value,
  onChange,
  error,
  placeholder,
  icon,
  optionalText,
  required,
}) => {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1.5 gap-1">
        <label className="text-xs sm:text-sm font-medium text-heading">
          {label}
          {required && <span className="text-red-500 mr-1">*</span>}
        </label>
        {optionalText && (
          <span className="text-[10px] sm:text-xs text-muted">
            {optionalText}
          </span>
        )}
      </div>
      <div className="relative">
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted">
          {iconMap[icon]}
        </div>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-10 py-2.5 sm:py-3 rounded-lg bg-[var(--color-bg)] border text-sm sm:text-base transition-all duration-200 focus:outline-none ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-[var(--color-muted)] focus:border-neon-cyan"
          }`}
        />
      </div>
      {error && (
        <p className="text-red-500 text-[10px] sm:text-xs mt-1 mr-1">{error}</p>
      )}
    </div>
  );
};

export default FormInput;
