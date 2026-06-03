export default function BottomBar() {
  return (
    <div
      className="mt-8 sm:mt-12 pt-6 sm:pt-8 text-center border-t transition-all duration-300"
      style={{
        borderTopColor: "rgba(0,242,255,0.15)",
      }}
    >
      <p
        className="text-sm sm:text-xs md:text-sm flex flex-col items-center justify-center gap-1"
        style={{ color: "var(--color-muted)" }}
      >
        <span>© {new Date().getFullYear()} - تمامی حقوق محفوظ است</span>
        <span>
          <a
            href="https://t.me/mohammad_dev_2012"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-all duration-300 hover:tracking-wide font-medium"
            style={{ color: "var(--neon-cyan)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textShadow = "0 0 8px var(--neon-cyan)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textShadow = "none";
            }}
          >
            محمد اکبری
          </a>{" "}
          طراحی و توسعه توسط
        </span>
      </p>
    </div>
  );
}
