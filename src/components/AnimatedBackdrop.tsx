export default function AnimatedBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-50 overflow-hidden hero-breathing animate-breathe"
    >
      <div className="absolute inset-0 orb orb--pink" />
      <div className="absolute inset-0 orb orb--blue" />
      <div className="absolute inset-0 grain-overlay" />
      <div className="absolute inset-0 vignette-soft" />
    </div>
  );
}
