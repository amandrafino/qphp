document.querySelector('.loops').textContent = 'Loops.js - Please reference the console.';
// ------------------------- /
console.log('\n=== While LOOP PRACTICE ===\n');

let number = 0;
while (number < 12) {
  console.log('The number is: ',number);
  number +=2;
}

let result = 1;
let counter = 0;
while (counter < 10) {
  result *=2;
  counter +=1;
}
console.log('The result: ',result);


// ------------------------- /
console.log('\n=== For LOOP PRACTICE ===\n');
for (let number = 0; number <= 12; number +=2) {
  console.log('The number is: ',number);
}






