let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let finalValue = 0;


for (let counter = 0; counter < numbers.length; counter += 1) {


  if (numbers[counter] % 2 == 1) {

    finalValue += 1;
  };

};

if (finalValue >= 1) {

  console.log("A quantidade de numeros inpares encontrados é: ", finalValue);

} else {

  console.log("nenhum valor ímpar encontrado");
}
