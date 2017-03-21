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
            color: '#D8644B',
            dims: [700, 300, 200, 100]
        }, {
            color: '#800000',
            dims: [600, 300, 200, 100]
        },
        {
            color: '#4B82D8',
            dims: [500, 300, 200, 100]
        },
        {
            color: '#8646B3',
            dims: [100, 300, 200, 100]
        },
        {
            color: '#8DED62',
            dims: [300, 300, 200, 100]
        }, {
            color: '#8DFD62',
            dims: [400, 300, 200, 100]
        }
    ];

}
