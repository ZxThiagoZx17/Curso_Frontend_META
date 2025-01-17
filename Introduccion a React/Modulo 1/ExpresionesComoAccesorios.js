// En JS se le denomina expresion a fragmentos de codigo usados para producir un valor:

// Hay varios tipos de expresiones:
// Expresiones literales ---> Es un valor fijo en el codigo
42;          // Número literal
"Hola";      // Cadena literal
true;        // Booleano literal

// Expresiones Aritmeticas ------> Son operaciones matemáticas que se evalúan para producir un valor.
5 + 3;       // Suma, evalúa a 8
10 / 2;      // División, evalúa a 5
7 * (2 + 1); // Multiplicación con paréntesis, evalúa a 21

// Expresiones de asignacion -----> Se utilizan para asignar valores a variables. Una expresión de asignación también devuelve el valor asignado.
const x = 5;  // Asignación, evalúa a 5
let y = x + 2; // Asignación con operación, evalúa a 7

// Expresiones logicas --------> Estas expresiones evalúan valores booleanos (true o false) mediante operadores lógicos.
5 > 3;       // Mayor que, evalúa a true
10 === 10;   // Igualdad estricta, evalúa a true
false || true; // OR lógico, evalúa a true

// Expresiones de funcion ---------> Son bloques de código que se evalúan para devolver una función como valor. Pueden ser funciones declaradas o funciones flecha.
// Expresión de función normal
const sumar = function(a, b) {
  return a + b;
};

// Expresión de función flecha
const restar = (a, b) => a - b;

// Ambas son expresiones y devuelven una función como valor

// Expresiones condicionales (ternarias) ----------> Evalúan una condición y devuelven un valor basado en si esa condición es verdadera o falsa.
const esMayor = edad >= 18 ? "Mayor de edad" : "Menor de edad";

