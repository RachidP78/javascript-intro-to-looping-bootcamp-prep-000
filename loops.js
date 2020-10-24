// forLoop(array)
function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am ${i} strange loop.`)
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
  return array;
}

// whileLoop(n)
function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return "done"
}


// doWhileLoop(num)


// doWhileLoop(num)
