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

// ------------------------------------------------
// TO-DO: Function for running game as judge
// ------------------------------------------------

// Function for setting the prompt in the database
function setPrompt(gameID, roundID, prompt) {
  db.collection(gameID)
    .doc(roundID)
    .set({ prompt: prompt });
}

// Function for counting down from 40 seconds
function countDown(gameID) {
  let timeHolder = 40;
  var counter = setInterval(function() {
    timeHolder--;
    writeDataMerge(gameID, "logistics", { timeHolder: timeHolder });
    if (timeHolder < 1) {
      clearInterval(counter);
    }
  }, 1000);
}

function runRoundAsJudge(gameID, roundID) {
  countDown(gameID);
  // setPrompt();

  //
}

runRoundAsJudge("gameXYZ", "round3");
