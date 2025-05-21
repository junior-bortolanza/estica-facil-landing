
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Syringe, Droplet, Microscope, Zap } from "lucide-react";

const services = [
  {
    icon: <Syringe className="w-10 h-10 text-clinic-accent" />,
    title: "Botox",
    description: "Tratamento que suaviza linhas de expressão e rugas, proporcionando um aspecto mais jovem e natural para a pele."
  },
  {
    icon: <Droplet className="w-10 h-10 text-clinic-accent" />,
    title: "Preenchimentos Faciais",
    description: "Labial, olheira, mento, malar, mandíbula e rinomodelação para harmonização e volumes faciais."
  },
  {
    icon: <Microscope className="w-10 h-10 text-clinic-accent" />,
    title: "Bioestimulador de Colágeno",
    description: "Tratamentos que estimulam a produção natural de colágeno para melhorar a firmeza e elasticidade da pele."
  },
  {
    icon: <Droplet className="w-10 h-10 text-clinic-accent" />,
    title: "Microagulhamento",
    description: "Procedimento que estimula a renovação celular e a produção de colágeno através de micro perfurações na pele."
  },
  {
    icon: <Zap className="w-10 h-10 text-clinic-accent" />,
    title: "Tecnologias",
    description: "Ultraformer e Lavieen, tecnologias avançadas para tratamentos faciais e corporais com resultados superiores."
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-clinic-dark mb-4">
            Nossos Tratamentos
          </h2>
          <div className="h-1 w-20 bg-clinic-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Oferecemos procedimentos estéticos especializados, realizados por profissionais qualificados para garantir resultados excepcionais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border border-gray-100 text-center">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-serif text-clinic-dark">{service.title}</CardTitle>
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
