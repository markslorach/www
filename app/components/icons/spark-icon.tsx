import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

export default function SparkIcon({
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
        d="M17.1 6.5C18 12.6 21.4 16 27.2 16.9C21.3 17.8 17.9 21.3 17 27.4C16 21.3 12.8 17.9 6.8 17C12.8 16 16.1 12.6 17.1 6.5Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
