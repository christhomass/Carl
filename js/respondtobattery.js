function respondToBatteryLevel() {

    var batL = Math.floor(batLevel);

    switch (batL) {
        case 0:
            console.log("Battery Level is < 10");
            break;
        case 1:
            shapeLibrary.drawRect(1);
            console.log("Battery Level is < 10");
            break;
        case 2:
            shapeLibrary.drawRect(2);
            console.log("Battery Level is < 20");
            break;
        case 3:
            shapeLibrary.drawRect(3);
            console.log("Battery Level is < 30");
            break;
        case 4:
            shapeLibrary.drawRect(4);
            console.log("Battery Level is < 40");
            break;
        case 5:
            shapeLibrary.drawRect(5);
            console.log("Battery Level is < 50");
            break;
        case 6:
            shapeLibrary.drawRect(6);
            console.log("Battery Level is < 60");
            break;
        case 7:
            shapeLibrary.drawRect(7);
            console.log("Battery Level is < 70");
            break;
        case 8:
            shapeLibrary.drawRect(8);
            console.log("Battery Level is < 80");
            break;
        case 9:
            shapeLibrary.drawRect(9);
            console.log("Battery Level is < 90");
            break;
        case 10:
            shapeLibrary.drawRect(10);
            console.log("Battery Level is  100");
            break;
        default:
            console.log("Battery Level not found");
            break;
    }

};
