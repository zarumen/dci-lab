const prompt = require('prompt-sync')();

const no = prompt('Input your number?');

let input = []

for (i=0; i<no; i++) {
  let rand = Math.floor(Math.random()*100)
  console.log(`Number value for ${i+1} element: ${rand}`)
  input.push(rand)
}

console.log(`random array: ${input}`)

let output = [];
let inserted;


for (let index = 0; index < input.length; index++) {
  console.log('processing....outter'+output)
  inserted = false;
  for(let inner = 0; inner < output.length + 1; inner++) {
    console.log('processing....inner'+output)
    if (input[index] < output[inner]){
      inserted = true;
      output.splice(inner, 0, input[index]);
      break;
    }
  }

  if (!inserted)
    output.push(input[index])
}

console.log(output)