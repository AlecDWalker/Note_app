'use strict';


(function(exports) {

function NoteList(){
  this.LIST = []
}

NoteList.prototype.returnlist = function(){
  return this.LIST
}

NoteList.prototype.addnote = function(text){
  this.LIST.push(new Note(text, this.LIST.length))
}

exports.NoteList = NoteList;
})(this);
