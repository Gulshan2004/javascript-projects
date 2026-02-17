const menu = document.getElementById("menu");
const output = document.getElementById("output");

menu.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    output.innerText = `You clicked: ${e.target.innerText}`;
  }
});
