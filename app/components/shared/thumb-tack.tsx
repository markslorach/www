type ThumbTackProps = {
  className?: string;
};

export default function ThumbTack({ className }: ThumbTackProps) {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden="true"
      focusable="false"
      width={12}
      height={12}
      className={className}
    >
      <circle cx="6" cy="6" r="6" fill="#994045" />
      <circle cx="6" cy="6" r="5" fill="#A9474C" />
      <circle cx="4.5" cy="5" r="2" fill="#DDA0A399" />
    </svg>
  );
}
