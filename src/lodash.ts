import * as _ from 'lodash';

interface IUser {
  name: string;
  id: number;
  age: number;
}
const users: IUser[] = [
  { name: 'b', id: 2, age: 20 },
  { name: 'a', id: 1, age: 10 },
  { name: 'c', id: 3, age: 5 },
  { name: 'd', id: 4, age: 40 },
  { name: 'e', id: 5, age: 50 },
  { name: 'f', id: 6, age: 60 },
];

export function lodashTutorial() {
  sortedUsers = _.sortBy(users, (user) => {
    return user.id + user.age;
  });
  console.log(sortedUsers);
}

let sortedUsers = _.sortBy(users, ['name', 'id']);
