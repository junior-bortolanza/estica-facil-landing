
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
    image: "https://lh3.googleusercontent.com/a-/ALV-UjV-Av1MwiREQ5qbhKfq_Z_WzLRiyHzgkFu8E-XfQsxvi4M=w60-h60-p-rp-mo-br100"
  },
  {
    name: "Viviane Alexandre",
    role: "Cliente",
    content: "Simplesmente amei o resultado, fez toda a diferença! A doutora é muito cuidadosa e cuidou de cada detalhe! Super recomendo.",
    timeAgo: "1 mês atrás",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUjqSMXg3g390PQW69Oa0t8zqkvzXF633BUu2lvPsQvXQ=w60-h60-p-rp-mo-br100"
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
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#6B7763] mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <div className="h-1 w-20 bg-[#6B7763] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            A satisfação dos nossos clientes é nosso maior orgulho. Confira alguns depoimentos de quem já experimentou nossos tratamentos.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <Card className="border border-gray-100 shadow-lg">
              <CardContent className="pt-10">
                <div className="flex flex-col items-center text-center p-6">
                  {activeIndex === 2 ? (
                    // Usar Avatar (perfeitamente redondo) para Gisele
                    <div className="mb-6">
                      <Avatar className="w-20 h-20">
                        <AvatarImage 
                          src={testimonials[activeIndex].image}
                          alt={testimonials[activeIndex].name}
                        />
                        <AvatarFallback>{testimonials[activeIndex].name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </div>
                  ) : (
                    // Manter o estilo original para os outros depoimentos
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="1" className="mx-0.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-500 text-sm">{testimonials[activeIndex].timeAgo}</span>
                  </div>
                  <p className="text-lg text-gray-600 italic mb-6">"{testimonials[activeIndex].content}"</p>
                  <h4 className="font-serif font-bold text-[#6B7763]">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-gray-500">{testimonials[activeIndex].role}</p>
                </div>
              </CardContent>
            </Card>
            
            <button 
              className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#6B7763] hover:bg-[#D2CAC8]/30 transition-colors"
              onClick={prevTestimonial}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <button 
              className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#6B7763] hover:bg-[#D2CAC8]/30 transition-colors"
              onClick={nextTestimonial}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === activeIndex ? "bg-[#6B7763]" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://g.page/r/CV8CSAFCE68zEAE/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#6B7763] hover:underline"
            >
              Ver mais avaliações no Google
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
