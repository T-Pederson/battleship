import Ship from './Ship';

export default class Gameboard {
  constructor() {
    this.gameboardArray = this.initializeGameboard();
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
      && Math.abs(start[0] - end[0]) === length - 1) === false
      && (start[0] === end[0] && start[1] !== end[1]
      && Math.abs(start[1] - end[1]) === length - 1) === false) return 'invalid location';

    // Make sure no ship is currently placed anywhere between the start and end points
    if (start[0] > end[0]) {
      for (let i = end[0]; i <= start[0]; i += 1) {
        if (this.gameboardArray[i][start[1]] !== undefined) {
          return 'invalid location';
        }
      }
    } else if (start[0] < end[0]) {
      for (let i = start[0]; i <= end[0]; i += 1) {
        if (this.gameboardArray[i][start[1]] !== undefined) {
          return 'invalid location';
        }
      }
    } else if (start[1] > end[1]) {
      for (let i = end[1]; i <= start[1]; i += 1) {
        if (this.gameboardArray[start[0]][i] !== undefined) {
          return 'invalid location';
        }
      }
    } else {
      for (let i = start[1]; i <= end[1]; i += 1) {
        if (this.gameboardArray[start[0]][i] !== undefined) {
          return 'invalid location';
        }
      }
    }

    // Create ship object and place references to it in gameboard array between start and end points
    const ship = new Ship(length);
    if (start[0] > end[0]) {
      for (let i = end[0]; i <= start[0]; i += 1) {
        this.gameboardArray[i][start[1]] = ship;
      }
    } else if (start[0] < end[0]) {
      for (let i = start[0]; i <= end[0]; i += 1) {
        this.gameboardArray[i][start[1]] = ship;
      }
    } else if (start[1] > end[1]) {
      for (let i = end[1]; i <= start[1]; i += 1) {
        this.gameboardArray[start[0]][i] = ship;
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

    // Location was already attacked
    if (typeof attackLocation === 'string') {
      return 'location already attacked';
    }

    // Location is free to attack but doesn't contain a ship
    if (attackLocation === undefined) {
      this.gameboardArray[coord[0]][coord[1]] = 'missed';
      return 'missed';
    }

    // Location is free to attack and contains a ship
    attackLocation.hit();
    this.gameboardArray[coord[0]][coord[1]] = 'hit';
    // if ship sunk add it to the sunk ships counter
    if (attackLocation.isSunk() === true) {
      this.sunkShips += 1;
      return 'sunk';
    }
    // Otherwise, ship is just hit
    return 'hit';
  }
}
