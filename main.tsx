
const dict = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
  f: 'f',
}

function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", 2 + 3);
}
