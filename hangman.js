// $(document).ready(function(){
var currentWord = null
var guessedLetters = []

var incorrectGuesses = 0


function playSound () {
  document.getElementById('audio').play();
}
function incrementIncorrectGuesses (){
  incorrectGuesses++
  console.log(incorrectGuesses)
}
function guessedWordSoFar(){
  var wordGuessed = []
  for(var i=0;i<currentWord.length;i++){
    ("var.currentLetter=currentWord.charAt(i)")
    if(guessedLetters.includes('currentLetter')){
      wordGuessed.push(currentLetter);
    } else{
      wordGuessed.push("_")
    }
    return wordGuessed.join("")
  }
}

$('.letter-button').on('click', function() {
  $(this).hide()
  playSound()
  var letter = $(this).text().toLowerCase()
  guessedLetters.push(letter)
  console.log(guessedLetters)
  if(currentWord.toLowerCase().includes(letter)){
    console.log('correct')
  }
  else {
    console.log('wrong');
    incrementIncorrectGuesses()

  }
})




function myFunction() {
  document.getElementById("myText").value = "Creative";
}

var guessInt = 8;
var guessStr = "You have " + guessInt + " tries left";

// Randomly select a word from the Array
function getWord()
{
  var words = new Array("Creative","Musician","General","Assembly","Computer");

  var index = Math.floor(Math.random() * words.length);
  currentWord = words[index];
  return currentWord
}

// Given a string, "word", return a hidden version of it consisting of dashes for the display.

// let gameLetters = [];

function getDisplay()
{
  var word = getWord()
  console.log(word);
  var display = "";
}
//
// for (var i=0; i < word.length; i++){
//   let gameLetter = $('<div class=gameletter></div>');
//   gameLetters.push(word[i]);
//   $('#myText').append(gameLetter);
//   gameLetter.html(word[i]);
//
//   for(var i = 0;i < gameLetters.length; i++) {
//         if(letter === gameLetters[i]) {
//
//         }
//       }


//  $("#myText").text(display)
function makeTextAppear() {
  var text = document.getElementById('input');
  text.value = "";
}


$("#LetsPlay").click(getDisplay)



// word is an object and search is a default function part of object word
// Given the word "word", check if it contains the letter "letter".
// FIND IF THE LETTER IS IN THE WORD
function isLetterInWord(word, letter){

  /* Write an if conditional to check if the variable word is null OR
  the value of guessInt equals 0 */
  if (word === null || guessInt === 0)
  {
    return;// Return program control with a return statement
  }
  else
  {
    /* Write an if conditional that calls the search function on variable word
    passing variable letter as an argument and use the logical compound not
    operator and equality (!=) to compare the result to -1, -1 indicates that
    it doesn't exist */
    if(word.search(letter) != -1)
    {
      setLetter(word, letter, document.getElementById("theDashes").innerHTML);
      // Call function setLetter(word, letter, document.getElementById("theDashes").innerHTML);
    }
    else
    {
      // letter was not in the word so decrease the number of tries left and update the display
      guessInt--;// Decrement global variable guessInt by 1
      guessStr="You have " + guessInt + " tries left";
      // Update global variable guessStr based in the updated value of guessInt
      document.getElementById("guesses").innerHTML = guessStr;
      // Update element id "guesses" to the updated guessStr
    }
    isFinished(word, document.getElementById("theDashes").innerHTML, guessInt);
    // Call function isFinished( word, document.getElementById("theDashes").innerHTML, guessInt );
  }



  //UPDATE GAME DISPLAY IF WE'VE BEEN GIVEN A MATCHING LETTER
  // This method is called by the Hangman program when your isLetterInWord function above returns true.
  // The parameters passed in are the guessed letter, the secret word, and the current display state of the secret word.
  // This method will return a new display state of the secret word based on the matching letter.

  function setLetter(word, letter, display) {
    /* Write an if conditional to check if the variable word is null OR
    the value of guessInt equals 0 */
    if(word === null || guessInt === 0){
      return;// Return program control with a return statement
    }
    else {
      /*  Write a repetition statement that calls the search function on variable word
      passing variable letter as an argument and use the logical compound not operator
      and equality (!=) to compare the result to -1 */
    }
    while(word.search(letter) != -1)
    // Create variable index and set it equal to the search function call on variable
    //  word passing variable letter
    var index = word.search(letter);
    display = display.substr( 0, index ) + letter + display.substr( index + 1 );
    word = word.substr( 0, index ) + '-' + word.substr( index + 1 );


    display = index; // Update the display
    document.getElementById("theDashes").innerHTML = display
  }
}


// Update element id "theDashes" to the updated display variable

// creates blank spaces for unguessed letters
// CurrentWord.prototype.getGameWord = function() {
// return this.word.replace(new RegEx('[^' + this.guessedLetters +']','gi'),'_');
// }

// This method is called each time you guess a letter. Its job is to determine whether you have have won the game, lost the game,
// or if the game should continue.

// The input parameters passed are the secret word (word), the current word display (display), and the number of chances left (left)
// to reveal the secret word.





// If player clicks("start game button");{
// Game begins and a word is chosen and hidden for the player to guess}
// else if ("player clicks on the correct letter"){
// The letter shows up in the text box to help complete the chosen word }
// } else if("player choses the wrong letter"){
// A body part of the hangman will appear and connect to form the hangman
// }
