function Girl(){
    this.x = 100
    this.y = 550
    this.width = h/10
    this.height = h/10
    //define as posições de cada sprite para gerar uma sequência
    this.direita =()=>{
        if(this.sx==0){
            this.sx = 171
            this.sy = 0
            this.swidth = 163
            this.sheight = 185
            return
        }
        if(this.sx==171){
            this.sx = 342
            this.sy = 0
            this.swidth = 162
            this.sheight = 185
            return
        }
        if(this.sx==342){
            this.sx = 513
            this.sy = 0
            this.swidth = 161
            this.sheight = 187
            return
        }
        if(this.sx==513){
            this.sx = 683
            this.sy = 0
            this.swidth = 140
            this.sheight = 187
            return
        }
        if(this.sx==683){
            this.sx = 854
            this.sy = 0
            this.swidth = 138
            this.sheight = 185
            return
        }
        if(this.sx==854){
            this.sx = 0
            this.sy = 0
            this.swidth = 140
            this.sheight = 186
            return
        }
        else{
            this.sx = 0
        }
    }
    this.esquerda =()=>{
        if(this.sx==32){
            this.sx = 883
            this.sy = 195
            this.swidth = 140
            this.sheight = 177
            return
        }
        if(this.sx==883){
            this.sx = 690
            this.sy = 197
            this.swidth = 163
            this.sheight = 175
            return
        }
        if(this.sx==690){
            this.sx = 520
            this.sy = 196
            this.swidth = 162
            this.sheight = 176
            return
        }
        if(this.sx==520){
            this.sx = 350
            this.sy = 195
            this.swidth = 161
            this.sheight = 177
            return
        }
        if(this.sx==350){
            this.sx = 200
            this.sy = 192
            this.swidth = 140
            this.sheight = 180
            return
        }
        if(this.sx==200){
            this.sx = 32
            this.sy = 196
            this.swidth = 138
            this.sheight = 176
            return
        }
        else{this.sx = 32}
    }
    //desenhar bater
    this.baterDireita =()=>{
        if(this.sx==683){
            this.sx = 1
            this.sy = 404
            this.swidth = 160
            this.sheight = 155
            return
        }
        if(this.sx==1){
            this.sx = 171
            this.sy = 400
            this.swidth = 170
            this.sheight = 159
            return
        }
        if(this.sx==171){
            this.sx = 683
            this.sy = 400
            this.swidth = 172
            this.sheight = 159
            return
        }
        else{
            this.sx = 171
        }
    }
    //desenha
    this.draw =()=>{
        //utilizar o THIS para que as variáveis sejam acessíveis como métodos quando classe instanciada
        ctx.drawImage(imgGirl, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height)
    }
}