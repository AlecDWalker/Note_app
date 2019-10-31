function instantiatesWithNoteText(){
  var note = new Note('test')
  var singleNoteView = new SingleNoteView(note)
  assert.isTrue(singleNoteView.text === 'test', 'sets a text value when created')
}

instantiatesWithNoteText();


function convertsTextToHTML(){
  var note = new Note('test')
  var singleNoteView = new SingleNoteView(note)
  assert.isTrue(singleNoteView.viewHTML() === '<li><div>test</div></li>', 'can view in HTML')
}

convertsTextToHTML();
