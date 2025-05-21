
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const treatmentOptions = [
  "Preenchimento Facial",
  "Bioestimulador de Colágeno",
  "Microagulhamento",
  "Toxina Botulínica (Botox)",
  "Tecnologias (Ultraformer/Lavieen)",
  "Mesoterapia Capilar",
  "Skinbooster",
  "Outros"
];

const ContactForm = () => {
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
    
    // Format message for WhatsApp
    const whatsappNumber = "5515996978807";
    const treatmentText = formData.treatment ? `\nTratamento de interesse: ${formData.treatment}` : "";
    const messageText = formData.message ? `\nMensagem: ${formData.message}` : "";
    
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.${treatmentText}${messageText}\n\nTelefone: ${formData.phone}\nEmail: ${formData.email}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
    
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
    <section id="agendar" className="py-20 bg-[#D2CAC8]/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#6B7763] mb-4">
              Agende Sua Consulta
            </h2>
            <div className="h-1 w-20 bg-[#6B7763] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Preencha o formulário abaixo para entrar em contato via WhatsApp.
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
                  className="w-full bg-[#6B7763] hover:bg-[#6B7763]/90 text-white font-medium py-6 text-lg"
                >
                  Enviar pelo WhatsApp
                </Button>
              </div>
            </div>
          </form>
          
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
            <a 
              href="https://www.instagram.com/dracamilavieiral/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-[#6B7763] hover:text-[#6B7763]/80"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              @dracamilavieiral
            </a>
            
            <a 
              href="https://www.facebook.com/profile.php?id=61574609272088" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-[#6B7763] hover:text-[#6B7763]/80"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              Dra. Camila Vieira
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
