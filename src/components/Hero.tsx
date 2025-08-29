import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5521998457455', '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Profissionais industriais usando equipamentos de segurança AVENTOR"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>
      
      {/* Geometric Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary/30 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <CheckCircle className="w-4 h-4 text-white" />
            <span className="text-sm font-medium">Fundada em 2011 • +30 anos de experiência</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block">Soluções Industriais</span>
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              e de Segurança
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-2">
              com Qualidade Global
            </span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Mais de 30 anos de experiência em confecção de uniformes profissionais, 
            EPIs e soluções industriais completas
          </h2>
          
          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-sm font-medium">Roupas Anti-Chama</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Globe className="w-5 h-5 text-white" />
              <span className="text-sm font-medium">Importação & Exportação</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="text-sm font-medium">EPIs Certificados</span>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={openWhatsApp}
              className="bg-white text-primary hover:bg-white/90 shadow-hover text-lg px-8 py-4 h-auto font-semibold group"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('servicos')}
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-4 h-auto font-semibold"
            >
              Conheça Nossos Produtos
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">30+</div>
              <div className="text-sm text-white/80">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">2011</div>
              <div className="text-sm text-white/80">Fundação da Empresa</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-white/80">Qualidade Garantida</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-white/30 rounded-full flex justify-center">
          <div className="w-1 h-6 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;