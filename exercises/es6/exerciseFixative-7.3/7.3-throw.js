// Nesse momento você pode estar se perguntando "o que diabos é throw ?", mas não precisa se preocupar:
// não é nenhum bicho de 7 cabeças!
// Ao executar os códigos escritos por você, não há dúvidas de que você já se deparou com mensagens de erro
// quando algo não estava fazendo o que deveria. Seja um erro de sintaxe ou uma variável indefinida em algum
// lugar, lidar com erros é uma tarefa comum na vida de qualquer pessoa desenvolvedora.
// Mas nem sempre os erros precisam ser gerados originariamente pela linguagem, como você já se habituou
// a ver. Quem está escrevendo o código também pode criar erros , bem como determinar que eles sejam lançados
//  se o código se comportar de uma maneira inesperada!
// O ato de criar erros novos, também chamado de lançar exceções , é algo importantíssimo para casos em que
// o código em si executa normalmente pelos padrões da linguagem, mas a pessoa que o escreveu não quer que ele
// execute nessa hipótese específica.
// Dito isso, vamos rever o exemplo acima de um erro lançado usando throw :

function division(x, y) {
  // Queremos que o código retorne um erro com uma mensagem específica
  // caso o parâmetro y seja 0. Por isso lançamos uma exceção se essa condição
  // for verdadeira, o que irá interromper a execução da função.

  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

// Nesse caso, com o erro sendo lançado dentro de uma função, a sua execução irá parar naquele exato momento e,
// caso não exista um bloco de captura do erro que indique o que fazer quando ele ocorre (você irá aprender mais
// sobre isso ao estudar JS Assíncrono e Promises), o programa como um todo terá a sua execução interrompida.
// Você não precisa se preocupar muito com essa parte de gerenciamento de erros por enquanto, pois se trata de
// uma ferramenta mais avançada do que você precisaria saber nesse momento. O que você precisa saber é que o throw
// serve justamente a esse fim: lançar exceções criadas pela pessoa desenvolvedora e retornar erros que não
// existiriam originalmente no código sem ele.
// Ainda assim, se você tiver interesse em saber mais sobre o assunto, consulte as documentações de throw
//  e Error.

const assert = require('assert');
assert.strictEqual(typeof myFunction, 'function');

// Implementar apenas o necessário para que o teste passe. No caso do exemplo anterior,
// você só precisaria declarar a função para passar o teste.
// Refatorar o código para que ele esteja bem escrito e fácil de se entender. O pulo do gato nessa etapa é
// que você tem um teste já implementado que irá falhar caso você quebre algo ao refatorar o seu código.
// Repetir! Afinal de contas, o desenvolvimento orientado a testes é um ciclo. Volte a etapa 1 e repita
// esse processo até que todas as funcionalidades da sua função sejam implementadas.
// Além de ser útil para testar funções puras, outro exemplo prático em que o desenvolvimento orientado
// a testes pode ser útil é consertar bugs. Os testes ajudam a quebrar problemas complexos em partes menores
// que podem ser analisadas mais facilmente. Assim, você poderá focar em uma regra de negócio específica sem
// medo de quebrar alguma outra funcionalidade.