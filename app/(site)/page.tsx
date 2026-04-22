import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ImageZoom } from "@/components/kibo-ui/image-zoom";

export default function Home() {
  return (
    <div>
      <ImageZoom zoomMargin={100}>
        <AspectRatio ratio={3 / 2}>
          <Image
            src="/images/profile.webp"
            alt="Photo"
            fill
            priority
            // add sizes prop
            className="rounded-sm"
          />
        </AspectRatio>
      </ImageZoom>
    </div>
  );
}
