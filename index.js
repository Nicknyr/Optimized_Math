// Iterates from 1-100
for(var i = 1; i <= 100; i++) {
  // Checks if number is divisible by two and three
  if(i % 2 == 0 && i % 3 == 0) {
  	console.log('The number ' + i + ' is divisible by two and three');
  }
  // Checks if number is divisible by 3, but not 2
  else if(i % 3 == 0) {
  	console.log('The number ' + i + ' is divisible by three');
  }
  // Checks if number is odd, but not divisible by 2 or 3
  else if(i % 2 != 0) {
  	console.log('The number ' + i + ' is odd');
  }
  // Checks if number is even
  else {
  	console.log('The number ' + i + ' is even');
  }

}
