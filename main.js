function setup(){
    //create canvas
    canvas = createCanvas(500,450);
    canvas.position(850,150);

    //access webcam
    video = createCapture(VIDEO);
    video.position(150,150);
    video.size(500,450);

    //initialize poseNet model
    poseNet = ml5.poseNet(video, modelLoaded);

    //execute poseNet model
    poseNet.on('pose', gotPoses);
}

function draw(){
    //set background color of the canvas
    background('#00BFFF');
}

//define modelLoaded() function
function modelLoaded(){
    console.log('PoseNet is initialized!');
}

//define gotPoses() function
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}