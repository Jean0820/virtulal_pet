class Pet {
    constructor(name) {
      this.name = name;
      this.age = 0;
      this.hunger = 0;
      this.fitness = 10;
      this.alive = true;
      this.children = [];
    }
  
    get isAlive() {
      return this.alive;
    }
  
    growUp() {
      if (!this.alive) {
        throw new Error('Your pet is no longer alive :(');
      }
  
      this.age += 1;
      this.hunger += 5;
      this.fitness -= 3;
  
      if (this.hunger >= 10 || this.fitness <= 0 || this.age >= 30) {
        this.alive = false;
      }
    }
  
    walk() {
      if (!this.alive) {
        throw new Error('Your pet is no longer alive :(');
      }
  
      if ((this.fitness + 4) <= 10) {
        this.fitness += 4;
      } else {
        this.fitness = 10;
      }
    }
  
    feed() {
      if (!this.alive) {
        throw new Error('Your pet is no longer alive :(');
      }
  
      if ((this.hunger - 3) >= 0) {
        this.hunger -= 3;
      } else {
        this.hunger = 0;
      }
    }
  
    checkUp() {
      if (!this.alive) {
        return 'Your pet is no longer alive :(';
      }
  
      if (this.hunger >= 5 && this.fitness <= 3) {
        return 'I am hungry AND I need a walk';
      }
  
      if (this.hunger >= 5) {
        return 'I am hungry';
      }
  
      if (this.fitness <= 3) {
        return 'I need a walk';
      }
  
      return 'I feel great!';
    }

    adoptChild(child) {
        this.children.push(child);
      }
  }
  
  module.exports = Pet;
  