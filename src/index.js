const user = require('./user');

const user1 = {
    name: 'John',
    surname: 'Doe',
    birthYear: 23,
};

window.userApi = user;

console.log('Your fullname -> ', user.getFullName(user1));
console.log('Your age -> ', user.getAge(user1));

console.log('test-branch-created');