var ShapeLibrary = function(ctx, c) {
    console.log("ShapeLibrary instantiated");

    this.ctx = ctx;
    this.c = c;

    this.rectangles;

    this.defineRectangles();
};

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
ShapeLibrary.prototype.drawArc = function() {
    ctx.beginPath();
    ctx.arc(288, 75, 70, 0, Math.PI, false);
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.fillStyle = '#550000';
    ctx.fill();
}

ShapeLibrary.prototype.drawCircle = function() {

};

ShapeLibrary.prototype.drawRect = function(i) {
    console.log('Drawing Rectange: ' + i + "   dims: " +
        this.rectangles[0] + '-' + this.rectangles[1] +
        '-' + this.rectangles[2] + '-' + this.rectangles[3]);
    if (this.rectangles[i] != null) {
        this.ctx.fillStyle = this.rectangles[i].color;

        this.ctx.fillRect(this.rectangles[i].dims[0], this.rectangles[i].dims[1], this.rectangles[i].dims[2], this.rectangles[i].dims[3]);
    }
};

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
ShapeLibrary.prototype.randomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


ShapeLibrary.prototype.defineRectangles = function() {

    this.rectangles = [{
        // Rectangle 0
            color: '#D8644B',
            dims: [100, 300, 200, 100]
        }, 
        // Rectangle 1               
                       { 
            color: '#800000',
            dims: [200, 500, 200, 100]
        },
        // Rectangle 2
        {
            color: '#4B82D8',
            dims: [500, 20, 40, 500]
        },
        // Rectangle 3
        {
            color: '#80BD4D',
            dims: [60, 600, 200, 30]
        },
        // Rectangle 4
        {
            color: '#59A4D6',
            dims: [900, 100, 500, 400]
        }, 
        // Rectangle 5
        {
            color: '#BD4D6B',
            dims: [700, 500, 60, 100]
        }, 
        // Rectangle 6               
        {
            color: '#1B4484',
            dims: [300, 100, 50, 800]
        }, 
        // Rectangle 7               
        {
            color: '#57B0AF',
            dims: [900, 150, 400, 200]
        }, 
        // Rectangle 8               
        {
            color: '#9C4D91',
            dims: [100, 350, 800, 40]
        }, 
        // Rectangle 9               
        {
            color: '#EDB776',
            dims: [700, 500, 60, 100]
        }, 
        // Rectangle 10               ------------------ Colour
        {
            color: '#EDB776',
            dims: [70, 160, 250, 800]
        },
        // Rectangle 11              
        {
            color: '#EDB776',
            dims: [610, 350, 100, 100]
        }, 
        // Rectangle 12               
        {
            color: '#EDB776',
            dims: [400, 20, 500, 25]
        },  
        // Rectangle 13               
        {
            color: '#EDB776',
            dims: [1000, 200, 40, 250]
        },  
        // Rectangle 14               
        {
            color: '#EDB776',
            dims: [800, 600, 500, 55]
        },  
        // Rectangle 15               
        {
            color: '#EDB776',
            dims: [800, 50, 200, 100]
        },  
        // Rectangle 16               
        {
            color: '#EDB776',
            dims: [400, 400, 60, 60]
        },  
        // Rectangle 17               
        {
            color: '#EDB776',
            dims: [350, 50, 500, 25]
        },  
        // Rectangle 18               
        {
            color: '#EDB776',
            dims: [700, 500, 60, 100]
        }, 
                       
                       
                       
    ];

}