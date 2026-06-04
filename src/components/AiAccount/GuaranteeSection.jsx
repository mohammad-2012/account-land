import {
  FaShieldAlt,
  FaHeadset,
  FaCheckCircle,
  FaUsersSlash,
} from "react-icons/fa";

const GuaranteeSection = () => {
  return (
    <div className="mb-8">
      <h2 className="flex items-center gap-2 pr-3 mb-4 text-xl font-bold border-r-4 text-heading border-neon-purple">
        <FaShieldAlt className="text-neon-purple" />
        گارانتی و پشتیبانی
      </h2>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <div className="p-3 text-center rounded-xl ">
          <FaShieldAlt className="mx-auto mb-2 text-2xl text-neon-cyan" />
          <p className="text-xs font-semibold text-heading">تحویل آنی</p>
          <p className="text-[10px] text-muted">بلافاصله پس از پرداخت</p>
        </div>
        <div className="p-3 text-center rounded-xl ">
          <FaHeadset className="mx-auto mb-2 text-2xl text-neon-purple" />
          <p className="text-xs font-semibold text-heading">پشتیبانی</p>
          <p className="text-[10px] text-muted">۲۴ ساعته</p>
        </div>
        <div className="p-3 text-center rounded-xl ">
          <FaCheckCircle className="mx-auto mb-2 text-2xl text-neon-mint" />
          <p className="text-xs font-semibold text-heading">تضمین کیفیت</p>
          <p className="text-[10px] text-muted">اصالت کالا</p>
        </div>
        <div className="p-3 text-center rounded-xl ">
          <FaUsersSlash className="mx-auto mb-2 text-2xl text-neon-ice" />
          <p className="text-xs font-semibold text-heading">کاملاً اختصاصی</p>
          <p className="text-[10px] text-muted">غیر اشتراکی</p>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeSection;
