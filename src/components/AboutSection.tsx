
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const doctorImages = [
  "/lovable-uploads/08fd2600-a2f4-4055-99e5-d16243823cf4.png",
  "/lovable-uploads/44674b1d-adf0-484b-b436-2b694be021b3.png",
  "/lovable-uploads/6ebe149a-e60d-4aed-b8dd-77f3714d117b.png"
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-[#D2CAC8]/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="relative">
              <div className="rounded-lg h-[500px] w-[500px] bg-[#6B7763]/20 absolute -bottom-4 -right-4"></div>
              <Carousel className="w-[500px] h-[500px] rounded-lg shadow-lg">
                <CarouselContent>
                  {doctorImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="overflow-hidden rounded-lg h-[500px]">
                        <img 
                          src={image} 
                          alt="Dra. Camila Vieira" 
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
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#6B7763] mb-6">
              Sobre a <span className="text-[#6B7763]">Dra. Camila Vieira</span>
            </h2>
            <div className="h-1 w-20 bg-[#6B7763] mb-6"></div>
            <p className="text-gray-600 mb-6 text-lg">
              Sou Biomédica Esteta (CRBM 54.303) especializada em harmonização facial e tratamentos estéticos avançados que valorizam a beleza natural com sofisticação, segurança e resultados reais.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Atuo em um ambiente exclusivo projetado para oferecer conforto, acolhimento e excelência em cada procedimento. Ofereço serviços como preenchimentos faciais, toxina botulínica (botox), bioestimuladores, mesoterapia capilar, skinbooster, entre outros.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Agende uma consulta e descubra o poder da estética com ciência e sensibilidade.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#6B7763] mb-2">+5000</p>
                <p className="text-gray-600">Clientes Satisfeitos</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#6B7763] mb-2">15</p>
                <p className="text-gray-600">Especialistas</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#6B7763] mb-2">20+</p>
                <p className="text-gray-600">Tratamentos</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#6B7763] mb-2">8</p>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
