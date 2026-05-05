import "./App.css";

function App() {
  const whatsappLink =
    "https://wa.me/5521979655226?text=Olá! Gostaria de agendar um atendimento domiciliar 😊";

  return (
    <div>

      {/* NAVBAR */}
      <header className="navbar">
        <h1>Podóloga Cinthya <span>Amaral</span></h1>

        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">

          <span className="tag destaque">
            FOCO EM PODOLOGIA DOMICILIAR
          </span>

          <h1>
            Podóloga em domicílio no <span>Rio de Janeiro</span><br />
            Atendimento profissional sem sair de casa
          </h1>

          <p className="sub">
            Qualidade clínica, higiene rigorosa e atendimento humanizado.
          </p>

          <div className="buttons">
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <button className="btn-primary">
                Agendar atendimento domiciliar
              </button>
            </a>

            <a href="#servicos">
              <button className="btn-outline">Ver serviços</button>
            </a>
          </div>

          <p className="stars">★★★★★ Mais de 9 anos atendendo com excelência</p>
        </div>

        <div className="card-info">
          <h4>Atendimento Exclusivo</h4>
          <p>Equipamento profissional na sua casa com segurança e conforto.</p>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="sobre">
        <img src="/img1.png" alt="Podóloga realizando atendimento domiciliar" />

        <div>
          <span className="section-tag">Quem sou eu</span>
          <h2>Conheça Podóloga Cinthya Amaral</h2>

          <p>
            Mais de 9 anos de experiência oferecendo atendimento domiciliar com segurança, higiene e cuidado personalizado.
          </p>

          <div className="badges">
            <span>Equipamento esterilizado</span>
            <span>Material descartável</span>
            <span>Atendimento humanizado</span>
            <span>Pontualidade</span>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="servicos">
        <h2>Serviços</h2>

        <div className="cards">

          <div className="card">
            <img src="/podologiaclinica.png" alt="Podologia clínica" />
            <p>Podologia Clínica</p>
          </div>

          <div className="card">
            <img src="/unhasencravadas.png" alt="Unhas encravadas" />
            <p>Unhas Encravadas</p>
          </div>

          <div className="card">
            <img src="/spadospes.png" alt="Spa dos pés" />
            <p>Spa dos Pés</p>
          </div>

          <div className="card">
            <img src="/micoses.png" alt="Tratamento de micose" />
            <p>Micose</p>
          </div>

          <div className="card">
            <img src="/atendimentoidosos.png" alt="Atendimento ao idoso" />
            <p>Atendimento ao Idoso</p>
          </div>

          <div className="card">
            <img src="/reflexologia.png" alt="Reflexologia podal" />
            <p>Reflexologia</p>
          </div>

          <div className="card">
            <img src="/plastica-pes.png" alt="Plástica dos pés" />
            <p>Plástica dos Pés</p>
          </div>

        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="depoimentos">
        <h2>Depoimentos de Clientes</h2>

        <div className="depoimentos-container">

          <div className="depoimento-card">
            <p>"Excelente atendimento, muito cuidadosa!"</p>
          </div>

          <div className="depoimento-card">
            <p>"Profissional incrível, resolveu meu problema rapidamente."</p>
          </div>

        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="contato">
        <h2>Agende seu atendimento</h2>

        <a href={whatsappLink} target="_blank" rel="noreferrer">
          <button className="btn-primary">Falar no WhatsApp</button>
        </a>
      </section>

      {/* WHATSAPP FLOAT */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
      >
        <img src="/whatsapp.png" alt="WhatsApp" />
      </a>

    </div>
  );
}

export default App;
