//capturar a tag canvas do html
const canvas = document.querySelector('canvas')
//definir o contexto de desenho para 2d
const ctx = canvas.getContext('2d')
//capturar valores do tamanho da tela
const w = window.innerWidth
const h = window.innerHeight
//definir largura e altura do canvas conforme os valores da tela
canvas.width = w
canvas.height = h
//carregar sprite
let imgGirl = new Image()
imgGirl.src = './girl.png'

let imgShyGuy = new Image()
imgShyGuy.src = './shy-guy.png'
