import { render, screen, fireEvent } from "@testing-library/react";
import Boton, {ComponenteTest} from "../components/ComponenteTest";

//Test con un mensaje de texto
// Render() Renderiza el componente en un entorno de prueba.
// screen.getByText(): Busca un elemento con el texto especificado.
// toBeInTheDocument(): Verifica que el elemento esté en el DOM.
test("Muestra el mensaje correctamente", () => {
  render(<ComponenteTest mensaje="Hola React" />);
  expect(screen.getByText("Hola React")).toBeInTheDocument();
});

// Test con un evento(Dar click, cambios en inputs) usan fireEvent o userEvent
// jest.fn(): Crea una función simulada.
// fireEvent.click(): Simula un clic.
// toHaveBeenCalledTimes(1): Verifica que se llamó una vez.
test("Ejecuta la funcion al hacer click", () => {
    const mockFn = jest.fn();
    render(<Boton onClick={mockFn} />);

    fireEvent.click(screen.getByText("Haz click"));
    expect(mockFn).toHaveBeenCalledTimes(1);
})