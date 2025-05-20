
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const treatmentOptions = [
  "Limpeza de Pele",
  "Preenchimento Facial",
  "Microagulhamento", 
  "Peeling Químico",
  "Radiofrequência",
  "Hidratação Profunda",
  "Outros"
];

const ContactForm = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    message: ""
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, treatment: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log("Form submitted with:", formData);
    
    toast({
      title: "Agendamento recebido!",
      description: "Entraremos em contato em breve para confirmar sua consulta.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      treatment: "",
      message: ""
    });
  };

  return (
    <section id="agendar" className="py-20 bg-clinic-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-clinic-dark mb-4">
              Agende Sua Consulta
            </h2>
            <div className="h-1 w-20 bg-clinic-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato para confirmar seu agendamento.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu.email@exemplo.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label>Tratamento de Interesse</Label>
                <Select 
                  value={formData.treatment} 
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um tratamento" />
                  </SelectTrigger>
                  <SelectContent>
                    {treatmentOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message">Mensagem (opcional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Conte-nos mais sobre o que você procura ou qualquer questão específica..."
                  rows={4}
                />
              </div>
              
              <div className="md:col-span-2">
                <Button 
                  type="submit" 
                  className="w-full bg-clinic-accent hover:bg-clinic-accent/90 text-white font-medium py-6 text-lg"
                >
                  Solicitar Agendamento
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
