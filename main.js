mustache_x=0;
mustache_y=0;

function preload(){
    mustache = loadImage("https://i.postimg.cc/CLQph1X7/mustache-student-math-favorite-for-friday-the-the-1.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    image(mustache, mustache_x, mustache_y, 60, 45);
}

function modelLoaded() {
    console.log("poseNet Is Initialized");
}

function take_snapshot(){
    save("my_picture.png");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        mustache_x = results[0].pose.nose.x;
        mustache_y = results[0].pose.nose.y;
        console.log("nose x: " +results[0].pose.nose.x);
        console.log("nose y: " +results[0].pose.nose.y);
    }
}