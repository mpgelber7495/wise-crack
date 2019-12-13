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

//API using Card cast, find a deck code and input below https://www.cardcastgame.com/browse?nsfw=1

var deckId = "8BQAD";

var queryURL = "https://api.cardcastgame.com/v1/decks/" + deckId + "/cards";
function generateRandomCard() {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    let cardsArray = response.calls;
    console.log(cardsArray);
    console.log(
      cardsArray[Math.floor(Math.random() * cardsArray.length)]["text"][0]
    );
    return str(
      cardsArray[Math.floor(Math.random() * cardsArray.length)]["text"][0]
    );
  });
}

// console.log(gameID);

// ------------------------------------------------
// TO-DO: Function for running game as judge
// ------------------------------------------------

// Using stagnant gameID for development
const gameID = "Game123";

// Setting an array equal to the players who have signed up via path gameID >> Logistics >> players
let playersArray = [];
db.collection(gameID)
  .doc("logistics")
  .onSnapshot(function(doc) {
    playersArray = doc.data()["players"];
  });

function runRoundAsJudge(roundID) {
  countDown(roundID);
  let randCard = generateRandomCard();
  setPrompt(roundID, randCard);
}
// Function for setting the prompt in the database
function setPrompt(roundID, prompt) {
  let data = {};
  data["prompt"] = prompt;
  writeDataMerge(gameID, roundID, data);
}

// Function for counting down from 40 seconds
function countDown(roundID) {
  let timeHolder = 2;
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

runRoundAsJudge("round1");
