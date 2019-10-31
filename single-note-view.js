'use strict';

(function(exports){

  function SingleNoteView(note){
    this.text = note.text
  }

  SingleNoteView.prototype.viewHTML = function(){
    var html = []
    html.push('<li><div>'+this.text+'</div></li>')
    return html.join();
  };
  exports.SingleNoteView = SingleNoteView;
})(this);
