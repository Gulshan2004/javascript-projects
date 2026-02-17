/*const jokeText = document.getElementById("joke");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then(res => res.json())
    .then(data => {
      jokeText.innerText = data.joke;
    })
    .catch(err => {
      jokeText.innerText = "Something went wrong 😢";
      console.error(err);
    });
});*/
 
/* Same logic using async /await*/
const jokeText=document.getElementById("joke");
const btn =document.getElementById("btn");

btn.addEventListener("click", async()=>{
    try{
        jokeText.innerText ="Loading joke...";

        const res=await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
        const data=await res.json();

        console.log(data);
        
        jokeText.innerText =data.joke;
    } catch(error){
        jokeText.innerText ="something went wrong";
        console.error(error);
    }
});