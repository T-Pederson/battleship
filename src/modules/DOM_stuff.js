export function markAttack(target, player, computer) {
  const coord = [parseInt(target.id.slice(1, 2), 10), parseInt(target.id.slice(3), 10)];
  const attackResult = player.attack(computer, coord);
  if (attackResult === 'miss') {
    target.classList = 'missed';
  } else if (attackResult === 'hit') {
    target.classList = 'hit';
  }
}

export function renderGameboard() {
  // temp
}
