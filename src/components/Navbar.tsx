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

  const navItems = [
    { id: 'about', label: 'Sobre Ale' },
    { id: 'how-it-works', label: 'Método' },
    { id: 'services', label: 'Planes' },
    { id: 'for-companies', label: 'Empresas' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  English with <span className="text-primary">Ale</span>
                </h2>
                <p className="text-xs text-muted-foreground hidden sm:block">Inglés 1:1 para tu trabajo</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors px-2 py-2 text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('services')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Reservar clase gratis
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
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-foreground hover:text-primary transition-colors px-3 py-2 text-base font-medium w-full text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection('services')}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Reservar clase gratis
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
