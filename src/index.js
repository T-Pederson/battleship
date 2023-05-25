import Battleship from './modules/Battleship';
import './style.css';

// Main gameplay loop function
function main() {
  const game = new Battleship();

  // Loop to allow player to place ships
  // ...

  // Add click event listeners that trigger attack sequences to all computer spaces
  for (const space of document.querySelectorAll('.computer_board div')) {
    space.addEventListener('click', () => game.attackSequence(space));
  }
}

main();
