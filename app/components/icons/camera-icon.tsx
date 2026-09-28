import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

export default function CameraIcon({
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
        d="M6.6 12.1C9.2 11.9 11.6 12 13.4 11.8L15.2 8.8C17.6 8.5 20 8.6 22 8.9L23.4 11.9C25 12 27 11.9 28.2 12.2C28.6 16.1 28.5 22 28.1 25.3C22.8 25.8 12 25.7 6.5 25.2C6.1 21.7 6.2 15.5 6.6 12.1ZM12.4 18.5C12.5 15.7 14.5 13.8 17.3 13.9C20.3 13.9 22 16 21.8 18.8C21.7 21.5 19.7 23.3 16.9 23.1C14.2 23 12.3 21.2 12.4 18.5Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
