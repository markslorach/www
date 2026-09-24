import type { ComponentProps } from "react";

type ThemeIconProps = ComponentProps<"svg">;

export function MoonIcon({ className, ...props }: ThemeIconProps) {
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

export function SunIcon({ className, ...props }: ThemeIconProps) {
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
        d="M12.3 7.1C15.2 7 17.2 9.2 17 12.1C16.9 15 14.7 17 11.8 16.9C8.9 16.8 6.9 14.5 7.1 11.7C7.2 9 9.3 7.2 12.3 7.1Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 1.6L12.2 4M19.3 4.4L17.7 6.1M22.3 12L20 12.2M19.5 19.2L17.8 17.6M12.1 22.3L11.9 20M4.6 19.4L6.2 17.7M1.7 12L4 11.8M4.5 4.7L6.2 6.3"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
