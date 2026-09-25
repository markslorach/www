type SectionMarkerProps = {
  children: React.ReactNode;
};

export default function SectionMarker({ children }: SectionMarkerProps) {
  return (
    <span className="flex w-fit items-center gap-1.75 font-mono text-[11px] font-medium tracking-[0.16em] uppercase">
      <span
        aria-hidden="true"
        className="text-primary text-[12px] font-bold tracking-normal"
      >
        /
      </span>
      {children}
    </span>
  );
}
