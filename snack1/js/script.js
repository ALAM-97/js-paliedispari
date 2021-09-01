// 1. chiedere all’utente di inserire una parola
// 2. creare una funzione per capire se la parola inserita è palindroma

function polindromeVer(string) {

    var revString = string.split("").reverse().join("");

    if (string == revString) {
        return true; 
    }
    return false; 
}

// 1.
var userInput = prompt("inserisci una parola");
document.getElementById("user-input").innerHTML = userInput;

// 2.
var reverseWord = polindromeVer(userInput);
document.getElementById("rev-word").innerHTML = userInput.split("").reverse().join("");;

if (polindromeVer(userInput) == true) {
    document.getElementById("esito").innerHTML = "Le parole sono palindrome";
} else {
    document.getElementById("esito").innerHTML = "Le parole NON sono palindrome";
}