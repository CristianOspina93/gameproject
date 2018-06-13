let readlineSync = require('readline-sync');

let name = readlineSync.question( "Enter your name to begin the game : " );

console.log("Hello " + name + " I want to play a game.");
console.log("You are in a house of traps." );
console.log("In order to escape this house you need to choose carefully.")
console.log("Choose the wrong exit and it will be your last choice!")
console.log("In order to escape the room you are in you need to choose between a door or a hallway with a flickering light")
console.log("What is your choice?");

// function startTimer(duration, display) {
//     let timer = duration, seconds;
//     setInterval(function () {
//         seconds = parseInt(timer % 60, 10);
//
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//
//         display.textContent = seconds;
//
//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }
//
// startTimer()

let option = readlineSync.question( "Options: door, hallway : " );

switch(option) {
  case "door":
    console.log("You walk in through the door, the room is pitch black and the door shuts locked behind you.");
    console.log("You are trapped for ever!");
    break;
  case "hallway":
    console.log("You walk in, see a set of stairs that go up and another door.");
    break;
}

let option2 = readlineSync.question( "Options: stairs, door : " );

switch(option2) {
  case "door":
    console.log("As you walk in through the door, you set of a trip wire that unleashes a swinging axe right at you!");
    break;
  case "stairs":
    console.log("You go up the stair case, now you are in another room.");
    console.log("You see a long dark hallway and a door smeared with blood");
    break;
}

let option3 = readlineSync.question( "Options: hallway, door : " );

switch(option3) {
  case "hallway":
    console.log("As you walk into the hallway you see a ladder leading downstairs and an elevator room.");
    break;
  case "door":
    console.log("You walk into the room and see a tv.");
    console.log("The tv starts playing a video of jigsaw laughing.");
    console.log("The door behind you shuts and the walls start to close in.");
    break;
}

let option4 = readlineSync.question( "Options: ladder, elevator : " );

switch(option4) {
  case "ladder":
    console.log("You climb down the ladder.");
    console.log("You are now in the sewer tunnels and escape through them! ");
    break;
  case "elevator":
    console.log("You go into the elevator. The doors shut. The floor collapses and you fall to your death!");
    break;
}
