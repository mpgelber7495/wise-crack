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

//player function

const collectiondRef = db.collection("Game123");

function player(nickname, time, question) {
    const gameContainer = $("#container");
    gameContainer.append(question);
    gameContainer.append("<br>");
    const labelAnswer = $('<label for="answer-input">Enter your answer!</label> ');
    const playerAnswer = $('<input id="answer-input" type="text"/>');
    const submitAnswer = $('<input type="button" id="submit" value="Submit answer!"/>');
    const timer = $('<h1 id="timer"></h1>');
    timer.text(`You have ${time} seconds left`);
    gameContainer.prepend(timer);
    gameContainer.append(labelAnswer);
    gameContainer.append(playerAnswer);
    gameContainer.append(submitAnswer);
    submitAnswer.on("click", () => {
        event.preventDefault();
        let answer = playerAnswer.val();
        if(answer === "") { gameContainer.text("No answer"); }
        //send answer to the firestore
        ollectiondRef.doc(nickname).set({
            nickname: answer,
        })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
        gameContainer.text("We got your answer!");
    })
}

