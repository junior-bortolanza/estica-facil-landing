
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Instagram, Facebook, ArrowRight } from "lucide-react";

const treatmentOptions = [
  "Preenchimento Labial",
  "Preenchimento de Mento",
  "Toxina Botulínica (Botox)",
  "Perfiloplastia",
  "Rinomodelação",
  "Bioestimulador de Colágeno",
  "Microagulhamento",
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
    
    const whatsappNumber = "5515996978807";
    const treatmentText = formData.treatment ? `\nTratamento de interesse: ${formData.treatment}` : "";
    const messageText = formData.message ? `\nMensagem: ${formData.message}` : "";
    
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.${treatmentText}${messageText}\n\nTelefone: ${formData.phone}\nEmail: ${formData.email}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      treatment: "",
      message: ""
    });
  };

  return (
    <section id="agendar" className="section-premium gradient-premium-reverse">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="section-header">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#6B7763]/60 mb-4">Agendamento</p>
            <h2 className="section-title">
              Agende Sua Consulta
            </h2>
            <div className="section-divider" />
            <p className="section-description">
              Preencha o formulário abaixo para entrar em contato via WhatsApp.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-soft-lg border border-border/30 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium text-sm">Nome Completo</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                  required
                  className="h-12 rounded-xl border-border/40 focus:border-[#6B7763] focus:ring-[#6B7763]/20 bg-[hsl(25,30%,93%,0.2)]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium text-sm">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu.email@exemplo.com"
                  required
                  className="h-12 rounded-xl border-border/40 focus:border-[#6B7763] focus:ring-[#6B7763]/20 bg-[hsl(25,30%,93%,0.2)]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-medium text-sm">Telefone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(00) 00000-0000"
                  required
                  className="h-12 rounded-xl border-border/40 focus:border-[#6B7763] focus:ring-[#6B7763]/20 bg-[hsl(25,30%,93%,0.2)]"
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-foreground font-medium text-sm">Tratamento de Interesse</Label>
                <Select 
                  value={formData.treatment} 
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger className="h-12 rounded-xl border-border/40 focus:border-[#6B7763] focus:ring-[#6B7763]/20 bg-[hsl(25,30%,93%,0.2)]">
                    <SelectValue placeholder="Selecione um tratamento" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    {treatmentOptions.map((option) => (
                      <SelectItem key={option} value={option} className="rounded-lg">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message" className="text-foreground font-medium text-sm">Mensagem (opcional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Conte-nos mais sobre o que você procura..."
                  rows={4}
                  className="rounded-xl border-border/40 focus:border-[#6B7763] focus:ring-[#6B7763]/20 resize-none bg-[hsl(25,30%,93%,0.2)]"
                />
              </div>
              
              <div className="md:col-span-2">
                <Button 
                  type="submit" 
                  className="w-full bg-[#6B7763] hover:bg-[#5a6654] text-white font-medium py-6 text-base rounded-xl shadow-premium-sm hover:shadow-premium transition-all duration-500 group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Enviar pelo WhatsApp
                </Button>
              </div>
            </div>
          </form>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://www.instagram.com/dracamilavieiral/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white shadow-soft border border-border/30 text-[#6B7763] hover:shadow-soft-lg transition-all duration-300"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-medium">@dracamilavieiral</span>
            </a>
            
            <a 
              href="https://www.facebook.com/profile.php?id=61574609272088" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white shadow-soft border border-border/30 text-[#6B7763] hover:shadow-soft-lg transition-all duration-300"
            >
              <Facebook className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-medium">Dra. Camila Vieira</span>
            </a>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="container mx-auto px-4 md:px-8 mt-20">
        <div className="text-center py-14 px-8 rounded-3xl" style={{ background: 'linear-gradient(135deg, hsl(100 12% 44% / 0.06), hsl(38 50% 70% / 0.08))' }}>
          <p className="text-3xl md:text-4xl font-serif font-semibold text-[#6B7763] mb-4">
            Sua melhor versão começa aqui.
          </p>
          <div className="h-[1px] w-16 mx-auto mb-5" style={{ background: 'linear-gradient(90deg, transparent, hsl(38 50% 70%), transparent)' }} />
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Não espere mais para cuidar de si. Agende agora e dê o primeiro passo.
          </p>
          <Button 
            className="bg-[#6B7763] hover:bg-[#5a6654] text-white font-medium px-10 py-6 text-base rounded-xl shadow-premium-sm hover:shadow-premium transition-all duration-500 group"
            onClick={() => {
              const whatsappNumber = "5515996978807";
              const message = "Olá! Gostaria de agendar uma avaliação com a Dra. Camila Vieira";
              window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
            }}
          >
            Agendar pelo WhatsApp
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
