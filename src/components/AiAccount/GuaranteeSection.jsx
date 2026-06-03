import {
  FaShieldAlt,
  FaHeadset,
  FaCheckCircle,
  FaUsersSlash,
} from "react-icons/fa";

const GuaranteeSection = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-heading mb-4 flex items-center gap-2 border-r-4 border-neon-purple pr-3">
        <FaShieldAlt className="text-neon-purple" />
        گارانتی و پشتیبانی
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="text-center p-3 rounded-xl bg-neon-cyan/5">
          <FaShieldAlt className="text-neon-cyan text-2xl mx-auto mb-2" />
          <p className="text-xs text-heading font-semibold">تحویل آنی</p>
          <p className="text-[10px] text-muted">بلافاصله پس از پرداخت</p>
        </div>
        <div className="text-center p-3 rounded-xl bg-neon-purple/5">
          <FaHeadset className="text-neon-purple text-2xl mx-auto mb-2" />
          <p className="text-xs text-heading font-semibold">پشتیبانی</p>
          <p className="text-[10px] text-muted">۲۴ ساعته</p>
        </div>
        <div className="text-center p-3 rounded-xl bg-neon-mint/5">
          <FaCheckCircle className="text-neon-mint text-2xl mx-auto mb-2" />
          <p className="text-xs text-heading font-semibold">تضمین کیفیت</p>
          <p className="text-[10px] text-muted">اصالت کالا</p>
        </div>
        <div className="text-center p-3 rounded-xl bg-neon-ice/5">
          <FaUsersSlash className="text-neon-ice text-2xl mx-auto mb-2" />
          <p className="text-xs text-heading font-semibold">کاملاً اختصاصی</p>
          <p className="text-[10px] text-muted">غیر اشتراکی</p>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeSection;
