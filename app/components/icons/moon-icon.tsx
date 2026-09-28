import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

export default function MoonIcon({ className, ...props }: IconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M15.6 3.2C10.5 1.7 5.2 5.3 4.4 10.6C3.5 16 7.2 20.1 12.4 20.2C16.5 20.3 19.7 17.8 20.5 14.5C17.2 15.3 13.4 13.5 12.5 10.1C11.7 7.2 13.1 4.7 15.6 3.2Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
