import Header from "./header";
import MusicWidget from "./music-widget";
import Navigation from "./navigation";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-56 flex-col overflow-y-scroll py-10 pr-4 md:flex lg:pr-0">
      <div className="flex-1">
        <Header />
        <Navigation />
      </div>

      <MusicWidget />
    </aside>
  );
}
