Webcam.set({
  width:350,
  height:300,
  image_format:'png',
  png_quality:91
});

var camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
   Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
   });
};
console.log("ml5 Version is " + ml5.version);

var classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/IFttQPmua/model.json',modelLoaded);

function modelLoaded() {
   console.log("Model has been loaded!");
   window.alert("Loading complete");
}

function check() {
  img = document.getElementById("captured_image");
  classifier.classify(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
    window.alert("Got error");
  } else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_Accuracy").innerHTML = results[0].confidence.toFixed(3);
    window.alert("Sucessfully completed!");
  }
  
}
