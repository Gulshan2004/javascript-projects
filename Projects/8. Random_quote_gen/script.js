const quoteText=document.getElementById("quote");
const authorText=document.getElementById("author");
const btn=document.getElementById("btn");

btn.addEventListener("click", async()=>{
    try{
        quoteText.innerText="Loading Quote....";
        authorText.innerText="";
        
        const res=await fetch("https://dummyjson.com/quotes/random");
        const data =await res.json();

        console.log(data);

        quoteText.innerText=`"${data.quote}"`;
        authorText.innerText=`-"${data.author}"`;
}catch(error){
    quoteText.innerText="OOOPS Something went wrong";
    authorText.innerText="";
    console.error(error);
}
});