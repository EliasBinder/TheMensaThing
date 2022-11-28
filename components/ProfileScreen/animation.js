// for vertical scroll effect : https://codepen.io/davescottschneider/pen/dyVOQv

(function ()
{
    document.addEventListener("mousemove", parallax);

    const bubbles = document.querySelectorAll(".bubble");

    let oldPositions = {};
    bubbles.forEach(bubble => {
        oldPositions[bubble.id] = {x: bubble.style.left, y: bubble.style.top};
    })
    /*
    {
    bubble1: {x: 345, y: 23432},
    bubble2: {x: 245, y: 1234},
    }
     */

    function parallax(e)
    {
        bubbles.forEach(bubble => {
            let _w = window.innerWidth / 2;
            let _h = window.innerHeight / 2;
            let moveFactor = -0.1;
            let _mouseX = e.clientX;
            let _mouseY = e.clientY;

            let _x = (_mouseX - _w) * moveFactor;
            let _y = (_mouseY - _h) * moveFactor;

            //let originalX = bubble.style.left;
            //let originalY = bubble.style.top;
            //console.log("Original X: ", originalX);
            //console.log("Original Y: ", originalY);

            //let x = `${_depth3}, ${_depth2}, ${_depth1}`;
            //elem.style.backgroundPosition = x;

            let newPositionX = oldPositions[bubble].x + _x;
            let newPositionY = oldPositions[bubble].y + _y;
            console.log("newPositionX: ", newPositionX);
            console.log("newPositionY: ", newPositionY);

            bubble.style.left = newPositionX + "px";
            bubble.style.top = newPositionY + "px";
        });
    }
})();



/*
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
*/
