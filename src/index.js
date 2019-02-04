const letterGuessNode = document.getElementById('guess-form');
const showGuessedLetters = document.getElementById('show-guesses');
const wordHintNode = document.getElementById('word-hint');
const hangmanCanvasNode = document.getElementById('hangman-canvas');

let guessedLetters = [];

let wordHintArray = [];


const bodyParts = [
    'head',
    'right arm',
    'left arm',
    'torso',
    'right leg',
    'left leg'
];



let incorrectGuesses = 0;

let correctGuesses = 0;

const words = [
    'acres',
    'adult',
    'advice',
    'arrangement',
    'attempt',
    'august',
    'autumn',
    'border',
    'breeze',
    'brick',
    'calm',
    'canal',
    'cast',
    'chose',
    'claws',
    'coach',
    'constantly',
    'contrast',
    'cookies',
    'customs',
    'damage',
    'deeply',
    'depth',
    'discussion',
    'doll',
    'donkey',
    'essential',
    'exchange',
    'exist',
    'explanation',
    'facing',
    'film',
    'finest',
    'fireplace',
    'floating',
    'folks',
    'fort',
    'garage',
    'grabbed',
    'grandmother',
    'habit',
    'happily',
    'heading',
    'hunter',
    'image',
    'independent',
    'instant',
    'kids',
    'label',
    'lungs',
    'manufacturing',
    'mathematics',
    'melted',
    'memory',
    'mill',
    'mission',
    'monkey',
    'mysterious',
    'neighborhood',
    'nuts',
    'occasionally',
    'official',
    'ourselves',
    'palace',
    'plates',
    'poetry',
    'policeman',
    'positive',
    'possibly',
    'practical',
    'pride',
    'promised',
    'recall',
    'relationship',
    'remarkable',
    'require',
    'rhyme',
    'rocky',
    'rubbed',
    'rush',
    'sale',
    'satellites',
    'satisfied',
    'scared',
    'selection',
    'shake',
    'shaking',
    'shallow',
    'shout',
    'silly',
    'simplest',
    'slight',
    'slip',
    'slope',
    'soap',
    'solar',
    'species',
    'spin',
    'stiff',
    'swung',
    'tales',
    'thumb',
    'tobacco',
    'toy',
    'trap',
    'treated',
    'tune',
    'university',
    'vapor',
    'vessels',
    'wealth',
    'wolf',
    'zoo'
];

let randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);

wordHintNode.textContent = randomWord;
wordHintArray = [];
for(let index = 0; index < randomWord.length; index++) {

        
    wordHintArray.push(' _ ');

    console.log(wordHintArray);

    wordHintNode.textContent = wordHintArray;
        // console.log(randomWord.length);
}


letterGuessNode.addEventListener('submit', function(event) {
    event.preventDefault();
    

    const letterGuess = document.getElementById('guess').value;
    console.log(letterGuess);

    if(letterGuess.length !== 1) {
        alert('sorry please guess only one letter');
    }
    else {
        guessedLetters.push(letterGuess);
        showGuessedLetters.textContent = guessedLetters;
    }

    checkWord();
});


function checkWord() {
    // let randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);
    const inputLetter = document.getElementById('guess').value;
    console.log(inputLetter);

    let wrong = 0;
    let right = 0;

    let indicesOfRandomWord = [];
    
    for(let index = 0; index < randomWord.length; index++) {
        if(randomWord[index] === inputLetter) {
            indicesOfRandomWord.push(index);
        }
    }
    console.log(indicesOfRandomWord);


    for(let index = 0; index < indicesOfRandomWord.length; index++) {

        let yes = indicesOfRandomWord[index];

        wordHintArray.splice(yes, 1, inputLetter);

        console.log('this is indices of random word ' + yes);
        
        console.log('the input letter is ' + inputLetter);

        console.log(wordHintArray);

        wordHintNode.textContent = wordHintArray;

    }

    for(let index = 0; index < randomWord.length; index++) {
        let letterCheck = randomWord[index];
        console.log(letterCheck);
        let n = randomWord.indexOf(letterCheck);







        if (letterCheck === inputLetter) {
            right++;
        }
        else {
            console.log('not a match');
            wrong++;
        }

    }

    if(right < 1) {
        incorrectGuesses++;
        
        const newBodyPart = document.createElement('p');
        newBodyPart.classList.add('body-party');
        
        newBodyPart.textContent = bodyParts[incorrectGuesses - 1];

        hangmanCanvasNode.appendChild(newBodyPart);
    }

    if(right >= 1) {
        correctGuesses++;
    }




    if(incorrectGuesses === 6) {
        alert('sorry you have lost the game!');
        location.reload();
    }

    if(correctGuesses === randomWord.length) {
        alert('you have won the game!');
        location.reload();
    }

    console.log('the number of incorrect guesses this round is' + incorrectGuesses);

}







// function guessWrong() {

// }


// function guessRight() {

// }