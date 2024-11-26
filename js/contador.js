const dataAtual = new Date();
const newyeartime = new Date(dataAtual.getTime() + (new Date('2025-01-18T08:00:00').getTime() - dataAtual.getTime()));

const atualizarContador = (display) => {
    let currentTime = new Date()
    let difference = newyeartime - currentTime;
    let dias = Math.floor(difference / 1000 / 60 / 60 / 24);
    let horas = Math.floor(difference / 1000 / 60 / 60) % 24;
    let minutos = Math.floor(difference / 1000 / 60) % 60;
    let segundos = Math.floor(difference / 1000) % 60;

    let diasString = dias + " Dias ";
    let horasString= + horas + " Horas "
    let minutosString = + minutos + " Minutos "
    let segundosString = segundos + " Segundos "

    document.querySelector('#dias > h1').textContent = diasString;
    document.querySelector('#horas > h1').textContent = horasString;
    document.querySelector('#minutos > h1').textContent = minutosString;
    document.querySelector('#segundos > h1').textContent = segundosString;
}

setInterval(atualizarContador, 1000);


