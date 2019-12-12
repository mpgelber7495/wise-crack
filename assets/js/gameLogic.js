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
var gameID = Math.random()
  .toString(36)
  .substr(2, 9);

console.log(gameID);

// ------------------------------------------------
// TO-DO: Function for running game as judge
// ------------------------------------------------

function runRoundAsJudge(gameID, roundID) {
  countDown(gameID);
  // setPrompt();

  // Define the number of players as a variable
}
// Function for setting the prompt in the database
function setPrompt(gameID, roundID, prompt) {
  let data = {};
  data["prompt"] = prompt;
  writeDataMerge(gameID, roundID, data);
}

// Function for counting down from 40 seconds
function countDown(gameID) {
  let timeHolder = 40;
  var counter = setInterval(function() {
    timeHolder--;
    writeDataMerge(gameID, "logistics", { timeHolder: timeHolder });
    if (timeHolder < 1) {
      clearInterval(counter);
      displayCardsToJudge(roundID);
    }
  }, 1000);
}

function displayCardsToJudge(roundID) {}

runRoundAsJudge("gameXYZ", "round3");
