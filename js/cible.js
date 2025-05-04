function Cible(parametres) {
  this.parametres = parametres || {};
  this.vitesse = parseFloat(this.parametres.vitesseOiseau) || 3;
  this.element = document.createElement("div");
  this.element.className = "cible";

  const img = document.createElement("img");
  img.src = "../images/oiseau.png";
  img.alt = "Oiseau";
  this.element.appendChild(img);

  this.element.style.left = Math.random() * 600 + "px";
  this.element.style.top = Math.random() * 200 + "px";
  this.dx = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? -1 : 1);
  this.dy = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? -1 : 1);
  this.zigzag = parametres.modeZigzag === "true";
  this.estTouche = false;
}

// TODO: Compléter le déplacement de la cible
Cible.prototype.deplacer = function () {
  if (this.zigzag) {
    // TODO: Implémenter le comportement de zigzag ici (calcul de offset et dx)
    // Indice : utiliser Math.sin(this.angle) * amplitude pour créer un mouvement oscillant
  }

  // TODO: Mettre à jour la position (style.left et style.top) en fonction de la vitesse
  // Exemple attendu : décaler this.element.style.left et top avec la vitesse
};