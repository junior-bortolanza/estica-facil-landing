import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, ZapIcon, Heart, CircleEllipsis, Rabbit, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const services = [
  {
    type: "carousel",
    title: "Preenchimentos Faciais",
    description: "Labial, olheira, mento, malar, mandíbula, rinomodelação para harmonização e rejuvenescimento facial.",
    images: [
      "/lovable-uploads/03030892-ce61-4931-953c-99df627a52e3.png",
      "/lovable-uploads/b2841c5b-2628-4740-8ed6-95f2f59c5181.png"
    ]
  },
  {
    type: "carousel",
    icon: <Sparkles className="w-10 h-10 text-[#6B7763]" />,
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
    icon: <Sparkles className="w-10 h-10 text-[#6B7763]" />,
    title: "Bioestimulador de Colágeno",
    description: "Tratamento que estimula a produção natural de colágeno, melhorando a firmeza e elasticidade da pele."
  },
  {
    icon: <CircleEllipsis className="w-10 h-10 text-[#6B7763]" />,
    title: "Microagulhamento",
    description: "Técnica que estimula a renovação celular e produção de colágeno através de micro perfurações na pele."
  },
  {
    type: "carousel",
    icon: <ZapIcon className="w-10 h-10 text-[#6B7763]" />,
    title: "Tecnologias",
    description: "Ultraformer e Lavieen: equipamentos avançados para lifting não-cirúrgico e rejuvenescimento da pele.",
    images: [
      "/lovable-uploads/67bed94e-6815-4e80-834a-5d305e27b63a.png"
    ]
  },
  {
    type: "carousel",
    icon: <Heart className="w-10 h-10 text-[#6B7763]" />,
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
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#6B7763] mb-4">
            Nossos Tratamentos
          </h2>
          <div className="h-1 w-20 bg-[#6B7763] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Oferecemos procedimentos estéticos personalizados, realizados com excelência pela Dra. Camila Vieira para garantir resultados excepcionais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className={cn("group hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#6B7763]/20", 
              service.type === "carousel" ? "text-center overflow-hidden" : "text-center")}>
              <CardHeader className="flex flex-col items-center">
                {service.type === "carousel" ? (
                  <div className="w-full mb-4 relative">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {service.images && service.images.map((image, i) => (
                          <CarouselItem key={i}>
                            <div className="relative group/image">
                              <AspectRatio ratio={4/3}>
                                <img 
                                  src={image} 
                                  alt={`${service.title} - Resultado ${i+1}`} 
                                  className="object-cover w-full h-full rounded-lg shadow-md transition-transform duration-300 group-hover/image:scale-105"
                                  style={{ 
                                    imageRendering: 'crisp-edges',
                                    filter: 'contrast(1.05) saturate(1.1) brightness(1.05)',
                                  }}
                                  loading="lazy"
                                  decoding="async"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <Button
                                        variant="secondary"
                                        size="sm"
                                        className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-[#6B7763] shadow-lg"
                                        onClick={() => setSelectedImage(image)}
                                      >
                                        <Eye className="w-4 h-4 mr-2" />
                                        Ver Ampliado
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-5xl p-0">
                                      <div className="relative bg-black rounded-lg">
                                        <img 
                                          src={image} 
                                          alt={`${service.title} - Resultado ${i+1}`}
                                          className="w-full h-auto max-h-[90vh] object-contain"
                                          style={{
                                            imageRendering: 'crisp-edges',
                                            filter: 'contrast(1.05) saturate(1.1)',
                                          }}
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
                          <CarouselPrevious className="left-2 bg-white/80 hover:bg-white text-[#6B7763] shadow-lg border-[#6B7763]/20" />
                          <CarouselNext className="right-2 bg-white/80 hover:bg-white text-[#6B7763] shadow-lg border-[#6B7763]/20" />
                        </>
                      )}
                    </Carousel>
                    {service.images && service.images.length > 1 && (
                      <div className="flex justify-center mt-3 space-x-2">
                        {service.images.map((_, i) => (
                          <div key={i} className="w-2 h-2 rounded-full bg-gray-300"></div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="mb-4 p-6 rounded-full bg-[#6B7763]/5 group-hover:bg-[#6B7763]/10 transition-colors duration-300">
                    {service.icon}
                  </div>
                )}
                <CardTitle className="text-xl font-serif text-[#6B7763] group-hover:text-[#5a6659] transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
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
