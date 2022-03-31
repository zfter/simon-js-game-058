let gameColor = ["green", "red", "yellow", "blue"];
let userPattern = [];
let gamePattern = [];

let state = false;
let level = 0;

$(document).on("keypress", () => {
  if(!state){  //control keypress
    state = true;
    startNext();
  }  
})

  
  $(".btn").click(function () {
    if(state) {
      var userChosenColor = $(this).attr("id");
    userPattern.push(userChosenColor);

    play(userChosenColor);
    animation(this);

    checkAnwser(userPattern.length -1); // looping statement
    }
    
  })


function checkAnwser(currentColor) {
  console.log(userPattern[currentColor], gamePattern[currentColor])
  if(userPattern[currentColor] === gamePattern[currentColor]){    
    if(userPattern.length === gamePattern.length){
      setTimeout(() => {
        startNext();
      },1000);
    }
  }else{
    play("wrong");

    $("body").addClass("bg-red");
    setTimeout(() => {
      $("body").removeClass("bg-red")
    },300);

    $("h1").html("Game Over 💔" + "<p style='text-align:center;font-size: 24px;'> Restart By Pressing Any Key ⌨️</p>");

    startOver();
  }
}

function startNext() {
  userPattern = [];
  level++;
  $("h1").text("Level " + level);

  let randomColor = Math.floor(Math.random() * 4); //0-3, choose 1 of 4 random item from array
  let color = gameColor[randomColor];
  gamePattern.push(color);

  play(color);
  $("#" + color).fadeIn(100).fadeOut(100).fadeIn(100)
}

function play(color) {
  let audio = new Audio('asset/sounds/' + color + '.mp3');
  audio.play();
}

function animation(btn) {
  btn.classList.add("ani");
  setTimeout(() => {
    btn.classList.remove("ani")
  },150)
}

function startOver() {
  state = false;
  level = 0;
  gamePattern = [];
}
