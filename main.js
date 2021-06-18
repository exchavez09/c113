function preload() {

  }
  
  function setup() {
    canvas = createCanvas(600,800);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
  }
  
  function draw() {
    stroke(255, 0, 0);
    rect(30, 20, 500, 500);
    image(video, 100, 100, 400, 500);
    circle(30, 30, 20);
    circle(30, 525, 20);
    circle(525, 525, 20);
    circle(525, 30, 20);

  }

  function take_snapshot(){
    save('student_name.png');
  }