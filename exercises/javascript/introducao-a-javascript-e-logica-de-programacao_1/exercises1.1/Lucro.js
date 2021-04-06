let custo = 100;
let valorDeVenda = 300;

if (custo <= 0 || valorDeVenda <= 0) {
  console.log("Não foi possivel calcular...")
} else {
  let imposto = (custo * 0, 20);
  let lucro = (valorDeVenda - (custo + imposto));
  let vendas = (lucro * 1000);
  console.log("Após 1000 vendas, teremos o valor de R$", vendas);
}


