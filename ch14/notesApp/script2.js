function updateDateTime(){
    const now = new Date()
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
    const currenrDateTime = now.toLocaleString('el-GR',options)
  
  
    $('#datetime').text = currenrDateTime
  }

  setInterval(updateDateTime, 1000);

  function noteCreation(){
    let noteElement = $('#note-input')
    let noteValue = noteElement.val()
    const main = $('#main')

    if(noteValue !== ""){
        let newNote = $('<div class="d-flex justify-content-around p-4 border border-dark">' +
                    '<div><input class="form-check-input p-3" type="checkbox" id="checkbox"></div>' +
                    '<div><p class="fs-2" id="note-text">' + noteValue + '</p></div>' +
                    '<div><button type="button" class="btn btn-white border-black" id="deleteBtn"><i class="fas fa-times"></i></button></div>' +
                    '</div>');

    main.append(newNote)

 
     newNote.find('#deleteBtn').on('click', function() {
        deleteNote(newNote);
    });


    newNote.find('#checkbox').on('change', function() {
        toggleTextDecoration(newNote.find('#checkbox'), newNote);
    });

    noteElement.val("");
    }
}


function deleteNote(noteElement) {
noteElement.remove();
}

function toggleTextDecoration(checkbox, noteElement) {
let paragraph = noteElement.find('#note-text');
if (checkbox.prop('checked')) {
    paragraph.css('text-decoration', 'line-through');
} else {
    paragraph.css('text-decoration', 'none');
}

  }