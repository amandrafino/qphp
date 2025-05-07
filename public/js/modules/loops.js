/* document.querySelector('.loops').textContent = 'Loops.js - Please reference the console.'; */

document.querySelector('.loops').innerHTML = '<p><strong>Loops.js - Please reference the console.</strong></p>';

// ------------------------- /
console.log('\n=== While LOOP ===\n');

let number = 0;
while (number < 12) {
  console.log('The number is: ',number);
  number +=2;
}

// ------------------------- /
console.log('\n');
for (let number = 0; number <= 12; number +=2) {
  console.log('The number is: ',number);
}

console.log('\n');
console.log('\n=== For LOOP ===\n');
let result = 1;
let counter = 0;
while (counter < 10) {
  result *=2;
  counter +=1;
}
console.log('The result: ',result);

// ------------------------- /
for (let current = 20; ; current +=1) {
  if (current % 7 == 0) {
    console.log('The result: ', current);
    break;
  }
}



let count = 0;
let hash = '#';
while (count < 10) {
  console.log(hash);
  hash += '#';
  count += 1;
}

