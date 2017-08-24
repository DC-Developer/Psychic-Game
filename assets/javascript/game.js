var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var user = null;

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var random = letters[Math.floor(Math.random()*letters.length)];


document.onkeyup = function(event) {
    
       //gets the user keyinput, making it lowercase so if its the same letter it will be compatible with the array letters, then stores it into user
        var user = String.fromCharCode(event.keyCode).toLowerCase();
    
 
        if (guessesSoFar.indexOf(user) < 0 && letters.indexOf(user) >= 0) {
            guessesSoFar[guessesSoFar.length]=user;
            
            guessesLeft--;
        }

        if (random == user) {
            wins++;
            guessesLeft = 9;
            guessesSoFar = [];
            random = letters[Math.floor(Math.random() * letters.length)];
           
        }
        if (guessesLeft == 0) {
            losses++;
            guessesLeft = 9;
            guessesSoFar = [];
            random = letters[Math.floor(Math.random() * letters.length)];
            
        }
        var update = "<p>Wins: " + wins+"</p><br>"+ "<p>Losses: " + losses+ "</p><br>"+ "<p>Guesses left: " +guessesLeft+ "</p><br>" + "<p>Your guesses so far: " + guessesSoFar+ "</p>";
        
        document.querySelector("#content").innerHTML = update;
    }    