
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Juliana Cristina",
    role: "Cliente",
    content: "Profissional extremamente capacitada, diferenciada e muito atenciosa! Super recomendo!",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVIXnZwfHEizNoNdvzvtJYALIlmt-5uhqX2u8tDGBZhLQ=w60-h60-p-rp-mo-br100"
  },
  {
    name: "Viviane Alexandre",
    role: "Cliente",
    content: "Simplesmente amei o resultado, fez toda a diferença! A doutora é muito cuidadosa e cuidou de cada detalhe! Super recomendo.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUjqSMXg3g390PQW69Oa0t8zqkvzXF633BUu2lvPsQvXQ=w60-h60-p-rp-mo-br100"
  },
  {
    name: "Jéssica Pereira",
    role: "Cliente",
    content: "Excelente profissional, me surpreendeu muito, super atenciosa, cuidadosa e prestativa. Realiza o trabalho com excelência, perfeição e dedicação, recomendo demais.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjU0QTL-vq1cJWGD3p-fzgJx0YiaN1gcnAA0RFAlndZUbg=w60-h60-p-rp-mo-br100"
  },
  {
    name: "Flávio França",
    role: "Cliente",
    content: "Doutora muito atenciosa durante todo o tratamento. Excelente profissional! Super indico.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjV-Av1MwiREQ5qbhKfq_Z_WzLRiyHzgkFu8E-XfQsxvi4M=w60-h60-p-rp-mo-br100"
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
              href="https://g.co/kgs/xdrUxKW" 
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
