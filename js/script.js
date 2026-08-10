
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

//cronometro 


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


//boao de compra hotmart



// 1. Função para ABRIR o modal quando clica no botão laranja
function abrirCheckout() {
    var modal = document.getElementById('modalCheckout');
    if (modal) {
        modal.style.setProperty('display', 'flex', 'important');
    }
}

// 2. Função para FECHAR o modal quando clica no X
function fecharCheckout() {
    var modal = document.getElementById('modalCheckout');
    if (modal) {
        modal.style.setProperty('display', 'none', 'important');
    }
}

// 3. Função para FECHAR o modal se o cliente clicar na área escura (fora da caixa)
window.addEventListener('click', function(event) {
    var modal = document.getElementById('modalCheckout');
    if (event.target === modal) {
        fecharCheckout();
    }
});

// Lógica de Controlo do Menu de Navegação


// Lógica de Controlo Oficial acionada pelo seu onclick="toggleMenu()"
function toggleMenu() {
    var hamburguer = document.querySelector('.prisma-menu-hamburguer');
    var links = document.querySelector('.prisma-menu-links');
    
    if (hamburguer && links) {
        hamburguer.classList.toggle('ativo');
        links.classList.toggle('menu-aberto');
    }
}


/* --- CORREÇÃO DA PÁGINA EM BRANCO AO VOLTAR (NATIVO E SEGURO) --- */
window.addEventListener("pageshow", function (event) {
    // 1. Força a página a atualizar se vier do histórico/cache do navegador
    if (event.persisted || (typeof window.performance !== "undefined" && window.performance.navigation.type === 2)) {
        window.location.reload();
    }
    
    // 2. Garante por segurança que o modal comece escondido ao voltar
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.style.display = 'none';
    }
});
