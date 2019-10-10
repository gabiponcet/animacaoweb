//instanciar personagem
let g = new Girl()
let s = new ShyGuy(w, 560)

//inserir evento de escuta na janela para quando uma tecla for pressionada e invocar a função movimenta
window.addEventListener('keydown', movimenta)
//função movimenta testa qual tecla foi pressionada e chama a animação referente
function movimenta(event){
    const audio = document.getElementById('som')
    audio.play()//toca música de fundo assim que a girl começa a se mover
    ultimaPosicao = {
        left: false,
        right: false
    }
    //se seta direita for pressionada
    if(event.keyCode == 39){
        g.x+=10
        g.direita()
        s.esquerda()
        s.x-=10
        if(s.x <= 0){
            window.location.href = "./gameOver.html";
            //redireciona para game over qd o shyguy sair da tela 
        }
    }
    //se seta esquerda for pressionada
    if(event.keyCode == 37){
        g.x-=10
        g.esquerda()

    }
    //se barra de espaço for pressionada
    if(event.keyCode == 32){
        g.x+=15
        g.baterDireita()
        if(g.x >= s.x){
            s.morrer()
        }
    }
   
    //limpar canvas
    ctx.clearRect(0,0,w,h)
    //desenhar
    s.draw()
    g.draw()
   
}




