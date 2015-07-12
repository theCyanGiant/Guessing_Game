
  var Game = function() {
    var userName = prompt ("What is your name?");
    var userGuess;
    var answer = Math.floor(Math.random() * 790) + 1;

    console.log (answer);
    //console.log to return cheat answer

    this.guess = function() {
      userGuess = prompt(userName + ", how many licks does it take to get to the center of a tootsie-roll pop?");
    };
    this.message = function() {
      if (userGuess == answer) {

        document.getElementById("right_answer").textContent = "Inconceivable " + userName + "! You must have some serious cavities in order to have the knowledge that " + answer + " is the right amount of licks!";
        document.getElementById("rightImg").className = "show";
        document.getElementById("rightHide").className = "hide";
        //when answer is guessed game functions properly but error "Uncaught TypeError: Cannot set property 'className' of null" ln 18 is returned in console

      } else if (userGuess == 3) {

        document.getElementById("cheat").textContent = "You gotta stop chewing those, they are called suckers for a reason.";
        document.getElementById("cheatImg").className = "show";
        document.getElementById("score").className = "hide";
        document.getElementById("wrong_answer").className = "hide";

      } else {

        document.getElementById("wrong_answer").textContent = "Don't feel bad " + userName + ", it takes everyone a different amount of licks! In this case, you take " + userGuess + " but I take " + answer + "!";
      }

      var score = Math.abs(userGuess - answer);
      document.getElementById("score").textContent = "You were off by " + score + " not bad.";

    };
  };

var game = new Game();
game.guess();
game.message();

//var scoreboard = function () {


