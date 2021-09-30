const student = require("./information.js");

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${student.nom}, from ${student.campus}`,
    e : "oO",
    T : "U "
}));