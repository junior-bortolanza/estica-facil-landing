
import { Phone, Mail, Clock, Star, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-[#6B7763] text-white">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/a5b8fc4e-66e6-44a2-8123-431093bf418b.png" 
                alt="Dra. Camila Vieira Logo" 
                className="h-14"
              />
            </div>
            <p className="text-white/70 leading-relaxed text-sm mb-4">
              Realçando sua beleza natural com tratamentos personalizados e resultados surpreendentes.
            </p>
            <div className="h-[1px] w-10" style={{ background: 'linear-gradient(90deg, hsl(38 50% 70% / 0.5), transparent)' }} />
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 tracking-tight">Contato</h4>
            <div className="space-y-4">
              <a 
                href="tel:+5515996978807" 
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <span className="text-sm">(15) 99697-8807</span>
              </a>
              
              <a 
                href="mailto:camila_22_96@hotmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <span className="text-sm">camila_22_96@hotmail.com</span>
              </a>
            </div>
          </div>
          
          {/* Hours */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 tracking-tight">Horário de Funcionamento</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex justify-between gap-4">
                    <span>Segunda - Sexta</span>
                    <span>8:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span></span>
                    <span>18:30 - 22:00</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Sábado</span>
                    <span>Fechado</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Domingo</span>
                    <span>Fechado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Google Review CTA */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 tracking-tight">Avalie-nos</h4>
            <a 
              href="https://g.page/r/CV8CSAFCE68zEAE/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
            >
              <Star className="w-4 h-4" strokeWidth={1.5} />
              Avalie-nos no Google
            </a>
            <p className="mt-4 text-xs text-white/50 leading-relaxed">
              Sua avaliação nos ajuda a melhorar cada vez mais nossos serviços.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Dra. Camila Vieira. Todos os direitos reservados.
            </p>
            <p className="text-white/35 text-xs">
              CRBM 54.303 | Biomédica Esteta
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
