// Fonction redirection manuel
function openBookPage(pageUrl) {
  window.location.href = pageUrl;
}

// Gestion popup installation PC
let deferredPrompt;
const installPrompt = document.getElementById('installPrompt');
const installBtn = document.getElementById('installBtn');
const dismissBtn = document.getElementById('dismissBtn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault(); // empêche le prompt automatique
  deferredPrompt = e;
  installPrompt.style.display = 'block'; // montre popup
});

installBtn.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt(); // montre le vrai prompt PWA
    const choiceResult = await deferredPrompt.userChoice;
    console.log('User choice:', choiceResult.outcome);
    deferredPrompt = null;
    installPrompt.style.display = 'none';
  }
});

dismissBtn.addEventListener('click', () => {
  installPrompt.style.display = 'none';
});
