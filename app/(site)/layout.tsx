import Sidebar from "./_components/shared/sidebar";
import PageHeader from "./_components/shared/page-header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-245 mx-auto px-4 sm:px-5 flex">
      <Sidebar />
      <main className="w-full pl-12 py-16">
        <PageHeader />
        {children}
      </main>
    </div>
  );
}
