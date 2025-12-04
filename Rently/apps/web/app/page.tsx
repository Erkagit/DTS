import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import HowItWorks from "./components/HowItWorks";
import FeaturedVendors from "./components/FeaturedVendors";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <HowItWorks />
      <FeaturedVendors />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
