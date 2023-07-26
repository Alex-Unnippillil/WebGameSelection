
let targetNumber;
let attempts = 0;
let selectedGame = 1;


function newGameGuessNumber() {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('result').innerHTML = '';
  document.getElementById('guessInput').value = '';
}

function newGameEvenOdd() {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('result').innerHTML = '';
  document.getElementById('guessInput').value = '';
  document.getElementById('result').innerHTML = `Is the number ${targetNumber} even or odd?`;
}

function newGameHigherLower() {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('result').innerHTML = '';
  document.getElementById('guessInput').value = '';
  document.getElementById('result').innerHTML = `Is the next number higher or lower than ${targetNumber}?`;
}

function newGameColorGuess() {
  const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Brown', 'Pink'];
  targetNumber = Math.floor(Math.random() * colors.length);
  attempts = 0;
  document.getElementById('result').innerHTML = '';
  document.getElementById('guessInput').value = '';
  document.getElementById('result').innerHTML = `Guess the color: ${colors[targetNumber]}`;
}

function newGameRockPaperScissors() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  targetNumber = Math.floor(Math.random() * choices.length);
  attempts = 0;
  document.getElementById('result').innerHTML = '';
  document.getElementById('guessInput').value = '';
  document.getElementById('result').innerHTML = `Choose: Rock, Paper, or Scissors`;
}

function newGameDiceRoll() {
  targetNumber = Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2;
  attempts = 0;
  document.getElementById('result').innerHTML = '';
  document.getElementById('guessInput').value = '';
  document.getElementById('result').innerHTML = `Guess the sum of two dice rolls (2-12)`;
}

function newGameCoinToss() {
  targetNumber = Math.floor(Math.random() * 2);
  attempts = 0;
  document.getElementById('result').innerHTML = '';
  document.getElementById('guessInput').value = '';
  document.getElementById('result').innerHTML = `Heads or Tails?`;
}

function newGameNumberMemory() {
  const sequenceLength = 5;
  const sequence = [];
  for (let i = 0; i < sequenceLength; i++) {
    sequence.push(Math.floor(Math.random() * 10));
  }

  attempts = 0;
  document.getElementById('result').innerHTML = '';
  document.getElementById('guessInput').value = '';
  document.getElementById('result').innerHTML = `Memorize the sequence: ${sequence.join(', ')}`;
  setTimeout(() => {
    document.getElementById('result').innerHTML = 'Enter the sequence (e.g., 1 2 3 4 5):';
    targetNumber = sequence;
  }, 2000); 
}

function jumbleWord(word) {
  const jumbledWord = word.split('').sort(() => Math.random() - 0.5).join('');
  return jumbledWord !== word ? jumbledWord : jumbleWord(word); 
}

function newGameWordJumble() {
  const words = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
  targetNumber = Math.floor(Math.random() * words.length);
  const jumbledWord = jumbleWord(words[targetNumber]);
  attempts = 0;
  document.getElementById('result').innerHTML = '';
  document.getElementById('guessInput').value = '';
  document.getElementById('result').innerHTML = `Unscramble the word: ${jumbledWord}`;
}

function newGameAnagram() {
  const words = ['listen', 'silent', 'enlist', 'tinsel'];
  targetNumber = Math.floor(Math.random() * words.length);
  attempts = 0;
  document.getElementById('result').innerHTML = '';
  document.getElementById('guessInput').value = '';
  document.getElementById('result').innerHTML = `Enter an anagram of the word: ${words[targetNumber]}`;
}


function checkGuessGuessNumber() {
  const guess = parseInt(document.getElementById('guessInput').value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    document.getElementById('result').innerHTML = 'Please enter a valid number between 1 and 100.';
    return;
  }

  attempts++;
  if (guess === targetNumber) {
    document.getElementById('result').innerHTML = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
    newGameGuessNumber();
  } else if (guess < targetNumber) {
    document.getElementById('result').innerHTML = 'Try a higher number.';
  } else {
    document.getElementById('result').innerHTML = 'Try a lower number.';
  }
}


function checkGuessEvenOdd() {
  const guess = document.getElementById('guessInput').value.toLowerCase();
  if (guess !== 'even' && guess !== 'odd') {
    document.getElementById('result').innerHTML = 'Please enter "even" or "odd".';
    return;
  }

  const isEven = targetNumber % 2 === 0;
  if ((isEven && guess === 'even') || (!isEven && guess === 'odd')) {
    document.getElementById('result').innerHTML = `Correct! The number ${targetNumber} is ${isEven ? 'even' : 'odd'}.`;
    newGameEvenOdd();
  } else {
    document.getElementById('result').innerHTML = `Wrong! The number ${targetNumber} is ${isEven ? 'even' : 'odd'}. Try again.`;
  }
}

function checkGuessHigherLower() {
  const guess = document.getElementById('guessInput').value.toLowerCase();
  if (guess !== 'higher' && guess !== 'lower') {
    document.getElementById('result').innerHTML = 'Please enter "higher" or "lower".';
    return;
  }

  const newNumber = Math.floor(Math.random() * 100) + 1;
  if ((newNumber > targetNumber && guess === 'higher') || (newNumber < targetNumber && guess === 'lower')) {
    document.getElementById('result').innerHTML = `Correct! The next number is ${newNumber}.`;
    targetNumber = newNumber;
  } else {
    document.getElementById('result').innerHTML = `Wrong! The next number is ${newNumber}. Try again.`;
  }
}

function checkGuessColorGuess() {
  const guess = document.getElementById('guessInput').value.toLowerCase();
  const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'brown', 'pink'];
  const guessedColor = colors.indexOf(guess);

  if (guessedColor === -1) {
    document.getElementById('result').innerHTML = 'Please enter a valid color.';
    return;
  }

  if (guessedColor === targetNumber) {
    document.getElementById('result').innerHTML = `Correct! The color is ${colors[targetNumber]}.`;
    newGameColorGuess();
  } else {
    document.getElementById('result').innerHTML = `Wrong! The color is ${colors[targetNumber]}. Try again.`;
  }
}

function checkGuessRockPaperScissors() {
  const guess = document.getElementById('guessInput').value.toLowerCase();
  const choices = ['rock', 'paper', 'scissors'];
  const guessedChoice = choices.indexOf(guess);

  if (guessedChoice === -1) {
    document.getElementById('result').innerHTML = 'Please enter a valid choice (Rock, Paper, or Scissors).';
    return;
  }

  const computerChoice = Math.floor(Math.random() * choices.length);
  if (guessedChoice === computerChoice) {
    document.getElementById('result').innerHTML = `It's a tie! Both chose ${choices[guessedChoice]}.`;
  } else if (
    (guessedChoice === 0 && computerChoice === 2) ||
    (guessedChoice === 1 && computerChoice === 0) ||
    (guessedChoice === 2 && computerChoice === 1)
  ) {
    document.getElementById('result').innerHTML = `You win! ${choices[guessedChoice]} beats ${choices[computerChoice]}.`;
  } else {
    document.getElementById('result').innerHTML = `You lose! ${choices[computerChoice]} beats ${choices[guessedChoice]}.`;
  }
}

function checkGuessDiceRoll() {
  const guess = parseInt(document.getElementById('guessInput').value);
  if (isNaN(guess) || guess < 2 || guess > 12) {
    document.getElementById('result').innerHTML = 'Please enter a valid number between 2 and 12.';
    return;
  }

  attempts++;
  if (guess === targetNumber) {
    document.getElementById('result').innerHTML = `Congratulations! You guessed the sum of two dice rolls: ${targetNumber} in ${attempts} attempts.`;
    newGameDiceRoll();
  } else {
    document.getElementById('result').innerHTML = 'Try again.';
  }
}

function checkGuessCoinToss() {
  const guess = document.getElementById('guessInput').value.toLowerCase();
  if (guess !== 'heads' && guess !== 'tails') {
    document.getElementById('result').innerHTML = 'Please enter "heads" or "tails".';
    return;
  }

  const coinSide = Math.random() < 0.5 ? 'heads' : 'tails';
  if (guess === coinSide) {
    document.getElementById('result').innerHTML = `Correct! The coin landed on ${coinSide}.`;
    newGameCoinToss();
  } else {
    document.getElementById('result').innerHTML = `Wrong! The coin landed on ${coinSide}. Try again.`;
  }
}

function checkGuessNumberMemory() {
  const guess = document.getElementById('guessInput').value;
  const userSequence = guess.split(' ').map(Number);

  if (userSequence.length !== targetNumber.length) {
    document.getElementById('result').innerHTML = 'Please enter the entire sequence.';
    return;
  }

  attempts++;
  let correct = true;
  for (let i = 0; i < targetNumber.length; i++) {
    if (userSequence[i] !== targetNumber[i]) {
      correct = false;
      break;
    }
  }

  if (correct) {
    document.getElementById('result').innerHTML = `Congratulations! You entered the correct sequence in ${attempts} attempts.`;
    newGameNumberMemory();
  } else {
    document.getElementById('result').innerHTML = 'Incorrect sequence. Try again.';
  }
}

function checkGuessWordJumble() {
  const guess = document.getElementById('guessInput').value.toLowerCase();
  const word = document.getElementById('result').textContent.split(': ')[1];
  if (guess === word) {
    document.getElementById('result').innerHTML = `Congratulations! You unscrambled the word: ${word}.`;
    newGameWordJumble();
  } else {
    document.getElementById('result').innerHTML = 'Incorrect. Try again.';
  }
}

function checkGuessAnagram() {
  const guess = document.getElementById('guessInput').value.toLowerCase();
  const words = ['listen', 'silent', 'enlist', 'tinsel'];
  if (words.indexOf(guess) !== -1) {
    document.getElementById('result').innerHTML = `Correct! The word is ${words[targetNumber]}.`;
    newGameAnagram();
  } else {
    document.getElementById('result').innerHTML = 'Wrong word. Try again.';
  }
}

function selectGame(gameNumber) {
  selectedGame = gameNumber;
  document.querySelectorAll('.game-list li').forEach((li, index) => {
    li.classList.toggle('active', gameNumber === index + 1);
  });
  updateGameContainer();
}



function updateGameContainer() {
  const gameContents = document.querySelectorAll('.game-content');
  gameContents.forEach((content, index) => {
    if (selectedGame === index + 1) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });

  const gameTitles = document.querySelectorAll('.game-title');
  gameTitles.forEach((title, index) => {
    if (selectedGame === index + 1) {
      title.style.display = 'block';
    } else {
      title.style.display = 'none';
    }
  });

  switch (selectedGame) {
    case 1:
      newGameGuessNumber();
      break;
    case 2:
      newGameEvenOdd();
      break;
    case 3:
      newGameHigherLower();
      break;
    case 4:
      newGameColorGuess();
      break;
    case 5:
      newGameRockPaperScissors();
      break;
    case 6:
      newGameDiceRoll();
      break;
    case 7:
      newGameCoinToss();
      break;
    case 8:
      newGameNumberMemory();
      break;
    case 9:
      newGameWordJumble();
      break;
    case 10:
      newGameAnagram();
      break;
    default:
      break;
  }
}

function displayResult(result) {
  const resultElement = document.getElementById('result');
  resultElement.textContent = result;
}

// Game 1: Guess Number
function newGameGuessNumber() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  function checkGuessGuessNumber() {
    const guessInput = document.querySelector('#game1Content .guessInput');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
      displayResult('Please enter a valid number between 1 and 100.');
    } else {
      attempts++;
      if (guess === secretNumber) {
        displayResult(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
      } else if (guess < secretNumber) {
        displayResult('Try a higher number.');
      } else {
        displayResult('Try a lower number.');
      }
    }
  }

  document.querySelector('#game1Content .submit-button').onclick = checkGuessGuessNumber;
}

// Game 2: Even/Odd
function newGameEvenOdd() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const isEven = randomNumber % 2 === 0;

  function checkGuessEvenOdd() {
    const guessInput = document.querySelector('#game2Content .guessInput');
    const guess = guessInput.value.toLowerCase();

    if (guess === 'even' || guess === 'odd') {
      if ((guess === 'even' && isEven) || (guess === 'odd' && !isEven)) {
        displayResult(`Correct! The number is ${randomNumber} (${isEven ? 'Even' : 'Odd'}).`);
      } else {
        displayResult(`Incorrect! The number is ${randomNumber} (${isEven ? 'Even' : 'Odd'}).`);
      }
    } else {
      displayResult('Please enter "Even" or "Odd".');
    }
  }

  document.querySelector('#game2Content .submit-button').onclick = checkGuessEvenOdd;
}

// Game 3: Higher/Lower
function newGameHigherLower() {
  let currentNumber = Math.floor(Math.random() * 100) + 1;

  function checkGuessHigherLower(guess) {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    const isHigher = newNumber > currentNumber;
    currentNumber = newNumber;

    if (guess === 'higher' || guess === 'lower') {
      if ((guess === 'higher' && isHigher) || (guess === 'lower' && !isHigher)) {
        displayResult(`Correct! The number is ${currentNumber}.`);
      } else {
        displayResult(`Incorrect! The number is ${currentNumber}.`);
      }
    } else {
      displayResult('Please enter "higher" or "lower".');
    }
  }

  document.querySelector('#game3Content .submit-button.higher').onclick = () => checkGuessHigherLower('higher');
  document.querySelector('#game3Content .submit-button.lower').onclick = () => checkGuessHigherLower('lower');
}

// Game 4: Color Guess
function newGameColorGuess() {
  const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  function checkGuessColorGuess() {
    const guessInput = document.querySelector('#game4Content .guessInput');
    const guess = guessInput.value.toLowerCase();

    if (colors.includes(guess)) {
      if (guess === randomColor) {
        displayResult(`Correct! The color is ${randomColor}.`);
      } else {
        displayResult(`Incorrect! The color is ${randomColor}.`);
      }
    } else {
      displayResult('Please enter a valid color name.');
    }
  }

  document.querySelector('#game4Content .submit-button').onclick = checkGuessColorGuess;
}

// Game 5: Rock-Paper-Scissors
function newGameRockPaperScissors() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];

  function checkGuessRockPaperScissors() {
    const guessInput = document.querySelector('#game5Content .guessInput');
    const guess = guessInput.value.toLowerCase();

    if (choices.includes(guess)) {
      if (guess === computerChoice) {
        displayResult(`It's a tie! The computer also chose ${computerChoice}.`);
      } else if (
        (guess === 'rock' && computerChoice === 'scissors') ||
        (guess === 'paper' && computerChoice === 'rock') ||
        (guess === 'scissors' && computerChoice === 'paper')
      ) {
        displayResult(`You win! The computer chose ${computerChoice}.`);
      } else {
        displayResult(`You lose! The computer chose ${computerChoice}.`);
      }
    } else {
      displayResult('Please enter "rock", "paper", or "scissors".');
    }
  }

  document.querySelector('#game5Content .submit-button').onclick = checkGuessRockPaperScissors;
}

// Game 6: Dice Roll
function newGameDiceRoll() {
  const rollDice = () => Math.floor(Math.random() * 6) + 1;

  function checkGuessDiceRoll() {
    const guessInput = document.querySelector('#game6Content .guessInput');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 2 || guess > 12) {
      displayResult('Please enter a valid number between 2 and 12.');
    } else {
      const dice1 = rollDice();
      const dice2 = rollDice();
      const sum = dice1 + dice2;

      if (guess === sum) {
        displayResult(`Correct! You rolled ${dice1} and ${dice2}, sum is ${sum}.`);
      } else {
        displayResult(`Incorrect! You rolled ${dice1} and ${dice2}, sum is ${sum}.`);
      }
    }
  }

  document.querySelector('#game6Content .submit-button').onclick = checkGuessDiceRoll;
}

// Game 7: Coin Toss
function newGameCoinToss() {
  const tossCoin = () => (Math.random() < 0.5 ? 'heads' : 'tails');

  function checkGuessCoinToss() {
    const guessInput = document.querySelector('#game7Content .guessInput');
    const guess = guessInput.value.toLowerCase();

    if (guess === 'heads' || guess === 'tails') {
      const result = tossCoin();

      if (guess === result) {
        displayResult(`Correct! It's ${result}.`);
      } else {
        displayResult(`Incorrect! It's ${result}.`);
      }
    } else {
      displayResult('Please enter "heads" or "tails".');
    }
  }

  document.querySelector('#game7Content .submit-button').onclick = checkGuessCoinToss;
}

// Game 8: Number Memory
function newGameNumberMemory() {
  const sequenceLength = 5;
  const sequence = [];
  let playerSequence = [];
  let showingSequence = true;

  function generateSequence() {
    sequence.length = 0;
    for (let i = 0; i < sequenceLength; i++) {
      sequence.push(Math.floor(Math.random() * 10));
    }
  }

  function showSequence() {
    const sequenceElement = document.getElementById('sequence');
    sequenceElement.textContent = sequence.join(' ');
    setTimeout(() => {
      sequenceElement.textContent = '';
      showingSequence = false;
    }, 2000);
  }

  function checkGuessNumberMemory() {
    if (showingSequence) {
      return;
    }

    const guessInput = document.querySelector('#game8Content .guessInput');
    const guess = guessInput.value.trim();
    const guessArray = guess.split(' ').map(Number);

    if (guessArray.length !== sequence.length) {
      displayResult('Please enter a sequence of 5 numbers.');
      return;
    }

    playerSequence = guessArray;
    let correct = true;

    for (let i = 0; i < sequence.length; i++) {
      if (sequence[i] !== playerSequence[i]) {
        correct = false;
        break;
      }
    }

    if (correct) {
      displayResult('Congratulations! You remembered the sequence correctly.');
    } else {
      displayResult(`Incorrect! The correct sequence was ${sequence.join(' ')}.`);
    }

    guessInput.value = '';
    generateSequence();
    showingSequence = true;
    showSequence();
  }

  generateSequence();
  showSequence();
  document.querySelector('#game8Content .submit-button').onclick = checkGuessNumberMemory;
}

// Game 9: Word Jumble
function newGameWordJumble() {
  const words = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'watermelon'];
  const randomWord = words[Math.floor(Math.random() * words.length)];
  const jumbledWord = randomWord.split('').sort(() => Math.random() - 0.5).join('');

  function checkGuessWordJumble() {
    const guessInput = document.querySelector('#game9Content .guessInput');
    const guess = guessInput.value.toLowerCase();

    if (guess === randomWord) {
      displayResult(`Correct! The word is ${randomWord}.`);
    } else {
      displayResult(`Incorrect! The word was jumbled. It's ${jumbledWord}.`);
    }
  }

  document.querySelector('#game9Content .submit-button').onclick = checkGuessWordJumble;
}

// Game 10: Anagram
function newGameAnagram() {
  const words = ['listen', 'silent', 'enlist', 'tinsel', 'inlets'];
  const randomWord = words[Math.floor(Math.random() * words.length)];

  function isAnagram(word1, word2) {
    if (word1.length !== word2.length) {
      return false;
    }
    return word1.split('').every((char) => word2.includes(char));
  }

  function checkGuessAnagram() {
    const guessInput = document.querySelector('#game10Content .guessInput');
    const guess = guessInput.value.toLowerCase();

    if (guess === randomWord) {
      displayResult(`Correct! The word is ${randomWord}.`);
    } else if (isAnagram(guess, randomWord)) {
      displayResult(`Close! The word is an anagram of ${randomWord}.`);
    } else {
      displayResult(`Incorrect! The word is not ${guess}. It's ${randomWord}.`);
    }
  }

  document.querySelector('#game10Content .submit-button').onclick = checkGuessAnagram;
}



// Game 11: Math Quiz
function newGameMathQuiz() {
  const firstNumber = Math.floor(Math.random() * 10) + 1;
  const secondNumber = Math.floor(Math.random() * 10) + 1;
  const operators = ['+', '-', '*', '/'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];

  function checkAnswerMathQuiz() {
    const answerInput = document.querySelector('#game11Content .answerInput');
    const answer = parseFloat(answerInput.value);

    if (isNaN(answer)) {
      displayResult('Please enter a valid number.');
    } else {
      let correctAnswer;
      switch (randomOperator) {
        case '+':
          correctAnswer = firstNumber + secondNumber;
          break;
        case '-':
          correctAnswer = firstNumber - secondNumber;
          break;
        case '*':
          correctAnswer = firstNumber * secondNumber;
          break;
        case '/':
          correctAnswer = firstNumber / secondNumber;
          break;
        default:
          break;
      }

      if (answer === correctAnswer) {
        displayResult(`Correct! ${firstNumber} ${randomOperator} ${secondNumber} = ${correctAnswer}`);
      } else {
        displayResult(`Incorrect! ${firstNumber} ${randomOperator} ${secondNumber} = ${correctAnswer}`);
      }
    }
  }

  document.querySelector('#game11Content .submit-button').onclick = checkAnswerMathQuiz;
}

// Game 12: Tic-Tac-Toe
function newGameTicTacToe() {
  const board = ['', '', '', '', '', '', '', '', ''];
  let currentPlayer = 'X';

  function checkWinnerTicTacToe() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        displayResult(`${board[a]} wins!`);
        document.querySelector('#game12Content').style.pointerEvents = 'none'; 
        break;
      }
    }

    if (!board.includes('')) {
      displayResult("It's a tie!");
      document.querySelector('#game12Content').style.pointerEvents = 'none'; 
    }
  }

  function makeMoveTicTacToe(index) {
    if (!board[index]) {
      board[index] = currentPlayer;
      const cell = document.querySelector(`#game12Content .cell[data-index='${index}']`);
      cell.textContent = currentPlayer;
      checkWinnerTicTacToe();
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  function handleCellClickTicTacToe(event) {
    const cellIndex = event.target.dataset.index;
    makeMoveTicTacToe(cellIndex);
  }

  document.querySelectorAll('#game12Content .cell').forEach(cell => {
    cell.addEventListener('click', handleCellClickTicTacToe);
  });
}



// Game 13: Hangman
function newGameHangman() {
  const words = ['javascript', 'programming', 'developer', 'computer', 'algorithm'];
  let currentWord = words[Math.floor(Math.random() * words.length)];
  let guessedLetters = new Set();
  let incorrectGuesses = 0;
  const maxIncorrectGuesses = 6;

  function displayWordHangman() {
    const wordElement = document.getElementById('game13Word');
    const displayWord = currentWord
      .split('')
      .map(letter => guessedLetters.has(letter) ? letter : '_')
      .join(' ');

    wordElement.textContent = displayWord;
  }

  function checkGuessHangman() {
    const guessInput = document.querySelector('#game13Content .guessInput');
    const guess = guessInput.value.toLowerCase();

    if (guess.length !== 1 || !guess.match(/[a-z]/)) {
      displayResult('Please enter a single letter.');
      return;
    }

    if (guessedLetters.has(guess)) {
      displayResult('You already guessed that letter.');
      return;
    }

    guessedLetters.add(guess);

    if (!currentWord.includes(guess)) {
      incorrectGuesses++;
    }

    if (incorrectGuesses === maxIncorrectGuesses) {
      displayResult(`Game Over! The word was "${currentWord}".`);
      document.querySelector('#game13Content .submit-button').disabled = true;
    } else if (!displayWordHangman().includes('_')) {
      displayResult(`Congratulations! You guessed the word "${currentWord}"!`);
      document.querySelector('#game13Content .submit-button').disabled = true;
    } else {
      displayWordHangman();
    }
  }

  document.querySelector('#game13Content .submit-button').onclick = checkGuessHangman;
  displayWordHangman();
}

// Game 14: Simon Says
function newGameSimonSays() {
  const buttons = ['red', 'blue', 'green', 'yellow'];
  let sequence = [];
  let playerSequence = [];
  let showingSequence = true;

  function generateSequenceSimonSays() {
    sequence.length = 0;
    for (let i = 0; i < 10; i++) {
      const randomButton = buttons[Math.floor(Math.random() * buttons.length)];
      sequence.push(randomButton);
    }
  }

  function showSequenceSimonSays() {
    let i = 0;
    const interval = setInterval(() => {
      if (i >= sequence.length) {
        clearInterval(interval);
        showingSequence = false;
        displayResult('Your turn!');
        return;
      }

      const button = sequence[i];
      const buttonElement = document.querySelector(`#game14Content .${button}`);
      buttonElement.style.opacity = '0.5';
      setTimeout(() => {
        buttonElement.style.opacity = '1';
      }, 500);
      i++;
    }, 1000);
  }

  function checkSequenceSimonSays() {
    if (showingSequence) {
      return;
    }

    const playerSequenceString = playerSequence.join(',');
    const sequenceString = sequence.join(',');

    if (playerSequenceString === sequenceString) {
      displayResult('Correct! You repeated the sequence correctly.');
    } else {
      displayResult('Incorrect! Game Over!');
      document.querySelector('#game14Content .submit-button').disabled = true;
    }

    playerSequence = [];
  }

  document.querySelectorAll('#game14Content .button').forEach(button => {
    button.addEventListener('click', () => {
      if (showingSequence) {
        return;
      }

      const color = button.dataset.color;
      playerSequence.push(color);
      checkSequenceSimonSays();
    });
  });

  generateSequenceSimonSays();
  showSequenceSimonSays();
}

// Game 15: Sudoku
function newGameSudoku() {
  const ROWS = 9;
  const COLS = 9;
  let board = createEmptyBoard();

  function createEmptyBoard() {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }

  board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ];


  displayBoardSudoku();

  function displayBoardSudoku() {
    const boardElement = document.getElementById('game15Board');
    boardElement.innerHTML = '';

    for (let row = 0; row < ROWS; row++) {
      const rowElement = document.createElement('div');
      rowElement.classList.add('sudoku-row');

      for (let col = 0; col < COLS; col++) {
        const cellElement = document.createElement('div');
        cellElement.classList.add('sudoku-cell');
        cellElement.textContent = board[row][col] !== 0 ? board[row][col] : '';
        rowElement.appendChild(cellElement);
      }

      boardElement.appendChild(rowElement);
    }
  }


}

// Game 16: Blackjack
function newGameBlackjack() {
  const deck = [
    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
  ];
  let playerHand = [];
  let dealerHand = [];
  let playerPoints = 0;
  let dealerPoints = 0;
  let gameEnded = false;

  function dealCard(hand) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck.splice(randomIndex, 1)[0];
    hand.push(card);
  }

  function calculatePoints(hand) {
    let points = 0;
    let hasAce = false;

    for (const card of hand) {
      if (card === 'A') {
        hasAce = true;
      }
      const cardValue = parseInt(card) || 10;
      points += cardValue;
    }

    if (hasAce && points + 10 <= 21) {
      points += 10;
    }

    return points;
  }

  function checkBlackjack() {
    if (playerPoints === 21) {
      displayResult('Blackjack! You win!');
      gameEnded = true;
    } else if (dealerPoints === 21) {
      displayResult('Dealer has Blackjack. You lose.');
      gameEnded = true;
    }
  }

  function checkBust(points) {
    if (points > 21) {
      displayResult('Bust! You lose.');
      gameEnded = true;
    }
  }

  function hitBlackjack() {
    if (!gameEnded) {
      dealCard(playerHand);
      playerPoints = calculatePoints(playerHand);
      displayResult(`You drew ${playerHand[playerHand.length - 1]}.`);
      checkBlackjack();
      checkBust(playerPoints);
    }
  }

  function standBlackjack() {
    if (!gameEnded) {
      while (dealerPoints < 17) {
        dealCard(dealerHand);
        dealerPoints = calculatePoints(dealerHand);
      }

      if (dealerPoints > 21) {
        displayResult('Dealer busts! You win!');
      } else if (dealerPoints > playerPoints) {
        displayResult('Dealer wins.');
      } else if (dealerPoints < playerPoints) {
        displayResult('You win!');
      } else {
        displayResult('It\'s a tie!');
      }

      gameEnded = true;
    }
  }

}

// Game 17: Connect Four
function newGameConnectFour() {
  const ROWS = 6;
  const COLS = 7;
  const PLAYER1 = 'red';
  const PLAYER2 = 'yellow';
  let currentPlayer = PLAYER1;
  let board = createEmptyBoard();
  let gameEnded = false;

  function createEmptyBoard() {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(null));
  }

  function checkWin() {
    function checkLine(a, b, c, d) {
      return a !== null && a === b && a === c && a === d;
    }

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (c + 3 < COLS && checkLine(board[r][c], board[r][c + 1], board[r][c + 2], board[r][c + 3])) {
          return true;
        }
        if (r + 3 < ROWS) {
          if (checkLine(board[r][c], board[r + 1][c], board[r + 2][c], board[r + 3][c])) {
            return true;
          }
          if (c + 3 < COLS && checkLine(board[r][c], board[r + 1][c + 1], board[r + 2][c + 2], board[r + 3][c + 3])) {
            return true;
          }
          if (c - 3 >= 0 && checkLine(board[r][c], board[r + 1][c - 1], board[r + 2][c - 2], board[r + 3][c - 3])) {
            return true;
          }
        }
      }
    }

    return false;
  }

  function checkDraw() {
    return board.every(row => row.every(cell => cell !== null));
  }

  function checkGameOver() {
    if (checkWin()) {
      displayResult(`${currentPlayer} wins!`);
      gameEnded = true;
    } else if (checkDraw()) {
      displayResult('It\'s a draw!');
      gameEnded = true;
    }
  }

  function dropDisc(col) {
    for (let r = ROWS - 1; r >= 0; r--) {
      if (board[r][col] === null) {
        board[r][col] = currentPlayer;
        return r;
      }
    }
    return -1;
  }

  function handleColumnClickConnectFour(event) {
    if (gameEnded) {
      return;
    }

    const col = parseInt(event.target.dataset.col);
    const row = dropDisc(col);

    if (row !== -1) {
      event.target.style.backgroundColor = currentPlayer;
      checkGameOver();
      currentPlayer = currentPlayer === PLAYER1 ? PLAYER2 : PLAYER1;
    }
  }

  document.querySelectorAll('#game17Content .column').forEach(column => {
    column.addEventListener('click', handleColumnClickConnectFour);
  });
}

// Game 18: Memory Match
function newGameMemoryMatch() {
  const cards = [
    '1', '2', '3', '4', '5', '6', '7', '8',
    '1', '2', '3', '4', '5', '6', '7', '8'
  ];
  let flippedCards = [];
  let matchedCards = [];
  let gameEnded = false;

  function shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[randomIndex]] = [cards[randomIndex], cards[i]];
    }
  }

  function checkMatch() {
    if (flippedCards.length === 2) {
      if (flippedCards[0].textContent === flippedCards[1].textContent) {
        matchedCards.push(flippedCards[0]);
        matchedCards.push(flippedCards[1]);
        flippedCards[0].classList.add('matched');
        flippedCards[1].classList.add('matched');
      } else {
        setTimeout(() => {
          flippedCards[0].textContent = '';
          flippedCards[1].textContent = '';
        }, 1000);
      }
      flippedCards = [];
    }

    if (matchedCards.length === cards.length) {
      displayResult('Congratulations! You matched all the cards!');
      gameEnded = true;
    }
  }

  function handleCardClickMemoryMatch(event) {
    if (gameEnded || event.target.classList.contains('matched') || event.target === flippedCards[0]) {
      return;
    }

    event.target.textContent = cards[event.target.dataset.index];
    flippedCards.push(event.target);
    checkMatch();
  }

  shuffleCards();
  document.querySelectorAll('#game18Content .card').forEach(card => {
    card.addEventListener('click', handleCardClickMemoryMatch);
  });
}

// Game 19: Maze Escape
function newGameMazeEscape() {
  const ROWS = 10;
  const COLS = 10;
  const START_ROW = 0;
  const START_COL = 0;
  const END_ROW = ROWS - 1;
  const END_COL = COLS - 1;
  let maze = createMaze();

  function createMaze() {


    const maze = Array.from({ length: ROWS }, () => Array(COLS).fill(0));


    maze[0][2] = 1;
    maze[1][2] = 1;
    maze[2][2] = 1;
    maze[3][2] = 1;
    maze[4][2] = 1;
    maze[5][2] = 1;
    maze[6][2] = 1;
    maze[7][2] = 1;
    maze[8][2] = 1;
    maze[9][2] = 1;
    maze[1][5] = 1;
    maze[2][5] = 1;
    maze[3][5] = 1;
    maze[4][5] = 1;
    maze[5][5] = 1;
    maze[6][5] = 1;
    maze[7][5] = 1;
    maze[8][5] = 1;
    maze[9][5] = 1;

    return maze;
  }

  function displayMazeEscape() {
    const mazeElement = document.getElementById('game19Maze');
    mazeElement.innerHTML = '';

    for (let row = 0; row < ROWS; row++) {
      const rowElement = document.createElement('div');
      rowElement.classList.add('maze-row');

      for (let col = 0; col < COLS; col++) {
        const cellElement = document.createElement('div');
        cellElement.classList.add('maze-cell');
        cellElement.textContent = maze[row][col] === 1 ? 'W' : '';
        rowElement.appendChild(cellElement);
      }

      mazeElement.appendChild(rowElement);
    }
  }

 
  function movePlayer(row, col) {
    maze[row][col] = 2;

    if (row === END_ROW && col === END_COL) {
      displayMazeEscape();
      displayResult('Congratulations! You escaped the maze!');
      return;
    }

    if (row < END_ROW && maze[row + 1][col] === 0) {
      movePlayer(row + 1, col);
    }

    if (col < END_COL && maze[row][col + 1] === 0) {
      movePlayer(row, col + 1);
    }

    if (row > START_ROW && maze[row - 1][col] === 0) {
      movePlayer(row - 1, col);
    }

    if (col > START_COL && maze[row][col - 1] === 0) {
      movePlayer(row, col - 1);
    }

    displayMazeEscape();
  }


  movePlayer(START_ROW, START_COL);
}

// Game 20: Space Invaders
function newGameSpaceInvaders() {

  displayResult('Space Invaders - Not implemented.');
}



// Start a new game when the page loads
window.onload = updateGameContainer;
