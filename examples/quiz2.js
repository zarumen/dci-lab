const prompt = require('prompt-sync')();

const no = prompt('Input your number?');

let array = []
let paused

let rand = Math.floor(Math.random()*100)

for (let index = 0; index < 100; index++) {
  paused = false
  if (index == rand) {
    paused = true
    array.push({selected: rand})
  }
  if(!paused)
    array.push(index)
}

console.log(array)

function checkNumber (numb) {
  if(numb < rand) {
    return console.log(`ตัวเลขที่คุณเลือกคือ ${numb} น้อยกว่าตัวเลขของรางวัล`)
  } else if (numb > rand) {
    return console.log(`ตัวเลขที่คุณเลือกคือ ${numb} มากกว่าตัวเลขของรางวัล`)
  } else {
    return console.log('คุณเลือกได้ถูกต้อง คุณได้รางวัล!!')
  }
}

let numberFromUser = parseInt(no)

checkNumber(numberFromUser)