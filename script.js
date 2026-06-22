function verificarToken() {
    // El .trim() elimina los espacios al principio y al final
    const inputToken = document.getElementById('token-input').value.trim();
    const tokensPermitidos = ["USUARIO1","ADMIN2026","CAROLINA0808","JABON-CASTILLA"];

    if (tokensPermitidos.includes(inputToken)) {
        localStorage.setItem('auth', 'true');
        document.getElementById('overlay-bienvenida').style.display = 'none';
    } else {
        alert("Token incorrecto. Escribiste: '" + inputToken + "'");
    }
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('Service Worker registrado:', reg))
      .catch(err => console.log('Error al registrar:', err));
  });
}
