(()=>{var e={189:e=>{e.exports={getFullName:function(e){return e.name&&e.surname?`${e.name} ${e.surname}`:(console.error("Name or surname doesn't exists!"),"")},getAge:function(e){if(e.birthYear)return(new Date).getFullYear()-e.birthYear;console.error("Birthyear doesn't exists!")}}}},r={};function o(n){var t=r[n];if(void 0!==t)return t.exports;var a=r[n]={exports:{}};return e[n](a,a.exports,o),a.exports}(()=>{const e=o(189),r={name:"John",surname:"Doe",birthYear:23};window.userApi=e,console.log("Your fullname -> ",e.getFullName(r)),console.log("Your age -> ",e.getAge(r))})()})();