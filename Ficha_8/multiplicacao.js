document.getElementById('multiplicacao').addEventListener('click', function () {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const resultado = n1 * n2;
    document.getElementById('resultado').innerText = `Resultado é: ${resultado}`;
});

document.getElementById('soma').addEventListener('click', function () {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const resultado = n1 + n2;
    document.getElementById('resultado').innerText = `Resultado é: ${resultado}`;
});