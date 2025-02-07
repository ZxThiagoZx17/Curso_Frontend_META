export function Boton({type, children, ...botonProps}) {
    const className = type === 'primary' ? 'primary' : 'secondary';
    return(
        <button className={`Button ${className}`} {...botonProps}>
            {children}
        </button>
    );
};

export function BotonLoging({type, children, ...botonProps}) {
    return(
        <Boton
        type="secondary"
        {...botonProps}
        onClick={() => alert("Iniciando sesion")}
        >
            {children}
        </Boton>
    );
};
