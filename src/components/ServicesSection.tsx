
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Syringe, Sparkles, Needle, ZapIcon, Heart } from "lucide-react";

const services = [
  {
    icon: <Syringe className="w-10 h-10 text-[#6B7763]" />,
    title: "Preenchimentos Faciais",
    description: "Labial, olheira, mento, malar, mandíbula, rinomodelação para harmonização e rejuvenescimento facial."
  },
  {
    icon: <Sparkles className="w-10 h-10 text-[#6B7763]" />,
    title: "Bioestimulador de Colágeno",
    description: "Tratamento que estimula a produção natural de colágeno, melhorando a firmeza e elasticidade da pele."
  },
  {
    icon: <Needle className="w-10 h-10 text-[#6B7763]" />,
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
            Oferecemos procedimentos estéticos especializados, realizados por profissionais qualificados para garantir resultados excepcionais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border border-gray-100 text-center">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4">{service.icon}</div>
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
