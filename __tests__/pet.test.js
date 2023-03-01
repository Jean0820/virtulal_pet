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
  
  
});









