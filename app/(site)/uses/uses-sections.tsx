import Link from "next/link";
import CameraIcon from "@/app/components/icons/camera-icon";
import ComputerIcon from "@/app/components/icons/computer-icon";
import ServerIcon from "@/app/components/icons/server-icon";
import SparkIcon from "@/app/components/icons/spark-icon";
import TerminalIcon from "@/app/components/icons/terminal-icon";
import SplitSection from "@/app/components/shared/layout/split-section";
import { usesSections } from "@/lib/uses-data";

const icons = {
  camera: CameraIcon,
  computer: ComputerIcon,
  server: ServerIcon,
  spark: SparkIcon,
  terminal: TerminalIcon,
};

export default function UsesSections() {
  return usesSections.map((section) => {
    const Icon = icons[section.icon];

    return (
      <SplitSection
        key={section.label}
        className="items-start gap-8 pt-16 md:gap-10 md:pt-20"
      >
        <div className="flex shrink-0 flex-col-reverse gap-2.5 md:w-50 md:flex-col">
          <h2 className="text-foreground font-mono text-[11px] font-medium tracking-[0.16em] uppercase">
            {section.label}
          </h2>

          <Icon className="text-primary -ml-1.25 size-6.5" />
        </div>

        <div className="border-border w-full border-t pt-6 md:pt-8">
          <ul className="flex max-w-140 flex-col gap-4.5">
            {section.items.map((item) => (
              <li
                key={item.label}
                className="text-muted-foreground text-base leading-6.5"
              >
                <h3 className="text-foreground mb-0.75 text-[17px] leading-6.25 font-semibold">
                  {item.href ? (
                    <Link
                      href={item.href}
                      rel="noreferrer"
                      target="_blank"
                      className="decoration-primary underline decoration-dotted decoration-1 underline-offset-4 hover:decoration-solid"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    item.label
                  )}
                </h3>

                {item.description && <p>{item.description}</p>}
              </li>
            ))}
          </ul>
        </div>
      </SplitSection>
    );
  });
}
