function setup(){
canvas1 = createCanvas(480,480);
canvas1.position(420,200);
background("white");
canvas1.mouseReleased(classifyCanvas);
synth = window.speechSynthesis;
}
function clearCanvas(){
background("white");
}
function preload(){
classifier = ml5.imageClassifier('DoodleNet');
}
function draw(){
strokeWeight(13);
stroke(0);
if(mouseIsPressed){
line(pmouseX , pmouseY , mouseX , mouseY);
}
}
function classifyCanvas(){
classifier.classify(canvas , gotResult);
}
function gotResult(error , results){
if(error){
console.log(error);
}
console.log(results);
document.getElementById('label').innerHTML = 'label:' + results[0].label;
document.getElementById('confidence').innerHTML = 'confidence:' + Math.round(results[0].confidence*100)+'%';
utterThis = new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
}