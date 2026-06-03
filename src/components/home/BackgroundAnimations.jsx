export default function BackgroundAnimations() {
  return (
    <div className="absolute inset-0 opacity-30">
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-cyan rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  );
}
