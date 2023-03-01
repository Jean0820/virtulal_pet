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

  });
    
});









