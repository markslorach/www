import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

export default function ServerIcon({
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
        d="M7.1 7.5C12.6 7.1 21.5 7.2 26.7 7.6L26.5 14.7C20.9 15 12.3 14.9 7.2 14.6L7.1 7.5ZM7.2 17.4C12.4 17 21.6 17.1 26.6 17.5L26.4 25C20.7 25.3 12.1 25.2 7.1 24.9L7.2 17.4ZM10.1 11.1H10.3M13.1 11.1H13.3M10 21.2H10.2M13 21.2H13.2M22.3 11.1H24M22.2 21.2H24"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
