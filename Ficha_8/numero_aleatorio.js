document.getElementById('verificar').addEventListener('click', function () {
    const numeroAleatorio = Math.floor(Math.random() * 11);
    const inputNumero = document.getElementById('numero');
    const numeroUsuario = parseInt(inputNumero.value);

    if (numeroUsuario === numeroAleatorio) {
        alert('Número certo!');
        inputNumero.disabled = true;
    } else {
        alert('Número incorreto!.');
        inputNumero.value = '';
    }
});
