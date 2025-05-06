import HeroSection from "@/components/contents/banner";
import DirectTopUpSection from "@/components/contents/DirectTopUpSection";
import FAQAccordion from "@/components/contents/FAQAccordion";
import RedeemCode from "@/components/contents/RedeemCode";
import VoucherSection from "@/components/contents/VoucherSection";
import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/header";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <VoucherSection />
      <DirectTopUpSection />
      <FAQAccordion  />
      <RedeemCode />
      <Footer />
    </div>
  );
}
