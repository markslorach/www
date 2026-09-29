import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

export default function MusicNoteIcon({
  className,
  width = 34,
  height = 34,
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M15.2 21.7C14.9 24.4 12.8 26.1 10.4 25.9C8 25.7 6.5 23.9 6.9 21.7C7.3 19.4 9.4 17.9 11.8 18.2C13.4 18.4 14.7 19.3 15.2 20.5M15.3 21.5C15.4 17.2 15.2 12 15.5 7.6C18.9 8.7 22.4 10.4 25.6 12.1"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
