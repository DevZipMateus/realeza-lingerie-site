import Header from '@/components/Header';

const Vitrine = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      {/* Header fixo - 80px (h-20 = 5rem) */}
      <div className="h-20 flex-shrink-0">
        <Header />
      </div>

      {/* Iframe - altura calculada: 100vh - 80px (header) - 63px (badge) */}
      <div className="flex-1" style={{ height: 'calc(100vh - 80px - 63px)' }}>
        <iframe
          src="https://sexylingeriesrealeza.egestor.com.br/vitrine/"
          className="w-full h-full border-none"
          title="Demonstração de Vitrine"
        />
      </div>

      {/* Badge inferior - 63px */}
      <div className="h-[63px] flex-shrink-0 w-full">
        {/* Espaço reservado para o badge do MonteSite */}
      </div>
    </div>
  );
};

export default Vitrine;
