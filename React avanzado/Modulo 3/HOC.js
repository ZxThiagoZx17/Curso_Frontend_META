// HOC (Higher-Order Components)
// Un componente de orden superior es una funcion que toma un componente de entrada y devuelve otro nuevo mejorado con funcionalidades adicionales

// Es un patron avanzado que permite reutilizar logica entre componentes para no repetir codigo innecesariamente:

// Pasos paa crear un HOC
// Definir el HOC:

// Se crea una función que recibe un componente como argumento.
// Dentro del HOC se pueden definir estados, efectos u otra lógica que queramos compartir entre múltiples componentes.
// El HOC devuelve el componente recibido con las nuevas props añadidas, que pueden incluir estados, datos simulados, funciones, etc.
// Crear los componentes que usen el HOC:

// Se crean los componentes que recibirán la funcionalidad extra que provee el HOC.
// Estos componentes accederán a los valores adicionales a través de props.
// Se puede usar desestructuración de props para facilitar el acceso a los datos.
// Usar el HOC para extender funcionalidad:

// Se crean versiones mejoradas de los componentes envolviéndolos con el HOC.
// Se exportan o se utilizan en la aplicación con las nuevas funcionalidades añadidas.

// Este es el componente de orden superior
const conDatosUsuario = (funcionEnvueta) => {
    return(props) => {
        const datosUsuarioSimulados = {nombre:'Daniel', edad: 25, ocupacion:'Dev'}; //Simulacion de recepcion de datos 
        return <funcionEnvueta {...props} usuarioExtendido={datosUsuarioSimulados}/>;
    };
};

// Este es el componente normal
const Perfil = ({usuarioExtendido}) => {
    return(<h2>Bienvenido!! {usuarioExtendido.nombre}</h2>);
}

// Creamos el componente de orden superior que tomara perfil y devolvera perfil con datos de usuario:
const PerfilConDatosDeUsuario = conDatosUsuario(Perfil)

// App.js:
function app() {
    return(
        <div className="App">
            <PerfilConDatosDeUsuario/>
        </div>
    );
}

// El componente profile recibira los props de conDatosUsuario, que es la funcionEnvuelta 

// Ese es un ejemplo de HOC, estos se usan mayormente en tareas repetitivas como:
// 1. Reutilizar logica de autenticación, permisos, manejo de datos
// 2. Dejar la logica fuera del componente original 
// 3. Aplicar patrones como memorización o control de renderizado.

// Precauciones:
// 1. Puede llegar a ser dificil de leer si se encadenan demasiados HOC
// 2. Asegurar de que se pasen todas la props con {...props} y ya los componentes de entrada utilizan unicamente los valores necesarios
// 3. Nunca mutar/cambiar un componente dentro de un HOC
// 4. No crear los HOC o funciones mejoradas dentro de un componente ya que se montara de nuevo, no se actualizara con las props adicionales
// 4. Los HOC afectan el depurado debido a que los nombres de los componentes se codifican, se puede solucionar con displayName:

const withUserData = (WrappedComponent) => {
    const EnhancedComponent = (props) => {
      const user = { name: "Juan", age: 21 };
      return <WrappedComponent {...props} user={user} />;
    };
    // Ya con esto se imprime el mensaje "withUserData(NombreDeLaFuncion)"
    EnhancedComponent.displayName = `withUserData(${WrappedComponent.displayName || WrappedComponent.name})`;
  
    return EnhancedComponent;
  };

// Cabe recalcar que una alternativa moderna a esto son los Hooks personalizados, la tarea anterior se haria asi:
const useDatosUsuario = () => {
    return { nombre: "Juan", edad: 21 };
  };
  
  const Profile = () => {
    const usuario = useDatosUsuario(); //Traemos los datos como un Hook personalizado y lo asignamos a usuario
    return <h2>Bienvenido, {usuario.nombre}!</h2>;
  };
  
// A veces son mas utiles los HOC pero en proyectos nuevos se tiende a usar Hooks personalizados 

// Los HOC usan un patron de programacion funcional llamado "currying" donde una función en lugar de recibir todos sus argumentos de una sola vez, los recibe de uno en uno y devuelve una nueva funcion hasta que recibe todos los argumentos necesarios
const sumar = (a) => (b) => a + b;

const sumar5 = sumar(5); // Ahora es una función que suma 5 a cualquier número
console.log(sumar5(10)); // 15
console.log(sumar5(3));  // 8

const sumar20 = sumar(20) 
const sumar10 = sumar(5)(5); //Otra manera de pasar los props
console.log(sumar10) //10
console.log(sumar20(8)) //28

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
const RedCard = conEstilosPersonalizados({ backgroundColor: "red", color: "white" })(Card);
const BlueCard = conEstilosPersonalizados({ backgroundColor: "blue", color: "white" })(Card);

// App.js

export default function App() {
  return (
    <div>
      <RedCard>Esta es una tarjeta roja</RedCard>
      <BlueCard>Esta es una tarjeta azul</BlueCard>
    </div>
  );
}

// Hay una libreria que se especializa en HOC con 'currying' llamada React Redux, su sintaxis es asi:
const connectWithStore = connect(selector, actions); //connect devuelve una nueva funcion (Un HOC)
const EnhancedComponent = connectWithStore(WrappedComponent); //Aplica la funcion al componente envuelto y devuelve una funcion mejorada (EnhancedComponent) 

// Al definir una HOC, como withMousePosition, ¿por qué la parte with del nombre de la HOC es una convención general recomendada por React
// Una convencion de HOC seria añadir la palabra with al inicio del nombre del HOC