var name = prompt("What's your name?");
console.log("Hello " + name);

var movieTitles = [
    "us","insidious","texas chainsaw massacre","shaun of the dead"
];
//random word will be chosen from array
var Titles = movieTitles[
    Math.floor(Math.random() * movieTitles.length)
];
// adding underscores for letter in each word
var answerArray = [];
for (var i = 0; i < Titles.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = Titles.length;
// this is a while loop
while (remainingLetters > 0) {
    //displays players progress, joins elements of answerArray into a string
    alert(answerArray.join(" "));
    break;
}

var guess = prompt("Enter a letter and guess which horror movie this is! You may also click cancel to exit the game.");
//if players selects cancel during prompt break will exit loop aka game
if (guess === null) {
} else if (guess.length !== 1) {
    alert("Remember, you can only guess one letter at a time!");
} else {
    for (var j = 0; j < word.length; j++) {
        if (Titles[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
        }
    }
}