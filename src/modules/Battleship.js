import Player from './Player';
import Computer from './Computer';
import { markAttack, renderGameboard, displayOutcome } from './DOM_stuff';

export default class Battleship {
  constructor() {
    this.players = [new Player(), new Computer()]; // Player at index 0, computer at index 1
    this.render();
  }

  attackSequence(space) {
    // Player attack (update DOM accordingly)
    const coord = [parseInt(space.id.slice(1, 2), 10), parseInt(space.id.slice(3), 10)];
    const playerAttack = this.players[0].attack(this.players[1], coord);
    if (playerAttack[0] === 'location already attacked') return;
    markAttack(playerAttack, 'player');

    // Check if player won
    if (this.players[1].gameboard.sunkShips === 5) {
      displayOutcome('You Win!');
      return;
    }

    // Computer attack (update DOM accordingly)
    markAttack(this.players[1].attack(this.players[0]), 'computer');

    // Check if computer won
    if (this.players[0].gameboard.sunkShips === 5) {
      displayOutcome('You Lose.');
    }
  }

  render() {
    // Render players board, populating ships
    renderGameboard(this.players[0].gameboard.gameboardArray);
  }
}
