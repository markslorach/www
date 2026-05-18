import Sidebar from "../components/sidebar/sidebar";
import Footer from "../components/shared/footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-4xl gap-18 px-6 transition-all duration-200 ease-in-out md:px-4 lg:gap-26">
      <Sidebar />
      <div className="flex flex-1 flex-col pb-10 md:pt-10">
    
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
