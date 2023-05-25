import Ship from "./src/modules/Ship";
import Gameboard from "./src/modules/Gameboard";
import Player from "./src/modules/Player";
import Computer from "./src/modules/Computer";

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
  expect(gameboard.placeShip(4, [4,3], [1,3])).toBe(undefined);
  expect(gameboard.gameboardArray[4][3]).toMatchObject(new Ship(4));
  expect(gameboard.gameboardArray[3][3]).toMatchObject(new Ship(4));
  expect(gameboard.gameboardArray[2][3]).toMatchObject(new Ship(4));
  expect(gameboard.gameboardArray[1][3]).toMatchObject(new Ship(4));
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
  expect(gameboard.placeShip(3, [0,0], [0,2])).toBe(undefined);
  expect(gameboard.placeShip(3, [0,0], [0,2])).toBe('invalid location');
  expect(gameboard.placeShip(3, [0,0], [2,0])).toBe('invalid location');
});

test('receiveAttack happy', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(3, [0,0], [0,2]);
  const ship = gameboard.gameboardArray[0][0];
  gameboard.receiveAttack([1,1]);
  expect(ship.hits).toBe(0);
  expect(gameboard.gameboardArray[1][1]).toBe('missed');
  gameboard.receiveAttack([0,0]);
  expect(ship.hits).toBe(1);
  expect(gameboard.gameboardArray[0][0]).toBe('hit');
  gameboard.receiveAttack([0,1]);
  expect(ship.hits).toBe(2);
  expect(gameboard.gameboardArray[0][1]).toBe('hit');
  gameboard.receiveAttack([0,2]);
  expect(ship.hits).toBe(3);
  expect(gameboard.gameboardArray[0][2]).toBe('hit');
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
  expect(player.attack(computer, [0,0])).toStrictEqual(['missed', '0,0']);
  expect(player.attack(computer, [0,0])).toStrictEqual(['location already attacked', '0,0']);
  expect(player.attack(computer, [9,7])).toStrictEqual(['hit', '9,7']);
  expect(player.attack(computer, [9,6])).toStrictEqual(['sunk', '9,6']);
})
