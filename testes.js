const region = {
  NE: ['lions', 'giraffes'],
  NW: ['tigers', 'bears', 'elephants'],
  SE: ['penguins', 'otters'],
  SW: ['frogs', 'snakes'],
};

const listNames = [
    { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
    { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
    { tigers: ['Shu', 'Esther'] },
    { bears: ['Hiram', 'Edwardo', 'Milan'] },
    { elephants: ['Ilana', 'Orval', 'Bea', 'Jefferson'] },
    { penguins: ['Joe', 'Tad', 'Keri', 'Nicholas'] },
    { otters: ['Neville', 'Lloyd', 'Mercedes', 'Margherita'] },
    { frogs: ['Cathey', 'Annice'] },
    { snakes: ['Paulette', 'Bill'] },
];

const test = Object.keys(region);
console.log(`test: ${test}`);
const bicho = Object.values(region)[0];
console.log(`Bicho: ${bicho}`);
const species = Object.keys(listNames[0]);
console.log(`Species: ${species}`);
const compara = bicho === species;
console.log(`compara: ${compara}`);
console.log(Object.values(region)[0]);

region.filter((item, i) => Object.values(item)[i]);

//   const animalsByRegion = () => {
//     const reducingRegion = data.animals.reduce((acc, curr) => {
//       const arrayOfNames = [];
//       data.animals.filter((el) => {
//         if (el.location === curr.location) arrayOfNames.push(el.name);
//         return arrayOfNames;
//       });
//       acc[curr.location] = arrayOfNames;
//       return acc;
//     }, {});
//     return reducingRegion;
//   };

//   const residentsBySpecies = () => {
//     const getObject = animalsByRegion ();
//   }

//   let array = []
// const resid = animals.map((i) => i.residents)
// resid.map((item) = item.name) 
// console.log (resid)
// // console.log (array.push (resid.map((item) => { item.name })))