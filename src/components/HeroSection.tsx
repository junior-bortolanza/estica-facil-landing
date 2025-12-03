
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { ArrowRight, Calendar } from "lucide-react";

const heroImages = [
  "/lovable-uploads/77dfa947-2f0e-4b2d-bbea-ce6cb8071985.png",
  "/lovable-uploads/e0685f73-a159-4b71-af2c-b80c2a9ccc22.png",
  "/lovable-uploads/d72d13ab-4de5-4e0f-8955-3cf9eeb79fb6.png",
  "/lovable-uploads/964855fb-ac2a-4cc8-99b2-bd14181be52a.png",
  "/lovable-uploads/28a028c4-318a-4fc6-ba70-3e189613abe8.png"
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 pb-16 md:pt-24 md:pb-24 gradient-premium overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#6B7763]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D2CAC8]/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B7763]/10 text-[#6B7763] text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-[#6B7763] animate-pulse" />
              Biomédica Esteta | CRBM 54.303
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#6B7763] leading-[1.1] tracking-tight mb-6">
              Realce sua beleza natural com sutileza
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Valorize sua identidade com sutileza, equilíbrio e sofisticação.
            </p>
            
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A harmonização facial é um convite para cuidar de si, realçando suavemente seus traços e respeitando sua individualidade. Técnica e sensibilidade se unem para valorizar sua beleza de forma leve e natural.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-[#6B7763] hover:bg-[#5a6654] text-white font-medium px-8 py-6 text-base rounded-xl shadow-premium-sm hover:shadow-premium transition-all duration-300 group"
                onClick={() => document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Consulta
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-[#6B7763]/30 text-[#6B7763] hover:bg-[#6B7763] hover:text-white hover:border-[#6B7763] font-medium px-8 py-6 text-base rounded-xl transition-all duration-300"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nossos Serviços
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl border-2 border-[#6B7763]/10 -rotate-3" />
              <div className="absolute -inset-8 rounded-3xl border border-[#D2CAC8]/20 rotate-2" />
              
              <Carousel className="w-full max-w-[450px] rounded-2xl overflow-hidden shadow-premium">
                <CarouselContent>
                  {heroImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-square overflow-hidden rounded-2xl">
                        <img 
                          src={image} 
                          alt={`Tratamento estético ${index + 1}`}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" 
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-0 shadow-soft-lg h-10 w-10" />
                <CarouselNext className="right-4 bg-white/90 hover:bg-white border-0 shadow-soft-lg h-10 w-10" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
