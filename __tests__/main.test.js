const user = require('../src/user');

test('it should get full name of user', () => {
    const dummyUser = {
        name: 'John',
        surname: 'Doe',
    };

  expect(user.getFullName(dummyUser)).toBe('John Doe');
});

/*
test('it should get age of user', () => {
  const dummyUser = {
      name: 'Jane',
      surname: 'Doe',
      birthYear: 1990,
  };

  expect(user.getAge(dummyUser)).toBe(33);
});
*/