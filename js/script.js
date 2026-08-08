document.addEventListener('DOMContentLoaded', function() {

  // ===== 1. MENU HAMBURGUER =====
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  if (hamburger && menu) {
    hamburger.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  }

  // ===== 2. CONTAGEM DE 30 DIAS =====
  const countdownEl = document.querySelector(".countdown");
  if (countdownEl) {
    const hoje = new Date();
    const dataLancamento = new Date();
    dataLancamento.setDate(hoje.getDate() + 30);
    dataLancamento.setHours(23, 59, 59, 999);

    const timer = setInterval(function() {
      const agora = new Date().getTime();
      const distancia = dataLancamento - agora;

      if (distancia < 0) {
        clearInterval(timer);
        countdownEl.innerHTML = "<h3 style='color:var(--laranja)'>Já Disponível!</h3>";
        return;
      }

      const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

      if(document.getElementById("dias")) document.getElementById("dias").innerHTML = dias.toString().padStart(2, '0');
      if(document.getElementById("horas")) document.getElementById("horas").innerHTML = horas.toString().padStart(2, '0');
      if(document.getElementById("minutos")) document.getElementById("minutos").innerHTML = minutos.toString().padStart(2, '0');
      if(document.getElementById("segundos")) document.getElementById("segundos").innerHTML = segundos.toString().padStart(2, '0');

    }, 1000);
  }

  // ===== 3. BOTÃO COPIAR PIX - HOVER =====
  const btnCopiar = document.getElementById('btnCopiar');
  if (btnCopiar) {
    btnCopiar.addEventListener('mouseover', () => btnCopiar.style.background = '#0056b3');
    btnCopiar.addEventListener('mouseout', () => btnCopiar.style.background = 'linear-gradient(135deg, #005ea6, #007ad6)');
  }

  // ===== 4. MODAL EBOOK =====
  window.abrirCheckout = function() {
    const modal = document.getElementById('modalCheckout');
    if(modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  }

  window.fecharCheckout = function() {
    const modal = document.getElementById('modalCheckout');
    if(modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }

  window.onclick = function(event) {
    const modal = document.getElementById('modalCheckout');
    if (event.target == modal) {
      fecharCheckout();
    }
  }

  // ===== 5. QUIZ NOVO =====
  window.corrigirQuiz = function() {
    let acertos = 0;
    const total = 10;
    for(let i=1; i<=total; i++) {
      let resposta = document.querySelector(`input[name="q${i}"]:checked`);
      if(resposta && resposta.value == "certo") acertos++;
    }
    const notaEl = document.getElementById("nota");
    const resultadoEl = document.getElementById("resultado");
    if(notaEl && resultadoEl) {
      notaEl.innerHTML = `Você acertou <b>${acertos} de ${total}</b> questões.`;
      resultadoEl.style.display = "block";
      resultadoEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // ===== COPIAR PIX - CLIQUE =====
  window.copiarPix = function() {
    const chaveEl = document.getElementById('chavePix');
    if(!chaveEl) return;
    const chave = chaveEl.innerText.trim();
    
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(chave).then(() => exibirSucesso()).catch(() => fallbackCopiar(chave));
    } else {
      fallbackCopiar(chave);
    }
  }

  function fallbackCopiar(texto) {
    const textArea = document.createElement("textarea");
    textArea.value = texto;
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      exibirSucesso();
    } catch (err) {
      alert('Não foi possível copiar automaticamente. Por favor, copie manualmente: ' + texto);
    }
    document.body.removeChild(textArea);
  }

  function exibirSucesso() {
    const msg = document.getElementById('msgCopiado');
    if(msg) {
      msg.style.display = 'block';
      setTimeout(() => { msg.style.display = 'none'; }, 2500);
    }
  }

}); // <- só 1 fechamento no final