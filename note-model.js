'use strict';

(function(exports) {

  function Note(text, id) {
    this.text = text;
    this.id = id;
  }

  Note.prototype.returntext = function(){
    return this.text
  }

  exports.Note = Note;
})(this);
