const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//***forEach***

// companies.forEach(function (company){
// console.log(`Pesquisando somente o nome: ${company.name}`);
// })

//***Filter*** corre todo o array e filtra os itens

//saber quem é maior de 21
let canDrink = ages.filter(function (age) { //neste caso sem aerofunction
  if (age >= 21) {
    return true;
  }
});
// console.log(canDrink);
const canDrinkSlim = ages.filter(age => age >= 21);//usando aerofunction e fatorando em uma linha

// console.log(canDrinkSlim);

//***Filter

let retailCompanies = companies.filter(function (company) {
  if (company.category === 'Retail') {
    return true;
  }
});

console.log(retailCompanies);

let retailCompaniesSlim = companies.filter(companies => companies.category === 'Retail');
// console.log(retailCompaniesSlim);


// Filtro das companies de 80's

let eightiesCompanies = companies.filter(company => (companies.start >= 1980 && companies.end <= 1990));

// console.log(eightiesCompanies);

// Filtro de companies que duraram mais de 10 anos

let lastedTenYears = companies.filter(company => (company.end - company.start) >= 10);

// console.log(lastedTenYears);

//***MAP***

// criando uma array dos nomes das companies

let companyNames = companies.map(function (company) {
  return company.name;
});

// console.log(companyNames);
// pode ser inserido qualquer informação na array

let companyNamesTest = companies.map(function (company) {
  return 'qualquer dado';
});

// console.log(companyNamesTest);

// pode se utilizar de uma string para apresentar melhor a informação
let companyNamesString = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

// console.log(companyNamesString);


//tirando a raiz quadrada da idade
let agesSquare = ages.map(age => Math.sqrt(age));
// console.log(agesSquare);

// multiplicando por 2
let agesTimesTwo = ages.map(age => age * 2);
// console.log(agesTimesTwo);

// tirando a raiz quadrada e vezes 2 em uma só linha
//usa-se o ponto para acertar o comprimento da linha de código

let agesSquareTimesTwo = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2);

// console.log(agesSquareTimesTwo);


//***Sort***

// Organizando as companies pelo ano de inicio 
//padrão complexo
let sortedCompanies = companies.sort(function (company1, company2) {
  if (company1.start > company2.start) {
    return 1;
  } else {
    return -1;
  }
});
// console.log(sortedCompanies);

//padrão arrowfunction e operador ternario
let sortedCompaniesArrow = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompaniesArrow);

// organizando ages

let sortAgesCrease = ages.sort((a, b) => a - b) // organiza crescente
// console.log('crescente: ' + sortAgesCrease);

let sortAgesDecrease = ages.sort((a, b) => b - a) // organiza decrescente
// console.log('decrescente: ' + sortAgesDecrease);

// ***Reduce***
// Como reduce funciona 
let ageSum = 0
for (let i = 0; i < ages.length; i += 1) {
  ageSum += ages[i];
}

// console.log(ageSum);

let ageSumReduce = ages.reduce(function (total, age) {
  return total + age;
}, 0);
// console.log(ageSumReduce);

let ageSumArrow = ages.reduce((total, age) => total + age, 0);
// console.log(ageSumArrow);

// resgartar total de anos de todas companies
let totalYears = companies.reduce(function (total, company) {
  return total + (company.end - company.start);
}, 0);
// console.log(totalYears);

let totalYearsArrow = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalYearsArrow);


//*** Combine Methods ***

let combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  // .reduce((a, b) => a + b);

// console.log(combined);