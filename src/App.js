import "./App.css";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

function App() {
  const [comentarios, setComentarios] = useState({});
  const [novoComentario, setNovoComentario] = useState({});

  // 🔥 GALERIA (VOCÊ CONTROLA)
  const galeria = [
    {
      id: "img1",
      src: "/img1.jpg",
      titulo: "Podologia Clínica",
    },
    {
      id: "img2",
      src: "/img2.jpg",
      titulo: "Unhas Encravadas",
    },
    {
      id: "img3",
      src: "/img3.jpg",
      titulo: "Spa dos Pés",
    },
    {
      id: "img4",
      src: "/img4.jpg",
      titulo: "Micose",
    },
    {
      id: "img5",
      src: "/img5.jpg",
      titulo: "Atendimento ao Idoso",
    },
    {
      id: "img6",
      src: "/img6.jpg",
      titulo: "Reflexologia",
    },
    {
      id: "img7",
      src: "/img7.jpg",
      titulo: "Plástica dos Pés",
    },
  ];

  // 🔥 CARREGAR COMENTÁRIOS
  useEffect(() => {
    const carregar = async () => {
      const q = query(collection(db, "comentarios"), orderBy("data", "desc"));
      const snapshot = await getDocs(q);

      const dados = {};
      snapshot.forEach((doc) => {
        const c = doc.data();
        if (!dados[c.imgId]) dados[c.imgId] = [];
        dados[c.imgId].push(c);
      });

      setComentarios(dados);
    };

    carregar();
  }, []);

  // 🔥 ENVIAR COMENTÁRIO
  const enviarComentario = async (imgId) => {
    const texto = novoComentario[imgId];
    if (!texto) return;

    await addDoc(collection(db, "comentarios"), {
      texto,
      imgId,
      data: new Date(),
    });

    setNovoComentario({ ...novoComentario, [imgId]: "" });
    window.location.reload();
  };

  return (
    <div className="App">
      {/* HERO */}
      <section className="hero">
        <h1>FOCO EM PODOLOGIA DOMICILIAR</h1>
        <p>Atendimento profissional no conforto da sua casa</p>
      </section>

      {/* GALERIA */}
      <section className="galeria">
        <h2>Galeria de Procedimentos</h2>

        <div className="grid-galeria">
          {galeria.map((item) => (
            <div key={item.id} className="card-galeria">
              <img src={item.src} alt={item.titulo} />
              <h3>{item.titulo}</h3>

              {/* COMENTÁRIOS */}
              <div className="comentarios">
                {(comentarios[item.id] || []).map((c, i) => (
                  <p key={i}>"{c.texto}"</p>
                ))}
              </div>

              {/* FORM */}
              <textarea
                placeholder="Comente sobre este procedimento..."
                value={novoComentario[item.id] || ""}
                onChange={(e) =>
                  setNovoComentario({
                    ...novoComentario,
                    [item.id]: e.target.value,
                  })
                }
              />

              <button onClick={() => enviarComentario(item.id)}>
                Enviar
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* WHATSAPP FIXO */}
      <a
        href="https://wa.me/5521979655226"
        className="whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
}

export default App;
