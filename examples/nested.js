const prompt = require('prompt-sync')();

const no = prompt('Input your number?');

let arr = []

let bird = {
  type: 'peageon',
  color: 'green',
}

for (i = 1; i <= no; i++) {

  if (i%3 === 0 || i%5 === 0) {
    if (i == no) {
      let obj = {
        selected: i,
        finish: true
      }
      arr.push(obj)
      break
    }
    let obj = {
      selected: i
    }
    arr.push(obj)
  } else {
    arr.push(i)
  }

}

console.log(arr)