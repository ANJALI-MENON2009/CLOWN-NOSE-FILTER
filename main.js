noseX=0;
noseY=0;
function preload() {
   clownNoseImage = loadImage('https://i.postimg.cc/j2KwPMHk/Clown-nose-large.png') ;
} ;

function setup()
{
    canvas = createCanvas(300,250) ;
    canvas.center() ;
    video = createCapture(VIDEO) ;
    video.size(300,250) ;
    video.hide() ;

    poseNet = ml5.poseNet(video ,modelLoaded) ;
    poseNet.on('pose',gotResult);
}

function modelLoaded() {
    console.log("Model loaded.") ;
}
function gotResult(results) {
    if(results.length > 0) {
    console.log(results) ;
    noseX = results[0].pose.nose.x - 35;
    noseY = results[0].pose.nose.y - 30;
    }
}

function draw() {
    image(video,0,0, 300, 250);
    fill(255,0,0);
    stroke(255,0,0);
    console.log(noseX) ;
    console.log(noseY) ;
    image(clownNoseImage,noseX, noseY, 70,70);
}

function take_snapshot()
{
    save('myFilterPic.png') ;
}