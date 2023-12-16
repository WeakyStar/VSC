let dia = 0;
const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

document.getElementById('button').addEventListener('click', function () {
    if (dia === 7) {
        dia = 0;
    }

    alert(diasDaSemana[dia]);
    dia++;
});
