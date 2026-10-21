import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Clock, ArrowUp, Shield, Globe, Users, MessageCircle } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // ✅ Caminho relativo, igual ao Header
  const logoSrc = `${import.meta.env.BASE_URL}Logo.png`;

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src={logoSrc}
                  alt="AVENTOR Artigos Industriais"
                  className="h-20 w-auto"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-primary"></span>
                  <span className="text-xs text-muted-foreground"></span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Uniformes profissionais, roupas especiais e soluções industriais para empresas que valorizam segurança, padronização e confiança.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-primary/10 rounded-full px-3 py-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Desde 2011</span>
                </div>
                <div className="flex items-center space-x-2 bg-primary/10 rounded-full px-3 py-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Atendimento próximo</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-foreground mb-6">Links Rápidos</h4>
              <nav className="space-y-3">
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Início
                </button>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre Nós
                </button>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Produtos e Serviços
                </button>
                <button
                  onClick={() => scrollToSection("diferenciais")}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Diferenciais
                </button>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-foreground mb-6">Contato</h4>
              <div className="space-y-4">
                <a href="https://wa.me/5521998457455" target="_blank" rel="noreferrer" className="flex items-start space-x-3 group">
                  <MessageCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">Falar pelo WhatsApp</span>
                </a>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      contato@aventor.com.br
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Seg - Sex: 8h às 18h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services List */}
          <div className="bg-primary/5 rounded-2xl p-8 mb-12">
            <h4 className="font-bold text-foreground mb-6 text-center">
              Nossos Segmentos de Atuação
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Uniformes Profissionais</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">
                  Material Elétrico e Hidráulico
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">
                  Equipamentos de Segurança
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Importação e Exportação</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">
                  Material Médico-Hospitalar
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">
                  Material de Higiene Pessoal e Limpeza
                </span>
              </div>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} AVENTOR Importação e Exportação de
                Artigos Industriais. Todos os direitos reservados.
              </p>
              <p className="text-xs text-muted-foreground mt-2">Fundada em 2011</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Users className="w-4 h-4 text-primary" />
                <span>Atendimento humanizado</span>
              </div>
              <Button
                variant="default"
                size="sm"
                onClick={scrollToTop}
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Voltar ao Topo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
