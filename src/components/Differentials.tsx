import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Settings, 
  Palette, 
  Users2, 
  CheckCircle,
  Award,
  Clock,
  Cog
} from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: Star,
      title: "Mais de 30 Anos de Experiência",
      description: "Três décadas de expertise em confecção de roupas profissionais e soluções industriais.",
      highlight: "Tradição"
    },
    {
      icon: Settings,
      title: "Modelagem Customizada",
      description: "Desenvolvemos modelagem padrão ou totalmente customizada conforme sua necessidade específica.",
      highlight: "Personalização"
    },
    {
      icon: Palette,
      title: "Diversidade de Materiais",
      description: "Ampla variedade de tecidos, bolsos e acessórios para atender todos os segmentos industriais.",
      highlight: "Variedade"
    },
    {
      icon: Cog,
      title: "Máquinas Modernas",
      description: "Equipamentos de última geração e profissionais altamente qualificados para garantir a excelência.",
      highlight: "Tecnologia"
    }
  ];

  const features = [
    "Certificações de Qualidade Internacional",
    "Atendimento Personalizado",
    "Entrega Dentro do Prazo",
    "Suporte Técnico Especializado",
    "Controle de Qualidade Rigoroso",
    "Flexibilidade de Produção"
  ];

  return (
    <section id="diferenciais" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Nossos <span className="text-primary">Diferenciais</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              O que nos torna únicos no mercado de soluções industriais
            </p>
          </div>

          {/* Main Differentials */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {differentials.map((differential, index) => {
              const IconComponent = differential.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {differential.title}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            {differential.highlight}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {differential.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Features Grid */}
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Garantias de Qualidade
              </h3>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Compromisso com a excelência em cada projeto que desenvolvemos
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white/90 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Anos no Mercado</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-10 h-10 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Qualidade Garantida</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;