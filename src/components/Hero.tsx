import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import heroBg from '@/assets/hero-bg.jpg';
const Hero = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 pt-20">
        <div className="animate-fade-in">
          <img src={logo} alt="Sexy Lingerie Realeza" className="mx-auto h-32 md:h-48 w-auto mb-8" />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-semibold text-white mb-6 animate-slide-up">Sexy Lingerie</h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-heading italic text-primary mb-8 animate-slide-up" style={{
        animationDelay: '0.2s'
      }}>
          Realce sua beleza e sensualidade com lingeries que inspiram confiança e autoestima
        </h2>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-slide-up font-light" style={{
        animationDelay: '0.4s'
      }}>
          Seu segredo mais feminino!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{
        animationDelay: '0.6s'
      }}>
          <Link to="/vitrine" className="btn-primary inline-flex items-center justify-center gap-2">
            <ShoppingBag size={20} />
            Ver Vitrine
          </Link>
          <a href="#produtos" className="btn-outline-light inline-flex items-center justify-center gap-2">
            Conheça nossos produtos
          </a>
          <a href="#sobre" className="btn-outline-light inline-flex items-center justify-center gap-2">
            Nossa história
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default Hero;