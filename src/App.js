import "./App.css";

function App() {
  const whatsappLink =
    "https://wa.me/5521979655226?text=Olá! Gostaria de agendar um atendimento 😊";

  return (
    <div>

      {/* NAVBAR */}
      <header className="navbar">
        <h1>Podóloga Cinthya <span>Amaral</span></h1>

        <nav>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero fade-in">
        <div className="hero-text">

          <span className="tag destaque">
            FOCO EM PODOLOGIA DOMICILIAR
          </span>

          <p className="highlight">
            Atendimento profissional no conforto da sua casa
          </p>

          <h1>
            Podóloga em domicílio no <span>Rio de Janeiro</span><br/>
            Atendimento profissional sem sair de casa
          </h1>

          <p className="sub">
            Qualidade clínica, higiene rigorosa e atendimento humanizado.
          </p>

          <div className="buttons">
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <button className="btn-primary">
                Agendar agora (vagas limitadas)
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
      <section id="sobre" className="sobre fade-in">
        <img src="/img1.png" alt="Podóloga realizando atendimento domiciliar" />

        <div>
          <span className="section-tag">Quem sou eu</span>
          <h2>Conheça Podóloga Cinthya Amaral</h2>

          <p>
            Sou podóloga formada há mais de 9 anos pelo Instituto IBRAPE, apaixonada pela profissão. Cada paciente recebe um atendimento personalizado, com cuidado, paciência e dedicação.
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
      <section id="servicos" className="servicos fade-in">
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
            <img src="/micoses.png" alt="Micose" />
            <p>Micose</p>
          </div>

          <div className="card">
            <img src="/atendimentoidosos.png" alt="Atendimento ao idoso" />
            <p>Atendimento ao Idoso e Pés diabéticos</p>
          </div>

          <div className="card">
            <img src="/reflexologia.png" alt="Reflexologia" />
            <p>Reflexologia</p>
          </div>

          <div className="card">
            <img src="/plastica-pes.png" alt="Plástica dos pés" />
            <p>Plástica dos Pés</p>
          </div>

        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="depoimentos fade-in">
        <h2>Depoimentos de Clientes</h2>

        <div className="depoimentos-container">

          <div className="depoimento-card">
            <p>"Excelente atendimento, muito cuidadosa!"</p>
            <img src="/cliente1.jpg" alt="Cliente satisfeita" />
          </div>

          <div className="depoimento-card">
            <p>"Profissional incrível, resolveu meu problema rapidamente."</p>
            <video controls>
              <source src="/video1.mp4" type="video/mp4" />
            </video>
          </div>

        </div>

        <div className="form-depoimento">
          <input placeholder="Seu nome" />
          <textarea placeholder="Conte sua experiência"></textarea>
          <input type="file" accept="image/*,video/*" />
          <button className="btn-primary">Enviar</button>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="contato fade-in">
        <h2>Agende seu atendimento</h2>

        <a href={whatsappLink} target="_blank" rel="noreferrer">
          <button className="btn-primary">Falar no WhatsApp</button>
        </a>
      </section>

      {/* BOTÃO FLUTUANTE */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
      >
        💬
      </a>

    </div>
  );
}

export default App;
