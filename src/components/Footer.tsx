
const Footer = () => {
  return (
    <footer id="contato" className="bg-[#6B7763] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/a5b8fc4e-66e6-44a2-8123-431093bf418b.png" 
                alt="Dra. Camila Vieira Logo" 
                className="h-16"
              />
            </div>
            <p className="mb-4 text-gray-100">
              Realçando sua beleza natural com tratamentos personalizados e resultados surpreendentes.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 mt-1 text-[#D2CAC8]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <p className="text-gray-100">(15) 99697-8807</p>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 mt-1 text-[#D2CAC8]">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <p className="text-gray-100">camila_22_96@hotmail.com</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Horário de Funcionamento</h4>
            <ul className="space-y-2 text-gray-100">
              <li className="flex justify-between">
                <span>Segunda - Sexta</span>
                <span>8:00 - 12:00</span>
              </li>
              <li className="flex justify-between">
                <span></span>
                <span>18:30 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span>Fechado</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#D2CAC8]/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center text-[#FFFFFF]/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dra. Camila Vieira. Todos os direitos reservados.
          </p>
          <a 
            href="https://g.page/r/CV8CSAFCE68zEAE/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#D2CAC8] transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            Avalie-nos no Google
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
