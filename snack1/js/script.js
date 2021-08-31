// 1. chiedere all’utente di inserire una parola
// 2. creare una funzione per capire se la parola inserita è palindroma
function revString(string) {
    return string.split("").reverse().join("");
}

function polindromeVer(string) {
    if (string == revString(string)) {
        return document.getElementById("esito").innerHTML = "Le parole sono palindrome";
    }
    return document.getElementById("esito").innerHTML = "Le parole NON sono palindrome";
}

// 1.
var userInput = prompt("inserisci una parola");
document.getElementById("user-input").innerHTML = userInput;
var reverseWord = revString(userInput);

// 2.
var wordVerifier = polindromeVer(userInput);
document.getElementById("rev-word").innerHTML = reverseWord;
