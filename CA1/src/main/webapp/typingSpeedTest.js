
const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
let originText = '';
const originArea = document.querySelector("#origin-text p");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

// Sources:
//   https://en.wikipedia.org/wiki/Quantum_computing
//   https://en.wikipedia.org/wiki/Quantum_complexity_theory
var texts = [
    "Integer factorization, which underpins the security of public key " +
    "cryptographic systems, is believed to be computationally infeasible " +
    "with an ordinary computer for large integers if they are the product of " +
    "few prime numbers (e.g., products of two 300-digit primes).",

    "Besides factorization and discrete logarithms, quantum algorithms " +
    "offering a more than polynomial speedup over the best known classical " +
    "algorithm have been found for several problems, including the simulation " +
    "of quantum physical processes from chemistry and solid state physics.",

    "One of the greatest challenges is controlling or removing quantum " +
    "decoherence. This usually means isolating the system from its environment " +
    "as interactions with the external world cause the system to decohere. " +
    "However, other sources of decoherence also exist.",

    "Quantum complexity theory is a part of computational complexity theory " +
    "in theoretical computer science. It studies complexity classes defined " +
    "using quantum computers and quantum information which are computational " +
    "models based on quantum mechanics.",

    "For instance, the complexity class P is defined to be the set of problems " +
    "solvable by a Turing machine in polynomial time. Similarly, one may define " +
    "a quantum complexity class using a quantum model of computation, such as " +
    "a standard quantum computer or a quantum Turing machine. ",

    "Quantum Query Complexity is the smallest number of queries to the oracle " +
    "that are required in order to calculate the function. Clearly, Quantum " +
    "Query Complexity is a lower bound on the overall time complexity of a " +
    "function.",

    "Two important quantum complexity classes are BQP and QMA which are the " +
    "bounded-error quantum analogues of P and NP. One of the main aims of " +
    "quantum complexity theory is to find out where these classes lie with " +
    "respect to classical complexity classes such as P, NP, PP, PSPACE and " +
    "other complexity classes.",

    "BQP is suspected to be disjoint from NP-complete and a strict superset of " +
    "P, but that is not known. Both integer factorization and discrete log are " +
    "in BQP. Both of these problems are NP problems suspected to be outside BPP, " +
    "and hence outside P.",

    "Although quantum computers may be faster than classical computers for some " +
    "problem types, those described above cannot solve any problem that classical " +
    "computers cannot already solve. A Turing machine can simulate these quantum " +
    "computers, so such a quantum computer could never solve an undecidable " +
    "problem like the halting problem.",

    "As of 2018, the development of actual quantum computers is still in its " +
    "infancy, but experiments have been carried out in which quantum computational " +
    "operations were executed on a very small number of quantum bits. Both " +
    "practical and theoretical research continues, and many national governments " +
    "and military agencies are funding quantum computing research."
];

function randomizeText() {
    originText = texts[Math.floor(Math.random() * texts.length)];
    originArea.innerText = originText;
}

var timer = [0, 0, 0, 0];
var interval;
var timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);

    if (textEntered == originText) {
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890";
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3";
        } else {
            testWrapper.style.borderColor = "#E95D0F";
        }
    }

}

// Start the timer:
function start() {
    let textEnterdLength = testArea.value.length;
    if (textEnterdLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
    console.log(textEnterdLength);
}

// Reset everything:
function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0, 0, 0, 0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
    randomizeText();
}

// Event listeners for keyboard input and the reset
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);

randomizeText();
