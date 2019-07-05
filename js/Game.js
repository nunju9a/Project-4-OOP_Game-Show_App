/**************************
Juan Nunez
Treehouse FSJS Techdegree
Project 4 - OOP Game App 
Game.js
***************************/
//CREATING GAME CLASS
class Game {
    missLimit = 5;                               // Maximum amount of wrong guesses. Once user reaches this number, the game is over
    constructor() {
        this.missed = 0;                       // Track the number of missed guesses, initially set to 0
        this.phrases =                        // Array of phrases - Star Wars characters
            [
                new Phrase("luke skywalker"),
                new Phrase("darth vader"),
                new Phrase("jar jar binks"),
                new Phrase("princess leia"),
                new Phrase("han solo"),
                new Phrase("chewbacca"),
                new Phrase("yoda"),
                new Phrase("obi wan kenobi"),
                new Phrase("padme"),
                new Phrase("kylo ren"),
                new Phrase("rey"),
                new Phrase("finn")
            ];
        this.activePhrase = null;                                                    // Initially there is no phrase chosen
    }
    // INITIALIZES GAME
    startGame() {
        const $startScreen = $("#overlay");
        $startScreen.fadeOut(2000);                                             // Overlay fades out and game screen appears
        this.resetLives();                                                     // Previous lives resets
        this.resetKeyboard();                                                 // Previous keyboard resets
        this.activePhrase = this.getRandomPhrase();                          // Random phrase is retrieved
        this.activePhrase.addPhraseToDisplay();                             // Phrase is displayed with objects hidden
    }
    // RANDOM PHRASE IS SELECTED
    getRandomPhrase() {
        let characterIndex = Math.floor(Math.random() * this.phrases.length);
        return (this.phrases[characterIndex]);
    }
    // METHOD THAT CONTROLS MOST OF THE GAME LOGIC
    handleInteraction($event) {
        let letter;
        let $target = $($event.target);
        if ($event.type === "click" || "keydown") {                     // If user clicks on screen keyboard OR presses actual keyboard...
            letter = $target.text();                                   // Store the value of what the user cliked or pressed (letters)
        }
        $target.prop("disabled", true);                              // Disable whichever letter the user chose (Can't be chosen again)
        if (this.activePhrase.checkLetter(letter)) {                // If the chosen letter matches a letter in the phrase...
            $target.addClass("chosen");                            // Give it the "chosen" class (Highlights the letter in green as per CSS)
            this.activePhrase.showMatchedLetter(letter);          // Show the matched letter (Un-hides the letter object)
            if (this.checkForWin()) {                            // If the user has won ... 
                this.gameOver();                                // Ends game 
            }
        } else {                                              // Otherwise (letter does NOT match)...
              $target.addClass("wrong");                     // Give it the "wrong class" (Highlights the letter in red as per CSS)
              this.removeLife();                            // Remove 1 life
          }
    }
    // CHECKS IF USER HAS WON 
    checkForWin() {
        let $missingChars = $('#phrase ul .hide');
        return ($missingChars.length === 0);          // Returns false if there are still hidden letters, returns true if there are none
    }

    // REMOVES LIFE FROM SCOREBOARD WHEN CALLED
    removeLife() {
        let $lives = $("#scoreboard li");                                             // Storing all the "lives" (The heart icons)
        let $lifeToRemove = $lives.eq(this.missed);                                  // Points to which heart based on how many misses 
        let $imageToReplace = $lifeToRemove.children().first();
        $imageToReplace.attr("src", "images/lostHeart.png");                       // Replaces that heart image with the "lost" heart image
        $imageToReplace.attr("alt", "Missed Heart Icon");
        $imageToReplace.delay(1000).slideUp();                                   // After a 1 second delay, the lost heart disapears
        this.missed++;                                                          // Missed guesses is incremented by 1
        if (this.missed === this.missLimit) {                                  // If missed guesses is the maximum amount...
            this.gameOver();                                                  // Ends game
        }
    }
    // RESETS THE LIVES
    resetLives() {
        let $lives = $("#scoreboard li img");
        $lives.attr("src", "images/liveHeart.png");                    // Restores lost hearts back to "live" heart images
        $lives.attr("alt", "Heart Icon");
        $lives.show();                                               // Shows all the "live" heart images

        this.missed = 0;                                           // Sets missed guesses back to 0
    }
    // RESETS THE KEYBOARD
    resetKeyboard() {
        let $keys = $("#qwerty .key");
        $keys.removeClass("wrong");                           // Remove all the wrong highlighted letters
        $keys.removeClass("chosen");                         // Remove all the chosen highlighted letters
        $keys.prop("disabled", false);
    }
    // DISPLAYS A MESSAGE ON WHETHER USER WINS OR LOSES
    gameOver() {
        let $mainScreen = $("#overlay");
        $mainScreen.show();                                                   // Leaves game screen and goes back to overlay
        let $message = $("#game-over-message");
        if (this.missed === this.missLimit) {                                // If user has max misses, they lose and...
            $(".title").text(`You are worse than Jar Jar Binks!`);
            $message.text(`The answer was '${this.activePhrase.phrase.toUpperCase()}'. Dare to play again?`); //Display losing message
            overlay.className = "lose animate-pop-in";                    // Gives overlay losing class name and styles (Darth Vader pic)
        } else {                                                         // Otherwise...
            $(".title").text(`The Force is strong with you!`).css(`front-style`, `bold`);
            $message.text(`You guessed '${this.activePhrase.phrase.toUpperCase()}' correctly! Dare to play again?`)
                .css(`front-style`, `bold`);                          // Display winning message
            overlay.className = "win animate-pop-in";                // Gives overlay winning class name and styles (Star Wars Victory pic)
        }
    }
}
