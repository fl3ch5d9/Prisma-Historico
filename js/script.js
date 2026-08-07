const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});



document.getElementById('hamburger').onclick=function(){document.getElementById('menu').classList.toggle('active')}

//index 
// CONTAGEM DE 30 DIAS A PARTIR DE HOJE
const hoje = new Date();
const dataLancamento = new Date();
dataLancamento.setDate(hoje.getDate() + 30);
dataLancamento.setHours(23, 59, 59, 999);

const timer = setInterval(function() {
  const agora = new Date().getTime();
  const distancia = dataLancamento - agora;

  // Se acabou
  if (distancia < 0) {
    clearInterval(timer);
    document.querySelector(".countdown").innerHTML = "<h3 style='color:var(--laranja)'>Já Disponível!</h3>";
    return;
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000); // ADICIONEI

  // Só atualiza se o elemento existir
  if(document.getElementById("dias")) document.getElementById("dias").innerHTML = dias.toString().padStart(2, '0');
  if(document.getElementById("horas")) document.getElementById("horas").innerHTML = horas.toString().padStart(2, '0');
  if(document.getElementById("minutos")) document.getElementById("minutos").innerHTML = minutos.toString().padStart(2, '0');
  if(document.getElementById("segundos")) document.getElementById("segundos").innerHTML = segundos.toString().padStart(2, '0');

}, 1000);

// Form de notificação simples



  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  
  btn.addEventListener('click', function(){
    menu.classList.toggle('active');
  });
  //index fim 

  //sobre ok
  //artigo ok
  //curiosidades ok 

  //doação
  
    const btn = document.getElementById('btnCopiar');
    btn.addEventListener('mouseover', () => btn.style.background = '#0056b3');
    btn.addEventListener('mouseout', () => btn.style.background = 'linear-gradient(135deg, #005ea6, #007ad6)');

    function copiarPix() {
        const chave = document.getElementById('chavePix').innerText.trim();
        
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
        msg.style.display = 'block';
        setTimeout(() => { msg.style.display = 'none'; }, 2500);
    }

    //ebook

    
    function abrirCheckout() {
        // Altera o display do modal de 'none' para 'flex' para exibir na tela
        document.getElementById('modalCheckout').style.display = 'flex';
        // Impede a página de rolar ao fundo enquanto a loja está aberta
        document.body.style.overflow = 'hidden';
    }

    function fecharCheckout() {
        document.getElementById('modalCheckout').style.display = 'none';
        // Devolve o controle de rolagem normal da página
        document.body.style.overflow = 'auto';
    }

    // Camada extra: se o utilizador clicar no fundo escuro fora da janela, ela também fecha
    window.onclick = function(event) {
        const modal = document.getElementById('modalCheckout');
        if (event.target == modal) {
            fecharCheckout();
        }
    }
    //quiz 
     <!-- SCRIPT DO QUIZ -->
    
        function corrigirQuiz() {
            let acertos = 0;
            const total = 10;
            for(let i=1; i<=total; i++) {
                let resposta = document.querySelector(`input[name="q${i}"]:checked`);
                if(resposta && resposta.value == "certo") acertos++;
            }
            document.getElementById("nota").innerHTML = `Você acertou <b>${acertos} de ${total}</b> questões.`;
            document.getElementById("resultado").style.display = "block";
            
            // Faz o navegador deslizar a tela suavemente até a caixa de resultado
            document.getElementById("resultado").scrollIntoView({ behavior: 'smooth' });
        }
  







