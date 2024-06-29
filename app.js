let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let numerosSorteados = [];
let limiteDeNumeros = 10;
// let titulo = document.querySelector("H1");

// titulo.innerHTML = "Hora do desafio";

// let texto = document.querySelector("p");

// texto.innerHTML = "Escolha um numero de 1 a 10";
exibeTexto('h1','Hora do desafio');
exibeTexto('p','Escolha um numero de 1 a 10')
function verificarChute() {
    let chute = document.querySelector('input').value;
   
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
    
    if( chute != numeroSecreto){
        if( chute > numeroSecreto){
            exibeTexto('p',`O número ${chute} é maior`);
        }else{exibeTexto('p', `O número ${chute} é menor`)};
    }else{
        exibeTexto('p', `Parabéns, voce acertou com ${tentativas} ${palavraTentativa}` );
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    
    limpa()
    tentativas++

   }

function exibeTexto(tag,texto){
    let campo = document.querySelector(tag);
        campo.innerHTML = texto;
}

 function gerarNumeroAleatorio(){
    
    let numeroEscolhido = parseInt(Math.random()*10 + 1);
    let quantidadeDeNumerosSorteados = numerosSorteados.length;

    if ( quantidadeDeNumerosSorteados == limiteDeNumeros){
        return numerosSorteados = []
    }
    if(numerosSorteados.includes(numeroEscolhido))
        {return  gerarNumeroAleatorio()}
        else{numeroSecreto.push(numeroEscolhido)
            return numeroEscolhido;
        }
}  

 function limpa(){
    
    chute = document.querySelector('input');
    chute.value = '';
 }

 function exibeTextoInicial(){
    exibeTexto('h1','Hora do desafio');
    exibeTexto('p','Escolha um numero de 1 a 10')
 }

 function reiniciaJogo(){
    gerarNumeroAleatorio();
    limpa();
    tentativas = 1;
    exibeTextoInicial();
    
    document.getElementById('reiniciar').setAttribute('disabled',true)

 }
