import Ship from "./modules/Ship";
import Gameboard from "./modules/Gameboard";
import Player from "./modules/Player";
import Computer from "./modules/Computer";

test('Hit ship', () => {
  const ship = new Ship(3);
  ship.hit();
  expect(ship.hits).toBe(1);
});

test('Sink ship', () => {
  const ship = new Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test('initializeGameboard', () => {
  const gameboard = new Gameboard();
  expect(gameboard.initializeGameboard()[0][0]).toBe(undefined);
});

test('placeShip happy', () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShip(3, [0,0], [0,2])).toBe(undefined);
  expect(gameboard.gameboardArray[0][0]).toMatchObject(new Ship(3));
  expect(gameboard.gameboardArray[0][1]).toMatchObject(new Ship(3));
  expect(gameboard.gameboardArray[0][2]).toMatchObject(new Ship(3));
});

test('placeShip sad', () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShip(3, [-1,0], [0,2])).toBe('invalid location');
  expect(gameboard.placeShip(3, [0,-1], [0,2])).toBe('invalid location');
  expect(gameboard.placeShip(3, [0,0], [-1,2])).toBe('invalid location');
  expect(gameboard.placeShip(3, [0,0], [0,-1])).toBe('invalid location');
  expect(gameboard.placeShip(3, [10,0], [0,2])).toBe('invalid location');
  expect(gameboard.placeShip(3, [0,10], [0,2])).toBe('invalid location');
  expect(gameboard.placeShip(3, [0,0], [10,2])).toBe('invalid location');
  expect(gameboard.placeShip(3, [0,0], [0,10])).toBe('invalid location');
  expect(gameboard.placeShip(3, [0,0], [0,0])).toBe('invalid location');
  expect(gameboard.placeShip(3, [0,0], [1,2])).toBe('invalid location');
  expect(gameboard.placeShip(3, [0,0], [0,3])).toBe('invalid location');
});

test('receiveAttack happy', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(3, [0,0], [0,2]);
  gameboard.receiveAttack([1,1]);
  expect(gameboard.attackedLocations[0]).toStrictEqual([1,1]);
  gameboard.receiveAttack([0,0]);
  expect(gameboard.gameboardArray[0][0].hits).toBe(1);
  gameboard.receiveAttack([0,1]);
  expect(gameboard.gameboardArray[0][1].hits).toBe(2);
  gameboard.receiveAttack([0,2]);
  expect(gameboard.gameboardArray[0][2].hits).toBe(3);
  expect(gameboard.sunkShips).toBe(1);
})

test('receiveAttack sad', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(3, [0,0], [0,2]);
  gameboard.receiveAttack([1,1]);
  expect(gameboard.receiveAttack([1,1])).toBe('location already attacked');
})

test('Player.attack()', () => {
  const player = new Player('Tyson');
  const computer = new Computer('Computer');
  computer.gameboard.placeShip(2, [9,7], [9,6]);
  player.attack(computer, [0,0]);
  expect(computer.gameboard.attackedLocations[0]).toStrictEqual([0,0]);
})

test('Computer.attack()', () => {
  const player = new Player('Tyson');
  const computer = new Computer('Computer');
  player.gameboard.placeShip(2, [9,7], [9,6]);
  computer.attack(player);
  expect(player.gameboard.attackedLocations.length).toBe(1);
})
