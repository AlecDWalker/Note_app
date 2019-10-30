'use strict';

(function(exports) {

  function NoteController(noteList = new NoteList){
    noteList.addnote('Favourite drink: seltzer')
    this.noteListView = new NoteListView(noteList)
  }

  NoteController.prototype.updateHTML = function(){
    var element = document.getElementById('app');
    element.innerHTML = this.noteListView.returnHTML()
  };

exports.NoteController = NoteController;
exports.NoteList = NoteList;
})(this);
