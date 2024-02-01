function updateDateTime(){
  const now = new Date()
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
  const currenrDateTime = now.toLocaleString('el-GR',options)


  document.querySelector('#datetime').textContent = currenrDateTime
}

setInterval(updateDateTime, 1000);



function noteCreation(){
  
  let noteElement = document.getElementById('note-input')
  let noteValue = noteElement.value
  const main = document.getElementById('main')

  if(noteValue != ""){

    let newNote = document.createElement('div');
    newNote.className = 'd-flex justify-content-around p-4 border border-dark';


    newNote.innerHTML = 
    `<div>
        <input class="form-check-input p-3" type="checkbox" id="checkbox">
    </div>
    <div>
        <p class="fs-2" id="note-text">${noteValue}</p>
    </div>
    <div>
        <button type="button" class="btn btn-white border-black" id="deleteBtn">
            <i class="fas fa-times"></i>
        </button>
    </div>
</div>`

main.appendChild(newNote)

// Attach a click event listener to the delete button
let deleteButton = newNote.querySelector('#deleteBtn')
    deleteButton.addEventListener('click', function() {
        deleteNote(deleteButton.parentNode.parentNode)
    });


// Attach a click event listener to the checkox button
let checkButton = newNote.querySelector('#checkbox')
checkButton.addEventListener('change', function(){
    toggleTextDecoration(checkbox, newNote);
})

    noteElement.value = ""
  }

  // Function to delete a note element
function deleteNote(noteElement) {
  const main = document.getElementById('main')
  main.removeChild(noteElement)
  }

// Function to toggle text decoration based on checkbox state
function toggleTextDecoration(checkbox, noteElement) {
  let paragraph = noteElement.querySelector('#note-text');
  if (checkbox.checked) {
      paragraph.style.textDecoration = 'line-through';
      
  } else {
      paragraph.style.textDecoration = 'none';
  }
}

}



