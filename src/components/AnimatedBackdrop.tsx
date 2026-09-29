// Ambient pink / blue / purple glow behind the whole site.
//
// Drawn with radial gradients instead of blurred circles: it looks the same,
// but `filter: blur(120px)` on three 500px fixed shapes was the single most
// expensive thing to paint on mobile. Stops approximate a 500px circle
// blurred by 120px (≈ 88% strength at the center, fading out by ~490px).
const FALLOFF: [number, number][] = [
  [0.88, 0],
  [0.75, 30],
  [0.45, 51],
  [0.15, 72],
];

const glow = (oklch: string, opacity: number, x: string, y: string) =>
  `radial-gradient(circle 490px at ${x} ${y}, ${FALLOFF.map(
    ([strength, stop]) => `oklch(${oklch} / ${(opacity * strength).toFixed(3)}) ${stop}%`
  ).join(", ")}, transparent 100%)`;

const BACKGROUND = [
  // dark veil on top (was the bg-black/20 layer)
  "linear-gradient(rgb(0 0 0 / 0.2), rgb(0 0 0 / 0.2))",
  // pink-500 — top left
  glow("65.6% 0.241 354.308", 0.4, "calc(-10% + 250px)", "calc(-10% + 250px)"),
  // blue-500 — top right
  glow("62.3% 0.214 259.815", 0.4, "calc(110% - 250px)", "calc(10% + 250px)"),
  // purple-500 — bottom center
  glow("62.7% 0.265 303.9", 0.3, "calc(30% + 250px)", "calc(110% - 250px)"),
].join(", ");

export default function AnimatedBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      // translateZ keeps it on its own GPU layer so scrolling never repaints it
      style={{ backgroundImage: BACKGROUND, transform: "translateZ(0)" }}
    />
  );
}
