let homeScoreValue = document.getElementById('home-score')
let guestScoreValue = document.getElementById('guest-score')

let homescore = 0
let guestscore = 0

function add1(){
    homescore +=1
    homeScoreValue.textContent = homescore
    
}
function add2(){
    homescore +=2
    homeScoreValue.textContent = homescore
    
}
function add3(){
    homescore +=3
    homeScoreValue.textContent = homescore
    
}

//guest score
function add1guest(){
    guestscore +=1
    guestScoreValue.textContent = guestscore
    
}
function add2guest(){
    guestscore +=2
    guestScoreValue.textContent = guestscore
    
}
function add3guest(){
    guestscore +=3
    guestScoreValue.textContent = guestscore
    
}