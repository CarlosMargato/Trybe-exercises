let titulo = document.querySelector('#titulo');
let pacientes = document.querySelectorAll('.paciente');

for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];

  let tdPeso = paciente.querySelector('.info-peso');
  let peso = tdPeso.textContent;
  let altura = paciente.querySelector('.info-altura').textContent;
  let tdImc = paciente.querySelector('.info-imc');

  let alturaValida = validaAltura(altura);
  let pesoValido = validaPeso(peso);
  if (!pesoValido) {
    pesoValido = false;
    tdImc.textContent = 'Peso Inválido!';
    paciente.classList.add('paciente-invalido');
  }

  if (!alturaValida) {
    alturaValida = false;
    tdImc.textContent = 'Altura Inválida!';
    paciente.classList.add('paciente-invalido');
  }

  if (alturaValida && pesoValido) {
    let imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}
function validaPeso(peso) {
  if (peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}
function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}
function calculaImc(peso, altura) {
  let imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
