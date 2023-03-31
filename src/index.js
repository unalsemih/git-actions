import user from './user.js';

const user1 = {
    name: 'John',
    surname: 'Doe',
    birthYear: 23,
};

console.log('Your fullname -> ', user.getFullName(user1));
console.log('Your age -> ', user.getAge(user1));
