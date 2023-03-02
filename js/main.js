
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
            alert('Inserisci un valore valido')
        } else {
            let isPalindrome = palindromeCheck(userPalindrome);
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
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.