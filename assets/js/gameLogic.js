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




//API using Card cast, find a deck code and input below https://www.cardcastgame.com/browse?nsfw=1


var deckId = "8BQAD";
var calls;
function getBlackCards(callback) {
    var queryURL = "https://api.cardcastgame.com/v1/decks/" + deckId + "/cards";
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      callback(response.calls);
    });
  }
  
  
  function myCallback(data) {
    calls = data;
    console.log(calls[4].text);
  }
  
  getBlackCards(myCallback);
