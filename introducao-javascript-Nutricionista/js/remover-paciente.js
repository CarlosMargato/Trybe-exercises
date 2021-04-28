let pacienteLista = document.querySelectorAll('.paciente');

let tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', function (event) {
  let alvoEvento = event.target
  let paiDoAlvo = alvoEvento.parentNode; //TR = paciente = remover
    paiDoAlvo.classList.add('fadeOut');
    setTimeout(function(){
      paiDoAlvo.remove();
    },500); //1 segundo é 1000, 0.5 segundos é 500
})

// pacienteLista.forEach( (paciente) => {
//   paciente.addEventListener('dblclick', function () {
//     console.log('deu certo')
//     this.remove(); remove todos de quem está sendo ouvido: 'paciente'
//   })
// });