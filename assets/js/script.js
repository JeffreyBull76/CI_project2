var playerWins = [];
var computerWins = [];

/**
 * Below is code to create two arrays based on a randomised shuffle of the main arrary 
 * link to splice method below
 * https://thewebdev.info/2022/06/26/how-to-split-array-into-two-arrays-with-javascript/#:~:text=To%20split%20array%20into%20two%20arrays%20with%20JavaScript%2C%20we%20can,indexToSplit)%3B%20const%20second%20%3D%20arr.
 * links to randomiser below
 * https://javascript.info/task/shuffle (shuffle array)
 */

 function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
  
      [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(card);  

let playerDeck = card.slice(0, 20);
let computerDeck = card.slice(19, 40);

/**
 * The function below runs when each card has battled the other
 * It runs through and removes values if no cards are left (depreciated but left for clean running)
 * it then pulls the cards from the player and computer decks respectively and passes their values to the corresponding html element
 */

function playCards () {
    let activePlayerCard = playerDeck[0];
    let activeComputerCard = computerDeck[0];

    if ((playerWins.length >= 21) || (computerWins.length >= 21)) {

        document.getElementById('name1').innerText = null;
        document.getElementById('playercard').children[0].outerHTML = null;

        document.getElementById('name2').innerText = null;
        document.getElementById('computercard').children[0].outerHTML = null;

        document.getElementById('fearfactor1').parentElement.hidden = true;
        document.getElementById('killingpower1').parentElement.hidden = true;
        document.getElementById('infamy1').parentElement.hidden = true;
        document.getElementById('persistence1').parentElement.hidden = true;

        document.getElementById('fearfactor2').parentElement.hidden = true;
        document.getElementById('killingpower2').parentElement.hidden = true;
        document.getElementById('infamy2').parentElement.hidden = true;
        document.getElementById('persistence2').parentElement.hidden = true;

    } else {

        document.getElementById('name1').innerText = activePlayerCard.name;
        document.getElementById('playercard').children[0].outerHTML = `<picture> 
        <source media="(max-width: 767px)" srcset=${activePlayerCard.image} width="165" height="165">
        <img src=${activePlayerCard.image} alt="working resize test" width="230" height="230">
        </picture>`;
        document.getElementById('fearfactor1').innerText = activePlayerCard.ffactor;
        document.getElementById('killingpower1').innerText = activePlayerCard.kpower;
        document.getElementById('infamy1').innerText = activePlayerCard.infamy;
        document.getElementById('persistence1').innerText = activePlayerCard.persistence;
    
        document.getElementById('name2').innerText = activeComputerCard.name;
        document.getElementById('name2').hidden = true;
        document.getElementById('computercard').children[0].outerHTML = `<picture> 
        <source media="(max-width: 767px)" srcset=${activeComputerCard.image} width="115" height="115">
        <img src=${activeComputerCard.image} alt="working resize test" width="230" height="230">
        </picture>`;
        document.getElementById('computercard').children[0].style.visibility = "hidden";
        document.getElementById('fearfactor2').innerText = activeComputerCard.ffactor;
        document.getElementById('fearfactor2').parentElement.hidden = true;
        document.getElementById('killingpower2').innerText = activeComputerCard.kpower;
        document.getElementById('killingpower2').parentElement.hidden = true;
        document.getElementById('infamy2').innerText = activeComputerCard.infamy;
        document.getElementById('infamy2').parentElement.hidden = true;
        document.getElementById('persistence2').innerText = activeComputerCard.persistence;
        document.getElementById('persistence2').parentElement.hidden = true;
        
    }

}

playCards();

/**
 * Below are the code blocks which set the active field variables based on which number the user clicks
 * It sets those and then runs the battle function
 */

let fieldP; 
let fieldC;

let fieldP1 = document.getElementById('fearfactor1');
let fieldC1 = document.getElementById('fearfactor2');

let fieldP2 = document.getElementById('killingpower1');
let fieldC2 = document.getElementById('killingpower2');

let fieldP3 = document.getElementById('infamy1');
let fieldC3 = document.getElementById('infamy2');

let fieldP4 = document.getElementById('persistence1');
let fieldC4 = document.getElementById('persistence2');

function setFearFactorField() {
    fieldP = fieldP1.innerHTML;
    fieldC = fieldC1.innerHTML;
    document.getElementById('name2').hidden = false;
    document.getElementById('computercard').children[0].style.visibility = "visible";
    document.getElementById('fearfactor2').parentElement.hidden = false;
    document.getElementById('killingpower2').parentElement.hidden = false;
    document.getElementById('infamy2').parentElement.hidden = false;
    document.getElementById('persistence2').parentElement.hidden = false;
    battle();
}

function setKillingPowerField() {
    fieldP = fieldP2.innerHTML;
    fieldC = fieldC2.innerHTML;
    document.getElementById('name2').hidden = false;
    document.getElementById('computercard').children[0].style.visibility = "visible";
    document.getElementById('fearfactor2').parentElement.hidden = false;
    document.getElementById('killingpower2').parentElement.hidden = false;
    document.getElementById('infamy2').parentElement.hidden = false;
    document.getElementById('persistence2').parentElement.hidden = false;
    battle();
}

function setInfamyField() {
    fieldP = fieldP3.innerHTML;
    fieldC = fieldC3.innerHTML;
    document.getElementById('name2').hidden = false;
    document.getElementById('computercard').children[0].style.visibility = "visible";
    document.getElementById('fearfactor2').parentElement.hidden = false;
    document.getElementById('killingpower2').parentElement.hidden = false;
    document.getElementById('infamy2').parentElement.hidden = false;
    document.getElementById('persistence2').parentElement.hidden = false;
    battle();
}

function setPersistenceField() {
    fieldP = fieldP4.innerHTML;
    fieldC = fieldC4.innerHTML;
    document.getElementById('name2').hidden = false;
    document.getElementById('computercard').children[0].style.visibility = "visible";
    document.getElementById('fearfactor2').parentElement.hidden = false;
    document.getElementById('killingpower2').parentElement.hidden = false;
    document.getElementById('infamy2').parentElement.hidden = false;
    document.getElementById('persistence2').parentElement.hidden = false;
    battle();
}

/**
 * Battle function removes listeners to prevent users clicking fields while no active card is present
 * The it flips the computers card by replacing its background image.
 * Then checks if either player has won at a score of 21 if not then executes a code which 
 * compares the active fields, determines a winner, pulls both cards from active card area
 * pushes them to relevant score pile, updates the score then runs a function which allows the popup to be clicked for next card
 */

function battle() {
    fieldP1.removeEventListener('click', setFearFactorField);
    fieldP2.removeEventListener('click', setKillingPowerField);
    fieldP3.removeEventListener('click', setInfamyField);
    fieldP4.removeEventListener('click', setPersistenceField);
    document.getElementById('computercard').style.backgroundImage = "url('assets/images/tt-card-front1.png')";
    
    if ((playerWins.length >= 21) || (computerWins.length >= 21)) {
        
        document.getElementById('fearfactor2').parentElement.hidden = true;
        document.getElementById('killingpower2').parentElement.hidden = true;
        document.getElementById('infamy2').parentElement.hidden = true;
        document.getElementById('persistence2').parentElement.hidden = true;
        document.getElementById('fearfactor1').parentElement.hidden = true;
        document.getElementById('killingpower1').parentElement.hidden = true;
        document.getElementById('infamy1').parentElement.hidden = true;
        document.getElementById('persistence1').parentElement.hidden = true;

    } else {
        if (fieldP > fieldC) {
        playerWins.push(playerDeck[0]);
        playerWins.push(computerDeck[0]);
        playerDeck.shift();
        computerDeck.shift();
        document.getElementById('messagearea').style.visibility = "visible";
        document.getElementById('popuptext').innerText = 'Win... next card';

        document.getElementById('playerscore').children[1].textContent = playerWins.length;
    } else if (fieldP < fieldC) {
        computerWins.push(playerDeck[0]);
        computerWins.push(computerDeck[0]);
        playerDeck.shift();
        computerDeck.shift();   
        document.getElementById('messagearea').style.visibility = "visible";
        document.getElementById('popuptext').innerText = 'Lose... next card';

        document.getElementById('computerscore').children[1].textContent = computerWins.length;    
    } else if (fieldP == fieldC) {
        playerWins.push(playerDeck[0]);
        computerWins.push(computerDeck[0]);
        playerDeck.shift();
        computerDeck.shift(); 
        document.getElementById('messagearea').style.visibility = "visible";
        document.getElementById('popuptext').innerText = 'Draw... next card';

        document.getElementById('playerscore').children[1].textContent = playerWins.length;
        document.getElementById('computerscore').children[1].textContent = computerWins.length;
    }
    
    let nextCard = document.getElementById('popuptext');
    nextCard.addEventListener('click', addListeners);

}}

/**
 * Battle function listeners which are adde each round and runs determine winner function
 */

function addListeners () {
    document.getElementById('messagearea').style.visibility = "hidden";
    fieldP1.addEventListener('click', setFearFactorField);
    fieldP2.addEventListener('click', setKillingPowerField);
    fieldP3.addEventListener('click', setInfamyField);
    fieldP4.addEventListener('click', setPersistenceField);
    playCards();
    document.getElementById('computercard').style.backgroundImage = "url('assets/images/tt-card-back1.png')";
    determineWinner();

}

addListeners();

//next game button reloads the page

function nextGame() {
    if ((playerWins.length >= 21) || (computerWins.length >= 21)) {
        location.reload();
    } else {
        alert('finish this game first!');
    }
}

/**
 * check to see if win conditions are met then executes 
 * allows user to select next game 
 */

function determineWinner() {
    
    if ((playerWins.length >= 21) || (computerWins.length >= 21)) {
        
        document.getElementById('playercard').style.backgroundImage = "url('assets/images/tt-card-back1.png')";
        if (playerWins.length > computerWins.length) {
            document.getElementById('messagearea').style.visibility = "visible";
            document.getElementById('popuptext').innerText = 'You win... play again';

            let myButton = document.getElementById('popuptext');
            myButton.addEventListener('click', nextGame);

        } else if (playerWins.length < computerWins.length) {
            document.getElementById('messagearea').style.visibility = "visible";
            document.getElementById('popuptext').innerText = 'You lose... play again';
            
            let myButton = document.getElementById('popuptext');
            myButton.addEventListener('click', nextGame);
            
        } else {
            document.getElementById('messagearea').style.visibility = "visible";
            document.getElementById('popuptext').innerText = 'You draw... play again';

            let myButton = document.getElementById('popuptext');
            myButton.addEventListener('click', nextGame);

        }
    }
}