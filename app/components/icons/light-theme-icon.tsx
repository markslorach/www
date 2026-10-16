import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

export default function LightThemeIcon({ className, ...props }: IconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 25V14"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18C6 18 3 14 3 9C8 9 12 12 12 18Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14C12 8 15 4 21 3C21 9 18 14 12 14Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
