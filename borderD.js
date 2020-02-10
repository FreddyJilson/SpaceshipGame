//create the constructor for the class pad
function BorderD() {
    //initialisation code will go here

    //create private variables for the x and y coordinates
    var x = 1060,
        y = 5;

    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    BorderD.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);
        //start the line (path)
        context.beginPath();
        context.fillStyle = "#cccc00";
        context.moveTo(-80, -10);
        context.lineTo(80, -10);
        context.lineTo(80, 600);
        context.lineTo(-80, 600);
        //close the path
        context.closePath();
        context.fill();
        //go ahead and draw the line
        context.stroke();
        //restore the state of the context to what it was before our drawing
        context.restore();
    }


    //create a public property called Top
    Object.defineProperty(this, 'Top',
    {
        //getter
        get: function () {
            //return the y posn less the height
            return y;
        }
    }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
    {
        //getter
        get: function () {
            //return the y posn plus the height
            return y + 600;
        }
    }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
    {
        //getter
        get: function () {
            //return the x posn less the width
            return x - 80;
        }
    }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
    {
        //getter
        get: function () {
            //return the x posn plus the width
            return x + 80;
        }
    }
    )
}
