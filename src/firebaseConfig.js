import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA...etc",
  authDomain: "proyectopasteleria-...etc",
  projectId: "proyectopasteleria-...etc",
  storageBucket: "proyectopasteleria-...etc",
  messagingSenderId: "1020724...etc",
  appId: "1:1020724...etc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; // ✅ Solo exportar, sin re-importar
