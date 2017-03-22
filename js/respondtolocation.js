function respondToLocation() {

    var lat = Math.floor(lati);

    switch (lat) {
        case 0:
            console.log("Latitude is 0");
            break;
        case 1:
            shapeLibrary.drawRect(1);
            console.log("Latitude is above 10");
            break;
        case 2:
            shapeLibrary.drawRect(2);
            console.log("Latitude is above 20");
            break;
        case 3:
            shapeLibrary.drawRect(3);
            console.log("Latitude is above 30");
            break;
        case 4:
            shapeLibrary.drawRect(4);
            console.log("Latitude is above 40");
            break;
        case 5:
            shapeLibrary.drawRect(5);
            console.log("Latitude is above 50");
            break;
        case 6:
            shapeLibrary.drawRect(6);
            console.log("Latitude is above 60");
            break;
        case 7:
            shapeLibrary.drawRect(7);
            console.log("Latitude is above 70");
            break;
        case 8:
            shapeLibrary.drawRect(8);
            console.log("Latitude is above 80");
            break;
        case 9:
            shapeLibrary.drawRect(9);
            console.log("Latitude is above 90");
            break;
        case 10:
            shapeLibrary.drawRect(10);
            console.log("Latitude is above 100");
            break;
        case 11:
            shapeLibrary.drawRect(2);
            console.log("Latitude is above 20");
            break;
        case 12:
            shapeLibrary.drawRect(3);
            console.log("Latitude is above 30");
            break;
        case 13:
            shapeLibrary.drawRect(4);
            console.log("Latitude is above 40");
            break;
        case 14:
            shapeLibrary.drawRect(5);
            console.log("Latitude is above 50");
            break;
        case 15:
            shapeLibrary.drawRect(6);
            console.log("Latitude is above 60");
            break;
        case 16:
            shapeLibrary.drawRect(7);
            console.log("Latitude is above 70");
            break;
        case 17:
            shapeLibrary.drawRect(8);
            console.log("Latitude is above 80");
            break;
        case 18:
            shapeLibrary.drawRect(9);
            console.log("Latitude is above 90");
            break;
        default:
            console.log("Latitude not found");
            break;
    }

    var long = Math.floor(longi);

    switch (long) {
        case 0:
            console.log("Longitude is 0");
            break;
        case 1:
            shapeLibrary.drawRect(1);
             console.log("Longitude is above 100");
            break;
        case 2:
            shapeLibrary.drawRect(2);
             console.log("Longitude is above 20");
            break;
        case 3:
            shapeLibrary.drawRect(3);
             console.log("Longitude is above 30");
            break;
        case 4:
            shapeLibrary.drawRect(4);
             console.log("Longitude is above 40");
            break;
        case 5:
            shapeLibrary.drawRect(5);
             console.log("Longitude is above 50");
            break;
        case 6:
            shapeLibrary.drawRect(6);
             console.log("Longitude is above 60");
            break;
        case 7:
            shapeLibrary.drawRect(7);
             console.log("Longitude is above 70");
            break;
        case 8:
            shapeLibrary.drawRect(8);
             console.log("Longitude is above 80");
            break;
        case 9:
            shapeLibrary.drawRect(9);
             console.log("Longitude is above 90");
            break;
        default:
            console.log("Longitude cant be found");
            break;
    }

}
