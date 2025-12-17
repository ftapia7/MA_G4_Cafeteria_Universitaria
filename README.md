# MA_G4_Cafeteria_Universitaria
Incremento del Primer Sprint del Proyecto Final del Curso de Metodologias Agiles de Desarrollo

Aplicación web construida con **React + Vite + Firebase** para gestionar pedidos de una cafetería.  
Incluye dos vistas principales:
- **Vista Usuario**: menú con carrito y confirmación de pedidos.
- **Vista Personal**: tabla de pedidos con acciones para actualizar estado.

Requisitos

- Node.js 
- npm 
- Cuenta de Firebase con Firestore habilitado

 Instalación

1. Clonar este repositorio:
   ```bash
   git clone https://github.com/ftapia7/cafeteria-menu.git
   cd cafeteria-menu

2. Instalar dependencias:
   npm install

3. Configurar firebase: Crear un archivo src/firebase.js con configuración

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


4. Ejecutar
   npm run dev (esto va a abrir la app en: https://localhost:5173)


Tema Café: El proyecto incluye un archivo src/style.css con un tema café personalizado.
- Estilos para navbar, tarjetas, botones y tabla de pedidos.
  
Funcionalidades: Menú interactivo con carrito y cálculo de total.
- Confirmación de pedidos con hora programada.
- Vista del personal con tabla de pedidos y actualización de estado (pendiente → preparado → entregado).
- Integración con Firebase Firestore para persistencia en tiempo real.

