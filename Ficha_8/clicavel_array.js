let conta = 0;
const dia_da_semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

document.getElementById('button').addEventListener('click', function () {
    alert(dia_da_semana[conta]);
    conta = (conta + 1) % 7;
});
