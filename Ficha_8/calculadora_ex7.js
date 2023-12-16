function validarCampos(n1, n2) {
    if (n1 === '' || n2 === '') {
        alert('Por favor, preencha ambos os campos.');
        return false;
    }

    if (n2 === '0') {
        alert('Valor zero não pode ser utilizado na divisão.');
        return false;
    }

    if (!/^\d+(\.\d+)?$/.test(n1) || !/^\d+(\.\d+)?$/.test(n2)) {
        alert('Por favor, insira valores numéricos válidos.');
        return false;
    }

    return true;
}

document.getElementById('soma').addEventListener('click', function () {
    const n1 = document.getElementById('n1').value.trim();
    const n2 = document.getElementById('n2').value.trim();

    if (validarCampos(n1, n2)) {
        const resultado = parseFloat(n1) + parseFloat(n2);
        document.getElementById('resultado').innerText = `O Resultado é: ${resultado}`;
    }
});



document.getElementById('multiplicacao').addEventListener('click', function () {
    const n1 = document.getElementById('n1').value.trim();
    const n2 = document.getElementById('n2').value.trim();

    if (validarCampos(n1, n2)) {
        const resultado = parseFloat(n1) * parseFloat(n2);
        document.getElementById('resultado').innerText = `O Resultado é: ${resultado}`;
    }
});



document.getElementById('divisao').addEventListener('click', function () {
    const n1 = document.getElementById('n1').value.trim();
    const n2 = document.getElementById('n2').value.trim();

    if (validarCampos(n1, n2)) {
        const resultado = parseFloat(n1) / parseFloat(n2);
        document.getElementById('resultado').innerText = `O Resultado é: ${resultado}`;
    }
});
