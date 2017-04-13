"use strict";

var lineBreaks = "<br>"

function storeWords(){
	var articles = document.getElementById("inputArticles").value;
	var conjunctions = document.getElementById("inputConjunctions").value;
	var adjectives = document.getElementById("inputAdjectives").value;
	var prepositions = document.getElementById("inputPrepositions").value;
	var verbs = document.getElementById("inputVerbs").value;
	var nouns = document.getElementById("inputNouns").value;
}

function articleArray (articles) {
	var artArray = articles.split (" ");
	return artArray;
}

function conjunctArray (conjunctions) {
	var conjArray = conjunctions.split (" ");
	return conjArray;
}

function adjectivesArray (adjectives) {
	var adjArray = adjectives.split (" ");
	return adjArray;
}

function prepositionArray (prepositions) {
	var prepArray = prepositions.split (" ");
	return prepArray;
}

function verbArray (verbs) {
	var vArray = verbs.split (" ");
	return vArray;
}

function nounArray (nouns) {
	var nArray = nouns.split (" ");
	return nArray;
}

function diceFour () {
	var fourRoll = Math.floor(Math.random()*5)
	return fourRoll
}

function diceSix() {
	var sixRoll = Math.floor(Math.random()*7)
	return sixRoll
}

function diceEight() {
	var eightRoll = Math.floor(Math.random()*9)
	return eightRoll 
}

function diceTen() {
	var tenRoll = Math.floor(Math.random()*10)
	return tenRoll
}

function diceTwelve () {
	var twelveRoll = Math.floor(Math.random()*12)
	return twelveRoll
}

function diceTwenty () {
	var twentyRoll = Math.floor(Math.random()*20)
	return twentyRoll
}

function diceSeventy (){
	var SeventyRoll = Math.floor(Math.random()*70)
	return SeventyRoll
}

function sumIndices (artArray, conjArray, adjArray, prepArray, vArray, nArray) {
	var indiciesSum = [];
	var indiciesSum = nArray.concat(vArray, prepArray, adjArray, conjArray, artArray)
	return indiciesSum
}

function reorder (articleArray, conjunctArray, adjectivesArray, prepositionArray, verbArray, nounArray, indiciesSum, lineBreaks){
	var randomizedWords = [];
	for (var i = 0; i < 100 ; i++){ 
		var artIndex = diceFour();
		var conjIndex = diceSix();
		var adjIndex = diceEight();
		var prepIndex = diceTen();
		var verbIndex = diceTwelve();
		var nounIndex = diceTwenty();
		var randomIndex = diceSeventy();
		randomizedWords[i] = articleArray[artIndex];
		i++;
		randomizedWords[i] = nounArray[nounIndex];
		i++;
		randomizedWords[i] = verbArray[verbIndex];
		i++; 
		randomizedWords[i] = conjunctArray[conjIndex];
		i++; 
		var artIndex = diceFour();
		randomizedWords[i] = articleArray[artIndex];
		i++;
		randomizedWords[i] = adjectivesArray[adjIndex];
		var nounIndex = diceTwenty();
		randomizedWords[i] = nounArray[nounIndex];
		i++; 
		var artIndex = diceFour();
		randomizedWords[i] = articleArray[artIndex];
		i++;
		var nounIndex = diceTwenty();
		randomizedWords[i] = nounArray[nounIndex];
		i++;
		var verbIndex = diceTwelve();
		randomizedWords[i] = verbArray[verbIndex];
		i++; 
		randomizedWords[i] = indiciesSum[randomIndex];
		i++; 
		var adjIndex = diceEight();
		randomizedWords[i] = adjectivesArray[adjIndex];
		i++
		var nounIndex = diceTwenty();
		randomizedWords[i] = nounArray[nounIndex];
	}	
	return randomizedWords;
}

function sentence (randomizedWords){
		var randomString = randomizedWords.join(" ");
		return randomString;
}

function print (randomizedWords) {
	document.getElementById("printout").innerHTML = (randomizedWords);
}

function run() {
	var articles = document.getElementById("inputArticles").value;
	var conjunctions = document.getElementById("inputConjunctions").value;
	var adjectives =  document.getElementById("inputAdjectives").value;
	var prepositions = document.getElementById("inputPrepositions").value;
	var verbs = document.getElementById("inputVerbs").value;
	var nouns = document.getElementById("inputNouns").value;
	var fourArray = articleArray (articles);
	var sixArray = conjunctArray (conjunctions);
	var eightArray = adjectivesArray (adjectives);
	var tenArray = prepositionArray (prepositions);
	var twelveArray = verbArray (verbs);
	var twentyArray = nounArray (nouns);
	var seventyArray = sumIndices (fourArray, sixArray, eightArray, tenArray, twelveArray, twentyArray); 
	var random = reorder (fourArray, sixArray, eightArray, tenArray, twelveArray, twentyArray, seventyArray);
	print (sentence(random));
}

