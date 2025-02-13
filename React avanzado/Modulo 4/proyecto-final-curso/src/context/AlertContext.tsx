import { createContext, useContext, useState, ReactNode } from "react";
// "En estructuras de datos más complejas como listas u objetos, es necesario crear una interface"
// En datos simples se puede tipar ahi mismo asi:
// const mensaje: string = "Hola mundo";

// Los <> se usan cuando tipas genéricos o estados con useState.


// Definimos la estructura del estado
interface AlertState {
    isOpen: boolean;
    type: "success" | "error"; // Solo puede ser "success" o "error"
    message: string;
}

// Definimos la estructura del contexto
interface AlertContextType extends AlertState {
    // El tipo de dato antes de => hace referencia al tipo de dato que devuelve la funcion
    // Si la función no devuelve nada, se usa void
    onOpen: (type: "success" | "error", message: string) => void;
    onClose: () => void;
}

// Creamos el contexto con un valor inicial 'undefined'
const AlertContext = createContext<AlertContextType | undefined>(undefined);

// Definimos los props del proveedor (para recibir `children`)
interface AlertProviderProps {
    children: ReactNode;
}

// Definimos el proveedor del contexto
export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
    const [state, setState] = useState<AlertState>({
      isOpen: false,
      type: "success",
      message: "",
    });

    return (
        <AlertContext.Provider
          value={{
            ...state,
            onOpen: (type, message) => setState({ isOpen: true, type, message }),
            onClose: () => setState({ isOpen: false, type: "success", message: "" }),
         }}
        >
            {children}
        </AlertContext.Provider>
    );
};

// Hook para acceder al contexto
// Esta funcion no es necesario tiparla porque hereda el tipado de AlertContext
export const useAlertContext = () => {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error("useAlertContext debe usarse dentro de un AlertProvider");
    }
    return context;
};
