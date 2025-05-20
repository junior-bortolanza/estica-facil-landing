
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="font-serif text-2xl font-bold text-clinic-dark">
            <span className="text-clinic-accent">Bella</span> Estética
          </h1>
        </div>
        
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#inicio" className="font-medium text-gray-700 hover:text-clinic-accent transition-colors">Início</a>
          <a href="#servicos" className="font-medium text-gray-700 hover:text-clinic-accent transition-colors">Serviços</a>
          <a href="#sobre" className="font-medium text-gray-700 hover:text-clinic-accent transition-colors">Sobre</a>
          <a href="#depoimentos" className="font-medium text-gray-700 hover:text-clinic-accent transition-colors">Depoimentos</a>
          <a href="#contato" className="font-medium text-gray-700 hover:text-clinic-accent transition-colors">Contato</a>
        </div>
        
        <Button 
          variant="default" 
          className="hidden md:block bg-clinic-accent hover:bg-clinic-accent/90 text-white"
          onClick={() => document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Agendar Consulta
        </Button>
        
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
