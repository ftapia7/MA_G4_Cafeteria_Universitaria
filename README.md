Este proyecto es una aplicación web construida con React, Vite y Firebase para gestionar pedidos de una cafetería. La aplicación ofrece dos vistas principales:
- Vista de usuario: muestra el menú con carrito y permite confirmar pedidos.
- Vista del personal: presenta una tabla de pedidos con acciones para actualizar su estado.
  
Requisitos
- Node.js versión 18 o superior
- npm 
- Una cuenta de Firebase con Firestore habilitado
  
Instalación
- Clonar el repositorio:
git clone https://github.com/ftapia7/MA_G4_Cafeteria_Universitaria.git
cd MA_G4_Cafeteria_Universitaria

- Instalar las dependencias:
npm install

- Configurar Firebase:
Crear un archivo src/firebase.js con la configuración del proyecto.

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


Ejecución en desarrollo
Para iniciar el servidor de desarrollo:
npm run dev


La aplicación se abrirá en la dirección http://localhost:5173.


Tema visual
El proyecto incluye un archivo src/styles.css con un tema personalizado inspirado en una cafetería. Este tema define una paleta cálida con tonos marrón y crema, y estilos aplicados a la barra de navegación, las tarjetas, los botones y la tabla de pedidos.

Funcionalidades principales
- Menú interactivo con carrito y cálculo automático del total.
- Confirmación de pedidos con hora programada.
- Vista del personal con tabla de pedidos y actualización de estado (pendiente, preparado, entregado).
- Integración con Firebase Firestore para persistencia en tiempo real.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
