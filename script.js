let redScore = 0;
let blueScore = 0;
let redScores = { percussion: 0, projection: 0, sol: 0, warning: 0 };
let blueScores = { percussion: 0, projection: 0, sol: 0, warning: 0 };

function addScore(combatant, points) {
  if (combatant === 'red') {
    redScore += points;
    if (points === 1) {
      redScores.percussion++;
    } else if (points === 2) {
      redScores.projection++;
    } else if (points === 3 || points === 4 || points === 5 || points === 6) {
      redScores.sol++;
    }
    updateStats('red');
  } else if (combatant === 'blue') {
    blueScore += points;
    if (points === 1) {
      blueScores.percussion++;
    } else if (points === 2) {
      blueScores.projection++;
    } else if (points === 3 || points === 4 || points === 5 || points === 6) {
      blueScores.sol++;
    }
    updateStats('blue');
  }
}

function addWarning(combatant) {
  if (combatant === 'red') {
    redScores.warning++;
    updateStats('red');
  } else if (combatant === 'blue') {
    blueScores.warning++;
    updateStats('blue');
  }
}

function updateStats(combatant) {
  if (combatant === 'red') {
    document.getElementById('score-red').textContent = `Score : ${redScore}`;
    document.getElementById('red-percussion-count').textContent = redScores.percussion;
    document.getElementById('red-projection-count').textContent = redScores.projection;
    document.getElementById('red-sol-count').textContent = redScores.sol;
    document.getElementById('red-warning-count').textContent = redScores.warning;

    let totalRedScore = redScores.percussion + redScores.projection + redScores.sol;
    document.getElementById('red-percussion-percent').textContent = `${(redScores.percussion / totalRedScore * 100).toFixed(2)}%`;
    document.getElementById('red-projection-percent').textContent = `${(redScores.projection / totalRedScore * 100).toFixed(2)}%`;
    document.getElementById('red-sol-percent').textContent = `${(redScores.sol / totalRedScore * 100).toFixed(2)}%`;
    document.getElementById('red-warning-percent').textContent = `${(redScores.warning / totalRedScore * 100).toFixed(2)}%`;
  } else if (combatant === 'blue') {
    document.getElementById('score-blue').textContent = `Score : ${blueScore}`;
    document.getElementById('blue-percussion-count').textContent = blueScores.percussion;
    document.getElementById('blue-projection-count').textContent = blueScores.projection;
    document.getElementById('blue-sol-count').textContent = blueScores.sol;
    document.getElementById('blue-warning-count').textContent = blueScores.warning;

    let totalBlueScore = blueScores.percussion + blueScores.projection + blueScores.sol;
    document.getElementById('blue-percussion-percent').textContent = `${(blueScores.percussion / totalBlueScore * 100).toFixed(2)}%`;
    document.getElementById('blue-projection-percent').textContent = `${(blueScores.projection / totalBlueScore * 100).toFixed(2)}%`;
    document.getElementById('blue-sol-percent').textContent = `${(blueScores.sol / totalBlueScore * 100).toFixed(2)}%`;
    document.getElementById('blue-warning-percent').textContent = `${(blueScores.warning / totalBlueScore * 100).toFixed(2)}%`;
  }
}

function calculateWinner() {
  if (redScore > blueScore) {
    document.getElementById('winner').textContent = 'Vainqueur : Rouge';
  } else if (blueScore > redScore) {
    document.getElementById('winner').textContent = 'Vainqueur : Bleu';
  } else {
    document.getElementById('winner').textContent = 'Égalité';
  }
}

function resetScores() {
  redScore = 0;
  blueScore = 0;
  redScores = { percussion: 0, projection: 0, sol: 0, warning: 0 };
  blueScores = { percussion: 0, projection: 0, sol: 0, warning: 0 };

  document.getElementById('score-red').textContent = `Score : ${redScore}`;
  document.getElementById('score-blue').textContent = `Score : ${blueScore}`;
  document.getElementById('red-percussion-count').textContent = 0;
  document.getElementById('red-projection-count').textContent = 0;
  document.getElementById('red-sol-count').textContent = 0;
  document.getElementById('red-warning-count').textContent = 0;
  document.getElementById('blue-percussion-count').textContent = 0;
  document.getElementById('blue-projection-count').textContent = 0;
  document.getElementById('blue-sol-count').textContent = 0;
  document.getElementById('blue-warning-count').textContent = 0;

  document.getElementById('red-percussion-percent').textContent = '0%';
  document.getElementById('red-projection-percent').textContent = '0%';
  document.getElementById('red-sol-percent').textContent = '0%';
  document.getElementById('red-warning-percent').textContent = '0%';
  document.getElementById('blue-percussion-percent').textContent = '0%';
  document.getElementById('blue-projection-percent').textContent = '0%';
  document.getElementById('blue-sol-percent').textContent = '0%';
  document.getElementById('blue-warning-percent').textContent = '0%';
}