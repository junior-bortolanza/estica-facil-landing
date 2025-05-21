
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, ZapIcon, Heart, CircleEllipsis } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

const services = [
  {
    type: "carousel",
    title: "Preenchimentos Faciais",
    description: "Labial, olheira, mento, malar, mandíbula, rinomodelação para harmonização e rejuvenescimento facial.",
    images: [
      "/lovable-uploads/03030892-ce61-4931-953c-99df627a52e3.png",
      "/lovable-uploads/c41d1c91-f3ed-42e4-a276-cf58fea589a8.png",
      "/lovable-uploads/b2841c5b-2628-4740-8ed6-95f2f59c5181.png"
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
    icon: <ZapIcon className="w-10 h-10 text-[#6B7763]" />,
    title: "Tecnologias",
    description: "Ultraformer e Lavieen: equipamentos avançados para lifting não-cirúrgico e rejuvenescimento da pele."
  },
  {
    icon: <Heart className="w-10 h-10 text-[#6B7763]" />,
    title: "Mesoterapia Capilar",
    description: "Tratamento especializado para queda de cabelo, fortalecimento dos fios e estímulo ao crescimento capilar."
  }
];

const ServicesSection = () => {
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
            <Card key={index} className={cn("hover:shadow-lg transition-shadow border border-gray-100", 
              service.type === "carousel" ? "text-center overflow-hidden" : "text-center")}>
              <CardHeader className="flex flex-col items-center">
                {service.type === "carousel" ? (
                  <div className="w-full mb-4">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {service.images.map((image, i) => (
                          <CarouselItem key={i}>
                            <div className="p-1">
                              <div className="h-[240px] bg-muted overflow-hidden rounded-md">
                                <img 
                                  src={image} 
                                  alt={`${service.title} - Imagem ${i+1}`} 
                                  className="object-contain w-full h-full"
                                />
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </div>
                ) : (
                  <div className="mb-4">{service.icon}</div>
                )}
                <CardTitle className="text-xl font-serif text-[#6B7763]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
