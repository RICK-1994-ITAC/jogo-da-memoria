let namePlayer1= window.prompt('Digite o nome do Primeiro jogador:')
let namePlayer2 = window.prompt('Digite o nome do Segundo jogador:')

if(namePlayer1=== "" || namePlayer1 === null) namePlayer1 = 'JOGADOR 1'
if(namePlayer2=== "" || namePlayer2 === null) namePlayer2 = 'JOGADOR 2'
let rodada = 1

const player1 = document.querySelector('.jogador1')
const player2 = document.querySelector('.jogador2')
let pontuacao1 = document.querySelector('.pontuacao1')
let pontuacao2 = document.querySelector('.pontuacao2')

let pontos1 = 0
let pontos2 = 0


player1.firstElementChild.innerHTML = namePlayer1.toUpperCase()
player2.firstElementChild.innerHTML = namePlayer2.toUpperCase()

console.log(pontos1);
console.log(namePlayer1);

/*jogador 1 começa*/
let identicalCards=[]


function segundaRodada(){
    
    adcPontos(2,true)
    if(identicalCards.length === emojis.length * 2){
        
        vitoria()
    }
}

function adcPontos(rodada,acertou){
    if(rodada===1 && acertou===true){
        pontos1 ++
        pontuacao1.innerHTML = pontos1
    }else if(rodada===1 && acertou===false){
        pontos1 --
        pontuacao1.innerHTML = pontos1
    }

    if(rodada===2 && acertou===true){
        pontos2 ++
        pontuacao2.innerHTML = pontos2
    }else if(rodada===2 && acertou===false){
        pontos2 --
        pontuacao2.innerHTML = pontos2
    }
}

function vitoria(){
    
    let vencedor;
    if(parseInt(pontuacao1.innerHTML) > parseInt(pontuacao2.innerHTML)) vencedor = namePlayer1
    
    if(parseInt(pontuacao1.innerHTML) < parseInt(pontuacao2.innerHTML)) vencedor = namePlayer2
    
    if(parseInt(pontuacao1.innerHTML) === parseInt(pontuacao2.innerHTML)){
        alert('Ops! Deu empate. Jogue mais uma vez.')
        window.location.reload()
        return
    }

    alert(`Fim do jogo. O vencedor foi ${vencedor.toUpperCase()}. Aperte o botão para nova partida`)
}