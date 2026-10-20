import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Shirt, HardHat } from "lucide-react";
import heroImage from "@/assets/hero-diverse-industrial.jpg";

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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-primary/30"></div>
      </div>
      
      {/* Geometric Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary/30 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-primary-glow" />
            <span className="text-sm font-medium tracking-wide">AVENTOR · DESDE 2011</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
            <span className="block">Uniformes e proteção</span>
            <span className="block text-primary-glow">para operações exigentes.</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-lg md:text-xl lg:text-2xl text-white/85 mb-10 max-w-3xl mx-auto leading-relaxed">
            Uniformes profissionais, roupas especiais e soluções industriais para empresas que precisam de segurança, padronização e confiança.
          </h2>
          
          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shirt className="w-5 h-5 text-primary-glow" />
              <span className="text-sm font-medium">Uniformes profissionais</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-primary-glow" />
              <span className="text-sm font-medium">Roupas especiais</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <HardHat className="w-5 h-5 text-primary-glow" />
              <span className="text-sm font-medium">EPIs e materiais</span>
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
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto border-t border-white/20 pt-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-sm text-white/80">Clientes cadastrados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">2011</div>
              <div className="text-sm text-white/80">Fundação da Empresa</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">8–18h</div>
              <div className="text-sm text-white/80">Segunda a sexta</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-70">
        <div className="w-1 h-16 bg-white/30 rounded-full flex justify-center">
          <div className="w-1 h-6 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
