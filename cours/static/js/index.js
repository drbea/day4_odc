const body = document.getElementById("body");
body.style.backgroundColor = "#41A465";

const para = document.createElement("p")
body.appendChild(para)
para.style.border = "3px dashed #4165A4"


const btn = document.createElement("button");
btn.innerText = "Click moi";
btn.style.margin = "0 auto";

body.appendChild(btn)

const span = document.createElement("span");
span.style.textAlign = "center";
span.style.display = "block";
span.style.fontSize = "5em";

body.appendChild(span);

let nbClick = 0;
// btn.addEventListener('mouseover', () => {
    btn.addEventListener('click', () => {
    nbClick++;
    span.innerText = `${nbClick} fois`;
    // let para = document.getElementById("new-p");
    // console.log(para.innerText) 
})


h1 = document.createElement("h1");
body.appendChild(h1)
h1.innerText = "Bonjour ODC "
h1.style.color = "blue";
h1.style.backgroundColor = "#FFF";
h1.style.textAlign = "center";
h1.style.border = "3px solid red"


// Recuperer p avec id = new-p
let newp = document.getElementById("new-p")
console.log(newp.innerText)

