const SubmitButton = () => {
  return (
    <button
      type="submit"
      className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple px-6 py-3 text-base font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-neon-cyan/40 active:scale-95"
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        <svg
          className="h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>ثبت درخواست خرید</span>
      </span>
      <div className="absolute inset-0 -z-0 translate-y-full bg-white/20 transition-transform duration-500 group-hover:translate-y-0"></div>
      <div className="absolute left-0 top-0 -z-0 h-full w-0 bg-white/30 transition-all duration-500 group-hover:w-full"></div>
    </button>
  );
};

export default SubmitButton;
