const getFullName = function (user){
    return `${user.name} ${user.surname}`;
};

const getAge = function (user){
    return new Date().getFullYear() - user.birthYear;
};

module.exports = {
    getFullName,
    getAge
};
