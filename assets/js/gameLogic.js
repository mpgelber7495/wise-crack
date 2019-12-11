var db = firebase.firestore();

function writeDataMerge(collection, doc, data) {
  db.collection(collection)
    .doc(doc)
    .set(
      {
        data
      },
      { merge: true }
    );
}

function writeDataOverWrite(collection, doc, data) {
  db.collection(collection)
    .doc(doc)
    .set({
      data
    });
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

//Function for setting the prompt in the database
function setPrompt(gameID, roundID, prompt) {
  db.collection(gameID)
    .doc(roundID)
    .set({ prompt: prompt });
}

function runRoundAsJudge(gameID, roundID) {
  setPrompt();

  //
}

runRoundAsJudge();
