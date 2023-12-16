const perguntas = document.querySelectorAll('.pergunta');
let pontos = 0;

perguntas.forEach((pergunta) => {
    const respostas = pergunta.querySelectorAll('.resposta');
    const mensagem = document.getElementById('mensagem');
    const resultado = document.getElementById('resultado');
    const pontuacao = document.getElementById('pontuacao');
    const replay = document.getElementById('replay');

    respostas.forEach((resposta) => {
        resposta.addEventListener('click', () => {
            const respostaSelecionada = resposta.getAttribute('data-resposta');
            const respostasErradas = pergunta.querySelectorAll('.resposta.errada');
            const respostaCerta = pergunta.querySelector('.resposta.certa');

            respostas.forEach((r) => r.style.pointerEvents = 'none');

            if (respostaSelecionada === 'certa') {
                mensagem.style.display = 'block';
                resultado.textContent = 'Resposta correta!';
                resultado.style.color = 'green';
                pontos += 5;
                pontuacao.textContent = `Pontuação: ${pontos}`;
                resposta.style.backgroundColor = 'lightgreen';
            } else {
                mensagem.style.display = 'block';
                resultado.textContent = 'Resposta errada! A resposta correta é destacada abaixo.';
                resultado.style.color = 'red';
                respostaCerta.style.backgroundColor = 'lightgreen';
                respostasErradas.forEach((r) => r.style.backgroundColor = 'lightcoral');
                if (pontos >= 2) {
                    pontos -= 2;
                } else {
                    pontos = 0;
                }
                pontuacao.textContent = `Pontuação: ${pontos}`;
            }

            replay.innerHTML = '<button onclick="location.reload()">Jogar Novamente</button>';
        });

        resposta.addEventListener('mouseover', () => {
            resposta.style.backgroundColor = 'lightgray';
        });

        resposta.addEventListener('mouseout', () => {
            resposta.style.backgroundColor = '';
        });
    });
});
