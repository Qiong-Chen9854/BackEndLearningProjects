var num = document.querySelectorAll(".drum").length;

for(var i=0; i < num; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonClicked = this.innerHTML;
    playSound(buttonClicked);
    playAnimation(buttonClicked);
  
  });
}

document.addEventListener("keydown",function(event){
  var keyPressed = event.key;
  playSound(keyPressed);
  playAnimation(keyPressed);
})

function playSound(buttonSelected){
  switch (buttonSelected) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
    var audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
    break;  

    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;


    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(buttonSelected);
      break;
  }
}

function playAnimation(buttonSelected){
  var currentButton = document.querySelector("."+ buttonSelected);
  currentButton.classList.add("pressed");

  setTimeout(() => {
    currentButton.classList.remove("pressed");
  }, 100);
}






