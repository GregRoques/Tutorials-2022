import User, {printName, printAge} from "/script.js";

//can change name of default, but not others
// only one default per export file
// if you wanted to change the names of non-default, you could do:
//import User, {printName as printUserName, printAge} from "/script.js";

const user = new User('Bob', 11)
console.log(user);
printName(userName) // prints "Users name is Bob"

