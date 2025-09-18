// Fonction pour ouvrir la page du manuel
function openBookPage(pageUrl) {
  window.location.href = pageUrl;
}

let deferredPrompt;
const installPrompt = document.getElementById('installPrompt');
const installBtn = document.getElementById('installBtn');
const dismissBtn = document.getElementById('dismissBtn');

// Événement déclenché par le navigateur avant l'installation
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();          // Empêche l'install automatique
  deferredPrompt = e;          // On garde l'événement pour plus tard
  installPrompt.style.display = 'block'; // Affiche la petite fenêtre
});

// Quand on clique sur "Ajouter"
installBtn.addEventListener('click', async () => {
  installPrompt.style.display = 'none';
  if (deferredPrompt) {
    deferredPrompt.prompt();   // Affiche le vrai prompt d'installation
    const choiceResult = await deferredPrompt.userChoice;
    deferredPrompt = null;     // On ne garde plus l'événement
    console.log('User choice:', choiceResult.outcome);
  }
});

// Quand on clique sur "Fermer"
dismissBtn.addEventListener('click', () => {
  installPrompt.style.display = 'none';
});
