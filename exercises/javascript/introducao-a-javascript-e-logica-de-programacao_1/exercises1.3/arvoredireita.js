let n=5;
let linha = [];
let espaco = [];

for(let indexspc = 0; indexspc < n; indexspc +=1){
  espaco.push(" ");
}

for (let index = 0; index<n;index+=1){
  espaco.pop();
  linha.push("*");
  console.log(espaco.join(""),linha.join(""))
}