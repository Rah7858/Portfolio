export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-[#050508]" />
      {/* grid dots */}
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      {/* blobs */}
      <div
        className="absolute -top-32 -left-32 h-[42rem] w-[42rem] rounded-full opacity-30 blur-[120px] animate-blob"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent 60%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full opacity-25 blur-[140px] animate-blob"
        style={{ background: "radial-gradient(circle, #06B6D4, transparent 60%)", animationDelay: "-7s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[36rem] w-[36rem] rounded-full opacity-20 blur-[120px] animate-blob"
        style={{ background: "radial-gradient(circle, #EC4899, transparent 60%)", animationDelay: "-14s" }}
      />
      {/* noise */}
      <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />
    </div>
  );
}
