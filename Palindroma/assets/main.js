/* Palidroma
- Chiedere all’utente di inserire una parola 
- Creare una funzione per capire se la parola inserita è palindroma
*/

document.getElementById("inserisci").addEventListener("click", function () {
  const userWord = document.getElementById("userWord").value;
  console.log("La parola che hai scelto e': " + userWord);

  function isPalindrome(userWord) {
    let newWord = "";
    for (let i = 1; i < userWord.length + 1; i++) {
      let letter = userWord.charAt(userWord.length - i);
      newWord += letter;
    }

    if (userWord === newWord) {
      return true;
    } else {
      return false;
    }
  }

  console.log(isPalindrome(userWord));
  let message = "";

  let palindrome = isPalindrome(userWord);
  if (palindrome == true) {
    console.log("La parola e' palindroma " + userWord);
    message = "La parola e' palindroma " + userWord;
  } else {
    console.log("La parola non e' palindroma: " + userWord);
    message = "La parola non e' palindroma: " + userWord;
  }

  document.getElementById("answer").innerHTML = message;
});
