function handlesEmptyNotes(){
  var note = new Note;
  var noteList = new NoteList;
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML() === 'list is empty', 'can be called on an empty list')
};

handlesEmptyNotes();

function handlesOneNote(){
  var note = new Note;
  var noteList = new NoteList;
  noteList.addnote('Test')
  var noteListView = new NoteListView(noteList);
  var htmllist = noteListView.returnHTML()
  assert.isTrue(htmllist === '<li><div>Test</div></li>', 'can return HTML for a single note')
};

handlesOneNote();

function handlesTwoNotes(){
  var note = new Note;
  var noteList = new NoteList;
  noteList.addnote('One')
  noteList.addnote('Two')
  var noteListView = new NoteListView(noteList);
  var htmllist = noteListView.returnHTML()
  assert.isTrue(htmllist === '<li><div>One</div></li>,<li><div>Two</div></li>', 'can return HTML for multiple notes')
}

handlesTwoNotes();

function cutsAtTwentyCharacters(){
  var note = new Note;
  var noteList = new NoteList;
  noteList.addnote('abcdefghijklmnopqrstuvwxyz')
  var noteListView = new NoteListView(noteList);
  var htmllist = noteListView.returnHTML()
  console.log(htmllist)
  assert.isTrue(htmllist === '<li><div>abcdefghijklmnopqrst</div></li>', 'only views the first 20 characters')
}

cutsAtTwentyCharacters();
