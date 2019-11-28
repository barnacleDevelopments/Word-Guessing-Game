const startBtn = document.querySelector("#start-btn");
const containerTwo = document.querySelector(".container-two");
const container = document.querySelector(".container");
const wordList = document.querySelector("#word-list");

var generatedWords = [];

function startGame() {
    containerTwo.classList.add("apear");
    container.classList.add("disapear");
};

function generateWords() {
    const randomWordList = [];
    for(let i = 0; i < 10; i++){
       let randomNum = Math.floor(Math.random() * words.length);
       randomWordList.push(words[randomNum]);
    }
    return randomWordList;
}

function printWords() {
    let newWords = generateWords();
    newWords.forEach((word) => {
        let words = document.createTextNode(word),
            wordBox = document.createElement("li");
                wordBox.classList.add("list-item")
                wordBox.appendChild(words)
                wordList.appendChild(wordBox);
    }); 
    generatedWords.push(...newWords)
}

function selectedSecretWord() {
    console.log(generatedWords)
    let secretIndex = Math.floor(Math.random() * 10)
    let secretWord = generatedWords[secretIndex];
    console.log(secretWord)
    return secretWord
   
}

var secretWord = selectedSecretWord()

console.log(secretWord)

wordList.addEventListener("click", (e) => {
    if(e.target.textContent === secretWord) {
        console.log("whatup!")
    }
});

startBtn.addEventListener("click", startGame)
startBtn.addEventListener("click", printWords)
