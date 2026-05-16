import Header from "./header";
import MusicWidget from "./music-widget";
import Navigation from "./navigation";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-56 flex-col py-10">
      <div className="flex-1">
        <Header />
        <Navigation />
      </div>

      <MusicWidget />
    </aside>
  );
}
