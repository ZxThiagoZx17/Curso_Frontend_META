// Con el fin de create react-app, llegan nuevas herramientas como vite, un bundler y dev server moderno para proyectos de frontend. Se diferencia de Webpack en que usa ES Modules (ECMAScript Modules) y compilación bajo demanda, lo que hace que el desarrollo sea más rápido.

// Webpack compila todo el proyecto antes de montarlo al navegador, Vite compila unicamente los archivos que estamos usando en caliente, esto nos hara mas agiles en desarrollo

// Bundler (Empaquetador)
// Se encarga de tomar todos los archivos JS, CSS, imágenes, etc., y combinarlos en archivos optimizados para producción. Vite usa esbuild (que es más rápido que Webpack).

// Dev Server (Servidor de Desarrollo)
// En desarrollo, no se quiere esperar a que se "empaquete todo" cada vez que cambia algo.
// Un Dev Server como el de Vite sirve los archivos en caliente (Hot Module Replacement, HMR) y solo recarga lo necesario cuando se hacen cambios.

// La creacion de un proyecto en vite se hace asi (Al crearlo nos preguntara que variante queremos usar sea .js, .jsx, .ts, y .tsx):

// npm create vite@latest mi-proyecto
// npm create vite@latest mi-proyecto --template react (Con plantilla de React)
//                       o
// yarn create vite@latest mi-proyecto
// yarn create vite@latest mi-proyecto --template react (Con plantilla de React)

// Nos generara una estructura similar a la que se usaba con create react-app:
// mi-proyecto
// ├── node_modules
// ├── public
// ├── src
// │   ├── App.jsx
// │   ├── main.jsx
// │   ├── assets
// │   └── index.css
// ├── .gitignore
// ├── index.html
// ├── package.json
// ├── vite.config.js
// └── README.md

// Una de las diferencias es que vite usa main.jsx en lugar de index.js

// Para ejecutar el proyecto se hace con 
// cd mi-proyecto
// npm install
// npm run dev

// Para generar el build con las dependecias usamos 
// npm run build
