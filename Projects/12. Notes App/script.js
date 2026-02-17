const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addNoteBtn");
const notesList = document.getElementById("notesList");

// Load Notes from localStorage or empty array
let notes = JSON.parse(localStorage.getItem("notes")) || [];

renderNotes();

addBtn.addEventListener("click", () => {
    const text = noteInput.value.trim();
    
    if (text === "") {
        console.log("Please Enter something");
        return;
    }

    // 🔹 ADD NOTE
    notes.push(text);

    // 🔹 SAVE TO localStorage
    localStorage.setItem("notes", JSON.stringify(notes));

    noteInput.value = "";// refresehes the input Box
    renderNotes();
    /*We call renderNotes() after updating the array to re-render 
    the UI so it reflects the current state of the data stored in the notes array. */
});

function renderNotes() {
    notesList.innerHTML = "";

    notes.forEach((note,index) => {
        const li = document.createElement("li");
        
        const span =document.createElement("span");
        span.innerText=note;

        const delBtn=document.createElement("button");
        delBtn.innerText="❌";
        delBtn.setAttribute("data-index",index);

        li.appendChild(span);
        li.appendChild(delBtn);
        notesList.appendChild(li);
    });
}

/* EXPLANATION OF THE CODE BELOW :
1️⃣ User clicks ❌
2️⃣ Event bubbles to <ul>
3️⃣ e.target is the button
4️⃣ Read data-index
5️⃣ Remove note from array
6️⃣ Update localStorage
7️⃣ Re-render UI
*/
notesList.addEventListener("click",(e)=>{
    if(e.target.tagName === "BUTTON"){
        const index=e.target.getAttribute("data-index");

        notes.splice(index,1);
        localStorage.setItem("notes",JSON.stringify(notes));
        renderNotes();
    }
})
