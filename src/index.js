
//get letter guess from submit field

const letterGuessNode = document.getElementById('guess-form');
const showGuessedLetters = document.getElementById('show-guesses');

console.log(letterGuessNode);

let guessedLetters = [];

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

letterGuessNode.addEventListener('submit', function(event) {
    event.preventDefault();
    // let word = '';

    const letterGuess = document.getElementById('guess').value;
    console.log(letterGuess);

    guessedLetters.push(letterGuess);

    showGuessedLetters.textContent = ' ' + guessedLetters;

    randomWord();


});



function randomWord() {
    let randomNum = words[Math.floor(Math.random() * words.length)];
    console.log(randomNum);

}