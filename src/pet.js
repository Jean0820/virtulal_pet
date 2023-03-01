class Pet {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.fitness = 10;
        
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
    
}
  

module.exports = Pet;