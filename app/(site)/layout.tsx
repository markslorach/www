import Sidebar from "../components/sidebar/sidebar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex w-4xl gap-24 px-4">
      <Sidebar />
      <main className="flex-1 py-12">{children}</main>
    </div>
  );
}
