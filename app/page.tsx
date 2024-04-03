import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import GuideSection from "@/components/info/guide-section";
import MotoSection from "@/components/moto/moto-section";
import Services from "@/components/services/services";
import Technology from "@/components/technology/technology";
import WhyUsSection from "@/components/why-us/why-us";

export default function Home() {
  return (
    <>
      <Header />
      <GuideSection />
      <Services />
      <WhyUsSection />
      <Technology />
      <MotoSection />
      <Footer />
    </>
  );
}
