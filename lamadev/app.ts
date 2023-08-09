let variable = "hello"

variable = "hi"


let age = 18

// age = "ten"

let ageWithType: number = 22;

// ageWithType = "twenty"

ageWithType = 30

let testString = "hello"
let testBoolean: boolean;
testBoolean = true

let testStringOrNumber: string | number
testStringOrNumber = 10
testStringOrNumber = "gerg"


//ARRAY

let names = ["john", "mary", "tom"]

names.push("jacob")
// names.push(12)



let numbers = [23, 424, 32]

// numbers.push("3434")
numbers.push(3434)

let testStringArray: string[]

testStringArray = ["1", "3", "4"]


let testNumberArray: number[]

testNumberArray = [23, 34, 54]


let testStringOrNumberArray: (string | number)[]


testStringOrNumberArray = [1, "two", 3]


// OBJECTS

let user = {
	username: "John",
	age: 23,
	isAdmin: false
}

user.username = "jane"
// user.age = "sixteen"
// user.isAdmin = "no"
user.isAdmin = true

// user.phone = "+233423"


let userObj: {
	username: string,
	age: number,
	isAdmin: boolean,
	phone: string
}


userObj = {
	username: "john",
	age: 45,
	isAdmin: true,
	phone: "34232"
}

let userObj2: {
	username: string,
	age: number,
	isAdmin: boolean,
	phone?: string
}

userObj2 = {
	username: "Rina",
	age: 29,
	isAdmin: false,
	
}


// ANY

let testAny;

testAny = 12;
testAny = "twelve";
testAny = true


let testAnyArray : any[]


testAnyArray = [1, "sfdsfs", {}]


// FUNCTIONS 