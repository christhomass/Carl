
var inputButton = document.getElementById('input-button');
inputButton.addEventListener('click', buttonEventHandler);

function buttonEventHandler() {
    
var output = document.getElementById("out");

    if (!navigator.geolocation) {
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    }


    function success(position) {

        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

        if ((latitude > 0) && (latitude < 100)) {
            ctx.fillStyle = "#000000", ctx.fillRect(0, 0, 100, 100);
            console.log("Lat hit");
        }


    };

    function error() {
        output.innerHTML = "Unable to retrieve your location";
    }

    output.innerHTML = "<p>Im gonna find where you live </p>";

    navigator.geolocation.getCurrentPosition(success, error);
}

