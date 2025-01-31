import { useEffect, useState } from "react";
// Ejemplo adicional de extraccion de datos de una API

// En casos donde necesitemos testear nuestras API's en conexiones lentas podemos hacerlo en la seccion de red en el navegador
export default function UsuarioRandom() {
  const [usuario, setUsuario] = useState({})

  const buscarDatos = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((respuestaSolicitud) => respuestaSolicitud.json())
      .then((data) => setUsuario(data));
  };

  useEffect(() => {
    buscarDatos();
  }, []);

  return Object.keys(usuario).length > 0 ? (
    <div style={{padding: "10px"}}>
      <h1>Datos usuario</h1>
      <h2>Nombre: {usuario.results[0].name.first} {usuario.results[0].name.last} </h2>
      <p>{usuario.results[0].location.country} {usuario.results[0].location.city}</p>
      <img src={usuario.results[0].picture.large} alt="" />
    </div>
  ) : (
    <h1>Esperando datos...</h1>
  );
}
