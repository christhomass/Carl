//repson when button is clicked
var inputButton = document.getElementById('input-button');
inputButton.addEventListener('click', buttonEventHandler);

function buttonEventHandler() { 
var output = document.getElementById("out");

    if (!navigator.geolocation) {
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    }

//if location can be tracked
    function success (position) {

        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
        
        
        //divide responce by 10 so switch case can take controll
        var latitudeVal = Math.floor(latitude / 10);

        switch (latitudeVal) {
            case 0:
                console.log("Say 00");
                break;
            case 1:
                console.log("Say 10");
                break;
            case 2:
                console.log("Say 20");
                break;
            case 3:
                console.log("Say 30");
                break;
            case 4:
                console.log("Say 40");
                break;
            case 5:
                console.log("Say 50");
                break;
            case 6:
                console.log("Say 60");
                break;
            case 7:
                console.log("Say 70");
                break;
            case 8:
                console.log("Say 80");
                break;
            case 9:
                console.log("Say 90");
                break;
            case 10:
                console.log("Say 100");
                break;
            default:
                console.log("Say :P");
                break;
        }
        
        
        //divide responce by 10 so switch case can take controll
        var longitudeVal = Math.floor(longitude / 10);
        
        switch (longitudeVal) {
            case 0:
                console.log("Say 00");
                break;
            case 1:
                console.log("Say 10");
                break;
            case 2:
                console.log("Say 20");
                break;
            case 3:
                console.log("Say 30");
                break;
            case 4:
                console.log("Say 40");
                break;
            case 5:
                console.log("Say 50");
                break;
            case 6:
                console.log("Say 60");
                break;
            case 7:
                console.log("Say 70");
                break;
            case 8:
                console.log("Say 80");
                break;
            case 9:
                console.log("Say 90");
                break;
            case 10:
                console.log("Say 100");
                break;
            default:
                console.log("Say :P");
                break;
        }
};

    //if location cant be tracked
    function error() {
        output.innerHTML = "Unable to retrieve your location";
    }

    output.innerHTML = "<p>Im gonna find where you live nonce </p>";

    navigator.geolocation.getCurrentPosition(success, error);
}

