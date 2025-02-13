import { useState } from "react";

// Función auxiliar con tipado
const wait = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

// Tipado para la respuesta de `submit`
interface SubmitResponse {
  type: "success" | "error";
  message: string;
}

// Tipado para los datos del formulario
interface FormData {
  firstName: string;
}

// Hook personalizado con tipado
const useSubmit = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<SubmitResponse | null>(null);

  const submit = async (url: string, data: FormData): Promise<void> => {
    const random = Math.random();
    setLoading(true);
    
    try {
      await wait(2000);
      
      if (random < 0.5) {
        throw new Error("Something went wrong");
      }
      
      setResponse({
        type: "success",
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      });
    } catch (error) {
      setResponse({
        type: "error",
        message: "Something went wrong, please try again later!",
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
