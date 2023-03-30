const user1 =  {
    name: 'John',
    surname: 'Doe'
};

const getFullName = function (user){
    return `${user.name} ${user.surname}`;
}

getFullName(user1);