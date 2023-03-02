
// Palindroma
const palindromeLogDom = document.getElementById('palindromeLog');

// Chiedere all’utente di inserire una parola
const userPalindromeDom = document.getElementById("userPalindrome");


// richiamo la funzione al click del pulsante
const palindromeCheckBtn = document.getElementById('palindromeCheckBtn');
palindromeCheckBtn.addEventListener('click', 
    function(){
        const userPalindrome = userPalindromeDom.value;
        // verifico se il valore è corretto ed elimino gli spazi e caratteri speciali
        let verifiedPalindrome = userPalindrome.replace(/[^a-zA-Z0-9 ]/g, '');
        verifiedPalindrome = verifiedPalindrome.toLowerCase();
        if ( verifiedPalindrome === '' || verifiedPalindrome.length < 3) {
            // valore non corretto
            palindromeLogDom.innerHTML = 'Inserisci un valore valido';
        } else {
            // verifica superata, invoco la funzione
            let isPalindrome = palindromeCheck(verifiedPalindrome);
            // controllo l'esito fornito dalla funzione
            if (isPalindrome){
                palindromeLogDom.innerHTML = `Corretto! "${verifiedPalindrome}" è un palindromo.`;
            } else {
                palindromeLogDom.innerHTML = ` Peccato, "${verifiedPalindrome}" non è un palindromo.`;
            }
        }    
    }
);

// pulsante di reset
const palindromeResetBtn = document.getElementById('palindromeResetBtn');
palindromeResetBtn.addEventListener('click', 
    function(){
        userPalindromeDom.value = '';
    }
) 

// Creare una funzione per capire se la parola inserita è palindroma
function palindromeCheck (userInput){
    // verifico che le lettere siano uguali partendo da sinistra o destra fino al centro
    let isPalindrome = true;
    let i=0;
    while (isPalindrome && i< Math.ceil(userInput.length / 2)){
        if (userInput[i] != userInput[userInput.length - i -1]){
            // verifica non superata, esco dal ciclo
            isPalindrome = false;
        }
        i++
    }

    return isPalindrome;
}


// Pari e Dispari

const startBtn = document.getElementById('startBtn');
const roundLogDom = document.getElementById('roundLog');

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userBetDom = document.getElementById('userBet');
const userNumberDom = document.getElementById('userNumber');


startBtn.addEventListener('click',
    function(){
        // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
        let pcNumber = randomNumber(1,5);

        // Sommiamo i due numeri
        let userNumber = parseInt(userNumberDom.value);
        let sum = userNumber + pcNumber;

        // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
        let evenSum = isEven(sum);

        // Dichiariamo chi ha vinto.
        let userBet = userBetDom.value;

        roundLogDom.innerHTML = `Il pc ha giocato ${pcNumber}. La somma è ${sum}.<br>`

        if (evenSum && userBet == 'even'){
            roundLogDom.innerHTML += 'Complimenti, la somma è pari. Hai vinto!';
        } else if (!evenSum && userBet == 'odd'){
            roundLogDom.innerHTML += 'Complimenti, la somma è dispari. Hai vinto!';
        } else {
            roundLogDom.innerHTML += 'Peccato, hai perso. Ritenta!';
        };
    }
)

// funzione per generare un numero random 
function randomNumber (min, max){
    return Math.floor(Math.random()*(max-min+1)) + min;
}

// funzione per verificare se un numero è pari
function isEven (number){
    let even = false;
    if (number % 2 == 0){
        even = true;
    }
    return even;
}