import Player from './Player';

export default class Computer extends Player {
  // Uncomment this if/when I allow players to place their own ships
  // constructor() {
  //   super();
  //   this.placeShips();
  // }

  attack(target) {
    // Make computer pick a random un-attacked coordinate to attack
    let x;
    let y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }
    while (typeof target.gameboard.gameboardArray[x][y] === 'string');
    return [target.gameboard.receiveAttack([x, y]), `${x},${y}`];
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
    // Randomly place 5 ships
    for (let i = 0; i < 5; i += 1) {
      let placed = false;
      switch (i) {
        case 0:
          while (placed === false) {
            // Randomly decide orientation, 0 = vertical 1 = horizontal
            const orientation = Math.floor(Math.random() * 2);
            // Randomly generate start coordinate of ship
            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * 10);
            if (orientation === 0 && y > 0) {
              if (this.gameboard.placeShip(2, [x, y], [x, y - 1]) !== 'invalid location') {
                placed = true;
              }
            } else if (orientation === 0 && y === 0) {
              if (this.gameboard.placeShip(2, [x, y], [x, y + 1]) !== 'invalid location') {
                placed = true;
              }
            } else if (orientation === 1 && x > 0) {
              if (this.gameboard.placeShip(2, [x, y], [x - 1, y]) !== 'invalid location') {
                placed = true;
              }
            } else if (orientation === 1 && x === 0) {
              if (this.gameboard.placeShip(2, [x, y], [x + 1, y]) !== 'invalid location') {
                placed = true;
              }
            }
          }
          break;
        case 1:
          while (placed === false) {
            // Randomly decide orientation, 0 = vertical 1 = horizontal
            const orientation = Math.floor(Math.random() * 2);
            // Randomly generate start coordinate of ship
            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * 10);
            if (orientation === 0 && y > 1) {
              if (this.gameboard.placeShip(3, [x, y], [x, y - 2]) !== 'invalid location') {
                placed = true;
              }
            } else if (orientation === 0 && y <= 1) {
              if (this.gameboard.placeShip(3, [x, y], [x, y + 2]) !== 'invalid location') {
                placed = true;
              }
            } else if (orientation === 1 && x > 1) {
              if (this.gameboard.placeShip(3, [x, y], [x - 2, y]) !== 'invalid location') {
                placed = true;
              }
            } else if (orientation === 1 && x <= 1) {
              if (this.gameboard.placeShip(3, [x, y], [x + 2, y]) !== 'invalid location') {
                placed = true;
              }
            }
          }
          break;
        case 2:
          while (placed === false) {
            // Randomly decide orientation, 0 = vertical 1 = horizontal
            const orientation = Math.floor(Math.random() * 2);
            // Randomly generate start coordinate of ship
            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * 10);
            if (orientation === 0 && y > 1) {
              if (this.gameboard.placeShip(3, [x, y], [x, y - 2]) !== 'invalid location') {
                placed = true;
              }
            } else if (orientation === 0 && y <= 1) {
              if (this.gameboard.placeShip(3, [x, y], [x, y + 2]) !== 'invalid location') {
                placed = true;
              }
            } else if (orientation === 1 && x > 1) {
              if (this.gameboard.placeShip(3, [x, y], [x - 2, y]) !== 'invalid location') {
                placed = true;
              }
            } else if (orientation === 1 && x <= 1) {
              if (this.gameboard.placeShip(3, [x, y], [x + 2, y]) !== 'invalid location') {
                placed = true;
              }
            }
          }
          break;
        case 3:
          while (placed === false) {
            // Randomly decide orientation, 0 = vertical 1 = horizontal
            const orientation = Math.floor(Math.random() * 2);
            // Randomly generate start coordinate of ship
            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * 10);
            if (orientation === 0 && y > 2) {
              if (this.gameboard.placeShip(4, [x, y], [x, y - 3]) !== 'invalid location') {
                placed = true;
              }
            } else if (orientation === 0 && y <= 2) {
              if (this.gameboard.placeShip(4, [x, y], [x, y + 3]) !== 'invalid location') {
                placed = true;
              }
            } else if (orientation === 1 && x > 2) {
              if (this.gameboard.placeShip(4, [x, y], [x - 3, y]) !== 'invalid location') {
                placed = true;
              }
            } else if (orientation === 1 && x <= 2) {
              if (this.gameboard.placeShip(4, [x, y], [x + 3, y]) !== 'invalid location') {
                placed = true;
              }
            }
          }
          break;
        case 4:
          while (placed === false) {
            // Randomly decide orientation, 0 = vertical 1 = horizontal
            const orientation = Math.floor(Math.random() * 2);
            // Randomly generate start coordinate of ship
            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * 10);
            if (orientation === 0 && y > 3) {
              if (this.gameboard.placeShip(5, [x, y], [x, y - 4]) !== 'invalid location') {
                placed = true;
              }
            } else if (orientation === 0 && y <= 3) {
              if (this.gameboard.placeShip(5, [x, y], [x, y + 4]) !== 'invalid location') {
                placed = true;
              }
            } else if (orientation === 1 && x > 3) {
              if (this.gameboard.placeShip(5, [x, y], [x - 4, y]) !== 'invalid location') {
                placed = true;
              }
            } else if (orientation === 1 && x <= 3) {
              if (this.gameboard.placeShip(5, [x, y], [x + 4, y]) !== 'invalid location') {
                placed = true;
              }
            }
          }
          break;
        default:
        // do nothing
      }
    }
  }
}
