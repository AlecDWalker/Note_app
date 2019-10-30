function testnoteModelStoresText() {
  var note = new Note('test');
  assert.isTrue(note.text === 'test', "Test note model stores text");
};

function testModelReturnsText(){
  var note = new Note('test')
  assert.isTrue(note.returntext() === 'test', "Test model returns text");
}

testnoteModelStoresText();

testModelReturnsText();
