// export default function AnimatedBackdrop() {
//   return (
//     <div
//       aria-hidden
//       className="pointer-events-none fixed inset-0 -z-50 overflow-hidden hero-breathing animate-breathe"
//     >
//       <div className="absolute inset-0 orb orb--pink" />
//       <div className="absolute inset-0 orb orb--blue" />
//       <div className="absolute inset-0 grain-overlay" />
//       <div className="absolute inset-0 vignette-soft" />
      
//     </div>
//   );
// }
export default function AnimatedBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-pink-500/40 blur-[120px]" />
      <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/40 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[30%] h-[500px] w-[500px] rounded-full bg-purple-500/30 blur-[120px]" />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}