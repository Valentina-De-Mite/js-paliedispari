/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

//TOOLs
// prompt
// controllo numero
// math random
// sum userNumber + pcNumber
// function even or odd
// stamp result

document.getElementById("inserisci").addEventListener("click", function () {
  const userNumber = document.getElementById("user_number").value;
  console.log("Il numero che hai scelto e': " + userNumber);

  if (userNumber > 5) {
    alert("Errore, scegli un numero da 1 a 5");
    location.reload();
  }

  let choice = document.getElementById("choice").value;
  const even = document.getElementById("even");
  const odd = document.getElementById("odd");

  if (choice == "even") {
    console.log("hai scelto un numero pari");
  }
  if (choice === "odd") {
    console.log("hai scelto un numero dispari");
  }

  Math.floor(Math.random() * 10 + 1);

  let pcNumber = Math.floor(Math.random() * 5 + 1);
  console.log("il numero del PC e' " + pcNumber);

  let sum = userNumber + pcNumber;
  console.log("la somma dei due numeri e': " + sum);

  if (sum % 2 == 0) {
    message = "Hai vinto tu!";
  }
  if (sum % 2 != 0) {
    message = "Ha vinto il PC!";
    console.log("");
  }
  document.getElementById("winner").innerHTML = message;
});
