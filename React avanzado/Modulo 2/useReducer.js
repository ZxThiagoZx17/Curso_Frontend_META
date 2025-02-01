// En el curso anterior se demostro el uso de useReducer() junto a su estructura.

// Realmente en casos con datos menos complejos, lo mejor es utilizar useState, si bien, useState funciona con estructuras de datos complejas como objetos, listas, tuplas, etc... lo mejor usarla con tipos de datos primitivos, como cadenas, números o booleanos.

// useReducer para matrices y objetos, sin embargo, si el objeto en cuestion es muy simple, useState nos servira

// Si mi objeto de estado tiene mas de 2 propiedades, lo mejor es usar useReducer() , su estructura la podemos ver en ejemplos anteriores

// Ahora pasamos a hablar de useRef() del cual tambien hablamos en una ocasion anterior, nos sirve para centrar o localizar objetos dentro del DOM REAL o DOM SUBYACENTE
// Basicamente nos devuelve un objeto con varias funciones, dentro de ellas, focus que nos sirve para centrarnos en ese objeto especificamente mediante la propiedad ref={} en JSX

