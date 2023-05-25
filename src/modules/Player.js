import Gameboard from './Gameboard';

export default class Player {
  constructor() {
    this.gameboard = new Gameboard();
    this.placeShips();
  }

  attack(target, coord) {
    return [target.gameboard.receiveAttack(coord), `${coord[0]},${coord[1]}`];
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
