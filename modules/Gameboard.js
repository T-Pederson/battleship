import Ship from './Ship';

export default class Gameboard {
  constructor() {
    this.gameboardArray = this.initializeGameboard();
    this.attackedLocations = [];
    this.sunkShips = 0;
  }

  initializeGameboard() {
    // Initializes a 10x10 2D array with undefined values (to later point to ship objects)
    const arr = [];
    for (let i = 0; i < 10; i += 1) arr.push(new Array(10));
    return arr;
  }

  placeShip(length, start, end) {
    // Create a ship of given length and place them in the gameboard array
    // Make sure ship isn't being placed out of bounds
    if (start[0] < 0 || start[0] > 9
      || start[1] < 0 || start[1] > 9
      || end[0] < 0 || end[0] > 9
      || end[1] < 0 || end[1] > 9) return 'invalid location';

    // Make sure start and end points are valid
    if ((start[0] !== end[0] && start[1] === end[1]
      && Math.abs(start[0] - end[0]) === length - 1)
      || (start[0] === end[0] && start[1] !== end[1]
      && Math.abs(start[1] - end[1]) === length - 1)) {}
    else return 'invalid location';

    // Create ship object and place references to it in gameboard array between start and end points
    const ship = new Ship(length);
    if (start[0] > end[0]) {
      for (let i = start[0]; i <= end[0]; i += 1) {
        this.gameboardArray[i][start[1]] = ship;
      }
    } else {
      for (let i = start[1]; i <= end[1]; i += 1) {
        this.gameboardArray[start[0]][i] = ship;
      }
    }
  }

  receiveAttack(coord) {
    // Find gameboard location where attack is targeting
    const attackLocation = this.gameboardArray[coord[0]][coord[1]];

    // Check if location was already attacked
    if (this.checkAttackedLocation(coord)) return 'location already attacked';

    // If attacked location was a part of a ship, hit it and check if it sunk
    if (attackLocation !== undefined) {
      attackLocation.hit();
      // if ship sunk add it to the sunk ships counter
      if (attackLocation.isSunk() === true) this.sunkShips += 1;
    }

    this.attackedLocations.push(coord);
  }

  checkAttackedLocation(coord) {
    // Returns true if location at coord was already attacked
    for (const location of this.attackedLocations) {
      if (location[0] === coord[0] && location[1] === coord[1]) return true;
    }
  }
}
