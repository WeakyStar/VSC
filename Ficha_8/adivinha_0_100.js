document.getElementById('verificar').addEventListener('click', function () {
    const numeroAleatorio = Math.floor(Math.random() * 101);
    const inputNumero = parseInt(document.getElementById('numero').value);

    if (inputNumero === numeroAleatorio) {
        alert('Parabéns! Você acertou!');
        document.getElementById('numero').disabled = true;
    } else if (inputNumero < numeroAleatorio) {
        alert('O número a ser adivinhado é maior.');
        document.getElementById('numero').value = '';
    } else {
        alert('O número a ser adivinhado é menor.');
        document.getElementById('numero').value = '';
    }
});
