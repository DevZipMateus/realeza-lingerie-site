import { Heart, Sparkles, Baby, Users, ShoppingBag, ArrowRight, Shirt, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import bgProducts from '@/assets/bg-products.jpg';
import productLingerie from '@/assets/product-lingerie.jpg';
import productSensual from '@/assets/product-sensual.jpg';
import productWellness from '@/assets/product-wellness.jpg';
import productKids from '@/assets/product-kids.jpg';
import productMasculino from '@/assets/product-masculino.jpg';
import productGestante from '@/assets/product-gestante.jpg';
import productConjuntos from '@/assets/product-conjuntos.jpg';

const Products = () => {
  const categories = [
    {
      icon: Heart,
      title: 'Lingeries',
      items: ['Sutiãs', 'Calcinhas', 'Conjuntos', 'Bodies'],
      image: productLingerie,
    },
    {
      icon: Sparkles,
      title: 'Linha sensual',
      items: ['Sutiãs sexy', 'Camisolas', 'Fantasias', 'Acessórios'],
      image: productSensual,
    },
    {
      icon: Users,
      title: 'Sex shop',
      items: ['Lubrificantes', 'Sabonete íntimo', 'Próteses', 'Vibradores'],
      image: productWellness,
    },
    {
      icon: Baby,
      title: 'Linha infantil e juvenil',
      items: ['Calcinhas infantis', 'Tops juvenis', 'Conjuntos', 'Acessórios'],
      image: productKids,
    },
    {
      icon: Shirt,
      title: 'Linha masculina',
      items: ['Cuecas', 'Boxes', 'Kits masculinos', 'Produtos íntimos'],
      image: productMasculino,
    },
    {
      icon: HeartHandshake,
      title: 'Linha gestante',
      items: ['Sutiãs amamentação', 'Calcinhas gestante', 'Shorts', 'Conforto'],
      image: productGestante,
    },
  ];

  return (
    <section id="produtos" className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${bgProducts})` }} 
      />
      <div className="absolute inset-0 bg-muted/95" />
      
      <div className="container-custom relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold text-foreground mb-4">
            Nossos produtos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com uma variedade completa para atender todos os gostos e necessidades: linha infantil, juvenil, feminina e masculina.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden card-hover border border-border"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={`Categoria ${category.title}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="p-6">
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-2 text-muted-foreground text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Vitrine CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-3">
              Confira nossa Vitrine Online!
            </h3>
            <p className="text-white/90 max-w-xl mx-auto mb-6">
              Explore todos os nossos produtos com preços e detalhes. Encontre a peça perfeita para você!
            </p>
            <Link
              to="/vitrine"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold py-3 px-8 rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              Acessar Vitrine
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Visite nossa loja e conheça todas as novidades!
          </p>
          <a
            href="https://wa.me/5546999305501?text=Olá! Gostaria de conhecer os produtos da Sexy Lingerie Realeza."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
