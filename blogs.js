const buttons = document.querySelectorAll(".read-btn");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

const moreText = button.previousElementSibling;

if(moreText.style.display==="block"){

moreText.style.display="none";

button.innerHTML="Read More";

}

else{

moreText.style.display="block";

button.innerHTML="Read Less";

}

});

});