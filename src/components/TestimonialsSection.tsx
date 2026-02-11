
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Star, ExternalLink, Quote, Shield } from "lucide-react";

const testimonials = [
  {
    name: "Gelson Bortolanza Jr",
    role: "Cliente",
    content: "Pessoa maravilhosa, super atenciosa. Passa uma calma na hora do procedimento que faz a gente se sentir seguro e acolhido. Super indico",
    timeAgo: "4 semanas atrás",
    image: "/lovable-uploads/678653db-c4ec-4a09-9a8d-ceb9efd762a9.png"
  },
  {
    name: "Heloisa Oliveira Barnabé",
    role: "Cliente",
    content: "Excelente profissional! Me senti super tranquila com o procedimento e fui muito bem cuidada 💐",
    timeAgo: "um mês atrás",
    image: "/lovable-uploads/4cbf1ed5-517f-4b5d-bdf9-aa4c6ecd43be.png"
  },
  {
    name: "Gisele Soares",
    role: "Cliente",
    content: "A dra Camila fez meu primeiro botox e eu amei!!! Muito cuidadosa e atenciosa no atendimento pós procedimento, voltarei em breve.",
    timeAgo: "3 semanas atrás",
    image: "/lovable-uploads/e2420d6d-758a-42a3-84cb-0220790e1cb3.png"
  },
  {
    name: "Adriana Horie",
    role: "Cliente",
    content: "Profissional incrível! Um trabalho impecável, sempre trazendo os melhores resultados com muito cuidado e dedicação ❤️",
    timeAgo: "3 semanas atrás",
    image: "/lovable-uploads/739c3376-9614-4053-a6f4-fc40860ff186.png"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="depoimentos" className="section-premium" style={{ background: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(25 30% 93% / 0.4) 50%, hsl(0 0% 100%) 100%)' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="section-header">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#6B7763]/60 mb-4">Depoimentos</p>
          <h2 className="section-title">
            O Que Dizem Nossos Clientes
          </h2>
          <div className="section-divider" />
          <p className="section-description">
            A satisfação dos nossos clientes é nosso maior orgulho. Confira alguns depoimentos de quem já experimentou nossos tratamentos.
          </p>
        </div>

        {/* Credibility badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border/30 bg-white/80 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-[#6B7763]" />
            <span className="text-sm font-medium text-[#6B7763]">CRBM 54.303 — Profissional Certificada</span>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="bg-white/80 backdrop-blur-sm rounded-3xl border border-border/30 shadow-soft-lg overflow-hidden">
              <CardContent className="p-8 md:p-14">
                {/* Quote icon */}
                <div className="flex justify-center mb-8">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, hsl(38 50% 70% / 0.15), hsl(100 12% 44% / 0.1))' }}>
                    <Quote className="w-6 h-6 text-[#6B7763]" />
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <Avatar className="w-20 h-20 ring-4 ring-white shadow-soft-lg">
                      <AvatarImage 
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-[#6B7763]/10 text-[#6B7763] text-xl font-serif">
                        {testimonials[activeIndex].name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-3 text-sm text-muted-foreground">
                      {testimonials[activeIndex].timeAgo}
                    </span>
                  </div>
                  
                  <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8 max-w-2xl font-light italic font-serif">
                    "{testimonials[activeIndex].content}"
                  </p>
                  
                  <h4 className="font-serif font-semibold text-[#6B7763] text-lg">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <button 
              className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-soft-lg flex items-center justify-center text-[#6B7763] hover:bg-[#6B7763] hover:text-white transition-all duration-300 border border-border/30"
              onClick={prevTestimonial}
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-soft-lg flex items-center justify-center text-[#6B7763] hover:bg-[#6B7763] hover:text-white transition-all duration-300 border border-border/30"
              onClick={nextTestimonial}
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex justify-center gap-2.5 mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? "bg-[#6B7763] w-8" 
                    : "bg-[#6B7763]/15 w-2.5 hover:bg-[#6B7763]/30"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="https://g.page/r/CV8CSAFCE68zEAE/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-border/30 text-[#6B7763] font-medium hover:shadow-soft-lg transition-all duration-300"
            >
              Ver mais avaliações no Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
