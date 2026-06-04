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
        className="flex items-center gap-2 transition-all duration-300 cursor-pointer group "
      >
        <FaArrowRight className="text-sm transition-transform duration-300 group-hover:-translate-x-1" />
        <span className="text-sm font-medium">بازگشت به لیست محصولات</span>
      </button>
    </div>
  );
};

export default BackButton;
