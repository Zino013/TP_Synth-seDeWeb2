document.addEventListener('DOMContentLoaded', function () {
    const zoneDeJeu = document.getElementById('zoneDeJeu');

    for (let i = 0; i < 3; i++) {
        const oiseau = document.createElement('div');
        oiseau.classList.add('oiseau');
        oiseau.style.width = '40px';
        oiseau.style.height = '40px';
        oiseau.style.backgroundColor = 'red';
        oiseau.style.position = 'absolute';
        oiseau.style.top = `${50 + i * 100}px`;
        oiseau.style.left = `50px`;
        zoneDeJeu.appendChild(oiseau);

        // Déplacement simple
        let direction = 1;
        setInterval(() => {
            let left = parseInt(oiseau.style.left);
            if (left > 550 || left < 0) direction *= -1;
            oiseau.style.left = (left + 5 * direction) + 'px';
        }, 100);
    }

    document.getElementById('tirer').addEventListener('click', function () {
        const tir = document.createElement('div');
        tir.style.width = '5px';
        tir.style.height = '20px';
        tir.style.backgroundColor = 'black';
        tir.style.position = 'absolute';
        tir.style.bottom = '0';
        tir.style.left = '300px';
        zoneDeJeu.appendChild(tir);

        let interval = setInterval(() => {
            tir.style.bottom = (parseInt(tir.style.bottom) + 10) + 'px';
            if (parseInt(tir.style.bottom) > 400) {
                tir.remove();
                clearInterval(interval);
            }
        }, 50);

        // TODO: Ajouter collision avec les oiseaux
    });
});

// TODO: Fonction à compléter pour activer le bouton Rejouer
function terminerPartie() {
  // TODO: Activer le bouton Rejouer ici en appelant finDuJeu()
}