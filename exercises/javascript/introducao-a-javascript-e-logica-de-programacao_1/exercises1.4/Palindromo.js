// var palindromo = "";

// for(var index = palavra.length - 1; index >= 0; index--) {
//   palindromo += palavra[index]
// }

// if (palavra == palindromo) {
//   return "SIM, SOU UM PALÍNDROMO"
// } else {
//   return "INFELIZMENTE, NÃO SOU UM PALÍNDROMO"
// }
//Duas formas de resolver o exercício
// function verificaPalindrome(palavra) {
//   let arrayLetras = palavra.split("");
//   let isPalindrome = true;
//   for (let index in arrayLetras) {
//     if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
//       isPalindrome = false;
//     }
//   }
//   return isPalindrome;
// }

// function verificaPalindrome(string) {
//   let reverse = string.split("").reverse().join("");
//   if (reverse === string) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(verificaPalindrome('arara')); //true
// console.log(verificaPalindrome('desenvolvimento')); //false

let palavra = "socorromeemmarrocos";
let palavraNormal = [];
let palavraReversa = [];

// function palindromo(palavra) {

  palavraNormal = palavra.split("");
  palavraReversa = palavra.reverse();

  if (palavraNormal == palavraReversa) {
    
    return console.log ("Palindromo");

  }
// };

// palindromo("arara");

