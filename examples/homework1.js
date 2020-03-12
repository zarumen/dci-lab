const prompt = require('prompt-sync')();

const input = prompt('What is your first number?');

const input2 = prompt('What is your second number?');

function wannaShow (ops) {
  return prompt(`Want to show result from ${ops}`)
}

const a = wannaShow('ผลบวก');
const b = wannaShow('ผลลบ');
const c = wannaShow('ผลคูณ');
const d = wannaShow('ผลหาร');

let resultA, resultB, resultC, resultD

if(a === 'yes') {
  resultA = mathSign(input, input2, 'plus')
}
if(b === 'yes') {
  resultB = mathSign(input, input2, 'minus')
}
if(c === 'yes') {
  resultC = mathSign(input, input2, 'multi')
}
if(d === 'yes') {
  resultD = mathSign(input, input2, 'divide')
}


function mathSign (num1, num2, operator) {
  var int1 = parseInt(num1)
  var int2 = parseInt(num2)
  if (operator === 'plus') {
    let result = int1+int2
    return `ผลบวกเท่ากับ = ${result}`
  }
  if (operator === 'minus') {
    let result = int1-int2
    return `ผลลบเท่ากับ = ${result}`
  }
  if (operator === 'multi') {
    let result = int1*int2
    return `ผลคูณเท่ากับ = ${result}`
  }
  if (operator === 'divide') {
    let result = int1/int2
    return `ผลหารเท่ากับ = ${result}`
  }
  return
}

if (resultA || resultB || resultC || resultD) {
  console.log(resultD, resultC, resultB, resultA)
} else {
  console.log('ไม่โชว์ข้อมูล')
}