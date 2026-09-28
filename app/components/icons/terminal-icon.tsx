import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

export default function TerminalIcon({
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
        d="M6.5 8.6C12.8 8.2 22.4 8.4 27.7 8.8C28.1 13.2 28 21.8 27.5 26C21.7 26.4 12.1 26.2 6.4 25.8C6 21.2 6.1 13.4 6.5 8.6ZM6.9 12.8C13.7 13.1 21.2 12.7 27.2 13M10.3 17L13.4 19.4L10.6 22M17 22.1L21.7 22"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
