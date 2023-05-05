import Gameboard from './Gameboard';

export default class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new Gameboard();
  }

  attack(target, coord) {
    target.gameboard.receiveAttack(coord);
  }
}
