
function Canon(elementRampe, elementLigne, zoneJeu) {
  this.angle = 0;
  this.rampe = elementRampe;
  this.ligne = elementLigne;
  this.zoneJeu = zoneJeu;
  this.mettreAJourLigne();
}

Canon.prototype.deplacerGauche = function () {
  this.rampe.style.left = this.rampe.offsetLeft - 10 + "px";
  this.mettreAJourLigne();
};

Canon.prototype.deplacerDroite = function () {
  this.rampe.style.left = this.rampe.offsetLeft + 10 + "px";
  this.mettreAJourLigne();
};

Canon.prototype.mettreAJourLigne = function () {
  console.log('[Canon] Angle ligne bleue (mettreAJourLigne):', this.angle);
  const rampeX = this.rampe.offsetLeft + this.rampe.offsetWidth / 2;
  const ligneWidth = this.ligne.offsetWidth;
  const angle = this.angle;
  this.ligne.style.left = (rampeX - ligneWidth / 2) + "px";
  this.ligne.style.transform = `rotate(${angle}deg)`;
};

Canon.prototype.tirer = function (angle) {
  if (typeof angle !== 'number') angle = this.angle;
  console.log('[Canon] Tir lancé avec angle:', angle);
  const baseX = this.rampe.offsetLeft + this.rampe.offsetWidth / 2;
  const baseY = this.zoneJeu.offsetHeight - this.rampe.offsetHeight;
  const { x, y, radians } = calculerCoordonnees(angle, baseX, baseY, 40);

  const balle = document.createElement("div");
  balle.className = "tir";
  balle.style.left = x + "px";
  balle.style.top = y + "px";
  balle.dataset.dx = Math.cos(radians) * 8;
  balle.dataset.dy = Math.sin(radians) * 8;

  return new Tir(balle);
};
