const Park = function (name, ticketPrice, dinosaurCollection) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = dinosaurCollection;
}

module.exports = Park;

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurCollection.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur) {
  this.dinosaurCollection.splice(this.dinosaurCollection.indexOf(dinosaur),1);
}

Park.prototype.mostVisitors = function() {
  let dino;
  let dinoSelected = null;
  let visitorCount = 0;
  for (dino of this.dinosaurCollection) {
    if (dino.guestsAttractedPerDay > visitorCount){
      visitorCount = dino.guestsAttractedPerDay;
      dinoSelected = dino;
    }
  }
  return dinoSelected;
}


Park.prototype.findSpecies = function(species) {
  let dinoSpeciesGroup = []
  let dino;
  for (dino of this.dinosaurCollection) {
    if (dino.species === species){
      dinoSpeciesGroup.push(dino);
    }
  }
  return dinoSpeciesGroup;
}

Park.prototype.removeSpecies = function(species) {
  let dino;
  for (dino of this.dinosaurCollection) {
    if (dino.species === species){
      this.dinosaurCollection.splice(this.dinosaurCollection.indexOf(dino),1);
    }
  }
}

Park.prototype.totalDailyVisitors = function() {
  let dino;
  let total_visitors = 0;
  for (dino of this.dinosaurCollection) {
    total_visitors += dino.guestsAttractedPerDay;

  }
  return total_visitors;
}

Park.prototype.totalYearlyVisitors = function() {
  let total_visitors = 0;
  total_visitors = this.totalDailyVisitors() * 365;
  return total_visitors;
}

Park.prototype.totalYearlySales = function() {
  let total_amount = 0;
  total_amount = this.totalYearlyVisitors() * this.ticketPrice;
  return total_amount;
}

Park.prototype.dietTypes = function() {
  let dietBreakdown = {
  carnivore: 0,
  omnivore: 0,
  herbivore: 0
  };

  let total_carn = 0;
  let total_omni = 0;
  let total_herbi = 0;

  for (dino of this.dinosaurCollection) {
    if (dino.diet === 'carnivore'){
      total_carn += 1;
    }
    else if (dino.diet === 'omnivore') {
      total_omni += 1;
    }
    else if (dino.diet === 'herbivore') {
      total_herbi +=1;
    }

    }
    dietBreakdown.carnivore = total_carn;
    dietBreakdown.omnivore = total_omni;
    dietBreakdown.herbivore = total_herbi;
    return dietBreakdown;
}
