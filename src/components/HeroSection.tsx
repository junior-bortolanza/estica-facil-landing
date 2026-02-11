
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
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-20 md:pt-28 md:pb-28 overflow-hidden" style={{ background: 'linear-gradient(170deg, hsl(25 30% 93%) 0%, hsl(0 0% 100%) 60%, hsl(25 30% 93% / 0.3) 100%)' }}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, hsl(38 50% 70% / 0.2) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, hsl(100 12% 44% / 0.1) 0%, transparent 70%)' }} />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#6B7763]/15 bg-white/60 backdrop-blur-sm text-[#6B7763] text-sm font-medium mb-10 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B7763]" />
              Biomédica Esteta — CRBM 54.303
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-serif font-semibold text-[#6B7763] leading-[1.08] tracking-tight mb-7">
              Realce sua beleza com naturalidade e precisão.
            </h1>

            {/* Gold divider */}
            <div className="h-[2px] w-16 mx-auto lg:mx-0 mb-7" style={{ background: 'linear-gradient(90deg, hsl(38 50% 70%), transparent)' }} />
            
            <p className="text-lg md:text-xl text-muted-foreground mb-5 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Tratamentos personalizados para harmonização facial com segurança, técnica e elegância.
            </p>
            
            <p className="text-muted-foreground mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              A harmonização facial é um convite para cuidar de si, realçando suavemente seus traços e respeitando sua individualidade. Técnica e sensibilidade se unem para valorizar sua beleza de forma leve e natural.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-[#6B7763] hover:bg-[#5a6654] text-white font-medium px-8 py-6 text-base rounded-xl shadow-premium-sm hover:shadow-premium transition-all duration-500 group"
                onClick={() => document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Avaliação
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="border border-[#6B7763]/20 text-[#6B7763] hover:bg-[#6B7763] hover:text-white hover:border-[#6B7763] font-medium px-8 py-6 text-base rounded-xl transition-all duration-500 bg-white/50 backdrop-blur-sm"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nossos Serviços
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Decorative frame with gold accent */}
              <div className="absolute -inset-3 rounded-[1.5rem] border border-[#6B7763]/8 -rotate-2" />
              <div className="absolute -inset-6 rounded-[1.75rem] border border-[hsl(38,50%,70%)]/15 rotate-1" />
              
              <Carousel className="w-full max-w-[480px] rounded-2xl overflow-hidden shadow-premium">
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
