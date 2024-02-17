// function play(){
//     // hide home
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // show play ground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    // console.log('player pressed: ', playerPressed);

    // stop the game if press 'Esc'
    if (playerPressed === 'Escape') {
        gameOver();
    }

    // get expected key to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // check pressed key are match or not
    if (playerPressed === expectedAlphabet) {
        console.log('win');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);


        removeBackgroundColorById(expectedAlphabet);
        continueGame();


        // ------------------------------
        // update score
        // current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // // new score
        // const newScore = currentScore + 1;
        // // display update score
        // currentScoreElement.innerText = newScore;
        // start new round
        // removeBackgroundColorById(expectedAlphabet);
        // continueGame();
    }
    else {
        console.log('loss');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if (currentLife === 0) {
            gameOver();
        }


        // ---------------------------------
        // lost life
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText =currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // update life
        // const newLife = currentLife - 1;
        // // display left life
        // currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame() {
    // generate random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet', alphabet);

    // set random display show
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);


}

function play() {
    // hide everything show only playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    // reset life and score
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // get final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // clear last alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);


}