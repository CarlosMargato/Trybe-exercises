// Desafio 13
// foi usado o canal de youtube "All Things JavaScript LLC" no video https://www.youtube.com/watch?v=pfkkdzeyx6U para entender o conceito \d+/g
function hydrate(string) {
  let frase = string
  let reg = /\d+/g;
  //função pra encontrar numero \ com um ou mais digitos d+ em toda expressão g
  let resultNumbers = frase.match(reg);
  //função para pegar a string e fazer o comparativo com a formula acima
  let numbers = 0;
  let totalNumber = 0;
  for (index = 0; index < resultNumbers.length; index += 1) {
    numbers = parseInt(resultNumbers[index]);
    totalNumber = totalNumber + numbers;
  }
  if (totalNumber === 1) {
  totalNumber = '1 copo de água';
  } else {
    totalNumber = totalNumber +(' copos de água');
  }
  return totalNumber;
}
console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"))