let botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function (evento) {
  evento.preventDefault();
  let form = document.querySelector('#form-adicionar');
  // extraindo informações do paciente no form
  let paciente = obtemInfoForm(form);

  let erros = validaPaciente(paciente);
  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente);

  form.reset();
  let mensagensErro = document.querySelector('#mensagem-erro')
  mensagensErro.innerHTML = ''
});

function adicionaPacienteNaTabela(paciente) {
  let pacienteTr = montaTr(paciente);
  let tabela = document.querySelector('#tabela-pacientes');
  tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {
  let ul = document.querySelector('#mensagem-erro');
  ul.innerHTML = '';
  erros.forEach((erro) => {
    let li = document.createElement('li');
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function obtemInfoForm(form) {
  let paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montaTr(paciente) {
  let pacienteTr = document.createElement('tr');
  pacienteTr.classList.add('paciente');

  pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
  pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
  pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
  pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
  pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

  return pacienteTr;
}

function montaTd(dado, classe) {
  let td = document.createElement('td');
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaPaciente(paciente) {

  let erros = [];
  if (paciente.nome.length == 0) erros.push('Nome vazio');
  if (!validaPeso(paciente.peso)) erros.push('Peso inválido');
  if (!validaAltura(paciente.altura)) erros.push('Altura inválida');
  if (paciente.gordura.length == 0) erros.push("Percentual de gordura vazio");
  if (paciente.altura.length == 0) erros.push('Altura vazio');
  if (paciente.peso.length == 0) erros.push('Peso vazio');
  return erros;
}