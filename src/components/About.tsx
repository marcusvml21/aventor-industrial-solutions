import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Globe } from "lucide-react";
import aboutImage from "/lovable-uploads/2a4d56e3-40f4-46ea-9c52-97815d33e9e7.png";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 flex items-center justify-center gap-4">
              Sobre a 
              <img 
                src="/lovable-uploads/b4b13d43-2502-496b-9a16-8409b51a58e6.png" 
                alt="AVENTOR Logo"
                className="h-64 w-auto"
              />
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tradição, qualidade e inovação em soluções industriais desde 2011
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-glow/10 rounded-full blur-xl"></div>
              <img 
                src={aboutImage} 
                alt="Instalações modernas da AVENTOR com equipamentos industriais de última geração"
                className="w-full h-[500px] object-cover rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  História e Tradição
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-justify">
                  Fundada em <strong className="text-primary">2011</strong>, a AVENTOR conta com 
                  mais de <strong className="text-primary">30 anos de experiência</strong> na 
                  confecção de roupas profissionais, consolidando-se como referência no setor 
                  de soluções industriais e de segurança.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                  Especializados em fabricação de roupas especiais: <strong className="text-primary">
                  anti-chama, retardante à chama e impermeáveis</strong>, atendemos diversos 
                  segmentos industriais com excelência e inovação.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground mb-1">30+</div>
                    <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground mb-1">2011</div>
                    <div className="text-sm text-muted-foreground">Fundação</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="mt-20">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">Missão</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Oferecer excelência na qualidade de nossos serviços, gerando 
                    satisfação e segurança a nossos clientes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">Visão</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser uma empresa voltada para o crescimento e bem-estar de 
                    nossos colaboradores e clientes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">Valores</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprometimento no atendimento ao cliente, conduta ética, 
                    honestidade e transparência.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;