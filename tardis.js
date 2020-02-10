//create the constructor for the class saucer
function Tardis() {

    //initialisation code will go here

    //create private variables for the x and y coordinates
    var x = 100,
        y = 200,
    vx = 0,
    vy = 0,

    RedWindow = 1;
    Boom = false;
    
    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    Tardis.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);
        //start the line (path)
        context.beginPath();
        context.fillStyle = "#00688B";
        context.moveTo(40, 40);
        context.lineTo(40, -40);
        context.lineTo(20, -40);
        context.lineTo(20, -60);
        context.lineTo(10, -60);
        context.lineTo(10, -100);
        context.lineTo(-10, -100);
        context.lineTo(-10, -60);
        context.lineTo(-20, -60);
        context.lineTo(-20, -40);
        context.lineTo(-40, -40);
        context.lineTo(-40, 40);
        context.lineTo(20, 40);
        //close the path
        context.closePath();
        context.fill();
        //go ahead and draw the line
        context.stroke();

        DrawWindows(context);

        //if the ship has blown up
        if (Boom == true) {
            //create a new instance of an image
            var img = new Image();
            //get the bitmap source
            img.src = "pow.png";
            //draw the image on the context
            context.drawImage(img, -100, -60);
        }

        
        //restore the state of the context to what it was before our drawing
        context.restore();
    }


        function DrawWindows(context) {
            
            //var for the offset of the window to be drawn
            var XOffset = -30,
                //var for loop counter to indicate which window we are drawing
                WindowNo = 1,
                //var to store the colour to use
                Colour = "";
            //loop through each window
            while (WindowNo != 6) {
                //if the red window is being drawn then set the colour to red
                if (WindowNo == RedWindow) {
                    //set colour to red
                    Colour = "#ff0000";
                }
                else {
                    //set colour to white
                    Colour = "#ffffff";
                }
                //draw the window
                Window(context, XOffset, -12, Colour);
                //point at the next window
                WindowNo++;
                //work out the position of the next window
                XOffset = XOffset + 15;
            }
            //chage the red window to the next one
            RedWindow = RedWindow + .25;
            //if the red window is 6 thats too many
            if (RedWindow == 6) {
                //set it back to 1
                RedWindow = 1;

        }
                   
    }

    function Window(context, xposn, yposn, colour) {
        //start the path
        context.beginPath();
        context.fillStyle = colour;
        //x, y, radius, start_angle, end_angle, anti-clockwise
        context.arc(xposn, yposn, 5, 0, (Math.PI * 2));
        context.fill();
        context.stroke();
    }

    Tardis.prototype.move = function ()
    {
        //change the x axis by the x velocity
        x += vx;
        //change the y axis by the y velocity
        y += vy;

    }


    //public method to set the vector of the square
    Tardis.prototype.setVector = function (vector)
    {
        //set vx
        vx = vector.VX;
        //set vy
        vy = vector.VY;
    }

    //public method to set the vector of the saucer
    Tardis.prototype.accelerate = function (Acceleration)
    {
        //set vx
        vx += Acceleration.AX;
        //set vy
        vy += Acceleration.AY;
    }





    //create a public property called Top
    Object.defineProperty(this, 'Top',
    {
        //getter
        get: function () {
            //return the value of y less height
            return y - 20;
        }
    }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
    {
        //getter
        get: function () {
            //return the value of y plus height
            return y + 20;
        }
    }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
    {
        //getter
        get: function () {
            //return the value of x less width
            return x - 30;
        }
    }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
    {
        //getter
        get: function () {
            //return the value of x plus width
            return x + 30;
        }
    }
    )

    Tardis.prototype.halt = function () {

        //temp variable to store the vy
        var temp = vy;
        //kill all velocity
        vx = 0;
        vy = 0;
        if (temp > .4)
        {
            Boom = true;
            
        }

        
        
        
        
    }


}
