function GestionnaireClavier(plan) {
  this.plan = plan;
  this.handler = this.gererTouche.bind(this);
}

GestionnaireClavier.prototype.activer = function () {
  document.addEventListener("keydown", this.handler);
  console.log("Clavier activé");
};

GestionnaireClavier.prototype.desactiver = function () {
  document.removeEventListener("keydown", this.handler);
  console.log("Clavier désactivé");
};

GestionnaireClavier.prototype.gererTouche = function (e) {
  console.log("Touche pressée :", e.key);

  const zone = document.getElementById("zoneTouche");
  if (zone) {
    zone.textContent = "La touche appuyée est : " + e.key;
  }

  // TODO: Compléter les actions associées aux touches
  // Vous pouvez utliser une structure comme switch
  if (e.key === "ArrowLeft") {
    // TODO: Déplacer le canon vers la gauche
  } else if (e.key === "ArrowRight") {
    // TODO: Déplacer le canon vers la droite
  } else if (e.key === "k" || e.key === "K") {
    // TODO: Diminuer l'angle du canon
  } else if (e.key === "l" || e.key === "L") {
    // TODO: Augmenter l'angle du canon
  } else if (e.key === "ArrowUp") {
    // TODO: Lancer un tir depuis le canon
  }
};

// TODO: (Optionnel) Gérer les touches K et L avec un autre gestionnaire si nécessaire