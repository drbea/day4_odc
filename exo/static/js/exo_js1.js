const body = document.getElementById("body");

const form = document.createElement("form");
form.style.margin = "100px";

body.appendChild(form);


const div1 = document.createElement("div");
const inputName = document. createElement("input");
inputName.setAttribute("placeholder", "Enter votre nom");
form.appendChild(div1);
div1.appendChild(inputName);


const div2 = document.createElement("div");
const inputPrenom = document. createElement("input");
inputPrenom.setAttribute("placeholder", "Enter votre Prenom");
form.appendChild(div2);
div2.appendChild(inputPrenom);


const div3 = document.createElement("div");
const age = document.createElement("input");
inputPrenom.setAttribute("placeholder", "Enter votre Prenom");
age.setAttribute("placeholder", "Votre age");
div3.appendChild(age);
form.appendChild(div3);


const div4 = document.createElement("div");
const btnSave = document.createElement("button") 
btnSave.style.backgroundColor = "blue"
btnSave.style.color = "white"
btnSave.style.backgroundColor = "blue"


btnSave.innerText = "Enregistrer";
div4.appendChild(btnSave);
form.appendChild(div4);


div1.style.margin = "3px"
div2.style.margin = "3px"
div3.style.margin = "3px"
div4.style.margin = "3px"






//  EXO 2
const name1 = document.getElementById("nom")
const fname = document.getElementById("prenom")
const age2 = document.getElementById("age")
const btnSubmit = document.getElementById("btnSubmit")


var tab = [];

btnSubmit.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("---------INFO--------")
    let nom =  name1.value
    let prenom =  fname.value
    let age =  age2.value
    console.log("Nom:" + nom)
    console.log("Prenom:" + prenom);
    console.log("Age:" + age);

    if (!nom || !prenom || !age){
        alert("Un champ est vide")
    }else{
        var person = {
            nom:nom,
            prenom: prenom,
            age: age
        }
    tab.push(person)


    let ligne_tab = document.createElement("tr");
    let td1 = document.createElement("td")
    td1.innerText = tab.indexOf(person);

    let td2 = document.createElement("td")
    td2.innerText = nom

    let td3 = document.createElement("td")
    td3.innerText = person.prenom
    let td4 = document.createElement("td")
    td4.innerText = person.age

    ligne_tab.appendChild(td1)
    ligne_tab.appendChild(td2)
    ligne_tab.appendChild(td3)
    ligne_tab.appendChild(td4)

    let tab_body = document.getElementById("tab_body")
    tab_body.appendChild(ligne_tab)
    }

    console.log(tab)
})