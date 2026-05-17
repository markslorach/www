import Header from "./header";
import MusicWidget from "./music-widget";
import Navigation from "./navigation";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-56 flex-col py-10 md:flex">
      <div className="flex-1">
        <Header />
        <Navigation />
      </div>

      <MusicWidget />
    </aside>
  );
}
