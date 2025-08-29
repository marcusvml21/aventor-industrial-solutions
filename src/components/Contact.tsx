import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, ArrowRight } from "lucide-react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve. Obrigado!"
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsLoading(false);
    }, 1000);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const openWhatsApp = () => {
    const message = encodeURIComponent(`Olá! Gostaria de solicitar um orçamento para ${formData.name ? formData.name : 'minha empresa'}. ${formData.message ? `Detalhes: ${formData.message}` : ''}`);
    window.open(`https://wa.me/5521998457455?text=${message}`, '_blank');
  };
  return <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Solicite seu orçamento e descubra nossas soluções personalizadas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Fale Conosco
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Nossa equipe está pronta para atender suas necessidades e oferecer 
                  as melhores soluções em uniformes profissionais e equipamentos industriais.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Telefones</h4>
                        <div className="space-y-1">
                          
                          <p className="text-muted-foreground">(21) 99845-7455</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                        <p className="text-muted-foreground">contato@aventor.com.br</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Horário de Atendimento</h4>
                        <div className="space-y-1 text-muted-foreground">
                          <p>Segunda a Sexta: 8h às 18h</p>
                          <p>Sábado: 8h às 12h</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-primary rounded-2xl p-6 text-white">
                <div className="flex items-center space-x-4">
                  <MessageCircle className="w-12 h-12 text-white" />
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">Atendimento via WhatsApp</h4>
                    <p className="text-white/80 mb-4">
                      Fale diretamente conosco para orçamentos rápidos
                    </p>
                    <Button onClick={openWhatsApp} className="bg-white text-primary hover:bg-white/90 shadow-hover font-semibold">
                      Chamar no WhatsApp
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Solicitar Orçamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nome Completo *
                      </label>
                      <Input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} placeholder="Seu nome completo" className="w-full" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Telefone *
                      </label>
                      <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleInputChange} placeholder="(xx) xxxxx-xxxx" className="w-full" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail *
                    </label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder="seu@email.com" className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensagem *
                    </label>
                    <Textarea id="message" name="message" required value={formData.message} onChange={handleInputChange} placeholder="Descreva suas necessidades, tipo de uniforme, quantidade, prazo..." rows={5} className="w-full resize-none" />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button type="submit" disabled={isLoading} className="flex-1 bg-primary hover:bg-primary/90 shadow-hover font-semibold">
                      {isLoading ? <>Enviando...</> : <>
                          <Send className="mr-2 w-4 h-4" />
                          Enviar Mensagem
                        </>}
                    </Button>
                    <Button type="button" variant="outline" onClick={openWhatsApp} className="flex-1 hover:bg-primary hover:text-white font-semibold">
                      <MessageCircle className="mr-2 w-4 h-4" />
                      WhatsApp
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    * Campos obrigatórios. Seus dados serão tratados com total confidencialidade.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;