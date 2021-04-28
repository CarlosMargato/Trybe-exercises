let botaoBuscar = document.querySelector('#buscar-paciente');

botaoBuscar.addEventListener('click', function () {
  console.log('procurando...');

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes');
  xhr.addEventListener('load', function () {
    let erroAjax = document.querySelector('#erro-ajax');
    if (xhr.status == 200) {
      erroAjax.classList.add('invisivel');
      let resposta = xhr.responseText;
      let pacientes = JSON.parse(resposta); //transforma o texto em array ou objeto

      pacientes.forEach((paciente) => {
        adicionaPacienteNaTabela(paciente)
      });
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
     
      erroAjax.classList.remove('invisivel');
    }
  });
  xhr.send();
})