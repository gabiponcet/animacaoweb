function ShyGuy(x, y){
    this.x = x
    this.y = y
    this.width = h/15
    this.height = h/15
    this.esquerda=()=>{
        if(this.sx==227){
            this.sx = 3
            this.sy = 7
            this.swidth = 27
            this.sheight = 32
            return
        }
        if(this.sx==3){
            this.sx = 35
            this.sy = 6
            this.swidth = 26
            this.sheight = 33
            return
        }
        if(this.sx==35){
            this.sx = 67
            this.sy = 6
            this.swidth = 27
            this.sheight = 33
            return
        }
        if(this.sx==67){
            this.sx = 99
            this.sy = 5
            this.swidth = 26
            this.sheight = 33
            return
        }
        if(this.sx==99){
            this.sx = 130
            this.sy = 4
            this.swidth = 29
            this.sheight = 31
            return
        }
        if(this.sx==130){
            this.sx = 163
            this.sy = 5
            this.swidth = 28
            this.sheight = 33
            return
        }
        if(this.sx==163){
            this.sx = 194
            this.sy = 6
            this.swidth = 28
            this.sheight = 33
            return
        }
        if(this.sx==194){
            this.sx = 227
            this.sy = 8
            this.swidth = 28
            this.sheight = 31
            return
        }
        else{
            this.sx = 227
            
        }
    }
    this.morrer= ()=>{
        const audio = document.querySelector('audio')
        audio.play()//som de explosão toda vez que o shyguy é atacado
        if(this.sx==2){
            this.sx = 51
            this.sy = 56
            this.swidth = 34
            this.sheight = 30
            return
        }
        if(this.sx==51){
            this.sx = 99
            this.sy = 55
            this.swidth = 33
            this.sheight = 32
            return
        }
        if(this.sx==99){
            this.sx = 7
            this.sy = 242
            this.swidth = 34
            this.sheight = 29
            return
        }
        if(this.sx==7){
            this.sx = 52
            this.sy = 242
            this.swidth = 41
            this.sheight = 29
            return
        }
        if(this.sx==52){
            this.sx = 98
            this.sy = 241
            this.swidth = 45
            this.sheight = 22
            return
        }if(this.sx==98){
            this.sx = 146
            this.sy = 241
            this.swidth = 45
            this.sheight = 25
            return
        }
        if(this.sx==146){
            this.sx = 194
            this.sy = 241
            this.swidth = 45
            this.sheight = 24
            return
        }
        else{
            this.sx = 2
        }
    }
    this.draw =()=>{
        //utilizar o THIS para que as variáveis sejam acessíveis como métodos quando classe instanciada
        ctx.drawImage(imgShyGuy, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height)
    }
}