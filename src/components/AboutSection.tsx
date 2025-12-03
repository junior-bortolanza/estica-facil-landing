
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Award, Users, Clock, Heart } from "lucide-react";

const doctorImages = [
  "/lovable-uploads/75ec6e9a-ee8f-41d9-81ee-2b91551e87dd.png",
  "/lovable-uploads/08fd2600-a2f4-4055-99e5-d16243823cf4.png",
  "/lovable-uploads/44674b1d-adf0-484b-b436-2b694be021b3.png",
  "/lovable-uploads/6ebe149a-e60d-4aed-b8dd-77f3714d117b.png"
];

const stats = [
  { icon: <Users className="w-5 h-5" strokeWidth={1.5} />, value: "+1000", label: "Clientes Satisfeitos" },
  { icon: <Heart className="w-5 h-5" strokeWidth={1.5} />, value: "+10", label: "Tratamentos" },
  { icon: <Clock className="w-5 h-5" strokeWidth={1.5} />, value: "3", label: "Anos de Experiência" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-premium gradient-premium-reverse">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <div className="relative max-w-lg mx-auto">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[#6B7763]/20 rounded-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D2CAC8]/30 rounded-2xl -z-10" />
              
              <Carousel className="rounded-2xl overflow-hidden shadow-premium">
                <CarouselContent>
                  {doctorImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                        <img 
                          src={image} 
                          alt="Dra. Camila Vieira" 
                          className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105" 
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
          
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B7763]/10 text-[#6B7763] text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Biomédica Esteta
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-[#6B7763] mb-6 leading-tight tracking-tight">
              Sobre a Dra. Camila Vieira
            </h2>
            
            <div className="h-px w-16 bg-gradient-to-r from-[#6B7763] to-transparent mb-8" />
            
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Sou Biomédica Esteta (CRBM 54.303) especializada em harmonização facial e tratamentos estéticos avançados que valorizam a beleza natural com sofisticação, segurança e resultados reais.
              </p>
              <p>
                Atuo em um ambiente exclusivo projetado para oferecer conforto, acolhimento e excelência em cada procedimento. Ofereço serviços como preenchimentos faciais, toxina botulínica (botox), bioestimuladores, mesoterapia capilar, skinbooster, entre outros.
              </p>
              <p>
                Agende uma consulta e descubra o poder da estética com ciência e sensibilidade.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#6B7763]/10 text-[#6B7763] mb-3">
                    {stat.icon}
                  </div>
                  <p className="text-3xl md:text-4xl font-serif font-semibold text-[#6B7763] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
