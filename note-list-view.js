'use strict';

(function(exports) {

  function NoteListView(noteList){
    this.NOTELIST = noteList
  }

  NoteListView.prototype.returnHTML = function(){
    var html = []
    this.NOTELIST.LIST.forEach(function(note) {
      html.push('<li><div>'+note.text+'</div></li>')
    });
      if(html.length === 0) {
        return 'list is empty'} else{
          return html.join()}
    };

exports.NoteListView = NoteListView;
})(this);
