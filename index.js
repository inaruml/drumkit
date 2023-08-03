let numberOfDrumButtons = document.querySelectorAll(".drum").length; // gives us lenght of the number of drum buttons

// **********************Detecting button press**********************

for (let i = 0; i < numberOfDrumButtons; i++) {
  // for loop to go through all the drum buttons
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // selects each drum button and adds an event listener
    let buttonInnerHTML = this.innerHTML; // selects the innerhtml of each drum buttom

    makeSound(buttonInnerHTML); // passes the selected key (buttonInnerHTML) as the function parameter of the makeSound func

    buttonAnimation(buttonInnerHTML); // passes the selected key (buttonInnerHTML) as the function parameter of the buttonAnimation func
  });
}

// ********************** Detecting keyboard press**********************

document.addEventListener("keypress", function (event) {
  // adds an event listener to the whole document to watch for keypresses
  makeSound(event.key); // passes the key that was pressed to the makeSound function

  buttonAnimation(event.key); // passes the pressed key into the buttonAnimation func
});

function makeSound(key) {
  // this function takes the key that was pressed or clicked and plays the according sound
  // function with a switch statement that determines which sound to play
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  // function to set button animation based on the selected key (which was passed as buttonInnerHTML)

  let activeButton = document.querySelector("." + currentKey); // selects the ".w" key for e.g.

  activeButton.classList.add("pressed"); // adds a shadow in styles to the active selected btn

  // removes the pressed class after a second
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
