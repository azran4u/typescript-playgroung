interface My {
  a: number;
  b: string;
}

export function interfaceTest() {
  const a = {
    a: 1,
    b: '2',
    c: [1, 2, 3],
  };
  const b: My = a;
  //   const b = a as My;
  console.log(b);
}
