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

// create game button logic
$(".container").on("click", ".create-game-btn", function(event) {
  gameID = Math.random()
    .toString(36)
    .substr(2, 2);
  console.log(gameID);
  $(".container").html("");
  $(".container")[0].innerHTML += `<form>
  <div class="form-group mt-4 mb-4">
    <label for="nicknameInput">Choose a Nickname!</label>
    <input type="text" class="mt-2 form-control" id="nicknameInput" placeholder="Russomp">
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
      timeTrigger: false
    });
});

// join game button logic
$(".container").on("click", ".join-game-btn", function(event) {
  $(".container").html("");
  $(".container")[0].innerHTML += `<form>
  <div class="form-group mt-4 mb-4">
    <label for="nicknameInput">Choose a Nickname!</label>
    <input type="text" class="mt-2 mb-4 form-control" id="nicknameInput" placeholder="Russomp">
    <label for="GameIDInput">Enter Game ID</label>
    <input type="text" class="mt-2 form-control" id="gameIDInput" placeholder="Game ID">
  </div>
  <button type="submit" class="btn btn-primary ready-btn-join">Ready</button>
</form>`;
});

// ready join button logic
$(".container").on("click", ".ready-btn-join", function(event) {
  event.preventDefault();
  inputGameID = $("#gameIDInput")
    .val()
    .trim();
  console.log(inputGameID);
  if (
    $("#nicknameInput")
      .val()
      .trim() !== "" &&
    $("#gameIDInput")
      .val()
      .trim() !== ""
  ) {
    db.collection(`${inputGameID}`)
      .doc("logistics")
      .onSnapshot(function(doc) {
        if (doc.data().roundCounter === 1) {
          renderWaitScreen();
        }
      });
  }
});

// create-join button logic
$(".container").on("click", ".ready-btn-create", function(event) {
  event.preventDefault();
  let nicknameInput = $("#nicknameInput")
    .val()
    .trim();
  if (nicknameInput !== "") {
    let data = {};
    data["judge"] = nicknameInput;
    writeDataMerge(gameID, "logistics", data);
    let playerData;
    db.collection(gameID)
      .doc("logistics")
      .onSnapshot(function(doc) {
        playerData = doc.data().players;

        // writeDataMerge(gameID, "logistics", data);
      });
    playerData.push(nicknameInput);
    renderWaitScreen();
  }
});

//Wait Screen Function
function renderWaitScreen() {
  $(".container").html("");
  db.collection(`${inputGameID}`)
    .doc("logistics")
    .onSnapshot(function(doc) {
      var players = doc.data().players;
      $(
        ".container"
      )[0].innerHTML += `<h5> Waiting for other players to join the game....</h5>`;
      for (var i = 0; i < players.length; i++) {
        $(".container").append(`<li>${players[i]}</li>`);
      }
    });
}

//   allPlayers.push($(“#nicknameInput”).val());
//   let game = $(“gameIDInput”).val();
//   addNewPlayers(allPlayers, game);
// });
// function addNewPlayers (allPlayers, game) {
//   allPlayers.forEach (function (player) {
//     db.collection(“Game123”).doc(“logistics”).update({players: firebase.firestore.FieldValue.arrayUnion(player)})
//   })
// }
