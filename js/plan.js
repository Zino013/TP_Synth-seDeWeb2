function Plan() {
  this.angle = 0;
  this.zoneJeu = document.getElementById("zoneJeu");
  this.rampe = document.getElementById("rampe");
  this.ligne = document.getElementById("ligneTir");
  this.angle = 90;
  this.tirs = [];
  this.cibles = [];
  this.parametres = ParametresJeu.charger();
  this.score = new Statistiques(this.parametres);
  this.clavier = new GestionnaireClavier(this);
  this.canon = new Canon(this.rampe, this.ligne, this.zoneJeu);
  this.angle = this.canon.angle;
  console.log('[Plan] Synchronisation angle avec canon:', this.angle);
this.duree = this.parametres.duree;
  this.minuteur = null;
  this.intervalDeplacement = null;
  this.intervalProgression = null;
}

Plan.prototype.initialiser = function () {
  this.zoneJeu.innerHTML = "";
  this.zoneJeu.appendChild(this.rampe);
  this.zoneJeu.appendChild(this.ligne);
  this.creerCibles(this.parametres.nbCibles);
  this.clavier.activer();
  this.score.initialiserAffichage();
  this.lancer();
};

Plan.prototype.lancer = function () {
  const barre = document.getElementById("progressionBarre");
  let tempsEcoule = 0;
  const total = this.duree;
  this.intervalProgression = setInterval(() => {
    tempsEcoule++;
    const pourcentageRestant = Math.max(0, 100 - (tempsEcoule / total) * 100);
    barre.style.width = pourcentageRestant + "%";
  }, 1000);
  this.minuteur = setTimeout(() => this.arreter(), this.duree * 1000);
  this.intervalDeplacement = setInterval(() => this.mettreAJour(), 30);
};

Plan.prototype.arreter = function () {
  clearTimeout(this.minuteur);
  clearInterval(this.intervalDeplacement);
  clearInterval(this.intervalProgression);
  this.clavier.desactiver();
  this.score.afficher();
  this.score.sauvegarderTopScores();
  this.score.enregistrerTop5();

  // TODO: Appeler terminerPartie() ici pour activer le bouton Rejouer après la fin du jeu.
};

Plan.prototype.creerCibles = function (nb = 1) {
  for (let i = 0; i < nb; i++) {
    const cible = new Cible(this.parametres);
    this.zoneJeu.appendChild(cible.element);
    this.cibles.push(cible);
  }
};

Plan.prototype.mettreAJour = function () {
  this.tirs = this.tirs.filter(tir => document.body.contains(tir.element));
  this.tirs.forEach(tir => tir.deplacer());

  this.cibles = this.cibles.filter(cible => {
    const doitGarder = !cible.estTouche && !cible.estHorsZone(this.zoneJeu);
    if (!doitGarder) {
      cible.element.remove();
    } else {
      cible.deplacer();
    }
    return doitGarder;
  });

  const manque = this.parametres.nbCibles - this.cibles.length;
  if (manque > 0) {
    this.creerCibles(manque);
  }

  this.detecterCollisions();
};

Plan.prototype.detecterCollisions = function () {
  this.tirs.forEach(tir => {
    this.cibles.forEach(cible => {
      if (!cible.estTouche && tir.detecterCollision(cible)) {
		  console.log("[Collision] Cible touchée :", cible);
        cible.disparaitre();
		tir.element.remove(); 
        this.score.majScore(true);
      }
    });
  });
};

Plan.prototype.tirerDepuisCanon = function () {
  if (this.tirs.length >= this.parametres.maxTirs) return;

  const tir = this.canon.tirer(this.angle);
  this.zoneJeu.appendChild(tir.element);
  this.tirs.push(tir);
  this.score.majScore(false);
};

Plan.prototype.mettreAJourAngle = function (delta) {
  this.angle += delta;
  this.canon.mettreAJourLigne(this.angle);
};