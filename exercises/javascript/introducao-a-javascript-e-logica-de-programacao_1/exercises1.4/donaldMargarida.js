let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: 'Sim',
  comiccharacter: {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
  }
};


// info.recorrente = 'Sim';
// console.log('Bem-vinda '+info.personagem+',');
// console.log(info.recorrente);

for (const key in info) {
  //   console.log([key]);
  //   console.log(info[key]);

  if (info[key] != info.comiccharacter[key]) {

    console.log(key + ": " + info[key] + " e " + info.comiccharacter[key]);

  } else {

    console.log("Ambos recorrentes");
    break;
  };
};