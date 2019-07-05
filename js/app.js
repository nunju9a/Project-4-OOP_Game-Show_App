/**************************
Juan Nunez
Treehouse FSJS Techdegree
Project 4 - OOP Game App 
app.js
***************************/
let gameNew;
$( "#btn__reset" ).click( () => { gameNew = new Game(); gameNew.startGame(); } );         // Listening for "start game" button to be clicked

$( "#qwerty" ).on( "click", ".key", (event) => gameNew.handleInteraction( event));      // Listening for interactive keyboard to be clicked

document.addEventListener("keydown", function(event){                                 // Listening for physical keyboard to be pressed
    const keyPressed = event.key.toLowerCase();
    const validLetters = "abcdefghijklmnopqrstuvwxyz";
    const allKeys = document.getElementsByClassName("key");
    if(validLetters.includes(keyPressed)) {
        for(let key of allKeys) {
            if(key.innerText == keyPressed) {
                key.click();
            }
        }
    }   
});