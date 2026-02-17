const input=document.getElementById("itemInput");
const btn=document.getElementById("addbtn");
const list=document.getElementById("list");

let items=[];

btn.addEventListener("click", ()=>{
    const value=input.value.trim();
    if(value===""){
        console.log("Please Enter a valid input");
        return;
    }
    items.push(value);
    input.value="";
    render();
});

function render(){
    list.innerHTML="";
    items.forEach((item, index) => {
        const li=document.createElement("li");
        li.innerText=item;

        //include delete Button
        //each delete button stores the index of the item
        //data-index helps us know which item to delete 
        const delBtn=document.createElement("button");
        delBtn.innerText="❌";
        delBtn.setAttribute("data-index",index);

        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

//ADD ONE even Listener to the list (delegation)
/*EXPLANATION:-
click happens on a button
event bubbles up to <ul>
we check that e.target.tagName ==="BUTTON"
get index from data-index
remove the input form array
re render UI*/ 
list.addEventListener("click",(e)=>{
    if(e.target.tagName ==="BUTTON"){
        const index= e.target.getAttribute("data-index");
        items.splice(index,1);
        render();
    }
})