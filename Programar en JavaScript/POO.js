// Principios de POO
// 1.herencia
// 2.encapsulación
// 3.abstracción 
// 4.polimorfismo

//Ejemplo POO

class Animal { 
    /* ...class code here... */ 
    }

var myDog = Object.create(Animal) //Con Object.create() generamos instancias de objetos de nuestras clases
console.log (Animal)

var myCat = new Animal()//New sirve para crear objetos a partir de clases
console.log (Animal)

//Herencia
// Una superclase tiene caracterirsticas de varias subclases y estas heredan las caracteristicas basicas

// Hay una clase base de “Animal”. (Superclase)

// Hay otra clase, una subclase que hereda de “Animal”, y el nombre de esta clase es “Bird”. (Subclase)

// A continuación, hay otra clase, que hereda de “Bird”, y esta clase es “Eagle”. (Subclase)

class Animal { /* ...class code here... */ }
class Bird extends Animal { /* ...class code here... */ } //Ejemplo de como se heredan las clases con extends
class Eagle extends Bird { /* ...class code here... */ }

// Encapsulación
// Lo que se hace es "ocultar" el codigo en el sentido de que no tienen que saber cómo funciona mi código para “consumirlo”.

"abc".toUpperCase(); //Ejemplo de encapsulacion

// Abstracción
// Es basicamente interactuar con los objetos sin conocer su funcionamiento, centrandose en lo que hace el objeto No como lo hace

// un coche, que se puede poner en marcha sin necesidad de saber cómo funciona el motor. (Ejemplo)

//En POO una clase abstracta no se puede instanciar directamente pero sirve como superclase para otras subclases, en el ejemplo anterior, Animal vendria a ser una clase abstracta

// Polimorfismo
// Deriva del idioma griego, significa "Multiples formas" o "Algo que puede tomar muchas formas"

//Una puerta tiene un timbre. Podría decirse que el timbre es una propiedad del objeto puerta. Este timbre se puede tocar. ¿Cuándo tocaría alguien el timbre de la puerta? Obviamente, para que alguien se presente en la puerta.

// Ahora considere un timbre en una bicicleta. Una bicicleta tiene un timbre. Podría decirse que el timbre es una propiedad del objeto bicicleta. Este timbre también se puede tocar. Sin embargo, la razón, la intención y el resultado de que alguien toque el timbre de una bicicleta no son los mismos que tocar el timbre de una puerta.

const bicycle = {
    bell: function() {
        return "Ring, ring! Quitese cucho!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Abrame la puerta parcero!"
    }
}

// Basicamente es el mismo timbre pero se usa en diferentes contextos, para hacer que el codigo sea polimorfico en este caso:
function ringTheBell(cosa) {
    console.log(cosa.bell())
}

// ringTheBell() acepta "cosa" donde se pasa el objeto donde se usara el timbre, sea puerta o bicicleta, es la misma funcion pero dara resultados diferentes segun el contexto 

// El metodo concat() muestra como es una funcion polimorfica en estos casos:

"abc".concat("def"); // 'abcdef'
["abc"].concat(["def"]); // ['abc', 'def']

// Podemos ver que se usa en varios contextos y se comporta de manera diferente 

"abc"+"def";
["abc"] + ["def"]; // ["abcdef"] 

//Ejemplo de polimorfismo con clases aves
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

// Ejemplo mio

class Pc{
    usoCPU(){
        console.log("Proceso datos")
    }
}
class PcGamer {
    usoCPU() {
        super.usoCPU()
        console.log("Sirvo para juego")
    }
}