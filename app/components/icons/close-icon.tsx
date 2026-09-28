import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

export default function CloseIcon({
  className,
  width = 24,
  height = 24,
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5.4 5.8C8.9 9.1 14.7 14.8 18.7 18.3"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <path
        d="M18.5 5.5C15.3 8.9 9.2 15.2 5.7 18.6"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </svg>
  );
}
