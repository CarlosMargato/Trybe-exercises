const confereNumero = (numeroescolhido, numerosorteado) => number;

const resultadoLoteria = (numeroescolhido, resultado) => {
  const number = Math.ceil(Math.random()*5);
  return resultado(numeroescolhido, numerosorteado) ? 'Seu dia de sorte, você acertou!': 'Não foi dessa vez! Tente novamente...';
};

console.log