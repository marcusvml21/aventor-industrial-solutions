import productUniforms from "@/assets/products-uniforms.jpg";
import aboutCompany from "@/assets/about-company.jpg";
import productCables from "@/assets/product-cables.jpg";
import productCleaning from "@/assets/product-cleaning.jpg";
import productTools from "@/assets/product-tools.jpg";
import productEpis from "@/assets/product-epis.jpg";

const ProductMarquee = () => {
  // Using available assets and generating product images
  const products = [
    { 
      name: "Uniformes Profissionais", 
      image: productUniforms,
      category: "Roupas de Trabalho"
    },
    { 
      name: "Fábrica AVENTOR", 
      image: aboutCompany,
      category: "Nossa Estrutura"
    },
    { 
      name: "Material Elétrico e Hidráulico", 
      image: productCables,
      category: "Componentes"
    },
    { 
      name: "Material de Limpeza", 
      image: productCleaning,
      category: "Higiene"
    },
    { 
      name: "Ferramentas", 
      image: productTools,
      category: "Equipamentos"
    },
    { 
      name: "EPIs Certificados", 
      image: productEpis,
      category: "Segurança"
    }
  ];

  // Duplicate for seamless loop
  const duplicatedProducts = [...products, ...products];

  return (
    <section className="py-12 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
          Nossos Produtos
        </h2>
        <p className="text-muted-foreground text-center">
          Linha completa para suas necessidades industriais
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays for seamless effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
        
        <div className="flex animate-marquee gap-8 py-4">
          {duplicatedProducts.map((product, index) => (
            <div
              key={`${product.name}-${index}`}
              className="flex-shrink-0 bg-card rounded-xl overflow-hidden shadow-hover hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group"
              style={{ width: "280px" }}
            >
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {product.category}
                </span>
                <h3 className="font-semibold text-foreground mt-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductMarquee;