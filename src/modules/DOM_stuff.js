export function markAttack(attackResult, attackingPlayer) {
  // Update the space being attacked according to the result of the attack
  if (attackingPlayer === 'computer') {
    // Update Computer's space
    const space = (document.getElementById(`p${attackResult[1]}`));
    space.classList = attackResult[0];
  } else {
    // Update Player's space
    const space = (document.getElementById(`c${attackResult[1]}`));
    space.classList = attackResult[0];
    document.querySelector('h3').innerText = attackResult[0];
  }
}

export function renderGameboard(gameboardArray) {
  // Render the player's gameboard, displaying ships where required
  for (let y = 0; y <= 9; y += 1) {
    for (let x = 0; x <= 9; x += 1) {
      const space = document.getElementById(`p${x},${y}`);
      if (gameboardArray[x][y] === undefined) {
        space.classList = 'not_attacked';
      } else {
        space.classList = 'ship';
      }
    }
  }
}

export function displayOutcome(outcome) {
  // Update bottom text with outcome of game
  document.querySelector('h3').innerText = outcome;
  // Remove all event listeners from computers board
  for (const space of document.querySelectorAll('.computer_board div')) {
    const newSpace = space.cloneNode(true);
    space.parentNode.replaceChild(newSpace, space);
  }
}
