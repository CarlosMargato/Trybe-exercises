const newEmployees = () => {
  const employees = {
    id1: employeesGenerator('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: employeesGenerator('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: employeesGenerator('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};


const employeesGenerator = (fullname) => {
const email = fullname.toLowerCase().split(' ').join('_');
return {fullname, email: `${email}@betrybe.com`};
}

console.log (newEmployees(employeesGenerator));