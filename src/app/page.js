import Image from "next/image";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/HeroSection/Hero";
import AboutSection from "./component/AboutSection/AboutSection";
import ServicesSection from "./component/ServicesSection/ServicesSection";
import WhyChooseUs from "./component/WhyChooseUs/WhyChooseUs";
import Portfolio from "./component/Portfolio/Portfolio";
import Footer from "./component/Footer/Footer";
import HomeVideoSection from "./component/HomeVideoSection/HomeVideoSection";
import Testimonials from "./component/Testimonials/Testimonials";
import NewsAndArticles from "./component/NewsAndArticles/NewsAndArticles";
import Copyright from "./component/Copyright/Copyright";

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <Portfolio />
      <HomeVideoSection />
      <Testimonials />
      <NewsAndArticles />
      <Footer />
      <Copyright />
    </div>
  );
}
