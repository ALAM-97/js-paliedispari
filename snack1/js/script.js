// 1. chiedere all’utente di inserire una parola
// 2. creare una funzione per capire se la parola inserita è palindroma


function revString(string) {
    return string.split("").reverse().join("");
}


userWord = prompt("inserisci una parola");
revString(userWord);
console.log(userWord);
