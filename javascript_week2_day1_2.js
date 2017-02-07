// declare function named "lengths"
// that accepts a arguments named "arrayOfStrings"
function lengths(arrayOfStrings) {

  // we can log out our "arrayOfStrings"
  console.log(arrayOfStrings);

  // now, we want to "return" something... but what?

  return whateverVariableYouWantToReturnHere;

}
function lengths(arrayOfStrings) {
	console.log(arrayOfStrings);
	return whateverVariable;
}

var words = ["hello", "what", "is", "up", "dude"]
var numbers = [];
function length(words){
	for (i = 0; i < words.length; i++){
		numbers.push(words[i].length)
	}
	return numbers;
}

function say(sentence){
	console.log(sentence)
}

function isEven(number){
	if (number % 2 === 0){
		console.log("even")
	}
	else {
		console.log("odd")
	}
}

function lengthOfWord(word){
	console.log(word.length)
}

function printWords(wordArray){
	for(i = 0; i < wordArray.length; i++){
		console.log(wordArray[i]);
	}
}
////////////////////////////////////////////////

//question 1//
var wordlengths = []

function printLengthOfWords(wordsArray){
	for(i = 0; i < wordsArray.length; i++){
		console.log(wordsArray[i].length)
		wordlengths.push(wordsArray[i].length)
	}
	return wordlengths
}

//questions 2//
function transmogrifier(numberOne, numberTwo, numberThree){
	return Math.pow(numberOne * numberTwo, numberThree)
}

//question 3//

function toonify(accent, sentence){
	if(accent === "daffy"){
		return str.replace(/s/i, 'th');
	console.log("sorry")
	},
	if (accent === "emler"){
		str.replace(/r/i, 'w');
			console.log("rabbit")
	}

/////////////////////////////////////////////////

//question 4//

var a = ['Ramen', 'is', 'like', 'totally', 'delicious']
a.reverse();
	console.log(a)

///////////////////////////////////////////////////

//question 5//

var str = ['Ramen', 'is', 'like', 'totally', 'delicious']{
function str.split([separator[, limit]])
var strReverse = str.split('').reverse([]).join('');
}

////////////////////////////////////////////////////

//question 6//
var = arrayOfStrings
function arrayOfStrings.longest(["Here", "Is", "an", "array"]){
	console.log(arrayOfStrings.length)
}
////////////////////////////////////////////////////

//final round//

var = "here comes the boom"
function repMaster("here comes the boom", wordReverse){
	console.log(string)
}