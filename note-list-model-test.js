function testListStartsEmpty(){
  var notelist = new NoteList();
  assert.isTrue(notelist.LIST.length === 0, 'note list starts empty');
};


function testAddNotes(){
  var notelist = new NoteList();
  var note = new Note();
  notelist.addnote('Hello');
  assert.isTrue(notelist.LIST.length === 1, 'can add notes to the list');
}

function testCanReturnList(){
  var notelist = new NoteList();
  var note = new Note();
  notelist.addnote('Hello');
  assert.isTrue(notelist.returnlist() === notelist.LIST, 'can return note list');
};

testListStartsEmpty();
testCanReturnList();
testAddNotes();
