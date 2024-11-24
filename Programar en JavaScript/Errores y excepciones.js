// Tipos de errores comunes en JavaScript:
// 1. SyntaxError: Error de sintaxis. Ejemplo: uso incorrecto de palabras reservadas o errores de formato.
// 2. ReferenceError: Ocurre cuando se intenta acceder a una variable que no está definida.
// 3. TypeError: Error de tipo. Ejemplo: invocar algo que no es una función o acceder a una propiedad de algo que no es un objeto.
// 4. RangeError: Se produce cuando un valor no está dentro de un rango permitido. Ejemplo: tamaño incorrecto en un array.
// 5. EvalError: Relacionado con el uso incorrecto de `eval` (raro de encontrar).
// 6. URIError: Surge cuando hay un uso incorrecto de funciones de URI como `decodeURIComponent` o `encodeURI`.

function manejarErrores() {
    try {
      // Lanza un error de tipo TypeError para ilustrar el uso de throw
      throw new TypeError("Esto es un TypeError simulado.");// throw simula un error
    } catch (error) {
      // Detecta el tipo de error y muestra un mensaje personalizado
      if (error instanceof TypeError) {
        console.error("¡Se capturó un TypeError!", error.message);
      } else if (error instanceof ReferenceError) {
        console.error("¡Se capturó un ReferenceError!", error.message);
      } else {
        console.error("Se capturó otro tipo de error:", error.message);
      }
    } finally {
      // Se ejecuta siempre, independientemente de si hubo error o no
      console.log("Bloque finally ejecutado: limpieza de recursos, etc.");
    }
  }
  
  manejarErrores();
  