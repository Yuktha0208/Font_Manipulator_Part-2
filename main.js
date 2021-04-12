function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(460,460);
    canvas.position(560,90);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Your Model Is Initialized");
}

function gotPoses(results){
    if(results.length >0){
        console.log(results);
    }
}