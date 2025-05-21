
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
                <p className="text-gray-100">(11) 5555-5555</p>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 mt-1 text-[#D2CAC8]">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <p className="text-gray-100">contato@dracamilavieira.com</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Horário de Funcionamento</h4>
            <ul className="space-y-2 text-gray-100">
              <li className="flex justify-between">
                <span>Segunda - Sexta</span>
                <span>9:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span>9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#D2CAC8]/20 pt-8">
          <p className="text-center text-[#FFFFFF]/70 text-sm">
            &copy; {new Date().getFullYear()} Dra. Camila Vieira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
