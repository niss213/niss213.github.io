// Récupération des boutons
const btnTel = document.getElementById("btnTel");
const btnPc = document.getElementById("btnPc");

// Redirection quand on clique sur un bouton
btnTel.addEventListener("click", () => {
  window.location.href = "Telephone/index.html";
});

btnPc.addEventListener("click", () => {
  window.location.href = "Ordinateur/index.html";
});
