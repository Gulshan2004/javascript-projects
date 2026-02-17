const form=document.getElementById("form");
const input=document.getElementById("input");
const result=document.getElementById("result");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const value=input.value.trim();

    if(value===""){
        result.innerText="please enter something";
        return;
    }

    result.innerText=`You Searched for :${value}`;
    input.value="";
});