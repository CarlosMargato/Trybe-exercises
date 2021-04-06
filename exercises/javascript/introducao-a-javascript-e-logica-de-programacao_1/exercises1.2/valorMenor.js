let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let finalValue = 9999;
let searchValue;

for (let counter = 0; counter < numbers.length; counter += 1) {

  searchValue = numbers[counter];

  if (searchValue <= finalValue) {//se posicao da array = a posicao total da array entao escreve
    finalValue = searchValue;
  
  };
};
console.log("O menor número desta array é: ", finalValue);