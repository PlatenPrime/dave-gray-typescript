"use strict";
console.log("hello world");
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("John", new Date());
var arrNumber = [1, 2];
var arrNumber2 = ["1", "2"];
var myName = "Platen";
function greetNew(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
greetNew("John");
function double(num) {
    return num * 2;
}
var palletSome = function (pallet) {
    console.log(pallet.position);
    console.log(pallet.pieces);
};
