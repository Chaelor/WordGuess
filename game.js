//Array of what they will be guessing
var characterNames = ["doomfist", "genji", "mccree", "pharah", "reaper", "soldier", "sombra", "tracer",
"bastion", "hanzo", "junkrat", "mei", "torbjorn", "widowmaker", "dva", "orisa", "reinhardt", "roadhog",
"zarya", "ana", "brigitte", "lucio", "mercy", "moira", "symmetra", "zenyatta"];

//Possible user inputs
//var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "t", "u", "v", "x", "w", "y", "z"];

//Other variables
var wins = 0;
var losses = 0;
var userGuesses =["a"];
var currentWord = [];
var userLives = 10;
var computerWord = "";
var blankGuesses= []; //For rendering the blanks in the chosen word


//get a random character from the characterNames array
computerWord = [Math.floor(Math.random()* characterNames.length)];

var computerChoice = characterNames[computerWord];
console.log(computerChoice);

for( var i = 0; i < computerChoice.length; i++) {
    currentWord.push(" _ ");
};

//The magic!
document.addEventListener('keydown', function(e) {
    var userGuess = e.key;
    console.log(userGuess);

    //Checking to see if the userGuess has already been entered ******THIS IS WHERE I STOPPED
    if(userGuesses.indexof(userGuess) = -1) {
        userGuesses.push(userGuess);
    }
});

//Render the game
function renderGame() {
    //document.getElementById("game-state").innerHTML = blankGuesses.join(" ");
    document.getElementById("total-wins").innerHTML = "Wins:" + wins;
    document.getElementById("total-losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses-remaining").innerHTML = "Guesses left: " + userLives;
    document.getElementById("guessed-letter").innerHTML = "You've guessed:";
}

renderGame();