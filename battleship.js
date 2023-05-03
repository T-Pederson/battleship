export class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    // Increments hits by 1 and checks if ship is sunk
    this.hits += 1;
  }

  isSunk() {
    // Checks length against hits and determines if ship is sunk
    if (this.hits === this.length) this.sunk = true;
    return this.sunk;
  }
}

export class Gameboard {
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
    // Allow gameboard to receive an attack at a given location
    const attackLocation = this.gameboardArray[coord[0]][coord[1]];

    // Check if location was already attacked
    this.attackedLocations.forEach((location) => {
      if (location[0] === coord[0] && location[1] === coord[1]) {
        return 'location already attacked';
      }
    });

    // If attacked location was a part of a ship, hit it and check if it sunk
    // if so add it to the sunk ships counter
    if (attackLocation !== undefined) {
      attackLocation.hit();
      if (attackLocation.isSunk() === true) this.sunkShips += 1;
    }

    this.attackedLocations.push(coord);
  }
}

export class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new Gameboard();
  }

  attack(target, coord) {
    target.gameboard.receiveAttack(coord);
  }
}

export class Computer extends Player {
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

// player.gameboard.placeShip(2, [9,7], [9,6]);
// player.gameboard.placeShip(3, [5,7], [7,7]);
// player.gameboard.placeShip(3, [3,7], [3,9]);
// player.gameboard.placeShip(4, [0,4], [0,7]);
// player.gameboard.placeShip(5, [4,0], [9,0]);
// computer.gameboard.placeShip(2, [9,7], [9,6]);
// computer.gameboard.placeShip(3, [5,7], [7,7]);
// computer.gameboard.placeShip(3, [3,7], [3,9]);
// computer.gameboard.placeShip(4, [0,4], [0,7]);
// computer.gameboard.placeShip(5, [4,0], [9,0]);
