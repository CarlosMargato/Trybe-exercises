let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
  medals: (
    golden:2,

    silver:3
  )
}

console.log(`A jogadora ` + player.name + " " + player.lastName + " tem "+ player.age + " anos de idade.E foi eleita como melhor do mundo " + player.bestInTheWorld.length + " vezes. E a jogadora possui " + player.medals.golden );