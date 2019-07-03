/**************************
Juan Nunez
Treehouse FSJS Techdegree
Project 4 - OOP Game App 
Game.js
***************************/

  class Game {
    
    constructor() {
      this.missed = 0;
      this.phrases = [
        new Phrase("luke skywalker"),
        new Phrase("darth vader"),
        new Phrase("jar jar binks"),
        new Phrase("princess leia"),
        new Phrase("han solo"),
        new Phrase("chewbacca"),
        new Phrase("yoda"),
        new Phrase("obi wan kenobi"),
        new Phrase("emperor palpatine"),
        new Phrase("kylo ren"),
        new Phrase("rey"),
        new Phrase("finn")
      ];
      this.activePhrase = null;

      this.resetForGameOver = this.resetForGameOver.bind(this); // bind this object so that wheen resetForGameOver is called in setTimeOut it behaves as expected
    }

  }