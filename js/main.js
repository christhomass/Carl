var words = [];

var stats = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,

}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


var shapeLibrary = new ShapeLibrary(ctx, c);


var inputButton = document.getElementById('input-button');
inputButton.addEventListener('click', buttonEventHandler);

function buttonEventHandler() {
    
    // get the input text
    var textVal = document.getElementById("myText").value;
    
    // process the input text
    processInput(textVal);
    
    // draw response
    respondToInput();
    
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function processInput(textVal){
    
    // split the raw text at the white space
    words = textVal.split(' ');

    // create blank string
    var str = "";

    // loop through array a random number of times
    for (i = 0; i < 5; i++) {

        // pick random word from array
        str = str + ' ' + words[getRandomInt(0, words.length)];

        // remove punctuation
        str = str.replace(/[^A-Za-z0-9\s]/g, "").replace(/\s{2,}/g, " ")

        // debug output 
        // TODO: Need this to be visual rather than text
        var n = str.length;
        document.getElementById("countChar").innerHTML = n;
        str = str.replace(/[^A-Za-z0-9\s]/g, "").replace(/\s{2,}/g, " ")
    }
    
    //Pick a random word within the array and place it on the screen
    document.getElementById("example").innerHTML = str;

    
    var string = document.getElementById('myText').value;
    var length = string.split(/[^\s]+/).length - 1;
    document.getElementById('total').innerHTML = length;

    var strTest = document.getElementById("myText").value;

    var strLength = strTest.length;

    for (var i = 0; i < strLength; i++) {
        //console.log(strTest.charAt(i));

        // add the char totals
        for (var key in stats) {
            if (stats.hasOwnProperty(key)) {

                if (strTest.charAt(i) == key) stats[key]++;
            }
        }
    }
}

