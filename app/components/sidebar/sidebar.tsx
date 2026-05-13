import Header from "./header";
import Navigation from "./navigation";

export default function Sidebar() {
  return (
    <aside className="sticky flex h-screen w-56 flex-col py-10">
      <div className="flex-1">
        <Header />
        <Navigation />
      </div>

      <div>Last.fm widget</div>
    </aside>
  );
}
