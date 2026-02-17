const text=document.getElementById("text");
const btn=document.getElementById("clrbtn");

const color=["red","aqua","green","yellow","violet","blue","pink"];

btn.addEventListener("click",function(){
    const randomIndex=Math.floor(Math.random()*color.length);
    text.style.color=color[randomIndex];
})