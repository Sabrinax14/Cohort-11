let xCoord = document.getElementById('co-ord1');
let yCoord = document.getElementById('co-ord2');

let whoMove = getRandomInt(2); // Generates a int value between 0 and 1

let board = [
    [-1,-1,-1],
    [-1,-1,-1],
    [-1,-1,-1]
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function stateWhosMove() {
    document.getElementById('move').innerHTML = whoMove + 1
}

window.onload = function() {
    stateWhosMove()
}

function makeMove() {
    document.getElementById('error').innerHTML = "" // refactor better later.
    let x = xCoord.value;
    let y = yCoord.value;
    let letsContinue = true;
    let msg = ""
    letsContinue = checkValuesSuitable(x,y,"checkContinue");
    msg = checkValuesSuitable(x,y,"msg");

    if (letsContinue == true) {
        console.log("update move board");
        if (board[x][y] == -1) {
            board[x][y] = whoMove;
            updateBoardPage(x,y)
            changePlayer();
        } else {
            letsContinue = false;
            msg = "This space is already taken"
        }
    }
    
    if (letsContinue == false) {
        document.getElementById('error').innerHTML = msg
    }
   checkEnd();
}

function updateBoardPage(x,y) {
    if (whoMove == 0) {
        icon = "X.png"
    } else {
        icon = "Red_0.png"
    }
    document.getElementById(x + "," + y).innerHTML = `<img src=${icon} class="icon">`
}

function changePlayer() {
    if (whoMove == 0) {
        whoMove = 1
    } else {
        whoMove = 0
    }
    stateWhosMove()
}

function emptyErrorMessage(ms) {
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}

function checkValuesSuitable(x, y, action) {
    let msg = ""
    let toContinue = true;
    if (x > 2) {
        toContinue = false
        msg = "X co-ordinate is too big, it needs to be less than 2"
    }
    if (y > 2) {
        toContinue = false
        msg = "Y co-ordinate is too big, it needs to be less than 2"
    }
    if (x > 2 && y > 2) {
        toContinue = false
        msg = "Both X and Y co-ordinates are too big, it needs to be less than 2"
    }

    if (action == "checkContinue") {
        return toContinue
    } else if (action == "msg") {
        return msg
    }
}

/*function checkEnd() {
    won = false
    for (let i =0; i<3; i++){
     let count = 0
     if(board[i][0] == -1)  {
     pass 
     } else {
        let check = board[i][0]
     }
     let check = board[i][0];
     for (let j=0; j<3; j++) {
      if (board[i][j] == check) {
        count += 1
      }
     }
    } if (count == 3) {
     won = true 
     msg = 'The winner is player' + check + 1
     document.getElementById('error').innerHTML =msg
    }
    if (won == true) {
        break;
    }
}*/ 