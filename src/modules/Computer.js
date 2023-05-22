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
    return `${x},${y}`;
  }

  checkValidAttackLocation(target, x, y) {
    // Checks if the location to be attacked hasn't already been attacked before
    let invalid = false;
    target.gameboard.attackedLocations.forEach((location) => {
      if (location[0] === x && location[1] === y) {
        invalid = true;
      }
    });
    return invalid;
  }

  placeShips() {
    // Randomly place computers ships
    for (let i = 0; i < 5; i += 1) {
      // Randomly decide orientation, 0 = vertical 1 = horizontal
      const orientation = Math.floor(Math.random() * 2);
      // Randomly generate start coordinate of ship
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      console.log(x, y);
      // Place ship according to length
      switch (i) {
        case 0:
          if (orientation === 0 && y > 0) {
            this.gameboard.placeShip(2, [x, y], [x, y - 1]);
          } else if (orientation === 0 && y === 0) {
            this.gameboard.placeShip(2, [x, y], [x, y + 1]);
          } else if (orientation === 1 && x > 0) {
            this.gameboard.placeShip(2, [x, y], [x - 1, y]);
          } else {
            this.gameboard.placeShip(2, [x, y], [x + 1, y]);
          }
          break;
        case 1:
          if (orientation === 0 && y > 1) {
            this.gameboard.placeShip(3, [x, y], [x, y - 2]);
          } else if (orientation === 0 && y <= 1) {
            this.gameboard.placeShip(3, [x, y], [x, y + 2]);
          } else if (orientation === 1 && x > 1) {
            this.gameboard.placeShip(3, [x, y], [x - 2, y]);
          } else {
            this.gameboard.placeShip(3, [x, y], [x + 2, y]);
          }
          break;
        case 2:
          if (orientation === 0 && y > 1) {
            this.gameboard.placeShip(3, [x, y], [x, y - 2]);
          } else if (orientation === 0 && y <= 1) {
            this.gameboard.placeShip(3, [x, y], [x, y + 2]);
          } else if (orientation === 1 && x > 1) {
            this.gameboard.placeShip(3, [x, y], [x - 2, y]);
          } else {
            this.gameboard.placeShip(3, [x, y], [x + 2, y]);
          }
          break;
        case 3:
          if (orientation === 0 && y > 2) {
            this.gameboard.placeShip(4, [x, y], [x, y - 3]);
          } else if (orientation === 0 && y <= 2) {
            this.gameboard.placeShip(4, [x, y], [x, y + 3]);
          } else if (orientation === 1 && x > 2) {
            this.gameboard.placeShip(4, [x, y], [x - 3, y]);
          } else {
            this.gameboard.placeShip(4, [x, y], [x + 3, y]);
          }
          break;
        case 4:
          if (orientation === 0 && y > 3) {
            this.gameboard.placeShip(5, [x, y], [x, y - 4]);
          } else if (orientation === 0 && y <= 3) {
            this.gameboard.placeShip(5, [x, y], [x, y + 4]);
          } else if (orientation === 1 && x > 3) {
            this.gameboard.placeShip(5, [x, y], [x - 4, y]);
          } else {
            this.gameboard.placeShip(5, [x, y], [x + 4, y]);
          }
          break;
        default:
        // do nothing
      }
    }
  }
}
