import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Home() {
  return (
    <div>
      <AspectRatio ratio={3 / 2}>
        <Image
          src="/images/profile.webp"
          alt="Photo"
          fill
          priority
          // add sizes prop
          className="rounded-md"
        />
      </AspectRatio>
    </div>
  );
}
