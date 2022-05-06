function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas=createCanvas(550, 500);
    canvas.center();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('grey');
}
function modelLoaded(){
    console.log('model loaded');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}