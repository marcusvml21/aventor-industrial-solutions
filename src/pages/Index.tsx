import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import ProductMarquee from "@/components/ProductMarquee";

const Index = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ProductMarquee />
      <Differentials />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Index;
