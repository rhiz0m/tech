
//Eventlisteners for "mousing over" the the mobile buttons!

document.getElementById("session-storage").addEventListener("mouseover", displayStorageIn);
document.getElementById("session-storage").addEventListener("mouseout", displayStorageOut);

//Functions that activates when the mobile buttons are "moused over".

function displayStorageIn() {
  document.getElementById("message-to-user").innerHTML = "Submit notes!";
}
function displayStorageOut() {
  document.getElementById("message-to-user").innerHTML = "";
}

/* Session Storage */