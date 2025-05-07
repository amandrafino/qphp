
document.querySelector('.sandbox_02').innerHTML = '<p><strong>Sandbox_02 - Please reference the console.</strong></p>';


// While and If
/*
let num = 0
while (num <= 100) {
  if (num % 3 === 0) {
    console.log('fizz')
  } else if (num % 5 === 0 && num % 3 !== 0) { 
      console.log('buzz'); 
  } else {
      console.log(num);
  }
  num += 1;
}
*/

let num = 0;
while (num <= 100) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('fizzbuzz');
  } else if (num % 3 === 0) {
    console.log('fizz');
  } else if (num % 5 === 0) {
    console.log('buzz');
  } else {
    console.log(num);
  }
  num += 1;
}

