/*
EventListner listens for an event like:

- click
- change
- input
- keydown
- scroll
- submit
*/

//  Get the button from HTML
//  ------------------------------------------------------------
    const button = document.getElementById("btn");

/*
    Create a Function
    ------------------------------------------------------------
    function showMessage() {
    console.log("Button Clicked");
}
*/

/*  Tell JS to run "showMessage()" when the button is clicked.
    ------------------------------------------------------------
    button.addEventListener("click", showMessage);
*/

//  Anonymous Functions
//  ------------------------------------------------------------
    button.addEventListener("click", function () {
    console.log("Button clicked");
});
/*
    ------------------------------------------------------------
    The above allows you to create an embeded function inside the EventListner
*/
