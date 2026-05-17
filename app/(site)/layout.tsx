import Sidebar from "../components/sidebar/sidebar";
import Footer from "../components/shared/footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-4xl gap-18 ease-in-out transition-all duration-200 lg:gap-26 px-4">
      <Sidebar />
      <div className="flex min-h-dvh md:flex-1 flex-col py-10">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
