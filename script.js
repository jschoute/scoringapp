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
  let totalActions;
  let percCount, projCount, solCount, warnCount;

  if (combatant === 'red') {
    totalActions = redScores.percussion + redScores.projection + redScores.sol + redScores.warning;
    percCount = redScores.percussion;
    projCount = redScores.projection;
    solCount = redScores.sol;
    warnCount = redScores.warning;

    // Mettre à jour les éléments HTML avec les valeurs
    document.getElementById('score-red').textContent = `Score : ${redScore}`;
    document.getElementById('red-percussion-count').textContent = percCount;
    document.getElementById('red-projection-count').textContent = projCount;
    document.getElementById('red-sol-count').textContent = solCount;
    document.getElementById('red-warning-count').textContent = warnCount;

    // Calculer les pourcentages
    document.getElementById('red-percussion-percent').textContent = totalActions > 0 ? ((percCount / totalActions) * 100).toFixed(1) + "%" : "0%";
    document.getElementById('red-projection-percent').textContent = totalActions > 0 ? ((projCount / totalActions) * 100).toFixed(1) + "%" : "0%";
    document.getElementById('red-sol-percent').textContent = totalActions > 0 ? ((solCount / totalActions) * 100).toFixed(1) + "%" : "0%";
    document.getElementById('red-warning-percent').textContent = totalActions > 0 ? ((warnCount / totalActions) * 100).toFixed(1) + "%" : "0%";
    
  } else if (combatant === 'blue') {
    totalActions = blueScores.percussion + blueScores.projection + blueScores.sol + blueScores.warning;
    percCount = blueScores.percussion;
    projCount = blueScores.projection;
    solCount = blueScores.sol;
    warnCount = blueScores.warning;

    // Mettre à jour les éléments HTML avec les valeurs
    document.getElementById('score-blue').textContent = `Score : ${blueScore}`;
    document.getElementById('blue-percussion-count').textContent = percCount;
    document.getElementById('blue-projection-count').textContent = projCount;
    document.getElementById('blue-sol-count').textContent = solCount;
    document.getElementById('blue-warning-count').textContent = warnCount;

    // Calculer les pourcentages
    document.getElementById('blue-percussion-percent').textContent = totalActions > 0 ? ((percCount / totalActions) * 100).toFixed(1) + "%" : "0%";
    document.getElementById('blue-projection-percent').textContent = totalActions > 0 ? ((projCount / totalActions) * 100).toFixed(1) + "%" : "0%";
    document.getElementById('blue-sol-percent').textContent = totalActions > 0 ? ((solCount / totalActions) * 100).toFixed(1) + "%" : "0%";
    document.getElementById('blue-warning-percent').textContent = totalActions > 0 ? ((warnCount / totalActions) * 100).toFixed(1) + "%" : "0%";
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