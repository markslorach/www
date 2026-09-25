import Image from "next/image";

type ThumbTackProps = {
  className?: string;
};

export default function ThumbTack({ className }: ThumbTackProps) {
  return (
    <Image
      src="/images/thumb-tack.svg"
      alt=""
      aria-hidden="true"
      draggable={false}
      width={12}
      height={12}
      className={className}
    />
  );
}
