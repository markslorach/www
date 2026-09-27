export default function PulseIndicator() {
  return (
    <span
      className="relative flex size-3.5 items-center justify-center"
      aria-hidden="true"
    >
      <span className="bg-primary animation-duration-[2s] absolute size-full animate-ping rounded-full opacity-50" />
      <span className="bg-primary relative size-3 rounded-full" />
    </span>
  );
}
