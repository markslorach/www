import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

export default function DarkThemeIcon({ className, ...props }: IconProps) {
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
        d="M12 12L12.00 3.00M10.20 4.40L12.00 6.20L13.80 4.40 M12 12L19.79 7.50M17.68 6.64L17.02 9.10L19.48 9.76 M12 12L19.79 16.50M19.48 14.24L17.02 14.90L17.68 17.36 M12 12L12.00 21.00M13.80 19.60L12.00 17.80L10.20 19.60 M12 12L4.21 16.50M6.32 17.36L6.98 14.90L4.52 14.24 M12 12L4.21 7.50M4.52 9.76L6.98 9.10L6.32 6.64"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
