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
    // hunter
    // Illinois
    // image
    // independent
    // instant
    // kids
    // label
    // lungs
    // manufacturing
    // mathematics
    // melted
    // memory
    // mill
    // mission
    // monkey
    // mysterious
    // neighborhood
    // nuts
    // occasionally
    // official
    // ourselves
    // palace
    // plates
    // poetry
    // policeman
    // positive
    // possibly
    // practical
    // pride
    // promised
    // recall
    // relationship
    // remarkable
    // require
    // rhyme
    // rocky
    // rubbed
    // rush
    // sale
    // satellites
    // satisfied
    // scared
    // selection
    // shake
    // shaking
    // shallow
    // shout
    // silly
    // simplest
    // slight
    // slip
    // slope
    // soap
    // solar
    // species
    // spin
    // stiff
    // swung
    // tales
    // thumb
    // tobacco
    // toy
    // trap
    // treated
    // tune
    // university
    // vapor
    // vessels
    // wealth
    // wolf
    // zoo
];

let randomWord = words[Math.floor(Math.random() * words.length)];


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
    showHint();
});


//take in user input letter and check to see if it matches any letter in random word

function checkWord() {
    // let randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);
    const inputLetter = document.getElementById('guess').value;
    console.log(inputLetter);

    let wrong = 0;
    let right = 0;


    for(let index = 0; index < randomWord.length; index++) {
        let letterCheck = randomWord[index];
        console.log(letterCheck);

        if (letterCheck === inputLetter) {
            console.log('match');
            right++;


        }
        else {
            console.log('not a match');
            wrong++;
        }
    }

    if(right < 1) {
        incorrectGuesses++;


    }




    console.log('the number of incorrect guesses this round is' + incorrectGuesses);
    let bodyPartsPart = bodyParts[incorrectGuesses];
    console.log(bodyPartsPart);

    hangmanCanvasNode.textContent = bodyPartsPart;

}



function showHint() {

    wordHintNode.textContent = randomWord;
    wordHintArray = [];
    for(let index = 0; index < randomWord.length; index++) {

        
        wordHintArray.push(' _ ');

        console.log(wordHintArray);

        wordHintNode.textContent = wordHintArray;
        // console.log(randomWord.length);
    }
}

// function guessWrong() {

// }


// function guessRight() {

// }