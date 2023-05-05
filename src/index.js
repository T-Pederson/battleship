import Player from './modules/Player';
import Computer from './modules/Computer';
import './style.css';

// Main gameplay loop function
function main() {
  const player = new Player('Tyson');
  const computer = new Computer('Computer');
  player.gameboard.placeShip(2, [9, 6], [9, 7]);
  player.gameboard.placeShip(3, [5, 4], [7, 4]);
  player.gameboard.placeShip(3, [3, 7], [3, 9]);
  player.gameboard.placeShip(4, [0, 4], [0, 7]);
  player.gameboard.placeShip(5, [5, 0], [9, 0]);
  computer.gameboard.placeShip(2, [9, 6], [9, 7]);
  computer.gameboard.placeShip(3, [5, 4], [7, 4]);
  computer.gameboard.placeShip(3, [3, 7], [3, 9]);
  computer.gameboard.placeShip(4, [0, 4], [0, 7]);
  computer.gameboard.placeShip(5, [5, 0], [9, 0]);

  for (const space of document.querySelectorAll('.computer_board div')) {
    space.addEventListener('click', () => {
      const coord = [parseInt(space.id.slice(1, 2), 10), parseInt(space.id.slice(3), 10)];
      const attackResult = player.attack(computer, coord);
      if (attackResult === 'miss') {
        space.classList = 'missed';
      } else if (attackResult === 'hit') {
        space.classList = 'hit';
      }
    });
  }
}

main();
