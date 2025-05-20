
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ana Silva",
    role: "Cliente há 3 anos",
    content: "Os tratamentos da Bella Estética transformaram completamente minha pele. Tenho 45 anos e muitas pessoas me dão 10 anos a menos, tudo graças aos cuidados que recebo aqui.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Carlos Mendes",
    role: "Cliente há 1 ano",
    content: "Sempre fui resistente a tratamentos estéticos por medo de resultados artificiais, mas a abordagem natural da clínica me conquistou. Resultados incríveis e nada exagerado.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Juliana Costa",
    role: "Cliente há 2 anos",
    content: "Minha autoestima melhorou significativamente após iniciar os tratamentos. Equipe atenciosa e profissional que realmente se preocupa com os resultados e bem-estar dos clientes.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Roberto Alves",
    role: "Cliente há 6 meses",
    content: "O tratamento para queda de cabelo superou minhas expectativas. Em poucos meses, já notei diferença significativa e recebi vários elogios. Recomendo totalmente!",
    image: "https://randomuser.me/api/portraits/men/52.jpg"
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-clinic-dark mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <div className="h-1 w-20 bg-clinic-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            A satisfação dos nossos clientes é nosso maior orgulho. Confira alguns depoimentos de quem já experimentou nossos tratamentos.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="border border-gray-100 shadow-lg">
              <CardContent className="pt-10">
                <div className="flex flex-col items-center text-center p-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-lg text-gray-600 italic mb-6">"{testimonials[activeIndex].content}"</p>
                  <h4 className="font-serif font-bold text-clinic-dark">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-gray-500">{testimonials[activeIndex].role}</p>
                </div>
              </CardContent>
            </Card>
            
            <button 
              className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-clinic-dark hover:bg-clinic-light transition-colors"
              onClick={prevTestimonial}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <button 
              className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-clinic-dark hover:bg-clinic-light transition-colors"
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
                  index === activeIndex ? "bg-clinic-accent" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
