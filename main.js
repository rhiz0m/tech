
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
let duedate = document.getElementById("due-date").value;
let notes = document.getElementById("notes").value;
let priority = document.getElementById("priority").value;

const userInput = {
  title : title + "<br />",
  due_date : duedate + "<br />",
  notes : notes + "<br />",
  priority : priority
};
//convert obj into string
window.sessionStorage.setItem('users data: ' + "<br />", JSON.stringify(userInput));

displayData();

 }

 const displayData = () => {

  let asideContent = document.getElementById("aside-terminal");
  asideContent.innerHTML = "";

     for (let i = 0; i < sessionStorage.length; i++) {
     let a = sessionStorage.key(i);
     let b = sessionStorage.getItem(a);
     asideContent.innerHTML += a + " - " + b + "<br />";
    }
 }