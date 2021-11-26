let currentScore = document.querySelector('#currentScore');
let highScore = document.querySelector('#highScore');
let myNum = document.querySelector('#myNum');
let hintMsg = document.querySelector('#hintMsg');
let secretNumOnWinPg = document.querySelector('#secretNumOnWinPg');
let yourScore = document.querySelector('#yourScore');
let bestScore = document.querySelector('#bestScore');
let secretNumOnLosePg = document.querySelector('#secretNumOnLosePg');
let realSecretNum;
let startGame = document.querySelector('#start');
let swaping = document.querySelector('.swaping');
let chance = 10;
let best = 0;
let history = document.querySelector("#history");
let myNumArray = [];


function reset () {
    currentScore.textContent = 10;
    realSecretNum = Math.trunc(Math.random() * 100 + 1);
    console.log(`Secret Number: ${realSecretNum}`);
    hintMsg.textContent = "Please enter a number from 1-100";
    swaping.style.marginLeft = "-100%";
    myNum.value = "";
    chance = 10;
    highScore.textContent = best;
    while (history.firstChild) {
        history.removeChild(history.firstChild);
      }
    while (myNumArray.length > 0) {
        myNumArray.pop();
    }
}

function appendList (value, msg) {
    let node = document.createElement("LI");
    let textnode = document.createTextNode(value + " " + msg);
    node.appendChild(textnode);
    history.appendChild(node);
    history.style.fontSize = "15px";
}

function isDuplicate (userValue, array) {
    if(array.length === 0) {
        if (!userValue || userValue > 100 || !Number(userValue)) {
            return false;
        }
        else {
            array.push(userValue);
            return false;
        }
    }
    else if (array.length === 1) {
        if (!userValue || userValue > 100 || !Number(userValue)){
            return false;
        }
        else if (userValue === array[0]) return true;
        else {
            array.push(userValue);
            return false;
        }
    }
    else {
        for (let i = 0; i < array.length; i++){
            if(userValue === array[i]){
                return true;
            } 
        }
            array.push(userValue);
            return false;         
    }
}

function check () {
    const userValue = myNum.value;
    if (isDuplicate (Number(userValue), myNumArray)) {
        console.log ("Please DO NOT repeat the same number!");
        hintMsg.textContent = "Please DO NOT repeat the same number!";
        myNum.value = "";
    }
    else {
        if (chance >= 1) {
            if (!userValue) {
                // alert('no input!')
                hintMsg.textContent = "Please enter a number between 1 and 100!";
                console.log(`chance left: ${chance}`);
                myNum.value = "";
            }
            else if (!Number(userValue)) {
                // alert('no input!')
                hintMsg.textContent = "Please enter NUMBER ONLY!";
                console.log(`chance left: ${chance}`);
                myNum.value = "";
            }
            else if (Number(userValue > 100)) {
                hintMsg.textContent = "Please enter numbers 1-100 ONLY!";
                console.log(`chance left: ${chance}`);
                myNum.value = "";
            }
            else if (Number(userValue) === realSecretNum) {
                // msgGame.textContent = 'You win!'
                if(chance > best){
                    best = chance;
                }
                swaping.style.marginLeft = "-200%";
                secretNumOnWinPg.textContent = realSecretNum;
                yourScore.textContent = chance;
                bestScore.textContent = best;
                highScore.textContent = best;
                return;
            }
            else if (Number(userValue) > realSecretNum) {
                let text = "Your guess is too high!";
                hintMsg.textContent = "Your guess is too high!";
                if (chance === 1){
                    swaping.style.marginLeft = "-300%";
                    chance--;
                    currentScore.textContent = chance;
                    console.log(`chance left: ${chance}`);
                    appendList(userValue, text);
                    secretNumOnLosePg.textContent = realSecretNum;
                }
                else{
                    chance--;
                    currentScore.textContent = chance;
                    console.log(`chance left: ${chance}`);
                    myNum.value = "";
                    appendList(userValue, text);
                }
            }
            else if (Number(userValue) < realSecretNum) {
                let text = "Your guess is too low!";
                hintMsg.textContent = "Your guess is too low!";
                if (chance === 1){
                    swaping.style.marginLeft = "-300%";
                    chance--;
                    currentScore.textContent = chance;
                    console.log(`chance left: ${chance}`);
                    appendList(userValue, text);
                    secretNumOnLosePg.textContent = realSecretNum;
                }
                else{
                    chance--;
                    currentScore.textContent = chance;
                    console.log(`chance left: ${chance}`);
                    myNum.value = "";
                    appendList(userValue, text);
                }
            }
        }
    } 
}

function start () {
    reset();
    swaping.style.marginLeft = "-100%";
}
