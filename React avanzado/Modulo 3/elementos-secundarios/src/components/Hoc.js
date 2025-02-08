// Un ejemplo de un HOC usando "currying" seria este:
const conEstilosPersonalizados = (estilos) => (funcionEnvueta) => {
    return (props) => {
       return <funcionEnvueta {...props} style={estilos}/>
    };
  };
  
// Componente normal
const Card = ({style} , {children}) =>{
return(
    <div style={{padding: "20px", borderRadius: "10px", ...style}}>
    {children}
    </div>
);
};
  
// Creamos los HOC
export const RedCard = conEstilosPersonalizados({ backgroundColor: "red", color: "white" })(Card);
export const BlueCard = conEstilosPersonalizados({ backgroundColor: "blue", color: "white" })(Card);

// Este es un ejemplo basico de creacion de HOC usando "currying"