import * as _ from 'lodash';

console.log(_.isEqual({ name: 'a' }, { name: 'a' }));
{
  // SLICE
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log('a = ' + a);
  console.log('a.slice(1,2) = ' + a.slice(1, 2));
  console.log('a.slice(1,3) = ' + a.slice(1, 3));
  console.log('a.slice(0,5) = ' + a.slice(0, 5));
  console.log('a.slice(-3) = ' + a.slice(-3));
  console.log('a.slice(-12) = ' + a.slice(-12));
  console.log('a.slice(3) = ' + a.slice(3));
  console.log('a.slice(10) = ' + a.slice(10));
  console.log('a.slice(12) = ' + a.slice(12));

  // FIND
  const b = [
    { name: 'a', id: 1 },
    { name: 'b', id: 2 },
    { name: 'c', id: 3 },
    { name: 'd', id: 4 },
    { name: 'e', id: 5 },
  ];

  const c = b.find((x) => x.name === 'c');
  console.log(c.id); // 3

  // MAP
  const d = b.map((x) => ({
    id: x.id,
    name: x.name,
    new: `${x.name}-${x.id}`,
  }));
  console.log(d);

  // FILTER
  const e = b.filter((h) => h.name === 'a');
  console.log(e);

  const f = b.filter((h) => h.name !== 'a');
  console.log(f);

  interface Foo {
    name: string;
    id: number;
  }

  const g = b as Foo[];
  const element: Foo = { name: 'a', id: 1 };
  console.log(g.filter((h) => h !== element));
  console.log(g.filter((h) => _.isEqual(h, element)));
}
