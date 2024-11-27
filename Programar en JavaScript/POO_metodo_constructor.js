class Train{ //Toda clase siempre debe empezar con mayuscula
    constructor(color, luces){
        this.color = color;
        this.luces = luces;
    }
}

// Pasamos a crear una nueva instancia de train, podemos crear tantas como queramos
var myFirstTrain = new Train('Rojo', false);
console.log(myFirstTrain) //Train { color: 'Rojo', luces: false }

// Podemos agregar mas metodos a nuestra clase
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}