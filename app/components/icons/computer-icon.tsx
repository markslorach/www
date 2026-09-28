import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

export default function ComputerIcon({
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
        d="M6 25.2C11.5 24.7 22.7 25.5 28.5 24.9M9.3 9.2C13.8 8.8 21.4 9.1 25.6 9.5C26.1 12.5 25.9 17.4 25.5 20.4C20.5 20.8 13.4 20.4 9.1 20.2C8.8 17.1 8.9 12.3 9.3 9.2ZM14.8 24.5L15.2 20.8M20.1 20.8L20.5 24.6"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
