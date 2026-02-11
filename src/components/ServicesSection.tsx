
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Zap, Droplets, Grid3X3, Waves, Scissors, Syringe } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Eye, ArrowRight } from "lucide-react";

const services = [
  {
    type: "carousel",
    icon: <Droplets className="w-5 h-5" strokeWidth={1.5} />,
    title: "Preenchimento Labial",
    description: "Volume e contorno labial com naturalidade, respeitando a harmonia dos seus traços para um resultado sofisticado e equilibrado.",
    images: [
      "/lovable-uploads/03030892-ce61-4931-953c-99df627a52e3.png",
      "/lovable-uploads/b2841c5b-2628-4740-8ed6-95f2f59c5181.png"
    ]
  },
  {
    type: "carousel",
    icon: <Syringe className="w-5 h-5" strokeWidth={1.5} />,
    title: "Preenchimento de Mento",
    description: "Definição e projeção do queixo para um perfil mais harmônico e elegante, com técnica precisa e resultados naturais.",
    images: [
      "/lovable-uploads/03030892-ce61-4931-953c-99df627a52e3.png"
    ]
  },
  {
    type: "carousel",
    icon: <Sparkles className="w-5 h-5" strokeWidth={1.5} />,
    title: "Toxina Botulínica (Botox)",
    description: "Suavização de linhas de expressão com precisão, preservando a naturalidade dos movimentos faciais e prevenindo o envelhecimento.",
    images: [
      "/lovable-uploads/6c642fab-e2c3-4f9a-8632-0f1a2121e584.png",
      "/lovable-uploads/8b195910-b113-48f9-97e6-b20a8f9b3e16.png",
      "/lovable-uploads/485c6556-c243-469a-a9bf-5014e0fbf340.png",
      "/lovable-uploads/4d51f184-f4fe-4470-8489-a51571128183.png"
    ]
  },
  {
    icon: <Grid3X3 className="w-5 h-5" strokeWidth={1.5} />,
    title: "Perfiloplastia",
    description: "Harmonização completa do perfil facial — nariz, queixo e mandíbula em equilíbrio — para um contorno facial refinado e proporcional."
  },
  {
    type: "carousel",
    icon: <Waves className="w-5 h-5" strokeWidth={1.5} />,
    title: "Rinomodelação",
    description: "Correção e refinamento do contorno nasal sem cirurgia, com ácido hialurônico para um perfil mais harmônico e elegante.",
    images: [
      "/lovable-uploads/67bed94e-6815-4e80-834a-5d305e27b63a.png"
    ]
  },
  {
    type: "carousel",
    icon: <Scissors className="w-5 h-5" strokeWidth={1.5} />,
    title: "Mesoterapia Capilar",
    description: "Tratamento especializado para queda de cabelo, fortalecimento dos fios e estímulo ao crescimento capilar saudável.",
    images: [
      "/lovable-uploads/93fd07ef-84fc-4eb5-992a-b9dfe0b96ccd.png"
    ]
  }
];

const ServicesSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="servicos" className="section-premium bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="section-header">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#6B7763]/60 mb-4">Especialidades</p>
          <h2 className="section-title">
            Nossos Tratamentos
          </h2>
          <div className="section-divider" />
          <p className="section-description">
            Procedimentos estéticos personalizados com excelência, naturalidade e sofisticação — realizados pela Dra. Camila Vieira.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-white rounded-2xl border border-border/30 shadow-soft hover:shadow-soft-lg transition-all duration-500 overflow-hidden hover:-translate-y-1"
            >
              <CardHeader className="p-6 pb-4">
                {service.type === "carousel" ? (
                  <div className="mb-5 relative rounded-xl overflow-hidden">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {service.images && service.images.map((image, i) => (
                          <CarouselItem key={i}>
                            <div className="relative group/image">
                              <AspectRatio ratio={4/3}>
                                <img 
                                  src={image} 
                                  alt={`${service.title} - Resultado ${i+1}`} 
                                  className="object-cover w-full h-full rounded-xl transition-transform duration-500 group-hover/image:scale-105"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-xl flex items-end justify-center pb-4">
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <Button
                                        variant="secondary"
                                        size="sm"
                                        className="bg-white/95 hover:bg-white text-[#6B7763] shadow-lg rounded-lg font-medium"
                                        onClick={() => setSelectedImage(image)}
                                      >
                                        <Eye className="w-4 h-4 mr-2" />
                                        Ver Ampliado
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-5xl p-2 bg-black/95 border-0">
                                      <div className="relative rounded-lg overflow-hidden">
                                        <img 
                                          src={image} 
                                          alt={`${service.title} - Resultado ${i+1}`}
                                          className="w-full h-auto max-h-[90vh] object-contain"
                                        />
                                      </div>
                                    </DialogContent>
                                  </Dialog>
                                </div>
                              </AspectRatio>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {(service.images && service.images.length > 1) && (
                        <>
                          <CarouselPrevious className="left-2 bg-white/90 hover:bg-white text-[#6B7763] shadow-md border-0 h-8 w-8" />
                          <CarouselNext className="right-2 bg-white/90 hover:bg-white text-[#6B7763] shadow-md border-0 h-8 w-8" />
                        </>
                      )}
                    </Carousel>
                  </div>
                ) : (
                  <div className="mb-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6B7763]/10 to-[#6B7763]/5 flex items-center justify-center text-[#6B7763] group-hover:bg-[#6B7763] group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                )}
                <div className="flex items-center gap-3 mb-2">
                  {service.type === "carousel" && (
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6B7763]/10 to-[#6B7763]/5 flex items-center justify-center text-[#6B7763] flex-shrink-0">
                      {service.icon}
                    </div>
                  )}
                  <CardTitle className="text-xl font-serif font-semibold text-[#6B7763] leading-tight">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-0">
                <CardDescription className="text-muted-foreground leading-relaxed text-[0.95rem]">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-5 px-12 py-10 rounded-3xl border border-border/30 bg-gradient-to-br from-white to-[hsl(25,30%,93%,0.3)]">
            <p className="text-2xl md:text-3xl font-serif font-semibold text-[#6B7763]">
              Sua melhor versão começa aqui.
            </p>
            <div className="h-[1px] w-12" style={{ background: 'linear-gradient(90deg, transparent, hsl(38 50% 70%), transparent)' }} />
            <p className="text-muted-foreground max-w-md">
              Agende uma avaliação personalizada e descubra o tratamento ideal para realçar sua beleza natural.
            </p>
            <Button 
              className="bg-[#6B7763] hover:bg-[#5a6654] text-white font-medium px-8 py-6 text-base rounded-xl shadow-premium-sm hover:shadow-premium transition-all duration-500 group mt-2"
              onClick={() => document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Agendar Avaliação
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
