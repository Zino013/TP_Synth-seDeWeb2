
function calculerCoordonnees(angle, baseX, baseY, longueur) {
  const radians = (angle - 90) * Math.PI / 180;
  const x = baseX + Math.cos(radians) * longueur;
  const y = baseY + Math.sin(radians) * longueur;
  return { x, y, radians };
}

function afficherTopScores() {
  const scores = JSON.parse(localStorage.getItem("topScores") || "[]");
  const div = document.getElementById("meilleursScores");
  if (div) {
    div.innerHTML = "<h3>Top 5 des scores</h3><ul>" +
      scores.map(score => `<li>${score}</li>`).join("") +
      "</ul>";
  }
}
