function preload(){
    
}

function setup(){
    canvas=createCanvas(500,550)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video,0,0,500,550)
}