// Taches pastel floues, fixes derrière tout le site
export default function BackgroundBlobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-sky-200 opacity-50 blur-3xl" />
      <div className="absolute top-1/4 -right-24 w-[26rem] h-[26rem] rounded-full bg-violet-200 opacity-50 blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 w-[24rem] h-[24rem] rounded-full bg-pink-200 opacity-40 blur-3xl" />
    </div>
  );
}
