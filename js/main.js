
// Palindroma

// Chiedere all’utente di inserire una parola
const userPalindromeDom = document.getElementById("userPalindrome");

// richiamo la funzione al click del pulsante
const palindromeCheckBtn = document.getElementById('palindromeCheckBtn');
palindromeCheckBtn.addEventListener('click', 
    function(){
        const userPalindrome = userPalindromeDom.value;
        // verifico se il valore è corretto
        if (userPalindrome.length < 2 || userPalindrome.trim() === '') {
            // valore non corretto
            alert('Inserisci un valore valido')
        } else {
            // verifica superata, invoco la funzione
            let isPalindrome = palindromeCheck(userPalindrome);
            // controllo l'esito fornito dalla funzione
            if (isPalindrome){
                alert(` Esatto! "${userPalindrome}" è un palindromo.`);
            } else {
                alert(` Peccato, "${userPalindrome}" non è un palindromo.`);
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
    // elimino gli spazi
    let userInputTrimmed = userInput.trim();
    // calcolo la lunghezza
    let userInputLength = userInputTrimmed.length;
    // verifico che le lettere siano uguali partendo da sinistra o destra fino al centro
    let isPalindrome = true;
    let i=0;
    while (isPalindrome && i< Math.ceil(userInputLength / 2)){
        if (userInputTrimmed[i] != userInputTrimmed[userInputLength - i -1]){
            // verifica non superata, esco dal ciclo
            isPalindrome = false;
        }
        i++
    }

    return isPalindrome;
}


// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const evenBetBtn = document.getElementById('evenBetBtn');
const userNumberDom = document.getElementById('userNumber');

evenBetBtn.addEventListener('click',
    function(){
        let userBet = 'even';
        let userNumber = parseInt(userNumberDom.value);
        gameRound(userNumber,userBet);
    }
)

const oddBetBtn = document.getElementById('oddBetBtn');
oddBetBtn.addEventListener('click',
    function(){
        let userBet = 'odd';
        let userNumber = parseInt(userNumberDom.value);
        gameRound(userNumber,userBet);
    }
)

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function pcNumber (){
    return Math.floor(Math.random()*5)+1;
}
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function EvenOrOddSum (a, b){
    alert(`Hai scelto ${a}. Il computer ha scelto ${b}.`)
    let sum = a + b;
    if (sum % 2 == 0){
        return 'even'
    } else {
        return 'odd'
    }
}
// Dichiariamo chi ha vinto.
function gameRound (userNumber, userBet ){
    if (userNumber > 0 && userNumber < 6 ){
        // numero valido
        let winningBet = EvenOrOddSum(userNumber,pcNumber());
        if(userBet == winningBet){
            // vittoria dell'utente 
            alert(`Complimenti! Hai vinto!`);
        } else {
            // vittoria del pc 
            alert(`Peccato! Ritenta.`);
        }
    } else {
        // numero non valido
        alert('Scrivi un numero valido.');
    }
}