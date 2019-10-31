'use strict';

(function(exports) {

  function NoteController(noteList = new NoteList) {
    noteList.addnote('Favourite drink: seltzer')
    this.noteListView = new NoteListView(noteList)
  }

  NoteController.prototype.updateHTML = function(doc = document){
    var element = doc.getElementById('app');
    element.innerHTML = this.noteListView.returnHTML()
  };

exports.NoteController = NoteController;
})(this);
