//Array of what they will be guessing
var characterNames = ["doomfist", "genji", "mccree", "pharah", "reaper", "soldier", "sombra", "tracer",
"bastion", "hanzo", "junkrat", "mei", "torbjorn", "widowmaker", "dva", "orisa", "reinhardt", "roadhog",
"zarya", "ana", "brigitte", "lucio", "mercy", "moira", "symmetra", "zenyatta"];

//Other variables
var wins = 0; //Tracks wins
var losses = 0; //Tracks losses
var userLives = 10; //Tracking the lives
var userGuesses =[]; //Store the guessed variables here
var currentWord = []; //Store the current word we are guessing here
var computerWord = ""; //Stores the initial math for getting the computer word
var blankGuesses= []; //For rendering the blanks in the chosen word
var lastWord= ""; //So the user knows what the last word was

//Reset the game
function resetGame(){
    //Print last word.
    lastWord = computerChoice;
    document.getElementById("game-over").innerHTML = "The last word was: " + lastWord + ". Begin typing again to start a new game";

    //Resets the variables
    userGuesses =[];
    currentWord = [];
    userLives = 10;
    computerWord = "";
    blankGuesses= [];

    //Resets the word choice
    computerWord = [Math.floor(Math.random()* characterNames.length)];
    computerChoice = characterNames[computerWord];
    console.log(computerChoice);

    //Resets the blank guesses
    for( var i = 0; i < computerChoice.length; i++) {
        blankGuesses.push(" _ ");
    }

    //Resets the word choice
    for( var i = 0; i< computerChoice.length; i++) {
        currentWord.push(computerChoice[i].charAt(0))
    }

    //Render the fresh game-state
    renderGame();
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

//Start gathering user data on keys down
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

    //Does the user have 0 lives? If they do, start a game
    if (userLives === 0){
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

//Calling the initial render after the rest of everything else has loaded.
renderGame();