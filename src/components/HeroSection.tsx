
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const heroImages = [
  "/lovable-uploads/77dfa947-2f0e-4b2d-bbea-ce6cb8071985.png",
  "/lovable-uploads/e0685f73-a159-4b71-af2c-b80c2a9ccc22.png",
  "/lovable-uploads/d72d13ab-4de5-4e0f-8955-3cf9eeb79fb6.png",
  "/lovable-uploads/964855fb-ac2a-4cc8-99b2-bd14181be52a.png",
  "/lovable-uploads/28a028c4-318a-4fc6-ba70-3e189613abe8.png"
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#D2CAC8]/30 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-[#6B7763] leading-tight">
              Realce sua <span className="text-[#6B7763]">beleza natural</span> com sutileza
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-xl">
              Enhance your identity with subtlety, balance and sophistication.
            </p>
            <p className="text-gray-600 mb-8 max-w-xl">
              Facial harmonisation is an invitation to take care of yourself, gently enhancing your features and respecting your individuality. Technique and sensitivity come together to enhance your beauty in a light and natural way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-[#6B7763] hover:bg-[#6B7763]/90 text-white font-medium px-8 py-6 text-lg"
                onClick={() => document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Agendar Consulta
              </Button>
              <Button 
                variant="outline" 
                className="border-[#6B7763] text-[#6B7763] hover:bg-[#6B7763] hover:text-white font-medium px-8 py-6 text-lg"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nossos Serviços
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="rounded-full h-[400px] w-[400px] bg-[#6B7763]/20 absolute -top-4 -left-4"></div>
              <Carousel className="w-[400px] h-[400px] rounded-2xl shadow-lg">
                <CarouselContent>
                  {heroImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="overflow-hidden rounded-2xl h-[400px]">
                        <img 
                          src={image} 
                          alt={`Tratamento estético ${index + 1}`}
                          className="h-full w-full object-cover" 
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 bg-white/80 hover:bg-white" />
                <CarouselNext className="absolute right-2 bg-white/80 hover:bg-white" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
