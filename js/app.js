/**************************
Juan Nunez
Treehouse FSJS Techdegree
Project 4 - OOP Game App 
app.js
***************************/
//const phrase = new Phrase();

//const phrase = new Phrase ('Life is like a box of chocolates');
//console.log(`Phrase - phrase: ${phrase.phrase}`);

let gameNew;

$( "#btn__reset" ).click( () => { gameNew = new Game(); gameNew.startGame(); } );

$( "#qwerty" ).on( "click", ".key", (event) => gameNew.handleInteraction( event ) );

$( "#qwerty" ).on( "keypress", ".key", (event) => gameNew.handleInteraction( event ) );

//document.addEventListener("keydown", event => {
    //if (!event.repeat && gameNew.activePhrase) {
    //  gameNew.handlePhysicalKeyboardInteraction(event.key);
   // }
//  });