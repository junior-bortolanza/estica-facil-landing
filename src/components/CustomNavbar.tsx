
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const CustomNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'agendar', label: 'Contato' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isSticky
          ? "bg-white/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center"
          >
            <span className="text-xl md:text-2xl font-serif font-semibold text-[#6B7763] tracking-tight">
              Dra. Camila Vieira
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-sm font-medium text-[#6B7763] hover:text-[#6B7763]/70 hover:bg-[#6B7763]/5 rounded-lg transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
            <div className="ml-4">
              <Button 
                className="bg-[#6B7763] hover:bg-[#5a6654] text-white font-medium px-6 py-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                onClick={() => scrollToSection('agendar')}
              >
                Agendar consulta
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-[#6B7763]/5 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#6B7763]" />
            ) : (
              <Menu className="w-6 h-6 text-[#6B7763]" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-soft-lg p-6 border border-border/50">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-[#6B7763] font-medium py-3 px-4 rounded-xl hover:bg-[#6B7763]/5 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 mt-2 border-t border-border">
                <Button 
                  className="bg-[#6B7763] hover:bg-[#5a6654] text-white font-medium w-full py-6 rounded-xl"
                  onClick={() => scrollToSection('agendar')}
                >
                  Agendar consulta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
