const prompt = require('prompt-sync')();

// const name = prompt('What is your name?');

// โชว์ผลคะแนน ของเราขึ้นมา ['เสือ', 'พุท', 'ตัวเล็ก', 'ทัช']

// random มัน 0 - 100   >>>> 0-50 === F , 51-60 === D , 61-70 === C, 71-80 ==== B, 80-100 === A

let rand = Math.random()

let numRand = Math.floor(rand*100) // ??? 0-100

let grade = getGrade(numRand)

console.log(`พระมหา A ได้คะแนน ${numRand} ได้เกรด ${grade}`)

function getGrade (point) {
  if (point < 50) {
    return 'F'
  } else if (point <= 60) {
    return 'D'
  } else if (point <= 70) {
    return 'C'
  } else if (point <= 80) {
    return 'B'
  } else {
    return 'A'
  }
}

