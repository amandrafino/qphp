
document.querySelector('.sandbox_01').innerHTML = '<p><strong>Sandbox_01 - Please reference the console.</strong></p>';

console.log('// ========== Hashtag ========== //');
// solve using the for loop
let hash = '#';
for (let i = 0; i < 10; i+= 1) {
  console.log(hash);
  hash += '#';
}

// Solve using the .length property
console.log('\n');
let hash2 = '#';
while (hash2.length <= 10) {
  console.log(hash2);
  hash2 += '#';
}

// Another for loop
console.log('\n');
for (let hash3 = '#'; hash3.length <= 10; hash3 += '#') {
  console.log(hash3);
}


