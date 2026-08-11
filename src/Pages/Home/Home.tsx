
import "./Home.styles.scss";
import Header from "../../Components/Header/Header";
import ReciclavelIcon from "../../assets/ReciclavelIcon.png";

export default function Home() {
  return (
    <div className="home-container" id="home">
      <Header />

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <span className="badge">Consciência & Ação</span>
            <p className="welcome-text">Seja bem-vindo ao</p>
            <h1 className="brand-title">
              Coleta<span>Migos</span>
            </h1>
            <p className="hero-description">
              Unindo pessoas e comunidades para transformar o descarte consciente em um hábito diário. Conheça nossos pontos de coleta e conteúdos sobre reciclagem.
            </p>
            <div className="hero-buttons">
              <a href="#acervo" className="btn-primary">Explorar Acervo</a>
              <a href="#sobre" className="btn-secondary">Saiba Mais</a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-bg-blob"></div>
            <img src={ReciclavelIcon} alt="Ícone de Reciclagem ColetaMigos" className="ReciclaIcon" />
          </div>
        </section>

        <section className="features-section" id="acervo">
          <h2 className="section-title">Como ajudamos o meio ambiente</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon">♻️</div>
              <h3>Separação Correta</h3>
              <p>Aprenda a identificar e classificar plásticos, papéis, vidros e metais sem complicação.</p>
            </div>
            <div className="feature-card">
              <div className="card-icon">📍</div>
              <h3>Pontos de Coleta</h3>
              <p>Encontre os locais mais próximos da sua residência para descartar seus recicláveis com segurança.</p>
            </div>
            <div className="feature-card">
              <div className="card-icon">🌱</div>
              <h3>Comunidade Ativa</h3>
              <p>Participe de eventos, troque experiências e compartilhe iniciativas sustentáveis com outros membros.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}