
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scalla",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "working",
    "Dependencies",
    "Tasks",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
]

//Setting levels

const lvls = {
    "Easy" : 5,
    "Normal" : 3,
    "Hard" : 2
}

//Defaul level

let DefaultLevelName = "Normal" // Change level from here
let DefaulLevelSeconds = lvls[DefaultLevelName]

//Catch selectors

let startbutton = document.querySelector(".start")
let lvlNameSpan = document.querySelector(".message .lvl")
let secondsSpan = document.querySelector(".message .second")
let theWord = document.querySelector(".the-word")
let upcomingWords = document.querySelector(".upcoming-words")
let input = document.querySelector(".input")
let timeLeftSpan = document.querySelector(".time span")
let ScoreGot = document.querySelector(".score .got")
let scoreTotal = document.querySelector(".score .total")
let finishMessage = document.querySelector(".finish")

//Setting level name + Seconds + Score

lvlNameSpan.innerHTML = DefaultLevelName
secondsSpan.innerHTML = DefaulLevelSeconds
timeLeftSpan.innerHTML = DefaulLevelSeconds
scoreTotal.innerHTML = words.length

//Disable past event

input.onpaste = function(){
    return false
}

//Start game

startbutton.onclick = function(){
    this.remove()
    input.focus()

    // Generate word function
    
    generateWord()
}

function generateWord() {
    // Get random word from array
    let randomWord = words[Math.floor(Math.random() * words.length)];
    // Get word index
    let wordIndex = words.indexOf(randomWord)
    // Remove it from array
    words.splice(wordIndex, 1)
    //Show the random word
    theWord.innerHTML = randomWord
    // Empthy upcimming word
    upcomingWords.innerHTML = ""
    // Generate words
    for(let i = 0 ; i < words.length ; i++){
        let div = document.createElement("div")
        let txt = document.createTextNode(words[i])
        div.appendChild(txt)
        upcomingWords.appendChild(div)
    }
    // Call start play function 
    StartPlay()
}
function StartPlay(){
    timeLeftSpan.innerHTML = DefaulLevelSeconds
    //timeLeftSpan = DefaulLevelSeconds
    let start = setInterval(()=>{
        timeLeftSpan.innerHTML--
        if(timeLeftSpan.innerHTML === "0"){
            clearInterval(start)
            //Compare words
            if(theWord.innerHTML.toLowerCase() === input.value.toLowerCase()){
                //Empthy input field
                input.value = ""
                //increase score
                ScoreGot.innerHTML++
                //Call generateWord function
                if(words.length > 0){
                    generateWord()
                }else{
                    let span = document.createElement("span")
                    let spantxt = document.createTextNode("Congratulation !")
                    span.appendChild(spantxt)
                    span.className = "good"
                    finishMessage.appendChild(span)
                    //Remove upcoming box
                    upcomingWords.remove()
                }
            } else{
                let span = document.createElement("span")
                let spantxt= document.createTextNode("Game over !")
                span.className = "bad"
                span.appendChild(spantxt)
                finishMessage.appendChild(span)
            }
        }
    } ,1000)
}








