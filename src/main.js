const user = require('./user');

const user1 = {
    name: 'John',
    surname: 'Doe',
    birthYear: 23,
};

console.log(user.getFullName(user1));
console.log(user.getAge(user1));
