let inss;
let impostoDeRenda;
let salarioBruto = 3000;

if (salarioBruto <= 1556.94) {

  inss = (salarioBruto * 0.08);
  console.log("O seu salário liquido é: ", (salarioBruto - inss))

} else if (salarioBruto <= 2594.92) {

  inss = (salarioBruto * 0.09);

} else if (salarioBruto <= 5189.82) {

  inss = (salarioBruto * 0.11);

} else {

  inss = 587.00;
}

let salarioLiquido = salarioBruto - inss;

if (salarioLiquido <= 1903, 99) {
  impostoDeRenda = 0
}

else if (salarioLiquido <= 2826.65) {

  impostoDeRenda = (salarioLiquido * 0.075) - 142.80;

} else if (salarioLiquido <= 3751.05) {

  impostoDeRenda = (salarioLiquido * 0, 15) - 354.80;

} else if (salarioLiquido <= 4664.68) {

  impostoDeRenda = (salarioLiquido * 0, 225) - 636.13;

} else {

  impostoDeRenda = (salarioLiquido * 0, 275) - 869, 36
}

console.log("O seu salário liquido é: ", salarioLiquido - impostoDeRenda)