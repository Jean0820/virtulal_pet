class Pet {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.fitness = 10;
        this.isAlive = true;
    }
    growUp() {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    }
    walk() {
        if ((this.fitness + 4) <= 10) {
            this.fitness += 4;
        } else {
            this.fitness = 10;
        }
    }
    feed() {
        if ((this.hunger - 3) >= 0) {
            this.hunger -= 3;
        } else {
            this.hunger = 0;
        }
    }
}
  

module.exports = Pet;