import AboutUs from "@/app/_components/AboutUs";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import IntroSection from "@/app/_components/IntroSection";
import Projects from "@/app/_components/Projects";
import Services from "@/app/_components/Services";
import Contact from "@/app/_components/Contact";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Header />
      <IntroSection />
      <AboutUs />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
