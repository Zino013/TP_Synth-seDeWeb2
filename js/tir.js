function Tir(element) {
  console.log('[Tir] dx:', element.dataset.dx, 'dy:', element.dataset.dy);
  this.element = element;
  this.x = parseFloat(element.style.left);
  this.y = parseFloat(element.style.top);
  this.dx = parseFloat(element.dataset.dx);
  this.dy = parseFloat(element.dataset.dy);
}

// TODO: Compléter le déplacement du tir
Tir.prototype.deplacer = function () {
  // Avancer les coordonnées
  this.x += this.dx;
  this.y += this.dy;

  const zone = this.element.parentElement;

  // Vérifier les limites du jeu
  if (
    this.x < 0 || this.x > zone.offsetWidth ||
    this.y < 0 || this.y > zone.offsetHeight
  ) {
    this.element.remove();
    return;
  }

  // TODO: Appliquer les nouvelles coordonnées au tir (mettre à jour style.left et style.top)
  // Exemple attendu : this.element.style.left = this.x + "px";
  //                   this.element.style.top = this.y + "px";
}

// TODO: Compléter la détection de collision entre le tir et une cible
Tir.prototype.detecterCollision = function (cible) {
  // TODO: Implémenter la détection de collision avec getBoundingClientRect()
  // Retourner true si collision, false sinon.

  // À implémenter par l'étudiant
  return false; // Par défaut : aucune collision détectée
};