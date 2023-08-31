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

  if (userNumber > 5 && userNumber == 0) {
    alert("Errore, scegli un numero da 1 a 5");
  }

  document.getElementById;
  function isEven(userNumber) {
    if (userNumber % 2 === 0) {
      return true;
    }
    return false;
  }

  console.log(isEven(userNumber));
  const result = isEven(userNumber);
  console.log(result);
  if (isEven(userNumber)) {
    console.log("il numero e' pari");
  } else {
    console.log("il numero e' dispari");
  }
  isEven(userNumber);
});
