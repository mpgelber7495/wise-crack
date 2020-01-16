var db = firebase.firestore();
let centralTimeHolder = 40;
let cardsArray;
var deckId = "G9RHX";
var queryURL = "https://api.cardcastgame.com/v1/decks/" + deckId + "/cards";
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  cardsArray = response.calls;
  console.log("[DEBUG] API Loaded");
});

function writeDataMerge(collection, doc, data) {
  console.log("[DEBUG] writeDataMerge ::", data);
  db.collection(collection)
    .doc(doc)
    .set(data, { merge: true });
}

function writeDataMergeWhipped(collection, doc, data) {
  console.log("[DEBUG] writeDataMerge ::", data);
  db.collection(collection)
    .doc(doc)
    .set(data, { merge: true });
}

// create game and start game button

$(".container")[0].innerHTML += `
<div class="col-6 mt-4 mb-4 create-row d-flex justify-content-center">
<p class = "game-description"> Welcome to  <span>Wise-Crack!</span> <br> <br>  With this funky game, you and your friends will be given prompts and have to creatively enter your own responses!</p>
</div>
<div class="col-6 mt-4 mb-4 create-row d-flex justify-content-center">
  <button type="button" class="btn btn-secondary btn-lg create-game-btn">
    Create New Game
  </button>
</div>
<div class="col-6 mb-4 join-row d-flex justify-content-center">
  <button type="button" class="btn btn-secondary btn-lg join-game-btn">
    Join Existing Game
  </button>
</div>`;

if (window.localStorage.getItem("localNickname")) {
  $(
    ".container"
  )[0].innerHTML += `<div class="col-6 join-row d-flex justify-content-center">
  <button type="button" class="btn btn-secondary btn-lg re-join-game-btn">
    Re-join previous game
  </button>
</div>`;
}
// generates random number ID
var gameID;
var inputGameID;
let allPlayers = [];
let playersArray = [];
let nickname;

// create game button logic
$(".container").on("click", ".create-game-btn", function(event) {
  gameID = Math.random()
    .toString(36)
    .substr(2, 2);
  console.log(gameID);
  $(".container").html("");
  $(".container")[0].innerHTML += `<form>
  <p class ="game-id-holder">Game ID: ${gameID}</p>
  <div class="form-group mt-4 mb-4">
    <label for="nicknameInput">Choose a Nickname!</label>
    <input type="text" class="mt-2 form-control" id="nicknameInput" placeholder="Nickname">
  </div>
  <button type="submit" class="btn btn-primary ready-btn-create">Ready</button>
</form>`;
  db.collection(`${gameID}`)
    .doc("logistics")
    .set({
      judge: null,
      playerCount: 0,
      roundCounter: 1,
      timeHolder: centralTimeHolder,

      players: [],
      gameStarted: false
    });
});

// join game button logic
$(".container").on("click", ".join-game-btn", function(event) {
  $(".container").html("");
  $(".container")[0].innerHTML += `<form>
  <div class="form-group mt-4 mb-4">
    <label for="nicknameInput">Choose a Nickname!</label>
    <input type="text" class="mt-2 mb-4 form-control" id="nicknameInput" placeholder="Nickname">
    <label for="GameIDInput">Enter Game ID</label>
    <input type="text" class="mt-2 form-control" id="gameIDInput" placeholder="Game ID">
  </div>
  <button type="submit" class="btn btn-primary ready-btn-join">Ready</button>
</form>`;
});
var unsubPlayerJoin;
// ready join button logic (PERSON WHO JOINES GAME)
$(".container").on("click", ".ready-btn-join", function(event) {
  event.preventDefault();
  inputGameID = $("#gameIDInput")
    .val()
    .trim();
  console.log(inputGameID);
  let nicknameInput = $("#nicknameInput")
    .val()
    .trim();
  nickname = nicknameInput;
  gameID = inputGameID;
  if (nicknameInput && inputGameID !== "") {
    unsubPlayerJoin = db
      .collection(inputGameID)
      .doc("logistics")
      .onSnapshot(function(doc) {
        if (doc.data().roundCounter === 1) {
          pushPlayersToDB(inputGameID, nicknameInput);
          renderPlayerWaitScreen(inputGameID);
        }
      });
  }
});
$(".container").on("keyup", "#nicknameInput", function() {
  var text = $(this).val();
  $(this).val(text.replace(/[^A-Za-z0-9]/g, ""));
});

// Rejoin existing game button
$(".container").on("click", ".re-join-game-btn", function(event) {
  checkForActiveLocalStorageGame();
});

// create-join button logic (PLAYER WHO CREATES GAME AND BECOMES JUDGE)
$(".container").on("click", ".ready-btn-create", function(event) {
  event.preventDefault();
  let nicknameInput = $("#nicknameInput")
    .val()
    .trim();
  nickname = nicknameInput;
  if (nicknameInput !== "") {
    let pushJudgeData = {};
    pushJudgeData["judge"] = nicknameInput;
    writeDataMerge(gameID, "logistics", pushJudgeData);
    pushPlayersToDB(gameID, nicknameInput);
    renderJudgeWaitScreen(gameID);
  }
});

//function that pushes player to DB
function pushPlayersToDB(gameID, nicknameInput) {
  db.collection(gameID)
    .doc("logistics")
    .update({
      players: firebase.firestore.FieldValue.arrayUnion(nicknameInput)
    });
  /// Setting local storage
  setLocalStorageVariables(nicknameInput, gameID);
}
let unsubPlayerWaitScreen;
//Wait Screen Function
// FIX BUG - make this hidden once the round has begun
function renderPlayerWaitScreen(inputGameID) {
  $(".container").html("");
  let players;
  unsubPlayerWaitScreen = db
    .collection(inputGameID)
    .doc("logistics")
    .onSnapshot(function(doc) {
      if (!doc.data()) {
        return;
      }
      console.log(
        "[DEBUG] renderPlayerWaitScreen ::",
        JSON.stringify(doc.data())
      );
      if (doc.data().gameStarted === false) {
        console.log(doc.data().gameStarted);
        players = doc.data().players;
        playerListItems = "";
        players.forEach(function(player) {
          playerListItems += `<li class="player-item">${player}</li>`;
        });
        $(".container").html(
          `<h5> Please wait for the judge to start the game...</h5><ul class="player-ist">${playerListItems}</ul>`
        );
      } else {
        dummyInstantiate();
        dummyInstantiate = function() {};
      }
    });
}

function setLocalStorageVariables(nickname, gameID) {
  window.localStorage.setItem("localNickname", nickname);
  window.localStorage.setItem("localGameID", gameID);
}

function checkForActiveLocalStorageGame() {
  let localGameID = window.localStorage.getItem("localGameID");
  let localNickname = window.localStorage.getItem("localNickname");
  console.log("[DEBUG] checkForActiveLocalStorageGame " + localGameID);
  console.log("[DEBUG] checkForActiveLocalStorageGame " + localNickname);
  db.collection(localGameID)
    .doc("logistics")
    .get()
    .then(function(doc) {
      let logisticsObject = doc.data();
      console.log(
        "[DEBUG] checkForActiveLocalStorageGame gameStarted || " +
          logisticsObject["gameStarted"]
      );
      if (logisticsObject["gameStarted"] === "true") {
        console.log("[DEBUG] checkForActiveLocalStorageGame instantRound");
        nickname = localNickname;
        gameID = localGameID;
        instantiateRound();
      }
    });
}

function dummyInstantiate() {
  instantiateRound();
}
let unsubJudgeWaitScreen;
function renderJudgeWaitScreen(inputGameID) {
  $(".container").html("");
  let players;
  unsubJudgeWaitScreen = db
    .collection(inputGameID)
    .doc("logistics")
    .onSnapshot(function(doc) {
      if (doc.data().gameStarted === false) {
        players = doc.data().players;
        playerListItems = "";
        players.forEach(function(player) {
          playerListItems += `<li class="player-item">${player}</li>`;
        });
        $(".container").html(
          `<p class ="game-id-holder">Game ID: ${gameID}</p>
        <h5> Waiting for other players to join the game....</h5><ul class="player-list">${playerListItems}</ul><button type="submit" class="btn btn-primary start-btnn" onclick="instantiateRound()">Start Game</button>`
        );
      }
    });
}
// ------------------------------------------------
// TO-DO: Instantiate Round
// ------------------------------------------------
function instantiateRound() {
  // console.log("[DEBUG] instantiateRound");
  if (unsubPlayerWaitScreen) {
    // Kill the snapshot listener on the player wait screen
    unsubPlayerWaitScreen();
  }
  if (unsubJudgeWaitScreen) {
    // Kill the judge wait screen listener if it exists
    unsubJudgeWaitScreen();
  }
  if (unsubListenForNewRound) {
    // Kill the new round listener snapshot if it exists
    unsubListenForNewRound();
  }
  definePlayersArray();
  db.collection(gameID)
    .doc("logistics")
    .get()
    .then(function(doc) {
      let judge = doc.data()["judge"];
      let roundCount = doc.data()["roundCounter"];
      // console.log("[DEBUG]: instantiate Round roundCount: " + roundCount);
      let newRoundID = "round" + roundCount;
      // console.log(
      //   "[DEBUG] instantiateRound :: creating new round ::",
      //   newRoundID
      // );
      if (judge === nickname) {
        writeDataMerge(gameID, "logistics", { gameStarted: "true" });
        let data = {};
        data["winningPlayer"] = "null";
        console.log("[DEBUG] Judge newRoundID: " + newRoundID);
        db.collection(gameID)
          .doc(newRoundID)
          .set(data);
        runRoundAsJudge(newRoundID);
      } else {
        runGameAsPlayer(nickname, newRoundID);
      }
    });
}

// ------------------------------------------------
// TO-DO: Function for player
// ------------------------------------------------

const collectiondRef = db.collection("Game123");

let unsubPromptListenerSnapshot;
let unsubTimeHolderListenerSnapshot;
function runGameAsPlayer(nickname, roundID) {
  try {
    unsubPlayerJoin();
  } catch (err) {}
  $(".container").empty();
  $(".container")[0].innerHTML += `<div class="card" style="width: 18rem;">
  <div class="card-body">
  <div class="row prompt-row d-flex justify-content-center">
  </div></div><div class="d-flex justify-content-center row timer-row"></div><div class=" d-flex justify-content-center row input-row"></div>`;
  const gameContainer = $(".container");
  let prompt = "";
  unsubPromptListenerSnapshot = db
    .collection(gameID)
    .doc(roundID)
    .onSnapshot(function(doc) {
      if (!doc.data()) {
        return;
      }
      prompt = doc.data()["prompt"];
      $(".prompt-row").html(prompt);
    });

  // gameContainer.append("<br>");
  const labelAnswer = $(
    '<label for="answer-input">Enter your answer!</label> '
  );
  const playerAnswer = $(
    '<input id="answer-input" placeholder="Enter here" type="text"/> </br>'
  );
  const submitAnswer = $(
    '<input type="button" class ="btn" id="submit-player-card" value="Submit answer!"/>'
  );
  const timer = $('<h5 id="timer" class ="mb-2"></h5>');
  $(".timer-row").html(timer);
  function dummyListenForNewRound(roundID) {
    listenForNewRound(roundID);
  }

  function respondToNoAnswer(doc) {
    // If no answer is inputted, start listening for new round
    let roundID = "round" + doc.data()["roundCounter"];
    // Listen for the new round
    dummyListenForNewRound(roundID);
    dummyListenForNewRound = function() {};
    // DIDN'T ADD THE BELOW CODE AS IT BREAKS THE GAME, ONCE IT'S REMOVED IT'S NOT REPLACED
    // Clear out the HTML
    // $(".prompt-row").text("Uh oh - you ran out of time!");
    // $("#answer-input").remove();
    // $("#submit-player-card").remove();
  }
  unsubTimeHolderListenerSnapshot = db
    .collection(gameID)
    .doc("logistics")
    .onSnapshot(function(doc) {
      if (!doc.data()) {
        return;
      }
      var time = doc.data()["timeHolder"];
      timer.text(`You have ${time} seconds left`);
      if (time === 0) {
        respondToNoAnswer(doc);
        respondToNoAnswer = function() {};
      }
    });

  $(".input-row").html(labelAnswer);
  gameContainer.append(playerAnswer);
  gameContainer.append(submitAnswer);
  submitAnswer.on("click", () => {
    event.preventDefault();
    let answer = playerAnswer.val();
    if (unsubPromptListenerSnapshot) {
      // Kill prompt snapshot listener
      unsubPromptListenerSnapshot();
      // Kill timeHolder snapshot listener
      unsubTimeHolderListenerSnapshot();
    }
    if (answer === "") {
      gameContainer.text("No answer");
    }

    //send answer to the firestore
    let data = {};
    data[nickname] = answer;
    writeDataMerge(gameID, roundID, data);
    gameContainer.text("We got your answer!");
    listenForNewRound(roundID);
  });
}

let unsubListenForNewRound;
function listenForNewRound(roundID) {
  unsubListenForNewRound = db
    .collection(gameID)
    .doc(roundID)
    .onSnapshot(function(doc) {
      if (!doc.data()) {
        return;
      }
      console.log(
        "[DEBUG] listenForNewRound :: doc.data() ",
        JSON.stringify(doc.data())
      );
      console.log("[DEBUG] listenForNewRound :: gameID: ", gameID);
      console.log("[DEBUG] listenForNewRound :: roundID: ", roundID);
      if (doc.data()["winningResponse"]) {
        showRoundSummaryScreen(roundID);

        setTimeout(instantiateRound, 3000);
      }
    });
}

// ------------------------------------------------
// TO-DO: Function for running game as judge
// ------------------------------------------------
// Using stagnant gameID for development

// Setting an array equal to the players who have signed up via path gameID >> Logistics >> players
function definePlayersArray() {
  db.collection(gameID)
    .doc("logistics")
    .onSnapshot(function(doc) {
      playersArray = doc.data()["players"];
    });
}

function runRoundAsJudge(roundID) {
  setRandomPrompt(roundID);
}
// Function for setting the prompt in the database
let unsubAllAnswers;
function setRandomPrompt(roundID) {
  // API using Card cast, find a deck code and input below https://www.cardcastgame.com/browse?nsfw=1
  let randomCardJSON =
    cardsArray[Math.floor(Math.random() * cardsArray.length)]["text"];
  // Below logic helps to account for cards that require multi-part answers
  let randomCard;
  if (randomCardJSON.length <= 2) {
    randomCard = randomCardJSON[0] + "___________" + randomCardJSON[1];
  } else if (randomCardJSON.length > 2) {
    randomCard =
      randomCardJSON[0] +
      "___________" +
      randomCardJSON[1] +
      "___________" +
      randomCardJSON[2];
  }
  if (randomCard === "") {
    setRandomPrompt(roundID);
    return;
  }
  console.log("[DEBUG] randomCard: " + randomCard);
  let cardData = {};
  cardData["prompt"] = randomCard;
  writeDataMerge(gameID, roundID, cardData);
  $(".container").html("");
  $(".container").html(
    `<div class="card" style="width: 18rem;">
      <div class="card-body">
      <p class = 'judge-prompt'>${randomCard}</p><p class = "judge-countdown-holder"> Time Remaining: </p>
      </div>
    </div>`
  );
  countDown(roundID);
}

// Function for counting down from 40 seconds
function countDown(roundID) {
  let timeHolder = centralTimeHolder;
  var counter = setInterval(function() {
    timeHolder--;
    console.log("[DEBUG]: Time Holder :" + timeHolder);
    writeDataMerge(gameID, "logistics", { timeHolder: timeHolder });
    $(".judge-countdown-holder").text(` Time Remaining: ${timeHolder}`);
    // allAnswers(roundID);
    if (timeHolder < 1) {
      clearInterval(counter);
      displayCardsToJudge(roundID);
      // Insert function to move all other players to the waiting screen
      // Insert function to listen to the responses and send the judges selection to firebase
      // Increase the roundCounter by one

      // Set the new judge as the winner of previous round
    }
  }, 1000);
  unsubAllAnswers = db
    .collection(gameID)
    .doc(roundID)
    .onSnapshot(function(doc) {
      let numAnswered = 0;
      let roundResponseObject = doc.data();
      for (let i = 0; i < playersArray.length; i++) {
        if (roundResponseObject[playersArray[i]]) {
          numAnswered++;
          if (numAnswered === playersArray.length - 1) {
            displayCardsToJudge(roundID);
            clearInterval(counter);
          }
        }
      }
    });
}

function displayCardsToJudge(roundID) {
  if (unsubAllAnswers) {
    unsubAllAnswers();
  }
  db.collection(gameID)
    .doc(roundID)
    .get()
    .then(function(doc) {
      let selectionPHolder = "";
      let roundResponseObject = doc.data();
      // Create a randomly ordered version of the players array
      let randomizedPlayerArray = playersArray;
      randomizedPlayerArray.sort(function(a, b) {
        return 0.5 - Math.random();
      });
      for (let i = 0; i < randomizedPlayerArray.length; i++) {
        if (roundResponseObject[randomizedPlayerArray[i]]) {
          console.log(
            "[DEBUG] round response Object" +
              roundResponseObject[randomizedPlayerArray[i]]
          );
          let playerResponseElement = `<p class = "player-response-holder text-center py-3 mx-2" value = ${
            randomizedPlayerArray[i]
          }> ${roundResponseObject[randomizedPlayerArray[i]]}</p>`;

          selectionPHolder += playerResponseElement;
        }
      }
      let roundSelectionElement = `<div class = "round-selection-container"> <div class="card" style="width: 18rem;">
          <div class="card-body">
          <p class = "show-judge-prompt-holder">${
            doc.data()["prompt"]
          }</p>${selectionPHolder} 
          </div></div>`;

      $(".container").html(roundSelectionElement);
      // Placing the click listener here because it must occur sequentially once the objects have actually been added to the HTML
      noAnswers(roundID);
      listenForJudgesSelection(roundID);
    });
}
//function that automatically moves to next prompt if user does not answer question
function noAnswers(roundID) {
  db.collection(gameID)
    .doc(roundID)
    .get()
    .then(function(doc) {
      let numUnanswered = 0;
      let roundResponseObject = doc.data();
      for (let i = 0; i < playersArray.length; i++) {
        if (!roundResponseObject[playersArray[i]]) {
          numUnanswered++;
          if (numUnanswered === playersArray.length) {
            instantiateRound();
          }
        }
      }
    });
}

function listenForJudgesSelection(roundID) {
  $(".round-selection-container").click(function(event) {
    // Write the winning player to firebase
    let winnerName = {};
    winnerName["winningPlayer"] = event.target.attributes.value.value;
    writeDataMerge(gameID, roundID, winnerName);
    // Write the winning response to firebase
    let winnerAnswer = {};
    winnerAnswer["winningResponse"] = event.target.innerText;

    // Increase the round counter in firebase
    db.collection(gameID)
      .doc("logistics")
      .get()
      .then(function(doc) {
        let roundCountHolder = doc.data()["roundCounter"];
        let roundCount = {};
        roundCount["roundCounter"] = roundCountHolder + 1;
        writeDataMerge(gameID, "logistics", roundCount);
        // Change the judge variable in firebase
        changeJudge(event.target.attributes.value.value);
        writeDataMerge(gameID, "logistics", { timeHolder: centralTimeHolder });
        writeDataMerge(gameID, roundID, winnerAnswer);
        showRoundSummaryScreen(roundID);
        setTimeout(instantiateRound, 5000);
      });
  });
}

function changeJudge(newJudge) {
  let judgeData = {};
  judgeData["judge"] = newJudge;
  writeDataMerge(gameID, "logistics", judgeData);
}

function showRoundSummaryScreen(roundID) {
  $(".container").empty();
  let winnerInfo = "";
  let otherResponses = "";
  let responseHolder = "";
  db.collection(gameID)
    .doc(roundID)
    .get()
    .then(function(doc) {
      //display winner logic
      winnerInfo = `${doc.data()["winningPlayer"]} won with the answer: ${
        doc.data()["winningResponse"]
      }`;
      let roundResponseObject = doc.data();
      for (let i = 0; i < playersArray.length; i++) {
        if (roundResponseObject[playersArray[i]]) {
          otherResponses = `<p class = "player-response-holder text-center py-3 mx-2" value = ${
            playersArray[i]
          }> ${roundResponseObject[playersArray[i]]}</p>`;

          responseHolder += otherResponses;
        }
      }
      let reviewScreenElement = `<div class = "round-selection-container"> <div class="card" style="width: 18rem;">
          <div class="card-body">
          <p class = "show-judge-prompt-holder">${winnerInfo}
          </p>${responseHolder} 
          </div></div>`;
      $(".container").html(reviewScreenElement);
    });
}

//display other answers logic
// for (let i = 0; i < playersArray.length; i++) {
//   if (doc.data()[playersArray[i]]) {
//     otherResponses = `<div class="row"><p class = "player-response-holder text-center py-3 mx-2" value = ${
//       playersArray[i]
//     }> ${doc.data()[playersArray[i]]}</p></div>`;
//     responseHolder += otherResponses;
//   }
// }
//   let roundSummaryElement = `<div class = "round-selection-container"><div class="card" style="width: 18rem;">
// <div class="card-body">
// <p class = "show-judge-prompt-holder">${winnerInfo}
// }</p>${responseHolder}
// </div></div>`;
//   console.log(roundSummaryElement);
//   $(".container").html(roundSummaryElement);
