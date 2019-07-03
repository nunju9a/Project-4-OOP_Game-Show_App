/**************************
Juan Nunez
Treehouse FSJS Techdegree
Project 4 - OOP Game App 
Phrase.js
***************************/

//CREATING PHRASE CLASS
class Phrase {
    constructor(phrase) {                                                        // Constructor to hold phrase
        this.phrase = phrase.toLowerCase();                                     //Converts phrase to all lower case
    }
    // ADDS LETTER PLACEHOLDERS TO THE DISPLAY WHEN THE GAME STARTS
    addPhraseToDisplay() {
        const $ul = $('#phrase > ul');                                      // Targets 'ul' child of 'phrase' id

        // LOOPING THROUGH CHARACTERS OF PHRASE
        for (let x = 0; x < this.phrase.length; x++) {
            if (/[a-z]/.test(this.phrase[x])) {                         // Testing if phrase has letters
                const letter = document.createElement ('li');
                letter.setAttribute (`class`, `hide letter ${this.phrase[x]}`);
                letter.textContent = this.phrase[x];
                $ul.append(letter);                                 // Created+Appended li tags for each letter
            }   else if (/\s/.test(this.phrase[x])) {              // Testing if phrase has blank spaces
                    const space = document.createElement ('li');
                    space.setAttribute (`class`, `space`);
                    space.textContent = '';
                    $ul.append(space);                         // Created+Appended li tags for each blank space
                }
        }
    }

    // CHECKS TO SEE IF THE LETTER SELECTED BY PLAYER MATCHES A LETTER IN THE PHRASE
    checkLetter(letter) {
     return this.phrase.includes(letter);
    }
 
    // REAVEALS LETTERS ON BOARD THAT MATCH PLAYER'S SELECTION
    showMatchedLetter(letter) {
       const li= document.querySelectorAll("#phrase li");
       //LOOPING THROUGH ALL LI TAGS              
       for (let x = 0; x < li.length; x++) {
            match.setAttribute (`class`, `show letter ${letter}`);   // Shows letter that match
       }
    }
}