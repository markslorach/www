import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="flex flex-col gap-6">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="mb-0.5 font-medium">@markslorach</h1>
          {/* <ThemeToggle /> */}
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">
          software developer
        </p>
      </div>

      <AspectRatio ratio={1 / 1}>
        <Image
          src="/images/profile.webp"
          alt="Mark Slorach profile picture"
          fill
          priority
          sizes="400px"
          draggable={false}
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </header>
  );
}
