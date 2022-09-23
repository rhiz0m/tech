//Functions that activates "Submit notes" when the mobile buttons are "moused over".
const displayMobText = () => {
  document.getElementById("message-to-user").innerHTML = "Submit!";
}
const hideMobText = () => {
  document.getElementById("message-to-user").innerHTML = "";
}


/*Eventlisteners for "mousing over" the the mobile buttons. Const or Let must functions must be accessed first. 
ReferenceError: Cannot access 'displayMobText' before initialization*/

document.getElementById("btn-mobile").addEventListener("mouseover", displayMobText);
document.getElementById("btn-mobile").addEventListener("mouseout", hideMobText);

//Do first listen for user if the button gets activated

const doFirst = () => {
  let button = document.getElementById("btn-mobile");
  button.addEventListener("click", saveData);

}

/*** Session Storage ***/
//Web API for storing data in Browser.
//Only stores values in strings. Key-value-pair.

 const saveData = () => {
 
let title = document.getElementById("title").value;
let dueDate = document.getElementById("due-date").value;
let notes = document.getElementById("notes").value;
let priority = document.getElementById("priority").value;

//creating an object with key/value pair
let userInput = {
  title : title,
  duedate : dueDate,
  notes : notes,
  priority : priority
};
//convert obj into string. JSON Stringify.

window.sessionStorage.setItem('title: ', JSON.stringify(userInput.title)); 
window.sessionStorage.setItem('due date: ', JSON.stringify(userInput.duedate));
window.sessionStorage.setItem('notes: ', JSON.stringify(userInput.notes));
window.sessionStorage.setItem('priority level is: ', JSON.stringify(userInput.priority));

displayData();

 }

 const displayData = () => {
  //placeholder
  let terminalContent = document.getElementById("aside-terminal");
  terminalContent.innerHTML += "";

     for (let i = 0; i < sessionStorage.length; i++) {
     let a = sessionStorage.key(i);
     let b = sessionStorage.getItem(a);
     terminalContent.innerHTML += a + " - " + b + "<br />";
    }
 }

 /* Session storage.length. Checks the length of the data, grabs the key index.  a = key, b= value  */