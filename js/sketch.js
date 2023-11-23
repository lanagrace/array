

let words = ["Plymouth", "is", "Awesome"]
let wordIndex = 0;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    background(220);

    fill(255, 255, 255);
    text(words[wordIndex], mouseX, mouseY)

}

function mousePressed(){

    wordIndex++

    if(wordIndex == words.length){
        wordIndex = 0;
    }

}