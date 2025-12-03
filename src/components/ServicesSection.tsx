
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Zap, Droplets, Grid3X3, Waves, Scissors } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Eye } from "lucide-react";

const services = [
  {
    type: "carousel",
    icon: <Droplets className="w-6 h-6" strokeWidth={1.5} />,
    title: "Preenchimentos Faciais",
    description: "Labial, olheira, mento, malar, mandíbula, rinomodelação para harmonização e rejuvenescimento facial.",
    images: [
      "/lovable-uploads/03030892-ce61-4931-953c-99df627a52e3.png",
      "/lovable-uploads/b2841c5b-2628-4740-8ed6-95f2f59c5181.png"
    ]
  },
  {
    type: "carousel",
    icon: <Sparkles className="w-6 h-6" strokeWidth={1.5} />,
    title: "Toxina Botulínica (Botox)",
    description: "Tratamento para suavizar linhas de expressão, rugas e prevenir o envelhecimento, com resultados naturais e duradouros.",
    images: [
      "/lovable-uploads/6c642fab-e2c3-4f9a-8632-0f1a2121e584.png",
      "/lovable-uploads/8b195910-b113-48f9-97e6-b20a8f9b3e16.png",
      "/lovable-uploads/485c6556-c243-469a-a9bf-5014e0fbf340.png",
      "/lovable-uploads/4d51f184-f4fe-4470-8489-a51571128183.png"
    ]
  },
  {
    icon: <Waves className="w-6 h-6" strokeWidth={1.5} />,
    title: "Bioestimulador de Colágeno",
    description: "Tratamento que estimula a produção natural de colágeno, melhorando a firmeza e elasticidade da pele."
  },
  {
    icon: <Grid3X3 className="w-6 h-6" strokeWidth={1.5} />,
    title: "Microagulhamento",
    description: "Técnica que estimula a renovação celular e produção de colágeno através de micro perfurações na pele."
  },
  {
    type: "carousel",
    icon: <Zap className="w-6 h-6" strokeWidth={1.5} />,
    title: "Tecnologias",
    description: "Ultraformer e Lavieen: equipamentos avançados para lifting não-cirúrgico e rejuvenescimento da pele.",
    images: [
      "/lovable-uploads/67bed94e-6815-4e80-834a-5d305e27b63a.png"
    ]
  },
  {
    type: "carousel",
    icon: <Scissors className="w-6 h-6" strokeWidth={1.5} />,
    title: "Mesoterapia Capilar",
    description: "Tratamento especializado para queda de cabelo, fortalecimento dos fios e estímulo ao crescimento capilar.",
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
          <h2 className="section-title">
            Nossos Tratamentos
          </h2>
          <div className="section-divider" />
          <p className="section-description">
            Oferecemos procedimentos estéticos personalizados, realizados com excelência pela Dra. Camila Vieira para garantir resultados excepcionais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-white rounded-2xl border border-border/50 shadow-soft hover:shadow-soft-lg transition-all duration-500 overflow-hidden"
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
                  <div className="mb-5 w-14 h-14 rounded-xl bg-[#6B7763]/10 flex items-center justify-center text-[#6B7763] group-hover:bg-[#6B7763] group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                )}
                <div className="flex items-center gap-3 mb-2">
                  {service.type === "carousel" && (
                    <div className="w-10 h-10 rounded-lg bg-[#6B7763]/10 flex items-center justify-center text-[#6B7763] flex-shrink-0">
                      {service.icon}
                    </div>
                  )}
                  <CardTitle className="text-xl font-serif font-semibold text-[#6B7763] leading-tight">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-0">
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
