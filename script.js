// document.getElementById('count-el').innerText = 5

// initialize count to 0
// listen for clicks on the button
// increment the count vriable when the button is clicked
// change the count-el in the html to reflect the new count

let count = 0
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

function increment(){
    count += 1
    countEl.textContent = count
}

// save function 
function save(){
    let saveString = count + ' - ';
    saveEl.textContent += saveString;
    count = 0
    countEl.textContent = count
}

function  decrement(){
    countEl.textContent = count -= 1
}
 
let welcomeEl = document.getElementById('p-el');
let name = 'Bashir Abdulah';
let greeting = 'Welcome  ';

welcomeEl.textContent= greeting + name;
welcomeEl.style.fontSize = "2rem";

 welcomeEl.textContent += " :)"




