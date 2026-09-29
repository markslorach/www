export type UsesSectionData = {
  label: string;
  icon: "camera" | "computer" | "server" | "spark" | "terminal";
  items: {
    label: string;
    description?: string;
    href?: string;
  }[];
};

export const usesSections: UsesSectionData[] = [
  {
    label: "Desk setup",
    icon: "computer",
    items: [
      {
        label: '16" MacBook Pro M1 Max',
        description:
          "32GB of RAM and a 2TB SSD, it's an absolute powerhouse. It's the first MacBook I've not felt the need to upgrade.",
      },
      {
        label: 'Dell UltraSharp 27" 4K (U2725QE)',
        href: "https://www.dell.com/en-gb/shop/monitors/apd/dell-ultrasharp-27-4k-thunderbolt-hub-monitor-u2725qe/u2725qe_monitor/-",
      },
      {
        label: "Nuphy Air75 V2",
        href: "https://nuphy.com/products/air75-v2",
        description:
          "Currently my daily keyboard. I recently fell down a rabbit hole of building custom keyboards, so I switch around a lot 🤓",
      },
      {
        label: "CalDigit TS5 Plus Thunderbolt 5 Dock",
        href: "https://www.caldigit.com/thunderbolt-5-dock-ts5-plus/",
        description:
          "A single cable turns my MacBook into a proper desktop setup.",
      },
      {
        label: "Yamaha HS5 monitors + HS8S subwoofer",
        description: "My setup for mixing and everyday listening.",
      },
      {
        label: "Beyerdynamic DT 700 Pro X headphones",
        href: "https://global.beyerdynamic.com/p/dt-700-pro-x",
        description:
          "I can't recommend these enough. Great for audio mixing and general listening.",
      },
    ],
  },
  {
    label: "Development",
    icon: "terminal",
    items: [
      {
        label: "VS Code",
        href: "https://code.visualstudio.com/",
        description:
          "VS Code is my go-to code editor. I use the Two Monokai theme.",
      },
      {
        label: "Bruno",
        href: "https://www.usebruno.com/",
        description:
          "Bruno is my go-to for testing APIs. It's open source, no login and lightweight.",
      },
      {
        label: "Paper.design",
        href: "https://paper.design/",
        description:
          "Paper is my Figma alternative and I absolutely love it. Its MCP connection to Codex makes it great for prototyping designs.",
      },
    ],
  },
  {
    label: "Productivity",
    icon: "spark",
    items: [
      {
        label: "Raycast",
        href: "https://www.raycast.com/",
        description:
          "Raycast has completely replaced Spotlight. I can't use a Mac without it now.",
      },
      {
        label: "Fluid Voice",
        href: "https://fluidvoice.org/",
        description:
          "Free, local voice dictation that's probably better than the paid alternatives.",
      },
      {
        label: "Bear Notes",
        href: "https://bear.app/",
        description: "My favourite Markdown notes app. Mac-only.",
      },
    ],
  },
  {
    label: "Homelab",
    icon: "server",
    items: [
      {
        label: "UGREEN NASync DXP4800 Plus",
        href: "https://ai-uk.ugreen.com/products/ugreen-nasync-dxp4800-plus-4-bay-nas",
        description:
          "My backup storage and local workhorse. I've lost track of how many Docker containers I have running on this thing. Incredible!",
      },
      {
        label: "Hostinger VPS",
        href: "https://www.hostinger.com/uk/vps-hosting",
        description: "My VPS, where my self-hosted projects live.",
      },
      {
        label: "Coolify",
        href: "https://coolify.io/",
        description:
          "Coolify connects to my VPS and gives me one place to deploy and manage projects.",
      },
      {
        label: "Tailscale",
        href: "https://tailscale.com/",
        description:
          "Tailscale connects all my devices in one network. It's like magic!",
      },
    ],
  },
  {
    label: "Photography",
    icon: "camera",
    items: [
      {
        label: "Fujifilm X100V",
        description:
          "My favourite camera to travel with. The inbuilt film simulations are incredible.",
      },
    ],
  },
];
