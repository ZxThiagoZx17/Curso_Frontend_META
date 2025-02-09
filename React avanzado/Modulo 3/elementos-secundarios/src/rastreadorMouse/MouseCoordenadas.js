import { useState, useEffect } from "react";

const withMousePosicion = (ComponenteEnvuelto) => {
  return (props) => {
    const [posicionMouse, setPosicionMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const manejarPosicionMouse = (evento) => {
        setPosicionMouse({
          x: evento.clientX,
          y: evento.clientY,
        });
      };

      window.addEventListener("mousemove", manejarPosicionMouse);

      return () => {
        window.removeEventListener("mousemove", manejarPosicionMouse);
      };
    }, []);

    return <ComponenteEnvuelto {...props} posicionMouse={posicionMouse} />;
  };
};

function PanelRastreoMouse({ posicionMouse }) {
  if (!posicionMouse) return null;

  return (
    <div style={{ border: "1px solid black", padding: "16px", marginBottom: "128px" }}>
      <p>Posición Mouse:</p>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "200px",
        height: "64px"
      }}>
        <span>Posición X: {posicionMouse.x}</span>
        <span>Posición Y: {posicionMouse.y}</span>
      </div>
    </div>
  );
}

function PuntoRastreoMouse({ posicionMouse }) {
  if (!posicionMouse) return null;

  return (
    <div>
      <p>{`(${posicionMouse.x}, ${posicionMouse.y})`}</p>
    </div>
  );
}

export const RastreadorPuntoMouse = withMousePosicion(PuntoRastreoMouse);
export const RastreadorPanelMouse = withMousePosicion(PanelRastreoMouse);
