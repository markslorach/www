import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

export default function BrokenHeartIcon({
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
        d="M16.9 27.4C13.6 25.3 8.5 21.4 6.9 17.2C5.4 13.3 7.2 9.8 10.6 8.9C13 8.3 15.2 9.3 16.8 11.4C18.4 9.4 20.6 8.4 23.2 9C26.8 9.9 28.6 13.4 27.1 17.4C25.6 21.2 20.8 25 16.9 27.4ZM18.2 10.2L15.1 15.8L18.1 17.5L14.9 23.2"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
