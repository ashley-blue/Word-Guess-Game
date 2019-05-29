var name = prompt("What's your name?");
console.log("Hello " + name);

var movieTitles = [
    "us","insidious","texas chainsaw massacre","shaun of the dead"
];
var Titles = movieTitles[
    Math.floor(Math.random() * movieTitles.length)
];