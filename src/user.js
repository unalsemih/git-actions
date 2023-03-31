const getFullName = function (user) {
    if (user.name && user.surname) {
        return `${user.name} ${user.surname}`;
    }

    console.error('Name or surname doesn\'t exists!');

    return '';
};

const getAge = function (user) {
    if (!user.birthYear) {
        console.error('Birthyear doesn\'t exists!');

        return;
    }

    return new Date().getFullYear() - user.birthYear;
};

export default {
    getFullName,
    getAge
};