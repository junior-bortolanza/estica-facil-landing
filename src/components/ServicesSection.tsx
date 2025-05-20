
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: "✨",
    title: "Limpeza de Pele",
    description: "Tratamento completo que remove impurezas e desobstrui os poros, deixando sua pele limpa e radiante."
  },
  {
    icon: "💉",
    title: "Preenchimento Facial",
    description: "Restaura o volume perdido e suaviza linhas de expressão para uma aparência mais jovem e natural."
  },
  {
    icon: "🔍",
    title: "Microagulhamento",
    description: "Estimula a produção de colágeno, melhorando a textura da pele e reduzindo cicatrizes e estrias."
  },
  {
    icon: "🌞",
    title: "Peeling Químico",
    description: "Remove camadas superficiais da pele, tratando manchas, acne e sinais de envelhecimento."
  },
  {
    icon: "⚡",
    title: "Radiofrequência",
    description: "Tratamento que combate a flacidez e melhora o contorno facial e corporal sem cirurgia."
  },
  {
    icon: "💧",
    title: "Hidratação Profunda",
    description: "Restaura a umidade natural da pele, devolvendo maciez e elasticidade."
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
            Oferecemos os mais modernos procedimentos estéticos, realizados por profissionais qualificados para garantir resultados excepcionais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border border-gray-100">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
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
