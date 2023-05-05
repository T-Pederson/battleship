export default class Ship {
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
