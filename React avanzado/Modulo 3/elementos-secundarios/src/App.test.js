import { render, screen, fireEvent } from '@testing-library/react';
import FormularioCalificacion from './components/FormularioCalificacion';
import App from './App';

// Test por defecto modificado 
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Link para datos abiertos');
  expect(linkElement).toBeInTheDocument();
});

// Tests Formulario

//Se encarga de revisar que el formulario se renderice correctamente
test("Renderiza correctamente el formulario", () => {
  render(<FormularioCalificacion />);
  
  expect(screen.getByText("Tu Opinion es importante!!")).toBeInTheDocument();
  // /Puntuacion:/ es una expresion regular que le dice a Testing Library que busque cualquier texto que empiece con "Puntuacion:" sin contar lo que sigue
  expect(screen.getByLabelText(/Puntuacion:/)).toBeInTheDocument();
  // expect(screen.getByPlaceholderText(/Opinión\/comentarios opcionales/i)).toBeInTheDocument();
});

// Se encarga de simular el envio de una respuesta al formulario
test("Simula el envío del formulario", () => {
  const mockSubmit = jest.fn(); // Simula la función onSubmit
  render(<FormularioCalificacion onSubmit={mockSubmit} />);

  fireEvent.change(screen.getByLabelText(/Puntuacion:/), { target: { value: 3 } });
  fireEvent.change(screen.getByLabelText("Comentarios"), { target: { value: "Muy mala experiencia" } });
  
  // /i es una expresion regular que ignora mayusculas y minusculas 
  fireEvent.click(screen.getByRole("button", { name: /subir/i }));

  expect(mockSubmit).toHaveBeenCalledWith({ puntuacion: "3", comentario: "Muy mala experiencia" });
});