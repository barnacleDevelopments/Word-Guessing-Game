const startBtn = document.querySelector("#start-btn");
const wordList = document.querySelector("#word-list");
const container = document.querySelector(".container");
const containerTwo = document.querySelector(".container-two");
const endMessage = document.querySelector("#game-end-message");
const winningWordMessage = document.querySelector("#winning-word");
const guessesContainer = document.querySelector("#guesses")

let newWords, 
    secretWord,
    triesLeft = 3

function startGame() {
    containerTwo.classList.add("apear");
    container.classList.add("disapear");
    printWords();
};

function generateWords() {
    const randomWordList = [];
    for(let i = 0; i < 10; i++){
       let randomNum = Math.floor(Math.random() * words.length);
       randomWordList.push(words[randomNum]);
    }
    return randomWordList;
}

newWords = generateWords();

function printWords() {
    newWords.forEach((word) => {
        let words = document.createTextNode(word),
            wordBox = document.createElement("li");
                wordBox.appendChild(words)
                wordList.appendChild(wordBox);
    }); 
}

function selectedSecretWord() {
    let secretIndex = Math.floor(Math.random() * 10)
    let secretWord = newWords[secretIndex];
    return secretWord
}

secretWord = selectedSecretWord()

function evaluateWord(selectedWord) {
if(selectedWord !== secretWord){
      let rightLetters = 0;
      let letterBox = [...secretWord];
        letterBox.forEach((letter) => {
            if(selectedWord.includes(letter)){
                    rightLetters++
            }
        });
        return rightLetters 
    }
}

function printResults(e) {
        selectedWord = e.target.textContent;
    let triesLeftNum = document.createTextNode(` ${triesLeft}`);
        guessesContainer.textContent = ""
        guessesContainer.appendChild(triesLeftNum)

    if(triesLeft === 0) {
        let loseMessage = document.createTextNode("You lost!");
        endMessage.appendChild(loseMessage)
        wordList.remove();

    } else if(e.target.className === "selected") {
        return false;

    } else if(selectedWord !== secretWord) {
        var selectedWord = e.target.textContent;
            selectedWord.textContent = ""
        let numOfRightLetters = evaluateWord(selectedWord);
        let rightLettersMessage = document.createTextNode(`: ${numOfRightLetters} matching letters!`);
        e.target.appendChild(rightLettersMessage);
        e.target.classList.add("selected")
        triesLeft--

    } else {
        let winMessage = document.createTextNode("You win!");
        let winningWord = document.createTextNode(`Winning word: "${secretWord}"`);
        winningWordMessage.appendChild(winningWord)
        endMessage.appendChild(winMessage)
        wordList.remove();     
    }
};

startBtn.addEventListener("click", startGame)
wordList.addEventListener("click", printResults)