// Após a leitura, veja o exemplo abaixo, que mostra como usar o Object.keys na prática.
// Nesse exemplo estão listadas as habilidades de uma pessoa desenvolvedora.

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

// Tente criar uma função que exiba as habilidades do objeto student . 
// Cada habilidade deve ser exibida no formato
// "Nome da habilidade, Nível: valor da chave referente à habilidade".
// Após tentar criar a função, veja a sugestão de resposta logo abaixo e
// compare com a sua solução.

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(index in arrayOfSkills){
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);

//Verifique que usamos a mesma função para mostrar os dois objetos,
// mesmo o segundo tendo uma chave a mais que o outro.