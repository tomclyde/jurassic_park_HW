const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('diplodocus', 'herbivore', 10);
    dinosaur3 = new Dinosaur('tricerotops', 'herbivore', 20);
    dinosaur4 = new Dinosaur('raptor', 'omnivore', 40);
    dinosaur5 = new Dinosaur('t-rex', 'carnivore', 45);
    park = new Park('Jurassic Park', 79.99, [dinosaur1, dinosaur2, dinosaur3]);
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 79.99);
  });

  it('should have a collection of dinosaurs', function () {
    assert.deepStrictEqual(park.dinosaurCollection, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur4);
    assert.deepStrictEqual(park.dinosaurCollection, [dinosaur1, dinosaur2, dinosaur3, dinosaur4]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(dinosaur2);
    assert.deepStrictEqual(park.dinosaurCollection, [dinosaur1, dinosaur3]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.mostVisitors();
    assert.strictEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur5);
    const actual = park.findSpecies('t-rex');
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur5]);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur5);
    park.removeSpecies('t-rex');
    assert.deepStrictEqual(park.dinosaurCollection, [dinosaur2, dinosaur3]);
  });

  it('total daily visitors', function () {
    const actual = park.totalDailyVisitors();
    assert.strictEqual(actual, 80);
  });

  it('total yearly visitors', function () {
    const actual = park.totalYearlyVisitors();
    assert.strictEqual(actual, 29200);
  });

  it('total yearly ticket sales', function () {
    const actual = park.totalYearlySales();
    assert.strictEqual(actual, 2335708);
  });

  it('diet types', function () {
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    const actual = park.dietTypes();
    assert.deepStrictEqual(actual, {carnivore: 2,omnivore: 1,herbivore: 2});
  });

});
