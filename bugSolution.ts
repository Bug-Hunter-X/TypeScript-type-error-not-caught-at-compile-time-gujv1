function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers.');
  }
  return a + b;
}

try {
  let result = add("hello", 2); 
  console.log(result);
} catch (e) {
  console.error(e.message);
}

let result2 = add(5, 2); // Works correctly
console.log(result2); 