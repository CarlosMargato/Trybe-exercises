let num = 18;
let primo = []

for (let indexnum = 1; indexnum <= num; indexnum += 1) {

  if (indexnum % 2 == 1 || indexnum == 2 || indexnum == 1) {

    primo.push(indexnum)

    if ((indexnum/3)%3==0){
      primo.pop(indexnum)
    }
  };
};

console.log(primo);