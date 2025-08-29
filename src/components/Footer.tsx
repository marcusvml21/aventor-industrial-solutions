import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowUp,
  Shield,
  Globe,
  Users
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                  src="/lovable-uploads/b4b13d43-2502-496b-9a16-8409b51a58e6.png" 
                  alt="AVENTOR Artigos Industriais"
                  className="h-10 w-auto"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-primary">AVENTOR</span>
                  <span className="text-xs text-muted-foreground">ARTIGOS INDUSTRIAIS</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Mais de 30 anos de experiência em soluções industriais, confecção de uniformes 
                profissionais e equipamentos de segurança. Qualidade e tradição desde 2011.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-primary/10 rounded-full px-3 py-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Qualidade Certificada</span>
                </div>
                <div className="flex items-center space-x-2 bg-primary/10 rounded-full px-3 py-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Padrão Internacional</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-foreground mb-6">Links Rápidos</h4>
              <nav className="space-y-3">
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre Nós
                </button>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Produtos e Serviços
                </button>
                <button 
                  onClick={() => scrollToSection('diferenciais')}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Diferenciais
                </button>
                <button 
                  onClick={() => scrollToSection('contato')}
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
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      (21) 3153-8101<br />
                      (21) 99845-7455
                    </p>
                  </div>
                </div>
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
                      Seg - Sex: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services List */}
          <div className="bg-primary/5 rounded-2xl p-8 mb-12">
            <h4 className="font-bold text-foreground mb-6 text-center">Nossos Segmentos de Atuação</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Uniformes Profissionais</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Roupas Anti-Chama</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Equipamentos de Segurança</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Importação e Exportação</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Material Médico-Hospitalar</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Gerenciamento de Resíduos</span>
              </div>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} AVENTOR Importação e Exportação de Artigos Industriais. 
                Todos os direitos reservados.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                CNPJ: XX.XXX.XXX/XXXX-XX | Fundada em 2011
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Users className="w-4 h-4 text-primary" />
                <span>Atendimento humanizado</span>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={scrollToTop}
                className="hover:bg-primary hover:text-white transition-colors"
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