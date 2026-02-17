// ======= Data storage (array of student objects) =======
let students = [];

// ======= DOM references =======
const nameIn = document.getElementById('studentName');
const rollIn = document.getElementById('studentRoll');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
const listEl = document.getElementById('studentList');
const countEl = document.getElementById('count');

// ======= Utility functions =======

// createStudent: returns a student object (uses destructuring of args)
const createStudent = (name, roll) => {
  return {
    id: Date.now(),
    name: name.trim(),
    roll: roll.trim()
  };
};



// renderList: renders students to the DOM
function renderList() {
  listEl.innerHTML = ''; // clear existing  list 

  // Destructuring inside forEach example
  students.forEach((student, idx) => {
    const { id, name, roll } = student; // object destructuring

    const li = document.createElement('li'); //Each student will appear as one list item in HTML.

    const left = document.createElement('div');
    left.textContent = `${name} (Roll: ${roll})`;

  // create delete button
    const del = document.createElement('button');
    del.className = 'deleteBtn';
    del.textContent = 'Delete';
    del.addEventListener('click', () => removeStudent(id));

    li.appendChild(left);
    li.appendChild(del);
    listEl.appendChild(li);
  });

  countEl.textContent = students.length; //Shows how many students are in the list currently.
}



// addStudent: validate, create, push and render
const addStudent = () => {
  const name = nameIn.value;
  const roll = rollIn.value;

  // basic validation to notify if the input is  not given 
  if (!name.trim() || !roll.trim()) {
    alert('Please enter both name and roll number.');
    return;
  }

  // create student object (using createStudent function)
  const stu = createStudent(name, roll);

  // push to students array (using spread to make new copy)
  students = [...students, stu];

  // clear inputs and re-render so that user can type new input
  nameIn.value = '';
  rollIn.value = '';
  nameIn.focus(); // user can immediately type again

  renderList(); // This refreshes the displayed list on screen to show the new student
};



// removeStudent: remove by id
const removeStudent = (id) => {
  // filter out the student with matching id
  students = students.filter(s => s.id !== id);
  renderList();
};

// clearAll
const clearAll = () => {
  if (!students.length) return;//if no students exists stop the function immediately 
  if (!confirm('Clear all students?')) return; //if user clicks cancel stop do nothing 
  students = []; // removes all student objects and resets array to empty again
  renderList(); // refrehes the screen clear list display and updates count to 0 
};

// event listeners
addBtn.addEventListener('click', addStudent);
clearBtn.addEventListener('click', clearAll);

// optional: allow Enter key when typing roll or name
[ nameIn, rollIn ].forEach(inp => {
  inp.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addStudent();
  });
});

// initial render
renderList();
