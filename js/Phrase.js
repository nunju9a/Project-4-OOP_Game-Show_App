/**************************
Juan Nunez
Treehouse FSJS Techdegree
Project 4 - OOP Game App 
Phrase.js
***************************/
//CREATING PHRASE CLASS
class Phrase {
    $phrase = $('#phrase ul');
    constructor( phrase ) {
	    this.phrase = phrase.toLowerCase();                 //Takes the phrase being held and converts to lowercase
    }
    
    // ADDS PHRASE TO DISPLAY
    addPhraseToDisplay() {
	    this.$phrase.empty();                                                            //Empties previous phrase
        // LOOPING THROUGH EVERY CHARACTER IN PHRASE
	    for ( let x = 0; x < this.phrase.length; x++ ) {
            let letter = this.phrase[ x ];                                            // Storing each character
            let $letter;
            if ( /\w/.test( letter ) ) {                                            // Testing if a letter
                $letter = $( `<li class="hide letter ${letter}">${letter}</li>` ); // Creates <li> and hides letter
            } else if ( / /.test( letter ) )  {                                   // Testing if a blank space
                  $letter = $( `<li class="space"> </li>` );                     // Creates <li> for blank space
              } else {
                    continue;
                }
            this.$phrase.append( $letter );                                  // Appends character to phrase object
	    }
    }
    // CHECKING EACH GUESSED LETTER TO SEE IF IT IS IN THE PHRASE
    checkLetter( letterGuess ) {
        // LOOPING THROUGH EVERY LETTER IN PHRASE
	    for ( let x = 0; x < this.phrase.length; x++ ) {
	        let phraseLetter = this.phrase[ x ];                               // Storing each letter
            if ( letterGuess === phraseLetter ) {                                    
                return( true );                                              // Return true if guess matches letter                                                         
            }
        } 
        return ( false );                                                  // Return false if no match
    }
    // REVEAL EACH LETTER ON THE BOARD THAT MATCHES THE PLAYER'S GUESS
    showMatchedLetter( letterGuess ) {
        let $letters = $( '#phrase ul .' + letterGuess );
        $letters.removeClass( "hide" );
        $letters.addClass( "show" );
    } 
}