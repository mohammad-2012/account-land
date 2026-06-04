import { FaInfoCircle } from "react-icons/fa";

const AccountTypeField = ({ value }) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-heading">
        <FaInfoCircle className="inline ml-1 text-neon-purple" />
        نوع اکانت
      </label>
      <input
        type="text"
        name="accountType"
        value={value}
        disabled
        className="w-full px-4 py-2 border cursor-not-allowed rounded-xl border-neon-cyan/30 text-muted"
      />
    </div>
  );
};

export default AccountTypeField;
