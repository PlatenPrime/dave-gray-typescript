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


let testAnyArray: any[]


testAnyArray = [1, "sfdsfs", {}]


// FUNCTIONS 


let sayHi = () => {
	console.log("Hi, welcome")
}

// sayHi = "suhgfr"


let funcReturnSring = (): string => {
	return "HUFd"
}


let multiple = (num: number): number => {
	return num*2
}


let sum = (num1: number, num2: number, another?: number): number => {
	return num1 + num2;
}

sum(2,3)

sum(2, 3, 4)


let func = (user: {username: string, age: number, phone?: string}) => {
	console.log(user.username)
}


//TYPE ALIASES 

type UserType = {
	username: string;
	age: number;
	phone?: string
}


let betterFunc = (user: UserType) => {
	console.log(user.username)
}


type myFunc = (a:number, b: string) => void


let write: myFunc = (num, str) => {
	console.log(num + " times" + str)
}

type  UserType2 = {
	username: string;
	age: number; 
	phone? : string;
	theme: "dark" | "light"
}


const userWithTheme : UserType2 = {
	username: "John",
	age: 45,
	theme: "light"
}


// INTERFACES

interface IUser {
	username: string;
	email: string;
	age: number;
}


interface IEmployee extends IUser {
	employeeId: number
}

const emp : IEmployee = {
	username: "jack",
	email: "jack@gmail.com",
	age: 43,
	employeeId: 1
}

const client : IUser = {
	username: "jack",
	email: "jack@gmail.com",
	age: 43,

}



// GENERICS 

interface IAuthor {
	id: number,
	username: string
}

interface ICategory {
	id: number,
	title: string
}



interface IPost {
	id: number;
	title: number;
	desc: string;
	extra: IAuthor[] | ICategory[]
}


interface IPostBetter<T> {
	id: number;
	title:string;
	desc: string;
	extra: T[]
}

const testMe : IPostBetter<String> = {
	id: 2,
	title: "Post 2",
	desc: "My post 2",
	extra: ["str1", "str2"]
}


interface IPostEvenBetter <T extends object> {
	id: number;
	title:string;
	desc: string;
	extra: T[]
}


const testMe2 : IPostEvenBetter <{id: number, username: string}> = {
		id: 2,
	title: "Post 2",
	desc: "My post 2",
	extra: [{id: 3, username: "UFHue"}]
}


const testMe3 : IPostEvenBetter <IAuthor> = {
		id: 2,
	title: "Post 2",
	desc: "My post 2",
	extra: [{id: 3, username: "UFHue"}]
}


const testMe4 : IPostEvenBetter <ICategory> = {
		id: 2,
	title: "Post 2",
	desc: "My post 2",
	extra: [{id: 3, title: "UFHue"}]
}