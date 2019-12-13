var db = firebase.firestore();

function writeDataMerge(collection, doc, data) {
  db.collection(collection)
    .doc(doc)
    .set(data, { merge: true });
}

function writeDataOverWrite(collection, doc, data) {
  db.collection(collection)
    .doc(doc)
    .set(data);
}

function listenToData(collection, doc, functionToExecute) {
  db.collection(collection)
    .doc(doc)
    .onSnapshot(function(doc) {
      functionToExecute;
    });
}

// create game and start game button

$(".container")[0].innerHTML += `
<div class="col-12 mb-4 create-row d-flex justify-content-center">
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
// var gameID = Math.random()
//   .toString(36)
//   .substr(2, 9);
// console.log(gameID);

// ------------------------------------------------
// TO-DO: Instantiate Round
// ------------------------------------------------
function instantiateRound() {
  db.collection(gameID)
    .doc("logistics")
    .get()
    .then(function(doc) {
      let judge = doc.data()["judge"];
      if (judge === nickname) {
        let roundCount = doc.data()["roundCounter"] + 1;
        let newRoundID = "round" + roundCount;
        let data = {};
        data["winningPlayer"] = "null";
        db.collection(gameID)
          .doc(newRoundID)
          .set(data);
        runRoundAsJudge(newRoundID);
      } else {
        let roundCount = doc.data()["roundCounter"] + 1;
        let newRoundID = "round" + roundCount;
        runGameAsPlayer(nickname, newRoundID);
      }
    });
}

// ------------------------------------------------
// TO-DO: Function for player
// ------------------------------------------------

const collectiondRef = db.collection("Game123");

function runGameAsPlayer(nickname, roundID) {
  const gameContainer = $(".container");
  let prompt = "";
  db.collection(gameID)
    .doc(roundID)
    .onSnapshot(function(doc) {
      prompt = doc.data()["prompt"];
    });
  gameContainer.append(prompt);
  gameContainer.append("<br>");
  const labelAnswer = $(
    '<label for="answer-input">Enter your answer!</label> '
  );
  const playerAnswer = $('<input id="answer-input" type="text"/>');
  const submitAnswer = $(
    '<input type="button" id="submit" value="Submit answer!"/>'
  );
  const timer = $('<h1 id="timer"></h1>');
  db.collection(gameID)
    .doc("logistics")
    .onSnapshot(function(doc) {
      var time = doc.data()["timeHolder"];
      timer.text(`You have ${time} seconds left`);
      gameContainer.prepend(timer);
    });
  gameContainer.append(labelAnswer);
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
  });
}

// ------------------------------------------------
// TO-DO: Function for running game as judge
// ------------------------------------------------
// Using stagnant gameID for development

let gameID = "Game123";
// Setting an array equal to the players who have signed up via path gameID >> Logistics >> players
let playersArray = [];
db.collection(gameID)
  .doc("logistics")
  .onSnapshot(function(doc) {
    playersArray = doc.data()["players"];
  });

function runRoundAsJudge(roundID) {
  countDown(roundID);
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
    let data = {};
    data["prompt"] = randomCard;
    writeDataMerge(gameID, roundID, data);
  });
}

// Function for counting down from 40 seconds
function countDown(roundID) {
  let timeHolder = 10;
  var counter = setInterval(function() {
    timeHolder--;
    writeDataMerge(gameID, "logistics", { timeHolder: timeHolder });
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
          let playerResponseElement = `<p value = ${playersArray[i]}> ${
            roundResponseObject[playersArray[i]]
          }</p>`;

          selectionPHolder += playerResponseElement;
        }
      }
      let roundSelectionElement = `<div class = "round-selection-container"> ${selectionPHolder} </div>`;

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
    writeDataMerge(gameID, roundID, winnerAnswer);
    // Increase the round counter in firebase
    incrementRoundCounter();
    // Change the judge variable in firebase
    changeJudge(event.target.attributes.value.value);
  });
}

function incrementRoundCounter() {
  db.collection(gameID)
    .doc("logistics")
    .get()
    .then(function(doc) {
      let roundCountHolder = doc.data()["roundCounter"];
      let roundCount = {};
      roundCount["roundCounter"] = roundCountHolder + 1;
      writeDataMerge(gameID, "logistics", roundCount);
    });
}

function changeJudge(newJudge) {
  let judgeData = {};
  judgeData["judge"] = newJudge;
  writeDataMerge(gameID, "logistics", judgeData);
}

let nickname = "paul";
instantiateRound();
