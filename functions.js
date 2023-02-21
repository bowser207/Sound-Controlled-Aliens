function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6fN5Sa1dG/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        rn_red = Math.floor(Math.random() * 255) + 1;
        rn_green = Math.floor(Math.random() * 255) + 1;
        rn_blue = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'We hear: '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy: '+ (results[0].confidence*100).toFixed(2)+" ⁒";
        document.getElementById("result_label").style.color = "rgb("+rn_red+", "+rn_green+", "+rn_blue+")";
        document.getElementById("result_confidence").style.color = "rgb("+rn_red+", "+rn_green+", "+rn_blue+")";
        
        A1 = document.getElementById("A1");
        A2 = document.getElementById("A2");
        A3 = document.getElementById("A3");
        A4 = document.getElementById("A4");

        if (results[0].label == "Bang") {
            A1.src = 'aliens-01.gif';
            A2.src = 'aliens-02.png';
            A3.src = 'aliens-03.png';
            A4.src = 'aliens-04.png';
        } else if (results[0].label == "Clap") {
            A1.src = 'aliens-01.png';
            A2.src = 'aliens-02.gif';
            A3.src = 'aliens-03.png';
            A4.src = 'aliens-04.png';
        } else if (results[0].label == "Stomp") {
            A1.src = 'aliens-01.png';
            A2.src = 'aliens-02.png';
            A3.src = 'aliens-03.gif';
            A4.src = 'aliens-04.png';
        }else{
            A1.src = 'aliens-01.png';
            A2.src = 'aliens-02.png';
            A3.src = 'aliens-03.png';
            A4.src = 'aliens-04.gif';
        }
    }
}
