import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBZgtEwLjw2v4wPcldssKCjscTiAFwZcI",
  authDomain: "podologia-cinthyaamaral.firebaseapp.com",
  projectId: "podologia-cinthyaamaral",
  storageBucket: "podologia-cinthyaamaral.firebasestorage.app",
  messagingSenderId: "460275865277",
  appId: "1:460275865277:web:505c517b5048108049c9d4"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// 🔥 CRIA O BANCO (ESSENCIAL)
export const db = getFirestore(app);
