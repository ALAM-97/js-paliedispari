// 1. L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// 2. Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// 3. Sommiamo i due numeri
// 4. Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// 5. Dichiariamo chi ha vinto.
function randomNumb(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function numbType(num) {
    if (num % 2 == 0) {
        return "even";
    }
    return "odd";
}

var confirmBtn = document.getElementById("confirm-btn");

confirmBtn.addEventListener('click',
    function() {
        // 1.
        var evenOrOdd = document.getElementById("even-odd").value;
        var number = parseInt(document.getElementById("numbers").value);

        if (evenOrOdd != "" && number != "") {
            // 2. 
            var randomNumber = randomNumb(1, 5);
            document.getElementById("num-random").innerHTML += randomNumber;
            
            // 3.
            var numbSum = randomNumber + number;
            document.getElementById("sum").innerHTML += numbSum;

            // 4.
            var result = numbType(numbSum);

            // 5. 
            if (evenOrOdd == result) {
                document.getElementById("esito").innerHTML = "Hai vinto!"
            } else {
                document.getElementById("esito").innerHTML = "Ha vinto la CPU!"
            }


        } else {
            alert("Inserire i dati richiesti");
        }
        

        

    }
    
)
