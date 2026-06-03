import {
  FaTelegramPlane,
  FaEnvelope,
  FaQuestionCircle,
  FaPaperPlane,
} from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

export default function Support() {
  return (
    <div className="min-h-screen py-6 sm:py-8" dir="rtl">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading mb-3 sm:mb-4">
            پشتیبانی <span className="text-[var(--color-cta)]">فوری</span>
          </h1>
          <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto px-2">
            تیم پشتیبانی ما ۲۴ ساعته، ۷ روز هفته آماده پاسخگویی به سوالات و
            مشکلات شماست
          </p>
          <div className="w-20 sm:w-24 h-1 bg-[var(--color-cta)] mx-auto mt-3 sm:mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="product-card text-center group p-4 sm:p-5">
            <div className="bg-opacity-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <FaEnvelope className="h-7 w-7 sm:h-8 sm:w-8 text-[var(--color-accent)]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-heading mb-1 sm:mb-2">
              پست الکترونیک
            </h3>
            <p className="text-muted text-sm mb-2 sm:mb-3">
              پاسخگویی ظرف ۲۴ ساعت
            </p>
            <a
              href="mailto:mohammad1391akbari0@gmail.com"
              className="text-link hover:text-[var(--color-accent)] text-base sm:text-lg font-medium break-all"
            >
              mohammad1391akbari0@gmail.com
            </a>
          </div>

          <div className="product-card text-center group p-4 sm:p-5">
            <div className="bg-opacity-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <FaTelegramPlane className="h-7 w-7 sm:h-8 sm:w-8 text-[var(--neon-blue)]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-heading mb-1 sm:mb-2">
              تلگرام
            </h3>
            <p className="text-muted text-sm mb-2 sm:mb-3">پاسخگویی آنلاین</p>
            <a
              href="https://t.me/mohammad_dev_2012"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:text-[var(--neon-blue)] text-base sm:text-lg font-medium"
            >
              @mohammad_dev_2012
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-card rounded-2xl p-5 sm:p-6 border border-[var(--color-muted)]">
            <h3 className="text-xl sm:text-2xl font-bold text-heading mb-4 sm:mb-6 flex items-center gap-2">
              <FaPaperPlane className="text-[var(--color-cta)] text-lg sm:text-xl" />
              ارسال پیام سریع
            </h3>
            <form className="space-y-3 sm:space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-muted)] focus:border-[var(--color-cta)] focus:outline-none transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="ایمیل (اختیاری)"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-muted)] focus:border-[var(--color-cta)] focus:outline-none transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="آیدی تلگرام"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-muted)] focus:border-[var(--color-cta)] focus:outline-none transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="متن پیام شما ..."
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-muted)] focus:border-[var(--color-cta)] focus:outline-none transition-colors resize-none text-sm sm:text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary text-black w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 text-sm sm:text-base "
              >
                <FaPaperPlane className="text-sm sm:text-base " />
                ارسال پیام
              </button>
            </form>
          </div>

          <div className="bg-card rounded-2xl p-5 sm:p-6 border border-[var(--color-muted)]">
            <h3 className="text-xl sm:text-2xl font-bold text-heading mb-4 sm:mb-6 flex items-center gap-2">
              <FaQuestionCircle className="text-[var(--color-cta)] text-lg sm:text-xl" />
              سوالات متداول
            </h3>
            <div className="space-y-4 sm:space-y-5">
              <div className="border-b border-[var(--color-muted)] pb-3">
                <h4 className="font-bold text-heading mb-2 flex items-start gap-2 text-base sm:text-lg">
                  <MdSupportAgent className="text-[var(--color-cta)] mt-0.5 flex-shrink-0" />
                  <span>چگونه اکانت خریداری شده را تحویل میگیرم؟</span>
                </h4>
                <p className="text-secondary text-sm sm:text-base pr-6 leading-relaxed">
                  بلافاصله پس از پرداخت، اطلاعات اکانت در پنل کاربری شما نمایش
                  داده میشود و همچنین به ایمیل شما ارسال میگردد.
                </p>
              </div>
              <div className="border-b border-[var(--color-muted)] pb-3">
                <h4 className="font-bold text-heading mb-2 flex items-start gap-2 text-base sm:text-lg">
                  <MdSupportAgent className="text-[var(--color-cta)] mt-0.5 flex-shrink-0" />
                  <span>ضمانت بازگشت وجه دارید؟</span>
                </h4>
                <p className="text-secondary text-sm sm:text-base pr-6 leading-relaxed">
                  بله، در صورت بروز مشکل فنی از سمت ما، طی ۷ روز وجه شما عودت
                  داده میشود.
                </p>
              </div>
              <div className="border-b border-[var(--color-muted)] pb-3">
                <h4 className="font-bold text-heading mb-2 flex items-start gap-2 text-base sm:text-lg">
                  <MdSupportAgent className="text-[var(--color-cta)] mt-0.5 flex-shrink-0" />
                  <span>مدت زمان پاسخگویی به تیکت چقدر است؟</span>
                </h4>
                <p className="text-secondary text-sm sm:text-base pr-6 leading-relaxed">
                  تیکت‌های پشتیبانی حداکثر طی ۱۲ ساعت کاری پاسخ داده میشوند.
                </p>
              </div>
              <div className="pb-2">
                <h4 className="font-bold text-heading mb-2 flex items-start gap-2 text-base sm:text-lg">
                  <MdSupportAgent className="text-[var(--color-cta)] mt-0.5 flex-shrink-0" />
                  <span>آیا امکان تغییر اکانت وجود دارد؟</span>
                </h4>
                <p className="text-secondary text-sm sm:text-base pr-6 leading-relaxed">
                  خیر، شما باید ابتدا ایمیل خودتون رو یک بار بدید و فعالسازی
                  اشتراک روی اون انجام داده می شود.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-secondary flex flex-col sm:flex-row items-center justify-center gap-2 text-base sm:text-base">
            <FaTelegramPlane className="text-[var(--neon-blue)] text-lg sm:text-xl" />
            <span className="flex items-center gap-1 flex-wrap justify-center">
              آیدی پشتیبانی در تلگرام:
              <a
                href="https://t.me/mohammad_dev_2012"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-cta)] hover:underline font-medium text-base sm:text-lg md:text-xl"
              >
                @mohammad_dev_2012
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
