const Pet = require('../src/pet');

describe('Pet', () => {
  let pet;

  beforeEach(() => {
    pet = new Pet('Fido');
  });

  describe('constructor', () => {
    it('create a new Pet with a name property', () => {
      expect(pet.name).toBe('Fido');
    });

    it('create a new Pet with an age of 0', () => {
      expect(pet.age).toBe(0);
    });

    it('create a new Pet with a hunger of 0', () => {
      expect(pet.hunger).toBe(0);
    });

    it('create a new Pet with a fitness of 10', () => {
      expect(pet.fitness).toBe(10);
    });
  });

  describe('growUp', () => {
    it('increase the age by 1', () => {
      pet.growUp();
      expect(pet.age).toBe(1);
    });

    it('increase the hunger by 5', () => {
      pet.growUp();
      expect(pet.hunger).toBe(5);
    });

    it('decrease the fitness by 3', () => {
      pet.growUp();
      expect(pet.fitness).toBe(7);
    });
  });
    
  describe('walk', () => {
    it('increase fitness by 4', () => {
      pet.fitness = 4;
      pet.walk();
      expect(pet.fitness).toBe(8);
    });
  
    it('increase fitness to a maximum of 10', () => {
      pet.fitness = 8;
      pet.walk();
      expect(pet.fitness).toBe(10);
    });
  });
  
  describe('feed', () => {
    it('decrease hunger by 3', () => {
      pet.hunger = 6;
      pet.feed();
      expect(pet.hunger).toBe(3);
    });
  
    it('decrease hunger to a minimum of 0', () => {
      pet.hunger = 2;
      pet.feed();
      expect(pet.hunger).toBe(0);
    });
  });
  
  describe('checkUp', () => {
    it('return "I need a walk" if fitness is 3 or less', () => {
      pet.fitness = 3;
      expect(pet.checkUp()).toBe('I need a walk');
    });
  
    it('return "I am hungry" if hunger is 5 or more', () => {
      pet.hunger = 5;
      expect(pet.checkUp()).toBe('I am hungry');
    });
  
    it('return "I am hungry AND I need a walk" if fitness is 3 or less and hunger is 5 or more', () => {
      pet.fitness = 3;
      pet.hunger = 5;
      expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });
  
    it('return "I feel great!" if fitness is more than 3 and hunger is less than 5', () => {
      pet.fitness = 4;
      pet.hunger = 2;
      expect(pet.checkUp()).toBe('I feel great!');
    });
  });

  describe('Pet', () => {
    let parent;
  
    beforeEach(() => {
      parent = new Pet('Dave');
    });
  
    it('can have a baby', () => {
      parent.haveBaby('Amelia');
      expect(parent.children.length).toEqual(1);
      expect(parent.children[0].name).toEqual('Amelia');
    });
  });
  
  
});









