import { useEffect } from 'react';
import Header from '@/components/Header';

const Vitrine = () => {
  // Esconde o badge do MonteSite apenas nesta página
  useEffect(() => {
    const badge = document.getElementById('montesite-footer-badge');
    if (badge) {
      badge.style.display = 'none';
    }
    
    // Restaura o badge quando sair da página
    return () => {
      if (badge) {
        badge.style.display = 'block';
      }
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      {/* Header fixo - 80px (h-20 = 5rem) */}
      <div className="h-20 flex-shrink-0">
        <Header />
      </div>

      {/* Iframe - altura calculada: 100vh - 80px (header) */}
      <div className="flex-1" style={{ height: 'calc(100vh - 80px)' }}>
        <iframe
          src="https://sexylingeriesrealeza.egestor.com.br/vitrine/"
          className="w-full h-full border-none"
          title="Vitrine Sexy Lingerie Realeza"
        />
      </div>
    </div>
  );
};

export default Vitrine;
