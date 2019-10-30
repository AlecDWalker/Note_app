function instantiateNoteController() {
  var noteList = new NoteList();
  var noteController = new NoteController();
  assert.isTrue(noteController instanceof Object, 'can be instantiated')
};
instantiateNoteController();
