let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1 
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do numero secreto'

let paragrafo = document.querySelector('p')
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

exibirMensagemInicial();

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10')
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
       exibirTextoNaTela('h1', 'Acertou!');
       let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
       let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativas}!`
       exibirTextoNaTela('p', mensagemTentativas)
       document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior');
            
        }
            tentativas++
            limparCampo()
    }
    
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
   }
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}