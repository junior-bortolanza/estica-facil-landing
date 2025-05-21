
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-clinic-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="relative">
              <div className="rounded-lg h-[400px] w-[400px] bg-clinic-accent/20 absolute -bottom-4 -right-4"></div>
              <img 
                src="/lovable-uploads/60ade7f1-132b-4fdf-ad58-89b2aa18fa5c.png" 
                alt="Dra. Camila Vieira" 
                className="rounded-lg h-[400px] w-full object-cover shadow-lg relative"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-clinic-dark mb-6">
              Sobre a <span className="text-clinic-accent">Dra. Camila Vieira</span>
            </h2>
            <div className="h-1 w-20 bg-clinic-accent mb-6"></div>
            <p className="text-gray-600 mb-6 text-lg">
              Dra. Camila Vieira é especialista em procedimentos estéticos avançados, com formação e treinamento nas técnicas mais modernas do mercado.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Com anos de experiência na área de estética, a Dra. Camila dedica-se a realçar a beleza natural de seus pacientes, promovendo autoestima e bem-estar através de procedimentos seguros e com resultados evidentes desde a primeira sessão.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-clinic-accent mb-2">+5000</p>
                <p className="text-gray-600">Clientes Satisfeitos</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-clinic-accent mb-2">15</p>
                <p className="text-gray-600">Especialistas</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-clinic-accent mb-2">20+</p>
                <p className="text-gray-600">Tratamentos</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-clinic-accent mb-2">8</p>
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
