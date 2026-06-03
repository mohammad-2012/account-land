import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="mb-6">
      <button
        onClick={handleBack}
        className="group flex items-center gap-2 text-neon-cyan hover:text-neon-purple transition-all duration-300 cursor-pointer"
      >
        <FaArrowRight className="text-sm group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="text-sm font-medium">بازگشت به لیست محصولات</span>
      </button>
    </div>
  );
};

export default BackButton;
