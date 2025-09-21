import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
        {/* Company Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl font-bold">AIS</span>
          </div>
          <h2 className="text-lg font-semibold text-slate-700 mt-3">Aventor Industrial Solutions</h2>
        </div>

        {/* 404 Error */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-slate-800 mb-4">404</h1>
          <h3 className="text-2xl font-semibold text-slate-700 mb-4">Página não encontrada</h3>
        </div>

        {/* Institutional Message */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md border border-slate-200">
          <p className="text-slate-600 leading-relaxed">
            Ops! A página que você está procurando não existe ou foi movida. 
            A <strong>Aventor Industrial Solutions</strong> está sempre trabalhando para 
            melhorar sua experiência. Por favor, verifique o endereço ou retorne 
            à nossa página inicial.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={() => window.history.back()} 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 text-slate-700 border-slate-300 hover:bg-slate-50"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
          
          <Button 
            onClick={() => window.location.href = '/'} 
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <Home className="w-4 h-4" />
            Ir para Home
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-8 text-sm text-slate-500">
          <p>© 2024 Aventor Industrial Solutions</p>
          <p>Soluções industriais de excelência</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
