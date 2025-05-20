
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-clinic-light to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-clinic-dark leading-tight">
              Realce sua <span className="text-clinic-accent">beleza natural</span> com nossos tratamentos
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Descubra uma nova experiência em tratamentos estéticos, com abordagens modernas e personalizadas para sua pele e corpo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-clinic-accent hover:bg-clinic-accent/90 text-white font-medium px-8 py-6 text-lg"
                onClick={() => document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Agendar Consulta
              </Button>
              <Button 
                variant="outline" 
                className="border-clinic-dark text-clinic-dark hover:bg-clinic-dark hover:text-white font-medium px-8 py-6 text-lg"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nossos Serviços
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="rounded-full h-[400px] w-[400px] bg-clinic-accent/20 absolute -top-4 -left-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80" 
                alt="Tratamento estético facial" 
                className="rounded-2xl h-[400px] w-[400px] object-cover relative shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
