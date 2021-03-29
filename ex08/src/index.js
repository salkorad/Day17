// Lodash
const _ = require('lodash');

// Only change code below this line
// users nester array with four objects start here
var users = [
    { firstName: "John", lastName: "Doe", age: 24, gender: "male" },
    { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
    { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female"},
];

// users nested array with four objects ends here
// getUsers function - list of users starts here
function getUsers() {
    var outPut = "";
    
    let i = 0;
    while(i < users.length) {
       return outPut = `${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}`;
        i += 1;
            
    }
    
    }

// getUsers function - list of users ends here

// findUser(lastName, gender) function starts here
function findUser(lastName, gender) {
    try {
        var iFindUser = "";
        if(_.find(users, {lastName, gender})) {
           iFindUser = `${users.firstName} ${users.lastName} is ${users.age}, ${users.gender}`;
       }
        console.log("ss", iFindUser);
        return iFindUser;
  }
        
        // add appropriate code here
     catch (error) {
        return "Cannot read property 'firstName' of undefined"; // Change this line
        console.log(); // Change this line
    }
}
// findUser(lastName, gender) function ends here
// Only change code above this line
getUsers();
findUser("John", "Doe"); // Change this line

module.exports = findUser;