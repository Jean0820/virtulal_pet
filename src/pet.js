class Pet {
    constructor(name) {
        this.name = name;
        this.age = 0;
       
    }
    growUp() {
        this.age += 1;
    }
   
}
  

module.exports = Pet;