import Player from './Player';

export default class Computer extends Player {
  attack(target) {
    // Make computer pick a random un-attacked coordinate to attack
    let x;
    let y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }
    while (this.checkValidAttackLocation(target, x, y));
    target.gameboard.receiveAttack([x, y]);
  }

  checkValidAttackLocation(target, x, y) {
    // Checks if the location to be attacked hasn't already been attacked before
    target.gameboard.attackedLocations.forEach((location) => {
      if (location[0] === x && location[1] === y) {
        return true;
      }
    });
    return false;
  }
}
