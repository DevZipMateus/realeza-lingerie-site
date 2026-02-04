import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#produtos', label: 'Produtos' },
    { href: '#contato', label: 'Contato' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background shadow-md ${
        isScrolled ? 'py-2' : 'py-3'
      }`}
    >
      <div className="container-custom flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          <img
            src={logo}
            alt="Sexy Lingerie Realeza - Seu segredo mais feminino"
            className="h-12 md:h-16 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider transition-colors duration-300 link-underline text-foreground hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/vitrine"
            className="btn-primary inline-flex items-center gap-2 text-sm py-2 px-4"
          >
            <ShoppingBag size={16} />
            Vitrine
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 transition-colors text-foreground"
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="px-6 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors text-sm font-medium uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/vitrine"
            onClick={handleNavClick}
            className="mx-6 mt-3 btn-primary inline-flex items-center justify-center gap-2 text-sm py-2 px-4"
          >
            <ShoppingBag size={16} />
            Vitrine
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
