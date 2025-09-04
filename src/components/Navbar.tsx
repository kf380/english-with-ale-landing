import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              English with Ale
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
              >
                Contacto
              </button>
            </div>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90"
            >
              Aprende Inglés HOY
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary transition-colors p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <button
                onClick={() => scrollToSection('hero')}
                className="block text-foreground hover:text-primary transition-colors px-3 py-2 text-base font-medium w-full text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-foreground hover:text-primary transition-colors px-3 py-2 text-base font-medium w-full text-left"
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-foreground hover:text-primary transition-colors px-3 py-2 text-base font-medium w-full text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block text-foreground hover:text-primary transition-colors px-3 py-2 text-base font-medium w-full text-left"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-foreground hover:text-primary transition-colors px-3 py-2 text-base font-medium w-full text-left"
              >
                Contacto
              </button>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90"
                >
                  Aprende Inglés HOY
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;