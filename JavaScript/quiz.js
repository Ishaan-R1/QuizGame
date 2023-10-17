let questions = [
  {
    question: "Who is the all-time top scorer in Premier League history?",
    a: "Thierry Henry",
    b: "Wayne Rooney",
    c: "Alan Shearer",
    d: "Sergio Agüero",
    answer: "c",
  },
  {
    question: "Which team holds the record for the most Premier League titles?",
    a: "Arsenal",
    b: "Liverpool",
    c: "Man United",
    d: "Man City",
    answer: "c",
  },
  {
    question:
      "Who won the Premier League Golden Boot for the 2022-2023 season?",
    a: "Mohamed Salah",
    b: "Harry Kane",
    c: "Erling Haaland",
    d: "Son Heung-min",
    answer: "c",
  },
  {
    question:
      "Which club famously went unbeaten throughout the entire 2003-2004 Premier League season?",
    a: "Liverpool",
    b: "Chelsea",
    c: "Manchester United",
    d: "Arsenal",
    answer: "d",
  },
  {
    question: "Who is the manager of Manchester City as of 2023?",
    a: "Jürgen Klopp",
    b: "José Mourinho",
    c: "Ole Gunnar Solskjær",
    d: "Pep Guardiola",
    answer: "d",
  },
  {
    question:
      "Which player holds the record for the most Premier League assists in a single season?",
    a: "Kevin De Bruyne",
    b: "Frank Lampard",
    c: "Cesc Fàbregas",
    d: "Thierry Henry",
    answer: "a",
  },
  {
    question: "Which stadium is the home of Arsenal FC?",
    a: "Old Trafford",
    b: "Anfield",
    c: "Stamford Bridge",
    d: "Emirates Stadium",
    answer: "d",
  },
  {
    question: "Who is the youngest goalscorer in Premier League history?",
    a: "James Vaughan",
    b: "Wayne Rooney",
    c: "Michael Owen",
    d: "Ryan Giggs",
    answer: "a",
  },
  {
    question:
      "Which team won the inaugural Premier League season in 1992-1993?",
    a: "Arsenal",
    b: "Manchester United",
    c: "Liverpool",
    d: "Leeds United",
    answer: "b",
  },
  {
    question:
      "Who is known as the 'Special One' and managed Chelsea during two spells in the Premier League?",
    a: "José Mourinho",
    b: "Arsène Wenger",
    c: "Rafa Benítez",
    d: "Claudio Ranieri",
    answer: "a",
  },
  {
    question: "Which club is nicknamed the 'Red Devils'",
    a: "Liverpool",
    b: "Manchester City",
    c: "Manchester United",
    d: "Chelsea",
    answer: "c",
  },
  {
    question: "Who is the captain of Liverpool FC as of 2023?",
    a: "Virgil van Dijk",
    b: "Mohamed Salah",
    c: "Andrew Robertson",
    d: "Trent Alexander-Arnold",
    answer: "a",
  },
  {
    question:
      "Which player famously scored a hat-trick in just 7 minutes for Southampton against Aston Villa in 2015?",
    a: "Jamie Vardy",
    b: "Sadio Mané",
    c: "Theo Walcott",
    d: "Harry Kane",
    answer: "b",
  },
  {
    question:
      "Who holds the record for the most appearances in the Premier League?",
    a: "Steven Gerrard",
    b: "Frank Lampard",
    c: "Ryan Giggs",
    d: "Gareth Barry",
    answer: "d",
  },
];

let loggedInMsg = document.getElementById("loggedInMsg"); // Gets border from game.php file to display question

if (sessionStorage.length === 0) {
  let regLink = "<a href='" + "register.html" + "'>" + "Register" + "</a>";
  let logLink = "<a href='" + "login.html" + "'>" + "Login" + "</a>";
  let rankLink = "<a href='" + "rankings.html" + "'>" + "Rankings" + "</a>";

  console.log("No Logged in User");

  loggedInMsg.innerHTML =
    "You are not logged in and your result will not be stored. " +
    regLink +
    " and " +
    logLink +
    " to view your score in " +
    rankLink +
    " to compete with other users.";
} else {
  console.log("Logged in User");
  console.log(sessionStorage);
}
let time;
let questionDisplay = document.getElementById("question"); // Gets border from game.php file to display question
let response = document.getElementById("scoreBorder"); // displays response to player such as currect score and final score
let feedbackDisplay = document.getElementById("feedback"); // Displays feedback to player while they're playing the game
let correctAnswer; // variable stores the correct answer of the addition between two random numbers

let attempts = 0; // number of incorrect answers - starts at 0
let count = 0; // number of correct answers - starts at 0
let lives = 3; // initial number of lives - starts at 3
let userScore = 0;
let scoreBorder = document.getElementById("scoreBorder");
let scoreLabel = document.getElementById("score");
let questionLabel = document.getElementById("questionNum");
let completedQuestionCounter = 0;
let timeDisplay = document.getElementById("timeBorder");
let progressB = document.getElementById("progressBar");

startQuiz.addEventListener("click", startGame);

let currentQuestion = 0;
let startButton = document.getElementById("start"); // Get the "Start" button element

function displayQuestions() {
  let Fquestions = questions[currentQuestion];

  questionDisplay.innerHTML = "<p>" + Fquestions.question + "</p>";
  // console.log(Fquestions);
  console.log(Fquestions.question);
  answera.innerHTML = Fquestions.a;
  answerb.innerHTML = Fquestions.b;
  answerc.innerHTML = Fquestions.c;
  answerd.innerHTML = Fquestions.d;
  // console.log(questions[0].question);
}
function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffleQuestions(questions);

function startGame() {
  startQuiz.style.display = "none";
  displayQuestions();
  document.getElementById("answers").style.display = "grid";
  score.style.display = "block";
  questionLabel.style.display = "block";
  // timeLabel.style.display = "block";
  document.getElementById("lives").style.display = "flex";
  progressB.style.display = "block";
  timeDisplay.style.display = "block";
  loggedInMsg.style.display = "none";
  time = setInterval(countDown, 1000); // START TIMER

  // start.style.display = "block";
}
scoreLabel.innerHTML = "Score: " + userScore;
function checkAnswer2(answer) {
  let selectedButton = document.getElementById(`answer${answer}`);
  let correctAnswer = questions[currentQuestion].answer;
  console.log(answer + " | " + correctAnswer);

  if (answer != correctAnswer && attempts < lives) {
    console.log("INCORRECT");
    console.log(currentQuestion + " | " + questions.length);
    selectedButton.style.backgroundColor = "red";
    displayAttempts2();

    setTimeout(function () {
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        questionLabel.innerHTML =
          "Question " + currentQuestion + "/" + questions.length;
        console.log("CURRENT QQQQ" + currentQuestion);
        let Fquestions = questions[currentQuestion];
        displayQuestions();
        selectedButton.style.backgroundColor = "#00bfff";

        console.log(Fquestions);
        displayFinalScore();
      } else {
        console.log("NO QUESTIONS");
        endGameLastQuestionL();
      }
    }, 1000);
  } else if (answer == correctAnswer) {
    console.log("CORRECT");
    selectedButton.style.backgroundColor = "green";
    completedQuestionCounter++;
    userScore = userScore + 10;
    scoreLabel.innerHTML = "Score: " + userScore;
    console.log("SCORE IS " + userScore);
    setTimeout(function () {
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        questionLabel.innerHTML =
          "Question " + currentQuestion + "/" + questions.length;
        let Fquestions = questions[currentQuestion];
        displayQuestions();
        selectedButton.style.backgroundColor = "#00bfff";

        console.log(Fquestions);
      } else {
        console.log("NO QUESTIONS");
        endGame();
      }
    }, 1000);
  }
}
function storeGameData() {
  try {
    let loggedInUser1 = JSON.parse(
      localStorage[sessionStorage.currentLoggedInUser]
    );
    let userFirstName = loggedInUser1.firstName;
    let displayFirstName = userFirstName.bold();
    let finalScore = userScore;

    let loggedInUser = JSON.parse(
      localStorage[sessionStorage.currentLoggedInUser]
    );
    loggedInUser.time = userScore;

    localStorage[loggedInUser.email] = JSON.stringify(loggedInUser);
    storeNewScore(finalScore); // calls function to store score if user wins in local storage - takes parameter of score user obtains playing the game
  } catch (err) {
    window.onload = () => {
      questionDisplay.innerHTML = "LOGIN TO PLAY";
      console.log("Login to play");
      disableButton();
    };
  }
}
function endGameLastQuestionL() {
  let feedbackDisplay2 = document.getElementById("feedback1");
  let feedbackDisplay3 = document.getElementById("feedback2");

  if (attempts >= lives) {
    // Check if the user has used up all their lives
    questionDisplay.style.fontWeight = "bolder";
    questionDisplay.innerHTML = "GAME OVER";
    feedbackDisplay.innerHTML = "You've used up all your lives!";
    scoreLabel.innerHTML = "Final Score: " + userScore;

    let finalAnswer =
      completedQuestionCounter > 1
        ? " correct answers and "
        : " correct answer and ";

    document.getElementById("answers").style.display = "none";
    feedbackDisplay.innerHTML =
      "You managed " +
      completedQuestionCounter +
      finalAnswer +
      attempts +
      " incorrect answers.";

    feedbackDisplay.innerHTML = "Better luck next time!";
  } else {
    endGame(); // If the user didn't use up all lives, proceed to endGame
  }
}
// Function to check whether game is over or not
function check() {
  if (isGameOver()) {
    // if the game is over then call functions to display certain information and disable button
    gameOverDisplay();
    displayFinalScore();
  }
}
function isGameOver() {
  if (attempts === lives || counter === 1) {
    // game is over is player loses 3 lives or runs out of time
    return true; // return true is game is over
  }
  return false; // return false is game is over
}
function gameOverDisplay() {
  console.log("GAME OVER");
}
function endGame() {
  try {
    if (sessionStorage.length > 0) {
      let loggedInUser1 = JSON.parse(
        localStorage[sessionStorage.currentLoggedInUser]
      );
      let userFirstName = loggedInUser1.firstName;
      let finalScore = userScore;

      let loggedInUser = JSON.parse(
        localStorage[sessionStorage.currentLoggedInUser]
      );
      localStorage[loggedInUser.email] = JSON.stringify(loggedInUser);
      storeNewScore(finalScore); // calls function to store score if user wins in local storage - takes parameter of score user obtains playing the game

      document.getElementById("answers").style.display = "none";
      document.getElementById("lives").style.display = "none";
      questionDisplay.innerHTML =
        "<p>" + "Congratulations " + userFirstName + "!" + "</p>"; // ADD NAME.........................
      let congratulationsMessage = document.getElementById(
        "congratulationsMessage"
      );
      feedbackDisplay.style.display = "none";
      if (completedQuestionCounter === questions.length) {
        congratulationsMessage.innerHTML =
          "Congratulations! You've completed the quiz with a perfect score!";
      } else {
        congratulationsMessage.innerHTML =
          "Good job! You've completed the quiz.";
      }
    } else {
      document.getElementById("answers").style.display = "none";
      document.getElementById("lives").style.display = "none";
      questionDisplay.innerHTML = "<p>" + "Congratulations!" + "</p>";
      let congratulationsMessage = document.getElementById(
        "congratulationsMessage"
      );
      feedbackDisplay.style.display = "none";
      if (completedQuestionCounter === questions.length) {
        congratulationsMessage.innerHTML =
          "Congratulations! You've completed the quiz with a perfect score!";
      } else {
        congratulationsMessage.innerHTML =
          "Good job! You've completed the quiz.";
      }
    }
  } catch (err) {
    window.onload = () => {
      questionDisplay.innerHTML = "LOGIN TO PLAY";
      console.log("Login to play");
      disableButton();
    };
  }
}

let counter = 60; // sets timer to 60 seconds
let progressBar = document.getElementById("progressBar");

function countDown() {
  isOver();
  check();
  progressBar.innerHTML = counter;
  counter = counter - 1;
  const percentage = (counter / 60) * 100; // Calculate the percentage for the progress bar
  progressBar.style.width = percentage + "%"; // Update the progress bar width
  console.log(percentage);
  if (percentage > 25 && percentage < 50) {
    progressBar.style.background =
      "linear-gradient(77deg, rgba(0,0,0,1) 0%, rgba(255,89,0,1) 55%, rgba(255,255,255,1) 100%)";
  } else if (percentage <= 25) {
    progressBar.style.background =
      "linear-gradient(77deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 55%, rgba(255,255,255,1) 100%)";
  } else {
    progressBar.style.background =
      "linear-gradient(77deg, rgba(0,0,0,1) 0%, rgba(18,255,0,1) 55%, rgba(255,255,255,1) 100%)";
  }
  console.log("CURRENT Q" + " " + currentQuestion);

  if (currentQuestion === currentQuestion.length || attempts === lives) {
    console.log("TIME");
    clearInterval(time);
  } else if (counter === 0) {
    clearInterval(time);
    progressBar.style.width = "0%"; // Reset the progress bar when time is up
    document.getElementById("gameContentBorder").style.backgroundColor =
      "#e03c31";
  }
}

// function to keep count of how many attempts user has had - how many they get wrong while playing
function displayAttempts2() {
  console.log("Number of Attempts so Far: " + attempts++);
  // let lifeNum = attempts;
  let liveCircle = document.getElementById(`live${attempts}`);
  console.log(`live${attempts}`);
  liveCircle.style.backgroundColor = "red";
  isOver(); // Calls function to check if game is over
  check();
}
// create random number
function randomNum() {
  let randomNum1 = Math.floor(Math.random() * 10) + 1; // Creates two random numbers
  let randomNum2 = Math.floor(Math.random() * 10) + 1;

  questionDisplay.innerHTML =
    "What is " + randomNum1 + " + " + randomNum2 + "?"; // Creates and displays question to user
  correctAnswer = randomNum1 + randomNum2; // Calculates correct answer
  console.log("Answer is: " + correctAnswer); // displays correct answer to console
}

// function to check whether an inputted answer is correct or incorrect
function checkAnswer() {
  let userInput = document.getElementById("answer").value;

  if (userInput != correctAnswer && attempts < lives && counter > 1) {
    // checks if answer is incorrect and attempts is less than 3 and there is still time left
    document.getElementById("gameContentBorder").style.backgroundColor = // changes border colour to red
      "#e03c31";
    incorrectAnswerSound(document.getElementById("incorrectSound")); // plays incorrect answer sound
    userInput; // allows user to have another try
    displayAttempts(); // Calls function to display information to user - displays answer is incorrect
    console.log(
      "User inputted: " +
        userInput +
        ",\nThe correct answer is: " +
        correctAnswer
    );

    displayFinalScore();
  } else if (userInput == correctAnswer && count <= 9) {
    // if answer is correct and game is still continuing
    document.getElementById("gameContentBorder").style.backgroundColor = // change colour to green
      "#00ff00";
    feedbackDisplay.innerHTML = "Correct";
    randomNum(); // generate a new question
    count++; // Increase correct answer count
    correctAnswerSound(document.getElementById("correctSound")); // plays correct answer sound
    response.innerHTML = count + " / 10"; // Displays current score out of 10
    console.log("Number of correct answers is: " + count);
    CongratulationsMsg(); //  Calls function to display message when count is 10
  }
}
/* Function to report all the information after the game is over (player has lost) including the final score out of 10, 
number of questions answered correctly, number of remaining questions, 
number of incorrect answers and final time remaining 

if user gets 3 wrong or run out of time, this information is displayed*/
function displayFinalScore() {
  let feedbackDisplay2 = document.getElementById("feedback1");
  let feedbackDisplay3 = document.getElementById("feedback2");

  let remainingQuestions = 10 - count; // Calculates number of remaining questions
  let finalTime = counter - 1; // Calculates final time
  let finalScore = completedQuestionCounter;
  if (attempts === lives || counter === 1) {
    // game is over and final scores displayed if player uses all 3 lives or time is up
    questionDisplay.style.fontWeight = "bolder";
    questionDisplay.innerHTML = "GAME OVER";
    feedbackDisplay.innerHTML = "You've used up all your lives!";
    // response.innerHTML = "Final Score: " + count + " / 10";
    scoreLabel.innerHTML = "Final Score: " + userScore;
    // scoreBorder.innerHTML = count;

    let finalAnswer =
      completedQuestionCounter > 1
        ? " correct answers and "
        : " correct answer and ";

    document.getElementById("answers").style.display = "none";
    feedbackDisplay2.innerHTML =
      "You managed " +
      completedQuestionCounter +
      finalAnswer +
      attempts +
      " incorrect answers.";

    if (completedQuestionCounter < 5) {
      feedbackDisplay3.innerHTML = "Better luck next time!";
    } else if (completedQuestionCounter < 8) {
      feedbackDisplay3.innerHTML = "Well done! You're getting there!";
    } else {
      feedbackDisplay3.innerHTML = "Congratulations! You did great!";
    }
  }
  console.log("Final Score = " + userScore); // finalScore to be scored in local storage

  try {
    // Adds time to local storage
    let loggedInUser1 = JSON.parse(
      localStorage[sessionStorage.currentLoggedInUser]
    );
    let str = "DID NOT COMPLETE GAME"; // Message displayed in rankings table if user does not get 10/10
    if (counter !== 1) {
      loggedInUser1.time = str;

      localStorage[loggedInUser1.email] = JSON.stringify(loggedInUser1);
    } else if (counter === 1) {
      let loggedInUser2 = JSON.parse(
        localStorage[sessionStorage.currentLoggedInUser]
      );
      let str1 = "TIMES UP"; // Message displayed in rankings table if user runs out of time
      loggedInUser2.time = str1;
      localStorage[loggedInUser2.email] = JSON.stringify(loggedInUser2);
    }

    storeNewScore(finalScore); // calls function to store score if user loses in local storage - takes parameter of score user obtains playing the game
  } catch (err) {
    window.onload = () => {
      questionDisplay.innerHTML = "LOGIN TO PLAY"; // Message displayed if user hasn't logged in
      console.log("Login to play");
      disableButton();
    };
  }
}

// function to keep count of how many attempts user has had - how many they get wrong while playing
function displayAttempts() {
  console.log("Number of Attempts so Far: " + attempts++);
  isOver(); // Calls function to check if game is over
  check();
  feedbackDisplay.innerHTML =
    "You are wrong, try again! <br/> You have had " +
    attempts +
    " attempts out of 3 so far";
}
/*Function to display information if player wins (if user gets 10 questions correct) 


This function displays a congratulations message including final score, number of correct answers, 
number of incorrect answers and  final time - how long it took them to complete the quiz.*/

function CongratulationsMsg() {
  try {
    let loggedInUser1 = JSON.parse(
      localStorage[sessionStorage.currentLoggedInUser]
    );

    let userFirstName = loggedInUser1.firstName;
    let displayFirstName = userFirstName.bold();
    let correctAnswers = 10 - attempts; // Calculates correct answers
    let incorrectAnswers = 10 - (10 - attempts); // Calculates incorrect answers
    let finalTime = 60 - (counter - 1); // Calculates final time
    let finalScore = completedQuestionCounter;

    console.log(completedQuestionCounter + " | " + questions.length);

    if (finalScore === questions.length) {
      // correctAnswerSound(document.getElementById("correctSound")); // Plays a correct answer sound if player gets answer correct
      response.innerHTML = "Final Score: " + count + " / 10";
      feedbackDisplay.innerHTML =
        "Congratulations " +
        displayFirstName + // Displays users first name in bold
        " ! <br/> You have completed the quiz! <br/>" +
        " You got " +
        correctAnswers +
        " answers correct and " +
        incorrectAnswers +
        " wrong <br/> Final Time: Completed in " +
        finalTime +
        " Seconds";

      questionDisplay.innerHTML = "Complete!";
      disableButton(); // calls function to disable button once user has completed the game
    }
    console.log("Completed in: " + finalTime);
    let loggedInUser = JSON.parse(
      localStorage[sessionStorage.currentLoggedInUser]
    );

    if (finalTime > loggedInUser.time) {
      // adds final time to local storage if they beat their previous attempt
      loggedInUser.time = finalTime;

      localStorage[loggedInUser.email] = JSON.stringify(loggedInUser);
    }

    storeNewScore(finalScore); // calls function to store score if user wins in local storage - takes parameter of score user obtains playing the game
  } catch (err) {
    window.onload = () => {
      questionDisplay.innerHTML = "LOGIN TO PLAY";
      console.log("Login to play");
      disableButton();
    };
  }
}
// Function to calculate if game is over
function isOver() {
  if (attempts === lives || counter === 1) {
    // game is over is player loses 3 lives or runs out of time
    return true; // return true is game is over
  }
  return false; // return false is game is over
}

// Function to disable button after game is over and change its colour
function disableButton() {
  // document.getElementById("btnSubmit").disabled = true;
  // document.getElementById("btnSubmit").style.background = "grey";
  // document.getElementById("btnSubmit").style.border = "5px solid darkgrey";
}

// Function to check if game is over and display a "Game Over" message, display the incorrect sound and display final score to player
function overDisplay() {
  if (isOver()) {
    questionDisplay.innerHTML = "GAME OVER";
    incorrectAnswerSound(document.getElementById("incorrectSound"));
    displayFinalScore();
  }
}
// sets variable to call countDown function - counts down by 1 second

// Function to play a sound when answer is correct
function correctAnswerSound(correctSound) {
  // correctSound.play();
}
// Function to play a sound when answer is incorrect
function incorrectAnswerSound(incorrectSound) {
  // incorrectSound.play();
}
// Function to update the users score to local storage with the score they obtain playing the game
function storeNewScore(score) {
  let loggedInUser = JSON.parse(
    localStorage[sessionStorage.currentLoggedInUser]
  );

  if (score > loggedInUser.topScore) {
    // If the score the user obtains is higher than the default score(0), then update the value top score with the new score
    loggedInUser.topScore = score; // The final score the user gets is stored into local storage in the object of the currently logged in user

    localStorage[loggedInUser.email] =
      JSON.stringify(loggedInUser); /* converts loggedInUser object into string 
      which is stored in local storage - the key is the users email - updates the current data values in the object with new values including the updated score 
      This creates a new string which contains the updated user score */
  }
}
