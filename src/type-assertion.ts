{
  interface Foo {
    name: string;
    id: number;
  }

  let foo: any = {};

  foo = {} as Foo;

  foo.id = 1;
  foo.name = 'eyal';

  const foo3: Foo = { name: 'eyal', id: 2 };
  foo3.id = 3;

  // Type assertion using the '<>' syntax is forbidden.
  // Use the 'as' syntax instead. (no-angle-bracket-type-assertion)
  // tslint:disable-next-line: no-angle-bracket-type-assertion
  foo = <Foo>foo;

  const bar = {};
  const bar2 = (bar as any) as Foo;
  bar2.id = 4;

  const name = 'eyal';
  const foo4 = { name } as Foo;
  console.log(foo4); // { name: 'eyal' }
}
