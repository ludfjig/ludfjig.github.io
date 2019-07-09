(function() {
  "use strict";

  let dropX = 0;
  let dropY = 0;

  window.addEventListener("load", init);

  function init() {
    document.addEventListener("dragend", release);
    document.addEventListener("dragenter", enter);
    document.addEventListener("dragover", over);
    document.addEventListener("dragstart", (ev) => {
      ev.dataTransfer.dropEffect = "move";
    })
  }

  function release(ev) {
    ev.preventDefault();
    //console.log(ev);
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

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
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
