function instantiateNoteController() {
  function NoteControllerDouble(){};
  var nc = new NoteControllerDouble();
  assert.isTrue( (nc instanceof Object) === true, 'can be instantiated')
};
instantiateNoteController();

function canUpdateInnerHTML(){

  let documentDouble = {
    getElementById: function(){
      return elementDouble;
    }
  }

  let elementDouble = {
    innerHTML: "double"
  }

  var nl = new NoteList;
  nl.addnote('Favourite drink: seltzer')
  var nc = new NoteController();

  nc.updateHTML(documentDouble)
  assert.isTrue(elementDouble.innerHTML === '<li><div>Favourite drink: sel</div></li>', 'can update HTML')
}

canUpdateInnerHTML();
