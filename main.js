
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

const doFirst = () => {
  var button = document.getElementById("btn-mobile");
  button.addEventListener("click", save);

}

 const save = () => {
 
 const saveKey = ['To do: ', 'Due date: ', 'Notes: ', 'Priority: '];
 let saveValue = [' '];

  saveValue[0] = document.getElementById("title").value;
  saveValue[1] = document.getElementById("due-date").value;
  saveValue[2] = document.getElementById("notes").value;
  saveValue[3] = document.getElementById("priority").value;
   //key: value-par i setItem.
   
   displayData();

   sessionStorage.setItem(saveKey[0], saveValue[0]);
   sessionStorage.setItem(saveKey[1], saveValue[1]);
   sessionStorage.setItem(saveKey[2], saveValue[2]); 
   sessionStorage.setItem(saveKey[3], saveValue[3]); 

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


 window.addEventListener("load", doFirst);