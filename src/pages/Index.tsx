import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About id="about" />
      <Services id="services" />
      <Testimonials id="testimonials" />
      <Contact id="contact" />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
