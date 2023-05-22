import Player from './modules/Player';
import Computer from './modules/Computer';
import './style.css';

// Main gameplay loop function
function main() {
  let gameOver = false;
  const player = new Player('Tyson');
  const computer = new Computer('Computer');
  computer.placeShips();
  player.gameboard.placeShip(2, [9, 6], [9, 7]);
  player.gameboard.placeShip(3, [5, 4], [7, 4]);
  player.gameboard.placeShip(3, [3, 7], [3, 9]);
  player.gameboard.placeShip(4, [0, 4], [0, 7]);
  player.gameboard.placeShip(5, [5, 0], [9, 0]);

  // Loop to allow player to place ships

  // Add click event listeners that trigger attack sequences to all computer spaces
  for (const space of document.querySelectorAll('.computer_board div')) {
    space.addEventListener('click', () => {
      if (gameOver === true) return;
      // Check if space has already been attacked
      if (space.classList[0] !== 'not_attacked') {
        document.querySelector('h3').innerText = 'Space already attacked!';
        return;
      }
      // Player attack
      const coord = [parseInt(space.id.slice(1, 2), 10), parseInt(space.id.slice(3), 10)];
      const attackResult = player.attack(computer, coord);
      if (attackResult === 'miss') {
        space.classList = 'missed';
        document.querySelector('h3').innerText = 'Miss!';
      } else if (attackResult === 'hit') {
        space.classList = 'hit';
        document.querySelector('h3').innerText = 'Hit!';
      }
      // Check if player won
      if (computer.gameboard.sunkShips === 5) {
        document.querySelector('h3').innerText = 'You Win!';
        gameOver = true;
        return;
      }
      // Computer attack
      const computerAttackResult = computer.attack(player);
      const playerSpace = (document.getElementById(`p${computerAttackResult}`));
      if (playerSpace.classList[0] === 'ship') {
        playerSpace.classList = 'hit';
      } else {
        playerSpace.classList = 'missed';
      }
      // Check if computer won
      if (player.gameboard.sunkShips === 5) {
        document.querySelector('h3').innerText = 'You Lose.';
        gameOver = true;
      }
    });
  }
}

main();
