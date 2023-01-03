const scoreYou = document.getElementById('you');
const scorePc = document.getElementById('pc');
const secim = document.querySelector('.secim');
const resultDiv = document.querySelector('.result');
const yourChoice = document.getElementById("your-choice");
const pcChoice = document.getElementById("pc-choice");

const pcArr = ['tas', 'kagit', 'makas', 'makas', 'tas', 'kagit'];
let userSelect;
let pcRandom;



secim.addEventListener("click", (e) => {
    console.log(e)

    if ((scorePc.innerText != 10 && scoreYou.innerText != 10)) {
        pcChoice.innerHTML = '';
        resultDiv.innerHTML = '';
        userSelect = e.target.className;
        if (userSelect == "tas") {
            yourChoice.innerHTML = `<img src="./assets/tas.png" alt="tas" class="tas"></img>`
        } else if (userSelect == "kagit") {
            yourChoice.innerHTML = `<img src="./assets/kagit.png" alt="kagit"></img>`
        } else if (userSelect == "makas") {
            yourChoice.innerHTML = `<img src="./assets/makas.png" alt="makas"></img>`
        }
        // setTimeout(pc, 100)
        pc()
    }
})



function pc() {
    pcRandom = pcArr[Math.floor(Math.random() * 6)]
    pcChoice.innerHTML = `<img src="./assets/${pcRandom}.png"></img>`
    result()
}

function result() {
    switch (userSelect) {
        case 'tas':
            if (pcRandom == 'kagit') {
                resultDiv.innerHTML = "You Lost"
                document.body.style.backgroundColor = "#B4372A";
                scorePc.innerText++
            } else if (pcRandom == 'makas') {
                resultDiv.innerHTML = "You win"
                document.body.style.backgroundColor = "#0B5116";
                scoreYou.innerText++
            }
            break;
        case 'kagit':
            if (pcRandom == 'makas') {
                resultDiv.innerHTML = "You Lost"
                document.body.style.backgroundColor = "#B4372A";
                scorePc.innerText++
            } else if (pcRandom == 'tas') {
                resultDiv.innerHTML = "You win"
                document.body.style.backgroundColor = "#0B5116";
                scoreYou.innerText++
            }
            break;
        case 'makas':
            if (pcRandom == 'tas') {
                resultDiv.innerHTML = "You Lost"
                document.body.style.backgroundColor = "#B4372A";
                scorePc.innerText++
            } else if (pcRandom == 'kagit') {
                resultDiv.innerHTML = "You win"
                document.body.style.backgroundColor = "#0B5116";
                scoreYou.innerText++
            }
            break;

        default:
            break;
    }



    if (userSelect == pcRandom) {
        resultDiv.innerHTML = "It's a draw"
        document.body.style.backgroundColor = '#ABA9A9';
    }

    if (scorePc.innerText == 10 || scoreYou.innerText == 10) {
        resultDiv.innerHTML += `<br> Game Over <br> <button onclick="window.location.reload();">Play Again</button>`
    }
}

