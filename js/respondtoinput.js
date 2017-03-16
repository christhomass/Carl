function respondToInput(){

        
/* ------------------------------------------------- A -- */     
var aVal = Math.floor(stats.a / 10);
    
switch(aVal){
    case 0:
        shapeLibrary.drawRect(0);
        break;
    case 1:
        shapeLibrary.drawRect(1);
        break;
    case 2:
        shapeLibrary.drawRect(2);
        break;
    case 3:
        shapeLibrary.drawRect(3);
        break;
    case 4:
        shapeLibrary.drawRect(4);
        break;
    default:
        console.log("oh shit");
        break;
    }
    

/* ------------------------------------------------- B -- */     
var bVal = Math.floor(stats.b / 10);
    
switch(bVal){
    case 0:
        shapeLibrary.drawRect(0);
        break;
    case 1:
        shapeLibrary.drawRect(1);
        break;
    case 2:
        shapeLibrary.drawRect(2);
        break;
    case 3:
        shapeLibrary.drawRect(3);
        break;
    case 4:
        shapeLibrary.drawRect(4);
        break;
    default:
        console.log("oh shit");
        break;
    }    

}

