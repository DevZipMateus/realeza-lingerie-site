import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';
import bgFooter from '@/assets/bg-footer.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" 
        style={{ backgroundImage: `url(${bgFooter})` }} 
      />
      <div className="absolute inset-0 bg-secondary/80" />
      
      <div className="container-custom section-padding pb-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Sexy Lingerie Realeza"
              className="h-16 w-auto mb-4"
            />
            <p className="text-secondary-foreground/70 text-sm leading-relaxed max-w-md">
              Realçando a beleza e a sensualidade de cada mulher através de lingeries confortáveis, modernas e de qualidade. Seu segredo mais feminino!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="https://wa.me/5546999305501" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  (46) 99930-5501
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:sexylingeriesrealeza@gmail.com" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  sexylingeriesrealeza@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/70 text-sm">
                  Avenida Bruno Zuttion
                </span>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/sl.lingerieoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Instagram da Sexy Lingerie Realeza"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/1AGPNqPD2N/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Facebook da Sexy Lingerie Realeza"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/50 text-sm text-center md:text-left">
              © {currentYear} Sexy Lingerie Realeza. Todos os direitos reservados.
            </p>
            <p className="text-secondary-foreground/50 text-sm">
              CNPJ: 47.817.100/0001-79
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
