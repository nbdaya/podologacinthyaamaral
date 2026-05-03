import "./App.css";

function App() {

  const whatsappLink =
    "https://wa.me/5521979655226?text=Olá! Gostaria de agendar um atendimento de podologia domiciliar.";

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
      <section className="hero">
        <div className="hero-text">

          <span className="tag">Podologia Domiciliar</span>

          <p className="highlight">
            Atendimento profissional no conforto da sua casa
          </p>

          <h1>
            Cuidado com seus <span>pés</span>, <br />
            no conforto da sua casa
          </h1>

          <p className="sub">
            Qualidade clínica, higiene rigorosa e atendimento humanizado.
          </p>

          <div className="buttons">
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <button className="btn-primary">Agendar via WhatsApp</button>
            </a>

            <a href="#servicos">
              <button className="btn-outline">Ver serviços</button>
            </a>
          </div>

          <p className="stars">★★★★★ Mais de 9 anos de experiência</p>
        </div>

        <div className="card-info">
          <h4>Atendimento Exclusivo</h4>
          <p>Equipamento profissional na sua casa com segurança e conforto.</p>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="sobre">
        <img src="/img1.png" alt="Podóloga" />

        <div>
          <span className="section-tag">Quem sou eu</span>
          <h2>Conheça Podóloga Cinthya Amaral</h2>

          <p>
            Sou podóloga formada a mais de 9 anos pelo Instituto IBRAPE, apaixonada pela profissão, com paciência e dedicação pois cada paciente é único e merece atendimento personalizado.
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
        <h2>Cuidados especializados</h2>

        <div className="cards">

          <div className="card">
            <img src="/podologiaclinica.png" />
            <p>Podologia Clínica</p>
          </div>

          <div className="card">
            <img src="/unhasencravadas.png" />
            <p>Unhas Encravadas</p>
          </div>

          <div className="card">
            <img src="/spadospes.png" />
            <p>Spa dos Pés</p>
          </div>

          <div className="card">
            <img src="/micoses.png" />
            <p>Micose</p>
          </div>

          <div className="card">
            <img src="/atendimentoidosos.png" />
            <p>Atendimento ao Idoso e Pés diabéticos</p>
          </div>

        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="depoimentos">
        <h2>O que dizem minhas clientes</h2>

        <input placeholder="Seu nome" />
        <textarea placeholder="Conte sua experiência"></textarea>

        <button className="btn-primary">Enviar</button>

        <p>"Atendimento impecável!" — Juliana</p>
        <p>"Muito profissional e cuidadosa." — Mariana</p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="contato">
        <h2>Agende seu atendimento</h2>

        <a href={whatsappLink} target="_blank" rel="noreferrer">
          <button className="btn-primary">Falar no WhatsApp</button>
        </a>
      </section>

    </div>
  );
}

export default App;
