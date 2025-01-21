// La navegacion del sitio web permite navegar entre varias paginas o enlaces

// Los sitios web creados con React son diferentes a los que se crean unicamente con CSS y HTML, con react las SPA (Single Page Aplication), toda la aplicacion se carga dentro de un <div>, por lo tanto no se estaria visitando diferentes paginas asi como con los hipervinculos de HTML

// Las SPA vienen con etiquetas de anclaje, si deseamos usar varias paginas debemos agregar la biblioteca React Router, de hay se hace la implementacion de rutas

// Esto nos lleva al concepto de "Representacion condicional" donde se muestran diferentes componentes segun la URL Actual, esto permite que la aplicacion tenga diferentes vistas

// la instalacion es asi: npm install react-router-dom
// Un ejemplo del uso de routers puede ser asi: 
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
    return <h1>Inicio</h1>;
}

function About() {
    return <h1>Acerca de</h1>;
}

function Contact() {
    return <h1>Contacto</h1>;
}

export default function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Inicio</Link> |{" "}
                <Link to="/about">Acerca de</Link> |{" "}
                <Link to="/contact">Contacto</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

// Tambien se pueden hacer representaciones condicionales sin router asi:

function App() {
    const [route, setRoute] = React.useState("home");

    const renderPage = () => {
        if (route === "home") {
            return <h1>Inicio</h1>;
        } else if (route === "about") {
            return <h1>Acerca de</h1>;
        } else if (route === "contact") {
            return <h1>Contacto</h1>;
        }
        return <h1>Página no encontrada</h1>;
    };

    return (
        <div>
            <nav>
                <button onClick={() => setRoute("home")}>Inicio</button>
                <button onClick={() => setRoute("about")}>Acerca de</button>
                <button onClick={() => setRoute("contact")}>Contacto</button>
            </nav>
            {renderPage()}
        </div>
    );
}



// Condiciones de FL simplificadas --->simplificar las estructuras de control condicional en JavaScript (como if o switch) para que sean más cortas y legibles, tambien con operadores ternarios