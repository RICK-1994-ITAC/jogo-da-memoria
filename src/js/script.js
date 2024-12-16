const emojis = ['🐟','🐟','🐔','🐔','🐪','🐪','🦝','🦝','🐷','🐷','🐑','🐑','🦓','🦓','🦅','🦅','🐬','🐬','🦏','🦏']

let openCards=[]
const container = document.querySelector('.container')

emojis.sort(() => Math.random() > 0.5 ? 2 : -1).forEach(element => {
    const game = document.querySelector('.game')
    const cards = document.createElement('div')
    cards.classList.add('item')
    cards.textContent = element
    game.appendChild(cards)
    cards.onclick = cliquei
    
});

function cliquei(){
    
    if(openCards.length <2 && !this.classList.contains('open')){
        this.classList.add('open')
        openCards.push(this)
    }

    if(openCards.length === 2){
        setTimeout(compareCards,500)
    }
    
}

function compareCards(){
    
    if(openCards[0].textContent!=openCards[1].textContent){
        openCards.forEach((item)=>{item.classList.remove('open')})
        if(rodada===1) adcPontos(1,false)
        if(rodada===2) adcPontos(2,false)
    }else{
        openCards.forEach(item=>identicalCards.push(item))
        
        if(identicalCards.length <= emojis.length){
            rodada=1
            adcPontos(rodada,true)
            
            if(identicalCards.length===emojis.length) {
                let cartasabertas=document.querySelectorAll('.open')
                let closedCards = cartasabertas.forEach(card => card.classList.remove('open'))
                alert(`É a vez do jogador ${namePlayer2}`)
                
                rodada=2
            }
        }
              
        if(identicalCards.length >emojis.length){
            segundaRodada()
        }
    }
    
    openCards=[]
}