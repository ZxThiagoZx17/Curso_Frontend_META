// Hay varios enfoques para estilizar JSX de manera funcional como visual dentro de la APP

// Una es usando el atributo className en JSX que tengamos definido en un archivo CSS previamente importado al HTML con <link>

// Otra es con algunos estilos de linea muy parecido a como se hace en HTML, asi se haria en JSX:

    <h1 style={{color:"tomato", fontSize:"40px", fontWeight:"bold"}}>
    {props.heading}
    </h1>
// La unica diferencia en cuanto a CSS y HTML es que se pone dentro de {} y en casos como font-size se usa CamelCase fontSize

// Otra manera eficiente es guardarlo en una variable y pasarlo a la etiqueta asi:
    const styles = {
        color: "tomato",
        fontSize: "40px"
    };

    <h1 style={styles}>
    {props.heading}
    </h1>

    