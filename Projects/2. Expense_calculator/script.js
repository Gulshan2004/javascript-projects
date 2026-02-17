let expenses = [];   // array to store expense objects

function addExpense() {
    let name = document.getElementById("expenseName").value;
    let amount = Number(document.getElementById("expenseAmount").value);

    if(name === "" || amount <= 0){
        alert("Enter valid details");
        return;
    }

    // Create an object
    let expenseItem = {
        title: name,
        price: amount
    };

    // Push into array
    expenses.push(expenseItem);

    // Update UI
    displayExpenses();
    calculateTotal();

    // Clear inputs
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}

function displayExpenses(){
    let list = document.getElementById("expenseList");
    list.innerHTML = "";

    expenses.map((item,index) => {
        let li = document.createElement("li");
        li.textContent = `${item.title} — ₹${item.price}`;

        //create delete button
        let delBtn =document.createElement("button");
        delBtn.textContent ="Delete";
        delBtn.style.marginLeft ="10px";

        //Add delete event/functionality
        delBtn.addEventListener("click",function(){
            deleteExpense(index);
        });

        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

function calculateTotal(){
    let total = expenses.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("total").innerText = total;
}
function deleteExpense(index){
    expenses.splice(index,1); // remove 1 item at that index
    displayExpenses();  // redraw list 
    calculateTotal();  // update total
}