"use strict";

var kStats = [9, 7, 6];
var qStats = [4, 9, 5];
var tStats = [7, 7, 8];

var playerHP = 100;
var opponentHP = 100;

function diceFour () {
	var fourRoll = Math.floor((Math.random()*4)+1)
	return fourRoll
}

function diceSix() {
	var sixRoll = Math.floor((Math.random()*6)+1)
	return sixRoll
}

function diceEight() {
	var eightRoll = Math.floor((Math.random()*8)+1)
	return eightRoll 
}

function diceTen() {
	var tenRoll = Math.floor((Math.random()*10)+1)
	return tenRoll
}

function diceTwelve () {
	var twelveRoll = Math.floor((Math.random()*12)+1)
	return twelveRoll
}

function diceTwenty () {
	var twentyRoll = Math.floor((Math.random()*20)+1)
	return twentyRoll
}

function attackRoll (){
	var fourA = diceFour ();
	var twentyA = diceTwenty ();
	var attackSum = fourA + twentyA;
	return attackSum
}

function defendRoll () {
	var sixA = diceSix ();
	var twelveA = diceTwelve ();
	var defendSum = sixA = twelveA;
	return defendSum
}

function dodgeRoll () {
	var eightA = diceEight ();
	var tenA = diceTen ();
	var dodgeSum = eightA + tenA;
	return dodgeSum
}

function playerChar () {
	var pcharType = window.prompt("Will you play as the Knight, the Queen, or the King?")
	return pcharType
}

function playerStats (pcharType, kStats, qStats, tStats) {
	if (pcharType == "Knight") {
		var playerStats=tStats;
	} else if (pcharType == "Queen") {
		var playerStats=qStats;
	} else {
		var playerStats=kStats;
	}
	return playerStats
}

function opponentPrompt () {
	var opponentType= window.prompt("Will you battle the Knight, the Queen, or the King?")
	return opponentType
}

function pickOpponent (opponentType, kStats, qStats, tStats){
	if (opponentType == "Knight") {
		var opponentStats=tStats;
		document.writeln("You've chosen to battle the Knight!" + "<br>");
	} else if (opponentType == "Queen") {
		var opponentStats=qStats;
		document.writeln("You've chosen to battle the Queen!" + "<br>");
	} else {
		var opponentStats=kStats;
		document.writeln("You've chosen to battle the King" + "<br>");
	}
	return opponentStats
}

function playerTurn (playerStats, opponentStats, playerHP, opponentHP, opponentType){
	document.writeln("Your turn to attack!" + "<br>");
	var dodgeNum = dodgeRoll ();
	var defendNum = defendRoll ();
	var attackNum = attackRoll ();
	var damageDealt = 0;
		if (dodgeNum < opponentStats[1]) {
			document.writeln((opponentType) + (" Dodged!" + "<br>"));
		} else	if (defendNum < opponentStats[2]) {
				document.writeln((opponentType) + ("Defended!" + "<br>"));
		}	else {
				var attackNum = (attackNum + playerStats[1]) - opponentStats[2];
				var opponentHP = opponentHP - attackNum;
				document.writeln(("You did ") + (attackNum) + (" damage." + "<br>"));
				}
		document.writeln(("The ") + (opponentType) + (" has ") + (opponentHP) + (" HP remaining." + "<br> <br>"));
	return opponentHP

}

function computerTurn (playerStats, opponentStats, playerHP, opponentHP, opponentType){
	document.writeln(("Now the ") + (opponentType) + (" attacks" + "<br>"));
	var dodgeNum = dodgeRoll ();
	var defendNum = defendRoll ();
	var attackNum = attackRoll ();
	var damageRecieved = 0;
		if (dodgeNum < playerStats[1]) {
			document.writeln("You Dodged!" + "<br>");
		} else	if (defendNum < playerStats[2]) {
				document.writeln("You Defended!" + "<br>");
		}	else {
				var attackNum = (attackNum  + opponentStats[1]) - playerStats[2];
				var playerHP = playerHP - attackNum;
				document.writeln(("You took ") + (attackNum) + (" damage." + "<br>")) 
				}
		document.writeln(("You have ") + (playerHP) + (" hitpoints remaining." + "<br> <br>"));
	return playerHP
		
}

function bothTurns (playerStats, opponentStats, playerHP, opponentHP, opponentType) {
	do {
		opponentHP = playerTurn (playerStats, opponentStats, playerHP, opponentHP, opponentType);
		playerHP = computerTurn(playerStats, opponentStats, playerHP, opponentHP, opponentType);
	}
	while (playerHP > 0 & opponentHP > 0);
	if (playerHP < opponentHP) {
		document.writeln("You died. Noob. Game Over. No GG" + "<br>");
	} else {
		document.writeln(("You won. ") + (opponentType) + (" is a Noob. Game Over. GG" + "<br>"));
	}
}

function Run (kStats, qStats, tStats, playerHP, opponentHP) {
	var pChar = playerChar ();
	var pStats = playerStats (pChar, kStats, qStats, tStats);
	var oChar = opponentPrompt ();
	var oStats = pickOpponent (oChar, kStats, qStats, tStats);
	bothTurns (pStats, oStats, playerHP, opponentHP, oChar);
}

Run (kStats, qStats, tStats, playerHP, opponentHP);

			