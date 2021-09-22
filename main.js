//create two variables for storing x coordinates of the wrists
leftWristX = 0;
rightWristX = 0;

//create one variable for storing difference between x coordinates of the left and right wrists
difference = 0;

function setup(){
    //create canvas
    canvas = createCanvas(500,450);
    canvas.position(850,150);

    //access webcam
    video = createCapture(VIDEO);
    video.size(500,260);

    div = createDiv();
    div.attribute("id","live_div");
    video.parent(div);
    div.position(200,120);

    //initialize poseNet model
    poseNet = ml5.poseNet(video, modelLoaded);

    //execute poseNet model
    poseNet.on('pose', gotPoses);
}

function draw(){
    //set background color of the canvas
    background('#00BFFF');
    //set the text to be displayed
    textSize(difference);
    fill('#800080');
    text('Srijoni',50,200);
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

    //fetch the x coordinates of the two wrists
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;

    //find the difference between the x coordinates of the left and right wrists and remove decimal
    difference = floor(leftWristX - rightWristX);

    //display the x coordinates of the left and the right wrists and their difference on console
    console.log("Left Wrist x coordinate : " + leftWristX + " , Right Wrist x coordinate : " + rightWristX + " , Difference : " + difference);
}