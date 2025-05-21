
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
            <span className={`transition-colors duration-300 ${
              isSticky ? "text-[#4B7F52]" : "text-[#4B7F52]"
            }`}>
              Dra. Camila Vieira
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="/#inicio"
              className={`font-medium hover:text-[#D2CAC8] transition-colors ${
                isSticky ? "text-[#6B7763]" : "text-white"
              }`}
            >
              Início
            </Link>
            <Link
              to="/#servicos"
              className={`font-medium hover:text-[#D2CAC8] transition-colors ${
                isSticky ? "text-[#6B7763]" : "text-white"
              }`}
            >
              Serviços
            </Link>
            <Link
              to="/#sobre"
              className={`font-medium hover:text-[#D2CAC8] transition-colors ${
                isSticky ? "text-[#6B7763]" : "text-white"
              }`}
            >
              Sobre
            </Link>
            <Link
              to="/#depoimentos"
              className={`font-medium hover:text-[#D2CAC8] transition-colors ${
                isSticky ? "text-[#6B7763]" : "text-white"
              }`}
            >
              Depoimentos
            </Link>
            <Link
              to="/#contato"
              className={`font-medium hover:text-[#D2CAC8] transition-colors ${
                isSticky ? "text-[#6B7763]" : "text-white"
              }`}
            >
              Contato
            </Link>
            <a
              href="tel:+5511555555555"
              className={`font-medium hover:text-[#D2CAC8] transition-colors ${
                isSticky ? "text-[#6B7763]" : "text-white"
              }`}
            >
              (11) 5555-5555
            </a>
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
                isSticky ? "text-[#6B7763]" : "text-white"
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
              <Link
                to="/#inicio"
                className="text-[#6B7763] font-medium hover:text-[#D2CAC8] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                to="/#servicos"
                className="text-[#6B7763] font-medium hover:text-[#D2CAC8] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                to="/#sobre"
                className="text-[#6B7763] font-medium hover:text-[#D2CAC8] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                to="/#depoimentos"
                className="text-[#6B7763] font-medium hover:text-[#D2CAC8] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Depoimentos
              </Link>
              <Link
                to="/#contato"
                className="text-[#6B7763] font-medium hover:text-[#D2CAC8] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </Link>
              <a
                href="tel:+5511555555555"
                className="text-[#6B7763] font-medium hover:text-[#D2CAC8] transition-colors"
              >
                (11) 5555-5555
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default CustomNavbar;
