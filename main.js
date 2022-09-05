
const date = new Date;


const currentDate =  date.getFullYear() +" "+ (date.getMonth()+1) +""+ date.getDate();

const currentTime = date.getHours() + " "+ date.getMinutes() + " " + date.getSeconds();

document.getElementById("mobile_header").innerHTML = date;

// Eventlisteners for "mousing over" the logos!

document.getElementById("github").addEventListener("mouseover", gitHubIn);
document.getElementById("github").addEventListener("mouseout", gitHubOut);

document.getElementById("linkedin").addEventListener("mouseover", linkedinIn);
document.getElementById("linkedin").addEventListener("mouseout", linkedinOut);

document.getElementById("discord").addEventListener("mouseover", discordIn);
document.getElementById("discord").addEventListener("mouseout", discordOut);

document.getElementById("coding").addEventListener("mouseover", codingIn);
document.getElementById("coding").addEventListener("mouseout", codingOut);


//Functions that activates when the logos are "moused over".

function gitHubIn() {
  document.getElementById("textbox").innerHTML = "Hey, let's collaborate! Feel free to visit my <em>GitHub Page</em>!";
}
function gitHubOut() {
  document.getElementById("textbox").innerHTML = "";
}


function linkedinIn() {
  document.getElementById("textbox").innerHTML = "Networking? Be sure to contact me on my Linkedin page!";
}
function linkedinOut() {
  document.getElementById("textbox").innerHTML = "";
}

function discordIn() {
  document.getElementById("textbox").innerHTML = "Join me on Instagram and watch my works in progress!";
}
function discordOut() {
  document.getElementById("textbox").innerHTML = "";
}

function codingIn() {
  document.getElementById("textbox").innerHTML = "Read my blog if you are interested in the philosophy behind my projects!";
}
function codingOut() {
  document.getElementById("textbox").innerHTML = "";
}

//Audio

document.getElementById("talkingicon").addEventListener("click", enableLoop);

function enableLoop() {
  const audio = new Audio('sounds/robot.wav');
    //audio.loop = true;
    audio.play(); 
    document.getElementById("textbox").innerHTML = "Hello people, nice to meet you!"
}
