function randomDiceNumber()
{
    var num = Math.floor(Math.random()*6);
    return num;
}

function rollDice()
{
    var diceNumber1 = randomDiceNumber();
    var diceNumber2 = randomDiceNumber();

    var diceImage1 = document.querySelector('.dice1 .diceimg');
    var diceImage2 = document.querySelector('.dice2 .diceimg');

    diceImage1.src = `./Resources/Dice/${diceNumber1 + 1}.png`;
    diceImage2.src = `./Resources/Dice/${diceNumber2 + 1}.png`;
}

const rollButton = document.querySelector('.buttcontainer');

rollButton.addEventListener('click', rollDice);