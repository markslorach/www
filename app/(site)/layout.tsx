import Sidebar from "../components/sidebar/sidebar";
import Footer from "../components/shared/footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex w-4xl gap-24 px-4">
      <Sidebar />
      <div className="flex flex-1 flex-col py-10">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
