let redScore = 0;
let blueScore = 0;
let redScores = { percussion: 0, projection: 0, sol: 0, warning: 0 };
let blueScores = { percussion: 0, projection: 0, sol: 0, warning: 0 };
let redHistory = []; // Historique des actions pour Rouge
let blueHistory = []; // Historique des actions pour Bleu

// Fonction pour ajouter des points
function addScore(combatant, points) {
  if (combatant === 'red') {
    redScore += points;
    if (points === 1) {
      redScores.percussion++;
      redHistory.push({ type: 'percussion', points: 1 });
    } else if (points === 2) {
      redScores.projection++;
      redHistory.push({ type: 'projection', points: 2 });
    } else if (points >= 3 && points <= 6) {
      redScores.sol++;
      redHistory.push({ type: 'sol', points: points });
    }
    updateStats('red');
  } else if (combatant === 'blue') {
    blueScore += points;
    if (points === 1) {
      blueScores.percussion++;
      blueHistory.push({ type: 'percussion', points: 1 });
    } else if (points === 2) {
      blueScores.projection++;
      blueHistory.push({ type: 'projection', points: 2 });
    } else if (points >= 3 && points <= 6) {
      blueScores.sol++;
      blueHistory.push({ type: 'sol', points: points });
    }
    updateStats('blue');
  }
}

// Fonction pour ajouter un avertissement
function addWarning(combatant) {
  if (combatant === 'red') {
    redScore -= 2;
    redScores.warning++;
    redHistory.push({ type: 'warning', points: -2 });
    updateStats('red');
  } else if (combatant === 'blue') {
    blueScore -= 2;
    blueScores.warning++;
    blueHistory.push({ type: 'warning', points: -2 });
    updateStats('blue');
  }
}

// Fonction pour annuler le dernier point
function undoLastPoint(combatant) {
  if (combatant === 'red' && redHistory.length > 0) {
    let lastAction = redHistory.pop(); // Supprime la dernière action
    redScore -= lastAction.points; // Soustrait les points de la dernière action
    redScores[lastAction.type]--; // Réduit le compteur correspondant
    updateStats('red');
  } else if (combatant === 'blue' && blueHistory.length > 0) {
    let lastAction = blueHistory.pop(); // Supprime la dernière action
    blueScore -= lastAction.points; // Soustrait les points de la dernière action
    blueScores[lastAction.type]--; // Réduit le compteur correspondant
    updateStats('blue');
  }
}

// Fonction pour mettre à jour les statistiques
function updateStats(combatant) {
  if (combatant === 'red') {
    document.getElementById('score-red').textContent = `Score : ${redScore}`;
    document.getElementById('red-percussion-count').textContent = redScores.percussion;
    document.getElementById('red-projection-count').textContent = redScores.projection;
    document.getElementById('red-sol-count').textContent = redScores.sol;
    document.getElementById('red-warning-count').textContent = redScores.warning;
  } else if (combatant === 'blue') {
    document.getElementById('score-blue').textContent = `Score : ${blueScore}`;
    document.getElementById('blue-percussion-count').textContent = blueScores.percussion;
    document.getElementById('blue-projection-count').textContent = blueScores.projection;
    document.getElementById('blue-sol-count').textContent = blueScores.sol;
    document.getElementById('blue-warning-count').textContent = blueScores.warning;
  }
}

// Fonction pour réinitialiser les scores et statistiques
function resetScores() {
  // Réinitialiser les scores
  redScore = 0;
  blueScore = 0;

  // Réinitialiser les compteurs des actions
  redScores = { percussion: 0, projection: 0, sol: 0, warning: 0 };
  blueScores = { percussion: 0, projection: 0, sol: 0, warning: 0 };

  // Réinitialiser l'historique des actions
  redHistory = [];
  blueHistory = [];

  // Mettre à jour l'affichage
  updateStats('red');
  updateStats('blue');
}