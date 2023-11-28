var drumLen = $(".drum").length;

for(var i=0; i<drumLen;i++){
  
  $(".drum")[i].addEventListener("click",function(){

    var buttonClicked = this.innerHTML;
    playSound(buttonClicked);
    playAnimation(buttonClicked);

  })
}

$(document).keypress(function(event){
  playSound(event.key);
  playAnimation(event.key);
})

function playSound(key){
  switch (key) {
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
      console.log(key);
      break;
  }
}

function playAnimation(key){
  var drumSelected = $("." + key);
  drumSelected.addClass("pressed");

  setTimeout(() => {
    drumSelected.removeClass("pressed");
  }, 100);
}
