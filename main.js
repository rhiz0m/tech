
//Eventlisteners for "mousing over" the the mobile buttons!

document.getElementById("btn-mobile").addEventListener("mouseover", displayStorageIn);
document.getElementById("btn-mobile").addEventListener("mouseout", displayStorageOut);

//Functions that activates "Submit notes" when the mobile buttons are "moused over".

function displayStorageIn() {
  document.getElementById("message-to-user").innerHTML = "Submit notes!";
}
function displayStorageOut() {
  document.getElementById("message-to-user").innerHTML = "";
}


/*** Session Storage ***/

//Only stores values in strings. Key-value-pair.

const doFirst = () => {
  var button = document.getElementById("btn-mobile");
  button.addEventListener("click", save);

}

 const save = () => {
 
let title = document.getElementById("title").value;
let dueDate = document.getElementById("due-date").value;
let notes = document.getElementById("notes").value;
let priority = document.getElementById("priority").value;

let userInput = {
  title : title,
  duedate : dueDate,
  notes : notes,
  priority : priority
};
//convert obj into string
window.sessionStorage.setItem('title: ', JSON.stringify(userInput.title));
window.sessionStorage.setItem('due date: ', JSON.stringify(userInput.duedate));
window.sessionStorage.setItem('notes: ', JSON.stringify(userInput.notes));
window.sessionStorage.setItem('priority: ', JSON.stringify(userInput.priority));

displayData();

 }

 const displayData = () => {

  let asideContent = document.getElementById("aside-terminal");
  asideContent.innerHTML += "";

     for (let i = 0; i < sessionStorage.length; i++) {
     let a = sessionStorage.key(i);
     let b = sessionStorage.getItem(a);
     asideContent.innerHTML += a + " - " + b + "<br />";
    }
 }