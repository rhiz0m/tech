
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


/* Session Storage */
/* 
problem
  get data and put it into the "aside-item" element

solution
-save function works


*/

function doFirst () {
  var button = document.getElementById("btn-mobile");
  button.addEventListener("click", save);

}

 function save() {
 
   let saveTitle = document.getElementById("title").value;

   let saveDueDate = document.getElementById("due-date").value;
   sessionStorage.setItem(saveTitle, saveDueDate); 
   
  displayData();

  document.getElementById("title").value = "";
  document.getElementById("due-date").value = "";

 }

 function displayData() {
  var asideContent = document.getElementById("aside-items");
  asideContent.innerHTML = "";

     for (var i = 0; i < sessionStorage.length; i++) {
     var a = sessionStorage.key(i);
     var b = sessionStorage.getItem(a);
    asideContent.innerHTML += a + " - " + b + "<br />";
    /* skriver in värdena i rutan till höger under "summa". */
    }

 }


 //window.addEventListener("load", doFirst);