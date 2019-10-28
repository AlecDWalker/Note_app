'use strict';

function NoteList(){
  this.LIST = []
}

NoteList.prototype.returnlist = function(){
  return this.LIST
}

NoteList.prototype.addnote = function(text){
  note = new Note(text)
  this.LIST.push(note)
}
