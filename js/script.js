// SELECIONA OS ELEMENTOS DO HEADER
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// ABRE E FECHA O MENU AO CLICAR NO BOTÃO HAMBÚRGUER
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// FECHA O MENU AUTOMATICAMENTE SE O UTILIZADOR CLICAR EM QUALQUER LINK
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    });
});

// botão quiz 

function corrigirQuiz() {
    // 1. Seleciona todas as questões dentro do formulário
    const questoes = document.querySelectorAll('.questao');
    let totalAcertos = 0;
    let totalQuestoes = questoes.length; // No seu caso, são 10 questões

    // 2. Passa por cada questão para verificar o que foi marcado
    for (let i = 1; i <= totalQuestoes; i++) {
        // Procura o rádio que o usuário selecionou para a pergunta atual (q1, q2, q3...)
        const respostaMarcada = document.querySelector(`input[name="q${i}"]:checked`);
        
        // Se o usuário marcou e o valor for "certo", soma um ponto
        if (respostaMarcada && respostaMarcada.value === 'certo') {
            totalAcertos++;
        }
    }

    // 3. Seleciona os elementos da caixa de resultado do seu HTML
    const caixaResultado = document.getElementById('resultado');
    const textoNota = document.getElementById('nota');

    if (caixaResultado && textoNota) {
        // Atualiza o texto da nota com o formato: "Acertos / Total" (Ex: 8 / 10)
        textoNota.innerText = `${totalAcertos} / ${totalQuestoes}`;
        
        // Garante que a caixa de resultado fique visível na tela
        caixaResultado.style.display = 'block';
        
        // Faz a página rolar suavemente até o resultado para o usuário ver a nota
        caixaResultado.scrollIntoView({ behavior: 'smooth' });
    }
}
// ebook

function abrirCheckout() {
    const modal = document.getElementById('modalCheckout');
    if (modal) modal.style.display = 'flex';
}

function fecharCheckout() {
    const modal = document.getElementById('modalCheckout');
    if (modal) modal.style.display = 'none';
}

// doação

function copiarPix() {
    // 1. Pega o elemento com o texto do e-mail do PIX
    const chaveElemento = document.getElementById('chavePix');
    const msgCopiado = document.getElementById('msgCopiado');
    const btnCopiar = document.getElementById('btnCopiar');

    if (chaveElemento) {
        const textoPix = chaveElemento.innerText;

        // 2. Copia o texto para a área de transferência do sistema
        navigator.clipboard.writeText(textoPix).then(() => {
            // Mostra a mensagem de sucesso verde
            if (msgCopiado) msgCopiado.style.display = 'block';
            
            // Muda temporariamente o texto do botão
            if (btnCopiar) btnCopiar.innerText = '✅ Chave Copiada!';

            // 3. Esconde o aviso após 3 segundos
            setTimeout(() => {
                if (msgCopiado) msgCopiado.style.display = 'none';
                if (btnCopiar) btnCopiar.innerText = '📋 Copiar Chave PIX';
            }, 3000);
        }).catch(err => {
            console.error('Erro ao copiar a chave: ', err);
        });
    }
}
