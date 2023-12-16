let state = true;

document.getElementById('button').addEventListener('click', function () {
    alert(state ? 'verdadeiro' : 'falso');
    state = !state;
});
