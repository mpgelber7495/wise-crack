var db = firebase.firestore();

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
<div class="col-12 mt-4 mb-4 create-row d-flex justify-content-center">
<p class = "game-description"> Welcome to <span>Wise-Crack!</span> <br> With this funky game, you and your friends will be given prompts and have to creatively enter your own responses!</p>
</div>
<div class="col-12 mt-4 mb-4 create-row d-flex justify-content-center">
  <button type="button" class="btn btn-secondary btn-lg create-game-btn">
    Create New Game
  </button>
</div>
<div class="col-12 join-row d-flex justify-content-center">
  <button type="button" class="btn btn-secondary btn-lg join-game-btn">
    Join Existing Game
  </button>
</div>`;
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
      timeHolder: 0,
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
}

//Wait Screen Function
// FIX BUG - make this hidden once the round has begun
function renderPlayerWaitScreen(inputGameID) {
  $(".container").html("");
  let players;
  db.collection(inputGameID)
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
        $(".container").html(
          `<h5> Waiting for other players to join the game....</h5><p class="waiting-for-players">${players}</p>`
        );
      } else {
        dummyInstantiate();
        dummyInstantiate = function() {};
      }
    });
}

function dummyInstantiate() {
  instantiateRound();
}

function renderJudgeWaitScreen(inputGameID) {
  $(".container").html("");
  let players;
  db.collection(inputGameID)
    .doc("logistics")
    .onSnapshot(function(doc) {
      if (doc.data().gameStarted === false) {
        players = doc.data().players;
        $(".container").html(
          `<p class ="game-id-holder">Game ID: ${gameID}</p>
        <h5> Waiting for other players to join the game....</h5><p>${players}</p><button type="submit" class="btn btn-primary start-btnn" onclick="instantiateRound()">Start Game</button>`
        );
      }
    });
}
// ------------------------------------------------
// TO-DO: Instantiate Round
// ------------------------------------------------
function instantiateRound() {
  // console.log("[DEBUG] instantiateRound");
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

function runGameAsPlayer(nickname, roundID) {
  try {
    unsubPlayerJoin();
  } catch (err) {}
  $(".container").empty();
  $(
    ".container"
  )[0].innerHTML += `<div class="card" style="width: 18rem;">
  <div class="card-body">
  <div class="row prompt-row d-flex justify-content-center">
  </div></div><div class="d-flex justify-content-center row timer-row"></div><div class=" d-flex justify-content-center row input-row"></div>`;
  const gameContainer = $(".container");
  let prompt = "";
  db.collection(gameID)
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
  const playerAnswer = $('<input id="answer-input" placeholder="Enter here" type="text"/> </br>');
  const submitAnswer = $(
    '<input type="button" class ="btn" id="submit-player-card" value="Submit answer!"/>'
  );
  const timer = $('<h5 id="timer" class ="mb-2"></h5>');
  $(".timer-row").html(timer);

  db.collection(gameID)
    .doc("logistics")
    .onSnapshot(function(doc) {
      if (!doc.data()) {
        return;
      }
      var time = doc.data()["timeHolder"];
      timer.text(`You have ${time} seconds left`);
    });
  $(".input-row").html(labelAnswer);
  gameContainer.append(playerAnswer);
  gameContainer.append(submitAnswer);
  submitAnswer.on("click", () => {
    event.preventDefault();
    let answer = playerAnswer.val();
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
function listenForNewRound(roundID) {
  db.collection(gameID)
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
        instantiateRound();
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

function setRandomPrompt(roundID) {
  // API using Card cast, find a deck code and input below https://www.cardcastgame.com/browse?nsfw=1
  var deckId = "8BQAD";
  var queryURL = "https://api.cardcastgame.com/v1/decks/" + deckId + "/cards";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    let cardsArray = response.calls;
    let randomCard =
      cardsArray[Math.floor(Math.random() * cardsArray.length)]["text"][0];
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
  });
}

// Function for counting down from 40 seconds
function countDown(roundID) {
  let timeHolder = 15;
  var counter = setInterval(function() {
    timeHolder--;
    writeDataMerge(gameID, "logistics", { timeHolder: timeHolder });
    $(".judge-countdown-holder").text(` Time Remaining: ${timeHolder}`);
    if (timeHolder < 1) {
      clearInterval(counter);
      displayCardsToJudge(roundID);
      // Insert function to move all other players to the waiting screen
      // Insert function to listen to the responses and send the judges selection to firebase
      // Increase the roundCounter by one

      // Set the new judge as the winner of previous round
    }
  }, 1000);
}

function displayCardsToJudge(roundID) {
  db.collection(gameID)
    .doc(roundID)
    .get()
    .then(function(doc) {
      let selectionPHolder = "";
      let roundResponseObject = doc.data();
      for (let i = 0; i < playersArray.length; i++) {
        if (roundResponseObject[playersArray[i]]) {
          let playerResponseElement = `<p class = "player-response-holder text-center py-3 mx-2" value = ${
            playersArray[i]
          }> ${roundResponseObject[playersArray[i]]}</>`;

          selectionPHolder += playerResponseElement;
        }
      }
      let roundSelectionElement = `<div class = "round-selection-container"> <div class="card" style="width: 18rem;">
          <div class="card-body">
          <p class = "show-judge-prompt-holder">${
            doc.data()["prompt"]
          }:</p>${selectionPHolder} 
          </div></div>`;

      $(".container").html(roundSelectionElement);
      // Placing the click listener here because it must occur sequentially once the objects have actually been added to the HTML
      listenForJudgesSelection(roundID);
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
        writeDataMerge(gameID, roundID, winnerAnswer);

        instantiateRound();
      });
  });
}

function changeJudge(newJudge) {
  let judgeData = {};
  judgeData["judge"] = newJudge;
  writeDataMerge(gameID, "logistics", judgeData);
}
