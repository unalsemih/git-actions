const user = require('../src/user');

test('it should get full name of user', () => {
    const dummyUser = {
        name: 'Jane',
        surname: 'Doe',
    };

  expect(user.getFullName(dummyUser)).toBe('John Doe');
});