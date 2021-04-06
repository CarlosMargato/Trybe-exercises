let n = 5;
let linha;

for (let indexLinha = 1; indexLinha < n; indexLinha += 1) {
  linha = ""
  for (let indexQtd = 0; indexQtd < n; indexQtd += 1) {
    linha = linha + "*";

  }
  console.log(linha);
}
