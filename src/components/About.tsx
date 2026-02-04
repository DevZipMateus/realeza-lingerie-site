import { Heart, Eye, Star, Users, Shield, Sparkles, TrendingUp } from 'lucide-react';
import aboutImage from '@/assets/about-image.jpg';

const About = () => {
  const values = [
    { icon: Heart, text: 'Amor-próprio e autoestima feminina' },
    { icon: Sparkles, text: 'Qualidade e conforto' },
    { icon: Star, text: 'Sensualidade com elegância' },
    { icon: Users, text: 'Respeito e diversidade de corpos' },
    { icon: Shield, text: 'Honestidade e confiança' },
    { icon: TrendingUp, text: 'Inovação e estilo' },
  ];

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold text-foreground mb-4">
            Sobre nós
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-medium text-foreground">
              Nossa história
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Somos duas mulheres guerreiras que começaram vendendo lingeries em casa. Tínhamos outro trabalho, mas o desejo era grande de formar uma loja. Passou-se os anos e a vontade só aumentava.
              </p>
              <p>
                Até que certo dia a Camila, uma das sócias, me chamou – eu, Márcia – para uma conversa: "Márcia, você já pensou em montar uma loja de lingerie?" Na hora fiquei surpreendida, falei sim, muitas vezes, mas no momento não estou em condições financeiras. Ela olhou para mim e deu risada e falou: "financeiramente nunca ninguém está bem, mas precisamos dar o primeiro passo."
              </p>
              <p>
                E foi aí que tudo começou! Começamos com nada, simplesmente parcelando tudo, mas hoje nossa loja está recheada de novidades todos os dias para nossas clientes e nos sentimos muito bem com isso, cada dia mais trazendo novidades e deixando nossas clientes mais lindas!
              </p>
            </div>
          </div>

          {/* Store Image */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Interior da loja Sexy Lingerie Realeza"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-muted rounded-2xl p-8 md:p-12 mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-xl font-heading font-semibold text-foreground">Missão</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Realçar a beleza e a sensualidade de cada mulher através de lingeries confortáveis, modernas e de qualidade, proporcionando confiança, autoestima e uma experiência de compra acolhedora e especial.
              </p>
            </div>

            {/* Vision */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-xl font-heading font-semibold text-foreground">Visão</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ser uma loja referência em lingerie, reconhecida pelo estilo, variedade e atendimento diferenciado, ajudando mulheres a se sentirem mais seguras, poderosas e confiantes todos os dias.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl md:text-3xl font-heading font-medium text-foreground text-center mb-10">
            Nossos valores
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center card-hover"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-foreground font-medium">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
