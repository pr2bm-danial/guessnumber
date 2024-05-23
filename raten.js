let ziel = Math.floor(Math.random() * 9) + 1;
function checkAnswer(){
    let image = document.getElementById('bild');
    let underline = document.getElementById('count');
    let text = document.getElementById('reminder');
    let body = document.getElementById('body');
    let random = ziel
    let attempt = parseInt(document.getElementById('choice').value);
    console.log(ziel);
    countAttempt();

    if(attempt > random){
        text.innerHTML = "Die Zahl ist kleiner!"
        clearField();
        
    }
    else if(attempt < random){
        text.innerHTML = "Die Zahl ist größer!"
        clearField();
        
    }
    else if(attempt === random){
        text.innerHTML = "Glückwunsch! Du hast die richtige Zahl erraten.";
        underline.innerHTML = "Die Anzahl der Versuche beträgt " + current; 
        body.style.backgroundColor = "lightblue";
        image.src = "hurra.png";
        setInterval(beginning, 8000);
    }
}

function clearField(){
    let entered = document.getElementById('choice');
    setTimeout(() => {
        entered.value = "";
    }, 1500);
}

let current = 0; 
function countAttempt(){
    current++;
    console.log(current)
}

function beginning(){
    window.location.reload();
}
;


let wert1;
let wert2;
let end;
function generateNumber(){
    wert1 = Math.floor(Math.random() * 9 ) + 1;
    wert2 = Math.floor(Math.random() * 9) + 1;
    end = wert1 + wert2;
}


document.addEventListener("keydown", function(e){
    if (e.key === "Enter") {
        checkResponse();
    }
})


function checkResponse(){
    let versuch = parseInt(document.getElementById('versuch').value);
    if(versuch === end){
        let reactElement = document.getElementById('react');
        reactElement.innerHTML = "great!";
        rightAnswer = true;
        setTimeout(function () {
            update();
            beginQuiz();
            document.getElementById('versuch').value = ''; // Clear the input field
        }, 2000); }

        if(versuch != end){
            setTimeout(function() {
                falseAnswer();
                }, 100);

            setTimeout(function(){
                update();
                document.getElementById('versuch').value = " "}, 1500)
            }
        }
    


function askQuiz(){
    document.getElementById('frage').innerHTML = wert1 + " + " + wert2 + " = ? "
}

function beginQuiz(){
    generateNumber();
    askQuiz();
    
}

function update(){
    document.getElementById('react').innerHTML = "";

}

function falseAnswer(){
    let reactElement = document.getElementById('react');
        reactElement.innerHTML = "try again!"
}



function openLink() {
    let copyText = document.getElementById('link');
    let linkText = copyText.innerText || copyText.textContent;

    navigator.clipboard.writeText(linkText)
        .then(() => {
            console.log('Link copied to clipboard');
        })
        .catch(err => {
            console.error('Unable to copy to clipboard', err);
        });
}


