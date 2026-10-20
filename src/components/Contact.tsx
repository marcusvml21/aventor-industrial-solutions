import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MessageCircle, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5521998457455", "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-stretch">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">Vamos conversar</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">Uma solução adequada começa com uma boa conversa.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">Conte o que sua empresa precisa. Nossa equipe orienta o próximo passo para uniformes, roupas especiais, EPIs e materiais industriais.</p>
              <Button onClick={openWhatsApp} size="lg" className="w-fit font-semibold shadow-hover">
                Falar pelo WhatsApp
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <Card className="bg-gradient-card border-border/60 shadow-elegant">
              <CardContent className="p-8 md:p-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><MessageCircle className="w-6 h-6 text-primary" /></div>
                  <div><h3 className="font-semibold text-foreground text-lg mb-1">WhatsApp</h3><p className="text-muted-foreground">Atendimento direto para orçamentos e dúvidas.</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Mail className="w-6 h-6 text-primary" /></div>
                  <div><h3 className="font-semibold text-foreground text-lg mb-1">E-mail</h3><a href="mailto:contato@aventor.com.br" className="text-muted-foreground hover:text-primary transition-colors">contato@aventor.com.br</a></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Clock className="w-6 h-6 text-primary" /></div>
                  <div><h3 className="font-semibold text-foreground text-lg mb-1">Atendimento</h3><p className="text-muted-foreground">Segunda a sexta, das 8h às 18h.</p></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
