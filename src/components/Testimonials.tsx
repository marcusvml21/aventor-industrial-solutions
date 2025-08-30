import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    text: "Comprei uniformes profissionais para toda a equipe e fiquei impressionado com a qualidade dos tecidos e acabamentos. Produtos resistentes e confortáveis, realmente feitos para o dia a dia de trabalho pesado.",
    author: "Carlos Mendes",
    position: "Gerente de Operações"
  },
  {
    text: "Além da ótima variedade de produtos, o que mais me surpreendeu foi o cumprimento rigoroso do prazo de entrega. Recebi tudo no tempo combinado, embalado e pronto para uso.",
    author: "Patrícia Nogueira",
    position: "Compras Corporativas"
  },
  {
    text: "Não é só a venda, mas o pós-venda diferenciado que faz a AVENTOR se destacar. Precisei de ajustes em alguns uniformes e o suporte foi rápido, atencioso e resolveu tudo sem complicação.",
    author: "João Farias",
    position: "Diretor de Logística"
  },
  {
    text: "Encontramos na AVENTOR uma linha completa de EPIs e equipamentos que antes comprávamos de fornecedores diferentes. Isso trouxe praticidade e economia para nossa empresa.",
    author: "Mariana Alves",
    position: "Coordenadora de Segurança do Trabalho"
  },
  {
    text: "Além da qualidade indiscutível, percebi que os produtos da AVENTOR têm excelente custo-benefício. A durabilidade compensa muito, e os colaboradores estão satisfeitos.",
    author: "Ricardo Tavares",
    position: "Empresário Industrial"
  },
  {
    text: "O atendimento da equipe é impecável: sempre dispostos a ajudar, dar sugestões e apresentar soluções personalizadas. A variedade de opções e a flexibilidade foram diferenciais para nossa compra.",
    author: "Fernanda Costa",
    position: "Supervisora de Compras"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Depoimentos reais de empresas que confiam na qualidade AVENTOR
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl shadow-elegant p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5"></div>
            
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-primary/20">
              <Quote size={48} />
            </div>

            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                {/* First testimonial */}
                <div>
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 min-h-[120px] flex items-center">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  
                  <div>
                    <cite className="font-semibold text-foreground text-lg">
                      — {testimonials[currentIndex].author}
                    </cite>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>

                {/* Second testimonial */}
                <div>
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 min-h-[120px] flex items-center">
                    "{testimonials[(currentIndex + 1) % testimonials.length].text}"
                  </blockquote>
                  
                  <div>
                    <cite className="font-semibold text-foreground text-lg">
                      — {testimonials[(currentIndex + 1) % testimonials.length].author}
                    </cite>
                    <p className="text-muted-foreground">
                      {testimonials[(currentIndex + 1) % testimonials.length].position}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="rounded-full p-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="rounded-full p-2"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => {
              const isActive = index === currentIndex || index === (currentIndex + 1) % testimonials.length;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    isActive ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;