//Array of what they will be guessing
var characterNames = ["doomfist", "genji", "mccree", "pharah", "reaper", "soldier", "sombra", "tracer",
"bastion", "hanzo", "junkrat", "mei", "torbjorn", "widowmaker", "dva", "orisa", "reinhardt", "roadhog",
"zarya", "ana", "brigitte", "lucio", "mercy", "moira", "symmetra", "zenyatta"];

//Possible user inputs
//var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "t", "u", "v", "x", "w", "y", "z"];

//Other variables
var wins = 0;
var losses = 0;
var userGuesses =[];
var currentWord = [];
var userLives = 10;
var computerWord = "";
var blankGuesses= []; //For rendering the blanks in the chosen word

//Reset the game
function resetGame(){
    userGuesses =[];
    currentWord = [];
    userLives = 10;
    computerWord = "";
    blankGuesses= [];
    computerWord = [Math.floor(Math.random()* characterNames.length)];
    computerChoice = characterNames[computerWord];
console.log(computerChoice);
}

//get a random character from the characterNames array
computerWord = [Math.floor(Math.random()* characterNames.length)];

var computerChoice = characterNames[computerWord];
console.log(computerChoice);

//Making blanks so the user can guess the word.
for( var i = 0; i < computerChoice.length; i++) {
    blankGuesses.push(" _ ");
}

//Pushing the letters to an array so the user can guess
for( var i = 0; i< computerChoice.length; i++) {
    currentWord.push(computerChoice[i].charAt(0))
}

//Start gathering user data
document.addEventListener('keydown', function(event) {
    var userInput = event.key;
    console.log(userInput);

    //Checking to see if the userGuess has already been entered
    if(userGuesses.indexOf(userInput) == -1) {
        userGuesses.push(userInput);
        renderGame();

    //Checking to see if the guess exists in the word
    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === event.key) {
            blankGuesses[i] = event.key;
            renderGame();
        }
    }
    
    //Checking to see if we should take a life
    if (!(currentWord.includes(userInput) === true)) {
        userLives--;
        renderGame();
    }

    //Does the user have 0 lives?
    if (userLives === 0){
        document.getElementById("game-over").innerHTML = "<h1> Game Over! Hit another key to start a new game</h1>";
        losses++;
        resetGame();
    }

    //Start a new game
    if (blankGuesses.indexOf(" _ ")== -1){
        wins++;
        renderGame();
        resetGame();
    }
    }
});

//Render the game
function renderGame() {
    document.getElementById("game-state").innerHTML = blankGuesses.join(" ");
    document.getElementById("total-wins").innerHTML = "Wins:" + wins;
    document.getElementById("total-losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses-remaining").innerHTML = "Guesses left: " + userLives;
    document.getElementById("guessed-letters").innerHTML = "You've guessed:" + userGuesses.join();
}

renderGame();