
function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/oH9KcC9lR/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log("ml5 version =  "+ml5.version);
    console.log("Getting results...");
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;

        g = Math.floor(Math.random() * 255) + 1;

        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear -  " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy -  " + (results[0].confidence * 100).toFixed(2) + "%";

        document.getElementById("result_label").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + r + "," + g + "," + b + ")";
        
        img1 = "dawg.jpg";
        img2 = "frawwg.webp";
        img3 = "meowing.jpg";
        img4 = "lion.jpg";

        if (results[0].label == "Meowing") {
            document.getElementById("image").src = img3;
        } else if(results[0].label == "Roaring") { 
            document.getElementById("image").src = img4;    
        } else if(results[0].label == "Barking") {
            document.getElementById("image").src = img1;
        } else if(results[0].label == "Croaking") {
            document.getElementById("image").src = img2;
        } else {
            document.getElementById("image").src = "ear.jpg";
        }
    }
}
