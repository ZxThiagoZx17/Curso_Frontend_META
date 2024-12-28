class Train_1{ //Toda clase siempre debe empezar con mayuscula
    constructor(color, luces){
        this.color = color;
        this.luces = luces;
    }
}

// Pasamos a crear una nueva instancia de train, podemos crear tantas como queramos
var myFirstTrain = new Train_1('Rojo', false);
console.log(myFirstTrain) //Train { color: 'Rojo', luces: false }

// Podemos agregar mas metodos a nuestra clase
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn; //Cambiara el valor almacenado 
    }
    lightsStatus() { //Informa el estado de las luces
        console.log('Lights prendidas?', this.lightsOn);
    }
    getSelf() { //Imprime todas las propiedades de la instancia
        console.log(this);
    }
    getPrototype() { //Registra el prototipo de la instancia
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var train2 = new Train('rojo', false);
var train3 = new Train('verde', false);
var train4 = new Train('azul', true);
train2.toggleLights(); // Prende las luces
train2.lightsStatus(); // Lights prendidas? true
train2.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype();