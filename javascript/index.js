let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
let intervalId = 0
//do kapim imazhet   

//sfondi
let sfondi = new Image()
sfondi.src = 'https://wallpaperaccess.com/full/4622710.png'

let toka = new Image()
toka.src= 'https://raw.githubusercontent.com/sil-sin/flappy-bird-starter/master/images/fg.png'
//zogu

let zogu = new Image()
zogu.src = 'https://raw.githubusercontent.com/sil-sin/flappy-bird-starter/master/images/bird.png'
let zoguX=20,zoguY=50

//tubat

let tubiLarte = new Image()
tubiLarte.src = 'https://raw.githubusercontent.com/sil-sin/flappy-bird-starter/master/images/pipeNorth.png'


let tubiPoshte = new Image()
tubiPoshte.src='https://raw.githubusercontent.com/sil-sin/flappy-bird-starter/master/images/pipeSouth.png'

//renja ,piket 

let piket=0,renja=2

document.addEventListener('mousedown',function(){
    renja = 0
})

document.addEventListener('mouseup',function(){
    renja = 0
})

let tubat = [{x:canvas.width-40,y:0}]

function vizato(){
    ctx.drawImage(sfondi,0,0,300,500)

ctx.drawImage(zogu,zoguX,zoguY)



for (let i = 0 ; i < tubat.length ; i++){
    let hapsire = tubiLarte.height + 100 
    ctx.drawImage(tubiLarte,tubat[i].x,tubat[i].y)
    ctx.drawImage(tubiPoshte,tubat[i].x,tubat[i].y + hapsire)
    tubat[i].x--
    if(tubat[i].x == 5 ){
        piket++
    }
    if(tubat[i].x == 30){
        tubat.push({
            x:canvas.width-20,
            y:Math.floor(Math.random()* tubiLarte.height)-tubiLarte.height
        })
    }

    if(zoguX + zogu.width > tubat[i].x && zoguX < tubat[i].x + tubiLarte.width && (zoguY < tubat[i].y + tubiLarte.height || zoguY + zogu.height > tubat[i].y + hapsire )){
        alert('GAMEOVER')
        clearInterval(intervalId)
        location.reload()
    }else{
        zoguY = zoguY + renja
    }
}


ctx.drawImage(toka,0,canvas.height-80)

if(zoguY > canvas.height -100){
    alert('GAMEOVER')
    clearInterval(intervalId)
    location.reload()
}else{
    zoguY += renja
}

ctx.font='20px Calibri'//madhesia dhe lloi i shkrimit font
ctx.fillStyle='red'
ctx.fillText('Pike: '+piket,20,canvas.height-30)

console.log('U vizatua sfondi')

}


intervalId = setInterval(() => {
    requestAnimationFrame(vizato)
}, 10);

let muzik = new Audio()
muzik.src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"

let button = document.querySelector("button");
button.style.color = "red";
button.addEventListener("click", (e) => {
  if (button.innerText == "On") {
    button.innerText = "Off";
    button.style.color = "red";
    muzik.pause();
    audio.ended = true;
  } else if (button.innerText == "Off") {
    button.innerText = "On";
    button.style.color = "green";
    muzik.play();
  }
});

