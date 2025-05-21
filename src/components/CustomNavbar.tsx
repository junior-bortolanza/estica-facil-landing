
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const CustomNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky
          ? "bg-white shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-xl md:text-2xl font-serif font-bold"
          >
            <span className={`transition-colors duration-300 text-[#6B7763]`}>
              Dra. Camila Vieira
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <button
              onClick={() => scrollToSection('inicio')}
              className={`font-medium hover:text-[#D2CAC8] transition-colors ${
                isSticky ? "text-[#6B7763]" : "text-[#6B7763]"
              }`}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className={`font-medium hover:text-[#D2CAC8] transition-colors ${
                isSticky ? "text-[#6B7763]" : "text-[#6B7763]"
              }`}
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className={`font-medium hover:text-[#D2CAC8] transition-colors ${
                isSticky ? "text-[#6B7763]" : "text-[#6B7763]"
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className={`font-medium hover:text-[#D2CAC8] transition-colors ${
                isSticky ? "text-[#6B7763]" : "text-[#6B7763]"
              }`}
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('agendar')}
              className={`font-medium hover:text-[#D2CAC8] transition-colors ${
                isSticky ? "text-[#6B7763]" : "text-[#6B7763]"
              }`}
            >
              Contato
            </button>
            <Button 
              variant="outline"
              className="border-[#6B7763] text-[#6B7763] hover:bg-[#6B7763] hover:text-white transition-colors font-medium"
              onClick={() => scrollToSection('agendar')}
            >
              Agendar consulta
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`w-6 h-6 transition-colors ${
                isSticky ? "text-[#6B7763]" : "text-[#6B7763]"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-[#6B7763] font-medium hover:text-[#D2CAC8] transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-[#6B7763] font-medium hover:text-[#D2CAC8] transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-[#6B7763] font-medium hover:text-[#D2CAC8] transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="text-[#6B7763] font-medium hover:text-[#D2CAC8] transition-colors"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('agendar')}
                className="text-[#6B7763] font-medium hover:text-[#D2CAC8] transition-colors"
              >
                Contato
              </button>
              <Button 
                variant="outline"
                className="border-[#6B7763] text-[#6B7763] hover:bg-[#6B7763] hover:text-white transition-colors font-medium w-full"
                onClick={() => scrollToSection('agendar')}
              >
                Agendar consulta
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default CustomNavbar;
