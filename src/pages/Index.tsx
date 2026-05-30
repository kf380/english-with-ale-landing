import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import ForCompanies from "@/components/ForCompanies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About id="about" />
      <HowItWorks id="how-it-works" />
      <Services id="services" />
      <ForCompanies id="for-companies" />
      <Testimonials id="testimonials" />
      <FAQ id="faq" />
      <Contact id="contact" />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
