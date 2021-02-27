let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let finalValue = 0;
let searchValue;

for (let counter = 0; counter < numbers.length; counter += 1) {

  searchValue = numbers[counter];

  if (searchValue >= finalValue) {//se posicao da array = a posicao total da array entao escreve
    finalValue = searchValue;
  
  };
};
console.log("O maior número desta array é: ", finalValue);


/*VERSAO RESUMIDA COM BASE NO GABARITO

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let finalValue = 0;


for (let counter = 0; counter < numbers.length; counter += 1) {

if (numbers[counter] >= finalValue) {

  finalValue = numbers[counter];

};

};
 console.log("O maior número desta array é: ", finalValue);
*/