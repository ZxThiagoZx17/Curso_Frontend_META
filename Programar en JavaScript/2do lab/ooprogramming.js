// // Task 1: Code a Person class

// // Task 2: Code a Worker class

// // Task 3: Code an intern object, run methods
// function intern() {

// }

// // Task 4: Code a manager object, methods
// function manager() {
    
// }
// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    // Method to increase energy by 10
    sleep() {
        this.energy += 10;
    }

    // Method to decrease energy by 10
    doSomethingFun() {
        this.energy -= 10;
    }
}

// Task 2: Code a Worker class (subclass of Person)
class Worker extends Person {
    constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    // Method to increase xp by 10
    goToWork() {
        this.xp += 10;
    }
}

// Task 3: Code an intern object
function intern() {
    // Create a new intern object with specific attributes
    let intern = new Worker("Bob", 21, 110, 0, 10);
    // Run goToWork() method
    intern.goToWork();
    // Return the intern object
    return intern;
}

// Task 4: Code a manager object
function manager() {
    // Create a new manager object with specific attributes
    let manager = new Worker("Alice", 30, 120, 100, 30);
    // Run doSomethingFun() method
    manager.doSomethingFun();
    // Return the manager object
    return manager;
}

// Testing the functions
console.log(intern());   // Worker { name: 'Bob', age: 21, energy: 110, xp: 10, hourlyWage: 10 }
console.log(manager());  // Worker { name: 'Alice', age: 30, energy: 110, xp: 100, hourlyWage: 30 }
