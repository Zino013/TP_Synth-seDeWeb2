document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        // Ajouter vraie validation
        alert("Connexion réussie (hardcodée) !");
        window.location.href = "../index.html";
    });
});

// Utilitaire hashPassword conservé
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}


  const users = JSON.parse(localStorage.getItem("users") || "{}");
  const hashed = await hashPassword(password);

  if (!users[username]) {
    afficherErreur("Nom d'utilisateur inconnu. Redirection vers la création de compte.");
        users[username] = hashed;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("joueurCourant", JSON.stringify({ nom: username }));
    localStorage.setItem("usager", username);
    setTimeout(() => {
      window.location.href = "html/creer.html";
    }, 2000);
  } else if (users[username] === hashed) {
        users[username] = hashed;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("joueurCourant", JSON.stringify({ nom: username }));
    localStorage.setItem("usager", username);
    window.location.href = "html/parametres.html";
  } else {
    afficherErreur("Mot de passe incorrect !");
    boutonConnexion.disabled = false;
  }
}


function afficherErreur(message) {
  const modalBody = document.querySelector("#erreurModal .modal-body");
  modalBody.textContent = message;
  const erreurModal = new bootstrap.Modal(document.getElementById("erreurModal"));
  erreurModal.show();
}


function afficherModaleCreation() {
  const creationModal = new bootstrap.Modal(document.getElementById("creationModal"));
  creationModal.show();
}
