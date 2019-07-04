/**************************
Juan Nunez
Treehouse FSJS Techdegree
Project 4 - OOP Game App 
Game.js
***************************/
class Game {
    maxMisses = 5;

    constructor() {
        this.missed = 0;
        this.phrases =
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
        this.activePhrase = null;
    }

    startGame() {
        let $startScreen = $("#overlay");
        $startScreen.fadeOut(2000);

        this.resetLives();
        this.resetKeyboard();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();


    }

    getRandomPhrase() {
        let index = Math.floor(Math.random() * this.phrases.length);
        return (this.phrases[index]);
    }

    removeLife() {
        let $lives = $("#scoreboard li");
        let $lifeToRemove = $lives.eq(this.missed);
        let $imageToReplace = $lifeToRemove.children().first();


        $imageToReplace.attr("src", "images/lostHeart.png");
        $imageToReplace.attr("alt", "Missed Heart Icon");

        
        $imageToReplace.delay(750).slideUp();

        this.missed++;
        if (this.missed === this.maxMisses) {
            this.gameOver();
        }

    }

    resetLives() {
        let $lives = $("#scoreboard li img");
        $lives.attr("src", "images/liveHeart.png");
        $lives.attr("alt", "Heart Icon");
        $lives.show();

        this.missed = 0;
    }

    resetKeyboard() {
        let $keys = $("#qwerty .key");
        $keys.removeClass("wrong");
        $keys.removeClass("chosen");
        $keys.prop("disabled", false);
    }

    checkForWin() {
        let $missingChars = $('#phrase ul .hide');
        return ($missingChars.length === 0);
    }

    gameOver() {

        let $startScreen = $("#overlay");
        $startScreen.show();

        let $message = $("#game-over-message");
        if (this.missed === this.maxMisses) {
            $(".title").text(`You are worse than Jar Jar Binks!`);
            $message.text(`The answer was '${this.activePhrase.phrase.toUpperCase()}'. Dare to play again?`);
            overlay.className = "lose animate-pop-in";
        }
        else {
            $(".title").text(`The Force is strong with you!`).css(`front-style`, `bold`);
            $message.text(`You guessed '${this.activePhrase.phrase.toUpperCase()}' correctly! Dare to play again?`)
                .css(`front-style`, `bold`);
            overlay.className = "win animate-pop-in";
        }

    }

    handleInteraction($event) {

        let letter;
        let $target = $($event.target);
        if ($event.type === "click") {
            letter = $target.text();
        }

        $target.prop("disabled", true);

        if (this.activePhrase.checkLetter(letter)) {
            
            $target.addClass("chosen");
            this.activePhrase.showMatchedLetter(letter);

            if (this.checkForWin()) {
                this.gameOver();
            }
        }
        else {
        
            $target.addClass("wrong");
            this.removeLife();
        }
    }
}
