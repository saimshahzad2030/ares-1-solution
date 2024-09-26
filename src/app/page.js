import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/HeroSection/Hero";
import AboutSection from "../components/AboutSection/AboutSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Portfolio from "../components/Portfolio/Portfolio";
import Footer from "../components/Footer/Footer";
import HomeVideoSection from "../components/HomeVideoSection/HomeVideoSection";
import Testimonials from "../components/Testimonials/Testimonials";
import NewsAndArticles from "../components/NewsAndArticles/NewsAndArticles";
import Copyright from "../components/Copyright/Copyright";

export default function Home() {
  return (
    <div className="bg-white dark:bg-defaultTheme flex flex-col items-center overflow-x-hidden">
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
