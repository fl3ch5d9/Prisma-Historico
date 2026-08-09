
// Altere esta data para o dia exato do lançamento do seu e-book!
// Formato padrão: "Mês Dia, Ano Horas:Minutos:Segundos"
const dataLancamento = new Date("September 1, 2026 00:00:00").getTime();

const atualizarCronometro = setInterval(function() {
    const agora = new Date().getTime();
    const distancia = dataLancamento - agora;

    // Cálculos de tempo para dias, horas, minutos e segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Formata os números para exibirem sempre dois dígitos (ex: 05 em vez de 5)
    document.getElementById("days").innerHTML = dias < 10 ? "0" + dias : dias;
    document.getElementById("hours").innerHTML = horas < 10 ? "0" + horas : horas;
    document.getElementById("minutes").innerHTML = minutos < 10 ? "0" + minutos : minutos;
    document.getElementById("seconds").innerHTML = segundos < 10 ? "0" + segundos : segundos;

    // O que acontece quando a contagem regressiva termina
    if (distancia < 0) {
        clearInterval(atualizarCronometro);
        document.querySelector(".countdown-wrapper").innerHTML = 
            "<p class='countdown-title' style='color: var(--brand-orange);'>🔥 O E-book já está disponível! Garanta o seu abaixo.</p>";
    }
}, 1000);
