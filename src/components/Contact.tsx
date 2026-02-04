import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import bgContact from '@/assets/bg-contact.jpg';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefone / WhatsApp',
      value: '(46) 99930-5501',
      href: 'https://wa.me/5546999305501',
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'sexylingeriesrealeza@gmail.com',
      href: 'mailto:sexylingeriesrealeza@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Endereço',
      value: 'Avenida Bruno Zuttion',
      href: 'https://goo.gl/maps/hW7AKQhb8AKU5sby8',
    },
    {
      icon: Clock,
      label: 'Horário de funcionamento',
      value: 'Seg-Sex: 8h às 17h30 | Sáb: 8h às 12h',
      href: null,
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@sl.lingerieoficial',
      href: 'https://www.instagram.com/sl.lingerieoficial',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      value: 'Sexy Lingerie Realeza',
      href: 'https://www.facebook.com/share/1AGPNqPD2N/',
    },
  ];

  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" 
        style={{ backgroundImage: `url(${bgContact})` }} 
      />
      <div className="absolute inset-0 bg-background/65" />
      
      <div className="container-custom relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold text-foreground mb-4">
            Entre em contato
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atendê-la! Entre em contato conosco através de um de nossos canais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <div className="pt-4">
              <a
                href="https://wa.me/5546999305501?text=Olá! Gostaria de mais informações sobre os produtos da Sexy Lingerie Realeza."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Conversar pelo WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-80 lg:h-full min-h-[320px] border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.4563508888!2d-53.53146392455391!3d-25.874584276886924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f01c8a6b8f7b0b%3A0x8f8f8f8f8f8f8f8f!2sAv.%20Bruno%20Zuttion%20-%20Realeza%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1699900000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Sexy Lingerie Realeza"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
