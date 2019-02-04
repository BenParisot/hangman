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

wordHintArray = [];

for(let index = 0; index < randomWord.length; index++) {
    wordHintArray.push(' _ ');
}

wordHintNode.textContent = wordHintArray;

letterGuessNode.addEventListener('submit', function(event) {
    event.preventDefault();
    const letterGuess = document.getElementById('guess').value;
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
    const inputLetter = document.getElementById('guess').value;
    console.log(inputLetter);

    let right = 0;

    let indicesOfRandomWord = [];
    
    for(let index = 0; index < randomWord.length; index++) {
        if(randomWord[index] === inputLetter) {
            indicesOfRandomWord.push(index);
        }
    }

    for(let index = 0; index < indicesOfRandomWord.length; index++) {
        wordHintArray.splice(indicesOfRandomWord[index], 1, inputLetter);
        wordHintNode.textContent = wordHintArray;
    }

    for(let index = 0; index < randomWord.length; index++) {
        let letterCheck = randomWord[index];

        if(letterCheck === inputLetter) {
            right++;
        }
    }

    if(right < 1) {
        incorrectGuesses++;
        const newBodyPart = document.createElement('p');
        newBodyPart.classList.add('body-part');
        newBodyPart.textContent = bodyParts[incorrectGuesses - 1];
        hangmanCanvasNode.appendChild(newBodyPart);
    }

    if(right >= 1) {
        correctGuesses++;
    }

    if(incorrectGuesses === 6) {
        alert('Sorry, but you have lost the game! The correct answer was ' + randomWord + '.');
        location.reload();
    }

    if(correctGuesses === randomWord.length) {
        alert('Congrasts, you have won the game! Click okay to play again.');
        location.reload();
    }
}
