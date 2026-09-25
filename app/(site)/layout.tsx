import PageTransition from "../components/shared/page-transition";
import MobileHeader from "../components/shared/mobile-header";
import Footer from "../components/shared/footer";
import MobileFooter from "../components/shared/mobile-footer";
import SiteHeader from "../components/shared/site-header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-5 sm:px-6 md:px-8">
      <div className="mx-auto flex min-h-svh w-full max-w-220 flex-col md:pt-14 md:pb-14">
        <SiteHeader />
        <MobileHeader />

        <PageTransition>
          <main className="py-16 md:py-24">{children}</main>
        </PageTransition>

        <Footer />
        <MobileFooter />
      </div>
    </div>
  );
}
