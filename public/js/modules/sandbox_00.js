
document.querySelector('.sandbox_00').innerHTML = '<p><strong>sandbox_00 - Please reference the console.</strong></p>';

console.log('\n=== Conditionals ===\n');

const age = 20;

if (age >= 18) {
  console.log("You're an adult.");
} else {
  console.log("You're a minor.");
}

console.log('\n.........................\n');
let num = Number(prompt("Pick a number: "));
if (num < 10) {
  console.log("The number is small!");
} else if (num < 100) {
  console.log("The number is mid-size!");
} else {
  console.log("The number is large!");
}


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





