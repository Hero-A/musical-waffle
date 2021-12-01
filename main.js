function preload(){

}

function setup(){
    canvas = createCanvas(700, 530);
    canvas.position(116, 253);
    video = createCapture(VIDEO);
    video.hide()

    tint_color = "";
}

function draw(){
    image(video, 0, 0, 700, 530);
    tint(tint_color);
}

function take_snapshot(){
    save('your_picture.jpeg');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}