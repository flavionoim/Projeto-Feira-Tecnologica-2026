
import "./RoutesPage.styles.scss";
import Header from "../../Components/Header/Header";

export default function RoutesPage() {
  return (
    <div className="routes-container">
      <Header />

      <main className="routes-content">
        <div className="routes-header">
          <span className="badge">Pontos de Coleta</span>
          <h1>Rotas de Reciclagem</h1>
          <p>Encontre postos de coleta seletiva e ecopontos mais próximos de você.</p>
        </div>

        <div className="map-card">
          <div className="iframe-wrapper">
            <iframe
              title="Pontos de Coleta Seletiva"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117032.53488737248!2d-46.6898492!3d-23.5583648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2d97186!2sPonto%20de%20Entrega%20Volunt%C3%A1ria%20-%20Reciclagem!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}
