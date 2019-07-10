(function() {
  "use strict";

  let dropX = 0;
  let dropY = 0;
  let board;

  window.addEventListener("load", init);


  function init() {
    document.addEventListener("dragend", release);
    document.addEventListener("dragenter", enter);
    document.addEventListener("dragover", over);
    document.addEventListener("dragstart", (ev) => {
      ev.preventDefault();
      ev.dataTransfer.dropEffect = "move";
    })
    board = new GameBoard();
    populateBoard();
  }

  function release(ev) {
    ev.preventDefault();
    //console.log(ev);
    console.log(board.getSquare(dropX, dropY));

    ev.target.style.top = dropY + "px";
    ev.target.style.left = dropX + "px";

  }

  function enter(ev) {
    ev.preventDefault();
    dropX = ev.target.getBoundingClientRect().x;
    dropY = ev.target.getBoundingClientRect().y;
  }

  function over(ev) {
    ev.preventDefault();
  }



  class GameBoard {
    constructor() {
      for (let i = 'a'; i <= 'h'; i = nextChar(i)) {
        for (let j = 1; j <= 8; j++) {
          this[i + j] = "";
        }
      }
    }

    getSquareColor(sqr) {
      let rank = parseInt(sqr[1]);
      let file = sqr.charCodeAt(0);
      if (rank % 2 === file % 2) {
        console.log("black");
      } else {
        console.log("white");
      }
    }

    getSquare(x, y) {
      let ascii = x / 100 + 97;
      let file = String.fromCharCode(ascii);
      let rank = 8 - y / 100;
      return file + rank;
    }
  }

  class Piece {
    constructor(name,sqr){
      this.name = name;
      this.sqr = sqr;
    }

    getName(){
      console.log(this.name);
    }

    isValidMove(){
      return true;
    }
  }

  class Rook extends Piece {
    constructor(name, sqr){
      super(name, sqr);
    }
  }

  function populateBoard(){

  }

  /////////////////////////////////////////////////////
  /////////////////////////////////////////////////////
  /////////////////////////////////////////////////////

  function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
  }

  function id(idName) {
    return document.getElementById(idName);
  }

  function qs(query) {
    return document.querySelector(query);
  }

  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();
