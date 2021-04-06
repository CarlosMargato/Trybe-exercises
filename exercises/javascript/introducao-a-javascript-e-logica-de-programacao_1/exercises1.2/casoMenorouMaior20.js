let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0

for (let index = 0; index < numbers.length; index += 1) {

  total = total + numbers[index];

};

if (total > 20) {
  console.log("Número menor que 20!");

} else {
  console.log("Número maior que 20)");
};


console.log(total / numbers.length);