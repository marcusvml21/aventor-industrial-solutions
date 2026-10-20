import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-industrial-v2.jpg";

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
          alt="Equipe industrial usando uniformes profissionais em ambiente de produção"
          className="w-full h-full object-cover"
          width="1672"
          height="941"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-primary/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium tracking-wide">AVENTOR · DESDE 2011</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
            <span className="block">Uniformes e proteção</span>
            <span className="block text-primary-glow">para operações exigentes.</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/85 mb-10 max-w-3xl mx-auto leading-relaxed">
            Uniformes profissionais, roupas especiais e soluções industriais para empresas que precisam de segurança, padronização e confiança.
          </p>
          
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
          
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
