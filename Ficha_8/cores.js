const cor1 = document.getElementById('cor1');
const cor2 = document.getElementById('cor2');
const cor3 = document.getElementById('cor3');
const cor4 = document.getElementById('cor4');

const base = document.getElementById('base');
base.style.background = "#fff"

cor1.addEventListener('mouseover', function () {
    base.style.backgroundColor = "#f49e42";
});

cor2.addEventListener('mouseover', function () {
    base.style.backgroundColor = "#7e8477";
});

cor3.addEventListener('mouseover', function () {
    base.style.backgroundColor = "#47a4ef";
});

cor4.addEventListener('mouseover', function () {
    base.style.backgroundColor = "#ad0c39";
});

[base, cor1, cor2, cor3, cor4].forEach(element => {
    element.addEventListener('mouseout', function () {
        base.style.backgroundColor = "#fff";
    });
});

