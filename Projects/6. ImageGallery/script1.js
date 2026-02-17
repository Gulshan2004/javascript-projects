const mainImg=document.getElementById("mainImg");
const thumb=document.querySelectorAll(".thumb");

thumb.forEach(
    thumb=>{
        thumb.addEventListener("click",()=>{
            mainImg.src=thumb.src;
        })
    })