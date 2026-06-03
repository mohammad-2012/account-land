import { FaInfoCircle } from "react-icons/fa";

const AccountTypeField = ({ value }) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-heading mb-2">
        <FaInfoCircle className="inline ml-1 text-neon-purple" />
        نوع اکانت
      </label>
      <input
        type="text"
        name="accountType"
        value={value}
        disabled
        className="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 border border-neon-cyan/30 text-muted cursor-not-allowed"
      />
    </div>
  );
};

export default AccountTypeField;
