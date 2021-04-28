let campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function () {
  this.value;
  let pacientes = document.querySelectorAll('.paciente');
  if (this.value.length > 0) {
    console.log('ta digitado');
    for (let index = 0; index < pacientes.length; index += 1) {
      let paciente = pacientes[index];
      let tdNome = paciente.querySelector('.info-nome');
      let nome = tdNome.textContent;
      //new RecExp(this.value) é pra realizar a pesquisa em toda a expressao
      let expressao = new RegExp(this.value, 'i'); //'i' serve pra a pesquisar Maiuscula e Minuscula
      if (expressao.test(nome)) { //.test faz a pesquisa se cada pedaço tem na string
        paciente.classList.remove('invisivel')
      } else { paciente.classList.add('invisivel') }
    }
  } else {
    for (let i = 0; i < pacientes.length; i+=1){
      let paciente = pacientes[i];
      paciente.classList.remove('invisivel');
    }
  }
});