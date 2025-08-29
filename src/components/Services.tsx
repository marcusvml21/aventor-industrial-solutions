import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  HardHat, 
  Shirt, 
  Wrench, 
  Globe, 
  Recycle,
  Zap,
  Droplets,
  Users,
  ArrowRight 
} from "lucide-react";
import productsImage from "@/assets/products-uniforms.jpg";

const Services = () => {
  const services = [
    {
      icon: Shirt,
      title: "Uniformes Profissionais",
      description: "Confecção completa de uniformes masculinos e femininos: conjuntos, jalecos, calças, camisas, macacões, casacos, jaquetas e acessórios.",
      features: ["Modelagem customizada", "Diversos tecidos", "Bolsos personalizados"]
    },
    {
      icon: Shield,
      title: "Roupas Especiais de Segurança",
      description: "Fabricação especializada em roupas anti-chama, retardante à chama e impermeáveis para máxima proteção industrial.",
      features: ["Anti-chama certificadas", "Retardante à chama", "Impermeáveis", "Linha NR-10"]
    },
    {
      icon: HardHat,
      title: "EPIs e Materiais Industriais",
      description: "Comércio atacadista de equipamentos de proteção individual, materiais elétricos, ferragens, ferramentas e equipamentos.",
      features: ["EPIs certificados", "Material elétrico e hidráulico", "Ferragens e ferramentas", "Material Hospitalar"]
    },
    {
      icon: Globe,
      title: "Importação e Exportação",
      description: "Serviços especializados em importação e exportação de artigos industriais com qualidade internacional.",
      features: ["Artigos industriais", "Logística internacional", "Certificações", "Qualidade global"]
    },
    {
      icon: Wrench,
      title: "Reparo de Roupas",
      description: "Serviços especializados em reparo e manutenção de roupas profissionais e uniformes industriais.",
      features: ["Reparo profissional", "Manutenção preventiva", "Restauração", "Prolongamento da vida útil"]
    },
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/5521998457455', '_blank');
  };

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Nossos <span className="text-primary">Produtos e Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Soluções completas para segurança e qualidade industrial
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative mb-16">
            <img 
              src={productsImage} 
              alt="Linha completa de uniformes profissionais e EPIs da AVENTOR"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Qualidade Certificada em Cada Produto
                </h3>
                <Button 
                  onClick={openWhatsApp}
                  className="bg-white text-primary hover:bg-white/90 shadow-hover font-semibold"
                >
                  Solicitar Catálogo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300 group cursor-pointer"
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Specializations */}
          <div className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Especializações Técnicas
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Zap className="w-12 h-12 mb-4 opacity-90" />
                  <h4 className="text-lg font-semibold mb-2">Linha NR-10</h4>
                  <p className="text-white/80 text-sm">Uniformes específicos para trabalhos em instalações elétricas</p>
                </div>
                <div className="flex flex-col items-center">
                  <Droplets className="w-12 h-12 mb-4 opacity-90" />
                  <h4 className="text-lg font-semibold mb-2">Impermeáveis</h4>
                  <p className="text-white/80 text-sm">Proteção completa contra líquidos e intempéries</p>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="w-12 h-12 mb-4 opacity-90" />
                  <h4 className="text-lg font-semibold mb-2">Masculino e Feminino</h4>
                  <p className="text-white/80 text-sm">Modelagem específica para cada gênero</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;